/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-svg-webgl-setclasses !*/
!function (e, n, t) {
  function s(e, n) {
    return typeof e === n
  }

  function o() {
    var e, n, t, o, a, i, c;
    for (var f in l)if (l.hasOwnProperty(f)) {
      if (e = [], n = l[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))for (t = 0; t < n.options.aliases.length; t++)e.push(n.options.aliases[t].toLowerCase());
      for (o = s(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++)i = e[a], c = i.split("."), 1 === c.length ? Modernizr[c[0]] = o : (!Modernizr[c[0]] || Modernizr[c[0]]instanceof Boolean || (Modernizr[c[0]] = new Boolean(Modernizr[c[0]])), Modernizr[c[0]][c[1]] = o), r.push((o ? "" : "no-") + c.join("-"))
    }
  }

  function a(e) {
    var n = f.className, t = Modernizr._config.classPrefix || "";
    if (u && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var s = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(s, "$1" + t + "js$2")
    }
    Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), u ? f.className.baseVal = n : f.className = n)
  }

  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : u ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
  }

  var r = [], l = [], c = {
    _version: "3.5.0",
    _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
    _q: [],
    on: function (e, n) {
      var t = this;
      setTimeout(function () {
        n(t[e])
      }, 0)
    },
    addTest: function (e, n, t) {
      l.push({name: e, fn: n, options: t})
    },
    addAsyncTest: function (e) {
      l.push({name: null, fn: e})
    }
  }, Modernizr = function () {
  };
  Modernizr.prototype = c, Modernizr = new Modernizr, Modernizr.addTest("svg", !!n.createElementNS && !!n.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
  var f = n.documentElement, u = "svg" === f.nodeName.toLowerCase();
  Modernizr.addTest("webgl", function () {
    var n = i("canvas"), t = "probablySupportsContext"in n ? "probablySupportsContext" : "supportsContext";
    return t in n ? n[t]("webgl") || n[t]("experimental-webgl") : "WebGLRenderingContext"in e
  }), o(), a(r), delete c.addTest, delete c.addAsyncTest;
  for (var p = 0; p < Modernizr._q.length; p++)Modernizr._q[p]();
  e.Modernizr = Modernizr
}(window, document);