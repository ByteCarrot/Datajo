using System.Web.Mvc;

namespace ByteCarrot.Datajo.Website.Controllers.Documentation.Post
{
    public partial class PostController : Controller
    {
        public virtual ActionResult Index()
        {
            return View();
        }

        public virtual ActionResult PostExample(string textField)
        {
            return PartialView((object)textField);
        }

        [HttpGet]
        public virtual ActionResult PostExample2()
        {
            return PartialView(new PostExample2ViewModel());
        }

        [HttpPost]
        public virtual ActionResult PostExample2(PostExample2ViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }
            return PartialView("PostExample2Success", model);
        }
    }
}