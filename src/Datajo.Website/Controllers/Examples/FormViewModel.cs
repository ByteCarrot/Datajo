using System.ComponentModel.DataAnnotations;

namespace ByteCarrot.Datajo.Website.Controllers.Examples
{
    public class FormViewModel
    {
        [Required, StringLength(100, MinimumLength = 10)]
        public string Text { get; set; }
    }
}