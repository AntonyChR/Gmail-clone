var R=Object.defineProperty,U=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(i,t,n)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,f=(i,t)=>{for(var n in t||(t={}))q.call(t,n)&&_(i,n,t[n]);if(M)for(var n of M(t))B.call(t,n)&&_(i,n,t[n]);return i},b=(i,t)=>U(i,$(t));import{c as I,a as P,i as T,L as D,G as K,g as H,j as e,s as o,u,b as g,d as r,e as F,f as y,r as w,h as G,V as E,U as W,K as V,E as Q,T as X,k as Y,l as J,m as Z,o as ee,B as ie,S as te,R as O,W as oe,n as ne,p as re,P as se}from"./vendor.51bb3c68.js";const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerpolicy&&(a.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?a.credentials="include":c.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(c){if(c.ep)return;c.ep=!0;const a=n(c);fetch(c.href,a)}};ce();const ae={sendMessageIsOpen:!1,selectedMail:null},z=I({name:"mail",initialState:ae,reducers:{selectMail:(i,t)=>{i.selectedMail=t.payload},openSendMessage:i=>{i.sendMessageIsOpen=!0},closeOpenMessage:i=>{i.sendMessageIsOpen=!1}}}),{selectMail:le,openSendMessage:de,closeOpenMessage:S}=z.actions,pe=i=>i.mail.selectedMail,he=i=>i.mail.sendMessageIsOpen;var me=z.reducer;const ue={user:null},C=I({name:"user",initialState:ue,reducers:{login:(i,t)=>{i.user=t.payload},logout:i=>{i.user=null}}}),{login:L,logout:ge}=C.actions,x=i=>i.user.user;var fe=C.reducer;const xe=P({reducer:{mail:me,user:fe}}),be={apiKey:"AIzaSyCXqxCeANrKamj6t0ANaz1WUDhU8Y8pKLQ",authDomain:"fir-5ab22.firebaseapp.com",projectId:"fir-5ab22",storageBucket:"fir-5ab22.appspot.com",messagingSenderId:"856604383762",appId:"1:856604383762:web:41c01f0010c6a5395056cb"},ye=T(be),A=D(ye),we=new K,v=H(),l=({icon:i,color:t="",size:n=20,pointer:s=!1,click:c=()=>{}})=>e("span",{onClick:()=>c(),className:"material-icons",style:{fonstSize:n,color:t,cursor:s?"pointer":"default"},children:i}),Se=o.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;

`,ve=o.img`
    object-fit: contain;
    height: 80px;
    margin-left: 5px;
`,ke=o.div`
    display: flex;
    align-items: center;

    .menu-icon{
        cursor: pointer;
        transition: background-color 0.2s ease-in-out;
        :hover{
            background-color: #a7a7a7;
        }
    }
`,Ne=o.div`
    display: flex;
    align-items: center;
    flex: 0.7;
    background-color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    .row-icon, .search-icon{
        color: grey;
    }

    input{
        border: none;
        width: 100%;
        padding: 10px;
        outline-width: 0;
        font-size: medium;
        background-color: transparent;
    }

`,je=o.div`
    color: grey;
    display: flex;
    align-items: center;
    padding-right: 20px;
    gap: 15px;
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
`,Me=()=>{const i=u(x),t=g(),n=()=>{F(v).then(()=>{t(ge())})};return r(Se,{children:[r(ke,{children:[e("span",{className:"material-icons menu-icon",children:"menu"}),e(ve,{src:"https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png",alt:"gmail icon"})]}),r(Ne,{children:[e("span",{className:"material-icons search-icon",children:"search"}),e("input",{type:"text",placeholder:"Search mail"}),e("span",{className:"material-icons search-icon",children:"arrow_drop_down"})]}),r(je,{children:[e("span",{className:"material-icons apps-icon",children:"apps"}),e("span",{className:"material-icons notifications-icon",children:"notifications"}),e("img",{src:i==null?void 0:i.photoUrl}),e(l,{click:n,icon:"logout",pointer:!0})]})]})},_e=o.div`
    flex:0.3;
    max-width: 200px;
    padding-right: 20px;
