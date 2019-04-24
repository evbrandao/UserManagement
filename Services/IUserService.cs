using System.Collections.Generic;
using UserManagement.Models;

namespace UserManagement.Services
{
    public interface IUserService
    {
        User Find(int id);
        IEnumerable<User> FindAll();
        void Create(User user);
        void Update(User user);
        void Remove(int id);
    }
}