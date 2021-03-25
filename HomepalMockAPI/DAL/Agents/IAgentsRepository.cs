using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface IAgentsRepository
    {
        Task<IEnumerable<Agent>> Get(int limit, int offset, string sort);
        Task<Agent> GetSingle(int id);
        Task<int> Create(Agent agent);
        Task<int> Update(Agent agent);
        Task<int> Delete(int id);
    }
}