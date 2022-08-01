using System.ComponentModel.DataAnnotations;

namespace HealthFinder.Models
{
    public class DoctorClass
    {
        [Key]
        public int ID { get; set; }
        [Required]
        public string? Name { get; set; }
        public string? Specialty { get; set; }
        public short? Rating { get; set; }
        public string? Location { get; set; }
        public string? Languages { get; set; }
        public string? Info { get; set; }
    }
}
