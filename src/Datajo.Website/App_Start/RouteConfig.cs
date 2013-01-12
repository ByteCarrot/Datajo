using System.Web.Mvc;
using System.Web.Routing;
using ByteCarrot.Datajo.Website.Infrastructure;

namespace ByteCarrot.Datajo.Website.App_Start
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRouteLowercase("Documentation", "documentation/{view}", 
                new { controller = "Documentation", action = "Index", id = UrlParameter.Optional });
            
            routes.MapRouteLowercase("Default", "{controller}/{action}/{id}", 
                new { controller = "Home", action = "Index", id = UrlParameter.Optional });
        }
    }
}