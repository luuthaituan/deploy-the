/* empty css              */import{m as v,h as S}from"./VCardText-607b6d49.js";import{p as V,g as k,c as w,aF as b,aE as E,aa as L}from"./app-96326f91.js";const o=["start","end","center"],g=["space-between","space-around","space-evenly"];function i(t,s){return E.reduce((e,a)=>{const n=t+L(a);return e[n]=s(),e},{})}const N=[...o,"baseline","stretch"],d=t=>N.includes(t),f=i("align",()=>({type:String,default:null,validator:d})),P=[...o,...g],y=t=>P.includes(t),m=i("justify",()=>({type:String,default:null,validator:y})),h=[...o,...g,"stretch"],C=t=>h.includes(t),j=i("alignContent",()=>({type:String,default:null,validator:C})),u={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(j)},A={align:"align",justify:"justify",alignContent:"align-content"};function G(t,s,e){let a=A[t];if(e!=null){if(s){const n=s.replace(t,"");a+=`-${n}`}return a+=`-${e}`,a.toLowerCase()}}const R=V({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:y},...m,alignContent:{type:String,default:null,validator:C},...j,...v(),...S()},"VRow"),O=k()({name:"VRow",props:R(),setup(t,s){let{slots:e}=s;const a=w(()=>{const n=[];let l;for(l in u)u[l].forEach(c=>{const p=t[c],r=G(l,c,p);r&&n.push(r)});return n.push({"v-row--no-gutters":t.noGutters,"v-row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),n});return()=>{var n;return b(t.tag,{class:["v-row",a.value,t.class],style:t.style},(n=e.default)==null?void 0:n.call(e))}}});export{O as V};
