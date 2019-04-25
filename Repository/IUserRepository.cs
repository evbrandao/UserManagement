using System.Collections.Generic;
using UserManagement.Models;

namespace UserManagement.Repository
{
    public interface IUserRepository
    {
        User Find(int id);
        IEnumerable<User> FindAll();
        User Create(User user);
        void Update(int id, User user);
        void Remove(int id);
    }
}