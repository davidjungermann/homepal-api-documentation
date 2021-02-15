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
    public class BuildingController : ControllerBase
    {
        private readonly IBuildingRepository buildingRepository;

        public BuildingController(IBuildingRepository buildingRepository)
        {
            this.buildingRepository = buildingRepository;
        }

        // GET: api/<BuildingController>
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IEnumerable<Building>> Get()
        {
            return await buildingRepository.Get();
        }

        // GET: api/<BuildingController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<Building> Get(int id)
        {
            return await buildingRepository.Get(id);
        }

        // POST api/<BuildingController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<int> Create([FromBody] Building building)
        {
            return await buildingRepository.Create(building);
        }

        // PUT api/<BuildingController>
        [Route("api/[controller]")]
        [HttpPut]
        public async Task<int> Update([FromBody] Building building)
        {
            return await buildingRepository.Update(building);
        }

        // DELETE: api/<BuildingController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await buildingRepository.Delete(id);
        }
    }
}