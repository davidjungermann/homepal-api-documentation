using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface ILeasablesRepository
    {
        Task<IEnumerable<Leasable>> Get();
        Task<Leasable> Get(int id);
        Task<int> Create(Leasable leasable);
        Task<int> Update(Leasable leasable);
        Task<int> Delete(int id);
    }
}