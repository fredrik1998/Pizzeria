import{d as S,r as o,U as b,e as I,c as v,j as e,F as k,a as i}from"./index-85b45f2a.js";import{s,G as L}from"./GlobalStyles-adf81bdd.js";import{H as j,C}from"./axios-596ea108.js";import{L as E}from"./Layout-1ce969cb.js";const _=s.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: 60vh;
  }
`,z=s.h1`
  font-size: 43px;
  color: #121212;
  margin-top: 40px;
  margin-bottom: 20px;
  text-transform: uppercase;
  align-self: flex-start;
`,U=s.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`,g=s.label`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
`,F=s.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`,P=s.button`
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
`,H=s(S)`
  text-decoration: none;
  font-size: 16px;
  color: #121212;
  font-weight: 700;
  margin-top: 40px;
`,l=s.p`
  display: flex;
  align-self: flex-end;
  margin-top: 10px;
  color: red;
  font-size: 16px;
`,N=()=>{const[d,h]=o.useState(""),{user:q,setUser:c}=o.useContext(b);I();const p=v(),[m,y]=o.useState({email:"",password:""}),[a,u]=o.useState({email:"",password:""}),w=async r=>{r.preventDefault();const n={};if(a.email||(n.email="Email is required"),a.email||(n.password="Password is required"),y(n),Object.keys(n).length===0)try{const t=await C.post("/api/login",{username:a.email,password:a.password});if(console.log("Server response:",t.data),t.data.access_token){localStorage.setItem("access_token",t.data.access_token),localStorage.setItem("username",t.data.username),localStorage.setItem("admin",t.data.is_superuser);const f=t.data.userId;localStorage.setItem("userId",t.data.userId),c({username:t.data.username,is_superuser:t.data.is_superuser,userId:f}),t.data.is_superuser?p("/admin"):p(`/userscreen/${f}`)}}catch{h("Login failed. Please check your email and password.")}};return o.useEffect(()=>{const r=localStorage.getItem("username");r&&c(r)},[]),e(k,{children:i(E,{children:[e(L,{}),e(j,{}),e(_,{children:i(U,{onSubmit:w,children:[d&&e(l,{children:d}),e(z,{children:"Sign in"}),e(g,{children:"Email or Username"}),e(x,{type:"text",value:a.email,onChange:r=>u({...a,email:r.target.value}),id:"email",placeholder:"eg. hello@gmail.com"}),e(l,{children:m.email}),e(g,{children:"Password"}),e(x,{type:"password",id:"password",value:a.password,onChange:r=>u({...a,password:r.target.value})}),e(l,{children:m.password}),i(F,{children:[e(H,{to:"/register",children:"Dont have an account? Click here"}),e(P,{type:"submit",children:"Login"})]})]})})]})})};export{N as default};
