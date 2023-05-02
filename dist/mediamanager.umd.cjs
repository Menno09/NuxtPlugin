(function(l,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(l=typeof globalThis<"u"?globalThis:l||self,e(l.MediaManager={},l.Vue))})(this,function(l,e){"use strict";const c={class:"bg-white-100 h-full rounded-xl border-none flex flex-col"},d=e.defineComponent({__name:"Base",props:{spacing:{type:Boolean}},setup(o){const s=o;return(t,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["bg-gray-300 h-screen w-full fixed z-30",{"p-24":s.spacing}])},[e.createElementVNode("div",c,[e.renderSlot(t.$slots,"default")])],2))}}),p={class:"flex justify-between py-3 px-8 shadow-lg"},m={class:"text-2xl"},f=e.defineComponent({__name:"Header",props:{title:null},emits:["close"],setup(o,{emit:s}){const t=o;return(r,n)=>(e.openBlock(),e.createElementBlock("div",p,[e.createElementVNode("h1",m,e.toDisplayString(t.title),1),e.createElementVNode("span",{class:"text-xl",onClick:n[0]||(n[0]=a=>s("close"))},"X")]))}}),b=["type","disabled"],y={key:0},i=e.defineComponent({__name:"Button",props:{title:null,type:null,square:{type:Boolean},loading:{type:Boolean},disabled:{type:Boolean},iconPosition:null,btnStyle:null,icon:null,to:null},emits:["click"],setup(o,{emit:s}){const t=o;return(r,n)=>(e.openBlock(),e.createElementBlock("button",{type:t.type,disabled:t.disabled,class:e.normalizeClass([{"text-white-100 bg-blue-100":t.btnStyle==="primary","text-blue-100 bg-white-100 border border-blue-100 rounded-2xl":t.btnStyle==="primary-outline","text-white-100 bg-status-success":t.btnStyle==="success","text-white-100 bg-status-error":t.btnStyle==="error","text-gray-500 bg-white-100 border border-white-500":t.btnStyle==="default","text-black-100 bg-white-500 hover:bg-blue-200 hover:text-white-100":t.btnStyle==="gray","text-white-100 bg-gray-100 hover:cursor-not-allowed":t.disabled,"h-10 w-10 rounded-lg":t.square,"w-full rounded-xl":!t.square},"flex items-center justify-center p-4 text-xs cursor-pointer"]),onClick:n[0]||(n[0]=a=>s("click"))},[t.loading===!1?(e.openBlock(),e.createElementBlock("span",y,e.toDisplayString(t.title),1)):e.createCommentVNode("",!0)],10,b))}}),g={class:"h-full flex flex-col px-6"},u=e.createElementVNode("div",{class:"grid grid-cols-2 gap-4 h-full"},[e.createElementVNode("div",null,"01"),e.createElementVNode("div",null,"09")],-1),_={class:"flex my-6"},x=e.defineComponent({__name:"MediaManager",props:{spacing:{type:Boolean}},emits:["close","selectImages"],setup(o,{emit:s}){const t=o;return(r,n)=>(e.openBlock(),e.createBlock(d,{spacing:t.spacing},{default:e.withCtx(()=>[e.createVNode(f,{title:"MediaManager",onClose:n[0]||(n[0]=a=>s("close"))}),e.createElementVNode("div",g,[u,e.createElementVNode("div",_,[e.createVNode(i,{title:"Save","btn-style":"primary"}),e.createVNode(i,{title:"Save","btn-style":"success",class:"self-end"})])])]),_:1},8,["spacing"]))}});l.MediaManager=x,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
