(function (b, a) {
    if ("function" === typeof define && define.amd)
      define(["mustache"], function (c) {
        a(c)
      });
    else if ("undefined" !== typeof exports) {
      var c = require("mustache");
      a(c)
    } else
      a(b.Mustache)
  }
)(this, function (b) {
  b.Formatters = {};
  b.Context.prototype.parseParam = function (a) {
    var c;
    c = /^[\'\"](.*)[\'\"]$/g;
    return c.test(a) ? a.replace(c, "$1") : /^[+-]?\d+$/g.test(a) ? parseInt(a, 10) : /^[+-]?\d*\.\d+$/g.test(a) ? parseFloat(a) : this._lookup(a)
  }
  ;
  b.Context.prototype.applyFilter = function (a, c) {
    var f, d, e, g = [a];
    f = /\:\s*([\'][^\']*[\']|[\"][^\"]*[\"]|[^\:]+)\s*/g;
    d = /^\s*([^\:]+)/g.exec(c);
    for (e = d[1].trim(); d = f.exec(c);)
      g.push(this.parseParam(d[1].trim()));
    return b.Formatters.hasOwnProperty(e) ? (c = b.Formatters[e],
      c.apply(c, g)) : a
  }
  ;
  b.Context.prototype._lookup = b.Context.prototype.lookup;
  b.Context.prototype.lookup = function (a) {
    var c, b, d;
    d = a.split("|");
    b = d.shift().trim();
    b = this._lookup(b);
    a = 0;
    for (c = d.length; a < c; ++a)
      b = this.applyFilter(b, d[a]);
    return b
  }
});
