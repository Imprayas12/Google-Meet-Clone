import{d as k,r as w,j as m,c as l,e,f as i,v as u,k as c,l as f,h as E,m as x,i as n}from"./index-PoXOhtVH.js";import{u as R}from"./user-BoQ7qSre.js";const V={key:0,class:"registration-form"},P=e("label",{for:"email"},"Email: ",-1),U={key:0,class:"error"},S=e("label",{for:"password"},"Password: ",-1),q={key:1,class:"error"},B=["disabled"],A={key:1,class:"registration-form"},C=e("label",{for:"email"},"Email: ",-1),I={key:0,class:"error"},M=e("label",{for:"password"},"Password: ",-1),N=["disabled"],D=k({__name:"Auth",setup($){const a=w(""),t=w(""),v=R(),_=E(),y=x(),b=m(()=>y.path!="/register"),r=m(()=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.value)),d=m(()=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(t.value)),g=async()=>{!r.value||!d.value||(await v.registerUser(a.value,t.value),_.push("/"))},h=async()=>{await v.signIn(a.value,t.value)&&_.push("/")};return(p,s)=>b.value?(n(),l("div",A,[e("form",{onSubmit:f(h,["prevent"])},[C,i(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>a.value=o),name:"email",placeholder:"Enter your email",type:"email",required:""},null,512),[[u,a.value]]),r.value?c("",!0):(n(),l("span",I,"Please enter a valid email address.")),M,i(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.value=o),name:"password",type:"password",placeholder:"Enter your password",required:""},null,512),[[u,t.value]]),e("button",{type:"submit",disabled:!r.value},"Login",8,N)],32)])):(n(),l("div",V,[e("form",{onSubmit:f(g,["prevent"])},[P,i(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>a.value=o),name:"email",placeholder:"Enter your email",type:"email",required:""},null,512),[[u,a.value]]),r.value?c("",!0):(n(),l("span",U,"Please enter a valid email address.")),S,i(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.value=o),name:"password",type:"password",placeholder:"Enter your password",required:""},null,512),[[u,t.value]]),d.value?c("",!0):(n(),l("span",q,"Password must be at least 8 characters long and contain at least one number, one uppercase letter, and one lowercase letter.")),e("button",{type:"submit",disabled:!r.value||!d.value},"Register",8,B)],32)]))}});export{D as default};
