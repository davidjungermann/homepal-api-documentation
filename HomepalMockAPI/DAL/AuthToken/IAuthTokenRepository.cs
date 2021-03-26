using HomepalMockAPI.Models;
using System.Threading.Tasks;
namespace HomepalMockAPI.DAL
{
    public interface IAuthTokenRepository
    {
        Task<AuthToken> Get();
        Task<int> Create(AuthToken authToken);
    }
}