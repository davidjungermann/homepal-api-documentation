using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface IRegionsRepository
    {
        Task<IEnumerable<Region>> Get();
        Task<int> Create(Region region);
        Task<int> Delete(string name);
    }
}