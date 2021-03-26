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
    public class RegionsController : ControllerBase
    {
        private readonly IRegionsRepository regionsRepository;

        public RegionsController(IRegionsRepository regionsRepository)
        {
            this.regionsRepository = regionsRepository;
        }

        // GET: api/<RegionsController>
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IEnumerable<Region>> Get(int limit, int offset, string sort)
        {
            return await regionsRepository.Get(limit, offset, sort);
        }

        // POST api/<RegionsController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] Region region)
        {
            var result = await regionsRepository.Create(region);

            if (result == 0)
            {
                return BadRequest();
            }
            return result;
        }

        // DELETE: api/<RegionsController>/id
        [Route("api/[controller]/{name}")]
        [HttpDelete]
        public async Task<ActionResult<int>> Delete(string name)
        {
            var result = await regionsRepository.Delete(name);
            
            if (result == 0)
            {
                return NotFound();
            }
            return result;
        }
    }
}