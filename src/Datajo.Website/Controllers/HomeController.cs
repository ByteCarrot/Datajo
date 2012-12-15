using System.Threading;
using System.Web.Mvc;

namespace ByteCarrot.Datajo.Website.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetExample()
        {
            return PartialView();
        }

        public ActionResult PostExample(string textField)
        {
            return PartialView((object)textField);
        }

        [HttpGet]
        public ActionResult PostExample2()
        {
            return PartialView(new PostExample2ViewModel());
        }

        [HttpPost]
        public ActionResult PostExample2(PostExample2ViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }
            return PartialView("PostExample2Success", model);
        }

        public ActionResult LongRunningExample()
        {
            Thread.Sleep(5000);
            return PartialView();
        }
    }
}
