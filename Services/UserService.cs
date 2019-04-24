using System.Collections.Generic;
using UserManagement.Models;
using UserManagement.Repository;

namespace UserManagement.Services
{
    public class UserService : IUserService
    {
        private IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public void Create(User user)
        {
            _userRepository.Create(user);
        }

        public User Find(int id)
        {
            return _userRepository.Find(id);
        }

        public IEnumerable<User> FindAll()
        {
            return _userRepository.FindAll();
        }

        public void Remove(int id)
        {
            _userRepository.Remove(id);
        }

        public void Update(int id, User user)
        {
            _userRepository.Update(id, user);
        }
    }
}