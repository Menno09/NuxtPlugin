import { defineComponent as i, openBlock as o, createElementBlock as r, normalizeClass as p, createElementVNode as s, renderSlot as _, toDisplayString as b, createCommentVNode as g, createBlock as x, withCtx as y, createVNode as c } from "vue";
const h = { class: "bg-white-100 h-full rounded-xl border-none flex flex-col" }, f = /* @__PURE__ */ i({
  __name: "Base",
  props: {
    spacing: { type: Boolean }
  },
  setup(l) {
    const n = l;
    return (e, a) => (o(), r("div", {
      class: p([
        "bg-gray-300 h-screen w-full fixed z-30",
        {
          "p-24": n.spacing
        }
      ])
    }, [
      s("div", h, [
        _(e.$slots, "default")
      ])
    ], 2));
  }
}), m = { class: "flex justify-between py-3 px-8 shadow-lg" }, w = { class: "text-2xl" }, v = /* @__PURE__ */ i({
  __name: "Header",
  props: {
    title: null
  },
  emits: ["close"],
  setup(l, { emit: n }) {
    const e = l;
    return (a, t) => (o(), r("div", m, [
      s("h1", w, b(e.title), 1),
      s("span", {
        class: "text-xl",
        onClick: t[0] || (t[0] = (d) => n("close"))
      }, "X")
    ]));
  }
}), $ = ["type", "disabled"], S = { key: 0 }, u = /* @__PURE__ */ i({
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
  setup(l, { emit: n }) {
    const e = l;
    return (a, t) => (o(), r("button", {
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
      onClick: t[0] || (t[0] = (d) => n("click"))
    }, [
      e.loading === !1 ? (o(), r("span", S, b(e.title), 1)) : g("", !0)
    ], 10, $));
  }
}), B = { class: "h-full flex flex-col px-6" }, k = /* @__PURE__ */ s("div", { class: "grid grid-cols-2 gap-4 h-full" }, [
  /* @__PURE__ */ s("div", null, "01"),
  /* @__PURE__ */ s("div", null, "09")
], -1), C = { class: "flex my-6" }, q = /* @__PURE__ */ i({
  __name: "MediaManager",
  props: {
    spacing: { type: Boolean }
  },
  emits: ["close", "selectImages"],
  setup(l, { emit: n }) {
    const e = l;
    return (a, t) => (o(), x(f, {
      spacing: e.spacing
    }, {
      default: y(() => [
        c(v, {
          title: "MediaManager",
          onClose: t[0] || (t[0] = (d) => n("close"))
        }),
        s("div", B, [
          k,
          s("div", C, [
            c(u, {
              title: "Save",
              "btn-style": "primary"
            }),
            c(u, {
              title: "Save",
              "btn-style": "success",
              class: "self-end"
            })
          ])
        ])
      ]),
      _: 1
    }, 8, ["spacing"]));
  }
});
export {
  q as MediaManager
};
