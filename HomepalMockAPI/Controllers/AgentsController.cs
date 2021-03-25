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
    public class AgentsController : ControllerBase
    {
        private readonly IAgentsRepository agentsRepository;

        public AgentsController(IAgentsRepository agentsRepository)
        {
            this.agentsRepository = agentsRepository;
        }

        // GET: api/<AgentsController>
        /// <summary>
        /// Retrieves all Agents
        /// </summary>
        /// <remarks>An Agent is a person or entity registered in the system.!!!! MEN MAN KAN SKRIVA MASSOR MED TEXT KANSKE <b>RÖV</b></remarks>
        /// <response code="200">Retrieved Agents</response>
        /// <response code="500">Internal Server Error</response>
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IEnumerable<Agent>> Get(int limit, int offset, string sort)
        {
            return await agentsRepository.Get(limit, offset, sort);
        }

        // GET: api/<AgentsController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<Agent> GetSingle(int id)
        {
            return await agentsRepository.GetSingle(id);
        }

        // POST api/<AgentsController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<int> Create([FromBody] Agent agent)
        {
            return await agentsRepository.Create(agent);
        }

        // PUT api/<AgentsController>
        [Route("api/[controller]")]
        [HttpPut]
        public async Task<int> Update([FromBody] Agent agent)
        {
            return await agentsRepository.Update(agent);
        }

        // DELETE: api/<AgentsController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await agentsRepository.Delete(id);
        }
    }
}