`,Ie=o.div`
    width: 90px;
    margin-top: 15px;
    margin-bottom: 15px;
    text-transform: capitalize;
    padding: 15px;
    margin-left: 10px;
    display: flex;
    color: gray;
    align-items: center;
    border-radius: 30px;
    border: none;
    transition: background-color 0.2s ease;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
    cursor: pointer;
    :active {
        background-color: #d3d3d3;
        cursor: pointer;
    }
`,Ee=o.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
    color: #818181;
    font-family: sans-serif;
    span {
        padding: 5px;
    }
    h3 {
        flex: 1;
        margin-left: 10px;
        font-size: 14px;
        font-weight: 400;
    }

    p {
        display: ${({selected:i})=>i?"inline":"none"};
        font-weight: 300;
    }

    :hover {
        background-color: #fcecec;
        color: #c04b37;
        font-weight: 800;

        p {
            display: inline;
        }
    }
    background-color: ${({selected:i})=>i?"#fcecec":""};
    color: ${({selected:i})=>i?"#c04b37":""};
    font-weight: ${({selected:i})=>i?"800":""};
`,Oe=o.div`
    color: grey;
    span:hover{
        cursor: pointer;
    }

    .footer-icons{
        display: flex;
        justify-content: space-between;
    }

    
`,h=({icon:i,title:t,number:n,selected:s=!1,click:c=()=>{}})=>r(Ee,{onClick:()=>c(),selected:s,children:[e("span",{className:"material-icons",children:i}),e("h3",{children:t}),e("p",{children:n})]}),ze=()=>{const i=y(),t=g();return r(_e,{children:[r(Ie,{onClick:()=>t(de()),children:[e("span",{className:"material-icons",children:"add"}),"Compose"]}),e(h,{click:()=>i.push("/"),icon:"inbox",title:"Inbox",number:4,selected:!0}),e(h,{icon:"star",title:"Starred",number:4}),e(h,{icon:"schedule",title:"Snoozed",number:4}),e(h,{icon:"label_important",title:"Important",number:4}),e(h,{click:()=>i.push("/sent"),icon:"send",title:"Sent",number:4}),e(h,{icon:"note",title:"Drafts",number:4}),e(h,{icon:"keyboard_arrow_down",title:"More",number:4}),e(Oe,{children:r("div",{className:"footer-icons",children:[e("span",{className:"material-icons",children:"person"}),e("span",{className:"material-icons",children:"duo"}),e("span",{className:"material-icons",children:"call"})]})})]})},Ce=o.div`
    display: flex;
    height: 85vh;
`,Le=o.div`
    flex: 1;
    background-color: whitesmoke;
`,Ae=o.div`
    color: grey;
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 5px 0;

    span {
        padding: 0 15px;
    }
`,Re=o.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
    background-color: white;
    padding: 20px;
    height: 100vh;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`,Ue=o.div`
    display: flex;
    padding: 20px;;
    align-items: center;
    border-bottom: 2px solid whitesmoke;
    position: relative;

    h2{
        font-weight: 400;
        margin:0 20px 0 0;
    }

    p{
        margin: 0;
    }

    .time{
        position: absolute;
        right: 0px;
        top: 24px;
        font-size: 17px;
        color: grey;
    }

`,$e=o.div`
    p{
        padding: 10px;
        margin-right: 20px;
        overflow-wrap: break-word;
    }
