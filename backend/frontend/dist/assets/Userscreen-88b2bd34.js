import{d as x,r as s,c as w,e as S,j as e,a,L as T,F as p}from"./index-85b45f2a.js";import{s as d,G as k}from"./GlobalStyles-adf81bdd.js";import{m as f,C as i,H as C}from"./axios-596ea108.js";import{L}from"./Layout-1ce969cb.js";import{T as v,t as h,a as D,b as j,c as I,d as R}from"./TableRow-81e467d7.js";const $=d.main`
  height: 100%;
  width: 100%;
  font-family: "League Spartan", sans-serif;
  overflow-x: hidden;
`;d.button`
  display: block;
  width: 100%;
  padding: 10px 20px;
  color: #121212;
  background: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 50px;
  }
`;const z=d.h1`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
`,A=d(x)`
  text-decoration: none;
  font-size: 16px;
  color: #121212;
  font-weight: 700;
`,o=f(v)(({theme:n})=>({[`&.${h.head}`]:{backgroundColor:n.palette.common.black,color:n.palette.common.white,fontSize:16,fontFamily:"League Spartan"},[`&.${h.body}`]:{fontSize:16,fontFamily:"League Spartan"},[n.breakpoints.down("md")]:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",padding:"10px 6px",width:"100%","&:before":{position:"absolute",top:6,left:6,width:"45%",paddingRight:10,whiteSpace:"nowrap",content:"attr(data-label)",fontWeight:"bold"}}})),m=f(D)(({theme:n})=>({"&:nth-of-type(odd)":{backgroundColor:n.palette.action.hover},"&:last-child td, &:last-child th":{border:0},[n.breakpoints.down("md")]:{display:"block",marginBottom:"0.625em","&:last-child td":{borderBottom:"0"},"& td":{borderBottom:"1px solid #eee",display:"flex",justifyContent:"space-between",position:"relative"},"& td:before":{content:"attr(data-label)",fontWeight:"bold",left:0,position:"absolute",top:"-0.75em"}}})),q=()=>{const[n,u]=s.useState([]),g=w(),{userId:c}=S(),[b,y]=s.useState(!0);return console.log("User ID:",c),s.useEffect(()=>{const t=localStorage.getItem("access_token");t?i.defaults.headers.common.Authorization=`Bearer ${t}`:g("/login")},[]),s.useEffect(()=>{const t=i.CancelToken.source();return(async()=>{try{const l=await i.get(`/api/orders/user/${c}`,{cancelToken:t.token});u(l.data),y(!1),console.log(n)}catch(l){i.isCancel(l)?console.log("Request is cancelled"):console.log(l)}})(),()=>{t.cancel("Request cancelled")}},[c]),e($,{children:a(L,{children:[e(k,{}),e(C,{}),b?e(T,{}):a(p,{children:[e(z,{children:"Your Orders"}),a(j,{children:[e(I,{children:a(m,{children:[e(o,{children:"ID"}),e(o,{children:"Name"}),e(o,{children:"Email"}),e(o,{children:"Phone"}),e(o,{children:"Items"}),e(o,{children:"Total Price"}),e(o,{}),e(o,{}),e(o,{})]})}),e(R,{children:n.length===0?a(o,{colSpan:6,children:["You haven't placed any orders yet.",e(A,{to:"/order",children:"Order here!"})]}):e(p,{children:n.map(t=>a(m,{children:[e(o,{children:t.id}),e(o,{children:t.customer_name}),e(o,{children:t.customer_email}),e(o,{children:t.customer_phone}),Array.isArray(t.items)&&t.items.map(r=>e("div",{children:a(o,{children:[r.name," ",r.quantity,"x",r.selectedToppings&&Array.isArray(r.selectedToppings)&&r.selectedToppings.length>0?a("div",{children:["Toppings:"," ",r.selectedToppings.join(", ")]}):null]})},r.id)),a(o,{children:["$",t.total_price]}),e(o,{}),e(o,{}),e(o,{})]},t.id))})})]})]})]})})};export{q as default};
