import { openBlock as l, createElementBlock as r, createElementVNode as a, renderSlot as b, defineComponent as i, toDisplayString as d, normalizeClass as p, createCommentVNode as _, createBlock as y, withCtx as x, createVNode as c } from "vue";
const g = (t, s) => {
  const e = t.__vccOpts || t;
  for (const [o, n] of s)
    e[o] = n;
  return e;
}, h = {}, m = { class: "bg-gray-300 h-screen p-24 opacity-50" }, f = { class: "bg-white-100 h-full rounded-xl border-none" };
function w(t, s) {
  return l(), r("div", m, [
    a("div", f, [
      b(t.$slots, "default")
    ])
  ]);
}
const v = /* @__PURE__ */ g(h, [["render", w]]), $ = { class: "border-b-stone-700 flex justify-between py-3 px-8 shadow-lg" }, k = { class: "text-2xl" }, S = /* @__PURE__ */ i({
  __name: "Header",
  props: {
    title: null
  },
  emits: ["close"],
  setup(t, { emit: s }) {
    const e = t;
    return (o, n) => (l(), r("div", $, [
      a("h1", k, d(e.title), 1),
      a("span", {
        class: "text-xl",
        onClick: n[0] || (n[0] = (u) => s("close"))
      }, "X")
    ]));
  }
}), B = ["type", "disabled"], C = { key: 0 }, M = /* @__PURE__ */ i({
  __name: "Button",
  props: {
    title: null,
    type: null,
    square: { type: Boolean },
    loading: { type: Boolean },
    disabled: { type: Boolean },
    iconPosition: null,
    btnStyle: null,
    icon: null,
    to: null
  },
  emits: ["click"],
  setup(t, { emit: s }) {
    const e = t;
    return (o, n) => (l(), r("button", {
      type: e.type,
      disabled: e.disabled,
      class: p([{
        "text-white-100 bg-blue-100": e.btnStyle === "primary",
        "text-blue-100 bg-white-100 border border-blue-100 rounded-2xl": e.btnStyle === "primary-outline",
        "text-white-100 bg-status-success": e.btnStyle === "success",
        "text-white-100 bg-status-error": e.btnStyle === "error",
        "text-gray-500 bg-white-100 border border-white-500": e.btnStyle === "default",
        "text-black-100 bg-white-500 hover:bg-blue-200 hover:text-white-100": e.btnStyle === "gray",
        "text-white-100 bg-gray-100 hover:cursor-not-allowed": e.disabled,
        "h-10 w-10 rounded-lg": e.square,
        "w-full rounded-xl": !e.square
      }, "flex items-center justify-center p-4 text-xs cursor-pointer"]),
      onClick: n[0] || (n[0] = (u) => s("click"))
    }, [
      e.loading === !1 ? (l(), r("span", C, d(e.title), 1)) : _("", !0)
    ], 10, B));
  }
}), N = /* @__PURE__ */ i({
  __name: "MediaManager",
  emits: ["close", "selectImages"],
  setup(t, { emit: s }) {
    return (e, o) => (l(), y(v, null, {
      default: x(() => [
        c(S, {
          title: "MediaManager",
          onClose: o[0] || (o[0] = (n) => s("close"))
        }),
        c(M, {
          title: "Save",
          "btn-style": "success"
        })
      ]),
      _: 1
    }));
  }
});
export {
  N as MediaManager
};
