var Ht=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var st=(t,e,s)=>(Ht(t,e,"read from private field"),s?s.call(t):e.get(t)),rt=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},gt=(t,e,s,u)=>(Ht(t,e,"write to private field"),u?u.call(t,s):e.set(t,s),s);var Et=(t,e,s)=>(Ht(t,e,"access private method"),s);import"react";import"react/jsx-runtime";import{S as Ct,K as Jt,L as Xt,M as Tt,N as nt,O as vt,P as tr,I as er,w as rr}from"../client-entry.js";import{n as ie}from"./utils.7bbdc671.js";import"./index.35d9fe77.js";function nr(t,e){for(var s=-1,u=t==null?0:t.length,a=Array(u);++s<u;)a[s]=e(t[s],s,t);return a}var ir=Array.isArray;const q=ir;var sr=1/0,se=Ct?Ct.prototype:void 0,oe=se?se.toString:void 0;function Ee(t){if(typeof t=="string")return t;if(q(t))return nr(t,Ee)+"";if(Jt(t))return oe?oe.call(t):"";var e=t+"";return e=="0"&&1/t==-sr?"-0":e}function or(t){return t}var fr="[object AsyncFunction]",ur="[object Function]",ar="[object GeneratorFunction]",hr="[object Proxy]";function Se(t){if(!Xt(t))return!1;var e=Tt(t);return e==ur||e==ar||e==fr||e==hr}var lr=nt["__core-js_shared__"];const Bt=lr;var fe=function(){var t=/[^.]+$/.exec(Bt&&Bt.keys&&Bt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function cr(t){return!!fe&&fe in t}var dr=Function.prototype,pr=dr.toString;function ut(t){if(t!=null){try{return pr.call(t)}catch{}try{return t+""}catch{}}return""}var gr=/[\\^$.*+?()[\]{}|]/g,yr=/^\[object .+?Constructor\]$/,vr=Function.prototype,_r=Object.prototype,wr=vr.toString,xr=_r.hasOwnProperty,Ar=RegExp("^"+wr.call(xr).replace(gr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Or(t){if(!Xt(t)||cr(t))return!1;var e=Se(t)?Ar:yr;return e.test(ut(t))}function Tr(t,e){return t==null?void 0:t[e]}function dt(t,e){var s=Tr(t,e);return Or(s)?s:void 0}var Pr=dt(nt,"WeakMap");const bt=Pr;function $r(){}function Ir(t,e,s,u){for(var a=t.length,l=s+(u?1:-1);u?l--:++l<a;)if(e(t[l],l,t))return l;return-1}function mr(t){return t!==t}function Er(t,e,s){for(var u=s-1,a=t.length;++u<a;)if(t[u]===e)return u;return-1}function Sr(t,e,s){return e===e?Er(t,e,s):Ir(t,mr,s)}function Cr(t,e){var s=t==null?0:t.length;return!!s&&Sr(t,e,0)>-1}var jr=9007199254740991,Mr=/^(?:0|[1-9]\d*)$/;function Ce(t,e){var s=typeof t;return e=e==null?jr:e,!!e&&(s=="number"||s!="symbol"&&Mr.test(t))&&t>-1&&t%1==0&&t<e}function je(t,e){return t===e||t!==t&&e!==e}var Rr=9007199254740991;function Zt(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Rr}function Fr(t){return t!=null&&Zt(t.length)&&!Se(t)}var Lr=Object.prototype;function Dr(t){var e=t&&t.constructor,s=typeof e=="function"&&e.prototype||Lr;return t===s}function Nr(t,e){for(var s=-1,u=Array(t);++s<t;)u[s]=e(s);return u}var Gr="[object Arguments]";function ue(t){return vt(t)&&Tt(t)==Gr}var Me=Object.prototype,Hr=Me.hasOwnProperty,Br=Me.propertyIsEnumerable,Ur=ue(function(){return arguments}())?ue:function(t){return vt(t)&&Hr.call(t,"callee")&&!Br.call(t,"callee")};const Re=Ur;function zr(){return!1}var Fe=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ae=Fe&&typeof module=="object"&&module&&!module.nodeType&&module,br=ae&&ae.exports===Fe,he=br?nt.Buffer:void 0,Wr=he?he.isBuffer:void 0,Kr=Wr||zr;const Wt=Kr;var Yr="[object Arguments]",Jr="[object Array]",Xr="[object Boolean]",Zr="[object Date]",Qr="[object Error]",Vr="[object Function]",qr="[object Map]",kr="[object Number]",tn="[object Object]",en="[object RegExp]",rn="[object Set]",nn="[object String]",sn="[object WeakMap]",on="[object ArrayBuffer]",fn="[object DataView]",un="[object Float32Array]",an="[object Float64Array]",hn="[object Int8Array]",ln="[object Int16Array]",cn="[object Int32Array]",dn="[object Uint8Array]",pn="[object Uint8ClampedArray]",gn="[object Uint16Array]",yn="[object Uint32Array]",j={};j[un]=j[an]=j[hn]=j[ln]=j[cn]=j[dn]=j[pn]=j[gn]=j[yn]=!0;j[Yr]=j[Jr]=j[on]=j[Xr]=j[fn]=j[Zr]=j[Qr]=j[Vr]=j[qr]=j[kr]=j[tn]=j[en]=j[rn]=j[nn]=j[sn]=!1;function vn(t){return vt(t)&&Zt(t.length)&&!!j[Tt(t)]}function _n(t){return function(e){return t(e)}}var Le=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yt=Le&&typeof module=="object"&&module&&!module.nodeType&&module,wn=yt&&yt.exports===Le,Ut=wn&&tr.process,xn=function(){try{var t=yt&&yt.require&&yt.require("util").types;return t||Ut&&Ut.binding&&Ut.binding("util")}catch{}}();const le=xn;var ce=le&&le.isTypedArray,An=ce?_n(ce):vn;const De=An;var On=Object.prototype,Tn=On.hasOwnProperty;function Pn(t,e){var s=q(t),u=!s&&Re(t),a=!s&&!u&&Wt(t),l=!s&&!u&&!a&&De(t),_=s||u||a||l,x=_?Nr(t.length,String):[],T=x.length;for(var I in t)(e||Tn.call(t,I))&&!(_&&(I=="length"||a&&(I=="offset"||I=="parent")||l&&(I=="buffer"||I=="byteLength"||I=="byteOffset")||Ce(I,T)))&&x.push(I);return x}function $n(t,e){return function(s){return t(e(s))}}var In=$n(Object.keys,Object);const mn=In;var En=Object.prototype,Sn=En.hasOwnProperty;function Cn(t){if(!Dr(t))return mn(t);var e=[];for(var s in Object(t))Sn.call(t,s)&&s!="constructor"&&e.push(s);return e}function Ne(t){return Fr(t)?Pn(t):Cn(t)}var jn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Mn=/^\w*$/;function Qt(t,e){if(q(t))return!1;var s=typeof t;return s=="number"||s=="symbol"||s=="boolean"||t==null||Jt(t)?!0:Mn.test(t)||!jn.test(t)||e!=null&&t in Object(e)}var Rn=dt(Object,"create");const _t=Rn;function Fn(){this.__data__=_t?_t(null):{},this.size=0}function Ln(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Dn="__lodash_hash_undefined__",Nn=Object.prototype,Gn=Nn.hasOwnProperty;function Hn(t){var e=this.__data__;if(_t){var s=e[t];return s===Dn?void 0:s}return Gn.call(e,t)?e[t]:void 0}var Bn=Object.prototype,Un=Bn.hasOwnProperty;function zn(t){var e=this.__data__;return _t?e[t]!==void 0:Un.call(e,t)}var bn="__lodash_hash_undefined__";function Wn(t,e){var s=this.__data__;return this.size+=this.has(t)?0:1,s[t]=_t&&e===void 0?bn:e,this}function ft(t){var e=-1,s=t==null?0:t.length;for(this.clear();++e<s;){var u=t[e];this.set(u[0],u[1])}}ft.prototype.clear=Fn;ft.prototype.delete=Ln;ft.prototype.get=Hn;ft.prototype.has=zn;ft.prototype.set=Wn;function Kn(){this.__data__=[],this.size=0}function Ft(t,e){for(var s=t.length;s--;)if(je(t[s][0],e))return s;return-1}var Yn=Array.prototype,Jn=Yn.splice;function Xn(t){var e=this.__data__,s=Ft(e,t);if(s<0)return!1;var u=e.length-1;return s==u?e.pop():Jn.call(e,s,1),--this.size,!0}function Zn(t){var e=this.__data__,s=Ft(e,t);return s<0?void 0:e[s][1]}function Qn(t){return Ft(this.__data__,t)>-1}function Vn(t,e){var s=this.__data__,u=Ft(s,t);return u<0?(++this.size,s.push([t,e])):s[u][1]=e,this}function k(t){var e=-1,s=t==null?0:t.length;for(this.clear();++e<s;){var u=t[e];this.set(u[0],u[1])}}k.prototype.clear=Kn;k.prototype.delete=Xn;k.prototype.get=Zn;k.prototype.has=Qn;k.prototype.set=Vn;var qn=dt(nt,"Map");const wt=qn;function kn(){this.size=0,this.__data__={hash:new ft,map:new(wt||k),string:new ft}}function ti(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Lt(t,e){var s=t.__data__;return ti(e)?s[typeof e=="string"?"string":"hash"]:s.map}function ei(t){var e=Lt(this,t).delete(t);return this.size-=e?1:0,e}function ri(t){return Lt(this,t).get(t)}function ni(t){return Lt(this,t).has(t)}function ii(t,e){var s=Lt(this,t),u=s.size;return s.set(t,e),this.size+=s.size==u?0:1,this}function tt(t){var e=-1,s=t==null?0:t.length;for(this.clear();++e<s;){var u=t[e];this.set(u[0],u[1])}}tt.prototype.clear=kn;tt.prototype.delete=ei;tt.prototype.get=ri;tt.prototype.has=ni;tt.prototype.set=ii;var si="Expected a function";function Vt(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(si);var s=function(){var u=arguments,a=e?e.apply(this,u):u[0],l=s.cache;if(l.has(a))return l.get(a);var _=t.apply(this,u);return s.cache=l.set(a,_)||l,_};return s.cache=new(Vt.Cache||tt),s}Vt.Cache=tt;var oi=500;function fi(t){var e=Vt(t,function(u){return s.size===oi&&s.clear(),u}),s=e.cache;return e}var ui=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ai=/\\(\\)?/g,hi=fi(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(ui,function(s,u,a,l){e.push(a?l.replace(ai,"$1"):u||s)}),e});const li=hi;function ci(t){return t==null?"":Ee(t)}function Ge(t,e){return q(t)?t:Qt(t,e)?[t]:li(ci(t))}var di=1/0;function Dt(t){if(typeof t=="string"||Jt(t))return t;var e=t+"";return e=="0"&&1/t==-di?"-0":e}function He(t,e){e=Ge(e,t);for(var s=0,u=e.length;t!=null&&s<u;)t=t[Dt(e[s++])];return s&&s==u?t:void 0}function pi(t,e,s){var u=t==null?void 0:He(t,e);return u===void 0?s:u}function gi(t,e){for(var s=-1,u=e.length,a=t.length;++s<u;)t[a+s]=e[s];return t}function yi(){this.__data__=new k,this.size=0}function vi(t){var e=this.__data__,s=e.delete(t);return this.size=e.size,s}function _i(t){return this.__data__.get(t)}function wi(t){return this.__data__.has(t)}var xi=200;function Ai(t,e){var s=this.__data__;if(s instanceof k){var u=s.__data__;if(!wt||u.length<xi-1)return u.push([t,e]),this.size=++s.size,this;s=this.__data__=new tt(u)}return s.set(t,e),this.size=s.size,this}function V(t){var e=this.__data__=new k(t);this.size=e.size}V.prototype.clear=yi;V.prototype.delete=vi;V.prototype.get=_i;V.prototype.has=wi;V.prototype.set=Ai;function Oi(t,e){for(var s=-1,u=t==null?0:t.length,a=0,l=[];++s<u;){var _=t[s];e(_,s,t)&&(l[a++]=_)}return l}function Ti(){return[]}var Pi=Object.prototype,$i=Pi.propertyIsEnumerable,de=Object.getOwnPropertySymbols,Ii=de?function(t){return t==null?[]:(t=Object(t),Oi(de(t),function(e){return $i.call(t,e)}))}:Ti;const mi=Ii;function Ei(t,e,s){var u=e(t);return q(t)?u:gi(u,s(t))}function pe(t){return Ei(t,Ne,mi)}var Si=dt(nt,"DataView");const Kt=Si;var Ci=dt(nt,"Promise");const Yt=Ci;var ji=dt(nt,"Set");const ht=ji;var ge="[object Map]",Mi="[object Object]",ye="[object Promise]",ve="[object Set]",_e="[object WeakMap]",we="[object DataView]",Ri=ut(Kt),Fi=ut(wt),Li=ut(Yt),Di=ut(ht),Ni=ut(bt),ot=Tt;(Kt&&ot(new Kt(new ArrayBuffer(1)))!=we||wt&&ot(new wt)!=ge||Yt&&ot(Yt.resolve())!=ye||ht&&ot(new ht)!=ve||bt&&ot(new bt)!=_e)&&(ot=function(t){var e=Tt(t),s=e==Mi?t.constructor:void 0,u=s?ut(s):"";if(u)switch(u){case Ri:return we;case Fi:return ge;case Li:return ye;case Di:return ve;case Ni:return _e}return e});const xe=ot;var Gi=nt.Uint8Array;const Ae=Gi;var Hi="__lodash_hash_undefined__";function Bi(t){return this.__data__.set(t,Hi),this}function Ui(t){return this.__data__.has(t)}function xt(t){var e=-1,s=t==null?0:t.length;for(this.__data__=new tt;++e<s;)this.add(t[e])}xt.prototype.add=xt.prototype.push=Bi;xt.prototype.has=Ui;function zi(t,e){for(var s=-1,u=t==null?0:t.length;++s<u;)if(e(t[s],s,t))return!0;return!1}function Be(t,e){return t.has(e)}var bi=1,Wi=2;function Ue(t,e,s,u,a,l){var _=s&bi,x=t.length,T=e.length;if(x!=T&&!(_&&T>x))return!1;var I=l.get(t),v=l.get(e);if(I&&v)return I==e&&v==t;var S=-1,E=!0,H=s&Wi?new xt:void 0;for(l.set(t,e),l.set(e,t);++S<x;){var L=t[S],B=e[S];if(u)var K=_?u(B,L,S,e,t,l):u(L,B,S,t,e,l);if(K!==void 0){if(K)continue;E=!1;break}if(H){if(!zi(e,function(Z,b){if(!Be(H,b)&&(L===Z||a(L,Z,s,u,l)))return H.push(b)})){E=!1;break}}else if(!(L===B||a(L,B,s,u,l))){E=!1;break}}return l.delete(t),l.delete(e),E}function Ki(t){var e=-1,s=Array(t.size);return t.forEach(function(u,a){s[++e]=[a,u]}),s}function qt(t){var e=-1,s=Array(t.size);return t.forEach(function(u){s[++e]=u}),s}var Yi=1,Ji=2,Xi="[object Boolean]",Zi="[object Date]",Qi="[object Error]",Vi="[object Map]",qi="[object Number]",ki="[object RegExp]",ts="[object Set]",es="[object String]",rs="[object Symbol]",ns="[object ArrayBuffer]",is="[object DataView]",Oe=Ct?Ct.prototype:void 0,zt=Oe?Oe.valueOf:void 0;function ss(t,e,s,u,a,l,_){switch(s){case is:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case ns:return!(t.byteLength!=e.byteLength||!l(new Ae(t),new Ae(e)));case Xi:case Zi:case qi:return je(+t,+e);case Qi:return t.name==e.name&&t.message==e.message;case ki:case es:return t==e+"";case Vi:var x=Ki;case ts:var T=u&Yi;if(x||(x=qt),t.size!=e.size&&!T)return!1;var I=_.get(t);if(I)return I==e;u|=Ji,_.set(t,e);var v=Ue(x(t),x(e),u,a,l,_);return _.delete(t),v;case rs:if(zt)return zt.call(t)==zt.call(e)}return!1}var os=1,fs=Object.prototype,us=fs.hasOwnProperty;function as(t,e,s,u,a,l){var _=s&os,x=pe(t),T=x.length,I=pe(e),v=I.length;if(T!=v&&!_)return!1;for(var S=T;S--;){var E=x[S];if(!(_?E in e:us.call(e,E)))return!1}var H=l.get(t),L=l.get(e);if(H&&L)return H==e&&L==t;var B=!0;l.set(t,e),l.set(e,t);for(var K=_;++S<T;){E=x[S];var Z=t[E],b=e[E];if(u)var pt=_?u(b,Z,E,e,t,l):u(Z,b,E,t,e,l);if(!(pt===void 0?Z===b||a(Z,b,s,u,l):pt)){B=!1;break}K||(K=E=="constructor")}if(B&&!K){var U=t.constructor,N=e.constructor;U!=N&&"constructor"in t&&"constructor"in e&&!(typeof U=="function"&&U instanceof U&&typeof N=="function"&&N instanceof N)&&(B=!1)}return l.delete(t),l.delete(e),B}var hs=1,Te="[object Arguments]",Pe="[object Array]",St="[object Object]",ls=Object.prototype,$e=ls.hasOwnProperty;function cs(t,e,s,u,a,l){var _=q(t),x=q(e),T=_?Pe:xe(t),I=x?Pe:xe(e);T=T==Te?St:T,I=I==Te?St:I;var v=T==St,S=I==St,E=T==I;if(E&&Wt(t)){if(!Wt(e))return!1;_=!0,v=!1}if(E&&!v)return l||(l=new V),_||De(t)?Ue(t,e,s,u,a,l):ss(t,e,T,s,u,a,l);if(!(s&hs)){var H=v&&$e.call(t,"__wrapped__"),L=S&&$e.call(e,"__wrapped__");if(H||L){var B=H?t.value():t,K=L?e.value():e;return l||(l=new V),a(B,K,s,u,l)}}return E?(l||(l=new V),as(t,e,s,u,a,l)):!1}function kt(t,e,s,u,a){return t===e?!0:t==null||e==null||!vt(t)&&!vt(e)?t!==t&&e!==e:cs(t,e,s,u,kt,a)}var ds=1,ps=2;function gs(t,e,s,u){var a=s.length,l=a,_=!u;if(t==null)return!l;for(t=Object(t);a--;){var x=s[a];if(_&&x[2]?x[1]!==t[x[0]]:!(x[0]in t))return!1}for(;++a<l;){x=s[a];var T=x[0],I=t[T],v=x[1];if(_&&x[2]){if(I===void 0&&!(T in t))return!1}else{var S=new V;if(u)var E=u(I,v,T,t,e,S);if(!(E===void 0?kt(v,I,ds|ps,u,S):E))return!1}}return!0}function ze(t){return t===t&&!Xt(t)}function ys(t){for(var e=Ne(t),s=e.length;s--;){var u=e[s],a=t[u];e[s]=[u,a,ze(a)]}return e}function be(t,e){return function(s){return s==null?!1:s[t]===e&&(e!==void 0||t in Object(s))}}function vs(t){var e=ys(t);return e.length==1&&e[0][2]?be(e[0][0],e[0][1]):function(s){return s===t||gs(s,t,e)}}function _s(t,e){return t!=null&&e in Object(t)}function ws(t,e,s){e=Ge(e,t);for(var u=-1,a=e.length,l=!1;++u<a;){var _=Dt(e[u]);if(!(l=t!=null&&s(t,_)))break;t=t[_]}return l||++u!=a?l:(a=t==null?0:t.length,!!a&&Zt(a)&&Ce(_,a)&&(q(t)||Re(t)))}function xs(t,e){return t!=null&&ws(t,e,_s)}var As=1,Os=2;function Ts(t,e){return Qt(t)&&ze(e)?be(Dt(t),e):function(s){var u=pi(s,t);return u===void 0&&u===e?xs(s,t):kt(e,u,As|Os)}}function Ps(t){return function(e){return e==null?void 0:e[t]}}function $s(t){return function(e){return He(e,t)}}function Is(t){return Qt(t)?Ps(Dt(t)):$s(t)}function ms(t){return typeof t=="function"?t:t==null?or:typeof t=="object"?q(t)?Ts(t[0],t[1]):vs(t):Is(t)}function Es(t,e,s){for(var u=-1,a=t==null?0:t.length;++u<a;)if(s(e,t[u]))return!0;return!1}var Ss=1/0,Cs=ht&&1/qt(new ht([,-0]))[1]==Ss?function(t){return new ht(t)}:$r;const js=Cs;var Ms=200;function Rs(t,e,s){var u=-1,a=Cr,l=t.length,_=!0,x=[],T=x;if(s)_=!1,a=Es;else if(l>=Ms){var I=e?null:js(t);if(I)return qt(I);_=!1,a=Be,T=new xt}else T=e?[]:x;t:for(;++u<l;){var v=t[u],S=e?e(v):v;if(v=s||v!==0?v:0,_&&S===S){for(var E=T.length;E--;)if(T[E]===S)continue t;e&&T.push(S),x.push(v)}else a(T,S,s)||(T!==x&&T.push(S),x.push(v))}return x}function Fs(t,e){return t&&t.length?Rs(t,ms(e)):[]}var Ls=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},We={exports:{}};(function(t,e){(function(s,u,a){let l;(l=a.define)&&l.amd?l([],function(){return u}):(l=a.modules)?l[s.toLowerCase()]=u:t.exports=u})("FlexSearch",function s(u){function a(r,i){const n=i?i.id:r&&r.id;this.id=n||n===0?n:Qe++,this.init(r,i),I(this,"index",function(){return this.a?Object.keys(this.a.index[this.a.keys[0]].c):Object.keys(this.c)}),I(this,"length",function(){return this.index.length})}function l(r,i,n,o){return this.u!==this.g&&(this.o=this.o.concat(n),this.u++,o&&this.o.length>=o&&(this.u=this.g),this.u===this.g&&(this.cache&&this.j.set(i,this.o),this.F&&this.F(this.o))),this}function _(r){const i=D();for(const n in r)if(r.hasOwnProperty(n)){const o=r[n];N(o)?i[n]=o.slice(0):Y(o)?i[n]=_(o):i[n]=o}return i}function x(r,i){const n=r.length,o=it(i),f=[];for(let h=0,d=0;h<n;h++){const c=r[h];(o&&i(c)||!o&&!i[c])&&(f[d++]=c)}return f}function T(r,i,n,o,f,h,d,c,p,g){n=pt(n,d?0:f,c,h,i,p,g);let A;if(c&&(c=n.page,A=n.next,n=n.result),d)i=this.where(d,null,f,n);else{for(i=n,n=this.l,f=i.length,h=Array(f),d=0;d<f;d++)h[d]=n[i[d]];i=h}return n=i,o&&(it(o)||(Q=o.split(":"),1<Q.length?o=Z:(Q=Q[0],o=K)),n.sort(o)),n=b(c,A,n),this.cache&&this.j.set(r,n),n}function I(r,i,n){Object.defineProperty(r,i,{get:n})}function v(r){return new RegExp(r,"g")}function S(r,i){for(let n=0;n<i.length;n+=2)r=r.replace(i[n],i[n+1]);return r}function E(r,i,n,o,f,h,d,c){return i[n]?i[n]:(f=f?(c-(d||c/1.5))*h+(d||c/1.5)*f:h,i[n]=f,f>=d&&(r=r[c-(f+.5>>0)],r=r[n]||(r[n]=[]),r[r.length]=o),f)}function H(r,i){if(r){const n=Object.keys(r);for(let o=0,f=n.length;o<f;o++){const h=n[o],d=r[h];if(d)for(let c=0,p=d.length;c<p;c++)if(d[c]===i){p===1?delete r[h]:d.splice(c,1);break}else Y(d[c])&&H(d[c],i)}}}function L(r){let i="",n="";var o="";for(let f=0;f<r.length;f++){const h=r[f];h!==n&&(f&&h==="h"?(o=o==="a"||o==="e"||o==="i"||o==="o"||o==="u"||o==="y",((n==="a"||n==="e"||n==="i"||n==="o"||n==="u"||n==="y")&&o||n===" ")&&(i+=h)):i+=h),o=f===r.length-1?"":r[f+1],n=h}return i}function B(r,i){return r=r.length-i.length,0>r?1:r?-1:0}function K(r,i){return r=r[Q],i=i[Q],r<i?-1:r>i?1:0}function Z(r,i){const n=Q.length;for(let o=0;o<n;o++)r=r[Q[o]],i=i[Q[o]];return r<i?-1:r>i?1:0}function b(r,i,n){return r?{page:r,next:i?""+i:null,result:n}:n}function pt(r,i,n,o,f,h,d){let c,p=[];if(n===!0){n="0";var g=""}else g=n&&n.split(":");const A=r.length;if(1<A){const R=D(),$=[];let m,C;var w=0,y;let X;var P=!0;let z,W=0,et,Nt,$t,Gt;if(g&&(g.length===2?($t=g,g=!1):g=Gt=parseInt(g[0],10)),d){for(m=D();w<A;w++)if(f[w]==="not")for(C=r[w],X=C.length,y=0;y<X;y++)m["@"+C[y]]=1;else Nt=w+1;if(G(Nt))return b(n,c,p);w=0}else et=U(f)&&f;let It;for(;w<A;w++){const ke=w===(Nt||A)-1;if(!et||!w)if((y=et||f&&f[w])&&y!=="and")if(y==="or")It=!1;else continue;else It=h=!0;if(C=r[w],X=C.length){if(P)if(z){var O=z.length;for(y=0;y<O;y++){P=z[y];var F="@"+P;d&&m[F]||(R[F]=1,h||(p[W++]=P))}z=null,P=!1}else{z=C;continue}for(F=!1,y=0;y<X;y++){O=C[y];var M="@"+O;const mt=h?R[M]||0:w;if(!(!mt&&!o||d&&m[M]||!h&&R[M]))if(mt===w){if(ke){if((!Gt||--Gt<W)&&(p[W++]=O,i&&W===i))return b(n,W+(g||0),p)}else R[M]=w+1;F=!0}else o&&(M=$[mt]||($[mt]=[]),M[M.length]=O)}if(It&&!F&&!o)break}else if(It&&!o)return b(n,c,C)}if(z)if(w=z.length,d)for(y=g?parseInt(g,10):0;y<w;y++)r=z[y],m["@"+r]||(p[W++]=r);else p=z;if(o){for(W=p.length,$t?(w=parseInt($t[0],10)+1,y=parseInt($t[1],10)+1):(w=$.length,y=0);w--;)if(O=$[w]){for(X=O.length;y<X;y++)if(o=O[y],(!d||!m["@"+o])&&(p[W++]=o,i&&W===i))return b(n,w+":"+y,p);y=0}}}else!A||f&&f[0]==="not"||(p=r[0],g&&(g=parseInt(g[0],10)));return i&&(d=p.length,g&&g>d&&(g=0),g=g||0,c=g+i,c<d?p=p.slice(g,c):(c=0,g&&(p=p.slice(g)))),b(n,c,p)}function U(r){return typeof r=="string"}function N(r){return r.constructor===Array}function it(r){return typeof r=="function"}function Y(r){return typeof r=="object"}function G(r){return typeof r>"u"}function te(r){const i=Array(r);for(let n=0;n<r;n++)i[n]=D();return i}function D(){return Object.create(null)}function Xe(){let r,i;self.onmessage=function(n){if(n=n.data)if(n.search){const o=i.search(n.content,n.threshold?{limit:n.limit,threshold:n.threshold,where:n.where}:n.limit);self.postMessage({id:r,content:n.content,limit:n.limit,result:o})}else n.add?i.add(n.id,n.content):n.update?i.update(n.id,n.content):n.remove?i.remove(n.id):n.clear?i.clear():n.info?(n=i.info(),n.worker=r,console.log(n)):n.register&&(r=n.id,n.options.cache=!1,n.options.async=!1,n.options.worker=!1,i=new Function(n.register.substring(n.register.indexOf("{")+1,n.register.lastIndexOf("}")))(),i=new i(n.options))}}function Ze(r,i,n,o){r=u("flexsearch","id"+r,Xe,function(h){(h=h.data)&&h.result&&o(h.id,h.content,h.result,h.limit,h.where,h.cursor,h.suggest)},i);const f=s.toString();return n.id=i,r.postMessage({register:f,options:n,id:i}),r}const J={encode:"icase",f:"forward",split:/\W+/,cache:!1,async:!1,g:!1,D:!1,a:!1,b:9,threshold:0,depth:0},ee={memory:{encode:"extra",f:"strict",threshold:0,b:1},speed:{encode:"icase",f:"strict",threshold:1,b:3,depth:2},match:{encode:"extra",f:"full",threshold:1,b:3},score:{encode:"extra",f:"strict",threshold:1,b:9,depth:4},balance:{encode:"balance",f:"strict",threshold:0,b:3,depth:3},fast:{encode:"icase",f:"strict",threshold:8,b:9,depth:1}},Pt=[];let Qe=0;const re={},ne={};a.create=function(r,i){return new a(r,i)},a.registerMatcher=function(r){for(const i in r)r.hasOwnProperty(i)&&Pt.push(v(i),r[i]);return this},a.registerEncoder=function(r,i){return at[r]=i.bind(at),this},a.registerLanguage=function(r,i){return re[r]=i.filter,ne[r]=i.stemmer,this},a.encode=function(r,i){return at[r](i)},a.prototype.init=function(r,i){if(this.v=[],i){var n=i.preset;r=i}else r||(r=J),n=r.preset;if(i={},U(r)?(i=ee[r],r={}):n&&(i=ee[n]),n=r.worker)if(typeof Worker>"u")r.worker=!1,this.m=null;else{var o=parseInt(n,10)||4;this.C=-1,this.u=0,this.o=[],this.F=null,this.m=Array(o);for(var f=0;f<o;f++)this.m[f]=Ze(this.id,f,r,l.bind(this))}if(this.f=r.tokenize||i.f||this.f||J.f,this.split=G(n=r.split)?this.split||J.split:U(n)?v(n):n,this.D=r.rtl||this.D||J.D,this.async=typeof Promise>"u"||G(n=r.async)?this.async||J.async:n,this.g=G(n=r.worker)?this.g||J.g:n,this.threshold=G(n=r.threshold)?i.threshold||this.threshold||J.threshold:n,this.b=G(n=r.resolution)?n=i.b||this.b||J.b:n,n<=this.threshold&&(this.b=this.threshold+1),this.depth=this.f!=="strict"||G(n=r.depth)?i.depth||this.depth||J.depth:n,this.w=(n=G(n=r.encode)?i.encode||J.encode:n)&&at[n]&&at[n].bind(at)||(it(n)?n:this.w||!1),(n=r.matcher)&&this.addMatcher(n),n=(i=r.lang)||r.filter){if(U(n)&&(n=re[n]),N(n)){o=this.w,f=D();for(var h=0;h<n.length;h++){var d=o?o(n[h]):n[h];f[d]=1}n=f}this.filter=n}if(n=i||r.stemmer){var c;i=U(n)?ne[n]:n,o=this.w,f=[];for(c in i)i.hasOwnProperty(c)&&(h=o?o(c):c,f.push(v(h+"($|\\W)"),o?o(i[c]):i[c]));this.stemmer=c=f}if(this.a=f=(n=r.doc)?_(n):this.a||J.a,this.i=te(this.b-(this.threshold||0)),this.h=D(),this.c=D(),f){if(this.l=D(),r.doc=null,c=f.index={},i=f.keys=[],o=f.field,h=f.tag,d=f.store,N(f.id)||(f.id=f.id.split(":")),d){var p=D();if(U(d))p[d]=1;else if(N(d))for(let g=0;g<d.length;g++)p[d[g]]=1;else Y(d)&&(p=d);f.store=p}if(h){if(this.G=D(),d=D(),o)if(U(o))d[o]=r;else if(N(o))for(p=0;p<o.length;p++)d[o[p]]=r;else Y(o)&&(d=o);for(N(h)||(f.tag=h=[h]),o=0;o<h.length;o++)this.G[h[o]]=D();this.I=h,o=d}if(o){let g;for(N(o)||(Y(o)?(g=o,f.field=o=Object.keys(o)):f.field=o=[o]),f=0;f<o.length;f++)h=o[f],N(h)||(g&&(r=g[h]),i[f]=h,o[f]=h.split(":")),c[h]=new a(r)}r.doc=n}return this.B=!0,this.j=(this.cache=n=G(n=r.cache)?this.cache||J.cache:n)?new qe(n):!1,this},a.prototype.encode=function(r){return r&&(Pt.length&&(r=S(r,Pt)),this.v.length&&(r=S(r,this.v)),this.w&&(r=this.w(r)),this.stemmer&&(r=S(r,this.stemmer))),r},a.prototype.addMatcher=function(r){const i=this.v;for(const n in r)r.hasOwnProperty(n)&&i.push(v(n),r[n]);return this},a.prototype.add=function(r,i,n,o,f){if(this.a&&Y(r))return this.A("add",r,i);if(i&&U(i)&&(r||r===0)){var h="@"+r;if(this.c[h]&&!o)return this.update(r,i);if(this.g)return++this.C>=this.m.length&&(this.C=0),this.m[this.C].postMessage({add:!0,id:r,content:i}),this.c[h]=""+this.C,n&&n(),this;if(!f){if(this.async&&typeof importScripts!="function"){let $=this;if(h=new Promise(function(m){setTimeout(function(){$.add(r,i,null,o,!0),$=null,m()})}),n)h.then(n);else return h;return this}if(n)return this.add(r,i,null,o,!0),n(),this}if(i=this.encode(i),!i.length)return this;n=this.f,f=it(n)?n(i):i.split(this.split),this.filter&&(f=x(f,this.filter));const w=D();w._ctx=D();const y=f.length,P=this.threshold,O=this.depth,F=this.b,M=this.i,R=this.D;for(let $=0;$<y;$++){var d=f[$];if(d){var c=d.length,p=(R?$+1:y-$)/y,g="";switch(n){case"reverse":case"both":for(var A=c;--A;)g=d[A]+g,E(M,w,g,r,R?1:(c-A)/c,p,P,F-1);g="";case"forward":for(A=0;A<c;A++)g+=d[A],E(M,w,g,r,R?(A+1)/c:1,p,P,F-1);break;case"full":for(A=0;A<c;A++){const m=(R?A+1:c-A)/c;for(let C=c;C>A;C--)g=d.substring(A,C),E(M,w,g,r,m,p,P,F-1)}break;default:if(c=E(M,w,d,r,1,p,P,F-1),O&&1<y&&c>=P)for(c=w._ctx[d]||(w._ctx[d]=D()),d=this.h[d]||(this.h[d]=te(F-(P||0))),p=$-O,g=$+O+1,0>p&&(p=0),g>y&&(g=y);p<g;p++)p!==$&&E(d,c,f[p],r,0,F-(p<$?$-p:p-$),P,F-1)}}}this.c[h]=1,this.B=!1}return this},a.prototype.A=function(r,i,n){if(N(i)){var o=i.length;if(o--){for(var f=0;f<o;f++)this.A(r,i[f]);return this.A(r,i[o],n)}}else{var h=this.a.index,d=this.a.keys,c=this.a.tag;f=this.a.store;var p,g=this.a.id;o=i;for(var A=0;A<g.length;A++)o=o[g[A]];if(r==="remove"&&(delete this.l[o],g=d.length,g--)){for(i=0;i<g;i++)h[d[i]].remove(o);return h[d[g]].remove(o,n)}if(c){for(p=0;p<c.length;p++){var w=c[p],y=i;for(g=w.split(":"),A=0;A<g.length;A++)y=y[g[A]];y="@"+y}p=this.G[w],p=p[y]||(p[y]=[])}g=this.a.field;for(let P=0,O=g.length;P<O;P++){for(w=g[P],c=i,y=0;y<w.length;y++)c=c[w[y]];w=h[d[P]],y=r==="add"?w.add:w.update,P===O-1?y.call(w,o,c,n):y.call(w,o,c)}if(f){for(n=Object.keys(f),r=D(),h=0;h<n.length;h++)if(d=n[h],f[d]){d=d.split(":");let P,O;for(g=0;g<d.length;g++)c=d[g],P=(P||i)[c],O=(O||r)[c]=P}i=r}p&&(p[p.length]=i),this.l[o]=i}return this},a.prototype.update=function(r,i,n){return this.a&&Y(r)?this.A("update",r,i):(this.c["@"+r]&&U(i)&&(this.remove(r),this.add(r,i,n,!0)),this)},a.prototype.remove=function(r,i,n){if(this.a&&Y(r))return this.A("remove",r,i);var o="@"+r;if(this.c[o]){if(this.g)return this.m[this.c[o]].postMessage({remove:!0,id:r}),delete this.c[o],i&&i(),this;if(!n){if(this.async&&typeof importScripts!="function"){let f=this;if(o=new Promise(function(h){setTimeout(function(){f.remove(r,null,!0),f=null,h()})}),i)o.then(i);else return o;return this}if(i)return this.remove(r,null,!0),i(),this}for(i=0;i<this.b-(this.threshold||0);i++)H(this.i[i],r);this.depth&&H(this.h,r),delete this.c[o],this.B=!1}return this};let Q;a.prototype.search=function(r,i,n,o){if(Y(i)){if(N(i))for(var f=0;f<i.length;f++)i[f].query=r;else i.query=r;r=i,i=1e3}else i&&it(i)?(n=i,i=1e3):i||i===0||(i=1e3);if(this.g){this.F=n,this.u=0,this.o=[];for(var h=0;h<this.g;h++)this.m[h].postMessage({search:!0,limit:i,content:r})}else{var d=[],c=r;if(Y(r)&&!N(r)){n||(n=r.callback)&&(c.callback=null);var p=r.sort,g=r.page;i=r.limit,h=r.threshold;var A=r.suggest;r=r.query}if(this.a){h=this.a.index;const R=c.where;var w=c.bool||"or",y=c.field;let $=w,m,C;if(y)N(y)||(y=[y]);else if(N(c)){var P=c;y=[],$=[];for(var O=0;O<c.length;O++)o=c[O],f=o.bool||w,y[O]=o.field,$[O]=f,f==="not"?m=!0:f==="and"&&(C=!0)}else y=this.a.keys;for(w=y.length,O=0;O<w;O++)P&&(c=P[O]),g&&!U(c)&&(c.page=null,c.limit=0),d[O]=h[y[O]].search(c,0);if(n)return n(T.call(this,r,$,d,p,i,A,R,g,C,m));if(this.async){const X=this;return new Promise(function(z){Promise.all(d).then(function(W){z(T.call(X,r,$,W,p,i,A,R,g,C,m))})})}return T.call(this,r,$,d,p,i,A,R,g,C,m)}if(h||(h=this.threshold||0),!o){if(this.async&&typeof importScripts!="function"){let R=this;if(h=new Promise(function($){setTimeout(function(){$(R.search(c,i,null,!0)),R=null})}),n)h.then(n);else return h;return this}if(n)return n(this.search(c,i,null,!0)),this}if(!r||!U(r))return d;if(c=r,this.cache)if(this.B){if(n=this.j.get(r))return n}else this.j.clear(),this.B=!0;if(c=this.encode(c),!c.length)return d;n=this.f,n=it(n)?n(c):c.split(this.split),this.filter&&(n=x(n,this.filter)),P=n.length,o=!0,f=[];var F=D(),M=0;if(1<P&&(this.depth&&this.f==="strict"?w=!0:n.sort(B)),!w||(O=this.h)){const R=this.b;for(;M<P;M++){let $=n[M];if($){if(w){if(!y){if(O[$])y=$,F[$]=1;else if(!A)return d}if(A&&M===P-1&&!f.length)w=!1,$=y||$,F[$]=0;else if(!y)continue}if(!F[$]){const m=[];let C=!1,X=0;const z=w?O[y]:this.i;if(z){let W;for(let et=0;et<R-h;et++)(W=z[et]&&z[et][$])&&(m[X++]=W,C=!0)}if(C)y=$,f[f.length]=1<X?m.concat.apply([],m):m[0];else if(!A){o=!1;break}F[$]=1}}}}else o=!1;return o&&(d=pt(f,i,g,A)),this.cache&&this.j.set(r,d),d}},a.prototype.find=function(r,i){return this.where(r,i,1)[0]||null},a.prototype.where=function(r,i,n,o){const f=this.l,h=[];let d=0,c;var p;let g;if(Y(r)){n||(n=i);var A=Object.keys(r),w=A.length;if(c=!1,w===1&&A[0]==="id")return[f[r.id]];if((p=this.I)&&!o)for(var y=0;y<p.length;y++){var P=p[y],O=r[P];if(!G(O)){if(g=this.G[P]["@"+O],--w===0)return g;A.splice(A.indexOf(P),1),delete r[P];break}}for(p=Array(w),y=0;y<w;y++)p[y]=A[y].split(":")}else{if(it(r)){for(i=o||Object.keys(f),n=i.length,A=0;A<n;A++)w=f[i[A]],r(w)&&(h[d++]=w);return h}if(G(i))return[f[r]];if(r==="id")return[f[i]];A=[r],w=1,p=[r.split(":")],c=!0}for(o=g||o||Object.keys(f),y=o.length,P=0;P<y;P++){O=g?o[P]:f[o[P]];let F=!0;for(let M=0;M<w;M++){c||(i=r[A[M]]);const R=p[M],$=R.length;let m=O;if(1<$)for(let C=0;C<$;C++)m=m[R[C]];else m=m[R[0]];if(m!==i){F=!1;break}}if(F&&(h[d++]=O,n&&d===n))break}return h},a.prototype.info=function(){if(this.g)for(let r=0;r<this.g;r++)this.m[r].postMessage({info:!0,id:this.id});else return{id:this.id,items:this.length,cache:this.cache&&this.cache.s?this.cache.s.length:!1,matcher:Pt.length+(this.v?this.v.length:0),worker:this.g,threshold:this.threshold,depth:this.depth,resolution:this.b,contextual:this.depth&&this.f==="strict"}},a.prototype.clear=function(){return this.destroy().init()},a.prototype.destroy=function(){if(this.cache&&(this.j.clear(),this.j=null),this.i=this.h=this.c=null,this.a){const r=this.a.keys;for(let i=0;i<r.length;i++)this.a.index[r[i]].destroy();this.a=this.l=null}return this},a.prototype.export=function(r){const i=!r||G(r.serialize)||r.serialize;if(this.a){const o=!r||G(r.doc)||r.doc;var n=!r||G(r.index)||r.index;r=[];let f=0;if(n)for(n=this.a.keys;f<n.length;f++){const h=this.a.index[n[f]];r[f]=[h.i,h.h,Object.keys(h.c)]}o&&(r[f]=this.l)}else r=[this.i,this.h,Object.keys(this.c)];return i&&(r=JSON.stringify(r)),r},a.prototype.import=function(r,i){(!i||G(i.serialize)||i.serialize)&&(r=JSON.parse(r));const n=D();if(this.a){var o=!i||G(i.doc)||i.doc,f=0;if(!i||G(i.index)||i.index){i=this.a.keys;const d=i.length;for(var h=r[0][2];f<h.length;f++)n[h[f]]=1;for(f=0;f<d;f++){h=this.a.index[i[f]];const c=r[f];c&&(h.i=c[0],h.h=c[1],h.c=n)}}o&&(this.l=Y(o)?o:r[f])}else{for(o=r[2],f=0;f<o.length;f++)n[o[f]]=1;this.i=r[0],this.h=r[1],this.c=n}};const Ve=function(){const r=v("\\s+"),i=v("[^a-z0-9 ]"),n=[v("[-/]")," ",i,"",r," "];return function(o){return L(S(o.toLowerCase(),n))}}(),at={icase:function(r){return r.toLowerCase()},simple:function(){const r=v("\\s+"),i=v("[^a-z0-9 ]"),n=v("[-/]"),o=v("[\xE0\xE1\xE2\xE3\xE4\xE5]"),f=v("[\xE8\xE9\xEA\xEB]"),h=v("[\xEC\xED\xEE\xEF]"),d=v("[\xF2\xF3\xF4\xF5\xF6\u0151]"),c=v("[\xF9\xFA\xFB\xFC\u0171]"),p=v("[\xFD\u0177\xFF]"),g=v("\xF1"),A=v("[\xE7c]"),w=v("\xDF"),y=v(" & "),P=[o,"a",f,"e",h,"i",d,"o",c,"u",p,"y",g,"n",A,"k",w,"s",y," and ",n," ",i,"",r," "];return function(O){return O=S(O.toLowerCase(),P),O===" "?"":O}}(),advanced:function(){const r=v("ae"),i=v("ai"),n=v("ay"),o=v("ey"),f=v("oe"),h=v("ue"),d=v("ie"),c=v("sz"),p=v("zs"),g=v("ck"),A=v("cc"),w=v("sh"),y=v("th"),P=v("dt"),O=v("ph"),F=v("pf"),M=v("ou"),R=v("uo"),$=[r,"a",i,"ei",n,"ei",o,"ei",f,"o",h,"u",d,"i",c,"s",p,"s",w,"s",g,"k",A,"k",y,"t",P,"t",O,"f",F,"f",M,"o",R,"u"];return function(m,C){return m&&(m=this.simple(m),2<m.length&&(m=S(m,$)),C||1<m.length&&(m=L(m)),m)}}(),extra:function(){const r=v("p"),i=v("z"),n=v("[cgq]"),o=v("n"),f=v("d"),h=v("[vw]"),d=v("[aeiouy]"),c=[r,"b",i,"s",n,"k",o,"m",f,"t",h,"f",d,""];return function(p){if(!p)return p;if(p=this.advanced(p,!0),1<p.length){p=p.split(" ");for(let g=0;g<p.length;g++){const A=p[g];1<A.length&&(p[g]=A[0]+S(A.substring(1),c))}p=p.join(" "),p=L(p)}return p}}(),balance:Ve},qe=function(){function r(i){this.clear(),this.H=i!==!0&&i}return r.prototype.clear=function(){this.cache=D(),this.count=D(),this.index=D(),this.s=[]},r.prototype.set=function(i,n){if(this.H&&G(this.cache[i])){let o=this.s.length;if(o===this.H){o--;const f=this.s[o];delete this.cache[f],delete this.count[f],delete this.index[f]}this.index[i]=o,this.s[o]=i,this.count[i]=-1,this.cache[i]=n,this.get(i)}else this.cache[i]=n},r.prototype.get=function(i){const n=this.cache[i];if(this.H&&n){var o=++this.count[i];const h=this.index;let d=h[i];if(0<d){const c=this.s;for(var f=d;this.count[c[--d]]<=o&&d!==-1;);if(d++,d!==f){for(o=f;o>d;o--)f=c[o-1],c[o]=f,h[f]=o;c[d]=i,h[i]=d}}}return n},r}();return a}(function(){const s={},u=typeof Blob<"u"&&typeof URL<"u"&&URL.createObjectURL;return function(a,l,_,x,T){return _=u?URL.createObjectURL(new Blob(["("+_.toString()+")()"],{type:"text/javascript"})):a+".min.js",a+="-"+l,s[a]||(s[a]=[]),s[a][T]=new Worker(_),s[a][T].onmessage=x,s[a][T]}}()),Ls)})(We);const Ie=We.exports;function Ds(t,e){let s=t[e],u=e;const a=[s];for(;s&&s.depth>2;){let l=!1;for(let _=u-1;_>=0;_--){const x=t[_];if(x.depth>1&&x.depth===s.depth-1){s=x,u=_,a.unshift(s),l=!0;break}}if(!l)break}return a}const me=100,Ns=/[\u3131-\u314e|\u314f-\u3163|\uac00-\ud7a3]|[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|[\u3041-\u3096]|[\u30A1-\u30FA]/giu,Gs=["home","api","404","custom"];var lt,ct,At,Ot,jt,Ke,Mt,Ye,Rt,Je;class Ks{constructor(e=""){rt(this,jt);rt(this,Mt);rt(this,Rt);rt(this,lt,void 0);rt(this,ct,void 0);rt(this,At,{});rt(this,Ot,void 0);gt(this,Ot,e)}async init(e={}){const s=await er(l=>l.path.startsWith(rr(st(this,Ot)))),u=s.filter(l=>{var _;return!Gs.includes(((_=l.frontmatter)==null?void 0:_.pageType)||"")}).map(l=>({title:l.title,headers:(l.toc||[]).map(_=>_.text),content:l.content||"",path:l.routePath,rawHeaders:l.toc||[]}));gt(this,At,s.reduce((l,_)=>((_.toc||[]).forEach(x=>{l[_.routePath+x.text]=x.id}),l),{}));const a={encode:"simple",tokenize:"forward",split:/\W+/,async:!0,doc:{id:"path",field:["title","headers","content"]},...e};gt(this,lt,Ie.create(a)),gt(this,ct,Ie.create({...a,encode:!1,tokenize(l){const _=[];let x=null;do x=Ns.exec(l),x&&_.push(x[0]);while(x);return _}})),st(this,lt).add(u),st(this,ct).add(u)}async match(e,s=7){var x,T;const a=(await Promise.all([(x=st(this,lt))==null?void 0:x.search({query:e,limit:s}),(T=st(this,ct))==null?void 0:T.search(e,s)])).flat(2).filter(Boolean),l=[];return a.forEach(I=>{Et(this,jt,Ke).call(this,I,e,l)||Et(this,Mt,Ye).call(this,I,e,l)}),Fs(l,"link")}}lt=new WeakMap,ct=new WeakMap,At=new WeakMap,Ot=new WeakMap,jt=new WeakSet,Ke=function(e,s,u){const{headers:a,rawHeaders:l}=e;for(const[_,x]of a.entries())if(x.includes(s)){const T=st(this,At)[e.path+x],v=Ds(l,_).map(S=>S.text).join(" > ");return u.push({type:"header",title:e.title,header:v,headerHighlightIndex:v.indexOf(s),link:`${ie(e.path)}#${T}`}),!0}return!1},Mt=new WeakSet,Ye=function(e,s,u){var H;const{content:a,headers:l}=e,_=a.indexOf(s);if(_===-1)return;const x=l.map(L=>a.indexOf(L)),T=x.findIndex((L,B)=>{if(B<l.length-1){const K=x[B+1];if(L<=_&&K>=_)return!0}else return L<_}),I=(H=l[T])!=null?H:e.title;let v=a.slice(0,_).lastIndexOf(`
`);v=v===-1?0:v;const S=a.indexOf(`
`,_+s.length);let E=a.slice(v,S);E.length>me&&(E=Et(this,Rt,Je).call(this,E,s)),u.push({type:"content",title:e.title,header:I,statement:E,statementHighlightIndex:E.indexOf(s),link:`${ie(e.path)}#${I}`})},Rt=new WeakSet,Je=function(e,s){const u=e.indexOf(s),a=Math.floor((me-s.length)/2);let l=e.slice(0,u);l.length>a&&(l="..."+e.slice(u-a+3,u));let _=e.slice(u+s.length);return _.length>a&&(_=e.slice(u+s.length,u+a-3)+"..."),l+s+_};export{Ks as PageSearcher};
