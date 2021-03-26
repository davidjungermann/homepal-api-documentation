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
        private static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[_random.Next(s.Length)]).ToArray());
        }

        /* Retrieves a random token */
        public AuthToken Get()
        {
            return new AuthToken { value = RandomString(50) };
        }
    }
}