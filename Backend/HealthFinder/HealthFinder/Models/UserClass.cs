using System.ComponentModel.DataAnnotations;

namespace HealthFinder.Models
{
    public class UserClass
    {
        [Key]
        public int UserID { get; set; }
        [Required]
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? email { get; set; }
        public bool? Has_Insurance { get; set; }
        public string? Med_History { get; set; }
        public bool? is_admin { get; set; }
        public bool? is_activated { get; set; }
    }
}
