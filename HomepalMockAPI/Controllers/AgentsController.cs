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
        /// <remarks>Agents are blablabla</remarks>
        /// <response code="200">Retrieved Agents</response>
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IEnumerable<Agent>> Get()
        {
            return await agentsRepository.Get();
        }

        // GET: api/<AgentsController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<Agent> Get(int id)
        {
            return await agentsRepository.Get(id);
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