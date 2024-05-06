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
    public class ImagesController : Controller
    {
        private readonly ApplicationContextDb _context;

        public ImagesController(ApplicationContextDb context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetAllImages")]
        public IActionResult GetAllImages()
        {
            // Извлекаем все продукты из таблицы
            List<Image> images = _context.Images.ToList();

            if (images == null || images.Count == 0)
            {
                // Возвращаем HTTP 404 (Not Found), если список продуктов пуст
                return NotFound();
            }
            // Возвращаем список продуктов в формате JSON
            return Ok(images);
        }

        //POST
        [HttpPost(Name = "CreateImage")]
        public IActionResult CreateImage(ImageDto imageDto)
        {
            Image image = new Image
            {
                Id = imageDto.Id,
                Name = imageDto.Name
            };

            if (image == null)
            {
                // Возвращаем HTTP 400 (Bad Request), если данные категории некорректны
                return BadRequest();
            }

            // Добавляем категорию в контекст и сохраняем изменения в базе данных
            _context.Images.Add(image);
            _context.SaveChanges();

            // Возвращаем HTTP 201 (Created) и URL новой категории
            return CreatedAtRoute("GetImageById", new { id = image.Id }, image);
        }
        public class ImageDto
        {
            public int Id { get; set; }

            public string Name { get; set; }
        }

    }
}
