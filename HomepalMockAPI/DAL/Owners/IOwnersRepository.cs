using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface IOwnersRepository
    {
        Task<IEnumerable<Owner>> Get(int limit, int offset, string sort);
        Task<Owner> GetSingle(int id);
        Task<int> Create(Owner owner);
        Task<int> Delete(int id);
    }
}