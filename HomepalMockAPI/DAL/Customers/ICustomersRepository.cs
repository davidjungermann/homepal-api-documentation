using System.Threading.Tasks;
using HomepalMockAPI.Models;
using System.Collections.Generic;

namespace HomepalMockAPI.DAL
{
    public interface ICustomersRepository
    {
        Task<IEnumerable<Customer>> Get();
        Task<Customer> Get(int id);
        Task<int> Create(Customer customer);
        Task<int> Delete(int id);
    }
}