using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TMS_API_Final.Models;

namespace TMS_API_Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TouristController : ControllerBase
    {
        private readonly TMSContext _context;

        public TouristController(TMSContext context)
        {
            _context = context;
        }

        // GET: api/Tourists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tourist>>> GetTourists()
        {
            return await _context.Tourists.ToListAsync();
        }

        // GET: api/Tourists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tourist>> GetTourist(int id)
        {
            var tourist = await _context.Tourists.FindAsync(id);

            if (tourist == null)
            {
                return NotFound();
            }

            return tourist;
        }

        // PUT: api/Tourists/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTourist(int id, Tourist tourist)
        {
            if (id != tourist.TouristId)
            {
                return BadRequest();
            }

            _context.Entry(tourist).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TouristExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Tourists
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Tourist>> PostTourist(Tourist tourist)
        {
            _context.Tourists.Add(tourist);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTourist", new { id = tourist.TouristId }, tourist);
        }

        // DELETE: api/Tourists/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Tourist>> DeleteTourist(int id)
        {
            var tourist = await _context.Tourists.FindAsync(id);
            if (tourist == null)
            {
                return NotFound();
            }

            _context.Tourists.Remove(tourist);
            await _context.SaveChangesAsync();

            return tourist;
        }

        private bool TouristExists(int id)
        {
            return _context.Tourists.Any(e => e.TouristId == id);
        }
    }
}
