using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ChildWare.api.Model
{
    public class AddChildWare
    {
        
        [Required]
        [EmailAddress(ErrorMessage = "Lütfen geçerli bir email adresi girin.")]
        public string  Email { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
    }
}