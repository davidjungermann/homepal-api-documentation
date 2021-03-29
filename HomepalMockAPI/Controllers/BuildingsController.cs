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
        public async Task<IEnumerable<Building>> Get(int limit, int offset, string sort)
        {
            return await buildingRepository.Get(limit, offset, sort);
        }

        // GET: api/<BuildingsController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<ActionResult<Building>> GetSingle(int id)
        {
            var result = await buildingRepository.GetSingle(id);

            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // POST api/<BuildingsController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] Building building)
        {
            var result = await buildingRepository.Create(building);

            if (result == 0)
            {
                return BadRequest();
            }
            return Created("", result);
        }

        // PUT api/<BuildingsController>
        [Route("api/[controller]")]
        [HttpPut]
        public async Task<ActionResult<int>> Update([FromBody] Building building)
        {
            var result = await buildingRepository.Update(building);

            if (result == 0)
            {
                return BadRequest();
            }
            return result;
        }

        // DELETE: api/<BuildingsController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var result = await buildingRepository.Delete(id);

            if (result == 0)
            {
                return NotFound();
            }
            return result;
        }
    }
}