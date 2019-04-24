using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserManagement.Models;
using UserManagement.Services;

namespace UserManagement.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _userService.FindAll();
        }

        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _userService.Find(id);
        }

        [HttpPost]
        public void Post([FromBody] User user)
        {
            _userService.Create(user);
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User user)
        {
            _userService.Update(user);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _userService.Remove(id);
        }
    }
}