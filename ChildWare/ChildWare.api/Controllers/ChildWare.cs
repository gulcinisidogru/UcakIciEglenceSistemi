
using System.Collections.Generic;
using ChildWare.api.Model;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using ChildWare.api.Security;

namespace ChildWare.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChildWareController : ControllerBase
    {

    private readonly Context _context;
      public ChildWareController(Context context)
    {
        _context = context;
    }
     

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChildWareModel>>> GetAll()
        {
            var list = await _context.ChildWareModels.ToListAsync();
            return Ok(list);
            
    
        }
          

        [HttpPost]
        public async Task<ActionResult<ChildWareModel>> PostChildWareModel(AddChildWare model)
        {
            var newUser = new ChildWareModel
            {
                Name = AesEncryption.Encrypt(model.Name),
                Email = AesEncryption.Encrypt(model.Email),
                Password = AesEncryption.Encrypt(model.Password)
            };

            _context.ChildWareModels.Add(newUser);
            await _context.SaveChangesAsync();

            return Ok();
        }


           [HttpGet("{id}")]
            public async Task<ActionResult<ChildWareModel>> GetById(int id)
            {
                var model = await _context.ChildWareModels.FindAsync(id);

                if (model == null)
                    return NotFound();

                return model;
            }
    }
}
