using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface IRegionsRepository
    {
        Task<IEnumerable<Region>> Get(int offset, int limit, string sort);
        Task<int> Create(Region region);
        Task<int> Delete(string name);
    }
}