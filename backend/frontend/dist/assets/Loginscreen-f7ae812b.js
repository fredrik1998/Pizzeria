import{d as I,r,U as k,e as v,c as L,j as e,F as j,a as n}from"./index-9e0b8e9a.js";import{s,G as E}from"./GlobalStyles-781d1e48.js";import{H as C,C as _}from"./axios-3f00b8b5.js";import{L as z}from"./Layout-e01bd0aa.js";const P=s.main`
display: flex;
justify-content: center;
align-items: center;
height: 40vh;
flex-direction: column;
@media screen and (max-width: 767px){
height: 60vh
}
`,U=s.h1`
font-size: 43px;
color: #121212;
margin-top: 40px;
margin-bottom: 20px;
text-transform: uppercase;
align-self: flex-start;
`,F=s.form`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 50%;
@media screen and (max-width: 767px){
    width: 80%;
}
`,g=s.label`
display: flex;
justify-content: flex-start;
align-items: flex-start;
font-size: 16px;
`,H=s.div`
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
align-self: flex-end;
`,q=s.button`
font-size: 16px;
border-radius: 3px;
width: 100%;
max-width: 100px;
font-weight: 700;
margin-top: 40px;
padding: 15px;
border: 2px solid #c8102e;
color: #fafafa;
background-color: #c8102e;
cursor: pointer;
`,x=s.input`
font-size: 16px;
font-weight: 300;
border-radius: 10px;
padding: 15px;
width: 100%;
cursor: pointer;
font-weight: 700;
background-color: transparent;
border: 1px solid hsl(229, 24%, 87%);
`,B=s(I)`
text-decoration: none;
font-size: 16px;
color: #121212;
font-weight: 700;
margin-top: 40px;
`,i=s.p`
display: flex;
align-self: flex-end;
margin-top: 10px;
color: red;
font-size: 16px;`,T=()=>{const[l,h]=r.useState(""),[d,y]=r.useState(""),[c,w]=r.useState(""),{user:D,setUser:p}=r.useContext(k);v();const m=L(),[u,S]=r.useState({email:"",password:""}),b=async a=>{a.preventDefault();const o={};if(l||(o.email="Email is required"),d||(o.password="Password is required"),S(o),Object.keys(o).length===0)try{const t=await _.post("/api/login",{username:l,password:d});if(console.log("Server response:",t.data),t.data.access_token){localStorage.setItem("access_token",t.data.access_token),localStorage.setItem("username",t.data.username),localStorage.setItem("admin",t.data.is_superuser);const f=t.data.userId;localStorage.setItem("userId",t.data.userId),p({username:t.data.username,is_superuser:t.data.is_superuser,userId:f}),t.data.is_superuser?m("/admin"):m(`/userscreen/${f}`)}}catch{w("Login failed. Please check your email and password.")}};return r.useEffect(()=>{const a=localStorage.getItem("username");a&&p(a)},[]),e(j,{children:n(z,{children:[e(E,{}),e(C,{}),e(P,{children:n(F,{onSubmit:b,children:[c&&e(i,{children:c}),e(U,{children:"Sign in"}),e(g,{children:"Email or Username"}),e(x,{type:"text",onChange:a=>h(a.target.value),id:"email",placeholder:"eg. hello@gmail.com"}),e(i,{children:u.email}),e(g,{children:"Password"}),e(x,{type:"password",id:"password",onChange:a=>y(a.target.value)}),e(i,{children:u.password}),n(H,{children:[e(B,{to:"/register",children:"Dont have an account? Click here"}),e(q,{type:"submit",children:"Login"})]})]})})]})})};export{T as default};
