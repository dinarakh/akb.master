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
    public class ProductImagesController : Controller
    {
        private readonly ApplicationContextDb _context;

        public ProductImagesController(ApplicationContextDb context)
        {
            _context = context;
        }

        [HttpGet(Name = "GetAllProductImages")]
        public IActionResult GetAllProductImages()
        {
            // Извлекаем все продукты из таблицы
            List<ProductImage> productImages = _context.ProductImages.ToList();

            if (productImages == null || productImages.Count == 0)
            {
                // Возвращаем HTTP 404 (Not Found), если список продуктов пуст
                return NotFound();
            }
            // Возвращаем список продуктов в формате JSON
            return Ok(productImages);
        }
    }
}
