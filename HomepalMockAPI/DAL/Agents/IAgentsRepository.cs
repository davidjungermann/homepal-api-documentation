using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface IAgentsRepository
    {
        Task<IEnumerable<Agent>> Get();
        Task<Agent> Get(int id);
        Task<int> Create(Agent agent);
        Task<int> Update(Agent agent);
        Task<int> Delete(int id);
    }
}