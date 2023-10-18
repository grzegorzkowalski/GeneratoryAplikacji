using FilmDB.Models;
using Microsoft.AspNetCore.Mvc;

namespace FilmDB.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private WeatherContext _weatherContext;

        public WeatherForecastController(ILogger<WeatherForecastController> logger , WeatherContext weatherContext)
        {
            _logger = logger;
            _weatherContext = weatherContext;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            //return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            //{
            //    Date = DateTime.Now.AddDays(index),
            //    TemperatureC = Random.Shared.Next(-20, 55),
            //    Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            //})
            //.ToArray();
            return _weatherContext.WeatherForecasts.ToList();
        }

        [HttpPost(Name = "AddWeatherForecast")]
        public IActionResult Add(WeatherForecast weatherForecast)
        {
            weatherForecast.Date = DateTime.Now;
            if (ModelState.IsValid) 
            {
                _weatherContext.Add(weatherForecast);
                _weatherContext.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest();
            }

        }
    }
}