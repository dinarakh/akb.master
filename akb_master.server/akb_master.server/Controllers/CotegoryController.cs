using akb_master.server.Context;
using akb_master.server.Models;
using Microsoft.AspNetCore.Mvc;
using static akb_master.server.Controllers.CategoryController;

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



        //GET
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



   
        //POST
        [HttpPost(Name = "CreateCategory")]
        public IActionResult CreateCategory(CategotyDto categoryDto)
        {
            Category category = new Category
            {
                Id = categoryDto.Id,
                Name = categoryDto.Name
            };
            
            if (category == null)
            {
                // Возвращаем HTTP 400 (Bad Request), если данные категории некорректны
                return BadRequest();
            }

            // Добавляем категорию в контекст и сохраняем изменения в базе данных
            _context.Categories.Add(category);
            _context.SaveChanges();

            // Возвращаем HTTP 201 (Created) и URL новой категории
            return CreatedAtRoute("GetCategoryById", new { id = category.Id }, category);
        }
        public class CategotyDto            
        {
            public int Id { get; set; }

            public string Name { get; set; }
        }

    }
}
