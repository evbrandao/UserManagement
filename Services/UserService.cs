using System;
using System.Collections.Generic;
using System.Linq;
using UserManagement.Models;

namespace UserManagement.Services
{
    public class UserService : IUserService
    {
        private IList<User> _users;

        public UserService()
        {
            _users = new List<User>();
        }

        public void Create(User user)
        {
            _users.Add(user);
        }

        public User Find(int id)
        {
            return _users.FirstOrDefault(u => u.Id.Equals(id));
        }

        public IEnumerable<User> FindAll()
        {
            return _users; //TODO: Return a new list
        }

        public void Remove(int id)
        {
            throw new NotImplementedException();
        }

        public void Update(User user)
        {
            throw new NotImplementedException();
        }
    }
}