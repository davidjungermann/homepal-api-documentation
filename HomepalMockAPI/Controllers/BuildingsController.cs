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
    public class BuildingsController : ControllerBase
    {
        private readonly IBuildingsRepository buildingRepository;

        public BuildingsController(IBuildingsRepository buildingRepository)
        {
            this.buildingRepository = buildingRepository;
        }

        // GET: api/<BuildingsController>
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IEnumerable<Building>> Get(int limit, int offset)
        {
            return await buildingRepository.Get(limit, offset);
        }

        // GET: api/<BuildingsController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<Building> GetSingle(int id)
        {
            return await buildingRepository.GetSingle(id);
        }

        // POST api/<BuildingsController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<int> Create([FromBody] Building building)
        {
            return await buildingRepository.Create(building);
        }

        // PUT api/<BuildingsController>
        [Route("api/[controller]")]
        [HttpPut]
        public async Task<int> Update([FromBody] Building building)
        {
            return await buildingRepository.Update(building);
        }

        // DELETE: api/<BuildingsController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await buildingRepository.Delete(id);
        }
    }
}