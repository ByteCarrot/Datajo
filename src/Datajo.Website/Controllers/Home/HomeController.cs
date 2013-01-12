using System.Web.Mvc;

namespace ByteCarrot.Datajo.Website.Controllers.Home
{
    public partial class HomeController : Controller
    {
        public virtual ActionResult Index()
        {
            return View();
        }
    }
}
