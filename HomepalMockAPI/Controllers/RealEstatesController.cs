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
        public async Task<IEnumerable<RealEstate>> Get()
        {
            return await realEstatesRepository.Get();
        }

        // GET: api/<RealEstatesController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<RealEstate> Get(int id)
        {
            return await realEstatesRepository.Get(id);
        }

        // POST api/<RealEstatesController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<int> Create([FromBody] RealEstate realEstate)
        {
            return await realEstatesRepository.Create(realEstate);
        }

        // PUT api/<RealEstatesController>
        [Route("api/[controller]")]
        [HttpPut]
        public async Task<int> Update([FromBody] RealEstate realEstate)
        {
            return await realEstatesRepository.Update(realEstate);
        }

        // DELETE: api/<RealEstatesController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await realEstatesRepository.Delete(id);
        }
    }
}