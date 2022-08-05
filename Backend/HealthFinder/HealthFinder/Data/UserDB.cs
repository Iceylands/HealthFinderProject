using HealthFinder.Models;
using Microsoft.EntityFrameworkCore;

namespace HealthFinder.Data
{
    public class UserDB:DbContext
    {
        public UserDB(DbContextOptions<UserDB> options) : base(options)
        {

        }

        public DbSet<UserClass> Users { get; set; }
    }
}
