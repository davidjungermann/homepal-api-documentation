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
    public class CustomersController : ControllerBase
    {
        private readonly ICustomersRepository customersRepository;

        public CustomersController(ICustomersRepository customersRepository)
        {
            this.customersRepository = customersRepository;
        }

        // GET: api/<CustomersController>
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<IEnumerable<Customer>> Get(int limit, int offset, string sort)
        {
            return await customersRepository.Get(limit, offset, sort);
        }

        // GET: api/<CustomersController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<ActionResult<Customer>> GetSingle(int id)
        {
            var result = await customersRepository.GetSingle(id);

            if (result == null)
            {
                return NotFound();
            }
            return result;
        }

        // POST api/<CustomersController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<ActionResult<int>> Create([FromBody] Customer customer)
        {
            var result = await customersRepository.Create(customer);
            if (result == 0)
            {
                return BadRequest();
            }
            return Created("", result);
        }

        // DELETE: api/<CustomersController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<ActionResult<int>> Delete(int id)
        {
            var result = await customersRepository.Delete(id);
            if (result == 0)
            {
                return BadRequest();
            }
            return result;
        }
    }
}