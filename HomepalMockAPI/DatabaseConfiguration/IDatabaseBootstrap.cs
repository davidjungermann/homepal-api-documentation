using System.Data;

namespace HomepalMockAPI.DatabaseConfiguration
{
    public interface IDatabaseBootstrap
    {
        void SetupDbFromFile();

        void SetupDbInMemory();
    }
}