using Microsoft.EntityFrameworkCore;

namespace ProductsAPI.Data
{
    public class OrdersAPIDbContext : DbContext
    {
        public OrdersAPIDbContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<> Orders { get; set; }
    }
}