`,qe=()=>{const i=y(),t=u(pe);return t||i.push("/"),r(Le,{children:[r(Ae,{children:[r("div",{className:"tools-left",children:[e(l,{click:()=>i.push("/"),pointer:!0,icon:"arrow_back"}),e(l,{pointer:!0,icon:"move_to_inbox"}),e(l,{pointer:!0,icon:"report_gmailerrorred"}),e(l,{pointer:!0,icon:"delete"}),e(l,{pointer:!0,icon:"email"}),e(l,{pointer:!0,icon:"watch_later"}),e(l,{pointer:!0,icon:"check_circle"}),e(l,{pointer:!0,icon:"label_important"}),e(l,{pointer:!0,icon:"more_vert"})]}),r("div",{className:"tools-right",children:[e(l,{pointer:!0,icon:"unfold_more"}),e(l,{pointer:!0,icon:"print"}),e(l,{pointer:!0,icon:"logout"})]})]}),r(Re,{children:[r(Ue,{children:[e("h2",{children:t==null?void 0:t.subject}),e(l,{color:"#e8ab02",icon:"label_important"}),e("p",{children:t==null?void 0:t.title}),e("p",{className:"time",children:t==null?void 0:t.time})]}),e($e,{children:e("p",{children:t==null?void 0:t.description})})]})]})},Be=o.div` 
    color: grey;
    flex: 1;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`,Pe=o.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid whitesmoke;
    background-color: white;
    z-index: 999;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    
    .settings-left, .settings-right{
        display: flex;
        align-items: center;
        gap: 10px;
    }
`,Te=o.div` 
    position: sticky;
    top: 0;
    display: flex;
    border-bottom: 1px solid whitesmoke;
    background-color: #fff;
    z-index: 999;
`,De=o.div` 

`,Ke=o.div`
    font-family: sans-serif;
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid whitesmoke;
    cursor: pointer;
    z-index: 999;
    :hover {
        border-top: 1px solid whitesmoke;
        box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
    }
`,He=o.div`
    display: flex;
    align-items: center;
    gap: 15px;
`,Fe=o.h3`
    color: black;
    font-size: 13px;
    padding-left: 15px;
    flex: 0.2;
`,Ge=o.div`
    color: black;
    display: flex;
    flex: 0.7;
    align-items: center;
    font-size: 13px;

    h4 {
        width: 400px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-left: 5px;
        padding-right: 5px;
    }
`,We=o.span`
    font-weight: 400;
    color: grey;
`,Ve=o.div`
    padding-right: 5px;
    font-size: 12px;
    font-weight: bold;
`,m=({title:i,subject:t,description:n,id:s,time:c})=>{const a=y(),d=g(),p=()=>{d(le({title:i,subject:t,description:n,id:s,time:c})),a.push("/mail")};return r(Ke,{children:[r(He,{children:[e("input",{type:"checkbox"}),e("span",{className:"material-icons",children:"star_border"}),e("span",{className:"material-icons",children:"label_important"})]}),e(Fe,{onClick:p,children:i}),e(Ge,{onClick:p,children:r("h4",{children:[t," ",r(We,{children:["- ",n]})]})}),e(Ve,{children:c})]})},Qe=o.div` 
    border-bottom: 3px solid ${({color:i,selected:t})=>t?i:"white"};
    color: ${({selected:i,color:t})=>i?t:"grey"};
    cursor: pointer;
    min-width: 200px;
    padding: 0 15px;
    display: flex;
    align-items: center;

    background-color: ${({selected:i})=>i?"whitesmoke":"white"};
    border-width: 3px;

    :hover{
        background-color: whitesmoke;
        border-bottom: 3px solid ${({color:i})=>i};
    }


`,k=({icon:i,title:t,color:n,selected:s=!1})=>r(Qe,{selected:s,color:n,children:[e("span",{className:"material-icons",children:i}),e("h4",{children:t})]}),Xe=()=>{const[i,t]=w.exports.useState([]);G();const n=u(x);return w.exports.useEffect(()=>{const s=E(A,"emails"),c=W(s,V("to","==",n.email)),a=Q(c,d=>{let p=[];d.forEach(j=>{p.push(f({id:j.id},j.data()))}),t(p)});return()=>{a()}},[]),r(Be,{children:[r(Pe,{children:[r("div",{className:"settings-left",children:[e("input",{type:"checkbox"}),e("span",{className:"material-icons",children:"arrow_drop_down"}),e("span",{className:"material-icons",children:"redo"}),e("span",{className:"material-icons",children:"more_vert"})]}),r("div",{className:"settings-right",children:[e("span",{className:"material-icons",children:"chevron_left"}),e("span",{className:"material-icons",children:"chevron_right"}),e("span",{className:"material-icons",children:"keyboard_hide"}),e("span",{className:"material-icons",children:"settings"})]})]}),r(Te,{children:[e(k,{icon:"inbox",title:"Primary",color:"red",selected:!1}),e(k,{icon:"people_alt",title:"Social",color:"blue",selected:!1}),e(k,{icon:"sell",title:"Promotions",color:"green",selected:!0})]}),r(De,{children:[i.map(s=>e(m,{title:s.to,id:s.id,subject:s.subject,description:s.message,time:new Date(s.timestamp.seconds*1e3).toUTCString()},s.id)),e(m,{title:"title",id:"id",subject:"subject",description:"description",time:"time"}),e(m,{title:"title",id:"id",subject:"subject",description:"description",time:"time"}),e(m,{title:"title",id:"id",subject:"subject",description:"description",time:"time"}),e(m,{title:"title",id:"id",subject:"subject",description:"description",time:"time"}),e(m,{title:"title",id:"id",subject:"subject",description:"description",time:"time"}),e(m,{title:"title",id:"id",subject:"subject",description:"description",time:"time"})]})]})},Ye=async i=>{await X(E(A,"emails"),b(f({},i),{timestamp:Y.now()}))},Je=o.div`
    position: absolute;
    bottom: 0;
    right: 50px;
    background-color: #404040;
    width: 30%;
    height: 45%;
    max-width: 500px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
`,Ze=o.div`
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: grey;
    h3 {
        color: whitesmoke;
        font-size: 13px;
    }
`,ei=o.form`
    display: flex;
    flex:1;
    flex-direction: column;
    input{
        height: 30px;
        padding: 10px;
        border:none;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        outline: none;
    }
`,ii=o.input`
    flex: 1;

 `;o.input` `;o.input` `;const ti=o.div``,oi=o.button`
    padding: 7px;
    border-radius: 5px;
    color: whitesmoke;
    border: none;
    background-color: #3079ed;
    margin: 15px;
    cursor: pointer;
`,N=o.p` 
    margin: 0;
    background-color: white;
    color: red;
    text-align: right;
    padding: 2px;

`,ni=()=>{const{register:i,handleSubmit:t,watch:n,errors:s}=J(),c=u(x),a=g(S);return r(Je,{children:[r(Ze,{children:[e("h3",{children:"New Message"}),e(l,{click:()=>a(S()),pointer:!0,icon:"close"})]}),r(ei,{onSubmit:t(p=>{Ye(b(f({},p),{from:c.email})).then(()=>a(S()))}),children:[e("input",{autoComplete:"off",name:"to",placeholder:"To",type:"email",ref:i({required:!0})}),s.to&&e(N,{children:"To is required!!"}),e("input",{autoComplete:"off",name:"subject",placeholder:"Subject",type:"text",ref:i({required:!0})}),s.subject&&e(N,{children:"Subject is required!!"}),e(ii,{autoComplete:"off",name:"message",placeholder:"Message...",type:"text",ref:i({required:!0})}),s.message&&e(N,{children:"Message is required!!"}),e(ti,{children:e(oi,{type:"submit",children:"Send"})})]})]})},ri=o.div`
    display: grid;
    place-items: center;
    height: 100vh;
`,si=o.div`
    display: flex;
    flex-direction: column;
`,ci=o.img`
    object-fit: contain;
    height: 200px;
`,ai=o.div`
    background-color: #2a3eb1;
    border-radius: 5px;
    color: white;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    h1{
        margin: 0;
        font-size: 2rem;
    }
;
`,li=()=>{const i=g();return e(ri,{children:r(si,{children:[e(ci,{src:"https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png",alt:"gmail icon"}),e(ai,{onClick:()=>{Z(v,we).then(({user:n})=>{i(L({displayName:n.displayName,email:n.email,photoUrl:n.photoURL}))}).catch(n=>alert(n.message))},children:e("h1",{children:"LOGIN"})})]})})};function di(){const i=u(he),t=u(x),n=g();return w.exports.useEffect(()=>{ee(v,s=>{n(L({displayName:s.displayName,email:s.email,photoUrl:s.photoURL}))})},[]),e(ie,{children:t?r("div",{className:"App",children:[e(Me,{}),r(Ce,{children:[e(ze,{}),r(te,{children:[e(O,{exact:!0,path:"/mail",children:e(qe,{})}),e(O,{exact:!0,path:"/*",children:e(Xe,{})})]})]}),i&&e(ni,{})]}):e(li,{})})}const pi=oe`
    * {
        font-family: sans-serif;
    }

`;ne.render(e(re.StrictMode,{children:r(se,{store:xe,children:[e(pi,{}),e(di,{})]})}),document.getElementById("root"));
