using HealthFinder.Data;
using HealthFinder.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HealthFinder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly DoctorDB _docDB;

        public DoctorController(DoctorDB docDB)
        {
            _docDB = docDB;
        }

        // Get all data
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DoctorClass>>> Get()
        {
            return await _docDB.Doctors.ToListAsync();
        }

        // Get data by ID
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(DoctorClass), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var issue = await _docDB.Doctors.FindAsync(id);
            return issue == null ? NotFound() : Ok(issue);
        }

        //Add new item to the database
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(DoctorClass doctor)
        {
            await _docDB.Doctors.AddAsync(doctor);
            await _docDB.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = doctor.ID }, doctor);
        }

        // Update an item
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(int id, DoctorClass doctor)
        {
            if (id != doctor.ID) return BadRequest();

            _docDB.Entry(doctor).State = EntityState.Modified;
            await _docDB.SaveChangesAsync();

            return NoContent();

        }

        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            var DeleteDoctor=await _docDB.Doctors.FindAsync(id);
            if (DeleteDoctor == null) return NotFound();

            _docDB.Doctors.Remove(DeleteDoctor);
            await _docDB.SaveChangesAsync();

            return NoContent();
        }

        //Create Results
        /*[HttpGet("{search}")]
        //[HttpGet]
        public async JsonResult Search(string search)
        {
            var result = _docDB.Doctors.Where(s => s.Specialty.Contains(search) || s.Specialty.Contains("General Practitioner"));

            if (result == null)
                return new JsonResult(NotFound());
            return new JsonResult(Ok(result));
        }*/
        
    }
}
