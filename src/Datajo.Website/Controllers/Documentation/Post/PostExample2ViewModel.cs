using System.ComponentModel.DataAnnotations;

namespace ByteCarrot.Datajo.Website.Controllers.Documentation.Post
{
    public class PostExample2ViewModel
    {
        [Required, StringLength(30, MinimumLength = 3)]
        public string TextField { get; set; }
    }
}