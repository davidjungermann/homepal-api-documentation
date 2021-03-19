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
    public class AgentsRepository : IAgentsRepository
    {
        private readonly DatabaseConfig databaseConfig;

        public AgentsRepository(DatabaseConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }

        /* Returns all fields on all Agents */
        public async Task<IEnumerable<Agent>> Get()
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.QueryAsync<Agent>("SELECT * FROM Agents;");
        }

        /* Returns all fields on a Agent based on id */
        public async Task<Agent> Get(int id)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@id", id, DbType.Int32, ParameterDirection.Input);

            return await connection.QuerySingleAsync<Agent>("SELECT * FROM Agents WHERE [id] = @id;", parameters);
        }

        /* Creates a new Agent. ID is generated by DB. 
           @Returns number of row affected. */
        public async Task<int> Create(Agent agent)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.ExecuteAsync("INSERT INTO Agents (name)" +
                "VALUES (@name);", agent);
        }

        /* Updates fields of a Agent based on ID. 
           @Returns number of row affected. */
        public async Task<int> Update(Agent agent)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            return await connection.ExecuteAsync("UPDATE Agents SET [name] = @name WHERE id = @id", agent);
        }

        /* Deletes a Agent based on id
           @Returns number of row affected. */
        public async Task<int> Delete(int id)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);
            var parameters = new DynamicParameters();
            parameters.Add("@id", id, DbType.Int32, ParameterDirection.Input);

            return await connection.ExecuteAsync("DELETE FROM Agents WHERE [id] = @id;", parameters);
        }
    }
}