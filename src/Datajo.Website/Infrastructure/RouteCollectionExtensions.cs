using System;
using System.Web.Mvc;
using System.Web.Routing;

namespace ByteCarrot.Datajo.Website.Infrastructure
{
   public static class RouteCollectionExtensions
   {
      public static Route MapRouteLowercase(this RouteCollection routes, string name, string url)
      {
         return MapRouteLowercase(routes, name, url, null, null, null);
      }

      public static Route MapRouteLowercase(this RouteCollection routes, string name, string url, object defaults)
      {
         return MapRouteLowercase(routes, name, url, defaults, null, null);
      }

      public static Route MapRouteLowercase(this RouteCollection routes, string name, string url, string[] namespaces)
      {
         return MapRouteLowercase(routes, name, url, null, null, namespaces);
      }

      public static Route MapRouteLowercase(this RouteCollection routes, string name, string url, object defaults, object constraints)
      {
         return MapRouteLowercase(routes, name, url, defaults, constraints, null);
      }

      public static Route MapRouteLowercase(this RouteCollection routes, string name, string url, object defaults, string[] namespaces)
      {
         return MapRouteLowercase(routes, name, url, defaults, null, namespaces);
      }

      public static Route MapRouteLowercase(this RouteCollection routes, string name, string url, object defaults, object constraints, string[] namespaces)
      {
         if (routes == null)
         {
            throw new ArgumentNullException("routes");
         }

         if (url == null)
         {
            throw new ArgumentNullException("url");
         }

         var route = new LowercaseRoute(url, new MvcRouteHandler())
                        {
                           Defaults = new RouteValueDictionary(defaults),
                           Constraints = new RouteValueDictionary(constraints),
                           DataTokens = new RouteValueDictionary(namespaces),
                        };

         if (namespaces != null && namespaces.Length > 0)
         {
            route.DataTokens["Namespaces"] = namespaces;
         }

         routes.Add(name, route);

         return route;
      }
   }
}