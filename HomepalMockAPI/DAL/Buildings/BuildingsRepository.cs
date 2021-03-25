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
    public class BuildingsRepository : IBuildingsRepository
    {
        private readonly DatabaseConfig databaseConfig;

        public BuildingsRepository(DatabaseConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }

        /* Returns all fields on all Buildings */
        public async Task<IEnumerable<Building>> Get(int limit, int offset)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.QueryAsync<Building>("SELECT * FROM Buildings;");
        }

        /* Returns all fields on a Building based on id */
        public async Task<Building> GetSingle(int id)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@id", id, DbType.Int32, ParameterDirection.Input);

            return await connection.QuerySingleAsync<Building>("SELECT * FROM Buildings WHERE [id] = @id;", parameters);
        }

        /* Creates a new Building. ID is generated by DB. 
           @Returns number of row affected. */
        public async Task<int> Create(Building building)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.ExecuteAsync("INSERT INTO Buildings (class_descriptor, street_name, street_number, postal_code, real_estate_id)" +
                "VALUES (@class_descriptor, @street_name, @street_number, @postal_code, @real_estate_id);", building);
        }

        /* Updates fields of a Building based on ID. 
           @Returns number of row affected. */
        public async Task<int> Update(Building building)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            return await connection.ExecuteAsync("UPDATE Buildings SET [class_descriptor] = @class_descriptor, [street_name] = @street_name, [street_number] = @street_number, [postal_code] = @postal_code WHERE id = @id", building);
        }

        /* Deletes a Building based on id
           @Returns number of row affected. */
        public async Task<int> Delete(int id)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@id", id, DbType.Int32, ParameterDirection.Input);

            return await connection.ExecuteAsync("DELETE FROM Buildings WHERE [id] = @id;", parameters);
        }
    }
}