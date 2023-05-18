import{r as S,j as s,R as g,c as Ue,a as j,d as De,U as Ve,C as Ke,F as pe,L as He}from"./index-85b45f2a.js";import{s as d,G as Ye}from"./GlobalStyles-adf81bdd.js";import{g as Ze,e as Je,m as Qe,_ as ee,n as Xe,r as et,I as tt,a as nt,c as rt,J as se,K as xe,i as ot,C as Q,H as it,L as at,M as st,N as ct,O as lt,Q as ut}from"./axios-596ea108.js";import{L as de}from"./Layout-1ce969cb.js";var w={},pt={get exports(){return w},set exports(t){w=t}},dt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ft=dt,mt=ft;function _e(){}function We(){}We.resetWarningCache=_e;var ht=function(){function t(r,o,i,l,f,c){if(c!==mt){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:We,resetWarningCache:_e};return n.PropTypes=n,n};pt.exports=ht();const gt=S.createContext(),Ce=gt;function yt(t){return Ze("MuiGrid",t)}const xt=[0,1,2,3,4,5,6,7,8,9,10],vt=["column-reverse","column","row-reverse","row"],St=["nowrap","wrap-reverse","wrap"],X=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],te=Je("MuiGrid",["root","container","item","zeroMinWidth",...xt.map(t=>`spacing-xs-${t}`),...vt.map(t=>`direction-xs-${t}`),...St.map(t=>`wrap-xs-${t}`),...X.map(t=>`grid-xs-${t}`),...X.map(t=>`grid-sm-${t}`),...X.map(t=>`grid-md-${t}`),...X.map(t=>`grid-lg-${t}`),...X.map(t=>`grid-xl-${t}`)]),bt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function D(t){const e=parseFloat(t);return`${e}${String(t).replace(String(e),"")||"px"}`}function Ct({theme:t,ownerState:e}){let n;return t.breakpoints.keys.reduce((r,o)=>{let i={};if(e[o]&&(n=e[o]),!n)return r;if(n===!0)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const l=se({values:e.columns,breakpoints:t.breakpoints.values}),f=typeof l=="object"?l[o]:l;if(f==null)return r;const c=`${Math.round(n/f*1e8)/1e6}%`;let m={};if(e.container&&e.item&&e.columnSpacing!==0){const p=t.spacing(e.columnSpacing);if(p!=="0px"){const y=`calc(${c} + ${D(p)})`;m={flexBasis:y,maxWidth:y}}}i=ee({flexBasis:c,flexGrow:0,maxWidth:c},m)}return t.breakpoints.values[o]===0?Object.assign(r,i):r[t.breakpoints.up(o)]=i,r},{})}function wt({theme:t,ownerState:e}){const n=se({values:e.direction,breakpoints:t.breakpoints.values});return xe({theme:t},n,r=>{const o={flexDirection:r};return r.indexOf("column")===0&&(o[`& > .${te.item}`]={maxWidth:"none"}),o})}function ze({breakpoints:t,values:e}){let n="";Object.keys(e).forEach(o=>{n===""&&e[o]!==0&&(n=o)});const r=Object.keys(t).sort((o,i)=>t[o]-t[i]);return r.slice(0,r.indexOf(n))}function Et({theme:t,ownerState:e}){const{container:n,rowSpacing:r}=e;let o={};if(n&&r!==0){const i=se({values:r,breakpoints:t.breakpoints.values});let l;typeof i=="object"&&(l=ze({breakpoints:t.breakpoints.values,values:i})),o=xe({theme:t},i,(f,c)=>{var m;const p=t.spacing(f);return p!=="0px"?{marginTop:`-${D(p)}`,[`& > .${te.item}`]:{paddingTop:D(p)}}:(m=l)!=null&&m.includes(c)?{}:{marginTop:0,[`& > .${te.item}`]:{paddingTop:0}}})}return o}function kt({theme:t,ownerState:e}){const{container:n,columnSpacing:r}=e;let o={};if(n&&r!==0){const i=se({values:r,breakpoints:t.breakpoints.values});let l;typeof i=="object"&&(l=ze({breakpoints:t.breakpoints.values,values:i})),o=xe({theme:t},i,(f,c)=>{var m;const p=t.spacing(f);return p!=="0px"?{width:`calc(100% + ${D(p)})`,marginLeft:`-${D(p)}`,[`& > .${te.item}`]:{paddingLeft:D(p)}}:(m=l)!=null&&m.includes(c)?{}:{width:"100%",marginLeft:0,[`& > .${te.item}`]:{paddingLeft:0}}})}return o}function Pt(t,e,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const r=[];return e.forEach(o=>{const i=t[o];Number(i)>0&&r.push(n[`spacing-${o}-${String(i)}`])}),r}const Tt=Qe("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t,{container:r,direction:o,item:i,spacing:l,wrap:f,zeroMinWidth:c,breakpoints:m}=n;let p=[];r&&(p=Pt(l,m,e));const y=[];return m.forEach(C=>{const R=n[C];R&&y.push(e[`grid-${C}-${String(R)}`])}),[e.root,r&&e.container,i&&e.item,c&&e.zeroMinWidth,...p,o!=="row"&&e[`direction-xs-${String(o)}`],f!=="wrap"&&e[`wrap-xs-${String(f)}`],...y]}})(({ownerState:t})=>ee({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),wt,Et,kt,Ct);function Ot(t,e){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return e.forEach(r=>{const o=t[r];if(Number(o)>0){const i=`spacing-${r}-${String(o)}`;n.push(i)}}),n}const It=t=>{const{classes:e,container:n,direction:r,item:o,spacing:i,wrap:l,zeroMinWidth:f,breakpoints:c}=t;let m=[];n&&(m=Ot(i,c));const p=[];c.forEach(C=>{const R=t[C];R&&p.push(`grid-${C}-${String(R)}`)});const y={root:["root",n&&"container",o&&"item",f&&"zeroMinWidth",...m,r!=="row"&&`direction-xs-${String(r)}`,l!=="wrap"&&`wrap-xs-${String(l)}`,...p]};return ot(y,yt,e)},$t=S.forwardRef(function(e,n){const r=Xe({props:e,name:"MuiGrid"}),{breakpoints:o}=et(),i=tt(r),{className:l,columns:f,columnSpacing:c,component:m="div",container:p=!1,direction:y="row",item:C=!1,rowSpacing:R,spacing:$=0,wrap:k="wrap",zeroMinWidth:E=!1}=i,B=nt(i,bt),W=R||$,q=c||$,A=S.useContext(Ce),F=p?f||12:A,v={},z=ee({},B);o.keys.forEach(G=>{B[G]!=null&&(v[G]=B[G],delete z[G])});const _=ee({},i,{columns:F,container:p,direction:y,item:C,rowSpacing:W,columnSpacing:q,wrap:k,zeroMinWidth:E,spacing:$},v,{breakpoints:o.keys}),K=It(_);return s(Ce.Provider,{value:F,children:s(Tt,ee({ownerState:_,className:rt(K.root,l),as:m,ref:n},z))})}),fe=$t;var Be="https://js.stripe.com/v3",jt=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,we="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Rt=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Be,'"]')),n=0;n<e.length;n++){var r=e[n];if(jt.test(r.src))return r}return null},At=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(Be).concat(n);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(r),r},Nt=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.52.0",startTime:n})},re=null,_t=function(e){return re!==null||(re=new Promise(function(n,r){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&e&&console.warn(we),window.Stripe){n(window.Stripe);return}try{var o=Rt();o&&e?console.warn(we):o||(o=At(e)),o.addEventListener("load",function(){window.Stripe?n(window.Stripe):r(new Error("Stripe.js not available"))}),o.addEventListener("error",function(){r(new Error("Failed to load Stripe.js"))})}catch(i){r(i);return}})),re},Wt=function(e,n,r){if(e===null)return null;var o=e.apply(void 0,n);return Nt(o,r),o},Le=Promise.resolve().then(function(){return _t(null)}),qe=!1;Le.catch(function(t){qe||console.warn(t)});var zt=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];qe=!0;var o=Date.now();return Le.then(function(i){return Wt(i,n,o)})};function Ee(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function ke(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ee(Object(n),!0).forEach(function(r){Fe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function oe(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?oe=function(e){return typeof e}:oe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(t)}function Fe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ie(t,e){return Bt(t)||Lt(t,e)||qt(t,e)||Ft()}function Bt(t){if(Array.isArray(t))return t}function Lt(t,e){var n=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(n!=null){var r=[],o=!0,i=!1,l,f;try{for(n=n.call(t);!(o=(l=n.next()).done)&&(r.push(l.value),!(e&&r.length===e));o=!0);}catch(c){i=!0,f=c}finally{try{!o&&n.return!=null&&n.return()}finally{if(i)throw f}}return r}}function qt(t,e){if(t){if(typeof t=="string")return Pe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pe(t,e)}}function Pe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ye=function(e){var n=g.useRef(e);return g.useEffect(function(){n.current=e},[e]),n.current},V=function(e){return e!==null&&oe(e)==="object"},Gt=function(e){return V(e)&&typeof e.then=="function"},Mt=function(e){return V(e)&&typeof e.elements=="function"&&typeof e.createToken=="function"&&typeof e.createPaymentMethod=="function"&&typeof e.confirmCardPayment=="function"},Te="[object Object]",Ut=function t(e,n){if(!V(e)||!V(n))return e===n;var r=Array.isArray(e),o=Array.isArray(n);if(r!==o)return!1;var i=Object.prototype.toString.call(e)===Te,l=Object.prototype.toString.call(n)===Te;if(i!==l)return!1;if(!i&&!r)return e===n;var f=Object.keys(e),c=Object.keys(n);if(f.length!==c.length)return!1;for(var m={},p=0;p<f.length;p+=1)m[f[p]]=!0;for(var y=0;y<c.length;y+=1)m[c[y]]=!0;var C=Object.keys(m);if(C.length!==f.length)return!1;var R=e,$=n,k=function(B){return t(R[B],$[B])};return C.every(k)},Ge=function(e,n,r){return V(e)?Object.keys(e).reduce(function(o,i){var l=!V(n)||!Ut(e[i],n[i]);return r.includes(i)?(l&&console.warn("Unsupported prop change: options.".concat(i," is not a mutable property.")),o):l?ke(ke({},o||{}),{},Fe({},i,e[i])):o},null):null},Dt="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",Oe=function(e){if(e===null||Mt(e))return e;throw new Error(Dt)},Vt=function(e){if(Gt(e))return{tag:"async",stripePromise:Promise.resolve(e).then(Oe)};var n=Oe(e);return n===null?{tag:"empty"}:{tag:"sync",stripe:n}},ve=g.createContext(null);ve.displayName="ElementsContext";var Kt=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},Se=g.createContext(null);Se.displayName="CartElementContext";var Ht=function(e,n){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n," in an <Elements> provider."));return e},Me=function(e){var n=e.stripe,r=e.options,o=e.children,i=g.useMemo(function(){return Vt(n)},[n]),l=g.useState(null),f=ie(l,2),c=f[0],m=f[1],p=g.useState(null),y=ie(p,2),C=y[0],R=y[1],$=g.useState(function(){return{stripe:i.tag==="sync"?i.stripe:null,elements:i.tag==="sync"?i.stripe.elements(r):null}}),k=ie($,2),E=k[0],B=k[1];g.useEffect(function(){var A=!0,F=function(z){B(function(_){return _.stripe?_:{stripe:z,elements:z.elements(r)}})};return i.tag==="async"&&!E.stripe?i.stripePromise.then(function(v){v&&A&&F(v)}):i.tag==="sync"&&!E.stripe&&F(i.stripe),function(){A=!1}},[i,E,r]);var W=ye(n);g.useEffect(function(){W!==null&&W!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[W,n]);var q=ye(r);return g.useEffect(function(){if(E.elements){var A=Ge(r,q,["clientSecret","fonts"]);A&&E.elements.update(A)}},[r,q,E.elements]),g.useEffect(function(){var A=E.stripe;!A||!A._registerWrapper||!A.registerAppInfo||(A._registerWrapper({name:"react-stripe-js",version:"2.1.0"}),A.registerAppInfo({name:"react-stripe-js",version:"2.1.0",url:"https://stripe.com/docs/stripe-js/react"}))},[E.stripe]),g.createElement(ve.Provider,{value:E},g.createElement(Se.Provider,{value:{cart:c,setCart:m,cartState:C,setCartState:R}},o))};Me.propTypes={stripe:w.any,options:w.object};var ae=function(e){var n=g.useContext(ve);return Kt(n,e)},Ie=function(e){var n=g.useContext(Se);return Ht(n,e)},Yt=function(){var e=ae("calls useElements()"),n=e.elements;return n},Zt=function(){var e=ae("calls useStripe()"),n=e.stripe;return n};w.func.isRequired;var N=function(e,n,r){var o=!!r,i=g.useRef(r);g.useEffect(function(){i.current=r},[r]),g.useEffect(function(){if(!o||!e)return function(){};var l=function(){i.current&&i.current.apply(i,arguments)};return e.on(n,l),function(){e.off(n,l)}},[o,n,e,i])},Jt=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},O=function(e,n){var r="".concat(Jt(e),"Element"),o=function(c){var m=c.id,p=c.className,y=c.options,C=y===void 0?{}:y,R=c.onBlur,$=c.onFocus,k=c.onReady,E=c.onChange,B=c.onEscape,W=c.onClick,q=c.onLoadError,A=c.onLoaderStart,F=c.onNetworksChange,v=c.onCheckout,z=c.onLineItemClick,_=c.onConfirm,K=c.onCancel,G=c.onShippingAddressChange,ce=c.onShippingRateChange,M=ae("mounts <".concat(r,">")),U=M.elements,le=g.useState(null),ne=ie(le,2),P=ne[0],ue=ne[1],L=g.useRef(null),H=g.useRef(null),Y=Ie("mounts <".concat(r,">")),Z=Y.setCart,J=Y.setCartState;N(P,"blur",R),N(P,"focus",$),N(P,"escape",B),N(P,"click",W),N(P,"loaderror",q),N(P,"loaderstart",A),N(P,"networkschange",F),N(P,"lineitemclick",z),N(P,"confirm",_),N(P,"cancel",K),N(P,"shippingaddresschange",G),N(P,"shippingratechange",ce);var a;e==="cart"?a=function(T){J(T),k&&k(T)}:k&&(e==="expressCheckout"?a=k:a=function(){k(P)}),N(P,"ready",a);var h=e==="cart"?function(u){J(u),E&&E(u)}:E;N(P,"change",h);var b=e==="cart"?function(u){J(u),v&&v(u)}:v;N(P,"checkout",b),g.useLayoutEffect(function(){if(L.current===null&&U&&H.current!==null){var u=U.create(e,C);e==="cart"&&Z&&Z(u),L.current=u,ue(u),u.mount(H.current)}},[U,C,Z]);var x=ye(C);return g.useEffect(function(){if(L.current){var u=Ge(C,x,["paymentRequest"]);u&&L.current.update(u)}},[C,x]),g.useLayoutEffect(function(){return function(){L.current&&(L.current.destroy(),L.current=null)}},[]),g.createElement("div",{id:m,className:p,ref:H})},i=function(c){ae("mounts <".concat(r,">")),Ie("mounts <".concat(r,">"));var m=c.id,p=c.className;return g.createElement("div",{id:m,className:p})},l=n?i:o;return l.propTypes={id:w.string,className:w.string,onChange:w.func,onBlur:w.func,onFocus:w.func,onReady:w.func,onEscape:w.func,onClick:w.func,onLoadError:w.func,onLoaderStart:w.func,onNetworksChange:w.func,onCheckout:w.func,onLineItemClick:w.func,onConfirm:w.func,onCancel:w.func,onShippingAddressChange:w.func,onShippingRateChange:w.func,options:w.object},l.displayName=r,l.__elementType=e,l},I=typeof window>"u";O("auBankAccount",I);O("card",I);O("cardNumber",I);O("cardExpiry",I);O("cardCvc",I);O("fpxBank",I);O("iban",I);O("idealBank",I);O("p24Bank",I);O("epsBank",I);var Qt=O("payment",I);O("expressCheckout",I);O("paymentRequestButton",I);O("linkAuthentication",I);O("address",I);O("shippingAddress",I);O("cart",I);O("paymentMethodMessaging",I);O("affirmMessage",I);O("afterpayClearpayMessage",I);const Xt=d.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`,en=d.label`
  font-size: 16px;
  margin-bottom: 10px;
`,tn=d.button`
  font-size: 16px;
  border-radius: 4px;
  width: 100%;
  margin: 0 auto;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 10px;
  border: none;
  color: #fafafa;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #c8102e;
  border: 2px solid #c8102e;
  cursor: pointer;
`,nn=({orderId:t})=>{const[e,n]=S.useState(null),[r,o]=S.useState(!1),[i,l]=S.useState(!1),[f,c]=S.useState(!0),m=Ue(),p=Zt(),y=Yt();return j(Xt,{onSubmit:async $=>{if($.preventDefault(),!p||!y)return;l(!0);const{error:k,paymentIntent:E}=await p.confirmPayment({elements:y,confirmParams:{return_url:`${window.location.origin}/success/${t}`}});k?(n(k.message),l(!1)):E.status==="succeeded"&&(o(!0),l(!1),m("/success"))},children:[s("h3",{children:"Payment"}),s(en,{children:"Card Details"}),s(Qt,{onChange:$=>{c($.empty),n($.error?$.error.message:null)}}),e&&s("p",{children:e}),s(tn,{type:"submit",disabled:i||f||r,children:i?"Processing...":"Pay Now"}),r&&s("p",{children:"Payment succeeded!"})]})},rn=d.main`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    margin-left: 20px;
  }
