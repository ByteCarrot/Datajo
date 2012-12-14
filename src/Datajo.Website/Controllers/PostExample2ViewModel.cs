using System.ComponentModel.DataAnnotations;

namespace ByteCarrot.Datajo.Web.Controllers
{
    public class PostExample2ViewModel
    {
        [Required, StringLength(30, MinimumLength = 3)]
        public string TextField { get; set; }
    }
}