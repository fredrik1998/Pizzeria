import{d as g,r as o,j as t,F as s,a as i,L as h}from"./index-9e0b8e9a.js";import{C as r,H as f}from"./axios-3f00b8b5.js";import{s as n,G as u}from"./GlobalStyles-781d1e48.js";import{L as y}from"./Layout-e01bd0aa.js";const w=n.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 80%;
  
  }
`,S=n.div`
   display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px;
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`,b=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 100%;
    margin: none;
  }
`,z=n.h1`
font-size: 32px;
margin-bottom: 24px;
`,c=n.p`
font-size: 18px;
margin-bottom: 24px;
`,L=n.em`
font-size: 24px;
margin-bottom: 24px;
font-weight: 700;
`,k=n.img`
width: 300px;
height: 300px;
margin-bottom: 24px;
`;n(g)`
font-size: 16px;
text-decoration: none;
border-radius: 18px;
width: 20%;
text-align: center;
max-width: 500px;
font-weight: 700;
letter-spacing: 0.1rem;
padding: 10px;
border: none;
color: #fafafa;
padding: 20px;
margin-top: 20px;
background-color: #c8102e;
cursor: pointer;
`;const v=()=>{const[d,l]=o.useState([]),[p,m]=o.useState(!0);return o.useEffect(()=>{const e=r.CancelToken.source();return r.get("/api/menu",{cancelToken:e.token}).then(a=>{const x=a.data.menu;l(x),m(!1)}).catch(a=>{r.isCancel(a)?console.log("Request cancelled"):console.log(a)}),()=>{e.cancel()}},[]),t(s,{children:i(y,{children:[t(u,{}),t(f,{}),p?t(h,{}):t(w,{children:t(S,{children:t(s,{children:d.map(e=>i(b,{children:[t(z,{children:e.name}),t(k,{loading:"lazy",src:e.image_path},e.image_path),t(c,{children:e.description}),i(c,{children:["Size: ",e.size]}),i(L,{children:["$",e.price]})]},e.id))})})})]})})};export{v as default};
