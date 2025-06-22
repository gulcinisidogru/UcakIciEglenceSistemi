using ChildWare.api.Model;
using Microsoft.EntityFrameworkCore;

public class Context : DbContext
{
    public Context(DbContextOptions<Context> options) : base(options)
    {
    }

    public DbSet<ChildWareModel> ChildWareModels { get; set; }
}
