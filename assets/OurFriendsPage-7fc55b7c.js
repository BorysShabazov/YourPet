import{k as p,j as e,r as E,C as u}from"./index-3d18e32a.js";import{T as f}from"./Title-0acd5223.js";import{f as m}from"./index-11ded139.js";const j=async()=>(await p("/api/friends/")).data;function a({title:s="",url:A="",children:r}){const t=n=>{n.target.title.toLowerCase()==="time:"&&n.preventDefault()};return e.jsxs("li",{className:"group flex flex-col items-start hover:text-blue ",children:[e.jsx("p",{className:"flex justify-between text-neutral-900  font-semibold font-['Manrope'] text-xs md:text-sm xl:text-base  group-hover:text-blue",children:s}),e.jsx("a",{className:"no-underline font-normal text-xs md:text-sm xl:text-base",title:s,href:A,target:A.includes("tel")?"":"_blank",onClick:t,children:r})]})}const h="data:image/jpeg;base64,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",y=new Date,I=m(y," "),w=({timetable:s})=>{const A=t=>{t.preventDefault()},r=s.map(t=>t.day===I.toUpperCase()?e.jsx("li",{className:"text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]",children:t!=null&&t.isOpen?e.jsxs("p",{className:"flex justify-between text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]",children:[e.jsx("span",{children:t.day})," ",t.from,"-",t.to]}):e.jsxs("p",{className:"flex justify-between text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]",children:[e.jsx("span",{children:t.day})," Closed"]})},t.day):e.jsx("li",{className:"text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[6px]",children:t!=null&&t.isOpen?e.jsxs("p",{className:"flex justify-between text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]",children:[e.jsx("span",{children:t.day})," ",t.from,"-",t.to]}):e.jsxs("p",{className:"flex justify-between text-center text-neutral-900 text-xs font-medium font-['Manrope']  gap-[4px]",children:[e.jsx("span",{children:t.day})," Closed"]})},t.day));return e.jsx("ul",{className:"hidden group-hover:inline absolute top-[36px] md:top-[40px] xl:top-[48px] left-0 w-[140px]  flex-col items-stretch content-center bg-white rounded-lg shadow border border-blue p-[12px]",onClick:A,children:r})},b=new Date,C=[6,0,1,2,3,4,5],B=C[b.getDay()],D=({friend:s})=>{const{address:A,addressUrl:r,email:t,imageUrl:n,phone:Q,title:o,url:l,workDays:x}=s,d=["MN","TU","WE","TH","FR","SA","SU"],c=x&&x.map((i,g)=>({day:d[g],...i}));return e.jsxs("li",{className:" px-[14px] py-[16px] bg-white rounded-[40px] shadow w-[280px] md:w-[336px] md:h-[100%] xl:w-[394px] xl:h-[100%]",children:[e.jsx("a",{href:l,target:"_blank",rel:"noreferrer noopener nofollow",className:"block mb-[16px] font-bold text-center text-blue text-xl font-['Manrope'] ",children:o}),e.jsxs("div",{className:"grid items-start gap-[16px] grid-cols-[100px_auto] md:grid-cols-[120px_auto] md:gap-[14px] xl:grid-cols-[158px_auto] xl:gap-[16px]",children:[e.jsx("img",{src:n??h,alt:o}),e.jsxs("ul",{className:"relative flex flex-col items-start justify-center gap-[12px]",children:[e.jsx(a,{title:"Time:",className:"pointer w-[141px] text-blue-400 text-base font-medium font-['Manrope']",children:x?e.jsxs(e.Fragment,{children:[x[B].isOpen?`${x[B].from||""}-${x[B].to||""}`:"Close",e.jsx(w,{timetable:c,target:" "})]}):"day and night"}),A?e.jsx(a,{title:"Adress:",url:r,children:A}):e.jsx(a,{title:"Adress:",url:l,children:"website only"}),t?e.jsx(a,{title:"Email:",url:`mailto:${t}`,children:t}):e.jsx(a,{title:"Email:",url:l,children:"website only"}),Q?e.jsx(a,{title:"Phone:",url:`tel:${Q}`,children:Q}):e.jsx(a,{title:"Phone:",url:l,children:"website only"})]})]})]})},H=({friends:s})=>e.jsx(e.Fragment,{children:e.jsx("ul",{className:"flex flex-col items-center gap-[20px] md:grid  md:grid-cols-2 md:gap-[32px] xl:grid-cols-3",children:s.map(A=>e.jsx(D,{friend:A},A._id))})}),X=()=>{const[s,A]=E.useState([]);return E.useEffect(()=>{(async()=>{try{const t=await j();A(t.data.friends)}catch(t){console.log(t)}})()},[]),e.jsxs(u,{className:"  pt-[40px] md:pt-[80px] pb-[75px] md:pb-[172px] xl:pb-[70px]",children:[e.jsx(f,{className:"mb-[24px] md:mb-[40px] xl:mb-[60px]",children:"Our Friend"}),e.jsx(H,{friends:s})]})};export{X as default};
