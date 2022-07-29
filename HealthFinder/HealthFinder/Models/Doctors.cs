using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity.Dbcontext;
using System.Threading.Tasks;

namespace HealthFinder.Models
{
    public class Doctors
    {
    }
    public class UniContext : DbContext
    {
        public UniContext() : base("UniContext") { }
        public DbSet<Student> Students { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}
