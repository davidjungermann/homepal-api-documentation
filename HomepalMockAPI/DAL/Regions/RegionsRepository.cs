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
    public class RegionsRepository : IRegionsRepository
    {
        private readonly DatabaseConfig databaseConfig;

        public RegionsRepository(DatabaseConfig databaseConfig)
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

        /* Returns all fields on all Regions */
        public async Task<IEnumerable<Region>> Get(int limit, int offset, string sort)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@limit", limit, DbType.Int32, ParameterDirection.Input);
            parameters.Add("@offset", offset, DbType.Int32, ParameterDirection.Input);
            var isDesc = _IsDesc(sort);

            if (isDesc)
            {
                sort = _FormatSortParam(sort);
            }

            var tables = await connection.QueryAsync("PRAGMA table_info(Regions);");

            var isTable = _IsTable(tables, sort);

            if (_IsTable(tables, sort))
            {
                if (limit != 0 && offset != 0 && isTable)
                {
                    if (isDesc)
                    {
                        return await connection.QueryAsync<Region>("SELECT * FROM Regions ORDER BY " + sort + " DESC LIMIT @limit OFFSET @offset", parameters);
                    }
                    return await connection.QueryAsync<Region>("SELECT * FROM Regions ORDER BY " + sort + " LIMIT @limit OFFSET @offset", parameters);
                }
                else if (limit != 0 && offset == 0 && isTable)
                {
                    if (isDesc)
                    {
                        return await connection.QueryAsync<Region>("SELECT * FROM Regions ORDER BY " + sort + " DESC LIMIT @limit", parameters);
                    }
                    return await connection.QueryAsync<Region>("SELECT * FROM Regions ORDER BY " + sort + " LIMIT @limit", parameters);
                }
                else if (offset != 0 && limit == 0)
                {
                    if (isDesc)
                    {
                        return await connection.QueryAsync<Region>("SELECT * FROM Regions ORDER BY " + sort + " DESC LIMIT -1 OFFSET @offset", parameters);
                    }
                    return await connection.QueryAsync<Region>("SELECT * FROM Regions ORDER BY " + sort + " LIMIT -1 OFFSET @offset", parameters);
                }
                else
                {
                    if (isDesc)
                    {
                        return await connection.QueryAsync<Region>("SELECT * FROM Regions ORDER BY " + sort + " DESC LIMIT 10");
                    }
                    return await connection.QueryAsync<Region>("SELECT * FROM Regions ORDER BY " + sort + " LIMIT 10");
                }
            }
            else
            {
                return await connection.QueryAsync<Region>("SELECT * FROM Regions LIMIT 10");
            }

        }

        /* Creates a new Region.
           @Returns number of row affected. */
        public async Task<int> Create(Region region)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.ExecuteAsync("INSERT INTO Regions (name)" +
                "VALUES (@name);", region);
        }

        /* Deletes a Region based on name
           @Returns number of row affected. */
        public async Task<int> Delete(string name)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@name", name, DbType.Int32, ParameterDirection.Input);

            return await connection.ExecuteAsync("DELETE FROM Regions WHERE [name] = @name;", parameters);
        }
    }
}