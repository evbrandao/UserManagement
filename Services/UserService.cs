﻿using System;
using System.Collections.Generic;
using System.Linq;
using UserManagement.Models;

namespace UserManagement.Services
{
    public class UserService : IUserService
    {
        private IDictionary<int, User> _users;

        public UserService()
        {
            _users = new Dictionary<int, User>();
        }

        public void Create(User user)
        {
            user.Id = GenerateUserId();
            _users.Add(user.Id, user);
        }

        public User Find(int id)
        {
            User user;
            _users.TryGetValue(id, out user);

            return user;
        }

        public IEnumerable<User> FindAll()
        {
            return _users.Values.ToList();
        }

        public void Remove(int id)
        {
            if (UserExists(id))
            {
                _users.Remove(id);
            }
        }

        public void Update(int id, User user)
        {
            if (UserExists(id))
            {
                _users[id] = user;
            }
        }

        private bool UserExists(int id)
        {
            return _users.ContainsKey(id);
        }

        private int GenerateUserId()
        {
            return new Random().Next();
        }
    }
}