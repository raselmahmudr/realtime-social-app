var h=Object.defineProperty,x=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var c=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,d=(s,e)=>{for(var t in e||(e={}))N.call(e,t)&&c(s,t,e[t]);if(o)for(var t of o(e))w.call(e,t)&&c(s,t,e[t]);return s},p=(s,e)=>x(s,f(e));import{R as b,j as a,c as r,L as g}from"./vendor.369462a2.js";import{a as v}from"./index.9c59e935.js";const C=s=>{const[e,t]=b.useState({firstName:"",lastName:"",email:"",password:"",confirmPassword:""});function l(n){t(p(d({},e),{[n.target.name]:n.target.value.trim()}))}function u(n){n.preventDefault();let i=!0;for(const m in e)e[m]||(i=!1);if(i){if(e.password!==e.confirmPassword){alert("password not matched");return}v.post("/api/users",{first_name:e.firstName,last_name:e.lastName,email:e.email,password:e.password}).then(m=>{console.log(m)})}}return a("div",{children:a("div",{className:"container",children:r("div",{className:"bg-white px-6 py-4 rounded-5 max-w-xl mx-auto",children:[a("h1",{className:"text-2xl font-400 text-primary text-center",children:"Create a new account."}),r("form",{onSubmit:u,className:"py-5",children:[r("div",{className:"flex mb-2 ",children:[a("label",{className:"font-medium min-w-100px block text-sm font-400 text-gray-dark-4",htmlFor:"",children:"First Name"}),a("input",{value:e.firstName,onChange:l,placeholder:"Enter Your First Name.",className:"input-item",type:"text",name:"firstName"})]}),r("div",{className:"flex mb-2 ",children:[a("label",{className:"font-medium min-w-100px block text-sm font-400 text-gray-dark-4",htmlFor:"",children:"Last Name"}),a("input",{value:e.lastName,onChange:l,placeholder:"Enter Your Last Name.",className:"input-item ",type:"text",name:"lastName"})]}),r("div",{className:"flex mb-2 ",children:[a("label",{className:"font-medium min-w-100px block text-sm font-400 text-gray-dark-4",htmlFor:"",children:"Email"}),a("input",{value:e.email,onChange:l,placeholder:"Enter Your Email.",className:"input-item ",type:"email",name:"email"})]}),r("div",{className:"flex mb-2 ",children:[a("label",{className:"font-medium min-w-100px block text-sm font-400 text-gray-dark-4 ",htmlFor:"",children:"Password"}),a("input",{value:e.password,onChange:l,placeholder:"Enter Your Password.",className:"input-item ",type:"text",name:"password"})]}),r("div",{className:"flex mb-2 ",children:[a("label",{className:"font-medium min-w-100px block text-sm font-400 text-gray-dark-4",htmlFor:"confirmPassword",children:"Confirm Password"}),a("input",{value:e.confirmPassword,onChange:l,placeholder:"Enter Your Password.",className:"input-item ",type:"text",name:"confirmPassword"})]}),a("div",{className:"mt-2 mb-3",children:r("h4",{className:"text-sm font-400",children:["Already have a account?",a("span",{className:"cursor-pointer text-blue-400 p-px ml-0.5 ",children:a(g,{to:"/auth/login",children:"Click"})}),"Login Page "]})}),a("div",{children:a("button",{className:"bg-primary px-4 py-1.5 rounded-2 text-sm text-white cursor-pointer",children:"Registration"})})]})]})})})};export{C as default};
