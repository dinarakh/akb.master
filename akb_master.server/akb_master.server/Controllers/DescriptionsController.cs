using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using akb_master.server.Context;
using akb_master.server.Models;

namespace akb_master.server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DescriptionsController : Controller
    {
        private readonly ApplicationContextDb _context;

        public DescriptionsController(ApplicationContextDb context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetAllDescriptions")]
        public IActionResult GetAllDescriptions()
        {
            // Извлекаем все продукты из таблицы
            List<Description> descriptions = _context.Descriptions.ToList();

            if (descriptions == null || descriptions.Count == 0)
            {
                // Возвращаем HTTP 404 (Not Found), если список продуктов пуст
                return NotFound();
            }
            // Возвращаем список продуктов в формате JSON
            return Ok(descriptions);
        }

        //POST
        [HttpPost(Name = "CreateDescriptions")]
        public IActionResult CreateDescriptions(DescriptionsDto descriptionsDto)
        {
            Description description= new Description
            {
                Country = descriptionsDto.Country,
                Polarity = descriptionsDto.Polarity,
                Dimensions  = descriptionsDto.Dimensions,
                Capacity = descriptionsDto.Capacity,
                Starting_current = descriptionsDto.Starting_current,
                Performance = descriptionsDto.Performance,
                Guarantee = descriptionsDto.Guarantee
            };

            if (description == null)
            {
                // Возвращаем HTTP 400 (Bad Request), если данные категории некорректны
                return BadRequest();
            }

            // Добавляем категорию в контекст и сохраняем изменения в базе данных
            _context.Descriptions.Add(description);
            _context.SaveChanges();

            // Возвращаем HTTP 201 (Created) и URL новой категории
            return CreatedAtRoute("GetDescriptionsById", new { id = description.Id }, description);
        }
        public class DescriptionsDto
        {
            public string Country { get; set; }
            public string Polarity { get; set; }
            public string Dimensions { get; set; }
            public string Capacity { get; set; }
            public string Starting_current { get; set; }
            public string Performance { get; set; }
            public string Guarantee { get; set;}

        }

    }
}
