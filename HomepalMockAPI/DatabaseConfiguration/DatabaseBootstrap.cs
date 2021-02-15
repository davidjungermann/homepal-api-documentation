using Dapper;
using Microsoft.Data.Sqlite;
using System.Linq;
using System.Data;

namespace HomepalMockAPI.DatabaseConfiguration
{
    public class DatabaseBootstrap : IDatabaseBootstrap
    {
        private readonly DatabaseConfig databaseConfig;

        public DatabaseBootstrap(DatabaseConfig databaseConfig)
        {
            this.databaseConfig = databaseConfig;
        }

        public void SetupDbFromFile()
        {
            using var connection = new SqliteConnection(databaseConfig.Name);

            var table = connection.Query<string>("SELECT name FROM sqlite_master WHERE type='table' AND name = 'Buildings';");
            var tableName = table.FirstOrDefault();
            if (!string.IsNullOrEmpty(tableName) && tableName == "Buildings")
                return;
        }

        public void SetupDbInMemory()
        {
            using var connection = new SqliteConnection("Data Source=:memory:");

            var table = connection.Query<string>("SELECT name FROM sqlite_master WHERE type='table' AND name = 'Buildings';");
            var tableName = table.FirstOrDefault();
            if (!string.IsNullOrEmpty(tableName) && tableName == "Buildings")
                return;
        }

    }
}