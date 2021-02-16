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
        public async Task<IEnumerable<Owner>> Get()
        {
            return await ownersRepository.Get();
        }

        // GET: api/<OwnersController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<Owner> Get(int id)
        {
            return await ownersRepository.Get(id);
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