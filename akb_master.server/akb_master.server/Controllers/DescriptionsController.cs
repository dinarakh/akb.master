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
    public class DescriptionsController : Controller
    {
        private readonly ApplicationContextDb _context;

        public DescriptionsController(ApplicationContextDb context)
        {
            _context = context;
        }

        // GET: Descriptions
        public async Task<IActionResult> Index()
        {
            return View(await _context.Descriptions.ToListAsync());
        }

        // GET: Descriptions/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var description = await _context.Descriptions
                .FirstOrDefaultAsync(m => m.Id == id);
            if (description == null)
            {
                return NotFound();
            }

            return View(description);
        }

        // GET: Descriptions/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Descriptions/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Country,Polarity,Dimensions,Capacity,Starting_current,Performance,Guarantee")] Description description)
        {
            if (ModelState.IsValid)
            {
                _context.Add(description);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(description);
        }

        // GET: Descriptions/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var description = await _context.Descriptions.FindAsync(id);
            if (description == null)
            {
                return NotFound();
            }
            return View(description);
        }

        // POST: Descriptions/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Country,Polarity,Dimensions,Capacity,Starting_current,Performance,Guarantee")] Description description)
        {
            if (id != description.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(description);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!DescriptionExists(description.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(description);
        }

        // GET: Descriptions/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var description = await _context.Descriptions
                .FirstOrDefaultAsync(m => m.Id == id);
            if (description == null)
            {
                return NotFound();
            }

            return View(description);
        }

        // POST: Descriptions/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var description = await _context.Descriptions.FindAsync(id);
            if (description != null)
            {
                _context.Descriptions.Remove(description);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool DescriptionExists(int id)
        {
            return _context.Descriptions.Any(e => e.Id == id);
        }
    }
}
