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

        /* Returns all fields on all Regions */
        public async Task<IEnumerable<Region>> Get()
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.QueryAsync<Region>("SELECT * FROM Regions;");
        }

        /* Creates a new Region.
           @Returns number of row affected. */
        public async Task<int> Create(Region region)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.ExecuteAsync("INSERT INTO Regions (RegionName)" +
                "VALUES (@RegionName);", region);
        }

        /* Deletes a Region based on RegionName
           @Returns number of row affected. */
        public async Task<int> Delete(string name)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@RegionName", name, DbType.Int32, ParameterDirection.Input);

            return await connection.ExecuteAsync("DELETE FROM Regions WHERE [RegionName] = @RegionName;", parameters);
        }
    }
}