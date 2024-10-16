(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();var Wd={exports:{}},Ho={},jd={exports:{}},Fe={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Oa=Symbol.for("react.element"),J_=Symbol.for("react.portal"),ev=Symbol.for("react.fragment"),tv=Symbol.for("react.strict_mode"),rv=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),nv=Symbol.for("react.context"),av=Symbol.for("react.forward_ref"),ov=Symbol.for("react.suspense"),sv=Symbol.for("react.memo"),lv=Symbol.for("react.lazy"),Xd=Symbol.iterator;function uv(t){return t===null||typeof t!="object"?null:(t=Xd&&t[Xd]||t["@@iterator"],typeof t=="function"?t:null)}var qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yd=Object.assign,Kd={};function Ln(t,e,r){this.props=t,this.context=e,this.refs=Kd,this.updater=r||qd}Ln.prototype.isReactComponent={},Ln.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},Ln.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zd(){}Zd.prototype=Ln.prototype;function ql(t,e,r){this.props=t,this.context=e,this.refs=Kd,this.updater=r||qd}var Yl=ql.prototype=new Zd;Yl.constructor=ql,Yd(Yl,Ln.prototype),Yl.isPureReactComponent=!0;var $d=Array.isArray,Qd=Object.prototype.hasOwnProperty,Kl={current:null},Jd={key:!0,ref:!0,__self:!0,__source:!0};function ef(t,e,r){var i,n={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Qd.call(e,i)&&!Jd.hasOwnProperty(i)&&(n[i]=e[i]);var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];n.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)n[i]===void 0&&(n[i]=s[i]);return{$$typeof:Oa,type:t,key:a,ref:o,props:n,_owner:Kl.current}}function hv(t,e){return{$$typeof:Oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Oa}function dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var tf=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dv(""+t.key):e.toString(36)}function Vo(t,e,r,i,n){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Oa:case J_:o=!0}}if(o)return o=t,n=n(o),t=i===""?"."+$l(o,0):i,$d(n)?(r="",t!=null&&(r=t.replace(tf,"$&/")+"/"),Vo(n,e,r,"",function(c){return c})):n!=null&&(Zl(n)&&(n=hv(n,r+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(tf,"$&/")+"/")+t)),e.push(n)),1;if(o=0,i=i===""?".":i+":",$d(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+$l(a,s);o+=Vo(a,e,r,l,n)}else if(l=uv(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+$l(a,s++),o+=Vo(a,e,r,l,n);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(t,e,r){if(t==null)return t;var i=[],n=0;return Vo(t,i,"","",function(a){return e.call(r,a,n++)}),i}function fv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},Wo={transition:null},pv={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Kl};function rf(){throw Error("act(...) is not supported in production builds of React.")}Fe.Children={map:Go,forEach:function(t,e,r){Go(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!Zl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},Fe.Component=Ln,Fe.Fragment=ev,Fe.Profiler=rv,Fe.PureComponent=ql,Fe.StrictMode=tv,Fe.Suspense=ov,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv,Fe.act=rf,Fe.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yd({},t.props),n=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Kl.current),e.key!==void 0&&(n=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Qd.call(e,l)&&!Jd.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:Oa,type:t.type,key:n,ref:a,props:i,_owner:o}},Fe.createContext=function(t){return t={$$typeof:nv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iv,_context:t},t.Consumer=t},Fe.createElement=ef,Fe.createFactory=function(t){var e=ef.bind(null,t);return e.type=t,e},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(t){return{$$typeof:av,render:t}},Fe.isValidElement=Zl,Fe.lazy=function(t){return{$$typeof:lv,_payload:{_status:-1,_result:t},_init:fv}},Fe.memo=function(t,e){return{$$typeof:sv,type:t,compare:e===void 0?null:e}},Fe.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}},Fe.unstable_act=rf,Fe.useCallback=function(t,e){return Ht.current.useCallback(t,e)},Fe.useContext=function(t){return Ht.current.useContext(t)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)},Fe.useEffect=function(t,e){return Ht.current.useEffect(t,e)},Fe.useId=function(){return Ht.current.useId()},Fe.useImperativeHandle=function(t,e,r){return Ht.current.useImperativeHandle(t,e,r)},Fe.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)},Fe.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)},Fe.useMemo=function(t,e){return Ht.current.useMemo(t,e)},Fe.useReducer=function(t,e,r){return Ht.current.useReducer(t,e,r)},Fe.useRef=function(t){return Ht.current.useRef(t)},Fe.useState=function(t){return Ht.current.useState(t)},Fe.useSyncExternalStore=function(t,e,r){return Ht.current.useSyncExternalStore(t,e,r)},Fe.useTransition=function(){return Ht.current.useTransition()},Fe.version="18.3.1",jd.exports=Fe;var Ie=jd.exports;/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var mv=Ie,gv=Symbol.for("react.element"),_v=Symbol.for("react.fragment"),vv=Object.prototype.hasOwnProperty,xv=mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yv={key:!0,ref:!0,__self:!0,__source:!0};function nf(t,e,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vv.call(e,i)&&!yv.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);return{$$typeof:gv,type:t,key:a,ref:o,props:n,_owner:xv.current}}Ho.Fragment=_v,Ho.jsx=nf,Ho.jsxs=nf,Wd.exports=Ho;var Ne=Wd.exports,af={exports:{}},sr={},of={exports:{}},sf={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(C,j){var K=C.length;C.push(j);e:for(;0<K;){var ne=K-1>>>1,pe=C[ne];if(0<n(pe,j))C[ne]=j,C[K]=pe,K=ne;else break e}}function r(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var j=C[0],K=C.pop();if(K!==j){C[0]=K;e:for(var ne=0,pe=C.length,Se=pe>>>1;ne<Se;){var q=2*(ne+1)-1,Q=C[q],ce=q+1,ae=C[ce];if(0>n(Q,K))ce<pe&&0>n(ae,Q)?(C[ne]=ae,C[ce]=K,ne=ce):(C[ne]=Q,C[q]=K,ne=q);else if(ce<pe&&0>n(ae,K))C[ne]=ae,C[ce]=K,ne=ce;else break e}}return j}function n(C,j){var K=C.sortIndex-j.sortIndex;return K!==0?K:C.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],c=[],d=1,f=null,h=3,p=!1,x=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(C){for(var j=r(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=C)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=r(c)}}function E(C){if(S=!1,g(C),!x)if(r(l)!==null)x=!0,k(P);else{var j=r(c);j!==null&&W(E,j.startTime-C)}}function P(C,j){x=!1,S&&(S=!1,u(A),A=-1),p=!0;var K=h;try{for(g(j),f=r(l);f!==null&&(!(f.expirationTime>j)||C&&!y());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,h=f.priorityLevel;var pe=ne(f.expirationTime<=j);j=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===r(l)&&i(l),g(j)}else i(l);f=r(l)}if(f!==null)var Se=!0;else{var q=r(c);q!==null&&W(E,q.startTime-j),Se=!1}return Se}finally{f=null,h=K,p=!1}}var R=!1,T=null,A=-1,X=5,v=-1;function y(){return!(t.unstable_now()-v<X)}function D(){if(T!==null){var C=t.unstable_now();v=C;var j=!0;try{j=T(!0,C)}finally{j?O():(R=!1,T=null)}}else R=!1}var O;if(typeof _=="function")O=function(){_(D)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,B=F.port2;F.port1.onmessage=D,O=function(){B.postMessage(null)}}else O=function(){m(D,0)};function k(C){T=C,R||(R=!0,O())}function W(C,j){A=m(function(){C(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,k(P))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(C){switch(h){case 1:case 2:case 3:var j=3;break;default:j=h}var K=h;h=j;try{return C()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,j){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var K=h;h=C;try{return j()}finally{h=K}},t.unstable_scheduleCallback=function(C,j,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,C){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=K+pe,C={id:d++,callback:j,priorityLevel:C,startTime:K,expirationTime:pe,sortIndex:-1},K>ne?(C.sortIndex=K,e(c,C),r(l)===null&&C===r(c)&&(S?(u(A),A=-1):S=!0,W(E,K-ne))):(C.sortIndex=pe,e(l,C),x||p||(x=!0,k(P))),C},t.unstable_shouldYield=y,t.unstable_wrapCallback=function(C){var j=h;return function(){var K=h;h=j;try{return C.apply(this,arguments)}finally{h=K}}}})(sf),of.exports=sf;var Sv=of.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var bv=Ie,lr=Sv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lf=new Set,ka={};function Qi(t,e){In(t,e),In(t+"Capture",e)}function In(t,e){for(ka[t]=e,t=0;t<e.length;t++)lf.add(e[t])}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,Ev=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cf={},uf={};function Mv(t){return Ql.call(uf,t)?!0:Ql.call(cf,t)?!1:Ev.test(t)?uf[t]=!0:(cf[t]=!0,!1)}function Tv(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wv(t,e,r,i){if(e===null||typeof e>"u"||Tv(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,r,i,n,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new Vt(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new Vt(e,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new Vt(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new Vt(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){Pt[t]=new Vt(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){Pt[t]=new Vt(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){Pt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jl=/[\-:]([a-z])/g;function ec(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jl,ec);Pt[e]=new Vt(e,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jl,ec);Pt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jl,ec);Pt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)}),Pt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){Pt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tc(t,e,r,i){var n=Pt.hasOwnProperty(e)?Pt[e]:null;(n!==null?n.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wv(e,r,n,i)&&(r=null),i||n===null?Mv(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):n.mustUseProperty?t[n.propertyName]=r===null?n.type===3?!1:"":r:(e=n.attributeName,i=n.attributeNamespace,r===null?t.removeAttribute(e):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var Zr=bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jo=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),rc=Symbol.for("react.strict_mode"),ic=Symbol.for("react.profiler"),hf=Symbol.for("react.provider"),df=Symbol.for("react.context"),nc=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),oc=Symbol.for("react.suspense_list"),sc=Symbol.for("react.memo"),_i=Symbol.for("react.lazy"),ff=Symbol.for("react.offscreen"),pf=Symbol.iterator;function Fa(t){return t===null||typeof t!="object"?null:(t=pf&&t[pf]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,lc;function za(t){if(lc===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);lc=e&&e[1]||""}return`
`+lc+t}var cc=!1;function uc(t,e){if(!t||cc)return"";cc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),a=i.stack.split(`
`),o=n.length-1,s=a.length-1;1<=o&&0<=s&&n[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(n[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||n[o]!==a[s]){var l=`
`+n[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{cc=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?za(t):""}function Rv(t){switch(t.tag){case 5:return za(t.type);case 16:return za("Lazy");case 13:return za("Suspense");case 19:return za("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nn:return"Fragment";case Dn:return"Portal";case ic:return"Profiler";case rc:return"StrictMode";case ac:return"Suspense";case oc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case df:return(t.displayName||"Context")+".Consumer";case hf:return(t._context.displayName||"Context")+".Provider";case nc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sc:return e=t.displayName||null,e!==null?e:hc(t.type)||"Memo";case _i:e=t._payload,t=t._init;try{return hc(t(e))}catch{}}return null}function Cv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hc(e);case 8:return e===rc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Av(t){var e=mf(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xo(t){t._valueTracker||(t._valueTracker=Av(t))}function gf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=mf(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dc(t,e){var r=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function _f(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=vi(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vf(t,e){e=e.checked,e!=null&&tc(t,"checked",e,!1)}function fc(t,e){vf(t,e);var r=vi(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pc(t,e.type,r):e.hasOwnProperty("defaultValue")&&pc(t,e.type,vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xf(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function pc(t,e,r){(e!=="number"||qo(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ba=Array.isArray;function Un(t,e,r,i){if(t=t.options,e){e={};for(var n=0;n<r.length;n++)e["$"+r[n]]=!0;for(r=0;r<t.length;r++)n=e.hasOwnProperty("$"+t[r].value),t[r].selected!==n&&(t[r].selected=n),n&&i&&(t[r].defaultSelected=!0)}else{for(r=""+vi(r),e=null,n=0;n<t.length;n++){if(t[n].value===r){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yf(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(ee(92));if(Ba(r)){if(1<r.length)throw Error(ee(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:vi(r)}}function Sf(t,e){var r=vi(e.value),i=vi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function bf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ef(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ef(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Yo,Mf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,n){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,n)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Yo=Yo||document.createElement("div"),Yo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Yo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ha(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pv=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(t){Pv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Va[e]=Va[t]})});function Tf(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Va.hasOwnProperty(t)&&Va[t]?(""+e).trim():e+"px"}function wf(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=Tf(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,n):t[r]=n}}var Lv=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(t,e){if(e){if(Lv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function yc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sc=null,On=null,kn=null;function Rf(t){if(t=uo(t)){if(typeof Sc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=_s(e),Sc(t.stateNode,t.type,e))}}function Cf(t){On?kn?kn.push(t):kn=[t]:On=t}function Af(){if(On){var t=On,e=kn;if(kn=On=null,Rf(t),e)for(t=0;t<e.length;t++)Rf(e[t])}}function Pf(t,e){return t(e)}function Lf(){}var bc=!1;function If(t,e,r){if(bc)return t(e,r);bc=!0;try{return Pf(t,e,r)}finally{bc=!1,(On!==null||kn!==null)&&(Lf(),Af())}}function Ga(t,e){var r=t.stateNode;if(r===null)return null;var i=_s(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(ee(231,e,typeof r));return r}var Ec=!1;if(Kr)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{Ec=!1}function Iv(t,e,r,i,n,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(d){this.onError(d)}}var ja=!1,Ko=null,Zo=!1,Mc=null,Dv={onError:function(t){ja=!0,Ko=t}};function Nv(t,e,r,i,n,a,o,s,l){ja=!1,Ko=null,Iv.apply(Dv,arguments)}function Uv(t,e,r,i,n,a,o,s,l){if(Nv.apply(this,arguments),ja){if(ja){var c=Ko;ja=!1,Ko=null}else throw Error(ee(198));Zo||(Zo=!0,Mc=c)}}function Ji(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Df(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nf(t){if(Ji(t)!==t)throw Error(ee(188))}function Ov(t){var e=t.alternate;if(!e){if(e=Ji(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var r=t,i=e;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return Nf(n),t;if(a===i)return Nf(n),e;a=a.sibling}throw Error(ee(188))}if(r.return!==i.return)r=n,i=a;else{for(var o=!1,s=n.child;s;){if(s===r){o=!0,r=n,i=a;break}if(s===i){o=!0,i=n,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,i=n;break}if(s===i){o=!0,i=a,r=n;break}s=s.sibling}if(!o)throw Error(ee(189))}}if(r.alternate!==i)throw Error(ee(190))}if(r.tag!==3)throw Error(ee(188));return r.stateNode.current===r?t:e}function Uf(t){return t=Ov(t),t!==null?Of(t):null}function Of(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Of(t);if(e!==null)return e;t=t.sibling}return null}var kf=lr.unstable_scheduleCallback,Ff=lr.unstable_cancelCallback,kv=lr.unstable_shouldYield,Fv=lr.unstable_requestPaint,mt=lr.unstable_now,zv=lr.unstable_getCurrentPriorityLevel,Tc=lr.unstable_ImmediatePriority,zf=lr.unstable_UserBlockingPriority,$o=lr.unstable_NormalPriority,Bv=lr.unstable_LowPriority,Bf=lr.unstable_IdlePriority,Qo=null,zr=null;function Hv(t){if(zr&&typeof zr.onCommitFiberRoot=="function")try{zr.onCommitFiberRoot(Qo,t,void 0,(t.current.flags&128)===128)}catch{}}var wr=Math.clz32?Math.clz32:Wv,Vv=Math.log,Gv=Math.LN2;function Wv(t){return t>>>=0,t===0?32:31-(Vv(t)/Gv|0)|0}var Jo=64,es=4194304;function Xa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ts(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,n=t.suspendedLanes,a=t.pingedLanes,o=r&268435455;if(o!==0){var s=o&~n;s!==0?i=Xa(s):(a&=o,a!==0&&(i=Xa(a)))}else o=r&~n,o!==0?i=Xa(o):a!==0&&(i=Xa(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&n)&&(n=i&-i,a=e&-e,n>=a||n===16&&(a&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-wr(e),n=1<<r,i|=t[r],e&=~n;return i}function jv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xv(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-wr(a),s=1<<o,l=n[o];l===-1?(!(s&r)||s&i)&&(n[o]=jv(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function wc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hf(){var t=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),t}function Rc(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function qa(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wr(e),t[e]=r}function qv(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var n=31-wr(r),a=1<<n;e[n]=0,i[n]=-1,t[n]=-1,r&=~a}}function Cc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-wr(r),n=1<<i;n&e|t[i]&e&&(t[i]|=e),r&=~n}}var Ye=0;function Vf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gf,Ac,Wf,jf,Xf,Pc=!1,rs=[],xi=null,yi=null,Si=null,Ya=new Map,Ka=new Map,bi=[],Yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qf(t,e){switch(t){case"focusin":case"focusout":xi=null;break;case"dragenter":case"dragleave":yi=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":Ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(e.pointerId)}}function Za(t,e,r,i,n,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},e!==null&&(e=uo(e),e!==null&&Ac(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Kv(t,e,r,i,n){switch(e){case"focusin":return xi=Za(xi,t,e,r,i,n),!0;case"dragenter":return yi=Za(yi,t,e,r,i,n),!0;case"mouseover":return Si=Za(Si,t,e,r,i,n),!0;case"pointerover":var a=n.pointerId;return Ya.set(a,Za(Ya.get(a)||null,t,e,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,Ka.set(a,Za(Ka.get(a)||null,t,e,r,i,n)),!0}return!1}function Yf(t){var e=en(t.target);if(e!==null){var r=Ji(e);if(r!==null){if(e=r.tag,e===13){if(e=Df(r),e!==null){t.blockedOn=e,Xf(t.priority,function(){Wf(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function is(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);xc=i,r.target.dispatchEvent(i),xc=null}else return e=uo(r),e!==null&&Ac(e),t.blockedOn=r,!1;e.shift()}return!0}function Kf(t,e,r){is(t)&&r.delete(e)}function Zv(){Pc=!1,xi!==null&&is(xi)&&(xi=null),yi!==null&&is(yi)&&(yi=null),Si!==null&&is(Si)&&(Si=null),Ya.forEach(Kf),Ka.forEach(Kf)}function $a(t,e){t.blockedOn===e&&(t.blockedOn=null,Pc||(Pc=!0,lr.unstable_scheduleCallback(lr.unstable_NormalPriority,Zv)))}function Qa(t){function e(n){return $a(n,t)}if(0<rs.length){$a(rs[0],t);for(var r=1;r<rs.length;r++){var i=rs[r];i.blockedOn===t&&(i.blockedOn=null)}}for(xi!==null&&$a(xi,t),yi!==null&&$a(yi,t),Si!==null&&$a(Si,t),Ya.forEach(e),Ka.forEach(e),r=0;r<bi.length;r++)i=bi[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(r=bi[0],r.blockedOn===null);)Yf(r),r.blockedOn===null&&bi.shift()}var Fn=Zr.ReactCurrentBatchConfig,ns=!0;function $v(t,e,r,i){var n=Ye,a=Fn.transition;Fn.transition=null;try{Ye=1,Lc(t,e,r,i)}finally{Ye=n,Fn.transition=a}}function Qv(t,e,r,i){var n=Ye,a=Fn.transition;Fn.transition=null;try{Ye=4,Lc(t,e,r,i)}finally{Ye=n,Fn.transition=a}}function Lc(t,e,r,i){if(ns){var n=Ic(t,e,r,i);if(n===null)Kc(t,e,i,as,r),qf(t,i);else if(Kv(n,t,e,r,i))i.stopPropagation();else if(qf(t,i),e&4&&-1<Yv.indexOf(t)){for(;n!==null;){var a=uo(n);if(a!==null&&Gf(a),a=Ic(t,e,r,i),a===null&&Kc(t,e,i,as,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else Kc(t,e,i,null,r)}}var as=null;function Ic(t,e,r,i){if(as=null,t=yc(i),t=en(t),t!==null)if(e=Ji(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Df(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return as=t,null}function Zf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zv()){case Tc:return 1;case zf:return 4;case $o:case Bv:return 16;case Bf:return 536870912;default:return 16}default:return 16}}var Ei=null,Dc=null,os=null;function $f(){if(os)return os;var t,e=Dc,r=e.length,i,n="value"in Ei?Ei.value:Ei.textContent,a=n.length;for(t=0;t<r&&e[t]===n[t];t++);var o=r-t;for(i=1;i<=o&&e[r-i]===n[a-i];i++);return os=n.slice(t,1<i?1-i:void 0)}function ss(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ls(){return!0}function Qf(){return!1}function cr(t){function e(r,i,n,a,o){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ls:Qf,this.isPropagationStopped=Qf,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),e}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=cr(zn),Ja=ct({},zn,{view:0,detail:0}),Jv=cr(Ja),Uc,Oc,eo,cs=ct({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Uc=t.screenX-eo.screenX,Oc=t.screenY-eo.screenY):Oc=Uc=0,eo=t),Uc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Jf=cr(cs),e0=ct({},cs,{dataTransfer:0}),t0=cr(e0),r0=ct({},Ja,{relatedTarget:0}),kc=cr(r0),i0=ct({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),n0=cr(i0),a0=ct({},zn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),o0=cr(a0),s0=ct({},zn,{data:0}),ep=cr(s0),l0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=u0[t])?!!e[t]:!1}function Fc(){return h0}var d0=ct({},Ja,{key:function(t){if(t.key){var e=l0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ss(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?ss(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ss(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f0=cr(d0),p0=ct({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=cr(p0),m0=ct({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),g0=cr(m0),_0=ct({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=cr(_0),x0=ct({},cs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=cr(x0),S0=[9,13,27,32],zc=Kr&&"CompositionEvent"in window,to=null;Kr&&"documentMode"in document&&(to=document.documentMode);var b0=Kr&&"TextEvent"in window&&!to,rp=Kr&&(!zc||to&&8<to&&11>=to),ip=" ",np=!1;function ap(t,e){switch(t){case"keyup":return S0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bn=!1;function E0(t,e){switch(t){case"compositionend":return op(e);case"keypress":return e.which!==32?null:(np=!0,ip);case"textInput":return t=e.data,t===ip&&np?null:t;default:return null}}function M0(t,e){if(Bn)return t==="compositionend"||!zc&&ap(t,e)?(t=$f(),os=Dc=Ei=null,Bn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rp&&e.locale!=="ko"?null:e.data;default:return null}}var T0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T0[t.type]:e==="textarea"}function lp(t,e,r,i){Cf(i),e=ps(e,"onChange"),0<e.length&&(r=new Nc("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var ro=null,io=null;function w0(t){wp(t,0)}function us(t){var e=jn(t);if(gf(e))return t}function R0(t,e){if(t==="change")return e}var cp=!1;if(Kr){var Bc;if(Kr){var Hc="oninput"in document;if(!Hc){var up=document.createElement("div");up.setAttribute("oninput","return;"),Hc=typeof up.oninput=="function"}Bc=Hc}else Bc=!1;cp=Bc&&(!document.documentMode||9<document.documentMode)}function hp(){ro&&(ro.detachEvent("onpropertychange",dp),io=ro=null)}function dp(t){if(t.propertyName==="value"&&us(io)){var e=[];lp(e,io,t,yc(t)),If(w0,e)}}function C0(t,e,r){t==="focusin"?(hp(),ro=e,io=r,ro.attachEvent("onpropertychange",dp)):t==="focusout"&&hp()}function A0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return us(io)}function P0(t,e){if(t==="click")return us(e)}function L0(t,e){if(t==="input"||t==="change")return us(e)}function I0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rr=typeof Object.is=="function"?Object.is:I0;function no(t,e){if(Rr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!Ql.call(e,n)||!Rr(t[n],e[n]))return!1}return!0}function fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,e){var r=fp(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fp(r)}}function mp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gp(){for(var t=window,e=qo();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=qo(t.document)}return e}function Vc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function D0(t){var e=gp(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&mp(r.ownerDocument.documentElement,r)){if(i!==null&&Vc(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!t.extend&&a>i&&(n=i,i=a,a=n),n=pp(r,a);var o=pp(r,i);n&&o&&(t.rangeCount!==1||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var N0=Kr&&"documentMode"in document&&11>=document.documentMode,Hn=null,Gc=null,ao=null,Wc=!1;function _p(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Wc||Hn==null||Hn!==qo(i)||(i=Hn,"selectionStart"in i&&Vc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ao&&no(ao,i)||(ao=i,i=ps(Gc,"onSelect"),0<i.length&&(e=new Nc("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=Hn)))}function hs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Vn={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},jc={},vp={};Kr&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function ds(t){if(jc[t])return jc[t];if(!Vn[t])return t;var e=Vn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in vp)return jc[t]=e[r];return t}var xp=ds("animationend"),yp=ds("animationiteration"),Sp=ds("animationstart"),bp=ds("transitionend"),Ep=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mi(t,e){Ep.set(t,e),Qi(e,[t])}for(var Xc=0;Xc<Mp.length;Xc++){var qc=Mp[Xc],U0=qc.toLowerCase(),O0=qc[0].toUpperCase()+qc.slice(1);Mi(U0,"on"+O0)}Mi(xp,"onAnimationEnd"),Mi(yp,"onAnimationIteration"),Mi(Sp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(bp,"onTransitionEnd"),In("onMouseEnter",["mouseout","mouseover"]),In("onMouseLeave",["mouseout","mouseover"]),In("onPointerEnter",["pointerout","pointerover"]),In("onPointerLeave",["pointerout","pointerover"]),Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k0=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Tp(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,Uv(i,e,void 0,t),t.currentTarget=null}function wp(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],n=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&n.isPropagationStopped())break e;Tp(n,s,c),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&n.isPropagationStopped())break e;Tp(n,s,c),a=l}}}if(Zo)throw t=Mc,Zo=!1,Mc=null,t}function it(t,e){var r=e[tu];r===void 0&&(r=e[tu]=new Set);var i=t+"__bubble";r.has(i)||(Rp(e,t,2,!1),r.add(i))}function Yc(t,e,r){var i=0;e&&(i|=4),Rp(r,t,i,e)}var fs="_reactListening"+Math.random().toString(36).slice(2);function so(t){if(!t[fs]){t[fs]=!0,lf.forEach(function(r){r!=="selectionchange"&&(k0.has(r)||Yc(r,!1,t),Yc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fs]||(e[fs]=!0,Yc("selectionchange",!1,e))}}function Rp(t,e,r,i){switch(Zf(e)){case 1:var n=$v;break;case 4:n=Qv;break;default:n=Lc}r=n.bind(null,e,r,t),n=void 0,!Ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,r,{capture:!0,passive:n}):t.addEventListener(e,r,!0):n!==void 0?t.addEventListener(e,r,{passive:n}):t.addEventListener(e,r,!1)}function Kc(t,e,r,i,n){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;o=o.return}for(;s!==null;){if(o=en(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}If(function(){var c=a,d=yc(r),f=[];e:{var h=Ep.get(t);if(h!==void 0){var p=Nc,x=t;switch(t){case"keypress":if(ss(r)===0)break e;case"keydown":case"keyup":p=f0;break;case"focusin":x="focus",p=kc;break;case"focusout":x="blur",p=kc;break;case"beforeblur":case"afterblur":p=kc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=g0;break;case xp:case yp:case Sp:p=n0;break;case bp:p=v0;break;case"scroll":p=Jv;break;case"wheel":p=y0;break;case"copy":case"cut":case"paste":p=o0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=tp}var S=(e&4)!==0,m=!S&&t==="scroll",u=S?h!==null?h+"Capture":null:h;S=[];for(var _=c,g;_!==null;){g=_;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,u!==null&&(E=Ga(_,u),E!=null&&S.push(lo(_,E,g)))),m)break;_=_.return}0<S.length&&(h=new p(h,x,null,r,d),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&r!==xc&&(x=r.relatedTarget||r.fromElement)&&(en(x)||x[$r]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=r.relatedTarget||r.toElement,p=c,x=x?en(x):null,x!==null&&(m=Ji(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(S=Jf,E="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(S=tp,E="onPointerLeave",u="onPointerEnter",_="pointer"),m=p==null?h:jn(p),g=x==null?h:jn(x),h=new S(E,_+"leave",p,r,d),h.target=m,h.relatedTarget=g,E=null,en(d)===c&&(S=new S(u,_+"enter",x,r,d),S.target=g,S.relatedTarget=m,E=S),m=E,p&&x)t:{for(S=p,u=x,_=0,g=S;g;g=Gn(g))_++;for(g=0,E=u;E;E=Gn(E))g++;for(;0<_-g;)S=Gn(S),_--;for(;0<g-_;)u=Gn(u),g--;for(;_--;){if(S===u||u!==null&&S===u.alternate)break t;S=Gn(S),u=Gn(u)}S=null}else S=null;p!==null&&Cp(f,h,p,S,!1),x!==null&&m!==null&&Cp(f,m,x,S,!0)}}e:{if(h=c?jn(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=R0;else if(sp(h))if(cp)P=L0;else{P=A0;var R=C0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=P0);if(P&&(P=P(t,c))){lp(f,P,r,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&pc(h,"number",h.value)}switch(R=c?jn(c):window,t){case"focusin":(sp(R)||R.contentEditable==="true")&&(Hn=R,Gc=c,ao=null);break;case"focusout":ao=Gc=Hn=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,_p(f,r,d);break;case"selectionchange":if(N0)break;case"keydown":case"keyup":_p(f,r,d)}var T;if(zc)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Bn?ap(t,r)&&(A="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&(rp&&r.locale!=="ko"&&(Bn||A!=="onCompositionStart"?A==="onCompositionEnd"&&Bn&&(T=$f()):(Ei=d,Dc="value"in Ei?Ei.value:Ei.textContent,Bn=!0)),R=ps(c,A),0<R.length&&(A=new ep(A,t,null,r,d),f.push({event:A,listeners:R}),T?A.data=T:(T=op(r),T!==null&&(A.data=T)))),(T=b0?E0(t,r):M0(t,r))&&(c=ps(c,"onBeforeInput"),0<c.length&&(d=new ep("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:c}),d.data=T))}wp(f,e)})}function lo(t,e,r){return{instance:t,listener:e,currentTarget:r}}function ps(t,e){for(var r=e+"Capture",i=[];t!==null;){var n=t,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=Ga(t,r),a!=null&&i.unshift(lo(t,a,n)),a=Ga(t,e),a!=null&&i.push(lo(t,a,n))),t=t.return}return i}function Gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cp(t,e,r,i,n){for(var a=e._reactName,o=[];r!==null&&r!==i;){var s=r,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,n?(l=Ga(r,a),l!=null&&o.unshift(lo(r,l,s))):n||(l=Ga(r,a),l!=null&&o.push(lo(r,l,s)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var F0=/\r\n?/g,z0=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(F0,`
`).replace(z0,"")}function ms(t,e,r){if(e=Ap(e),Ap(t)!==e&&r)throw Error(ee(425))}function gs(){}var Zc=null,$c=null;function Qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,B0=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof Pp<"u"?function(t){return Pp.resolve(null).then(t).catch(V0)}:Jc;function V0(t){setTimeout(function(){throw t})}function eu(t,e){var r=e,i=0;do{var n=r.nextSibling;if(t.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){t.removeChild(n),Qa(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);Qa(e)}function Ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Lp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),Br="__reactFiber$"+Wn,co="__reactProps$"+Wn,$r="__reactContainer$"+Wn,tu="__reactEvents$"+Wn,G0="__reactListeners$"+Wn,W0="__reactHandles$"+Wn;function en(t){var e=t[Br];if(e)return e;for(var r=t.parentNode;r;){if(e=r[$r]||r[Br]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Lp(t);t!==null;){if(r=t[Br])return r;t=Lp(t)}return e}t=r,r=t.parentNode}return null}function uo(t){return t=t[Br]||t[$r],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function _s(t){return t[co]||null}var ru=[],Xn=-1;function wi(t){return{current:t}}function nt(t){0>Xn||(t.current=ru[Xn],ru[Xn]=null,Xn--)}function tt(t,e){Xn++,ru[Xn]=t.current,t.current=e}var Ri={},Dt=wi(Ri),$t=wi(!1),tn=Ri;function qn(t,e){var r=t.type.contextTypes;if(!r)return Ri;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=n),n}function Qt(t){return t=t.childContextTypes,t!=null}function vs(){nt($t),nt(Dt)}function Ip(t,e,r){if(Dt.current!==Ri)throw Error(ee(168));tt(Dt,e),tt($t,r)}function Dp(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in e))throw Error(ee(108,Cv(t)||"Unknown",n));return ct({},r,i)}function xs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ri,tn=Dt.current,tt(Dt,t),tt($t,$t.current),!0}function Np(t,e,r){var i=t.stateNode;if(!i)throw Error(ee(169));r?(t=Dp(t,e,tn),i.__reactInternalMemoizedMergedChildContext=t,nt($t),nt(Dt),tt(Dt,t)):nt($t),tt($t,r)}var Qr=null,ys=!1,iu=!1;function Up(t){Qr===null?Qr=[t]:Qr.push(t)}function j0(t){ys=!0,Up(t)}function Ci(){if(!iu&&Qr!==null){iu=!0;var t=0,e=Ye;try{var r=Qr;for(Ye=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}Qr=null,ys=!1}catch(n){throw Qr!==null&&(Qr=Qr.slice(t+1)),kf(Tc,Ci),n}finally{Ye=e,iu=!1}}return null}var Yn=[],Kn=0,Ss=null,bs=0,gr=[],_r=0,rn=null,Jr=1,ei="";function nn(t,e){Yn[Kn++]=bs,Yn[Kn++]=Ss,Ss=t,bs=e}function Op(t,e,r){gr[_r++]=Jr,gr[_r++]=ei,gr[_r++]=rn,rn=t;var i=Jr;t=ei;var n=32-wr(i)-1;i&=~(1<<n),r+=1;var a=32-wr(e)+n;if(30<a){var o=n-n%5;a=(i&(1<<o)-1).toString(32),i>>=o,n-=o,Jr=1<<32-wr(e)+n|r<<n|i,ei=a+t}else Jr=1<<a|r<<n|i,ei=t}function nu(t){t.return!==null&&(nn(t,1),Op(t,1,0))}function au(t){for(;t===Ss;)Ss=Yn[--Kn],Yn[Kn]=null,bs=Yn[--Kn],Yn[Kn]=null;for(;t===rn;)rn=gr[--_r],gr[_r]=null,ei=gr[--_r],gr[_r]=null,Jr=gr[--_r],gr[_r]=null}var ur=null,hr=null,st=!1,Cr=null;function kp(t,e){var r=Sr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Fp(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ur=t,hr=Ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ur=t,hr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=rn!==null?{id:Jr,overflow:ei}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Sr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,ur=t,hr=null,!0):!1;default:return!1}}function ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function su(t){if(st){var e=hr;if(e){var r=e;if(!Fp(t,e)){if(ou(t))throw Error(ee(418));e=Ti(r.nextSibling);var i=ur;e&&Fp(t,e)?kp(i,r):(t.flags=t.flags&-4097|2,st=!1,ur=t)}}else{if(ou(t))throw Error(ee(418));t.flags=t.flags&-4097|2,st=!1,ur=t}}}function zp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ur=t}function Es(t){if(t!==ur)return!1;if(!st)return zp(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qc(t.type,t.memoizedProps)),e&&(e=hr)){if(ou(t))throw Bp(),Error(ee(418));for(;e;)kp(t,e),e=Ti(e.nextSibling)}if(zp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){hr=Ti(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}hr=null}}else hr=ur?Ti(t.stateNode.nextSibling):null;return!0}function Bp(){for(var t=hr;t;)t=Ti(t.nextSibling)}function Zn(){hr=ur=null,st=!1}function lu(t){Cr===null?Cr=[t]:Cr.push(t)}var X0=Zr.ReactCurrentBatchConfig;function ho(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(ee(309));var i=r.stateNode}if(!i)throw Error(ee(147,t));var n=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=n.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(ee(284));if(!r._owner)throw Error(ee(290,t))}return t}function Ms(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hp(t){var e=t._init;return e(t._payload)}function Vp(t){function e(u,_){if(t){var g=u.deletions;g===null?(u.deletions=[_],u.flags|=16):g.push(_)}}function r(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function n(u,_){return u=Oi(u,_),u.index=0,u.sibling=null,u}function a(u,_,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<_?(u.flags|=2,_):g):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function s(u,_,g,E){return _===null||_.tag!==6?(_=Qu(g,u.mode,E),_.return=u,_):(_=n(_,g),_.return=u,_)}function l(u,_,g,E){var P=g.type;return P===Nn?d(u,_,g.props.children,E,g.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===_i&&Hp(P)===_.type)?(E=n(_,g.props),E.ref=ho(u,_,g),E.return=u,E):(E=Ys(g.type,g.key,g.props,null,u.mode,E),E.ref=ho(u,_,g),E.return=u,E)}function c(u,_,g,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Ju(g,u.mode,E),_.return=u,_):(_=n(_,g.children||[]),_.return=u,_)}function d(u,_,g,E,P){return _===null||_.tag!==7?(_=dn(g,u.mode,E,P),_.return=u,_):(_=n(_,g),_.return=u,_)}function f(u,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Qu(""+_,u.mode,g),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case jo:return g=Ys(_.type,_.key,_.props,null,u.mode,g),g.ref=ho(u,null,_),g.return=u,g;case Dn:return _=Ju(_,u.mode,g),_.return=u,_;case _i:var E=_._init;return f(u,E(_._payload),g)}if(Ba(_)||Fa(_))return _=dn(_,u.mode,g,null),_.return=u,_;Ms(u,_)}return null}function h(u,_,g,E){var P=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:s(u,_,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case jo:return g.key===P?l(u,_,g,E):null;case Dn:return g.key===P?c(u,_,g,E):null;case _i:return P=g._init,h(u,_,P(g._payload),E)}if(Ba(g)||Fa(g))return P!==null?null:d(u,_,g,E,null);Ms(u,g)}return null}function p(u,_,g,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(g)||null,s(_,u,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case jo:return u=u.get(E.key===null?g:E.key)||null,l(_,u,E,P);case Dn:return u=u.get(E.key===null?g:E.key)||null,c(_,u,E,P);case _i:var R=E._init;return p(u,_,g,R(E._payload),P)}if(Ba(E)||Fa(E))return u=u.get(g)||null,d(_,u,E,P,null);Ms(_,E)}return null}function x(u,_,g,E){for(var P=null,R=null,T=_,A=_=0,X=null;T!==null&&A<g.length;A++){T.index>A?(X=T,T=null):X=T.sibling;var v=h(u,T,g[A],E);if(v===null){T===null&&(T=X);break}t&&T&&v.alternate===null&&e(u,T),_=a(v,_,A),R===null?P=v:R.sibling=v,R=v,T=X}if(A===g.length)return r(u,T),st&&nn(u,A),P;if(T===null){for(;A<g.length;A++)T=f(u,g[A],E),T!==null&&(_=a(T,_,A),R===null?P=T:R.sibling=T,R=T);return st&&nn(u,A),P}for(T=i(u,T);A<g.length;A++)X=p(T,u,A,g[A],E),X!==null&&(t&&X.alternate!==null&&T.delete(X.key===null?A:X.key),_=a(X,_,A),R===null?P=X:R.sibling=X,R=X);return t&&T.forEach(function(y){return e(u,y)}),st&&nn(u,A),P}function S(u,_,g,E){var P=Fa(g);if(typeof P!="function")throw Error(ee(150));if(g=P.call(g),g==null)throw Error(ee(151));for(var R=P=null,T=_,A=_=0,X=null,v=g.next();T!==null&&!v.done;A++,v=g.next()){T.index>A?(X=T,T=null):X=T.sibling;var y=h(u,T,v.value,E);if(y===null){T===null&&(T=X);break}t&&T&&y.alternate===null&&e(u,T),_=a(y,_,A),R===null?P=y:R.sibling=y,R=y,T=X}if(v.done)return r(u,T),st&&nn(u,A),P;if(T===null){for(;!v.done;A++,v=g.next())v=f(u,v.value,E),v!==null&&(_=a(v,_,A),R===null?P=v:R.sibling=v,R=v);return st&&nn(u,A),P}for(T=i(u,T);!v.done;A++,v=g.next())v=p(T,u,A,v.value,E),v!==null&&(t&&v.alternate!==null&&T.delete(v.key===null?A:v.key),_=a(v,_,A),R===null?P=v:R.sibling=v,R=v);return t&&T.forEach(function(D){return e(u,D)}),st&&nn(u,A),P}function m(u,_,g,E){if(typeof g=="object"&&g!==null&&g.type===Nn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case jo:e:{for(var P=g.key,R=_;R!==null;){if(R.key===P){if(P=g.type,P===Nn){if(R.tag===7){r(u,R.sibling),_=n(R,g.props.children),_.return=u,u=_;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===_i&&Hp(P)===R.type){r(u,R.sibling),_=n(R,g.props),_.ref=ho(u,R,g),_.return=u,u=_;break e}r(u,R);break}else e(u,R);R=R.sibling}g.type===Nn?(_=dn(g.props.children,u.mode,E,g.key),_.return=u,u=_):(E=Ys(g.type,g.key,g.props,null,u.mode,E),E.ref=ho(u,_,g),E.return=u,u=E)}return o(u);case Dn:e:{for(R=g.key;_!==null;){if(_.key===R)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){r(u,_.sibling),_=n(_,g.children||[]),_.return=u,u=_;break e}else{r(u,_);break}else e(u,_);_=_.sibling}_=Ju(g,u.mode,E),_.return=u,u=_}return o(u);case _i:return R=g._init,m(u,_,R(g._payload),E)}if(Ba(g))return x(u,_,g,E);if(Fa(g))return S(u,_,g,E);Ms(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(r(u,_.sibling),_=n(_,g),_.return=u,u=_):(r(u,_),_=Qu(g,u.mode,E),_.return=u,u=_),o(u)):r(u,_)}return m}var $n=Vp(!0),Gp=Vp(!1),Ts=wi(null),ws=null,Qn=null,cu=null;function uu(){cu=Qn=ws=null}function hu(t){var e=Ts.current;nt(Ts),t._currentValue=e}function du(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function Jn(t,e){ws=t,cu=Qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function vr(t){var e=t._currentValue;if(cu!==t)if(t={context:t,memoizedValue:e,next:null},Qn===null){if(ws===null)throw Error(ee(308));Qn=t,ws.dependencies={lanes:0,firstContext:t}}else Qn=Qn.next=t;return e}var an=null;function fu(t){an===null?an=[t]:an.push(t)}function Wp(t,e,r,i){var n=e.interleaved;return n===null?(r.next=r,fu(e)):(r.next=n.next,n.next=r),e.interleaved=r,ti(t,i)}function ti(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ai=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pi(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,ti(t,r)}return n=i.interleaved,n===null?(e.next=e,fu(i)):(e.next=n.next,n.next=e),i.interleaved=e,ti(t,r)}function Rs(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Cc(t,r)}}function Xp(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?n=a=e:a=a.next=e}else n=a=e;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Cs(t,e,r,i){var n=t.updateQueue;Ai=!1;var a=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(a!==null){var f=n.baseState;o=0,d=c=l=null,s=a;do{var h=s.lane,p=s.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=t,S=s;switch(h=e,p=r,S.tag){case 1:if(x=S.payload,typeof x=="function"){f=x.call(p,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,h=typeof x=="function"?x.call(p,f,h):x,h==null)break e;f=ct({},f,h);break e;case 2:Ai=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=n.effects,h===null?n.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;h=s,s=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);if(d===null&&(l=f),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=d,e=n.shared.interleaved,e!==null){n=e;do o|=n.lane,n=n.next;while(n!==e)}else a===null&&(n.shared.lanes=0);ln|=o,t.lanes=o,t.memoizedState=f}}function qp(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(ee(191,n));n.call(i)}}}var fo={},Hr=wi(fo),po=wi(fo),mo=wi(fo);function on(t){if(t===fo)throw Error(ee(174));return t}function mu(t,e){switch(tt(mo,e),tt(po,t),tt(Hr,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gc(e,t)}nt(Hr),tt(Hr,e)}function ea(){nt(Hr),nt(po),nt(mo)}function Yp(t){on(mo.current);var e=on(Hr.current),r=gc(e,t.type);e!==r&&(tt(po,t),tt(Hr,r))}function gu(t){po.current===t&&(nt(Hr),nt(po))}var ut=wi(0);function As(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function vu(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Ps=Zr.ReactCurrentDispatcher,xu=Zr.ReactCurrentBatchConfig,sn=0,ht=null,bt=null,Rt=null,Ls=!1,go=!1,_o=0,q0=0;function Nt(){throw Error(ee(321))}function yu(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Rr(t[r],e[r]))return!1;return!0}function Su(t,e,r,i,n,a){if(sn=a,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ps.current=t===null||t.memoizedState===null?$0:Q0,t=r(i,n),go){a=0;do{if(go=!1,_o=0,25<=a)throw Error(ee(301));a+=1,Rt=bt=null,e.updateQueue=null,Ps.current=J0,t=r(i,n)}while(go)}if(Ps.current=Ns,e=bt!==null&&bt.next!==null,sn=0,Rt=bt=ht=null,Ls=!1,e)throw Error(ee(300));return t}function bu(){var t=_o!==0;return _o=0,t}function Vr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ht.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function xr(){if(bt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Rt===null?ht.memoizedState:Rt.next;if(e!==null)Rt=e,bt=t;else{if(t===null)throw Error(ee(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Rt===null?ht.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function vo(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=xr(),r=e.queue;if(r===null)throw Error(ee(311));r.lastRenderedReducer=t;var i=bt,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var o=n.next;n.next=a.next,a.next=o}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var s=o=null,l=null,c=a;do{var d=c.lane;if((sn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,o=i):l=l.next=f,ht.lanes|=d,ln|=d}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=s,Rr(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,r.lastRenderedState=i}if(t=r.interleaved,t!==null){n=t;do a=n.lane,ht.lanes|=a,ln|=a,n=n.next;while(n!==t)}else n===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Mu(t){var e=xr(),r=e.queue;if(r===null)throw Error(ee(311));r.lastRenderedReducer=t;var i=r.dispatch,n=r.pending,a=e.memoizedState;if(n!==null){r.pending=null;var o=n=n.next;do a=t(a,o.action),o=o.next;while(o!==n);Rr(a,e.memoizedState)||(Jt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,i]}function Kp(){}function Zp(t,e){var r=ht,i=xr(),n=e(),a=!Rr(i.memoizedState,n);if(a&&(i.memoizedState=n,Jt=!0),i=i.queue,Tu(Jp.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||Rt!==null&&Rt.memoizedState.tag&1){if(r.flags|=2048,xo(9,Qp.bind(null,r,i,n,e),void 0,null),Ct===null)throw Error(ee(349));sn&30||$p(r,e,n)}return n}function $p(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Qp(t,e,r,i){e.value=r,e.getSnapshot=i,em(e)&&tm(t)}function Jp(t,e,r){return r(function(){em(e)&&tm(t)})}function em(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Rr(t,r)}catch{return!0}}function tm(t){var e=ti(t,1);e!==null&&Ir(e,t,1,-1)}function rm(t){var e=Vr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},e.queue=t,t=t.dispatch=Z0.bind(null,ht,t),[e.memoizedState,t]}function xo(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function im(){return xr().memoizedState}function Is(t,e,r,i){var n=Vr();ht.flags|=t,n.memoizedState=xo(1|e,r,void 0,i===void 0?null:i)}function Ds(t,e,r,i){var n=xr();i=i===void 0?null:i;var a=void 0;if(bt!==null){var o=bt.memoizedState;if(a=o.destroy,i!==null&&yu(i,o.deps)){n.memoizedState=xo(e,r,a,i);return}}ht.flags|=t,n.memoizedState=xo(1|e,r,a,i)}function nm(t,e){return Is(8390656,8,t,e)}function Tu(t,e){return Ds(2048,8,t,e)}function am(t,e){return Ds(4,2,t,e)}function om(t,e){return Ds(4,4,t,e)}function sm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lm(t,e,r){return r=r!=null?r.concat([t]):null,Ds(4,4,sm.bind(null,e,t),r)}function wu(){}function cm(t,e){var r=xr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&yu(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function um(t,e){var r=xr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&yu(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function hm(t,e,r){return sn&21?(Rr(r,e)||(r=Hf(),ht.lanes|=r,ln|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=r)}function Y0(t,e){var r=Ye;Ye=r!==0&&4>r?r:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{Ye=r,xu.transition=i}}function dm(){return xr().memoizedState}function K0(t,e,r){var i=Ni(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},fm(t))pm(e,r);else if(r=Wp(t,e,r,i),r!==null){var n=Wt();Ir(r,t,i,n),mm(r,e,i)}}function Z0(t,e,r){var i=Ni(t),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(fm(t))pm(e,n);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,r);if(n.hasEagerState=!0,n.eagerState=s,Rr(s,o)){var l=e.interleaved;l===null?(n.next=n,fu(e)):(n.next=l.next,l.next=n),e.interleaved=n;return}}catch{}finally{}r=Wp(t,e,n,i),r!==null&&(n=Wt(),Ir(r,t,i,n),mm(r,e,i))}}function fm(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function pm(t,e){go=Ls=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function mm(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Cc(t,r)}}var Ns={readContext:vr,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},$0={readContext:vr,useCallback:function(t,e){return Vr().memoizedState=[t,e===void 0?null:e],t},useContext:vr,useEffect:nm,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Is(4194308,4,sm.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Is(4194308,4,t,e)},useInsertionEffect:function(t,e){return Is(4,2,t,e)},useMemo:function(t,e){var r=Vr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=Vr();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=K0.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Vr();return t={current:t},e.memoizedState=t},useState:rm,useDebugValue:wu,useDeferredValue:function(t){return Vr().memoizedState=t},useTransition:function(){var t=rm(!1),e=t[0];return t=Y0.bind(null,t[1]),Vr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=ht,n=Vr();if(st){if(r===void 0)throw Error(ee(407));r=r()}else{if(r=e(),Ct===null)throw Error(ee(349));sn&30||$p(i,e,r)}n.memoizedState=r;var a={value:r,getSnapshot:e};return n.queue=a,nm(Jp.bind(null,i,a,t),[t]),i.flags|=2048,xo(9,Qp.bind(null,i,a,r,e),void 0,null),r},useId:function(){var t=Vr(),e=Ct.identifierPrefix;if(st){var r=ei,i=Jr;r=(i&~(1<<32-wr(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=_o++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=q0++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Q0={readContext:vr,useCallback:cm,useContext:vr,useEffect:Tu,useImperativeHandle:lm,useInsertionEffect:am,useLayoutEffect:om,useMemo:um,useReducer:Eu,useRef:im,useState:function(){return Eu(vo)},useDebugValue:wu,useDeferredValue:function(t){var e=xr();return hm(e,bt.memoizedState,t)},useTransition:function(){var t=Eu(vo)[0],e=xr().memoizedState;return[t,e]},useMutableSource:Kp,useSyncExternalStore:Zp,useId:dm,unstable_isNewReconciler:!1},J0={readContext:vr,useCallback:cm,useContext:vr,useEffect:Tu,useImperativeHandle:lm,useInsertionEffect:am,useLayoutEffect:om,useMemo:um,useReducer:Mu,useRef:im,useState:function(){return Mu(vo)},useDebugValue:wu,useDeferredValue:function(t){var e=xr();return bt===null?e.memoizedState=t:hm(e,bt.memoizedState,t)},useTransition:function(){var t=Mu(vo)[0],e=xr().memoizedState;return[t,e]},useMutableSource:Kp,useSyncExternalStore:Zp,useId:dm,unstable_isNewReconciler:!1};function Ar(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Ru(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:ct({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Us={isMounted:function(t){return(t=t._reactInternals)?Ji(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=Wt(),n=Ni(t),a=ri(i,n);a.payload=e,r!=null&&(a.callback=r),e=Pi(t,a,n),e!==null&&(Ir(e,t,n,i),Rs(e,t,n))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=Wt(),n=Ni(t),a=ri(i,n);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=Pi(t,a,n),e!==null&&(Ir(e,t,n,i),Rs(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Wt(),i=Ni(t),n=ri(r,i);n.tag=2,e!=null&&(n.callback=e),e=Pi(t,n,i),e!==null&&(Ir(e,t,i,r),Rs(e,t,i))}};function gm(t,e,r,i,n,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!no(r,i)||!no(n,a):!0}function _m(t,e,r){var i=!1,n=Ri,a=e.contextType;return typeof a=="object"&&a!==null?a=vr(a):(n=Qt(e)?tn:Dt.current,i=e.contextTypes,a=(i=i!=null)?qn(t,n):Ri),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Us,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),e}function vm(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&Us.enqueueReplaceState(e,e.state,null)}function Cu(t,e,r,i){var n=t.stateNode;n.props=r,n.state=t.memoizedState,n.refs={},pu(t);var a=e.contextType;typeof a=="object"&&a!==null?n.context=vr(a):(a=Qt(e)?tn:Dt.current,n.context=qn(t,a)),n.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Ru(t,e,a,r),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&Us.enqueueReplaceState(n,n.state,null),Cs(t,r,n,i),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e){try{var r="",i=e;do r+=Rv(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:n,digest:null}}function Au(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Pu(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var ex=typeof WeakMap=="function"?WeakMap:Map;function xm(t,e,r){r=ri(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){Vs||(Vs=!0,Wu=i),Pu(t,e)},r}function ym(t,e,r){r=ri(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;r.payload=function(){return i(n)},r.callback=function(){Pu(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Pu(t,e),typeof i!="function"&&(Ii===null?Ii=new Set([this]):Ii.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function Sm(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new ex;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(r)||(n.add(r),t=px.bind(null,t,e,r),e.then(t,t))}function bm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Em(t,e,r,i,n){return t.mode&1?(t.flags|=65536,t.lanes=n,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=ri(-1,1),e.tag=2,Pi(r,e,1))),r.lanes|=1),t)}var tx=Zr.ReactCurrentOwner,Jt=!1;function Gt(t,e,r,i){e.child=t===null?Gp(e,null,r,i):$n(e,t.child,r,i)}function Mm(t,e,r,i,n){r=r.render;var a=e.ref;return Jn(e,n),i=Su(t,e,r,i,a,n),r=bu(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,ii(t,e,n)):(st&&r&&nu(e),e.flags|=1,Gt(t,e,i,n),e.child)}function Tm(t,e,r,i,n){if(t===null){var a=r.type;return typeof a=="function"&&!$u(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,wm(t,e,a,i,n)):(t=Ys(r.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&n)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:no,r(o,i)&&t.ref===e.ref)return ii(t,e,n)}return e.flags|=1,t=Oi(a,i),t.ref=e.ref,t.return=e,e.child=t}function wm(t,e,r,i,n){if(t!==null){var a=t.memoizedProps;if(no(a,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=a,(t.lanes&n)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,ii(t,e,n)}return Lu(t,e,r,i,n)}function Rm(t,e,r){var i=e.pendingProps,n=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ia,dr),dr|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(ia,dr),dr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,tt(ia,dr),dr|=i}else a!==null?(i=a.baseLanes|r,e.memoizedState=null):i=r,tt(ia,dr),dr|=i;return Gt(t,e,n,r),e.child}function Cm(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Lu(t,e,r,i,n){var a=Qt(r)?tn:Dt.current;return a=qn(e,a),Jn(e,n),r=Su(t,e,r,i,a,n),i=bu(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,ii(t,e,n)):(st&&i&&nu(e),e.flags|=1,Gt(t,e,r,n),e.child)}function Am(t,e,r,i,n){if(Qt(r)){var a=!0;xs(e)}else a=!1;if(Jn(e,n),e.stateNode===null)ks(t,e),_m(e,r,i),Cu(e,r,i,n),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=vr(c):(c=Qt(r)?tn:Dt.current,c=qn(e,c));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==c)&&vm(e,o,i,c),Ai=!1;var h=e.memoizedState;o.state=h,Cs(e,i,o,n),l=e.memoizedState,s!==i||h!==l||$t.current||Ai?(typeof d=="function"&&(Ru(e,r,d,i),l=e.memoizedState),(s=Ai||gm(e,r,s,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,jp(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:Ar(e.type,s),o.props=c,f=e.pendingProps,h=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=vr(l):(l=Qt(r)?tn:Dt.current,l=qn(e,l));var p=r.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==l)&&vm(e,o,i,l),Ai=!1,h=e.memoizedState,o.state=h,Cs(e,i,o,n);var x=e.memoizedState;s!==f||h!==x||$t.current||Ai?(typeof p=="function"&&(Ru(e,r,p,i),x=e.memoizedState),(c=Ai||gm(e,r,c,i,h,x,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Iu(t,e,r,i,a,n)}function Iu(t,e,r,i,n,a){Cm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return n&&Np(e,r,!1),ii(t,e,a);i=e.stateNode,tx.current=e;var s=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$n(e,t.child,null,a),e.child=$n(e,null,s,a)):Gt(t,e,s,a),e.memoizedState=i.state,n&&Np(e,r,!0),e.child}function Pm(t){var e=t.stateNode;e.pendingContext?Ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ip(t,e.context,!1),mu(t,e.containerInfo)}function Lm(t,e,r,i,n){return Zn(),lu(n),e.flags|=256,Gt(t,e,r,i),e.child}var Du={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Im(t,e,r){var i=e.pendingProps,n=ut.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(n&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(n|=1),tt(ut,n&1),t===null)return su(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ks(o,i,0,null),t=dn(t,i,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Nu(r),e.memoizedState=Du,t):Uu(e,o));if(n=t.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return rx(t,e,o,i,s,n,r);if(a){a=i.fallback,o=e.mode,n=t.child,s=n.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==n?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(n,l),i.subtreeFlags=n.subtreeFlags&14680064),s!==null?a=Oi(s,a):(a=dn(a,o,r,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?Nu(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~r,e.memoizedState=Du,i}return a=t.child,t=a.sibling,i=Oi(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Uu(t,e){return e=Ks({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Os(t,e,r,i){return i!==null&&lu(i),$n(e,t.child,null,r),t=Uu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rx(t,e,r,i,n,a,o){if(r)return e.flags&256?(e.flags&=-257,i=Au(Error(ee(422))),Os(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,n=e.mode,i=Ks({mode:"visible",children:i.children},n,0,null),a=dn(a,n,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&$n(e,t.child,null,o),e.child.memoizedState=Nu(o),e.memoizedState=Du,a);if(!(e.mode&1))return Os(t,e,o,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(ee(419)),i=Au(a,i,void 0),Os(t,e,o,i)}if(s=(o&t.childLanes)!==0,Jt||s){if(i=Ct,i!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|o)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,ti(t,n),Ir(i,t,n,-1))}return Zu(),i=Au(Error(ee(421))),Os(t,e,o,i)}return n.data==="$?"?(e.flags|=128,e.child=t.child,e=mx.bind(null,t),n._reactRetry=e,null):(t=a.treeContext,hr=Ti(n.nextSibling),ur=e,st=!0,Cr=null,t!==null&&(gr[_r++]=Jr,gr[_r++]=ei,gr[_r++]=rn,Jr=t.id,ei=t.overflow,rn=e),e=Uu(e,i.children),e.flags|=4096,e)}function Dm(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),du(t.return,e,r)}function Ou(t,e,r,i,n){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function Nm(t,e,r){var i=e.pendingProps,n=i.revealOrder,a=i.tail;if(Gt(t,e,i.children,r),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dm(t,r,e);else if(t.tag===19)Dm(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(r=e.child,n=null;r!==null;)t=r.alternate,t!==null&&As(t)===null&&(n=r),r=r.sibling;r=n,r===null?(n=e.child,e.child=null):(n=r.sibling,r.sibling=null),Ou(e,!1,n,r,a);break;case"backwards":for(r=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&As(t)===null){e.child=n;break}t=n.sibling,n.sibling=r,r=n,n=t}Ou(e,!0,r,null,a);break;case"together":Ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ks(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ii(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),ln|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,r=Oi(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Oi(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function ix(t,e,r){switch(e.tag){case 3:Pm(e),Zn();break;case 5:Yp(e);break;case 1:Qt(e.type)&&xs(e);break;case 4:mu(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,n=e.memoizedProps.value;tt(Ts,i._currentValue),i._currentValue=n;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ut,ut.current&1),e.flags|=128,null):r&e.child.childLanes?Im(t,e,r):(tt(ut,ut.current&1),t=ii(t,e,r),t!==null?t.sibling:null);tt(ut,ut.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return Nm(t,e,r);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Rm(t,e,r)}return ii(t,e,r)}var Um,ku,Om,km;Um=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},ku=function(){},Om=function(t,e,r,i){var n=t.memoizedProps;if(n!==i){t=e.stateNode,on(Hr.current);var a=null;switch(r){case"input":n=dc(t,n),i=dc(t,i),a=[];break;case"select":n=ct({},n,{value:void 0}),i=ct({},i,{value:void 0}),a=[];break;case"textarea":n=mc(t,n),i=mc(t,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gs)}_c(r,i);var o;r=null;for(c in n)if(!i.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var s=n[c];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ka.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(s=n==null?void 0:n[c],i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ka.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),a||s===l||(a=[])):(a=a||[]).push(c,l))}r&&(a=a||[]).push("style",r);var c=a;(e.updateQueue=c)&&(e.flags|=4)}},km=function(t,e,r,i){r!==i&&(e.flags|=4)};function yo(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function nx(t,e,r){var i=e.pendingProps;switch(au(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(e),null;case 1:return Qt(e.type)&&vs(),Ut(e),null;case 3:return i=e.stateNode,ea(),nt($t),nt(Dt),vu(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Es(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cr!==null&&(qu(Cr),Cr=null))),ku(t,e),Ut(e),null;case 5:gu(e);var n=on(mo.current);if(r=e.type,t!==null&&e.stateNode!=null)Om(t,e,r,i,n),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ut(e),null}if(t=on(Hr.current),Es(e)){i=e.stateNode,r=e.type;var a=e.memoizedProps;switch(i[Br]=e,i[co]=a,t=(e.mode&1)!==0,r){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(n=0;n<oo.length;n++)it(oo[n],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":_f(i,a),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},it("invalid",i);break;case"textarea":yf(i,a),it("invalid",i)}_c(r,a),n=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&ms(i.textContent,s,t),n=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ms(i.textContent,s,t),n=["children",""+s]):ka.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&it("scroll",i)}switch(r){case"input":Xo(i),xf(i,a,!0);break;case"textarea":Xo(i),bf(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=gs)}i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ef(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(r,{is:i.is}):(t=o.createElement(r),r==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,r),t[Br]=e,t[co]=i,Um(t,e,!1,!1),e.stateNode=t;e:{switch(o=vc(r,i),r){case"dialog":it("cancel",t),it("close",t),n=i;break;case"iframe":case"object":case"embed":it("load",t),n=i;break;case"video":case"audio":for(n=0;n<oo.length;n++)it(oo[n],t);n=i;break;case"source":it("error",t),n=i;break;case"img":case"image":case"link":it("error",t),it("load",t),n=i;break;case"details":it("toggle",t),n=i;break;case"input":_f(t,i),n=dc(t,i),it("invalid",t);break;case"option":n=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},n=ct({},i,{value:void 0}),it("invalid",t);break;case"textarea":yf(t,i),n=mc(t,i),it("invalid",t);break;default:n=i}_c(r,n),s=n;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?wf(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mf(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ha(t,l):typeof l=="number"&&Ha(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ka.hasOwnProperty(a)?l!=null&&a==="onScroll"&&it("scroll",t):l!=null&&tc(t,a,l,o))}switch(r){case"input":Xo(t),xf(t,i,!1);break;case"textarea":Xo(t),bf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+vi(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Un(t,!!i.multiple,a,!1):i.defaultValue!=null&&Un(t,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(t.onclick=gs)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ut(e),null;case 6:if(t&&e.stateNode!=null)km(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(r=on(mo.current),on(Hr.current),Es(e)){if(i=e.stateNode,r=e.memoizedProps,i[Br]=e,(a=i.nodeValue!==r)&&(t=ur,t!==null))switch(t.tag){case 3:ms(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ms(i.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Br]=e,e.stateNode=i}return Ut(e),null;case 13:if(nt(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&hr!==null&&e.mode&1&&!(e.flags&128))Bp(),Zn(),e.flags|=98560,a=!1;else if(a=Es(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ee(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ee(317));a[Br]=e}else Zn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ut(e),a=!1}else Cr!==null&&(qu(Cr),Cr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Et===0&&(Et=3):Zu())),e.updateQueue!==null&&(e.flags|=4),Ut(e),null);case 4:return ea(),ku(t,e),t===null&&so(e.stateNode.containerInfo),Ut(e),null;case 10:return hu(e.type._context),Ut(e),null;case 17:return Qt(e.type)&&vs(),Ut(e),null;case 19:if(nt(ut),a=e.memoizedState,a===null)return Ut(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)yo(a,!1);else{if(Et!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=As(t),o!==null){for(e.flags|=128,yo(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)a=r,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return tt(ut,ut.current&1|2),e.child}t=t.sibling}a.tail!==null&&mt()>na&&(e.flags|=128,i=!0,yo(a,!1),e.lanes=4194304)}else{if(!i)if(t=As(o),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),yo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!st)return Ut(e),null}else 2*mt()-a.renderingStartTime>na&&r!==1073741824&&(e.flags|=128,i=!0,yo(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(r=a.last,r!==null?r.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=mt(),e.sibling=null,r=ut.current,tt(ut,i?r&1|2:r&1),e):(Ut(e),null);case 22:case 23:return Ku(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dr&1073741824&&(Ut(e),e.subtreeFlags&6&&(e.flags|=8192)):Ut(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function ax(t,e){switch(au(e),e.tag){case 1:return Qt(e.type)&&vs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),nt($t),nt(Dt),vu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gu(e),null;case 13:if(nt(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Zn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ut),null;case 4:return ea(),null;case 10:return hu(e.type._context),null;case 22:case 23:return Ku(),null;case 24:return null;default:return null}}var Fs=!1,Ot=!1,ox=typeof WeakSet=="function"?WeakSet:Set,de=null;function ra(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){dt(t,e,i)}else r.current=null}function Fm(t,e,r){try{r()}catch(i){dt(t,e,i)}}var zm=!1;function sx(t,e){if(Zc=ns,t=gp(),Vc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==r||n!==0&&f.nodeType!==3||(s=o+n),f!==a||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===r&&++c===n&&(s=o),h===a&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for($c={focusedElem:t,selectionRange:r},ns=!1,de=e;de!==null;)if(e=de,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,de=t;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var S=x.memoizedProps,m=x.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Ar(e.type,S),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(E){dt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}return x=zm,zm=!1,x}function So(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&t)===t){var a=n.destroy;n.destroy=void 0,a!==void 0&&Fm(e,r,a)}n=n.next}while(n!==i)}}function zs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Fu(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Bm(t){var e=t.alternate;e!==null&&(t.alternate=null,Bm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Br],delete e[co],delete e[tu],delete e[G0],delete e[W0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hm(t){return t.tag===5||t.tag===3||t.tag===4}function Vm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=gs));else if(i!==4&&(t=t.child,t!==null))for(zu(t,e,r),t=t.sibling;t!==null;)zu(t,e,r),t=t.sibling}function Bu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bu(t,e,r),t=t.sibling;t!==null;)Bu(t,e,r),t=t.sibling}var Lt=null,Pr=!1;function Li(t,e,r){for(r=r.child;r!==null;)Gm(t,e,r),r=r.sibling}function Gm(t,e,r){if(zr&&typeof zr.onCommitFiberUnmount=="function")try{zr.onCommitFiberUnmount(Qo,r)}catch{}switch(r.tag){case 5:Ot||ra(r,e);case 6:var i=Lt,n=Pr;Lt=null,Li(t,e,r),Lt=i,Pr=n,Lt!==null&&(Pr?(t=Lt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Lt.removeChild(r.stateNode));break;case 18:Lt!==null&&(Pr?(t=Lt,r=r.stateNode,t.nodeType===8?eu(t.parentNode,r):t.nodeType===1&&eu(t,r),Qa(t)):eu(Lt,r.stateNode));break;case 4:i=Lt,n=Pr,Lt=r.stateNode.containerInfo,Pr=!0,Li(t,e,r),Lt=i,Pr=n;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Fm(r,e,o),n=n.next}while(n!==i)}Li(t,e,r);break;case 1:if(!Ot&&(ra(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(s){dt(r,e,s)}Li(t,e,r);break;case 21:Li(t,e,r);break;case 22:r.mode&1?(Ot=(i=Ot)||r.memoizedState!==null,Li(t,e,r),Ot=i):Li(t,e,r);break;default:Li(t,e,r)}}function Wm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new ox),e.forEach(function(i){var n=gx.bind(null,t,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Lr(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Lt=s.stateNode,Pr=!1;break e;case 3:Lt=s.stateNode.containerInfo,Pr=!0;break e;case 4:Lt=s.stateNode.containerInfo,Pr=!0;break e}s=s.return}if(Lt===null)throw Error(ee(160));Gm(a,o,n),Lt=null,Pr=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(c){dt(n,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jm(e,t),e=e.sibling}function jm(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lr(e,t),Gr(t),i&4){try{So(3,t,t.return),zs(3,t)}catch(S){dt(t,t.return,S)}try{So(5,t,t.return)}catch(S){dt(t,t.return,S)}}break;case 1:Lr(e,t),Gr(t),i&512&&r!==null&&ra(r,r.return);break;case 5:if(Lr(e,t),Gr(t),i&512&&r!==null&&ra(r,r.return),t.flags&32){var n=t.stateNode;try{Ha(n,"")}catch(S){dt(t,t.return,S)}}if(i&4&&(n=t.stateNode,n!=null)){var a=t.memoizedProps,o=r!==null?r.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&vf(n,a),vc(s,o);var c=vc(s,a);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?wf(n,f):d==="dangerouslySetInnerHTML"?Mf(n,f):d==="children"?Ha(n,f):tc(n,d,f,c)}switch(s){case"input":fc(n,a);break;case"textarea":Sf(n,a);break;case"select":var h=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Un(n,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?Un(n,!!a.multiple,a.defaultValue,!0):Un(n,!!a.multiple,a.multiple?[]:"",!1))}n[co]=a}catch(S){dt(t,t.return,S)}}break;case 6:if(Lr(e,t),Gr(t),i&4){if(t.stateNode===null)throw Error(ee(162));n=t.stateNode,a=t.memoizedProps;try{n.nodeValue=a}catch(S){dt(t,t.return,S)}}break;case 3:if(Lr(e,t),Gr(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Qa(e.containerInfo)}catch(S){dt(t,t.return,S)}break;case 4:Lr(e,t),Gr(t);break;case 13:Lr(e,t),Gr(t),n=t.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(Gu=mt())),i&4&&Wm(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||d,Lr(e,t),Ot=c):Lr(e,t),Gr(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(de=t,d=t.child;d!==null;){for(f=de=d;de!==null;){switch(h=de,p=h.child,h.tag){case 0:case 11:case 14:case 15:So(4,h,h.return);break;case 1:ra(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,r=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(S){dt(i,r,S)}}break;case 5:ra(h,h.return);break;case 22:if(h.memoizedState!==null){Ym(f);continue}}p!==null?(p.return=h,de=p):Ym(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{n=f.stateNode,c?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Tf("display",o))}catch(S){dt(t,t.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){dt(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lr(e,t),Gr(t),i&4&&Wm(t);break;case 21:break;default:Lr(e,t),Gr(t)}}function Gr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Hm(r)){var i=r;break e}r=r.return}throw Error(ee(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(Ha(n,""),i.flags&=-33);var a=Vm(t);Bu(t,a,n);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Vm(t);zu(t,s,o);break;default:throw Error(ee(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lx(t,e,r){de=t,Xm(t)}function Xm(t,e,r){for(var i=(t.mode&1)!==0;de!==null;){var n=de,a=n.child;if(n.tag===22&&i){var o=n.memoizedState!==null||Fs;if(!o){var s=n.alternate,l=s!==null&&s.memoizedState!==null||Ot;s=Fs;var c=Ot;if(Fs=o,(Ot=l)&&!c)for(de=n;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Km(n):l!==null?(l.return=o,de=l):Km(n);for(;a!==null;)de=a,Xm(a),a=a.sibling;de=n,Fs=s,Ot=c}qm(t)}else n.subtreeFlags&8772&&a!==null?(a.return=n,de=a):qm(t)}}function qm(t){for(;de!==null;){var e=de;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||zs(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(r===null)i.componentDidMount();else{var n=e.elementType===e.type?r.memoizedProps:Ar(e.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&qp(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}qp(e,o,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Qa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Ot||e.flags&512&&Fu(e)}catch(h){dt(e,e.return,h)}}if(e===t){de=null;break}if(r=e.sibling,r!==null){r.return=e.return,de=r;break}de=e.return}}function Ym(t){for(;de!==null;){var e=de;if(e===t){de=null;break}var r=e.sibling;if(r!==null){r.return=e.return,de=r;break}de=e.return}}function Km(t){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{zs(4,e)}catch(l){dt(e,r,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var n=e.return;try{i.componentDidMount()}catch(l){dt(e,n,l)}}var a=e.return;try{Fu(e)}catch(l){dt(e,a,l)}break;case 5:var o=e.return;try{Fu(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){de=null;break}var s=e.sibling;if(s!==null){s.return=e.return,de=s;break}de=e.return}}var cx=Math.ceil,Bs=Zr.ReactCurrentDispatcher,Hu=Zr.ReactCurrentOwner,yr=Zr.ReactCurrentBatchConfig,We=0,Ct=null,xt=null,It=0,dr=0,ia=wi(0),Et=0,bo=null,ln=0,Hs=0,Vu=0,Eo=null,er=null,Gu=0,na=1/0,ni=null,Vs=!1,Wu=null,Ii=null,Gs=!1,Di=null,Ws=0,Mo=0,ju=null,js=-1,Xs=0;function Wt(){return We&6?mt():js!==-1?js:js=mt()}function Ni(t){return t.mode&1?We&2&&It!==0?It&-It:X0.transition!==null?(Xs===0&&(Xs=Hf()),Xs):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:Zf(t.type)),t):1}function Ir(t,e,r,i){if(50<Mo)throw Mo=0,ju=null,Error(ee(185));qa(t,r,i),(!(We&2)||t!==Ct)&&(t===Ct&&(!(We&2)&&(Hs|=r),Et===4&&Ui(t,It)),tr(t,i),r===1&&We===0&&!(e.mode&1)&&(na=mt()+500,ys&&Ci()))}function tr(t,e){var r=t.callbackNode;Xv(t,e);var i=ts(t,t===Ct?It:0);if(i===0)r!==null&&Ff(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&Ff(r),e===1)t.tag===0?j0($m.bind(null,t)):Up($m.bind(null,t)),H0(function(){!(We&6)&&Ci()}),r=null;else{switch(Vf(i)){case 1:r=Tc;break;case 4:r=zf;break;case 16:r=$o;break;case 536870912:r=Bf;break;default:r=$o}r=ag(r,Zm.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Zm(t,e){if(js=-1,Xs=0,We&6)throw Error(ee(327));var r=t.callbackNode;if(aa()&&t.callbackNode!==r)return null;var i=ts(t,t===Ct?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=qs(t,i);else{e=i;var n=We;We|=2;var a=Jm();(Ct!==t||It!==e)&&(ni=null,na=mt()+500,un(t,e));do try{dx();break}catch(s){Qm(t,s)}while(!0);uu(),Bs.current=a,We=n,xt!==null?e=0:(Ct=null,It=0,e=Et)}if(e!==0){if(e===2&&(n=wc(t),n!==0&&(i=n,e=Xu(t,n))),e===1)throw r=bo,un(t,0),Ui(t,i),tr(t,mt()),r;if(e===6)Ui(t,i);else{if(n=t.current.alternate,!(i&30)&&!ux(n)&&(e=qs(t,i),e===2&&(a=wc(t),a!==0&&(i=a,e=Xu(t,a))),e===1))throw r=bo,un(t,0),Ui(t,i),tr(t,mt()),r;switch(t.finishedWork=n,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:hn(t,er,ni);break;case 3:if(Ui(t,i),(i&130023424)===i&&(e=Gu+500-mt(),10<e)){if(ts(t,0)!==0)break;if(n=t.suspendedLanes,(n&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&n;break}t.timeoutHandle=Jc(hn.bind(null,t,er,ni),e);break}hn(t,er,ni);break;case 4:if(Ui(t,i),(i&4194240)===i)break;for(e=t.eventTimes,n=-1;0<i;){var o=31-wr(i);a=1<<o,o=e[o],o>n&&(n=o),i&=~a}if(i=n,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*cx(i/1960))-i,10<i){t.timeoutHandle=Jc(hn.bind(null,t,er,ni),i);break}hn(t,er,ni);break;case 5:hn(t,er,ni);break;default:throw Error(ee(329))}}}return tr(t,mt()),t.callbackNode===r?Zm.bind(null,t):null}function Xu(t,e){var r=Eo;return t.current.memoizedState.isDehydrated&&(un(t,e).flags|=256),t=qs(t,e),t!==2&&(e=er,er=r,e!==null&&qu(e)),t}function qu(t){er===null?er=t:er.push.apply(er,t)}function ux(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!Rr(a(),n))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ui(t,e){for(e&=~Vu,e&=~Hs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-wr(e),i=1<<r;t[r]=-1,e&=~i}}function $m(t){if(We&6)throw Error(ee(327));aa();var e=ts(t,0);if(!(e&1))return tr(t,mt()),null;var r=qs(t,e);if(t.tag!==0&&r===2){var i=wc(t);i!==0&&(e=i,r=Xu(t,i))}if(r===1)throw r=bo,un(t,0),Ui(t,e),tr(t,mt()),r;if(r===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hn(t,er,ni),tr(t,mt()),null}function Yu(t,e){var r=We;We|=1;try{return t(e)}finally{We=r,We===0&&(na=mt()+500,ys&&Ci())}}function cn(t){Di!==null&&Di.tag===0&&!(We&6)&&aa();var e=We;We|=1;var r=yr.transition,i=Ye;try{if(yr.transition=null,Ye=1,t)return t()}finally{Ye=i,yr.transition=r,We=e,!(We&6)&&Ci()}}function Ku(){dr=ia.current,nt(ia)}function un(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,B0(r)),xt!==null)for(r=xt.return;r!==null;){var i=r;switch(au(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vs();break;case 3:ea(),nt($t),nt(Dt),vu();break;case 5:gu(i);break;case 4:ea();break;case 13:nt(ut);break;case 19:nt(ut);break;case 10:hu(i.type._context);break;case 22:case 23:Ku()}r=r.return}if(Ct=t,xt=t=Oi(t.current,null),It=dr=e,Et=0,bo=null,Vu=Hs=ln=0,er=Eo=null,an!==null){for(e=0;e<an.length;e++)if(r=an[e],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=n,i.next=o}r.pending=i}an=null}return t}function Qm(t,e){do{var r=xt;try{if(uu(),Ps.current=Ns,Ls){for(var i=ht.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}Ls=!1}if(sn=0,Rt=bt=ht=null,go=!1,_o=0,Hu.current=null,r===null||r.return===null){Et=1,bo=e,xt=null;break}e:{var a=t,o=r.return,s=r,l=e;if(e=It,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=bm(o);if(p!==null){p.flags&=-257,Em(p,o,s,a,e),p.mode&1&&Sm(a,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var S=new Set;S.add(l),e.updateQueue=S}else x.add(l);break e}else{if(!(e&1)){Sm(a,c,e),Zu();break e}l=Error(ee(426))}}else if(st&&s.mode&1){var m=bm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Em(m,o,s,a,e),lu(ta(l,s));break e}}a=l=ta(l,s),Et!==4&&(Et=2),Eo===null?Eo=[a]:Eo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var u=xm(a,l,e);Xp(a,u);break e;case 1:s=l;var _=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ii===null||!Ii.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var E=ym(a,s,e);Xp(a,E);break e}}a=a.return}while(a!==null)}tg(r)}catch(P){e=P,xt===r&&r!==null&&(xt=r=r.return);continue}break}while(!0)}function Jm(){var t=Bs.current;return Bs.current=Ns,t===null?Ns:t}function Zu(){(Et===0||Et===3||Et===2)&&(Et=4),Ct===null||!(ln&268435455)&&!(Hs&268435455)||Ui(Ct,It)}function qs(t,e){var r=We;We|=2;var i=Jm();(Ct!==t||It!==e)&&(ni=null,un(t,e));do try{hx();break}catch(n){Qm(t,n)}while(!0);if(uu(),We=r,Bs.current=i,xt!==null)throw Error(ee(261));return Ct=null,It=0,Et}function hx(){for(;xt!==null;)eg(xt)}function dx(){for(;xt!==null&&!kv();)eg(xt)}function eg(t){var e=ng(t.alternate,t,dr);t.memoizedProps=t.pendingProps,e===null?tg(t):xt=e,Hu.current=null}function tg(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=ax(r,e),r!==null){r.flags&=32767,xt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,xt=null;return}}else if(r=nx(r,e,dr),r!==null){xt=r;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Et===0&&(Et=5)}function hn(t,e,r){var i=Ye,n=yr.transition;try{yr.transition=null,Ye=1,fx(t,e,r,i)}finally{yr.transition=n,Ye=i}return null}function fx(t,e,r,i){do aa();while(Di!==null);if(We&6)throw Error(ee(327));r=t.finishedWork;var n=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(qv(t,a),t===Ct&&(xt=Ct=null,It=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Gs||(Gs=!0,ag($o,function(){return aa(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=yr.transition,yr.transition=null;var o=Ye;Ye=1;var s=We;We|=4,Hu.current=null,sx(t,r),jm(r,t),D0($c),ns=!!Zc,$c=Zc=null,t.current=r,lx(r),Fv(),We=s,Ye=o,yr.transition=a}else t.current=r;if(Gs&&(Gs=!1,Di=t,Ws=n),a=t.pendingLanes,a===0&&(Ii=null),Hv(r.stateNode),tr(t,mt()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)n=e[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(Vs)throw Vs=!1,t=Wu,Wu=null,t;return Ws&1&&t.tag!==0&&aa(),a=t.pendingLanes,a&1?t===ju?Mo++:(Mo=0,ju=t):Mo=0,Ci(),null}function aa(){if(Di!==null){var t=Vf(Ws),e=yr.transition,r=Ye;try{if(yr.transition=null,Ye=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,Ws=0,We&6)throw Error(ee(331));var n=We;for(We|=4,de=t.current;de!==null;){var a=de,o=a.child;if(de.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(de=c;de!==null;){var d=de;switch(d.tag){case 0:case 11:case 15:So(8,d,a)}var f=d.child;if(f!==null)f.return=d,de=f;else for(;de!==null;){d=de;var h=d.sibling,p=d.return;if(Bm(d),d===c){de=null;break}if(h!==null){h.return=p,de=h;break}de=p}}}var x=a.alternate;if(x!==null){var S=x.child;if(S!==null){x.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}de=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,de=o;else e:for(;de!==null;){if(a=de,a.flags&2048)switch(a.tag){case 0:case 11:case 15:So(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,de=u;break e}de=a.return}}var _=t.current;for(de=_;de!==null;){o=de;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,de=g;else e:for(o=_;de!==null;){if(s=de,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:zs(9,s)}}catch(P){dt(s,s.return,P)}if(s===o){de=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,de=E;break e}de=s.return}}if(We=n,Ci(),zr&&typeof zr.onPostCommitFiberRoot=="function")try{zr.onPostCommitFiberRoot(Qo,t)}catch{}i=!0}return i}finally{Ye=r,yr.transition=e}}return!1}function rg(t,e,r){e=ta(r,e),e=xm(t,e,1),t=Pi(t,e,1),e=Wt(),t!==null&&(qa(t,1,e),tr(t,e))}function dt(t,e,r){if(t.tag===3)rg(t,t,r);else for(;e!==null;){if(e.tag===3){rg(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ii===null||!Ii.has(i))){t=ta(r,t),t=ym(e,t,1),e=Pi(e,t,1),t=Wt(),e!==null&&(qa(e,1,t),tr(e,t));break}}e=e.return}}function px(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&r,Ct===t&&(It&r)===r&&(Et===4||Et===3&&(It&130023424)===It&&500>mt()-Gu?un(t,0):Vu|=r),tr(t,e)}function ig(t,e){e===0&&(t.mode&1?(e=es,es<<=1,!(es&130023424)&&(es=4194304)):e=1);var r=Wt();t=ti(t,e),t!==null&&(qa(t,e,r),tr(t,r))}function mx(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),ig(t,r)}function gx(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),ig(t,r)}var ng;ng=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||$t.current)Jt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Jt=!1,ix(t,e,r);Jt=!!(t.flags&131072)}else Jt=!1,st&&e.flags&1048576&&Op(e,bs,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ks(t,e),t=e.pendingProps;var n=qn(e,Dt.current);Jn(e,r),n=Su(null,e,i,t,n,r);var a=bu();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(a=!0,xs(e)):a=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,pu(e),n.updater=Us,e.stateNode=n,n._reactInternals=e,Cu(e,i,t,r),e=Iu(null,e,i,!0,a,r)):(e.tag=0,st&&a&&nu(e),Gt(null,e,n,r),e=e.child),e;case 16:i=e.elementType;e:{switch(ks(t,e),t=e.pendingProps,n=i._init,i=n(i._payload),e.type=i,n=e.tag=vx(i),t=Ar(i,t),n){case 0:e=Lu(null,e,i,t,r);break e;case 1:e=Am(null,e,i,t,r);break e;case 11:e=Mm(null,e,i,t,r);break e;case 14:e=Tm(null,e,i,Ar(i.type,t),r);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Ar(i,n),Lu(t,e,i,n,r);case 1:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Ar(i,n),Am(t,e,i,n,r);case 3:e:{if(Pm(e),t===null)throw Error(ee(387));i=e.pendingProps,a=e.memoizedState,n=a.element,jp(t,e),Cs(e,i,null,r);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){n=ta(Error(ee(423)),e),e=Lm(t,e,i,r,n);break e}else if(i!==n){n=ta(Error(ee(424)),e),e=Lm(t,e,i,r,n);break e}else for(hr=Ti(e.stateNode.containerInfo.firstChild),ur=e,st=!0,Cr=null,r=Gp(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zn(),i===n){e=ii(t,e,r);break e}Gt(t,e,i,r)}e=e.child}return e;case 5:return Yp(e),t===null&&su(e),i=e.type,n=e.pendingProps,a=t!==null?t.memoizedProps:null,o=n.children,Qc(i,n)?o=null:a!==null&&Qc(i,a)&&(e.flags|=32),Cm(t,e),Gt(t,e,o,r),e.child;case 6:return t===null&&su(e),null;case 13:return Im(t,e,r);case 4:return mu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$n(e,null,i,r):Gt(t,e,i,r),e.child;case 11:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Ar(i,n),Mm(t,e,i,n,r);case 7:return Gt(t,e,e.pendingProps,r),e.child;case 8:return Gt(t,e,e.pendingProps.children,r),e.child;case 12:return Gt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,n=e.pendingProps,a=e.memoizedProps,o=n.value,tt(Ts,i._currentValue),i._currentValue=o,a!==null)if(Rr(a.value,o)){if(a.children===n.children&&!$t.current){e=ii(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=ri(-1,r&-r),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),du(a.return,r,e),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(ee(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),du(o,r,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Gt(t,e,n.children,r),e=e.child}return e;case 9:return n=e.type,i=e.pendingProps.children,Jn(e,r),n=vr(n),i=i(n),e.flags|=1,Gt(t,e,i,r),e.child;case 14:return i=e.type,n=Ar(i,e.pendingProps),n=Ar(i.type,n),Tm(t,e,i,n,r);case 15:return wm(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Ar(i,n),ks(t,e),e.tag=1,Qt(i)?(t=!0,xs(e)):t=!1,Jn(e,r),_m(e,i,n),Cu(e,i,n,r),Iu(null,e,i,!0,t,r);case 19:return Nm(t,e,r);case 22:return Rm(t,e,r)}throw Error(ee(156,e.tag))};function ag(t,e){return kf(t,e)}function _x(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sr(t,e,r,i){return new _x(t,e,r,i)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vx(t){if(typeof t=="function")return $u(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nc)return 11;if(t===sc)return 14}return 2}function Oi(t,e){var r=t.alternate;return r===null?(r=Sr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Ys(t,e,r,i,n,a){var o=2;if(i=t,typeof t=="function")$u(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Nn:return dn(r.children,n,a,e);case rc:o=8,n|=8;break;case ic:return t=Sr(12,r,e,n|2),t.elementType=ic,t.lanes=a,t;case ac:return t=Sr(13,r,e,n),t.elementType=ac,t.lanes=a,t;case oc:return t=Sr(19,r,e,n),t.elementType=oc,t.lanes=a,t;case ff:return Ks(r,n,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hf:o=10;break e;case df:o=9;break e;case nc:o=11;break e;case sc:o=14;break e;case _i:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Sr(o,r,e,n),e.elementType=t,e.type=i,e.lanes=a,e}function dn(t,e,r,i){return t=Sr(7,t,i,e),t.lanes=r,t}function Ks(t,e,r,i){return t=Sr(22,t,i,e),t.elementType=ff,t.lanes=r,t.stateNode={isHidden:!1},t}function Qu(t,e,r){return t=Sr(6,t,null,e),t.lanes=r,t}function Ju(t,e,r){return e=Sr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xx(t,e,r,i,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rc(0),this.expirationTimes=Rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function eh(t,e,r,i,n,a,o,s,l){return t=new xx(t,e,r,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Sr(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(a),t}function yx(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function og(t){if(!t)return Ri;t=t._reactInternals;e:{if(Ji(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var r=t.type;if(Qt(r))return Dp(t,r,e)}return e}function sg(t,e,r,i,n,a,o,s,l){return t=eh(r,i,!0,t,n,a,o,s,l),t.context=og(null),r=t.current,i=Wt(),n=Ni(r),a=ri(i,n),a.callback=e??null,Pi(r,a,n),t.current.lanes=n,qa(t,n,i),tr(t,i),t}function Zs(t,e,r,i){var n=e.current,a=Wt(),o=Ni(n);return r=og(r),e.context===null?e.context=r:e.pendingContext=r,e=ri(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pi(n,e,o),t!==null&&(Ir(t,n,o,a),Rs(t,n,o)),o}function $s(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function th(t,e){lg(t,e),(t=t.alternate)&&lg(t,e)}function Sx(){return null}var cg=typeof reportError=="function"?reportError:function(t){console.error(t)};function rh(t){this._internalRoot=t}Qs.prototype.render=rh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Zs(t,e,null,null)},Qs.prototype.unmount=rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cn(function(){Zs(null,t,null,null)}),e[$r]=null}};function Qs(t){this._internalRoot=t}Qs.prototype.unstable_scheduleHydration=function(t){if(t){var e=jf();t={blockedOn:null,target:t,priority:e};for(var r=0;r<bi.length&&e!==0&&e<bi[r].priority;r++);bi.splice(r,0,t),r===0&&Yf(t)}};function ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Js(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ug(){}function bx(t,e,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var c=$s(o);a.call(c)}}var o=sg(e,i,t,0,null,!1,!1,"",ug);return t._reactRootContainer=o,t[$r]=o.current,so(t.nodeType===8?t.parentNode:t),cn(),o}for(;n=t.lastChild;)t.removeChild(n);if(typeof i=="function"){var s=i;i=function(){var c=$s(l);s.call(c)}}var l=eh(t,0,!1,null,null,!1,!1,"",ug);return t._reactRootContainer=l,t[$r]=l.current,so(t.nodeType===8?t.parentNode:t),cn(function(){Zs(e,l,r,i)}),l}function el(t,e,r,i,n){var a=r._reactRootContainer;if(a){var o=a;if(typeof n=="function"){var s=n;n=function(){var l=$s(o);s.call(l)}}Zs(e,o,t,n)}else o=bx(r,e,t,n,i);return $s(o)}Gf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Xa(e.pendingLanes);r!==0&&(Cc(e,r|1),tr(e,mt()),!(We&6)&&(na=mt()+500,Ci()))}break;case 13:cn(function(){var i=ti(t,1);if(i!==null){var n=Wt();Ir(i,t,1,n)}}),th(t,1)}},Ac=function(t){if(t.tag===13){var e=ti(t,134217728);if(e!==null){var r=Wt();Ir(e,t,134217728,r)}th(t,134217728)}},Wf=function(t){if(t.tag===13){var e=Ni(t),r=ti(t,e);if(r!==null){var i=Wt();Ir(r,t,e,i)}th(t,e)}},jf=function(){return Ye},Xf=function(t,e){var r=Ye;try{return Ye=t,e()}finally{Ye=r}},Sc=function(t,e,r){switch(e){case"input":if(fc(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var n=_s(i);if(!n)throw Error(ee(90));gf(i),fc(i,n)}}}break;case"textarea":Sf(t,r);break;case"select":e=r.value,e!=null&&Un(t,!!r.multiple,e,!1)}},Pf=Yu,Lf=cn;var Ex={usingClientEntryPoint:!1,Events:[uo,jn,_s,Cf,Af,Yu]},To={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mx={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Uf(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||Sx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Qo=tl.inject(Mx),zr=tl}catch{}}sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex,sr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ih(e))throw Error(ee(200));return yx(t,e,null,r)},sr.createRoot=function(t,e){if(!ih(t))throw Error(ee(299));var r=!1,i="",n=cg;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=eh(t,1,!1,null,null,r,!1,i,n),t[$r]=e.current,so(t.nodeType===8?t.parentNode:t),new rh(e)},sr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Uf(e),t=t===null?null:t.stateNode,t},sr.flushSync=function(t){return cn(t)},sr.hydrate=function(t,e,r){if(!Js(e))throw Error(ee(200));return el(null,t,e,!0,r)},sr.hydrateRoot=function(t,e,r){if(!ih(t))throw Error(ee(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",o=cg;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=sg(e,null,t,1,r??null,n,!1,a,o),t[$r]=e.current,so(t),i)for(t=0;t<i.length;t++)r=i[t],n=r._getVersion,n=n(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,n]:e.mutableSourceEagerHydrationData.push(r,n);return new Qs(e)},sr.render=function(t,e,r){if(!Js(e))throw Error(ee(200));return el(null,t,e,!1,r)},sr.unmountComponentAtNode=function(t){if(!Js(t))throw Error(ee(40));return t._reactRootContainer?(cn(function(){el(null,null,t,!1,function(){t._reactRootContainer=null,t[$r]=null})}),!0):!1},sr.unstable_batchedUpdates=Yu,sr.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!Js(r))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return el(t,e,r,!1,i)},sr.version="18.3.1-next-f1338f8080-20240426";function hg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hg)}catch(t){console.error(t)}}hg(),af.exports=sr;var Tx=af.exports,dg,fg=Tx;dg=fg.createRoot,fg.hydrateRoot;class wx{constructor(e,r,i,n,a,o){this.horizontalLines=e,this.verticalLines=r,this.binaryImage=i,this.verticalLinesImage=n,this.horizontalLinesImage=a,this.combinedImage=o}destroy(){this.binaryImage.delete(),this.verticalLinesImage.delete(),this.horizontalLinesImage.delete(),this.combinedImage.delete()}}function Rx(t,e){const r=cv.matFromImageData(t),i=new cv.Mat;cv.cvtColor(r,i,cv.COLOR_RGBA2GRAY,0);const n=new cv.Mat;cv.adaptiveThreshold(i,n,255,cv.ADAPTIVE_THRESH_MEAN_C,cv.THRESH_BINARY_INV,15,2);const a=cv.getStructuringElement(cv.MORPH_RECT,new cv.Size(1,Math.floor(e/4))),o=cv.getStructuringElement(cv.MORPH_RECT,new cv.Size(Math.floor(e/4),1)),s=new cv.Mat;cv.erode(n,s,a),cv.dilate(s,s,a);const l=new cv.Mat;cv.erode(n,l,o),cv.dilate(l,l,o);const c=new cv.Mat;cv.addWeighted(s,.5,l,.5,0,c);const d=pg(s,"vertical"),f=pg(l,"horizontal"),h=n.clone(),p=s.clone(),x=l.clone(),S=c.clone();return r.delete(),i.delete(),n.delete(),a.delete(),o.delete(),s.delete(),l.delete(),c.delete(),new wx(f,d,h,p,x,S)}function pg(t,e){const r=new cv.Mat,i=1,n=100,a=t.rows/2;cv.HoughLinesP(t,r,i,Math.PI/180,n,a,20);const s=[];for(let l=0;l<r.rows;l++){const c=r.data32S[l*4],d=r.data32S[l*4+1],f=r.data32S[l*4+2],h=r.data32S[l*4+3];if(e==="vertical"&&Math.abs(c-f)<10){const p=(c+f)/2;s.push(p)}else if(e==="horizontal"&&Math.abs(d-h)<10){const p=(d+h)/2;s.push(p)}}return r.delete(),Array.from(new Set(s)).sort((l,c)=>l-c)}function Cx(t,e){const r=[],i=[],n=[],a=Math.min(e.width,e.height)*.5,o=(e.width-a)/2,s=(e.height-a)/2,l=a/3;for(let c=0;c<3;c++){const d=[],f=[],h=[];for(let p=0;p<3;p++){const x=o+p*l,S=s+c*l,m=t.getImageData(x,S,l,l),{colorName:u,meanHsv:_}=Ax(m);d.push(u),f.push(_);const g=document.createElement("canvas");g.width=l,g.height=l,g.getContext("2d").putImageData(m,0,0);const E=g.toDataURL();h.push(E)}r.push(d),i.push(f),n.push(h)}return{colors:r,hsvValues:i,subImages:n}}function Ax(t){const e=cv.matFromImageData(t),r=new cv.Mat;cv.cvtColor(e,r,cv.COLOR_RGB2HSV);const i=new cv.MatVector;cv.split(r,i);const n=[[180],[256],[256]],a=[[0,180],[0,256],[0,256]],o=[new cv.Mat,new cv.Mat,new cv.Mat],s=[new cv.Mat,new cv.Mat,new cv.Mat];cv.calcHist(i,[0],s[0],o[0],n[0],a[0],!1),cv.calcHist(i,[1],s[1],o[1],n[1],a[1],!1),cv.calcHist(i,[2],s[2],o[2],n[2],a[2],!1);let l=[0,0,0],c=[0,0,0];for(let h=0;h<3;h++)for(let p=0;p<n[h][0];p++)o[h].data32F[p]>l[h]&&(l[h]=o[h].data32F[p],c[h]=p);r.delete(),e.delete(),i.delete();for(const h of s)h.delete();for(const h of o)h.delete();let d;Px(c[1],c[2])?d="white":d=Lx(c[0]);const f={h:c[0],s:c[1],v:c[2]};return{colorName:d,meanHsv:f}}function Px(t,e){return t<65&&e>150}function Lx(t){return t>=115||t<3?"red":t>=3&&t<25?"orange":t>=25&&t<55?"yellow":t>=55&&t<95?"green":t>=95&&t<115?"blue":"unknown"}const Ix=["red","orange","yellow","green","blue","white"],mg=({onSelectColor:t,onClose:e})=>Ne.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",width:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(255, 255, 255, 0.9)",padding:"10px",borderRadius:"5px",zIndex:100},children:[Ne.jsx("p",{children:"Select a color:"}),Ne.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:Ix.map(r=>Ne.jsx("div",{onClick:()=>{t(r),e()},style:{backgroundColor:r,width:"40px",height:"40px",borderRadius:"50%",cursor:"pointer",border:"1px solid #000"}},r))}),Ne.jsx("button",{onClick:e,style:{marginTop:"10px"},children:"Cancel"})]}),Dx=({currentSide:t,detectionEnabled:e,overlayData:r,onOverlayDataCaptured:i,onOverlayDataUpdated:n})=>{const a=Ie.useRef(document.createElement("video")),o=Ie.useRef(null),s=Ie.useRef(),[l,c]=Ie.useState(!1),d=Ie.useRef(0),f=1,[h,p]=Ie.useState(!1),[x,S]=Ie.useState([]),[m,u]=Ie.useState(null),[_,g]=Ie.useState(!1);Ie.useEffect(()=>{const y=setInterval(()=>{window.cv&&window.cv.Mat&&(p(!0),clearInterval(y))},100);return()=>clearInterval(y)},[]),Ie.useEffect(()=>{if(!h)return;const y=a.current,D=async()=>{try{const F={video:!0},B=await navigator.mediaDevices.getUserMedia(F);y.srcObject=B,await y.play(),O()}catch(F){console.error("Error accessing camera:",F)}},O=()=>{if(o.current&&a.current&&a.current.readyState===a.current.HAVE_ENOUGH_DATA){const F=o.current,B=F.getContext("2d");if(B){if(B.clearRect(0,0,F.width,F.height),B.save(),B.translate(F.width,0),B.scale(-1,1),B.drawImage(a.current,0,0,F.width,F.height),B.restore(),e){const k=P();if(k){const{horizontalLines:W,verticalLines:C}=k;X(W,C,F)?(d.current+=1,d.current>=f&&!l&&(c(!0),v())):d.current=0,k.destroy()}}R(B,l?"green":"red"),T(B,r),A(B,t)}}s.current=requestAnimationFrame(O)};return D(),()=>{(y.srcObject?y.srcObject.getTracks():[]).forEach(F=>F.stop()),s.current&&cancelAnimationFrame(s.current)}},[h,e,l,t,r]),Ie.useEffect(()=>{e&&(c(!1),d.current=0)},[e]),Ie.useEffect(()=>{const y=o.current;if(!y)return;const D=O=>{if(!r||!x.length||!o.current)return;const F=o.current,B=F.getBoundingClientRect(),k=F.width/B.width,W=F.height/B.height;let C=(O.clientX-B.left)*k,j=(O.clientY-B.top)*W;C=F.width-C;for(const K of x)if(C>=K.x&&C<=K.x+K.size&&j>=K.y&&j<=K.y+K.size){u(K),g(!0);break}};return y.addEventListener("click",D),()=>{y.removeEventListener("click",D)}},[x,r]);const E=y=>{if(!m)return;const D={...r};D.colors=r.colors.map((O,F)=>O.map((B,k)=>F===m.row&&k===m.col?y:B)),n(D),g(!1),u(null)},P=()=>{const y=o.current,D=Math.min(y.width,y.height)*.5,O=(y.width-D)/2,F=(y.height-D)/2,B=document.createElement("canvas");B.width=y.width,B.height=y.height;const k=B.getContext("2d");if(k&&a.current){k.drawImage(a.current,0,0,y.width,y.height);const W=k.getImageData(O,F,D,D);return Rx(W,D)}return null},R=(y,D)=>{const O=o.current,F=3,B=Math.min(O.width,O.height)*.5,k=(O.width-B)/2,W=(O.height-B)/2,C=B/F;y.strokeStyle=D,y.lineWidth=2,y.save(),y.translate(O.width,0),y.scale(-1,1);for(let j=0;j<=F;j++){const K=k+j*C;y.beginPath(),y.moveTo(K,W),y.lineTo(K,W+B),y.stroke()}for(let j=0;j<=F;j++){const K=W+j*C;y.beginPath(),y.moveTo(k,K),y.lineTo(k+B,K),y.stroke()}y.restore()},T=(y,D)=>{const O=o.current,F=3,B=Math.min(O.width,O.height)*.5,k=(O.width-B)/2,W=(O.height-B)/2,C=B/F;y.globalAlpha=.5;const j=[];y.save(),y.translate(O.width,0),y.scale(-1,1);for(let K=0;K<F;K++)for(let ne=0;ne<F;ne++){const pe=D.colors[K][ne];y.fillStyle=pe;const Se=k+ne*C,q=W+K*C;y.fillRect(Se,q,C,C),j.push({row:K,col:ne,x:Se,y:q,size:C})}y.restore(),y.globalAlpha=1,S(j)},A=(y,D)=>{y.save(),y.fillStyle="rgba(0, 0, 0, 0.5)",y.fillRect(10,10,120,40),y.fillStyle="white",y.font="20px Arial",y.fillText(`Side ${D+1}/6`,20,40),y.restore()},X=(y,D,O)=>{const F=Math.min(O.width,O.height)*.5,B=[];for(let Se=0;Se<=3;Se++){const q=Se*(F/3);B.push(q)}const k=[];for(let Se=0;Se<=3;Se++){const q=Se*(F/3);k.push(q)}const W=F*.05,C=B.filter(Se=>D.some(q=>Math.abs(q-Se)<W)),j=k.filter(Se=>y.some(q=>Math.abs(q-Se)<W)),K=C.length/B.length,ne=j.length/k.length,pe=.8;return K>=pe&&ne>=pe},v=()=>{const y=o.current,D=document.createElement("canvas");D.width=y.width,D.height=y.height;const O=D.getContext("2d");if(O&&a.current){O.drawImage(a.current,0,0,y.width,y.height);const F=Cx(O,D);i(F)}};return Ne.jsxs("div",{style:{position:"relative",width:"100%"},children:[h?Ne.jsx("canvas",{ref:o,width:640,height:480,style:{width:"100%",border:"1px solid black"}}):Ne.jsx("p",{children:"Loading OpenCV..."}),_&&Ne.jsx(mg,{onSelectColor:E,onClose:()=>{g(!1),u(null)}})]})};/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const nh="169",oa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nx=0,gg=1,Ux=2,_g=1,Ox=2,ai=3,ki=0,rr=1,oi=2,Fi=0,la=1,vg=2,xg=3,yg=4,kx=5,fn=100,Fx=101,zx=102,Bx=103,Hx=104,Vx=200,Gx=201,Wx=202,jx=203,ah=204,oh=205,Xx=206,qx=207,Yx=208,Kx=209,Zx=210,$x=211,Qx=212,Jx=213,ey=214,sh=0,lh=1,ch=2,ca=3,uh=4,hh=5,dh=6,fh=7,Sg=0,ty=1,ry=2,zi=0,iy=1,ny=2,ay=3,oy=4,sy=5,ly=6,cy=7,bg=300,ua=301,ha=302,ph=303,mh=304,rl=306,gh=1e3,pn=1001,_h=1002,br=1003,uy=1004,il=1005,Dr=1006,vh=1007,mn=1008,si=1009,Eg=1010,Mg=1011,wo=1012,xh=1013,gn=1014,li=1015,Ro=1016,yh=1017,Sh=1018,da=1020,Tg=35902,wg=1021,Rg=1022,Nr=1023,Cg=1024,Ag=1025,fa=1026,pa=1027,Pg=1028,bh=1029,Lg=1030,Eh=1031,Mh=1033,nl=33776,al=33777,ol=33778,sl=33779,Th=35840,wh=35841,Rh=35842,Ch=35843,Ah=36196,Ph=37492,Lh=37496,Ih=37808,Dh=37809,Nh=37810,Uh=37811,Oh=37812,kh=37813,Fh=37814,zh=37815,Bh=37816,Hh=37817,Vh=37818,Gh=37819,Wh=37820,jh=37821,ll=36492,Xh=36494,qh=36495,Ig=36283,Yh=36284,Kh=36285,Zh=36286,hy=3200,dy=3201,fy=0,py=1,Bi="",Wr="srgb",Hi="srgb-linear",$h="display-p3",cl="display-p3-linear",ul="linear",at="srgb",hl="rec709",dl="p3",ma=7680,Dg=519,my=512,gy=513,_y=514,Ng=515,vy=516,xy=517,yy=518,Sy=519,Ug=35044,Og="300 es",ci=2e3,fl=2001;class _n{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kg=1234567;const Co=Math.PI/180,Ao=180/Math.PI;function ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[r&63|128]+kt[r>>8&255]+"-"+kt[r>>16&255]+kt[r>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Ft(t,e,r){return Math.max(e,Math.min(r,t))}function Qh(t,e){return(t%e+e)%e}function by(t,e,r,i,n){return i+(t-e)*(n-i)/(r-e)}function Ey(t,e,r){return t!==e?(r-t)/(e-t):0}function Po(t,e,r){return(1-r)*t+r*e}function My(t,e,r,i){return Po(t,e,1-Math.exp(-r*i))}function Ty(t,e=1){return e-Math.abs(Qh(t,e*2)-e)}function wy(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e),t*t*(3-2*t))}function Ry(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e),t*t*t*(t*(t*6-15)+10))}function Cy(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Ay(t,e){return t+Math.random()*(e-t)}function Py(t){return t*(.5-Math.random())}function Ly(t){t!==void 0&&(kg=t);let e=kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Iy(t){return t*Co}function Dy(t){return t*Ao}function Ny(t){return(t&t-1)===0&&t!==0}function Uy(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Oy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ky(t,e,r,i,n){const a=Math.cos,o=Math.sin,s=a(r/2),l=o(r/2),c=a((e+i)/2),d=o((e+i)/2),f=a((e-i)/2),h=o((e-i)/2),p=a((i-e)/2),x=o((i-e)/2);switch(n){case"XYX":t.set(s*d,l*f,l*h,s*c);break;case"YZY":t.set(l*h,s*d,l*f,s*c);break;case"ZXZ":t.set(l*f,l*h,s*d,s*c);break;case"XZX":t.set(s*d,l*x,l*p,s*c);break;case"YXY":t.set(l*p,s*d,l*x,s*c);break;case"ZYZ":t.set(l*x,l*p,s*d,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function _a(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const pl={DEG2RAD:Co,RAD2DEG:Ao,generateUUID:ga,clamp:Ft,euclideanModulo:Qh,mapLinear:by,inverseLerp:Ey,lerp:Po,damp:My,pingpong:Ty,smoothstep:wy,smootherstep:Ry,randInt:Cy,randFloat:Ay,randFloatSpread:Py,seededRandom:Ly,degToRad:Iy,radToDeg:Dy,isPowerOfTwo:Ny,ceilPowerOfTwo:Uy,floorPowerOfTwo:Oy,setQuaternionFromProperEuler:ky,normalize:jt,denormalize:_a};class ke{constructor(e=0,r=0){ke.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,n=e.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),n=Math.sin(r),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,r,i,n,a,o,s,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c)}set(e,r,i,n,a,o,s,l,c){const d=this.elements;return d[0]=e,d[1]=n,d[2]=s,d[3]=r,d[4]=a,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],x=i[8],S=n[0],m=n[3],u=n[6],_=n[1],g=n[4],E=n[7],P=n[2],R=n[5],T=n[8];return a[0]=o*S+s*_+l*P,a[3]=o*m+s*g+l*R,a[6]=o*u+s*E+l*T,a[1]=c*S+d*_+f*P,a[4]=c*m+d*g+f*R,a[7]=c*u+d*E+f*T,a[2]=h*S+p*_+x*P,a[5]=h*m+p*g+x*R,a[8]=h*u+p*E+x*T,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8];return r*o*d-r*s*c-i*a*d+i*s*l+n*a*c-n*o*l}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=d*o-s*c,h=s*l-d*a,p=c*a-o*l,x=r*f+i*h+n*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=f*S,e[1]=(n*c-d*i)*S,e[2]=(s*i-n*o)*S,e[3]=h*S,e[4]=(d*r-n*l)*S,e[5]=(n*a-s*r)*S,e[6]=p*S,e[7]=(i*l-c*r)*S,e[8]=(o*r-i*a)*S,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+r,0,0,1),this}scale(e,r){return this.premultiply(Jh.makeScale(e,r)),this}rotate(e){return this.premultiply(Jh.makeRotation(-e)),this}translate(e,r){return this.premultiply(Jh.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Jh=new Oe;function Fg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ml(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Fy(){const t=ml("canvas");return t.style.display="block",t}const zg={};function gl(t){t in zg||(zg[t]=!0,console.warn(t))}function zy(t,e,r){return new Promise(function(i,n){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:i()}}setTimeout(a,r)})}function By(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Hy(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Bg=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hg=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Lo={[Hi]:{transfer:ul,primaries:hl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Wr]:{transfer:at,primaries:hl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[cl]:{transfer:ul,primaries:dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Hg),fromReference:t=>t.applyMatrix3(Bg)},[$h]:{transfer:at,primaries:dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Hg),fromReference:t=>t.applyMatrix3(Bg).convertLinearToSRGB()}},Vy=new Set([Hi,cl]),qe={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Vy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,r){if(this.enabled===!1||e===r||!e||!r)return t;const i=Lo[e].toReference,n=Lo[r].fromReference;return n(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Lo[t].primaries},getTransfer:function(t){return t===Bi?ul:Lo[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Lo[e].luminanceCoefficients)}};function va(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ed(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xa;class Gy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xa===void 0&&(xa=ml("canvas")),xa.width=e.width,xa.height=e.height;const i=xa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=xa}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=ml("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=va(a[o]/255)*255;return i.putImageData(n,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(va(r[i]/255)*255):r[i]=va(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wy=0;class Vg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(td(n[o].image)):a.push(td(n[o]))}else a=td(n);i.url=a}return r||(e.images[this.uuid]=i),i}}function td(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Gy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jy=0;class Yt extends _n{constructor(e=Yt.DEFAULT_IMAGE,r=Yt.DEFAULT_MAPPING,i=pn,n=pn,a=Dr,o=mn,s=Nr,l=si,c=Yt.DEFAULT_ANISOTROPY,d=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=ga(),this.name="",this.source=new Vg(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gh:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gh:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=bg,Yt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,r=0,i=0,n=1){gt.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,n){return this.x=e,this.y=r,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*r+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*r+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*r+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*r+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],d=o[1],f=o[5],h=o[9],p=o[2],x=o[6],S=o[10];if(Math.abs(l-d)<.01&&Math.abs(c-p)<.01&&Math.abs(h-x)<.01){if(Math.abs(l+d)<.1&&Math.abs(c+p)<.1&&Math.abs(h+x)<.1&&Math.abs(s+f+S-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const u=(s+1)/2,_=(f+1)/2,g=(S+1)/2,E=(l+d)/4,P=(c+p)/4,R=(h+x)/4;return u>_&&u>g?u<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(u),n=E/i,a=P/i):_>g?_<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(_),i=E/n,a=R/n):g<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(g),i=P/a,n=R/a),this.set(i,n,a,r),this}let m=Math.sqrt((x-h)*(x-h)+(c-p)*(c-p)+(d-l)*(d-l));return Math.abs(m)<.001&&(m=1),this.x=(x-h)/m,this.y=(c-p)/m,this.z=(d-l)/m,this.w=Math.acos((s+f+S-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xy extends _n{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new gt(0,0,e,r),this.scissorTest=!1,this.viewport=new gt(0,0,e,r);const n={width:e,height:r,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Yt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,r,i=1){if(this.width!==e||this.height!==r||this.depth!==i){this.width=e,this.height=r,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=r,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new Vg(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Xy{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class Gg extends Yt{constructor(e=null,r=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=br,this.minFilter=br,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qy extends Yt{constructor(e=null,r=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=br,this.minFilter=br,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn{constructor(e=0,r=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=n}static slerpFlat(e,r,i,n,a,o,s){let l=i[n+0],c=i[n+1],d=i[n+2],f=i[n+3];const h=a[o+0],p=a[o+1],x=a[o+2],S=a[o+3];if(s===0){e[r+0]=l,e[r+1]=c,e[r+2]=d,e[r+3]=f;return}if(s===1){e[r+0]=h,e[r+1]=p,e[r+2]=x,e[r+3]=S;return}if(f!==S||l!==h||c!==p||d!==x){let m=1-s;const u=l*h+c*p+d*x+f*S,_=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const P=Math.sqrt(g),R=Math.atan2(P,u*_);m=Math.sin(m*R)/P,s=Math.sin(s*R)/P}const E=s*_;if(l=l*m+h*E,c=c*m+p*E,d=d*m+x*E,f=f*m+S*E,m===1-s){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[r]=l,e[r+1]=c,e[r+2]=d,e[r+3]=f}static multiplyQuaternionsFlat(e,r,i,n,a,o){const s=i[n],l=i[n+1],c=i[n+2],d=i[n+3],f=a[o],h=a[o+1],p=a[o+2],x=a[o+3];return e[r]=s*x+d*f+l*p-c*h,e[r+1]=l*x+d*h+c*f-s*p,e[r+2]=c*x+d*p+s*h-l*f,e[r+3]=d*x-s*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,n){return this._x=e,this._y=r,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),d=s(n/2),f=s(a/2),h=l(i/2),p=l(n/2),x=l(a/2);switch(o){case"XYZ":this._x=h*d*f+c*p*x,this._y=c*p*f-h*d*x,this._z=c*d*x+h*p*f,this._w=c*d*f-h*p*x;break;case"YXZ":this._x=h*d*f+c*p*x,this._y=c*p*f-h*d*x,this._z=c*d*x-h*p*f,this._w=c*d*f+h*p*x;break;case"ZXY":this._x=h*d*f-c*p*x,this._y=c*p*f+h*d*x,this._z=c*d*x+h*p*f,this._w=c*d*f-h*p*x;break;case"ZYX":this._x=h*d*f-c*p*x,this._y=c*p*f+h*d*x,this._z=c*d*x-h*p*f,this._w=c*d*f+h*p*x;break;case"YZX":this._x=h*d*f+c*p*x,this._y=c*p*f+h*d*x,this._z=c*d*x-h*p*f,this._w=c*d*f-h*p*x;break;case"XZY":this._x=h*d*f-c*p*x,this._y=c*p*f-h*d*x,this._z=c*d*x+h*p*f,this._w=c*d*f+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],n=r[4],a=r[8],o=r[1],s=r[5],l=r[9],c=r[2],d=r[6],f=r[10],h=i+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(o-n)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(d-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(a+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(a-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(o-n)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,r/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,n=e._y,a=e._z,o=e._w,s=r._x,l=r._y,c=r._z,d=r._w;return this._x=i*d+o*s+n*c-a*l,this._y=n*d+o*l+a*s-i*c,this._z=a*d+o*c+i*l-n*s,this._w=o*d-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-r;return this._w=p*o+r*this._w,this._x=p*i+r*this._x,this._y=p*n+r*this._y,this._z=p*a+r*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,s),f=Math.sin((1-r)*d)/c,h=Math.sin(r*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(r),a*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,r=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(Wg.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(Wg.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){const r=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*i),d=2*(s*r-a*n),f=2*(a*i-o*r);return this.x=r+l*c+o*f-s*d,this.y=i+l*d+s*c-a*f,this.z=n+l*f+a*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,n=e.y,a=e.z,o=r.x,s=r.y,l=r.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return r*r+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const n=Math.sin(r)*e;return this.x=n*Math.sin(i),this.y=Math.cos(r)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new z,Wg=new xn;class Io{constructor(e=new z(1/0,1/0,1/0),r=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(Ur.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(Ur.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=Ur.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(r===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Ur):Ur.fromBufferAttribute(a,o),Ur.applyMatrix4(e.matrixWorld),this.expandByPoint(Ur);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ur),Ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),vl.subVectors(this.max,Do),ya.subVectors(e.a,Do),Sa.subVectors(e.b,Do),ba.subVectors(e.c,Do),Vi.subVectors(Sa,ya),Gi.subVectors(ba,Sa),yn.subVectors(ya,ba);let r=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-yn.z,yn.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,yn.z,0,-yn.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-yn.y,yn.x,0];return!id(r,ya,Sa,ba,vl)||(r=[1,0,0,0,1,0,0,0,1],!id(r,ya,Sa,ba,vl))?!1:(xl.crossVectors(Vi,Gi),r=[xl.x,xl.y,xl.z],id(r,ya,Sa,ba,vl))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ur).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ur).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new z,new z,new z,new z,new z,new z,new z,new z],Ur=new z,_l=new Io,ya=new z,Sa=new z,ba=new z,Vi=new z,Gi=new z,yn=new z,Do=new z,vl=new z,xl=new z,Sn=new z;function id(t,e,r,i,n){for(let a=0,o=t.length-3;a<=o;a+=3){Sn.fromArray(t,a);const s=n.x*Math.abs(Sn.x)+n.y*Math.abs(Sn.y)+n.z*Math.abs(Sn.z),l=e.dot(Sn),c=r.dot(Sn),d=i.dot(Sn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}const Yy=new Io,No=new z,nd=new z;class ad{constructor(e=new z,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):Yy.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const r=No.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),n=(i-this.radius)*.5;this.center.addScaledVector(No,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(nd)),this.expandByPoint(No.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new z,od=new z,yl=new z,Wi=new z,sd=new z,Sl=new z,ld=new z;class cd{constructor(e=new z,r=new z(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=hi.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,r),hi.distanceToSquared(e))}distanceSqToSegment(e,r,i,n){od.copy(e).add(r).multiplyScalar(.5),yl.copy(r).sub(e).normalize(),Wi.copy(this.origin).sub(od);const a=e.distanceTo(r)*.5,o=-this.direction.dot(yl),s=Wi.dot(this.direction),l=-Wi.dot(yl),c=Wi.lengthSq(),d=Math.abs(1-o*o);let f,h,p,x;if(d>0)if(f=o*l-s,h=o*s-l,x=a*d,f>=0)if(h>=-x)if(h<=x){const S=1/d;f*=S,h*=S,p=f*(f+o*h+2*s)+h*(o*f+h+2*l)+c}else h=a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*a+s)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(f=Math.max(0,-(o*a+s)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c);else h=o>0?-a:a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(od).addScaledVector(yl,h),p}intersectSphere(e,r){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),n=hi.dot(hi)-i*i,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,r):this.at(s,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,n,a,o,s,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),d>=0?(a=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,r)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,r,i,n,a){sd.subVectors(r,e),Sl.subVectors(i,e),ld.crossVectors(sd,Sl);let o=this.direction.dot(ld),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=s*this.direction.dot(Sl.crossVectors(Wi,Sl));if(l<0)return null;const c=s*this.direction.dot(sd.cross(Wi));if(c<0||l+c>o)return null;const d=-s*Wi.dot(ld);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,r,i,n,a,o,s,l,c,d,f,h,p,x,S,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c,d,f,h,p,x,S,m)}set(e,r,i,n,a,o,s,l,c,d,f,h,p,x,S,m){const u=this.elements;return u[0]=e,u[4]=r,u[8]=i,u[12]=n,u[1]=a,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=x,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,n=1/Ea.setFromMatrixColumn(e,0).length(),a=1/Ea.setFromMatrixColumn(e,1).length(),o=1/Ea.setFromMatrixColumn(e,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*o,r[9]=i[9]*o,r[10]=i[10]*o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=o*d,p=o*f,x=s*d,S=s*f;r[0]=l*d,r[4]=-l*f,r[8]=c,r[1]=p+x*c,r[5]=h-S*c,r[9]=-s*l,r[2]=S-h*c,r[6]=x+p*c,r[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,x=c*d,S=c*f;r[0]=h+S*s,r[4]=x*s-p,r[8]=o*c,r[1]=o*f,r[5]=o*d,r[9]=-s,r[2]=p*s-x,r[6]=S+h*s,r[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,x=c*d,S=c*f;r[0]=h-S*s,r[4]=-o*f,r[8]=x+p*s,r[1]=p+x*s,r[5]=o*d,r[9]=S-h*s,r[2]=-o*c,r[6]=s,r[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,x=s*d,S=s*f;r[0]=l*d,r[4]=x*c-p,r[8]=h*c+S,r[1]=l*f,r[5]=S*c+h,r[9]=p*c-x,r[2]=-c,r[6]=s*l,r[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=s*l,S=s*c;r[0]=l*d,r[4]=S-h*f,r[8]=x*f+p,r[1]=f,r[5]=o*d,r[9]=-s*d,r[2]=-c*d,r[6]=p*f+x,r[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,x=s*l,S=s*c;r[0]=l*d,r[4]=-f,r[8]=c*d,r[1]=h*f+S,r[5]=o*d,r[9]=p*f-x,r[2]=x*f-p,r[6]=s*d,r[10]=S*f+h}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ky,e,Zy)}lookAt(e,r,i){const n=this.elements;return fr.subVectors(e,r),fr.lengthSq()===0&&(fr.z=1),fr.normalize(),ji.crossVectors(i,fr),ji.lengthSq()===0&&(Math.abs(i.z)===1?fr.x+=1e-4:fr.z+=1e-4,fr.normalize(),ji.crossVectors(i,fr)),ji.normalize(),bl.crossVectors(fr,ji),n[0]=ji.x,n[4]=bl.x,n[8]=fr.x,n[1]=ji.y,n[5]=bl.y,n[9]=fr.y,n[2]=ji.z,n[6]=bl.z,n[10]=fr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],x=i[2],S=i[6],m=i[10],u=i[14],_=i[3],g=i[7],E=i[11],P=i[15],R=n[0],T=n[4],A=n[8],X=n[12],v=n[1],y=n[5],D=n[9],O=n[13],F=n[2],B=n[6],k=n[10],W=n[14],C=n[3],j=n[7],K=n[11],ne=n[15];return a[0]=o*R+s*v+l*F+c*C,a[4]=o*T+s*y+l*B+c*j,a[8]=o*A+s*D+l*k+c*K,a[12]=o*X+s*O+l*W+c*ne,a[1]=d*R+f*v+h*F+p*C,a[5]=d*T+f*y+h*B+p*j,a[9]=d*A+f*D+h*k+p*K,a[13]=d*X+f*O+h*W+p*ne,a[2]=x*R+S*v+m*F+u*C,a[6]=x*T+S*y+m*B+u*j,a[10]=x*A+S*D+m*k+u*K,a[14]=x*X+S*O+m*W+u*ne,a[3]=_*R+g*v+E*F+P*C,a[7]=_*T+g*y+E*B+P*j,a[11]=_*A+g*D+E*k+P*K,a[15]=_*X+g*O+E*W+P*ne,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],x=e[3],S=e[7],m=e[11],u=e[15];return x*(+a*l*f-n*c*f-a*s*h+i*c*h+n*s*p-i*l*p)+S*(+r*l*p-r*c*h+a*o*h-n*o*p+n*c*d-a*l*d)+m*(+r*c*f-r*s*p-a*o*f+i*o*p+a*s*d-i*c*d)+u*(-n*s*d-r*l*f+r*s*h+n*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=r,n[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],x=e[12],S=e[13],m=e[14],u=e[15],_=f*m*c-S*h*c+S*l*p-s*m*p-f*l*u+s*h*u,g=x*h*c-d*m*c-x*l*p+o*m*p+d*l*u-o*h*u,E=d*S*c-x*f*c+x*s*p-o*S*p-d*s*u+o*f*u,P=x*f*l-d*S*l-x*s*h+o*S*h+d*s*m-o*f*m,R=r*_+i*g+n*E+a*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=_*T,e[1]=(S*h*a-f*m*a-S*n*p+i*m*p+f*n*u-i*h*u)*T,e[2]=(s*m*a-S*l*a+S*n*c-i*m*c-s*n*u+i*l*u)*T,e[3]=(f*l*a-s*h*a-f*n*c+i*h*c+s*n*p-i*l*p)*T,e[4]=g*T,e[5]=(d*m*a-x*h*a+x*n*p-r*m*p-d*n*u+r*h*u)*T,e[6]=(x*l*a-o*m*a-x*n*c+r*m*c+o*n*u-r*l*u)*T,e[7]=(o*h*a-d*l*a+d*n*c-r*h*c-o*n*p+r*l*p)*T,e[8]=E*T,e[9]=(x*f*a-d*S*a-x*i*p+r*S*p+d*i*u-r*f*u)*T,e[10]=(o*S*a-x*s*a+x*i*c-r*S*c-o*i*u+r*s*u)*T,e[11]=(d*s*a-o*f*a-d*i*c+r*f*c+o*i*p-r*s*p)*T,e[12]=P*T,e[13]=(d*S*n-x*f*n+x*i*h-r*S*h-d*i*m+r*f*m)*T,e[14]=(x*s*n-o*S*n-x*i*l+r*S*l+o*i*m-r*s*m)*T,e[15]=(o*f*n-d*s*n+d*i*l-r*f*l-o*i*h+r*s*h)*T,this}scale(e){const r=this.elements,i=e.x,n=e.y,a=e.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),n=Math.sin(r),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,d=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,d*s+i,d*l-n*o,0,c*l-n*s,d*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,r,n,1,0,0,0,0,1),this}compose(e,r,i){const n=this.elements,a=r._x,o=r._y,s=r._z,l=r._w,c=a+a,d=o+o,f=s+s,h=a*c,p=a*d,x=a*f,S=o*d,m=o*f,u=s*f,_=l*c,g=l*d,E=l*f,P=i.x,R=i.y,T=i.z;return n[0]=(1-(S+u))*P,n[1]=(p+E)*P,n[2]=(x-g)*P,n[3]=0,n[4]=(p-E)*R,n[5]=(1-(h+u))*R,n[6]=(m+_)*R,n[7]=0,n[8]=(x+g)*T,n[9]=(m-_)*T,n[10]=(1-(h+S))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,r,i){const n=this.elements;let a=Ea.set(n[0],n[1],n[2]).length();const o=Ea.set(n[4],n[5],n[6]).length(),s=Ea.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Or.copy(this);const l=1/a,c=1/o,d=1/s;return Or.elements[0]*=l,Or.elements[1]*=l,Or.elements[2]*=l,Or.elements[4]*=c,Or.elements[5]*=c,Or.elements[6]*=c,Or.elements[8]*=d,Or.elements[9]*=d,Or.elements[10]*=d,r.setFromRotationMatrix(Or),i.x=a,i.y=o,i.z=s,this}makePerspective(e,r,i,n,a,o,s=ci){const l=this.elements,c=2*a/(r-e),d=2*a/(i-n),f=(r+e)/(r-e),h=(i+n)/(i-n);let p,x;if(s===ci)p=-(o+a)/(o-a),x=-2*o*a/(o-a);else if(s===fl)p=-o/(o-a),x=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,r,i,n,a,o,s=ci){const l=this.elements,c=1/(r-e),d=1/(i-n),f=1/(o-a),h=(r+e)*c,p=(i+n)*d;let x,S;if(s===ci)x=(o+a)*f,S=-2*f;else if(s===fl)x=a*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const Ea=new z,Or=new _t,Ky=new z(0,0,0),Zy=new z(1,1,1),ji=new z,bl=new z,fr=new z,jg=new _t,Xg=new xn;class mi{constructor(e=0,r=0,i=0,n=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,n=this._order){return this._x=e,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],d=n[9],f=n[2],h=n[6],p=n[10];switch(r){case"XYZ":this._y=Math.asin(Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return jg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jg,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return Xg.setFromEuler(this),this.setFromQuaternion(Xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $y=0;const qg=new z,Ma=new xn,di=new _t,El=new z,Uo=new z,Qy=new z,Jy=new xn,Yg=new z(1,0,0),Kg=new z(0,1,0),Zg=new z(0,0,1),$g={type:"added"},eS={type:"removed"},Ta={type:"childadded",child:null},hd={type:"childremoved",child:null};class nr extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nr.DEFAULT_UP.clone();const e=new z,r=new mi,i=new xn,n=new z(1,1,1);function a(){i.setFromEuler(r,!1)}function o(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new _t},normalMatrix:{value:new Oe}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=nr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return Ma.setFromAxisAngle(e,r),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,r){return Ma.setFromAxisAngle(e,r),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(Yg,e)}rotateY(e){return this.rotateOnAxis(Kg,e)}rotateZ(e){return this.rotateOnAxis(Zg,e)}translateOnAxis(e,r){return qg.copy(e).applyQuaternion(this.quaternion),this.position.add(qg.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Yg,e)}translateY(e){return this.translateOnAxis(Kg,e)}translateZ(e){return this.translateOnAxis(Zg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?El.copy(e):El.set(e,r,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Uo,El,this.up):di.lookAt(El,Uo,this.up),this.quaternion.setFromRotationMatrix(di),n&&(di.extractRotation(n.matrixWorld),Ma.setFromRotationMatrix(di),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($g),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(eS),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($g),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,r);if(a!==void 0)return a}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,e,Qy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,Jy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].updateMatrixWorld(e)}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(r){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=n,i;function o(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}nr.DEFAULT_UP=new z(0,1,0),nr.DEFAULT_MATRIX_AUTO_UPDATE=!0,nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kr=new z,fi=new z,dd=new z,pi=new z,wa=new z,Ra=new z,Qg=new z,fd=new z,pd=new z,md=new z,gd=new gt,_d=new gt,vd=new gt;class Fr{constructor(e=new z,r=new z,i=new z){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,n){n.subVectors(i,r),kr.subVectors(e,r),n.cross(kr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,r,i,n,a){kr.subVectors(n,r),fi.subVectors(i,r),dd.subVectors(e,r);const o=kr.dot(kr),s=kr.dot(fi),l=kr.dot(dd),c=fi.dot(fi),d=fi.dot(dd),f=o*c-s*s;if(f===0)return a.set(0,0,0),null;const h=1/f,p=(c*l-s*d)*h,x=(o*d-s*l)*h;return a.set(1-p-x,x,p)}static containsPoint(e,r,i,n){return this.getBarycoord(e,r,i,n,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,r,i,n,a,o,s,l){return this.getBarycoord(e,r,i,n,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(s,pi.z),l)}static getInterpolatedAttribute(e,r,i,n,a,o){return gd.setScalar(0),_d.setScalar(0),vd.setScalar(0),gd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,i),vd.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(gd,a.x),o.addScaledVector(_d,a.y),o.addScaledVector(vd,a.z),o}static isFrontFacing(e,r,i,n){return kr.subVectors(i,r),fi.subVectors(e,r),kr.cross(fi).dot(n)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,n){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,r,i,n){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kr.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kr.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Fr.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,n,a){return Fr.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}containsPoint(e){return Fr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,n=this.b,a=this.c;let o,s;wa.subVectors(n,i),Ra.subVectors(a,i),fd.subVectors(e,i);const l=wa.dot(fd),c=Ra.dot(fd);if(l<=0&&c<=0)return r.copy(i);pd.subVectors(e,n);const d=wa.dot(pd),f=Ra.dot(pd);if(d>=0&&f<=d)return r.copy(n);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),r.copy(i).addScaledVector(wa,o);md.subVectors(e,a);const p=wa.dot(md),x=Ra.dot(md);if(x>=0&&p<=x)return r.copy(a);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return s=c/(c-x),r.copy(i).addScaledVector(Ra,s);const m=d*x-p*f;if(m<=0&&f-d>=0&&p-x>=0)return Qg.subVectors(a,n),s=(f-d)/(f-d+(p-x)),r.copy(n).addScaledVector(Qg,s);const u=1/(m+S+h);return o=S*u,s=h*u,r.copy(i).addScaledVector(wa,o).addScaledVector(Ra,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function xd(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class Ke{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=Wr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,r),this}setRGB(e,r,i,n=qe.workingColorSpace){return this.r=e,this.g=r,this.b=i,qe.toWorkingColorSpace(this,n),this}setHSL(e,r,i,n=qe.workingColorSpace){if(e=Qh(e,1),r=Ft(r,0,1),i=Ft(i,0,1),r===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+r):i+r-i*r,o=2*i-a;this.r=xd(o,a,e+1/3),this.g=xd(o,a,e),this.b=xd(o,a,e-1/3)}return qe.toWorkingColorSpace(this,n),this}setStyle(e,r=Wr){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(o===6)return this.setHex(parseInt(a,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=Wr){const i=Jg[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=ed(e.r),this.g=ed(e.g),this.b=ed(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wr){return qe.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ft(zt.r*255,0,255))*65536+Math.round(Ft(zt.g*255,0,255))*256+Math.round(Ft(zt.b*255,0,255))}getHexString(e=Wr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=qe.workingColorSpace){qe.fromWorkingColorSpace(zt.copy(this),r);const i=zt.r,n=zt.g,a=zt.b,o=Math.max(i,n,a),s=Math.min(i,n,a);let l,c;const d=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=d<=.5?f/(o+s):f/(2-o-s),o){case i:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-i)/f+2;break;case a:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,r=qe.workingColorSpace){return qe.fromWorkingColorSpace(zt.copy(this),r),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Wr){qe.fromWorkingColorSpace(zt.copy(this),e);const r=zt.r,i=zt.g,n=zt.b;return e!==Wr?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,r,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+r,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(Xi),e.getHSL(Ml);const i=Po(Xi.h,Ml.h,r),n=Po(Xi.s,Ml.s,r),a=Po(Xi.l,Ml.l,r);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*r+a[3]*i+a[6]*n,this.g=a[1]*r+a[4]*i+a[7]*n,this.b=a[2]*r+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ke;Ke.NAMES=Jg;let tS=0;class Tl extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=la,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const n=this[r];if(n===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ah&&(i.blendSrc=this.blendSrc),this.blendDst!==oh&&(i.blendDst=this.blendDst),this.blendEquation!==fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ma&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ma&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ma&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(r){const a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const n=r.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=r[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yd extends Tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new z,wl=new ke;class jr{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=Ug,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=r.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)wl.fromBufferAttribute(this,r),wl.applyMatrix3(e),this.setXY(r,wl.x,wl.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)yt.fromBufferAttribute(this,r),yt.applyMatrix3(e),this.setXYZ(r,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)yt.fromBufferAttribute(this,r),yt.applyMatrix4(e),this.setXYZ(r,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)yt.fromBufferAttribute(this,r),yt.applyNormalMatrix(e),this.setXYZ(r,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)yt.fromBufferAttribute(this,r),yt.transformDirection(e),this.setXYZ(r,yt.x,yt.y,yt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=_a(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=_a(r,this.array)),r}setX(e,r){return this.normalized&&(r=jt(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=_a(r,this.array)),r}setY(e,r){return this.normalized&&(r=jt(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=_a(r,this.array)),r}setZ(e,r){return this.normalized&&(r=jt(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=_a(r,this.array)),r}setW(e,r){return this.normalized&&(r=jt(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=jt(r,this.array),i=jt(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,n){return e*=this.itemSize,this.normalized&&(r=jt(r,this.array),i=jt(i,this.array),n=jt(n,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,r,i,n,a){return e*=this.itemSize,this.normalized&&(r=jt(r,this.array),i=jt(i,this.array),n=jt(n,this.array),a=jt(a,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ug&&(e.usage=this.usage),e}}class e_ extends jr{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class t_ extends jr{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class bn extends jr{constructor(e,r,i){super(new Float32Array(e),r,i)}}let rS=0;const Er=new _t,Sd=new nr,Ca=new z,pr=new Io,Oo=new Io,At=new z;class An extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?t_:e_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Oe().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Er.makeRotationFromQuaternion(e),this.applyMatrix4(Er),this}rotateX(e){return Er.makeRotationX(e),this.applyMatrix4(Er),this}rotateY(e){return Er.makeRotationY(e),this.applyMatrix4(Er),this}rotateZ(e){return Er.makeRotationZ(e),this.applyMatrix4(Er),this}translate(e,r,i){return Er.makeTranslation(e,r,i),this.applyMatrix4(Er),this}scale(e,r,i){return Er.makeScale(e,r,i),this.applyMatrix4(Er),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(e){const r=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new bn(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,n=r.length;i<n;i++){const a=r[i];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,pr.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,pr.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(pr.min),this.boundingBox.expandByPoint(pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ad);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(pr.setFromBufferAttribute(e),r)for(let a=0,o=r.length;a<o;a++){const s=r[a];Oo.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(pr.min,Oo.min),pr.expandByPoint(At),At.addVectors(pr.max,Oo.max),pr.expandByPoint(At)):(pr.expandByPoint(Oo.min),pr.expandByPoint(Oo.max))}pr.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)At.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(At));if(r)for(let a=0,o=r.length;a<o;a++){const s=r[a],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)At.fromBufferAttribute(s,c),l&&(Ca.fromBufferAttribute(e,c),At.add(Ca)),n=Math.max(n,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=r.position,n=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let A=0;A<i.count;A++)s[A]=new z,l[A]=new z;const c=new z,d=new z,f=new z,h=new ke,p=new ke,x=new ke,S=new z,m=new z;function u(A,X,v){c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,X),f.fromBufferAttribute(i,v),h.fromBufferAttribute(a,A),p.fromBufferAttribute(a,X),x.fromBufferAttribute(a,v),d.sub(c),f.sub(c),p.sub(h),x.sub(h);const y=1/(p.x*x.y-x.x*p.y);isFinite(y)&&(S.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(y),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(y),s[A].add(S),s[X].add(S),s[v].add(S),l[A].add(m),l[X].add(m),l[v].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let A=0,X=_.length;A<X;++A){const v=_[A],y=v.start,D=v.count;for(let O=y,F=y+D;O<F;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const g=new z,E=new z,P=new z,R=new z;function T(A){P.fromBufferAttribute(n,A),R.copy(P);const X=s[A];g.copy(X),g.sub(P.multiplyScalar(P.dot(X))).normalize(),E.crossVectors(R,X);const v=E.dot(l[A])<0?-1:1;o.setXYZW(A,g.x,g.y,g.z,v)}for(let A=0,X=_.length;A<X;++A){const v=_[A],y=v.start,D=v.count;for(let O=y,F=y+D;O<F;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jr(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const n=new z,a=new z,o=new z,s=new z,l=new z,c=new z,d=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(r,x),a.fromBufferAttribute(r,S),o.fromBufferAttribute(r,m),d.subVectors(o,a),f.subVectors(n,a),d.cross(f),s.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),s.add(d),l.add(d),c.add(d),i.setXYZ(x,s.x,s.y,s.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=r.count;h<p;h+=3)n.fromBufferAttribute(r,h+0),a.fromBufferAttribute(r,h+1),o.fromBufferAttribute(r,h+2),d.subVectors(o,a),f.subVectors(n,a),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)At.fromBufferAttribute(e,r),At.normalize(),e.setXYZ(r,At.x,At.y,At.z)}toNonIndexed(){function e(s,l){const c=s.array,d=s.itemSize,f=s.normalized,h=new c.constructor(l.length*d);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){s.isInterleavedBufferAttribute?p=l[S]*s.data.stride+s.offset:p=l[S]*d;for(let u=0;u<d;u++)h[x++]=c[p++]}return new jr(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new An,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,i);r.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}r.morphAttributes[s]=l}r.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];r.addGroup(c.start,c.count,c.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(n[l]=d,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(r));const n=e.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(r))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(r));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r_=new _t,En=new cd,Rl=new ad,i_=new z,Cl=new z,Al=new z,Pl=new z,bd=new z,Ll=new z,n_=new z,Il=new z;class Xr extends nr{constructor(e=new An,r=new yd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,r){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;r.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Ll.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=s[l],f=a[l];d!==0&&(bd.fromBufferAttribute(f,e),o?Ll.addScaledVector(bd,d):Ll.addScaledVector(bd.sub(r),d))}r.add(Ll)}return r}raycast(e,r){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(a),En.copy(e.ray).recast(e.near),!(Rl.containsPoint(En.origin)===!1&&(En.intersectSphere(Rl,i_)===null||En.origin.distanceToSquared(i_)>(e.far-e.near)**2))&&(r_.copy(a).invert(),En.copy(e.ray).applyMatrix4(r_),!(i.boundingBox!==null&&En.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,En)))}_computeIntersections(e,r,i){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const m=h[x],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,P=g;E<P;E+=3){const R=s.getX(E),T=s.getX(E+1),A=s.getX(E+2);n=Dl(this,u,e,i,c,d,f,R,T,A),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,r.push(n))}}else{const x=Math.max(0,p.start),S=Math.min(s.count,p.start+p.count);for(let m=x,u=S;m<u;m+=3){const _=s.getX(m),g=s.getX(m+1),E=s.getX(m+2);n=Dl(this,o,e,i,c,d,f,_,g,E),n&&(n.faceIndex=Math.floor(m/3),r.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const m=h[x],u=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=_,P=g;E<P;E+=3){const R=E,T=E+1,A=E+2;n=Dl(this,u,e,i,c,d,f,R,T,A),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=m.materialIndex,r.push(n))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,u=S;m<u;m+=3){const _=m,g=m+1,E=m+2;n=Dl(this,o,e,i,c,d,f,_,g,E),n&&(n.faceIndex=Math.floor(m/3),r.push(n))}}}}function iS(t,e,r,i,n,a,o,s){let l;if(e.side===rr?l=i.intersectTriangle(o,a,n,!0,s):l=i.intersectTriangle(n,a,o,e.side===ki,s),l===null)return null;Il.copy(s),Il.applyMatrix4(t.matrixWorld);const c=r.ray.origin.distanceTo(Il);return c<r.near||c>r.far?null:{distance:c,point:Il.clone(),object:t}}function Dl(t,e,r,i,n,a,o,s,l,c){t.getVertexPosition(s,Cl),t.getVertexPosition(l,Al),t.getVertexPosition(c,Pl);const d=iS(t,e,r,i,Cl,Al,Pl,n_);if(d){const f=new z;Fr.getBarycoord(n_,Cl,Al,Pl,f),n&&(d.uv=Fr.getInterpolatedAttribute(n,s,l,c,f,new ke)),a&&(d.uv1=Fr.getInterpolatedAttribute(a,s,l,c,f,new ke)),o&&(d.normal=Fr.getInterpolatedAttribute(o,s,l,c,f,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new z,materialIndex:0};Fr.getNormal(Cl,Al,Pl,h.normal),d.face=h,d.barycoord=f}return d}class Ua extends An{constructor(e=1,r=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,r,e,o,a,0),x("z","y","x",1,-1,i,r,-e,o,a,1),x("x","z","y",1,1,e,i,r,n,o,2),x("x","z","y",1,-1,e,i,-r,n,o,3),x("x","y","z",1,-1,e,r,i,n,a,4),x("x","y","z",-1,-1,e,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(d,3)),this.setAttribute("uv",new bn(f,2));function x(S,m,u,_,g,E,P,R,T,A,X){const v=E/T,y=P/A,D=E/2,O=P/2,F=R/2,B=T+1,k=A+1;let W=0,C=0;const j=new z;for(let K=0;K<k;K++){const ne=K*y-O;for(let pe=0;pe<B;pe++){const Se=pe*v-D;j[S]=Se*_,j[m]=ne*g,j[u]=F,c.push(j.x,j.y,j.z),j[S]=0,j[m]=0,j[u]=R>0?1:-1,d.push(j.x,j.y,j.z),f.push(pe/T),f.push(1-K/A),W+=1}}for(let K=0;K<A;K++)for(let ne=0;ne<T;ne++){const pe=h+ne+B*K,Se=h+ne+B*(K+1),q=h+(ne+1)+B*(K+1),Q=h+(ne+1)+B*K;l.push(pe,Se,Q),l.push(Se,q,Q),C+=6}s.addGroup(p,C,X),p+=C,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Aa(t){const e={};for(const r in t){e[r]={};for(const i in t[r]){const n=t[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=n.clone():Array.isArray(n)?e[r][i]=n.slice():e[r][i]=n}}return e}function Xt(t){const e={};for(let r=0;r<t.length;r++){const i=Aa(t[r]);for(const n in i)e[n]=i[n]}return e}function nS(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function a_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const aS={clone:Aa,merge:Xt};var oS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oS,this.fragmentShader=sS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Aa(e.uniforms),this.uniformsGroups=nS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?r.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?r.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?r.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?r.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?r.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?r.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?r.uniforms[n]={type:"m4",value:a.toArray()}:r.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class o_ extends nr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ci}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new z,s_=new ke,l_=new ke;class Mr extends o_{constructor(e=50,r=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=Ao*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,r){return this.getViewBounds(e,s_,l_),r.subVectors(l_,s_)}setViewOffset(e,r,i,n,a,o){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(Co*.5*this.fov)/this.zoom,i=2*r,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,r-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Pa=-90,La=1;class lS extends nr{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Mr(Pa,La,e,r);n.layers=this.layers,this.add(n);const a=new Mr(Pa,La,e,r);a.layers=this.layers,this.add(a);const o=new Mr(Pa,La,e,r);o.layers=this.layers,this.add(o);const s=new Mr(Pa,La,e,r);s.layers=this.layers,this.add(s);const l=new Mr(Pa,La,e,r);l.layers=this.layers,this.add(l);const c=new Mr(Pa,La,e,r);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,n,a,o,s,l]=r;for(const c of r)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of r)this.add(c),c.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(r,a),e.setRenderTarget(i,1,n),e.render(r,o),e.setRenderTarget(i,2,n),e.render(r,s),e.setRenderTarget(i,3,n),e.render(r,l),e.setRenderTarget(i,4,n),e.render(r,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,n),e.render(r,d),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class c_ extends Yt{constructor(e,r,i,n,a,o,s,l,c,d){e=e!==void 0?e:[],r=r!==void 0?r:ua,super(e,r,i,n,a,o,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cS extends vn{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new c_(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Dr}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ua(5,5,5),a=new qi({name:"CubemapFromEquirect",uniforms:Aa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rr,blending:Fi});a.uniforms.tEquirect.value=r;const o=new Xr(n,a),s=r.minFilter;return r.minFilter===mn&&(r.minFilter=Dr),new lS(1,10,this).update(e,o),r.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,r,i,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(r,i,n);e.setRenderTarget(a)}}const Ed=new z,uS=new z,hS=new Oe;class Ki{constructor(e=new z(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,n){return this.normal.set(e,r,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const n=Ed.subVectors(i,r).cross(uS.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(Ed),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:r.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||hS.getNormalMatrix(e),n=this.coplanarPoint(Ed).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new ad,Nl=new z;class u_{constructor(e=new Ki,r=new Ki,i=new Ki,n=new Ki,a=new Ki,o=new Ki){this.planes=[e,r,i,n,a,o]}set(e,r,i,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(r),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=ci){const i=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],d=n[5],f=n[6],h=n[7],p=n[8],x=n[9],S=n[10],m=n[11],u=n[12],_=n[13],g=n[14],E=n[15];if(i[0].setComponents(l-a,h-c,m-p,E-u).normalize(),i[1].setComponents(l+a,h+c,m+p,E+u).normalize(),i[2].setComponents(l+o,h+d,m+x,E+_).normalize(),i[3].setComponents(l-o,h-d,m-x,E-_).normalize(),i[4].setComponents(l-s,h-f,m-S,E-g).normalize(),r===ci)i[5].setComponents(l+s,h+f,m+S,E+g).normalize();else if(r===fl)i[5].setComponents(s,f,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),Mn.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(e){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(e){const r=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const n=r[i];if(Nl.x=n.normal.x>0?e.max.x:e.min.x,Nl.y=n.normal.y>0?e.max.y:e.min.y,Nl.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Nl)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h_(){let t=null,e=!1,r=null,i=null;function n(a,o){r(a,o),i=t.requestAnimationFrame(n)}return{start:function(){e!==!0&&r!==null&&(i=t.requestAnimationFrame(n),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){r=a},setContext:function(a){t=a}}}function dS(t){const e=new WeakMap;function r(s,l){const c=s.array,d=s.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),s.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:f}}function i(s,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,s),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],S=f[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const S=f[p];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,r(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:n,remove:a,update:o}}class Vl extends An{constructor(e=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:n};const a=e/2,o=r/2,s=Math.floor(i),l=Math.floor(n),c=s+1,d=l+1,f=e/s,h=r/l,p=[],x=[],S=[],m=[];for(let u=0;u<d;u++){const _=u*h-o;for(let g=0;g<c;g++){const E=g*f-a;x.push(E,-_,0),S.push(0,0,1),m.push(g/s),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<s;_++){const g=_+c*u,E=_+c*(u+1),P=_+1+c*(u+1),R=_+1+c*u;p.push(g,E,R),p.push(E,P,R)}this.setIndex(p),this.setAttribute("position",new bn(x,3)),this.setAttribute("normal",new bn(S,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.width,e.height,e.widthSegments,e.heightSegments)}}var fS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,RS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,US=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,OS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",WS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$S=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,a1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,x1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,T1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,A1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,U1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,O1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,j1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Z1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ab=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ob=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ab=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Db=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:fS,alphahash_pars_fragment:pS,alphamap_fragment:mS,alphamap_pars_fragment:gS,alphatest_fragment:_S,alphatest_pars_fragment:vS,aomap_fragment:xS,aomap_pars_fragment:yS,batching_pars_vertex:SS,batching_vertex:bS,begin_vertex:ES,beginnormal_vertex:MS,bsdfs:TS,iridescence_fragment:wS,bumpmap_pars_fragment:RS,clipping_planes_fragment:CS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:PS,clipping_planes_vertex:LS,color_fragment:IS,color_pars_fragment:DS,color_pars_vertex:NS,color_vertex:US,common:OS,cube_uv_reflection_fragment:kS,defaultnormal_vertex:FS,displacementmap_pars_vertex:zS,displacementmap_vertex:BS,emissivemap_fragment:HS,emissivemap_pars_fragment:VS,colorspace_fragment:GS,colorspace_pars_fragment:WS,envmap_fragment:jS,envmap_common_pars_fragment:XS,envmap_pars_fragment:qS,envmap_pars_vertex:YS,envmap_physical_pars_fragment:a1,envmap_vertex:KS,fog_vertex:ZS,fog_pars_vertex:$S,fog_fragment:QS,fog_pars_fragment:JS,gradientmap_pars_fragment:e1,lightmap_pars_fragment:t1,lights_lambert_fragment:r1,lights_lambert_pars_fragment:i1,lights_pars_begin:n1,lights_toon_fragment:o1,lights_toon_pars_fragment:s1,lights_phong_fragment:l1,lights_phong_pars_fragment:c1,lights_physical_fragment:u1,lights_physical_pars_fragment:h1,lights_fragment_begin:d1,lights_fragment_maps:f1,lights_fragment_end:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:v1,map_fragment:x1,map_pars_fragment:y1,map_particle_fragment:S1,map_particle_pars_fragment:b1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:M1,morphinstance_vertex:T1,morphcolor_vertex:w1,morphnormal_vertex:R1,morphtarget_pars_vertex:C1,morphtarget_vertex:A1,normal_fragment_begin:P1,normal_fragment_maps:L1,normal_pars_fragment:I1,normal_pars_vertex:D1,normal_vertex:N1,normalmap_pars_fragment:U1,clearcoat_normal_fragment_begin:O1,clearcoat_normal_fragment_maps:k1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:z1,opaque_fragment:B1,packing:H1,premultiplied_alpha_fragment:V1,project_vertex:G1,dithering_fragment:W1,dithering_pars_fragment:j1,roughnessmap_fragment:X1,roughnessmap_pars_fragment:q1,shadowmap_pars_fragment:Y1,shadowmap_pars_vertex:K1,shadowmap_vertex:Z1,shadowmask_pars_fragment:$1,skinbase_vertex:Q1,skinning_pars_vertex:J1,skinning_vertex:eb,skinnormal_vertex:tb,specularmap_fragment:rb,specularmap_pars_fragment:ib,tonemapping_fragment:nb,tonemapping_pars_fragment:ab,transmission_fragment:ob,transmission_pars_fragment:sb,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:hb,background_vert:db,background_frag:fb,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:_b,depth_vert:vb,depth_frag:xb,distanceRGBA_vert:yb,distanceRGBA_frag:Sb,equirect_vert:bb,equirect_frag:Eb,linedashed_vert:Mb,linedashed_frag:Tb,meshbasic_vert:wb,meshbasic_frag:Rb,meshlambert_vert:Cb,meshlambert_frag:Ab,meshmatcap_vert:Pb,meshmatcap_frag:Lb,meshnormal_vert:Ib,meshnormal_frag:Db,meshphong_vert:Nb,meshphong_frag:Ub,meshphysical_vert:Ob,meshphysical_frag:kb,meshtoon_vert:Fb,meshtoon_frag:zb,points_vert:Bb,points_frag:Hb,shadow_vert:Vb,shadow_frag:Gb,sprite_vert:Wb,sprite_frag:jb},oe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},qr={basic:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Xt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Xt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Xt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Xt([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Xt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Xt([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Xt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Xt([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Xt([oe.common,oe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Xt([oe.lights,oe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};qr.physical={uniforms:Xt([qr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ul={r:0,b:0,g:0},Tn=new mi,Xb=new _t;function qb(t,e,r,i,n,a,o){const s=new Ke(0);let l=a===!0?0:1,c,d,f=null,h=0,p=null;function x(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?r:e).get(g)),g}function S(_){let g=!1;const E=x(_);E===null?u(s,l):E&&E.isColor&&(u(E,1),g=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const E=x(g);E&&(E.isCubeTexture||E.mapping===rl)?(d===void 0&&(d=new Xr(new Ua(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Aa(qr.backgroundCube.uniforms),vertexShader:qr.backgroundCube.vertexShader,fragmentShader:qr.backgroundCube.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),Tn.copy(g.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(Tn)),d.material.toneMapped=qe.getTransfer(E.colorSpace)!==at,(f!==E||h!==E.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=E,h=E.version,p=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Xr(new Vl(2,2),new qi({name:"BackgroundMaterial",uniforms:Aa(qr.background.uniforms),vertexShader:qr.background.vertexShader,fragmentShader:qr.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=qe.getTransfer(E.colorSpace)!==at,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,g){_.getRGB(Ul,a_(t)),i.buffers.color.setClear(Ul.r,Ul.g,Ul.b,g,o)}return{getClearColor:function(){return s},setClearColor:function(_,g=1){s.set(_),l=g,u(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(s,l)},render:S,addToRenderList:m}}function Yb(t,e){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},n=h(null);let a=n,o=!1;function s(v,y,D,O,F){let B=!1;const k=f(O,D,y);a!==k&&(a=k,c(a.object)),B=p(v,O,D,F),B&&x(v,O,D,F),F!==null&&e.update(F,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,E(v,y,D,O),F!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return t.createVertexArray()}function c(v){return t.bindVertexArray(v)}function d(v){return t.deleteVertexArray(v)}function f(v,y,D){const O=D.wireframe===!0;let F=i[v.id];F===void 0&&(F={},i[v.id]=F);let B=F[y.id];B===void 0&&(B={},F[y.id]=B);let k=B[O];return k===void 0&&(k=h(l()),B[O]=k),k}function h(v){const y=[],D=[],O=[];for(let F=0;F<r;F++)y[F]=0,D[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:D,attributeDivisors:O,object:v,attributes:{},index:null}}function p(v,y,D,O){const F=a.attributes,B=y.attributes;let k=0;const W=D.getAttributes();for(const C in W)if(W[C].location>=0){const j=F[C];let K=B[C];if(K===void 0&&(C==="instanceMatrix"&&v.instanceMatrix&&(K=v.instanceMatrix),C==="instanceColor"&&v.instanceColor&&(K=v.instanceColor)),j===void 0||j.attribute!==K||K&&j.data!==K.data)return!0;k++}return a.attributesNum!==k||a.index!==O}function x(v,y,D,O){const F={},B=y.attributes;let k=0;const W=D.getAttributes();for(const C in W)if(W[C].location>=0){let j=B[C];j===void 0&&(C==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),C==="instanceColor"&&v.instanceColor&&(j=v.instanceColor));const K={};K.attribute=j,j&&j.data&&(K.data=j.data),F[C]=K,k++}a.attributes=F,a.attributesNum=k,a.index=O}function S(){const v=a.newAttributes;for(let y=0,D=v.length;y<D;y++)v[y]=0}function m(v){u(v,0)}function u(v,y){const D=a.newAttributes,O=a.enabledAttributes,F=a.attributeDivisors;D[v]=1,O[v]===0&&(t.enableVertexAttribArray(v),O[v]=1),F[v]!==y&&(t.vertexAttribDivisor(v,y),F[v]=y)}function _(){const v=a.newAttributes,y=a.enabledAttributes;for(let D=0,O=y.length;D<O;D++)y[D]!==v[D]&&(t.disableVertexAttribArray(D),y[D]=0)}function g(v,y,D,O,F,B,k){k===!0?t.vertexAttribIPointer(v,y,D,F,B):t.vertexAttribPointer(v,y,D,O,F,B)}function E(v,y,D,O){S();const F=O.attributes,B=D.getAttributes(),k=y.defaultAttributeValues;for(const W in B){const C=B[W];if(C.location>=0){let j=F[W];if(j===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const K=j.normalized,ne=j.itemSize,pe=e.get(j);if(pe===void 0)continue;const Se=pe.buffer,q=pe.type,Q=pe.bytesPerElement,ce=q===t.INT||q===t.UNSIGNED_INT||j.gpuType===xh;if(j.isInterleavedBufferAttribute){const ae=j.data,Ee=ae.stride,we=j.offset;if(ae.isInstancedInterleavedBuffer){for(let Ve=0;Ve<C.locationSize;Ve++)u(C.location+Ve,ae.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ve=0;Ve<C.locationSize;Ve++)m(C.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Ve=0;Ve<C.locationSize;Ve++)g(C.location+Ve,ne/C.locationSize,q,K,Ee*Q,(we+ne/C.locationSize*Ve)*Q,ce)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<C.locationSize;ae++)u(C.location+ae,j.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<C.locationSize;ae++)m(C.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let ae=0;ae<C.locationSize;ae++)g(C.location+ae,ne/C.locationSize,q,K,ne*Q,ne/C.locationSize*ae*Q,ce)}}else if(k!==void 0){const K=k[W];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(C.location,K);break;case 3:t.vertexAttrib3fv(C.location,K);break;case 4:t.vertexAttrib4fv(C.location,K);break;default:t.vertexAttrib1fv(C.location,K)}}}}_()}function P(){A();for(const v in i){const y=i[v];for(const D in y){const O=y[D];for(const F in O)d(O[F].object),delete O[F];delete y[D]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const y=i[v.id];for(const D in y){const O=y[D];for(const F in O)d(O[F].object),delete O[F];delete y[D]}delete i[v.id]}function T(v){for(const y in i){const D=i[y];if(D[v.id]===void 0)continue;const O=D[v.id];for(const F in O)d(O[F].object),delete O[F];delete D[v.id]}}function A(){X(),o=!0,a!==n&&(a=n,c(a.object))}function X(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:s,reset:A,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:_}}function Kb(t,e,r){let i;function n(c){i=c}function a(c,d){t.drawArrays(i,c,d),r.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),r.update(d,i,f))}function s(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let h=0;for(let p=0;p<f;p++)h+=d[p];r.update(h,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],d[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let x=0;for(let S=0;S<f;S++)x+=d[S];for(let S=0;S<h.length;S++)r.update(x,i,h[S])}}this.setMode=n,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Zb(t,e,r,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(T){return!(T!==Nr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(T){const A=T===Ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==si&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==li&&!A)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=r.precision!==void 0?r.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=r.logarithmicDepthBuffer===!0,h=r.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=x>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:E,vertexTextures:P,maxSamples:R}}function $b(t){const e=this;let r=null,i=0,n=!1,a=!1;const o=new Ki,s=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||n;return n=h,i=f.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){r=d(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!n||x===null||x.length===0||a&&!m)a?d(null):c();else{const _=a?0:i,g=_*4;let E=u.clippingState||null;l.value=E,E=d(x,h,g,p);for(let P=0;P!==g;++P)E[P]=r[P];u.clippingState=E,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,x){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const u=p+S*4,_=h.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,E=p;g!==S;++g,E+=4)o.copy(f[g]).applyMatrix4(_,s),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Qb(t){let e=new WeakMap;function r(o,s){return s===ph?o.mapping=ua:s===mh&&(o.mapping=ha),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===ph||s===mh)if(e.has(o)){const l=e.get(o).texture;return r(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",n),r(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Jb extends o_{constructor(e=-1,r=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=n+r,l=n-r;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Ia=4,d_=[.125,.215,.35,.446,.526,.582],wn=20,Md=new Jb,f_=new Ke;let Td=null,wd=0,Rd=0,Cd=!1;const Rn=(1+Math.sqrt(5))/2,Da=1/Rn,p_=[new z(-Rn,Da,0),new z(Rn,Da,0),new z(-Da,0,Rn),new z(Da,0,Rn),new z(0,Rn,-Da),new z(0,Rn,Da),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class m_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,n=100){Td=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),r>0&&this._blur(a,0,0,r),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=__(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Td,wd,Rd),this._renderer.xr.enabled=Cd,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===ua||e.mapping===ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Td=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:Dr,minFilter:Dr,generateMipmaps:!1,type:Ro,format:Nr,colorSpace:Hi,depthBuffer:!1},n=g_(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g_(e,r,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eE(a)),this._blurMaterial=tE(a,e,r)}return n}_compileMaterial(e){const r=new Xr(this._lodPlanes[0],e);this._renderer.compile(r,Md)}_sceneToCubeUV(e,r,i,n){const a=new Mr(90,1,r,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,d=l.toneMapping;l.getClearColor(f_),l.toneMapping=zi,l.autoClear=!1;const f=new yd({name:"PMREM.Background",side:rr,depthWrite:!1,depthTest:!1}),h=new Xr(new Ua,f);let p=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,p=!0):(f.color.copy(f_),p=!0);for(let S=0;S<6;S++){const m=S%3;m===0?(a.up.set(0,o[S],0),a.lookAt(s[S],0,0)):m===1?(a.up.set(0,0,o[S]),a.lookAt(0,s[S],0)):(a.up.set(0,o[S],0),a.lookAt(0,0,s[S]));const u=this._cubeSize;Ol(n,m*u,S>2?u:0,u,u),l.setRenderTarget(n),p&&l.render(h,a),l.render(e,a)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=d,l.autoClear=c,e.background=x}_textureToCubeUV(e,r){const i=this._renderer,n=e.mapping===ua||e.mapping===ha;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=__());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Xr(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ol(r,0,0,3*l,2*l),i.setRenderTarget(r),i.render(o,Md)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=p_[(n-a-1)%p_.length];this._blur(e,a-1,a,o,s)}r.autoClear=i}_blur(e,r,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,r,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,r,i,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Xr(this._lodPlanes[n],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*wn-1),S=a/x,m=isFinite(a)?1+Math.floor(d*S):wn;m>wn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wn}`);const u=[];let _=0;for(let T=0;T<wn;++T){const A=T/S,X=Math.exp(-A*A/2);u.push(X),T===0?_+=X:T<m&&(_+=2*X)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const E=this._sizeLods[n],P=3*E*(n>g-Ia?n-g+Ia:0),R=4*(this._cubeSize-E);Ol(r,P,R,3*E,2*E),l.setRenderTarget(r),l.render(f,Md)}}function eE(t){const e=[],r=[],i=[];let n=t;const a=t-Ia+1+d_.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);r.push(s);let l=1/s;o>t-Ia?l=d_[o-t+Ia-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,x=6,S=3,m=2,u=1,_=new Float32Array(S*x*p),g=new Float32Array(m*x*p),E=new Float32Array(u*x*p);for(let R=0;R<p;R++){const T=R%3*2/3-1,A=R>2?0:-1,X=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];_.set(X,S*x*R),g.set(h,m*x*R);const v=[R,R,R,R,R,R];E.set(v,u*x*R)}const P=new An;P.setAttribute("position",new jr(_,S)),P.setAttribute("uv",new jr(g,m)),P.setAttribute("faceIndex",new jr(E,u)),e.push(P),n>Ia&&n--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function g_(t,e,r){const i=new vn(t,e,r);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ol(t,e,r,i,n){t.viewport.set(e,r,i,n),t.scissor.set(e,r,i,n)}function tE(t,e,r){const i=new Float32Array(wn),n=new z(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function __(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function v_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ad(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rE(t){let e=new WeakMap,r=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===ph||l===mh,d=l===ua||l===ha;if(c||d){let f=e.get(s);const h=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return r===null&&(r=new m_(t)),f=c?r.fromEquirectangular(s,f):r.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const p=s.image;return c&&p&&p.height>0||d&&p&&n(p)?(r===null&&(r=new m_(t)),f=c?r.fromEquirectangular(s):r.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",a),f.texture):null}}}return s}function n(s){let l=0;const c=6;for(let d=0;d<c;d++)s[d]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:o}}function iE(t){const e={};function r(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(i)}return e[i]=n,n}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){const n=r(i);return n===null&&gl("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function nE(t,e,r,i){const n={},a=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const S=h.morphAttributes[x];for(let m=0,u=S.length;m<u;m++)e.remove(S[m])}h.removeEventListener("dispose",o),delete n[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,r.memory.geometries--}function s(f,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,r.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const S=p[x];for(let m=0,u=S.length;m<u;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,x=f.attributes.position;let S=0;if(p!==null){const _=p.array;S=p.version;for(let g=0,E=_.length;g<E;g+=3){const P=_[g+0],R=_[g+1],T=_[g+2];h.push(P,R,R,T,T,P)}}else if(x!==void 0){const _=x.array;S=x.version;for(let g=0,E=_.length/3-1;g<E;g+=3){const P=g+0,R=g+1,T=g+2;h.push(P,R,R,T,T,P)}}else return;const m=new(Fg(h)?t_:e_)(h,1);m.version=S;const u=a.get(f);u&&e.remove(u),a.set(f,m)}function d(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:d}}function aE(t,e,r){let i;function n(h){i=h}let a,o;function s(h){a=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,a,h*o),r.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,a,h*o,x),r.update(p,i,x))}function d(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,x);let S=0;for(let m=0;m<x;m++)S+=p[m];r.update(S,i,1)}function f(h,p,x,S){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,S,0,x);let u=0;for(let _=0;_<x;_++)u+=p[_];for(let _=0;_<S.length;_++)r.update(u,i,S[_])}}this.setMode=n,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function oE(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(r.calls++,o){case t.TRIANGLES:r.triangles+=s*(a/3);break;case t.LINES:r.lines+=s*(a/2);break;case t.LINE_STRIP:r.lines+=s*(a-1);break;case t.LINE_LOOP:r.lines+=s*a;break;case t.POINTS:r.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:n,update:i}}function sE(t,e,r){const i=new WeakMap,n=new gt;function a(o,s,l){const c=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(s);if(h===void 0||h.count!==f){let x=function(){X.dispose(),i.delete(s),s.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const S=s.morphAttributes.position!==void 0,m=s.morphAttributes.normal!==void 0,u=s.morphAttributes.color!==void 0,_=s.morphAttributes.position||[],g=s.morphAttributes.normal||[],E=s.morphAttributes.color||[];let P=0;S===!0&&(P=1),m===!0&&(P=2),u===!0&&(P=3);let R=s.attributes.position.count*P,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*T*4*f),X=new Gg(A,R,T,f);X.type=li,X.needsUpdate=!0;const v=P*4;for(let y=0;y<f;y++){const D=_[y],O=g[y],F=E[y],B=R*T*4*y;for(let k=0;k<D.count;k++){const W=k*v;S===!0&&(n.fromBufferAttribute(D,k),A[B+W+0]=n.x,A[B+W+1]=n.y,A[B+W+2]=n.z,A[B+W+3]=0),m===!0&&(n.fromBufferAttribute(O,k),A[B+W+4]=n.x,A[B+W+5]=n.y,A[B+W+6]=n.z,A[B+W+7]=0),u===!0&&(n.fromBufferAttribute(F,k),A[B+W+8]=n.x,A[B+W+9]=n.y,A[B+W+10]=n.z,A[B+W+11]=F.itemSize===4?n.w:1)}}h={count:f,texture:X,size:new ke(R,T)},i.set(s,h),s.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,r);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=s.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,r),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:a}}function lE(t,e,r,i){let n=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(r.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,t.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),r.remove(c.instanceMatrix),c.instanceColor!==null&&r.remove(c.instanceColor)}return{update:a,dispose:o}}class x_ extends Yt{constructor(e,r,i,n,a,o,s,l,c,d=fa){if(d!==fa&&d!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===fa&&(i=gn),i===void 0&&d===pa&&(i=da),super(null,n,a,o,s,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=s!==void 0?s:br,this.minFilter=l!==void 0?l:br,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const y_=new Yt,S_=new x_(1,1),b_=new Gg,E_=new qy,M_=new c_,T_=[],w_=[],R_=new Float32Array(16),C_=new Float32Array(9),A_=new Float32Array(4);function Na(t,e,r){const i=t[0];if(i<=0||i>0)return t;const n=e*r;let a=T_[n];if(a===void 0&&(a=new Float32Array(n),T_[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=r,t[o].toArray(a,s)}return a}function Mt(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function Tt(t,e){for(let r=0,i=e.length;r<i;r++)t[r]=e[r]}function kl(t,e){let r=w_[e];r===void 0&&(r=new Int32Array(e),w_[e]=r);for(let i=0;i!==e;++i)r[i]=t.allocateTextureUnit();return r}function cE(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function uE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Mt(r,e))return;t.uniform2fv(this.addr,e),Tt(r,e)}}function hE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Mt(r,e))return;t.uniform3fv(this.addr,e),Tt(r,e)}}function dE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Mt(r,e))return;t.uniform4fv(this.addr,e),Tt(r,e)}}function fE(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Mt(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),Tt(r,e)}else{if(Mt(r,i))return;A_.set(i),t.uniformMatrix2fv(this.addr,!1,A_),Tt(r,i)}}function pE(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Mt(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),Tt(r,e)}else{if(Mt(r,i))return;C_.set(i),t.uniformMatrix3fv(this.addr,!1,C_),Tt(r,i)}}function mE(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Mt(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),Tt(r,e)}else{if(Mt(r,i))return;R_.set(i),t.uniformMatrix4fv(this.addr,!1,R_),Tt(r,i)}}function gE(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function _E(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Mt(r,e))return;t.uniform2iv(this.addr,e),Tt(r,e)}}function vE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Mt(r,e))return;t.uniform3iv(this.addr,e),Tt(r,e)}}function xE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Mt(r,e))return;t.uniform4iv(this.addr,e),Tt(r,e)}}function yE(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function SE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Mt(r,e))return;t.uniform2uiv(this.addr,e),Tt(r,e)}}function bE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Mt(r,e))return;t.uniform3uiv(this.addr,e),Tt(r,e)}}function EE(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Mt(r,e))return;t.uniform4uiv(this.addr,e),Tt(r,e)}}function ME(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n);let a;this.type===t.SAMPLER_2D_SHADOW?(S_.compareFunction=Ng,a=S_):a=y_,r.setTexture2D(e||a,n)}function TE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(e||E_,n)}function wE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(e||M_,n)}function RE(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(e||b_,n)}function CE(t){switch(t){case 5126:return cE;case 35664:return uE;case 35665:return hE;case 35666:return dE;case 35674:return fE;case 35675:return pE;case 35676:return mE;case 5124:case 35670:return gE;case 35667:case 35671:return _E;case 35668:case 35672:return vE;case 35669:case 35673:return xE;case 5125:return yE;case 36294:return SE;case 36295:return bE;case 36296:return EE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return TE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return RE}}function AE(t,e){t.uniform1fv(this.addr,e)}function PE(t,e){const r=Na(e,this.size,2);t.uniform2fv(this.addr,r)}function LE(t,e){const r=Na(e,this.size,3);t.uniform3fv(this.addr,r)}function IE(t,e){const r=Na(e,this.size,4);t.uniform4fv(this.addr,r)}function DE(t,e){const r=Na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function NE(t,e){const r=Na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function UE(t,e){const r=Na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function OE(t,e){t.uniform1iv(this.addr,e)}function kE(t,e){t.uniform2iv(this.addr,e)}function FE(t,e){t.uniform3iv(this.addr,e)}function zE(t,e){t.uniform4iv(this.addr,e)}function BE(t,e){t.uniform1uiv(this.addr,e)}function HE(t,e){t.uniform2uiv(this.addr,e)}function VE(t,e){t.uniform3uiv(this.addr,e)}function GE(t,e){t.uniform4uiv(this.addr,e)}function WE(t,e,r){const i=this.cache,n=e.length,a=kl(r,n);Mt(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==n;++o)r.setTexture2D(e[o]||y_,a[o])}function jE(t,e,r){const i=this.cache,n=e.length,a=kl(r,n);Mt(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==n;++o)r.setTexture3D(e[o]||E_,a[o])}function XE(t,e,r){const i=this.cache,n=e.length,a=kl(r,n);Mt(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==n;++o)r.setTextureCube(e[o]||M_,a[o])}function qE(t,e,r){const i=this.cache,n=e.length,a=kl(r,n);Mt(i,a)||(t.uniform1iv(this.addr,a),Tt(i,a));for(let o=0;o!==n;++o)r.setTexture2DArray(e[o]||b_,a[o])}function YE(t){switch(t){case 5126:return AE;case 35664:return PE;case 35665:return LE;case 35666:return IE;case 35674:return DE;case 35675:return NE;case 35676:return UE;case 5124:case 35670:return OE;case 35667:case 35671:return kE;case 35668:case 35672:return FE;case 35669:case 35673:return zE;case 5125:return BE;case 36294:return HE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return qE}}class KE{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=CE(r.type)}}class ZE{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=YE(r.type)}}class $E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,r[s.id],i)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function P_(t,e){t.seq.push(e),t.map[e.id]=e}function QE(t,e,r){const i=t.name,n=i.length;for(Pd.lastIndex=0;;){const a=Pd.exec(i),o=Pd.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){P_(r,c===void 0?new KE(s,t,e):new ZE(s,t,e));break}else{let d=r.map[s];d===void 0&&(d=new $E(s),P_(r,d)),r=d}}}class Fl{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(r,n),o=e.getUniformLocation(r,a.name);QE(a,o,this)}}setValue(e,r,i,n){const a=this.map[r];a!==void 0&&a.setValue(e,i,n)}setOptional(e,r,i){const n=r[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,r,i,n){for(let a=0,o=r.length;a!==o;++a){const s=r[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,r){const i=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in r&&i.push(o)}return i}}function L_(t,e,r){const i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}const JE=37297;let eM=0;function tM(t,e){const r=t.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,r.length);for(let o=n;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${r[o]}`)}return i.join(`
`)}function rM(t){const e=qe.getPrimaries(qe.workingColorSpace),r=qe.getPrimaries(t);let i;switch(e===r?i="":e===dl&&r===hl?i="LinearDisplayP3ToLinearSRGB":e===hl&&r===dl&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case cl:return[i,"LinearTransferOETF"];case Wr:case $h:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function I_(t,e,r){const i=t.getShaderParameter(e,t.COMPILE_STATUS),n=t.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+tM(t.getShaderSource(e),o)}else return n}function iM(t,e){const r=rM(e);return`vec4 ${t}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function nM(t,e){let r;switch(e){case iy:r="Linear";break;case ny:r="Reinhard";break;case ay:r="Cineon";break;case oy:r="ACESFilmic";break;case ly:r="AgX";break;case cy:r="Neutral";break;case sy:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const zl=new z;function aM(){qe.getLuminanceCoefficients(zl);const t=zl.x.toFixed(4),e=zl.y.toFixed(4),r=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function sM(t){const e=[];for(const r in t){const i=t[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function lM(t,e){const r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=t.getActiveAttrib(e,n),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),r[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return r}function ko(t){return t!==""}function D_(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(t){return t.replace(cM,hM)}const uM=new Map;function hM(t,e){let r=Ue[e];if(r===void 0){const i=uM.get(e);if(i!==void 0)r=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ld(r)}const dM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function U_(t){return t.replace(dM,fM)}function fM(t,e,r,i){let n="";for(let a=parseInt(e);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function O_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ox?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function mM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ua:case ha:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gM(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ha:e="ENVMAP_MODE_REFRACTION";break}return e}function _M(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sg:e="ENVMAP_BLENDING_MULTIPLY";break;case ty:e="ENVMAP_BLENDING_MIX";break;case ry:e="ENVMAP_BLENDING_ADD";break}return e}function vM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function xM(t,e,r,i){const n=t.getContext(),a=r.defines;let o=r.vertexShader,s=r.fragmentShader;const l=pM(r),c=mM(r),d=gM(r),f=_M(r),h=vM(r),p=oM(r),x=sM(a),S=n.createProgram();let m,u,_=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(ko).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x].filter(ko).join(`
`),u.length>0&&(u+=`
`)):(m=[O_(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+d:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),u=[O_(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,x,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.envMap?"#define "+d:"",r.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==zi?"#define TONE_MAPPING":"",r.toneMapping!==zi?Ue.tonemapping_pars_fragment:"",r.toneMapping!==zi?nM("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,iM("linearToOutputTexel",r.outputColorSpace),aM(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(ko).join(`
`)),o=Ld(o),o=D_(o,r),o=N_(o,r),s=Ld(s),s=D_(s,r),s=N_(s,r),o=U_(o),s=U_(s),r.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",r.glslVersion===Og?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Og?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=_+m+o,E=_+u+s,P=L_(n,n.VERTEX_SHADER,g),R=L_(n,n.FRAGMENT_SHADER,E);n.attachShader(S,P),n.attachShader(S,R),r.index0AttributeName!==void 0?n.bindAttribLocation(S,0,r.index0AttributeName):r.morphTargets===!0&&n.bindAttribLocation(S,0,"position"),n.linkProgram(S);function T(y){if(t.debug.checkShaderErrors){const D=n.getProgramInfoLog(S).trim(),O=n.getShaderInfoLog(P).trim(),F=n.getShaderInfoLog(R).trim();let B=!0,k=!0;if(n.getProgramParameter(S,n.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,S,P,R);else{const W=I_(n,P,"vertex"),C=I_(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(S,n.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+D+`
`+W+`
`+C)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(O===""||F==="")&&(k=!1);k&&(y.diagnostics={runnable:B,programLog:D,vertexShader:{log:O,prefix:m},fragmentShader:{log:F,prefix:u}})}n.deleteShader(P),n.deleteShader(R),A=new Fl(n,S),X=lM(n,S)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let X;this.getAttributes=function(){return X===void 0&&T(this),X};let v=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(S,JE)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(S),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=eM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=P,this.fragmentShader=R,this}let yM=0;class SM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(r),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new bM(e),r.set(e,i)),i}}class bM{constructor(e){this.id=yM++,this.code=e,this.usedTimes=0}}function EM(t,e,r,i,n,a,o){const s=new ud,l=new SM,c=new Set,d=[],f=n.logarithmicDepthBuffer,h=n.reverseDepthBuffer,p=n.vertexTextures;let x=n.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function u(v,y,D,O,F){const B=O.fog,k=F.geometry,W=v.isMeshStandardMaterial?O.environment:null,C=(v.isMeshStandardMaterial?r:e).get(v.envMap||W),j=C&&C.mapping===rl?C.image.height:null,K=S[v.type];v.precision!==null&&(x=n.getMaxPrecision(v.precision),x!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",x,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pe=ne!==void 0?ne.length:0;let Se=0;k.morphAttributes.position!==void 0&&(Se=1),k.morphAttributes.normal!==void 0&&(Se=2),k.morphAttributes.color!==void 0&&(Se=3);let q,Q,ce,ae;if(K){const Zt=qr[K];q=Zt.vertexShader,Q=Zt.fragmentShader}else q=v.vertexShader,Q=v.fragmentShader,l.update(v),ce=l.getVertexShaderID(v),ae=l.getFragmentShaderID(v);const Ee=t.getRenderTarget(),we=F.isInstancedMesh===!0,Ve=F.isBatchedMesh===!0,Ze=!!v.map,Ge=!!v.matcap,L=!!C,ar=!!v.aoMap,ze=!!v.lightMap,je=!!v.bumpMap,Ce=!!v.normalMap,rt=!!v.displacementMap,Le=!!v.emissiveMap,w=!!v.metalnessMap,b=!!v.roughnessMap,H=v.anisotropy>0,$=v.clearcoat>0,te=v.dispersion>0,Z=v.iridescence>0,ye=v.sheen>0,le=v.transmission>0,ge=H&&!!v.anisotropyMap,Be=$&&!!v.clearcoatMap,ie=$&&!!v.clearcoatNormalMap,ve=$&&!!v.clearcoatRoughnessMap,Ae=Z&&!!v.iridescenceMap,Pe=Z&&!!v.iridescenceThicknessMap,me=ye&&!!v.sheenColorMap,He=ye&&!!v.sheenRoughnessMap,De=!!v.specularMap,Je=!!v.specularColorMap,I=!!v.specularIntensityMap,he=le&&!!v.transmissionMap,Y=le&&!!v.thicknessMap,J=!!v.gradientMap,ue=!!v.alphaMap,se=v.alphaTest>0,et=!!v.alphaHash,vt=!!v.extensions;let Kt=zi;v.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Kt=t.toneMapping);const Xe={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:q,fragmentShader:Q,defines:v.defines,customVertexShaderID:ce,customFragmentShaderID:ae,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:x,batching:Ve,batchingColor:Ve&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ee===null?t.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Hi,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:Ge,envMap:L,envMapMode:L&&C.mapping,envMapCubeUVHeight:j,aoMap:ar,lightMap:ze,bumpMap:je,normalMap:Ce,displacementMap:p&&rt,emissiveMap:Le,normalMapObjectSpace:Ce&&v.normalMapType===py,normalMapTangentSpace:Ce&&v.normalMapType===fy,metalnessMap:w,roughnessMap:b,anisotropy:H,anisotropyMap:ge,clearcoat:$,clearcoatMap:Be,clearcoatNormalMap:ie,clearcoatRoughnessMap:ve,dispersion:te,iridescence:Z,iridescenceMap:Ae,iridescenceThicknessMap:Pe,sheen:ye,sheenColorMap:me,sheenRoughnessMap:He,specularMap:De,specularColorMap:Je,specularIntensityMap:I,transmission:le,transmissionMap:he,thicknessMap:Y,gradientMap:J,opaque:v.transparent===!1&&v.blending===la&&v.alphaToCoverage===!1,alphaMap:ue,alphaTest:se,alphaHash:et,combine:v.combine,mapUv:Ze&&m(v.map.channel),aoMapUv:ar&&m(v.aoMap.channel),lightMapUv:ze&&m(v.lightMap.channel),bumpMapUv:je&&m(v.bumpMap.channel),normalMapUv:Ce&&m(v.normalMap.channel),displacementMapUv:rt&&m(v.displacementMap.channel),emissiveMapUv:Le&&m(v.emissiveMap.channel),metalnessMapUv:w&&m(v.metalnessMap.channel),roughnessMapUv:b&&m(v.roughnessMap.channel),anisotropyMapUv:ge&&m(v.anisotropyMap.channel),clearcoatMapUv:Be&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(v.sheenRoughnessMap.channel),specularMapUv:De&&m(v.specularMap.channel),specularColorMapUv:Je&&m(v.specularColorMap.channel),specularIntensityMapUv:I&&m(v.specularIntensityMap.channel),transmissionMapUv:he&&m(v.transmissionMap.channel),thicknessMapUv:Y&&m(v.thicknessMap.channel),alphaMapUv:ue&&m(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ce||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!k.attributes.uv&&(Ze||ue),fog:!!B,useFog:v.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:F.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Se,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Kt,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===at,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===oi,flipSided:v.side===rr,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=c.has(1),Xe.vertexUv2s=c.has(2),Xe.vertexUv3s=c.has(3),c.clear(),Xe}function _(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)y.push(D),y.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(g(y,v),E(y,v),y.push(t.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function g(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function E(v,y){s.disableAll(),y.supportsVertexTextures&&s.enable(0),y.instancing&&s.enable(1),y.instancingColor&&s.enable(2),y.instancingMorph&&s.enable(3),y.matcap&&s.enable(4),y.envMap&&s.enable(5),y.normalMapObjectSpace&&s.enable(6),y.normalMapTangentSpace&&s.enable(7),y.clearcoat&&s.enable(8),y.iridescence&&s.enable(9),y.alphaTest&&s.enable(10),y.vertexColors&&s.enable(11),y.vertexAlphas&&s.enable(12),y.vertexUv1s&&s.enable(13),y.vertexUv2s&&s.enable(14),y.vertexUv3s&&s.enable(15),y.vertexTangents&&s.enable(16),y.anisotropy&&s.enable(17),y.alphaHash&&s.enable(18),y.batching&&s.enable(19),y.dispersion&&s.enable(20),y.batchingColor&&s.enable(21),v.push(s.mask),s.disableAll(),y.fog&&s.enable(0),y.useFog&&s.enable(1),y.flatShading&&s.enable(2),y.logarithmicDepthBuffer&&s.enable(3),y.reverseDepthBuffer&&s.enable(4),y.skinning&&s.enable(5),y.morphTargets&&s.enable(6),y.morphNormals&&s.enable(7),y.morphColors&&s.enable(8),y.premultipliedAlpha&&s.enable(9),y.shadowMapEnabled&&s.enable(10),y.doubleSided&&s.enable(11),y.flipSided&&s.enable(12),y.useDepthPacking&&s.enable(13),y.dithering&&s.enable(14),y.transmission&&s.enable(15),y.sheen&&s.enable(16),y.opaque&&s.enable(17),y.pointsUvs&&s.enable(18),y.decodeVideoTexture&&s.enable(19),y.alphaToCoverage&&s.enable(20),v.push(s.mask)}function P(v){const y=S[v.type];let D;if(y){const O=qr[y];D=aS.clone(O.uniforms)}else D=v.uniforms;return D}function R(v,y){let D;for(let O=0,F=d.length;O<F;O++){const B=d[O];if(B.cacheKey===y){D=B,++D.usedTimes;break}}return D===void 0&&(D=new xM(t,y,v,a),d.push(D)),D}function T(v){if(--v.usedTimes===0){const y=d.indexOf(v);d[y]=d[d.length-1],d.pop(),v.destroy()}}function A(v){l.remove(v)}function X(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:P,acquireProgram:R,releaseProgram:T,releaseShaderCache:A,programs:d,dispose:X}}function MM(){let t=new WeakMap;function e(o){return t.has(o)}function r(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function i(o){t.delete(o)}function n(o,s,l){t.get(o)[s]=l}function a(){t=new WeakMap}return{has:e,get:r,remove:i,update:n,dispose:a}}function TM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function k_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function F_(){const t=[];let e=0;const r=[],i=[],n=[];function a(){e=0,r.length=0,i.length=0,n.length=0}function o(f,h,p,x,S,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:S,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=S,u.group=m),e++,u}function s(f,h,p,x,S,m){const u=o(f,h,p,x,S,m);p.transmission>0?i.push(u):p.transparent===!0?n.push(u):r.push(u)}function l(f,h,p,x,S,m){const u=o(f,h,p,x,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?n.unshift(u):r.unshift(u)}function c(f,h){r.length>1&&r.sort(f||TM),i.length>1&&i.sort(h||k_),n.length>1&&n.sort(h||k_)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:s,unshift:l,finish:d,sort:c}}function wM(){let t=new WeakMap;function e(i,n){const a=t.get(i);let o;return a===void 0?(o=new F_,t.set(i,[o])):n>=a.length?(o=new F_,a.push(o)):o=a[n],o}function r(){t=new WeakMap}return{get:e,dispose:r}}function RM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new z,color:new Ke};break;case"SpotLight":r={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":r={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":r={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=r,r}}}function CM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let AM=0;function PM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function LM(t){const e=new RM,r=CM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const n=new z,a=new _t,o=new _t;function s(c){let d=0,f=0,h=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,x=0,S=0,m=0,u=0,_=0,g=0,E=0,P=0,R=0,T=0;c.sort(PM);for(let X=0,v=c.length;X<v;X++){const y=c[X],D=y.color,O=y.intensity,F=y.distance,B=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)d+=D.r*O,f+=D.g*O,h+=D.b*O;else if(y.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(y.sh.coefficients[k],O);T++}else if(y.isDirectionalLight){const k=e.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const W=y.shadow,C=r.get(y);C.shadowIntensity=W.intensity,C.shadowBias=W.bias,C.shadowNormalBias=W.normalBias,C.shadowRadius=W.radius,C.shadowMapSize=W.mapSize,i.directionalShadow[p]=C,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=y.shadow.matrix,_++}i.directional[p]=k,p++}else if(y.isSpotLight){const k=e.get(y);k.position.setFromMatrixPosition(y.matrixWorld),k.color.copy(D).multiplyScalar(O),k.distance=F,k.coneCos=Math.cos(y.angle),k.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),k.decay=y.decay,i.spot[S]=k;const W=y.shadow;if(y.map&&(i.spotLightMap[P]=y.map,P++,W.updateMatrices(y),y.castShadow&&R++),i.spotLightMatrix[S]=W.matrix,y.castShadow){const C=r.get(y);C.shadowIntensity=W.intensity,C.shadowBias=W.bias,C.shadowNormalBias=W.normalBias,C.shadowRadius=W.radius,C.shadowMapSize=W.mapSize,i.spotShadow[S]=C,i.spotShadowMap[S]=B,E++}S++}else if(y.isRectAreaLight){const k=e.get(y);k.color.copy(D).multiplyScalar(O),k.halfWidth.set(y.width*.5,0,0),k.halfHeight.set(0,y.height*.5,0),i.rectArea[m]=k,m++}else if(y.isPointLight){const k=e.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),k.distance=y.distance,k.decay=y.decay,y.castShadow){const W=y.shadow,C=r.get(y);C.shadowIntensity=W.intensity,C.shadowBias=W.bias,C.shadowNormalBias=W.normalBias,C.shadowRadius=W.radius,C.shadowMapSize=W.mapSize,C.shadowCameraNear=W.camera.near,C.shadowCameraFar=W.camera.far,i.pointShadow[x]=C,i.pointShadowMap[x]=B,i.pointShadowMatrix[x]=y.shadow.matrix,g++}i.point[x]=k,x++}else if(y.isHemisphereLight){const k=e.get(y);k.skyColor.copy(y.color).multiplyScalar(O),k.groundColor.copy(y.groundColor).multiplyScalar(O),i.hemi[u]=k,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const A=i.hash;(A.directionalLength!==p||A.pointLength!==x||A.spotLength!==S||A.rectAreaLength!==m||A.hemiLength!==u||A.numDirectionalShadows!==_||A.numPointShadows!==g||A.numSpotShadows!==E||A.numSpotMaps!==P||A.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=E+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,A.directionalLength=p,A.pointLength=x,A.spotLength=S,A.rectAreaLength=m,A.hemiLength=u,A.numDirectionalShadows=_,A.numPointShadows=g,A.numSpotShadows=E,A.numSpotMaps=P,A.numLightProbes=T,i.version=AM++)}function l(c,d){let f=0,h=0,p=0,x=0,S=0;const m=d.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const g=c[u];if(g.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(m),f++}else if(g.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(g.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(g.width*.5,0,0),E.halfHeight.set(0,g.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(g.matrixWorld),E.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const E=i.hemi[S];E.direction.setFromMatrixPosition(g.matrixWorld),E.direction.transformDirection(m),S++}}}return{setup:s,setupView:l,state:i}}function z_(t){const e=new LM(t),r=[],i=[];function n(d){c.camera=d,r.length=0,i.length=0}function a(d){r.push(d)}function o(d){i.push(d)}function s(){e.setup(r)}function l(d){e.setupView(r,d)}const c={lightsArray:r,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function IM(t){let e=new WeakMap;function r(n,a=0){const o=e.get(n);let s;return o===void 0?(s=new z_(t),e.set(n,[s])):a>=o.length?(s=new z_(t),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:r,dispose:i}}class DM extends Tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NM extends Tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const UM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kM(t,e,r){let i=new u_;const n=new ke,a=new ke,o=new gt,s=new DM({depthPacking:dy}),l=new NM,c={},d=r.maxTextureSize,f={[ki]:rr,[rr]:ki,[oi]:oi},h=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:UM,fragmentShader:OM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new An;x.setAttribute("position",new jr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Xr(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_g;let u=this.type;this.render=function(R,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const X=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Fi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const O=u!==ai&&this.type===ai,F=u===ai&&this.type!==ai;for(let B=0,k=R.length;B<k;B++){const W=R[B],C=W.shadow;if(C===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(C.autoUpdate===!1&&C.needsUpdate===!1)continue;n.copy(C.mapSize);const j=C.getFrameExtents();if(n.multiply(j),a.copy(C.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(a.x=Math.floor(d/j.x),n.x=a.x*j.x,C.mapSize.x=a.x),n.y>d&&(a.y=Math.floor(d/j.y),n.y=a.y*j.y,C.mapSize.y=a.y)),C.map===null||O===!0||F===!0){const ne=this.type!==ai?{minFilter:br,magFilter:br}:{};C.map!==null&&C.map.dispose(),C.map=new vn(n.x,n.y,ne),C.map.texture.name=W.name+".shadowMap",C.camera.updateProjectionMatrix()}t.setRenderTarget(C.map),t.clear();const K=C.getViewportCount();for(let ne=0;ne<K;ne++){const pe=C.getViewport(ne);o.set(a.x*pe.x,a.y*pe.y,a.x*pe.z,a.y*pe.w),D.viewport(o),C.updateMatrices(W,ne),i=C.getFrustum(),E(T,A,C.camera,W,this.type)}C.isPointLightShadow!==!0&&this.type===ai&&_(C,A),C.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(X,v,y)};function _(R,T){const A=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new vn(n.x,n.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(T,null,A,h,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(T,null,A,p,S,null)}function g(R,T,A,X){let v=null;const y=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(y!==void 0)v=y;else if(v=A.isPointLight===!0?l:s,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const D=v.uuid,O=T.uuid;let F=c[D];F===void 0&&(F={},c[D]=F);let B=F[O];B===void 0&&(B=v.clone(),F[O]=B,T.addEventListener("dispose",P)),v=B}if(v.visible=T.visible,v.wireframe=T.wireframe,X===ai?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=t.properties.get(v);D.light=A}return v}function E(R,T,A,X,v){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===ai)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);const D=e.update(R),O=R.material;if(Array.isArray(O)){const F=D.groups;for(let B=0,k=F.length;B<k;B++){const W=F[B],C=O[W.materialIndex];if(C&&C.visible){const j=g(R,C,X,v);R.onBeforeShadow(t,R,T,A,D,j,W),t.renderBufferDirect(A,null,D,j,R,W),R.onAfterShadow(t,R,T,A,D,j,W)}}}else if(O.visible){const F=g(R,O,X,v);R.onBeforeShadow(t,R,T,A,D,F,null),t.renderBufferDirect(A,null,D,F,R,null),R.onAfterShadow(t,R,T,A,D,F,null)}}const y=R.children;for(let D=0,O=y.length;D<O;D++)E(y[D],T,A,X,v)}function P(R){R.target.removeEventListener("dispose",P);for(const T in c){const A=c[T],X=R.target.uuid;X in A&&(A[X].dispose(),delete A[X])}}}const FM={[sh]:lh,[ch]:dh,[uh]:fh,[ca]:hh,[lh]:sh,[dh]:ch,[fh]:uh,[hh]:ca};function zM(t){function e(){let I=!1;const he=new gt;let Y=null;const J=new gt(0,0,0,0);return{setMask:function(ue){Y!==ue&&!I&&(t.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){I=ue},setClear:function(ue,se,et,vt,Kt){Kt===!0&&(ue*=vt,se*=vt,et*=vt),he.set(ue,se,et,vt),J.equals(he)===!1&&(t.clearColor(ue,se,et,vt),J.copy(he))},reset:function(){I=!1,Y=null,J.set(-1,0,0,0)}}}function r(){let I=!1,he=!1,Y=null,J=null,ue=null;return{setReversed:function(se){he=se},setTest:function(se){se?ce(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(se){Y!==se&&!I&&(t.depthMask(se),Y=se)},setFunc:function(se){if(he&&(se=FM[se]),J!==se){switch(se){case sh:t.depthFunc(t.NEVER);break;case lh:t.depthFunc(t.ALWAYS);break;case ch:t.depthFunc(t.LESS);break;case ca:t.depthFunc(t.LEQUAL);break;case uh:t.depthFunc(t.EQUAL);break;case hh:t.depthFunc(t.GEQUAL);break;case dh:t.depthFunc(t.GREATER);break;case fh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=se}},setLocked:function(se){I=se},setClear:function(se){ue!==se&&(t.clearDepth(se),ue=se)},reset:function(){I=!1,Y=null,J=null,ue=null}}}function i(){let I=!1,he=null,Y=null,J=null,ue=null,se=null,et=null,vt=null,Kt=null;return{setTest:function(Xe){I||(Xe?ce(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(Xe){he!==Xe&&!I&&(t.stencilMask(Xe),he=Xe)},setFunc:function(Xe,Zt,Yr){(Y!==Xe||J!==Zt||ue!==Yr)&&(t.stencilFunc(Xe,Zt,Yr),Y=Xe,J=Zt,ue=Yr)},setOp:function(Xe,Zt,Yr){(se!==Xe||et!==Zt||vt!==Yr)&&(t.stencilOp(Xe,Zt,Yr),se=Xe,et=Zt,vt=Yr)},setLocked:function(Xe){I=Xe},setClear:function(Xe){Kt!==Xe&&(t.clearStencil(Xe),Kt=Xe)},reset:function(){I=!1,he=null,Y=null,J=null,ue=null,se=null,et=null,vt=null,Kt=null}}}const n=new e,a=new r,o=new i,s=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,h=[],p=null,x=!1,S=null,m=null,u=null,_=null,g=null,E=null,P=null,R=new Ke(0,0,0),T=0,A=!1,X=null,v=null,y=null,D=null,O=null;const F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,k=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=k>=2);let C=null,j={};const K=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),pe=new gt().fromArray(K),Se=new gt().fromArray(ne);function q(I,he,Y,J){const ue=new Uint8Array(4),se=t.createTexture();t.bindTexture(I,se),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<Y;et++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(he+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return se}const Q={};Q[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),Q[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Q[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(t.DEPTH_TEST),a.setFunc(ca),ze(!1),je(gg),ce(t.CULL_FACE),L(Fi);function ce(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function ae(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function Ee(I,he){return d[I]!==he?(t.bindFramebuffer(I,he),d[I]=he,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function we(I,he){let Y=h,J=!1;if(I){Y=f.get(he),Y===void 0&&(Y=[],f.set(he,Y));const ue=I.textures;if(Y.length!==ue.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let se=0,et=ue.length;se<et;se++)Y[se]=t.COLOR_ATTACHMENT0+se;Y.length=ue.length,J=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,J=!0);J&&t.drawBuffers(Y)}function Ve(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const Ze={[fn]:t.FUNC_ADD,[Fx]:t.FUNC_SUBTRACT,[zx]:t.FUNC_REVERSE_SUBTRACT};Ze[Bx]=t.MIN,Ze[Hx]=t.MAX;const Ge={[Vx]:t.ZERO,[Gx]:t.ONE,[Wx]:t.SRC_COLOR,[ah]:t.SRC_ALPHA,[Zx]:t.SRC_ALPHA_SATURATE,[Yx]:t.DST_COLOR,[Xx]:t.DST_ALPHA,[jx]:t.ONE_MINUS_SRC_COLOR,[oh]:t.ONE_MINUS_SRC_ALPHA,[Kx]:t.ONE_MINUS_DST_COLOR,[qx]:t.ONE_MINUS_DST_ALPHA,[$x]:t.CONSTANT_COLOR,[Qx]:t.ONE_MINUS_CONSTANT_COLOR,[Jx]:t.CONSTANT_ALPHA,[ey]:t.ONE_MINUS_CONSTANT_ALPHA};function L(I,he,Y,J,ue,se,et,vt,Kt,Xe){if(I===Fi){x===!0&&(ae(t.BLEND),x=!1);return}if(x===!1&&(ce(t.BLEND),x=!0),I!==kx){if(I!==S||Xe!==A){if((m!==fn||g!==fn)&&(t.blendEquation(t.FUNC_ADD),m=fn,g=fn),Xe)switch(I){case la:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vg:t.blendFunc(t.ONE,t.ONE);break;case xg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case la:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,_=null,E=null,P=null,R.set(0,0,0),T=0,S=I,A=Xe}return}ue=ue||he,se=se||Y,et=et||J,(he!==m||ue!==g)&&(t.blendEquationSeparate(Ze[he],Ze[ue]),m=he,g=ue),(Y!==u||J!==_||se!==E||et!==P)&&(t.blendFuncSeparate(Ge[Y],Ge[J],Ge[se],Ge[et]),u=Y,_=J,E=se,P=et),(vt.equals(R)===!1||Kt!==T)&&(t.blendColor(vt.r,vt.g,vt.b,Kt),R.copy(vt),T=Kt),S=I,A=!1}function ar(I,he){I.side===oi?ae(t.CULL_FACE):ce(t.CULL_FACE);let Y=I.side===rr;he&&(Y=!Y),ze(Y),I.blending===la&&I.transparent===!1?L(Fi):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),n.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){X!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),X=I)}function je(I){I!==Nx?(ce(t.CULL_FACE),I!==v&&(I===gg?t.cullFace(t.BACK):I===Ux?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),v=I}function Ce(I){I!==y&&(B&&t.lineWidth(I),y=I)}function rt(I,he,Y){I?(ce(t.POLYGON_OFFSET_FILL),(D!==he||O!==Y)&&(t.polygonOffset(he,Y),D=he,O=Y)):ae(t.POLYGON_OFFSET_FILL)}function Le(I){I?ce(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function w(I){I===void 0&&(I=t.TEXTURE0+F-1),C!==I&&(t.activeTexture(I),C=I)}function b(I,he,Y){Y===void 0&&(C===null?Y=t.TEXTURE0+F-1:Y=C);let J=j[Y];J===void 0&&(J={type:void 0,texture:void 0},j[Y]=J),(J.type!==I||J.texture!==he)&&(C!==Y&&(t.activeTexture(Y),C=Y),t.bindTexture(I,he||Q[I]),J.type=I,J.texture=he)}function H(){const I=j[C];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){pe.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),pe.copy(I))}function me(I){Se.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Se.copy(I))}function He(I,he){let Y=l.get(he);Y===void 0&&(Y=new WeakMap,l.set(he,Y));let J=Y.get(I);J===void 0&&(J=t.getUniformBlockIndex(he,I.name),Y.set(I,J))}function De(I,he){const Y=l.get(he).get(I);s.get(he)!==Y&&(t.uniformBlockBinding(he,Y,I.__bindingPointIndex),s.set(he,Y))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},C=null,j={},d={},f=new WeakMap,h=[],p=null,x=!1,S=null,m=null,u=null,_=null,g=null,E=null,P=null,R=new Ke(0,0,0),T=0,A=!1,X=null,v=null,y=null,D=null,O=null,pe.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:ce,disable:ae,bindFramebuffer:Ee,drawBuffers:we,useProgram:Ve,setBlending:L,setMaterial:ar,setFlipSided:ze,setCullFace:je,setLineWidth:Ce,setPolygonOffset:rt,setScissorTest:Le,activeTexture:w,bindTexture:b,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:te,texImage2D:ve,texImage3D:Ae,updateUBOMapping:He,uniformBlockBinding:De,texStorage2D:Be,texStorage3D:ie,texSubImage2D:Z,texSubImage3D:ye,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Pe,viewport:me,reset:Je}}function B_(t,e,r,i){const n=BM(i);switch(r){case wg:return t*e;case Cg:return t*e;case Ag:return t*e*2;case Pg:return t*e/n.components*n.byteLength;case bh:return t*e/n.components*n.byteLength;case Lg:return t*e*2/n.components*n.byteLength;case Eh:return t*e*2/n.components*n.byteLength;case Rg:return t*e*3/n.components*n.byteLength;case Nr:return t*e*4/n.components*n.byteLength;case Mh:return t*e*4/n.components*n.byteLength;case nl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:case Ch:return Math.max(t,16)*Math.max(e,8)/4;case Th:case Rh:return Math.max(t,8)*Math.max(e,8)/2;case Ah:case Ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ll:case Xh:case qh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ig:case Yh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kh:case Zh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function BM(t){switch(t){case si:case Eg:return{byteLength:1,components:1};case wo:case Mg:case Ro:return{byteLength:2,components:1};case yh:case Sh:return{byteLength:2,components:4};case gn:case xh:case li:return{byteLength:4,components:1};case Tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function HM(t,e,r,i,n,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ke,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,b){return p?new OffscreenCanvas(w,b):ml("canvas")}function S(w,b,H){let $=1;const te=Le(w);if((te.width>H||te.height>H)&&($=H/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor($*te.width),ye=Math.floor($*te.height);f===void 0&&(f=x(Z,ye));const le=b?x(Z,ye):f;return le.width=Z,le.height=ye,le.getContext("2d").drawImage(w,0,0,Z,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+ye+")."),le}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==br&&w.minFilter!==Dr}function u(w){t.generateMipmap(w)}function _(w,b,H,$,te=!1){if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=b;if(b===t.RED&&(H===t.FLOAT&&(Z=t.R32F),H===t.HALF_FLOAT&&(Z=t.R16F),H===t.UNSIGNED_BYTE&&(Z=t.R8)),b===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.R8UI),H===t.UNSIGNED_SHORT&&(Z=t.R16UI),H===t.UNSIGNED_INT&&(Z=t.R32UI),H===t.BYTE&&(Z=t.R8I),H===t.SHORT&&(Z=t.R16I),H===t.INT&&(Z=t.R32I)),b===t.RG&&(H===t.FLOAT&&(Z=t.RG32F),H===t.HALF_FLOAT&&(Z=t.RG16F),H===t.UNSIGNED_BYTE&&(Z=t.RG8)),b===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RG8UI),H===t.UNSIGNED_SHORT&&(Z=t.RG16UI),H===t.UNSIGNED_INT&&(Z=t.RG32UI),H===t.BYTE&&(Z=t.RG8I),H===t.SHORT&&(Z=t.RG16I),H===t.INT&&(Z=t.RG32I)),b===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),H===t.UNSIGNED_INT&&(Z=t.RGB32UI),H===t.BYTE&&(Z=t.RGB8I),H===t.SHORT&&(Z=t.RGB16I),H===t.INT&&(Z=t.RGB32I)),b===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),H===t.UNSIGNED_INT&&(Z=t.RGBA32UI),H===t.BYTE&&(Z=t.RGBA8I),H===t.SHORT&&(Z=t.RGBA16I),H===t.INT&&(Z=t.RGBA32I)),b===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),b===t.RGBA){const ye=te?ul:qe.getTransfer($);H===t.FLOAT&&(Z=t.RGBA32F),H===t.HALF_FLOAT&&(Z=t.RGBA16F),H===t.UNSIGNED_BYTE&&(Z=ye===at?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function g(w,b){let H;return w?b===null||b===gn||b===da?H=t.DEPTH24_STENCIL8:b===li?H=t.DEPTH32F_STENCIL8:b===wo&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===gn||b===da?H=t.DEPTH_COMPONENT24:b===li?H=t.DEPTH_COMPONENT32F:b===wo&&(H=t.DEPTH_COMPONENT16),H}function E(w,b){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==br&&w.minFilter!==Dr?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function P(w){const b=w.target;b.removeEventListener("dispose",P),T(b),b.isVideoTexture&&d.delete(b)}function R(w){const b=w.target;b.removeEventListener("dispose",R),X(b)}function T(w){const b=i.get(w);if(b.__webglInit===void 0)return;const H=w.source,$=h.get(H);if($){const te=$[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(w),Object.keys($).length===0&&h.delete(H)}i.remove(w)}function A(w){const b=i.get(w);t.deleteTexture(b.__webglTexture);const H=w.source,$=h.get(H);delete $[b.__cacheKey],o.memory.textures--}function X(w){const b=i.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let te=0;te<b.__webglFramebuffer[$].length;te++)t.deleteFramebuffer(b.__webglFramebuffer[$][te]);else t.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)t.deleteFramebuffer(b.__webglFramebuffer[$]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const H=w.textures;for(let $=0,te=H.length;$<te;$++){const Z=i.get(H[$]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(H[$])}i.remove(w)}let v=0;function y(){v=0}function D(){const w=v;return w>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+n.maxTextures),v+=1,w}function O(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function F(w,b){const H=i.get(w);if(w.isVideoTexture&&Ce(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(H,w,b);return}}r.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+b)}function B(w,b){const H=i.get(w);if(w.version>0&&H.__version!==w.version){Se(H,w,b);return}r.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+b)}function k(w,b){const H=i.get(w);if(w.version>0&&H.__version!==w.version){Se(H,w,b);return}r.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+b)}function W(w,b){const H=i.get(w);if(w.version>0&&H.__version!==w.version){q(H,w,b);return}r.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+b)}const C={[gh]:t.REPEAT,[pn]:t.CLAMP_TO_EDGE,[_h]:t.MIRRORED_REPEAT},j={[br]:t.NEAREST,[uy]:t.NEAREST_MIPMAP_NEAREST,[il]:t.NEAREST_MIPMAP_LINEAR,[Dr]:t.LINEAR,[vh]:t.LINEAR_MIPMAP_NEAREST,[mn]:t.LINEAR_MIPMAP_LINEAR},K={[my]:t.NEVER,[Sy]:t.ALWAYS,[gy]:t.LESS,[Ng]:t.LEQUAL,[_y]:t.EQUAL,[yy]:t.GEQUAL,[vy]:t.GREATER,[xy]:t.NOTEQUAL};function ne(w,b){if(b.type===li&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Dr||b.magFilter===vh||b.magFilter===il||b.magFilter===mn||b.minFilter===Dr||b.minFilter===vh||b.minFilter===il||b.minFilter===mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,C[b.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,C[b.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,C[b.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,j[b.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,j[b.minFilter]),b.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===br||b.minFilter!==il&&b.minFilter!==mn||b.type===li&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function pe(w,b){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",P));const $=b.source;let te=h.get($);te===void 0&&(te={},h.set($,te));const Z=O(b);if(Z!==w.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[Z].usedTimes++;const ye=te[w.__cacheKey];ye!==void 0&&(te[w.__cacheKey].usedTimes--,ye.usedTimes===0&&A(b)),w.__cacheKey=Z,w.__webglTexture=te[Z].texture}return H}function Se(w,b,H){let $=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=t.TEXTURE_3D);const te=pe(w,b),Z=b.source;r.bindTexture($,w.__webglTexture,t.TEXTURE0+H);const ye=i.get(Z);if(Z.version!==ye.__version||te===!0){r.activeTexture(t.TEXTURE0+H);const le=qe.getPrimaries(qe.workingColorSpace),ge=b.colorSpace===Bi?null:qe.getPrimaries(b.colorSpace),Be=b.colorSpace===Bi||le===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ie=S(b.image,!1,n.maxTextureSize);ie=rt(b,ie);const ve=a.convert(b.format,b.colorSpace),Ae=a.convert(b.type);let Pe=_(b.internalFormat,ve,Ae,b.colorSpace,b.isVideoTexture);ne($,b);let me;const He=b.mipmaps,De=b.isVideoTexture!==!0,Je=ye.__version===void 0||te===!0,I=Z.dataReady,he=E(b,ie);if(b.isDepthTexture)Pe=g(b.format===pa,b.type),Je&&(De?r.texStorage2D(t.TEXTURE_2D,1,Pe,ie.width,ie.height):r.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ve,Ae,null));else if(b.isDataTexture)if(He.length>0){De&&Je&&r.texStorage2D(t.TEXTURE_2D,he,Pe,He[0].width,He[0].height);for(let Y=0,J=He.length;Y<J;Y++)me=He[Y],De?I&&r.texSubImage2D(t.TEXTURE_2D,Y,0,0,me.width,me.height,ve,Ae,me.data):r.texImage2D(t.TEXTURE_2D,Y,Pe,me.width,me.height,0,ve,Ae,me.data);b.generateMipmaps=!1}else De?(Je&&r.texStorage2D(t.TEXTURE_2D,he,Pe,ie.width,ie.height),I&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,Ae,ie.data)):r.texImage2D(t.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ve,Ae,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){De&&Je&&r.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,He[0].width,He[0].height,ie.depth);for(let Y=0,J=He.length;Y<J;Y++)if(me=He[Y],b.format!==Nr)if(ve!==null)if(De){if(I)if(b.layerUpdates.size>0){const ue=B_(me.width,me.height,b.format,b.type);for(const se of b.layerUpdates){const et=me.data.subarray(se*ue/me.data.BYTES_PER_ELEMENT,(se+1)*ue/me.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,se,me.width,me.height,1,ve,et,0,0)}b.clearLayerUpdates()}else r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ie.depth,ve,me.data,0,0)}else r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Pe,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?I&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,me.width,me.height,ie.depth,ve,Ae,me.data):r.texImage3D(t.TEXTURE_2D_ARRAY,Y,Pe,me.width,me.height,ie.depth,0,ve,Ae,me.data)}else{De&&Je&&r.texStorage2D(t.TEXTURE_2D,he,Pe,He[0].width,He[0].height);for(let Y=0,J=He.length;Y<J;Y++)me=He[Y],b.format!==Nr?ve!==null?De?I&&r.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,me.width,me.height,ve,me.data):r.compressedTexImage2D(t.TEXTURE_2D,Y,Pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?I&&r.texSubImage2D(t.TEXTURE_2D,Y,0,0,me.width,me.height,ve,Ae,me.data):r.texImage2D(t.TEXTURE_2D,Y,Pe,me.width,me.height,0,ve,Ae,me.data)}else if(b.isDataArrayTexture)if(De){if(Je&&r.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,ie.width,ie.height,ie.depth),I)if(b.layerUpdates.size>0){const Y=B_(ie.width,ie.height,b.format,b.type);for(const J of b.layerUpdates){const ue=ie.data.subarray(J*Y/ie.data.BYTES_PER_ELEMENT,(J+1)*Y/ie.data.BYTES_PER_ELEMENT);r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ve,Ae,ue)}b.clearLayerUpdates()}else r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ae,ie.data)}else r.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,ve,Ae,ie.data);else if(b.isData3DTexture)De?(Je&&r.texStorage3D(t.TEXTURE_3D,he,Pe,ie.width,ie.height,ie.depth),I&&r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ae,ie.data)):r.texImage3D(t.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,ve,Ae,ie.data);else if(b.isFramebufferTexture){if(Je)if(De)r.texStorage2D(t.TEXTURE_2D,he,Pe,ie.width,ie.height);else{let Y=ie.width,J=ie.height;for(let ue=0;ue<he;ue++)r.texImage2D(t.TEXTURE_2D,ue,Pe,Y,J,0,ve,Ae,null),Y>>=1,J>>=1}}else if(He.length>0){if(De&&Je){const Y=Le(He[0]);r.texStorage2D(t.TEXTURE_2D,he,Pe,Y.width,Y.height)}for(let Y=0,J=He.length;Y<J;Y++)me=He[Y],De?I&&r.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve,Ae,me):r.texImage2D(t.TEXTURE_2D,Y,Pe,ve,Ae,me);b.generateMipmaps=!1}else if(De){if(Je){const Y=Le(ie);r.texStorage2D(t.TEXTURE_2D,he,Pe,Y.width,Y.height)}I&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Ae,ie)}else r.texImage2D(t.TEXTURE_2D,0,Pe,ve,Ae,ie);m(b)&&u($),ye.__version=Z.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function q(w,b,H){if(b.image.length!==6)return;const $=pe(w,b),te=b.source;r.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+H);const Z=i.get(te);if(te.version!==Z.__version||$===!0){r.activeTexture(t.TEXTURE0+H);const ye=qe.getPrimaries(qe.workingColorSpace),le=b.colorSpace===Bi?null:qe.getPrimaries(b.colorSpace),ge=b.colorSpace===Bi||ye===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Be=b.isCompressedTexture||b.image[0].isCompressedTexture,ie=b.image[0]&&b.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Be&&!ie?ve[J]=S(b.image[J],!0,n.maxCubemapSize):ve[J]=ie?b.image[J].image:b.image[J],ve[J]=rt(b,ve[J]);const Ae=ve[0],Pe=a.convert(b.format,b.colorSpace),me=a.convert(b.type),He=_(b.internalFormat,Pe,me,b.colorSpace),De=b.isVideoTexture!==!0,Je=Z.__version===void 0||$===!0,I=te.dataReady;let he=E(b,Ae);ne(t.TEXTURE_CUBE_MAP,b);let Y;if(Be){De&&Je&&r.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,Ae.width,Ae.height);for(let J=0;J<6;J++){Y=ve[J].mipmaps;for(let ue=0;ue<Y.length;ue++){const se=Y[ue];b.format!==Nr?Pe!==null?De?I&&r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,se.width,se.height,Pe,se.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,He,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,0,0,se.width,se.height,Pe,me,se.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue,He,se.width,se.height,0,Pe,me,se.data)}}}else{if(Y=b.mipmaps,De&&Je){Y.length>0&&he++;const J=Le(ve[0]);r.texStorage2D(t.TEXTURE_CUBE_MAP,he,He,J.width,J.height)}for(let J=0;J<6;J++)if(ie){De?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Pe,me,ve[J].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,ve[J].width,ve[J].height,0,Pe,me,ve[J].data);for(let ue=0;ue<Y.length;ue++){const se=Y[ue].image[J].image;De?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,se.width,se.height,Pe,me,se.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,He,se.width,se.height,0,Pe,me,se.data)}}else{De?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,me,ve[J]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,He,Pe,me,ve[J]);for(let ue=0;ue<Y.length;ue++){const se=Y[ue];De?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,0,0,Pe,me,se.image[J]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ue+1,He,Pe,me,se.image[J])}}}m(b)&&u(t.TEXTURE_CUBE_MAP),Z.__version=te.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Q(w,b,H,$,te,Z){const ye=a.convert(H.format,H.colorSpace),le=a.convert(H.type),ge=_(H.internalFormat,ye,le,H.colorSpace);if(!i.get(b).__hasExternalTextures){const Be=Math.max(1,b.width>>Z),ie=Math.max(1,b.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?r.texImage3D(te,Z,ge,Be,ie,b.depth,0,ye,le,null):r.texImage2D(te,Z,ge,Be,ie,0,ye,le,null)}r.bindFramebuffer(t.FRAMEBUFFER,w),je(b)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,te,i.get(H).__webglTexture,0,ze(b)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,te,i.get(H).__webglTexture,Z),r.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(w,b,H){if(t.bindRenderbuffer(t.RENDERBUFFER,w),b.depthBuffer){const $=b.depthTexture,te=$&&$.isDepthTexture?$.type:null,Z=g(b.stencilBuffer,te),ye=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=ze(b);je(b)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,Z,b.width,b.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,Z,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Z,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,w)}else{const $=b.textures;for(let te=0;te<$.length;te++){const Z=$[te],ye=a.convert(Z.format,Z.colorSpace),le=a.convert(Z.type),ge=_(Z.internalFormat,ye,le,Z.colorSpace),Be=ze(b);H&&je(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ge,b.width,b.height):je(b)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be,ge,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ge,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const H=i.get(b.depthTexture).__webglTexture,$=ze(b);if(b.depthTexture.format===fa)je(b)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,H,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,H,0);else if(b.depthTexture.format===pa)je(b)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,H,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function Ee(w){const b=i.get(w),H=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const $=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=$}if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ae(b.__webglFramebuffer,w)}else if(H){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(r.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=t.createRenderbuffer(),ce(b.__webglDepthbuffer[$],w,!1);else{const te=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}else if(r.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),ce(b.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,te)}r.bindFramebuffer(t.FRAMEBUFFER,null)}function we(w,b,H){const $=i.get(w);b!==void 0&&Q($.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ee(w)}function Ve(w){const b=w.texture,H=i.get(w),$=i.get(b);w.addEventListener("dispose",R);const te=w.textures,Z=w.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=b.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let ge=0;ge<b.mipmaps.length;ge++)H.__webglFramebuffer[le][ge]=t.createFramebuffer()}else H.__webglFramebuffer[le]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<b.mipmaps.length;le++)H.__webglFramebuffer[le]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ye)for(let le=0,ge=te.length;le<ge;le++){const Be=i.get(te[le]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(w.samples>0&&je(w)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const ge=te[le];H.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const Be=a.convert(ge.format,ge.colorSpace),ie=a.convert(ge.type),ve=_(ge.internalFormat,Be,ie,ge.colorSpace,w.isXRRenderTarget===!0),Ae=ze(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ve,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,H.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(H.__webglDepthRenderbuffer,w,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){r.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),ne(t.TEXTURE_CUBE_MAP,b);for(let le=0;le<6;le++)if(b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Q(H.__webglFramebuffer[le][ge],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else Q(H.__webglFramebuffer[le],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(b)&&u(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(ye){for(let le=0,ge=te.length;le<ge;le++){const Be=te[le],ie=i.get(Be);r.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ne(t.TEXTURE_2D,Be),Q(H.__webglFramebuffer,w,Be,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(Be)&&u(t.TEXTURE_2D)}r.unbindTexture()}else{let le=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(le,$.__webglTexture),ne(le,b),b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)Q(H.__webglFramebuffer[ge],w,b,t.COLOR_ATTACHMENT0,le,ge);else Q(H.__webglFramebuffer,w,b,t.COLOR_ATTACHMENT0,le,0);m(b)&&u(le),r.unbindTexture()}w.depthBuffer&&Ee(w)}function Ze(w){const b=w.textures;for(let H=0,$=b.length;H<$;H++){const te=b[H];if(m(te)){const Z=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ye=i.get(te).__webglTexture;r.bindTexture(Z,ye),u(Z),r.unbindTexture()}}}const Ge=[],L=[];function ar(w){if(w.samples>0){if(je(w)===!1){const b=w.textures,H=w.width,$=w.height;let te=t.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(w),le=b.length>1;if(le)for(let ge=0;ge<b.length;ge++)r.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ge=0;ge<b.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);const Be=i.get(b[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Be,0)}t.blitFramebuffer(0,0,H,$,0,0,H,$,te,t.NEAREST),l===!0&&(Ge.length=0,L.length=0,Ge.push(t.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ge.push(Z),L.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ge))}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<b.length;ge++){r.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);const Be=i.get(b[ge]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Be,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const b=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function ze(w){return Math.min(n.maxSamples,w.samples)}function je(w){const b=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ce(w){const b=o.render.frame;d.get(w)!==b&&(d.set(w,b),w.update())}function rt(w,b){const H=w.colorSpace,$=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Hi&&H!==Bi&&(qe.getTransfer(H)===at?($!==Nr||te!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}function Le(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=y,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=we,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=ar,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=je}function VM(t,e){function r(i,n=Bi){let a;const o=qe.getTransfer(n);if(i===si)return t.UNSIGNED_BYTE;if(i===yh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Tg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Eg)return t.BYTE;if(i===Mg)return t.SHORT;if(i===wo)return t.UNSIGNED_SHORT;if(i===xh)return t.INT;if(i===gn)return t.UNSIGNED_INT;if(i===li)return t.FLOAT;if(i===Ro)return t.HALF_FLOAT;if(i===wg)return t.ALPHA;if(i===Rg)return t.RGB;if(i===Nr)return t.RGBA;if(i===Cg)return t.LUMINANCE;if(i===Ag)return t.LUMINANCE_ALPHA;if(i===fa)return t.DEPTH_COMPONENT;if(i===pa)return t.DEPTH_STENCIL;if(i===Pg)return t.RED;if(i===bh)return t.RED_INTEGER;if(i===Lg)return t.RG;if(i===Eh)return t.RG_INTEGER;if(i===Mh)return t.RGBA_INTEGER;if(i===nl||i===al||i===ol||i===sl)if(o===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===nl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===nl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Th||i===wh||i===Rh||i===Ch)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Th)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ah||i===Ph||i===Lh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ah||i===Ph)return o===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Lh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ih||i===Dh||i===Nh||i===Uh||i===Oh||i===kh||i===Fh||i===zh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===jh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ih)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===Xh||i===qh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ll)return o===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ig||i===Yh||i===Kh||i===Zh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ll)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Yh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:r}}class GM extends Mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bl extends nr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=r.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=r.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=r.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new Bl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}const jM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r,i){if(this.texture===null){const n=new Yt,a=e.properties.get(n);a.__webglTexture=r.texture,(r.depthNear!=i.depthNear||r.depthFar!=i.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,i=new qi({vertexShader:jM,fragmentShader:XM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Xr(new Vl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YM extends _n{constructor(e,r){super();const i=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,x=null;const S=new qM,m=r.getContextAttributes();let u=null,_=null;const g=[],E=[],P=new ke;let R=null;const T=new Mr;T.layers.enable(1),T.viewport=new gt;const A=new Mr;A.layers.enable(2),A.viewport=new gt;const X=[T,A],v=new GM;v.layers.enable(1),v.layers.enable(2);let y=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=g[q];return Q===void 0&&(Q=new Id,g[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=g[q];return Q===void 0&&(Q=new Id,g[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=g[q];return Q===void 0&&(Q=new Id,g[q]=Q),Q.getHandSpace()};function O(q){const Q=E.indexOf(q.inputSource);if(Q===-1)return;const ce=g[Q];ce!==void 0&&(ce.update(q.inputSource,q.frame,c||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",F),n.removeEventListener("inputsourceschange",B);for(let q=0;q<g.length;q++){const Q=E[q];Q!==null&&(E[q]=null,g[q].disconnect(Q))}y=null,D=null,S.reset(),e.setRenderTarget(u),p=null,h=null,f=null,n=null,_=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(u=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",F),n.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await r.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),n.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,r,Q),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new vn(p.framebufferWidth,p.framebufferHeight,{format:Nr,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ce=null,ae=null;m.depth&&(ae=m.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,Q=m.stencil?pa:fa,ce=m.stencil?da:gn);const Ee={colorFormat:r.RGBA8,depthFormat:ae,scaleFactor:a};f=new XRWebGLBinding(n,r),h=f.createProjectionLayer(Ee),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new vn(h.textureWidth,h.textureHeight,{format:Nr,type:si,depthTexture:new x_(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),Se.setContext(n),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(q){for(let Q=0;Q<q.removed.length;Q++){const ce=q.removed[Q],ae=E.indexOf(ce);ae>=0&&(E[ae]=null,g[ae].disconnect(ce))}for(let Q=0;Q<q.added.length;Q++){const ce=q.added[Q];let ae=E.indexOf(ce);if(ae===-1){for(let we=0;we<g.length;we++)if(we>=E.length){E.push(ce),ae=we;break}else if(E[we]===null){E[we]=ce,ae=we;break}if(ae===-1)break}const Ee=g[ae];Ee&&Ee.connect(ce)}}const k=new z,W=new z;function C(q,Q,ce){k.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(ce.matrixWorld);const ae=k.distanceTo(W),Ee=Q.projectionMatrix.elements,we=ce.projectionMatrix.elements,Ve=Ee[14]/(Ee[10]-1),Ze=Ee[14]/(Ee[10]+1),Ge=(Ee[9]+1)/Ee[5],L=(Ee[9]-1)/Ee[5],ar=(Ee[8]-1)/Ee[0],ze=(we[8]+1)/we[0],je=Ve*ar,Ce=Ve*ze,rt=ae/(-ar+ze),Le=rt*-ar;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Le),q.translateZ(rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const w=Ve+rt,b=Ze+rt,H=je-Le,$=Ce+(ae-Le),te=Ge*Ze/b*w,Z=L*Ze/b*w;q.projectionMatrix.makePerspective(H,$,te,Z,w,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function j(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let Q=q.near,ce=q.far;S.texture!==null&&(S.depthNear>0&&(Q=S.depthNear),S.depthFar>0&&(ce=S.depthFar)),v.near=A.near=T.near=Q,v.far=A.far=T.far=ce,(y!==v.near||D!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),y=v.near,D=v.far);const ae=q.parent,Ee=v.cameras;j(v,ae);for(let we=0;we<Ee.length;we++)j(Ee[we],ae);Ee.length===2?C(v,T,A):v.projectionMatrix.copy(T.projectionMatrix),K(q,v,ae)};function K(q,Q,ce){ce===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ao*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(v)};let ne=null;function pe(q,Q){if(d=Q.getViewerPose(c||o),x=Q,d!==null){const ce=d.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let ae=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let we=0;we<ce.length;we++){const Ve=ce[we];let Ze=null;if(p!==null)Ze=p.getViewport(Ve);else{const L=f.getViewSubImage(h,Ve);Ze=L.viewport,we===0&&(e.setRenderTargetTextures(_,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(_))}let Ge=X[we];Ge===void 0&&(Ge=new Mr,Ge.layers.enable(we),Ge.viewport=new gt,X[we]=Ge),Ge.matrix.fromArray(Ve.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ve.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),we===0&&(v.matrix.copy(Ge.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(Ge)}const Ee=n.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const we=f.getDepthInformation(ce[0]);we&&we.isValid&&we.texture&&S.init(e,we,n.renderState)}}for(let ce=0;ce<g.length;ce++){const ae=E[ce],Ee=g[ce];ae!==null&&Ee!==void 0&&Ee.update(ae,Q,c||o)}ne&&ne(q,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),x=null}const Se=new h_;Se.setAnimationLoop(pe),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}}const Cn=new mi,KM=new _t;function ZM(t,e){function r(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,a_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function n(m,u,_,g,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),f(m,u)):u.isMeshPhongMaterial?(a(m,u),d(m,u)):u.isMeshStandardMaterial?(a(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,E)):u.isMeshMatcapMaterial?(a(m,u),x(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),S(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&s(m,u)):u.isPointsMaterial?l(m,u,_,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,r(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,r(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,r(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===rr&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,r(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===rr&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,r(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,r(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,r(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),g=_.envMap,E=_.envMapRotation;g&&(m.envMap.value=g,Cn.copy(E),Cn.x*=-1,Cn.y*=-1,Cn.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Cn.y*=-1,Cn.z*=-1),m.envMapRotation.value.setFromMatrix4(KM.makeRotationFromEuler(Cn)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,r(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,r(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,r(u.map,m.mapTransform))}function s(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=g*.5,u.map&&(m.map.value=u.map,r(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,r(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,r(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,r(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,r(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,r(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,r(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,r(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,r(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,r(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,r(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rr&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,r(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,r(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,r(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,r(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,r(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,r(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,r(u.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function $M(t,e,r,i){let n={},a={},o=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const E=g.program;i.uniformBlockBinding(_,E)}function c(_,g){let E=n[_.id];E===void 0&&(x(_),E=d(_),n[_.id]=E,_.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(_,P);const R=e.render.frame;a[_.id]!==R&&(h(_),a[_.id]=R)}function d(_){const g=f();_.__bindingPointIndex=g;const E=t.createBuffer(),P=_.__size,R=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function f(){for(let _=0;_<s;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=n[_.id],E=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,T=E.length;R<T;R++){const A=Array.isArray(E[R])?E[R]:[E[R]];for(let X=0,v=A.length;X<v;X++){const y=A[X];if(p(y,R,X,P)===!0){const D=y.__offset,O=Array.isArray(y.value)?y.value:[y.value];let F=0;for(let B=0;B<O.length;B++){const k=O[B],W=S(k);typeof k=="number"||typeof k=="boolean"?(y.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,D+F,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=0,y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=0,y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=0):(k.toArray(y.__data,F),F+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,y.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,E,P){const R=_.value,T=g+"_"+E;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{const A=P[T];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return P[T]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function x(_){const g=_.uniforms;let E=0;const P=16;for(let T=0,A=g.length;T<A;T++){const X=Array.isArray(g[T])?g[T]:[g[T]];for(let v=0,y=X.length;v<y;v++){const D=X[v],O=Array.isArray(D.value)?D.value:[D.value];for(let F=0,B=O.length;F<B;F++){const k=O[F],W=S(k),C=E%P,j=C%W.boundary,K=C+j;E+=j,K!==0&&P-K<W.storage&&(E+=P-K),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=W.storage}}}const R=E%P;return R>0&&(E+=P-R),_.__size=E,_.__cache={},this}function S(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const E=o.indexOf(g.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(n[g.id]),delete n[g.id],delete a[g.id]}function u(){for(const _ in n)t.deleteBuffer(n[_]);o=[],n={},a={}}return{bind:l,update:c,dispose:u}}class QM{constructor(e={}){const{canvas:r=Fy(),context:i=null,depth:n=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),x=new Int32Array(4);let S=null,m=null;const u=[],_=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wr,this.toneMapping=zi,this.toneMappingExposure=1;const g=this;let E=!1,P=0,R=0,T=null,A=-1,X=null;const v=new gt,y=new gt;let D=null;const O=new Ke(0);let F=0,B=r.width,k=r.height,W=1,C=null,j=null;const K=new gt(0,0,B,k),ne=new gt(0,0,B,k);let pe=!1;const Se=new u_;let q=!1,Q=!1;const ce=new _t,ae=new _t,Ee=new z,we=new gt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Ge(){return T===null?W:1}let L=i;function ar(M,U){return r.getContext(M,U)}try{const M={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${nh}`),r.addEventListener("webglcontextlost",J,!1),r.addEventListener("webglcontextrestored",ue,!1),r.addEventListener("webglcontextcreationerror",se,!1),L===null){const U="webgl2";if(L=ar(U,M),L===null)throw ar(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ze,je,Ce,rt,Le,w,b,H,$,te,Z,ye,le,ge,Be,ie,ve,Ae,Pe,me,He,De,Je,I;function he(){ze=new iE(L),ze.init(),De=new VM(L,ze),je=new Zb(L,ze,e,De),Ce=new zM(L),je.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),rt=new oE(L),Le=new MM,w=new HM(L,ze,Ce,Le,je,De,rt),b=new Qb(g),H=new rE(g),$=new dS(L),Je=new Yb(L,$),te=new nE(L,$,rt,Je),Z=new lE(L,te,$,rt),Pe=new sE(L,je,w),ie=new $b(Le),ye=new EM(g,b,H,ze,je,Je,ie),le=new ZM(g,Le),ge=new wM,Be=new IM(ze),Ae=new qb(g,b,H,Ce,Z,h,l),ve=new kM(g,Z,je),I=new $M(L,rt,je,Ce),me=new Kb(L,ze,rt),He=new aE(L,ze,rt),rt.programs=ye.programs,g.capabilities=je,g.extensions=ze,g.properties=Le,g.renderLists=ge,g.shadowMap=ve,g.state=Ce,g.info=rt}he();const Y=new YM(g,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=ze.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ze.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(B,k,!1))},this.getSize=function(M){return M.set(B,k)},this.setSize=function(M,U,V=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,k=U,r.width=Math.floor(M*W),r.height=Math.floor(U*W),V===!0&&(r.style.width=M+"px",r.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(B*W,k*W).floor()},this.setDrawingBufferSize=function(M,U,V){B=M,k=U,W=V,r.width=Math.floor(M*V),r.height=Math.floor(U*V),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(v)},this.getViewport=function(M){return M.copy(K)},this.setViewport=function(M,U,V,G){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,U,V,G),Ce.viewport(v.copy(K).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(ne)},this.setScissor=function(M,U,V,G){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,U,V,G),Ce.scissor(y.copy(ne).multiplyScalar(W).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(M){Ce.setScissorTest(pe=M)},this.setOpaqueSort=function(M){C=M},this.setTransparentSort=function(M){j=M},this.getClearColor=function(M){return M.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(M=!0,U=!0,V=!0){let G=0;if(M){let N=!1;if(T!==null){const re=T.texture.format;N=re===Mh||re===Eh||re===bh}if(N){const re=T.texture.type,fe=re===si||re===gn||re===wo||re===da||re===yh||re===Sh,_e=Ae.getClearColor(),xe=Ae.getClearAlpha(),Re=_e.r,Te=_e.g,Me=_e.b;fe?(p[0]=Re,p[1]=Te,p[2]=Me,p[3]=xe,L.clearBufferuiv(L.COLOR,0,p)):(x[0]=Re,x[1]=Te,x[2]=Me,x[3]=xe,L.clearBufferiv(L.COLOR,0,x))}else G|=L.COLOR_BUFFER_BIT}U&&(G|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",J,!1),r.removeEventListener("webglcontextrestored",ue,!1),r.removeEventListener("webglcontextcreationerror",se,!1),ge.dispose(),Be.dispose(),Le.dispose(),b.dispose(),H.dispose(),Z.dispose(),Je.dispose(),I.dispose(),ye.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Od),Y.removeEventListener("sessionend",kd),Zi.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=rt.autoReset,U=ve.enabled,V=ve.autoUpdate,G=ve.needsUpdate,N=ve.type;he(),rt.autoReset=M,ve.enabled=U,ve.autoUpdate=V,ve.needsUpdate=G,ve.type=N}function se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function et(M){const U=M.target;U.removeEventListener("dispose",et),vt(U)}function vt(M){Kt(M),Le.remove(M)}function Kt(M){const U=Le.get(M).programs;U!==void 0&&(U.forEach(function(V){ye.releaseProgram(V)}),M.isShaderMaterial&&ye.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,V,G,N,re){U===null&&(U=Ve);const fe=N.isMesh&&N.matrixWorld.determinant()<0,_e=K_(M,U,V,G,N);Ce.setMaterial(G,fe);let xe=V.index,Re=1;if(G.wireframe===!0){if(xe=te.getWireframeAttribute(V),xe===void 0)return;Re=2}const Te=V.drawRange,Me=V.attributes.position;let $e=Te.start*Re,lt=(Te.start+Te.count)*Re;re!==null&&($e=Math.max($e,re.start*Re),lt=Math.min(lt,(re.start+re.count)*Re)),xe!==null?($e=Math.max($e,0),lt=Math.min(lt,xe.count)):Me!=null&&($e=Math.max($e,0),lt=Math.min(lt,Me.count));const ft=lt-$e;if(ft<0||ft===1/0)return;Je.setup(N,G,_e,V,xe);let St,ot=me;if(xe!==null&&(St=$.get(xe),ot=He,ot.setIndex(St)),N.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*Ge()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(N.isLine){let be=G.linewidth;be===void 0&&(be=1),Ce.setLineWidth(be*Ge()),N.isLineSegments?ot.setMode(L.LINES):N.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else N.isPoints?ot.setMode(L.POINTS):N.isSprite&&ot.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ot.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))ot.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const be=N._multiDrawStarts,Bt=N._multiDrawCounts,$i=N._multiDrawCount,Tr=xe?$.get(xe).bytesPerElement:1,Pn=Le.get(G).currentProgram.getUniforms();for(let or=0;or<$i;or++)Pn.setValue(L,"_gl_DrawID",or),ot.render(be[or]/Tr,Bt[or])}else if(N.isInstancedMesh)ot.renderInstances($e,ft,N.count);else if(V.isInstancedBufferGeometry){const be=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Bt=Math.min(V.instanceCount,be);ot.renderInstances($e,ft,Bt)}else ot.render($e,ft)};function Xe(M,U,V){M.transparent===!0&&M.side===oi&&M.forceSinglePass===!1?(M.side=rr,M.needsUpdate=!0,Bo(M,U,V),M.side=ki,M.needsUpdate=!0,Bo(M,U,V),M.side=oi):Bo(M,U,V)}this.compile=function(M,U,V=null){V===null&&(V=M),m=Be.get(V),m.init(U),_.push(m),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),M!==V&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const G=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const _e=re[fe];Xe(_e,V,N),G.add(_e)}else Xe(re,V,N),G.add(re)}),_.pop(),m=null,G},this.compileAsync=function(M,U,V=null){const G=this.compile(M,U,V);return new Promise(N=>{function re(){if(G.forEach(function(fe){Le.get(fe).currentProgram.isReady()&&G.delete(fe)}),G.size===0){N(M);return}setTimeout(re,10)}ze.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Zt=null;function Yr(M){Zt&&Zt(M)}function Od(){Zi.stop()}function kd(){Zi.start()}const Zi=new h_;Zi.setAnimationLoop(Yr),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(M){Zt=M,Y.setAnimationLoop(M),M===null?Zi.stop():Zi.start()},Y.addEventListener("sessionstart",Od),Y.addEventListener("sessionend",kd),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(g,M,U,T),m=Be.get(M,_.length),m.init(U),_.push(m),ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Se.setFromProjectionMatrix(ae),Q=this.localClippingEnabled,q=ie.init(this.clippingPlanes,Q),S=ge.get(M,u.length),S.init(),u.push(S),Y.enabled===!0&&Y.isPresenting===!0){const re=g.xr.getDepthSensingMesh();re!==null&&Gl(re,U,-1/0,g.sortObjects)}Gl(M,U,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(C,j),Ze=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ze&&Ae.addToRenderList(S,M),this.info.render.frame++,q===!0&&ie.beginShadows();const V=m.state.shadowsArray;ve.render(V,M,U),q===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=S.opaque,N=S.transmissive;if(m.setupLights(),U.isArrayCamera){const re=U.cameras;if(N.length>0)for(let fe=0,_e=re.length;fe<_e;fe++){const xe=re[fe];zd(G,N,M,xe)}Ze&&Ae.render(M);for(let fe=0,_e=re.length;fe<_e;fe++){const xe=re[fe];Fd(S,M,xe,xe.viewport)}}else N.length>0&&zd(G,N,M,U),Ze&&Ae.render(M),Fd(S,M,U);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(g,M,U),Je.resetDefaultState(),A=-1,X=null,_.pop(),_.length>0?(m=_[_.length-1],q===!0&&ie.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function Gl(M,U,V,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Se.intersectsSprite(M)){G&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ae);const re=Z.update(M),fe=M.material;fe.visible&&S.push(M,re,fe,V,we.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Se.intersectsObject(M))){const re=Z.update(M),fe=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),we.copy(re.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(ae)),Array.isArray(fe)){const _e=re.groups;for(let xe=0,Re=_e.length;xe<Re;xe++){const Te=_e[xe],Me=fe[Te.materialIndex];Me&&Me.visible&&S.push(M,re,Me,V,we.z,Te)}}else fe.visible&&S.push(M,re,fe,V,we.z,null)}}const N=M.children;for(let re=0,fe=N.length;re<fe;re++)Gl(N[re],U,V,G)}function Fd(M,U,V,G){const N=M.opaque,re=M.transmissive,fe=M.transparent;m.setupLightsView(V),q===!0&&ie.setGlobalState(g.clippingPlanes,V),G&&Ce.viewport(v.copy(G)),N.length>0&&zo(N,U,V),re.length>0&&zo(re,U,V),fe.length>0&&zo(fe,U,V),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function zd(M,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new vn(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?Ro:si,minFilter:mn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const N=m.state.transmissionRenderTarget[G.id],re=G.viewport||v;N.setSize(re.z,re.w);const fe=g.getRenderTarget();g.setRenderTarget(N),g.getClearColor(O),F=g.getClearAlpha(),F<1&&g.setClearColor(16777215,.5),g.clear(),Ze&&Ae.render(V);const _e=g.toneMapping;g.toneMapping=zi;const xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),q===!0&&ie.setGlobalState(g.clippingPlanes,G),zo(M,V,G),w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Te=0,Me=U.length;Te<Me;Te++){const $e=U[Te],lt=$e.object,ft=$e.geometry,St=$e.material,ot=$e.group;if(St.side===oi&&lt.layers.test(G.layers)){const be=St.side;St.side=rr,St.needsUpdate=!0,Bd(lt,V,G,ft,St,ot),St.side=be,St.needsUpdate=!0,Re=!0}}Re===!0&&(w.updateMultisampleRenderTarget(N),w.updateRenderTargetMipmap(N))}g.setRenderTarget(fe),g.setClearColor(O,F),xe!==void 0&&(G.viewport=xe),g.toneMapping=_e}function zo(M,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,re=M.length;N<re;N++){const fe=M[N],_e=fe.object,xe=fe.geometry,Re=G===null?fe.material:G,Te=fe.group;_e.layers.test(V.layers)&&Bd(_e,U,V,xe,Re,Te)}}function Bd(M,U,V,G,N,re){M.onBeforeRender(g,U,V,G,N,re),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(g,U,V,G,M,re),N.transparent===!0&&N.side===oi&&N.forceSinglePass===!1?(N.side=rr,N.needsUpdate=!0,g.renderBufferDirect(V,U,G,N,M,re),N.side=ki,N.needsUpdate=!0,g.renderBufferDirect(V,U,G,N,M,re),N.side=oi):g.renderBufferDirect(V,U,G,N,M,re),M.onAfterRender(g,U,V,G,N,re)}function Bo(M,U,V){U.isScene!==!0&&(U=Ve);const G=Le.get(M),N=m.state.lights,re=m.state.shadowsArray,fe=N.state.version,_e=ye.getParameters(M,N.state,re,U,V),xe=ye.getProgramCacheKey(_e);let Re=G.programs;G.environment=M.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(M.isMeshStandardMaterial?H:b).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Re===void 0&&(M.addEventListener("dispose",et),Re=new Map,G.programs=Re);let Te=Re.get(xe);if(Te!==void 0){if(G.currentProgram===Te&&G.lightsStateVersion===fe)return Vd(M,_e),Te}else _e.uniforms=ye.getUniforms(M),M.onBeforeCompile(_e,g),Te=ye.acquireProgram(_e,xe),Re.set(xe,Te),G.uniforms=_e.uniforms;const Me=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Me.clippingPlanes=ie.uniform),Vd(M,_e),G.needsLights=$_(M),G.lightsStateVersion=fe,G.needsLights&&(Me.ambientLightColor.value=N.state.ambient,Me.lightProbe.value=N.state.probe,Me.directionalLights.value=N.state.directional,Me.directionalLightShadows.value=N.state.directionalShadow,Me.spotLights.value=N.state.spot,Me.spotLightShadows.value=N.state.spotShadow,Me.rectAreaLights.value=N.state.rectArea,Me.ltc_1.value=N.state.rectAreaLTC1,Me.ltc_2.value=N.state.rectAreaLTC2,Me.pointLights.value=N.state.point,Me.pointLightShadows.value=N.state.pointShadow,Me.hemisphereLights.value=N.state.hemi,Me.directionalShadowMap.value=N.state.directionalShadowMap,Me.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Me.spotShadowMap.value=N.state.spotShadowMap,Me.spotLightMatrix.value=N.state.spotLightMatrix,Me.spotLightMap.value=N.state.spotLightMap,Me.pointShadowMap.value=N.state.pointShadowMap,Me.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Te,G.uniformsList=null,Te}function Hd(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Fl.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Vd(M,U){const V=Le.get(M);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function K_(M,U,V,G,N){U.isScene!==!0&&(U=Ve),w.resetTextureUnits();const re=U.fog,fe=G.isMeshStandardMaterial?U.environment:null,_e=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hi,xe=(G.isMeshStandardMaterial?H:b).get(G.envMap||fe),Re=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Te=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Me=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let ft=zi;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ft=g.toneMapping);const St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ot=St!==void 0?St.length:0,be=Le.get(G),Bt=m.state.lights;if(q===!0&&(Q===!0||M!==X)){const mr=M===X&&G.id===A;ie.setState(G,M,mr)}let $i=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Bt.state.version||be.outputColorSpace!==_e||N.isBatchedMesh&&be.batching===!1||!N.isBatchedMesh&&be.batching===!0||N.isBatchedMesh&&be.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&be.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&be.instancing===!1||!N.isInstancedMesh&&be.instancing===!0||N.isSkinnedMesh&&be.skinning===!1||!N.isSkinnedMesh&&be.skinning===!0||N.isInstancedMesh&&be.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&be.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&be.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&be.instancingMorph===!1&&N.morphTexture!==null||be.envMap!==xe||G.fog===!0&&be.fog!==re||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ie.numPlanes||be.numIntersection!==ie.numIntersection)||be.vertexAlphas!==Re||be.vertexTangents!==Te||be.morphTargets!==Me||be.morphNormals!==$e||be.morphColors!==lt||be.toneMapping!==ft||be.morphTargetsCount!==ot)&&($i=!0):($i=!0,be.__version=G.version);let Tr=be.currentProgram;$i===!0&&(Tr=Bo(G,U,N));let Pn=!1,or=!1,Wl=!1;const pt=Tr.getUniforms(),gi=be.uniforms;if(Ce.useProgram(Tr.program)&&(Pn=!0,or=!0,Wl=!0),G.id!==A&&(A=G.id,or=!0),Pn||X!==M){je.reverseDepthBuffer?(ce.copy(M.projectionMatrix),By(ce),Hy(ce),pt.setValue(L,"projectionMatrix",ce)):pt.setValue(L,"projectionMatrix",M.projectionMatrix),pt.setValue(L,"viewMatrix",M.matrixWorldInverse);const mr=pt.map.cameraPosition;mr!==void 0&&mr.setValue(L,Ee.setFromMatrixPosition(M.matrixWorld)),je.logarithmicDepthBuffer&&pt.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),X!==M&&(X=M,or=!0,Wl=!0)}if(N.isSkinnedMesh){pt.setOptional(L,N,"bindMatrix"),pt.setOptional(L,N,"bindMatrixInverse");const mr=N.skeleton;mr&&(mr.boneTexture===null&&mr.computeBoneTexture(),pt.setValue(L,"boneTexture",mr.boneTexture,w))}N.isBatchedMesh&&(pt.setOptional(L,N,"batchingTexture"),pt.setValue(L,"batchingTexture",N._matricesTexture,w),pt.setOptional(L,N,"batchingIdTexture"),pt.setValue(L,"batchingIdTexture",N._indirectTexture,w),pt.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(L,"batchingColorTexture",N._colorsTexture,w));const jl=V.morphAttributes;if((jl.position!==void 0||jl.normal!==void 0||jl.color!==void 0)&&Pe.update(N,V,Tr),(or||be.receiveShadow!==N.receiveShadow)&&(be.receiveShadow=N.receiveShadow,pt.setValue(L,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(gi.envMap.value=xe,gi.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(gi.envMapIntensity.value=U.environmentIntensity),or&&(pt.setValue(L,"toneMappingExposure",g.toneMappingExposure),be.needsLights&&Z_(gi,Wl),re&&G.fog===!0&&le.refreshFogUniforms(gi,re),le.refreshMaterialUniforms(gi,G,W,k,m.state.transmissionRenderTarget[M.id]),Fl.upload(L,Hd(be),gi,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fl.upload(L,Hd(be),gi,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(L,"center",N.center),pt.setValue(L,"modelViewMatrix",N.modelViewMatrix),pt.setValue(L,"normalMatrix",N.normalMatrix),pt.setValue(L,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const mr=G.uniformsGroups;for(let Xl=0,Q_=mr.length;Xl<Q_;Xl++){const Gd=mr[Xl];I.update(Gd,Tr),I.bind(Gd,Tr)}}return Tr}function Z_(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function $_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,U,V){Le.get(M.texture).__webglTexture=U,Le.get(M.depthTexture).__webglTexture=V;const G=Le.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const V=Le.get(M);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,V=0){T=M,P=U,R=V;let G=!0,N=null,re=!1,fe=!1;if(M){const _e=Le.get(M);if(_e.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(_e.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(_e.__hasExternalTextures)w.rebindTextures(M,Le.get(M.texture).__webglTexture,Le.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Te=M.depthTexture;if(_e.__boundDepthTexture!==Te){if(Te!==null&&Le.has(Te)&&(M.width!==Te.image.width||M.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}const xe=M.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(fe=!0);const Re=Le.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?N=Re[U][V]:N=Re[U],re=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?N=Le.get(M).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[V]:N=Re,v.copy(M.viewport),y.copy(M.scissor),D=M.scissorTest}else v.copy(K).multiplyScalar(W).floor(),y.copy(ne).multiplyScalar(W).floor(),D=pe;if(Ce.bindFramebuffer(L.FRAMEBUFFER,N)&&G&&Ce.drawBuffers(M,N),Ce.viewport(v),Ce.scissor(y),Ce.setScissorTest(D),re){const _e=Le.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,V)}else if(fe){const _e=Le.get(M.texture),xe=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.__webglTexture,V||0,xe)}A=-1},this.readRenderTargetPixels=function(M,U,V,G,N,re,fe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){Ce.bindFramebuffer(L.FRAMEBUFFER,_e);try{const xe=M.texture,Re=xe.format,Te=xe.type;if(!je.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&V>=0&&V<=M.height-N&&L.readPixels(U,V,G,N,De.convert(Re),De.convert(Te),re)}finally{const xe=T!==null?Le.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(M,U,V,G,N,re,fe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Le.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){const xe=M.texture,Re=xe.format,Te=xe.type;if(!je.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-G&&V>=0&&V<=M.height-N){Ce.bindFramebuffer(L.FRAMEBUFFER,_e);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(U,V,G,N,De.convert(Re),De.convert(Te),0);const $e=T!==null?Le.get(T).__webglFramebuffer:null;Ce.bindFramebuffer(L.FRAMEBUFFER,$e);const lt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await zy(L,lt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Me),L.deleteSync(lt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,V=0){M.isTexture!==!0&&(gl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(M.image.width*G),re=Math.floor(M.image.height*G),fe=U!==null?U.x:0,_e=U!==null?U.y:0;w.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,fe,_e,N,re),Ce.unbindTexture()},this.copyTextureToTexture=function(M,U,V=null,G=null,N=0){M.isTexture!==!0&&(gl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let re,fe,_e,xe,Re,Te;V!==null?(re=V.max.x-V.min.x,fe=V.max.y-V.min.y,_e=V.min.x,xe=V.min.y):(re=M.image.width,fe=M.image.height,_e=0,xe=0),G!==null?(Re=G.x,Te=G.y):(Re=0,Te=0);const Me=De.convert(U.format),$e=De.convert(U.type);w.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const lt=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),St=L.getParameter(L.UNPACK_SKIP_PIXELS),ot=L.getParameter(L.UNPACK_SKIP_ROWS),be=L.getParameter(L.UNPACK_SKIP_IMAGES),Bt=M.isCompressedTexture?M.mipmaps[N]:M.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,xe),M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Re,Te,re,fe,Me,$e,Bt.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Re,Te,Bt.width,Bt.height,Me,Bt.data):L.texSubImage2D(L.TEXTURE_2D,N,Re,Te,re,fe,Me,$e,Bt),L.pixelStorei(L.UNPACK_ROW_LENGTH,lt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,St),L.pixelStorei(L.UNPACK_SKIP_ROWS,ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(M,U,V=null,G=null,N=0){M.isTexture!==!0&&(gl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,M=arguments[2],U=arguments[3],N=arguments[4]||0);let re,fe,_e,xe,Re,Te,Me,$e,lt;const ft=M.isCompressedTexture?M.mipmaps[N]:M.image;V!==null?(re=V.max.x-V.min.x,fe=V.max.y-V.min.y,_e=V.max.z-V.min.z,xe=V.min.x,Re=V.min.y,Te=V.min.z):(re=ft.width,fe=ft.height,_e=ft.depth,xe=0,Re=0,Te=0),G!==null?(Me=G.x,$e=G.y,lt=G.z):(Me=0,$e=0,lt=0);const St=De.convert(U.format),ot=De.convert(U.type);let be;if(U.isData3DTexture)w.setTexture3D(U,0),be=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)w.setTexture2DArray(U,0),be=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Bt=L.getParameter(L.UNPACK_ROW_LENGTH),$i=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tr=L.getParameter(L.UNPACK_SKIP_PIXELS),Pn=L.getParameter(L.UNPACK_SKIP_ROWS),or=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Te),M.isDataTexture||M.isData3DTexture?L.texSubImage3D(be,N,Me,$e,lt,re,fe,_e,St,ot,ft.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(be,N,Me,$e,lt,re,fe,_e,St,ft.data):L.texSubImage3D(be,N,Me,$e,lt,re,fe,_e,St,ot,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$i),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Pn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,or),N===0&&U.generateMipmaps&&L.generateMipmap(be),Ce.unbindTexture()},this.initRenderTarget=function(M){Le.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Ce.unbindTexture()},this.resetState=function(){P=0,R=0,T=null,Ce.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=e===$h?"display-p3":"srgb",r.unpackColorSpace=qe.workingColorSpace===cl?"display-p3":"srgb"}}class JM extends nr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}class H_ extends Yt{constructor(e,r,i,n,a,o,s,l,c){super(e,r,i,n,a,o,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class eT extends nr{constructor(e,r=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=r}dispose(){}copy(e,r){return super.copy(e,r),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const r=super.toJSON(e);return r.object.color=this.color.getHex(),r.object.intensity=this.intensity,this.groundColor!==void 0&&(r.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(r.object.distance=this.distance),this.angle!==void 0&&(r.object.angle=this.angle),this.decay!==void 0&&(r.object.decay=this.decay),this.penumbra!==void 0&&(r.object.penumbra=this.penumbra),this.shadow!==void 0&&(r.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(r.object.target=this.target.uuid),r}}class tT extends eT{constructor(e,r){super(e,r),this.isAmbientLight=!0,this.type="AmbientLight"}}const V_=new _t;class rT{constructor(e,r,i=0,n=1/0){this.ray=new cd(e,r),this.near=i,this.far=n,this.camera=null,this.layers=new ud,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,r){this.ray.set(e,r)}setFromCamera(e,r){r.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(r.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(r).sub(this.ray.origin).normalize(),this.camera=r):r.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(r.near+r.far)/(r.near-r.far)).unproject(r),this.ray.direction.set(0,0,-1).transformDirection(r.matrixWorld),this.camera=r):console.error("THREE.Raycaster: Unsupported camera type: "+r.type)}setFromXRController(e){return V_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(V_),this}intersectObject(e,r=!0,i=[]){return Dd(e,this,i,r),i.sort(G_),i}intersectObjects(e,r=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Dd(e[n],this,i,r);return i.sort(G_),i}}function G_(t,e){return t.distance-e.distance}function Dd(t,e,r,i){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,r)===!1&&(n=!1),n===!0&&i===!0){const a=t.children;for(let o=0,s=a.length;o<s;o++)Dd(a[o],e,r,!0)}}class Fo{constructor(e=1,r=0,i=0){return this.radius=e,this.phi=r,this.theta=i,this}set(e,r,i){return this.radius=e,this.phi=r,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,r,i){return this.radius=Math.sqrt(e*e+r*r+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(r/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iT extends _n{constructor(e,r=null){super(),this.object=e,this.domElement=r,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);const W_={type:"change"},Nd={type:"start"},j_={type:"end"},Hl=new cd,X_=new Ki,nT=Math.cos(70*pl.DEG2RAD),wt=new z,ir=2*Math.PI,Qe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ud=1e-6;class aT extends iT{constructor(e,r=null){super(e,r),this.state=Qe.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oa.ROTATE,MIDDLE:oa.DOLLY,RIGHT:oa.PAN},this.touches={ONE:sa.ROTATE,TWO:sa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new xn,this._lastTargetPosition=new z,this._quat=new xn().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fo,this._sphericalDelta=new Fo,this._scale=1,this._panOffset=new z,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new z,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sT.bind(this),this._onPointerDown=oT.bind(this),this._onPointerUp=lT.bind(this),this._onContextMenu=mT.bind(this),this._onMouseWheel=hT.bind(this),this._onKeyDown=dT.bind(this),this._onTouchStart=fT.bind(this),this._onTouchMove=pT.bind(this),this._onMouseDown=cT.bind(this),this._onMouseMove=uT.bind(this),this._interceptControlDown=gT.bind(this),this._interceptControlUp=_T.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(W_),this.update(),this.state=Qe.NONE}update(e=null){const r=this.object.position;wt.copy(r).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===Qe.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=ir:i>Math.PI&&(i-=ir),n<-Math.PI?n+=ir:n>Math.PI&&(n-=ir),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),r.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const s=wt.length();o=this._clampDistance(s*this._scale);const l=s-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const s=new z(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(s),this.object.updateMatrixWorld(),o=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hl.origin.copy(this.object.position),Hl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hl.direction))<nT?this.object.lookAt(this.target):(X_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hl.intersectPlane(X_,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ud||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ud||this._lastTargetPosition.distanceToSquared(this.target)>Ud?(this.dispatchEvent(W_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ir/60*this.autoRotateSpeed*e:ir/60/60*this.autoRotateSpeed}_getZoomScale(e){const r=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*r)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,r){wt.setFromMatrixColumn(r,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,r){this.screenSpacePanning===!0?wt.setFromMatrixColumn(r,1):(wt.setFromMatrixColumn(r,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,r){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;wt.copy(n).sub(this.target);let a=wt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*r*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(r*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,r){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,a=r-i.top,o=i.width,s=i.height;this._mouse.x=n/o*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const r=this.domElement;this._rotateLeft(ir*this._rotateDelta.x/r.clientHeight),this._rotateUp(ir*this._rotateDelta.y/r.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let r=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(ir*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),r=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-ir*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),r=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(ir*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),r=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-ir*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),r=!0;break}r&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),n=.5*(e.pageY+r.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),n=.5*(e.pageY+r.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const r=this._getSecondPointerPosition(e),i=e.pageX-r.x,n=e.pageY-r.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const r=this.domElement;this._rotateLeft(ir*this._rotateDelta.x/r.clientHeight),this._rotateUp(ir*this._rotateDelta.y/r.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),n=.5*(e.pageY+r.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const r=this._getSecondPointerPosition(e),i=e.pageX-r.x,n=e.pageY-r.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+r.x)*.5,s=(e.pageY+r.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let r=0;r<this._pointers.length;r++)if(this._pointers[r]==e.pointerId){this._pointers.splice(r,1);return}}_isTrackingPointer(e){for(let r=0;r<this._pointers.length;r++)if(this._pointers[r]==e.pointerId)return!0;return!1}_trackPointer(e){let r=this._pointerPositions[e.pointerId];r===void 0&&(r=new ke,this._pointerPositions[e.pointerId]=r),r.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const r=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[r]}_customWheelEvent(e){const r=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(r){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function oT(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function sT(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function lT(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(j_),this.state=Qe.NONE;break;case 1:const e=this._pointers[0],r=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:r.x,pageY:r.y});break}}function cT(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=Qe.DOLLY;break;case oa.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Qe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Qe.ROTATE}break;case oa.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=Qe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=Qe.PAN}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Nd)}function uT(t){switch(this.state){case Qe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case Qe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case Qe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function hT(t){this.enabled===!1||this.enableZoom===!1||this.state!==Qe.NONE||(t.preventDefault(),this.dispatchEvent(Nd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(j_))}function dT(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function fT(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case sa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=Qe.TOUCH_ROTATE;break;case sa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=Qe.TOUCH_PAN;break;default:this.state=Qe.NONE}break;case 2:switch(this.touches.TWO){case sa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=Qe.TOUCH_DOLLY_PAN;break;case sa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=Qe.TOUCH_DOLLY_ROTATE;break;default:this.state=Qe.NONE}break;default:this.state=Qe.NONE}this.state!==Qe.NONE&&this.dispatchEvent(Nd)}function pT(t){switch(this._trackPointer(t),this.state){case Qe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case Qe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case Qe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case Qe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=Qe.NONE}}function mT(t){this.enabled!==!1&&t.preventDefault()}function gT(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _T(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const qt={ORBIT:"ORBIT",COLOR_PICKER:"COLOR_PICKER",SIDE_SELECTION:"SIDE_SELECTION"},vT=({cubeColors:t,currentSide:e,setCubeColors:r,setCurrentSide:i})=>{const n=Ie.useRef(null),[a,o]=Ie.useState(null),[s,l]=Ie.useState(!1),[c,d]=Ie.useState(qt.ORBIT);console.log("Viewer with current side: ",e);const f=Ie.useRef(),h=Ie.useRef(),p=Ie.useRef(),x=Ie.useRef(),S=Ie.useRef(),m=Ie.useRef(),u=Ie.useRef(),_=Ie.useRef(),g={ORBIT:"\u{1F91A}",COLOR_PICKER:"\u27A1\uFE0F",SIDE_SELECTION:"\u2935\uFE0F"},E=Ie.useCallback(X=>{if(h.current&&x.current){const v=h.current,y=x.current,D=1e3,O=v.position.clone(),F=[new z(5,0,0),new z(-5,0,0),new z(0,5,0),new z(0,-5,0),new z(0,0,5),new z(0,0,-5)][X],B=performance.now(),k=new Fo().setFromVector3(O),W=new Fo().setFromVector3(F);Math.abs(W.theta-k.theta)>Math.PI&&(W.theta>k.theta?W.theta-=2*Math.PI:W.theta+=2*Math.PI);const C=j=>{const K=j-B,ne=Math.min(K/D,1),pe=new Fo(pl.lerp(k.radius,W.radius,ne),pl.lerp(k.phi,W.phi,ne),pl.lerp(k.theta,W.theta,ne));v.position.setFromSpherical(pe),v.lookAt(new z(0,0,0)),y.update(),ne<1?requestAnimationFrame(C):(v.position.copy(F),y.update())};requestAnimationFrame(C)}},[]),P=Ie.useCallback(X=>{if(c===qt.ORBIT)return;const v=p.current,y=h.current,D=S.current,O=u.current,F=_.current;if(!v||!y||!D||!O||!F)return;const B=v.domElement.getBoundingClientRect();F.x=(X.clientX-B.left)/B.width*2-1,F.y=-((X.clientY-B.top)/B.height)*2+1,O.setFromCamera(F,y);const k=O.intersectObject(D);if(k.length>0){const W=k[0].face.materialIndex,C=k[0].uv;if(C){const j=Math.floor(C.y*3),K=Math.floor(C.x*3);c===qt.COLOR_PICKER?(o({faceIndex:W,row:2-j,col:K}),l(!0)):c===qt.SIDE_SELECTION&&(i(W),E(W),d(qt.ORBIT))}}},[c,o,l,i,E]),R=Ie.useCallback(()=>{const X=p.current,v=h.current,y=n.current;X&&v&&y&&(X.setSize(y.clientWidth,y.clientHeight),v.aspect=y.clientWidth/y.clientHeight,v.updateProjectionMatrix())},[]);Ie.useEffect(()=>(window.addEventListener("resize",R),()=>{window.removeEventListener("resize",R)}),[R]),Ie.useEffect(()=>{const X=p.current;if(!X)return;const v=X.domElement;return v.addEventListener("click",P),()=>{v.removeEventListener("click",P)}},[P,p.current]),Ie.useEffect(()=>{if(!f.current){const X=n.current,v=new JM,y=new Mr(45,X.clientWidth/X.clientHeight,.1,1e3);y.position.z=5;const D=new QM({antialias:!0});D.setSize(X.clientWidth,X.clientHeight),X.appendChild(D.domElement);const O=new tT(16777215,.8);v.add(O);const F=2,B=new Ua(F,F,F),k=Array(6).fill(0).map((K,ne)=>{const pe=document.createElement("canvas");pe.width=256,pe.height=256;const Se=pe.getContext("2d"),q=t[ne]||[["gray","gray","gray"],["gray","gray","gray"],["gray","gray","gray"]],Q=pe.width/3;for(let ae=0;ae<3;ae++)for(let Ee=0;Ee<3;Ee++)Se.fillStyle=q[ae][Ee],Se.fillRect(Ee*Q,ae*Q,Q,Q),Se.strokeStyle="black",Se.lineWidth=2,Se.strokeRect(Ee*Q,ae*Q,Q,Q);const ce=new H_(pe);return new yd({map:ce})}),W=new Xr(B,k);v.add(W);const C=new aT(y,D.domElement);C.enableRotate=c===qt.ORBIT,C.enableZoom=c===qt.ORBIT,C.enablePan=c===qt.ORBIT,f.current=v,h.current=y,p.current=D,x.current=C,S.current=W,m.current=k,u.current=new rT,_.current=new ke;const j=()=>{requestAnimationFrame(j),C.update(),D.render(v,y)};return j(),()=>{X.removeChild(D.domElement),D.dispose(),f.current=void 0}}},[]),Ie.useEffect(()=>{if(m.current){const X=m.current;for(let v=0;v<6;v++){const y=X[v],D=document.createElement("canvas");D.width=256,D.height=256;const O=D.getContext("2d"),F=t[v]||[["gray","gray","gray"],["gray","gray","gray"],["gray","gray","gray"]],B=D.width/3;for(let W=0;W<3;W++)for(let C=0;C<3;C++)O.fillStyle=F[W][C],O.fillRect(C*B,W*B,B,B),O.strokeStyle="black",O.lineWidth=2,O.strokeRect(C*B,W*B,B,B);const k=new H_(D);y.map=k,y.needsUpdate=!0}}},[t]),Ie.useEffect(()=>{E(e)},[e,E]),Ie.useEffect(()=>{if(x.current){const X=x.current;X.enableRotate=c===qt.ORBIT,X.enableZoom=c===qt.ORBIT,X.enablePan=c===qt.ORBIT}c!==qt.COLOR_PICKER&&(l(!1),o(null))},[c]);const T=X=>{if(a){const{faceIndex:v,row:y,col:D}=a,O=t.map((F,B)=>B===v?F.map((k,W)=>W===y?k.map((C,j)=>j===D?X:C):k):F);r(O),o(null),l(!1),d(qt.ORBIT)}},A=()=>{l(!1),o(null)};return Ne.jsxs("div",{style:{position:"relative"},children:[Ne.jsx("div",{style:{position:"absolute",top:"10px",left:"10px",zIndex:100},children:Object.entries(qt).map(([,X])=>Ne.jsx("button",{onClick:()=>d(X),style:{marginRight:"10px",padding:"10px",fontSize:"18px",backgroundColor:c===X?"#ddd":"#fff",border:"1px solid #ccc",cursor:"pointer"},children:g[X]},X))}),Ne.jsx("div",{ref:n,style:{width:"100%",maxWidth:"640px",height:"500px"}}),s&&c===qt.COLOR_PICKER&&Ne.jsx(mg,{onSelectColor:T,onClose:A})]})};function q_(){const t="grey",e={h:0,s:0,v:50},r=3,i=3,n=Array.from({length:r},()=>Array(i).fill(t)),a=Array.from({length:r},()=>Array(i).fill({...e})),o=Array.from({length:r},()=>Array(i).fill(""));return{colors:n,hsvValues:a,subImages:o}}const Y_=[0,5,1,4,2,3],xT=()=>{let t=[];for(let _=0;_<6;_++){t[_]=[];for(let g=0;g<3;g++){t[_][g]=[];for(let E=0;E<3;E++)t[_][g][E]="grey"}}const[e,r]=Ie.useState(t),[i,n]=Ie.useState(0),[a,o]=Ie.useState(0),[s,l]=Ie.useState(q_()),[c,d]=Ie.useState(!0),[f]=Ie.useState(!0);function h(_){l(_),r(g=>{const E=[...g];return E[i]=_.colors,E})}const p=_=>{h(_),d(!1)},x=_=>{h(_)},S=_=>{r(g=>{const E=[...g];return E[i]=s.colors,E}),n(_);for(let g=0;g<6;g++)if(Y_[g]===_){o(g);break}l(q_()),d(!0)},m=()=>{const _=(a+1)%6;S(Y_[_])},u=()=>{d(!0)};return Ne.jsxs("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[Ne.jsxs("div",{style:{flex:"1 1 300px"},children:[Ne.jsx(Dx,{currentSide:i,detectionEnabled:c,overlayData:s,onOverlayDataCaptured:p,onOverlayDataUpdated:x}),Ne.jsxs("div",{style:{marginTop:"10px"},children:[Ne.jsxs("p",{children:["Side ",i+1," captured. What would you like to do?"]}),Ne.jsx("button",{onClick:u,children:"Retake"}),Ne.jsx("button",{onClick:m,children:"Next Side"})]})]}),Ne.jsx("div",{style:{flex:"1 1 300px"},children:Ne.jsx(vT,{cubeColors:e,setCubeColors:r,currentSide:i,setCurrentSide:S})}),f&&s&&Ne.jsxs("div",{style:{marginTop:"20px"},children:[Ne.jsx("h3",{children:"Debug Pane - Sub Images Used in Color Recognition"}),Ne.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:s.subImages.map((_,g)=>_.map((E,P)=>Ne.jsxs("div",{children:[Ne.jsx("img",{src:E,alt:`Grid ${g}, ${P}`,style:{width:"100%"}}),Ne.jsxs("p",{children:["Color: ",s.colors[g][P]]})]},`${g}-${P}`)))})]})]})};function yT(){const[t,e]=Ie.useState(!1);return Ne.jsxs(Ne.Fragment,{children:[Ne.jsxs("div",{children:[Ne.jsx("button",{onClick:()=>e(r=>!r),style:{marginTop:"10px"},children:t?"Close Rubik's Cube Recognizer":"Open Rubik's Cube Recognizer"}),Ne.jsxs("p",{children:["Edit ",Ne.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),t&&Ne.jsx("div",{style:{marginTop:"20px"},children:Ne.jsx(xT,{})}),Ne.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}dg(document.getElementById("root")).render(Ne.jsx(Ie.StrictMode,{children:Ne.jsx(yT,{})}));
