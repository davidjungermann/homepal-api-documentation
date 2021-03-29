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
    public class RealEstatesController : ControllerBase
    {
        private readonly IRealEstatesRepository realEstatesRepository;

        public RealEstatesController(IRealEstatesRepository realEstatesRepository)
        {
            this.realEstatesRepository = realEstatesRepository;
        }

        // GET: api/<RealEstatesController>
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IEnumerable<RealEstate>> Get(int limit, int offset, string sort)
        {
            return await realEstatesRepository.Get(limit, offset, sort);
        }

        // GET: api/<RealEstatesController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<ActionResult<RealEstate>> GetSingle(int id)
        {
            var result = await realEstatesRepository.GetSingle(id);
            
            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // POST api/<RealEstatesController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] RealEstate realEstate)
        {
            var result = await realEstatesRepository.Create(realEstate);

            if (result == 0)
            {
                return BadRequest();
            }
            return result;
        }

        // PUT api/<RealEstatesController>
        [Route("api/[controller]")]
        [HttpPut]
        public async Task<ActionResult<int>> Update([FromBody] RealEstate realEstate)
        {
            var result = await realEstatesRepository.Update(realEstate);
            if (result == 0)
            {
                return BadRequest();
            }
            return result;
        }

        // DELETE: api/<RealEstatesController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var result = await realEstatesRepository.Delete(id);

            if (result == 0)
            {
                return NotFound();
            }
            return result;
        }
    }
}