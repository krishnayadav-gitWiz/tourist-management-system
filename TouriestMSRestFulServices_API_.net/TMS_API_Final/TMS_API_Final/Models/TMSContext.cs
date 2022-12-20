using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace TMS_API_Final.Models
{
    public partial class TMSContext : DbContext
    {
        public TMSContext()
        {
        }

        public TMSContext(DbContextOptions<TMSContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Country> Countries { get; set; }
        public virtual DbSet<Tourist> Tourists { get; set; }

//        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//        {
//            if (!optionsBuilder.IsConfigured)
//            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
//                optionsBuilder.UseSqlServer("Data Source=IMCVBCP133-MSL2\\SQLEXPRESS2019;Initial Catalog=TMS;User ID=sa;Password=Password_123");
//            }
//        }

//        protected override void OnModelCreating(ModelBuilder modelBuilder)
//        {
//            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

//            modelBuilder.Entity<Country>(entity =>
//            {
//                entity.Property(e => e.CountryId).HasColumnName("CountryID");

//                entity.Property(e => e.CountryName)
//                    .IsRequired()
//                    .HasMaxLength(40);
//            });

//            modelBuilder.Entity<Tourist>(entity =>
//            {
//                entity.Property(e => e.TouristId).HasColumnName("TouristID");

//                entity.Property(e => e.CountryId).HasColumnName("CountryID");

//                entity.Property(e => e.DateOfArrival).HasColumnType("smalldatetime");

//                entity.Property(e => e.FirstName)
//                    .IsRequired()
//                    .HasMaxLength(20);

//                entity.Property(e => e.LastName)
//                    .IsRequired()
//                    .HasMaxLength(20);

//                entity.HasOne(d => d.Country)
//                    .WithMany(p => p.Tourists)
//                    .HasForeignKey(d => d.CountryId)
//                    .OnDelete(DeleteBehavior.SetNull)
//                    .HasConstraintName("FK__Tourists__Countr__38996AB5");
//            });

//            OnModelCreatingPartial(modelBuilder);
//        }

//        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
