using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HomepalMockAPI.DAL;
using HomepalMockAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using System;

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
        //[ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IEnumerable<Agent>> Get(int limit, int offset, string sort)
        {
            return await agentsRepository.Get(limit, offset, sort);
        }

        // GET: api/<AgentsController>/id
        // Task<ActionResult<IEnumerable<Agent>>>
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<ActionResult<Agent>> GetSingle(int id)
        {
            var result = await agentsRepository.GetSingle(id);

            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // POST api/<AgentsController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] Agent agent)
        {
            var result = await agentsRepository.Create(agent);

            if (result == 0)
            {
                return BadRequest();
            }
            return Created("", result);
        }

        // PUT api/<AgentsController>
        [Route("api/[controller]")]
        [HttpPut]
        public async Task<ActionResult<int>> Update([FromBody] Agent agent)
        {
            var result = await agentsRepository.Update(agent);

            if (result == 0)
            {
                return BadRequest();
            }
            return result;
        }

        // DELETE: api/<AgentsController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var result = await agentsRepository.Delete(id);

            if (result == 0)
            {
                return NotFound();
            }
            return result;
        }
    }
}