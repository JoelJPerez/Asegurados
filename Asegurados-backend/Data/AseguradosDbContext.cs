using Microsoft.EntityFrameworkCore;
using Asegurados.Models;

namespace Asegurados.Data
{
    public class AseguradosDbContext : DbContext
    {
        public AseguradosDbContext(DbContextOptions<AseguradosDbContext> options) : base(options) { }

        public DbSet<Asegurado> Asegurados { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Asegurado>()
                .HasKey(a => a.NumeroIdentificacion);
        }
    }
}