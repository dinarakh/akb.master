using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using akb_master.server.Context;
using akb_master.server.Models;
using Microsoft.CodeAnalysis.CSharp.Syntax;

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
        [HttpPost("upload")]
        public async Task<IActionResult> UploadImage(IFormFile file)
        {

            if (file == null || file.Length == 0)
                return BadRequest("No file uploaded.");
            var imageGuid = Guid.NewGuid();
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images", $"{imageGuid}.jpg");

            var memoryStream = new MemoryStream();
            await file.CopyToAsync(memoryStream);
            byte[] byteArray = memoryStream.ToArray();

            //try
            //{
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                var image = new Image
                {
                    ImageGuid = imageGuid,
                    ByteImage = byteArray,
                };

                _context.Images.Add(image);
                await _context.SaveChangesAsync();


                return CreatedAtRoute("GetImageById", new { id = image.Id }, image);
            //}
            //catch (Exception exc)
            //{
            //    Console.WriteLine(exc);
            //}
            //return Ok();
        }

    }
}
