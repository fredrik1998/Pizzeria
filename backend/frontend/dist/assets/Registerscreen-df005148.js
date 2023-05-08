import{d as C,r as n,U as k,c as j,j as e,F as z,a as g}from"./index-9e0b8e9a.js";import{s,G as E}from"./GlobalStyles-781d1e48.js";import{H as L,C as U}from"./axios-3f00b8b5.js";import{L as R}from"./Layout-e01bd0aa.js";const q=s.main`
display: flex;
justify-content: center;
align-items: center;
height: 50vh;
flex-direction: column;
@media screen and (max-width: 767px){
height: 80vh;
}
`,F=s.h1`
font-size: 43px;
color: #121212;
margin-top: 40px;
margin-bottom: 20px;
text-transform: uppercase;
align-self: flex-start;
`,H=s.form`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 50%;
@media screen and (max-width: 767px){
    width: 80%;
}
`,c=s.label`
display: flex;
justify-content: flex-start;
align-items: flex-start;
font-size: 16px;
`,I=s.div`
display: flex;
gap: 30px;
justify-content: center;
align-items: center;
align-self: flex-end;
`,_=s.button`
font-size: 16px;
border-radius: 4px;
font-weight: 700;
letter-spacing: 0.1rem;
margin-top: 40px;
padding: 10px;
border: none;
color: #fafafa;
padding: 20px;
background-color: #c8102e;
cursor: pointer;
`,m=s.input`
font-size: 16px;
font-weight: 300;
border-radius: 10px;
padding: 15px;
width: 100%;
cursor: pointer;
font-weight: 700;
background-color: transparent;
border: 1px solid hsl(229, 24%, 87%);
`,A=s(C)`
text-decoration: none;
font-size: 16px;
color: #121212;
font-weight: 700;
margin-top: 40px;
`,o=s.p`
display: flex;
align-self: flex-end;
margin-top: 10px;
color: red;
font-size: 16px;`,O=()=>{const[p,x]=n.useState(""),[i,y]=n.useState(""),[l,w]=n.useState(""),[f,S]=n.useState(""),[h,u]=n.useState(""),{user:B,setUser:b}=n.useContext(k),v=j(),[d,P]=n.useState({username:"",email:"",password:"",confirmPassword:""});return e(z,{children:g(R,{children:[e(E,{}),e(L,{}),e(q,{children:g(H,{onSubmit:async t=>{t.preventDefault();const r={};if(p||(r.username="Username is required"),i?/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(i)||(r.email="Please enter a valid email address"):r.email="Email is required",l||(r.password="Password is required"),f||(r.confirmPassword="Password is required"),P(r),f!==l&&u("Password does not match"),Object.keys(r).length===0)try{const a=await U.post("/api/register",{username:p,email:i,password:l});a.data.access_token&&(localStorage.setItem("access_token",a.data.access_token),localStorage.setItem("username",a.data.username),b({username:a.data.username}),v("/"))}catch(a){a.response?u(`Register failed: ${a.response.data.message}`):u("Register failed. Please check your inputs and try again.")}},children:[h&&e(o,{children:h}),e(F,{children:"Register"}),e(c,{children:"Username"}),e(m,{type:"text",onChange:t=>x(t.target.value),value:p,id:"username",placeholder:"eg. yolo1998"}),e(o,{children:d.username}),e(c,{children:"Email"}),e(m,{type:"text",onChange:t=>y(t.target.value),value:i,id:"email",placeholder:"eg. yolo1998@gmail.com"}),e(o,{children:d.email}),e(c,{children:"Password"}),e(m,{type:"password",onChange:t=>w(t.target.value),value:l,id:"password"}),e(o,{children:d.password}),e(c,{children:"Confirm Password"}),e(m,{type:"password",onChange:t=>S(t.target.value),value:f,id:"confirmPassword"}),e(o,{children:d.confirmPassword}),g(I,{children:[e(A,{to:"/login",children:"Already have an account? Click here"}),e(_,{type:"submit",children:"Register"})]})]})})]})})};export{O as default};
