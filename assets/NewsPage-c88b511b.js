import{j as e,L as v,r,i as f,C as M,O as S}from"./index-4469e5e7.js";import{f as C}from"./index-c0b36e31.js";import{S as P,P as k}from"./Pagination-dcd34fd5.js";import{T as E}from"./Title-ee600c79.js";const u=({text:t,length:a})=>{const[o,l]=r.useState(!1),c=()=>l(!0),m=()=>l(!1);return e.jsx("span",{onMouseEnter:c,onMouseLeave:m,children:t.length>a?e.jsx("span",{style:{cursor:"zoom-in"},children:o?t:t.slice(0,a)+"..."}):t})},T=({date:t,imgUrl:a,text:o,title:l,url:c})=>e.jsxs("div",{className:"   mx-auto md:mx-0 md:w-[336px]  xl:w-[395px]",children:[e.jsx("div",{className:"w-full h-2 blue-gradient-full rounded-[40px]"}),e.jsxs("div",{className:"mx-auto mt-[12px] flex flex-col justify-between bg-white rounded-[20px] md:h-[556px] p-[16px] md:p-[12px]",children:[e.jsxs("div",{className:" flex flex-col gap-[16px]",children:[e.jsx("div",{className:"mx-[-16px] mt-[-16px] md:mx-[-12px] md:mt-[-12px]",children:e.jsx("img",{src:a,alt:"newImage",className:"w-full  bg-black bg-opacity-20 rounded-[20px] h-[252px] "})}),e.jsx("h2",{className:"text-2xl font-bold font-manrope ",children:e.jsx(u,{text:l,length:"40"})}),e.jsx("p",{className:"text-base font-normal font-manrope",children:e.jsx(u,{text:o,length:"200"})})]}),e.jsxs("div",{className:"flex justify-between mt-[24px] md:mt-[40px]",children:[e.jsx("p",{className:" text-grey text-base font-normal font-manrope",children:C(Date.parse(t),"dd/MM/yyyy")}),e.jsx(v,{target:"_blank",to:c,className:"text-blue text-base font-medium font-manrope hover:text-black",children:"Read more"})]})]})]}),L=async()=>(await f("/api/news/")).data,Q=async(t,a=1)=>(await f(`/api/news/?q=${t}&page=${a}`)).data,R=()=>{const[t,a]=r.useState([]),[o,l]=r.useState(0),[c,m]=r.useState(0),[h,g]=r.useState(""),p=6;r.useEffect(()=>{d()},[]);const d=async()=>{try{const s=await L();a(s.data),m(x=>(s.total!==x&&l(Math.ceil(s.total/p)),s.total))}catch(s){console.log(s)}},i=async(s,x=1)=>{try{const n=await Q(s,x);a(n.data),m(()=>(l(Math.ceil(n.total/p)),n.total)),g(s)}catch(n){console.log(n.message)}},j=s=>{i(h,s.selected+1),console.log(s.selected+1)},w=()=>{d()};return e.jsxs(M,{className:"pb-[117px] md:pb-[126px]",children:[e.jsx(E,{className:"mt-[40px] md:mt-[80px]",children:"News"}),e.jsx(P,{getQuery:i,refreshClear:w,className:"mt-[24px] md:mt-[40px]"}),e.jsx(S,{}),e.jsx("ul",{className:"mt-[24px] md:mt-[40px] xl:mt-[60px] flex flex-wrap gap-[24px] md:gap-x-[32px] md:gap-y-[24px] xl:gap-x-[31px] xl:gap-y-[24px]",children:t.map(({_id:s,date:x,imgUrl:n,text:y,title:N,url:b})=>e.jsx("li",{children:e.jsx(T,{date:x,imgUrl:n,text:y,title:N,url:b})},s))}),e.jsx(k,{handleClickPage:j,totalPages:o})]})};export{R as default};
