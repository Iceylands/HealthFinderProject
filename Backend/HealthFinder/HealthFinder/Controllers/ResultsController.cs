using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using HealthFinder.Models;
using HealthFinder.Data;

namespace HealthFinder.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ResultsController : ControllerBase
    {
        private readonly DoctorDB _docDB;

        public ResultsController(DoctorDB docDB)
        {
            _docDB = docDB;
        }

        [HttpGet("{search}")]
        [ProducesResponseType(typeof(DoctorClass), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Search(string search)
        {
            var result_spec = _docDB.Doctors.Where(s => s.Specialty.Contains(search));
            result_spec = result_spec.OrderByDescending(r => r.Rating);
            var result = result_spec;
            if (result.Count() < 3)
            {
                var resulttemp = _docDB.Doctors.Where(s => s.Specialty.Contains("General Practitioner") || s.Specialty.Contains("Family"));
                resulttemp = resulttemp.OrderByDescending(r => r.Rating);
                result = result.Concat(resulttemp);
            }

            result = result.OrderBy(s => !s.Specialty.Contains(search)).ThenByDescending(r => r.Rating);

            return result == null ? NotFound() : Ok(result);
        }
    }
}
