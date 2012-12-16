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
            routes.MapRouteLowercase("Action", "action/{controller}/{action}/{id}", 
                new {
                        action = "Index", 
                        id = UrlParameter.Optional
                    },
                new { controller = new ListConstraint { "show", "hide", "get", "post" } });
            routes.MapRouteLowercase("Default", "{controller}/{action}/{id}", 
                new {
                        controller = "Home", 
                        action = "Index", 
                        id = UrlParameter.Optional
                    });
        }
    }
}