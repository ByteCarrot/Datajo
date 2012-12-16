using System.Threading;
using System.Web.Mvc;

namespace ByteCarrot.Datajo.Website.Controllers.Documentation.Miscellaneous
{
    public partial class MiscellaneousController : Controller
    {
        public virtual ActionResult MultipleActions()
        {
            return View();
        }

        public virtual ActionResult LongRunningExample()
        {
            Thread.Sleep(5000);
            return PartialView();
        }
    }
}