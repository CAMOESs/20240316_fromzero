import{E as h,r as d,c as B,p as C,B as N,b as s,d as u,h as a,m,f as r,w as l,g as T,T as F,z as D,j as v,i as E,o as i,F as L,k as M,l as P,t as j,e as z,G as A}from"./entry.febd1464.js";const G=z("span",{style:{color:"white"},class:"d-none d-xs-none d-sm-block btn-block"},"  ",-1),$={__name:"tableau-de-bord",async setup(R){let o,c,{name:f}=h(),e=d(!0),p=d([]);const k=B(()=>f.value!=="xs");({data:p}=([o,c]=C(()=>E("/api/my-menu","$5sTT2mdPi9")),o=await o,c(),o));const _=d(!1);return N(()=>{_.value=!0}),(S,n)=>{const b=s("v-btn"),w=s("v-list-item"),x=s("v-list"),y=s("v-navigation-drawer"),g=A;return i(),u("div",null,[a(_)?(i(),m(F,{key:0,to:"#teleport-target"},[r(b,{class:"btn_drawer_styleus","prepend-icon":"mdi-menu",depressed:"",text:"",variant:"plain",onClick:n[0]||(n[0]=T(t=>v(e)?e.value=!a(e):e=!a(e),["stop"]))},{default:l(()=>[G]),_:1})])):D("",!0),r(y,{modelValue:a(e),"onUpdate:modelValue":n[1]||(n[1]=t=>v(e)?e.value=t:e=t),style:{"background-color":"white","margin-top":"60px",color:"black"},permanent:a(k),location:"left",theme:"dark",elevation:"2"},{default:l(()=>[r(x,{nav:""},{default:l(()=>[(i(!0),u(L,null,M(a(p),(t,V)=>(i(),m(w,{key:V,"prepend-icon":t.icon,to:t.to},{default:l(()=>[P(j(t.title),1)]),_:2},1032,["prepend-icon","to"]))),128))]),_:1})]),_:1},8,["modelValue","permanent"]),r(g)])}}};export{$ as default};