`,on=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  width: 50%;
`,an=d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }
`,sn=d.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -40px;
  gap: 40px;
  width: 100%;
  @media screen and (max-width: 767px) {
    margin-top: -10px;
  }
`,$e=d.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,je=d.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`,Re=d.h2`
  font-size: 32px;
  font-weight: 700;
`,cn=d.h5`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 20px;
`,ln=d.p`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 18px;
  margin-bottom: 8px;
`,un=d.em`
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 700;
`,pn=d.img`
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
  border-radius: 10px;
`;d(De)`
  font-size: 18px;
  text-decoration: none;
  margin-top: 8px;
  color: #000;
`;const dn=d.button`
  font-size: 16px;
  width: 100%;
  max-width: 200px;
  font-weight: 700;
  border: 2px solid #c8102e;
  border-radius: 4px;
  color: #fafafa;
  margin-bottom: 10px;
  padding: 16px;
  background-color: #c8102e;
  cursor: pointer;
  :disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,fn=d.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`,mn=d.div`
  display: flex;
  flex-direction: column;
`,hn=d.p`
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 700;
`,gn=d.button`
  font-size: 16px;
  width: 100%;
  max-width: 250px;
  font-weight: 700;
  border: 2px solid #c8102e;
  margin-top: 20px;
  border-radius: 4px;
  color: #fafafa;
  padding: 16px;
  background-color: #c8102e;
  margin-bottom: 20px;
  cursor: pointer;
