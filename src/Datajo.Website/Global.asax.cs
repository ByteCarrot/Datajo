using System.Web;
using ByteCarrot.Datajo.Web.App_Start;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;

namespace ByteCarrot.Datajo.Website
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}