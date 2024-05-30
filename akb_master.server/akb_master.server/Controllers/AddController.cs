using akb_master.server.Context;
using akb_master.server.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace akb_master.server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddProductController : ControllerBase
    {
        private readonly ApplicationContextDb _context;

        public AddProductController(ApplicationContextDb context)
        {
            _context = context;
        }

        [HttpPost(Name = "CreateProductAll")]
        public async Task<IActionResult> CreateProductAll([FromForm] ProductDto productDto, IFormFile file)
        {
            {
                if (productDto == null)
                {
                    return BadRequest("Invalid product data.");
                }

                if (file == null || file.Length == 0)
                {
                    return BadRequest("No file uploaded.");
                }

                // Создаем объект Description
                var description = new Description
                {
                    Country = productDto.Description.Country,
                    Polarity = productDto.Description.Polarity,
                    Dimensions = productDto.Description.Dimensions,
                    Capacity = productDto.Description.Capacity,
                    Starting_current = productDto.Description.Starting_current,
                    Performance = productDto.Description.Performance,
                    Guarantee = productDto.Description.Guarantee
                };

                // Добавляем описание в контекст
                _context.Descriptions.Add(description);
                await _context.SaveChangesAsync();

                // Создаем объект Product
                var product = new Product
                {
                    Name = productDto.Name,
                    Price = productDto.Price,
                    Price_Trade = productDto.Price_Trade,
                    CategoryId = productDto.CategoryId,
                    DescriptionId = description.Id // Связываем продукт с новым описанием
                };

                // Добавляем продукт в контекст
                _context.Products.Add(product);
                await _context.SaveChangesAsync();

                // Создаем объект Image
                var imageGuid = Guid.NewGuid();
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images", $"{imageGuid}.jpg");

                await using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                var memoryStream = new MemoryStream();
                await file.CopyToAsync(memoryStream);
                byte[] byteArray = memoryStream.ToArray();

                var image = new Image
                {
                    ImageGuid = imageGuid,
                    ByteImage = byteArray,
                };

                _context.Images.Add(image);
                await _context.SaveChangesAsync();

                // Создаем объект ProductImage
                var productImage = new ProductImage
                {
                    ProductId = product.Id,
                    ImageId = image.Id,
                };

                _context.ProductImages.Add(productImage);
                await _context.SaveChangesAsync();

                return CreatedAtRoute("GetProductById", new { id = product.Id }, product);
            }
        }

        public class ProductDto
        {
            public string Name { get; set; }
            public int Price { get; set; }
            public int Price_Trade { get; set; }
            public int CategoryId { get; set; }
            public DescriptionDto Description { get; set; }
        }

        public class DescriptionDto
        {
            public string Country { get; set; }
            public string Polarity { get; set; }
            public string Dimensions { get; set; }
            public string Capacity { get; set; }
            public string Starting_current { get; set; }
            public string Performance { get; set; }
            public string Guarantee { get; set; }
        }
    }
}
