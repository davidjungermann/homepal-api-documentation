using HomepalMockAPI.Models;
using System.Threading.Tasks;
namespace HomepalMockAPI.DAL
{
    public interface IAuthTokenRepository
    {
        Task<AuthToken> Get();
        Task<Validation> Validate(string authToken);
        Task<int> Create(AuthToken authToken);
    }
}