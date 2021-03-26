using HomepalMockAPI.Models;

namespace HomepalMockAPI.DAL
{
    public interface IAuthTokenRepository
    {
        AuthToken Get();
    }
}