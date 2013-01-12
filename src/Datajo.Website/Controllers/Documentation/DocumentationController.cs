using System.Web.Mvc;

namespace ByteCarrot.Datajo.Website.Controllers.Documentation
{
    public partial class DocumentationController : Controller
    {
        public virtual ActionResult Index(string view)
        {
            return View(view);
        }
    }
}