using HealthFinder.Data;
using HealthFinder.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HealthFinder.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserDB _userDB;

        public UserController(UserDB userDB)
        {
            _userDB = userDB;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserClass>>> Get()
        {
            return await _userDB.Users.ToListAsync();
        }

        // Get data by ID
        [HttpGet("{id}")]
        [ProducesResponseType(typeof(DoctorClass), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var issue = await _userDB.Users.FindAsync(id);
            return issue == null ? NotFound() : Ok(issue);
        }

        //Add new item to the database
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(UserClass User)
        {
            await _userDB.Users.AddAsync(User);
            await _userDB.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = User.UserID }, User);
        }

        // Update an item
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(int id, UserClass User)
        {
            if (id != User.UserID) return BadRequest();

            _userDB.Entry(User).State = EntityState.Modified;
            await _userDB.SaveChangesAsync();

            return NoContent();

        }

        // DELETE api/<DoctorController>/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            var DeleteDoctor = await _userDB.Users.FindAsync(id);
            if (DeleteDoctor == null) return NotFound();

            _userDB.Users.Remove(DeleteDoctor);
            await _userDB.SaveChangesAsync();

            return NoContent();
        }
    }
}
