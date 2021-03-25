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
        public async Task<IEnumerable<Region>> Get(int limit, int offset)
        {
            return await regionsRepository.Get(limit, offset);
        }

        // POST api/<RegionsController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<int> Create([FromBody] Region region)
        {
            return await regionsRepository.Create(region);
        }

        // DELETE: api/<RegionsController>/id
        [Route("api/[controller]/{name}")]
        [HttpDelete]
        public async Task<int> Delete(string name)
        {
            return await regionsRepository.Delete(name);
        }
    }
}