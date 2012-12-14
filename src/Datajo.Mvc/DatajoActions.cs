using Newtonsoft.Json;
using System.Collections.Generic;

namespace ByteCarrot.Datajo.Mvc
{
    public class DatajoActions
    {
        private static readonly JsonSerializerSettings Settings = new JsonSerializerSettings { DefaultValueHandling = DefaultValueHandling.Ignore };
        private readonly List<object> _objects = new List<object>(); 

        public DatajoActions Show(string target, int duration = 0, string easing = null)
        {
            _objects.Add(new { action = "show", target, duration, easing});
            return this;
        }

        public DatajoActions Hide(string target, int duration = 0, string easing = null)
        {
            _objects.Add(new { action = "hide", target, duration, easing });
            return this;
        }

        public DatajoActions Get(string target, string url, string inject = null, string confirm = null)
        {
            _objects.Add(new { action = "get", target, url, inject, confirm });
            return this;
        }

        public DatajoActions Post(string target, string url, string form, string inject = null, string confirm = null)
        {
            _objects.Add(new { action = "post", target, url, form, inject, confirm });
            return this;
        }

        public string Render()
        {
            return _objects.Count == 0 ? string.Empty : JsonConvert.SerializeObject(_objects.Count == 1 ? _objects[0] : _objects, Settings);
        }
    }
}