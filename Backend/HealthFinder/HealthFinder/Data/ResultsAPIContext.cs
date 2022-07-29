using HealthFinder.Models;
using Microsoft.EntityFrameworkCore;

namespace HealthFinder.Data
{
    public class ResultsAPIContext : DbContext
    {
        public DbSet<DocResults> Web_Results { get; set; }
        public ResultsAPIContext(DbContextOptions<ResultsAPIContext> options):
            base(options)
        {
            
        }
    }
}
