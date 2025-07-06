using System.ComponentModel.DataAnnotations;

namespace MyFirstProject.Models
{
    public class Student
    {
        public int Id { get; set; }

        [Required]
        public required string Name { get; set; }

        public int Age { get; set; }

        [Required]
        public required string Course { get; set; }
    }
}
