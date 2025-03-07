import {
  __publicField
} from "./chunk-FM7WUVZV.js";

// node_modules/.deno/prettier@3.3.3/node_modules/prettier/standalone.mjs
var yu = Object.create;
var He = Object.defineProperty;
var Au = Object.getOwnPropertyDescriptor;
var Bu = Object.getOwnPropertyNames;
var wu = Object.getPrototypeOf;
var xu = Object.prototype.hasOwnProperty;
var sr = (e) => {
  throw TypeError(e);
};
var _u = (e, t) => () => (e && (t = e(e = 0)), t);
var At = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var We = (e, t) => {
  for (var r in t) He(e, r, { get: t[r], enumerable: true });
};
var ar = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of Bu(t)) !xu.call(e, o) && o !== r && He(e, o, { get: () => t[o], enumerable: !(n = Au(t, o)) || n.enumerable });
  return e;
};
var Me = (e, t, r) => (r = e != null ? yu(wu(e)) : {}, ar(t || !e || !e.__esModule ? He(r, "default", { value: e, enumerable: true }) : r, e));
var vu = (e) => ar(He({}, "__esModule", { value: true }), e);
var bu = (e, t, r) => t.has(e) || sr("Cannot " + r);
var Dr = (e, t, r) => t.has(e) ? sr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r);
var pe = (e, t, r) => (bu(e, t, "access private method"), r);
var it = At((ia, sn) => {
  "use strict";
  var on = new Proxy(String, { get: () => on });
  sn.exports = on;
});
var Tn = {};
We(Tn, { default: () => _o, shouldHighlight: () => xo });
var xo;
var _o;
var kn = _u(() => {
  xo = () => false, _o = String;
});
var Pn = At((bD, Xt) => {
  var g = String, Ln = function() {
    return { isColorSupported: false, reset: g, bold: g, dim: g, italic: g, underline: g, inverse: g, hidden: g, strikethrough: g, black: g, red: g, green: g, yellow: g, blue: g, magenta: g, cyan: g, white: g, gray: g, bgBlack: g, bgRed: g, bgGreen: g, bgYellow: g, bgBlue: g, bgMagenta: g, bgCyan: g, bgWhite: g };
  };
  Xt.exports = Ln();
  Xt.exports.createColors = Ln;
});
var $n = At((Ct) => {
  "use strict";
  Object.defineProperty(Ct, "__esModule", { value: true });
  Ct.codeFrameColumns = Mn;
  Ct.default = To;
  var In = (kn(), vu(Tn)), Hn = vo(Pn(), true);
  function Wn(e) {
    if (typeof WeakMap != "function") return null;
    var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
    return (Wn = function(n) {
      return n ? r : t;
    })(e);
  }
  function vo(e, t) {
    if (!t && e && e.__esModule) return e;
    if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
    var r = Wn(t);
    if (r && r.has(e)) return r.get(e);
    var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in e) if (u !== "default" && {}.hasOwnProperty.call(e, u)) {
      var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
    }
    return n.default = e, r && r.set(e, n), n;
  }
  var bo = Hn.default, Rn = (e, t) => (r) => e(t(r)), Zt;
  function Oo(e) {
    if (e) {
      var t;
      return (t = Zt) != null || (Zt = (0, Hn.createColors)(true)), Zt;
    }
    return bo;
  }
  var Yn = false;
  function So(e) {
    return { gutter: e.gray, marker: Rn(e.red, e.bold), message: Rn(e.red, e.bold) };
  }
  var jn = /\r\n|[\n\r\u2028\u2029]/;
  function No(e, t, r) {
    let n = Object.assign({ column: 0, line: -1 }, e.start), o = Object.assign({}, n, e.end), { linesAbove: u = 2, linesBelow: i = 3 } = r || {}, s = n.line, a = n.column, D = o.line, l = o.column, d = Math.max(s - (u + 1), 0), f = Math.min(t.length, D + i);
    s === -1 && (d = 0), D === -1 && (f = t.length);
    let p = D - s, c = {};
    if (p) for (let F = 0; F <= p; F++) {
      let m = F + s;
      if (!a) c[m] = true;
      else if (F === 0) {
        let E = t[m - 1].length;
        c[m] = [a, E - a + 1];
      } else if (F === p) c[m] = [0, l];
      else {
        let E = t[m - F].length;
        c[m] = [0, E];
      }
    }
    else a === l ? a ? c[s] = [a, 0] : c[s] = true : c[s] = [a, l - a];
    return { start: d, end: f, markerLines: c };
  }
  function Mn(e, t, r = {}) {
    let n = (r.highlightCode || r.forceColor) && (0, In.shouldHighlight)(r), o = Oo(r.forceColor), u = So(o), i = (F, m) => n ? F(m) : m, s = e.split(jn), { start: a, end: D, markerLines: l } = No(t, s, r), d = t.start && typeof t.start.column == "number", f = String(D).length, c = (n ? (0, In.default)(e, r) : e).split(jn, D).slice(a, D).map((F, m) => {
      let E = a + 1 + m, w = ` ${` ${E}`.slice(-f)} |`, h = l[E], C = !l[E + 1];
      if (h) {
        let k = "";
        if (Array.isArray(h)) {
          let v = F.slice(0, Math.max(h[0] - 1, 0)).replace(/[^\t]/g, " "), $ = h[1] || 1;
          k = [`
 `, i(u.gutter, w.replace(/\d/g, " ")), " ", v, i(u.marker, "^").repeat($)].join(""), C && r.message && (k += " " + i(u.message, r.message));
        }
        return [i(u.marker, ">"), i(u.gutter, w), F.length > 0 ? ` ${F}` : "", k].join("");
      } else return ` ${i(u.gutter, w)}${F.length > 0 ? ` ${F}` : ""}`;
    }).join(`
`);
    return r.message && !d && (c = `${" ".repeat(f + 1)}${r.message}
${c}`), n ? o.reset(c) : c;
  }
  function To(e, t, r, n = {}) {
    if (!Yn) {
      Yn = true;
      let u = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
      {
        let i = new Error(u);
        i.name = "DeprecationWarning", console.warn(new Error(u));
      }
    }
    return r = Math.max(r, 0), Mn(e, { start: { column: r, line: t } }, n);
  }
});
var ir = {};
We(ir, { __debug: () => di, check: () => fi, doc: () => nr, format: () => gu, formatWithCursor: () => Cu, getSupportInfo: () => pi, util: () => or, version: () => fu });
var Ou = (e, t, r, n) => {
  if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
};
var ne = Ou;
function Z() {
}
Z.prototype = { diff: function(t, r) {
  var n, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = o.callback;
  typeof o == "function" && (u = o, o = {}), this.options = o;
  var i = this;
  function s(h) {
    return u ? (setTimeout(function() {
      u(void 0, h);
    }, 0), true) : h;
  }
  t = this.castInput(t), r = this.castInput(r), t = this.removeEmpty(this.tokenize(t)), r = this.removeEmpty(this.tokenize(r));
  var a = r.length, D = t.length, l = 1, d = a + D;
  o.maxEditLength && (d = Math.min(d, o.maxEditLength));
  var f = (n = o.timeout) !== null && n !== void 0 ? n : 1 / 0, p = Date.now() + f, c = [{ oldPos: -1, lastComponent: void 0 }], F = this.extractCommon(c[0], r, t, 0);
  if (c[0].oldPos + 1 >= D && F + 1 >= a) return s([{ value: this.join(r), count: r.length }]);
  var m = -1 / 0, E = 1 / 0;
  function A() {
    for (var h = Math.max(m, -l); h <= Math.min(E, l); h += 2) {
      var C = void 0, k = c[h - 1], v = c[h + 1];
      k && (c[h - 1] = void 0);
      var $ = false;
      if (v) {
        var ye = v.oldPos - h;
        $ = v && 0 <= ye && ye < a;
      }
      var yt = k && k.oldPos + 1 < D;
      if (!$ && !yt) {
        c[h] = void 0;
        continue;
      }
      if (!yt || $ && k.oldPos + 1 < v.oldPos ? C = i.addToPath(v, true, void 0, 0) : C = i.addToPath(k, void 0, true, 1), F = i.extractCommon(C, r, t, h), C.oldPos + 1 >= D && F + 1 >= a) return s(Su(i, C.lastComponent, r, t, i.useLongestToken));
      c[h] = C, C.oldPos + 1 >= D && (E = Math.min(E, h - 1)), F + 1 >= a && (m = Math.max(m, h + 1));
    }
    l++;
  }
  if (u) (function h() {
    setTimeout(function() {
      if (l > d || Date.now() > p) return u();
      A() || h();
    }, 0);
  })();
  else for (; l <= d && Date.now() <= p; ) {
    var w = A();
    if (w) return w;
  }
}, addToPath: function(t, r, n, o) {
  var u = t.lastComponent;
  return u && u.added === r && u.removed === n ? { oldPos: t.oldPos + o, lastComponent: { count: u.count + 1, added: r, removed: n, previousComponent: u.previousComponent } } : { oldPos: t.oldPos + o, lastComponent: { count: 1, added: r, removed: n, previousComponent: u } };
}, extractCommon: function(t, r, n, o) {
  for (var u = r.length, i = n.length, s = t.oldPos, a = s - o, D = 0; a + 1 < u && s + 1 < i && this.equals(r[a + 1], n[s + 1]); ) a++, s++, D++;
  return D && (t.lastComponent = { count: D, previousComponent: t.lastComponent }), t.oldPos = s, a;
}, equals: function(t, r) {
  return this.options.comparator ? this.options.comparator(t, r) : t === r || this.options.ignoreCase && t.toLowerCase() === r.toLowerCase();
}, removeEmpty: function(t) {
  for (var r = [], n = 0; n < t.length; n++) t[n] && r.push(t[n]);
  return r;
}, castInput: function(t) {
  return t;
}, tokenize: function(t) {
  return t.split("");
}, join: function(t) {
  return t.join("");
} };
function Su(e, t, r, n, o) {
  for (var u = [], i; t; ) u.push(t), i = t.previousComponent, delete t.previousComponent, t = i;
  u.reverse();
  for (var s = 0, a = u.length, D = 0, l = 0; s < a; s++) {
    var d = u[s];
    if (d.removed) {
      if (d.value = e.join(n.slice(l, l + d.count)), l += d.count, s && u[s - 1].added) {
        var p = u[s - 1];
        u[s - 1] = u[s], u[s] = p;
      }
    } else {
      if (!d.added && o) {
        var f = r.slice(D, D + d.count);
        f = f.map(function(F, m) {
          var E = n[l + m];
          return E.length > F.length ? E : F;
        }), d.value = e.join(f);
      } else d.value = e.join(r.slice(D, D + d.count));
      D += d.count, d.added || (l += d.count);
    }
  }
  var c = u[a - 1];
  return a > 1 && typeof c.value == "string" && (c.added || c.removed) && e.equals("", c.value) && (u[a - 2].value += c.value, u.pop()), u;
}
var hi = new Z();
var lr = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var cr = /\S/;
var fr = new Z();
fr.equals = function(e, t) {
  return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !cr.test(e) && !cr.test(t);
};
fr.tokenize = function(e) {
  for (var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0; r < t.length - 1; r++) !t[r + 1] && t[r + 2] && lr.test(t[r]) && lr.test(t[r + 2]) && (t[r] += t[r + 2], t.splice(r + 1, 2), r--);
  return t;
};
var pr = new Z();
pr.tokenize = function(e) {
  this.options.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
  var t = [], r = e.split(/(\n|\r\n)/);
  r[r.length - 1] || r.pop();
  for (var n = 0; n < r.length; n++) {
    var o = r[n];
    n % 2 && !this.options.newlineIsToken ? t[t.length - 1] += o : (this.options.ignoreWhitespace && (o = o.trim()), t.push(o));
  }
  return t;
};
var Nu = new Z();
Nu.tokenize = function(e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var Tu = new Z();
Tu.tokenize = function(e) {
  return e.split(/([{}:;,]|\s+)/);
};
function $e(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $e = function(t) {
    return typeof t;
  } : $e = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $e(e);
}
var ku = Object.prototype.toString;
var Ae = new Z();
Ae.useLongestToken = true;
Ae.tokenize = pr.tokenize;
Ae.castInput = function(e) {
  var t = this.options, r = t.undefinedReplacement, n = t.stringifyReplacer, o = n === void 0 ? function(u, i) {
    return typeof i > "u" ? r : i;
  } : n;
  return typeof e == "string" ? e : JSON.stringify(Bt(e, null, null, o), o, "  ");
};
Ae.equals = function(e, t) {
  return Z.prototype.equals.call(Ae, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
};
function Bt(e, t, r, n, o) {
  t = t || [], r = r || [], n && (e = n(o, e));
  var u;
  for (u = 0; u < t.length; u += 1) if (t[u] === e) return r[u];
  var i;
  if (ku.call(e) === "[object Array]") {
    for (t.push(e), i = new Array(e.length), r.push(i), u = 0; u < e.length; u += 1) i[u] = Bt(e[u], t, r, n, o);
    return t.pop(), r.pop(), i;
  }
  if (e && e.toJSON && (e = e.toJSON()), $e(e) === "object" && e !== null) {
    t.push(e), i = {}, r.push(i);
    var s = [], a;
    for (a in e) e.hasOwnProperty(a) && s.push(a);
    for (s.sort(), u = 0; u < s.length; u += 1) a = s[u], i[a] = Bt(e[a], t, r, n, a);
    t.pop(), r.pop();
  } else i = e;
  return i;
}
var Ve = new Z();
Ve.tokenize = function(e) {
  return e.slice();
};
Ve.join = Ve.removeEmpty = function(e) {
  return e;
};
function dr(e, t, r) {
  return Ve.diff(e, t, r);
}
function Fr(e) {
  let t = e.indexOf("\r");
  return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function Be(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function wt(e, t) {
  let r;
  switch (t) {
    case `
`:
      r = /\n/gu;
      break;
    case "\r":
      r = /\r/gu;
      break;
    case `\r
`:
      r = /\r\n/gu;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let n = e.match(r);
  return n ? n.length : 0;
}
function mr(e) {
  return ne(false, e, /\r\n?/gu, `
`);
}
var U = "string";
var W = "array";
var z = "cursor";
var L = "indent";
var P = "align";
var I = "trim";
var x = "group";
var S = "fill";
var _ = "if-break";
var R = "indent-if-break";
var Y = "line-suffix";
var j = "line-suffix-boundary";
var B = "line";
var N = "label";
var b = "break-parent";
var Ue = /* @__PURE__ */ new Set([z, L, P, I, x, S, _, R, Y, j, B, N, b]);
function Lu(e) {
  if (typeof e == "string") return U;
  if (Array.isArray(e)) return W;
  if (!e) return;
  let { type: t } = e;
  if (Ue.has(t)) return t;
}
var G = Lu;
var Pu = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Iu(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (G(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = Pu([...Ue].map((o) => `'${o}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var xt = class extends Error {
  constructor(t) {
    super(Iu(t));
    __publicField(this, "name", "InvalidDocError");
    this.doc = t;
  }
};
var Q = xt;
var Er = {};
function Ru(e, t, r, n) {
  let o = [e];
  for (; o.length > 0; ) {
    let u = o.pop();
    if (u === Er) {
      r(o.pop());
      continue;
    }
    r && o.push(u, Er);
    let i = G(u);
    if (!i) throw new Q(u);
    if ((t == null ? void 0 : t(u)) !== false) switch (i) {
      case W:
      case S: {
        let s = i === W ? u : u.parts;
        for (let a = s.length, D = a - 1; D >= 0; --D) o.push(s[D]);
        break;
      }
      case _:
        o.push(u.flatContents, u.breakContents);
        break;
      case x:
        if (n && u.expandedStates) for (let s = u.expandedStates.length, a = s - 1; a >= 0; --a) o.push(u.expandedStates[a]);
        else o.push(u.contents);
        break;
      case P:
      case L:
      case R:
      case N:
      case Y:
        o.push(u.contents);
        break;
      case U:
      case z:
      case I:
      case j:
      case B:
      case b:
        break;
      default:
        throw new Q(u);
    }
  }
}
var we = Ru;
var hr = () => {
};
var K = hr;
var ze = hr;
function De(e) {
  return K(e), { type: L, contents: e };
}
function ae(e, t) {
  return K(t), { type: P, contents: t, n: e };
}
function _t(e, t = {}) {
  return K(e), ze(t.expandedStates, true), { type: x, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function Cr(e) {
  return ae(Number.NEGATIVE_INFINITY, e);
}
function gr(e) {
  return ae({ type: "root" }, e);
}
function yr(e) {
  return ae(-1, e);
}
function Ar(e, t) {
  return _t(e[0], { ...t, expandedStates: e });
}
function Ge(e) {
  return ze(e), { type: S, parts: e };
}
function Br(e, t = "", r = {}) {
  return K(e), t !== "" && K(t), { type: _, breakContents: e, flatContents: t, groupId: r.groupId };
}
function wr(e, t) {
  return K(e), { type: R, contents: e, groupId: t.groupId, negate: t.negate };
}
function xe(e) {
  return K(e), { type: Y, contents: e };
}
var xr = { type: j };
var de = { type: b };
var _r = { type: I };
var _e = { type: B, hard: true };
var vt = { type: B, hard: true, literal: true };
var Ke = { type: B };
var vr = { type: B, soft: true };
var q = [_e, de];
var qe = [vt, de];
var ve = { type: z };
function be(e, t) {
  K(e), ze(t);
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
function Je(e, t, r) {
  K(e);
  let n = e;
  if (t > 0) {
    for (let o = 0; o < Math.floor(t / r); ++o) n = De(n);
    n = ae(t % r, n), n = ae(Number.NEGATIVE_INFINITY, n);
  }
  return n;
}
function br(e, t) {
  return K(t), e ? { type: N, label: e, contents: t } : t;
}
function ee(e) {
  var t;
  if (!e) return "";
  if (Array.isArray(e)) {
    let r = [];
    for (let n of e) if (Array.isArray(n)) r.push(...ee(n));
    else {
      let o = ee(n);
      o !== "" && r.push(o);
    }
    return r;
  }
  return e.type === _ ? { ...e, breakContents: ee(e.breakContents), flatContents: ee(e.flatContents) } : e.type === x ? { ...e, contents: ee(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(ee) } : e.type === S ? { type: "fill", parts: e.parts.map(ee) } : e.contents ? { ...e, contents: ee(e.contents) } : e;
}
function Or(e) {
  let t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Set();
  return n(ee(e));
  function n(u, i, s) {
    var a, D;
    if (typeof u == "string") return JSON.stringify(u);
    if (Array.isArray(u)) {
      let l = u.map(n).filter(Boolean);
      return l.length === 1 ? l[0] : `[${l.join(", ")}]`;
    }
    if (u.type === B) {
      let l = ((a = s == null ? void 0 : s[i + 1]) == null ? void 0 : a.type) === b;
      return u.literal ? l ? "literalline" : "literallineWithoutBreakParent" : u.hard ? l ? "hardline" : "hardlineWithoutBreakParent" : u.soft ? "softline" : "line";
    }
    if (u.type === b) return ((D = s == null ? void 0 : s[i - 1]) == null ? void 0 : D.type) === B && s[i - 1].hard ? void 0 : "breakParent";
    if (u.type === I) return "trim";
    if (u.type === L) return "indent(" + n(u.contents) + ")";
    if (u.type === P) return u.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(u.contents) + ")" : u.n < 0 ? "dedent(" + n(u.contents) + ")" : u.n.type === "root" ? "markAsRoot(" + n(u.contents) + ")" : "align(" + JSON.stringify(u.n) + ", " + n(u.contents) + ")";
    if (u.type === _) return "ifBreak(" + n(u.breakContents) + (u.flatContents ? ", " + n(u.flatContents) : "") + (u.groupId ? (u.flatContents ? "" : ', ""') + `, { groupId: ${o(u.groupId)} }` : "") + ")";
    if (u.type === R) {
      let l = [];
      u.negate && l.push("negate: true"), u.groupId && l.push(`groupId: ${o(u.groupId)}`);
      let d = l.length > 0 ? `, { ${l.join(", ")} }` : "";
      return `indentIfBreak(${n(u.contents)}${d})`;
    }
    if (u.type === x) {
      let l = [];
      u.break && u.break !== "propagated" && l.push("shouldBreak: true"), u.id && l.push(`id: ${o(u.id)}`);
      let d = l.length > 0 ? `, { ${l.join(", ")} }` : "";
      return u.expandedStates ? `conditionalGroup([${u.expandedStates.map((f) => n(f)).join(",")}]${d})` : `group(${n(u.contents)}${d})`;
    }
    if (u.type === S) return `fill([${u.parts.map((l) => n(l)).join(", ")}])`;
    if (u.type === Y) return "lineSuffix(" + n(u.contents) + ")";
    if (u.type === j) return "lineSuffixBoundary";
    if (u.type === N) return `label(${JSON.stringify(u.label)}, ${n(u.contents)})`;
    throw new Error("Unknown doc type " + u.type);
  }
  function o(u) {
    if (typeof u != "symbol") return JSON.stringify(String(u));
    if (u in t) return t[u];
    let i = u.description || "symbol";
    for (let s = 0; ; s++) {
      let a = i + (s > 0 ? ` #${s}` : "");
      if (!r.has(a)) return r.add(a), t[u] = `Symbol.for(${JSON.stringify(a)})`;
    }
  }
}
var Yu = (e, t, r) => {
  if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
};
var y = Yu;
var Sr = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function Nr(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Tr(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var kr = (e) => !(Nr(e) || Tr(e));
var ju = /[^\x20-\x7F]/u;
function Hu(e) {
  if (!e) return 0;
  if (!ju.test(e)) return e.length;
  e = e.replace(Sr(), "  ");
  let t = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += kr(n) ? 1 : 2);
  }
  return t;
}
var Oe = Hu;
function Ne(e, t) {
  if (typeof e == "string") return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(u) {
    if (r.has(u)) return r.get(u);
    let i = o(u);
    return r.set(u, i), i;
  }
  function o(u) {
    switch (G(u)) {
      case W:
        return t(u.map(n));
      case S:
        return t({ ...u, parts: u.parts.map(n) });
      case _:
        return t({ ...u, breakContents: n(u.breakContents), flatContents: n(u.flatContents) });
      case x: {
        let { expandedStates: i, contents: s } = u;
        return i ? (i = i.map(n), s = i[0]) : s = n(s), t({ ...u, contents: s, expandedStates: i });
      }
      case P:
      case L:
      case R:
      case N:
      case Y:
        return t({ ...u, contents: n(u.contents) });
      case U:
      case z:
      case I:
      case j:
      case B:
      case b:
        return t(u);
      default:
        throw new Q(u);
    }
  }
}
function Xe(e, t, r) {
  let n = r, o = false;
  function u(i) {
    if (o) return false;
    let s = t(i);
    s !== void 0 && (o = true, n = s);
  }
  return we(e, u), n;
}
function Wu(e) {
  if (e.type === x && e.break || e.type === B && e.hard || e.type === b) return true;
}
function Ir(e) {
  return Xe(e, Wu, false);
}
function Lr(e) {
  if (e.length > 0) {
    let t = y(false, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function Rr(e) {
  let t = /* @__PURE__ */ new Set(), r = [];
  function n(u) {
    if (u.type === b && Lr(r), u.type === x) {
      if (r.push(u), t.has(u)) return false;
      t.add(u);
    }
  }
  function o(u) {
    u.type === x && r.pop().break && Lr(r);
  }
  we(e, n, o, true);
}
function Mu(e) {
  return e.type === B && !e.hard ? e.soft ? "" : " " : e.type === _ ? e.flatContents : e;
}
function Yr(e) {
  return Ne(e, Mu);
}
function Pr(e) {
  for (e = [...e]; e.length >= 2 && y(false, e, -2).type === B && y(false, e, -1).type === b; ) e.length -= 2;
  if (e.length > 0) {
    let t = Se(y(false, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function Se(e) {
  switch (G(e)) {
    case L:
    case R:
    case x:
    case Y:
    case N: {
      let t = Se(e.contents);
      return { ...e, contents: t };
    }
    case _:
      return { ...e, breakContents: Se(e.breakContents), flatContents: Se(e.flatContents) };
    case S:
      return { ...e, parts: Pr(e.parts) };
    case W:
      return Pr(e);
    case U:
      return e.replace(/[\n\r]*$/u, "");
    case P:
    case z:
    case I:
    case j:
    case B:
    case b:
      break;
    default:
      throw new Q(e);
  }
  return e;
}
function Ze(e) {
  return Se(Vu(e));
}
function $u(e) {
  switch (G(e)) {
    case S:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case x:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === x && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case P:
    case L:
    case R:
    case Y:
      if (!e.contents) return "";
      break;
    case _:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case W: {
      let t = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...o] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof y(false, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...o);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case U:
    case z:
    case I:
    case j:
    case B:
    case N:
    case b:
      break;
    default:
      throw new Q(e);
  }
  return e;
}
function Vu(e) {
  return Ne(e, (t) => $u(t));
}
function jr(e, t = qe) {
  return Ne(e, (r) => typeof r == "string" ? be(t, r.split(`
`)) : r);
}
function Uu(e) {
  if (e.type === B) return true;
}
function Hr(e) {
  return Xe(e, Uu, false);
}
function Qe(e, t) {
  return e.type === N ? { ...e, contents: t(e.contents) } : t(e);
}
var H = Symbol("MODE_BREAK");
var J = Symbol("MODE_FLAT");
var Te = Symbol("cursor");
function Wr() {
  return { value: "", length: 0, queue: [] };
}
function zu(e, t) {
  return bt(e, { type: "indent" }, t);
}
function Gu(e, t, r) {
  return t === Number.NEGATIVE_INFINITY ? e.root || Wr() : t < 0 ? bt(e, { type: "dedent" }, r) : t ? t.type === "root" ? { ...e, root: e } : bt(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, r) : e;
}
function bt(e, t, r) {
  let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], o = "", u = 0, i = 0, s = 0;
  for (let c of n) switch (c.type) {
    case "indent":
      l(), r.useTabs ? a(1) : D(r.tabWidth);
      break;
    case "stringAlign":
      l(), o += c.n, u += c.n.length;
      break;
    case "numberAlign":
      i += 1, s += c.n;
      break;
    default:
      throw new Error(`Unexpected type '${c.type}'`);
  }
  return f(), { ...e, value: o, length: u, queue: n };
  function a(c) {
    o += "	".repeat(c), u += r.tabWidth * c;
  }
  function D(c) {
    o += " ".repeat(c), u += c;
  }
  function l() {
    r.useTabs ? d() : f();
  }
  function d() {
    i > 0 && a(i), p();
  }
  function f() {
    s > 0 && D(s), p();
  }
  function p() {
    i = 0, s = 0;
  }
}
function Ot(e) {
  let t = 0, r = 0, n = e.length;
  e: for (; n--; ) {
    let o = e[n];
    if (o === Te) {
      r++;
      continue;
    }
    for (let u = o.length - 1; u >= 0; u--) {
      let i = o[u];
      if (i === " " || i === "	") t++;
      else {
        e[n] = o.slice(0, u + 1);
        break e;
      }
    }
  }
  if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Te);
  return t;
}
function et(e, t, r, n, o, u) {
  if (r === Number.POSITIVE_INFINITY) return true;
  let i = t.length, s = [e], a = [];
  for (; r >= 0; ) {
    if (s.length === 0) {
      if (i === 0) return true;
      s.push(t[--i]);
      continue;
    }
    let { mode: D, doc: l } = s.pop(), d = G(l);
    switch (d) {
      case U:
        a.push(l), r -= Oe(l);
        break;
      case W:
      case S: {
        let f = d === W ? l : l.parts;
        for (let p = f.length - 1; p >= 0; p--) s.push({ mode: D, doc: f[p] });
        break;
      }
      case L:
      case P:
      case R:
      case N:
        s.push({ mode: D, doc: l.contents });
        break;
      case I:
        r += Ot(a);
        break;
      case x: {
        if (u && l.break) return false;
        let f = l.break ? H : D, p = l.expandedStates && f === H ? y(false, l.expandedStates, -1) : l.contents;
        s.push({ mode: f, doc: p });
        break;
      }
      case _: {
        let p = (l.groupId ? o[l.groupId] || J : D) === H ? l.breakContents : l.flatContents;
        p && s.push({ mode: D, doc: p });
        break;
      }
      case B:
        if (D === H || l.hard) return true;
        l.soft || (a.push(" "), r--);
        break;
      case Y:
        n = true;
        break;
      case j:
        if (n) return false;
        break;
    }
  }
  return false;
}
function Fe(e, t) {
  let r = {}, n = t.printWidth, o = Be(t.endOfLine), u = 0, i = [{ ind: Wr(), mode: H, doc: e }], s = [], a = false, D = [], l = 0;
  for (Rr(e); i.length > 0; ) {
    let { ind: f, mode: p, doc: c } = i.pop();
    switch (G(c)) {
      case U: {
        let F = o !== `
` ? ne(false, c, `
`, o) : c;
        s.push(F), i.length > 0 && (u += Oe(F));
        break;
      }
      case W:
        for (let F = c.length - 1; F >= 0; F--) i.push({ ind: f, mode: p, doc: c[F] });
        break;
      case z:
        if (l >= 2) throw new Error("There are too many 'cursor' in doc.");
        s.push(Te), l++;
        break;
      case L:
        i.push({ ind: zu(f, t), mode: p, doc: c.contents });
        break;
      case P:
        i.push({ ind: Gu(f, c.n, t), mode: p, doc: c.contents });
        break;
      case I:
        u -= Ot(s);
        break;
      case x:
        switch (p) {
          case J:
            if (!a) {
              i.push({ ind: f, mode: c.break ? H : J, doc: c.contents });
              break;
            }
          case H: {
            a = false;
            let F = { ind: f, mode: J, doc: c.contents }, m = n - u, E = D.length > 0;
            if (!c.break && et(F, i, m, E, r)) i.push(F);
            else if (c.expandedStates) {
              let A = y(false, c.expandedStates, -1);
              if (c.break) {
                i.push({ ind: f, mode: H, doc: A });
                break;
              } else for (let w = 1; w < c.expandedStates.length + 1; w++) if (w >= c.expandedStates.length) {
                i.push({ ind: f, mode: H, doc: A });
                break;
              } else {
                let h = c.expandedStates[w], C = { ind: f, mode: J, doc: h };
                if (et(C, i, m, E, r)) {
                  i.push(C);
                  break;
                }
              }
            } else i.push({ ind: f, mode: H, doc: c.contents });
            break;
          }
        }
        c.id && (r[c.id] = y(false, i, -1).mode);
        break;
      case S: {
        let F = n - u, { parts: m } = c;
        if (m.length === 0) break;
        let [E, A] = m, w = { ind: f, mode: J, doc: E }, h = { ind: f, mode: H, doc: E }, C = et(w, [], F, D.length > 0, r, true);
        if (m.length === 1) {
          C ? i.push(w) : i.push(h);
          break;
        }
        let k = { ind: f, mode: J, doc: A }, v = { ind: f, mode: H, doc: A };
        if (m.length === 2) {
          C ? i.push(k, w) : i.push(v, h);
          break;
        }
        m.splice(0, 2);
        let $ = { ind: f, mode: p, doc: Ge(m) }, ye = m[0];
        et({ ind: f, mode: J, doc: [E, A, ye] }, [], F, D.length > 0, r, true) ? i.push($, k, w) : C ? i.push($, v, w) : i.push($, v, h);
        break;
      }
      case _:
      case R: {
        let F = c.groupId ? r[c.groupId] : p;
        if (F === H) {
          let m = c.type === _ ? c.breakContents : c.negate ? c.contents : De(c.contents);
          m && i.push({ ind: f, mode: p, doc: m });
        }
        if (F === J) {
          let m = c.type === _ ? c.flatContents : c.negate ? De(c.contents) : c.contents;
          m && i.push({ ind: f, mode: p, doc: m });
        }
        break;
      }
      case Y:
        D.push({ ind: f, mode: p, doc: c.contents });
        break;
      case j:
        D.length > 0 && i.push({ ind: f, mode: p, doc: _e });
        break;
      case B:
        switch (p) {
          case J:
            if (c.hard) a = true;
            else {
              c.soft || (s.push(" "), u += 1);
              break;
            }
          case H:
            if (D.length > 0) {
              i.push({ ind: f, mode: p, doc: c }, ...D.reverse()), D.length = 0;
              break;
            }
            c.literal ? f.root ? (s.push(o, f.root.value), u = f.root.length) : (s.push(o), u = 0) : (u -= Ot(s), s.push(o + f.value), u = f.length);
            break;
        }
        break;
      case N:
        i.push({ ind: f, mode: p, doc: c.contents });
        break;
      case b:
        break;
      default:
        throw new Q(c);
    }
    i.length === 0 && D.length > 0 && (i.push(...D.reverse()), D.length = 0);
  }
  let d = s.indexOf(Te);
  if (d !== -1) {
    let f = s.indexOf(Te, d + 1), p = s.slice(0, d).join(""), c = s.slice(d + 1, f).join(""), F = s.slice(f + 1).join("");
    return { formatted: p + c + F, cursorNodeStart: p.length, cursorNodeText: c };
  }
  return { formatted: s.join("") };
}
function Ku(e, t, r = 0) {
  let n = 0;
  for (let o = r; o < e.length; ++o) e[o] === "	" ? n = n + t - n % t : n++;
  return n;
}
var me = Ku;
var te;
var Nt;
var tt;
var St = class {
  constructor(t) {
    Dr(this, te);
    this.stack = [t];
  }
  get key() {
    let { stack: t, siblings: r } = this;
    return y(false, t, r === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : y(false, this.stack, -2);
  }
  get node() {
    return y(false, this.stack, -1);
  }
  get parent() {
    return this.getNode(1);
  }
  get grandparent() {
    return this.getNode(2);
  }
  get isInArray() {
    return this.siblings !== null;
  }
  get siblings() {
    let { stack: t } = this, r = y(false, t, -3);
    return Array.isArray(r) ? r : null;
  }
  get next() {
    let { siblings: t } = this;
    return t === null ? null : t[this.index + 1];
  }
  get previous() {
    let { siblings: t } = this;
    return t === null ? null : t[this.index - 1];
  }
  get isFirst() {
    return this.index === 0;
  }
  get isLast() {
    let { siblings: t, index: r } = this;
    return t !== null && r === t.length - 1;
  }
  get isRoot() {
    return this.stack.length === 1;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...pe(this, te, tt).call(this)];
  }
  getName() {
    let { stack: t } = this, { length: r } = t;
    return r > 1 ? y(false, t, -2) : null;
  }
  getValue() {
    return y(false, this.stack, -1);
  }
  getNode(t = 0) {
    let r = pe(this, te, Nt).call(this, t);
    return r === -1 ? null : this.stack[r];
  }
  getParentNode(t = 0) {
    return this.getNode(t + 1);
  }
  call(t, ...r) {
    let { stack: n } = this, { length: o } = n, u = y(false, n, -1);
    for (let i of r) u = u[i], n.push(i, u);
    try {
      return t(this);
    } finally {
      n.length = o;
    }
  }
  callParent(t, r = 0) {
    let n = pe(this, te, Nt).call(this, r + 1), o = this.stack.splice(n + 1);
    try {
      return t(this);
    } finally {
      this.stack.push(...o);
    }
  }
  each(t, ...r) {
    let { stack: n } = this, { length: o } = n, u = y(false, n, -1);
    for (let i of r) u = u[i], n.push(i, u);
    try {
      for (let i = 0; i < u.length; ++i) n.push(i, u[i]), t(this, i, u), n.length -= 2;
    } finally {
      n.length = o;
    }
  }
  map(t, ...r) {
    let n = [];
    return this.each((o, u, i) => {
      n[u] = t(o, u, i);
    }, ...r), n;
  }
  match(...t) {
    let r = this.stack.length - 1, n = null, o = this.stack[r--];
    for (let u of t) {
      if (o === void 0) return false;
      let i = null;
      if (typeof n == "number" && (i = n, n = this.stack[r--], o = this.stack[r--]), u && !u(o, n, i)) return false;
      n = this.stack[r--], o = this.stack[r--];
    }
    return true;
  }
  findAncestor(t) {
    for (let r of pe(this, te, tt).call(this)) if (t(r)) return r;
  }
  hasAncestor(t) {
    for (let r of pe(this, te, tt).call(this)) if (t(r)) return true;
    return false;
  }
};
te = /* @__PURE__ */ new WeakSet(), Nt = function(t) {
  let { stack: r } = this;
  for (let n = r.length - 1; n >= 0; n -= 2) if (!Array.isArray(r[n]) && --t < 0) return n;
  return -1;
}, tt = function* () {
  let { stack: t } = this;
  for (let r = t.length - 3; r >= 0; r -= 2) {
    let n = t[r];
    Array.isArray(n) || (yield n);
  }
};
var Mr = St;
var $r = new Proxy(() => {
}, { get: () => $r });
var ke = $r;
function qu(e) {
  return e !== null && typeof e == "object";
}
var Vr = qu;
function* Tt(e, t) {
  let { getVisitorKeys: r, filter: n = () => true } = t, o = (u) => Vr(u) && n(u);
  for (let u of r(e)) {
    let i = e[u];
    if (Array.isArray(i)) for (let s of i) o(s) && (yield s);
    else o(i) && (yield i);
  }
}
function* Ur(e, t) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let o = r[n];
    for (let u of Tt(o, t)) yield u, r.push(u);
  }
}
function Ee(e) {
  return (t, r, n) => {
    let o = !!(n != null && n.backwards);
    if (r === false) return false;
    let { length: u } = t, i = r;
    for (; i >= 0 && i < u; ) {
      let s = t.charAt(i);
      if (e instanceof RegExp) {
        if (!e.test(s)) return i;
      } else if (!e.includes(s)) return i;
      o ? i-- : i++;
    }
    return i === -1 || i === u ? i : false;
  };
}
var zr = Ee(/\s/u);
var T = Ee(" 	");
var rt = Ee(",; 	");
var nt = Ee(/[^\n\r]/u);
function Ju(e, t, r) {
  let n = !!(r != null && r.backwards);
  if (t === false) return false;
  let o = e.charAt(t);
  if (n) {
    if (e.charAt(t - 1) === "\r" && o === `
`) return t - 2;
    if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t - 1;
  } else {
    if (o === "\r" && e.charAt(t + 1) === `
`) return t + 2;
    if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t + 1;
  }
  return t;
}
var M = Ju;
function Xu(e, t, r = {}) {
  let n = T(e, r.backwards ? t - 1 : t, r), o = M(e, n, r);
  return n !== o;
}
var V = Xu;
function Zu(e) {
  return Array.isArray(e) && e.length > 0;
}
var kt = Zu;
var Gr = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
var Qu = (e) => Object.keys(e).filter((t) => !Gr.has(t));
function eo(e) {
  return e ? (t) => e(t, Gr) : Qu;
}
var X = eo;
function to(e) {
  let t = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "…"), t + (r ? " " + r : "");
}
function Lt(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = false, t.nodeDescription = to(e);
}
function ue(e, t) {
  t.leading = true, t.trailing = false, Lt(e, t);
}
function re(e, t, r) {
  t.leading = false, t.trailing = false, r && (t.marker = r), Lt(e, t);
}
function oe(e, t) {
  t.leading = false, t.trailing = true, Lt(e, t);
}
var Pt = /* @__PURE__ */ new WeakMap();
function ut(e, t) {
  if (Pt.has(e)) return Pt.get(e);
  let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: o }, locStart: u, locEnd: i } = t;
  if (!n) return [];
  let s = ((r == null ? void 0 : r(e, t)) ?? [...Tt(e, { getVisitorKeys: X(o) })]).flatMap((a) => n(a) ? [a] : ut(a, t));
  return s.sort((a, D) => u(a) - u(D) || i(a) - i(D)), Pt.set(e, s), s;
}
function qr(e, t, r, n) {
  let { locStart: o, locEnd: u } = r, i = o(t), s = u(t), a = ut(e, r), D, l, d = 0, f = a.length;
  for (; d < f; ) {
    let p = d + f >> 1, c = a[p], F = o(c), m = u(c);
    if (F <= i && s <= m) return qr(c, t, r, c);
    if (m <= i) {
      D = c, d = p + 1;
      continue;
    }
    if (s <= F) {
      l = c, f = p;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
    let { quasis: p } = n, c = Rt(p, t, r);
    D && Rt(p, D, r) !== c && (D = null), l && Rt(p, l, r) !== c && (l = null);
  }
  return { enclosingNode: n, precedingNode: D, followingNode: l };
}
var It = () => false;
function Jr(e, t) {
  let { comments: r } = e;
  if (delete e.comments, !kt(r) || !t.printer.canAttachComment) return;
  let n = [], { locStart: o, locEnd: u, printer: { experimentalFeatures: { avoidAstMutation: i = false } = {}, handleComments: s = {} }, originalText: a } = t, { ownLine: D = It, endOfLine: l = It, remaining: d = It } = s, f = r.map((p, c) => ({ ...qr(e, p, t), comment: p, text: a, options: t, ast: e, isLastComment: r.length - 1 === c }));
  for (let [p, c] of f.entries()) {
    let { comment: F, precedingNode: m, enclosingNode: E, followingNode: A, text: w, options: h, ast: C, isLastComment: k } = c;
    if (h.parser === "json" || h.parser === "json5" || h.parser === "jsonc" || h.parser === "__js_expression" || h.parser === "__ts_expression" || h.parser === "__vue_expression" || h.parser === "__vue_ts_expression") {
      if (o(F) - o(C) <= 0) {
        ue(C, F);
        continue;
      }
      if (u(F) - u(C) >= 0) {
        oe(C, F);
        continue;
      }
    }
    let v;
    if (i ? v = [c] : (F.enclosingNode = E, F.precedingNode = m, F.followingNode = A, v = [F, w, h, C, k]), ro(w, h, f, p)) F.placement = "ownLine", D(...v) || (A ? ue(A, F) : m ? oe(m, F) : E ? re(E, F) : re(C, F));
    else if (no(w, h, f, p)) F.placement = "endOfLine", l(...v) || (m ? oe(m, F) : A ? ue(A, F) : E ? re(E, F) : re(C, F));
    else if (F.placement = "remaining", !d(...v)) if (m && A) {
      let $ = n.length;
      $ > 0 && n[$ - 1].followingNode !== A && Kr(n, h), n.push(c);
    } else m ? oe(m, F) : A ? ue(A, F) : E ? re(E, F) : re(C, F);
  }
  if (Kr(n, t), !i) for (let p of r) delete p.precedingNode, delete p.enclosingNode, delete p.followingNode;
}
var Xr = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function ro(e, t, r, n) {
  let { comment: o, precedingNode: u } = r[n], { locStart: i, locEnd: s } = t, a = i(o);
  if (u) for (let D = n - 1; D >= 0; D--) {
    let { comment: l, precedingNode: d } = r[D];
    if (d !== u || !Xr(e.slice(s(l), a))) break;
    a = i(l);
  }
  return V(e, a, { backwards: true });
}
function no(e, t, r, n) {
  let { comment: o, followingNode: u } = r[n], { locStart: i, locEnd: s } = t, a = s(o);
  if (u) for (let D = n + 1; D < r.length; D++) {
    let { comment: l, followingNode: d } = r[D];
    if (d !== u || !Xr(e.slice(a, i(l)))) break;
    a = s(l);
  }
  return V(e, a);
}
function Kr(e, t) {
  var s, a;
  let r = e.length;
  if (r === 0) return;
  let { precedingNode: n, followingNode: o } = e[0], u = t.locStart(o), i;
  for (i = r; i > 0; --i) {
    let { comment: D, precedingNode: l, followingNode: d } = e[i - 1];
    ke.strictEqual(l, n), ke.strictEqual(d, o);
    let f = t.originalText.slice(t.locEnd(D), u);
    if (((a = (s = t.printer).isGap) == null ? void 0 : a.call(s, f, t)) ?? /^[\s(]*$/u.test(f)) u = t.locStart(D);
    else break;
  }
  for (let [D, { comment: l }] of e.entries()) D < i ? oe(n, l) : ue(o, l);
  for (let D of [n, o]) D.comments && D.comments.length > 1 && D.comments.sort((l, d) => t.locStart(l) - t.locStart(d));
  e.length = 0;
}
function Rt(e, t, r) {
  let n = r.locStart(t) - 1;
  for (let o = 1; o < e.length; ++o) if (n < r.locStart(e[o])) return o - 1;
  return 0;
}
function uo(e, t) {
  let r = t - 1;
  r = T(e, r, { backwards: true }), r = M(e, r, { backwards: true }), r = T(e, r, { backwards: true });
  let n = M(e, r, { backwards: true });
  return r !== n;
}
var Le = uo;
function Zr(e, t) {
  let r = e.node;
  return r.printed = true, t.printer.printComment(e, t);
}
function oo(e, t) {
  var l;
  let r = e.node, n = [Zr(e, t)], { printer: o, originalText: u, locStart: i, locEnd: s } = t;
  if ((l = o.isBlockComment) == null ? void 0 : l.call(o, r)) {
    let d = V(u, s(r)) ? V(u, i(r), { backwards: true }) ? q : Ke : " ";
    n.push(d);
  } else n.push(q);
  let D = M(u, T(u, s(r)));
  return D !== false && V(u, D) && n.push(q), n;
}
function io(e, t, r) {
  var D;
  let n = e.node, o = Zr(e, t), { printer: u, originalText: i, locStart: s } = t, a = (D = u.isBlockComment) == null ? void 0 : D.call(u, n);
  if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || V(i, s(n), { backwards: true })) {
    let l = Le(i, s(n));
    return { doc: xe([q, l ? q : "", o]), isBlock: a, hasLineSuffix: true };
  }
  return !a || r != null && r.hasLineSuffix ? { doc: [xe([" ", o]), de], isBlock: a, hasLineSuffix: true } : { doc: [" ", o], isBlock: a, hasLineSuffix: false };
}
function so(e, t) {
  let r = e.node;
  if (!r) return {};
  let n = t[Symbol.for("printedComments")];
  if ((r.comments || []).filter((a) => !n.has(a)).length === 0) return { leading: "", trailing: "" };
  let u = [], i = [], s;
  return e.each(() => {
    let a = e.node;
    if (n != null && n.has(a)) return;
    let { leading: D, trailing: l } = a;
    D ? u.push(oo(e, t)) : l && (s = io(e, t, s), i.push(s.doc));
  }, "comments"), { leading: u, trailing: i };
}
function Qr(e, t, r) {
  let { leading: n, trailing: o } = so(e, r);
  return !n && !o ? t : Qe(t, (u) => [n, u, o]);
}
function en(e) {
  let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: r } = e;
  for (let n of t) {
    if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
    delete n.printed;
  }
}
function ao(e) {
  return () => {
  };
}
var tn = ao;
var Pe = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "ConfigError");
  }
};
var Ie = class extends Error {
  constructor() {
    super(...arguments);
    __publicField(this, "name", "UndefinedParserError");
  }
};
var rn = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: false, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function ot({ plugins: e = [], showDeprecated: t = false } = {}) {
  let r = e.flatMap((o) => o.languages ?? []), n = [];
  for (let o of lo(Object.assign({}, ...e.map(({ options: u }) => u), rn))) !t && o.deprecated || (Array.isArray(o.choices) && (t || (o.choices = o.choices.filter((u) => !u.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...Do(o.choices, r, e)])), o.pluginDefaults = Object.fromEntries(e.filter((u) => {
    var i;
    return ((i = u.defaultOptions) == null ? void 0 : i[o.name]) !== void 0;
  }).map((u) => [u.name, u.defaultOptions[o.name]])), n.push(o));
  return { languages: r, options: n };
}
function* Do(e, t, r) {
  let n = new Set(e.map((o) => o.value));
  for (let o of t) if (o.parsers) {
    for (let u of o.parsers) if (!n.has(u)) {
      n.add(u);
      let i = r.find((a) => a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, u)), s = o.name;
      i != null && i.name && (s += ` (plugin: ${i.name})`), yield { value: u, description: s };
    }
  }
}
function lo(e) {
  let t = [];
  for (let [r, n] of Object.entries(e)) {
    let o = { name: r, ...n };
    Array.isArray(o.default) && (o.default = y(false, o.default, -1).value), t.push(o);
  }
  return t;
}
var co = (e) => String(e).split(/[/\\]/u).pop();
function nn(e, t) {
  if (!t) return;
  let r = co(t).toLowerCase();
  return e.find(({ filenames: n }) => n == null ? void 0 : n.some((o) => o.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.some((o) => r.endsWith(o)));
}
function fo(e, t) {
  if (t) return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r == null ? void 0 : r.includes(t)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${t}`));
}
function po(e, t) {
  let r = e.plugins.flatMap((o) => o.languages ?? []), n = fo(r, t.language) ?? nn(r, t.physicalFile) ?? nn(r, t.file) ?? (t.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var un = po;
var ie = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map((r) => ie.value(r)).join(", ")}]`;
  let t = Object.keys(e);
  return t.length === 0 ? "{}" : `{ ${t.map((r) => `${ie.key(r)}: ${ie.value(e[r])}`).join(", ")} }`;
}, pair: ({ key: e, value: t }) => ie.value({ [e]: t }) };
var Yt = Me(it(), 1);
var an = (e, t, { descriptor: r }) => {
  let n = [`${Yt.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`];
  return t && n.push(`we now treat it as ${Yt.default.blue(typeof t == "string" ? r.key(t) : r.pair(t))}`), n.join("; ") + ".";
};
var le = Me(it(), 1);
var st = Symbol.for("vnopts.VALUE_NOT_EXIST");
var he = Symbol.for("vnopts.VALUE_UNCHANGED");
var Dn = " ".repeat(2);
var cn = (e, t, r) => {
  let { text: n, list: o } = r.normalizeExpectedResult(r.schemas[e].expected(r)), u = [];
  return n && u.push(ln(e, t, n, r.descriptor)), o && u.push([ln(e, t, o.title, r.descriptor)].concat(o.values.map((i) => fn(i, r.loggerPrintWidth))).join(`
`)), pn(u, r.loggerPrintWidth);
};
function ln(e, t, r, n) {
  return [`Invalid ${le.default.red(n.key(e))} value.`, `Expected ${le.default.blue(r)},`, `but received ${t === st ? le.default.gray("nothing") : le.default.red(n.value(t))}.`].join(" ");
}
function fn({ text: e, list: t }, r) {
  let n = [];
  return e && n.push(`- ${le.default.blue(e)}`), t && n.push([`- ${le.default.blue(t.title)}:`].concat(t.values.map((o) => fn(o, r - Dn.length).replace(/^|\n/g, `$&${Dn}`))).join(`
`)), pn(n, r);
}
function pn(e, t) {
  if (e.length === 1) return e[0];
  let [r, n] = e, [o, u] = e.map((i) => i.split(`
`, 1)[0].length);
  return o > t && o > u ? n : r;
}
var Wt = Me(it(), 1);
var jt = [];
var dn = [];
function Ht(e, t) {
  if (e === t) return 0;
  let r = e;
  e.length > t.length && (e = t, t = r);
  let n = e.length, o = t.length;
  for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-o); ) n--, o--;
  let u = 0;
  for (; u < n && e.charCodeAt(u) === t.charCodeAt(u); ) u++;
  if (n -= u, o -= u, n === 0) return o;
  let i, s, a, D, l = 0, d = 0;
  for (; l < n; ) dn[l] = e.charCodeAt(u + l), jt[l] = ++l;
  for (; d < o; ) for (i = t.charCodeAt(u + d), a = d++, s = d, l = 0; l < n; l++) D = i === dn[l] ? a : a + 1, a = jt[l], s = jt[l] = a > s ? D > s ? s + 1 : D : D > a ? a + 1 : D;
  return s;
}
var at = (e, t, { descriptor: r, logger: n, schemas: o }) => {
  let u = [`Ignored unknown option ${Wt.default.yellow(r.pair({ key: e, value: t }))}.`], i = Object.keys(o).sort().find((s) => Ht(e, s) < 3);
  i && u.push(`Did you mean ${Wt.default.blue(r.key(i))}?`), n.warn(u.join(" "));
};
var Fo = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function mo(e, t) {
  let r = new e(t), n = Object.create(r);
  for (let o of Fo) o in t && (n[o] = Eo(t[o], r, O.prototype[o].length));
  return n;
}
var O = class {
  static create(t) {
    return mo(this, t);
  }
  constructor(t) {
    this.name = t.name;
  }
  default(t) {
  }
  expected(t) {
    return "nothing";
  }
  validate(t, r) {
    return false;
  }
  deprecated(t, r) {
    return false;
  }
  forward(t, r) {
  }
  redirect(t, r) {
  }
  overlap(t, r, n) {
    return t;
  }
  preprocess(t, r) {
    return t;
  }
  postprocess(t, r) {
    return he;
  }
};
function Eo(e, t, r) {
  return typeof e == "function" ? (...n) => e(...n.slice(0, r - 1), t, ...n.slice(r - 1)) : () => e;
}
var Dt = class extends O {
  constructor(t) {
    super(t), this._sourceName = t.sourceName;
  }
  expected(t) {
    return t.schemas[this._sourceName].expected(t);
  }
  validate(t, r) {
    return r.schemas[this._sourceName].validate(t, r);
  }
  redirect(t, r) {
    return this._sourceName;
  }
};
var lt = class extends O {
  expected() {
    return "anything";
  }
  validate() {
    return true;
  }
};
var ct = class extends O {
  constructor({ valueSchema: t, name: r = t.name, ...n }) {
    super({ ...n, name: r }), this._valueSchema = t;
  }
  expected(t) {
    let { text: r, list: n } = t.normalizeExpectedResult(this._valueSchema.expected(t));
    return { text: r && `an array of ${r}`, list: n && { title: "an array of the following values", values: [{ list: n }] } };
  }
  validate(t, r) {
    if (!Array.isArray(t)) return false;
    let n = [];
    for (let o of t) {
      let u = r.normalizeValidateResult(this._valueSchema.validate(o, r), o);
      u !== true && n.push(u.value);
    }
    return n.length === 0 ? true : { value: n };
  }
  deprecated(t, r) {
    let n = [];
    for (let o of t) {
      let u = r.normalizeDeprecatedResult(this._valueSchema.deprecated(o, r), o);
      u !== false && n.push(...u.map(({ value: i }) => ({ value: [i] })));
    }
    return n;
  }
  forward(t, r) {
    let n = [];
    for (let o of t) {
      let u = r.normalizeForwardResult(this._valueSchema.forward(o, r), o);
      n.push(...u.map(Fn));
    }
    return n;
  }
  redirect(t, r) {
    let n = [], o = [];
    for (let u of t) {
      let i = r.normalizeRedirectResult(this._valueSchema.redirect(u, r), u);
      "remain" in i && n.push(i.remain), o.push(...i.redirect.map(Fn));
    }
    return n.length === 0 ? { redirect: o } : { redirect: o, remain: n };
  }
  overlap(t, r) {
    return t.concat(r);
  }
};
function Fn({ from: e, to: t }) {
  return { from: [e], to: t };
}
var ft = class extends O {
  expected() {
    return "true or false";
  }
  validate(t) {
    return typeof t == "boolean";
  }
};
function En(e, t) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let n of e) {
    let o = n[t];
    if (r[o]) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    r[o] = n;
  }
  return r;
}
function hn(e, t) {
  let r = /* @__PURE__ */ new Map();
  for (let n of e) {
    let o = n[t];
    if (r.has(o)) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    r.set(o, n);
  }
  return r;
}
function Cn() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t) => {
    let r = JSON.stringify(t);
    return e[r] ? true : (e[r] = true, false);
  };
}
function gn(e, t) {
  let r = [], n = [];
  for (let o of e) t(o) ? r.push(o) : n.push(o);
  return [r, n];
}
function yn(e) {
  return e === Math.floor(e);
}
function An(e, t) {
  if (e === t) return 0;
  let r = typeof e, n = typeof t, o = ["undefined", "object", "boolean", "number", "string"];
  return r !== n ? o.indexOf(r) - o.indexOf(n) : r !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function Bn(e) {
  return (...t) => {
    let r = e(...t);
    return typeof r == "string" ? new Error(r) : r;
  };
}
function Mt(e) {
  return e === void 0 ? {} : e;
}
function $t(e) {
  if (typeof e == "string") return { text: e };
  let { text: t, list: r } = e;
  return ho((t || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? { text: t, list: { title: r.title, values: r.values.map($t) } } : { text: t };
}
function Vt(e, t) {
  return e === true ? true : e === false ? { value: t } : e;
}
function Ut(e, t, r = false) {
  return e === false ? false : e === true ? r ? true : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? false : e;
}
function mn(e, t) {
  return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
}
function pt(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((r) => mn(r, t)) : [mn(e, t)];
}
function zt(e, t) {
  let r = pt(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
  return r.length === 0 ? { remain: t, redirect: r } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: r } : { redirect: r };
}
function ho(e, t) {
  if (!e) throw new Error(t);
}
var dt = class extends O {
  constructor(t) {
    super(t), this._choices = hn(t.choices.map((r) => r && typeof r == "object" ? r : { value: r }), "value");
  }
  expected({ descriptor: t }) {
    let r = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(An).map(t.value), n = r.slice(0, -2), o = r.slice(-2);
    return { text: n.concat(o.join(" or ")).join(", "), list: { title: "one of the following values", values: r } };
  }
  validate(t) {
    return this._choices.has(t);
  }
  deprecated(t) {
    let r = this._choices.get(t);
    return r && r.deprecated ? { value: t } : false;
  }
  forward(t) {
    let r = this._choices.get(t);
    return r ? r.forward : void 0;
  }
  redirect(t) {
    let r = this._choices.get(t);
    return r ? r.redirect : void 0;
  }
};
var Ft = class extends O {
  expected() {
    return "a number";
  }
  validate(t, r) {
    return typeof t == "number";
  }
};
var mt = class extends Ft {
  expected() {
    return "an integer";
  }
  validate(t, r) {
    return r.normalizeValidateResult(super.validate(t, r), t) === true && yn(t);
  }
};
var Re = class extends O {
  expected() {
    return "a string";
  }
  validate(t) {
    return typeof t == "string";
  }
};
var wn = ie;
var xn = at;
var _n = cn;
var vn = an;
var Et = class {
  constructor(t, r) {
    let { logger: n = console, loggerPrintWidth: o = 80, descriptor: u = wn, unknown: i = xn, invalid: s = _n, deprecated: a = vn, missing: D = () => false, required: l = () => false, preprocess: d = (p) => p, postprocess: f = () => he } = r || {};
    this._utils = { descriptor: u, logger: n || { warn: () => {
    } }, loggerPrintWidth: o, schemas: En(t, "name"), normalizeDefaultResult: Mt, normalizeExpectedResult: $t, normalizeDeprecatedResult: Ut, normalizeForwardResult: pt, normalizeRedirectResult: zt, normalizeValidateResult: Vt }, this._unknownHandler = i, this._invalidHandler = Bn(s), this._deprecatedHandler = a, this._identifyMissing = (p, c) => !(p in c) || D(p, c), this._identifyRequired = l, this._preprocess = d, this._postprocess = f, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = Cn();
  }
  normalize(t) {
    let r = {}, o = [this._preprocess(t, this._utils)], u = () => {
      for (; o.length !== 0; ) {
        let i = o.shift(), s = this._applyNormalization(i, r);
        o.push(...s);
      }
    };
    u();
    for (let i of Object.keys(this._utils.schemas)) {
      let s = this._utils.schemas[i];
      if (!(i in r)) {
        let a = Mt(s.default(this._utils));
        "value" in a && o.push({ [i]: a.value });
      }
    }
    u();
    for (let i of Object.keys(this._utils.schemas)) {
      if (!(i in r)) continue;
      let s = this._utils.schemas[i], a = r[i], D = s.postprocess(a, this._utils);
      D !== he && (this._applyValidation(D, i, s), r[i] = D);
    }
    return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
  }
  _applyNormalization(t, r) {
    let n = [], { knownKeys: o, unknownKeys: u } = this._partitionOptionKeys(t);
    for (let i of o) {
      let s = this._utils.schemas[i], a = s.preprocess(t[i], this._utils);
      this._applyValidation(a, i, s);
      let D = ({ from: p, to: c }) => {
        n.push(typeof c == "string" ? { [c]: p } : { [c.key]: c.value });
      }, l = ({ value: p, redirectTo: c }) => {
        let F = Ut(s.deprecated(p, this._utils), a, true);
        if (F !== false) if (F === true) this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, c, this._utils));
        else for (let { value: m } of F) {
          let E = { key: i, value: m };
          if (!this._hasDeprecationWarned(E)) {
            let A = typeof c == "string" ? { key: c, value: m } : c;
            this._utils.logger.warn(this._deprecatedHandler(E, A, this._utils));
          }
        }
      };
      pt(s.forward(a, this._utils), a).forEach(D);
      let f = zt(s.redirect(a, this._utils), a);
      if (f.redirect.forEach(D), "remain" in f) {
        let p = f.remain;
        r[i] = i in r ? s.overlap(r[i], p, this._utils) : p, l({ value: p });
      }
      for (let { from: p, to: c } of f.redirect) l({ value: p, redirectTo: c });
    }
    for (let i of u) {
      let s = t[i];
      this._applyUnknownHandler(i, s, r, (a, D) => {
        n.push({ [a]: D });
      });
    }
    return n;
  }
  _applyRequiredCheck(t) {
    for (let r of Object.keys(this._utils.schemas)) if (this._identifyMissing(r, t) && this._identifyRequired(r)) throw this._invalidHandler(r, st, this._utils);
  }
  _partitionOptionKeys(t) {
    let [r, n] = gn(Object.keys(t).filter((o) => !this._identifyMissing(o, t)), (o) => o in this._utils.schemas);
    return { knownKeys: r, unknownKeys: n };
  }
  _applyValidation(t, r, n) {
    let o = Vt(n.validate(t, this._utils), t);
    if (o !== true) throw this._invalidHandler(r, o.value, this._utils);
  }
  _applyUnknownHandler(t, r, n, o) {
    let u = this._unknownHandler(t, r, this._utils);
    if (u) for (let i of Object.keys(u)) {
      if (this._identifyMissing(i, u)) continue;
      let s = u[i];
      i in this._utils.schemas ? o(i, s) : n[i] = s;
    }
  }
  _applyPostprocess(t) {
    let r = this._postprocess(t, this._utils);
    if (r !== he) {
      if (r.delete) for (let n of r.delete) delete t[n];
      if (r.override) {
        let { knownKeys: n, unknownKeys: o } = this._partitionOptionKeys(r.override);
        for (let u of n) {
          let i = r.override[u];
          this._applyValidation(i, u, this._utils.schemas[u]), t[u] = i;
        }
        for (let u of o) {
          let i = r.override[u];
          this._applyUnknownHandler(u, i, t, (s, a) => {
            let D = this._utils.schemas[s];
            this._applyValidation(a, s, D), t[s] = a;
          });
        }
      }
    }
  }
};
var Gt;
function go(e, t, { logger: r = false, isCLI: n = false, passThrough: o = false, FlagSchema: u, descriptor: i } = {}) {
  if (n) {
    if (!u) throw new Error("'FlagSchema' option is required.");
    if (!i) throw new Error("'descriptor' option is required.");
  } else i = ie;
  let s = o ? Array.isArray(o) ? (f, p) => o.includes(f) ? { [f]: p } : void 0 : (f, p) => ({ [f]: p }) : (f, p, c) => {
    let { _: F, ...m } = c.schemas;
    return at(f, p, { ...c, schemas: m });
  }, a = yo(t, { isCLI: n, FlagSchema: u }), D = new Et(a, { logger: r, unknown: s, descriptor: i }), l = r !== false;
  l && Gt && (D._hasDeprecationWarned = Gt);
  let d = D.normalize(e);
  return l && (Gt = D._hasDeprecationWarned), d;
}
function yo(e, { isCLI: t, FlagSchema: r }) {
  let n = [];
  t && n.push(lt.create({ name: "_" }));
  for (let o of e) n.push(Ao(o, { isCLI: t, optionInfos: e, FlagSchema: r })), o.alias && t && n.push(Dt.create({ name: o.alias, sourceName: o.name }));
  return n;
}
function Ao(e, { isCLI: t, optionInfos: r, FlagSchema: n }) {
  let { name: o } = e, u = { name: o }, i, s = {};
  switch (e.type) {
    case "int":
      i = mt, t && (u.preprocess = Number);
      break;
    case "string":
      i = Re;
      break;
    case "choice":
      i = dt, u.choices = e.choices.map((a) => a != null && a.redirect ? { ...a, redirect: { to: { key: e.name, value: a.redirect } } } : a);
      break;
    case "boolean":
      i = ft;
      break;
    case "flag":
      i = n, u.flags = r.flatMap((a) => [a.alias, a.description && a.name, a.oppositeDescription && `no-${a.name}`].filter(Boolean));
      break;
    case "path":
      i = Re;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? u.validate = (a, D, l) => e.exception(a) || D.validate(a, l) : u.validate = (a, D, l) => a === void 0 || D.validate(a, l), e.redirect && (s.redirect = (a) => a ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (s.deprecated = true), t && !e.array) {
    let a = u.preprocess || ((D) => D);
    u.preprocess = (D, l, d) => l.preprocess(a(Array.isArray(D) ? y(false, D, -1) : D), d);
  }
  return e.array ? ct.create({ ...t ? { preprocess: (a) => Array.isArray(a) ? a : [a] } : {}, ...s, valueSchema: i.create(u) }) : i.create({ ...u, ...s });
}
var bn = go;
var Bo = (e, t, r) => {
  if (!(e && t == null)) {
    if (t.findLast) return t.findLast(r);
    for (let n = t.length - 1; n >= 0; n--) {
      let o = t[n];
      if (r(o, n, t)) return o;
    }
  }
};
var Kt = Bo;
function qt(e, t) {
  if (!t) throw new Error("parserName is required.");
  let r = Kt(false, e, (o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t));
  if (r) return r;
  let n = `Couldn't resolve parser "${t}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new Pe(n);
}
function On(e, t) {
  if (!t) throw new Error("astFormat is required.");
  let r = Kt(false, e, (o) => o.printers && Object.prototype.hasOwnProperty.call(o.printers, t));
  if (r) return r;
  let n = `Couldn't find plugin for AST format "${t}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new Pe(n);
}
function ht({ plugins: e, parser: t }) {
  let r = qt(e, t);
  return Jt(r, t);
}
function Jt(e, t) {
  let r = e.parsers[t];
  return typeof r == "function" ? r() : r;
}
function Sn(e, t) {
  let r = e.printers[t];
  return typeof r == "function" ? r() : r;
}
var Nn = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function wo(e, t = {}) {
  var d;
  let r = { ...e };
  if (!r.parser) if (r.filepath) {
    if (r.parser = un(r, { physicalFile: r.filepath }), !r.parser) throw new Ie(`No parser could be inferred for file "${r.filepath}".`);
  } else throw new Ie("No parser and no file path given, couldn't infer a parser.");
  let n = ot({ plugins: e.plugins, showDeprecated: true }).options, o = { ...Nn, ...Object.fromEntries(n.filter((f) => f.default !== void 0).map((f) => [f.name, f.default])) }, u = qt(r.plugins, r.parser), i = await Jt(u, r.parser);
  r.astFormat = i.astFormat, r.locEnd = i.locEnd, r.locStart = i.locStart;
  let s = (d = u.printers) != null && d[i.astFormat] ? u : On(r.plugins, i.astFormat), a = await Sn(s, i.astFormat);
  r.printer = a;
  let D = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, f]) => f !== void 0)) : {}, l = { ...o, ...D };
  for (let [f, p] of Object.entries(l)) (r[f] === null || r[f] === void 0) && (r[f] = p);
  return r.parser === "json" && (r.trailingComma = "none"), bn(r, n, { passThrough: Object.keys(Nn), ...t });
}
var se = wo;
var Vn = Me($n(), 1);
async function ko(e, t) {
  let r = await ht(t), n = r.preprocess ? r.preprocess(e, t) : e;
  t.originalText = n;
  let o;
  try {
    o = await r.parse(n, t, t);
  } catch (u) {
    Lo(u, e);
  }
  return { text: n, ast: o };
}
function Lo(e, t) {
  let { loc: r } = e;
  if (r) {
    let n = (0, Vn.codeFrameColumns)(t, r, { highlightCode: true });
    throw e.message += `
` + n, e.codeFrame = n, e;
  }
  throw e;
}
var ce = ko;
async function Un(e, t, r, n, o) {
  let { embeddedLanguageFormatting: u, printer: { embed: i, hasPrettierIgnore: s = () => false, getVisitorKeys: a } } = r;
  if (!i || u !== "auto") return;
  if (i.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
  let D = X(i.getVisitorKeys ?? a), l = [];
  p();
  let d = e.stack;
  for (let { print: c, node: F, pathStack: m } of l) try {
    e.stack = m;
    let E = await c(f, t, e, r);
    E && o.set(F, E);
  } catch (E) {
    if (globalThis.PRETTIER_DEBUG) throw E;
  }
  e.stack = d;
  function f(c, F) {
    return Po(c, F, r, n);
  }
  function p() {
    let { node: c } = e;
    if (c === null || typeof c != "object" || s(e)) return;
    for (let m of D(c)) Array.isArray(c[m]) ? e.each(p, m) : e.call(p, m);
    let F = i(e, r);
    if (F) {
      if (typeof F == "function") {
        l.push({ print: F, node: c, pathStack: [...e.stack] });
        return;
      }
      o.set(c, F);
    }
  }
}
async function Po(e, t, r, n) {
  let o = await se({ ...r, ...t, parentParser: r.parser, originalText: e }, { passThrough: true }), { ast: u } = await ce(e, o), i = await n(u, o);
  return Ze(i);
}
function Io(e, t) {
  let { originalText: r, [Symbol.for("comments")]: n, locStart: o, locEnd: u, [Symbol.for("printedComments")]: i } = t, { node: s } = e, a = o(s), D = u(s);
  for (let l of n) o(l) >= a && u(l) <= D && i.add(l);
  return r.slice(a, D);
}
var zn = Io;
async function Ye(e, t) {
  ({ ast: e } = await Qt(e, t));
  let r = /* @__PURE__ */ new Map(), n = new Mr(e), o = tn(t), u = /* @__PURE__ */ new Map();
  await Un(n, s, t, Ye, u);
  let i = await Gn(n, t, s, void 0, u);
  return en(t), i;
  function s(D, l) {
    return D === void 0 || D === n ? a(l) : Array.isArray(D) ? n.call(() => a(l), ...D) : n.call(() => a(l), D);
  }
  function a(D) {
    o(n);
    let l = n.node;
    if (l == null) return "";
    let d = l && typeof l == "object" && D === void 0;
    if (d && r.has(l)) return r.get(l);
    let f = Gn(n, t, s, D, u);
    return d && r.set(l, f), f;
  }
}
function Gn(e, t, r, n, o) {
  var a;
  let { node: u } = e, { printer: i } = t, s;
  return (a = i.hasPrettierIgnore) != null && a.call(i, e) ? s = zn(e, t) : o.has(u) ? s = o.get(u) : s = i.print(e, t, r, n), u === t.cursorNode && (s = Qe(s, (D) => [ve, D, ve])), i.printComment && (!i.willPrintOwnComments || !i.willPrintOwnComments(e, t)) && (s = Qr(e, s, t)), s;
}
async function Qt(e, t) {
  let r = e.comments ?? [];
  t[Symbol.for("comments")] = r, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Jr(e, t);
  let { printer: { preprocess: n } } = t;
  return e = n ? await n(e, t) : e, { ast: e, comments: r };
}
function Ro(e, t) {
  let { cursorOffset: r, locStart: n, locEnd: o } = t, u = X(t.printer.getVisitorKeys), i = (a) => n(a) <= r && o(a) >= r, s = e;
  for (let a of Ur(e, { getVisitorKeys: u, filter: i })) s = a;
  return s;
}
var Kn = Ro;
function Yo(e, t) {
  let { printer: { massageAstNode: r, getVisitorKeys: n } } = t;
  if (!r) return e;
  let o = X(n), u = r.ignoredProperties ?? /* @__PURE__ */ new Set();
  return i(e);
  function i(s, a) {
    if (!(s !== null && typeof s == "object")) return s;
    if (Array.isArray(s)) return s.map((f) => i(f, a)).filter(Boolean);
    let D = {}, l = new Set(o(s));
    for (let f in s) !Object.prototype.hasOwnProperty.call(s, f) || u.has(f) || (l.has(f) ? D[f] = i(s[f], s) : D[f] = s[f]);
    let d = r(s, D, a);
    if (d !== null) return d ?? D;
  }
}
var qn = Yo;
var jo = (e, t, r) => {
  if (!(e && t == null)) {
    if (t.findLastIndex) return t.findLastIndex(r);
    for (let n = t.length - 1; n >= 0; n--) {
      let o = t[n];
      if (r(o, n, t)) return n;
    }
    return -1;
  }
};
var Jn = jo;
var Ho = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function Wo(e, t) {
  let r = [e.node, ...e.parentNodes], n = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
  return r.find((o) => Qn.has(o.type) && n.has(o));
}
function Xn(e) {
  let t = Jn(false, e, (r) => r.type !== "Program" && r.type !== "File");
  return t === -1 ? e : e.slice(0, t + 1);
}
function Mo(e, t, { locStart: r, locEnd: n }) {
  let o = e.node, u = t.node;
  if (o === u) return { startNode: o, endNode: u };
  let i = r(e.node);
  for (let a of Xn(t.parentNodes)) if (r(a) >= i) u = a;
  else break;
  let s = n(t.node);
  for (let a of Xn(e.parentNodes)) {
    if (n(a) <= s) o = a;
    else break;
    if (o === u) break;
  }
  return { startNode: o, endNode: u };
}
function er(e, t, r, n, o = [], u) {
  let { locStart: i, locEnd: s } = r, a = i(e), D = s(e);
  if (!(t > D || t < a || u === "rangeEnd" && t === a || u === "rangeStart" && t === D)) {
    for (let l of ut(e, r)) {
      let d = er(l, t, r, n, [e, ...o], u);
      if (d) return d;
    }
    if (!n || n(e, o[0])) return { node: e, parentNodes: o };
  }
}
function $o(e, t) {
  return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var Qn = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
var Vo = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function Zn(e, t, r) {
  if (!t) return false;
  switch (e.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      return $o(t.type, r == null ? void 0 : r.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return Qn.has(t.type);
    case "graphql":
      return Vo.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return false;
}
function eu(e, t, r) {
  let { rangeStart: n, rangeEnd: o, locStart: u, locEnd: i } = t;
  ke.ok(o > n);
  let s = e.slice(n, o).search(/\S/u), a = s === -1;
  if (!a) for (n += s; o > n && !/\S/u.test(e[o - 1]); --o) ;
  let D = er(r, n, t, (p, c) => Zn(t, p, c), [], "rangeStart"), l = a ? D : er(r, o, t, (p) => Zn(t, p), [], "rangeEnd");
  if (!D || !l) return { rangeStart: 0, rangeEnd: 0 };
  let d, f;
  if (Ho(t)) {
    let p = Wo(D, l);
    d = p, f = p;
  } else ({ startNode: d, endNode: f } = Mo(D, l, t));
  return { rangeStart: Math.min(u(d), u(f)), rangeEnd: Math.max(i(d), i(f)) };
}
var uu = "\uFEFF";
var tu = Symbol("cursor");
async function ou(e, t, r = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: n, text: o } = await ce(e, t);
  t.cursorOffset >= 0 && (t.cursorNode = Kn(n, t));
  let u = await Ye(n, t, r);
  r > 0 && (u = Je([q, u], r, t.tabWidth));
  let i = Fe(u, t);
  if (r > 0) {
    let a = i.formatted.trim();
    i.cursorNodeStart !== void 0 && (i.cursorNodeStart -= i.formatted.indexOf(a)), i.formatted = a + Be(t.endOfLine);
  }
  let s = t[Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let a, D, l, d, f;
    if (t.cursorNode && i.cursorNodeText ? (a = t.locStart(t.cursorNode), D = o.slice(a, t.locEnd(t.cursorNode)), l = t.cursorOffset - a, d = i.cursorNodeStart, f = i.cursorNodeText) : (a = 0, D = o, l = t.cursorOffset, d = 0, f = i.formatted), D === f) return { formatted: i.formatted, cursorOffset: d + l, comments: s };
    let p = D.split("");
    p.splice(l, 0, tu);
    let c = f.split(""), F = dr(p, c), m = d;
    for (let E of F) if (E.removed) {
      if (E.value.includes(tu)) break;
    } else m += E.count;
    return { formatted: i.formatted, cursorOffset: m, comments: s };
  }
  return { formatted: i.formatted, cursorOffset: -1, comments: s };
}
async function Uo(e, t) {
  let { ast: r, text: n } = await ce(e, t), { rangeStart: o, rangeEnd: u } = eu(n, t, r), i = n.slice(o, u), s = Math.min(o, n.lastIndexOf(`
`, o) + 1), a = n.slice(s, o).match(/^\s*/u)[0], D = me(a, t.tabWidth), l = await ou(i, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > o && t.cursorOffset <= u ? t.cursorOffset - o : -1, endOfLine: "lf" }, D), d = l.formatted.trimEnd(), { cursorOffset: f } = t;
  f > u ? f += d.length - i.length : l.cursorOffset >= 0 && (f = l.cursorOffset + o);
  let p = n.slice(0, o) + d + n.slice(u);
  if (t.endOfLine !== "lf") {
    let c = Be(t.endOfLine);
    f >= 0 && c === `\r
` && (f += wt(p.slice(0, f), `
`)), p = ne(false, p, `
`, c);
  }
  return { formatted: p, cursorOffset: f, comments: l.comments };
}
function tr(e, t, r) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? r : t;
}
function ru(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: o } = t;
  return r = tr(e, r, -1), n = tr(e, n, 0), o = tr(e, o, e.length), { ...t, cursorOffset: r, rangeStart: n, rangeEnd: o };
}
function iu(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: u } = ru(e, t), i = e.charAt(0) === uu;
  if (i && (e = e.slice(1), r--, n--, o--), u === "auto" && (u = Fr(e)), e.includes("\r")) {
    let s = (a) => wt(e.slice(0, Math.max(a, 0)), `\r
`);
    r -= s(r), n -= s(n), o -= s(o), e = mr(e);
  }
  return { hasBOM: i, text: e, options: ru(e, { ...t, cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: u }) };
}
async function nu(e, t) {
  let r = await ht(t);
  return !r.hasPragma || r.hasPragma(e);
}
async function rr(e, t) {
  let { hasBOM: r, text: n, options: o } = iu(e, await se(t));
  if (o.rangeStart >= o.rangeEnd && n !== "" || o.requirePragma && !await nu(n, o)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let u;
  return o.rangeStart > 0 || o.rangeEnd < n.length ? u = await Uo(n, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await nu(n, o) && (n = o.printer.insertPragma(n)), u = await ou(n, o)), r && (u.formatted = uu + u.formatted, u.cursorOffset >= 0 && u.cursorOffset++), u;
}
async function su(e, t, r) {
  let { text: n, options: o } = iu(e, await se(t)), u = await ce(n, o);
  return r && (r.preprocessForPrint && (u.ast = await Qt(u.ast, o)), r.massage && (u.ast = qn(u.ast, o))), u;
}
async function au(e, t) {
  t = await se(t);
  let r = await Ye(e, t);
  return Fe(r, t);
}
async function Du(e, t) {
  let r = Or(e), { formatted: n } = await rr(r, { ...t, parser: "__js_expression" });
  return n;
}
async function lu(e, t) {
  t = await se(t);
  let { ast: r } = await ce(e, t);
  return Ye(r, t);
}
async function cu(e, t) {
  return Fe(e, await se(t));
}
var nr = {};
We(nr, { builders: () => Go, printer: () => Ko, utils: () => qo });
var Go = { join: be, line: Ke, softline: vr, hardline: q, literalline: qe, group: _t, conditionalGroup: Ar, fill: Ge, lineSuffix: xe, lineSuffixBoundary: xr, cursor: ve, breakParent: de, ifBreak: Br, trim: _r, indent: De, indentIfBreak: wr, align: ae, addAlignmentToDoc: Je, markAsRoot: gr, dedentToRoot: Cr, dedent: yr, hardlineWithoutBreakParent: _e, literallineWithoutBreakParent: vt, label: br, concat: (e) => e };
var Ko = { printDocToString: Fe };
var qo = { willBreak: Ir, traverseDoc: we, findInDoc: Xe, mapDoc: Ne, removeLines: Yr, stripTrailingHardline: Ze, replaceEndOfLine: jr, canBreak: Hr };
var fu = "3.3.3";
var or = {};
We(or, { addDanglingComment: () => re, addLeadingComment: () => ue, addTrailingComment: () => oe, getAlignmentSize: () => me, getIndentSize: () => pu, getMaxContinuousCount: () => du, getNextNonSpaceNonCommentCharacter: () => Fu, getNextNonSpaceNonCommentCharacterIndex: () => si, getStringWidth: () => Oe, hasNewline: () => V, hasNewlineInRange: () => mu, hasSpaces: () => Eu, isNextLineEmpty: () => ci, isNextLineEmptyAfterIndex: () => gt, isPreviousLineEmpty: () => Di, makeString: () => hu, skip: () => Ee, skipEverythingButNewLine: () => nt, skipInlineComment: () => Ce, skipNewline: () => M, skipSpaces: () => T, skipToLineEnd: () => rt, skipTrailingComment: () => ge, skipWhitespace: () => zr });
function Jo(e, t) {
  if (t === false) return false;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let r = t + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
  }
  return t;
}
var Ce = Jo;
function Xo(e, t) {
  return t === false ? false : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? nt(e, t) : t;
}
var ge = Xo;
function Zo(e, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = T(e, n), n = Ce(e, n), n = ge(e, n), n = M(e, n);
  return n;
}
var je = Zo;
function Qo(e, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = rt(e, n), n = Ce(e, n), n = T(e, n);
  return n = ge(e, n), n = M(e, n), n !== false && V(e, n);
}
var gt = Qo;
function ei(e, t) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : me(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
}
var pu = ei;
function ur(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function ti(e, t) {
  let r = e.match(new RegExp(`(${ur(t)})+`, "gu"));
  return r === null ? 0 : r.reduce((n, o) => Math.max(n, o.length / t.length), 0);
}
var du = ti;
function ri(e, t) {
  let r = je(e, t);
  return r === false ? "" : e.charAt(r);
}
var Fu = ri;
function ni(e, t, r) {
  for (let n = t; n < r; ++n) if (e.charAt(n) === `
`) return true;
  return false;
}
var mu = ni;
function ui(e, t, r = {}) {
  return T(e, r.backwards ? t - 1 : t, r) !== t;
}
var Eu = ui;
function oi(e, t, r) {
  let n = t === '"' ? "'" : '"', u = ne(false, e, /\\(.)|(["'])/gsu, (i, s, a) => s === n ? s : a === t ? "\\" + a : a || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
  return t + u + t;
}
var hu = oi;
function ii(e, t, r) {
  return je(e, r(t));
}
function si(e, t) {
  return arguments.length === 2 || typeof t == "number" ? je(e, t) : ii(...arguments);
}
function ai(e, t, r) {
  return Le(e, r(t));
}
function Di(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Le(e, t) : ai(...arguments);
}
function li(e, t, r) {
  return gt(e, r(t));
}
function ci(e, t) {
  return arguments.length === 2 || typeof t == "number" ? gt(e, t) : li(...arguments);
}
function fe(e, t = 1) {
  return async (...r) => {
    let n = r[t] ?? {}, o = n.plugins ?? [];
    return r[t] = { ...n, plugins: Array.isArray(o) ? o : Object.values(o) }, e(...r);
  };
}
var Cu = fe(rr);
async function gu(e, t) {
  let { formatted: r } = await Cu(e, { ...t, cursorOffset: -1 });
  return r;
}
async function fi(e, t) {
  return await gu(e, t) === e;
}
var pi = fe(ot, 0);
var di = { parse: fe(su), formatAST: fe(au), formatDoc: fe(Du), printToDoc: fe(lu), printDocToString: fe(cu) };
var fc = ir;
export {
  di as __debug,
  fi as check,
  fc as default,
  nr as doc,
  gu as format,
  Cu as formatWithCursor,
  pi as getSupportInfo,
  or as util,
  fu as version
};
//# sourceMappingURL=@slidev_cli___@slidev_client___prettier.js.map
