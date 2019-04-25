using System.Collections.Generic;
using UserManagement.Models;

namespace UserManagement.Services
{
    public interface IUserService
    {
        User Find(int id);
        IEnumerable<User> FindAll();
        User Create(User user);
        void Update(int id, User user);
        void Remove(int id);
    }
}