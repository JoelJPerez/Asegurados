using Microsoft.AspNetCore.Mvc;
using Asegurados.Data;
using Asegurados.Models;
using Microsoft.EntityFrameworkCore;

namespace Asegurados.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AseguradosController : ControllerBase
    {
        private readonly AseguradosDbContext _context;

        public AseguradosController(AseguradosDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var asegurados = await _context.Asegurados.ToListAsync();
            return Ok(asegurados);
        }

        // Obtener asegurado por número de identificación
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAsegurado(int id)
        {
            var asegurado = await _context.Asegurados.FindAsync(id);
            if (asegurado == null) return NotFound("Asegurado no encontrado.");

            return Ok(asegurado);
        }

        // Crear un asegurado
        [HttpPost]
        public async Task<IActionResult> CreateAsegurado(Asegurado asegurado)
        {
            // Validar duplicados
            if (await _context.Asegurados.AnyAsync(a => a.NumeroIdentificacion == asegurado.NumeroIdentificacion))
                return Conflict("Ya existe un asegurado con este número de identificación.");

            await _context.Asegurados.AddAsync(asegurado);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetAll), new { id = asegurado.NumeroIdentificacion }, asegurado);
        }

        // Actualizar un asegurado
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsegurado(int id, Asegurado asegurado)
        {
            if (id != asegurado.NumeroIdentificacion) return BadRequest("El ID no coincide.");

            _context.Entry(asegurado).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!await _context.Asegurados.AnyAsync(a => a.NumeroIdentificacion == id))
                    return NotFound("Asegurado no encontrado.");

                throw;
            }

            return NoContent();
        }

        // Eliminar un asegurado
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsegurado(int id)
        {
            var asegurado = await _context.Asegurados.FindAsync(id);
            if (asegurado == null) return NotFound("Asegurado no encontrado.");

            _context.Asegurados.Remove(asegurado);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
