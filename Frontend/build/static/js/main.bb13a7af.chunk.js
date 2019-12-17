(this.webpackJsonpclient = this.webpackJsonpclient || []).push([[0], {
  17(e, t, a) { e.exports = `${a.p}static/media/logo.5d5d9eef.svg`; },
  20(e, t, a) { e.exports = a(44); },
  43(e, t, a) {},
  44(e, t, a) {
    a.r(t); const n = a(1); const r = a.n(n); const s = a(12); const c = a.n(s); const o = a(13); const u = a(14); const i = a(18); const l = a(15); const m = a(19); const p = a(2); const g = a.n(p); const d = a(16); const f = a.n(d); const h = a(17); const v = a.n(h); const b = (a(43), (function (e) {
      function t() { let e; let a; Object(o.a)(this, t); for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)r[s] = arguments[s]; return (a = Object(i.a)(this, (e = Object(l.a)(t)).call.apply(e, [this].concat(r)))).state = { message: 'Loading...' }, a; } return Object(m.a)(t, e), Object(u.a)(t, [{ key: 'componentDidMount', value() { const e = this; (function () { let e; return g.a.async(((t) => { for (;;) switch (t.prev = t.next) { case 0: return t.next = 2, g.a.awrap(f.a.get('/api')); case 2: return e = t.sent, t.abrupt('return', e.data.message); case 4: case 'end': return t.stop(); } })); }()).then(((t) => e.setState({ message: t }))); } }, {
        key: 'render',
        value() {
          const e = this.state.message; return r.a.createElement('div', null, r.a.createElement('img', {
            className: 'logo', 'data-qa': 'logo', src: v.a, alt: 'Just the React logo'
          }), r.a.createElement('p', { className: 'message', 'data-qa': 'message' }, e), r.a.createElement('h', null, 'Cnca Project'));
        }
      }]), t;
    }(n.Component))); c.a.render(r.a.createElement(b, null), document.getElementById('root'));
  }
}, [[20, 1, 2]]]);
// # sourceMappingURL=main.bb13a7af.chunk.js.map
