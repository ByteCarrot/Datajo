using System.Collections.Generic;
using System.Web;
using System.Web.Routing;

namespace ByteCarrot.Datajo.Website.Infrastructure
{
    public class ListConstraint : List<string>, IRouteConstraint
    {
        public bool Match(HttpContextBase httpContext, Route route, string parameterName, RouteValueDictionary values, RouteDirection routeDirection)
        {
            var value = (string)values[parameterName];
            return Contains(value.ToLower());
        }
    }
}