`,yn=d.div`
  display: flex;
  flex-direction: row;
`,Ae=d.button`
  border-radius: 10px;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background: none;
  color: #000;
  font-weight: 700;
  &.disabled {
    color: rgba(255, 255, 255, 0.5);
    pointer-events: none;
    background: transparent;
  }
`,xn=d.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`,me=d.label`
  color: #000;
  font-weight: 700;
  margin-top: 30px;
`,he=d.input`
  font-size: 16px;
  font-weight: 300;
  border-radius: 10px;
  width: 100%;
  max-width: 500px;
  cursor: pointer;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
  background-color: #fff;
  border: 1px solid hsl(229, 24%, 87%);
  padding: 15px;
  ::placeholder {
    color: hsl(229, 24%, 87%);
  }
  :hover {
    border: 1px solid hsl(243, 100%, 62%);
  }
`,vn=d.button`
  font-size: 16px;
  width: 100%;
  max-width: 500px;
  font-weight: 700;
  border: 2px solid #c8102e;
  color: #fafafa;
  padding: 16px;
  border-radius: 4px;
  margin-top: 20px;
  background-color: #c8102e;
  cursor: pointer;
  margin-bottom: 20px;
`,ge=d.p`
  color: red;
  margin-top: 5px;
`;d.div`
  display: grid;
  grid-template-columns: auto 300px;
  grid-gap: 20px;
`;d.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;const Sn=d.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 14px;
  margin-right: 2em;
  cursor: pointer;
