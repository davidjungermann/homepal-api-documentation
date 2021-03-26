using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HomepalMockAPI.DAL;
using HomepalMockAPI.Models;
using Microsoft.AspNetCore.Cors;

namespace HomepalMockAPI.Controllers
{
    [ApiController]
    [EnableCors]
    public class AuthTokenController : ControllerBase
    {
        private readonly IAuthTokenRepository authTokenRepository;

        public AuthTokenController(IAuthTokenRepository authTokenRepository)
        {
            this.authTokenRepository = authTokenRepository;
        }
        // GET: api/<AuthTokenController>/id
        [Route("api/[controller]")]
        [HttpGet]
        public Task<AuthToken> Get()
        {
            return authTokenRepository.Get();
        }

        // GET: api/<AgentsController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<Validation> Validate(string authToken)
        {
            return await authTokenRepository.Validate(authToken);
        }
    }
}