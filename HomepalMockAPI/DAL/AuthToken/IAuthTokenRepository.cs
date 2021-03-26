using HomepalMockAPI.Models;
using System.Threading.Tasks;
namespace HomepalMockAPI.DAL
{
    public interface IAuthTokenRepository
    {
        Task<AuthToken> Get();
        Task<Validation> Validate(string value);
        Task<int> Create(AuthToken authToken);
    }
}