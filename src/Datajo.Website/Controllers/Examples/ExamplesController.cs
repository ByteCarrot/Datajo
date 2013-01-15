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
        public virtual ActionResult Form(ValidatedFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }

            return PartialView("Success", model);
        }

        [HttpGet]
        public virtual ActionResult JQueryValidation()
        {
            return PartialView();
        }

        [HttpPost]
        public virtual ActionResult JQueryValidation(FormViewModel model)
        {
            return PartialView("JQueryValidationSuccess", model);
        }

        [HttpGet]
        public virtual ActionResult UnobtrusiveValidation()
        {
            return PartialView();
        }

        [HttpPost]
        public virtual ActionResult UnobtrusiveValidation(ValidatedFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }

            return PartialView("UnobtrusiveValidationSuccess", model);
        }

        [HttpGet]
        public virtual ActionResult LoadEvent()
        {
            return PartialView();
        }

        [HttpGet]
        public virtual ActionResult ClickEvent()
        {
            return PartialView();
        }

        [HttpPost]
        public virtual ActionResult SubmitEvent(ValidatedFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return PartialView(model);
            }

            return PartialView("SubmitEventSuccess", model);
        }

        [HttpGet]
        public virtual ActionResult SubmitEvent()
        {
            return PartialView();
        }
    }
}