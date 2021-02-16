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
        public async Task<IEnumerable<Customer>> Get()
        {
            return await customersRepository.Get();
        }

        // GET: api/<CustomersController>/id
        [Route("api/[controller]/{id}")]
        [HttpGet]
        public async Task<Customer> Get(int id)
        {
            return await customersRepository.Get(id);
        }

        // POST api/<CustomersController>
        [Route("api/[controller]")]
        [HttpPost]
        public async Task<int> Create([FromBody] Customer customer)
        {
            return await customersRepository.Create(customer);
        }

        // DELETE: api/<CustomersController>/id
        [Route("api/[controller]/{id}")]
        [HttpDelete]
        public async Task<int> Delete(int id)
        {
            return await customersRepository.Delete(id);
        }
    }
}