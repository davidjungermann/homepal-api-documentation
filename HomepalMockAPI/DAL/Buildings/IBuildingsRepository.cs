using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface IBuildingsRepository
    {
        Task<IEnumerable<Building>> Get(int limit, int offset, string sort);
        Task<Building> GetSingle(int id);
        Task<int> Create(Building building);
        Task<int> Update(Building building);
        Task<int> Delete(int id);
    }
}