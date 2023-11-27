import{j as e,N as F,u as p,L as b,S as a,a as A,r as o,B as c,g as L,b as D,c as y,d as z,e as S,f as E,C as B}from"./index-6717a986.js";import{S as I}from"./Search-ef02f5f5.js";import{T as P}from"./Title-44da2a76.js";import R from"./NotFoundPage-8b723516.js";import{M as W,D as T}from"./DeleteModal-bcf3914b.js";const r=({to:t,children:s})=>e.jsx(F,{to:t,className:({isActive:n})=>n?"bg-blue inline-block text-background px-4 py-2 text-sm h-[35px] rounded-[40px] leading-normal":"inline-block text-blue px-4 py-2 text-sm h-[35px] bg-lightBlue rounded-[40px] leading-normal",children:s}),H=({className:t=""})=>{const s=p(n=>n.auth.token);return e.jsxs("div",{className:`flex flex-wrap gap-2 ${t}`,children:[e.jsx(r,{to:"/notices/sell",children:"sell"}),e.jsx(r,{to:"/notices/lost",children:"lost"}),e.jsx(r,{to:"/notices/found",children:"found"}),e.jsx(r,{to:"/notices/in-good-hands",children:"in good hands"}),!!s&&e.jsxs(e.Fragment,{children:[e.jsx(r,{to:"/notices/favorite",children:"favorite ads"}),e.jsx(r,{to:"/notices/own",children:"my ads"})]})]})},N=({onCloseModal:t})=>e.jsxs("div",{className:"flex justify-center items-center flex-col w-72 md:w-[608px]",children:[e.jsx("h3",{className:"Attention mt-12 text-center text-neutral-900 text-2xl md:text-4xl font-medium fon",children:"Attention"}),e.jsx("p",{className:" mt-5 mb-10 text-center text-neutral-900 text-sm font-medium font-['Manrope'] leading-none md:leading-6 tracking-wide",children:"We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsxs("div",{className:"flex gap-2.5 md:gap-5 smOnly:flex-col mb-12",children:[e.jsx(b,{to:"/login",children:e.jsxs("button",{onClick:t,type:"button",className:"  smOnly:w-60 smOnly:h-10 smOnly:px-16 smOnly:py-2 md:w-36 md:h-9 md:py-2 md:px-5 bg-yellow hover:bg-gradient-to-l from-yellow to-white rounded-3xl border-2 border-yellow justify-center items-center gap-2 inline-flex text-white text-base font-bold font-['Manrope'] tracking-wide",children:["Log IN",e.jsx("span",{className:" rotate-[25deg] w-6 h-6 ",children:e.jsx(a,{id:"icon-pawprint",size:"24px",stroke:"white",fill:"white"})})]})}),e.jsx(b,{to:"/register",children:e.jsx("button",{onClick:t,type:"button",className:"  smOnly:w-60 smOnly:h-10 smOnly:px-16 smOnly:py-2 md:w-36 md:h-9 md:py-2 md:px-5 justify-center items-center hover:bg-gradient-to-l from-yellow to-white text-yellow hover:text-white flex border-2 border-yellow rounded-3xl",children:"Registration"})})]})]}),$=()=>{const t=p(x=>x.auth.token),s=A(),[n,i]=o.useState(!1),d=()=>{i(!0)},l=()=>{i(!1)},m=()=>{console.log("click"),t?s("/add-pet"):d()};return e.jsxs(e.Fragment,{children:[e.jsx(c,{isOpen:n,onCloseModal:l,children:e.jsx(N,{onCloseModal:l})}),e.jsx("div",{className:`w-20 h-20 md:h-10 bg-blue rounded-[40px] shadow blue-gradient fixed right-5 
    bottom-5 md:relative md:inset-0 md:mt-[40px] md:w-[129px] cursor-pointer z-10`,onClick:m,children:e.jsxs("div",{className:"absolute left-0 top-0 w-full rounded-[40px] h-full md:flex-row-reverse md:flex md:static md:pr-[13px] gap-[8px] items-center",children:[e.jsx(a,{id:"icon-plus",size:"24px",stroke:"white",className:"left-[28px] top-[20px] absolute md:static md:scale-50 "}),e.jsx("p",{className:`text-white font-semibold text-xs absolute left-[18px] top-[48px] md:static md:text-base 
        md:tracking-wide md:font-bold md:font-['Manrope']`,children:"Add pet"})]})})]})},U=t=>t.notices.items,q=({onCloseModal:t,onOpenAtentionModal:s})=>{o.useState(!1);const n=p(L),[i,d]=o.useState({width:window.innerWidth,height:window.innerHeight});return o.useEffect(()=>{const l=()=>{d({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]),console.log("isLoggedIn: ",n),e.jsx(e.Fragment,{children:e.jsx("div",{className:" smOnly:w-[280px] smOnly:h-[821px] md:w-[633px] md:h-[495px] flex justify-center items-center",children:i.width<=767.98?e.jsx(W,{}):e.jsx(D,{})})})},G=({pet:t})=>{const s="your pet",n="Сute dog looking  for a home",i=y(),[d,l]=o.useState(!1),[m,x]=o.useState(!1),v=()=>{x(!0)},M=()=>{x(!1)},O=u=>{l(!0),i(z(u))},f=()=>{l(!1)},[C,g]=o.useState(!1),[h,w]=o.useState(null),k=u=>{g(!0),w(u)},j=()=>{g(!1),w(null)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:" w-[288px] h-[100%] mx-h-[456px] pb-[24px]  mdOnly:w-[336px] smOnly:w-[280px] relative hover:shadow-xl  bg-white rounded-bl-[40px] rounded-br-[40px] shadow",children:[e.jsx("img",{className:"h-[288px] w-[100%]",src:t.imageURL,alt:t.title}),e.jsx("div",{className:" flex items-center  w-[126px] h-[32px] px-[17px] py-[11px] left-0 top-[16px] absolute bg-[#CCE4FB] rounded-tr-2xl rounded-br-2xl  ",children:e.jsx("p",{className:" flex items-center w-[92px] h-[10px]  text-neutral-900 text-sm font-medium font-['Manrope']",children:t.category})}),e.jsx("div",{className:"w-10 h-10 right-[12px] top-[12px] bg-[#CCE4FB] rounded-full absolute group",children:e.jsx(a,{id:"icon-heart",size:24,className:"left-[8px] fill-transparent stroke-[#54ADFF] top-[9px] absolute group-hover:fill-[#54ADFF]"})}),e.jsx("div",{className:"w-10 h-10 right-[12px] top-[68px] absolute group bg-[#CCE4FB] rounded-full ",onClick:()=>k(h),children:e.jsx(a,{id:"icon-trash",size:24,className:" left-[8px] fill-transparent stroke-[#54ADFF] top-[9px] absolute group-hover:fill-[#54ADFF] "})}),e.jsx("p",{className:"w-[231px] text-neutral-900 text-2xl font-bold font-['Manrope'] mt-[20px] ml-[20px]",children:" Сute dog looking for a home"}),e.jsx("button",{onClick:()=>O(h),className:"hover:bg-gradient-to-l from-[#419EF1] to-[#9BD0FF] hover:text-white hover:border-none w-[248px] h-[38px] mx-[20px] mt-[20px] smOnly:mx-[16px] mdOnly:mx-[44px] mdOnly:h-[40px] rounded-[40px] border-2 border-[#54ADFF]  text-[#54ADFF] items-center pl-[78px]   flex font-['Manrope'] tracking-wide group",type:"button",children:e.jsxs("p",{className:"transition-transform transform group-hover:-translate-x-[18px] flex ",children:[" Learn more",e.jsx(a,{id:"icon-pawprint",size:24,className:" fill-transparent group-hover:fill-[white] ml-[12px]"})]})}),e.jsxs("div",{className:" w-20 px-1 py-0.5 left-[12px] smOnly:left-[8px] mdOnly:left-[24px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl justify-center items-center gap-[4px] inline-flex group",children:[e.jsx(a,{id:"icon-location",size:24,className:"fill-transparent stroke-[#54ADFF] "}),e.jsx("p",{className:"text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide  ",children:" Lviv"})]}),e.jsxs("div",{className:" w-20 px-1 py-0.5 left-[104px] smOnly:left-[100px] mdOnly:left-[128px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl justify-center items-center gap-[4px] inline-flex group",children:[e.jsx(a,{id:"icon-clock",size:24,className:"fill-transparent stroke-[#54ADFF] "}),e.jsx("p",{className:"text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide ",children:" 1 year"})]}),e.jsxs("div",{className:" w-[80px] h-[28px] px-1 py-0.5 left-[196px] smOnly:left-[192px] mdOnly:left-[232px] top-[248px] absolute bg-[#CCE4FB]  rounded-2xl flex justify-center items-center gap-[4px] group",children:[e.jsx(a,{id:"icon-female",size:24,className:"fill-transparent stroke-[#54ADFF] "}),e.jsx("p",{className:"text-neutral-900 text-xs font-semibold font-['Manrope'] tracking-wide ",children:" female"})]})]}),e.jsx(c,{isOpen:d,onCloseModal:f,children:e.jsx(q,{onOpenAtentionModal:v,onCloseModal:f})}),e.jsx(c,{isOpen:m,onCloseModal:M,children:e.jsx(N,{})}),e.jsx(c,{isOpen:C,onCloseModal:j,children:e.jsx(T,{id:h,title:s,nameToDelete:n,onCloseModal:j})})]})},J=({pets:t})=>e.jsx("div",{className:"mt-[24px] md:mt-[40px] mx-auto  flex flex-wrap  gap-[24px] md:gap-x-[32px]",children:t.map((s,n)=>e.jsx(G,{pet:s},n))}),K=["sell","lost","found","in-good-hands","favorite","own"],_=()=>{const t=y(),{categoryName:s}=S();o.useEffect(()=>{t(E(s))},[s,t]);const n=p(U);return e.jsxs(B,{children:[K.includes(s)?e.jsxs("div",{children:[e.jsx(P,{className:"mt-[40px] md:mt-[80px]",children:"Find your favorite pet"}),e.jsx(I,{className:"mt-[24px] md:mt-[40px]"}),e.jsxs("div",{className:"md:flex justify-between",children:[e.jsx(H,{className:"mt-[20px] md:mt-[40px]"}),e.jsx($,{})]})]}):e.jsx(R,{}),e.jsx(J,{pets:n})]})};export{_ as default};
