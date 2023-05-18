import{d as w,r as d,U as y,c as P,j as e,F as b,a as f}from"./index-85b45f2a.js";import{s as a,G as v}from"./GlobalStyles-adf81bdd.js";import{H as S,C as k}from"./axios-596ea108.js";import{L as C}from"./Layout-1ce969cb.js";const j=a.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: 80vh;
  }
`,z=a.h1`
  font-size: 43px;
  color: #121212;
  margin-top: 40px;
  margin-bottom: 20px;
  text-transform: uppercase;
  align-self: flex-start;
`,E=a.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`,c=a.label`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 16px;
`,F=a.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`,L=a.button`
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
`,m=a.input`
  font-size: 16px;
  font-weight: 300;
  border-radius: 10px;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  font-weight: 700;
  background-color: transparent;
  border: 1px solid hsl(229, 24%, 87%);
`,R=a(w)`
  text-decoration: none;
  font-size: 16px;
  color: #121212;
  font-weight: 700;
  margin-top: 40px;
`,o=a.p`
  display: flex;
  align-self: flex-end;
  margin-top: 10px;
  color: red;
  font-size: 16px;
`,B=()=>{const[s,i]=d.useState({username:"",email:"",password:"",confirmPassword:""}),[l,g]=d.useState({username:"",email:"",password:"",confirmPassword:""}),[u,p]=d.useState(""),{user:U,setUser:h}=d.useContext(y),x=P();return e(b,{children:f(C,{children:[e(v,{}),e(S,{}),e(j,{children:f(E,{onSubmit:async r=>{r.preventDefault();const n={};if(s.username||(n.username="Username is required"),s.email?/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(s.email)||(n.email="Please enter a valid email address"):n.email="Email is required",s.password||(n.password="Password is required"),s.confirmPassword||(n.confirmPassword="Password is required"),g(n),s.confirmPassword!==s.password&&p("Password does not match"),Object.keys(n).length===0)try{const t=await k.post("/api/register",{username:s.username,email:s.email,password:s.password});t.data.access_token&&(localStorage.setItem("access_token",t.data.access_token),localStorage.setItem("username",t.data.username),h({username:t.data.username}),x("/"))}catch(t){t.response?p(`Register failed: ${t.response.data.message}`):p("Register failed. Please check your inputs and try again.")}},children:[u&&e(o,{children:u}),e(z,{children:"Register"}),e(c,{children:"Username"}),e(m,{type:"text",onChange:r=>i({...s,username:r.target.value}),value:s.username,id:"username",placeholder:"eg. yolo1998"}),e(o,{children:l.username}),e(c,{children:"Email"}),e(m,{type:"text",onChange:r=>i({...s,email:r.target.value}),value:s.email,id:"email",placeholder:"eg. yolo1998@gmail.com"}),e(o,{children:l.email}),e(c,{children:"Password"}),e(m,{type:"password",onChange:r=>i({...s,password:r.target.value}),value:s.password,id:"password"}),e(o,{children:l.password}),e(c,{children:"Confirm Password"}),e(m,{type:"password",onChange:r=>i({...s,confirmPassword:r.target.value}),value:s.confirmPassword,id:"confirmPassword"}),e(o,{children:l.confirmPassword}),f(F,{children:[e(R,{to:"/login",children:"Already have an account? Click here"}),e(L,{type:"submit",children:"Register"})]})]})})]})})};export{B as default};
