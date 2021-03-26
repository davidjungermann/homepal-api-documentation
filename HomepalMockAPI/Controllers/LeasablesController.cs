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
    public class LeasablesController : ControllerBase
    {
        private readonly ILeasablesRepository leasablesRepository;

        public LeasablesController(ILeasablesRepository leasablesRepository)
        {
            this.leasablesRepository = leasablesRepository;
        }

        // GET: api/<LeasablesController>
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IEnumerable<Leasable>> Get(int limit, int offset, string sort)
        {
            return await leasablesRepository.Get(limit, offset, sort);
        }

        // GET: api/<LeasablesController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<ActionResult<Leasable>> GetSingle(int id)
        {
            var result = await leasablesRepository.GetSingle(id);

            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // POST api/<LeasablesController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] Leasable building)
        {
            var result = await leasablesRepository.Create(building);

            if (result == 0)
            {
                return BadRequest();
            }
            return result;
        }

        // PUT api/<LeasablesController>
        [Route("api/[controller]")]
        [HttpPut]
        public async Task<ActionResult<int>> Update([FromBody] Leasable building)
        {
            var result = await leasablesRepository.Update(building);

            if (result == 0)
            {
                return BadRequest();
            }
            return result;
        }

        // DELETE: api/<LeasablesController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var result = await leasablesRepository.Delete(id);

            if (result == 0)
            {
                return NotFound();
            }
            return result;
        }
    }
}