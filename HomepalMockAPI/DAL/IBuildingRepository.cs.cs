using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface IBuildingRepository
    {
        Task<IEnumerable<Building>> Get();
        Task<Building> Get(int id);
        Task<int> Create(Building building);
        Task<int> Update(Building building);
        Task<int> Delete(int id);
    }
}