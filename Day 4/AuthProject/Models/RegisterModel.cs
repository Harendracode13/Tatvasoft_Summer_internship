using System.ComponentModel.DataAnnotations;

namespace AuthProject.Models
{
    public class RegisterModel
    {
        [Required]
        public string Username { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        public string Role { get; set; } = "User";
    }
}
