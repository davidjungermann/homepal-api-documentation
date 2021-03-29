using Dapper;
using Microsoft.Data.Sqlite;
using HomepalMockAPI.DatabaseConfiguration;
using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System;
using System.Diagnostics;

namespace HomepalMockAPI.DAL
{
    public class RealEstatesRepository : IRealEstatesRepository
    {
        private readonly DatabaseConfig databaseConfig;

        public RealEstatesRepository(DatabaseConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }

        private Boolean _IsTable(IEnumerable<dynamic> tables, string sort)
        {
            foreach (var item in tables)
            {
                if (item.name.Equals(sort))
                {
                    return true;
                }
            }
            return false;
        }

        private Boolean _IsDesc(string sort)
        {
            return sort.StartsWith("-");
        }

        private string _FormatSortParam(string sort)
        {
            return sort.Substring(1);
        }

        /* Returns all fields on all Buildings */
        public async Task<IEnumerable<RealEstate>> Get(int limit, int offset, string sort)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@limit", limit, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@offset", offset, DbType.Int32, ParameterDirection.Input);
            string sortString = " ";

            if (!String.IsNullOrEmpty(sort))
            {
                var tables = await connection.QueryAsync("PRAGMA table_info(RealEstates);");
                // OM vi inte har minus framför, och den är en tabell. Sortera som vanligt!
                if (!_IsDesc(sort) && _IsTable(tables, sort))
                {
                    sortString = " ORDER BY " + sort + " ";
                }
                else if (_IsDesc(sort))
                {
                    sort = _FormatSortParam(sort);
                    if (_IsTable(tables, sort))
                    {
                        sortString = " ORDER BY " + sort + " DESC ";
                    }

                }
            }

            if (limit != 0 && offset != 0)
            {
                return await connection.QueryAsync<RealEstate>("SELECT * FROM RealEstates" + sortString + "LIMIT @limit OFFSET @offset", parameters);
            }
            else if (limit != 0 && offset == 0)
            {
                return await connection.QueryAsync<RealEstate>("SELECT * FROM RealEstates" + sortString + "LIMIT @limit", parameters);
            }
            else if (offset != 0 && limit == 0)
            {
                return await connection.QueryAsync<RealEstate>("SELECT * FROM RealEstates" + sortString + "LIMIT -1 OFFSET @offset", parameters);
            }
            else
            {
                return await connection.QueryAsync<RealEstate>("SELECT * FROM RealEstates" + sortString + "LIMIT 10");
            }

        }

        /* Returns all fields on a RealEstate based on id */
        public async Task<RealEstate> GetSingle(int id)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@id", id, DbType.Int32, ParameterDirection.Input);
            try
            {
                return await connection.QuerySingleAsync<RealEstate>("SELECT * FROM RealEstates WHERE [id] = @id;", parameters);
            }

            catch (Exception)
            {
                return null;
            }
        }

        /* Creates a new RealEstate. ID is generated by DB. 
           @Returns number of row affected. */
        public async Task<int> Create(RealEstate realEstate)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.ExecuteAsync("INSERT INTO RealEstates(name, region_name, owner_id)" +
                "VALUES (@name, @region_name, @owner_id);", realEstate);
        }

        /* Updates fields of a RealEstate based on ID.
           Can't update region_name. Hard to move aparment complex.  
           @Returns number of row affected. */
        public async Task<int> Update(RealEstate realEstate)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            return await connection.ExecuteAsync("UPDATE RealEstates SET [name] = @name,  [owner_id] = @owner_id WHERE real_estate_id = @real_estate_id", realEstate);
        }

        /* Deletes a RealEstate based on id
           @Returns number of row affected. */
        public async Task<int> Delete(int id)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@real_estate_id", id, DbType.Int32, ParameterDirection.Input);

            return await connection.ExecuteAsync("DELETE FROM RealEstates WHERE [real_estate_id] = @real_estate_id;", parameters);
        }
    }
}