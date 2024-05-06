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
    public class ProductsController : Controller
    {
        private readonly ApplicationContextDb _context;

        public ProductsController(ApplicationContextDb context)
        {
            _context = context;
        }

        // Проекция данных только на необходимые поля
        [HttpGet(Name = "GetProductsInfo")]
        public IActionResult GetProductsInfo()
        {
            var productsInfo = _context.Products
                .Select(p => new
                {   
                    Id = p.Id,
                    Name = p.Name,
                    Price = p.Price,
                    PriceTrade = p.Price_Trade,
                    CategoryId = p.CategoryId,
                    DescriptionId = p.DescriptionId

                })
                .ToList();

            if (productsInfo == null || productsInfo.Count == 0)
            {
                return NotFound(); // Возвращаем HTTP 404 (Not Found), если список продуктов пуст
            }

            return Ok(productsInfo);
        }


        //POST
        [HttpPost(Name = "CreateProduct")]
        public IActionResult CreateProduct(ProductDto productDto)
        {
            Product product = new Product
            {
                Id = productDto.Id,
                Name = productDto.Name,
                Price = productDto.Price,
                Price_Trade = productDto.Price_Trade,
                CategoryId = productDto.CategoryId,
                DescriptionId = productDto.DescriptionId

            };

            if (product == null)
            {
                // Возвращаем HTTP 400 (Bad Request), если данные категории некорректны
                return BadRequest();
            }

            // Добавляем категорию в контекст и сохраняем изменения в базе данных
            _context.Products.Add(product);
            _context.SaveChanges();

            // Возвращаем HTTP 201 (Created) и URL новой категории
            return CreatedAtRoute("GetProductById", new { id = product.Id }, product);


        }
        public class ProductDto
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int Price { get; set; }
            public int Price_Trade { get; set; }
            public int CategoryId { get; set; }
            public int DescriptionId { get; set; }
        }
    }
}
