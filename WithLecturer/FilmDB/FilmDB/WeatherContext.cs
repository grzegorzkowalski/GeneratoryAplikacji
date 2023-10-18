using FilmDB.Models;
using Microsoft.EntityFrameworkCore;

namespace FilmDB
{
    public class WeatherContext : DbContext
    {
        public DbSet<WeatherForecast> WeatherForecasts { get; set; }
        public WeatherContext(DbContextOptions<WeatherContext> options)
            : base(options)
        {
        }
    }
}
