using System.Web.Mvc;

namespace ByteCarrot.Datajo.Website.Controllers.Documentation.Get
{
    public partial class GetController : Controller
    {
        public virtual ActionResult Index()
        {
            return View();
        }

        public virtual ActionResult GetExample()
        {
            return PartialView();
        }
    }
}