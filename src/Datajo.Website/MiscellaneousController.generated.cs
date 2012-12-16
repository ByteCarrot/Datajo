// <auto-generated />
// This file was generated by a T4 template.
// Don't change it directly as your change would get overwritten.  Instead, make changes
// to the .tt file (i.e. the T4 template) and save it to regenerate this file.

// Make sure the compiler doesn't complain about missing Xml comments
#pragma warning disable 1591
#region T4MVC

using System;
using System.Diagnostics;
using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using System.Web.Mvc.Html;
using System.Web.Routing;
using T4MVC;
namespace ByteCarrot.Datajo.Website.Controllers.Documentation.Miscellaneous
{
    public partial class MiscellaneousController
    {
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public MiscellaneousController() { }

        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        protected MiscellaneousController(Dummy d) { }

        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        protected RedirectToRouteResult RedirectToAction(ActionResult result)
        {
            var callInfo = result.GetT4MVCResult();
            return RedirectToRoute(callInfo.RouteValueDictionary);
        }

        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        protected RedirectToRouteResult RedirectToActionPermanent(ActionResult result)
        {
            var callInfo = result.GetT4MVCResult();
            return RedirectToRoutePermanent(callInfo.RouteValueDictionary);
        }


        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public MiscellaneousController Actions { get { return MVC.Miscellaneous; } }
        [GeneratedCode("T4MVC", "2.0")]
        public readonly string Area = "";
        [GeneratedCode("T4MVC", "2.0")]
        public readonly string Name = "Miscellaneous";
        [GeneratedCode("T4MVC", "2.0")]
        public const string NameConst = "Miscellaneous";

        static readonly ActionNamesClass s_actions = new ActionNamesClass();
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public ActionNamesClass ActionNames { get { return s_actions; } }
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public class ActionNamesClass
        {
            public readonly string MultipleActions = "MultipleActions";
            public readonly string LongRunningExample = "LongRunningExample";
            public readonly string HtmlInjectionTypes = "HtmlInjectionTypes";
            public readonly string EventTypes = "EventTypes";
        }

        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public class ActionNameConstants
        {
            public const string MultipleActions = "MultipleActions";
            public const string LongRunningExample = "LongRunningExample";
            public const string HtmlInjectionTypes = "HtmlInjectionTypes";
            public const string EventTypes = "EventTypes";
        }


        static readonly ViewsClass s_views = new ViewsClass();
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public ViewsClass Views { get { return s_views; } }
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public class ViewsClass
        {
            static readonly _ViewNamesClass s_ViewNames = new _ViewNamesClass();
            public _ViewNamesClass ViewNames { get { return s_ViewNames; } }
            public class _ViewNamesClass
            {
                public readonly string EventTypes = "EventTypes";
                public readonly string HtmlInjectionTypes = "HtmlInjectionTypes";
                public readonly string LongRunningExample = "LongRunningExample";
                public readonly string MultipleActions = "MultipleActions";
            }
            public readonly string EventTypes = "~/Views/Miscellaneous/EventTypes.cshtml";
            public readonly string HtmlInjectionTypes = "~/Views/Miscellaneous/HtmlInjectionTypes.cshtml";
            public readonly string LongRunningExample = "~/Views/Miscellaneous/LongRunningExample.cshtml";
            public readonly string MultipleActions = "~/Views/Miscellaneous/MultipleActions.cshtml";
        }
    }

    [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
    public class T4MVC_MiscellaneousController : ByteCarrot.Datajo.Website.Controllers.Documentation.Miscellaneous.MiscellaneousController
    {
        public T4MVC_MiscellaneousController() : base(Dummy.Instance) { }

        public override System.Web.Mvc.ActionResult MultipleActions()
        {
            var callInfo = new T4MVC_System_Web_Mvc_ActionResult(Area, Name, ActionNames.MultipleActions);
            return callInfo;
        }

        public override System.Web.Mvc.ActionResult LongRunningExample()
        {
            var callInfo = new T4MVC_System_Web_Mvc_ActionResult(Area, Name, ActionNames.LongRunningExample);
            return callInfo;
        }

        public override System.Web.Mvc.ActionResult HtmlInjectionTypes()
        {
            var callInfo = new T4MVC_System_Web_Mvc_ActionResult(Area, Name, ActionNames.HtmlInjectionTypes);
            return callInfo;
        }

        public override System.Web.Mvc.ActionResult EventTypes()
        {
            var callInfo = new T4MVC_System_Web_Mvc_ActionResult(Area, Name, ActionNames.EventTypes);
            return callInfo;
        }

    }
}

#endregion T4MVC
#pragma warning restore 1591
