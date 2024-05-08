using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using akb_master.server.Context;
using akb_master.server.Models;
using static akb_master.server.Controllers.CategoryController;

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

        //POST
        //[HttpPost(Name = "CraeteProductImage")]
        //public IActionResult CreateProductImage(ProductImageDto productimageDto)
        //{
        //    ProductImage productImage = new ProductImage
        //    {
        //        ProductId = productimageDto.ProductId,
        //        ImageId = productimageDto.ImageId
        //    };

        //    if (productimageDto == null)
        //    {
        //        // Возвращаем HTTP 400 (Bad Request), если данные категории некорректны
        //        return BadRequest();
        //    }

        //    // Добавляем категорию в контекст и сохраняем изменения в базе данных
        //    _context.ProductImages.Add(productImage);
        //    _context.SaveChanges();

        //    // Возвращаем HTTP 201 (Created) и URL новой категории


                //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                //Делать ли для этой таблицы пост и делать вообще ему контролер 
        //    return CreatedAtRoute("GetProductImageById", new { id = productImage.Id }, productImage);
        //}

        //public class ProductImageDto
        //{
        //    public int ProductId { get; set; }
        //    public int ImageId {  get; set; }
        //}

    }
}
