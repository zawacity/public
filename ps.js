(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var aa = {},
        m = this || self;

    function ba(a) {
        a = a.split(".");
        for (var b = m, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function ca(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function da(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ea(a) {
        return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ha)
    }
    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0;

    function ia(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ja(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function ka(a, b, c) {
        ka = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
        return ka.apply(null, arguments)
    }

    function la(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ma(a, b) {
        a = a.split(".");
        var c = m;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function na(a) {
        return a
    };
    let oa = (new Date).getTime();

    function pa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function ra(a, b) {
        let c = 0;
        a = pa(String(a)).split(".");
        b = pa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = sa(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || sa(0 == e[2].length, 0 == f[2].length) || sa(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function sa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var ta, ua = ba("CLOSURE_FLAGS"),
        va = ua && ua[610401301];
    ta = null != va ? va : !1;

    function ya() {
        var a = m.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var za;
    const Aa = m.navigator;
    za = Aa ? Aa.userAgentData || null : null;

    function Ba(a) {
        return ta ? za ? za.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function p(a) {
        return -1 != ya().indexOf(a)
    };

    function Ca() {
        return ta ? !!za && 0 < za.brands.length : !1
    }

    function Da() {
        return Ca() ? !1 : p("Trident") || p("MSIE")
    }

    function Ea() {
        return Ca() ? Ba("Microsoft Edge") : p("Edg/")
    }

    function Ga() {
        !p("Safari") || Ha() || (Ca() ? 0 : p("Coast")) || (Ca() ? 0 : p("Opera")) || (Ca() ? 0 : p("Edge")) || Ea() || Ca() && Ba("Opera")
    }

    function Ha() {
        return Ca() ? Ba("Chromium") : (p("Chrome") || p("CriOS")) && !(Ca() ? 0 : p("Edge")) || p("Silk")
    }

    function Ia(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Ja() {
        var a = ya();
        if (Da()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ia(b);
        return (Ca() ? 0 : p("Opera")) ? a(["Version",
            "Opera"
        ]) : (Ca() ? 0 : p("Edge")) ? a(["Edge"]) : Ea() ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : Ha() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ka(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function La(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ma(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            } return d
    }

    function Na(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Oa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Pa(a, b) {
        a: {
            const c = a.length,
                d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Qa(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                } b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Sa(a, b) {
        return 0 <= Ka(a, b)
    }

    function Ta(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Ua(a) {
        Ua[" "](a);
        return a
    }
    Ua[" "] = function() {};
    var Va = Da();
    !p("Android") || Ha();
    Ha();
    Ga();
    var Wa = null;

    function Xa(a) {
        var b = [];
        Ya(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ya(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    n = Wa[l];
                if (null != n) return n;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        Za();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Za() {
        if (!Wa) {
            Wa = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Wa[f] && (Wa[f] = e)
                }
        }
    };
    const $a = Symbol();

    function ab(a, b) {
        if ($a) return a[$a] |= b;
        if (void 0 !== a.g) return a.g |= b;
        Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function bb(a) {
        const b = q(a);
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), cb(a, b | 1))
    }

    function db(a, b) {
        $a ? a[$a] && (a[$a] &= ~b) : void 0 !== a.g && (a.g &= ~b)
    }

    function q(a) {
        let b;
        $a ? b = a[$a] : b = a.g;
        return null == b ? 0 : b
    }

    function cb(a, b) {
        $a ? a[$a] = b : void 0 !== a.g ? a.g = b : Object.defineProperties(a, {
            g: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }

    function eb(a, b) {
        Object.isFrozen(a) && (a = Array.prototype.slice.call(a));
        cb(a, b);
        return a
    }

    function fb(a) {
        ab(a, 1);
        return a
    }

    function gb(a) {
        return !!(q(a) & 2)
    }

    function hb(a) {
        ab(a, 16);
        return a
    }

    function ib(a, b) {
        cb(b, (a | 0) & -51)
    }

    function jb(a, b) {
        cb(b, (a | 18) & -41)
    };
    var kb = {};

    function lb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let mb;
    var nb = Object.freeze(cb([], 23));

    function ob(a) {
        if (q(a.s) & 2) throw Error();
    };

    function pb(a) {
        if (null == a) return a;
        switch (typeof a) {
            case "string":
                return +a;
            case "number":
                return a
        }
    }

    function qb(a) {
        return a
    }

    function rb(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.ta === kb) return a;
        if (d) {
            var e = d = q(a);
            0 === e && (e |= c & 16);
            e |= c & 2;
            e !== d && cb(a, e);
            return new b(a)
        }
    };

    function r(a, b, c) {
        return -1 === b ? null : b >= a.i ? a.h ? a.h[b] : void 0 : c && a.h && (c = a.h[b], null != c) ? c : a.s[b + -1]
    }

    function t(a, b, c) {
        ob(a);
        return v(a, b, c)
    }

    function v(a, b, c, d) {
        a.v && (a.v = void 0);
        if (b >= a.i || d) return d = a.i + -1, (a.h || (a.h = a.s[d] = {}))[b] = c, a;
        a.s[b + -1] = c;
        (c = a.h) && b in c && delete c[b];
        return a
    }

    function sb(a, b, c, d, e) {
        let f = r(a, b, d);
        Array.isArray(f) || (f = nb);
        const g = q(f);
        g & 1 || fb(f);
        if (e) g & 2 || ab(f, 18), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            const h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && db(f, 16) : (f = fb(Array.prototype.slice.call(f)), v(a, b, f, d))
        }
        return f
    }

    function tb(a, b) {
        a = r(a, b);
        return null == a ? a : !!a
    }

    function ub(a, b, c) {
        const d = gb(a.s);
        let e = sb(a, b, 1, void 0, d),
            f = q(e);
        if (!(f & 4)) {
            Object.isFrozen(e) && (e = fb(e.slice()), v(a, b, e));
            let g = 0,
                h = 0;
            for (; g < e.length; g++) {
                const k = c(e[g]);
                null != k && (e[h++] = k)
            }
            h < g && (e.length = h);
            f |= 5;
            d && (f |= 18);
            cb(e, f);
            f & 2 && Object.freeze(e)
        }!d && (f & 2 || Object.isFrozen(e)) && (e = Array.prototype.slice.call(e), ab(e, 5), v(a, b, e));
        return e
    }

    function vb(a, b, c) {
        if (null == c) a = t(a, b);
        else {
            var d = q(c);
            if (!(d & 4)) {
                if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
                for (let e = 0; e < c.length; e++) c[e] = c[e];
                cb(c, d | 5)
            }
            a = t(a, b, c)
        }
        return a
    }

    function y(a, b, c, d) {
        ob(a);
        c !== d ? v(a, b, c) : v(a, b, void 0, !1);
        return a
    }

    function wb(a, b, c, d) {
        ob(a);
        (c = xb(a, c)) && c !== b && null != d && v(a, c, void 0, !1);
        return v(a, b, d)
    }

    function yb(a, b, c) {
        return xb(a, b) === c ? c : -1
    }

    function xb(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != r(a, e) && (0 !== c && v(a, c, void 0, !1), c = e)
        }
        return c
    }

    function zb(a, b, c, d) {
        const e = r(a, c, d);
        b = rb(e, b, q(a.s));
        b !== e && null != b && v(a, c, b, d);
        return b
    }

    function A(a, b, c) {
        b = zb(a, b, c, !1);
        if (null == b) return b;
        if (!gb(a.s)) {
            const d = Ab(b);
            d !== b && (b = d, v(a, c, b, !1))
        }
        return b
    }

    function Bb(a, b, c, d, e) {
        var f = !!(e & 2),
            g = sb(a, c, 1, void 0, f);
        if (g === nb || !(q(g) & 4)) {
            var h = g;
            g = !!(e & 2);
            var k = !!(q(h) & 2);
            f = h;
            !g && k && (h = Array.prototype.slice.call(h));
            var l = e | (k ? 2 : 0);
            e = k;
            let n = k = 0;
            for (; k < h.length; k++) {
                const u = rb(h[k], b, l);
                void 0 !== u && (e = e || !!(2 & q(u.s)), h[n++] = u)
            }
            n < k && (h.length = n);
            b = h;
            h = q(b);
            l = h | 5;
            e = e ? l & -9 : l | 8;
            h != e && (b = eb(b, e));
            h = b;
            f !== h && v(a, c, h);
            (g || 1 === d) && Object.freeze(h);
            return h
        }
        if (3 === d) return g;
        f || (f = Object.isFrozen(g), 1 === d ? f || Object.freeze(g) : (d = q(g), b = d & -19, f && (g = Array.prototype.slice.call(g),
            d = 0, v(a, c, g)), d !== b && cb(g, b)));
        return g
    }

    function B(a, b, c) {
        const d = q(a.s);
        var e = !!(d & 2);
        a = Bb(a, b, c, e ? 1 : 2, d);
        if (!(e || q(a) & 8)) {
            for (e = 0; e < a.length; e++) b = a[e], c = Ab(b), b !== c && (a[e] = c);
            ab(a, 8)
        }
        return a
    }

    function Cb(a, b, c) {
        ob(a);
        null == c && (c = void 0);
        return v(a, b, c)
    }

    function Db(a, b, c, d) {
        ob(a);
        null == d && (d = void 0);
        return wb(a, b, c, d)
    }

    function Eb(a, b, c) {
        ob(a);
        if (null != c) {
            var d = !!c.length;
            for (var e = 0; e < c.length; e++) {
                var f = c[e];
                d = d && !gb(f.s)
            }
            e = q(c);
            f = e | 1;
            d = (d ? f | 8 : f & -9) | 4;
            d != e && (c = eb(c, d))
        }
        null == c && (c = void 0);
        return v(a, b, c)
    }

    function C(a, b) {
        return pb(r(a, b))
    }

    function Fb(a, b) {
        a: if (a = r(a, b), null != a) {
            switch (typeof a) {
                case "string":
                    a = +a;
                    break a;
                case "number":
                    break a
            }
            a = void 0
        }return a
    }

    function Gb(a, b, c) {
        return t(a, b, null == c ? c : !!c)
    }

    function D(a, b) {
        return null == a ? b : a
    }

    function F(a, b, c = !1) {
        return D(tb(a, b), c)
    }

    function Hb(a, b) {
        const c = r(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && v(a, b, d);
        return D(d, 0)
    }

    function G(a, b) {
        return D(r(a, b), "")
    }

    function H(a, b) {
        return D(r(a, b), 0)
    }

    function Ib(a, b, c, d) {
        return A(a, b, yb(a, d, c))
    };
    let Jb;

    function Kb(a, b) {
        Jb = b;
        a = new a(b);
        Jb = void 0;
        return a
    };

    function Lb(a, b) {
        return Mb(b)
    }

    function Mb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a) && null != a && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function Nb(a, b) {
        const c = Array.prototype.slice.call(a.s),
            d = a.h;
        var e = c.length + (d ? -1 : 0);
        let f = 0;
        for (; f < e; f++) c[f] = b(c[f]);
        if (d) {
            e = c[f] = {};
            for (const g in d) Object.prototype.hasOwnProperty.call(d, g) && (e[g] = b(d[g]))
        }
        b = Kb(a.constructor, hb(c));
        a.B && (b.B = a.B.slice());
        return b
    }

    function Ob(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && q(a) & 1 ? void 0 : f && q(a) & 2 ? a : Pb(a, b, c, void 0 !== d, e, f);
            else if (lb(a)) {
                const g = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = Ob(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Pb(a, b, c, d, e, f) {
        const g = d || c ? q(a) : 0;
        d = d ? !!(g & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (let h = 0; h < a.length; h++) a[h] = Ob(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function Qb(a) {
        return a.ta === kb ? a.toJSON() : Mb(a)
    };

    function Rb(a, b, c = jb) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = q(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return cb(a, d | 18), a;
                a = Pb(a, Rb, d & 4 ? jb : c, !0, !1, !0);
                b = q(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.ta === kb && (gb(a.s) || (a = Sb(a, !0), ab(a.s, 18)));
            return a
        }
    }

    function Sb(a, b) {
        const c = b || gb(a.s) ? jb : ib,
            d = !!(q(a.s) & 16);
        return Nb(a, e => Rb(e, d, c))
    }

    function Ab(a) {
        if (!gb(a.s)) return a;
        const b = Sb(a, !1);
        b.v = a;
        return b
    };
    var I = class {
        constructor(a) {
            null == a && (a = Jb);
            Jb = void 0;
            if (null == a) a = [], cb(a, 48);
            else {
                if (!Array.isArray(a)) throw Error();
                var b = ab(a, 0) | 32;
                cb(a, b)
            }
            this.s = a;
            a: {
                b = this.s.length;a = b - 1;
                if (b && (b = this.s[a], lb(b))) {
                    this.h = b;
                    this.i = a - -1;
                    break a
                }
                this.i = Number.MAX_VALUE
            }
        }
        toJSON() {
            if (mb) var a = Tb(this, this.s, !1);
            else a = Pb(this.s, Qb, void 0, void 0, !1, !1), a = Tb(this, a, !0);
            return a
        }
    };
    I.prototype.ta = kb;

    function Tb(a, b, c) {
        const d = a ? a.constructor.u : void 0;
        var e = a.i;
        if (d) {
            if (!c) {
                b = Array.prototype.slice.call(b);
                var f;
                if (b.length && lb(f = b[b.length - 1]))
                    for (var g = 0; g < d.length; g++)
                        if (d[g] >= e) {
                            Object.assign(b[b.length - 1] = {}, f);
                            break
                        }
            }
            e = b;
            c = !c;
            a = a.i;
            let k;
            for (f = 0; f < d.length; f++)
                if (g = d[f], g < a) {
                    g += -1;
                    var h = e[g];
                    null == h ? e[g] = c ? nb : fb([]) : c && h !== nb && bb(h)
                } else {
                    if (!k) {
                        let l;
                        e.length && lb(l = e[e.length - 1]) ? k = l : e.push(k = {})
                    }
                    h = k[g];
                    null == k[g] ? k[g] = c ? nb : fb([]) : c && h !== nb && bb(h)
                }
        }
        return b
    };

    function Ub(a, b) {
        const c = Vb;
        Vb = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    }
    const Wb = a => null !== a && void 0 !== a;
    let Vb = void 0;

    function Xb(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Kb(a, hb(b))
            }
            return b
        }
    };
    var Yb = class extends I {};
    var Zb = class extends I {};
    Zb.u = [2, 3, 4];

    function $b(a, b) {
        this.h = a === ac && b || "";
        this.g = bc
    }
    var bc = {},
        ac = {};

    function cc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function dc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function fc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function gc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function hc(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function ic(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function jc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function kc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function lc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var mc;
    var nc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g + ""
        }
    };

    function oc(a, b) {
        a = pc.exec(qc(a).toString());
        var c = a[3] || "";
        return rc(a[1] + sc("?", a[2] || "", b) + sc("#", c))
    }

    function qc(a) {
        return a instanceof nc && a.constructor === nc ? a.g : "type_error:TrustedResourceUrl"
    }
    var pc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        tc = {};

    function rc(a) {
        if (void 0 === mc) {
            var b = null;
            var c = m.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (d) {
                    m.console && m.console.error(d.message)
                }
                mc = b
            } else mc = b
        }
        a = (b = mc) ? b.createScriptURL(a) : a;
        return new nc(a, tc)
    }

    function sc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            } return b
    };

    function uc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function vc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ca(f) || da(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (da(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                La(g ? Ta(f) : f, d)
            }
        }
    }

    function wc(a) {
        this.g = a || m.document || document
    }
    wc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    wc.prototype.createElement = function(a) {
        var b = this.g;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    wc.prototype.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    wc.prototype.append = function(a, b) {
        vc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    wc.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function xc() {
        return ta && za ? za.mobile : !yc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }

    function yc() {
        return ta && za ? !za.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    };
    var zc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Ac = /#|$/;

    function Bc(a, b) {
        var c = a.search(Ac);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Cc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Ua(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (err){}
            return !1
        }
    }

    function Dc(a) {
        return Cc(a.top) ? a.top : null
    }

    function Ec(a, b) {
        const c = Fc("SCRIPT", a);
        c.src = qc(b);
        (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function Gc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Hc(a, b) {
        if (!Ic() && !Jc()) {
            let c = Math.random();
            if (c < b) return c = Kc(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function Kc() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (err){}
            return Math.random()
        }
    }

    function J(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Lc(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Jc = dc(() => Oa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Mc) || 1E-4 > Math.random()),
        Ic = dc(() => -1 != ya().indexOf("MSIE"));
    const Mc = a => -1 != ya().indexOf(a);
    var Nc = /^([0-9.]+)px$/,
        Oc = /^(-?[0-9.]{1,30})$/;

    function Pc(a) {
        if (!Oc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function K(a) {
        return (a = Nc.exec(a)) ? +a[1] : null
    }
    var Qc = (a, b) => {
            for (let e = 0; 50 > e; ++e) {
                try {
                    var c = !(!a.frames || !a.frames[b])
                } catch (err){}
                    c = !1
                }
                if (c) return a;
                a: {
                    try {
                        const f = a.parent;
                        if (f && f != a) {
                            var d = f;
                            break a
                        }
                    } catch (err){}
                    d = null
                }
                if (!(a = d)) break
            }
            return null
        },
        Rc = dc(() => xc() ? 2 : yc() ? 1 : 0),
        Sc = (a, b) => {
            J(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    let Tc = [];
    const Uc = () => {
        const a = Tc;
        Tc = [];
        for (const b of a) try {
            b()
        } catch (err){}
    };
    var Vc = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        Wc = a => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Vc(),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Yc = a => {
            var b = Xc;
            "complete" === b.readyState || "interactive" === b.readyState ? (Tc.push(a), 1 == Tc.length && (window.Promise ? Promise.resolve().then(Uc) : window.setImmediate ? setImmediate(Uc) : setTimeout(Uc, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function Fc(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function Zc(a, b, c = null, d = !1, e = !1) {
        $c(a, b, c, d, e)
    }

    function $c(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Fc("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Ka(h, f);
                    0 <= k && Array.prototype.splice.call(h, k, 1)
                }
                hc(f, "load", g);
                hc(f, "error", g)
            };
            gc(f, "load", g);
            gc(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var bd = a => {
            let b = "https://www.example.com/pagead/gen_204?id=tcfe";
            J(a, (c, d) => {
                if (c || 0 === c) b += `&${d}=${encodeURIComponent(""+c)}`
            });
            ad(b)
        },
        ad = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Zc(b, a, void 0, !1, !1)
        };
    let cd = null;
    var Xc = document,
        L = window;
    let dd = null;
    var ed = (a, b = []) => {
        let c = !1;
        m.google_logging_queue || (c = !0, m.google_logging_queue = []);
        m.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == dd) {
                dd = !1;
                try {
                    var d = Dc(m);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (dd = !0);
                    m.localStorage.getItem("google_logging") && (dd = !0)
                } catch (e) {}
            }
            a = dd
        }
        a && (d = m.document, a = new $b(ac, "https://www.example.com/pagead/js/logging_library.js"), a = rc(a instanceof $b && a.constructor === $b && a.g === bc ? a.h : "type_error:Const"), Ec(d, a))
    };

    function gd(a = m) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (err){}
        return b?.pageViewId && b?.canonicalUrl ? b : null
    }

    function hd(a = gd()) {
        return a ? Cc(a.master) ? a.master : null : null
    };

    function id(a, ...b) {
        if (0 === b.length) return rc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return rc(c)
    };
    var jd = a => {
            a = hd(gd(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        kd = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        ld = () => {
            if (!L) return !1;
            try {
                return !(!L.navigator.standalone && !L.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        md = a => {
            if (!a) return "";
            a = a.toLowerCase();
            "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        };
    class nd {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var od = a => !!(a.error && a.meta && a.id);
    const pd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var qd = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        rd = class {
            constructor(a, b, c) {
                this.url = a;
                this.m = b;
                this.Ka = !!c;
                this.depth = null
            }
        };

    function sd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function td(a, b, c, d, e) {
        const f = [];
        J(a, function(g, h) {
            (g = ud(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function ud(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(ud(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(td(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function vd(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function wd(a, b) {
        let c = "https://www.example.com" + b,
            d = vd(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = td(h[k], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class xd {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function yd(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }

    function zd(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof xd ? f = c : (f = new xd, J(c, (h, k) => {
                var l = f;
                const n = l.j++;
                h = sd(k, h);
                l.g.push(n);
                l.h[n] = h
            }));
            const g = wd(f, "/pagead/gen_204?id=" + b + "&");
            g && Zc(m, g)
        } catch (f) {}
    }
    class Ad {
        constructor() {
            this.g = Math.random()
        }
    };
    let Bd = null;

    function Cd() {
        if (null === Bd) {
            Bd = "";
            try {
                let a = "";
                try {
                    a = m.top.location.hash
                } catch (b) {
                    a = m.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Bd = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Bd
    };

    function Dd() {
        const a = m.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Ed() {
        const a = m.performance;
        return a && a.now ? a.now() : null
    };
    class Fd {
        constructor(a, b) {
            var c = Ed() || Dd();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    };
    const Gd = m.performance,
        Hd = !!(Gd && Gd.mark && Gd.measure && Gd.clearMarks),
        Id = dc(() => {
            var a;
            if (a = Hd) a = Cd(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Jd(a) {
        a && Gd && Id() && (Gd.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Gd.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Kd(a) {
        a.g = !1;
        a.h != a.i.google_js_reporting_queue && (Id() && La(a.h, Jd), a.h.length = 0)
    }
    class Ld {
        constructor(a) {
            this.h = [];
            this.i = a || m;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = Id() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new Fd(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Gd && Id() && Gd.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (Ed() || Dd()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Gd && Id() && Gd.mark(b);
                !this.g || 2048 < this.h.length ||
                    this.h.push(a)
            }
        }
    };

    function Md(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    class Nd {
        constructor(a, b = null) {
            this.A = a;
            this.g = null;
            this.l = this.H;
            this.h = b;
            this.i = !1
        }
        Pa(a) {
            this.l = a
        }
        va(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        da(a, b, c) {
            let d, e;
            try {
                this.h && this.h.g ? (e = this.h.start(a.toString(), 3), d = b(), this.h.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    Jd(e), b = this.l(a, new nd(f, {
                        message: Md(f)
                    }), void 0, c)
                } catch (g) {
                    this.H(217, g)
                }
                if (b) window.console?.error?.(f);
                else throw f;
            }
            return d
        }
        ma(a, b) {
            return (...c) => this.da(a, () => b.apply(void 0, c))
        }
        H(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Fa = new xd;
                var g = Fa;
                g.g.push(1);
                g.h[1] = sd("context", a);
                od(b) || (b = new nd(b, {
                    message: Md(b)
                }));
                if (b.msg) {
                    g = Fa;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = sd("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g) try {
                    this.g(b)
                } catch (Ra) {}
                if (d) try {
                    d(b)
                } catch (Ra) {}
                d = Fa;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = m;
                k = [];
                b = null;
                do {
                    var l = d;
                    if (Cc(l)) {
                        var n = l.location.href;
                        b = l.document && l.document.referrer || null
                    } else n = b, b = null;
                    k.push(new rd(n || "", l));
                    try {
                        d = l.parent
                    } catch (Ra) {
                        d = null
                    }
                } while (d && l != d);
                for (let Ra = 0, nf = k.length - 1; Ra <= nf; ++Ra) k[Ra].depth = nf - Ra;
                l = m;
                if (l.location &&
                    l.location.ancestorOrigins && l.location.ancestorOrigins.length == k.length - 1)
                    for (n = 1; n < k.length; ++n) {
                        var u = k[n];
                        u.url || (u.url = l.location.ancestorOrigins[n - 1] || "", u.Ka = !0)
                    }
                var z = k;
                let ec = new rd(m.location.href, m, !1);
                l = null;
                const fd = z.length - 1;
                for (u = fd; 0 <= u; --u) {
                    var x = z[u];
                    !l && pd.test(x.url) && (l = x);
                    if (x.url && !x.Ka) {
                        ec = x;
                        break
                    }
                }
                x = null;
                const $i = z.length && z[fd].url;
                0 != ec.depth && $i && (x = z[fd]);
                f = new qd(ec, x);
                if (f.h) {
                    z = Fa;
                    var w = f.h.url || "";
                    z.g.push(4);
                    z.h[4] = sd("top", w)
                }
                var E = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var wa =
                        f.g.url.match(zc),
                        U = wa[1],
                        xa = wa[3],
                        qa = wa[4];
                    w = "";
                    U && (w += U + ":");
                    xa && (w += "//", w += xa, qa && (w += ":" + qa));
                    var of = w
                } else of = "";
                U = Fa;
                E = [E, {
                    url: of
                }];
                U.g.push(5);
                U.h[5] = E;
                zd(this.A, e, Fa, this.i, c)
            } catch (Fa) {
                try {
                    zd(this.A, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Md(Fa),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (ec) {}
            }
            return !0
        }
        Z(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    var Od = a => "string" === typeof a,
        Pd = a => void 0 === a;
    var Qd = class extends I {};
    Qd.u = [2, 8];
    var Rd = [3, 4, 5],
        Sd = [6, 7];

    function Td(a) {
        return null != a ? !a : a
    }

    function Ud(a, b) {
        let c = !1;
        for (let d = 0; d < a.length; d++) {
            const e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Vd(a, b) {
        var c = B(a, Qd, 2);
        if (!c.length) return Wd(a, b);
        a = H(a, 1);
        if (1 === a) return Td(Vd(c[0], b));
        c = Na(c, d => () => Vd(d, b));
        switch (a) {
            case 2:
                return Ud(c, !1);
            case 3:
                return Ud(c, !0)
        }
    }

    function Wd(a, b) {
        const c = xb(a, Rd);
        a: {
            switch (c) {
                case 3:
                    var d = H(a, yb(a, Rd, 3));
                    break a;
                case 4:
                    d = H(a, yb(a, Rd, 4));
                    break a;
                case 5:
                    d = H(a, yb(a, Rd, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b(...ub(a, 8, qb))
            } catch (f) {
                return
            }
            b = H(a, 1);
            if (4 === b) return !!e;
            if (5 === b) return null != e;
            if (12 === b) a = G(a, yb(a, Sd, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = Hb(a, yb(a, Sd, 6));
                        break a;
                    case 5:
                        a = G(a, yb(a, Sd, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === ra(String(e), a);
                if (null != e) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return Od(a) && Od(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === ra(String(e), a);
                    case 11:
                        return null != e && 1 === ra(String(e), a)
                }
            }
        }
    }

    function Xd(a, b) {
        return !a || !(!b || !Vd(a, b))
    };
    var Yd = class extends I {};
    Yd.u = [4];
    var Zd = class extends I {};
    var $d = class extends I {},
        ae = Xb($d);
    $d.u = [5];
    var be = [1, 2, 3, 6, 7];
    var ce = class extends I {
        constructor() {
            super()
        }
    };
    ce.u = [2];

    function de(a, b) {
        return t(a, 1, b)
    }
    var ee = class extends I {
        constructor() {
            super()
        }
    };

    function fe(a, b) {
        return y(a, 1, b, 0)
    }

    function ge(a, b) {
        return y(a, 2, b, 0)
    }
    var he = class extends I {
        constructor() {
            super()
        }
        getWidth() {
            return D(r(this, 1), 0)
        }
        getHeight() {
            return D(r(this, 2), 0)
        }
    };

    function ie(a, b) {
        return Cb(a, 1, b)
    }

    function je(a, b) {
        return Cb(a, 2, b)
    }

    function ke(a, b) {
        Cb(a, 3, b)
    }

    function le(a, b) {
        return y(a, 5, null == b ? b : !!b, !1)
    }
    var me = class extends I {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 4)
        }
    };
    var ne = class extends I {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 1)
        }
    };

    function oe(a, b) {
        return Db(a, 4, pe, b)
    }
    var qe = class extends I {
            constructor() {
                super()
            }
        },
        pe = [4, 5, 6, 8, 9, 10];

    function re(a, b) {
        return y(a, 1, b, 0)
    }

    function se(a, b) {
        return y(a, 2, b, 0)
    }
    var te = class extends I {
        constructor() {
            super()
        }
    };
    var ue = class extends I {
            constructor() {
                super()
            }
        },
        ve = [1, 2];

    function we(a, b) {
        return Cb(a, 1, b)
    }

    function xe(a, b) {
        return Eb(a, 2, b)
    }

    function ye(a, b) {
        return vb(a, 4, b)
    }

    function ze(a, b) {
        return Eb(a, 5, b)
    }

    function Ae(a, b) {
        return y(a, 6, b, 0)
    }
    var Be = class extends I {
        constructor() {
            super()
        }
    };
    Be.u = [2, 4, 5];
    var Ce = class extends I {
        constructor() {
            super()
        }
    };
    Ce.u = [5];
    var De = [1, 2, 3, 4];
    var Ee = class extends I {
        constructor() {
            super()
        }
    };
    Ee.u = [2, 3];

    function Fe(a, b) {
        return Db(a, 4, Ge, b)
    }
    var He = class extends I {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return D(r(this, 2), 0)
            }
        },
        Ge = [4, 5, 7];

    function Ie(a, ...b) {
        Je(a, ...b.map(c => ({
            Sa: 4,
            Na: c.toJSON()
        })))
    }

    function Ke(a, ...b) {
        Je(a, ...b.map(c => ({
            Sa: 7,
            Na: c.toJSON()
        })))
    };

    function Le(a) {
        return JSON.stringify([a.map(b => [{
            [b.Sa]: b.Na
        }])])
    };
    var Me = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Ne() {
        this.A = this.A;
        this.i = this.i
    }
    Ne.prototype.A = !1;

    function Oe(a) {
        a.A || (a.A = !0, a.g())
    }

    function Pe(a, b) {
        a.A ? b() : (a.i || (a.i = []), a.i.push(b))
    }
    Ne.prototype.g = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };

    function Qe(a, b, c, d) {
        gc(b, c, d);
        Pe(a, () => hc(b, c, d))
    }

    function Re(a, b) {
        1 !== a.h && (a.h = 1, a.J && a.J(b))
    }

    function Se(a) {
        a.m.document.visibilityState ? Qe(a, a.m.document, "visibilitychange", b => {
            "hidden" === a.m.document.visibilityState && Re(a, b);
            "visible" === a.m.document.visibilityState && (a.h = 0)
        }) : "onpagehide" in a.m ? (Qe(a, a.m, "pagehide", b => {
            Re(a, b)
        }), Qe(a, a.m, "pageshow", () => {
            a.h = 0
        })) : Qe(a, a.m, "beforeunload", b => {
            Re(a, b)
        })
    }

    function Te(a, b) {
        a.J || Se(a);
        a.J = b
    }
    var Ue = class extends Ne {
        constructor(a) {
            super();
            this.m = a;
            this.h = 0;
            this.J = null
        }
    };

    function Je(a, ...b) {
        a.A && 65536 <= Le(a.g.concat(b)).length && Ve(a);
        a.g.push(...b);
        a.g.length >= a.l && Ve(a);
        a.g.length && null === a.h && (a.h = setTimeout(() => {
            Ve(a)
        }, a.B))
    }

    function We(a, b, c, d) {
        a.i || (a.i = new Ue(b), Te(a.i, () => {
            for (const e of a.j) e();
            c()
        }));
        d && 1 !== a.i.h && a.j.push(d)
    }

    function Ve(a) {
        null !== a.h && (clearTimeout(a.h), a.h = null);
        if (a.g.length) {
            var b = Le(a.g);
            a.v("https://www.example.com/pagead/ping?e=1", b);
            a.g = []
        }
    }

    function Xe(a, b, c) {
        We(a, b, () => {
            Ve(a)
        }, c)
    }
    var Ye = class {
            constructor(a, b, c) {
                this.v = Me;
                this.B = a;
                this.l = b;
                this.A = c;
                this.j = [];
                this.g = [];
                this.h = null
            }
        },
        Ze = class extends Ye {
            constructor(a = 1E3, b = 100, c = !1) {
                super(a, b, c && !0)
            }
        };

    function $e(a, b) {
        b = y(b, 1, Date.now(), 0);
        var c = Wc(window);
        b = y(b, 2, c, 0);
        return y(b, 6, a.l, 0)
    }

    function af(a, b, c, d, e, f) {
        if (a.i) {
            var g = se(re(new te, b), c);
            b = Ae(xe(we(ze(ye(new Be, d), e), g), a.g.slice()), f);
            b = Fe(new He, b);
            Ie(a.h, $e(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(h => H(h, 1) === H(g, 1) && H(h, 2) === c)) a.g.push(g), 100 < a.g.length && a.g.shift()
        }
    }

    function bf(a, b, c, d) {
        if (a.i && a.j) {
            var e = new Ee;
            b = Eb(e, 2, b);
            c = Eb(b, 3, c);
            d && y(c, 1, d, 0);
            d = new He;
            d = Db(d, 7, Ge, c);
            Ie(a.h, $e(a, d))
        }
    }
    var cf = class {
        constructor(a, b, c, d = new Ze(b)) {
            this.l = a;
            this.j = c;
            this.h = d;
            this.g = [];
            this.i = 0 < a && Kc() < 1 / a
        }
    };
    var M = a => {
        var b = "sa";
        if (a.sa && a.hasOwnProperty(b)) return a.sa;
        b = new a;
        return a.sa = b
    };
    var df = class {
        constructor() {
            this.G = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var ef = /^true$/.test("false");

    function ff(a, b) {
        switch (b) {
            case 1:
                return H(a, yb(a, be, 1));
            case 2:
                return H(a, yb(a, be, 2));
            case 3:
                return H(a, yb(a, be, 3));
            case 6:
                return H(a, yb(a, be, 6));
            default:
                return null
        }
    }

    function gf(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return F(a, 1);
            case 7:
                return G(a, 3);
            case 2:
                return Hb(a, 2);
            case 3:
                return G(a, 3);
            case 6:
                return ub(a, 4, qb);
            default:
                return null
        }
    }
    const hf = dc(() => {
        if (!ef) return {};
        try {
            const a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (err){}
        return {}
    });

    function jf(a, b, c, d = 0) {
        M(kf).i[d] = M(kf).i[d]?.add(b) ?? (new Set).add(b);
        const e = hf();
        if (null != e[b]) return e[b];
        b = lf(d)[b];
        if (!b) return c;
        b = ae(JSON.stringify(b));
        b = mf(b);
        a = gf(b, a);
        return null != a ? a : c
    }

    function mf(a) {
        const b = M(df).G;
        if (b) {
            const c = Qa(B(a, Zd, 5), d => Xd(A(d, Qd, 1), b));
            if (c) return A(c, Yd, 2) ?? null
        }
        return A(a, Yd, 4) ?? null
    }
    class kf {
        constructor() {
            this.h = {};
            this.j = [];
            this.i = {};
            this.g = new Map
        }
    }

    function pf(a, b = !1, c) {
        return !!jf(1, a, b, c)
    }

    function qf(a, b = 0, c) {
        a = Number(jf(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function rf(a, b = "", c) {
        a = jf(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function sf(a, b = [], c) {
        a = jf(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function lf(a) {
        return M(kf).h[a] || (M(kf).h[a] = {})
    }

    function tf(a, b) {
        const c = lf(b);
        J(a, (d, e) => c[e] = d)
    }

    function uf(a, b, c, d, e = !1) {
        const f = [],
            g = [];
        La(b, h => {
            const k = lf(h);
            La(a, l => {
                var n = xb(l, be);
                const u = ff(l, n);
                if (u) {
                    var z = M(kf).g.get(h)?.get(u)?.slice(0) ?? [];
                    a: {
                        const x = new Ce;
                        switch (n) {
                            case 1:
                                wb(x, 1, De, u);
                                break;
                            case 2:
                                wb(x, 2, De, u);
                                break;
                            case 3:
                                wb(x, 3, De, u);
                                break;
                            case 6:
                                wb(x, 4, De, u);
                                break;
                            default:
                                n = void 0;
                                break a
                        }
                        vb(x, 5, z);n = x
                    }
                    if (z = n) z = !!M(kf).i[h]?.has(u);
                    z && f.push(n);
                    if (z = n) z = !!M(kf).g.get(h)?.has(u);
                    z && g.push(n);
                    e || (n = M(kf), n.g.has(h) || n.g.set(h, new Map), n.g.get(h).has(u) || n.g.get(h).set(u, []), d &&
                        n.g.get(h).get(u).push(d));
                    k[u] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && bf(c, f, g, d ?? void 0)
    }

    function vf(a, b) {
        const c = lf(b);
        La(a, d => {
            var e = ae(JSON.stringify(d));
            const f = xb(e, be);
            (e = ff(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function wf() {
        return Na(Object.keys(M(kf).h), a => Number(a))
    }

    function xf(a) {
        Sa(M(kf).j, a) || tf(lf(4), a)
    };

    function N(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function yf(a, b, c) {
        return b[a] || c
    }

    function zf(a) {
        N(5, pf, a);
        N(6, qf, a);
        N(7, rf, a);
        N(8, sf, a);
        N(13, vf, a);
        N(15, xf, a)
    }

    function Af(a) {
        N(4, b => {
            M(df).G = b
        }, a);
        N(9, (b, c) => {
            var d = M(df);
            null == d.G[3][b] && (d.G[3][b] = c)
        }, a);
        N(10, (b, c) => {
            var d = M(df);
            null == d.G[4][b] && (d.G[4][b] = c)
        }, a);
        N(11, (b, c) => {
            var d = M(df);
            null == d.G[5][b] && (d.G[5][b] = c)
        }, a);
        N(14, b => {
            var c = M(df);
            for (const d of [3, 4, 5]) Object.assign(c.G[d], b[d])
        }, a)
    }

    function Bf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Cf(a, b, c) {
        a.i = yf(1, b, () => {});
        a.j = (d, e) => yf(2, b, () => [])(d, c, e);
        a.g = () => yf(3, b, () => [])(c);
        a.h = d => {
            yf(16, b, () => {})(d, c)
        }
    }
    class Df {
        i() {}
        h() {}
        j() {
            return []
        }
        g() {
            return []
        }
    };
    let Ef, Ff;
    const Gf = new Ld(window);
    (a => {
        Ef = a ?? new Ad;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        yd(Ef, window.google_srt);
        Ff = new Nd(Ef, Gf);
        Ff.va(() => {});
        Ff.j(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || Kd(Gf) : Gf.g && gc(window, "load", () => {
            window.google_measure_js_timing || Kd(Gf)
        })
    })();
    var Hf = {
        Hb: 0,
        Gb: 1,
        Db: 2,
        yb: 3,
        Eb: 4,
        zb: 5,
        Fb: 6,
        Bb: 7,
        Cb: 8,
        xb: 9,
        Ab: 10
    };
    var If = {
        Jb: 0,
        Kb: 1,
        Ib: 2
    };

    function Jf(a) {
        if (0 != a.g) throw Error("Already resolved/rejected.");
    }
    var Mf = class {
        constructor() {
            this.h = new Kf(this);
            this.g = 0
        }
        resolve(a) {
            Jf(this);
            this.g = 1;
            this.j = a;
            Lf(this.h)
        }
    };

    function Lf(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.h && a.h(a.g.j);
                break;
            case 2:
                a.i && a.i(a.g.i);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var Kf = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.h) throw Error("Then functions already set.");
            this.h = a;
            this.i = b;
            Lf(this)
        }
    };
    const Nf = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Nf(Ma(this.g, a))
        }
        apply(a) {
            return new Nf(a(this.g.slice(0)))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new Nf(b)
        }
    };

    function Of(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const Qf = class {
        constructor() {
            this.g = {};
            this.h = {}
        }
        set(a, b) {
            const c = Pf(a);
            this.g[c] = b;
            this.h[c] = a
        }
        get(a, b) {
            a = Pf(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.h = {}
        }
    };

    function Pf(a) {
        return a instanceof Object ? String(ea(a)) : a + ""
    };

    function Rf(a) {
        return new Sf({
            value: a
        }, null)
    }

    function Tf(a) {
        return new Sf(null, a)
    }

    function Uf(a) {
        try {
            return Rf(a())
        } catch (b) {
            return Tf(b)
        }
    }

    function Vf(a) {
        return null != a.g ? a.g.value : null
    }

    function Wf(a, b) {
        null != a.g && b(a.g.value);
        return a
    }

    function Xf(a, b) {
        null != a.g || b(a.h);
        return a
    }
    class Sf {
        constructor(a, b) {
            this.g = a;
            this.h = b
        }
        map(a) {
            return null != this.g ? (a = a(this.g.value), a instanceof Sf ? a : Rf(a)) : this
        }
    };
    const Yf = class {
        constructor(a) {
            this.g = new Qf;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.g.g[Pf(a)]
        }
    };
    class Zf {
        constructor() {
            this.g = new Qf
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Yf, this.g.set(a, c));
            c.add(b)
        }
    };
    var O = class extends I {
        getId() {
            return r(this, 3)
        }
    };
    O.u = [4];
    class $f {
        constructor({
            Ua: a,
            Lb: b,
            Tb: c,
            ob: d
        }) {
            this.g = b;
            this.j = new Nf(a || []);
            this.i = d;
            this.h = c
        }
    };
    const bg = a => {
            const b = [],
                c = a.j;
            c && c.g.length && b.push({
                W: "a",
                ca: ag(c)
            });
            null != a.g && b.push({
                W: "as",
                ca: a.g
            });
            null != a.h && b.push({
                W: "i",
                ca: String(a.h)
            });
            null != a.i && b.push({
                W: "rp",
                ca: String(a.i)
            });
            b.sort(function(d, e) {
                return d.W.localeCompare(e.W)
            });
            b.unshift({
                W: "t",
                ca: "aa"
            });
            return b
        },
        ag = a => {
            a = a.g.slice(0).map(cg);
            a = JSON.stringify(a);
            return Lc(a)
        },
        cg = a => {
            const b = {};
            null != r(a, 7) && (b.q = r(a, 7));
            null != C(a, 2) && (b.o = C(a, 2));
            null != C(a, 5) && (b.p = C(a, 5));
            return b
        };
    var dg = class extends I {
        setLocation(a) {
            return t(this, 1, a)
        }
    };

    function eg(a) {
        const b = [].slice.call(arguments).filter(cc(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Ja || []);
            d = Object.assign(d, e.Oa)
        });
        return new fg(c, d)
    }

    function gg(a) {
        switch (a) {
            case 1:
                return new fg(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new fg(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new fg(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new fg(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function hg(a) {
        if (null == a) var b = null;
        else {
            var c = bg(a);
            a = [];
            for (b of c) c = String(b.ca), a.push(b.W + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new fg(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class fg {
        constructor(a, b) {
            this.Ja = a;
            this.Oa = b
        }
    };
    const ig = new fg(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var jg = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function kg(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new lg;
        return a.google_reactive_ads_global_state
    }
    class lg {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new mg;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var mg = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var P = a => {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    var ng = a => {
            a = a.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        og = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.getBoundingClientRect().width));
            return c => c.getBoundingClientRect().width > .5 * b
        },
        pg = a => {
            const b = P(a).clientHeight || 0;
            return c => c.getBoundingClientRect().height >= .75 * b
        },
        qg = (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    var rg = class extends I {};
    var sg = class extends I {
        constructor() {
            super()
        }
    };
    var tg = class extends I {
        constructor() {
            super()
        }
    };
    tg.u = [1];
    var ug = class extends I {
        g() {
            return F(this, 2)
        }
    };
    var vg = class extends I {};
    var wg = class extends I {};
    var xg = class extends I {
        g() {
            return B(this, wg, 1)
        }
    };
    xg.u = [1];
    var Q = class extends I {};
    var yg = class extends I {};
    var zg = class extends I {};
    zg.u = [6, 7, 9, 10, 11];

    function Ag(a) {
        var b = [];
        Of(a.getElementsByTagName("p"), function(c) {
            100 <= Bg(c) && b.push(c)
        });
        return b
    }

    function Bg(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Of(a.childNodes, function(c) {
            b += Bg(c)
        });
        return b
    }

    function Cg(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Dg(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const Eg = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.j)
            } catch (f) {}
            if (!b.length) return [];
            a = Ta(b);
            a = Dg(this, a);
            "number" === typeof this.h && (b = this.h, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.i) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Ag(a[c]),
                        e = this.i;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.j,
                occurrenceIndex: this.h,
                paragraphIndex: this.i,
                ignoreMode: this.g
            })
        }
    };

    function Fg(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                } b = !0
        }
        return b
    };
    var R = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Gg = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var Hg = new R(1082, !0),
        Ig = new Gg(1130, 100),
        Jg = new class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        }(14),
        Kg = new R(1247, !0),
        Lg = new R(316),
        Mg = new R(1207, !0),
        Ng = new R(313),
        Og = new R(369),
        Pg = new R(1230),
        Qg = new R(1229),
        Rg = new R(1231),
        Sg = new R(1171, !0),
        Tg = new R(217),
        Ug = new R(1258, !0),
        Vg = new R(529723966, !0),
        Wg = new R(534095582),
        Xg = new R(1120),
        Yg = new R(522099048),
        Zg = new R(529362570),
        $g = new Gg(1114, 1),
        ah = new R(534338265),
        bh = new R(506914611),
        ch = new R(501545959, !0),
        dh = new Gg(1079, 5),
        eh = new class {
            constructor(a,
                b = []) {
                this.g = a;
                this.defaultValue = b
            }
        }(1934, ["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
            "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="
        ]),
        fh = new R(203),
        gh = new R(84);
    var hh = class {
        constructor() {
            const a = {};
            this.h = (b, c) => null != a[b] ? a[b] : c;
            this.g = (b, c) => null != a[b] ? a[b] : c;
            this.i = (b, c) => null != a[b] ? a[b] : c;
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = () => {}
        }
    };

    function S(a) {
        return M(hh).h(a.g, a.defaultValue)
    }

    function ih() {
        return M(hh).i(Jg.g, Jg.defaultValue)
    };

    function jh(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Fg(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function kh(a, b) {
        const c = e => {
                e = lh(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = lh(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: mh(a.previousSibling, c), ha: e => mh(e.previousSibling, c), la: 0
                };
            case 2:
                return {
                    init: mh(a.lastChild, c), ha: e => mh(e.previousSibling, c), la: 0
                };
            case 3:
                return {
                    init: mh(a.nextSibling, d), ha: e => mh(e.nextSibling, d), la: 3
                };
            case 1:
                return {
                    init: mh(a.firstChild, d), ha: e => mh(e.nextSibling, d), la: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function lh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function mh(a, b) {
        return a && b(a) ? a : null
    };
    var nh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var oh = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && Cc(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var ph = (a, b) => {
        do {
            const c = Gc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function qh(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = K(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    var rh = (a, b) => !((Oc.test(b.google_ad_width) || Nc.test(a.style.width)) && (Oc.test(b.google_ad_height) || Nc.test(a.style.height))),
        th = (a, b) => (a = sh(a, b)) ? a.y : 0,
        sh = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        uh = a => {
            let b = 0;
            for (let c in nh) - 1 != a.indexOf(c) && (b |= nh[c]);
            return b
        },
        vh = (a, b, c, d, e) => {
            if (a !== a.top) return Dc(a) ? 3 : 16;
            if (!(488 > P(a).clientWidth)) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = P(a).clientWidth;
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = P(a).clientWidth; c; c = c.parentElement)
                        if ((d = Gc(c, a)) && (e = K(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        } c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        wh = (a, b, c, d) => {
            const e = vh(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || ph(c, b) ? (b = P(b).clientWidth, a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        },
        xh = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const yh = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = Gc(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        zh = (a, b, c) => {
            a = sh(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var Ah = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = Gc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            xh(b, c, "0px");
            b.style.width = P(a).clientWidth + "px";
            if (0 !== zh(a, b, c)) {
                xh(b, c, "0px");
                var d = zh(a, b, c);
                xh(b, c, -1 * d + "px");
                a = zh(a, b, c);
                0 !== a && a !== d && xh(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var Bh = class {
        constructor(a, b) {
            this.K = a;
            this.i = b
        }
        height() {
            return this.i
        }
        g(a) {
            return 300 < a && 300 < this.i ? this.K : Math.min(1200, Math.round(a))
        }
        h() {}
    };
    var Ch = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = Gc(a, b)) && e[c] && d(e[c]) || null
        },
        Dh = a => b => b.K <= a,
        Gh = (a, b, c, d) => {
            const e = a && Eh(c, b),
                f = Fh(b, d);
            return g => !(e && g.height() >= f)
        },
        Hh = a => b => b.height() <= a,
        Eh = (a, b) => th(a, b) < P(b).clientHeight - 100,
        Ih = (a, b) => {
            var c = Ch(b, a, "height", K);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = Ch(b, a, "height", K);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && K(b.style.height)) && (c = Math.min(c, d)), (d = Ch(b, a, "maxHeight", K)) && (c =
                Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const Fh = (a, b) => {
        const c = 0 == kd(a);
        return b && c ? Math.max(250, 2 * P(a).clientHeight / 3) : 250
    };
    var Jh = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0
    };
    const Kh = RegExp("(^| )adsbygoogle($| )");

    function Lh(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = uc(d.Ub);
            a[e] = d.value
        }
    };
    class Mh {
        constructor() {
            var a = id`https://www.example.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.l = Math.random();
            this.h = this.H;
            this.A = a
        }
        va(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        Pa(a) {
            this.h = a
        }
        H(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.l : Math.random()) > c) return !1;
            od(b) || (b = new nd(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            m.google_js_errors = m.google_js_errors || [];
            m.google_js_errors.push(b);
            m.error_rep_loaded || (Ec(m.document, this.A), m.error_rep_loaded = !0);
            return !1
        }
        da(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.h(a, d, .01, c, "jserror")) throw d;
            }
        }
        ma(a, b) {
            return (...c) => this.da(a, () => b.apply(void 0, c))
        }
        Z(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    const Nh = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Oh = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = Ed();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (n) {
                    l = 13;
                    if (!c) throw n;
                    c(a, n)
                } finally {
                    f.google_measure_js_timing && h && Nh({
                        label: a.toString(),
                        value: h,
                        duration: (Ed() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        Ph = (a, b) => Oh(a, b, (c, d) => {
            (new Mh).H(c, d)
        }, void 0, !1);

    function Qh(a, b, c) {
        return Oh(a, b, void 0, c, !0).apply()
    }

    function Rh(a) {
        if (!a) return null;
        var b = r(a, 7);
        if (r(a, 1) || a.getId() || 0 < ub(a, 4, qb).length) {
            b = ub(a, 4, qb);
            var c = r(a, 3),
                d = r(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Cg(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Cg(b[c]);
            a = (b = e) ? new Eg(b, C(a, 2), C(a, 5), Sh(r(a, 6))) : null
        } else a = b ? new Eg(b, C(a, 2), C(a, 5), Sh(r(a, 6))) : null;
        return a
    }
    var Th = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Sh(a) {
        return null == a ? a : Th[a]
    }
    var Uh = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Vh(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Wh(a) {
        a = Vh(a);
        return a.optimization = a.optimization || {}
    };
    var Xh = Xb(class extends I {});
    var Yh = a => {
        switch (r(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = A(a, O, 1), null == b ? b = null : (a = r(a, 2), b = null == a ? null : new $f({
                    Ua: [b],
                    ob: a
                }));
                return null != b ? Rf(b) : Tf(Error("Missing dimension when creating placement id"));
            case 3:
                return Tf(Error("Missing dimension when creating placement id"));
            default:
                return Tf(Error("Invalid type: " + r(a, 8)))
        }
    };
    var Zh = class extends I {};
    var $h = class extends I {};
    var ai = class extends I {
        g() {
            return tb(this, 23)
        }
    };
    var bi = class extends I {};
    var ci = class extends I {};
    var di = class extends I {};
    var ei = class extends I {};
    var fi = class extends I {};
    var gi = class extends I {
            getName() {
                return r(this, 4)
            }
        },
        hi = [1, 2, 3];
    var ii = class extends I {};
    ii.u = [2, 5, 6, 11];
    var ji = class extends I {};
    var li = class extends I {
            g() {
                return Ib(this, ji, 2, ki)
            }
        },
        ki = [1, 2];
    var mi = class extends I {
        g() {
            return A(this, li, 3)
        }
    };
    mi.u = [1, 4];
    var ni = class extends I {},
        oi = Xb(ni);
    ni.u = [1, 2, 5, 7];
    var pi = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function qi(a, b) {
        const c = new Zf,
            d = new Yf;
        b.forEach(e => {
            if (Ib(e, ei, 1, hi)) {
                e = Ib(e, ei, 1, hi);
                if (A(e, Q, 1) && A(A(e, Q, 1), O, 1) && A(e, Q, 2) && A(A(e, Q, 2), O, 1)) {
                    const g = ri(a, A(A(e, Q, 1), O, 1)),
                        h = ri(a, A(A(e, Q, 2), O, 1));
                    if (g && h)
                        for (var f of pi({
                                anchor: g,
                                position: r(A(e, Q, 1), 2)
                            }, {
                                anchor: h,
                                position: r(A(e, Q, 2), 2)
                            })) c.set(ea(f.anchor), f.position)
                }
                A(e, Q, 3) && A(A(e, Q, 3), O, 1) && (f = ri(a, A(A(e, Q, 3), O, 1))) && c.set(ea(f), r(A(e, Q, 3), 2))
            } else Ib(e, fi, 2, hi) ? si(a, Ib(e, fi, 2, hi), c) : Ib(e, di, 3, hi) && ti(a, Ib(e, di, 3, hi), d)
        });
        return new ui(c,
            d)
    }
    class ui {
        constructor(a, b) {
            this.h = a;
            this.g = b
        }
    }
    const si = (a, b, c) => {
            A(b, Q, 2) ? (b = A(b, Q, 2), (a = ri(a, A(b, O, 1))) && c.set(ea(a), r(b, 2))) : A(b, O, 1) && (a = vi(a, A(b, O, 1))) && a.forEach(d => {
                d = ea(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        ti = (a, b, c) => {
            A(b, O, 1) && (a = vi(a, A(b, O, 1))) && a.forEach(d => {
                c.add(ea(d))
            })
        },
        ri = (a, b) => (a = vi(a, b)) && 0 < a.length ? a[0] : null,
        vi = (a, b) => (b = Rh(b)) ? b.query(a) : null;
    class T extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, T) : this.stack = Error().stack || ""
        }
    };
    let wi, V;
    const xi = new Ld(m);
    var yi = a => {
        null != a && (m.google_measure_js_timing = a);
        m.google_measure_js_timing || Kd(xi)
    };
    (a => {
        wi = a || new Ad;
        "number" !== typeof m.google_srt && (m.google_srt = Math.random());
        yd(wi, m.google_srt);
        V = new Nd(wi, xi);
        V.j(!0);
        "complete" == m.document.readyState ? yi() : xi.g && gc(m, "load", () => {
            yi()
        })
    })();
    var zi = (a, b, c) => V.da(a, b, c),
        Ai = (a, b, c) => {
            const d = M(Df).g();
            !b.eid && d.length && (b.eid = d.toString());
            zd(wi, a, b, !0, c)
        },
        Bi = (a, b) => {
            V.Z(a, b)
        },
        Ci = (a, b, c, d) => {
            let e;
            od(b) ? e = b.msg || Md(b.error) : e = Md(b);
            return 0 == e.indexOf("TagError") ? (c = b instanceof nd ? b.error : b, c.pbr || (c.pbr = !0, V.H(a, b, .1, d, "puberror")), !1) : V.H(a, b, c, d)
        };
    var Di = class {
        constructor() {
            this.g = Vc();
            this.h = 0
        }
    };

    function Ei(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (Fi(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function Gi(a) {
        a = Hi(a);
        return a.has("all") || a.has("after")
    }

    function Ii(a) {
        a = Hi(a);
        return a.has("all") || a.has("before")
    }

    function Hi(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Fi(a) {
        const b = Hi(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var Ji = class {
        constructor() {
            this.g = new Set;
            this.h = new Di
        }
    };

    function Ki(a, b) {
        if (!a) return !1;
        a = Gc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Li(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Mi(a) {
        return !!a.nextSibling || !!a.parentNode && Mi(a.parentNode)
    };

    function Ni(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Oi(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Oi(a) {
        let b = "";
        J(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };

    function Pi(a = null) {
        ({
            googletag: a
        } = a ?? window);
        return a?.apiReady ? a : void 0
    };
    const Qi = a => {
        const b = Pi(a);
        return b ? Ma(Na(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
    };
    var Ri = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };

    function Si(a, b) {
        if (a.j) return !0;
        a.j = !0;
        const c = B(a.h, zg, 1);
        a.i = 0;
        const d = Ti(a.B);
        if (Ni(a.g.location, "google_audio_sense")) {
            var e = new vg;
            e = t(e, 1, 1);
            var f = new ug;
            f = Gb(f, 2, !0);
            e = Cb(e, 2, f);
            f = new tg;
            var g = new rg;
            g = t(g, 1, 1);
            var h = q(f.s);
            if (h & 2) throw Error();
            h = Bb(f, rg, 1, 2, h);
            g = null != g ? g : new rg;
            h.push(g);
            gb(g.s) && db(h, 8);
            g = new sg;
            g = Gb(g, 1, !0);
            f = Cb(f, 2, g);
            e = Cb(e, 3, f)
        } else e = A(a.h, vg, 27);
        if (f = e)
            if (g = A(a.h, xg, 6)?.g() || [], e = a.g, 1 == H(f, 1) && A(f, ug, 2)?.g() && 0 != g.length) {
                var k;
                f = [];
                for (k of g)
                    if (g = Rh(A(k, O, 1) ||
                            null)) g = g.query(e.document), 0 < g.length && f.push(g[0]);
                f = f.filter(ng).filter(og(f)).filter(pg(e));
                f.sort(qg);
                if (k = f[0] || null) f = e.document.createElement("div"), f.id = "google-auto-placed-read-aloud-player-reserved", Sc(f, {
                    width: "100%",
                    height: "65px"
                }), k.insertBefore(f, k.firstChild), Vh(e).audioSenseSpaceReserved = !0
            } k = a.g;
        var l;
        try {
            var n = (l = k.localStorage.getItem("google_ama_settings")) ? Xh(l) : null
        } catch (z) {
            n = null
        }
        l = null !== n && F(n, 2, !1);
        n = Vh(k);
        l && (n.eatf = !0, ed(7, [!0, 0, !1]));
        b: {
            f = {
                eb: !1,
                fb: !1
            };h = Ta(k.document.querySelectorAll(".google-auto-placed"));
            const z = Ta(k.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
                x = Ta(k.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));g = (Qi(k) || Ta(k.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ta(k.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const w = Ta(k.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                E = Ta(k.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                wa = Ta(k.document.querySelectorAll("div.googlepublisherpluginad")),
                U = Ta(k.document.querySelectorAll("html > ins.adsbygoogle"));e = [].concat(Ta(k.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ta(k.document.querySelectorAll("body ins.adsbygoogle")));l = [];
            for (const [xa, qa] of [
                    [f.Ob, h],
                    [f.eb, z],
                    [f.Rb, x],
                    [f.Pb, g],
                    [f.Sb, w],
                    [f.Nb, E],
                    [f.Qb, wa],
                    [f.fb, U]
                ]) f = qa,
            !1 === xa ? l = l.concat(f) : e = e.concat(f);e = Ri(e);l = Ri(l);
            e = e.slice(0);
            for (u of l)
                for (l = 0; l < e.length; l++)(u.contains(e[l]) || e[l].contains(u)) && e.splice(l, 1);
            var u = e;l = P(k).clientHeight;
            for (k = 0; k < u.length; k++)
                if (!(u[k].getBoundingClientRect().top > l)) {
                    u = !0;
                    break b
                } u = !1
        }
        u = u ? n.eatfAbg = !0 : !1;
        if (u) return !0;
        u = new Yf([2]);
        for (n = 0; n < c.length; n++) {
            l = a;
            e = c[n];
            k = n;
            f = b;
            g = d;
            h = u;
            if (A(e, dg, 4) && h.contains(r(A(e, dg, 4), 1)) && 1 === r(e, 8) && Ui(e, g)) {
                l.i++;
                if (f = Vi(l, e, f, g)) g = Vh(l.g), g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0), A(e, O, 1) && null != C(A(e, O, 1), 5) && (g.numPostPlacementsPlaced ?
                    g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = 1), null == g.placed && (g.placed = []), g.numAutoAdsPlaced++, g.placed.push({
                    index: k,
                    element: f.ga
                }), ed(7, [!1, l.i, !0]);
                l = f
            } else l = null;
            if (l) return !0
        }
        ed(7, [!1, a.i, !1]);
        return !1
    }

    function Vi(a, b, c, d) {
        if (!Ui(b, d) || 1 != r(b, 8)) return null;
        d = A(b, O, 1);
        if (!d) return null;
        d = Rh(d);
        if (!d) return null;
        d = d.query(a.g.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Uh[r(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = Ki(Li(d), f);
                        break a;
                    case 3:
                        f = Ki(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = Ki(g ? 1 == g.nodeType ? g : Li(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Mi(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !Fg(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.A;
            f = r(b, 2);
            g = ea(d);
            g = c.h.g.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(ea(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(ea(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.v;
            g = r(b, 2);
            a: switch (g) {
                case 1:
                    f = Gi(d.previousElementSibling) || Ii(d);
                    break a;
                case 4:
                    f = Gi(d) || Ii(d.nextElementSibling);
                    break a;
                case 2:
                    f = Ii(d.firstElementChild);
                    break a;
                case 3:
                    f = Gi(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + g);
            }
            g = Ei(c, d, g);
            c = c.h;
            Ai("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.h++,
                dvc: Rc()
            }, .1);
            c = f || g
        }
        if (c) return null;
        f = A(b, yg, 3);
        c = {};
        f && (c.Ra = r(f, 1), c.Ia = r(f, 2), c.Xa = !!tb(f, 3));
        f = A(b, dg, 4) && r(A(b, dg, 4), 2) ? r(A(b, dg, 4), 2) : null;
        f = gg(f);
        g = null != C(b, 12) ? C(b, 12) : null;
        g = null == g ? null : new fg(null, {
            google_ml_rank: g
        });
        b = Wi(a, b);
        b = eg(a.l, f, g, b);
        f = a.g;
        a = a.F;
        var h = f.document,
            k = c.Xa || !1;
        g = (new wc(h)).createElement("DIV");
        const l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign =
            "center";
        c.mb && Lh(k, c.mb);
        h = (new wc(h)).createElement("INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.Ra && (k.marginTop = c.Ra);
        c.Ia && (k.marginBottom = c.Ia);
        c.Ta && Lh(k, c.Ta);
        g.appendChild(h);
        c = {
            qa: g,
            ga: h
        };
        c.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ja) c.qa.className = h.join(" ");
        h = c.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var n = c.qa;
                if (S(Ng)) {
                    {
                        const E = kh(d, e);
                        if (E.init) {
                            var u =
                                E.init;
                            for (d = u; d = E.ha(d);) u = d;
                            var z = {
                                anchor: u,
                                position: E.la
                            }
                        } else z = {
                            anchor: d,
                            position: e
                        }
                    }
                    n["google-ama-order-assurance"] = 0;
                    jh(n, z.anchor, z.position)
                } else jh(n, d, e);
                b: {
                    var x = c.ga;x.dataset.adsbygoogleStatus = "reserved";x.className += " adsbygoogle-noablate";n = {
                        element: x
                    };
                    var w = b && b.Oa;
                    if (x.hasAttribute("data-pub-vars")) {
                        try {
                            w = JSON.parse(x.getAttribute("data-pub-vars"))
                        } catch (E) {
                            break b
                        }
                        x.removeAttribute("data-pub-vars")
                    }
                    w && (n.params = w);
                    (f.adsbygoogle = f.adsbygoogle || []).push(n)
                }
            } catch (E) {
                (x = c.qa) && x.parentNode &&
                    (w = x.parentNode, w.removeChild(x), Fg(w) && (w.style.display = w.getAttribute("data-init-display") || "none"));
                x = !1;
                break a
            }
            x = !0
        }
        return x ? c : null
    }

    function Wi(a, b) {
        return Vf(Xf(Yh(b).map(hg), c => {
            Vh(a.g).exception = c
        }))
    }
    const Xi = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.F = b;
            this.h = c;
            this.l = e || null;
            this.A = (this.B = d) ? qi(a.document, B(d, gi, 5)) : qi(a.document, []);
            this.v = new Ji;
            this.i = 0;
            this.j = !1
        }
    };

    function Ti(a) {
        const b = {};
        a && sb(a, 6, 0, !1, gb(a.s)).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function Ui(a, b) {
        return a && void 0 !== zb(a, dg, 4, !1) && b[r(A(a, dg, 4), 2)] ? !1 : !0
    };
    var Yi = Xb(class extends I {});

    function Zi(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Uf(() => Yi(c)) : Rf(null)
    };

    function aj() {
        if (bj) return bj;
        const a = hd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? bj = b : a.google_persistent_state_async = bj = new cj
    }

    function dj(a) {
        return ej[a] || "google_ps_" + a
    }

    function fj(a, b, c) {
        b = dj(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function gj(a, b, c) {
        return fj(a, b, () => c)
    }
    class cj {
        constructor() {
            this.S = {}
        }
    }
    var bj = null;
    const ej = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function hj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    hj.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Vb, g = c.Wb || !1, f = c.domain || void 0, e = c.path || void 0, d = c.kb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    hj.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = pa(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    hj.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    hj.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = pa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            kb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function ij(a, b = window) {
        if (F(a, 5)) try {
            return b.localStorage
        } catch (err){}
        return null
    };

    function jj(a) {
        var b = new kj;
        return Gb(b, 5, a)
    }
    var kj = class extends I {
        constructor() {
            super()
        }
    };
    const lj = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function mj(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = lj(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (bd({
            e: String(a.internalErrorState)
        }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function nj(a) {
        if (a.h) return a.h;
        a.h = Qc(a.j, "__tcfapiLocator");
        return a.h
    }

    function oj(a) {
        return "function" === typeof a.j.__tcfapi || null != nj(a)
    }

    function pj(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (nj(a)) {
            qj(a);
            const e = ++a.I;
            a.v[e] = c;
            a.h && a.h.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function qj(a) {
        a.l || (a.l = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, gc(a.j, "message", a.l))
    }
    class rj extends Ne {
        constructor(a) {
            var b = {};
            super();
            this.j = a;
            this.h = null;
            this.v = {};
            this.I = 0;
            this.F = b.Qa ?? 500;
            this.B = b.Mb ?? !1;
            this.l = null
        }
        g() {
            this.v = {};
            this.l && (hc(this.j, "message", this.l), delete this.l);
            delete this.v;
            delete this.j;
            delete this.h;
            super.g()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.B
            };
            const c = fc(() => a(b));
            let d = 0; - 1 !== this.F && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = lj(b),
                    b.internalBlockOnErrors = this.B, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                pj(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && pj(this, "removeEventListener", null, a.listenerId)
        }
    };
    var wj = ({
            m: a,
            U: b,
            Qa: c,
            J: d,
            ia: e = !1,
            ja: f = !1
        }) => {
            b = sj({
                m: a,
                U: b,
                ia: e,
                ja: f
            });
            null != b.g || "tcunav" != b.h.message ? d(b) : tj(a, c).then(g => g.map(uj)).then(g => g.map(h => vj(a, h))).then(d)
        },
        sj = ({
            m: a,
            U: b,
            ia: c = !1,
            ja: d = !1
        }) => {
            if (!xj({
                    m: a,
                    U: b,
                    ia: c,
                    ja: d
                })) return vj(a, jj(!0));
            b = aj();
            return (b = gj(b, 24)) ? vj(a, uj(b)) : Tf(Error("tcunav"))
        };

    function xj({
        m: a,
        U: b,
        ia: c,
        ja: d
    }) {
        if (!(d = !d && oj(new rj(a)))) {
            if (c = !c) {
                if (b) {
                    a = Zi(a);
                    if (null != a.g)
                        if ((a = a.g.value) && null != r(a, 1)) b: switch (a = r(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else V.H(806, a.h, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function tj(a, b) {
        return Promise.race([yj(), zj(a, b)])
    }

    function yj() {
        return (new Promise(a => {
            var b = aj();
            a = {
                resolve: a
            };
            const c = gj(b, 25, []);
            c.push(a);
            b.S[dj(25)] = c
        })).then(Aj)
    }

    function zj(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, Tf(Error("tcto")))
        })
    }

    function Aj(a) {
        return a ? Rf(a) : Tf(Error("tcnull"))
    }

    function uj(a) {
        if (mj(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return jj(a)
    }

    function vj(a, b) {
        return (a = ij(b, a)) ? Rf(a) : Tf(Error("unav"))
    };
    var Bj = class extends I {};
    Bj.u = [1, 2, 3];
    var Cj = class extends I {};
    Cj.u = [1, 2, 3];
    var Dj = class extends I {
        g() {
            return A(this, Bj, 2)
        }
        j() {
            return A(this, Cj, 3)
        }
    };
    const Ej = class {
        constructor(a) {
            this.exception = a
        }
    };

    function Fj(a, b) {
        try {
            var c = a.h,
                d = c.resolve,
                e = a.g;
            Vh(e.g);
            B(e.h, zg, 1);
            d.call(c, new Ej(b))
        } catch (f) {
            a = a.h, b = f, Jf(a), a.g = 2, a.i = b, Lf(a.h)
        }
    }
    var Gj = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.h = c
        }
        start() {
            this.j()
        }
        j() {
            try {
                switch (this.i.document.readyState) {
                    case "complete":
                    case "interactive":
                        Si(this.g, !0);
                        Fj(this);
                        break;
                    default:
                        Si(this.g, !1) ? Fj(this) : this.i.setTimeout(ka(this.j, this), 100)
                }
            } catch (a) {
                Fj(this, a)
            }
        }
    };
    var Hj = "a".charCodeAt(),
        Ij = kc(Hf),
        Jj = kc(If);

    function W(a, b) {
        if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function Kj(a) {
        return String.fromCharCode(Hj + W(a, 6)) + String.fromCharCode(Hj + W(a, 6))
    }

    function Lj(a) {
        let b = W(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!W(a, 1),
                e = W(a, 16);
            if (d)
                for (d = W(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function Mj(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (W(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            } return d
    }

    function Nj(a) {
        const b = W(a, 16);
        return !0 === !!W(a, 1) ? (a = Lj(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : Mj(a, b)
    }
    class Oj {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.h = a;
            this.g = 0
        }
    };
    var Qj = (a, b) => {
        try {
            var c = Xa(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new Oj(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.g += 78;
            c.cmpId = W(d, 12);
            c.cmpVersion = W(d, 12);
            d.g += 30;
            c.tcfPolicyVersion = W(d, 6);
            c.isServiceSpecific = !!W(d, 1);
            c.useNonStandardStacks = !!W(d, 1);
            c.specialFeatureOptins = Pj(Mj(d, 12, Jj), Jj);
            c.purpose = {
                consents: Pj(Mj(d, 24, Ij), Ij),
                legitimateInterests: Pj(Mj(d, 24, Ij), Ij)
            };
            c.purposeOneTreatment = !!W(d, 1);
            c.publisherCC = Kj(d);
            c.vendor = {
                consents: Pj(Nj(d), b),
                legitimateInterests: Pj(Nj(d),
                    b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const Pj = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var Rj = class extends I {};
    var Sj = class extends I {};
    var Tj = class extends I {},
        Uj = Xb(Tj);
    Tj.u = [7];

    function Vj(a) {
        return (a = Wj(a)) ? A(a, Sj, 4) : null
    }

    function Wj(a) {
        if (a = (new hj(a)).get("FCCDCF", ""))
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        try {
            return b ? Uj(b) : null
        } catch (c) {
            return null
        }
    };
    kc(Hf).map(a => Number(a));
    kc(If).map(a => Number(a));

    function Xj(a) {
        a.__tcfapiPostMessageReady || Yj(new Zj(a))
    }

    function Yj(a) {
        a.h = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    }
    var Zj = class {
        constructor(a) {
            this.g = a;
            this.h = null
        }
    };
    var ak = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Fc("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function bk() {
        var a = window,
            b = S(Sg);
        a.__uspapi || a.frames.__uspapiLocator || (a = new ck(a), dk(a), b && ek(a))
    }

    function dk(a) {
        !a.j || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", ak(a.g, "__uspapiLocator"), ma("__uspapi", (...b) => fk(a, ...b)))
    }

    function ek(a) {
        !a.h || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", ak(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], ma("__tcfapi", (...b) => gk(a, ...b)), Xj(a.g))
    }

    function fk(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.j
        }, !0)
    }

    function gk(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && (2.1 < c || 1 >= c)) d(null, !1);
            else switch (c = a.g.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(hk(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.1",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(hk(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null,
                        !1)
            }
    }

    function hk(a, b, c) {
        if (!a.h) return null;
        b = Qj(a.h, b);
        b.addtlConsent = null != a.i ? a.i : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class ck {
        constructor(a) {
            this.g = a;
            var b;
            this.j = (b = (b = Wj(a.document)) ? A(b, Rj, 5) || null : null) ? r(b, 2) : null;
            this.h = (b = Vj(a.document)) && null != r(b, 1) ? r(b, 1) : null;
            this.i = (a = Vj(a.document)) && null != r(a, 2) ? r(a, 2) : null
        }
    };
    const ik = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var jk = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            Ai("ama", b, .01)
        },
        kk = a => {
            const b = {};
            J(ik, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    const lk = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        mk = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var nk = a => {
            a = sb(a, 2, 0, !1, gb(a.s));
            if (!a) return !1;
            for (let b = 0; b < a.length; b++)
                if (1 == a[b]) return !0;
            return !1
        },
        pk = (a, b) => {
            a = mk(lk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Lc(a),
                d = ok(a);
            return b.find(e => {
                const f = void 0 !== zb(e, ci, 7, !1) ? Fb(A(e, ci, 7), 1) : Fb(e, 1);
                e = void 0 !== zb(e, ci, 7, !1) ? r(A(e, ci, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        };
    const ok = a => {
        const b = {};
        for (;;) {
            b[Lc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var qk = a => {
        a = A(a, bi, 3);
        return !a || r(a, 1) <= Date.now() ? !1 : !0
    };

    function rk(a) {
        if (S(Lg)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? oi(b) : null
        } catch (d) {
            c = null
        }
        return c
    };
    var sk = class extends I {
        g() {
            return A(this, Dj, 2)
        }
        j() {
            return F(this, 3)
        }
    };
    var tk = class extends I {
        g() {
            return ub(this, 1, qb)
        }
        j() {
            return A(this, sk, 2)
        }
    };
    tk.u = [1];
    var uk = class extends I {
        getId() {
            return D(C(this, 1), 0)
        }
    };
    uk.u = [2];
    var vk = class extends I {};
    vk.u = [2];
    var wk = class extends I {};
    wk.u = [2];
    var xk = class extends I {
        g() {
            return D(r(this, 2), 0)
        }
        j() {
            return D(r(this, 4), 0)
        }
        l() {
            return F(this, 3)
        }
    };
    var yk = class extends I {};
    yk.u = [1, 4, 2, 3];
    var Ak = class extends I {
        j() {
            return Ib(this, sk, 13, zk)
        }
        A() {
            return void 0 !== zb(this, sk, yb(this, zk, 13))
        }
        g() {
            return Ib(this, tk, 14, zk)
        }
        l() {
            return void 0 !== zb(this, tk, yb(this, zk, 14))
        }
    };
    Ak.u = [19];
    var zk = [13, 14];
    let Bk = void 0;

    function X(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function Ck(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ha: !0,
            tb: b,
            oa: a.ablation_viewport_offset
        } : null
    }

    function Dk(a, b) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Ek(a) {
        X(L).allow_second_reactive_tag = a
    }

    function Fk() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function Gk(a) {
        return X(a)?.head_tag_slot_vars?.google_ad_host ?? Hk(a)
    }

    function Hk(a) {
        return a.document?.querySelector('meta[name="google-adsense-platform-account"]')?.getAttribute("content") ?? null
    };
    const Ik = [2, 7, 1];
    var Lk = (a, b, c = "", d = null) => 1 === b && Jk(c, d) ? !0 : Kk(a, c, e => Oa(B(e, Yb, 2), f => r(f, 1) === b)),
        Jk = (a, b) => b ? b.A() ? F(b.j(), 1) : b.l() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a ? F(b.g().j(), 1) : !1 : !1,
        Mk = (a, b) => {
            b = D(C(b, 18), 0); - 1 !== b && (a.tmod = b)
        },
        Ok = a => {
            const b = Dc(L) || L;
            return Nk(b, a) ? !0 : Kk(L, "", c => Oa(sb(c, 3, 0, !1, gb(c.s)), d => d === a))
        };

    function Nk(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Sa(a.split(","), b.toString())
    }

    function Kk(a, b, c) {
        a = Dc(a) || a;
        const d = Pk(a);
        b && (b = md(String(b)));
        return jc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function Pk(a) {
        a = Qk(a);
        const b = {};
        J(a, (c, d) => {
            try {
                const e = new Zb(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var Qk = a => S(Hg) ? (Ub(Bk, Wb), a = sj({
        m: a,
        U: Bk
    }), null != a.g ? Rk(a.g.value) : {}) : Rk(a.localStorage);

    function Rk(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : ic(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Sk(a) {
        Ai("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const Tk = a => !!a && (0 < B(a, zg, 1).length || S(Mg) && 0 < B(a, wg, 3).length),
        Uk = a => {
            Ai("overlay_settings_from_ppabg", {
                p_s: a
            }, .01)
        },
        Vk = a => {
            const b = B(a, ii, 2);
            return pk(m, b) ? [] : sb(a, 3, 0, !1, gb(a.s))
        },
        Wk = (a, b) => {
            if (Gk(m)) return Ik;
            if (b?.A()) {
                a = b?.j()?.g()?.j();
                if (!a) return Ik;
                Uk(!1);
                return Vk(a)
            }
            if (b?.l()) {
                const c = b?.g()?.g();
                if (!c || 1 !== c.length || !a || c[0] !== a || G(b, 17) != m.location.host) return Ik;
                a = b?.g()?.j()?.g()?.j();
                if (!a) return Ik;
                Uk(!0);
                return Vk(a)
            }
            return Ik
        };
    var Xk = (a, b) => {
        const c = [];
        let d = Ik;
        if (S(Qg) || S(Pg) || S(Rg)) d = Wk(a, b);
        S(Qg) && !d.includes(1) && c.push(1);
        S(Pg) && !d.includes(2) && c.push(2);
        S(Rg) && !d.includes(7) && c.push(7);
        return c
    };

    function Yk(a, b, c, d) {
        Zk(new $k(a, b, c, d))
    }

    function Zk(a) {
        Xf(Wf(sj({
            m: a.m,
            U: F(a.h, 6)
        }), b => {
            al(a, b, !0)
        }), () => {
            bl(a)
        })
    }

    function al(a, b, c) {
        Xf(Wf(cl(b), d => {
            dl("ok");
            a.g(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.m;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                jk(d, {
                    lserr: 1
                })
            }
            c ? bl(a) : a.g(null, null)
        })
    }

    function bl(a) {
        Xf(Wf(el(a), b => {
            a.g(b, {
                fromPABGSettings: !0
            })
        }), () => {
            fl(a)
        })
    }

    function cl(a) {
        return (a = (a = rk(a)) ? qk(a) ? a : null : null) ? Rf(a) : Tf(Error("invlocst"))
    }

    function el(a) {
        if (Gk(a.m) && !F(a.h, 22)) return Tf(Error("invtag"));
        a: {
            var b = a.m;
            var c = a.i;a = a.h;
            if (a?.A()) b = a?.j()?.g()?.g(),
            Tk(b) ? Sk(!1) : b = null;
            else {
                if (a?.l()) {
                    const d = a?.g()?.g(),
                        e = a?.g()?.j()?.g()?.g();
                    if (d && 1 === d.length && d[0] === c && Tk(e) && G(a, 17) === b.location.host) {
                        Sk(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new ni, a = B(b, zg, 1), c = Eb(c, 1, a), a = B(b, ii, 2), c = Eb(c, 7, a), S(Mg) && 0 < B(b, wg, 3).length && (a = new xg, b = B(b, wg, 3), b = Eb(a, 1, b), Cb(c, 6, b)), b = Rf(c)) : b = Tf(Error("invtag"));
        return b
    }

    function fl(a) {
        wj({
            m: a.m,
            U: F(a.h, 6),
            Qa: 50,
            J: b => {
                gl(a, b)
            }
        })
    }

    function gl(a, b) {
        Xf(Wf(b, c => {
            al(a, c, !1)
        }), c => {
            dl(c.message);
            a.g(null, null)
        })
    }

    function dl(a) {
        Ai("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class $k {
        constructor(a, b, c, d) {
            this.m = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
    };
    var jl = (a, b, c, d) => {
        try {
            const e = pk(a, B(c, ii, 7));
            if (e && nk(e)) {
                r(e, 4) && (d = eg(d, new fg(null, {
                    google_package: r(e, 4)
                })));
                const f = new Xi(a, b, c, e, d);
                Qh(1E3, () => {
                    var g = new Mf;
                    (new Gj(a, f, g)).start();
                    return g.h
                }, a).then(la(hl, a), la(il, a))
            }
        } catch (e) {
            jk(a, {
                atf: -1
            })
        }
    };
    const hl = a => {
            jk(a, {
                atf: 1
            })
        },
        il = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            jk(a, {
                atf: 0
            })
        };

    function kl(a) {
        if (S(Xg)) {
            a.easpi = !0;
            if (S(Vg) || !S(bh)) a.easpa = !0;
            a.asntp = 0;
            a.asntpv = 0;
            a.asntpl = 0;
            a.asntpm = 0;
            a.asntpc = 1E3;
            a.asna = 5;
            a.asnd = 5;
            a.asnp = 5;
            a.asns = 5;
            !S(Vg) && S(bh) ? a.asmat = M(hh).g($g.g, $g.defaultValue) : (a.aseb = !0, a.ascet = !0, a.asla = .4, a.asaa = -1);
            S(ah) || (a.asptt = -1);
            a.asro = S(bh);
            S(ch) || (a.asrc = !1);
            a.asbu = !0;
            S(Yg) && (a.easppi = !0);
            S(Zg) && (a.asiscm = !0);
            S(Wg) && (a.scsals = !0)
        }
    };
    Va || Ga();
    class ll {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function ml() {
        const {
            promise: a,
            resolve: b
        } = new ll;
        return {
            promise: a,
            resolve: b
        }
    };

    function nl(a = () => {}) {
        m.google_llp || (m.google_llp = {});
        const b = m.google_llp;
        let c = b[7];
        if (c) return c;
        c = ml();
        b[7] = c;
        a();
        return c
    }

    function ol(a) {
        return nl(() => {
            Ec(m.document, a)
        }).promise
    };
    var pl = a => {
        if (m.google_apltlad || m !== m.top || !a.google_ad_client) return null;
        m.google_apltlad = !0;
        const b = {
                enable_page_level_ads: {
                    pltais: !0
                },
                google_ad_client: a.google_ad_client
            },
            c = b.enable_page_level_ads;
        J(a, (d, e) => {
            Jh[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        kl(c);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };
    var sl = (a, b) => {
        X(L).ama_ran_on_page || Qh(1001, () => ql(new rl(a, b)), m)
    };

    function ql(a) {
        Yk(a.g, a.i, a.h.google_ad_client || "", (b, c) => {
            var d = a.g,
                e = a.h;
            X(L).ama_ran_on_page || b && tl(d, e, b, c)
        })
    }
    class rl {
        constructor(a, b) {
            this.g = m;
            this.h = a;
            this.i = b
        }
    }

    function tl(a, b, c, d) {
        d && (Vh(a).configSourceInAbg = d);
        void 0 !== zb(c, mi, 24, !1) && (d = Wh(a), d.availableAbg = !0, d.ablationFromStorage = !!A(c, mi, 24)?.g()?.g());
        if (da(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) {
            d = pk(a, B(c, ii, 7));
            if (!d || !tb(d, 8)) {
                Ai("amaait", {
                    value: "true"
                });
                return
            }
            Ai("amaait", {
                value: "false"
            })
        }
        X(L).ama_ran_on_page = !0;
        A(c, ai, 15)?.g() && (X(a).enable_overlap_observer = !0);
        var e = A(c, $h, 13);
        e && 1 === r(e, 1) ? (d = 0, (e = A(e, Zh, 6)) && C(e, 3) && (d = C(e, 3) || 0), Dk(a, d)) : A(c, mi, 24)?.g()?.g() &&
            (Wh(a).ablatingThisPageview = !0, Dk(a, 1));
        ed(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = kk(da(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        const g = eg(ig, new fg(null, b));
        zi(782, () => {
            jl(a, f, c, g)
        })
    };
    var ul = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function vl(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function wl(a) {
        return b => !!(b.ea & a)
    }
    class Y extends Bh {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.ea = c;
            this.hb = d
        }
        na() {
            return this.ea
        }
        h(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const xl = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        yl = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        zl = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function Al(a) {
        var b = 0;
        a.T && b++;
        a.L && b++;
        a.M && b++;
        if (3 > b) return {
            O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.T.split(",");
        const c = a.M.split(",");
        a = a.L.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            O: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                O: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                O: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            M: d,
            L: e,
            Ma: b
        }
    }

    function Bl(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    const Cl = Ua("script");

    function Dl(a, b, c) {
        null != a.ea && (c.google_responsive_formats = a.ea);
        null != a.R && (c.google_safe_for_responsive_override = a.R);
        null != a.h && (!0 === a.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.h));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.l || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().g(b);
        const e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.g(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.A;
            null != a.g && (c.armr = a.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.h && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.F && (c.gfwroml = a.F);
        null != a.I && (c.gfwromr = a.I);
        null != a.j && (c.gfwroh = a.j);
        null != a.l && (c.gfwrow = a.l);
        null != a.P && (c.gfwroz = a.P);
        null != a.v && (c.gml = a.v);
        null != a.B && (c.gmr = a.B);
        null != a.Y && (c.gzi = a.Y);
        b = Dc(window) || window;
        Ni(b.location, "google_responsive_dummy_ad") &&
            (Sa([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.g) && 2 !== a.g && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = `<${Cl}>window.top.postMessage('${a}', '*'); 
          </${Cl}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`)
    }
    class El {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, n = null, u = null) {
            this.A = a;
            this.fa = b;
            this.ea = c;
            this.g = d;
            this.R = e;
            this.h = f;
            this.i = g;
            this.F = h;
            this.I = k;
            this.j = l;
            this.l = n;
            this.P = u;
            this.Y = this.B = this.v = null
        }
        size() {
            return this.fa
        }
    };
    const Fl = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var Gl = class extends Bh {
            g(a) {
                return Math.min(1200, Math.max(this.K, Math.round(a)))
            }
        },
        Jl = (a, b) => {
            console.log('Jl Hl', a , b)
            alert('size: ', a + " == " + JSON.stringify(b))
            return
            Hl(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new El(9, new Gl(a, Math.floor(a * b.google_phwr)));
            var c = xc();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * xl.mobile_banner_image_sidebyside + yl.mobile_banner_image_sidebyside) + 96), a = {
                ba: a,
                aa: c,
                L: 1,
                M: 12,
                T: "mobile_banner_image_sidebyside"
            }) : (a = Bl(a), a = {
                ba: a.width,
                aa: a.height,
                L: 1,
                M: 13,
                T: "image_sidebyside"
            }) : (a = Bl(a), a = {
                ba: a.width,
                aa: a.height,
                L: 4,
                M: 2,
                T: "image_stacked"
            });
            Il(b, a);
            return new El(9, new Gl(a.ba, a.aa))
        },
        Kl = (a, b) => {
            console.log('Jl Hl', a, b )
            alert('size: ', a + " == " + JSON.stringify(b))
            return
            Hl(a, b);
            var c = Al({
                M: b.google_content_recommendation_rows_num,
                L: b.google_content_recommendation_columns_num,
                T: b.google_content_recommendation_ui_type
            });
            if (c.O) a = {
                ba: 0,
                aa: 0,
                L: 0,
                M: 0,
                T: "image_stacked",
                O: c.O
            };
            else {
                var d = 2 === c.Ma.length && 468 <= a ? 1 : 0;
                var e = c.Ma[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = zl[e];
                let g = c.L[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.M[d];
                c = Math.floor(((a - 8 * f - 8) / f * xl[e] + yl[e]) *
                    d + 8 * d + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    rb: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    rb: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    ba: a.width,
                    aa: a.height,
                    L: f,
                    M: d,
                    T: e
                }
            }
            if (a.O) throw new T(a.O);
            Il(b, a);
            return new El(9, new Gl(a.ba, a.aa))
        };

    function Hl(a, b) {
        if (0 >= a) throw new T("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Il(a, b) {
        a.google_content_recommendation_ui_type = b.T;
        a.google_content_recommendation_columns_num = b.L;
        a.google_content_recommendation_rows_num = b.M
    };
    class Ll extends Bh {
        g() {
            return this.K
        }
        h(a, b, c) {
            Ah(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
        }
    };
    const Ml = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var Nl = class extends Bh {
            g() {
                return Math.min(1200, this.K)
            }
        },
        Ol = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = vh(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = P(b).clientWidth)
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const k = g.parentElement.childNodes;
                                for (let l = 0; l < k.length; ++l) {
                                    const n = k[l];
                                    if (n != g && yh(b, n)) break b
                                }
                                g = g.parentElement;
                                g.style.width =
                                    "100%";
                                g.style.height = "auto"
                            }
                        }
                        Ah(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new T("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new T("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new El(11, new Bh(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b =
                    null;
                if (!b) throw new T("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new T("Invalid height: height=" + f);
                if (50 > f) throw new T("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new T("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new El(11, new Bh(a, f))
            }
            d = Ml[f];
            if (!d) throw new T("Invalid data-ad-layout value: " + f);
            c = Eh(c, b);
            b = P(b).clientWidth;
            b = "in-article" !==
                f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new El(11, "in-article" == f ? new Nl(a, b) : new Bh(a, b))
        };
    var Pl = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        Rl = (a, b) => {
            var c = Ql.slice(0);
            const d = c.length;
            let e = null;
            for (let f = 0; f < d; ++f) {
                const g = c[f];
                if (a(g)) {
                    if (!b || b(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        Ql = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];
    var Tl = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                C: a,
                D: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || Sl(b) || e.google_ad_resize ? (b = wh(a, c, d, e), c = !0 !== b ? {
                C: a,
                D: b
            } : {
                C: P(c).clientWidth || a,
                D: !0
            }) : c = {
                C: a,
                D: 2
            };
            const {
                C: f,
                D: g
            } = c;
            return !0 !== g ? {
                C: a,
                D: g
            } : d.parentElement ? {
                C: f,
                D: g
            } : {
                C: a,
                D: g
            }
        },
        Wl = (a, b, c, d, e) => {
            const {
                C: f,
                D: g
            } = zi(247, () => Tl(a, b, c, d, e));
            var h = !0 === g;
            const k = K(d.style.width),
                l = K(d.style.height),
                {
                    X: n,
                    V: u,
                    na: z,
                    La: x
                } = Ul(f, b, c, d, e, h);
            h = Vl(b, z);
            var w;
            const E = (w = Ch(d, c, "marginLeft",
                    K)) ? w + "px" : "",
                wa = (w = Ch(d, c, "marginRight", K)) ? w + "px" : "";
            w = Ch(d, c, "zIndex") || "";
            return new El(h, n, z, null, x, g, u, E, wa, l, k, w)
        },
        Sl = a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
        Ul = (a, b, c, d, e, f) => {
            b = "auto" == b ? .25 >= a / Math.min(1200, P(c).clientWidth) ? 4 : 3 : uh(b);
            let g;
            var h = !1;
            let k = !1;
            var l = 488 > P(c).clientWidth;
            if (l) {
                g = ph(d, c);
                var n = Eh(d, c);
                h = !n && g;
                k = n && g
            }
            n = [Dh(a), wl(b)];
            n.push(Gh(l, c, d, k));
            null != e.google_max_responsive_height && n.push(Hh(e.google_max_responsive_height));
            l = [w => !w.hb];
            if (h || k) h = Ih(c, d), l.push(Hh(h));
            let u = Rl(Pl(n), Pl(l));
            if (!u) throw new T("No slot size for availableWidth=" + a);
            const {
                X: z,
                V: x
            } = zi(248, () => {
                var w;
                a: if (f) {
                    if (e.gfwrnh && (w = K(e.gfwrnh))) {
                        w = {
                            X: new Ll(a, w),
                            V: !0
                        };
                        break a
                    }
                    w = a / 1.2;
                    var E = Math;
                    var wa = E.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var U = Infinity;
                    else {
                        U = d;
                        let qa = Infinity;
                        do {
                            var xa = Ch(U, c, "height", K);
                            xa && (qa = Math.min(qa, xa));
                            (xa = Ch(U, c, "maxHeight", K)) && (qa = Math.min(qa, xa))
                        } while ((U = U.parentElement) && "HTML" != U.tagName);
                        U = qa
                    }
                    E = wa.call(E, w, U);
                    if (E < .5 * w || 100 > E) E = w;
                    w = {
                        X: new Ll(a, Math.floor(E)),
                        V: E < w ? 102 : !0
                    }
                } else w = {
                    X: u,
                    V: 100
                };
                return w
            });
            return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                X: Xl(a, c, d, z, e),
                V: !1,
                na: b,
                La: g
            } : {
                X: z,
                V: x,
                na: b,
                La: g
            }
        };
    const Vl = (a, b) => {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        Xl = (a, b, c, d, e) => {
            const f = e.google_ad_height || Ch(c, b, "height", K);
            b = Ol(a, b, c, f, e).size();
            return b.K * b.height() > a * d.height() ? new Y(b.K, b.height(), 1) : d
        };
    var Yl = (a, b, c, d, e) => {
        var f;
        (f = P(b).clientWidth) ? 488 > P(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Ah(b, c), f = {
            C: f,
            D: !0
        }) : f = {
            C: a,
            D: 5
        } : f = {
            C: a,
            D: 4
        }: f = {
            C: a,
            D: 10
        };
        const {
            C: g,
            D: h
        } = f;
        if (!0 !== h || a == g) return new El(12, new Bh(a, d), null, null, !0, h, 100);
        const {
            X: k,
            V: l,
            na: n
        } = Ul(g, "auto", b, c, e, !0);
        return new El(1, k, n, 2, !0, h, l)
    };
    var $l = (a, b) => {
            const c = b.google_ad_format;
            if ("autorelaxed" == c) {
                a: {
                    if ("pedestal" != b.google_content_recommendation_ui_type)
                        for (const d of Fl)
                            if (null != b[d]) {
                                a = !0;
                                break a
                            } a = !1
                }
                return a ? 9 : 5
            }
            if (Sl(c)) return 1;
            if ("link" === c) return 4;
            if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Zl(b), 1);
            if (27 === b.google_reactive_ad_format) return Zl(b), 1
        },
        bm = (a, b, c, d, e = !1) => {
            e = b.offsetWidth || (c.google_ad_resize || e) && Ch(b, d, "width",
                K) || c.google_ad_width || 0;
            4 === a && (c.google_ad_format = "auto", a = 1);
            var f = (f = am(a, e, b, c, d)) ? f : Wl(e, c.google_ad_format, d, b, c);
            f.size().h(d, c, b);
            Dl(f, e, c);
            1 != a && (a = f.size().height(), b.style.height = a + "px")
        };
    const am = (a, b, c, d, e) => {
            const f = d.google_ad_height || Ch(c, e, "height", K);
            switch (a) {
                case 5:
                    const {
                        C: g, D: h
                    } = zi(247, () => Tl(b, d.google_ad_format, e, c, d));
                    !0 === h && b != g && Ah(e, c);
                    !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return Jl(g, d);
                case 9:
                    return Kl(b, d);
                case 8:
                    return Ol(b, e, c, f, d);
                case 10:
                    return Yl(b, e, c, f, d)
            }
        },
        Zl = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function cm(a, b) {
        var c = Dc(b);
        if (c) {
            c = P(c).clientWidth;
            const d = Gc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var dm = {
            google_ad_modifications: !0,
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0,
            google_pause_ad_requests: !0,
            google_user_agent_client_hint: !0
        },
        em = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        fm = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) &&
                    RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        gm = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };

    function hm(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = X(a).head_tag_slot_vars?.google_ad_client ?? a.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !ld() ? em : fm;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = gm(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ?? ""
        }
        return b
    };
    async function im(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function jm(a) {
        const b = a.g.pc;
        return null !== b && 0 !== b ? b : a.g.pc = Wc(a.m)
    }

    function km(a) {
        const b = a.g.wpc;
        return null !== b && "" !== b ? b : a.g.wpc = hm(a.m)
    }

    function lm(a, b) {
        var c = new qe;
        var d = jm(a);
        c = y(c, 1, d, 0);
        d = km(a);
        c = y(c, 2, d, "");
        c = y(c, 3, a.g.sd, 0);
        return y(c, 7, Math.round(b || a.m.performance.now()), 0)
    }
    async function mm(a) {
        await im(a.m, () => !(!jm(a) || !km(a)))
    }
    async function nm(a, b) {
        if (a.j && !a.g.le.includes(1)) {
            a.g.le.push(1);
            var c = a.m.performance.now();
            await mm(a);
            b = ie(je(le(new me, b), ge(fe(new he, P(a.m).scrollWidth), P(a.m).scrollHeight)), ge(fe(new he, P(a.m).clientWidth), P(a.m).clientHeight));
            var d = new ne;
            S(Kg) ? (y(b, 4, a.i, ""), y(d, 1, a.i, "")) : (y(b, 4, a.m?.document?.URL, ""), y(d, 1, a.m?.document?.URL, ""));
            var e = oh(a.m);
            0 !== e && ke(b, de(new ee, e));
            Ke(a.h, oe(lm(a, c), b));
            Xe(a.h, a.m, () => {
                var f = a.h;
                var g = lm(a);
                g = Db(g, 8, pe, d);
                Ke(f, g)
            })
        }
    }
    async function om(a, b, c) {
        if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.m.performance.now();
            await mm(a);
            var e = a.h;
            a = lm(a, d);
            d = new ce;
            b = y(d, 1, b, 0);
            c = vb(b, 2, c);
            c = Db(a, 9, pe, c);
            Ke(e, c)
        }
    }
    var pm = class {
        constructor(a) {
            this.m = hd() || window;
            this.h = a ?? new Ze(100, 100, !0);
            this.g = fj(aj(), 33, () => {
                const b = M(hh).g(Ig.g, Ig.defaultValue);
                return {
                    sd: b,
                    ssp: 0 < b && Kc() < 1 / b,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: []
                }
            })
        }
        get j() {
            return this.g.ssp
        }
        get i() {
            return this.g.cu
        }
        set i(a) {
            this.g.cu = a
        }
    };

    function qm() {
        var a = window;
        return !S(Ug) || "on" !== m.google_adtest && "on" !== m.google_adbreak_test && !a.location.host.endsWith("h5games.usercontent.goog") ? [] : a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && 0 < b) || []
    };

    function rm(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function sm(a) {
        var b = L.document;
        if (b.currentScript) return rm(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === rm(c, a)) return 0;
        return 1
    };

    function tm(a, b) {
        return {
            [3]: {
                [55]: () => 0 === a,
                [23]: c => Lk(L, Number(c)),
                [24]: c => Ok(Number(c)),
                [61]: () => F(b, 6),
                [63]: () => F(b, 6) || ".google.ch" === G(b, 8)
            },
            [4]: {},
            [5]: {
                [6]: () => G(b, 15)
            }
        }
    };

    function um(a = m) {
        return a.ggeac || (a.ggeac = {})
    };

    function vm() {
        var a = M(hh).j(eh.g, eh.defaultValue),
            b = L.document;
        if (a.length && b.head)
            for (const d of a)
                if ((a = d) && b.head) {
                    var c = Fc("META");
                    b.head.appendChild(c);
                    c.httpEquiv = "origin-trial";
                    c.content = a
                }
    }

    function wm(a, b = document) {
        return !!b.featurePolicy?.features().includes(a)
    }

    function xm(a, b = document) {
        return !!b.featurePolicy?.allowedFeatures().includes(a)
    };

    function ym(a, b) {
        try {
            const d = a.split(".");
            a = m;
            let e = 0,
                f;
            for (; null != a && e < d.length; e++) f = a, a = a[d[e]], "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch (err){}
    }
    var zm = {
        [3]: {
            [8]: a => {
                try {
                    return null != ba(a)
                } catch (err){}
            },
            [9]: a => {
                try {
                    var b = ba(a)
                } catch (err){}
                    return
                }
                if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Sa(M(Df).g(), Number(a)),
            [27]: a => {
                a = ym(a, "boolean");
                return void 0 !== a ? a : void 0
            },
            [60]: a => {
                try {
                    return !!m.document.querySelector(a)
                } catch (err){}
            },
            [69]: a => wm(a, m.document),
            [70]: a => xm(a, m.document)
        },
        [4]: {
            [3]: () => Rc(),
            [6]: a => {
                a = ym(a, "number");
                return void 0 !== a ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch (err){}
                    return ""
                }
            },
            [4]: a => {
                a = ym(a, "string");
                return void 0 !== a ? a : void 0
            }
        }
    };
    const Am = [12, 13, 20];

    function Bm(a, b, c, d) {
        const e = M(df).G;
        if (!Xd(A(b, Qd, 3), e)) return null;
        var f = B(b, uk, 2),
            g = H(b, 6);
        if (g) {
            wb(d, 1, ve, g);
            f = e[4];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), y(d, 3, c, 0)
            } catch (k) {}
            return (b = Cm(b, c)) ? Dm(a, [b], 1) : null
        }
        if (g = H(b, 10)) {
            wb(d, 2, ve, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[4][9];
                    break;
                case 2:
                    h = e[4][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === H(b, 11)) return null;
            void 0 !== c && y(d, 3, c, 0);
            return (b = Cm(b, c)) ? Dm(a, [b], 1) : null
        }
        d = e ? Ma(f, k => Xd(A(k, Qd,
            3), e)) : f;
        if (!d.length) return null;
        c = d.length * D(Fb(b, 1), 0);
        return (b = H(b, 4)) ? Em(a, b, c, d) : Dm(a, d, c / 1E3)
    }

    function Fm(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        Sa(a, b) || a.push(b)
    }

    function Gm(a, b, c) {
        const d = [],
            e = Hm(a.i, b);
        var f;
        if (f = 9 !== b) a.j[b] ? f = !0 : (a.j[b] = !0, f = !1);
        if (f) return af(a.N, b, c, d, [], 4), d;
        if (!e.length) return af(a.N, b, c, d, [], 3), d;
        const g = Sa(Am, b),
            h = [];
        La(e, k => {
            var l = new ue;
            if (k = Bm(a, k, c, l)) 0 !== xb(l, ve) && h.push(l), l = k.getId(), d.push(l), Fm(a, l, g ? 4 : c), (k = B(k, $d, 2)) && (g ? uf(k, wf(), a.N, l) : uf(k, [c], a.N, l))
        });
        af(a.N, b, c, d, h, 1);
        return d
    }

    function Im(a, b) {
        a.i.push(...Ma(Na(b, c => new wk(c)), c => !Sa(Am, H(c, 1))))
    }

    function Dm(a, b, c) {
        const d = a.h,
            e = Pa(b, f => !!d[f.getId()]);
        return e ? e : a.ra ? null : Hc(b, c)
    }

    function Em(a, b, c, d) {
        const e = null != a.ka[b] ? a.ka[b] : 1E3;
        if (0 >= e) return null;
        d = Dm(a, d, c / e);
        a.ka[b] = d ? 0 : e - c;
        return d
    }

    function Jm(a, b) {
        N(1, c => {
            a.h[c] = !0
        }, b);
        N(2, (c, d) => Gm(a, c, d), b);
        N(3, c => (a.g[c] || []).concat(a.g[4]), b);
        N(12, c => void Im(a, c), b);
        N(16, (c, d) => void Fm(a, c, d), b)
    }
    var Km = class {
        constructor(a, b, c, {
            ra: d = !1,
            Xb: e = [],
            ka: f = {}
        } = {}) {
            this.N = c;
            this.i = a.slice();
            this.j = {};
            this.ra = d;
            this.ka = f;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.h = {};
            (a = Cd()) && La(a.split(",") || [], g => {
                (g = Number(g)) && (this.h[g] = !0)
            });
            La(e, g => {
                this.h[g] = !0
            })
        }
    };

    function Hm(a, b) {
        return (a = Pa(a, c => H(c, 1) === b)) && B(a, vk, 2) || []
    }

    function Cm(a, b) {
        var c = B(a, uk, 2),
            d = c.length,
            e = D(Fb(a, 8), 0);
        a = d * D(Fb(a, 1), 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * Kc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = M(df).G;
        return !c || e && !Xd(A(c, Qd, 3), e) ? null : c
    };

    function Lm(a, b) {
        a.g = yf(14, b, () => {})
    }
    class Mm {
        constructor() {
            this.g = () => {}
        }
    }

    function Nm(a) {
        M(Mm).g(a)
    };

    function Om({
        ab: a,
        G: b,
        Ya: c,
        Va: d = um(),
        Wa: e = 0,
        N: f = new cf(A(a, xk, 5)?.g() ?? 0, A(a, xk, 5)?.j() ?? 0, A(a, xk, 5)?.l() ?? !1)
    }) {
        d.hasOwnProperty("init-done") ? (yf(12, d, () => {})(Na(B(a, wk, 2), g => g.toJSON())), yf(13, d, () => {})(Na(B(a, $d, 1), g => g.toJSON()), e), b && yf(14, d, () => {})(b), Pm(e, d)) : (Jm(new Km(B(a, wk, 2), e, f, c), d), zf(d), Af(d), Bf(d), Pm(e, d), uf(B(a, $d, 1), [e], f, void 0, !0), ef = ef || !(!c || !c.gb), Nm(zm), b && Nm(b))
    }

    function Pm(a, b = um()) {
        Cf(M(Df), b, a);
        Qm(b, a);
        Lm(M(Mm), b);
        M(hh).l()
    }

    function Qm(a, b) {
        const c = M(hh);
        c.h = (d, e) => yf(5, a, () => !1)(d, e, b);
        c.g = (d, e) => yf(6, a, () => 0)(d, e, b);
        c.i = (d, e) => yf(7, a, () => "")(d, e, b);
        c.j = (d, e) => yf(8, a, () => [])(d, e, b);
        c.l = () => {
            yf(15, a, () => {})(b)
        }
    };

    function Rm(a = Kc()) {
        return b => Lc(`${a}.${b}`) % 1E3
    };

    function Sm(a, b) {
        b = {
            [0]: Rm(Wc(b).toString())
        };
        b = M(Df).j(a, b);
        Ff.Z(1085, om(M(pm), a, b))
    }
    var Tm = (a, b, c) => {
        var d = X(a);
        if (d.plle) Pm(1, um(a));
        else {
            d.plle = !0;
            d = A(b, yk, 12);
            var e = F(b, 9);
            Om({
                ab: d,
                G: tm(c, b),
                Ya: {
                    ra: e && !!a.google_disable_experiments,
                    gb: e
                },
                Va: um(a),
                Wa: 1
            });
            if (c = G(b, 15)) c = Number(c), M(Df).i(c);
            for (const f of ub(b, 19, pb)) b = f, M(Df).h(b);
            Sm(12, a);
            Sm(10, a);
            a = Dc(a) || a;
            Ni(a.location, "google_mc_lab") && M(Df).h(44738307);
            Ni(a.location, "google_auto_storify_swipeable") && M(Df).h(44773747);
            Ni(a.location, "google_auto_storify_scrollable") && M(Df).h(44773746)
        }
    };

    function Um({
        pa: a,
        ua: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function Vm(a) {
        V.va(b => {
            b.shv = String(a);
            b.mjsv = Um({
                pa: "m202305310101",
                ua: a
            });
            const c = M(Df).g();
            var d = X(m);
            d.eids || (d.eids = []);
            d = d.eids;
            const e = qm();
            b.eid = c.concat(d).concat(e).join(",")
        })
    }

    function Wm(a) {
        Vm(G(a, 2));
        a = F(a, 6);
        Ub(Bk, Pd);
        Bk = a
    };
    var Xm = "undefined" === typeof sttc ? void 0 : sttc;

    function Ym(a) {
        var b = V;
        try {
            return Ub(a, Od), new Ak(JSON.parse(a))
        } catch (c) {
            b.H(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new Ak
    };

    function Zm(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function $m(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function an() {
        const a = new Set,
            b = Pi();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch (err){}
        return a
    }

    function bn(a) {
        a = a.id;
        return null != a && (an().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function cn(a, b, c) {
        if (!a.sources) return !1;
        switch (dn(a)) {
            case 2:
                const d = en(a);
                if (d) return c.some(f => fn(d, f));
                break;
            case 1:
                const e = gn(a);
                if (e) return b.some(f => fn(e, f))
        }
        return !1
    }

    function dn(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function gn(a) {
        return hn(a, b => b.currentRect)
    }

    function en(a) {
        return hn(a, b => b.previousRect)
    }

    function hn(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function fn(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function jn() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(bn),
            b = [...an()].map(c => document.getElementById(c)).filter(c => null !== c);
        kn = window.scrollX;
        ln = window.scrollY;
        return mn = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function nn() {
        var a = new on;
        if (S(fh)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                for (const c of b) pn(a).observe({
                    type: c,
                    buffered: !0
                });
                qn(a)
            }
        }
    }

    function pn(a) {
        a.N || (a.N = new PerformanceObserver(Ph(640, b => {
            const c = kn !== window.scrollX || ln !== window.scrollY ? [] : mn,
                d = jn();
            for (const h of b.getEntries()) switch (h.entryType) {
                case "layout-shift":
                    b = a;
                    var e = h,
                        f = c,
                        g = d;
                    if (!e.hadRecentInput) {
                        b.B += Number(e.value);
                        Number(e.value) > b.I && (b.I = Number(e.value));
                        b.P += 1;
                        if (f = cn(e, f, g)) b.l += e.value, b.Ba++;
                        if (5E3 < e.startTime - b.Aa || 1E3 < e.startTime - b.Da) b.Aa = e.startTime, b.h = 0, b.j = 0;
                        b.Da = e.startTime;
                        b.h += e.value;
                        f && (b.j += e.value);
                        b.h > b.Y && (b.Y = b.h, b.Ga = b.j, b.Fa = e.startTime +
                            e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    b = h;
                    a.za = Math.floor(b.renderTime || b.loadTime);
                    a.ya = b.size;
                    break;
                case "first-input":
                    b = h;
                    a.wa = Number((b.processingStart - b.startTime).toFixed(3));
                    a.xa = !0;
                    break;
                case "longtask":
                    b = Math.max(0, h.duration - 50), a.v += b, a.F = Math.max(a.F, b), a.R += 1
            }
        })));
        return a.N
    }

    function qn(a) {
        const b = Ph(641, () => {
                var d = document;
                2 === (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                } [d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && rn(a)
            }),
            c = Ph(641, () => void rn(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.fa = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            pn(a).disconnect()
        }
    }

    function rn(a) {
        if (!a.Ca) {
            a.Ca = !0;
            pn(a).takeRecords();
            var b = "https://www.example.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += $m("cls", a.B), b += $m("mls", a.I), b += Zm("nls", a.P), window.LayoutShiftAttribution && (b += $m("cas", a.l), b += Zm("nas", a.Ba), b += $m("was", a.Ga)), b += $m("wls", a.Y), b += $m("tls", a.Fa));
            window.LargestContentfulPaint && (b += Zm("lcp", a.za), b += Zm("lcps", a.ya));
            window.PerformanceEventTiming && a.xa && (b += Zm("fid", a.wa));
            window.PerformanceLongTaskTiming && (b += Zm("cbt", a.v), b +=
                Zm("mbt", a.F), b += Zm("nlt", a.R));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) bn(c) && d++;
            b += Zm("nif", d);
            b += Zm("ifi", kd(window));
            c = M(Df).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${m===m.top?1:0}`;
            b += a.Ea ? `&${"qqid"}=${encodeURIComponent(a.Ea)}` : Zm("pvsid", Wc(m));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            Oe(a)
        }
    }
    var on = class extends Ne {
            constructor() {
                super();
                this.j = this.h = this.P = this.I = this.B = 0;
                this.Da = this.Aa = Number.NEGATIVE_INFINITY;
                this.wa = this.ya = this.za = this.Ba = this.Ga = this.l = this.Fa = this.Y = 0;
                this.xa = !1;
                this.R = this.F = this.v = 0;
                this.N = null;
                this.Ca = !1;
                this.fa = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.Ea = a ? a.getAttribute("data-google-query-id") : null
            }
            g() {
                super.g();
                this.fa()
            }
        },
        kn, ln, mn = [];
    var sn = class extends I {
        constructor() {
            super()
        }
        getVersion() {
            return G(this, 2)
        }
    };

    function tn(a, b) {
        return t(a, 2, b)
    }

    function un(a, b) {
        return t(a, 3, b)
    }

    function vn(a, b) {
        return t(a, 4, b)
    }

    function wn(a, b) {
        return t(a, 5, b)
    }

    function xn(a, b) {
        return t(a, 9, b)
    }

    function yn(a, b) {
        return Eb(a, 10, b)
    }

    function zn(a, b) {
        return Gb(a, 11, b)
    }

    function An(a, b) {
        return t(a, 1, b)
    }

    function Bn(a, b) {
        return Gb(a, 7, b)
    }
    var Cn = class extends I {
        constructor() {
            super()
        }
    };
    Cn.u = [10, 6];
    const Dn = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function En() {
        if ("function" !== typeof L.navigator?.userAgentData?.getHighEntropyValues) return null;
        const a = L.google_tag_data ?? (L.google_tag_data = {});
        if (a.uach_promise) return a.uach_promise;
        const b = L.navigator.userAgentData.getHighEntropyValues(Dn).then(c => {
            a.uach ?? (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function Fn(a) {
        return zn(yn(wn(tn(An(vn(Bn(xn(un(new Cn, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList?.map(b => {
            var c = new sn;
            c = t(c, 1, b.brand);
            return t(c, 2, b.version)
        }) || []), a.wow64 || !1)
    }

    function Gn() {
        return En()?.then(a => Fn(a)) ?? null
    };

    function Hn(a, b) {
        b.google_ad_host || (a = Hk(a)) && (b.google_ad_host = a)
    }

    function In(a, b, c = "") {
        try {
            L.google_sa_impl && !L.document.getElementById("google_shimpl") && (delete L.google_sa_queue, delete L.google_sa_impl);
            L.google_sa_queue || (L.google_sa_queue = [], L.google_process_slots = V.ma(215, () => Jn(L.google_sa_queue)), a = Kn(c, a, b), Ec(L.document, a).id = "google_shimpl")
    
        } catch(err) {}
    }

    function Jn(a) {
        const b = a.shift();
        "function" === typeof b && V.da(216, b);
        a.length && m.setTimeout(V.ma(215, () => Jn(a)), 0)
    }

    function Ln(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function Kn(a, b, c) {
        b = F(c, 4) ? b.pb : b.qb;
        const d = {};
        a: {
            if (F(c, 4)) {
                if (a = a || hm(L)) {
                    a = {
                        client: a,
                        plah: L.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        Mn(a, d);
        Mn(ih() ? {
            bust: ih()
        } : {}, d);
        return oc(b, d)
    }

    function Mn(a, b) {
        J(a, (c, d) => {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Nn(a) {
        a: {
            var b = [m.top];
            var c = [];
            let e = 0,
                f;
            for (; f = b[e++];) {
                c.push(f);
                try {
                    if (f.frames)
                        for (let g = 0; g < f.frames.length && 1024 > b.length; ++g) b.push(f.frames[g])
                } catch (err){}
            }
            b = c;
            for (c = 0; c < b.length; c++) try {
                var d = b[c].frames.google_esf;
                if (d) {
                    cd = d;
                    break a
                }
            } catch (g) {}
            cd = null
        }
        if (cd) return null;d = Fc("IFRAME");d.id = "google_esf";d.name = "google_esf";d.src = qc(a.wb).toString();d.style.display = "none";
        return d
    }

    function On(a, b, c, d, e) {
        const f = e.bb;
        Pn(a, c, b);
        c = oa;
        const g = (new Date).getTime();
        b.google_lrv = Um({
            pa: "m202305310101",
            ua: G(d, 2)
        });
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        d = a.document.getElementById(f + "_host") ? h => h() : h => window.setTimeout(h, 0);
        Ln(a, () => {
            var {
                vb: h
            } = e;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == h) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && V.Z(911, h)
        }, d)
    }

    function Pn(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !ul[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Lc(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let l = 0; l < h.length; ++l) {
                            const n = h[l];
                            if (n.nodeName && n.nodeName.toString().toLowerCase() === g) {
                                if (b === n) {
                                    g = "." + k;
                                    break a
                                }++k
                            }
                        }
                    }
                    g =
                    ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && 25 > d; ++d) {
                    const k = h.frames;
                    for (f = 0; f < k.length; ++f)
                        if (a === k[f]) {
                            e.push(f);
                            break
                        } a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = Lc(b + e.join()).toString()
        }
    }

    function Qn() {
        var a = Dc(m);
        a && (a = kg(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function Rn() {
        const a = Gn();
        null != a && a.then(b => {
            a: {
                mb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), Lb);
                    break a
                } finally {
                    mb = !1
                }
                c = void 0
            }
            L.google_user_agent_client_hint = c
        });
        vm()
    };

    function Sn(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Tn(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = Bc(c, "client");
            d && (b.google_ad_client = Sn("google_ad_client", d));
            (c = Bc(c, "host")) && (b.google_ad_host = Sn("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = pa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = Sn(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Un(a) {
        if (a = gd(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Vn(a, b, c, d) {
        Tn(a, b);
        if (c.document && c.document.body && !$l(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = cm(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!ul[e + "x" + g];
                var h = f;
                if (e) {
                    const k = vl(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new T("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                g = Wl(f, "auto", c, a, b);
                h = f;
                g.size().h(c,
                    b, a);
                Dl(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.K > f && !e && (b.google_ad_width = g.K, a.style.width = `${g.K}px`)
            }
        }(e = a.offsetWidth) || (e = Ch(a, c, "width", K));
        e = e || b.google_ad_width || 0;
        if (488 > P(c).clientWidth) {
            f = Dc(c) || c;
            g = b.google_ad_client;
            if (d = Ni(f.location, "google_responsive_slot_preview") || S(Tg) || Lk(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || $l(c, b) || rh(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = Gc(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Sa(["static", "relative"], f.position)) {
                            b.gfwrnwer =
                                17;
                            d = !1;
                            break b
                        }
                    }
                    d = vh(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                } d ? (b.google_resizing_allowed = !0, b.ovlp = !0, b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1, d = !0) : d = !1
        } else d = !1;
        if (e = $l(c, b)) bm(e, a, b, c, d);
        else {
            if (rh(a, b)) {
                if (d = Gc(a, c)) a.style.width = d.width, a.style.height = d.height, qh(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Un(c)
            } else qh(a.style, b);
            c.location &&
                "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? bm(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = wh(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function Wn(a) {
        if (a.h) return a.h;
        a.F && a.F(a.j) ? a.h = a.j : a.h = Qc(a.j, a.I);
        return a.h ?? null
    }
    var Xn = class extends Ne {
        constructor(a, b, c) {
            super();
            this.I = a;
            this.F = b;
            this.P = c;
            this.B = new Map;
            this.v = new Map;
            this.R = new Map;
            this.l = void 0;
            this.j = L
        }
        g() {
            delete this.h;
            this.B.clear();
            this.v.clear();
            this.R.clear();
            this.l && (hc(this.j, "message", this.l), delete this.l);
            delete this.j;
            delete this.P;
            super.g()
        }
    };
    const Yn = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.J({
                    consentData: c ?? void 0,
                    Za: d ? void 0 : 2
                })
            })
        },
        Zn = {
            ib: a => a.J,
            jb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            lb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ?? void 0,
                    Za: b.success ? void 0 : 2
                })
            }
        };

    function $n(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            nb: b.__uspapiReturn.callId
        }
    }
    var ao = class extends Ne {
        constructor() {
            super();
            this.caller = new Xn("__uspapiLocator", a => "function" === typeof a.__uspapi, $n);
            this.caller.B.set("getDataWithCallback", Yn);
            this.caller.v.set("getDataWithCallback", Zn)
        }
        g() {
            Oe(this.caller);
            super.g()
        }
    };
    var bo = Xb(class extends I {});
    const co = (a, b) => {
            const c = {
                cb: d => {
                    d = bo(d);
                    b.J({
                        consentData: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        eo = {
            ib: a => a.J,
            jb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            lb: (a, b) => {
                a({
                    consentData: b
                })
            }
        };

    function fo(a) {
        a = bo(a.data.__fciReturn);
        return {
            payload: a,
            nb: D(r(a, 1), 0)
        }
    }
    var go = class extends Ne {
        constructor() {
            super();
            this.h = this.j = !1;
            this.caller = new Xn("googlefcPresent", void 0, fo);
            this.caller.B.set("getDataWithCallback", co);
            this.caller.v.set("getDataWithCallback", eo)
        }
        g() {
            Oe(this.caller);
            super.g()
        }
    };
    var ho = a => {
        gc(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "sc-cnf" !== c.googMsgType || a(c, b)
        })
    };
    let io = null;
    const jo = [],
        ko = new Map;
    let lo = -1;

    function mo(a) {
        return Kh.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }

    function no(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        oo(a, b, c)
    }

    function oo(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Vn);
        var e = b.google_reactive_ads_config;
        e || Vn(a, b, d, c);
        Hn(d, b);
        if (!po(a, b, d)) {
            e || (d.google_lpabyc = th(a, d) + (Ch(a, d, "height", K) || 0));
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(L).page_contains_reactive_tag && !X(L).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Ek(!1);
                        return
                    }
                    throw new T("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(L).page_contains_reactive_tag = !0;
                Ek(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = jd(d);
            J(dm, (f, g) => {
                b[g] = b[g] ||
                    d[g]
            });
            "sd" !== b.google_loader_used && (b.google_loader_used = "aa");
            b.google_reactive_tag_first = 1 === (X(L).first_tag_on_page || 0);
            zi(164, () => {
                var f = d.document;
                for (var g = void 0, h = 0; !g || f.getElementById(g + "_host");) g = "aswift_" + h++;
                f = g;
                g = Number(b.google_ad_width || 0);
                h = Number(b.google_ad_height || 0);
                const k = Fc("DIV");
                k.id = f + "_host";
                const l = k.style;
                l.border = "none";
                l.height = `${h}px`;
                l.width = `${g}px`;
                l.margin = "0px";
                l.padding = "0px";
                l.position = "relative";
                l.visibility = "visible";
                l.backgroundColor = "transparent";
                k.style.display =
                    "inline-block";
                a.appendChild(k);
                On(d, b, a, c, {
                    bb: f,
                    vb: k
                })
            })
        }
    }

    function po(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Ck(c);
        if (f && f.Ha && "on" !== b.google_adtest && !e) {
            e = th(a, c);
            const g = P(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.oa || f.oa && (e || 0) >= f.oa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = ea(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.tb && (null !== Pc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Pc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = Gc(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (m.console && m.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function qo(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (mo(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e
        }
        return null
    }

    function ro(a, b, c) {
        if (a && "shift" in a)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    so(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
    }

    function to() {
        const a = Fc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Sc(a, {
            display: "none"
        });
        return a
    }

    function uo(a, b) {
        const c = {},
            d = Xk(a.google_ad_client, b);
        J(jg, (g, h) => {
            !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        da(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = to();
        Xc.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(L).pause_ad_requests;
        no(e, f, b)
    }

    function vo(a, b) {
        kg(m).wasPlaTagProcessed = !0;
        const c = () => {
                uo(a, b)
            },
            d = m.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState) uo(a, b);
        else {
            const e = fc(V.ma(191, c));
            gc(d, "DOMContentLoaded", e);
            (new m.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function so(a, b, c) {
        const d = {};
        zi(165, () => wo(a, d, b, c), e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function xo(a) {
        delete a.google_checked_head;
        J(a, (b, c) => {
            Jh[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), m.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function yo(a, b) {
        var c = L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || L.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) zo(c);
            else {
                var e = {};
                Tn(c, e);
                xo(e);
                var f = lc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                L.adsbygoogle || (L.adsbygoogle = []);
                d = L.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.j()?.j() ? Ao(f, a) : ho(() => {
                    Ao(f, a)
                })
            }
        }
    }

    function zo(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = Bc(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new T("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function Bo(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function wo(a, b, c, d) {
        if (null == a) throw new T("push() called with no parameters.");
        d.l() && Co(a, d.g().g(), G(d, 2));
        var e = Bo(a);
        if (0 !== e)
            if (d = Fk(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = oa), null == io) Do(a), jo.push(a);
            else if (3 === e) {
            const f = io;
            zi(787, () => {
                f.handleAdConfig(a)
            })
        } else Bi(730, io.handleAdBreak(a));
        else {
            oa = (new Date).getTime();
            In(c, d, Eo(a));
            Fo();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new T("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Go(a, d);
            else if ((e = a.params) && J(e, (f, g) => {
                    b[g] = f
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Ho(a.element);
                Tn(e, b);
                c = X(m).head_tag_slot_vars || {};
                J(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") && !X(m).head_tag_slot_vars) throw new T("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new T("Ad client is missing from the slot.");
                (c = 0 === (X(L).first_tag_on_page || 0) && pl(b)) && Io(c);
                0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(L).pause_ad_requests;
                no(e, b, d)
            }
        }
    }
    let Jo = !1;

    function Co(a, b, c) {
        Jo || (Jo = !0, a = Eo(a) || hm(L), Ai("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function Eo(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Fo() {
        if (S(Og)) {
            var a = Ck(L);
            if (!(a = a && a.Ha)) {
                try {
                    var b = L.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? rk(b) : null;
                a = !(b && qk(b) && b)
            }
            a || Dk(L, 1)
        }
    }

    function Io(a) {
        Yc(() => {
            kg(m).wasPlaTagProcessed || m.adsbygoogle && m.adsbygoogle.push(a)
        })
    }

    function Go(a, b) {
        0 === (X(L).first_tag_on_page || 0) && (X(L).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(m);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        sl(a, b);
        vo(a, b)
    }

    function Ho(a) {
        if (a) {
            if (!mo(a) && (a.id ? a = qo(a.id) : a = null, !a)) throw new T("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new T("'element' is not a good DOM element.");
        } else if (a = qo(), !a) throw new T("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Ko() {
        var a = new rj(L),
            b = new ao;
        const c = new go;
        var d = L.__cmp ? 1 : 0;
        a = oj(a) ? 1 : 0;
        b = Wn(b.caller) ? 1 : 0;
        c.j || (c.h = !!Wn(c.caller), c.j = !0);
        Ai("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c.h ? 1 : 0,
            ptt: 9
        }, .001)
    }

    function Lo(a) {
        aj().S[dj(26)] = !!Number(a)
    }

    function Mo(a) {
        Number(a) ? X(L).pause_ad_requests = !0 : (X(L).pause_ad_requests = !1, a = () => {
            if (!X(L).pause_ad_requests) {
                var b = {};
                let c;
                "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                L.dispatchEvent(c)
            }
        }, m.setTimeout(a, 0), m.setTimeout(a, 1E3))
    }

    function No(a) {
        try {
            Object.defineProperty(a, "requestNonPersonalizedAds", {
                set: Lo
            }), Object.defineProperty(a, "pauseAdRequests", {
                set: Mo
            }), Object.defineProperty(a, "onload", {
                set: Oo
            })
        } catch (err){}
    }

    function Oo(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function Ao(a, b) {
        b = ol(oc(b.sb, ih() ? {
            bust: ih()
        } : {})).then(c => {
            null == io && (c.init(a), io = c, Po(c))
        });
        V.Z(723, b);
        b.finally(() => {
            jo.length = 0;
            Ai("slotcar", {
                event: "api_ld",
                time: Date.now() - oa,
                time_pr: Date.now() - lo
            })
        })
    }

    function Po(a) {
        for (const [c, d] of ko) {
            var b = c;
            const e = d; - 1 !== e && (m.clearTimeout(e), ko.delete(b))
        }
        for (b = 0; b < jo.length; b++) {
            if (ko.has(b)) continue;
            const c = jo[b],
                d = Bo(c);
            zi(723, () => {
                if (3 === d) a.handleAdConfig(c);
                else if (2 === d) {
                    var e = a.handleAdBreakBeforeReady(c);
                    V.Z(730, e)
                }
            })
        }
    }

    function Do(a) {
        var b = jo.length;
        if (2 === Bo(a) && "preroll" === a.type && null != a.adBreakDone) {
            var c = a.adBreakDone; - 1 === lo && (lo = Date.now());
            var d = m.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), ko.set(b, -1), Ai("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, 1E3 * M(hh).g(dh.g, dh.defaultValue));
            ko.set(b, d)
        }
    };
    (function(a, b, c, d = () => {}) {
        V.Pa(Ci);
        zi(166, () => {
            const e = Ym(b);
            Wm(e);
            d();
            ed(16, [1, e.toJSON()]);
            var f = hd(gd(L)) || L;
            const g = c(Um({
                pa: a,
                ua: G(e, 2)
            }), e);
            var h = null === L.document.currentScript ? 1 : sm(g.ub);
            Mk(f, e);
            Tm(f, e, h);
            Bi(1086, nm(M(pm), 0 === h));
            if (!Da() || 0 <= ra(Ja(), 11)) {
                yi(S(gh));
                Rn();
                bk();
                try {
                    nn()
                } catch (err){}
                Qn();
                yo(g, e);
                f = window;
                h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    Ai("new_abg_tag", {
                        value: `${F(e,16)}`,
                        host_v: `${F(e,22)}`,
                        frequency: .01
                    }, .01);
                    Ko();
                    var k = {
                        push: n => {
                            so(n, g, e)
                        },
                        loaded: !0
                    };
                    No(k);
                    if (h)
                        for (var l of ["requestNonPersonalizedAds",
                                "pauseAdRequests"
                            ]) void 0 !== h[l] && (k[l] = h[l]);
                    ro(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload = h.onload);
                    (l = Nn(g)) && document.documentElement.appendChild(l)
                }
            }
        })
    })("m202305310101", Xm, function(a, b) {
        const c = 2012 < D(C(b, 1), 0) ? `_fy${D(C(b,1),0)}` : "";
        var d = G(b, 3);
        const e = G(b, 2);
        b = id`https://www.example.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`;
        d = id`https://www.example.com/pagead/html/${e}/${d}/zrt_lookup.html`;
        return {
            sb: b,
            qb: id`https://www.example.com/pagead/managed/js/adsense/${a}/show_ads_impl${c}.js`,
            pb: id`https://www.example.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama${c}.js`,
            Yb: id`https://www.example.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented${c}.js`,
            wb: d,
            ub: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2021,\"r20230531\",\"r20190131\",null,null,null,null,\".google.co.ma\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1247,null,null,[1]],[1252,null,null,[1]],[1240,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[1258,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1259,null,null,[1]],[1198,null,null,[1]],[1206,null,null,[1]],[1243,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[null,506864295,null,[null,300]],[null,508040914,null,[null,100]],[529723966,null,null,[1]],[null,1114,null,[null,1]],[534033864,null,null,[1]],[501545959,null,null,[1]],[null,469675170,null,[null,30000]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"1\",\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10007,null,null,[1]],[10005,null,null,[1]],[1033,null,null,[1]],[10006,null,null,[1]],[null,null,null,[null,null,null,[\"A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo\/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8\/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf\/RP0paks+RoTYbXHxceT\/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[null,1972,null,[]],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,70,null,null,null,null,[\"browsing-topics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74],[200,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74],[100,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74],[50,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44791426,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,77],[50,[[44790623,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44791427,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,77]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776074],[44776369],[44779109],[44784478],[44792510]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31071258],[31071259]]],[100,[[31071755],[31071756,[[1222,null,null,[1]]]]]],[50,[[31074198],[31074199,[[1254,null,null,[1]]]]]],[10,[[31074580],[31074581,[[1229,null,null,[1]]]],[31074582,[[1230,null,null,[1]]]],[31074583,[[1231,null,null,[1]]]],[31074584,[[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]]]]],null,72],[1,[[31074771],[31074772,[[531007060,null,null,[1]],[531582260,null,null,[1]]]]]],[10,[[31074962],[31074963,[[1237,null,null,[1]]]]]],[100,[[31074994],[31074995,[[534338265,null,null,[1]]]]]],[1000,[[31075003,[[null,null,14,[null,null,\"31075003\"]]],[6,null,null,null,6,null,\"31075003\"]],[31075004,[[null,null,14,[null,null,\"31075004\"]]],[6,null,null,null,6,null,\"31075004\"]]],[4,null,55],63],[1000,[[31075048,[[null,null,14,[null,null,\"31075048\"]]],[6,null,null,null,6,null,\"31075048\"]],[31075049,[[null,null,14,[null,null,\"31075049\"]]],[6,null,null,null,6,null,\"31075049\"]]],[4,null,55],63],[100,[[31075067],[31075068,[[1262,null,null,[1]]]]]],[1000,[[31075084,[[null,null,14,[null,null,\"31075084\"]]],[6,null,null,null,6,null,\"31075084\"]],[31075085,[[null,null,14,[null,null,\"31075085\"]]],[6,null,null,null,6,null,\"31075085\"]]],[4,null,55],63],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[50,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,76],[10,[[44776368],[44779257]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[50,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[50,[[44785294],[44785295]]],[null,[[44786918],[44788443,[[1147,null,null,[1]]]]],null,54],[500,[[44788441],[44788442,[[1147,null,null,[1]]]]],null,54],[10,[[44792012],[44792013,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,76],[null,[[44792088],[44792089,[[1223,null,null,[1]]]]],null,75],[50,[[44793497],[44793498,[[1236,null,null,[1]]]],[44793499,[[1241,null,null,[1]]]],[44793500,[[1241,null,null,[1]],[1236,null,null,[1]]]]],null,75]]],[17,[[10,[[31071260]]],[10,[[44788469,[[null,506871937,null,[null,44788469]]]],[44788470,[[1120,null,null,[1]],[501545959,null,null,[]],[null,506871937,null,[null,44788470]]]],[44788471,[[1120,null,null,[1]],[null,506871937,null,[null,44788471]]]]],[4,null,55],null,null,null,null,2,null,118,1],[10,[[44789815],[44789816],[44789817],[44789818]],null,null,null,null,22,null,null,101],[10,[[44789819],[44789820]],null,null,null,null,null,500,null,101],[3,[[44792295,[[null,506871937,null,[null,44792295]]]],[44792296,[[1120,null,null,[1]],[null,506871937,null,[null,44792296]]]]],[2,[[4,null,55],[7,null,null,15,null,20230512]]],null,null,null,null,222,null,118,1],[28,[[44792297,[[1120,null,null,[1]],[null,506871937,null,[null,44792297]]],[4,null,71,null,null,null,null,[\"118\",\"14\"]]]],[2,[[4,null,55],[7,null,null,15,null,20230512]]],null,null,null,null,228,null,118,1],[15,[[44792403],[44792404,[[1957,null,null,[]]]]],[2,[[4,null,55],[6,null,null,3,null,0],[7,null,null,15,null,20230515]]],null,null,null,null,null,null,119,1],[140,[[44792405,[[1957,null,null,[]]],[4,null,71,null,null,null,null,[\"119\",\"14\"]]]],[2,[[4,null,55],[6,null,null,3,null,0],[7,null,null,15,null,20230515]]],null,null,null,null,30,null,119,1],[1,[[44792954,[[506914611,null,null,[1]],[null,506871937,null,[null,44792954]]]],[44792955,[[1120,null,null,[1]],[null,1114,null,[null,0.4]],[506914611,null,null,[1]],[null,506871937,null,[null,44792955]]]]],[4,null,55],null,null,null,null,259,null,118,1],[15,[[44793253]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,null,null,120,1],[15,[[44793254,[[null,1245,null,[null,60]]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,15,null,120,1],[140,[[44793255,[[null,1245,null,[null,60]]],[4,null,71,null,null,null,null,[\"120\",\"14\"]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,30,null,120,1],[15,[[44793256,[[null,1245,null,[null,600]]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,170,null,120,1],[140,[[44793257,[[null,1245,null,[null,600]]],[4,null,71,null,null,null,null,[\"120\",\"14\"]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,185,null,120,1],[20,[[44793404,[[1120,null,null,[1]],[null,506871937,null,[null,44793404]]]],[44793405,[[1120,null,null,[1]],[522099048,null,null,[1]],[null,506871937,null,[null,44793405]]]]],[4,null,55],null,null,null,null,261,null,118,1],[1,[[44793507,[[522099048,null,null,[1]],[506914611,null,null,[1]],[null,506871937,null,[null,44793507]]]],[44793508,[[1120,null,null,[1]],[522099048,null,null,[1]],[null,1114,null,[null,0.4]],[506914611,null,null,[1]],[null,506871937,null,[null,44793508]]]],[44793509,[[1120,null,null,[1]],[522099048,null,null,[1]],[null,1114,null,[null,0.4]],[506914611,null,null,[1]],[null,506871937,null,[null,44793509]]]]],[4,null,55],null,null,null,null,303,null,118,1],[1,[[44793916,[[1120,null,null,[1]],[null,506871937,null,[null,44793916]]]],[44793917,[[1120,null,null,[1]],[null,524139171,null,[null,0.01]],[null,506871937,null,[null,44793917]]]],[44793918,[[1120,null,null,[1]],[null,524139171,null,[null,0.1]],[null,506871937,null,[null,44793918]]]]],[4,null,55],null,null,null,null,326,null,118,1],[2,[[44794210,[[null,1245,null,[null,60]]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,520,null,120,1],[3,[[44794211,[[null,1245,null,[null,60]]],[4,null,71,null,null,null,null,[\"120\",\"2\"]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,522,null,120,1]]]],null,null,[null,\"1000\",1,\"1000\"]],[null,[null,null,[]]],null,\"31075048\",null,null,291001014,[44759875,44759926,44759842]]");
