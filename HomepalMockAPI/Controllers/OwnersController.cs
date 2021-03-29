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
        public async Task<IEnumerable<Owner>> Get(int limit, int offset, string sort)
        {
            return await ownersRepository.Get(limit, offset, sort);
        }

        // GET: api/<OwnersController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<ActionResult<Owner>> GetSingle(int id)
        {
            var result = await ownersRepository.GetSingle(id);
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // POST api/<OwnersController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] Owner owner)
        {
            var result = await ownersRepository.Create(owner);

            if (result == 0)
            {
                return BadRequest();
            }
            return Created("", result);
        }

        // DELETE: api/<OwnersController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var result = await ownersRepository.Delete(id);

            if (result == 0)
            {
                return BadRequest();
            }
            return result;
        }
    }
}