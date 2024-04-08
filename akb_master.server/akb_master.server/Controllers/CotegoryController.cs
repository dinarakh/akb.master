using akb_master.server.Context;
using akb_master.server.Models;
using Microsoft.AspNetCore.Mvc;

namespace akb_master.server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ApplicationContextDb _context;

        public CategoryController(ApplicationContextDb context)
        {
            _context = context;
        }




        [HttpGet(Name = "GetAllCategory")]
        public IActionResult GetAllCategory()
        {
            // Извлекаем все продукты из таблицы
            List<Category> categories = _context.Categories.ToList();

            if (categories == null || categories.Count == 0)
            {
                // Возвращаем HTTP 404 (Not Found), если список продуктов пуст
                return NotFound();
            }
            // Возвращаем список продуктов в формате JSON
            return Ok(categories);
        }




        //[HttpPost(Name = "PostCategory")]
        //public IActionResult PostCategory(string categoryName)
        //{
        //    var cat = new Category
        //    {
        //        Name = categoryName
        //    };
        //    _context.Add(cat);
        //    _context.SaveChanges();
        //    return Ok();
        //}
    }
}