`,bn=d.button`
  display: none;
  background-color: none;
  display: flex;
  align-items: center;
  background: transparent;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 5px;
`,Cn=d.img`
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -8px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  border-radius: 5px;
`;d.p`
  font-size: 16px;
  gap: 20px;
`;d.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;const wn=d.div``,En="/assets/icon-checkmark-20a2d5c8.svg",kn={theme:"flat"},Ne=zt("pk_test_51MbkNeGJ8v9b2yrMsOEfEwwuEkzRpZOrJ2A5Wkdti8WqCdwI7b0BXIFGAwX888Qpd6K8fZG07igiitpOGOEE52Ns00Aj9fGYtL"),$n=()=>{S.useContext(Ve);const[t,e]=S.useState([]),{cartItems:n,setCartItems:r}=S.useContext(Ke),[o,i]=S.useState(!0),[l,f]=S.useState(!0),[c,m]=S.useState(null),[p,y]=S.useState(!1),[C,R]=S.useState(!1),[$,k]=S.useState(null),[E,B]=S.useState(""),[W,q]=S.useState({}),[A,F]=S.useState(""),[v,z]=S.useState({name:"",email:"",phone:""}),[_,K]=S.useState({name:"",email:"",phone:""});let G=0;const ce=()=>(G+=1,`item-${G}`),M=a=>JSON.stringify(a.slice().sort()),U=a=>{if(n.filter(x=>x.id===a.id&&M(x.toppings)===M(a.toppings)).reduce((x,u)=>x+u.quantity,0)<a.countInStock){const x=n.findIndex(u=>u.id===a.id&&M(u.toppings)===M(a.toppings));if(x!==-1){const u=[...n];u[x]={...u[x],quantity:u[x].quantity+1},r(u),k(null)}else r([...n,{...a,uniqueId:ce(),quantity:1}]),k(null)}else F("You have reached the maximum available stock for this pizza.")},le=a=>{const h=n.findIndex(b=>b.id===a.id&&M(b.toppings)===M(a.toppings));if(h!==-1){const b=[...n];n[h].quantity>1?b[h]={...b[h],quantity:b[h].quantity-1}:b.splice(h,1),r(b)}},ne=()=>{y(!0)},P={Mozarella:{price:2},Breasola:{price:2},Burrata:{price:2},Mussels:{price:2},Artichokes:{price:2},Salami:{price:2}},ue=(a,h,b)=>{const x=W[b]||[],u=x.includes(a)?x.filter(T=>T!==a):[...x,a];q({...W,[b]:u})},L=()=>n.reduce((a,h)=>{const b=parseFloat(h.price)*h.quantity,x=h.toppings.reduce((u,T)=>u+P[T].price,0)*h.quantity;return a+b+x},0),H=a=>{a.preventDefault();const h=localStorage.getItem("userId"),b=localStorage.getItem("guestId"),x={customer_name:v.name,customer_email:v.email,customer_phone:v.phone,items:n.map(T=>({id:T.id,name:T.name,quantity:T.quantity,price:T.price,selectedToppings:T.toppings,image:T.image_path})),total_price:L(),userId:h||"",guestId:b||""},u={};v.name||(u.name="Name is required"),v.email?/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v.email)||(u.email="Please enter a valid email address"):u.email="Email is required",v.phone?/^\d+$/.test(v.phone)||(u.phone="Please only enter digits"):u.phone="Phone is required",K(u),Object.keys(u).length===0&&(Q.post("/api/order/add",x,{headers:{"Content-Type":"application/json"}}).then(T=>{console.log("Full Response:",T);const{orderId:be}=T.data;m(be),console.log("OrderId:",be)}).catch(T=>{console.error(T)}),J(),r([]),y(!1),z({name:"",email:"",phone:""}),R(!0))};S.useEffect(()=>{const a=Q.CancelToken.source();return Q.get("api/menu",{cancelToken:a.token}).then(h=>{e(h.data.menu),i(!1)}).catch(h=>{Q.isCancel(h)&&console.log("Request cancelled")}),()=>{a.cancel()}},[]);const[Y,Z]=S.useState(null),J=async()=>{try{const{data:a}=await Q.post("/api/create_payment",{total_price:L()},{headers:{"Content-Type":"application/json"}}),{client_secret:h}=a;console.log(h),Z(h)}catch(a){console.error(a)}};return S.useEffect(()=>{f(Object.keys(_).length>0),n.length===0&&y(!1),C&&k(!1),$||q({})},[_,n,$]),S.useEffect(()=>{n.length>0&&window.innerWidth<=898&&window.scrollTo({top:document.querySelector("#cart-checkout").offsetTop,behavior:"smooth"})},[n]),s(pe,{children:j(de,{children:[s(Ye,{}),s(it,{}),o?s(He,{}):j(rn,{children:[s(je,{children:"Our Pizzas"}),j(fe,{container:!0,spacing:2,children:[s(fe,{item:!0,xs:12,md:8,children:s(on,{children:t.map(a=>j(an,{children:[s(pn,{loading:"lazy",src:a.image_path}),j($e,{children:[s(je,{children:a.name}),j(un,{children:["$",a.price]}),a.countInStock<=0&&s("p",{children:"Out of Stock"}),j(at,{style:{background:"none",boxShadow:"none"},expanded:$===a.id,onChange:(h,b)=>k(b?a.id:null),disabled:a.countInStock===0,children:[s(st,{style:{marginTop:"-50px"},expandIcon:s(ct,{}),"aria-controls":"panel1a-content",id:"panel1a-header"}),j(wn,{children:[s("h4",{children:"Extra Toppings"}),Object.keys(P).map((h,b)=>{const x=(W[E]||[]).includes(h);return j(Sn,{onClick:()=>ue(h,a.id,E),children:[s(bn,{type:"button",children:x?s(Cn,{src:En,alt:"checked"}):null}),s("p",{children:h}),j("p",{children:["$",P[h].price]})]},b)})]}),s(fn,{style:{marginTop:"16px"},children:s(dn,{disabled:a.countInStock<=0||C,onClick:()=>U({...a,toppings:W[E]||[]}),children:"Add to cart"})})]})]})]},a.id))})}),s(fe,{item:!0,xs:12,md:4,children:j(sn,{children:[n&&n.length>0&&s(Re,{children:"Cart Checkout"}),n.map((a,h)=>{const b=t.find(x=>x.id===a.id);return j(mn,{id:"cart-checkout",children:[j(yn,{children:[j(Re,{children:[a.quantity,"x ",a.name," ",Array.isArray(a.selectedToppings)&&a.selectedToppings.length>0?a.selectedToppings.join(", "):null]}),s(Ae,{onClick:()=>le(a),disabled:a.quantity<=0,children:s(lt,{})}),s(Ae,{onClick:()=>U(a),disabled:a.quantity>=b.countInStock,children:s(ut,{})})]}),a.toppings&&a.toppings.length>0&&s(cn,{children:"Additional Toppings"}),s($e,{children:a.toppings.map((x,u)=>s("div",{className:"column",children:s(ln,{children:x})},u))})]},a.id)}),n&&n.length>0&&s(pe,{children:j(de,{children:[j(hn,{children:["Total: $",L().toFixed(2)]}),!p&&s(gn,{onClick:ne,children:"Checkout"})]})}),p&&s(pe,{children:s(de,{children:j(xn,{noValidate:!0,onSubmit:H,children:[s("h2",{children:"Enter your information"}),s(me,{children:"Name"}),s(he,{type:"text",value:v.name,onChange:a=>z({...v,name:a.target.value})}),s(ge,{children:_.name}),s(me,{children:"Email"}),s(he,{type:"email",value:v.email,onChange:a=>z({...v,email:a.target.value})}),s(ge,{children:_.email}),s(me,{children:"Phone"}),s(he,{type:"tel",value:v.phone,onChange:a=>z({...v,phone:a.target.value})}),s(ge,{children:_.phone}),s(vn,{type:"submit",children:"Submit"})]})})}),C&&Ne&&Y&&s(Me,{stripe:Ne,options:{clientSecret:Y,appearance:kn},children:s(nn,{orderId:c})})]})})]})]})]})})};export{$n as default};
