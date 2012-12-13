using System;
using System.Web.Mvc;

namespace ByteCarrot.Datajo
{
    public static class HtmlHelperExtensions
    {
        public static string Datajo(this HtmlHelper h, Action<DatajoActions> action)
        {
            var actions = new DatajoActions();
            action(actions);
            return actions.Render();
        }

        public static MvcHtmlString DatajoRaw(this HtmlHelper h, Action<DatajoActions> action)
        {
            return new MvcHtmlString(h.Datajo(action));
        }
    }
}
