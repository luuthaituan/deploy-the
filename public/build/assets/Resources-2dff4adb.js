import{_ as V,V as I,a as n}from"./VToolbar-0ee609f6.js";import{i as k,w as t,o as y,d as e,e as _,j as o,q as C}from"./app-96326f91.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{a as c,V as d,c as p}from"./index-f020c943.js";import{a as u,V as b}from"./VTextField-ca22b321.js";import{C as f,t as D,V as x,A}from"./VCardText-607b6d49.js";import{V as R}from"./VDataTable-4fd23285.js";import{V as g}from"./VDialog-8d2773cd.js";import{V as U}from"./VForm-b2efb5c1.js";import{V as h}from"./VRow-89f5b98f.js";/* empty css              *//* empty css            */import"./VTable-f2ec0a87.js";import"./VOverlay-16edc02a.js";const m="/api/resources",N={name:"resources",data(){return{newDialog:!1,deleteDialog:!1,valid:!1,loading:"cyan",editedIndex:-1,editedItem:{id:0,account:"",name:"",email:""},defaultItem:{id:0,account:"",name:"",email:""},search:"",headers:[{key:"account",title:"Account"},{key:"name",title:"Name",sortable:!1},{key:"email",title:"Email",sortable:!1},{key:"created_at",title:"Created At"},{key:"updated_at",title:"Updated At"},{key:"actions",title:"Actions",sortable:!1,align:"end"}],resources:[],accountRules:[l=>!!l||"Account is required"],nameRules:[l=>!!l||"Name is required"],emailRules:[l=>!!l||"E-mail is required",l=>/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(l)||"E-mail must be valid"]}},mounted(){this.fetch()},methods:{async fetch(){await axios.get("/sanctum/csrf-cookie"),await axios.get(m).then(({data:l})=>{this.loading=!1,this.resources=l}).catch(()=>{this.$emit("show-alert",{type:"error",text:"Have an error when try to get resources data."})})},editItem(l){this.editedIndex=V.findIndex(this.resources,l),this.editedItem=Object.assign({},l)},async deleteItem(){await axios.get("/sanctum/csrf-cookie"),await axios.delete(m+"/"+this.editedItem.id).then(({data:l})=>{l.success&&(this.$emit("show-alert",{type:"success",text:l.message}),V.remove(this.resources,s=>s.id===this.editedItem.id))}).catch(({response:l})=>{this.$emit("show-alert",{type:"error",text:l.data.message})}).finally(()=>{this.reset(),this.deleteDialog=!1})},async save(){this.$refs.form.validate(),this.valid&&(this.editedIndex>-1?await this.update():await this.add())},async add(){await axios.get("/sanctum/csrf-cookie"),await axios.post(m,this.editedItem).then(({data:l})=>{this.resources.push(l),this.newDialog=!1,this.reset()}).catch(({response:l})=>{this.$emit("show-alert",{type:"error",text:l.data.message})})},async update(){await axios.get("/sanctum/csrf-cookie"),await axios.put(m+"/"+this.editedItem.id,this.editedItem).then(({data:l})=>{Object.assign(this.resources[this.editedIndex],l),this.newDialog=!1,this.reset()}).catch(({response:l})=>{this.$emit("show-alert",{type:"error",text:l.data.message})})},reset(){this.editedItem=Object.assign({},this.defaultItem),this.editedIndex=-1}}},T=C("span",{class:"text-h5"},"Resource Information",-1);function j(l,s,q,B,a,r){return y(),k(c,null,{default:t(()=>[e(f,null,{default:t(()=>[e(u,{modelValue:a.search,"onUpdate:modelValue":s[0]||(s[0]=i=>a.search=i),label:"Search","single-line":"","hide-details":""},null,8,["modelValue"])]),_:1}),e(A,null,{default:t(()=>[e(R,{headers:a.headers,items:a.resources,search:a.search,loading:a.loading,sticky:""},{top:t(()=>[e(I,{flat:""},{default:t(()=>[e(n),e(g,{modelValue:a.newDialog,"onUpdate:modelValue":s[6]||(s[6]=i=>a.newDialog=i),"max-width":"500px"},{activator:t(({props:i})=>[e(d,_({color:"primary",dark:""},i),{default:t(()=>[o(" Add New ")]),_:2},1040)]),default:t(()=>[e(c,null,{default:t(()=>[e(f,null,{default:t(()=>[T]),_:1}),e(D,null,{default:t(()=>[e(U,{modelValue:a.valid,"onUpdate:modelValue":s[4]||(s[4]=i=>a.valid=i),ref:"form"},{default:t(()=>[e(b,null,{default:t(()=>[e(h,null,{default:t(()=>[e(u,{modelValue:a.editedItem.account,"onUpdate:modelValue":s[1]||(s[1]=i=>a.editedItem.account=i),rules:a.accountRules,label:"Account"},null,8,["modelValue","rules"])]),_:1}),e(h,null,{default:t(()=>[e(u,{modelValue:a.editedItem.name,"onUpdate:modelValue":s[2]||(s[2]=i=>a.editedItem.name=i),rules:a.nameRules,label:"Name"},null,8,["modelValue","rules"])]),_:1}),e(h,null,{default:t(()=>[e(u,{modelValue:a.editedItem.email,"onUpdate:modelValue":s[3]||(s[3]=i=>a.editedItem.email=i),rules:a.emailRules,label:"Email"},null,8,["modelValue","rules"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(p,null,{default:t(()=>[e(n),e(d,{color:"blue-darken-1",variant:"text",onClick:s[5]||(s[5]=i=>{r.reset(),a.newDialog=!1})},{default:t(()=>[o(" Cancel ")]),_:1}),e(d,{color:"blue-darken-1",variant:"text",onClick:r.save},{default:t(()=>[o(" Save ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(g,{modelValue:a.deleteDialog,"onUpdate:modelValue":s[8]||(s[8]=i=>a.deleteDialog=i),"max-width":"500px"},{default:t(()=>[e(c,null,{default:t(()=>[e(f,{class:"text-body-1"},{default:t(()=>[o("Are you sure you want to delete this item?")]),_:1}),e(p,null,{default:t(()=>[e(n),e(d,{color:"blue-darken-1",variant:"text",onClick:s[7]||(s[7]=i=>{r.reset(),a.deleteDialog=!1})},{default:t(()=>[o("Cancel")]),_:1}),e(d,{color:"blue-darken-1",variant:"text",onClick:r.deleteItem},{default:t(()=>[o("OK")]),_:1},8,["onClick"]),e(n)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),"item.actions":t(({item:i})=>[e(x,{size:"small",class:"me-2",onClick:w=>{r.editItem(i),a.newDialog=!0}},{default:t(()=>[o(" mdi-pencil ")]),_:2},1032,["onClick"]),e(x,{size:"small",onClick:w=>{r.editItem(i),a.deleteDialog=!0}},{default:t(()=>[o(" mdi-delete ")]),_:2},1032,["onClick"])]),_:1},8,["headers","items","search","loading"])]),_:1})]),_:1})}const X=v(N,[["render",j]]);export{X as default};
