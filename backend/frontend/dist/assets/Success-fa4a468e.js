import{e as x,r as c,a as n,F as m,j as i,L as h}from"./index-9e0b8e9a.js";import{C as r,H as f}from"./axios-3f00b8b5.js";import{s as e,G as g}from"./GlobalStyles-781d1e48.js";const y=e.main`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
height: 100svh;
gap: 20px;
`,u=e.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column`,S=e.h2`
font-size: 28px;
margin-top: 20px;

text-decoration: underline;
`,s=e.p`
font-size: 20px;
margin-top: 20px;
`,T=e.li`
display: flex;
flex-direction: column;
align-items: flex-start;
text-decoration: none;
list-style-type: none;
margin-bottom: 40px;
margin-left: -40px;
font-size: 20px;
`,z=e.ul`
text-decoration: none;
margin-top: 20px;
`,C=e.h3`
display: flex;
align-self: flex-start;

margin-top: 20px;
font-size: 24px;
`,v=e.h1`
font-size: 32px;
margin-top: 40px;
`,H=e.em`
font-size: 24px;
text-decoration: underline;
`,j=e.img`
width: 50px;
height: 50px;
border-radius: 4px;
`,k=e.h4`
font-size: 20px;
margin-top: 20px;
`,D=e.div`
margin-top: 20px;
`,I=e.div`
display: flex;
flex-direction: column;
margin-top: 10px;
`,$=e.div`
display: flex;
align-items: center;
font-weight: 500;
gap: 10px;
`,q=()=>{const{orderId:a}=x(),[o,d]=c.useState({items:[]});return c.useEffect(()=>{const t=r.CancelToken.source();return r.get(`/api/order/${a}`,{cancelToken:t.token}).then(l=>{console.log("Response:",l),d(l.data)}).catch(l=>{r.isCancel(l)&&console.log("Request Cancelled")}),()=>{t.cancel()}},[a]),n(m,{children:[i(g,{}),i(f,{}),n(y,{children:[i(v,{children:"Thank you for your order!"}),i(s,{children:"Your pizzas will be with you shortly!"}),i(S,{children:"Order Details"}),o.id?n(u,{children:[n(s,{children:["Order ID: ",o.id]}),n(s,{children:["Name: ",o.customer_name]}),n(s,{children:["Email: ",o.customer_email]}),n(s,{children:["Phone: ",o.customer_phone]}),i(C,{children:"Items:"}),i(z,{children:Array.isArray(o.items)&&o.items.map(t=>n(T,{children:[n($,{children:[i(j,{src:t.image}),t.name," ",t.quantity," X $",t.price," = $",t.price*t.quantity]}),t.selectedToppings&&t.selectedToppings.length>0&&n(I,{children:[i(k,{children:"Toppings:"}),t.selectedToppings.map((l,p)=>n(D,{children:[l,"  $2"]},p))]})]},t.id))}),n(H,{children:["Total: $",o.total_price]})]}):i(h,{})]})]})};export{q as default};
