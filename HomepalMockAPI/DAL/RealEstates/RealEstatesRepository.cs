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

        /* Returns all fields on all Buildings */
        public async Task<IEnumerable<RealEstate>> Get()
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.QueryAsync<RealEstate>("SELECT * FROM RealEstates;");
        }

        /* Returns all fields on a RealEstate based on id */
        public async Task<RealEstate> Get(int id)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@RealEstateId", id, DbType.Int32, ParameterDirection.Input);

            return await connection.QuerySingleAsync<RealEstate>("SELECT * FROM RealEstates WHERE [RealEstateId] = @RealEstateId;", parameters);
        }

        /* Creates a new RealEstate. ID is generated by DB. 
           @Returns number of row affected. */
        public async Task<int> Create(RealEstate realEstate)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.ExecuteAsync("INSERT INTO RealEstates(RealEstateName, RegionName, OwnerId)" +
                "VALUES (@RealEstateName, @RegionName, @OwnerId);", realEstate);
        }

        /* Updates fields of a RealEstate based on ID.
           Can't update RegionName. Hard to move aparment complex.  
           @Returns number of row affected. */
        public async Task<int> Update(RealEstate realEstate)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            return await connection.ExecuteAsync("UPDATE RealEstates SET [RealEstateName] = @RealEstateName,  [OwnerId] = @OwnerId WHERE RealEstateId = @RealEstateId", realEstate);
        }

        /* Deletes a RealEstate based on id
           @Returns number of row affected. */
        public async Task<int> Delete(int id)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@RealEstateId", id, DbType.Int32, ParameterDirection.Input);

            return await connection.ExecuteAsync("DELETE FROM RealEstates WHERE [RealEstateId] = @RealEstateId;", parameters);
        }
    }
}