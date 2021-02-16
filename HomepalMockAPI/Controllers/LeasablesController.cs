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
        public async Task<IEnumerable<Leasable>> Get()
        {
            return await leasablesRepository.Get();
        }

        // GET: api/<LeasablesController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<Leasable> Get(int id)
        {
            return await leasablesRepository.Get(id);
        }

        // POST api/<LeasablesController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<int> Create([FromBody] Leasable building)
        {
            return await leasablesRepository.Create(building);
        }

        // PUT api/<LeasablesController>
        [Route("api/[controller]")]
        [HttpPut]
        public async Task<int> Update([FromBody] Leasable building)
        {
            return await leasablesRepository.Update(building);
        }

        // DELETE: api/<LeasablesController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await leasablesRepository.Delete(id);
        }
    }
}