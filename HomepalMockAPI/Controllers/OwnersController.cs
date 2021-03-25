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
    public class OwnersController : ControllerBase
    {
        private readonly IOwnersRepository ownersRepository;

        public OwnersController(IOwnersRepository ownersRepository)
        {
            this.ownersRepository = ownersRepository;
        }

        // GET: api/<OwnersController>
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IEnumerable<Owner>> Get(int limit, int offset)
        {
            return await ownersRepository.Get(limit, offset);
        }

        // GET: api/<OwnersController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<Owner> GetSingle(int id)
        {
            return await ownersRepository.GetSingle(id);
        }

        // POST api/<OwnersController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<int> Create([FromBody] Owner owner)
        {
            return await ownersRepository.Create(owner);
        }

        // DELETE: api/<OwnersController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await ownersRepository.Delete(id);
        }
    }
}