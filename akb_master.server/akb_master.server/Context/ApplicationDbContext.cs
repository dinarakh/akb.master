using Microsoft.EntityFrameworkCore;
using akb_master.server.Models;
using System;

namespace akb_master.server.Context
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Description> Descriptions { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<Image> Images { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Description>()
                .HasMany(p => p.Products)
                .WithOne(d => d.Description)
                .HasForeignKey(d => d.DescriptionId);

            modelBuilder.Entity<Category>()
                .HasMany(p => p.Products)
                .WithOne(c => c.Category)
                .HasForeignKey(c => c.CategoryId);

            modelBuilder.Entity<ProductImage>()
                .HasKey(pi => new { pi.ProductId, pi.ImageId });

            modelBuilder.Entity<Product>()
                .HasMany(pi => pi.ProductImages)
                .WithOne(p => p.Product)
                .HasForeignKey(p => p.ProductId);

            modelBuilder.Entity<Image>()
                .HasMany(pi => pi.ProductImages)
                .WithOne(i => i.Image)
                .HasForeignKey(i => i.ImageId);
        }

    }
}
