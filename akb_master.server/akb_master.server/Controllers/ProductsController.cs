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
                    Name = p.Name,
                    Price = p.Price
                })
                .ToList();

            if (productsInfo == null || productsInfo.Count == 0)
            {
                return NotFound(); // Возвращаем HTTP 404 (Not Found), если список продуктов пуст
            }

            return Ok(productsInfo);
        }


        //[HttpGet(Name = "GetAllProducts")]
        //public IActionResult GetAllProducts()
        //{
        //    // Извлекаем все продукты из таблицы
        //    List<Product> products = _context.Products.ToList();

        //    if (products == null || products.Count == 0)
        //    {
        //        // Возвращаем HTTP 404 (Not Found), если список продуктов пуст
        //        return NotFound();
        //    }
        //    // Возвращаем список продуктов в формате JSON
        //    return Ok(products);
        //}

        //Возвращаем список информации о продуктах в формате JSON



        //[HttpPost(Name = "PostProduct")]
        //public IActionResult PostProduct(string productName)
        //{
        //    var cat = new Product
        //    {
        //        Name = productName
        //    };
        //    _context.Add(cat);
        //    _context.SaveChanges();
        //    return Ok();
        //}

    }
}
