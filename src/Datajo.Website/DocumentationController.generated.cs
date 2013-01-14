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
namespace ByteCarrot.Datajo.Website.Controllers.Documentation
{
    public partial class DocumentationController
    {
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public DocumentationController() { }

        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        protected DocumentationController(Dummy d) { }

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

        [NonAction]
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public System.Web.Mvc.ActionResult Index()
        {
            return new T4MVC_System_Web_Mvc_ActionResult(Area, Name, ActionNames.Index);
        }

        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public DocumentationController Actions { get { return MVC.Documentation; } }
        [GeneratedCode("T4MVC", "2.0")]
        public readonly string Area = "";
        [GeneratedCode("T4MVC", "2.0")]
        public readonly string Name = "Documentation";
        [GeneratedCode("T4MVC", "2.0")]
        public const string NameConst = "Documentation";

        static readonly ActionNamesClass s_actions = new ActionNamesClass();
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public ActionNamesClass ActionNames { get { return s_actions; } }
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public class ActionNamesClass
        {
            public readonly string Index = "Index";
        }

        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public class ActionNameConstants
        {
            public const string Index = "Index";
        }


        static readonly ActionParamsClass_Index s_params_Index = new ActionParamsClass_Index();
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public ActionParamsClass_Index IndexParams { get { return s_params_Index; } }
        [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
        public class ActionParamsClass_Index
        {
            public readonly string view = "view";
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
                public readonly string action_get = "action-get";
                public readonly string action_hide = "action-hide";
                public readonly string action_post = "action-post";
                public readonly string action_show = "action-show";
                public readonly string activity_indicator = "activity-indicator";
                public readonly string ajax_errors = "ajax-errors";
                public readonly string download = "download";
                public readonly string easing_types = "easing-types";
                public readonly string event_types = "event-types";
                public readonly string html_injection_types = "html-injection-types";
                public readonly string installation = "installation";
                public readonly string jquery_unobtrusive_validation = "jquery-unobtrusive-validation";
                public readonly string jquery_validation = "jquery-validation";
                public readonly string multiple_actions = "multiple-actions";
                public readonly string overview = "overview";
                public readonly string special_targets = "special-targets";
            }
            public readonly string action_get = "~/Views/Documentation/action-get.cshtml";
            public readonly string action_hide = "~/Views/Documentation/action-hide.cshtml";
            public readonly string action_post = "~/Views/Documentation/action-post.cshtml";
            public readonly string action_show = "~/Views/Documentation/action-show.cshtml";
            public readonly string activity_indicator = "~/Views/Documentation/activity-indicator.cshtml";
            public readonly string ajax_errors = "~/Views/Documentation/ajax-errors.cshtml";
            public readonly string download = "~/Views/Documentation/download.cshtml";
            public readonly string easing_types = "~/Views/Documentation/easing-types.cshtml";
            public readonly string event_types = "~/Views/Documentation/event-types.cshtml";
            public readonly string html_injection_types = "~/Views/Documentation/html-injection-types.cshtml";
            public readonly string installation = "~/Views/Documentation/installation.cshtml";
            public readonly string jquery_unobtrusive_validation = "~/Views/Documentation/jquery-unobtrusive-validation.cshtml";
            public readonly string jquery_validation = "~/Views/Documentation/jquery-validation.cshtml";
            public readonly string multiple_actions = "~/Views/Documentation/multiple-actions.cshtml";
            public readonly string overview = "~/Views/Documentation/overview.cshtml";
            public readonly string special_targets = "~/Views/Documentation/special-targets.cshtml";
        }
    }

    [GeneratedCode("T4MVC", "2.0"), DebuggerNonUserCode]
    public class T4MVC_DocumentationController : ByteCarrot.Datajo.Website.Controllers.Documentation.DocumentationController
    {
        public T4MVC_DocumentationController() : base(Dummy.Instance) { }

        public override System.Web.Mvc.ActionResult Index(string view)
        {
            var callInfo = new T4MVC_System_Web_Mvc_ActionResult(Area, Name, ActionNames.Index);
            ModelUnbinderHelpers.AddRouteValues(callInfo.RouteValueDictionary, "view", view);
            return callInfo;
        }

    }
}

#endregion T4MVC
#pragma warning restore 1591
