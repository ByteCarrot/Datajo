using System.Web.Mvc;

namespace ByteCarrot.Datajo.Website.Controllers.Documentation.Post
{
    public partial class PostController : Controller
    {
        public virtual ActionResult Index()
        {
            return View();
        }

        public virtual ActionResult Example(string textField)
        {
            return PartialView(textField);
        }

        [HttpGet]
        public virtual ActionResult PostExample2()
        {
            return PartialView(new PostExample2ViewModel());
        }

        [HttpPost]
        public virtual ActionResult PostExample2(PostExample2ViewModel model)
        {
            return !ModelState.IsValid ? PartialView(model) : PartialView("PostExample2Success", model);
        }
    }
}