using Microsoft.EntityFrameworkCore;
using MyFirstProject.Models;
using System.Collections.Generic;

namespace MyFirstProject.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
    }
}
