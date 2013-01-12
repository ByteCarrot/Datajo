using System.Threading;
using System.Web.Mvc;

namespace ByteCarrot.Datajo.Website.Controllers.Examples
{
    public partial class ExamplesController : Controller
    {
        [HttpGet]
        public virtual ActionResult Get()
        {
            return PartialView();
        }

        [HttpGet]
        public virtual ActionResult Long()
        {
            Thread.Sleep(5000);
            return PartialView();
        }

        [HttpPost]
        public virtual ActionResult Post(string text)
        {
            return PartialView("Post", text);
        }

        [HttpGet]
        public virtual ActionResult Form()
        {
            return PartialView();
        }

        [HttpPost]
        public virtual ActionResult Form(FormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }

            return PartialView("Success", model);
        }
    }
}