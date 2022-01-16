import{a as C,S as P}from"./index.fca0dee2.js";import{N as M}from"./Navbar.c7d65aa1.js";import{l as D,f as v,m as U,g as y,ae as N,o,c as T,w as b,h as i,i as e,a5 as t,T as S,a as V,ao as O,b as F,n as l,v as g,x as k,t as c,p as h,y as z,q as E,D as L,d as A,j as q,a6 as G,af as J,z as R,aj as Y}from"./vendor.3957acd4.js";const H={class:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"},I=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),K={class:"inline-block w-full max-w-xl overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-0 sm:align-middle sm:max-w-xl sm:w-full"},Q={class:"px-4 pt-5 pb-4 bg-blueGray-200 sm:p-6 sm:pb-4"},W={class:"sm:flex sm:items-start"},X={class:"flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-blueGray-400 sm:mx-0 sm:h-10 sm:w-10"},Z={class:"flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},ee=q(" Edit Biaya Project "),te={class:"w-full px-5 bg-blueGray-200"},se=["onSubmit"],ae={class:"relative w-full mb-3"},oe=e("label",{class:"block mb-2 text-xs font-semibold uppercase text-blueGray-600",htmlFor:"grid-password"}," Pajak ",-1),le={class:"flex"},re=e("span",{class:"px-4 py-2 text-sm whitespace-no-wrap border rounded-tr rounded-br text-blueGray-700 bg-blueGray-300"},"%",-1),ie={key:0},de={class:"flex items-center justify-start pt-2 font-medium text-red-600"},ne=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5 mr-1 feather feather-alert-octagon"},[e("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})])],-1),ce={class:"flex-initial max-w-full text-xs font-normal"},pe={class:"relative w-full mb-3"},ue=e("label",{class:"block mb-2 text-xs font-semibold uppercase text-blueGray-600",htmlFor:"grid-password"}," Profit Perusahaan ",-1),me={class:"flex"},xe=e("span",{class:"px-4 py-2 text-sm whitespace-no-wrap border rounded-tr rounded-br text-blueGray-700 bg-blueGray-300"},"%",-1),fe={key:0},be={class:"flex items-center justify-start pt-2 font-medium text-red-600"},he=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5 mr-1 feather feather-alert-octagon"},[e("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})])],-1),_e={class:"flex-initial max-w-full text-xs font-normal"},we={class:"relative w-full mb-3"},ve=e("label",{class:"block mb-2 text-xs font-semibold uppercase text-blueGray-600",htmlFor:"grid-password"}," Profit Tim ",-1),ye={class:"flex"},ge=e("span",{class:"px-4 py-2 text-sm whitespace-no-wrap border rounded-tr rounded-br text-blueGray-700 bg-blueGray-300"},"%",-1),ke={key:0},Ge={class:"flex items-center justify-start pt-2 font-medium text-red-600"},$e=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5 mr-1 feather feather-alert-octagon"},[e("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})])],-1),je={class:"flex-initial max-w-full text-xs font-normal"},Ce={class:"mt-6 text-center"},De=["disabled"],Se={key:0,src:C,class:"w-5",alt:""},Be={key:1,class:""},Pe={key:2,class:""},Me={props:{isModalUpdateOpen:Boolean},emits:["close"],setup($,{emit:p}){const m=$,d=D(),w=v(()=>m.isModalUpdateOpen),_=()=>{a.tax="",a.profit_team="",a.profit_company="",p("close")},a=U({tax:"",profit_team:"",profit_company:""}),s=v(()=>d.getters["projectCost/getStateCost"]),r=y(!1),n=y(!1);function j(){s.value.data&&(s.value.data.tax=s.value.data.tax.toString().replace(/[^0-9]/g,""),s.value.data.profit_team=s.value.data.profit_team.toString().replace(/[^0-9]/g,""),s.value.data.profit_company=s.value.data.profit_company.toString().replace(/[^0-9]/g,""))}N(()=>{j()});const B=()=>{n.value=!0,r.value=!0,d.dispatch("projectCost/updateData",{id:s.value.data.id,tax:s.value.data.tax,profit_team:s.value.data.profit_team,profit_company:s.value.data.profit_company}).then(x=>{d.dispatch("projectCost/getDataProjectCost"),n.value=!1,r.value=!1,p("close")}).catch(x=>{n.value=!1,r.value=!1,a.tax=x.response.data.tax,a.profit_team=x.response.data.profit_team,a.profit_company=x.response.data.profit_company})};return console.log(s.value),(x,u)=>(o(),T(t(A),{as:"template",show:t(w)},{default:b(()=>[i(t(L),{as:"div",class:"fixed inset-0 z-10 overflow-y-auto",onClose:_},{default:b(()=>[e("div",H,[i(t(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:b(()=>[i(t(V),{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"})]),_:1}),I,i(t(S),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:b(()=>[e("div",K,[e("div",Q,[e("div",W,[e("div",X,[i(t(O),{class:"w-6 h-6 text-blueGray-800","aria-hidden":"true"})]),e("div",Z,[i(t(F),{as:"h3",class:"mt-2 text-lg leading-6 font-semi text-blueGray-700"},{default:b(()=>[ee]),_:1})])])]),e("div",te,[t(s).data?(o(),l("form",{key:0,onSubmit:E(B,["prevent"])},[e("div",ae,[oe,e("div",le,[g(e("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>t(s).data.tax=f),type:"text",class:"w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded-tl rounded-bl shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring",placeholder:"Backend Developer"},null,512),[[k,t(s).data.tax]]),re]),t(a).tax?(o(),l("span",ie,[e("div",de,[ne,e("div",ce,c(t(a).tax[0]),1)])])):h("",!0)]),e("div",pe,[ue,e("div",me,[g(e("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>t(s).data.profit_company=f),type:"text",class:"w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded-tl rounded-bl shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring",placeholder:"Backend Developer"},null,512),[[k,t(s).data.profit_company]]),xe]),t(a).profit_company?(o(),l("span",fe,[e("div",be,[he,e("div",_e,c(t(a).profit_company[0]),1)])])):h("",!0)]),e("div",we,[ve,e("div",ye,[g(e("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>t(s).data.profit_team=f),type:"text",class:"w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded-tl rounded-bl shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring",placeholder:"Backend Developer"},null,512),[[k,t(s).data.profit_team]]),ge]),t(a).profit_team?(o(),l("span",ke,[e("div",Ge,[$e,e("div",je,c(t(a).profit_team[0]),1)])])):h("",!0)]),e("div",Ce,[e("button",{disabled:r.value,class:z([[r.value?"":"active:bg-blueGray-600"],"flex w-full px-6 py-3 mb-1 mr-1 text-sm font-semibold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none disabled:opacity-50 place-content-center bg-blueGray-800 hover:shadow-lg focus:outline-none"]),type:"submit"},[n.value?(o(),l("img",Se)):h("",!0),n.value?(o(),l("span",Be," Menyimpan... ")):(o(),l("span",Pe," Simpan "))],10,De)])],40,se)):h("",!0)]),e("div",{class:"px-4 py-3 bg-blueGray-200 sm:px-6 sm:flex sm:flex-row-reverse"},[e("button",{type:"submit",class:"flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-blueGray-800 hover:bg-blueGray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:_}," Close ")])])]),_:1})])]),_:1})]),_:1},8,["show"]))}},Ue=e("noscript",null,"You need to enable JavaScript to run this app.",-1),Ne={id:"root"},Te={class:"relative md:ml-64"},Ve=R('<div class="relative pt-12 pb-32 bg-blueGray-800 md:pt-32"><div class="w-full px-4 mx-auto md:px-10"><div><div class="flex flex-wrap"><div class="w-full px-4"><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg"></div></div><div class="w-full px-4"><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg"></div></div><div class="w-full px-4"><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg"></div></div></div></div></div></div>',1),Oe={class:"w-full px-4 mx-auto -mt-40"},Fe={class:"flex flex-wrap mt-4"},ze={class:"w-full px-4 mb-12"},Ee={class:"relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"},Le={class:"block w-full overflow-x-auto"},Ae={class:"items-center w-full bg-transparent border-collapse"},qe=e("thead",{class:"bg-blueGray-300"},[e("tr",{class:"shadow-lg"},[e("th",{class:"px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap text-blueGray-500"}," # "),e("th",{class:"px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap text-blueGray-500"}," Pajak "),e("th",{class:"px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap text-blueGray-500"}," Profit Perusahaan "),e("th",{class:"px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap text-blueGray-500"}," Profit Team "),e("th",{class:"px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap text-blueGray-500"}," Aksi ")])],-1),Je={key:0},Re=e("td",{colspan:"6",class:"text-center"},"Tidak ada data",-1),Ye=[Re],He={key:1,class:"bg-blueGray-200"},Ie={class:"px-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"},Ke={class:"p-2 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"},Qe={class:"p-2 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"},We={class:"p-2 px-4 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"},Xe={class:"p-2 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"},Ze=["onClick"],et={key:1},tt=e("td",{colspan:"6",class:"text-center"},[e("div",{class:"flex justify-center"},[e("img",{class:"w-6 my-2",src:C,alt:""}),e("span",{class:"my-2"}," Loading data")])],-1),st=[tt],at=e("div",{class:"w-full px-4 mb-12"},[e("div",{class:"relative flex flex-col w-full min-w-0 mb-6 text-white break-words bg-pink-900 rounded shadow-lg"})],-1),it={setup($){const p=D();p.dispatch("projectCost/getDataProjectCost");const m=v(()=>p.getters["projectCost/getStateProjectCost"]),d=y(!1),w=a=>{d.value=!d.value,p.dispatch("projectCost/showData",a)},_=()=>{d.value=!d.value};return(a,s)=>(o(),l(G,null,[Ue,e("div",Ne,[i(Me,{isModalUpdateOpen:d.value,onClose:_},null,8,["isModalUpdateOpen"]),i(P),e("div",Te,[i(M),Ve,e("div",Oe,[e("div",Fe,[e("div",ze,[e("div",Ee,[e("div",Le,[e("table",Ae,[qe,t(m).data?(o(),l(G,{key:0},[t(m).data.length===0?(o(),l("tr",Je,Ye)):(o(),l("tbody",He,[(o(!0),l(G,null,J(t(m).data,(r,n)=>(o(),l("tr",{key:n},[e("td",Ie,c(n+1),1),e("td",Ke,c(r.tax)+"% ",1),e("td",Qe,c(r.profit_team)+"% ",1),e("td",We,c(r.profit_company)+"% ",1),e("td",Xe,[e("button",{onClick:j=>w(r.id),class:"px-1 py-1 text-white transition-colors duration-200 rounded bg-sky-500 hover:bg-sky-600 active:bg-sky-800"},[i(t(Y),{class:"w-5"})],8,Ze)])]))),128))]))],64)):(o(),l("tr",et,st))])])])]),at])])])])],64))}};export{it as default};
