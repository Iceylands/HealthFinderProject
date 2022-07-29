using HealthFinder.Models;
using Microsoft.EntityFrameworkCore;

namespace HealthFinder.Data
{
    public class DoctorDB : DbContext
    {
        public DoctorDB(DbContextOptions<DoctorDB> options) : base(options)
        {

        }

        public DbSet<DoctorClass> Doctors { get; set; }
    }
}
