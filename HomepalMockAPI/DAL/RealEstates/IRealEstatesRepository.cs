using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface IRealEstatesRepository
    {
        Task<IEnumerable<RealEstate>> Get(int limit, int offset);
        Task<RealEstate> GetSingle(int id);
        Task<int> Create(RealEstate realEstate);
        Task<int> Update(RealEstate realEstate);
        Task<int> Delete(int id);
    }
}