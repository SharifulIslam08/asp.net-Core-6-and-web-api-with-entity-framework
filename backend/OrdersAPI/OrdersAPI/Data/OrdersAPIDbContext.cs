using Microsoft.EntityFrameworkCore;
using ProductsAPI.Models;

namespace OrdersAPI.Data
{
    public class OrdersAPIDbContext : DbContext
    {
        public OrdersAPIDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Order> Orders { get; set; }
    }
}
