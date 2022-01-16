import{a as T,S as z}from"./index.fca0dee2.js";import{N as H}from"./Navbar.c7d65aa1.js";import{f as G,g as _,l as M,m as R,r as A,o as r,c as D,w as b,h as i,i as e,a5 as t,T as P,a as J,ao as q,b as E,n as d,a7 as F,ab as Y,t as c,ac as Z,V as K,a8 as Q,a6 as j,af as U,a9 as W,y as S,p as g,v as V,x as N,q as X,D as ee,d as te,j as se,av as ae,z as oe,Z as O,aj as le}from"./vendor.3957acd4.js";const re={class:"flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"},ie=e("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true"},"\u200B",-1),de={class:"inline-block w-full max-w-xl overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-0 sm:align-middle sm:max-w-xl sm:w-full"},ne={class:"px-4 pt-5 pb-4 bg-blueGray-200 sm:p-6 sm:pb-4"},ce={class:"sm:flex sm:items-start"},ue={class:"flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto rounded-full bg-blueGray-400 sm:mx-0 sm:h-10 sm:w-10"},be={class:"flex-1 mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},pe=se("Ubah Template Pesan"),me={class:"w-full px-5 bg-blueGray-200"},xe=["onSubmit"],fe={class:"relative w-full mb-3"},_e=e("label",{class:"block mb-2 text-xs font-semibold uppercase text-blueGray-600",for:"grid-password"},"Set Hari Sebelum Jatuh Tempo",-1),he={class:"relative mt-1"},ve={class:"block text-sm truncate text-blueGray-600"},ge={class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},ye={key:0,class:"absolute inset-y-0 left-0 flex items-center pl-3 text-blueGray-600"},we={class:"relative w-full mb-3"},ke=e("label",{class:"block mb-2 text-xs font-semibold uppercase text-blueGray-600",for:"grid-password"},"Tanggal Dikirim",-1),$e={key:0},Ge={class:"flex items-center justify-start pt-2 font-medium text-red-600"},je=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5 mr-1 feather feather-alert-octagon"},[e("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})])],-1),Ce={class:"flex-initial max-w-full text-xs font-normal"},Se={class:"relative w-full mb-3"},Be=e("label",{class:"block mb-2 text-xs font-semibold uppercase text-blueGray-600",for:"grid-password"},"Pesan",-1),Te={class:"space-x-2"},Me={key:0},De={class:"flex items-center justify-start pt-2 font-medium text-red-600"},Pe=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5 mr-1 feather feather-alert-octagon"},[e("polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}),e("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),e("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"})])],-1),Ue={class:"flex-initial max-w-full text-xs font-normal"},Ve={class:"mt-6 text-center"},Ne=["disabled"],Oe={key:0,src:T,class:"w-5",alt:""},Le={key:1,class:""},Ie={key:2,class:""},ze={props:{isModalUpdateOpen:Boolean},emits:["close"],setup(B,{emit:h}){const m=B,x=G(()=>m.isModalUpdateOpen);G(()=>m.content);const f=_(null),k=()=>{n.before_due="",n.message="",h("close")},p=_(!1),v=_(!1),o=M(),n=R({before_due:"",message:"",start_date:""}),l=G(()=>o.getters["reminder/getStateBill"]),L=()=>{v.value=!0,p.value=!0,o.dispatch("reminder/updateData",{id:l.value.data.id,message:l.value.data.message,before_due:l.value.data.before_due,start_date:l.value.data.start_date}).then(u=>{o.dispatch("project/monthlyProjects"),v.value=!1,p.value=!1,l.value.data.before_due="",l.value.data.message="",l.value.data.start_date="",n.before_due="",n.start_date="",n.message="",h("close")}).catch(u=>{v.value=!1,p.value=!1,n.before_due=u.response.data.before_due,n.message=u.response.data.message,n.start_date=u.response.data.start_date})};function y(u){if(!u.length===null)return;let a=f.value.value,C=a.length,s=f.value.selectionStart;s===void 0&&(s=0);const w=a.substr(0,s),$=a.substr(s,C);l.value.data.message=w+u+$,ae().then(()=>{f.value.selectionStart=s+u.length,f.value.focus()})}_(null);const I=_([0,1,2,3,4,5]);return(u,a)=>{const C=A("CheckIcon");return r(),D(t(te),{as:"template",show:t(x)},{default:b(()=>[i(t(ee),{as:"div",class:"fixed inset-0 z-10 overflow-y-auto",onClose:k},{default:b(()=>[e("div",re,[i(t(P),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:b(()=>[i(t(J),{class:"fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"})]),_:1}),ie,i(t(P),{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:b(()=>[e("div",de,[e("div",ne,[e("div",ce,[e("div",ue,[i(t(q),{class:"w-6 h-6 text-blueGray-800","aria-hidden":"true"})]),e("div",be,[i(t(E),{as:"h3",class:"mt-2 text-lg leading-6 font-semi text-blueGray-700"},{default:b(()=>[pe]),_:1})])])]),e("div",me,[t(l).data?(r(),d("form",{key:0,onSubmit:X(L,["prevent"])},[e("div",fe,[_e,i(t(F),{modelValue:t(l).data.before_due,"onUpdate:modelValue":a[1]||(a[1]=s=>t(l).data.before_due=s)},{default:b(()=>[e("div",he,[i(t(Y),{class:"relative block w-full py-3 pl-3 pr-10 text-left rounded-md shadow cursor-default focus:truncate bg-blueGray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"},{default:b(()=>[e("span",ve,c(t(l).data.before_due)+" Hari",1),e("span",ge,[i(t(Z),{class:"w-5 h-5 text-blueGray-400","aria-hidden":"true"})])]),_:1}),i(K,{"leave-active-class":"transition duration-100 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:b(()=>[i(t(Q),{class:"absolute z-50 w-full py-1 mt-1 overflow-auto text-base truncate bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:b(()=>[(r(!0),d(j,null,U(I.value,s=>(r(),D(t(W),{key:s,value:s,as:"template"},{default:b(({active:w,selected:$})=>[e("li",{class:S([w?"text-blueGray-800 bg-blueGray-200":"text-blueGray-800","cursor-default select-none relative py-2 pl-10 pr-4"])},[e("span",{onClick:a[0]||(a[0]=wt=>u.changeBeforeDue(t(l).id)),class:S([$?"font-medium":"font-normal","block truncate"])},c(s)+" Hari",3),$?(r(),d("span",ye,[i(C,{class:"w-5 h-5","aria-hidden":"true"})])):g("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"])]),e("div",we,[ke,V(e("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>t(l).data.start_date=s),type:"date",class:"relative w-full py-3 pl-3 pr-10 text-left bg-white rounded shadow cursor-default text-blueGray-600 focus:ring focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"},null,512),[[N,t(l).data.start_date]]),t(n).start_date?(r(),d("span",$e,[e("div",Ge,[je,e("div",Ce,c(t(n).start_date[0]),1)])])):g("",!0)]),e("div",Se,[Be,V(e("textarea",{"onUpdate:modelValue":a[3]||(a[3]=s=>t(l).data.message=s),class:"w-full text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring",ref:(s,w)=>{w.messageInputRef=s,f.value=s},rows:"7"},null,512),[[N,t(l).data.message]]),e("div",Te,[e("button",{type:"button",onClick:a[4]||(a[4]=s=>y("{_pic_}")),class:"px-3 py-1 font-semibold text-white rounded bg-blueGray-800"},"PIC"),e("button",{type:"button",onClick:a[5]||(a[5]=s=>y("{_tanggalbayar_}")),class:"px-3 py-1 font-semibold text-white rounded bg-blueGray-800"},"Tanggal Bayar"),e("button",{type:"button",onClick:a[6]||(a[6]=s=>y("{_angka_}")),class:"px-3 py-1 font-semibold text-white rounded bg-blueGray-800"},"Hari"),e("button",{type:"button",onClick:a[7]||(a[7]=s=>y("{_projek_}")),class:"px-3 py-1 font-semibold text-white rounded bg-blueGray-800"},"Projek"),e("button",{type:"button",onClick:a[8]||(a[8]=s=>y("{_nominal_}")),class:"px-3 py-1 font-semibold text-white rounded bg-blueGray-800"},"Nominal")]),t(n).message?(r(),d("span",Me,[e("div",De,[Pe,e("div",Ue,c(t(n).message[0]),1)])])):g("",!0)]),e("div",Ve,[e("button",{disabled:p.value,class:S([[p.value?"":"active:bg-blueGray-600"],"flex w-full px-6 py-3 mb-1 mr-1 text-sm font-semibold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none disabled:opacity-50 place-content-center bg-blueGray-800 hover:shadow-lg focus:outline-none"]),type:"submit"},[v.value?(r(),d("img",Oe)):g("",!0),v.value?(r(),d("span",Le,"Menyimpan...")):(r(),d("span",Ie,"Simpan"))],10,Ne)])],40,xe)):g("",!0)]),e("div",{class:"px-4 py-3 bg-blueGray-200 sm:px-6 sm:flex sm:flex-row-reverse"},[e("button",{type:"submit",class:"flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-blueGray-800 hover:bg-blueGray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:k},"Close")])])]),_:1})])]),_:1})]),_:1},8,["show"])}}},He=e("noscript",null,"You need to enable JavaScript to run this app.",-1),Re={id:"root"},Ae={class:"relative md:ml-64"},Je=oe('<div class="relative pt-12 pb-32 bg-blueGray-800 md:pt-32"><div class="w-full px-4 mx-auto md:px-10"><div><div class="flex flex-wrap"><div class="w-full px-4"><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-lg"></div></div><div class="w-full px-4"><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg"></div></div><div class="w-full px-4"><div class="relative flex flex-col min-w-0 mb-6 break-words bg-white rounded shadow-lg"></div></div><div class="flex items-center px-4"></div></div></div></div></div>',1),qe={class:"w-full px-4 mx-auto -mt-40"},Ee={class:"flex flex-wrap mt-4"},Fe={class:"w-full px-4 mb-12"},Ye={class:"relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"},Ze={class:"block w-full overflow-x-auto"},Ke={class:"items-center w-full bg-transparent border-collapse"},Qe=e("thead",{class:"bg-blueGray-300"},[e("tr",{class:"shadow-lg"},[e("th",{class:"px-4 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-blueGray-500"},"#"),e("th",{class:"px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-blueGray-500"},"Project"),e("th",{class:"px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-blueGray-500"},"Client"),e("th",{class:"px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-blueGray-500"},"Pic"),e("th",{class:"px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-blueGray-500"},"Pesan"),e("th",{class:"px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-blueGray-500"},"No. Telp"),e("th",{class:"px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-blueGray-500"},"Tanggal Mulai Dikirim"),e("th",{class:"px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-blueGray-500"},"Bulan Berikutnya"),e("th",{class:"px-2 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-blueGray-500"},"Aksi")])],-1),We={key:0},Xe=e("td",{colspan:"9",class:"p-2 text-center"},"Tidak ada data",-1),et=[Xe],tt={key:1,class:"bg-blueGray-200"},st={class:"px-4 text-xs align-middle border-t-0 border-l-0 border-r-0"},at={class:"px-2 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 text-blueGray-600"},ot={class:"px-2 text-xs align-middle border-t-0 border-l-0 border-r-0"},lt={class:"px-2 text-xs align-middle border-t-0 border-l-0 border-r-0"},rt={class:"px-2 text-xs align-middle border-t-0 border-l-0 border-r-0"},it={class:"px-2 text-xs align-middle border-t-0 border-l-0 border-r-0"},dt={class:"px-2 text-xs align-middle border-t-0 border-l-0 border-r-0"},nt={class:"px-2 text-xs align-middle border-t-0 border-l-0 border-r-0"},ct={class:"py-4 text-xs align-middle border-t-0 border-l-0 border-r-0"},ut={class:""},bt=["onClick"],pt={class:"flex mx-2"},mt=e("div",{class:"mt-1"},"Pesan",-1),xt={key:0},ft=e("td",{colspan:"7",class:"py-3 leading-6 text-center font-semi"},"Data tidak tersedia",-1),_t=[ft],ht={key:1},vt=e("td",{colspan:"8",class:"text-center"},[e("div",{class:"flex justify-center"},[e("img",{class:"w-6 my-2",src:T,alt:""}),e("span",{class:"my-2"},"Loading data")])],-1),gt=[vt],yt=e("div",{class:"w-full px-4 mb-12"},[e("div",{class:"relative flex flex-col w-full min-w-0 mb-6 text-white break-words bg-pink-900 rounded shadow-lg"})],-1),jt={setup(B){const h=M();h.dispatch("project/monthlyProjects");const m=G(()=>h.getters["project/getMonthlyProjectsState"]),x=_(!1),f=p=>{h.dispatch("reminder/getSpecificBill",p),x.value=!x.value},k=()=>{x.value=!x.value};return _([1,2,3,4,5]),(p,v)=>(r(),d(j,null,[He,e("div",Re,[i(ze,{isModalUpdateOpen:x.value,onClose:k},null,8,["isModalUpdateOpen"]),i(z),e("div",Ae,[i(H),Je,e("div",qe,[e("div",Ee,[e("div",Fe,[e("div",Ye,[e("div",Ze,[e("table",Ke,[Qe,t(m).data?(r(),d(j,{key:0},[t(m).data.length===0?(r(),d("tr",We,et)):(r(),d("tbody",tt,[(r(!0),d(j,null,U(t(m).data,(o,n)=>(r(),d("tr",{key:n},[e("td",st,c(n+1),1),e("th",at,c(o.project&&o.project.name),1),e("td",ot,c(o.client&&o.client.company_name),1),e("td",lt,c(o.client&&o.pic.name)+" - "+c(o.client&&o.pic.position),1),e("td",rt,c(o.message??"Belum ada template pesan"),1),e("td",it,c(o.client&&o.pic.phone_number),1),e("td",dt,c(t(O)(o.start_date).format("ll")),1),e("td",nt,c(t(O)(o.due_date).format("ll")),1),e("td",ct,[e("div",ut,[e("button",{onClick:l=>f(o.id),class:"px-1 py-1 text-white transition-colors duration-200 bg-sky-500 hover:bg-sky-600 active:bg-sky-800"},[e("div",pt,[e("div",null,[i(t(le),{class:"w-5"})]),mt])],8,bt)])])]))),128)),t(m)===null?(r(),d("tr",xt,_t)):g("",!0)]))],64)):(r(),d("tr",ht,gt))])])])]),yt])])])])],64))}};export{jt as default};