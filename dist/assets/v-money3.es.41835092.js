var G=Object.defineProperty;var M=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var E=(t,e,n)=>e in t?G(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,v=(t,e)=>{for(var n in e||(e={}))H.call(e,n)&&E(t,n,e[n]);if(M)for(var n of M(e))J.call(e,n)&&E(t,n,e[n]);return t};import{ap as K,aq as Q,g as W,ar as X,as as Y,f as Z,at as _,v as ee,a5 as N,n as te,am as ne,au as ie,o as re}from"./vendor.3957acd4.js";var ae=Object.defineProperty,F=(t,e,n)=>(((i,r,u)=>{r in i?ae(i,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):i[r]=u})(t,typeof e!="symbol"?e+"":e,n),n),l={debug:!1,masked:!1,prefix:"",suffix:"",thousands:",",decimal:".",precision:2,disableNegative:!1,disabled:!1,min:null,max:null,allowBlank:!1,minimumNumberOfCharacters:0,modelModifiers:{number:!1},shouldRound:!0};const O=["+","-"],R=["decimal","thousands","prefix","suffix"];function m(t){return Math.max(0,Math.min(t,1e3))}function w(t,e){return t=t.padStart(e+1,"0"),e===0?t:`${t.slice(0,-e)}.${t.slice(-e)}`}function T(t){return(t=t?t.toString():"").replace(/\D+/g,"")||"0"}function b(t,e){return O.includes(t)?(console.warn(`v-money3 "${e}" property don't accept "${t}" as a value.`),!1):!/\d/g.test(t)||(console.warn(`v-money3 "${e}" property don't accept "${t}" (any number) as a value.`),!1)}function k(t){for(const e of R){t[e]=t[e].replace(/\d+/g,"");for(const n of O)t[e]=t[e].replaceAll(n,"")}return t}function P(t){return t.length-(t.indexOf(".")+1)}function A(t){return t.replace(/^(-?)0+(?!\.)(.+)/,"$1$2")}function D(t){return/^-?[\d]+$/g.test(t)}function I(t){return/^-?[\d]+(\.[\d]+)$/g.test(t)}function j(t,e,n){return e>t.length-1?t:t.substring(0,e)+n+t.substring(e+1)}function V(t,e){const n=e-P(t);if(n>=0)return t;let i=t.slice(0,n);const r=t.slice(n);if(i.charAt(i.length-1)==="."&&(i=i.slice(0,-1)),parseInt(r.charAt(0),10)>=5){for(let u=i.length-1;u>=0;u-=1){const o=i.charAt(u);if(o!=="."&&o!=="-"){const s=parseInt(o,10)+1;if(s<10)return j(i,u,s);i=j(i,u,"0")}}return`1${i}`}return i}function q(t){return new Event(t,{bubbles:!0,cancelable:!1})}function a({debug:t=!1},...e){t&&console.log(...e)}class B{constructor(e){F(this,"number",0n),F(this,"decimal",0),this.setNumber(e)}getNumber(){return this.number}getDecimalPrecision(){return this.decimal}setNumber(e){this.decimal=0,typeof e=="bigint"?this.number=e:typeof e=="number"?this.setupString(e.toString()):this.setupString(e)}toFixed(e=0,n=!0){let i=this.toString();const r=e-this.getDecimalPrecision();return r>0?(i.includes(".")||(i+="."),i.padEnd(i.length+r,"0")):r<0?n?V(i,e):i.slice(0,r):i}toString(){let e=this.number.toString();if(this.decimal){let n=!1;return e.charAt(0)==="-"&&(e=e.substring(1),n=!0),e=e.padStart(e.length+this.decimal,"0"),e=`${e.slice(0,-this.decimal)}.${e.slice(-this.decimal)}`,e=A(e),(n?"-":"")+e}return e}lessThan(e){const[n,i]=this.adjustComparisonNumbers(e);return n<i}biggerThan(e){const[n,i]=this.adjustComparisonNumbers(e);return n>i}isEqual(e){const[n,i]=this.adjustComparisonNumbers(e);return n===i}setupString(e){if(D(e=A(e)))this.number=BigInt(e);else{if(!I(e))throw new Error(`BigNumber has received and invalid format for the constructor: ${e}`);this.decimal=P(e),this.number=BigInt(e.replace(".",""))}}adjustComparisonNumbers(e){let n;n=e.constructor.name!=="BigNumber"?new B(e):e;const i=this.getDecimalPrecision()-n.getDecimalPrecision();let r=this.getNumber(),u=n.getNumber();return i>0?u=n.getNumber()*10n**BigInt(i):i<0&&(r=this.getNumber()*10n**BigInt(-1*i)),[r,u]}}function S(t,e=l,n=""){a(e,"utils format() - caller",n),a(e,"utils format() - input1",t),t==null?t="":typeof t=="number"?t=e.shouldRound?t.toFixed(m(e.precision)):t.toFixed(m(e.precision)+1).slice(0,-1):e.modelModifiers&&e.modelModifiers.number&&D(t)&&(t=Number(t).toFixed(m(e.precision))),a(e,"utils format() - input2",t);const i=e.disableNegative?"":t.indexOf("-")>=0?"-":"";let r=t.replace(e.prefix,"").replace(e.suffix,"");a(e,"utils format() - filtered",r),!e.precision&&e.thousands!=="."&&I(r)&&(r=V(r,0),a(e,"utils format() - !opt.precision && isValidFloat()",r));const u=T(r);a(e,"utils format() - numbers",u),a(e,"utils format() - numbersToCurrency",i+w(u,e.precision));const o=new B(i+w(u,e.precision));a(e,"utils format() - bigNumber1",o.toString()),e.max&&o.biggerThan(e.max)&&o.setNumber(e.max),e.min&&o.lessThan(e.min)&&o.setNumber(e.min);const s=o.toFixed(m(e.precision),e.shouldRound);if(a(e,"utils format() - bigNumber2",o.toFixed(m(e.precision))),/^0(\.0+)?$/g.test(s)&&e.allowBlank)return"";let[f,p]=s.split(".");const y=p!==void 0?p.length:0;f=f.padStart(e.minimumNumberOfCharacters-y,"0"),f=function(g,h){return g.replace(/(\d)(?=(?:\d{3})+\b)/gm,`$1${h}`)}(f,e.thousands);const x=e.prefix+function(g,h,d){return h?g+d+h:g}(f,p,e.decimal)+e.suffix;return a(e,"utils format() - output",x),x}function $(t,e=l,n=""){a(e,"utils unformat() - caller",n),a(e,"utils unformat() - input",t);const i=e.disableNegative?"":t.indexOf("-")>=0?"-":"",r=t.replace(e.prefix,"").replace(e.suffix,"");a(e,"utils unformat() - filtered",r);const u=T(r);a(e,"utils unformat() - numbers",u);const o=new B(i+w(u,e.precision));a(e,"utils unformat() - bigNumber1",u.toString()),e.max&&o.biggerThan(e.max)&&o.setNumber(e.max),e.min&&o.lessThan(e.min)&&o.setNumber(e.min);let s=o.toFixed(m(e.precision),e.shouldRound);return e.modelModifiers&&e.modelModifiers.number&&(s=parseFloat(s)),a(e,"utils unformat() - output",s),s}const C=(t,e,n)=>{if(a(e,"directive setValue() - caller",n),!function(r){for(const u of R)if(!b(r[u],u))return!1;return!0}(e))return void a(e,"directive setValue() - validateRestrictedOptions() return false. Stopping here...",t.value);let i=t.value.length-(t.selectionEnd||0);t.value=S(t.value,e,n),i=Math.max(i,e.suffix.length),i=t.value.length-i,i=Math.max(i,e.prefix.length),function(r,u){const o=()=>{r.setSelectionRange(u,u)};r===document.activeElement&&(o(),setTimeout(o,1))}(t,i),t.dispatchEvent(q("change"))},U=(t,e)=>{const n=t.currentTarget,i=t.code==="Backspace"||t.code==="Delete",r=n.value.length-(n.selectionEnd||0)==0;if(a(e,"directive onkeydown() - el.value",n.value),a(e,"directive onkeydown() - backspacePressed",i),a(e,"directive onkeydown() - isAtEndPosition",r),e.allowBlank&&i&&r&&$(n.value,e,"directive onkeydown allowBlank")===0&&(a(e,'directive onkeydown() - set el.value = ""',n.value),n.value="",n.dispatchEvent(q("change"))),a(e,"directive onkeydown() - e.key",t.key),t.key==="+"){a(e,"directive onkeydown() - unformat el.value",n.value);let u=$(n.value,e,"directive onkeydown +");typeof u=="string"&&(u=parseFloat(u)),u<0&&(n.value=String(-1*u))}},L=(t,e)=>{const n=t.currentTarget;a(e,"directive oninput()",n.value),/^[1-9]$/.test(n.value)&&(n.value=w(n.value,m(e.precision)),a(e,"directive oninput() - is 1-9",n.value)),C(n,e,"directive oninput")};var ue={mounted(t,e){if(!e.value)return;const n=k(v(v({},l),e.value));if(a(n,"directive mounted() - opt",n),t.tagName.toLocaleUpperCase()!=="INPUT"){const i=t.getElementsByTagName("input");i.length!==1||(t=i[0])}t.onkeydown=i=>{U(i,n)},t.oninput=i=>{L(i,n)},a(n,"directive mounted() - el.value",t.value),C(t,n,"directive mounted")},updated(t,e){if(!e.value)return;const n=k(v(v({},l),e.value));t.onkeydown=i=>{U(i,n)},t.oninput=i=>{L(i,n)},a(n,"directive updated() - el.value",t.value),a(n,"directive updated() - opt",n),C(t,n,"directive updated")},beforeUnmount(t){t.onkeydown=null,t.oninput=null,t.onfocus=null}};const oe=["id","value","disabled"],de=K({inheritAttrs:!1,name:"Money3",directives:{money3:ue},props:{debug:{required:!1,type:Boolean,default:!1},id:{required:!1,type:[Number,String],default:()=>{const t=ie();return t?t.uid:null}},modelValue:{required:!0,type:[Number,String]},modelModifiers:{required:!1,type:Object,default:()=>({number:!1})},masked:{type:Boolean,default:!1},precision:{type:Number,default:()=>l.precision},decimal:{type:String,default:()=>l.decimal,validator:t=>b(t,"decimal")},thousands:{type:String,default:()=>l.thousands,validator:t=>b(t,"thousands")},prefix:{type:String,default:()=>l.prefix,validator:t=>b(t,"prefix")},suffix:{type:String,default:()=>l.suffix,validator:t=>b(t,"suffix")},disableNegative:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},max:{type:[Number,String],default:()=>l.max},min:{type:[Number,String],default:()=>l.min},allowBlank:{type:Boolean,default:()=>l.allowBlank},minimumNumberOfCharacters:{type:Number,default:()=>l.minimumNumberOfCharacters},shouldRound:{type:Boolean,default:()=>l.shouldRound}},emits:["update:model-value"],setup:function(t,{emit:e}){const n=t,{modelValue:i,modelModifiers:r,masked:u,precision:o,shouldRound:s}=Q(n);a(n,"component setup()",n);let f=i.value;r.value&&r.value.number&&(f=s.value?Number(i.value).toFixed(m(o.value)):Number(i.value).toFixed(m(o.value)+1).slice(0,-1));const p=W(S(f,n,"component setup"));a(n,"component setup() - data.formattedValue",p.value),X(i,function(d){a(n,"component watch() -> value",d);const c=S(d,k(v({},n)),"component watch");c!==p.value&&(a(n,"component watch() changed -> formatted",c),p.value=c)});let y=null;function x(d){let c;a(n,"component change() -> evt.target.value",d.target.value),c=u.value&&!r.value.number?d.target.value:$(d.target.value,k(v({},n)),"component change"),c!==y&&(y=c,a(n,"component change() -> update:model-value",c),e("update:model-value",c))}const g=Y(),h=Z(()=>{const d=v({},g);return delete d["onUpdate:modelValue"],d});return(d,c)=>{const z=_("money3");return ee((re(),te("input",ne({id:n.id},N(h),{type:"tel",class:"v-money3",value:p.value,disabled:n.disabled,onChange:x}),null,16,oe)),[[z,{precision:N(o),decimal:n.decimal,thousands:n.thousands,prefix:n.prefix,suffix:n.suffix,disableNegative:n.disableNegative,min:n.min,max:n.max,allowBlank:n.allowBlank,minimumNumberOfCharacters:n.minimumNumberOfCharacters,debug:n.debug,modelModifiers:N(r),shouldRound:N(s)}]])}}});export{de as D};
