(function(s,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(s=typeof globalThis<"u"?globalThis:s||self,e(s.MediaManager={},s.Vue))})(this,function(s,e){"use strict";const i=(n,o)=>{const t=n.__vccOpts||n;for(const[r,l]of o)t[r]=l;return t},c={},a={class:"bg-gray-300 h-screen p-24 w-full fixed"},d={class:"bg-white-100 h-full rounded-xl border-none"};function p(n,o){return e.openBlock(),e.createElementBlock("div",a,[e.createElementVNode("div",d,[e.renderSlot(n.$slots,"default")])])}const u=i(c,[["render",p]]),b={class:"flex justify-between py-3 px-8 shadow-lg"},_={class:"text-2xl"},f=e.defineComponent({__name:"Header",props:{title:null},emits:["close"],setup(n,{emit:o}){const t=n;return(r,l)=>(e.openBlock(),e.createElementBlock("div",b,[e.createElementVNode("h1",_,e.toDisplayString(t.title),1),e.createElementVNode("span",{class:"text-xl",onClick:l[0]||(l[0]=h=>o("close"))},"X")]))}}),y=["type","disabled"],m={key:0},x=e.defineComponent({__name:"Button",props:{title:null,type:null,square:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},iconPosition:null,btnStyle:null,icon:null,to:null},emits:["click"],setup(n,{emit:o}){const t=n;return(r,l)=>(e.openBlock(),e.createElementBlock("button",{type:t.type,disabled:t.disabled,class:e.normalizeClass([{"text-white-100 bg-blue-100":t.btnStyle==="primary","text-blue-100 bg-white-100 border border-blue-100 rounded-2xl":t.btnStyle==="primary-outline","text-white-100 bg-status-success":t.btnStyle==="success","text-white-100 bg-status-error":t.btnStyle==="error","text-gray-500 bg-white-100 border border-white-500":t.btnStyle==="default","text-black-100 bg-white-500 hover:bg-blue-200 hover:text-white-100":t.btnStyle==="gray","text-white-100 bg-gray-100 hover:cursor-not-allowed":t.disabled,"h-10 w-10 rounded-lg":t.square,"w-full rounded-xl":!t.square},"flex items-center justify-center p-4 text-xs cursor-pointer"]),onClick:l[0]||(l[0]=h=>o("click"))},[t.loading===!1?(e.openBlock(),e.createElementBlock("span",m,e.toDisplayString(t.title),1)):e.createCommentVNode("",!0)],10,y))}}),g=e.defineComponent({__name:"MediaManager",emits:["close","selectImages"],setup(n,{emit:o}){return(t,r)=>(e.openBlock(),e.createBlock(u,null,{default:e.withCtx(()=>[e.createVNode(f,{title:"MediaManager",onClose:r[0]||(r[0]=l=>o("close"))}),e.createVNode(x,{title:"Save","btn-style":"success"})]),_:1}))}});s.MediaManager=g,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
