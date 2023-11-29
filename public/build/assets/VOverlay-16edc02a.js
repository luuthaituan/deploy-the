import{a6 as et,at as tt,p as _,m as fe,g as J,a as me,t as F,c as h,y as W,d as S,U as ae,x as G,X as se,au as Q,G as B,u as pe,B as nt,W as ye,Z as Rt,z as at,av as lt,aw as Nt,I as ne,s as Ve,am as ot,ag as Re,A as N,ax as Ht,ak as it,L as Pe,e as U,ac as jt,ah as K,N as rt,K as $t,ap as Wt,ar as ee,H as Ie,P as z,ay as Gt,M as ge,a8 as Ne,a7 as Be,az as st,O as He,al as qt,F as zt,V as ut,E as Kt,aA as Ut,T as Yt}from"./app-96326f91.js";import{t as Xt,o as Zt,R as Jt,q as Qt,i as en,B as Se,v as je,n as tn,u as nn,e as an,w as ln,s as on}from"./index-f020c943.js";import{m as le,q as ct,v as oe,h as he,s as Oe,M as dt,c as vt,w as ft,a as mt,b as Te,d as yt,g as gt,i as ht,x as St,u as rn,j as bt,k as Fe,l as wt,p as kt,r as sn,F as $e,V as We,y as Ct,H as Ge,I as be,J as we,K as qe,L as ze,G as un}from"./VCardText-607b6d49.js";const ue=new WeakMap;function cn(e,n){Object.keys(n).forEach(t=>{if(et(t)){const a=tt(t),o=ue.get(e);if(n[t]==null)o==null||o.forEach(l=>{const[i,r]=l;i===a&&(e.removeEventListener(a,r),o.delete(l))});else if(!o||![...o].some(l=>l[0]===a&&l[1]===n[t])){e.addEventListener(a,n[t]);const l=o||new Set;l.add([a,n[t]]),ue.has(e)||ue.set(e,l)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function dn(e,n){Object.keys(n).forEach(t=>{if(et(t)){const a=tt(t),o=ue.get(e);o==null||o.forEach(l=>{const[i,r]=l;i===a&&(e.removeEventListener(a,r),o.delete(l))})}else e.removeAttribute(t)})}function pt(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function vn(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?fn(e):Me(e))return e;e=e.parentElement}return document.scrollingElement}function de(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(Me(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function Me(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function fn(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function mn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const yn=_({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...le(),...fe()},"VDivider"),gn=J()({name:"VDivider",props:yn(),setup(e,n){let{attrs:t}=n;const{themeClasses:a}=me(e),{textColorClasses:o,textColorStyles:l}=ct(F(e,"color")),i=h(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=W(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=W(e.thickness)),r});return oe(()=>S("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,o.value,e.class],style:[i.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});const Ae=Symbol.for("vuetify:list");function Pt(){const e=ae(Ae,{hasPrepend:G(!1),updateHasPrepend:()=>null}),n={hasPrepend:G(!1),updateHasPrepend:t=>{t&&(n.hasPrepend.value=t)}};return se(Ae,n),e}function Ot(){return ae(Ae,null)}const hn={open:e=>{let{id:n,value:t,opened:a,parents:o}=e;if(t){const l=new Set;l.add(n);let i=o.get(n);for(;i!=null;)l.add(i),i=o.get(i);return l}else return a.delete(n),a},select:()=>null},At={open:e=>{let{id:n,value:t,opened:a,parents:o}=e;if(t){let l=o.get(n);for(a.add(n);l!=null&&l!==n;)a.add(l),l=o.get(l);return a}else a.delete(n);return a},select:()=>null},Sn={open:At.open,select:e=>{let{id:n,value:t,opened:a,parents:o}=e;if(!t)return a;const l=[];let i=o.get(n);for(;i!=null;)l.push(i),i=o.get(i);return new Set(l)}},_e=e=>{const n={select:t=>{let{id:a,value:o,selected:l}=t;if(a=Q(a),e&&!o){const i=Array.from(l.entries()).reduce((r,g)=>{let[f,y]=g;return y==="on"?[...r,f]:r},[]);if(i.length===1&&i[0]===a)return l}return l.set(a,o?"on":"off"),l},in:(t,a,o)=>{let l=new Map;for(const i of t||[])l=n.select({id:i,value:!0,selected:new Map(l),children:a,parents:o});return l},out:t=>{const a=[];for(const[o,l]of t.entries())l==="on"&&a.push(o);return a}};return n},xt=e=>{const n=_e(e);return{select:a=>{let{selected:o,id:l,...i}=a;l=Q(l);const r=o.has(l)?new Map([[l,o.get(l)]]):new Map;return n.select({...i,id:l,selected:r})},in:(a,o,l)=>{let i=new Map;return a!=null&&a.length&&(i=n.in(a.slice(0,1),o,l)),i},out:(a,o,l)=>n.out(a,o,l)}},bn=e=>{const n=_e(e);return{select:a=>{let{id:o,selected:l,children:i,...r}=a;return o=Q(o),i.has(o)?l:n.select({id:o,selected:l,children:i,...r})},in:n.in,out:n.out}},wn=e=>{const n=xt(e);return{select:a=>{let{id:o,selected:l,children:i,...r}=a;return o=Q(o),i.has(o)?l:n.select({id:o,selected:l,children:i,...r})},in:n.in,out:n.out}},kn=e=>{const n={select:t=>{let{id:a,value:o,selected:l,children:i,parents:r}=t;a=Q(a);const g=new Map(l),f=[a];for(;f.length;){const s=f.shift();l.set(s,o?"on":"off"),i.has(s)&&f.push(...i.get(s))}let y=r.get(a);for(;y;){const s=i.get(y),v=s.every(u=>l.get(u)==="on"),m=s.every(u=>!l.has(u)||l.get(u)==="off");l.set(y,v?"on":m?"off":"indeterminate"),y=r.get(y)}return e&&!o&&Array.from(l.entries()).reduce((v,m)=>{let[u,d]=m;return d==="on"?[...v,u]:v},[]).length===0?g:l},in:(t,a,o)=>{let l=new Map;for(const i of t||[])l=n.select({id:i,value:!0,selected:new Map(l),children:a,parents:o});return l},out:(t,a)=>{const o=[];for(const[l,i]of t.entries())i==="on"&&!a.has(l)&&o.push(l);return o}};return n},re=Symbol.for("vuetify:nested"),Et={id:G(),root:{register:()=>null,unregister:()=>null,parents:B(new Map),children:B(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:B(new Set),selected:B(new Map),selectedValues:B([])}},Cn=_({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),pn=e=>{let n=!1;const t=B(new Map),a=B(new Map),o=pe(e,"opened",e.opened,s=>new Set(s),s=>[...s.values()]),l=h(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return wn(e.mandatory);case"leaf":return bn(e.mandatory);case"independent":return _e(e.mandatory);case"single-independent":return xt(e.mandatory);case"classic":default:return kn(e.mandatory)}}),i=h(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Sn;case"single":return hn;case"multiple":default:return At}}),r=pe(e,"selected",e.selected,s=>l.value.in(s,t.value,a.value),s=>l.value.out(s,t.value,a.value));nt(()=>{n=!0});function g(s){const v=[];let m=s;for(;m!=null;)v.unshift(m),m=a.value.get(m);return v}const f=ye("nested"),y={id:G(),root:{opened:o,selected:r,selectedValues:h(()=>{const s=[];for(const[v,m]of r.value.entries())m==="on"&&s.push(v);return s}),register:(s,v,m)=>{v&&s!==v&&a.value.set(s,v),m&&t.value.set(s,[]),v!=null&&t.value.set(v,[...t.value.get(v)||[],s])},unregister:s=>{if(n)return;t.value.delete(s);const v=a.value.get(s);if(v){const m=t.value.get(v)??[];t.value.set(v,m.filter(u=>u!==s))}a.value.delete(s),o.value.delete(s)},open:(s,v,m)=>{f.emit("click:open",{id:s,value:v,path:g(s),event:m});const u=i.value.open({id:s,value:v,opened:new Set(o.value),children:t.value,parents:a.value,event:m});u&&(o.value=u)},openOnSelect:(s,v,m)=>{const u=i.value.select({id:s,value:v,selected:new Map(r.value),opened:new Set(o.value),children:t.value,parents:a.value,event:m});u&&(o.value=u)},select:(s,v,m)=>{f.emit("click:select",{id:s,value:v,path:g(s),event:m});const u=l.value.select({id:s,value:v,selected:new Map(r.value),children:t.value,parents:a.value,event:m});u&&(r.value=u),y.root.openOnSelect(s,v,m)},children:t,parents:a}};return se(re,y),y.root},Lt=(e,n)=>{const t=ae(re,Et),a=Symbol(Rt()),o=h(()=>e.value!==void 0?e.value:a),l={...t,id:o,open:(i,r)=>t.root.open(o.value,i,r),openOnSelect:(i,r)=>t.root.openOnSelect(o.value,i,r),isOpen:h(()=>t.root.opened.value.has(o.value)),parent:h(()=>t.root.parents.value.get(o.value)),select:(i,r)=>t.root.select(o.value,i,r),isSelected:h(()=>t.root.selected.value.get(Q(o.value))==="on"),isIndeterminate:h(()=>t.root.selected.value.get(o.value)==="indeterminate"),isLeaf:h(()=>!t.root.children.value.get(o.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(o.value,t.id.value,n),nt(()=>{!t.isGroupActivator&&t.root.unregister(o.value)}),n&&se(re,l),l},Pn=()=>{const e=ae(re,Et);se(re,{...e,isGroupActivator:!0})};function On(){const e=G(!1);return at(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:h(()=>e.value?void 0:{transition:"none !important"}),isBooted:lt(e)}}const An=Nt({name:"VListGroupActivator",setup(e,n){let{slots:t}=n;return Pn(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),xn=_({activeColor:String,baseColor:String,color:String,collapseIcon:{type:ne,default:"$collapse"},expandIcon:{type:ne,default:"$expand"},prependIcon:ne,appendIcon:ne,fluid:Boolean,subgroup:Boolean,title:String,value:null,...le(),...he()},"VListGroup"),Ke=J()({name:"VListGroup",props:xn(),setup(e,n){let{slots:t}=n;const{isOpen:a,open:o,id:l}=Lt(F(e,"value"),!0),i=h(()=>`v-list-group--id-${String(l.value)}`),r=Ot(),{isBooted:g}=On();function f(m){o(!a.value,m)}const y=h(()=>({onClick:f,class:"v-list-group__header",id:i.value})),s=h(()=>a.value?e.collapseIcon:e.expandIcon),v=h(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&s.value,appendIcon:e.appendIcon||!e.subgroup&&s.value,title:e.title,value:e.value}}));return oe(()=>S(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&S(Oe,{defaults:v.value},{default:()=>[S(An,null,{default:()=>[t.activator({props:y.value,isOpen:a.value})]})]}),S(dt,{transition:{component:Xt},disabled:!g.value},{default:()=>{var m;return[Ve(S("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(m=t.default)==null?void 0:m.call(t)]),[[ot,a.value]])]}})]})),{}}});const En=vt("v-list-item-subtitle"),Ln=vt("v-list-item-title"),Vn=_({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:ne,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:ne,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:Re(),onClickOnce:Re(),...ft(),...le(),...mt(),...Te(),...yt(),...gt(),...Zt(),...he(),...fe(),...ht({variant:"text"})},"VListItem"),Ue=J()({name:"VListItem",directives:{Ripple:Jt},props:Vn(),emits:{click:e=>!0},setup(e,n){let{attrs:t,slots:a,emit:o}=n;const l=Qt(e,t),i=h(()=>e.value===void 0?l.href.value:e.value),{select:r,isSelected:g,isIndeterminate:f,isGroupActivator:y,root:s,parent:v,openOnSelect:m}=Lt(i,!1),u=Ot(),d=h(()=>{var b;return e.active!==!1&&(e.active||((b=l.isActive)==null?void 0:b.value)||g.value)}),A=h(()=>e.link!==!1&&l.isLink.value),P=h(()=>!e.disabled&&e.link!==!1&&(e.link||l.isClickable.value||e.value!=null&&!!u)),C=h(()=>e.rounded||e.nav),k=h(()=>e.color??e.activeColor),H=h(()=>({color:d.value?k.value??e.baseColor:e.baseColor,variant:e.variant}));N(()=>{var b;return(b=l.isActive)==null?void 0:b.value},b=>{b&&v.value!=null&&s.open(v.value,!0),b&&m(b)},{immediate:!0});const{themeClasses:M}=me(e),{borderClasses:L}=St(e),{colorClasses:c,colorStyles:x,variantClasses:I}=rn(H),{densityClasses:Y}=bt(e),{dimensionStyles:V}=Fe(e),{elevationClasses:O}=wt(e),{roundedClasses:w}=kt(C),p=h(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),T=h(()=>({isActive:d.value,select:r,isSelected:g.value,isIndeterminate:f.value}));function D(b){var R;o("click",b),!(y||!P.value)&&((R=l.navigate)==null||R.call(l,b),e.value!=null&&r(!g.value,b))}function X(b){(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),D(b))}return oe(()=>{const b=A.value?"a":e.tag,R=a.title||e.title,Z=a.subtitle||e.subtitle,j=!!(e.appendAvatar||e.appendIcon),E=!!(j||a.append),$=!!(e.prependAvatar||e.prependIcon),te=!!($||a.prepend);return u==null||u.updateHasPrepend(te),e.activeColor&&Ht("active-color",["color","base-color"]),Ve(S(b,{class:["v-list-item",{"v-list-item--active":d.value,"v-list-item--disabled":e.disabled,"v-list-item--link":P.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!te&&(u==null?void 0:u.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&d.value},M.value,L.value,c.value,Y.value,O.value,p.value,w.value,I.value,e.class],style:[x.value,V.value,e.style],href:l.href.value,tabindex:P.value?u?-2:0:void 0,onClick:D,onKeydown:P.value&&!A.value&&X},{default:()=>{var De;return[sn(P.value||d.value,"v-list-item"),te&&S("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?S(Oe,{key:"prepend-defaults",disabled:!$,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var q;return[(q=a.prepend)==null?void 0:q.call(a,T.value)]}}):S(Pe,null,[e.prependAvatar&&S($e,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&S(We,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),S("div",{class:"v-list-item__spacer"},null)]),S("div",{class:"v-list-item__content","data-no-activator":""},[R&&S(Ln,{key:"title"},{default:()=>{var q;return[((q=a.title)==null?void 0:q.call(a,{title:e.title}))??e.title]}}),Z&&S(En,{key:"subtitle"},{default:()=>{var q;return[((q=a.subtitle)==null?void 0:q.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(De=a.default)==null?void 0:De.call(a,T.value)]),E&&S("div",{key:"append",class:"v-list-item__append"},[a.append?S(Oe,{key:"append-defaults",disabled:!j,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var q;return[(q=a.append)==null?void 0:q.call(a,T.value)]}}):S(Pe,null,[e.appendIcon&&S(We,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&S($e,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),S("div",{class:"v-list-item__spacer"},null)])]}}),[[it("ripple"),P.value&&e.ripple]])}),{}}}),In=_({color:String,inset:Boolean,sticky:Boolean,title:String,...le(),...he()},"VListSubheader"),Bn=J()({name:"VListSubheader",props:In(),setup(e,n){let{slots:t}=n;const{textColorClasses:a,textColorStyles:o}=ct(F(e,"color"));return oe(()=>{const l=!!(t.default||e.title);return S(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:o},e.style]},{default:()=>{var i;return[l&&S("div",{class:"v-list-subheader__text"},[((i=t.default)==null?void 0:i.call(t))??e.title])]}})}),{}}}),Tn=_({items:Array,returnObject:Boolean},"VListChildren"),Vt=J()({name:"VListChildren",props:Tn(),setup(e,n){let{slots:t}=n;return Pt(),()=>{var a,o;return((a=t.default)==null?void 0:a.call(t))??((o=e.items)==null?void 0:o.map(l=>{var v,m;let{children:i,props:r,type:g,raw:f}=l;if(g==="divider")return((v=t.divider)==null?void 0:v.call(t,{props:r}))??S(gn,r,null);if(g==="subheader")return((m=t.subheader)==null?void 0:m.call(t,{props:r}))??S(Bn,r,null);const y={subtitle:t.subtitle?u=>{var d;return(d=t.subtitle)==null?void 0:d.call(t,{...u,item:f})}:void 0,prepend:t.prepend?u=>{var d;return(d=t.prepend)==null?void 0:d.call(t,{...u,item:f})}:void 0,append:t.append?u=>{var d;return(d=t.append)==null?void 0:d.call(t,{...u,item:f})}:void 0,title:t.title?u=>{var d;return(d=t.title)==null?void 0:d.call(t,{...u,item:f})}:void 0},s=Ke.filterProps(r);return i?S(Ke,U({value:r==null?void 0:r.value},s),{activator:u=>{let{props:d}=u;const A={...r,...d,value:e.returnObject?f:r.value};return t.header?t.header({props:A}):S(Ue,A,y)},default:()=>S(Vt,{items:i},t)}):t.item?t.item({props:r}):S(Ue,U(r,{value:e.returnObject?f:r.value}),y)}))}}}),Fn=_({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:jt}},"list-items");function xe(e,n){const t=K(n,e.itemTitle,n),a=K(n,e.itemValue,t),o=K(n,e.itemChildren),l=e.itemProps===!0?typeof n=="object"&&n!=null&&!Array.isArray(n)?"children"in n?rt(n,["children"]):n:void 0:K(n,e.itemProps),i={title:t,value:a,...l};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(o)?It(e,o):void 0,raw:n}}function It(e,n){const t=[];for(const a of n)t.push(xe(e,a));return t}function ha(e){const n=h(()=>It(e,e.items)),t=h(()=>n.value.some(l=>l.value===null));function a(l){return t.value||(l=l.filter(i=>i!==null)),l.map(i=>e.returnObject&&typeof i=="string"?xe(e,i):n.value.find(r=>e.valueComparator(i,r.value))||xe(e,i))}function o(l){return e.returnObject?l.map(i=>{let{raw:r}=i;return r}):l.map(i=>{let{value:r}=i;return r})}return{items:n,transformIn:a,transformOut:o}}function Mn(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function _n(e,n){const t=K(n,e.itemType,"item"),a=Mn(n)?n:K(n,e.itemTitle),o=K(n,e.itemValue,void 0),l=K(n,e.itemChildren),i=e.itemProps===!0?rt(n,["children"]):K(n,e.itemProps),r={title:a,value:o,...i};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&l?Bt(e,l):void 0,raw:n}}function Bt(e,n){const t=[];for(const a of n)t.push(_n(e,a));return t}function Dn(e){return{items:h(()=>Bt(e,e.items))}}const Rn=_({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...Cn({selectStrategy:"single-leaf",openStrategy:"list"}),...ft(),...le(),...mt(),...Te(),...yt(),itemType:{type:String,default:"type"},...Fn(),...gt(),...he(),...fe(),...ht({variant:"text"})},"VList"),Sa=J()({name:"VList",props:Rn(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,n){let{slots:t}=n;const{items:a}=Dn(e),{themeClasses:o}=me(e),{backgroundColorClasses:l,backgroundColorStyles:i}=Ct(F(e,"bgColor")),{borderClasses:r}=St(e),{densityClasses:g}=bt(e),{dimensionStyles:f}=Fe(e),{elevationClasses:y}=wt(e),{roundedClasses:s}=kt(e),{open:v,select:m}=pn(e),u=h(()=>e.lines?`v-list--${e.lines}-line`:void 0),d=F(e,"activeColor"),A=F(e,"baseColor"),P=F(e,"color");Pt(),$t({VListGroup:{activeColor:d,baseColor:A,color:P},VListItem:{activeClass:F(e,"activeClass"),activeColor:d,baseColor:A,color:P,density:F(e,"density"),disabled:F(e,"disabled"),lines:F(e,"lines"),nav:F(e,"nav"),slim:F(e,"slim"),variant:F(e,"variant")}});const C=G(!1),k=B();function H(I){C.value=!0}function M(I){C.value=!1}function L(I){var Y;!C.value&&!(I.relatedTarget&&((Y=k.value)!=null&&Y.contains(I.relatedTarget)))&&x()}function c(I){if(k.value){if(I.key==="ArrowDown")x("next");else if(I.key==="ArrowUp")x("prev");else if(I.key==="Home")x("first");else if(I.key==="End")x("last");else return;I.preventDefault()}}function x(I){if(k.value)return Wt(k.value,I)}return oe(()=>S(e.tag,{ref:k,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},o.value,l.value,r.value,g.value,y.value,u.value,s.value,e.class],style:[i.value,f.value,e.style],tabindex:e.disabled||C.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:H,onFocusout:M,onFocus:L,onKeydown:c},{default:()=>[S(Vt,{items:a.value,returnObject:e.returnObject},t)]})),{open:v,select:m,focus:x}}});function Nn(){const n=ye("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}function ke(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Hn(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Ye(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,o=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,l=t==="top"?0:t==="bottom"?n.height:t;return ke({x:o,y:l},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,o=t==="left"?0:t==="right"?n.width:t,l=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return ke({x:o,y:l},n)}return ke({x:n.width/2,y:n.height/2},n)}const Tt={static:Wn,connected:qn},jn=_({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Tt},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function $n(e,n){const t=B({}),a=B();ee&&(Ie(()=>!!(n.isActive.value&&e.locationStrategy),l=>{var i,r;N(()=>e.locationStrategy,l),z(()=>{a.value=void 0}),typeof e.locationStrategy=="function"?a.value=(i=e.locationStrategy(n,e,t))==null?void 0:i.updateLocation:a.value=(r=Tt[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation}),window.addEventListener("resize",o,{passive:!0}),z(()=>{window.removeEventListener("resize",o),a.value=void 0}));function o(l){var i;(i=a.value)==null||i.call(a,l)}return{contentStyles:t,updateLocation:a}}function Wn(){}function Gn(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=tn(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function qn(e,n,t){(Array.isArray(e.target.value)||mn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:o,preferredOrigin:l}=Gt(()=>{const u=Ge(n.location,e.isRtl.value),d=n.origin==="overlap"?u:n.origin==="auto"?be(u):Ge(n.origin,e.isRtl.value);return u.side===d.side&&u.align===we(d).align?{preferredAnchor:qe(u),preferredOrigin:qe(d)}:{preferredAnchor:u,preferredOrigin:d}}),[i,r,g,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(u=>h(()=>{const d=parseFloat(n[u]);return isNaN(d)?1/0:d})),y=h(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const u=n.offset.split(" ").map(parseFloat);return u.length<2&&u.push(0),u}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let s=!1;const v=new ResizeObserver(()=>{s&&m()});N([e.target,e.contentEl],(u,d)=>{let[A,P]=u,[C,k]=d;C&&!Array.isArray(C)&&v.unobserve(C),A&&!Array.isArray(A)&&v.observe(A),k&&v.unobserve(k),P&&v.observe(P)},{immediate:!0}),z(()=>{v.disconnect()});function m(){if(s=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>s=!0)}),!e.target.value||!e.contentEl.value)return;const u=en(e.target.value),d=Gn(e.contentEl.value,e.isRtl.value),A=de(e.contentEl.value),P=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(d.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),d.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const C=A.reduce((V,O)=>{const w=O.getBoundingClientRect(),p=new Se({x:O===document.documentElement?0:w.x,y:O===document.documentElement?0:w.y,width:O.clientWidth,height:O.clientHeight});return V?new Se({x:Math.max(V.left,p.left),y:Math.max(V.top,p.top),width:Math.min(V.right,p.right)-Math.max(V.left,p.left),height:Math.min(V.bottom,p.bottom)-Math.max(V.top,p.top)}):p},void 0);C.x+=P,C.y+=P,C.width-=P*2,C.height-=P*2;let k={anchor:o.value,origin:l.value};function H(V){const O=new Se(d),w=Ye(V.anchor,u),p=Ye(V.origin,O);let{x:T,y:D}=Hn(w,p);switch(V.anchor.side){case"top":D-=y.value[0];break;case"bottom":D+=y.value[0];break;case"left":T-=y.value[0];break;case"right":T+=y.value[0];break}switch(V.anchor.align){case"top":D-=y.value[1];break;case"bottom":D+=y.value[1];break;case"left":T-=y.value[1];break;case"right":T+=y.value[1];break}return O.x+=T,O.y+=D,O.width=Math.min(O.width,g.value),O.height=Math.min(O.height,f.value),{overflows:je(O,C),x:T,y:D}}let M=0,L=0;const c={x:0,y:0},x={x:!1,y:!1};let I=-1;for(;!(I++>10);){const{x:V,y:O,overflows:w}=H(k);M+=V,L+=O,d.x+=V,d.y+=O;{const p=ze(k.anchor),T=w.x.before||w.x.after,D=w.y.before||w.y.after;let X=!1;if(["x","y"].forEach(b=>{if(b==="x"&&T&&!x.x||b==="y"&&D&&!x.y){const R={anchor:{...k.anchor},origin:{...k.origin}},Z=b==="x"?p==="y"?we:be:p==="y"?be:we;R.anchor=Z(R.anchor),R.origin=Z(R.origin);const{overflows:j}=H(R);(j[b].before<=w[b].before&&j[b].after<=w[b].after||j[b].before+j[b].after<(w[b].before+w[b].after)/2)&&(k=R,X=x[b]=!0)}}),X)continue}w.x.before&&(M+=w.x.before,d.x+=w.x.before),w.x.after&&(M-=w.x.after,d.x-=w.x.after),w.y.before&&(L+=w.y.before,d.y+=w.y.before),w.y.after&&(L-=w.y.after,d.y-=w.y.after);{const p=je(d,C);c.x=C.width-p.x.before-p.x.after,c.y=C.height-p.y.before-p.y.after,M+=p.x.before,d.x+=p.x.before,L+=p.y.before,d.y+=p.y.before}break}const Y=ze(k.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${k.anchor.side} ${k.anchor.align}`,transformOrigin:`${k.origin.side} ${k.origin.align}`,top:W(Ce(L)),left:e.isRtl.value?void 0:W(Ce(M)),right:e.isRtl.value?W(Ce(-M)):void 0,minWidth:W(Y==="y"?Math.min(i.value,u.width):i.value),maxWidth:W(Xe(Ne(c.x,i.value===1/0?0:i.value,g.value))),maxHeight:W(Xe(Ne(c.y,r.value===1/0?0:r.value,f.value)))}),{available:c,contentBox:d}}return N(()=>[o.value,l.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>m()),ge(()=>{const u=m();if(!u)return;const{available:d,contentBox:A}=u;A.height>d.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function Ce(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Xe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Ee=!0;const ve=[];function zn(e){!Ee||ve.length?(ve.push(e),Le()):(Ee=!1,e(),Le())}let Ze=-1;function Le(){cancelAnimationFrame(Ze),Ze=requestAnimationFrame(()=>{const e=ve.shift();e&&e(),ve.length?Le():Ee=!0})}const ce={none:null,close:Yn,block:Xn,reposition:Zn},Kn=_({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in ce}},"VOverlay-scroll-strategies");function Un(e,n){if(!ee)return;let t;Be(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=st(),await ge(),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=ce[e.scrollStrategy])==null||a.call(ce,n,e,t)}))}),z(()=>{t==null||t.stop()})}function Yn(e){function n(t){e.isActive.value=!1}Ft(e.targetEl.value??e.contentEl.value,n)}function Xn(e,n){var i;const t=(i=e.root.value)==null?void 0:i.offsetParent,a=[...new Set([...de(e.targetEl.value,n.contained?t:void 0),...de(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),o=window.innerWidth-document.documentElement.offsetWidth,l=(r=>Me(r)&&r)(t||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((r,g)=>{r.style.setProperty("--v-body-scroll-x",W(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",W(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",W(o)),r.classList.add("v-overlay-scroll-blocked")}),z(()=>{a.forEach((r,g)=>{const f=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),y=parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-f,r.scrollTop=-y}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Zn(e,n,t){let a=!1,o=-1,l=-1;function i(r){zn(()=>{var y,s;const g=performance.now();(s=(y=e.updateLocation).value)==null||s.call(y,r),a=(performance.now()-g)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{Ft(e.targetEl.value??e.contentEl.value,r=>{a?(cancelAnimationFrame(o),o=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{i(r)})})):i(r)})})}),z(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(o)})}function Ft(e,n){const t=[document,...de(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),z(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const Jn=Symbol.for("vuetify:v-menu"),Qn=_({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function ea(e,n){const t={},a=o=>()=>{if(!ee)return Promise.resolve(!0);const l=o==="openDelay";return t.closeDelay&&window.clearTimeout(t.closeDelay),delete t.closeDelay,t.openDelay&&window.clearTimeout(t.openDelay),delete t.openDelay,new Promise(i=>{const r=parseInt(e[o]??0,10);t[o]=window.setTimeout(()=>{n==null||n(l),i(l)},r)})};return{runCloseDelay:a("closeDelay"),runOpenDelay:a("openDelay")}}const ta=_({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...Qn()},"VOverlay-activator");function na(e,n){let{isActive:t,isTop:a}=n;const o=ye("useActivator"),l=B();let i=!1,r=!1,g=!0;const f=h(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),y=h(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!f.value),{runOpenDelay:s,runCloseDelay:v}=ea(e,c=>{c===(e.openOnHover&&i||f.value&&r)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==c&&(g=!0),t.value=c)}),m=B(),u={onClick:c=>{c.stopPropagation(),l.value=c.currentTarget||c.target,t.value||(m.value=[c.clientX,c.clientY]),t.value=!t.value},onMouseenter:c=>{var x;(x=c.sourceCapabilities)!=null&&x.firesTouchEvents||(i=!0,l.value=c.currentTarget||c.target,s())},onMouseleave:c=>{i=!1,v()},onFocus:c=>{qt(c.target,":focus-visible")!==!1&&(r=!0,c.stopPropagation(),l.value=c.currentTarget||c.target,s())},onBlur:c=>{r=!1,c.stopPropagation(),v()}},d=h(()=>{const c={};return y.value&&(c.onClick=u.onClick),e.openOnHover&&(c.onMouseenter=u.onMouseenter,c.onMouseleave=u.onMouseleave),f.value&&(c.onFocus=u.onFocus,c.onBlur=u.onBlur),c}),A=h(()=>{const c={};if(e.openOnHover&&(c.onMouseenter=()=>{i=!0,s()},c.onMouseleave=()=>{i=!1,v()}),f.value&&(c.onFocusin=()=>{r=!0,s()},c.onFocusout=()=>{r=!1,v()}),e.closeOnContentClick){const x=ae(Jn,null);c.onClick=()=>{t.value=!1,x==null||x.closeParents()}}return c}),P=h(()=>{const c={};return e.openOnHover&&(c.onMouseenter=()=>{g&&(i=!0,g=!1,s())},c.onMouseleave=()=>{i=!1,v()}),c});N(a,c=>{c&&(e.openOnHover&&!i&&(!f.value||!r)||f.value&&!r&&(!e.openOnHover||!i))&&(t.value=!1)}),N(t,c=>{c||setTimeout(()=>{m.value=void 0})},{flush:"post"});const C=B();Be(()=>{C.value&&ge(()=>{l.value=He(C.value)})});const k=B(),H=h(()=>e.target==="cursor"&&m.value?m.value:k.value?He(k.value):Mt(e.target,o)||l.value),M=h(()=>Array.isArray(H.value)?void 0:H.value);let L;return N(()=>!!e.activator,c=>{c&&ee?(L=st(),L.run(()=>{aa(e,o,{activatorEl:l,activatorEvents:d})})):L&&L.stop()},{flush:"post",immediate:!0}),z(()=>{L==null||L.stop()}),{activatorEl:l,activatorRef:C,target:H,targetEl:M,targetRef:k,activatorEvents:d,contentEvents:A,scrimEvents:P}}function aa(e,n,t){let{activatorEl:a,activatorEvents:o}=t;N(()=>e.activator,(g,f)=>{if(f&&g!==f){const y=r(f);y&&i(y)}g&&ge(()=>l())},{immediate:!0}),N(()=>e.activatorProps,()=>{l()}),z(()=>{i()});function l(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;g&&cn(g,U(o.value,f))}function i(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;g&&dn(g,U(o.value,f))}function r(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=Mt(g,n);return a.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,a.value}}function Mt(e,n){var a,o;if(!e)return;let t;if(e==="parent"){let l=(o=(a=n==null?void 0:n.proxy)==null?void 0:a.$el)==null?void 0:o.parentNode;for(;l!=null&&l.hasAttribute("data-no-activator");)l=l.parentNode;t=l}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function la(){if(!ee)return G(!1);const{ssr:e}=zt();if(e){const n=G(!1);return at(()=>{n.value=!0}),n}else return G(!0)}const oa=_({eager:Boolean},"lazy");function ia(e,n){const t=G(!1),a=h(()=>t.value||e.eager||n.value);N(n,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}const Je=Symbol.for("vuetify:stack"),ie=ut([]);function ra(e,n,t){const a=ye("useStack"),o=!t,l=ae(Je,void 0),i=ut({activeChildren:new Set});se(Je,i);const r=G(+n.value);Ie(e,()=>{var s;const y=(s=ie.at(-1))==null?void 0:s[1];r.value=y?y+10:+n.value,o&&ie.push([a.uid,r.value]),l==null||l.activeChildren.add(a.uid),z(()=>{if(o){const v=Q(ie).findIndex(m=>m[0]===a.uid);ie.splice(v,1)}l==null||l.activeChildren.delete(a.uid)})});const g=G(!0);o&&Be(()=>{var s;const y=((s=ie.at(-1))==null?void 0:s[0])===a.uid;setTimeout(()=>g.value=y)});const f=h(()=>!i.activeChildren.size);return{globalTop:lt(g),localTop:f,stackStyles:h(()=>({zIndex:r.value}))}}function sa(e){return{teleportTarget:h(()=>{const t=e.value;if(t===!0||!ee)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let o=a.querySelector(":scope > .v-overlay-container");return o||(o=document.createElement("div"),o.className="v-overlay-container",a.appendChild(o)),o})}}function ua(){return!0}function _t(e,n,t){if(!e||Dt(e,t)===!1)return!1;const a=pt(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const o=(typeof t.value=="object"&&t.value.include||(()=>[]))();return o.push(n),!o.some(l=>l==null?void 0:l.contains(e.target))}function Dt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||ua)(e)}function ca(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&_t(e,n,t)&&setTimeout(()=>{Dt(e,t)&&a&&a(e)},0)}function Qe(e,n){const t=pt(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const da={mounted(e,n){const t=o=>ca(o,e,n),a=o=>{e._clickOutside.lastMousedownWasOutside=_t(o,e,n)};Qe(e,o=>{o.addEventListener("click",t,!0),o.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&(Qe(e,t=>{var l;if(!t||!((l=e._clickOutside)!=null&&l[n.instance.$.uid]))return;const{onClick:a,onMousedown:o}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",o,!0)}),delete e._clickOutside[n.instance.$.uid])}};function va(e){const{modelValue:n,color:t,...a}=e;return S(Yt,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&S("div",U({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const fa=_({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...ta(),...le(),...Te(),...oa(),...jn(),...Kn(),...fe(),...un()},"VOverlay"),ba=J()({name:"VOverlay",directives:{ClickOutside:da},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...fa()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:o}=n;const l=pe(e,"modelValue"),i=h({get:()=>l.value,set:E=>{E&&e.disabled||(l.value=E)}}),{teleportTarget:r}=sa(h(()=>e.attach||e.contained)),{themeClasses:g}=me(e),{rtlClasses:f,isRtl:y}=Kt(),{hasContent:s,onAfterLeave:v}=ia(e,i),m=Ct(h(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:u,localTop:d,stackStyles:A}=ra(i,F(e,"zIndex"),e._disableGlobalStack),{activatorEl:P,activatorRef:C,target:k,targetEl:H,targetRef:M,activatorEvents:L,contentEvents:c,scrimEvents:x}=na(e,{isActive:i,isTop:d}),{dimensionStyles:I}=Fe(e),Y=la(),{scopeId:V}=Nn();N(()=>e.disabled,E=>{E&&(i.value=!1)});const O=B(),w=B(),{contentStyles:p,updateLocation:T}=$n(e,{isRtl:y,contentEl:w,target:k,isActive:i});Un(e,{root:O,contentEl:w,targetEl:H,isActive:i,updateLocation:T});function D(E){o("click:outside",E),e.persistent?j():i.value=!1}function X(){return i.value&&u.value}ee&&N(i,E=>{E?window.addEventListener("keydown",b):window.removeEventListener("keydown",b)},{immediate:!0});function b(E){var $,te;E.key==="Escape"&&u.value&&(e.persistent?j():(i.value=!1,($=w.value)!=null&&$.contains(document.activeElement)&&((te=P.value)==null||te.focus())))}const R=nn();Ie(()=>e.closeOnBack,()=>{ln(R,E=>{u.value&&i.value?(E(!1),e.persistent?j():i.value=!1):E()})});const Z=B();N(()=>i.value&&(e.absolute||e.contained)&&r.value==null,E=>{if(E){const $=vn(O.value);$&&$!==document.scrollingElement&&(Z.value=$.scrollTop)}});function j(){e.noClickAnimation||w.value&&an(w.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:on})}return oe(()=>{var E;return S(Pe,null,[(E=t.activator)==null?void 0:E.call(t,{isActive:i.value,props:U({ref:C,targetRef:M},L.value,e.activatorProps)}),Y.value&&s.value&&S(Ut,{disabled:!r.value,to:r.value},{default:()=>[S("div",U({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},g.value,f.value,e.class],style:[A.value,{top:W(Z.value)},e.style],ref:O},V,a),[S(va,U({color:m,modelValue:i.value&&!!e.scrim},x.value),null),S(dt,{appear:!0,persisted:!0,transition:e.transition,target:k.value,onAfterLeave:()=>{v(),o("afterLeave")}},{default:()=>{var $;return[Ve(S("div",U({ref:w,class:["v-overlay__content",e.contentClass],style:[I.value,p.value]},c.value,e.contentProps),[($=t.default)==null?void 0:$.call(t,{isActive:i})]),[[ot,i.value],[it("click-outside"),{handler:D,closeConditional:X,include:()=>[P.value]}]])]}})])]})])}),{activatorEl:P,target:k,animateClick:j,contentEl:w,globalTop:u,localTop:d,updateLocation:T}}});export{ba as V,Nn as a,Sa as b,Ue as c,gn as d,Jn as e,Fn as f,vn as g,ha as h,fa as m,On as u};