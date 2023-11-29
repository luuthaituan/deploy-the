import{p as A,U as B,c as i,G as ee,V as $,y as R,W as j,x as K,z as te,X,Y as oe,Z as ne,_ as ae,$ as se,B as ue,g as le,d as ie}from"./app-96326f91.js";import{B as re,m as ce,v as ve}from"./VCardText-607b6d49.js";const V=Symbol.for("vuetify:layout"),D=Symbol.for("vuetify:layout-item"),Z=1e3,ye=A({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ie=A({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function xe(){const o=B(V);if(!o)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:o.getLayoutItem,mainRect:o.mainRect,mainStyles:o.mainStyles}}function be(o){const s=B(V);if(!s)throw new Error("[Vuetify] Could not find injected layout");const u=o.id??`layout-item-${ne()}`,r=j("useLayoutItem");X(D,{id:u});const n=K(!1);ae(()=>n.value=!0),se(()=>n.value=!1);const{layoutItemStyles:c,layoutItemScrimStyles:v}=s.register(r,{...o,active:i(()=>n.value?!1:o.active.value),id:u});return ue(()=>s.unregister(u)),{layoutItemStyles:c,layoutRect:s.layoutRect,layoutItemScrimStyles:v}}const de=(o,s,u,r)=>{let n={top:0,left:0,right:0,bottom:0};const c=[{id:"",layer:{...n}}];for(const v of o){const f=s.get(v),p=u.get(v),z=r.get(v);if(!f||!p||!z)continue;const h={...n,[f.value]:parseInt(n[f.value],10)+(z.value?parseInt(p.value,10):0)};c.push({id:v,layer:h}),n=h}return c};function fe(o){const s=B(V,null),u=i(()=>s?s.rootZIndex.value-100:Z),r=ee([]),n=$(new Map),c=$(new Map),v=$(new Map),f=$(new Map),p=$(new Map),{resizeRef:z,contentRect:h}=re(),W=i(()=>{const t=new Map,y=o.overlaps??[];for(const e of y.filter(l=>l.includes(":"))){const[l,a]=e.split(":");if(!r.value.includes(l)||!r.value.includes(a))continue;const m=n.get(l),g=n.get(a),L=c.get(l),S=c.get(a);!m||!g||!L||!S||(t.set(a,{position:m.value,amount:parseInt(L.value,10)}),t.set(l,{position:g.value,amount:-parseInt(S.value,10)}))}return t}),I=i(()=>{const t=[...new Set([...v.values()].map(e=>e.value))].sort((e,l)=>e-l),y=[];for(const e of t){const l=r.value.filter(a=>{var m;return((m=v.get(a))==null?void 0:m.value)===e});y.push(...l)}return de(y,n,c,f)}),E=i(()=>!Array.from(p.values()).some(t=>t.value)),x=i(()=>I.value[I.value.length-1].layer),Y=i(()=>({"--v-layout-left":R(x.value.left),"--v-layout-right":R(x.value.right),"--v-layout-top":R(x.value.top),"--v-layout-bottom":R(x.value.bottom),...E.value?void 0:{transition:"none"}})),b=i(()=>I.value.slice(1).map((t,y)=>{let{id:e}=t;const{layer:l}=I.value[y],a=c.get(e),m=n.get(e);return{id:e,...l,size:Number(a.value),position:m.value}})),k=t=>b.value.find(y=>y.id===t),C=j("createLayout"),H=K(!1);te(()=>{H.value=!0}),X(V,{register:(t,y)=>{let{id:e,order:l,position:a,layoutSize:m,elementSize:g,active:L,disableTransitions:S,absolute:F}=y;v.set(e,l),n.set(e,a),c.set(e,m),f.set(e,L),S&&p.set(e,S);const N=oe(D,C==null?void 0:C.vnode).indexOf(t);N>-1?r.value.splice(N,0,e):r.value.push(e);const T=i(()=>b.value.findIndex(w=>w.id===e)),M=i(()=>u.value+I.value.length*2-T.value*2),G=i(()=>{const w=a.value==="left"||a.value==="right",P=a.value==="right",Q=a.value==="bottom",U={[a.value]:0,zIndex:M.value,transform:`translate${w?"X":"Y"}(${(L.value?0:-110)*(P||Q?-1:1)}%)`,position:F.value||u.value!==Z?"absolute":"fixed",...E.value?void 0:{transition:"none"}};if(!H.value)return U;const d=b.value[T.value];if(!d)throw new Error(`[Vuetify] Could not find layout item "${e}"`);const O=W.value.get(e);return O&&(d[O.position]+=O.amount),{...U,height:w?`calc(100% - ${d.top}px - ${d.bottom}px)`:g.value?`${g.value}px`:void 0,left:P?void 0:`${d.left}px`,right:P?`${d.right}px`:void 0,top:a.value!=="bottom"?`${d.top}px`:void 0,bottom:a.value!=="top"?`${d.bottom}px`:void 0,width:w?g.value?`${g.value}px`:void 0:`calc(100% - ${d.left}px - ${d.right}px)`}}),J=i(()=>({zIndex:M.value-1}));return{layoutItemStyles:G,layoutItemScrimStyles:J,zIndex:M}},unregister:t=>{v.delete(t),n.delete(t),c.delete(t),f.delete(t),p.delete(t),r.value=r.value.filter(y=>y!==t)},mainRect:x,mainStyles:Y,getLayoutItem:k,items:b,layoutRect:h,rootZIndex:u});const _=i(()=>["v-layout",{"v-layout--full-height":o.fullHeight}]),q=i(()=>({zIndex:s?u.value:void 0,position:s?"relative":void 0,overflow:s?"hidden":void 0}));return{layoutClasses:_,layoutStyles:q,getLayoutItem:k,items:b,layoutRect:h,layoutRef:z}}const pe=A({...ce(),...ye()},"VLayout"),Le=le()({name:"VLayout",props:pe(),setup(o,s){let{slots:u}=s;const{layoutClasses:r,layoutStyles:n,getLayoutItem:c,items:v,layoutRef:f}=fe(o);return ve(()=>{var p;return ie("div",{ref:f,class:[r.value,o.class],style:[n.value,o.style]},[(p=u.default)==null?void 0:p.call(u)])}),{getLayoutItem:c,items:v}}});export{Le as V,xe as a,Ie as m,be as u};
