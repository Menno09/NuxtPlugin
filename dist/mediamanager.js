import { openBlock as o, createElementBlock as r, createElementVNode as i, renderSlot as p, defineComponent as a, toDisplayString as d, normalizeClass as _, createCommentVNode as b, createBlock as x, withCtx as y, createVNode as c } from "vue";
const g = (t, s) => {
  const e = t.__vccOpts || t;
  for (const [l, n] of s)
    e[l] = n;
  return e;
}, h = {}, m = { class: "bg-gray-300 h-screen p-24 w-full fixed" }, f = { class: "bg-white-100 h-full rounded-xl border-none" };
function w(t, s) {
  return o(), r("div", m, [
    i("div", f, [
      p(t.$slots, "default")
    ])
  ]);
}
const v = /* @__PURE__ */ g(h, [["render", w]]), $ = { class: "flex justify-between py-3 px-8 shadow-lg" }, k = { class: "text-2xl" }, S = /* @__PURE__ */ a({
  __name: "Header",
  props: {
    title: null
  },
  emits: ["close"],
  setup(t, { emit: s }) {
    const e = t;
    return (l, n) => (o(), r("div", $, [
      i("h1", k, d(e.title), 1),
      i("span", {
        class: "text-xl",
        onClick: n[0] || (n[0] = (u) => s("close"))
      }, "X")
    ]));
  }
}), B = ["type", "disabled"], C = { key: 0 }, M = /* @__PURE__ */ a({
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
    return (l, n) => (o(), r("button", {
      type: e.type,
      disabled: e.disabled,
      class: _([{
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
      e.loading === !1 ? (o(), r("span", C, d(e.title), 1)) : b("", !0)
    ], 10, B));
  }
}), N = /* @__PURE__ */ a({
  __name: "MediaManager",
  emits: ["close", "selectImages"],
  setup(t, { emit: s }) {
    return (e, l) => (o(), x(v, null, {
      default: y(() => [
        c(S, {
          title: "MediaManager",
          onClose: l[0] || (l[0] = (n) => s("close"))
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
