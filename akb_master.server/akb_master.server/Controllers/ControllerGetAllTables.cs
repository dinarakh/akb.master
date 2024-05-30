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
    public class ControllerGetAllTables : Controller
    {
        private readonly ApplicationContextDb _context;

        public ControllerGetAllTables(ApplicationContextDb context)
        {
            _context = context;
        }



        // GET: api/description
        [HttpGet(Name = "GetAllTables")]
        public async Task<ActionResult<IEnumerable<Description>>> GetAllTables()
        {
            var allTables = await _context.Descriptions
                .Select(d => new
                {
                    Id = d.Id,
                    Country = d.Country,
                    Polarity = d.Polarity,
                    Dimensions = d.Dimensions,
                    Capacity = d.Capacity,
                    Starting_current = d.Starting_current,
                    Performance = d.Performance,
                    Guarantee = d.Guarantee,
                    Products = d.Products.Select(p => new
                    {
                        p.Id,
                        p.Name,
                        p.Price,
                        p.Price_Trade,
                        Category = p.Category.Id,
                        CategoryName = p.Category.Name,
                        ProductImage = p.ProductImages.Select(pi => new
                        {
                            Image = pi.Image.Id,
                            ImageGuid = pi.Image.ImageGuid,
                            ByteImage = pi.Image.ByteImage,
                        })
                    }).ToList()
                })
                .ToListAsync();


            return Ok(allTables);
        }
    }
}