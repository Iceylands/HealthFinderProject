using Microsoft.EntityFrameworkCore;

namespace HealthFinder.Models
{
    public class DoctorDB:DbContext
    {
        public  DoctorDB(DbContextOptions<DoctorDB> options):base(options)
        {

        }

        public DbSet<DoctorClass> Doctors { get; set; }
    }
}
