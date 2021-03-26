using Dapper;
using Microsoft.Data.Sqlite;
using HomepalMockAPI.DatabaseConfiguration;
using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System;

namespace HomepalMockAPI.DAL
{
    public class AuthTokenRepository : IAuthTokenRepository
    {
        private static Random _random = new Random();
        private readonly DatabaseConfig databaseConfig;

        public AuthTokenRepository(DatabaseConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }
        private static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[_random.Next(s.Length)]).ToArray());
        }

        /* Retrieves a random token */
        public async Task<AuthToken> Get()
        {
            AuthToken authToken = new AuthToken { value = RandomString(50) };
            await Create(authToken);
            return authToken;
        }

        /* Retrieves a random token */
        public async Task<Validation> Validate(string authToken)
        {
            return new Validation { IsValid = true };
        }

        /* Adds a generated token to database
           @Returns number of row affected. */
        public async Task<int> Create(AuthToken authToken)
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            return await connection.ExecuteAsync("INSERT INTO AuthTokens (value)" +
                "VALUES (@value);", authToken);
        }
    }
}