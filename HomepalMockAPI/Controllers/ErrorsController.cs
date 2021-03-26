using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using HomepalMockAPI.DAL;
using HomepalMockAPI.Models;
using Microsoft.AspNetCore.Cors;

namespace HomepalMockAPI.Controllers
{
    [ApiController]
    public class ErrorController : ControllerBase
    {
        [Route("/error")]
        public IActionResult Error() => Problem();
    }
}