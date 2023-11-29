import{u as M,c as A,d as E,r as x,s as V,j as e,S as v,t as I,B as L,v as q,g as H,L as Y,w as _}from"./index-3d18e32a.js";import{c as Z,a as D,u as G}from"./index.esm-a56e3ee3.js";import{e as J,g as K}from"./petsSelectors-b41346c5.js";import{M as z,D as Q}from"./DeleteModal-39218c14.js";import{f as W}from"./index-11ded139.js";import"./index-0c80d909.js";const X=/^[A-Za-z]+$/,ee=/^\+[0-9]{12}$/,te=Z().shape({city:D().max(60),name:D().min(2,"Too Short").max(16,"Too Long, max 16").matches(X,"Name must contain only characters").required("Name is Required"),email:D().email("Enter a valid Email").required("Email is Required"),phone:D().matches(ee,"Format: +38123456789")}),$="pl-4 absolute -bottom-5 text-rose-500 text-xs font-normal top-6 left-[60px] xl:left-[85px]",N="transition duration-200 ease-in-out cursor-pointer hover:opacity-80",S="text-neutral-900 text-sm font-semibold font-['Manrope'] tracking-wide mdOnly:text-[16px] ",P=" outline-offset-0 outline-0  border border-blue outline-none text-neutral-900 text-xs font-normal font-['Manrope'] tracking-wide w-[190px] h-6 px-3 py-1 rounded-[20px] border border-blue-400 justify-start items-center gap-[191px] inline-flex md:w-[255px]  xl:w-[255px]",se=({onTogleLeavingModal:m})=>{const a=M(A),y=M(n=>n.auth.isRequestActive),u=E(),[o,d]=x.useState(null),[s,c]=x.useState(!1),[j,g]=x.useState(null),[b,p]=x.useState(!1),[k,t]=x.useState(!1);x.useEffect(()=>{s||g("")},[s]);const l=n=>typeof n=="string"&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(n)?n:Date.now(),i=G({initialValues:{name:a.name||"",email:a.email||"",birthday:l(a.birthday),phone:a.phone||"",city:a.city||""},validateOnChange:!1,validateOnBlur:!0,validationSchema:te,onSubmit:({name:n,email:f,birthday:U,phone:R,city:T})=>{const O={name:n,email:f,birthday:U,phone:R,city:T};j&&k&&(O.avatar=o);const B=F(O);u(V(B)),p(!1),c(!1)}}),r=i.errors,w=i.values,F=n=>{const f=new FormData;return f.append("avatar",n.avatar),f.append("name",n.name),f.append("email",n.email),f.append("birthday",n.birthday),f.append("phone",n.phone),f.append("city",n.city),f};function C(n){const f=new FileReader;if(f.onloadend=function(){g(f.result)},n)f.readAsDataURL(n),p(!0);else return}const h=()=>{c(!1),p(!1),t(!1),i.setFieldValue("name",a.name),i.setFieldValue("email",a.email),i.setFieldValue("birthday",a.birthday),i.setFieldValue("phone",a.phone),i.setFieldValue("city",a.city)};return e.jsxs("form",{noValidate:!0,autoComplete:"off",className:"flex flex-col flex-wrap-reverse",onSubmit:i.handleSubmit,children:[e.jsx("div",{className:`absolute top-[14px] right-[14px] ${N}`,children:s?e.jsx("div",{onClick:h,children:e.jsx(v,{id:"icon-cross",size:24,stroke:"#54ADFF",fill:"transparent",className:N})}):e.jsx("div",{onClick:()=>{c(!0)},children:e.jsx(v,{id:"icon-edit",size:24,fill:"#54ADFF",className:N})})}),e.jsxs("div",{className:"mdOnly:flex flex-row-reverse gap-[71px]",children:[e.jsxs("div",{className:"flex justify-center",children:[e.jsxs("label",{htmlFor:"avatar",className:"flex justify-center flex-col gap-[5px]",children:[e.jsx("div",{className:`flex justify-center mb-[14px]  w-[182px] h-[182px] rounded-[40px] bg-slate-100 items-center overflow-hidden ${s&&N}`,children:y?e.jsx("div",{className:"text-center",children:e.jsx(z,{})}):e.jsx("img",{className:" object-cover  rounded-[40px] w-[182px] h-[182px]",src:j||a.avatarURL,alt:"User Avatar"})}),b?e.jsxs("div",{className:"flex justify-center mb-[14px] gap-2 h-6",children:[e.jsx("div",{onClick:n=>{n.preventDefault(),p(!1),t(!0)},children:e.jsx(v,{id:"icon-check",size:24,stroke:"#54ADFF",fill:"transparent",className:N})}),"Confirm",e.jsx("div",{onClick:n=>{n.preventDefault(),p(!1),g(null)},children:e.jsx(v,{id:"icon-cross",size:24,stroke:"#54ADFF",fill:"transparent",className:N})})]}):e.jsxs("div",{className:s?`flex flex-row justify-center gap-[5px] mb-[14px] ${N} h-6`:"flex flex-row justify-center gap-[5px] mb-[14px] opacity-0 h-6",children:[e.jsx(v,{id:"icon-camera",size:24,stroke:"#54ADFF",fill:"transparent",className:N}),"Edit photo"]})]}),e.jsx("div",{children:e.jsx("input",{className:"hidden",type:s&&!b?"file":"",id:"avatar",name:"avatar",accept:"image/jpeg, image/png",onChange:n=>{const f=n.target.files[0];C(f),d(f)}})})]}),e.jsxs("div",{className:"flex flex-col gap-[20px]",children:[e.jsxs("div",{className:"flex justify-between relative",children:[e.jsx("label",{className:S,htmlFor:"name",children:"Name:"}),e.jsx("input",{className:`${P} ${r.name&&"border-rose-400"}`,type:"text",id:"name",name:"name",value:w.name,onChange:i.handleChange,readOnly:!s}),r.name&&e.jsx("p",{className:$,children:r.name})]}),e.jsxs("div",{className:"flex justify-between w-full relative",children:[e.jsx("label",{className:S,htmlFor:"email",children:"Email:"}),e.jsx("input",{className:`${P} ${r.email&&"border-rose-400"}`,type:"text",id:"email",name:"email",value:w.email,onChange:i.handleChange,readOnly:!s}),r.email&&e.jsx("p",{className:$,children:r.email})]}),e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsx("label",{className:S,htmlFor:"birthday",children:"Birthday:"}),e.jsx("div",{children:e.jsx(J,{selected:new Date(w.birthday),onChange:n=>{i.setFieldValue("birthday",n)},readOnly:!s,dateFormat:"dd-MM-yyyy",className:P})})]}),e.jsxs("div",{className:"flex justify-between w-full relative",children:[e.jsx("label",{className:S,htmlFor:"phone",children:"Phone:"}),e.jsx("input",{className:`${P} ${r.phone&&"border-rose-400"}`,type:"tel",id:"phone",name:"phone",placeholder:"+38123456789",value:w.phone,onChange:i.handleChange,readOnly:!s}),r.phone&&e.jsx("p",{className:$,children:r.phone})]}),e.jsxs("div",{className:"flex justify-between relative",children:[e.jsx("label",{className:S,htmlFor:"city",children:"City:"}),e.jsx("input",{className:`${P} ${r.city&&"border-rose-400"}`,type:"text",id:"city",name:"city",value:w.city,onChange:i.handleChange,readOnly:!s}),r.city&&e.jsx("p",{className:$,children:r.city})]}),s?e.jsx("div",{className:"w-full h-6 flex justify-end",children:e.jsx("button",{className:"flex justify-center w-[248px] text-stone-50 text-sm font-bold font-['Manrope'] tracking-wide h-[31px] px-[107px] py-1.5 bg-blue rounded-[40px] md:justify-center items-center gap-2 inline-flex md:w-[255px]  xl:w-[255px]",type:"submit",children:"Save"})}):e.jsx("div",{onClick:m,className:"w-full flex text-zinc-500 text-base font-medium font-['Manrope'] tracking-wide ",children:e.jsxs("div",{className:`cursor-pointer hover:opacity-80 flex  gap-[12px] ${N}`,children:[e.jsx(v,{id:"icon-logout",size:24,stroke:"#54ADFF",fill:"transparent"}),"Log Out"]})})]})]})]})},ae=({onTogleLeavingModal:m})=>e.jsx("div",{className:`relative w-[280px] bg-white rounded-[20px] shadow pt-[20px] pb-[24px] px-[8px] md:w-[704px] md:px-[20px] xl:w-[395px] rounded-[20px] mx-auto
    `,children:e.jsx("div",{className:"mdOnly:flex flex-row-reverse justify-center items-center gap-[70px]",children:e.jsx(se,{onTogleLeavingModal:m})})}),le=()=>e.jsxs("div",{className:`transition duration-200 ease-in-out hover:opacity-80 cursor-pointer flex justify-center items-center flex-col w-20 h-20  bg-gradient-to-r from-lightBlue to-blue rounded-full shadow z-10 
group hover:from-blue hover:to-lightBlue md:hover:from-blue md:hover:to-blue
md:w-[129px] md:h-10 md:px-5 md:py-2 md:from-blue md:to-blue md:rounded-[40px] md:flex-row-reverse md:gap-[6px] `,children:[e.jsx("div",{className:"hidden md:w-6 h-6 relative md:flex items-center justify-center",children:e.jsx(v,{id:"icon-plus",size:18,stroke:"#FEF9F9"})}),e.jsx("div",{className:"w-6 h-6 relative items-center justify-center mb-1 md:hidden ",children:e.jsx(v,{id:"icon-plus",size:24,stroke:"#FEF9F9"})}),e.jsx("div",{className:"text-white text-xs font-semibold font-['Manrope'] md:text-[15px]",children:"Add pet"})]}),ne=({onCloseModal:m})=>e.jsxs("div",{className:" text-center my-12 w-72 md:w-[608px]",children:[e.jsx("h3",{className:" text-neutral-900 text-2xl md:text-4xl font-medium font-['Manrope'] tracking-wide",children:"Congrats!"}),e.jsx("p",{className:" mt-6 mb-10 md:mt-14 md:mb-16 text-neutral-900 text-base md:text-2xl  font-medium font-['Manrope'] tracking-wide",children:"Youre registration is success"}),e.jsxs("button",{onClick:m,type:"button",className:"w-60 h-10 px-7 py-2 bg-blue hover:blue-gradient rounded-3xl justify-center items-center gap-3 inline-flex  text-white text-base font-bold font-['Manrope'] tracking-wide",children:["Go to profile",e.jsx("span",{children:e.jsx(v,{id:"icon-pawprint",size:"24px",stroke:"white",fill:"white"})})]})]}),ie="transition duration-200 ease-in-out cursor-pointer hover:opacity-80",re=({id:m,photo:a,name:y,birth:u,type:o,comments:d,handleTogleDeleteModal:s})=>{const c=new Date(u),j=W(c,"dd.MM.yyyy");return e.jsxs("div",{className:"relative w-[280px] bg-white rounded-[20px] shadow pt-[16px] pb-[24px] px-[20px] md:w-[703px] md:flex xl:w-[821px] md:gap-5",children:[e.jsx("div",{className:"w-60 rounded-[20px] justify-center flex smOnly:mb-[20px] ",children:e.jsx("img",{className:"w-full h-[240px] rounded-[40px] object-cover md:w-[128px] md:h-[128px] xl:w-[161px] xl:h-[161px]",src:a})}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("div",{onClick:()=>{s(m,y)},className:"absolute top-[-4px] right-[0]",children:e.jsx(v,{id:"icon-trash",size:24,stroke:"#54ADFF",fill:"transparent",className:ie})}),e.jsxs("ul",{className:"flex flex-col gap-[12px]",children:[e.jsx("li",{children:e.jsxs("p",{className:"text-black text-sm font-normal font-['Manrope'] tracking-wide",children:[e.jsx("span",{className:"text-black text-sm font-bold font-['Manrope'] tracking-wide",children:"Name:"})," ",y]})}),e.jsx("li",{children:e.jsxs("p",{className:"text-black text-sm font-normal font-['Manrope'] tracking-wide",children:[e.jsx("span",{className:"text-black text-sm font-bold font-['Manrope'] tracking-wide",children:"Date of birth:"})," ",j]})}),e.jsx("li",{children:e.jsxs("p",{className:"text-black text-sm font-normal font-['Manrope'] tracking-wide",children:[e.jsx("span",{className:"text-black text-sm font-bold font-['Manrope'] tracking-wide",children:"Type:"})," ",o]})}),e.jsx("li",{children:e.jsxs("p",{className:"text-black text-sm font-normal font-['Manrope'] tracking-wide",children:[e.jsx("span",{className:"text-black text-sm font-bold font-['Manrope'] tracking-wide",children:"Comments:"})," ",d]})})]})]})]})},oe=({petsPerPage:m,totalPets:a,currentPage:y,paginate:u})=>{let o=[];const d=Math.ceil(a/m),[s,c]=x.useState(y||1);for(let t=1;t<=d;t++)o.push(t);const g=(()=>{let t,l,i;s===1?(t=o.slice(0,2),i=o.slice(s+1,s+1),l=[o[d-1]]):s===d?(t=[o[0]],i=o.slice(s,s-3),l=o.slice(-2)):(t=[o[0]],i=o.slice(s-2,s+1),l=[o[d-1]]);let r;return s===1?r=[...t,...i,"...",...l]:s!==1&&s!==d?s<=4?r=[...t,...i,"...",...l]:s>=d-3?r=[...t,"...",...i,...l]:r=[...t,"...",...i,"…",...l]:s===d&&(r=[...t,"...",...i,...l]),r=r.filter((w,F,C)=>C.indexOf(w)===F),r})(),b=(t,l)=>{l.preventDefault(),c(t),u(t)},p=t=>{t.preventDefault();const l=s-1;l>=1&&(c(l),u(l))},k=t=>{t.preventDefault();const l=s+1;l<=d&&(c(l),u(l))};return e.jsx("div",{className:"w-full flex justify-center mt-5",children:e.jsxs("ul",{className:"flex gap-3 ",children:[e.jsx("li",{className:"w-[35px] h-[35px] relative",children:e.jsx("a",{href:"#",className:"flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]",onClick:t=>p(t),children:e.jsx(v,{id:"icon-arrow-left",size:14,stroke:s===1?"gray":"#54adff"})})}),o.length<5?o.map(t=>e.jsx("li",{className:"w-[35px] h-[35px] relative",children:e.jsx("a",{href:"#",className:`flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]" ${s===t?"bg-[#54adff] text-white":""}`,onClick:l=>b(t,l),children:t})},t)):g.map(t=>t==="..."||t==="…"?e.jsx("li",{className:"w-[35px] h-[35px] relative",children:e.jsx("div",{href:"#",className:`flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]" ${s===t?"bg-[#54adff] text-white":""}`,children:t})},t):e.jsx("li",{className:"w-[35px] h-[35px] relative",children:e.jsx("a",{href:"#",className:`flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]" ${s===t?"bg-[#54adff] text-white":""}`,onClick:l=>b(t,l),children:t})},t)),e.jsx("li",{className:"w-[35px] h-[35px] relative",children:e.jsx("a",{href:"#",className:" flex justify-center items-center rounded-full w-[35px] h-[35px] border border-[#54adff] text-neutral-900 text-base font-normal leading-[15px]",onClick:t=>k(t),children:e.jsx("div",{className:"rotate-180",children:e.jsx(v,{id:"icon-arrow-left",size:14,stroke:s===d?"gray":"#54adff"})})})})]})})},de=()=>{const m=E(),{pets:a,total:y,qty:u}=M(K),o=M(h=>h.pets.isLoading),[d,s]=x.useState(1),[c,j]=x.useState(4);let g,b,p;a&&(j(u),g=d*c,b=g-c,p=a.slice(b,g));const k=h=>s(h),[t,l]=x.useState(!1),[i,r]=x.useState(null),[w,F]=x.useState(null),C=(h,n)=>{l(!t),r(h),F(n)};return x.useEffect(()=>{m(I())},[m]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[!o&&a?e.jsx("ul",{className:`flex flex-col gap-[20px] ${a.length>3&&"xl:h-[650px]"}`,children:a.length>0?p.map(h=>e.jsx("li",{className:"mx-auto",children:e.jsx(re,{photo:h.imageURL,name:h.name,birth:h.birthDate,type:h.type,comments:h.comments,id:h._id,handleTogleDeleteModal:C})},h._id)):e.jsx("div",{className:"text-center py-8",children:e.jsx("p",{className:"text-black font-medium font-['Manrope'] tracking-wide",children:"You haven't added any pets yet"})})}):e.jsx("div",{className:"w-full flex justify-center py-7",children:e.jsx(z,{})}),a&&a.length>0&&c!==a.length&&c<a.length&&e.jsx(oe,{petsPerPage:c,totalPets:y,paginate:k})]}),e.jsx(L,{isOpen:t,onCloseModal:C,children:e.jsx(Q,{title:"yuor pet",nameToDelete:w,id:i,onCloseModal:C,currentPage:d})})]})},ue=()=>{const m=q(),{email:a}=M(A),[y,u]=x.useState(!1),[o,d]=x.useState(!1),[s,c]=x.useState(!0);x.useEffect(()=>{const p=()=>{const k=window.scrollY||document.documentElement.scrollTop,t=window.innerHeight;document.documentElement.scrollHeight-(k+t)<=100?c(!1):c(!0)};return window.addEventListener("scroll",p),p(),()=>{window.removeEventListener("scroll",p)}},[]);const j=()=>{d(!o)};x.useEffect(()=>{const p=sessionStorage.getItem(`hasUserSeenModal_${a}`);(m.state&&m.state.fromPage==="/YourPet/register"&&!p||p==="false")&&(u(!0),sessionStorage.setItem(`hasUserSeenModal_${a}`,"true"))},[m,a]);const g=()=>{u(!1)},b=M(H);return e.jsxs("section",{className:"py-[20px] md:py-[60px] ",children:[e.jsxs("div",{className:"relative container mx-auto xl:flex gap-[32px]",children:[e.jsxs("div",{className:"mb-[42px]",children:[e.jsx("h2",{className:"text-black text-xl font-medium font-['Manrope'] tracking-wide mb-[18px] md:text-[28px] md:mb-[24px]",children:"My information:"}),b&&e.jsx(ae,{onTogleLeavingModal:j})]}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("h2",{className:"text-black text-xl font-medium font-['Manrope'] tracking-wide mb-[18px] md:text-[28px] md:mb-[24px]",children:"My pets:"}),e.jsx(Y,{to:"/add-pet",state:m,className:`z-10 fixed right-[20px] ${s?"bottom-[20px] ":"bottom-[60px] "} md:absolute md:top-[-10px] md:right-0 md:bottom-full`,children:e.jsx(le,{})}),e.jsx(de,{})]})]}),e.jsx(L,{isOpen:y,onCloseModal:g,children:e.jsx(ne,{onCloseModal:g})}),e.jsx(L,{isOpen:o,onCloseModal:j,children:e.jsx(_,{onCloseModal:j})})]})};export{ue as default};
