(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();var Oh={exports:{}},Fo={},kh={exports:{}},He={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Pa=Symbol.for("react.element"),Vv=Symbol.for("react.portal"),Gv=Symbol.for("react.fragment"),Wv=Symbol.for("react.strict_mode"),jv=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),qv=Symbol.for("react.forward_ref"),Kv=Symbol.for("react.suspense"),Zv=Symbol.for("react.memo"),$v=Symbol.for("react.lazy"),Fh=Symbol.iterator;function Qv(t){return t===null||typeof t!="object"?null:(t=Fh&&t[Fh]||t["@@iterator"],typeof t=="function"?t:null)}var zh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bh=Object.assign,Hh={};function An(t,e,r){this.props=t,this.context=e,this.refs=Hh,this.updater=r||zh}An.prototype.isReactComponent={},An.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},An.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vh(){}Vh.prototype=An.prototype;function Vl(t,e,r){this.props=t,this.context=e,this.refs=Hh,this.updater=r||zh}var Gl=Vl.prototype=new Vh;Gl.constructor=Vl,Bh(Gl,An.prototype),Gl.isPureReactComponent=!0;var Gh=Array.isArray,Wh=Object.prototype.hasOwnProperty,Wl={current:null},jh={key:!0,ref:!0,__self:!0,__source:!0};function Xh(t,e,r){var i,n={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Wh.call(e,i)&&!jh.hasOwnProperty(i)&&(n[i]=e[i]);var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];n.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)n[i]===void 0&&(n[i]=s[i]);return{$$typeof:Pa,type:t,key:a,ref:o,props:n,_owner:Wl.current}}function Jv(t,e){return{$$typeof:Pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa}function e0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Yh=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?e0(""+t.key):e.toString(36)}function zo(t,e,r,i,n){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pa:case Vv:o=!0}}if(o)return o=t,n=n(o),t=i===""?"."+Xl(o,0):i,Gh(n)?(r="",t!=null&&(r=t.replace(Yh,"$&/")+"/"),zo(n,e,r,"",function(c){return c})):n!=null&&(jl(n)&&(n=Jv(n,r+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(Yh,"$&/")+"/")+t)),e.push(n)),1;if(o=0,i=i===""?".":i+":",Gh(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+Xl(a,s);o+=zo(a,e,r,l,n)}else if(l=Qv(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+Xl(a,s++),o+=zo(a,e,r,l,n);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(t,e,r){if(t==null)return t;var i=[],n=0;return zo(t,i,"","",function(a){return e.call(r,a,n++)}),i}function t0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Bt={current:null},Ho={transition:null},r0={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:Wl};function qh(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Bo,forEach:function(t,e,r){Bo(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!jl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},He.Component=An,He.Fragment=Gv,He.Profiler=jv,He.PureComponent=Vl,He.StrictMode=Wv,He.Suspense=Kv,He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0,He.act=qh,He.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bh({},t.props),n=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Wl.current),e.key!==void 0&&(n=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Wh.call(e,l)&&!jh.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:Pa,type:t.type,key:n,ref:a,props:i,_owner:o}},He.createContext=function(t){return t={$$typeof:Yv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xv,_context:t},t.Consumer=t},He.createElement=Xh,He.createFactory=function(t){var e=Xh.bind(null,t);return e.type=t,e},He.createRef=function(){return{current:null}},He.forwardRef=function(t){return{$$typeof:qv,render:t}},He.isValidElement=jl,He.lazy=function(t){return{$$typeof:$v,_payload:{_status:-1,_result:t},_init:t0}},He.memo=function(t,e){return{$$typeof:Zv,type:t,compare:e===void 0?null:e}},He.startTransition=function(t){var e=Ho.transition;Ho.transition={};try{t()}finally{Ho.transition=e}},He.unstable_act=qh,He.useCallback=function(t,e){return Bt.current.useCallback(t,e)},He.useContext=function(t){return Bt.current.useContext(t)},He.useDebugValue=function(){},He.useDeferredValue=function(t){return Bt.current.useDeferredValue(t)},He.useEffect=function(t,e){return Bt.current.useEffect(t,e)},He.useId=function(){return Bt.current.useId()},He.useImperativeHandle=function(t,e,r){return Bt.current.useImperativeHandle(t,e,r)},He.useInsertionEffect=function(t,e){return Bt.current.useInsertionEffect(t,e)},He.useLayoutEffect=function(t,e){return Bt.current.useLayoutEffect(t,e)},He.useMemo=function(t,e){return Bt.current.useMemo(t,e)},He.useReducer=function(t,e,r){return Bt.current.useReducer(t,e,r)},He.useRef=function(t){return Bt.current.useRef(t)},He.useState=function(t){return Bt.current.useState(t)},He.useSyncExternalStore=function(t,e,r){return Bt.current.useSyncExternalStore(t,e,r)},He.useTransition=function(){return Bt.current.useTransition()},He.version="18.3.1",kh.exports=He;var Te=kh.exports;/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var i0=Te,n0=Symbol.for("react.element"),a0=Symbol.for("react.fragment"),o0=Object.prototype.hasOwnProperty,s0=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l0={key:!0,ref:!0,__self:!0,__source:!0};function Kh(t,e,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)o0.call(e,i)&&!l0.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);return{$$typeof:n0,type:t,key:a,ref:o,props:n,_owner:s0.current}}Fo.Fragment=a0,Fo.jsx=Kh,Fo.jsxs=Kh,Oh.exports=Fo;var Re=Oh.exports,Zh={exports:{}},ir={},$h={exports:{}},Qh={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(w,U){var D=w.length;w.push(U);e:for(;0<D;){var K=D-1>>>1,q=w[K];if(0<n(q,U))w[K]=U,w[D]=q,D=K;else break e}}function r(w){return w.length===0?null:w[0]}function i(w){if(w.length===0)return null;var U=w[0],D=w.pop();if(D!==U){w[0]=D;e:for(var K=0,q=w.length,te=q>>>1;K<te;){var z=2*(K+1)-1,$=w[z],se=z+1,oe=w[se];if(0>n($,D))se<q&&0>n(oe,$)?(w[K]=oe,w[se]=D,K=se):(w[K]=$,w[z]=D,K=z);else if(se<q&&0>n(oe,D))w[K]=oe,w[se]=D,K=se;else break e}}return U}function n(w,U){var D=w.sortIndex-U.sortIndex;return D!==0?D:w.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],c=[],d=1,f=null,h=3,m=!1,_=!1,S=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(w){for(var U=r(c);U!==null;){if(U.callback===null)i(c);else if(U.startTime<=w)i(c),U.sortIndex=U.expirationTime,e(l,U);else break;U=r(c)}}function M(w){if(S=!1,g(w),!_)if(r(l)!==null)_=!0,G(C);else{var U=r(c);U!==null&&Z(M,U.startTime-w)}}function C(w,U){_=!1,S&&(S=!1,u(L),L=-1),m=!0;var D=h;try{for(g(U),f=r(l);f!==null&&(!(f.expirationTime>U)||w&&!x());){var K=f.callback;if(typeof K=="function"){f.callback=null,h=f.priorityLevel;var q=K(f.expirationTime<=U);U=t.unstable_now(),typeof q=="function"?f.callback=q:f===r(l)&&i(l),g(U)}else i(l);f=r(l)}if(f!==null)var te=!0;else{var z=r(c);z!==null&&Z(M,z.startTime-U),te=!1}return te}finally{f=null,h=D,m=!1}}var R=!1,T=null,L=-1,J=5,y=-1;function x(){return!(t.unstable_now()-y<J)}function k(){if(T!==null){var w=t.unstable_now();y=w;var U=!0;try{U=T(!0,w)}finally{U?F():(R=!1,T=null)}}else R=!1}var F;if(typeof v=="function")F=function(){v(k)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,X=V.port2;V.port1.onmessage=k,F=function(){X.postMessage(null)}}else F=function(){p(k,0)};function G(w){T=w,R||(R=!0,F())}function Z(w,U){L=p(function(){w(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(w){w.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,G(C))},t.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<w?Math.floor(1e3/w):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(w){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var D=h;h=U;try{return w()}finally{h=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(w,U){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var D=h;h=w;try{return U()}finally{h=D}},t.unstable_scheduleCallback=function(w,U,D){var K=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?K+D:K):D=K,w){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=D+q,w={id:d++,callback:U,priorityLevel:w,startTime:D,expirationTime:q,sortIndex:-1},D>K?(w.sortIndex=D,e(c,w),r(l)===null&&w===r(c)&&(S?(u(L),L=-1):S=!0,Z(M,D-K))):(w.sortIndex=q,e(l,w),_||m||(_=!0,G(C))),w},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(w){var U=h;return function(){var D=h;h=U;try{return w.apply(this,arguments)}finally{h=D}}}})(Qh),$h.exports=Qh;var c0=$h.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var u0=Te,nr=c0;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Jh=new Set,La={};function qi(t,e){Rn(t,e),Rn(t+"Capture",e)}function Rn(t,e){for(La[t]=e,t=0;t<e.length;t++)Jh.add(e[t])}var Xr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yl=Object.prototype.hasOwnProperty,d0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ef={},tf={};function h0(t){return Yl.call(tf,t)?!0:Yl.call(ef,t)?!1:d0.test(t)?tf[t]=!0:(ef[t]=!0,!1)}function f0(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function p0(t,e,r,i){if(e===null||typeof e>"u"||f0(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ht(t,e,r,i,n,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ct[t]=new Ht(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ct[e]=new Ht(e,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ct[t]=new Ht(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ct[t]=new Ht(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ct[t]=new Ht(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){Ct[t]=new Ht(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){Ct[t]=new Ht(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){Ct[t]=new Ht(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){Ct[t]=new Ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var ql=/[\-:]([a-z])/g;function Kl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ql,Kl);Ct[e]=new Ht(e,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ql,Kl);Ct[e]=new Ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ql,Kl);Ct[e]=new Ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){Ct[t]=new Ht(t,1,!1,t.toLowerCase(),null,!1,!1)}),Ct.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){Ct[t]=new Ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zl(t,e,r,i){var n=Ct.hasOwnProperty(e)?Ct[e]:null;(n!==null?n.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(p0(e,r,n,i)&&(r=null),i||n===null?h0(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):n.mustUseProperty?t[n.propertyName]=r===null?n.type===3?!1:"":r:(e=n.attributeName,i=n.attributeNamespace,r===null?t.removeAttribute(e):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var Yr=u0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vo=Symbol.for("react.element"),Cn=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),rf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),pi=Symbol.for("react.lazy"),af=Symbol.for("react.offscreen"),of=Symbol.iterator;function Da(t){return t===null||typeof t!="object"?null:(t=of&&t[of]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,ic;function Ua(t){if(ic===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);ic=e&&e[1]||""}return`
`+ic+t}var nc=!1;function ac(t,e){if(!t||nc)return"";nc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),a=i.stack.split(`
`),o=n.length-1,s=a.length-1;1<=o&&0<=s&&n[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(n[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||n[o]!==a[s]){var l=`
`+n[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{nc=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ua(t):""}function m0(t){switch(t.tag){case 5:return Ua(t.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Pn:return"Fragment";case Cn:return"Portal";case Ql:return"Profiler";case $l:return"StrictMode";case ec:return"Suspense";case tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nf:return(t.displayName||"Context")+".Consumer";case rf:return(t._context.displayName||"Context")+".Provider";case Jl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rc:return e=t.displayName||null,e!==null?e:oc(t.type)||"Memo";case pi:e=t._payload,t=t._init;try{return oc(t(e))}catch{}}return null}function g0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oc(e);case 8:return e===$l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function v0(t){var e=sf(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Go(t){t._valueTracker||(t._valueTracker=v0(t))}function lf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=sf(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function Wo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sc(t,e){var r=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function cf(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=mi(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uf(t,e){e=e.checked,e!=null&&Zl(t,"checked",e,!1)}function lc(t,e){uf(t,e);var r=mi(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cc(t,e.type,r):e.hasOwnProperty("defaultValue")&&cc(t,e.type,mi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function df(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function cc(t,e,r){(e!=="number"||Wo(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ia=Array.isArray;function Ln(t,e,r,i){if(t=t.options,e){e={};for(var n=0;n<r.length;n++)e["$"+r[n]]=!0;for(r=0;r<t.length;r++)n=e.hasOwnProperty("$"+t[r].value),t[r].selected!==n&&(t[r].selected=n),n&&i&&(t[r].defaultSelected=!0)}else{for(r=""+mi(r),e=null,n=0;n<t.length;n++){if(t[n].value===r){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function uc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hf(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(ie(92));if(Ia(r)){if(1<r.length)throw Error(ie(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:mi(r)}}function ff(t,e){var r=mi(e.value),i=mi(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function pf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jo,gf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,n){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,n)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_0=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(t){_0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oa[e]=Oa[t]})});function vf(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Oa.hasOwnProperty(t)&&Oa[t]?(""+e).trim():e+"px"}function _f(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=vf(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,n):t[r]=n}}var y0=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hc(t,e){if(e){if(y0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pc=null;function mc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gc=null,Dn=null,Un=null;function yf(t){if(t=no(t)){if(typeof gc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=ps(e),gc(t.stateNode,t.type,e))}}function xf(t){Dn?Un?Un.push(t):Un=[t]:Dn=t}function Sf(){if(Dn){var t=Dn,e=Un;if(Un=Dn=null,yf(t),e)for(t=0;t<e.length;t++)yf(e[t])}}function Mf(t,e){return t(e)}function bf(){}var vc=!1;function Ef(t,e,r){if(vc)return t(e,r);vc=!0;try{return Mf(t,e,r)}finally{vc=!1,(Dn!==null||Un!==null)&&(bf(),Sf())}}function ka(t,e){var r=t.stateNode;if(r===null)return null;var i=ps(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(ie(231,e,typeof r));return r}var _c=!1;if(Xr)try{var Fa={};Object.defineProperty(Fa,"passive",{get:function(){_c=!0}}),window.addEventListener("test",Fa,Fa),window.removeEventListener("test",Fa,Fa)}catch{_c=!1}function x0(t,e,r,i,n,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(d){this.onError(d)}}var za=!1,Xo=null,Yo=!1,yc=null,S0={onError:function(t){za=!0,Xo=t}};function M0(t,e,r,i,n,a,o,s,l){za=!1,Xo=null,x0.apply(S0,arguments)}function b0(t,e,r,i,n,a,o,s,l){if(M0.apply(this,arguments),za){if(za){var c=Xo;za=!1,Xo=null}else throw Error(ie(198));Yo||(Yo=!0,yc=c)}}function Ki(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function wf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Tf(t){if(Ki(t)!==t)throw Error(ie(188))}function E0(t){var e=t.alternate;if(!e){if(e=Ki(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var r=t,i=e;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return Tf(n),t;if(a===i)return Tf(n),e;a=a.sibling}throw Error(ie(188))}if(r.return!==i.return)r=n,i=a;else{for(var o=!1,s=n.child;s;){if(s===r){o=!0,r=n,i=a;break}if(s===i){o=!0,i=n,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,i=n;break}if(s===i){o=!0,i=a,r=n;break}s=s.sibling}if(!o)throw Error(ie(189))}}if(r.alternate!==i)throw Error(ie(190))}if(r.tag!==3)throw Error(ie(188));return r.stateNode.current===r?t:e}function Af(t){return t=E0(t),t!==null?Rf(t):null}function Rf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rf(t);if(e!==null)return e;t=t.sibling}return null}var Cf=nr.unstable_scheduleCallback,Pf=nr.unstable_cancelCallback,w0=nr.unstable_shouldYield,T0=nr.unstable_requestPaint,mt=nr.unstable_now,A0=nr.unstable_getCurrentPriorityLevel,xc=nr.unstable_ImmediatePriority,Lf=nr.unstable_UserBlockingPriority,qo=nr.unstable_NormalPriority,R0=nr.unstable_LowPriority,Df=nr.unstable_IdlePriority,Ko=null,Or=null;function C0(t){if(Or&&typeof Or.onCommitFiberRoot=="function")try{Or.onCommitFiberRoot(Ko,t,void 0,(t.current.flags&128)===128)}catch{}}var br=Math.clz32?Math.clz32:D0,P0=Math.log,L0=Math.LN2;function D0(t){return t>>>=0,t===0?32:31-(P0(t)/L0|0)|0}var Zo=64,$o=4194304;function Ba(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,n=t.suspendedLanes,a=t.pingedLanes,o=r&268435455;if(o!==0){var s=o&~n;s!==0?i=Ba(s):(a&=o,a!==0&&(i=Ba(a)))}else o=r&~n,o!==0?i=Ba(o):a!==0&&(i=Ba(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&n)&&(n=i&-i,a=e&-e,n>=a||n===16&&(a&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-br(e),n=1<<r,i|=t[r],e&=~n;return i}function U0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I0(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-br(a),s=1<<o,l=n[o];l===-1?(!(s&r)||s&i)&&(n[o]=U0(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Sc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Uf(){var t=Zo;return Zo<<=1,!(Zo&4194240)&&(Zo=64),t}function Mc(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ha(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-br(e),t[e]=r}function N0(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var n=31-br(r),a=1<<n;e[n]=0,i[n]=-1,t[n]=-1,r&=~a}}function bc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-br(r),n=1<<i;n&e|t[i]&e&&(t[i]|=e),r&=~n}}var Ke=0;function If(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Nf,Ec,Of,kf,Ff,wc=!1,Jo=[],gi=null,vi=null,_i=null,Va=new Map,Ga=new Map,yi=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(t,e){switch(t){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(e.pointerId)}}function Wa(t,e,r,i,n,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},e!==null&&(e=no(e),e!==null&&Ec(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function k0(t,e,r,i,n){switch(e){case"focusin":return gi=Wa(gi,t,e,r,i,n),!0;case"dragenter":return vi=Wa(vi,t,e,r,i,n),!0;case"mouseover":return _i=Wa(_i,t,e,r,i,n),!0;case"pointerover":var a=n.pointerId;return Va.set(a,Wa(Va.get(a)||null,t,e,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,Ga.set(a,Wa(Ga.get(a)||null,t,e,r,i,n)),!0}return!1}function Bf(t){var e=Zi(t.target);if(e!==null){var r=Ki(e);if(r!==null){if(e=r.tag,e===13){if(e=wf(r),e!==null){t.blockedOn=e,Ff(t.priority,function(){Of(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function es(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Ac(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);pc=i,r.target.dispatchEvent(i),pc=null}else return e=no(r),e!==null&&Ec(e),t.blockedOn=r,!1;e.shift()}return!0}function Hf(t,e,r){es(t)&&r.delete(e)}function F0(){wc=!1,gi!==null&&es(gi)&&(gi=null),vi!==null&&es(vi)&&(vi=null),_i!==null&&es(_i)&&(_i=null),Va.forEach(Hf),Ga.forEach(Hf)}function ja(t,e){t.blockedOn===e&&(t.blockedOn=null,wc||(wc=!0,nr.unstable_scheduleCallback(nr.unstable_NormalPriority,F0)))}function Xa(t){function e(n){return ja(n,t)}if(0<Jo.length){ja(Jo[0],t);for(var r=1;r<Jo.length;r++){var i=Jo[r];i.blockedOn===t&&(i.blockedOn=null)}}for(gi!==null&&ja(gi,t),vi!==null&&ja(vi,t),_i!==null&&ja(_i,t),Va.forEach(e),Ga.forEach(e),r=0;r<yi.length;r++)i=yi[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<yi.length&&(r=yi[0],r.blockedOn===null);)Bf(r),r.blockedOn===null&&yi.shift()}var In=Yr.ReactCurrentBatchConfig,ts=!0;function z0(t,e,r,i){var n=Ke,a=In.transition;In.transition=null;try{Ke=1,Tc(t,e,r,i)}finally{Ke=n,In.transition=a}}function B0(t,e,r,i){var n=Ke,a=In.transition;In.transition=null;try{Ke=4,Tc(t,e,r,i)}finally{Ke=n,In.transition=a}}function Tc(t,e,r,i){if(ts){var n=Ac(t,e,r,i);if(n===null)Wc(t,e,i,rs,r),zf(t,i);else if(k0(n,t,e,r,i))i.stopPropagation();else if(zf(t,i),e&4&&-1<O0.indexOf(t)){for(;n!==null;){var a=no(n);if(a!==null&&Nf(a),a=Ac(t,e,r,i),a===null&&Wc(t,e,i,rs,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else Wc(t,e,i,null,r)}}var rs=null;function Ac(t,e,r,i){if(rs=null,t=mc(i),t=Zi(t),t!==null)if(e=Ki(t),e===null)t=null;else if(r=e.tag,r===13){if(t=wf(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rs=t,null}function Vf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A0()){case xc:return 1;case Lf:return 4;case qo:case R0:return 16;case Df:return 536870912;default:return 16}default:return 16}}var xi=null,Rc=null,is=null;function Gf(){if(is)return is;var t,e=Rc,r=e.length,i,n="value"in xi?xi.value:xi.textContent,a=n.length;for(t=0;t<r&&e[t]===n[t];t++);var o=r-t;for(i=1;i<=o&&e[r-i]===n[a-i];i++);return is=n.slice(t,1<i?1-i:void 0)}function ns(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function as(){return!0}function Wf(){return!1}function ar(t){function e(r,i,n,a,o){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?as:Wf,this.isPropagationStopped=Wf,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),e}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=ar(Nn),Ya=ct({},Nn,{view:0,detail:0}),H0=ar(Ya),Pc,Lc,qa,os=ct({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qa&&(qa&&t.type==="mousemove"?(Pc=t.screenX-qa.screenX,Lc=t.screenY-qa.screenY):Lc=Pc=0,qa=t),Pc)},movementY:function(t){return"movementY"in t?t.movementY:Lc}}),jf=ar(os),V0=ct({},os,{dataTransfer:0}),G0=ar(V0),W0=ct({},Ya,{relatedTarget:0}),Dc=ar(W0),j0=ct({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=ar(j0),Y0=ct({},Nn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),q0=ar(Y0),K0=ct({},Nn,{data:0}),Xf=ar(K0),Z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function J0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q0[t])?!!e[t]:!1}function Uc(){return J0}var e_=ct({},Ya,{key:function(t){if(t.key){var e=Z0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ns(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uc,charCode:function(t){return t.type==="keypress"?ns(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ns(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),t_=ar(e_),r_=ct({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yf=ar(r_),i_=ct({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uc}),n_=ar(i_),a_=ct({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),o_=ar(a_),s_=ct({},os,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l_=ar(s_),c_=[9,13,27,32],Ic=Xr&&"CompositionEvent"in window,Ka=null;Xr&&"documentMode"in document&&(Ka=document.documentMode);var u_=Xr&&"TextEvent"in window&&!Ka,qf=Xr&&(!Ic||Ka&&8<Ka&&11>=Ka),Kf=" ",Zf=!1;function $f(t,e){switch(t){case"keyup":return c_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var On=!1;function d_(t,e){switch(t){case"compositionend":return Qf(e);case"keypress":return e.which!==32?null:(Zf=!0,Kf);case"textInput":return t=e.data,t===Kf&&Zf?null:t;default:return null}}function h_(t,e){if(On)return t==="compositionend"||!Ic&&$f(t,e)?(t=Gf(),is=Rc=xi=null,On=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qf&&e.locale!=="ko"?null:e.data;default:return null}}var f_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!f_[t.type]:e==="textarea"}function ep(t,e,r,i){xf(i),e=ds(e,"onChange"),0<e.length&&(r=new Cc("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var Za=null,$a=null;function p_(t){_p(t,0)}function ss(t){var e=Hn(t);if(lf(e))return t}function m_(t,e){if(t==="change")return e}var tp=!1;if(Xr){var Nc;if(Xr){var Oc="oninput"in document;if(!Oc){var rp=document.createElement("div");rp.setAttribute("oninput","return;"),Oc=typeof rp.oninput=="function"}Nc=Oc}else Nc=!1;tp=Nc&&(!document.documentMode||9<document.documentMode)}function ip(){Za&&(Za.detachEvent("onpropertychange",np),$a=Za=null)}function np(t){if(t.propertyName==="value"&&ss($a)){var e=[];ep(e,$a,t,mc(t)),Ef(p_,e)}}function g_(t,e,r){t==="focusin"?(ip(),Za=e,$a=r,Za.attachEvent("onpropertychange",np)):t==="focusout"&&ip()}function v_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ss($a)}function __(t,e){if(t==="click")return ss(e)}function y_(t,e){if(t==="input"||t==="change")return ss(e)}function x_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Er=typeof Object.is=="function"?Object.is:x_;function Qa(t,e){if(Er(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!Yl.call(e,n)||!Er(t[n],e[n]))return!1}return!0}function ap(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function op(t,e){var r=ap(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ap(r)}}function sp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lp(){for(var t=window,e=Wo();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Wo(t.document)}return e}function kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function S_(t){var e=lp(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&sp(r.ownerDocument.documentElement,r)){if(i!==null&&kc(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!t.extend&&a>i&&(n=i,i=a,a=n),n=op(r,a);var o=op(r,i);n&&o&&(t.rangeCount!==1||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var M_=Xr&&"documentMode"in document&&11>=document.documentMode,kn=null,Fc=null,Ja=null,zc=!1;function cp(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;zc||kn==null||kn!==Wo(i)||(i=kn,"selectionStart"in i&&kc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ja&&Qa(Ja,i)||(Ja=i,i=ds(Fc,"onSelect"),0<i.length&&(e=new Cc("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=kn)))}function ls(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Fn={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionend:ls("Transition","TransitionEnd")},Bc={},up={};Xr&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Fn.animationend.animation,delete Fn.animationiteration.animation,delete Fn.animationstart.animation),"TransitionEvent"in window||delete Fn.transitionend.transition);function cs(t){if(Bc[t])return Bc[t];if(!Fn[t])return t;var e=Fn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in up)return Bc[t]=e[r];return t}var dp=cs("animationend"),hp=cs("animationiteration"),fp=cs("animationstart"),pp=cs("transitionend"),mp=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(t,e){mp.set(t,e),qi(e,[t])}for(var Hc=0;Hc<gp.length;Hc++){var Vc=gp[Hc],b_=Vc.toLowerCase(),E_=Vc[0].toUpperCase()+Vc.slice(1);Si(b_,"on"+E_)}Si(dp,"onAnimationEnd"),Si(hp,"onAnimationIteration"),Si(fp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(pp,"onTransitionEnd"),Rn("onMouseEnter",["mouseout","mouseover"]),Rn("onMouseLeave",["mouseout","mouseover"]),Rn("onPointerEnter",["pointerout","pointerover"]),Rn("onPointerLeave",["pointerout","pointerover"]),qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w_=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function vp(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,b0(i,e,void 0,t),t.currentTarget=null}function _p(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],n=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&n.isPropagationStopped())break e;vp(n,s,c),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&n.isPropagationStopped())break e;vp(n,s,c),a=l}}}if(Yo)throw t=yc,Yo=!1,yc=null,t}function it(t,e){var r=e[Zc];r===void 0&&(r=e[Zc]=new Set);var i=t+"__bubble";r.has(i)||(yp(e,t,2,!1),r.add(i))}function Gc(t,e,r){var i=0;e&&(i|=4),yp(r,t,i,e)}var us="_reactListening"+Math.random().toString(36).slice(2);function to(t){if(!t[us]){t[us]=!0,Jh.forEach(function(r){r!=="selectionchange"&&(w_.has(r)||Gc(r,!1,t),Gc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[us]||(e[us]=!0,Gc("selectionchange",!1,e))}}function yp(t,e,r,i){switch(Vf(e)){case 1:var n=z0;break;case 4:n=B0;break;default:n=Tc}r=n.bind(null,e,r,t),n=void 0,!_c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,r,{capture:!0,passive:n}):t.addEventListener(e,r,!0):n!==void 0?t.addEventListener(e,r,{passive:n}):t.addEventListener(e,r,!1)}function Wc(t,e,r,i,n){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;o=o.return}for(;s!==null;){if(o=Zi(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}Ef(function(){var c=a,d=mc(r),f=[];e:{var h=mp.get(t);if(h!==void 0){var m=Cc,_=t;switch(t){case"keypress":if(ns(r)===0)break e;case"keydown":case"keyup":m=t_;break;case"focusin":_="focus",m=Dc;break;case"focusout":_="blur",m=Dc;break;case"beforeblur":case"afterblur":m=Dc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=n_;break;case dp:case hp:case fp:m=X0;break;case pp:m=o_;break;case"scroll":m=H0;break;case"wheel":m=l_;break;case"copy":case"cut":case"paste":m=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Yf}var S=(e&4)!==0,p=!S&&t==="scroll",u=S?h!==null?h+"Capture":null:h;S=[];for(var v=c,g;v!==null;){g=v;var M=g.stateNode;if(g.tag===5&&M!==null&&(g=M,u!==null&&(M=ka(v,u),M!=null&&S.push(ro(v,M,g)))),p)break;v=v.return}0<S.length&&(h=new m(h,_,null,r,d),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&r!==pc&&(_=r.relatedTarget||r.fromElement)&&(Zi(_)||_[qr]))break e;if((m||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=r.relatedTarget||r.toElement,m=c,_=_?Zi(_):null,_!==null&&(p=Ki(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(S=jf,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Yf,M="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?h:Hn(m),g=_==null?h:Hn(_),h=new S(M,v+"leave",m,r,d),h.target=p,h.relatedTarget=g,M=null,Zi(d)===c&&(S=new S(u,v+"enter",_,r,d),S.target=g,S.relatedTarget=p,M=S),p=M,m&&_)t:{for(S=m,u=_,v=0,g=S;g;g=zn(g))v++;for(g=0,M=u;M;M=zn(M))g++;for(;0<v-g;)S=zn(S),v--;for(;0<g-v;)u=zn(u),g--;for(;v--;){if(S===u||u!==null&&S===u.alternate)break t;S=zn(S),u=zn(u)}S=null}else S=null;m!==null&&xp(f,h,m,S,!1),_!==null&&p!==null&&xp(f,p,_,S,!0)}}e:{if(h=c?Hn(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var C=m_;else if(Jf(h))if(tp)C=y_;else{C=v_;var R=g_}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=__);if(C&&(C=C(t,c))){ep(f,C,r,d);break e}R&&R(t,h,c),t==="focusout"&&(R=h._wrapperState)&&R.controlled&&h.type==="number"&&cc(h,"number",h.value)}switch(R=c?Hn(c):window,t){case"focusin":(Jf(R)||R.contentEditable==="true")&&(kn=R,Fc=c,Ja=null);break;case"focusout":Ja=Fc=kn=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,cp(f,r,d);break;case"selectionchange":if(M_)break;case"keydown":case"keyup":cp(f,r,d)}var T;if(Ic)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else On?$f(t,r)&&(L="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(qf&&r.locale!=="ko"&&(On||L!=="onCompositionStart"?L==="onCompositionEnd"&&On&&(T=Gf()):(xi=d,Rc="value"in xi?xi.value:xi.textContent,On=!0)),R=ds(c,L),0<R.length&&(L=new Xf(L,t,null,r,d),f.push({event:L,listeners:R}),T?L.data=T:(T=Qf(r),T!==null&&(L.data=T)))),(T=u_?d_(t,r):h_(t,r))&&(c=ds(c,"onBeforeInput"),0<c.length&&(d=new Xf("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:c}),d.data=T))}_p(f,e)})}function ro(t,e,r){return{instance:t,listener:e,currentTarget:r}}function ds(t,e){for(var r=e+"Capture",i=[];t!==null;){var n=t,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=ka(t,r),a!=null&&i.unshift(ro(t,a,n)),a=ka(t,e),a!=null&&i.push(ro(t,a,n))),t=t.return}return i}function zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xp(t,e,r,i,n){for(var a=e._reactName,o=[];r!==null&&r!==i;){var s=r,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,n?(l=ka(r,a),l!=null&&o.unshift(ro(r,l,s))):n||(l=ka(r,a),l!=null&&o.push(ro(r,l,s)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var T_=/\r\n?/g,A_=/\u0000|\uFFFD/g;function Sp(t){return(typeof t=="string"?t:""+t).replace(T_,`
`).replace(A_,"")}function hs(t,e,r){if(e=Sp(e),Sp(t)!==e&&r)throw Error(ie(425))}function fs(){}var jc=null,Xc=null;function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,R_=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,C_=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(t){return Mp.resolve(null).then(t).catch(P_)}:qc;function P_(t){setTimeout(function(){throw t})}function Kc(t,e){var r=e,i=0;do{var n=r.nextSibling;if(t.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){t.removeChild(n),Xa(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);Xa(e)}function Mi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Bn=Math.random().toString(36).slice(2),kr="__reactFiber$"+Bn,io="__reactProps$"+Bn,qr="__reactContainer$"+Bn,Zc="__reactEvents$"+Bn,L_="__reactListeners$"+Bn,D_="__reactHandles$"+Bn;function Zi(t){var e=t[kr];if(e)return e;for(var r=t.parentNode;r;){if(e=r[qr]||r[kr]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=bp(t);t!==null;){if(r=t[kr])return r;t=bp(t)}return e}t=r,r=t.parentNode}return null}function no(t){return t=t[kr]||t[qr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function ps(t){return t[io]||null}var $c=[],Vn=-1;function bi(t){return{current:t}}function nt(t){0>Vn||(t.current=$c[Vn],$c[Vn]=null,Vn--)}function tt(t,e){Vn++,$c[Vn]=t.current,t.current=e}var Ei={},Dt=bi(Ei),qt=bi(!1),$i=Ei;function Gn(t,e){var r=t.type.contextTypes;if(!r)return Ei;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=n),n}function Kt(t){return t=t.childContextTypes,t!=null}function ms(){nt(qt),nt(Dt)}function Ep(t,e,r){if(Dt.current!==Ei)throw Error(ie(168));tt(Dt,e),tt(qt,r)}function wp(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in e))throw Error(ie(108,g0(t)||"Unknown",n));return ct({},r,i)}function gs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ei,$i=Dt.current,tt(Dt,t),tt(qt,qt.current),!0}function Tp(t,e,r){var i=t.stateNode;if(!i)throw Error(ie(169));r?(t=wp(t,e,$i),i.__reactInternalMemoizedMergedChildContext=t,nt(qt),nt(Dt),tt(Dt,t)):nt(qt),tt(qt,r)}var Kr=null,vs=!1,Qc=!1;function Ap(t){Kr===null?Kr=[t]:Kr.push(t)}function U_(t){vs=!0,Ap(t)}function wi(){if(!Qc&&Kr!==null){Qc=!0;var t=0,e=Ke;try{var r=Kr;for(Ke=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}Kr=null,vs=!1}catch(n){throw Kr!==null&&(Kr=Kr.slice(t+1)),Cf(xc,wi),n}finally{Ke=e,Qc=!1}}return null}var Wn=[],jn=0,_s=null,ys=0,pr=[],mr=0,Qi=null,Zr=1,$r="";function Ji(t,e){Wn[jn++]=ys,Wn[jn++]=_s,_s=t,ys=e}function Rp(t,e,r){pr[mr++]=Zr,pr[mr++]=$r,pr[mr++]=Qi,Qi=t;var i=Zr;t=$r;var n=32-br(i)-1;i&=~(1<<n),r+=1;var a=32-br(e)+n;if(30<a){var o=n-n%5;a=(i&(1<<o)-1).toString(32),i>>=o,n-=o,Zr=1<<32-br(e)+n|r<<n|i,$r=a+t}else Zr=1<<a|r<<n|i,$r=t}function Jc(t){t.return!==null&&(Ji(t,1),Rp(t,1,0))}function eu(t){for(;t===_s;)_s=Wn[--jn],Wn[jn]=null,ys=Wn[--jn],Wn[jn]=null;for(;t===Qi;)Qi=pr[--mr],pr[mr]=null,$r=pr[--mr],pr[mr]=null,Zr=pr[--mr],pr[mr]=null}var or=null,sr=null,st=!1,wr=null;function Cp(t,e){var r=yr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Pp(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,or=t,sr=Mi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,or=t,sr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Qi!==null?{id:Zr,overflow:$r}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=yr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,or=t,sr=null,!0):!1;default:return!1}}function tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ru(t){if(st){var e=sr;if(e){var r=e;if(!Pp(t,e)){if(tu(t))throw Error(ie(418));e=Mi(r.nextSibling);var i=or;e&&Pp(t,e)?Cp(i,r):(t.flags=t.flags&-4097|2,st=!1,or=t)}}else{if(tu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,st=!1,or=t}}}function Lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;or=t}function xs(t){if(t!==or)return!1;if(!st)return Lp(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yc(t.type,t.memoizedProps)),e&&(e=sr)){if(tu(t))throw Dp(),Error(ie(418));for(;e;)Cp(t,e),e=Mi(e.nextSibling)}if(Lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){sr=Mi(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}sr=null}}else sr=or?Mi(t.stateNode.nextSibling):null;return!0}function Dp(){for(var t=sr;t;)t=Mi(t.nextSibling)}function Xn(){sr=or=null,st=!1}function iu(t){wr===null?wr=[t]:wr.push(t)}var I_=Yr.ReactCurrentBatchConfig;function ao(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(ie(309));var i=r.stateNode}if(!i)throw Error(ie(147,t));var n=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=n.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(ie(284));if(!r._owner)throw Error(ie(290,t))}return t}function Ss(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Up(t){var e=t._init;return e(t._payload)}function Ip(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function r(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function n(u,v){return u=Ui(u,v),u.index=0,u.sibling=null,u}function a(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function s(u,v,g,M){return v===null||v.tag!==6?(v=Yu(g,u.mode,M),v.return=u,v):(v=n(v,g),v.return=u,v)}function l(u,v,g,M){var C=g.type;return C===Pn?d(u,v,g.props.children,M,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pi&&Up(C)===v.type)?(M=n(v,g.props),M.ref=ao(u,v,g),M.return=u,M):(M=js(g.type,g.key,g.props,null,u.mode,M),M.ref=ao(u,v,g),M.return=u,M)}function c(u,v,g,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=qu(g,u.mode,M),v.return=u,v):(v=n(v,g.children||[]),v.return=u,v)}function d(u,v,g,M,C){return v===null||v.tag!==7?(v=ln(g,u.mode,M,C),v.return=u,v):(v=n(v,g),v.return=u,v)}function f(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Yu(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vo:return g=js(v.type,v.key,v.props,null,u.mode,g),g.ref=ao(u,null,v),g.return=u,g;case Cn:return v=qu(v,u.mode,g),v.return=u,v;case pi:var M=v._init;return f(u,M(v._payload),g)}if(Ia(v)||Da(v))return v=ln(v,u.mode,g,null),v.return=u,v;Ss(u,v)}return null}function h(u,v,g,M){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:s(u,v,""+g,M);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:return g.key===C?l(u,v,g,M):null;case Cn:return g.key===C?c(u,v,g,M):null;case pi:return C=g._init,h(u,v,C(g._payload),M)}if(Ia(g)||Da(g))return C!==null?null:d(u,v,g,M,null);Ss(u,g)}return null}function m(u,v,g,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(g)||null,s(v,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Vo:return u=u.get(M.key===null?g:M.key)||null,l(v,u,M,C);case Cn:return u=u.get(M.key===null?g:M.key)||null,c(v,u,M,C);case pi:var R=M._init;return m(u,v,g,R(M._payload),C)}if(Ia(M)||Da(M))return u=u.get(g)||null,d(v,u,M,C,null);Ss(v,M)}return null}function _(u,v,g,M){for(var C=null,R=null,T=v,L=v=0,J=null;T!==null&&L<g.length;L++){T.index>L?(J=T,T=null):J=T.sibling;var y=h(u,T,g[L],M);if(y===null){T===null&&(T=J);break}t&&T&&y.alternate===null&&e(u,T),v=a(y,v,L),R===null?C=y:R.sibling=y,R=y,T=J}if(L===g.length)return r(u,T),st&&Ji(u,L),C;if(T===null){for(;L<g.length;L++)T=f(u,g[L],M),T!==null&&(v=a(T,v,L),R===null?C=T:R.sibling=T,R=T);return st&&Ji(u,L),C}for(T=i(u,T);L<g.length;L++)J=m(T,u,L,g[L],M),J!==null&&(t&&J.alternate!==null&&T.delete(J.key===null?L:J.key),v=a(J,v,L),R===null?C=J:R.sibling=J,R=J);return t&&T.forEach(function(x){return e(u,x)}),st&&Ji(u,L),C}function S(u,v,g,M){var C=Da(g);if(typeof C!="function")throw Error(ie(150));if(g=C.call(g),g==null)throw Error(ie(151));for(var R=C=null,T=v,L=v=0,J=null,y=g.next();T!==null&&!y.done;L++,y=g.next()){T.index>L?(J=T,T=null):J=T.sibling;var x=h(u,T,y.value,M);if(x===null){T===null&&(T=J);break}t&&T&&x.alternate===null&&e(u,T),v=a(x,v,L),R===null?C=x:R.sibling=x,R=x,T=J}if(y.done)return r(u,T),st&&Ji(u,L),C;if(T===null){for(;!y.done;L++,y=g.next())y=f(u,y.value,M),y!==null&&(v=a(y,v,L),R===null?C=y:R.sibling=y,R=y);return st&&Ji(u,L),C}for(T=i(u,T);!y.done;L++,y=g.next())y=m(T,u,L,y.value,M),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?L:y.key),v=a(y,v,L),R===null?C=y:R.sibling=y,R=y);return t&&T.forEach(function(k){return e(u,k)}),st&&Ji(u,L),C}function p(u,v,g,M){if(typeof g=="object"&&g!==null&&g.type===Pn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Vo:e:{for(var C=g.key,R=v;R!==null;){if(R.key===C){if(C=g.type,C===Pn){if(R.tag===7){r(u,R.sibling),v=n(R,g.props.children),v.return=u,u=v;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pi&&Up(C)===R.type){r(u,R.sibling),v=n(R,g.props),v.ref=ao(u,R,g),v.return=u,u=v;break e}r(u,R);break}else e(u,R);R=R.sibling}g.type===Pn?(v=ln(g.props.children,u.mode,M,g.key),v.return=u,u=v):(M=js(g.type,g.key,g.props,null,u.mode,M),M.ref=ao(u,v,g),M.return=u,u=M)}return o(u);case Cn:e:{for(R=g.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){r(u,v.sibling),v=n(v,g.children||[]),v.return=u,u=v;break e}else{r(u,v);break}else e(u,v);v=v.sibling}v=qu(g,u.mode,M),v.return=u,u=v}return o(u);case pi:return R=g._init,p(u,v,R(g._payload),M)}if(Ia(g))return _(u,v,g,M);if(Da(g))return S(u,v,g,M);Ss(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(r(u,v.sibling),v=n(v,g),v.return=u,u=v):(r(u,v),v=Yu(g,u.mode,M),v.return=u,u=v),o(u)):r(u,v)}return p}var Yn=Ip(!0),Np=Ip(!1),Ms=bi(null),bs=null,qn=null,nu=null;function au(){nu=qn=bs=null}function ou(t){var e=Ms.current;nt(Ms),t._currentValue=e}function su(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function Kn(t,e){bs=t,nu=qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Zt=!0),t.firstContext=null)}function gr(t){var e=t._currentValue;if(nu!==t)if(t={context:t,memoizedValue:e,next:null},qn===null){if(bs===null)throw Error(ie(308));qn=t,bs.dependencies={lanes:0,firstContext:t}}else qn=qn.next=t;return e}var en=null;function lu(t){en===null?en=[t]:en.push(t)}function Op(t,e,r,i){var n=e.interleaved;return n===null?(r.next=r,lu(e)):(r.next=n.next,n.next=r),e.interleaved=r,Qr(t,i)}function Qr(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ti=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Jr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ai(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,Qr(t,r)}return n=i.interleaved,n===null?(e.next=e,lu(i)):(e.next=n.next,n.next=e),i.interleaved=e,Qr(t,r)}function Es(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,bc(t,r)}}function Fp(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?n=a=e:a=a.next=e}else n=a=e;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function ws(t,e,r,i){var n=t.updateQueue;Ti=!1;var a=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(a!==null){var f=n.baseState;o=0,d=c=l=null,s=a;do{var h=s.lane,m=s.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:m,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,S=s;switch(h=e,m=r,S.tag){case 1:if(_=S.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=ct({},f,h);break e;case 2:Ti=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=n.effects,h===null?n.effects=[s]:h.push(s))}else m={eventTime:m,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,o|=h;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;h=s,s=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);if(d===null&&(l=f),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=d,e=n.shared.interleaved,e!==null){n=e;do o|=n.lane,n=n.next;while(n!==e)}else a===null&&(n.shared.lanes=0);nn|=o,t.lanes=o,t.memoizedState=f}}function zp(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(ie(191,n));n.call(i)}}}var oo={},Fr=bi(oo),so=bi(oo),lo=bi(oo);function tn(t){if(t===oo)throw Error(ie(174));return t}function uu(t,e){switch(tt(lo,e),tt(so,t),tt(Fr,oo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dc(e,t)}nt(Fr),tt(Fr,e)}function Zn(){nt(Fr),nt(so),nt(lo)}function Bp(t){tn(lo.current);var e=tn(Fr.current),r=dc(e,t.type);e!==r&&(tt(so,t),tt(Fr,r))}function du(t){so.current===t&&(nt(Fr),nt(so))}var ut=bi(0);function Ts(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hu=[];function fu(){for(var t=0;t<hu.length;t++)hu[t]._workInProgressVersionPrimary=null;hu.length=0}var As=Yr.ReactCurrentDispatcher,pu=Yr.ReactCurrentBatchConfig,rn=0,dt=null,Mt=null,Tt=null,Rs=!1,co=!1,uo=0,N_=0;function Ut(){throw Error(ie(321))}function mu(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Er(t[r],e[r]))return!1;return!0}function gu(t,e,r,i,n,a){if(rn=a,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,As.current=t===null||t.memoizedState===null?z_:B_,t=r(i,n),co){a=0;do{if(co=!1,uo=0,25<=a)throw Error(ie(301));a+=1,Tt=Mt=null,e.updateQueue=null,As.current=H_,t=r(i,n)}while(co)}if(As.current=Ls,e=Mt!==null&&Mt.next!==null,rn=0,Tt=Mt=dt=null,Rs=!1,e)throw Error(ie(300));return t}function vu(){var t=uo!==0;return uo=0,t}function zr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?dt.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function vr(){if(Mt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Tt===null?dt.memoizedState:Tt.next;if(e!==null)Tt=e,Mt=t;else{if(t===null)throw Error(ie(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Tt===null?dt.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function ho(t,e){return typeof e=="function"?e(t):e}function _u(t){var e=vr(),r=e.queue;if(r===null)throw Error(ie(311));r.lastRenderedReducer=t;var i=Mt,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var o=n.next;n.next=a.next,a.next=o}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var s=o=null,l=null,c=a;do{var d=c.lane;if((rn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,o=i):l=l.next=f,dt.lanes|=d,nn|=d}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=s,Er(i,e.memoizedState)||(Zt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,r.lastRenderedState=i}if(t=r.interleaved,t!==null){n=t;do a=n.lane,dt.lanes|=a,nn|=a,n=n.next;while(n!==t)}else n===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function yu(t){var e=vr(),r=e.queue;if(r===null)throw Error(ie(311));r.lastRenderedReducer=t;var i=r.dispatch,n=r.pending,a=e.memoizedState;if(n!==null){r.pending=null;var o=n=n.next;do a=t(a,o.action),o=o.next;while(o!==n);Er(a,e.memoizedState)||(Zt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,i]}function Hp(){}function Vp(t,e){var r=dt,i=vr(),n=e(),a=!Er(i.memoizedState,n);if(a&&(i.memoizedState=n,Zt=!0),i=i.queue,xu(jp.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||Tt!==null&&Tt.memoizedState.tag&1){if(r.flags|=2048,fo(9,Wp.bind(null,r,i,n,e),void 0,null),At===null)throw Error(ie(349));rn&30||Gp(r,e,n)}return n}function Gp(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Wp(t,e,r,i){e.value=r,e.getSnapshot=i,Xp(e)&&Yp(t)}function jp(t,e,r){return r(function(){Xp(e)&&Yp(t)})}function Xp(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Er(t,r)}catch{return!0}}function Yp(t){var e=Qr(t,1);e!==null&&Cr(e,t,1,-1)}function qp(t){var e=zr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},e.queue=t,t=t.dispatch=F_.bind(null,dt,t),[e.memoizedState,t]}function fo(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function Kp(){return vr().memoizedState}function Cs(t,e,r,i){var n=zr();dt.flags|=t,n.memoizedState=fo(1|e,r,void 0,i===void 0?null:i)}function Ps(t,e,r,i){var n=vr();i=i===void 0?null:i;var a=void 0;if(Mt!==null){var o=Mt.memoizedState;if(a=o.destroy,i!==null&&mu(i,o.deps)){n.memoizedState=fo(e,r,a,i);return}}dt.flags|=t,n.memoizedState=fo(1|e,r,a,i)}function Zp(t,e){return Cs(8390656,8,t,e)}function xu(t,e){return Ps(2048,8,t,e)}function $p(t,e){return Ps(4,2,t,e)}function Qp(t,e){return Ps(4,4,t,e)}function Jp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function em(t,e,r){return r=r!=null?r.concat([t]):null,Ps(4,4,Jp.bind(null,e,t),r)}function Su(){}function tm(t,e){var r=vr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&mu(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function rm(t,e){var r=vr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&mu(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function im(t,e,r){return rn&21?(Er(r,e)||(r=Uf(),dt.lanes|=r,nn|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Zt=!0),t.memoizedState=r)}function O_(t,e){var r=Ke;Ke=r!==0&&4>r?r:4,t(!0);var i=pu.transition;pu.transition={};try{t(!1),e()}finally{Ke=r,pu.transition=i}}function nm(){return vr().memoizedState}function k_(t,e,r){var i=Li(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},am(t))om(e,r);else if(r=Op(t,e,r,i),r!==null){var n=Gt();Cr(r,t,i,n),sm(r,e,i)}}function F_(t,e,r){var i=Li(t),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(am(t))om(e,n);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,r);if(n.hasEagerState=!0,n.eagerState=s,Er(s,o)){var l=e.interleaved;l===null?(n.next=n,lu(e)):(n.next=l.next,l.next=n),e.interleaved=n;return}}catch{}finally{}r=Op(t,e,n,i),r!==null&&(n=Gt(),Cr(r,t,i,n),sm(r,e,i))}}function am(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function om(t,e){co=Rs=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function sm(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,bc(t,r)}}var Ls={readContext:gr,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},z_={readContext:gr,useCallback:function(t,e){return zr().memoizedState=[t,e===void 0?null:e],t},useContext:gr,useEffect:Zp,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Cs(4194308,4,Jp.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Cs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cs(4,2,t,e)},useMemo:function(t,e){var r=zr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=zr();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=k_.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=zr();return t={current:t},e.memoizedState=t},useState:qp,useDebugValue:Su,useDeferredValue:function(t){return zr().memoizedState=t},useTransition:function(){var t=qp(!1),e=t[0];return t=O_.bind(null,t[1]),zr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=dt,n=zr();if(st){if(r===void 0)throw Error(ie(407));r=r()}else{if(r=e(),At===null)throw Error(ie(349));rn&30||Gp(i,e,r)}n.memoizedState=r;var a={value:r,getSnapshot:e};return n.queue=a,Zp(jp.bind(null,i,a,t),[t]),i.flags|=2048,fo(9,Wp.bind(null,i,a,r,e),void 0,null),r},useId:function(){var t=zr(),e=At.identifierPrefix;if(st){var r=$r,i=Zr;r=(i&~(1<<32-br(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=uo++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=N_++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},B_={readContext:gr,useCallback:tm,useContext:gr,useEffect:xu,useImperativeHandle:em,useInsertionEffect:$p,useLayoutEffect:Qp,useMemo:rm,useReducer:_u,useRef:Kp,useState:function(){return _u(ho)},useDebugValue:Su,useDeferredValue:function(t){var e=vr();return im(e,Mt.memoizedState,t)},useTransition:function(){var t=_u(ho)[0],e=vr().memoizedState;return[t,e]},useMutableSource:Hp,useSyncExternalStore:Vp,useId:nm,unstable_isNewReconciler:!1},H_={readContext:gr,useCallback:tm,useContext:gr,useEffect:xu,useImperativeHandle:em,useInsertionEffect:$p,useLayoutEffect:Qp,useMemo:rm,useReducer:yu,useRef:Kp,useState:function(){return yu(ho)},useDebugValue:Su,useDeferredValue:function(t){var e=vr();return Mt===null?e.memoizedState=t:im(e,Mt.memoizedState,t)},useTransition:function(){var t=yu(ho)[0],e=vr().memoizedState;return[t,e]},useMutableSource:Hp,useSyncExternalStore:Vp,useId:nm,unstable_isNewReconciler:!1};function Tr(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Mu(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:ct({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var Ds={isMounted:function(t){return(t=t._reactInternals)?Ki(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=Gt(),n=Li(t),a=Jr(i,n);a.payload=e,r!=null&&(a.callback=r),e=Ai(t,a,n),e!==null&&(Cr(e,t,n,i),Es(e,t,n))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=Gt(),n=Li(t),a=Jr(i,n);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=Ai(t,a,n),e!==null&&(Cr(e,t,n,i),Es(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Gt(),i=Li(t),n=Jr(r,i);n.tag=2,e!=null&&(n.callback=e),e=Ai(t,n,i),e!==null&&(Cr(e,t,i,r),Es(e,t,i))}};function lm(t,e,r,i,n,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!Qa(r,i)||!Qa(n,a):!0}function cm(t,e,r){var i=!1,n=Ei,a=e.contextType;return typeof a=="object"&&a!==null?a=gr(a):(n=Kt(e)?$i:Dt.current,i=e.contextTypes,a=(i=i!=null)?Gn(t,n):Ei),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ds,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),e}function um(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&Ds.enqueueReplaceState(e,e.state,null)}function bu(t,e,r,i){var n=t.stateNode;n.props=r,n.state=t.memoizedState,n.refs={},cu(t);var a=e.contextType;typeof a=="object"&&a!==null?n.context=gr(a):(a=Kt(e)?$i:Dt.current,n.context=Gn(t,a)),n.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Mu(t,e,a,r),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&Ds.enqueueReplaceState(n,n.state,null),ws(t,r,n,i),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308)}function $n(t,e){try{var r="",i=e;do r+=m0(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:n,digest:null}}function Eu(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function wu(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var V_=typeof WeakMap=="function"?WeakMap:Map;function dm(t,e,r){r=Jr(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){zs||(zs=!0,zu=i),wu(t,e)},r}function hm(t,e,r){r=Jr(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;r.payload=function(){return i(n)},r.callback=function(){wu(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){wu(t,e),typeof i!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function fm(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new V_;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(r)||(n.add(r),t=ry.bind(null,t,e,r),e.then(t,t))}function pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mm(t,e,r,i,n){return t.mode&1?(t.flags|=65536,t.lanes=n,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=Jr(-1,1),e.tag=2,Ai(r,e,1))),r.lanes|=1),t)}var G_=Yr.ReactCurrentOwner,Zt=!1;function Vt(t,e,r,i){e.child=t===null?Np(e,null,r,i):Yn(e,t.child,r,i)}function gm(t,e,r,i,n){r=r.render;var a=e.ref;return Kn(e,n),i=gu(t,e,r,i,a,n),r=vu(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,ei(t,e,n)):(st&&r&&Jc(e),e.flags|=1,Vt(t,e,i,n),e.child)}function vm(t,e,r,i,n){if(t===null){var a=r.type;return typeof a=="function"&&!Xu(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,_m(t,e,a,i,n)):(t=js(r.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&n)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Qa,r(o,i)&&t.ref===e.ref)return ei(t,e,n)}return e.flags|=1,t=Ui(a,i),t.ref=e.ref,t.return=e,e.child=t}function _m(t,e,r,i,n){if(t!==null){var a=t.memoizedProps;if(Qa(a,i)&&t.ref===e.ref)if(Zt=!1,e.pendingProps=i=a,(t.lanes&n)!==0)t.flags&131072&&(Zt=!0);else return e.lanes=t.lanes,ei(t,e,n)}return Tu(t,e,r,i,n)}function ym(t,e,r){var i=e.pendingProps,n=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Jn,lr),lr|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(Jn,lr),lr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,tt(Jn,lr),lr|=i}else a!==null?(i=a.baseLanes|r,e.memoizedState=null):i=r,tt(Jn,lr),lr|=i;return Vt(t,e,n,r),e.child}function xm(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Tu(t,e,r,i,n){var a=Kt(r)?$i:Dt.current;return a=Gn(e,a),Kn(e,n),r=gu(t,e,r,i,a,n),i=vu(),t!==null&&!Zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,ei(t,e,n)):(st&&i&&Jc(e),e.flags|=1,Vt(t,e,r,n),e.child)}function Sm(t,e,r,i,n){if(Kt(r)){var a=!0;gs(e)}else a=!1;if(Kn(e,n),e.stateNode===null)Is(t,e),cm(e,r,i),bu(e,r,i,n),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=gr(c):(c=Kt(r)?$i:Dt.current,c=Gn(e,c));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==c)&&um(e,o,i,c),Ti=!1;var h=e.memoizedState;o.state=h,ws(e,i,o,n),l=e.memoizedState,s!==i||h!==l||qt.current||Ti?(typeof d=="function"&&(Mu(e,r,d,i),l=e.memoizedState),(s=Ti||lm(e,r,s,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,kp(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:Tr(e.type,s),o.props=c,f=e.pendingProps,h=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=gr(l):(l=Kt(r)?$i:Dt.current,l=Gn(e,l));var m=r.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==l)&&um(e,o,i,l),Ti=!1,h=e.memoizedState,o.state=h,ws(e,i,o,n);var _=e.memoizedState;s!==f||h!==_||qt.current||Ti?(typeof m=="function"&&(Mu(e,r,m,i),_=e.memoizedState),(c=Ti||lm(e,r,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Au(t,e,r,i,a,n)}function Au(t,e,r,i,n,a){xm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return n&&Tp(e,r,!1),ei(t,e,a);i=e.stateNode,G_.current=e;var s=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Yn(e,t.child,null,a),e.child=Yn(e,null,s,a)):Vt(t,e,s,a),e.memoizedState=i.state,n&&Tp(e,r,!0),e.child}function Mm(t){var e=t.stateNode;e.pendingContext?Ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ep(t,e.context,!1),uu(t,e.containerInfo)}function bm(t,e,r,i,n){return Xn(),iu(n),e.flags|=256,Vt(t,e,r,i),e.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Cu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Em(t,e,r){var i=e.pendingProps,n=ut.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(n&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(n|=1),tt(ut,n&1),t===null)return ru(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Xs(o,i,0,null),t=ln(t,i,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Cu(r),e.memoizedState=Ru,t):Pu(e,o));if(n=t.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return W_(t,e,o,i,s,n,r);if(a){a=i.fallback,o=e.mode,n=t.child,s=n.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==n?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ui(n,l),i.subtreeFlags=n.subtreeFlags&14680064),s!==null?a=Ui(s,a):(a=ln(a,o,r,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?Cu(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~r,e.memoizedState=Ru,i}return a=t.child,t=a.sibling,i=Ui(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Pu(t,e){return e=Xs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Us(t,e,r,i){return i!==null&&iu(i),Yn(e,t.child,null,r),t=Pu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function W_(t,e,r,i,n,a,o){if(r)return e.flags&256?(e.flags&=-257,i=Eu(Error(ie(422))),Us(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,n=e.mode,i=Xs({mode:"visible",children:i.children},n,0,null),a=ln(a,n,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Yn(e,t.child,null,o),e.child.memoizedState=Cu(o),e.memoizedState=Ru,a);if(!(e.mode&1))return Us(t,e,o,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(ie(419)),i=Eu(a,i,void 0),Us(t,e,o,i)}if(s=(o&t.childLanes)!==0,Zt||s){if(i=At,i!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|o)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,Qr(t,n),Cr(i,t,n,-1))}return ju(),i=Eu(Error(ie(421))),Us(t,e,o,i)}return n.data==="$?"?(e.flags|=128,e.child=t.child,e=iy.bind(null,t),n._reactRetry=e,null):(t=a.treeContext,sr=Mi(n.nextSibling),or=e,st=!0,wr=null,t!==null&&(pr[mr++]=Zr,pr[mr++]=$r,pr[mr++]=Qi,Zr=t.id,$r=t.overflow,Qi=e),e=Pu(e,i.children),e.flags|=4096,e)}function wm(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),su(t.return,e,r)}function Lu(t,e,r,i,n){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function Tm(t,e,r){var i=e.pendingProps,n=i.revealOrder,a=i.tail;if(Vt(t,e,i.children,r),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wm(t,r,e);else if(t.tag===19)wm(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(r=e.child,n=null;r!==null;)t=r.alternate,t!==null&&Ts(t)===null&&(n=r),r=r.sibling;r=n,r===null?(n=e.child,e.child=null):(n=r.sibling,r.sibling=null),Lu(e,!1,n,r,a);break;case"backwards":for(r=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Ts(t)===null){e.child=n;break}t=n.sibling,n.sibling=r,r=n,n=t}Lu(e,!0,r,null,a);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Is(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ei(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),nn|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,r=Ui(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Ui(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function j_(t,e,r){switch(e.tag){case 3:Mm(e),Xn();break;case 5:Bp(e);break;case 1:Kt(e.type)&&gs(e);break;case 4:uu(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,n=e.memoizedProps.value;tt(Ms,i._currentValue),i._currentValue=n;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ut,ut.current&1),e.flags|=128,null):r&e.child.childLanes?Em(t,e,r):(tt(ut,ut.current&1),t=ei(t,e,r),t!==null?t.sibling:null);tt(ut,ut.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return Tm(t,e,r);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,ym(t,e,r)}return ei(t,e,r)}var Am,Du,Rm,Cm;Am=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Du=function(){},Rm=function(t,e,r,i){var n=t.memoizedProps;if(n!==i){t=e.stateNode,tn(Fr.current);var a=null;switch(r){case"input":n=sc(t,n),i=sc(t,i),a=[];break;case"select":n=ct({},n,{value:void 0}),i=ct({},i,{value:void 0}),a=[];break;case"textarea":n=uc(t,n),i=uc(t,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fs)}hc(r,i);var o;r=null;for(c in n)if(!i.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var s=n[c];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(La.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(s=n==null?void 0:n[c],i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(La.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),a||s===l||(a=[])):(a=a||[]).push(c,l))}r&&(a=a||[]).push("style",r);var c=a;(e.updateQueue=c)&&(e.flags|=4)}},Cm=function(t,e,r,i){r!==i&&(e.flags|=4)};function po(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function It(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function X_(t,e,r){var i=e.pendingProps;switch(eu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(e),null;case 1:return Kt(e.type)&&ms(),It(e),null;case 3:return i=e.stateNode,Zn(),nt(qt),nt(Dt),fu(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wr!==null&&(Vu(wr),wr=null))),Du(t,e),It(e),null;case 5:du(e);var n=tn(lo.current);if(r=e.type,t!==null&&e.stateNode!=null)Rm(t,e,r,i,n),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return It(e),null}if(t=tn(Fr.current),xs(e)){i=e.stateNode,r=e.type;var a=e.memoizedProps;switch(i[kr]=e,i[io]=a,t=(e.mode&1)!==0,r){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(n=0;n<eo.length;n++)it(eo[n],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":cf(i,a),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},it("invalid",i);break;case"textarea":hf(i,a),it("invalid",i)}hc(r,a),n=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&hs(i.textContent,s,t),n=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&hs(i.textContent,s,t),n=["children",""+s]):La.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&it("scroll",i)}switch(r){case"input":Go(i),df(i,a,!0);break;case"textarea":Go(i),pf(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=fs)}i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mf(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(r,{is:i.is}):(t=o.createElement(r),r==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,r),t[kr]=e,t[io]=i,Am(t,e,!1,!1),e.stateNode=t;e:{switch(o=fc(r,i),r){case"dialog":it("cancel",t),it("close",t),n=i;break;case"iframe":case"object":case"embed":it("load",t),n=i;break;case"video":case"audio":for(n=0;n<eo.length;n++)it(eo[n],t);n=i;break;case"source":it("error",t),n=i;break;case"img":case"image":case"link":it("error",t),it("load",t),n=i;break;case"details":it("toggle",t),n=i;break;case"input":cf(t,i),n=sc(t,i),it("invalid",t);break;case"option":n=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},n=ct({},i,{value:void 0}),it("invalid",t);break;case"textarea":hf(t,i),n=uc(t,i),it("invalid",t);break;default:n=i}hc(r,n),s=n;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?_f(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gf(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Na(t,l):typeof l=="number"&&Na(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(La.hasOwnProperty(a)?l!=null&&a==="onScroll"&&it("scroll",t):l!=null&&Zl(t,a,l,o))}switch(r){case"input":Go(t),df(t,i,!1);break;case"textarea":Go(t),pf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+mi(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Ln(t,!!i.multiple,a,!1):i.defaultValue!=null&&Ln(t,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(t.onclick=fs)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return It(e),null;case 6:if(t&&e.stateNode!=null)Cm(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(r=tn(lo.current),tn(Fr.current),xs(e)){if(i=e.stateNode,r=e.memoizedProps,i[kr]=e,(a=i.nodeValue!==r)&&(t=or,t!==null))switch(t.tag){case 3:hs(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hs(i.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[kr]=e,e.stateNode=i}return It(e),null;case 13:if(nt(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&sr!==null&&e.mode&1&&!(e.flags&128))Dp(),Xn(),e.flags|=98560,a=!1;else if(a=xs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ie(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ie(317));a[kr]=e}else Xn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;It(e),a=!1}else wr!==null&&(Vu(wr),wr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?bt===0&&(bt=3):ju())),e.updateQueue!==null&&(e.flags|=4),It(e),null);case 4:return Zn(),Du(t,e),t===null&&to(e.stateNode.containerInfo),It(e),null;case 10:return ou(e.type._context),It(e),null;case 17:return Kt(e.type)&&ms(),It(e),null;case 19:if(nt(ut),a=e.memoizedState,a===null)return It(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)po(a,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ts(t),o!==null){for(e.flags|=128,po(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)a=r,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return tt(ut,ut.current&1|2),e.child}t=t.sibling}a.tail!==null&&mt()>ea&&(e.flags|=128,i=!0,po(a,!1),e.lanes=4194304)}else{if(!i)if(t=Ts(o),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),po(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!st)return It(e),null}else 2*mt()-a.renderingStartTime>ea&&r!==1073741824&&(e.flags|=128,i=!0,po(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(r=a.last,r!==null?r.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=mt(),e.sibling=null,r=ut.current,tt(ut,i?r&1|2:r&1),e):(It(e),null);case 22:case 23:return Wu(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?lr&1073741824&&(It(e),e.subtreeFlags&6&&(e.flags|=8192)):It(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Y_(t,e){switch(eu(e),e.tag){case 1:return Kt(e.type)&&ms(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zn(),nt(qt),nt(Dt),fu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return du(e),null;case 13:if(nt(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Xn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ut),null;case 4:return Zn(),null;case 10:return ou(e.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}var Ns=!1,Nt=!1,q_=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Qn(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){ht(t,e,i)}else r.current=null}function Pm(t,e,r){try{r()}catch(i){ht(t,e,i)}}var Lm=!1;function K_(t,e){if(jc=ts,t=lp(),kc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var m;f!==r||n!==0&&f.nodeType!==3||(s=o+n),f!==a||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===r&&++c===n&&(s=o),h===a&&++d===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Xc={focusedElem:t,selectionRange:r},ts=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Tr(e.type,S),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){ht(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=Lm,Lm=!1,_}function mo(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&t)===t){var a=n.destroy;n.destroy=void 0,a!==void 0&&Pm(e,r,a)}n=n.next}while(n!==i)}}function Os(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function Uu(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Dm(t){var e=t.alternate;e!==null&&(t.alternate=null,Dm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[kr],delete e[io],delete e[Zc],delete e[L_],delete e[D_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Um(t){return t.tag===5||t.tag===3||t.tag===4}function Im(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Um(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Iu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=fs));else if(i!==4&&(t=t.child,t!==null))for(Iu(t,e,r),t=t.sibling;t!==null;)Iu(t,e,r),t=t.sibling}function Nu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nu(t,e,r),t=t.sibling;t!==null;)Nu(t,e,r),t=t.sibling}var Pt=null,Ar=!1;function Ri(t,e,r){for(r=r.child;r!==null;)Nm(t,e,r),r=r.sibling}function Nm(t,e,r){if(Or&&typeof Or.onCommitFiberUnmount=="function")try{Or.onCommitFiberUnmount(Ko,r)}catch{}switch(r.tag){case 5:Nt||Qn(r,e);case 6:var i=Pt,n=Ar;Pt=null,Ri(t,e,r),Pt=i,Ar=n,Pt!==null&&(Ar?(t=Pt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Pt.removeChild(r.stateNode));break;case 18:Pt!==null&&(Ar?(t=Pt,r=r.stateNode,t.nodeType===8?Kc(t.parentNode,r):t.nodeType===1&&Kc(t,r),Xa(t)):Kc(Pt,r.stateNode));break;case 4:i=Pt,n=Ar,Pt=r.stateNode.containerInfo,Ar=!0,Ri(t,e,r),Pt=i,Ar=n;break;case 0:case 11:case 14:case 15:if(!Nt&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&Pm(r,e,o),n=n.next}while(n!==i)}Ri(t,e,r);break;case 1:if(!Nt&&(Qn(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(s){ht(r,e,s)}Ri(t,e,r);break;case 21:Ri(t,e,r);break;case 22:r.mode&1?(Nt=(i=Nt)||r.memoizedState!==null,Ri(t,e,r),Nt=i):Ri(t,e,r);break;default:Ri(t,e,r)}}function Om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new q_),e.forEach(function(i){var n=ny.bind(null,t,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Rr(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Pt=s.stateNode,Ar=!1;break e;case 3:Pt=s.stateNode.containerInfo,Ar=!0;break e;case 4:Pt=s.stateNode.containerInfo,Ar=!0;break e}s=s.return}if(Pt===null)throw Error(ie(160));Nm(a,o,n),Pt=null,Ar=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(c){ht(n,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)km(e,t),e=e.sibling}function km(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Rr(e,t),Br(t),i&4){try{mo(3,t,t.return),Os(3,t)}catch(S){ht(t,t.return,S)}try{mo(5,t,t.return)}catch(S){ht(t,t.return,S)}}break;case 1:Rr(e,t),Br(t),i&512&&r!==null&&Qn(r,r.return);break;case 5:if(Rr(e,t),Br(t),i&512&&r!==null&&Qn(r,r.return),t.flags&32){var n=t.stateNode;try{Na(n,"")}catch(S){ht(t,t.return,S)}}if(i&4&&(n=t.stateNode,n!=null)){var a=t.memoizedProps,o=r!==null?r.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&uf(n,a),fc(s,o);var c=fc(s,a);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?_f(n,f):d==="dangerouslySetInnerHTML"?gf(n,f):d==="children"?Na(n,f):Zl(n,d,f,c)}switch(s){case"input":lc(n,a);break;case"textarea":ff(n,a);break;case"select":var h=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?Ln(n,!!a.multiple,m,!1):h!==!!a.multiple&&(a.defaultValue!=null?Ln(n,!!a.multiple,a.defaultValue,!0):Ln(n,!!a.multiple,a.multiple?[]:"",!1))}n[io]=a}catch(S){ht(t,t.return,S)}}break;case 6:if(Rr(e,t),Br(t),i&4){if(t.stateNode===null)throw Error(ie(162));n=t.stateNode,a=t.memoizedProps;try{n.nodeValue=a}catch(S){ht(t,t.return,S)}}break;case 3:if(Rr(e,t),Br(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(S){ht(t,t.return,S)}break;case 4:Rr(e,t),Br(t);break;case 13:Rr(e,t),Br(t),n=t.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(Fu=mt())),i&4&&Om(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Nt=(c=Nt)||d,Rr(e,t),Nt=c):Rr(e,t),Br(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(f=ge=d;ge!==null;){switch(h=ge,m=h.child,h.tag){case 0:case 11:case 14:case 15:mo(4,h,h.return);break;case 1:Qn(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,r=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){ht(i,r,S)}}break;case 5:Qn(h,h.return);break;case 22:if(h.memoizedState!==null){Bm(f);continue}}m!==null?(m.return=h,ge=m):Bm(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{n=f.stateNode,c?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=vf("display",o))}catch(S){ht(t,t.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){ht(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Rr(e,t),Br(t),i&4&&Om(t);break;case 21:break;default:Rr(e,t),Br(t)}}function Br(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Um(r)){var i=r;break e}r=r.return}throw Error(ie(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(Na(n,""),i.flags&=-33);var a=Im(t);Nu(t,a,n);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Im(t);Iu(t,s,o);break;default:throw Error(ie(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Z_(t,e,r){ge=t,Fm(t)}function Fm(t,e,r){for(var i=(t.mode&1)!==0;ge!==null;){var n=ge,a=n.child;if(n.tag===22&&i){var o=n.memoizedState!==null||Ns;if(!o){var s=n.alternate,l=s!==null&&s.memoizedState!==null||Nt;s=Ns;var c=Nt;if(Ns=o,(Nt=l)&&!c)for(ge=n;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Hm(n):l!==null?(l.return=o,ge=l):Hm(n);for(;a!==null;)ge=a,Fm(a),a=a.sibling;ge=n,Ns=s,Nt=c}zm(t)}else n.subtreeFlags&8772&&a!==null?(a.return=n,ge=a):zm(t)}}function zm(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Nt||Os(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Nt)if(r===null)i.componentDidMount();else{var n=e.elementType===e.type?r.memoizedProps:Tr(e.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&zp(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}zp(e,o,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Xa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Nt||e.flags&512&&Uu(e)}catch(h){ht(e,e.return,h)}}if(e===t){ge=null;break}if(r=e.sibling,r!==null){r.return=e.return,ge=r;break}ge=e.return}}function Bm(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var r=e.sibling;if(r!==null){r.return=e.return,ge=r;break}ge=e.return}}function Hm(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Os(4,e)}catch(l){ht(e,r,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var n=e.return;try{i.componentDidMount()}catch(l){ht(e,n,l)}}var a=e.return;try{Uu(e)}catch(l){ht(e,a,l)}break;case 5:var o=e.return;try{Uu(e)}catch(l){ht(e,o,l)}}}catch(l){ht(e,e.return,l)}if(e===t){ge=null;break}var s=e.sibling;if(s!==null){s.return=e.return,ge=s;break}ge=e.return}}var $_=Math.ceil,ks=Yr.ReactCurrentDispatcher,Ou=Yr.ReactCurrentOwner,_r=Yr.ReactCurrentBatchConfig,je=0,At=null,yt=null,Lt=0,lr=0,Jn=bi(0),bt=0,go=null,nn=0,Fs=0,ku=0,vo=null,$t=null,Fu=0,ea=1/0,ti=null,zs=!1,zu=null,Ci=null,Bs=!1,Pi=null,Hs=0,_o=0,Bu=null,Vs=-1,Gs=0;function Gt(){return je&6?mt():Vs!==-1?Vs:Vs=mt()}function Li(t){return t.mode&1?je&2&&Lt!==0?Lt&-Lt:I_.transition!==null?(Gs===0&&(Gs=Uf()),Gs):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Vf(t.type)),t):1}function Cr(t,e,r,i){if(50<_o)throw _o=0,Bu=null,Error(ie(185));Ha(t,r,i),(!(je&2)||t!==At)&&(t===At&&(!(je&2)&&(Fs|=r),bt===4&&Di(t,Lt)),Qt(t,i),r===1&&je===0&&!(e.mode&1)&&(ea=mt()+500,vs&&wi()))}function Qt(t,e){var r=t.callbackNode;I0(t,e);var i=Qo(t,t===At?Lt:0);if(i===0)r!==null&&Pf(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&Pf(r),e===1)t.tag===0?U_(Gm.bind(null,t)):Ap(Gm.bind(null,t)),C_(function(){!(je&6)&&wi()}),r=null;else{switch(If(i)){case 1:r=xc;break;case 4:r=Lf;break;case 16:r=qo;break;case 536870912:r=Df;break;default:r=qo}r=$m(r,Vm.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Vm(t,e){if(Vs=-1,Gs=0,je&6)throw Error(ie(327));var r=t.callbackNode;if(ta()&&t.callbackNode!==r)return null;var i=Qo(t,t===At?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ws(t,i);else{e=i;var n=je;je|=2;var a=jm();(At!==t||Lt!==e)&&(ti=null,ea=mt()+500,on(t,e));do try{ey();break}catch(s){Wm(t,s)}while(!0);au(),ks.current=a,je=n,yt!==null?e=0:(At=null,Lt=0,e=bt)}if(e!==0){if(e===2&&(n=Sc(t),n!==0&&(i=n,e=Hu(t,n))),e===1)throw r=go,on(t,0),Di(t,i),Qt(t,mt()),r;if(e===6)Di(t,i);else{if(n=t.current.alternate,!(i&30)&&!Q_(n)&&(e=Ws(t,i),e===2&&(a=Sc(t),a!==0&&(i=a,e=Hu(t,a))),e===1))throw r=go,on(t,0),Di(t,i),Qt(t,mt()),r;switch(t.finishedWork=n,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:sn(t,$t,ti);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=Fu+500-mt(),10<e)){if(Qo(t,0)!==0)break;if(n=t.suspendedLanes,(n&i)!==i){Gt(),t.pingedLanes|=t.suspendedLanes&n;break}t.timeoutHandle=qc(sn.bind(null,t,$t,ti),e);break}sn(t,$t,ti);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,n=-1;0<i;){var o=31-br(i);a=1<<o,o=e[o],o>n&&(n=o),i&=~a}if(i=n,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$_(i/1960))-i,10<i){t.timeoutHandle=qc(sn.bind(null,t,$t,ti),i);break}sn(t,$t,ti);break;case 5:sn(t,$t,ti);break;default:throw Error(ie(329))}}}return Qt(t,mt()),t.callbackNode===r?Vm.bind(null,t):null}function Hu(t,e){var r=vo;return t.current.memoizedState.isDehydrated&&(on(t,e).flags|=256),t=Ws(t,e),t!==2&&(e=$t,$t=r,e!==null&&Vu(e)),t}function Vu(t){$t===null?$t=t:$t.push.apply($t,t)}function Q_(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!Er(a(),n))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~ku,e&=~Fs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-br(e),i=1<<r;t[r]=-1,e&=~i}}function Gm(t){if(je&6)throw Error(ie(327));ta();var e=Qo(t,0);if(!(e&1))return Qt(t,mt()),null;var r=Ws(t,e);if(t.tag!==0&&r===2){var i=Sc(t);i!==0&&(e=i,r=Hu(t,i))}if(r===1)throw r=go,on(t,0),Di(t,e),Qt(t,mt()),r;if(r===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sn(t,$t,ti),Qt(t,mt()),null}function Gu(t,e){var r=je;je|=1;try{return t(e)}finally{je=r,je===0&&(ea=mt()+500,vs&&wi())}}function an(t){Pi!==null&&Pi.tag===0&&!(je&6)&&ta();var e=je;je|=1;var r=_r.transition,i=Ke;try{if(_r.transition=null,Ke=1,t)return t()}finally{Ke=i,_r.transition=r,je=e,!(je&6)&&wi()}}function Wu(){lr=Jn.current,nt(Jn)}function on(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,R_(r)),yt!==null)for(r=yt.return;r!==null;){var i=r;switch(eu(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ms();break;case 3:Zn(),nt(qt),nt(Dt),fu();break;case 5:du(i);break;case 4:Zn();break;case 13:nt(ut);break;case 19:nt(ut);break;case 10:ou(i.type._context);break;case 22:case 23:Wu()}r=r.return}if(At=t,yt=t=Ui(t.current,null),Lt=lr=e,bt=0,go=null,ku=Fs=nn=0,$t=vo=null,en!==null){for(e=0;e<en.length;e++)if(r=en[e],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=n,i.next=o}r.pending=i}en=null}return t}function Wm(t,e){do{var r=yt;try{if(au(),As.current=Ls,Rs){for(var i=dt.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}Rs=!1}if(rn=0,Tt=Mt=dt=null,co=!1,uo=0,Ou.current=null,r===null||r.return===null){bt=1,go=e,yt=null;break}e:{var a=t,o=r.return,s=r,l=e;if(e=Lt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=pm(o);if(m!==null){m.flags&=-257,mm(m,o,s,a,e),m.mode&1&&fm(a,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){fm(a,c,e),ju();break e}l=Error(ie(426))}}else if(st&&s.mode&1){var p=pm(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),mm(p,o,s,a,e),iu($n(l,s));break e}}a=l=$n(l,s),bt!==4&&(bt=2),vo===null?vo=[a]:vo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var u=dm(a,l,e);Fp(a,u);break e;case 1:s=l;var v=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ci===null||!Ci.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var M=hm(a,s,e);Fp(a,M);break e}}a=a.return}while(a!==null)}Ym(r)}catch(C){e=C,yt===r&&r!==null&&(yt=r=r.return);continue}break}while(!0)}function jm(){var t=ks.current;return ks.current=Ls,t===null?Ls:t}function ju(){(bt===0||bt===3||bt===2)&&(bt=4),At===null||!(nn&268435455)&&!(Fs&268435455)||Di(At,Lt)}function Ws(t,e){var r=je;je|=2;var i=jm();(At!==t||Lt!==e)&&(ti=null,on(t,e));do try{J_();break}catch(n){Wm(t,n)}while(!0);if(au(),je=r,ks.current=i,yt!==null)throw Error(ie(261));return At=null,Lt=0,bt}function J_(){for(;yt!==null;)Xm(yt)}function ey(){for(;yt!==null&&!w0();)Xm(yt)}function Xm(t){var e=Zm(t.alternate,t,lr);t.memoizedProps=t.pendingProps,e===null?Ym(t):yt=e,Ou.current=null}function Ym(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=Y_(r,e),r!==null){r.flags&=32767,yt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,yt=null;return}}else if(r=X_(r,e,lr),r!==null){yt=r;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);bt===0&&(bt=5)}function sn(t,e,r){var i=Ke,n=_r.transition;try{_r.transition=null,Ke=1,ty(t,e,r,i)}finally{_r.transition=n,Ke=i}return null}function ty(t,e,r,i){do ta();while(Pi!==null);if(je&6)throw Error(ie(327));r=t.finishedWork;var n=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(N0(t,a),t===At&&(yt=At=null,Lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Bs||(Bs=!0,$m(qo,function(){return ta(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=_r.transition,_r.transition=null;var o=Ke;Ke=1;var s=je;je|=4,Ou.current=null,K_(t,r),km(r,t),S_(Xc),ts=!!jc,Xc=jc=null,t.current=r,Z_(r),T0(),je=s,Ke=o,_r.transition=a}else t.current=r;if(Bs&&(Bs=!1,Pi=t,Hs=n),a=t.pendingLanes,a===0&&(Ci=null),C0(r.stateNode),Qt(t,mt()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)n=e[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(zs)throw zs=!1,t=zu,zu=null,t;return Hs&1&&t.tag!==0&&ta(),a=t.pendingLanes,a&1?t===Bu?_o++:(_o=0,Bu=t):_o=0,wi(),null}function ta(){if(Pi!==null){var t=If(Hs),e=_r.transition,r=Ke;try{if(_r.transition=null,Ke=16>t?16:t,Pi===null)var i=!1;else{if(t=Pi,Pi=null,Hs=0,je&6)throw Error(ie(331));var n=je;for(je|=4,ge=t.current;ge!==null;){var a=ge,o=a.child;if(ge.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(ge=c;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:mo(8,d,a)}var f=d.child;if(f!==null)f.return=d,ge=f;else for(;ge!==null;){d=ge;var h=d.sibling,m=d.return;if(Dm(d),d===c){ge=null;break}if(h!==null){h.return=m,ge=h;break}ge=m}}}var _=a.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var p=S.sibling;S.sibling=null,S=p}while(S!==null)}}ge=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,ge=o;else e:for(;ge!==null;){if(a=ge,a.flags&2048)switch(a.tag){case 0:case 11:case 15:mo(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,ge=u;break e}ge=a.return}}var v=t.current;for(ge=v;ge!==null;){o=ge;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,ge=g;else e:for(o=v;ge!==null;){if(s=ge,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Os(9,s)}}catch(C){ht(s,s.return,C)}if(s===o){ge=null;break e}var M=s.sibling;if(M!==null){M.return=s.return,ge=M;break e}ge=s.return}}if(je=n,wi(),Or&&typeof Or.onPostCommitFiberRoot=="function")try{Or.onPostCommitFiberRoot(Ko,t)}catch{}i=!0}return i}finally{Ke=r,_r.transition=e}}return!1}function qm(t,e,r){e=$n(r,e),e=dm(t,e,1),t=Ai(t,e,1),e=Gt(),t!==null&&(Ha(t,1,e),Qt(t,e))}function ht(t,e,r){if(t.tag===3)qm(t,t,r);else for(;e!==null;){if(e.tag===3){qm(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ci===null||!Ci.has(i))){t=$n(r,t),t=hm(e,t,1),e=Ai(e,t,1),t=Gt(),e!==null&&(Ha(e,1,t),Qt(e,t));break}}e=e.return}}function ry(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=Gt(),t.pingedLanes|=t.suspendedLanes&r,At===t&&(Lt&r)===r&&(bt===4||bt===3&&(Lt&130023424)===Lt&&500>mt()-Fu?on(t,0):ku|=r),Qt(t,e)}function Km(t,e){e===0&&(t.mode&1?(e=$o,$o<<=1,!($o&130023424)&&($o=4194304)):e=1);var r=Gt();t=Qr(t,e),t!==null&&(Ha(t,e,r),Qt(t,r))}function iy(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),Km(t,r)}function ny(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),Km(t,r)}var Zm;Zm=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Zt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return Zt=!1,j_(t,e,r);Zt=!!(t.flags&131072)}else Zt=!1,st&&e.flags&1048576&&Rp(e,ys,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Is(t,e),t=e.pendingProps;var n=Gn(e,Dt.current);Kn(e,r),n=gu(null,e,i,t,n,r);var a=vu();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Kt(i)?(a=!0,gs(e)):a=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,cu(e),n.updater=Ds,e.stateNode=n,n._reactInternals=e,bu(e,i,t,r),e=Au(null,e,i,!0,a,r)):(e.tag=0,st&&a&&Jc(e),Vt(null,e,n,r),e=e.child),e;case 16:i=e.elementType;e:{switch(Is(t,e),t=e.pendingProps,n=i._init,i=n(i._payload),e.type=i,n=e.tag=oy(i),t=Tr(i,t),n){case 0:e=Tu(null,e,i,t,r);break e;case 1:e=Sm(null,e,i,t,r);break e;case 11:e=gm(null,e,i,t,r);break e;case 14:e=vm(null,e,i,Tr(i.type,t),r);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Tr(i,n),Tu(t,e,i,n,r);case 1:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Tr(i,n),Sm(t,e,i,n,r);case 3:e:{if(Mm(e),t===null)throw Error(ie(387));i=e.pendingProps,a=e.memoizedState,n=a.element,kp(t,e),ws(e,i,null,r);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){n=$n(Error(ie(423)),e),e=bm(t,e,i,r,n);break e}else if(i!==n){n=$n(Error(ie(424)),e),e=bm(t,e,i,r,n);break e}else for(sr=Mi(e.stateNode.containerInfo.firstChild),or=e,st=!0,wr=null,r=Np(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Xn(),i===n){e=ei(t,e,r);break e}Vt(t,e,i,r)}e=e.child}return e;case 5:return Bp(e),t===null&&ru(e),i=e.type,n=e.pendingProps,a=t!==null?t.memoizedProps:null,o=n.children,Yc(i,n)?o=null:a!==null&&Yc(i,a)&&(e.flags|=32),xm(t,e),Vt(t,e,o,r),e.child;case 6:return t===null&&ru(e),null;case 13:return Em(t,e,r);case 4:return uu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Yn(e,null,i,r):Vt(t,e,i,r),e.child;case 11:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Tr(i,n),gm(t,e,i,n,r);case 7:return Vt(t,e,e.pendingProps,r),e.child;case 8:return Vt(t,e,e.pendingProps.children,r),e.child;case 12:return Vt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,n=e.pendingProps,a=e.memoizedProps,o=n.value,tt(Ms,i._currentValue),i._currentValue=o,a!==null)if(Er(a.value,o)){if(a.children===n.children&&!qt.current){e=ei(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Jr(-1,r&-r),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),su(a.return,r,e),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(ie(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),su(o,r,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Vt(t,e,n.children,r),e=e.child}return e;case 9:return n=e.type,i=e.pendingProps.children,Kn(e,r),n=gr(n),i=i(n),e.flags|=1,Vt(t,e,i,r),e.child;case 14:return i=e.type,n=Tr(i,e.pendingProps),n=Tr(i.type,n),vm(t,e,i,n,r);case 15:return _m(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Tr(i,n),Is(t,e),e.tag=1,Kt(i)?(t=!0,gs(e)):t=!1,Kn(e,r),cm(e,i,n),bu(e,i,n,r),Au(null,e,i,!0,t,r);case 19:return Tm(t,e,r);case 22:return ym(t,e,r)}throw Error(ie(156,e.tag))};function $m(t,e){return Cf(t,e)}function ay(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yr(t,e,r,i){return new ay(t,e,r,i)}function Xu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oy(t){if(typeof t=="function")return Xu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jl)return 11;if(t===rc)return 14}return 2}function Ui(t,e){var r=t.alternate;return r===null?(r=yr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function js(t,e,r,i,n,a){var o=2;if(i=t,typeof t=="function")Xu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Pn:return ln(r.children,n,a,e);case $l:o=8,n|=8;break;case Ql:return t=yr(12,r,e,n|2),t.elementType=Ql,t.lanes=a,t;case ec:return t=yr(13,r,e,n),t.elementType=ec,t.lanes=a,t;case tc:return t=yr(19,r,e,n),t.elementType=tc,t.lanes=a,t;case af:return Xs(r,n,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rf:o=10;break e;case nf:o=9;break e;case Jl:o=11;break e;case rc:o=14;break e;case pi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=yr(o,r,e,n),e.elementType=t,e.type=i,e.lanes=a,e}function ln(t,e,r,i){return t=yr(7,t,i,e),t.lanes=r,t}function Xs(t,e,r,i){return t=yr(22,t,i,e),t.elementType=af,t.lanes=r,t.stateNode={isHidden:!1},t}function Yu(t,e,r){return t=yr(6,t,null,e),t.lanes=r,t}function qu(t,e,r){return e=yr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sy(t,e,r,i,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Ku(t,e,r,i,n,a,o,s,l){return t=new sy(t,e,r,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=yr(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(a),t}function ly(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cn,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function Qm(t){if(!t)return Ei;t=t._reactInternals;e:{if(Ki(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Kt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var r=t.type;if(Kt(r))return wp(t,r,e)}return e}function Jm(t,e,r,i,n,a,o,s,l){return t=Ku(r,i,!0,t,n,a,o,s,l),t.context=Qm(null),r=t.current,i=Gt(),n=Li(r),a=Jr(i,n),a.callback=e??null,Ai(r,a,n),t.current.lanes=n,Ha(t,n,i),Qt(t,i),t}function Ys(t,e,r,i){var n=e.current,a=Gt(),o=Li(n);return r=Qm(r),e.context===null?e.context=r:e.pendingContext=r,e=Jr(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ai(n,e,o),t!==null&&(Cr(t,n,o,a),Es(t,n,o)),o}function qs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Zu(t,e){eg(t,e),(t=t.alternate)&&eg(t,e)}function cy(){return null}var tg=typeof reportError=="function"?reportError:function(t){console.error(t)};function $u(t){this._internalRoot=t}Ks.prototype.render=$u.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Ys(t,e,null,null)},Ks.prototype.unmount=$u.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;an(function(){Ys(null,t,null,null)}),e[qr]=null}};function Ks(t){this._internalRoot=t}Ks.prototype.unstable_scheduleHydration=function(t){if(t){var e=kf();t={blockedOn:null,target:t,priority:e};for(var r=0;r<yi.length&&e!==0&&e<yi[r].priority;r++);yi.splice(r,0,t),r===0&&Bf(t)}};function Qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rg(){}function uy(t,e,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var c=qs(o);a.call(c)}}var o=Jm(e,i,t,0,null,!1,!1,"",rg);return t._reactRootContainer=o,t[qr]=o.current,to(t.nodeType===8?t.parentNode:t),an(),o}for(;n=t.lastChild;)t.removeChild(n);if(typeof i=="function"){var s=i;i=function(){var c=qs(l);s.call(c)}}var l=Ku(t,0,!1,null,null,!1,!1,"",rg);return t._reactRootContainer=l,t[qr]=l.current,to(t.nodeType===8?t.parentNode:t),an(function(){Ys(e,l,r,i)}),l}function $s(t,e,r,i,n){var a=r._reactRootContainer;if(a){var o=a;if(typeof n=="function"){var s=n;n=function(){var l=qs(o);s.call(l)}}Ys(e,o,t,n)}else o=uy(r,e,t,n,i);return qs(o)}Nf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ba(e.pendingLanes);r!==0&&(bc(e,r|1),Qt(e,mt()),!(je&6)&&(ea=mt()+500,wi()))}break;case 13:an(function(){var i=Qr(t,1);if(i!==null){var n=Gt();Cr(i,t,1,n)}}),Zu(t,1)}},Ec=function(t){if(t.tag===13){var e=Qr(t,134217728);if(e!==null){var r=Gt();Cr(e,t,134217728,r)}Zu(t,134217728)}},Of=function(t){if(t.tag===13){var e=Li(t),r=Qr(t,e);if(r!==null){var i=Gt();Cr(r,t,e,i)}Zu(t,e)}},kf=function(){return Ke},Ff=function(t,e){var r=Ke;try{return Ke=t,e()}finally{Ke=r}},gc=function(t,e,r){switch(e){case"input":if(lc(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var n=ps(i);if(!n)throw Error(ie(90));lf(i),lc(i,n)}}}break;case"textarea":ff(t,r);break;case"select":e=r.value,e!=null&&Ln(t,!!r.multiple,e,!1)}},Mf=Gu,bf=an;var dy={usingClientEntryPoint:!1,Events:[no,Hn,ps,xf,Sf,Gu]},yo={findFiberByHostInstance:Zi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hy={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Af(t),t===null?null:t.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||cy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qs.isDisabled&&Qs.supportsFiber)try{Ko=Qs.inject(hy),Or=Qs}catch{}}ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dy,ir.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(e))throw Error(ie(200));return ly(t,e,null,r)},ir.createRoot=function(t,e){if(!Qu(t))throw Error(ie(299));var r=!1,i="",n=tg;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=Ku(t,1,!1,null,null,r,!1,i,n),t[qr]=e.current,to(t.nodeType===8?t.parentNode:t),new $u(e)},ir.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Af(e),t=t===null?null:t.stateNode,t},ir.flushSync=function(t){return an(t)},ir.hydrate=function(t,e,r){if(!Zs(e))throw Error(ie(200));return $s(null,t,e,!0,r)},ir.hydrateRoot=function(t,e,r){if(!Qu(t))throw Error(ie(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",o=tg;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=Jm(e,null,t,1,r??null,n,!1,a,o),t[qr]=e.current,to(t),i)for(t=0;t<i.length;t++)r=i[t],n=r._getVersion,n=n(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,n]:e.mutableSourceEagerHydrationData.push(r,n);return new Ks(e)},ir.render=function(t,e,r){if(!Zs(e))throw Error(ie(200));return $s(null,t,e,!1,r)},ir.unmountComponentAtNode=function(t){if(!Zs(t))throw Error(ie(40));return t._reactRootContainer?(an(function(){$s(null,null,t,!1,function(){t._reactRootContainer=null,t[qr]=null})}),!0):!1},ir.unstable_batchedUpdates=Gu,ir.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!Zs(r))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return $s(t,e,r,!1,i)},ir.version="18.3.1-next-f1338f8080-20240426";function ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig)}catch(t){console.error(t)}}ig(),Zh.exports=ir;var fy=Zh.exports,ng,ag=fy;ng=ag.createRoot,ag.hydrateRoot;class py{constructor(e,r,i,n,a,o){this.horizontalLines=e,this.verticalLines=r,this.binaryImage=i,this.verticalLinesImage=n,this.horizontalLinesImage=a,this.combinedImage=o}destroy(){this.binaryImage.delete(),this.verticalLinesImage.delete(),this.horizontalLinesImage.delete(),this.combinedImage.delete()}}function my(t,e){const r=cv.matFromImageData(t),i=new cv.Mat;cv.cvtColor(r,i,cv.COLOR_RGBA2GRAY,0);const n=new cv.Mat;cv.adaptiveThreshold(i,n,255,cv.ADAPTIVE_THRESH_MEAN_C,cv.THRESH_BINARY_INV,15,2);const a=cv.getStructuringElement(cv.MORPH_RECT,new cv.Size(1,Math.floor(e/4))),o=cv.getStructuringElement(cv.MORPH_RECT,new cv.Size(Math.floor(e/4),1)),s=new cv.Mat;cv.erode(n,s,a),cv.dilate(s,s,a);const l=new cv.Mat;cv.erode(n,l,o),cv.dilate(l,l,o);const c=new cv.Mat;cv.addWeighted(s,.5,l,.5,0,c);const d=og(s,"vertical"),f=og(l,"horizontal"),h=n.clone(),m=s.clone(),_=l.clone(),S=c.clone();return r.delete(),i.delete(),n.delete(),a.delete(),o.delete(),s.delete(),l.delete(),c.delete(),new py(f,d,h,m,_,S)}function og(t,e){const r=new cv.Mat,i=1,n=100,a=t.rows/2;cv.HoughLinesP(t,r,i,Math.PI/180,n,a,20);const s=[];for(let l=0;l<r.rows;l++){const c=r.data32S[l*4],d=r.data32S[l*4+1],f=r.data32S[l*4+2],h=r.data32S[l*4+3];if(e==="vertical"&&Math.abs(c-f)<10){const m=(c+f)/2;s.push(m)}else if(e==="horizontal"&&Math.abs(d-h)<10){const m=(d+h)/2;s.push(m)}}return r.delete(),Array.from(new Set(s)).sort((l,c)=>l-c)}function gy(t,e){const r=[],i=[],n=[],a=Math.min(e.width,e.height)*.5,o=(e.width-a)/2,s=(e.height-a)/2,l=a/3;for(let c=0;c<3;c++){const d=[],f=[],h=[];for(let m=0;m<3;m++){const _=o+m*l,S=s+c*l,p=t.getImageData(_,S,l,l),{colorName:u,meanHsv:v}=vy(p);d.push(u),f.push(v);const g=document.createElement("canvas");g.width=l,g.height=l,g.getContext("2d").putImageData(p,0,0);const M=g.toDataURL();h.push(M)}r.push(d),i.push(f),n.push(h)}return{colors:r,hsvValues:i,subImages:n}}function vy(t){const e=cv.matFromImageData(t),r=new cv.Mat;cv.cvtColor(e,r,cv.COLOR_RGB2HSV);const i=new cv.MatVector;cv.split(r,i);const n=[[180],[256],[256]],a=[[0,180],[0,256],[0,256]],o=[new cv.Mat,new cv.Mat,new cv.Mat],s=[new cv.Mat,new cv.Mat,new cv.Mat];cv.calcHist(i,[0],s[0],o[0],n[0],a[0],!1),cv.calcHist(i,[1],s[1],o[1],n[1],a[1],!1),cv.calcHist(i,[2],s[2],o[2],n[2],a[2],!1);let l=[0,0,0],c=[0,0,0];for(let h=0;h<3;h++)for(let m=0;m<n[h][0];m++)o[h].data32F[m]>l[h]&&(l[h]=o[h].data32F[m],c[h]=m);r.delete(),e.delete(),i.delete();for(const h of s)h.delete();for(const h of o)h.delete();let d;_y(c[1],c[2])?d="white":d=yy(c[0]);const f={h:c[0],s:c[1],v:c[2]};return{colorName:d,meanHsv:f}}function _y(t,e){return t<65&&e>150}function yy(t){return t>=115||t<3?"red":t>=3&&t<25?"orange":t>=25&&t<55?"yellow":t>=55&&t<95?"green":t>=95&&t<115?"blue":"unknown"}const xy=["red","orange","yellow","green","blue","white"],sg=({onSelectColor:t,onClose:e})=>Re.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",width:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(255, 255, 255, 0.9)",padding:"10px",borderRadius:"5px",zIndex:100},children:[Re.jsx("p",{children:"Select a color:"}),Re.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:xy.map(r=>Re.jsx("div",{onClick:()=>{t(r),e()},style:{backgroundColor:r,width:"40px",height:"40px",borderRadius:"50%",cursor:"pointer",border:"1px solid #000"}},r))}),Re.jsx("button",{onClick:e,style:{marginTop:"10px"},children:"Cancel"})]}),Sy=({currentSide:t,detectionEnabled:e,overlayData:r,onOverlayDataCaptured:i,onOverlayDataUpdated:n})=>{const a=Te.useRef(document.createElement("video")),o=Te.useRef(null),s=Te.useRef(),[l,c]=Te.useState(!1),d=Te.useRef(0),f=1,[h,m]=Te.useState(!1),[_,S]=Te.useState([]),[p,u]=Te.useState(null),[v,g]=Te.useState(!1);Te.useEffect(()=>{const x=setInterval(()=>{window.cv&&window.cv.Mat&&(m(!0),clearInterval(x))},100);return()=>clearInterval(x)},[]),Te.useEffect(()=>{if(!h)return;const x=a.current,k=async()=>{try{const V={video:!0},X=await navigator.mediaDevices.getUserMedia(V);x.srcObject=X,await x.play(),F()}catch(V){console.error("Error accessing camera:",V)}},F=()=>{if(o.current&&a.current&&a.current.readyState===a.current.HAVE_ENOUGH_DATA){const V=o.current,X=V.getContext("2d");if(X){if(X.clearRect(0,0,V.width,V.height),X.save(),X.translate(V.width,0),X.scale(-1,1),X.drawImage(a.current,0,0,V.width,V.height),X.restore(),e){const G=C();if(G){const{horizontalLines:Z,verticalLines:w}=G;J(Z,w,V)?(d.current+=1,d.current>=f&&!l&&(c(!0),y())):d.current=0,G.destroy()}}R(X,l?"green":"red"),T(X,r),L(X,t)}}s.current=requestAnimationFrame(F)};return k(),()=>{(x.srcObject?x.srcObject.getTracks():[]).forEach(V=>V.stop()),s.current&&cancelAnimationFrame(s.current)}},[h,e,l,t,r]),Te.useEffect(()=>{e&&(c(!1),d.current=0)},[e]),Te.useEffect(()=>{const x=o.current;if(!x)return;const k=F=>{if(!r||!_.length||!o.current)return;const V=o.current,X=V.getBoundingClientRect(),G=V.width/X.width,Z=V.height/X.height;let w=(F.clientX-X.left)*G,U=(F.clientY-X.top)*Z;w=V.width-w;for(const D of _)if(w>=D.x&&w<=D.x+D.size&&U>=D.y&&U<=D.y+D.size){u(D),g(!0);break}};return x.addEventListener("click",k),()=>{x.removeEventListener("click",k)}},[_,r]);const M=x=>{if(!p)return;const k={...r};k.colors=r.colors.map((F,V)=>F.map((X,G)=>V===p.row&&G===p.col?x:X)),n(k),g(!1),u(null)},C=()=>{const x=o.current,k=Math.min(x.width,x.height)*.5,F=(x.width-k)/2,V=(x.height-k)/2,X=document.createElement("canvas");X.width=x.width,X.height=x.height;const G=X.getContext("2d");if(G&&a.current){G.drawImage(a.current,0,0,x.width,x.height);const Z=G.getImageData(F,V,k,k);return my(Z,k)}return null},R=(x,k)=>{const F=o.current,V=3,X=Math.min(F.width,F.height)*.5,G=(F.width-X)/2,Z=(F.height-X)/2,w=X/V;x.strokeStyle=k,x.lineWidth=2,x.save(),x.translate(F.width,0),x.scale(-1,1);for(let U=0;U<=V;U++){const D=G+U*w;x.beginPath(),x.moveTo(D,Z),x.lineTo(D,Z+X),x.stroke()}for(let U=0;U<=V;U++){const D=Z+U*w;x.beginPath(),x.moveTo(G,D),x.lineTo(G+X,D),x.stroke()}x.restore()},T=(x,k)=>{const F=o.current,V=3,X=Math.min(F.width,F.height)*.5,G=(F.width-X)/2,Z=(F.height-X)/2,w=X/V;x.globalAlpha=.5;const U=[];x.save(),x.translate(F.width,0),x.scale(-1,1);for(let D=0;D<V;D++)for(let K=0;K<V;K++){const q=k.colors[D][K];x.fillStyle=q;const te=G+K*w,z=Z+D*w;x.fillRect(te,z,w,w),U.push({row:D,col:K,x:te,y:z,size:w})}x.restore(),x.globalAlpha=1,S(U)},L=(x,k)=>{x.save(),x.fillStyle="rgba(0, 0, 0, 0.5)",x.fillRect(10,10,120,40),x.fillStyle="white",x.font="20px Arial",x.fillText(`Side ${k+1}/6`,20,40),x.restore()},J=(x,k,F)=>{const V=Math.min(F.width,F.height)*.5,X=[];for(let te=0;te<=3;te++){const z=te*(V/3);X.push(z)}const G=[];for(let te=0;te<=3;te++){const z=te*(V/3);G.push(z)}const Z=V*.05,w=X.filter(te=>k.some(z=>Math.abs(z-te)<Z)),U=G.filter(te=>x.some(z=>Math.abs(z-te)<Z)),D=w.length/X.length,K=U.length/G.length,q=.8;return D>=q&&K>=q},y=()=>{const x=o.current,k=document.createElement("canvas");k.width=x.width,k.height=x.height;const F=k.getContext("2d");if(F&&a.current){F.drawImage(a.current,0,0,x.width,x.height);const V=gy(F,k);i(V)}};return Re.jsxs("div",{style:{position:"relative",width:"100%"},children:[h?Re.jsx("canvas",{ref:o,width:640,height:480,style:{width:"100%",border:"1px solid black"}}):Re.jsx("p",{children:"Loading OpenCV..."}),v&&Re.jsx(sg,{onSelectColor:M,onClose:()=>{g(!1),u(null)}})]})};/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Ju="169",My=0,lg=1,by=2,cg=1,Ey=2,ri=3,Ii=0,Jt=1,ii=2,Ni=0,ra=1,ug=2,dg=3,hg=4,wy=5,cn=100,Ty=101,Ay=102,Ry=103,Cy=104,Py=200,Ly=201,Dy=202,Uy=203,ed=204,td=205,Iy=206,Ny=207,Oy=208,ky=209,Fy=210,zy=211,By=212,Hy=213,Vy=214,rd=0,id=1,nd=2,ia=3,ad=4,od=5,sd=6,ld=7,fg=0,Gy=1,Wy=2,Oi=0,jy=1,Xy=2,Yy=3,qy=4,Ky=5,Zy=6,$y=7,pg=300,na=301,aa=302,cd=303,ud=304,Js=306,dd=1e3,un=1001,hd=1002,xr=1003,Qy=1004,el=1005,Pr=1006,fd=1007,dn=1008,ni=1009,mg=1010,gg=1011,xo=1012,pd=1013,hn=1014,ai=1015,So=1016,md=1017,gd=1018,oa=1020,vg=35902,_g=1021,yg=1022,Lr=1023,xg=1024,Sg=1025,sa=1026,la=1027,Mg=1028,vd=1029,bg=1030,_d=1031,yd=1033,tl=33776,rl=33777,il=33778,nl=33779,xd=35840,Sd=35841,Md=35842,bd=35843,Ed=36196,wd=37492,Td=37496,Ad=37808,Rd=37809,Cd=37810,Pd=37811,Ld=37812,Dd=37813,Ud=37814,Id=37815,Nd=37816,Od=37817,kd=37818,Fd=37819,zd=37820,Bd=37821,al=36492,Hd=36494,Vd=36495,Eg=36283,Gd=36284,Wd=36285,jd=36286,Jy=3200,ex=3201,tx=0,rx=1,ki="",Hr="srgb",Fi="srgb-linear",Xd="display-p3",ol="display-p3-linear",sl="linear",at="srgb",ll="rec709",cl="p3",ca=7680,wg=519,ix=512,nx=513,ax=514,Tg=515,ox=516,sx=517,lx=518,cx=519,Ag=35044,Rg="300 es",oi=2e3,ul=2001;class fn{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cg=1234567;const Mo=Math.PI/180,bo=180/Math.PI;function ua(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[r&63|128]+Ot[r>>8&255]+"-"+Ot[r>>16&255]+Ot[r>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function kt(t,e,r){return Math.max(e,Math.min(r,t))}function Yd(t,e){return(t%e+e)%e}function ux(t,e,r,i,n){return i+(t-e)*(n-i)/(r-e)}function dx(t,e,r){return t!==e?(r-t)/(e-t):0}function Eo(t,e,r){return(1-r)*t+r*e}function hx(t,e,r,i){return Eo(t,e,1-Math.exp(-r*i))}function fx(t,e=1){return e-Math.abs(Yd(t,e*2)-e)}function px(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e),t*t*(3-2*t))}function mx(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e),t*t*t*(t*(t*6-15)+10))}function gx(t,e){return t+Math.floor(Math.random()*(e-t+1))}function vx(t,e){return t+Math.random()*(e-t)}function _x(t){return t*(.5-Math.random())}function yx(t){t!==void 0&&(Cg=t);let e=Cg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xx(t){return t*Mo}function Sx(t){return t*bo}function Mx(t){return(t&t-1)===0&&t!==0}function bx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ex(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function wx(t,e,r,i,n){const a=Math.cos,o=Math.sin,s=a(r/2),l=o(r/2),c=a((e+i)/2),d=o((e+i)/2),f=a((e-i)/2),h=o((e-i)/2),m=a((i-e)/2),_=o((i-e)/2);switch(n){case"XYX":t.set(s*d,l*f,l*h,s*c);break;case"YZY":t.set(l*h,s*d,l*f,s*c);break;case"ZXZ":t.set(l*f,l*h,s*d,s*c);break;case"XZX":t.set(s*d,l*_,l*m,s*c);break;case"YXY":t.set(l*m,s*d,l*_,s*c);break;case"ZYZ":t.set(l*_,l*m,s*d,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function da(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const wo={DEG2RAD:Mo,RAD2DEG:bo,generateUUID:ua,clamp:kt,euclideanModulo:Yd,mapLinear:ux,inverseLerp:dx,lerp:Eo,damp:hx,pingpong:fx,smoothstep:px,smootherstep:mx,randInt:gx,randFloat:vx,randFloatSpread:_x,seededRandom:yx,degToRad:xx,radToDeg:Sx,isPowerOfTwo:Mx,ceilPowerOfTwo:bx,floorPowerOfTwo:Ex,setQuaternionFromProperEuler:wx,normalize:Wt,denormalize:da};class Ve{constructor(e=0,r=0){Ve.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,n=e.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),n=Math.sin(r),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,r,i,n,a,o,s,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c)}set(e,r,i,n,a,o,s,l,c){const d=this.elements;return d[0]=e,d[1]=n,d[2]=s,d[3]=r,d[4]=a,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],m=i[5],_=i[8],S=n[0],p=n[3],u=n[6],v=n[1],g=n[4],M=n[7],C=n[2],R=n[5],T=n[8];return a[0]=o*S+s*v+l*C,a[3]=o*p+s*g+l*R,a[6]=o*u+s*M+l*T,a[1]=c*S+d*v+f*C,a[4]=c*p+d*g+f*R,a[7]=c*u+d*M+f*T,a[2]=h*S+m*v+_*C,a[5]=h*p+m*g+_*R,a[8]=h*u+m*M+_*T,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8];return r*o*d-r*s*c-i*a*d+i*s*l+n*a*c-n*o*l}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=d*o-s*c,h=s*l-d*a,m=c*a-o*l,_=r*f+i*h+n*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(n*c-d*i)*S,e[2]=(s*i-n*o)*S,e[3]=h*S,e[4]=(d*r-n*l)*S,e[5]=(n*a-s*r)*S,e[6]=m*S,e[7]=(i*l-c*r)*S,e[8]=(o*r-i*a)*S,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+r,0,0,1),this}scale(e,r){return this.premultiply(qd.makeScale(e,r)),this}rotate(e){return this.premultiply(qd.makeRotation(-e)),this}translate(e,r){return this.premultiply(qd.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qd=new Be;function Pg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function dl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Tx(){const t=dl("canvas");return t.style.display="block",t}const Lg={};function hl(t){t in Lg||(Lg[t]=!0,console.warn(t))}function Ax(t,e,r){return new Promise(function(i,n){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:i()}}setTimeout(a,r)})}function Rx(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cx(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dg=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ug=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),To={[Fi]:{transfer:sl,primaries:ll,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Hr]:{transfer:at,primaries:ll,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ol]:{transfer:sl,primaries:cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Ug),fromReference:t=>t.applyMatrix3(Dg)},[Xd]:{transfer:at,primaries:cl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ug),fromReference:t=>t.applyMatrix3(Dg).convertLinearToSRGB()}},Px=new Set([Fi,ol]),qe={enabled:!0,_workingColorSpace:Fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Px.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,r){if(this.enabled===!1||e===r||!e||!r)return t;const i=To[e].toReference,n=To[r].fromReference;return n(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return To[t].primaries},getTransfer:function(t){return t===ki?sl:To[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(To[e].luminanceCoefficients)}};function ha(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Kd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fa;class Lx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{fa===void 0&&(fa=dl("canvas")),fa.width=e.width,fa.height=e.height;const i=fa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=fa}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=dl("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ha(a[o]/255)*255;return i.putImageData(n,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(ha(r[i]/255)*255):r[i]=ha(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dx=0;class Ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(Zd(n[o].image)):a.push(Zd(n[o]))}else a=Zd(n);i.url=a}return r||(e.images[this.uuid]=i),i}}function Zd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Lx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ux=0;class er extends fn{constructor(e=er.DEFAULT_IMAGE,r=er.DEFAULT_MAPPING,i=un,n=un,a=Pr,o=dn,s=Lr,l=ni,c=er.DEFAULT_ANISOTROPY,d=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=ua(),this.name="",this.source=new Ig(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}er.DEFAULT_IMAGE=null,er.DEFAULT_MAPPING=pg,er.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,r=0,i=0,n=1){gt.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,n){return this.x=e,this.y=r,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*r+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*r+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*r+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*r+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],d=o[1],f=o[5],h=o[9],m=o[2],_=o[6],S=o[10];if(Math.abs(l-d)<.01&&Math.abs(c-m)<.01&&Math.abs(h-_)<.01){if(Math.abs(l+d)<.1&&Math.abs(c+m)<.1&&Math.abs(h+_)<.1&&Math.abs(s+f+S-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const u=(s+1)/2,v=(f+1)/2,g=(S+1)/2,M=(l+d)/4,C=(c+m)/4,R=(h+_)/4;return u>v&&u>g?u<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(u),n=M/i,a=C/i):v>g?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=M/n,a=R/n):g<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(g),i=C/a,n=R/a),this.set(i,n,a,r),this}let p=Math.sqrt((_-h)*(_-h)+(c-m)*(c-m)+(d-l)*(d-l));return Math.abs(p)<.001&&(p=1),this.x=(_-h)/p,this.y=(c-m)/p,this.z=(d-l)/p,this.w=Math.acos((s+f+S-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ix extends fn{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new gt(0,0,e,r),this.scissorTest=!1,this.viewport=new gt(0,0,e,r);const n={width:e,height:r,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new er(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,r,i=1){if(this.width!==e||this.height!==r||this.depth!==i){this.width=e,this.height=r,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=r,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new Ig(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends Ix{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class Ng extends er{constructor(e=null,r=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=xr,this.minFilter=xr,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nx extends er{constructor(e=null,r=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=xr,this.minFilter=xr,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ao{constructor(e=0,r=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=n}static slerpFlat(e,r,i,n,a,o,s){let l=i[n+0],c=i[n+1],d=i[n+2],f=i[n+3];const h=a[o+0],m=a[o+1],_=a[o+2],S=a[o+3];if(s===0){e[r+0]=l,e[r+1]=c,e[r+2]=d,e[r+3]=f;return}if(s===1){e[r+0]=h,e[r+1]=m,e[r+2]=_,e[r+3]=S;return}if(f!==S||l!==h||c!==m||d!==_){let p=1-s;const u=l*h+c*m+d*_+f*S,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),R=Math.atan2(C,u*v);p=Math.sin(p*R)/C,s=Math.sin(s*R)/C}const M=s*v;if(l=l*p+h*M,c=c*p+m*M,d=d*p+_*M,f=f*p+S*M,p===1-s){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[r]=l,e[r+1]=c,e[r+2]=d,e[r+3]=f}static multiplyQuaternionsFlat(e,r,i,n,a,o){const s=i[n],l=i[n+1],c=i[n+2],d=i[n+3],f=a[o],h=a[o+1],m=a[o+2],_=a[o+3];return e[r]=s*_+d*f+l*m-c*h,e[r+1]=l*_+d*h+c*f-s*m,e[r+2]=c*_+d*m+s*h-l*f,e[r+3]=d*_-s*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,n){return this._x=e,this._y=r,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),d=s(n/2),f=s(a/2),h=l(i/2),m=l(n/2),_=l(a/2);switch(o){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],n=r[4],a=r[8],o=r[1],s=r[5],l=r[9],c=r[2],d=r[6],f=r[10],h=i+s+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(a-c)*m,this._z=(o-n)*m}else if(i>s&&i>f){const m=2*Math.sqrt(1+i-s-f);this._w=(d-l)/m,this._x=.25*m,this._y=(n+o)/m,this._z=(a+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-i-f);this._w=(a-c)/m,this._x=(n+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-s);this._w=(o-n)/m,this._x=(a+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,r/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,n=e._y,a=e._z,o=e._w,s=r._x,l=r._y,c=r._z,d=r._w;return this._x=i*d+o*s+n*c-a*l,this._y=n*d+o*l+a*s-i*c,this._z=a*d+o*c+i*l-n*s,this._w=o*d-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-r;return this._w=m*o+r*this._w,this._x=m*i+r*this._x,this._y=m*n+r*this._y,this._z=m*a+r*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,s),f=Math.sin((1-r)*d)/c,h=Math.sin(r*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(r),a*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,r=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(Og.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(Og.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){const r=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*i),d=2*(s*r-a*n),f=2*(a*i-o*r);return this.x=r+l*c+o*f-s*d,this.y=i+l*d+s*c-a*f,this.z=n+l*f+a*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,n=e.y,a=e.z,o=r.x,s=r.y,l=r.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $d.copy(this).projectOnVector(e),this.sub($d)}reflect(e){return this.sub($d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return r*r+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const n=Math.sin(r)*e;return this.x=n*Math.sin(i),this.y=Math.cos(r)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $d=new H,Og=new Ao;class Ro{constructor(e=new H(1/0,1/0,1/0),r=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(Dr.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(Dr.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=Dr.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(r===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Dr):Dr.fromBufferAttribute(a,o),Dr.applyMatrix4(e.matrixWorld),this.expandByPoint(Dr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fl.copy(i.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dr),Dr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Co),pl.subVectors(this.max,Co),pa.subVectors(e.a,Co),ma.subVectors(e.b,Co),ga.subVectors(e.c,Co),zi.subVectors(ma,pa),Bi.subVectors(ga,ma),mn.subVectors(pa,ga);let r=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-mn.z,mn.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,mn.z,0,-mn.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-mn.y,mn.x,0];return!Qd(r,pa,ma,ga,pl)||(r=[1,0,0,0,1,0,0,0,1],!Qd(r,pa,ma,ga,pl))?!1:(ml.crossVectors(zi,Bi),r=[ml.x,ml.y,ml.z],Qd(r,pa,ma,ga,pl))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new H,new H,new H,new H,new H,new H,new H,new H],Dr=new H,fl=new Ro,pa=new H,ma=new H,ga=new H,zi=new H,Bi=new H,mn=new H,Co=new H,pl=new H,ml=new H,gn=new H;function Qd(t,e,r,i,n){for(let a=0,o=t.length-3;a<=o;a+=3){gn.fromArray(t,a);const s=n.x*Math.abs(gn.x)+n.y*Math.abs(gn.y)+n.z*Math.abs(gn.z),l=e.dot(gn),c=r.dot(gn),d=i.dot(gn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}const Ox=new Ro,Po=new H,Jd=new H;class eh{constructor(e=new H,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):Ox.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const r=Po.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),n=(i-this.radius)*.5;this.center.addScaledVector(Po,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Jd)),this.expandByPoint(Po.copy(e.center).sub(Jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new H,th=new H,gl=new H,Hi=new H,rh=new H,vl=new H,ih=new H;class kg{constructor(e=new H,r=new H(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=li.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,r),li.distanceToSquared(e))}distanceSqToSegment(e,r,i,n){th.copy(e).add(r).multiplyScalar(.5),gl.copy(r).sub(e).normalize(),Hi.copy(this.origin).sub(th);const a=e.distanceTo(r)*.5,o=-this.direction.dot(gl),s=Hi.dot(this.direction),l=-Hi.dot(gl),c=Hi.lengthSq(),d=Math.abs(1-o*o);let f,h,m,_;if(d>0)if(f=o*l-s,h=o*s-l,_=a*d,f>=0)if(h>=-_)if(h<=_){const S=1/d;f*=S,h*=S,m=f*(f+o*h+2*s)+h*(o*f+h+2*l)+c}else h=a,f=Math.max(0,-(o*h+s)),m=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(o*h+s)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*a+s)),h=f>0?-a:Math.min(Math.max(-a,-l),a),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(f=Math.max(0,-(o*a+s)),h=f>0?a:Math.min(Math.max(-a,-l),a),m=-f*f+h*(h+2*l)+c);else h=o>0?-a:a,f=Math.max(0,-(o*h+s)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(th).addScaledVector(gl,h),m}intersectSphere(e,r){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),n=li.dot(li)-i*i,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,r):this.at(s,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,n,a,o,s,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),d>=0?(a=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,r)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,r,i,n,a){rh.subVectors(r,e),vl.subVectors(i,e),ih.crossVectors(rh,vl);let o=this.direction.dot(ih),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=s*this.direction.dot(vl.crossVectors(Hi,vl));if(l<0)return null;const c=s*this.direction.dot(rh.cross(Hi));if(c<0||l+c>o)return null;const d=-s*Hi.dot(ih);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,r,i,n,a,o,s,l,c,d,f,h,m,_,S,p){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c,d,f,h,m,_,S,p)}set(e,r,i,n,a,o,s,l,c,d,f,h,m,_,S,p){const u=this.elements;return u[0]=e,u[4]=r,u[8]=i,u[12]=n,u[1]=a,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=S,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,n=1/va.setFromMatrixColumn(e,0).length(),a=1/va.setFromMatrixColumn(e,1).length(),o=1/va.setFromMatrixColumn(e,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*o,r[9]=i[9]*o,r[10]=i[10]*o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=o*d,m=o*f,_=s*d,S=s*f;r[0]=l*d,r[4]=-l*f,r[8]=c,r[1]=m+_*c,r[5]=h-S*c,r[9]=-s*l,r[2]=S-h*c,r[6]=_+m*c,r[10]=o*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=c*d,S=c*f;r[0]=h+S*s,r[4]=_*s-m,r[8]=o*c,r[1]=o*f,r[5]=o*d,r[9]=-s,r[2]=m*s-_,r[6]=S+h*s,r[10]=o*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=c*d,S=c*f;r[0]=h-S*s,r[4]=-o*f,r[8]=_+m*s,r[1]=m+_*s,r[5]=o*d,r[9]=S-h*s,r[2]=-o*c,r[6]=s,r[10]=o*l}else if(e.order==="ZYX"){const h=o*d,m=o*f,_=s*d,S=s*f;r[0]=l*d,r[4]=_*c-m,r[8]=h*c+S,r[1]=l*f,r[5]=S*c+h,r[9]=m*c-_,r[2]=-c,r[6]=s*l,r[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=s*l,S=s*c;r[0]=l*d,r[4]=S-h*f,r[8]=_*f+m,r[1]=f,r[5]=o*d,r[9]=-s*d,r[2]=-c*d,r[6]=m*f+_,r[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,m=o*c,_=s*l,S=s*c;r[0]=l*d,r[4]=-f,r[8]=c*d,r[1]=h*f+S,r[5]=o*d,r[9]=m*f-_,r[2]=_*f-m,r[6]=s*d,r[10]=S*f+h}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kx,e,Fx)}lookAt(e,r,i){const n=this.elements;return cr.subVectors(e,r),cr.lengthSq()===0&&(cr.z=1),cr.normalize(),Vi.crossVectors(i,cr),Vi.lengthSq()===0&&(Math.abs(i.z)===1?cr.x+=1e-4:cr.z+=1e-4,cr.normalize(),Vi.crossVectors(i,cr)),Vi.normalize(),_l.crossVectors(cr,Vi),n[0]=Vi.x,n[4]=_l.x,n[8]=cr.x,n[1]=Vi.y,n[5]=_l.y,n[9]=cr.y,n[2]=Vi.z,n[6]=_l.z,n[10]=cr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],m=i[13],_=i[2],S=i[6],p=i[10],u=i[14],v=i[3],g=i[7],M=i[11],C=i[15],R=n[0],T=n[4],L=n[8],J=n[12],y=n[1],x=n[5],k=n[9],F=n[13],V=n[2],X=n[6],G=n[10],Z=n[14],w=n[3],U=n[7],D=n[11],K=n[15];return a[0]=o*R+s*y+l*V+c*w,a[4]=o*T+s*x+l*X+c*U,a[8]=o*L+s*k+l*G+c*D,a[12]=o*J+s*F+l*Z+c*K,a[1]=d*R+f*y+h*V+m*w,a[5]=d*T+f*x+h*X+m*U,a[9]=d*L+f*k+h*G+m*D,a[13]=d*J+f*F+h*Z+m*K,a[2]=_*R+S*y+p*V+u*w,a[6]=_*T+S*x+p*X+u*U,a[10]=_*L+S*k+p*G+u*D,a[14]=_*J+S*F+p*Z+u*K,a[3]=v*R+g*y+M*V+C*w,a[7]=v*T+g*x+M*X+C*U,a[11]=v*L+g*k+M*G+C*D,a[15]=v*J+g*F+M*Z+C*K,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],S=e[7],p=e[11],u=e[15];return _*(+a*l*f-n*c*f-a*s*h+i*c*h+n*s*m-i*l*m)+S*(+r*l*m-r*c*h+a*o*h-n*o*m+n*c*d-a*l*d)+p*(+r*c*f-r*s*m-a*o*f+i*o*m+a*s*d-i*c*d)+u*(-n*s*d-r*l*f+r*s*h+n*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=r,n[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],S=e[13],p=e[14],u=e[15],v=f*p*c-S*h*c+S*l*m-s*p*m-f*l*u+s*h*u,g=_*h*c-d*p*c-_*l*m+o*p*m+d*l*u-o*h*u,M=d*S*c-_*f*c+_*s*m-o*S*m-d*s*u+o*f*u,C=_*f*l-d*S*l-_*s*h+o*S*h+d*s*p-o*f*p,R=r*v+i*g+n*M+a*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return e[0]=v*T,e[1]=(S*h*a-f*p*a-S*n*m+i*p*m+f*n*u-i*h*u)*T,e[2]=(s*p*a-S*l*a+S*n*c-i*p*c-s*n*u+i*l*u)*T,e[3]=(f*l*a-s*h*a-f*n*c+i*h*c+s*n*m-i*l*m)*T,e[4]=g*T,e[5]=(d*p*a-_*h*a+_*n*m-r*p*m-d*n*u+r*h*u)*T,e[6]=(_*l*a-o*p*a-_*n*c+r*p*c+o*n*u-r*l*u)*T,e[7]=(o*h*a-d*l*a+d*n*c-r*h*c-o*n*m+r*l*m)*T,e[8]=M*T,e[9]=(_*f*a-d*S*a-_*i*m+r*S*m+d*i*u-r*f*u)*T,e[10]=(o*S*a-_*s*a+_*i*c-r*S*c-o*i*u+r*s*u)*T,e[11]=(d*s*a-o*f*a-d*i*c+r*f*c+o*i*m-r*s*m)*T,e[12]=C*T,e[13]=(d*S*n-_*f*n+_*i*h-r*S*h-d*i*p+r*f*p)*T,e[14]=(_*s*n-o*S*n-_*i*l+r*S*l+o*i*p-r*s*p)*T,e[15]=(o*f*n-d*s*n+d*i*l-r*f*l-o*i*h+r*s*h)*T,this}scale(e){const r=this.elements,i=e.x,n=e.y,a=e.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),n=Math.sin(r),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,d=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,d*s+i,d*l-n*o,0,c*l-n*s,d*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,r,n,1,0,0,0,0,1),this}compose(e,r,i){const n=this.elements,a=r._x,o=r._y,s=r._z,l=r._w,c=a+a,d=o+o,f=s+s,h=a*c,m=a*d,_=a*f,S=o*d,p=o*f,u=s*f,v=l*c,g=l*d,M=l*f,C=i.x,R=i.y,T=i.z;return n[0]=(1-(S+u))*C,n[1]=(m+M)*C,n[2]=(_-g)*C,n[3]=0,n[4]=(m-M)*R,n[5]=(1-(h+u))*R,n[6]=(p+v)*R,n[7]=0,n[8]=(_+g)*T,n[9]=(p-v)*T,n[10]=(1-(h+S))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,r,i){const n=this.elements;let a=va.set(n[0],n[1],n[2]).length();const o=va.set(n[4],n[5],n[6]).length(),s=va.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Ur.copy(this);const l=1/a,c=1/o,d=1/s;return Ur.elements[0]*=l,Ur.elements[1]*=l,Ur.elements[2]*=l,Ur.elements[4]*=c,Ur.elements[5]*=c,Ur.elements[6]*=c,Ur.elements[8]*=d,Ur.elements[9]*=d,Ur.elements[10]*=d,r.setFromRotationMatrix(Ur),i.x=a,i.y=o,i.z=s,this}makePerspective(e,r,i,n,a,o,s=oi){const l=this.elements,c=2*a/(r-e),d=2*a/(i-n),f=(r+e)/(r-e),h=(i+n)/(i-n);let m,_;if(s===oi)m=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===ul)m=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,r,i,n,a,o,s=oi){const l=this.elements,c=1/(r-e),d=1/(i-n),f=1/(o-a),h=(r+e)*c,m=(i+n)*d;let _,S;if(s===oi)_=(o+a)*f,S=-2*f;else if(s===ul)_=a*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const va=new H,Ur=new vt,kx=new H(0,0,0),Fx=new H(1,1,1),Vi=new H,_l=new H,cr=new H,Fg=new vt,zg=new Ao;class hi{constructor(e=0,r=0,i=0,n=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,n=this._order){return this._x=e,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],d=n[9],f=n[2],h=n[6],m=n[10];switch(r){case"XYZ":this._y=Math.asin(kt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return Fg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fg,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return zg.setFromEuler(this),this.setFromQuaternion(zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class nh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zx=0;const Bg=new H,_a=new Ao,ci=new vt,yl=new H,Lo=new H,Bx=new H,Hx=new Ao,Hg=new H(1,0,0),Vg=new H(0,1,0),Gg=new H(0,0,1),Wg={type:"added"},Vx={type:"removed"},ya={type:"childadded",child:null},ah={type:"childremoved",child:null};class tr extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tr.DEFAULT_UP.clone();const e=new H,r=new hi,i=new Ao,n=new H(1,1,1);function a(){i.setFromEuler(r,!1)}function o(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new vt},normalMatrix:{value:new Be}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=tr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return _a.setFromAxisAngle(e,r),this.quaternion.multiply(_a),this}rotateOnWorldAxis(e,r){return _a.setFromAxisAngle(e,r),this.quaternion.premultiply(_a),this}rotateX(e){return this.rotateOnAxis(Hg,e)}rotateY(e){return this.rotateOnAxis(Vg,e)}rotateZ(e){return this.rotateOnAxis(Gg,e)}translateOnAxis(e,r){return Bg.copy(e).applyQuaternion(this.quaternion),this.position.add(Bg.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Hg,e)}translateY(e){return this.translateOnAxis(Vg,e)}translateZ(e){return this.translateOnAxis(Gg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?yl.copy(e):yl.set(e,r,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Lo,yl,this.up):ci.lookAt(yl,Lo,this.up),this.quaternion.setFromRotationMatrix(ci),n&&(ci.extractRotation(n.matrixWorld),_a.setFromRotationMatrix(ci),this.quaternion.premultiply(_a.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wg),ya.child=e,this.dispatchEvent(ya),ya.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(Vx),ah.child=e,this.dispatchEvent(ah),ah.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wg),ya.child=e,this.dispatchEvent(ya),ya.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,r);if(a!==void 0)return a}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].updateMatrixWorld(e)}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(r){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=n,i;function o(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}tr.DEFAULT_UP=new H(0,1,0),tr.DEFAULT_MATRIX_AUTO_UPDATE=!0,tr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ir=new H,ui=new H,oh=new H,di=new H,xa=new H,Sa=new H,jg=new H,sh=new H,lh=new H,ch=new H,uh=new gt,dh=new gt,hh=new gt;class Nr{constructor(e=new H,r=new H,i=new H){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,n){n.subVectors(i,r),Ir.subVectors(e,r),n.cross(Ir);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,r,i,n,a){Ir.subVectors(n,r),ui.subVectors(i,r),oh.subVectors(e,r);const o=Ir.dot(Ir),s=Ir.dot(ui),l=Ir.dot(oh),c=ui.dot(ui),d=ui.dot(oh),f=o*c-s*s;if(f===0)return a.set(0,0,0),null;const h=1/f,m=(c*l-s*d)*h,_=(o*d-s*l)*h;return a.set(1-m-_,_,m)}static containsPoint(e,r,i,n){return this.getBarycoord(e,r,i,n,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,r,i,n,a,o,s,l){return this.getBarycoord(e,r,i,n,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,di.x),l.addScaledVector(o,di.y),l.addScaledVector(s,di.z),l)}static getInterpolatedAttribute(e,r,i,n,a,o){return uh.setScalar(0),dh.setScalar(0),hh.setScalar(0),uh.fromBufferAttribute(e,r),dh.fromBufferAttribute(e,i),hh.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(uh,a.x),o.addScaledVector(dh,a.y),o.addScaledVector(hh,a.z),o}static isFrontFacing(e,r,i,n){return Ir.subVectors(i,r),ui.subVectors(e,r),Ir.cross(ui).dot(n)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,n){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,r,i,n){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ir.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Ir.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Nr.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,n,a){return Nr.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}containsPoint(e){return Nr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,n=this.b,a=this.c;let o,s;xa.subVectors(n,i),Sa.subVectors(a,i),sh.subVectors(e,i);const l=xa.dot(sh),c=Sa.dot(sh);if(l<=0&&c<=0)return r.copy(i);lh.subVectors(e,n);const d=xa.dot(lh),f=Sa.dot(lh);if(d>=0&&f<=d)return r.copy(n);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),r.copy(i).addScaledVector(xa,o);ch.subVectors(e,a);const m=xa.dot(ch),_=Sa.dot(ch);if(_>=0&&m<=_)return r.copy(a);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return s=c/(c-_),r.copy(i).addScaledVector(Sa,s);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return jg.subVectors(a,n),s=(f-d)/(f-d+(m-_)),r.copy(n).addScaledVector(jg,s);const u=1/(p+S+h);return o=S*u,s=h*u,r.copy(i).addScaledVector(xa,o).addScaledVector(Sa,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},xl={h:0,s:0,l:0};function fh(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class Ze{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=Hr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,r),this}setRGB(e,r,i,n=qe.workingColorSpace){return this.r=e,this.g=r,this.b=i,qe.toWorkingColorSpace(this,n),this}setHSL(e,r,i,n=qe.workingColorSpace){if(e=Yd(e,1),r=kt(r,0,1),i=kt(i,0,1),r===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+r):i+r-i*r,o=2*i-a;this.r=fh(o,a,e+1/3),this.g=fh(o,a,e),this.b=fh(o,a,e-1/3)}return qe.toWorkingColorSpace(this,n),this}setStyle(e,r=Hr){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(o===6)return this.setHex(parseInt(a,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=Hr){const i=Xg[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}copyLinearToSRGB(e){return this.r=Kd(e.r),this.g=Kd(e.g),this.b=Kd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hr){return qe.fromWorkingColorSpace(Ft.copy(this),e),Math.round(kt(Ft.r*255,0,255))*65536+Math.round(kt(Ft.g*255,0,255))*256+Math.round(kt(Ft.b*255,0,255))}getHexString(e=Hr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=qe.workingColorSpace){qe.fromWorkingColorSpace(Ft.copy(this),r);const i=Ft.r,n=Ft.g,a=Ft.b,o=Math.max(i,n,a),s=Math.min(i,n,a);let l,c;const d=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=d<=.5?f/(o+s):f/(2-o-s),o){case i:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-i)/f+2;break;case a:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,r=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ft.copy(this),r),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Hr){qe.fromWorkingColorSpace(Ft.copy(this),e);const r=Ft.r,i=Ft.g,n=Ft.b;return e!==Hr?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,r,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+r,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(Gi),e.getHSL(xl);const i=Eo(Gi.h,xl.h,r),n=Eo(Gi.s,xl.s,r),a=Eo(Gi.l,xl.l,r);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*r+a[3]*i+a[6]*n,this.g=a[1]*r+a[4]*i+a[7]*n,this.b=a[2]*r+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ze;Ze.NAMES=Xg;let Gx=0;class Sl extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=ra,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ed,this.blendDst=td,this.blendEquation=cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const n=this[r];if(n===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ed&&(i.blendSrc=this.blendSrc),this.blendDst!==td&&(i.blendDst=this.blendDst),this.blendEquation!==cn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ca&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ca&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ca&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(r){const a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const n=r.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=r[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ml extends Sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=fg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new H,bl=new Ve;class Vr{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=Ag,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=r.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)bl.fromBufferAttribute(this,r),bl.applyMatrix3(e),this.setXY(r,bl.x,bl.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.applyMatrix3(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.applyMatrix4(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.applyNormalMatrix(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.transformDirection(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=da(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=da(r,this.array)),r}setX(e,r){return this.normalized&&(r=Wt(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=da(r,this.array)),r}setY(e,r){return this.normalized&&(r=Wt(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=da(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Wt(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=da(r,this.array)),r}setW(e,r){return this.normalized&&(r=Wt(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=Wt(r,this.array),i=Wt(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,n){return e*=this.itemSize,this.normalized&&(r=Wt(r,this.array),i=Wt(i,this.array),n=Wt(n,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,r,i,n,a){return e*=this.itemSize,this.normalized&&(r=Wt(r,this.array),i=Wt(i,this.array),n=Wt(n,this.array),a=Wt(a,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ag&&(e.usage=this.usage),e}}class Yg extends Vr{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class qg extends Vr{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class vn extends Vr{constructor(e,r,i){super(new Float32Array(e),r,i)}}let Wx=0;const Sr=new vt,ph=new tr,Ma=new H,ur=new Ro,Do=new Ro,Rt=new H;class wn extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?qg:Yg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,r,i){return Sr.makeTranslation(e,r,i),this.applyMatrix4(Sr),this}scale(e,r,i){return Sr.makeScale(e,r,i),this.applyMatrix4(Sr),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ma).negate(),this.translate(Ma.x,Ma.y,Ma.z),this}setFromPoints(e){const r=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new vn(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ro);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,n=r.length;i<n;i++){const a=r[i];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ur.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ur.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ur.min),this.boundingBox.expandByPoint(ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eh);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(ur.setFromBufferAttribute(e),r)for(let a=0,o=r.length;a<o;a++){const s=r[a];Do.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(ur.min,Do.min),ur.expandByPoint(Rt),Rt.addVectors(ur.max,Do.max),ur.expandByPoint(Rt)):(ur.expandByPoint(Do.min),ur.expandByPoint(Do.max))}ur.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)Rt.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Rt));if(r)for(let a=0,o=r.length;a<o;a++){const s=r[a],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)Rt.fromBufferAttribute(s,c),l&&(Ma.fromBufferAttribute(e,c),Rt.add(Ma)),n=Math.max(n,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=r.position,n=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let L=0;L<i.count;L++)s[L]=new H,l[L]=new H;const c=new H,d=new H,f=new H,h=new Ve,m=new Ve,_=new Ve,S=new H,p=new H;function u(L,J,y){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,J),f.fromBufferAttribute(i,y),h.fromBufferAttribute(a,L),m.fromBufferAttribute(a,J),_.fromBufferAttribute(a,y),d.sub(c),f.sub(c),m.sub(h),_.sub(h);const x=1/(m.x*_.y-_.x*m.y);isFinite(x)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(x),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(x),s[L].add(S),s[J].add(S),s[y].add(S),l[L].add(p),l[J].add(p),l[y].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,J=v.length;L<J;++L){const y=v[L],x=y.start,k=y.count;for(let F=x,V=x+k;F<V;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const g=new H,M=new H,C=new H,R=new H;function T(L){C.fromBufferAttribute(n,L),R.copy(C);const J=s[L];g.copy(J),g.sub(C.multiplyScalar(C.dot(J))).normalize(),M.crossVectors(R,J);const y=M.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,y)}for(let L=0,J=v.length;L<J;++L){const y=v[L],x=y.start,k=y.count;for(let F=x,V=x+k;F<V;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vr(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const n=new H,a=new H,o=new H,s=new H,l=new H,c=new H,d=new H,f=new H;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);n.fromBufferAttribute(r,_),a.fromBufferAttribute(r,S),o.fromBufferAttribute(r,p),d.subVectors(o,a),f.subVectors(n,a),d.cross(f),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,p),s.add(d),l.add(d),c.add(d),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=r.count;h<m;h+=3)n.fromBufferAttribute(r,h+0),a.fromBufferAttribute(r,h+1),o.fromBufferAttribute(r,h+2),d.subVectors(o,a),f.subVectors(n,a),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)Rt.fromBufferAttribute(e,r),Rt.normalize(),e.setXYZ(r,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(s,l){const c=s.array,d=s.itemSize,f=s.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let S=0,p=l.length;S<p;S++){s.isInterleavedBufferAttribute?m=l[S]*s.data.stride+s.offset:m=l[S]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new Vr(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new wn,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,i);r.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,i);l.push(m)}r.morphAttributes[s]=l}r.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];r.addGroup(c.start,c.count,c.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(n[l]=d,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(r));const n=e.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(r))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(r));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kg=new vt,_n=new kg,El=new eh,Zg=new H,wl=new H,Tl=new H,Al=new H,mh=new H,Rl=new H,$g=new H,Cl=new H;class Gr extends tr{constructor(e=new wn,r=new Ml){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,r){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;r.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Rl.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=s[l],f=a[l];d!==0&&(mh.fromBufferAttribute(f,e),o?Rl.addScaledVector(mh,d):Rl.addScaledVector(mh.sub(r),d))}r.add(Rl)}return r}raycast(e,r){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(a),_n.copy(e.ray).recast(e.near),!(El.containsPoint(_n.origin)===!1&&(_n.intersectSphere(El,Zg)===null||_n.origin.distanceToSquared(Zg)>(e.far-e.near)**2))&&(Kg.copy(a).invert(),_n.copy(e.ray).applyMatrix4(Kg),!(i.boundingBox!==null&&_n.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,_n)))}_computeIntersections(e,r,i){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,h=a.groups,m=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const p=h[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(s.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,C=g;M<C;M+=3){const R=s.getX(M),T=s.getX(M+1),L=s.getX(M+2);n=Pl(this,u,e,i,c,d,f,R,T,L),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,r.push(n))}}else{const _=Math.max(0,m.start),S=Math.min(s.count,m.start+m.count);for(let p=_,u=S;p<u;p+=3){const v=s.getX(p),g=s.getX(p+1),M=s.getX(p+2);n=Pl(this,o,e,i,c,d,f,v,g,M),n&&(n.faceIndex=Math.floor(p/3),r.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const p=h[_],u=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=v,C=g;M<C;M+=3){const R=M,T=M+1,L=M+2;n=Pl(this,u,e,i,c,d,f,R,T,L),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=p.materialIndex,r.push(n))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let p=_,u=S;p<u;p+=3){const v=p,g=p+1,M=p+2;n=Pl(this,o,e,i,c,d,f,v,g,M),n&&(n.faceIndex=Math.floor(p/3),r.push(n))}}}}function jx(t,e,r,i,n,a,o,s){let l;if(e.side===Jt?l=i.intersectTriangle(o,a,n,!0,s):l=i.intersectTriangle(n,a,o,e.side===Ii,s),l===null)return null;Cl.copy(s),Cl.applyMatrix4(t.matrixWorld);const c=r.ray.origin.distanceTo(Cl);return c<r.near||c>r.far?null:{distance:c,point:Cl.clone(),object:t}}function Pl(t,e,r,i,n,a,o,s,l,c){t.getVertexPosition(s,wl),t.getVertexPosition(l,Tl),t.getVertexPosition(c,Al);const d=jx(t,e,r,i,wl,Tl,Al,$g);if(d){const f=new H;Nr.getBarycoord($g,wl,Tl,Al,f),n&&(d.uv=Nr.getInterpolatedAttribute(n,s,l,c,f,new Ve)),a&&(d.uv1=Nr.getInterpolatedAttribute(a,s,l,c,f,new Ve)),o&&(d.normal=Nr.getInterpolatedAttribute(o,s,l,c,f,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new H,materialIndex:0};Nr.getNormal(wl,Tl,Al,h.normal),d.face=h,d.barycoord=f}return d}class Ca extends wn{constructor(e=1,r=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,r,e,o,a,0),_("z","y","x",1,-1,i,r,-e,o,a,1),_("x","z","y",1,1,e,i,r,n,o,2),_("x","z","y",1,-1,e,i,-r,n,o,3),_("x","y","z",1,-1,e,r,i,n,a,4),_("x","y","z",-1,-1,e,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(f,2));function _(S,p,u,v,g,M,C,R,T,L,J){const y=M/T,x=C/L,k=M/2,F=C/2,V=R/2,X=T+1,G=L+1;let Z=0,w=0;const U=new H;for(let D=0;D<G;D++){const K=D*x-F;for(let q=0;q<X;q++){const te=q*y-k;U[S]=te*v,U[p]=K*g,U[u]=V,c.push(U.x,U.y,U.z),U[S]=0,U[p]=0,U[u]=R>0?1:-1,d.push(U.x,U.y,U.z),f.push(q/T),f.push(1-D/L),Z+=1}}for(let D=0;D<L;D++)for(let K=0;K<T;K++){const q=h+K+X*D,te=h+K+X*(D+1),z=h+(K+1)+X*(D+1),$=h+(K+1)+X*D;l.push(q,te,$),l.push(te,z,$),w+=6}s.addGroup(m,w,J),m+=w,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ba(t){const e={};for(const r in t){e[r]={};for(const i in t[r]){const n=t[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=n.clone():Array.isArray(n)?e[r][i]=n.slice():e[r][i]=n}}return e}function jt(t){const e={};for(let r=0;r<t.length;r++){const i=ba(t[r]);for(const n in i)e[n]=i[n]}return e}function Xx(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function Qg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Yx={clone:ba,merge:jt};var qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=Kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=Xx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?r.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?r.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?r.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?r.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?r.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?r.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?r.uniforms[n]={type:"m4",value:a.toArray()}:r.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class Jg extends tr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=oi}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new H,ev=new Ve,tv=new Ve;class dr extends Jg{constructor(e=50,r=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=bo*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,r){return this.getViewBounds(e,ev,tv),r.subVectors(tv,ev)}setViewOffset(e,r,i,n,a,o){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*r,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,r-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const Ea=-90,wa=1;class Zx extends tr{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new dr(Ea,wa,e,r);n.layers=this.layers,this.add(n);const a=new dr(Ea,wa,e,r);a.layers=this.layers,this.add(a);const o=new dr(Ea,wa,e,r);o.layers=this.layers,this.add(o);const s=new dr(Ea,wa,e,r);s.layers=this.layers,this.add(s);const l=new dr(Ea,wa,e,r);l.layers=this.layers,this.add(l);const c=new dr(Ea,wa,e,r);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,n,a,o,s,l]=r;for(const c of r)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of r)this.add(c),c.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(r,a),e.setRenderTarget(i,1,n),e.render(r,o),e.setRenderTarget(i,2,n),e.render(r,s),e.setRenderTarget(i,3,n),e.render(r,l),e.setRenderTarget(i,4,n),e.render(r,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,n),e.render(r,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class rv extends er{constructor(e,r,i,n,a,o,s,l,c,d){e=e!==void 0?e:[],r=r!==void 0?r:na,super(e,r,i,n,a,o,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $x extends pn{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new rv(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Pr}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Ca(5,5,5),a=new Wi({name:"CubemapFromEquirect",uniforms:ba(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Ni});a.uniforms.tEquirect.value=r;const o=new Gr(n,a),s=r.minFilter;return r.minFilter===dn&&(r.minFilter=Pr),new Zx(1,10,this).update(e,o),r.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,r,i,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(r,i,n);e.setRenderTarget(a)}}const gh=new H,Qx=new H,Jx=new Be;class yn{constructor(e=new H(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,n){return this.normal.set(e,r,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const n=gh.subVectors(i,r).cross(Qx.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(gh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:r.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||Jx.getNormalMatrix(e),n=this.coplanarPoint(gh).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xn=new eh,Ll=new H;class iv{constructor(e=new yn,r=new yn,i=new yn,n=new yn,a=new yn,o=new yn){this.planes=[e,r,i,n,a,o]}set(e,r,i,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(r),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=oi){const i=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],d=n[5],f=n[6],h=n[7],m=n[8],_=n[9],S=n[10],p=n[11],u=n[12],v=n[13],g=n[14],M=n[15];if(i[0].setComponents(l-a,h-c,p-m,M-u).normalize(),i[1].setComponents(l+a,h+c,p+m,M+u).normalize(),i[2].setComponents(l+o,h+d,p+_,M+v).normalize(),i[3].setComponents(l-o,h-d,p-_,M-v).normalize(),i[4].setComponents(l-s,h-f,p-S,M-g).normalize(),r===oi)i[5].setComponents(l+s,h+f,p+S,M+g).normalize();else if(r===ul)i[5].setComponents(s,f,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),xn.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xn)}intersectsSprite(e){return xn.center.set(0,0,0),xn.radius=.7071067811865476,xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(xn)}intersectsSphere(e){const r=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const n=r[i];if(Ll.x=n.normal.x>0?e.max.x:e.min.x,Ll.y=n.normal.y>0?e.max.y:e.min.y,Ll.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nv(){let t=null,e=!1,r=null,i=null;function n(a,o){r(a,o),i=t.requestAnimationFrame(n)}return{start:function(){e!==!0&&r!==null&&(i=t.requestAnimationFrame(n),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){r=a},setContext:function(a){t=a}}}function eS(t){const e=new WeakMap;function r(s,l){const c=s.array,d=s.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),s.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:f}}function i(s,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,s),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],S=f[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const S=f[m];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,r(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:n,remove:a,update:o}}class kl extends wn{constructor(e=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:n};const a=e/2,o=r/2,s=Math.floor(i),l=Math.floor(n),c=s+1,d=l+1,f=e/s,h=r/l,m=[],_=[],S=[],p=[];for(let u=0;u<d;u++){const v=u*h-o;for(let g=0;g<c;g++){const M=g*f-a;_.push(M,-v,0),S.push(0,0,1),p.push(g/s),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<s;v++){const g=v+c*u,M=v+c*(u+1),C=v+1+c*(u+1),R=v+1+c*u;m.push(g,M,R),m.push(M,C,R)}this.setIndex(m),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(S,3)),this.setAttribute("uv",new vn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}var tS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rS=`#ifdef USE_ALPHAHASH
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
#endif`,iS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sS=`#ifdef USE_AOMAP
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
#endif`,lS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cS=`#ifdef USE_BATCHING
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
#endif`,uS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pS=`#ifdef USE_IRIDESCENCE
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
#endif`,mS=`#ifdef USE_BUMPMAP
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
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ES=`#define PI 3.141592653589793
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
} // validated`,wS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TS=`vec3 transformedNormal = objectNormal;
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
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LS="gl_FragColor = linearToOutputTexel( gl_FragColor );",DS=`
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
}`,US=`#ifdef USE_ENVMAP
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
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
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
#endif`,FS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VS=`#ifdef USE_GRADIENTMAP
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
}`,GS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XS=`uniform bool receiveShadow;
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
#endif`,YS=`#ifdef USE_ENVMAP
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
#endif`,qS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QS=`PhysicalMaterial material;
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
#endif`,JS=`struct PhysicalMaterial {
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
}`,e1=`
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
#endif`,t1=`#if defined( RE_IndirectDiffuse )
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u1=`#if defined( USE_POINTS_UV )
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
#endif`,d1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g1=`#ifdef USE_MORPHTARGETS
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
#endif`,v1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,x1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b1=`#ifdef USE_NORMALMAP
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
#endif`,E1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z1=`float getShadowMask() {
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
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H1=`#ifdef USE_SKINNING
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
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q1=`#ifdef USE_TRANSMISSION
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
#endif`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
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
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
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
}`,sM=`#if DEPTH_PACKING == 3200
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
}`,lM=`#define DISTANCE
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
}`,cM=`#define DISTANCE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`uniform float scale;
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
}`,fM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 diffuse;
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
}`,gM=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,xM=`#define NORMAL
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
}`,SM=`#define NORMAL
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
}`,MM=`#define PHONG
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
}`,bM=`#define PHONG
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
}`,EM=`#define STANDARD
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
}`,wM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,AM=`#define TOON
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
}`,RM=`uniform float size;
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
}`,CM=`uniform vec3 diffuse;
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
}`,PM=`#include <common>
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
}`,LM=`uniform vec3 color;
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
}`,DM=`uniform float rotation;
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
}`,UM=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:tS,alphahash_pars_fragment:rS,alphamap_fragment:iS,alphamap_pars_fragment:nS,alphatest_fragment:aS,alphatest_pars_fragment:oS,aomap_fragment:sS,aomap_pars_fragment:lS,batching_pars_vertex:cS,batching_vertex:uS,begin_vertex:dS,beginnormal_vertex:hS,bsdfs:fS,iridescence_fragment:pS,bumpmap_pars_fragment:mS,clipping_planes_fragment:gS,clipping_planes_pars_fragment:vS,clipping_planes_pars_vertex:_S,clipping_planes_vertex:yS,color_fragment:xS,color_pars_fragment:SS,color_pars_vertex:MS,color_vertex:bS,common:ES,cube_uv_reflection_fragment:wS,defaultnormal_vertex:TS,displacementmap_pars_vertex:AS,displacementmap_vertex:RS,emissivemap_fragment:CS,emissivemap_pars_fragment:PS,colorspace_fragment:LS,colorspace_pars_fragment:DS,envmap_fragment:US,envmap_common_pars_fragment:IS,envmap_pars_fragment:NS,envmap_pars_vertex:OS,envmap_physical_pars_fragment:YS,envmap_vertex:kS,fog_vertex:FS,fog_pars_vertex:zS,fog_fragment:BS,fog_pars_fragment:HS,gradientmap_pars_fragment:VS,lightmap_pars_fragment:GS,lights_lambert_fragment:WS,lights_lambert_pars_fragment:jS,lights_pars_begin:XS,lights_toon_fragment:qS,lights_toon_pars_fragment:KS,lights_phong_fragment:ZS,lights_phong_pars_fragment:$S,lights_physical_fragment:QS,lights_physical_pars_fragment:JS,lights_fragment_begin:e1,lights_fragment_maps:t1,lights_fragment_end:r1,logdepthbuf_fragment:i1,logdepthbuf_pars_fragment:n1,logdepthbuf_pars_vertex:a1,logdepthbuf_vertex:o1,map_fragment:s1,map_pars_fragment:l1,map_particle_fragment:c1,map_particle_pars_fragment:u1,metalnessmap_fragment:d1,metalnessmap_pars_fragment:h1,morphinstance_vertex:f1,morphcolor_vertex:p1,morphnormal_vertex:m1,morphtarget_pars_vertex:g1,morphtarget_vertex:v1,normal_fragment_begin:_1,normal_fragment_maps:y1,normal_pars_fragment:x1,normal_pars_vertex:S1,normal_vertex:M1,normalmap_pars_fragment:b1,clearcoat_normal_fragment_begin:E1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:T1,iridescence_pars_fragment:A1,opaque_fragment:R1,packing:C1,premultiplied_alpha_fragment:P1,project_vertex:L1,dithering_fragment:D1,dithering_pars_fragment:U1,roughnessmap_fragment:I1,roughnessmap_pars_fragment:N1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:k1,shadowmap_vertex:F1,shadowmask_pars_fragment:z1,skinbase_vertex:B1,skinning_pars_vertex:H1,skinning_vertex:V1,skinnormal_vertex:G1,specularmap_fragment:W1,specularmap_pars_fragment:j1,tonemapping_fragment:X1,tonemapping_pars_fragment:Y1,transmission_fragment:q1,transmission_pars_fragment:K1,uv_pars_fragment:Z1,uv_pars_vertex:$1,uv_vertex:Q1,worldpos_vertex:J1,background_vert:eM,background_frag:tM,backgroundCube_vert:rM,backgroundCube_frag:iM,cube_vert:nM,cube_frag:aM,depth_vert:oM,depth_frag:sM,distanceRGBA_vert:lM,distanceRGBA_frag:cM,equirect_vert:uM,equirect_frag:dM,linedashed_vert:hM,linedashed_frag:fM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:vM,meshmatcap_vert:_M,meshmatcap_frag:yM,meshnormal_vert:xM,meshnormal_frag:SM,meshphong_vert:MM,meshphong_frag:bM,meshphysical_vert:EM,meshphysical_frag:wM,meshtoon_vert:TM,meshtoon_frag:AM,points_vert:RM,points_frag:CM,shadow_vert:PM,shadow_frag:LM,sprite_vert:DM,sprite_frag:UM},ue={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Wr={basic:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:jt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:jt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:jt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:jt([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:jt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:jt([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:jt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:jt([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:jt([ue.common,ue.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:jt([ue.lights,ue.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Wr.physical={uniforms:jt([Wr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Dl={r:0,b:0,g:0},Sn=new hi,IM=new vt;function NM(t,e,r,i,n,a,o){const s=new Ze(0);let l=a===!0?0:1,c,d,f=null,h=0,m=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?r:e).get(g)),g}function S(v){let g=!1;const M=_(v);M===null?u(s,l):M&&M.isColor&&(u(M,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(v,g){const M=_(g);M&&(M.isCubeTexture||M.mapping===Js)?(d===void 0&&(d=new Gr(new Ca(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:ba(Wr.backgroundCube.uniforms),vertexShader:Wr.backgroundCube.vertexShader,fragmentShader:Wr.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),Sn.copy(g.backgroundRotation),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(IM.makeRotationFromEuler(Sn)),d.material.toneMapped=qe.getTransfer(M.colorSpace)!==at,(f!==M||h!==M.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=M,h=M.version,m=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Gr(new kl(2,2),new Wi({name:"BackgroundMaterial",uniforms:ba(Wr.background.uniforms),vertexShader:Wr.background.vertexShader,fragmentShader:Wr.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=qe.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,m=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(Dl,Qg(t)),i.buffers.color.setClear(Dl.r,Dl.g,Dl.b,g,o)}return{getClearColor:function(){return s},setClearColor:function(v,g=1){s.set(v),l=g,u(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(s,l)},render:S,addToRenderList:p}}function OM(t,e){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},n=h(null);let a=n,o=!1;function s(y,x,k,F,V){let X=!1;const G=f(F,k,x);a!==G&&(a=G,c(a.object)),X=m(y,F,k,V),X&&_(y,F,k,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(y,x,k,F),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function f(y,x,k){const F=k.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let X=V[x.id];X===void 0&&(X={},V[x.id]=X);let G=X[F];return G===void 0&&(G=h(l()),X[F]=G),G}function h(y){const x=[],k=[],F=[];for(let V=0;V<r;V++)x[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:k,attributeDivisors:F,object:y,attributes:{},index:null}}function m(y,x,k,F){const V=a.attributes,X=x.attributes;let G=0;const Z=k.getAttributes();for(const w in Z)if(Z[w].location>=0){const U=V[w];let D=X[w];if(D===void 0&&(w==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),w==="instanceColor"&&y.instanceColor&&(D=y.instanceColor)),U===void 0||U.attribute!==D||D&&U.data!==D.data)return!0;G++}return a.attributesNum!==G||a.index!==F}function _(y,x,k,F){const V={},X=x.attributes;let G=0;const Z=k.getAttributes();for(const w in Z)if(Z[w].location>=0){let U=X[w];U===void 0&&(w==="instanceMatrix"&&y.instanceMatrix&&(U=y.instanceMatrix),w==="instanceColor"&&y.instanceColor&&(U=y.instanceColor));const D={};D.attribute=U,U&&U.data&&(D.data=U.data),V[w]=D,G++}a.attributes=V,a.attributesNum=G,a.index=F}function S(){const y=a.newAttributes;for(let x=0,k=y.length;x<k;x++)y[x]=0}function p(y){u(y,0)}function u(y,x){const k=a.newAttributes,F=a.enabledAttributes,V=a.attributeDivisors;k[y]=1,F[y]===0&&(t.enableVertexAttribArray(y),F[y]=1),V[y]!==x&&(t.vertexAttribDivisor(y,x),V[y]=x)}function v(){const y=a.newAttributes,x=a.enabledAttributes;for(let k=0,F=x.length;k<F;k++)x[k]!==y[k]&&(t.disableVertexAttribArray(k),x[k]=0)}function g(y,x,k,F,V,X,G){G===!0?t.vertexAttribIPointer(y,x,k,V,X):t.vertexAttribPointer(y,x,k,F,V,X)}function M(y,x,k,F){S();const V=F.attributes,X=k.getAttributes(),G=x.defaultAttributeValues;for(const Z in X){const w=X[Z];if(w.location>=0){let U=V[Z];if(U===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(U=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(U=y.instanceColor)),U!==void 0){const D=U.normalized,K=U.itemSize,q=e.get(U);if(q===void 0)continue;const te=q.buffer,z=q.type,$=q.bytesPerElement,se=z===t.INT||z===t.UNSIGNED_INT||U.gpuType===pd;if(U.isInterleavedBufferAttribute){const oe=U.data,ce=oe.stride,fe=U.offset;if(oe.isInstancedInterleavedBuffer){for(let we=0;we<w.locationSize;we++)u(w.location+we,oe.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let we=0;we<w.locationSize;we++)p(w.location+we);t.bindBuffer(t.ARRAY_BUFFER,te);for(let we=0;we<w.locationSize;we++)g(w.location+we,K/w.locationSize,z,D,ce*$,(fe+K/w.locationSize*we)*$,se)}else{if(U.isInstancedBufferAttribute){for(let oe=0;oe<w.locationSize;oe++)u(w.location+oe,U.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let oe=0;oe<w.locationSize;oe++)p(w.location+oe);t.bindBuffer(t.ARRAY_BUFFER,te);for(let oe=0;oe<w.locationSize;oe++)g(w.location+oe,K/w.locationSize,z,D,K*$,K/w.locationSize*oe*$,se)}}else if(G!==void 0){const D=G[Z];if(D!==void 0)switch(D.length){case 2:t.vertexAttrib2fv(w.location,D);break;case 3:t.vertexAttrib3fv(w.location,D);break;case 4:t.vertexAttrib4fv(w.location,D);break;default:t.vertexAttrib1fv(w.location,D)}}}}v()}function C(){L();for(const y in i){const x=i[y];for(const k in x){const F=x[k];for(const V in F)d(F[V].object),delete F[V];delete x[k]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const x=i[y.id];for(const k in x){const F=x[k];for(const V in F)d(F[V].object),delete F[V];delete x[k]}delete i[y.id]}function T(y){for(const x in i){const k=i[x];if(k[y.id]===void 0)continue;const F=k[y.id];for(const V in F)d(F[V].object),delete F[V];delete k[y.id]}}function L(){J(),o=!0,a!==n&&(a=n,c(a.object))}function J(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:s,reset:L,resetDefaultState:J,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:p,disableUnusedAttributes:v}}function kM(t,e,r){let i;function n(c){i=c}function a(c,d){t.drawArrays(i,c,d),r.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),r.update(d,i,f))}function s(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let h=0;for(let m=0;m<f;m++)h+=d[m];r.update(h,i,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let S=0;S<f;S++)_+=d[S];for(let S=0;S<h.length;S++)r.update(_,i,h[S])}}this.setMode=n,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function FM(t,e,r,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(T){return!(T!==Lr&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(T){const L=T===So&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ni&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ai&&!L)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=r.precision!==void 0?r.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=r.logarithmicDepthBuffer===!0,h=r.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:C,maxSamples:R}}function zM(t){const e=this;let r=null,i=0,n=!1,a=!1;const o=new yn,s=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||n;return n=h,i=f.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){r=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!n||_===null||_.length===0||a&&!p)a?d(null):c();else{const v=a?0:i,g=v*4;let M=u.clippingState||null;l.value=M,M=d(_,h,g,m);for(let C=0;C!==g;++C)M[C]=r[C];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,m,_){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=l.value,_!==!0||p===null){const u=m+S*4,v=h.matrixWorldInverse;s.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let g=0,M=m;g!==S;++g,M+=4)o.copy(f[g]).applyMatrix4(v,s),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}function BM(t){let e=new WeakMap;function r(o,s){return s===cd?o.mapping=na:s===ud&&(o.mapping=aa),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===cd||s===ud)if(e.has(o)){const l=e.get(o).texture;return r(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $x(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",n),r(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class HM extends Jg{constructor(e=-1,r=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=n+r,l=n-r;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Ta=4,av=[.125,.215,.35,.446,.526,.582],Mn=20,vh=new HM,ov=new Ze;let _h=null,yh=0,xh=0,Sh=!1;const bn=(1+Math.sqrt(5))/2,Aa=1/bn,sv=[new H(-bn,Aa,0),new H(bn,Aa,0),new H(-Aa,0,bn),new H(Aa,0,bn),new H(0,bn,-Aa),new H(0,bn,Aa),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,n=100){_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),r>0&&this._blur(a,0,0,r),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,yh,xh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===na||e.mapping===aa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:Pr,minFilter:Pr,generateMipmaps:!1,type:So,format:Lr,colorSpace:Fi,depthBuffer:!1},n=uv(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(e,r,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=VM(a)),this._blurMaterial=GM(a,e,r)}return n}_compileMaterial(e){const r=new Gr(this._lodPlanes[0],e);this._renderer.compile(r,vh)}_sceneToCubeUV(e,r,i,n){const a=new dr(90,1,r,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,d=l.toneMapping;l.getClearColor(ov),l.toneMapping=Oi,l.autoClear=!1;const f=new Ml({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),h=new Gr(new Ca,f);let m=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,m=!0):(f.color.copy(ov),m=!0);for(let S=0;S<6;S++){const p=S%3;p===0?(a.up.set(0,o[S],0),a.lookAt(s[S],0,0)):p===1?(a.up.set(0,0,o[S]),a.lookAt(0,s[S],0)):(a.up.set(0,o[S],0),a.lookAt(0,0,s[S]));const u=this._cubeSize;Ul(n,p*u,S>2?u:0,u,u),l.setRenderTarget(n),m&&l.render(h,a),l.render(e,a)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=d,l.autoClear=c,e.background=_}_textureToCubeUV(e,r){const i=this._renderer,n=e.mapping===na||e.mapping===aa;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dv());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new Gr(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Ul(r,0,0,3*l,2*l),i.setRenderTarget(r),i.render(o,vh)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=sv[(n-a-1)%sv.length];this._blur(e,a-1,a,o,s)}r.autoClear=i}_blur(e,r,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,r,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,r,i,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Gr(this._lodPlanes[n],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Mn-1),S=a/_,p=isFinite(a)?1+Math.floor(d*S):Mn;p>Mn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mn}`);const u=[];let v=0;for(let T=0;T<Mn;++T){const L=T/S,J=Math.exp(-L*L/2);u.push(J),T===0?v+=J:T<p&&(v+=2*J)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const M=this._sizeLods[n],C=3*M*(n>g-Ta?n-g+Ta:0),R=4*(this._cubeSize-M);Ul(r,C,R,3*M,2*M),l.setRenderTarget(r),l.render(f,vh)}}function VM(t){const e=[],r=[],i=[];let n=t;const a=t-Ta+1+av.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);r.push(s);let l=1/s;o>t-Ta?l=av[o-t+Ta-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,S=3,p=2,u=1,v=new Float32Array(S*_*m),g=new Float32Array(p*_*m),M=new Float32Array(u*_*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,L=R>2?0:-1,J=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(J,S*_*R),g.set(h,p*_*R);const y=[R,R,R,R,R,R];M.set(y,u*_*R)}const C=new wn;C.setAttribute("position",new Vr(v,S)),C.setAttribute("uv",new Vr(g,p)),C.setAttribute("faceIndex",new Vr(M,u)),e.push(C),n>Ta&&n--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function uv(t,e,r){const i=new pn(t,e,r);return i.texture.mapping=Js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ul(t,e,r,i,n){t.viewport.set(e,r,i,n),t.scissor.set(e,r,i,n)}function GM(t,e,r){const i=new Float32Array(Mn),n=new H(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Mn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function dv(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function hv(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Mh(){return`

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
	`}function WM(t){let e=new WeakMap,r=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===cd||l===ud,d=l===na||l===aa;if(c||d){let f=e.get(s);const h=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return r===null&&(r=new lv(t)),f=c?r.fromEquirectangular(s,f):r.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const m=s.image;return c&&m&&m.height>0||d&&m&&n(m)?(r===null&&(r=new lv(t)),f=c?r.fromEquirectangular(s):r.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",a),f.texture):null}}}return s}function n(s){let l=0;const c=6;for(let d=0;d<c;d++)s[d]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:o}}function jM(t){const e={};function r(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(i)}return e[i]=n,n}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){const n=r(i);return n===null&&hl("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function XM(t,e,r,i){const n={},a=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const S=h.morphAttributes[_];for(let p=0,u=S.length;p<u;p++)e.remove(S[p])}h.removeEventListener("dispose",o),delete n[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,r.memory.geometries--}function s(f,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,r.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const S=m[_];for(let p=0,u=S.length;p<u;p++)e.update(S[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let S=0;if(m!==null){const v=m.array;S=m.version;for(let g=0,M=v.length;g<M;g+=3){const C=v[g+0],R=v[g+1],T=v[g+2];h.push(C,R,R,T,T,C)}}else if(_!==void 0){const v=_.array;S=_.version;for(let g=0,M=v.length/3-1;g<M;g+=3){const C=g+0,R=g+1,T=g+2;h.push(C,R,R,T,T,C)}}else return;const p=new(Pg(h)?qg:Yg)(h,1);p.version=S;const u=a.get(f);u&&e.remove(u),a.set(f,p)}function d(f){const h=a.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:d}}function YM(t,e,r){let i;function n(h){i=h}let a,o;function s(h){a=h.type,o=h.bytesPerElement}function l(h,m){t.drawElements(i,m,a,h*o),r.update(m,i,1)}function c(h,m,_){_!==0&&(t.drawElementsInstanced(i,m,a,h*o,_),r.update(m,i,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,h,0,_);let S=0;for(let p=0;p<_;p++)S+=m[p];r.update(S,i,1)}function f(h,m,_,S){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/o,m[u],S[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,a,h,0,S,0,_);let u=0;for(let v=0;v<_;v++)u+=m[v];for(let v=0;v<S.length;v++)r.update(u,i,S[v])}}this.setMode=n,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function qM(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(r.calls++,o){case t.TRIANGLES:r.triangles+=s*(a/3);break;case t.LINES:r.lines+=s*(a/2);break;case t.LINE_STRIP:r.lines+=s*(a-1);break;case t.LINE_LOOP:r.lines+=s*a;break;case t.POINTS:r.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:n,update:i}}function KM(t,e,r){const i=new WeakMap,n=new gt;function a(o,s,l){const c=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(s);if(h===void 0||h.count!==f){let _=function(){J.dispose(),i.delete(s),s.removeEventListener("dispose",_)};var m=_;h!==void 0&&h.texture.dispose();const S=s.morphAttributes.position!==void 0,p=s.morphAttributes.normal!==void 0,u=s.morphAttributes.color!==void 0,v=s.morphAttributes.position||[],g=s.morphAttributes.normal||[],M=s.morphAttributes.color||[];let C=0;S===!0&&(C=1),p===!0&&(C=2),u===!0&&(C=3);let R=s.attributes.position.count*C,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const L=new Float32Array(R*T*4*f),J=new Ng(L,R,T,f);J.type=ai,J.needsUpdate=!0;const y=C*4;for(let x=0;x<f;x++){const k=v[x],F=g[x],V=M[x],X=R*T*4*x;for(let G=0;G<k.count;G++){const Z=G*y;S===!0&&(n.fromBufferAttribute(k,G),L[X+Z+0]=n.x,L[X+Z+1]=n.y,L[X+Z+2]=n.z,L[X+Z+3]=0),p===!0&&(n.fromBufferAttribute(F,G),L[X+Z+4]=n.x,L[X+Z+5]=n.y,L[X+Z+6]=n.z,L[X+Z+7]=0),u===!0&&(n.fromBufferAttribute(V,G),L[X+Z+8]=n.x,L[X+Z+9]=n.y,L[X+Z+10]=n.z,L[X+Z+11]=V.itemSize===4?n.w:1)}}h={count:f,texture:J,size:new Ve(R,T)},i.set(s,h),s.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,r);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const S=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,r),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:a}}function ZM(t,e,r,i){let n=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(r.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,t.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),r.remove(c.instanceMatrix),c.instanceColor!==null&&r.remove(c.instanceColor)}return{update:a,dispose:o}}class fv extends er{constructor(e,r,i,n,a,o,s,l,c,d=sa){if(d!==sa&&d!==la)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===sa&&(i=hn),i===void 0&&d===la&&(i=oa),super(null,n,a,o,s,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=s!==void 0?s:xr,this.minFilter=l!==void 0?l:xr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const pv=new er,mv=new fv(1,1),gv=new Ng,vv=new Nx,_v=new rv,yv=[],xv=[],Sv=new Float32Array(16),Mv=new Float32Array(9),bv=new Float32Array(4);function Ra(t,e,r){const i=t[0];if(i<=0||i>0)return t;const n=e*r;let a=yv[n];if(a===void 0&&(a=new Float32Array(n),yv[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=r,t[o].toArray(a,s)}return a}function Et(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function wt(t,e){for(let r=0,i=e.length;r<i;r++)t[r]=e[r]}function Il(t,e){let r=xv[e];r===void 0&&(r=new Int32Array(e),xv[e]=r);for(let i=0;i!==e;++i)r[i]=t.allocateTextureUnit();return r}function $M(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function QM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Et(r,e))return;t.uniform2fv(this.addr,e),wt(r,e)}}function JM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Et(r,e))return;t.uniform3fv(this.addr,e),wt(r,e)}}function eb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Et(r,e))return;t.uniform4fv(this.addr,e),wt(r,e)}}function tb(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Et(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(r,e)}else{if(Et(r,i))return;bv.set(i),t.uniformMatrix2fv(this.addr,!1,bv),wt(r,i)}}function rb(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Et(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(r,e)}else{if(Et(r,i))return;Mv.set(i),t.uniformMatrix3fv(this.addr,!1,Mv),wt(r,i)}}function ib(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Et(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(r,e)}else{if(Et(r,i))return;Sv.set(i),t.uniformMatrix4fv(this.addr,!1,Sv),wt(r,i)}}function nb(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function ab(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Et(r,e))return;t.uniform2iv(this.addr,e),wt(r,e)}}function ob(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Et(r,e))return;t.uniform3iv(this.addr,e),wt(r,e)}}function sb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Et(r,e))return;t.uniform4iv(this.addr,e),wt(r,e)}}function lb(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function cb(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Et(r,e))return;t.uniform2uiv(this.addr,e),wt(r,e)}}function ub(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Et(r,e))return;t.uniform3uiv(this.addr,e),wt(r,e)}}function db(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Et(r,e))return;t.uniform4uiv(this.addr,e),wt(r,e)}}function hb(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n);let a;this.type===t.SAMPLER_2D_SHADOW?(mv.compareFunction=Tg,a=mv):a=pv,r.setTexture2D(e||a,n)}function fb(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(e||vv,n)}function pb(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(e||_v,n)}function mb(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(e||gv,n)}function gb(t){switch(t){case 5126:return $M;case 35664:return QM;case 35665:return JM;case 35666:return eb;case 35674:return tb;case 35675:return rb;case 35676:return ib;case 5124:case 35670:return nb;case 35667:case 35671:return ab;case 35668:case 35672:return ob;case 35669:case 35673:return sb;case 5125:return lb;case 36294:return cb;case 36295:return ub;case 36296:return db;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function vb(t,e){t.uniform1fv(this.addr,e)}function _b(t,e){const r=Ra(e,this.size,2);t.uniform2fv(this.addr,r)}function yb(t,e){const r=Ra(e,this.size,3);t.uniform3fv(this.addr,r)}function xb(t,e){const r=Ra(e,this.size,4);t.uniform4fv(this.addr,r)}function Sb(t,e){const r=Ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function Mb(t,e){const r=Ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function bb(t,e){const r=Ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function Eb(t,e){t.uniform1iv(this.addr,e)}function wb(t,e){t.uniform2iv(this.addr,e)}function Tb(t,e){t.uniform3iv(this.addr,e)}function Ab(t,e){t.uniform4iv(this.addr,e)}function Rb(t,e){t.uniform1uiv(this.addr,e)}function Cb(t,e){t.uniform2uiv(this.addr,e)}function Pb(t,e){t.uniform3uiv(this.addr,e)}function Lb(t,e){t.uniform4uiv(this.addr,e)}function Db(t,e,r){const i=this.cache,n=e.length,a=Il(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let o=0;o!==n;++o)r.setTexture2D(e[o]||pv,a[o])}function Ub(t,e,r){const i=this.cache,n=e.length,a=Il(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let o=0;o!==n;++o)r.setTexture3D(e[o]||vv,a[o])}function Ib(t,e,r){const i=this.cache,n=e.length,a=Il(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let o=0;o!==n;++o)r.setTextureCube(e[o]||_v,a[o])}function Nb(t,e,r){const i=this.cache,n=e.length,a=Il(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let o=0;o!==n;++o)r.setTexture2DArray(e[o]||gv,a[o])}function Ob(t){switch(t){case 5126:return vb;case 35664:return _b;case 35665:return yb;case 35666:return xb;case 35674:return Sb;case 35675:return Mb;case 35676:return bb;case 5124:case 35670:return Eb;case 35667:case 35671:return wb;case 35668:case 35672:return Tb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Cb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Nb}}class kb{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=gb(r.type)}}class Fb{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=Ob(r.type)}}class zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,r[s.id],i)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function Ev(t,e){t.seq.push(e),t.map[e.id]=e}function Bb(t,e,r){const i=t.name,n=i.length;for(bh.lastIndex=0;;){const a=bh.exec(i),o=bh.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){Ev(r,c===void 0?new kb(s,t,e):new Fb(s,t,e));break}else{let d=r.map[s];d===void 0&&(d=new zb(s),Ev(r,d)),r=d}}}class Nl{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(r,n),o=e.getUniformLocation(r,a.name);Bb(a,o,this)}}setValue(e,r,i,n){const a=this.map[r];a!==void 0&&a.setValue(e,i,n)}setOptional(e,r,i){const n=r[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,r,i,n){for(let a=0,o=r.length;a!==o;++a){const s=r[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,r){const i=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in r&&i.push(o)}return i}}function wv(t,e,r){const i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}const Hb=37297;let Vb=0;function Gb(t,e){const r=t.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,r.length);for(let o=n;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${r[o]}`)}return i.join(`
`)}function Wb(t){const e=qe.getPrimaries(qe.workingColorSpace),r=qe.getPrimaries(t);let i;switch(e===r?i="":e===cl&&r===ll?i="LinearDisplayP3ToLinearSRGB":e===ll&&r===cl&&(i="LinearSRGBToLinearDisplayP3"),t){case Fi:case ol:return[i,"LinearTransferOETF"];case Hr:case Xd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Tv(t,e,r){const i=t.getShaderParameter(e,t.COMPILE_STATUS),n=t.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+Gb(t.getShaderSource(e),o)}else return n}function jb(t,e){const r=Wb(e);return`vec4 ${t}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function Xb(t,e){let r;switch(e){case jy:r="Linear";break;case Xy:r="Reinhard";break;case Yy:r="Cineon";break;case qy:r="ACESFilmic";break;case Zy:r="AgX";break;case $y:r="Neutral";break;case Ky:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const Ol=new H;function Yb(){qe.getLuminanceCoefficients(Ol);const t=Ol.x.toFixed(4),e=Ol.y.toFixed(4),r=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function Kb(t){const e=[];for(const r in t){const i=t[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function Zb(t,e){const r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=t.getActiveAttrib(e,n),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),r[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return r}function Uo(t){return t!==""}function Av(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $b=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(t){return t.replace($b,Jb)}const Qb=new Map;function Jb(t,e){let r=ze[e];if(r===void 0){const i=Qb.get(e);if(i!==void 0)r=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Eh(r)}const eE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(t){return t.replace(eE,tE)}function tE(t,e,r,i){let n="";for(let a=parseInt(e);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Pv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function rE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ey?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function iE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case na:case aa:e="ENVMAP_TYPE_CUBE";break;case Js:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case aa:e="ENVMAP_MODE_REFRACTION";break}return e}function aE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fg:e="ENVMAP_BLENDING_MULTIPLY";break;case Gy:e="ENVMAP_BLENDING_MIX";break;case Wy:e="ENVMAP_BLENDING_ADD";break}return e}function oE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function sE(t,e,r,i){const n=t.getContext(),a=r.defines;let o=r.vertexShader,s=r.fragmentShader;const l=rE(r),c=iE(r),d=nE(r),f=aE(r),h=oE(r),m=qb(r),_=Kb(a),S=n.createProgram();let p,u,v=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(p=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_].filter(Uo).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_].filter(Uo).join(`
`),u.length>0&&(u+=`
`)):(p=[Pv(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+d:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),u=[Pv(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.envMap?"#define "+d:"",r.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==Oi?"#define TONE_MAPPING":"",r.toneMapping!==Oi?ze.tonemapping_pars_fragment:"",r.toneMapping!==Oi?Xb("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,jb("linearToOutputTexel",r.outputColorSpace),Yb(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Uo).join(`
`)),o=Eh(o),o=Av(o,r),o=Rv(o,r),s=Eh(s),s=Av(s,r),s=Rv(s,r),o=Cv(o),s=Cv(s),r.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",r.glslVersion===Rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===Rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+p+o,M=v+u+s,C=wv(n,n.VERTEX_SHADER,g),R=wv(n,n.FRAGMENT_SHADER,M);n.attachShader(S,C),n.attachShader(S,R),r.index0AttributeName!==void 0?n.bindAttribLocation(S,0,r.index0AttributeName):r.morphTargets===!0&&n.bindAttribLocation(S,0,"position"),n.linkProgram(S);function T(x){if(t.debug.checkShaderErrors){const k=n.getProgramInfoLog(S).trim(),F=n.getShaderInfoLog(C).trim(),V=n.getShaderInfoLog(R).trim();let X=!0,G=!0;if(n.getProgramParameter(S,n.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,S,C,R);else{const Z=Tv(n,C,"vertex"),w=Tv(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(S,n.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+k+`
`+Z+`
`+w)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||V==="")&&(G=!1);G&&(x.diagnostics={runnable:X,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:u}})}n.deleteShader(C),n.deleteShader(R),L=new Nl(n,S),J=Zb(n,S)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let J;this.getAttributes=function(){return J===void 0&&T(this),J};let y=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(S,Hb)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(S),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Vb++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=R,this}let lE=0;class cE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(r),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new uE(e),r.set(e,i)),i}}class uE{constructor(e){this.id=lE++,this.code=e,this.usedTimes=0}}function dE(t,e,r,i,n,a,o){const s=new nh,l=new cE,c=new Set,d=[],f=n.logarithmicDepthBuffer,h=n.reverseDepthBuffer,m=n.vertexTextures;let _=n.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,x,k,F,V){const X=F.fog,G=V.geometry,Z=y.isMeshStandardMaterial?F.environment:null,w=(y.isMeshStandardMaterial?r:e).get(y.envMap||Z),U=w&&w.mapping===Js?w.image.height:null,D=S[y.type];y.precision!==null&&(_=n.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const K=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,q=K!==void 0?K.length:0;let te=0;G.morphAttributes.position!==void 0&&(te=1),G.morphAttributes.normal!==void 0&&(te=2),G.morphAttributes.color!==void 0&&(te=3);let z,$,se,oe;if(D){const Yt=Wr[D];z=Yt.vertexShader,$=Yt.fragmentShader}else z=y.vertexShader,$=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),oe=l.getFragmentShaderID(y);const ce=t.getRenderTarget(),fe=V.isInstancedMesh===!0,we=V.isBatchedMesh===!0,Oe=!!y.map,Le=!!y.matcap,P=!!w,$e=!!y.aoMap,Fe=!!y.lightMap,Xe=!!y.bumpMap,De=!!y.normalMap,rt=!!y.displacementMap,Ne=!!y.emissiveMap,A=!!y.metalnessMap,b=!!y.roughnessMap,B=y.anisotropy>0,ee=y.clearcoat>0,ne=y.dispersion>0,Q=y.iridescence>0,be=y.sheen>0,he=y.transmission>0,ye=B&&!!y.anisotropyMap,Ge=ee&&!!y.clearcoatMap,le=ee&&!!y.clearcoatNormalMap,Se=ee&&!!y.clearcoatRoughnessMap,Ue=Q&&!!y.iridescenceMap,Ie=Q&&!!y.iridescenceThicknessMap,_e=be&&!!y.sheenColorMap,We=be&&!!y.sheenRoughnessMap,ke=!!y.specularMap,Je=!!y.specularColorMap,I=!!y.specularIntensityMap,me=he&&!!y.transmissionMap,Y=he&&!!y.thicknessMap,re=!!y.gradientMap,pe=!!y.alphaMap,de=y.alphaTest>0,et=!!y.alphaHash,_t=!!y.extensions;let Xt=Oi;y.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Xt=t.toneMapping);const Ye={shaderID:D,shaderType:y.type,shaderName:y.name,vertexShader:z,fragmentShader:$,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:we,batchingColor:we&&V._colorsTexture!==null,instancing:fe,instancingColor:fe&&V.instanceColor!==null,instancingMorph:fe&&V.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Fi,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:Le,envMap:P,envMapMode:P&&w.mapping,envMapCubeUVHeight:U,aoMap:$e,lightMap:Fe,bumpMap:Xe,normalMap:De,displacementMap:m&&rt,emissiveMap:Ne,normalMapObjectSpace:De&&y.normalMapType===rx,normalMapTangentSpace:De&&y.normalMapType===tx,metalnessMap:A,roughnessMap:b,anisotropy:B,anisotropyMap:ye,clearcoat:ee,clearcoatMap:Ge,clearcoatNormalMap:le,clearcoatRoughnessMap:Se,dispersion:ne,iridescence:Q,iridescenceMap:Ue,iridescenceThicknessMap:Ie,sheen:be,sheenColorMap:_e,sheenRoughnessMap:We,specularMap:ke,specularColorMap:Je,specularIntensityMap:I,transmission:he,transmissionMap:me,thicknessMap:Y,gradientMap:re,opaque:y.transparent===!1&&y.blending===ra&&y.alphaToCoverage===!1,alphaMap:pe,alphaTest:de,alphaHash:et,combine:y.combine,mapUv:Oe&&p(y.map.channel),aoMapUv:$e&&p(y.aoMap.channel),lightMapUv:Fe&&p(y.lightMap.channel),bumpMapUv:Xe&&p(y.bumpMap.channel),normalMapUv:De&&p(y.normalMap.channel),displacementMapUv:rt&&p(y.displacementMap.channel),emissiveMapUv:Ne&&p(y.emissiveMap.channel),metalnessMapUv:A&&p(y.metalnessMap.channel),roughnessMapUv:b&&p(y.roughnessMap.channel),anisotropyMapUv:ye&&p(y.anisotropyMap.channel),clearcoatMapUv:Ge&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(y.sheenRoughnessMap.channel),specularMapUv:ke&&p(y.specularMap.channel),specularColorMapUv:Je&&p(y.specularColorMap.channel),specularIntensityMapUv:I&&p(y.specularIntensityMap.channel),transmissionMapUv:me&&p(y.transmissionMap.channel),thicknessMapUv:Y&&p(y.thicknessMap.channel),alphaMapUv:pe&&p(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(De||B),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(Oe||pe),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:te,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&qe.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ii,flipSided:y.side===Jt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function v(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)x.push(k),x.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(g(x,y),M(x,y),x.push(t.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function g(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function M(y,x){s.disableAll(),x.supportsVertexTextures&&s.enable(0),x.instancing&&s.enable(1),x.instancingColor&&s.enable(2),x.instancingMorph&&s.enable(3),x.matcap&&s.enable(4),x.envMap&&s.enable(5),x.normalMapObjectSpace&&s.enable(6),x.normalMapTangentSpace&&s.enable(7),x.clearcoat&&s.enable(8),x.iridescence&&s.enable(9),x.alphaTest&&s.enable(10),x.vertexColors&&s.enable(11),x.vertexAlphas&&s.enable(12),x.vertexUv1s&&s.enable(13),x.vertexUv2s&&s.enable(14),x.vertexUv3s&&s.enable(15),x.vertexTangents&&s.enable(16),x.anisotropy&&s.enable(17),x.alphaHash&&s.enable(18),x.batching&&s.enable(19),x.dispersion&&s.enable(20),x.batchingColor&&s.enable(21),y.push(s.mask),s.disableAll(),x.fog&&s.enable(0),x.useFog&&s.enable(1),x.flatShading&&s.enable(2),x.logarithmicDepthBuffer&&s.enable(3),x.reverseDepthBuffer&&s.enable(4),x.skinning&&s.enable(5),x.morphTargets&&s.enable(6),x.morphNormals&&s.enable(7),x.morphColors&&s.enable(8),x.premultipliedAlpha&&s.enable(9),x.shadowMapEnabled&&s.enable(10),x.doubleSided&&s.enable(11),x.flipSided&&s.enable(12),x.useDepthPacking&&s.enable(13),x.dithering&&s.enable(14),x.transmission&&s.enable(15),x.sheen&&s.enable(16),x.opaque&&s.enable(17),x.pointsUvs&&s.enable(18),x.decodeVideoTexture&&s.enable(19),x.alphaToCoverage&&s.enable(20),y.push(s.mask)}function C(y){const x=S[y.type];let k;if(x){const F=Wr[x];k=Yx.clone(F.uniforms)}else k=y.uniforms;return k}function R(y,x){let k;for(let F=0,V=d.length;F<V;F++){const X=d[F];if(X.cacheKey===x){k=X,++k.usedTimes;break}}return k===void 0&&(k=new sE(t,x,y,a),d.push(k)),k}function T(y){if(--y.usedTimes===0){const x=d.indexOf(y);d[x]=d[d.length-1],d.pop(),y.destroy()}}function L(y){l.remove(y)}function J(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:C,acquireProgram:R,releaseProgram:T,releaseShaderCache:L,programs:d,dispose:J}}function hE(){let t=new WeakMap;function e(o){return t.has(o)}function r(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function i(o){t.delete(o)}function n(o,s,l){t.get(o)[s]=l}function a(){t=new WeakMap}return{has:e,get:r,remove:i,update:n,dispose:a}}function fE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Lv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dv(){const t=[];let e=0;const r=[],i=[],n=[];function a(){e=0,r.length=0,i.length=0,n.length=0}function o(f,h,m,_,S,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:S,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=S,u.group=p),e++,u}function s(f,h,m,_,S,p){const u=o(f,h,m,_,S,p);m.transmission>0?i.push(u):m.transparent===!0?n.push(u):r.push(u)}function l(f,h,m,_,S,p){const u=o(f,h,m,_,S,p);m.transmission>0?i.unshift(u):m.transparent===!0?n.unshift(u):r.unshift(u)}function c(f,h){r.length>1&&r.sort(f||fE),i.length>1&&i.sort(h||Lv),n.length>1&&n.sort(h||Lv)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:s,unshift:l,finish:d,sort:c}}function pE(){let t=new WeakMap;function e(i,n){const a=t.get(i);let o;return a===void 0?(o=new Dv,t.set(i,[o])):n>=a.length?(o=new Dv,a.push(o)):o=a[n],o}function r(){t=new WeakMap}return{get:e,dispose:r}}function mE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new H,color:new Ze};break;case"SpotLight":r={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":r={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":r={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=r,r}}}function gE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let vE=0;function _E(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yE(t){const e=new mE,r=gE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const n=new H,a=new vt,o=new vt;function s(c){let d=0,f=0,h=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let m=0,_=0,S=0,p=0,u=0,v=0,g=0,M=0,C=0,R=0,T=0;c.sort(_E);for(let J=0,y=c.length;J<y;J++){const x=c[J],k=x.color,F=x.intensity,V=x.distance,X=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)d+=k.r*F,f+=k.g*F,h+=k.b*F;else if(x.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(x.sh.coefficients[G],F);T++}else if(x.isDirectionalLight){const G=e.get(x);if(G.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const Z=x.shadow,w=r.get(x);w.shadowIntensity=Z.intensity,w.shadowBias=Z.bias,w.shadowNormalBias=Z.normalBias,w.shadowRadius=Z.radius,w.shadowMapSize=Z.mapSize,i.directionalShadow[m]=w,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=x.shadow.matrix,v++}i.directional[m]=G,m++}else if(x.isSpotLight){const G=e.get(x);G.position.setFromMatrixPosition(x.matrixWorld),G.color.copy(k).multiplyScalar(F),G.distance=V,G.coneCos=Math.cos(x.angle),G.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),G.decay=x.decay,i.spot[S]=G;const Z=x.shadow;if(x.map&&(i.spotLightMap[C]=x.map,C++,Z.updateMatrices(x),x.castShadow&&R++),i.spotLightMatrix[S]=Z.matrix,x.castShadow){const w=r.get(x);w.shadowIntensity=Z.intensity,w.shadowBias=Z.bias,w.shadowNormalBias=Z.normalBias,w.shadowRadius=Z.radius,w.shadowMapSize=Z.mapSize,i.spotShadow[S]=w,i.spotShadowMap[S]=X,M++}S++}else if(x.isRectAreaLight){const G=e.get(x);G.color.copy(k).multiplyScalar(F),G.halfWidth.set(x.width*.5,0,0),G.halfHeight.set(0,x.height*.5,0),i.rectArea[p]=G,p++}else if(x.isPointLight){const G=e.get(x);if(G.color.copy(x.color).multiplyScalar(x.intensity),G.distance=x.distance,G.decay=x.decay,x.castShadow){const Z=x.shadow,w=r.get(x);w.shadowIntensity=Z.intensity,w.shadowBias=Z.bias,w.shadowNormalBias=Z.normalBias,w.shadowRadius=Z.radius,w.shadowMapSize=Z.mapSize,w.shadowCameraNear=Z.camera.near,w.shadowCameraFar=Z.camera.far,i.pointShadow[_]=w,i.pointShadowMap[_]=X,i.pointShadowMatrix[_]=x.shadow.matrix,g++}i.point[_]=G,_++}else if(x.isHemisphereLight){const G=e.get(x);G.skyColor.copy(x.color).multiplyScalar(F),G.groundColor.copy(x.groundColor).multiplyScalar(F),i.hemi[u]=G,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==S||L.rectAreaLength!==p||L.hemiLength!==u||L.numDirectionalShadows!==v||L.numPointShadows!==g||L.numSpotShadows!==M||L.numSpotMaps!==C||L.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=M+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,L.directionalLength=m,L.pointLength=_,L.spotLength=S,L.rectAreaLength=p,L.hemiLength=u,L.numDirectionalShadows=v,L.numPointShadows=g,L.numSpotShadows=M,L.numSpotMaps=C,L.numLightProbes=T,i.version=vE++)}function l(c,d){let f=0,h=0,m=0,_=0,S=0;const p=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),f++}else if(g.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),m++}else if(g.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),o.identity(),a.copy(g.matrixWorld),a.premultiply(p),o.extractRotation(a),M.halfWidth.set(g.width*.5,0,0),M.halfHeight.set(0,g.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(g.matrixWorld),M.position.applyMatrix4(p),h++}else if(g.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(g.matrixWorld),M.direction.transformDirection(p),S++}}}return{setup:s,setupView:l,state:i}}function Uv(t){const e=new yE(t),r=[],i=[];function n(d){c.camera=d,r.length=0,i.length=0}function a(d){r.push(d)}function o(d){i.push(d)}function s(){e.setup(r)}function l(d){e.setupView(r,d)}const c={lightsArray:r,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function xE(t){let e=new WeakMap;function r(n,a=0){const o=e.get(n);let s;return o===void 0?(s=new Uv(t),e.set(n,[s])):a>=o.length?(s=new Uv(t),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:r,dispose:i}}class SE extends Sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ME extends Sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EE=`uniform sampler2D shadow_pass;
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
}`;function wE(t,e,r){let i=new iv;const n=new Ve,a=new Ve,o=new gt,s=new SE({depthPacking:ex}),l=new ME,c={},d=r.maxTextureSize,f={[Ii]:Jt,[Jt]:Ii,[ii]:ii},h=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:bE,fragmentShader:EE}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new wn;_.setAttribute("position",new Vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Gr(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cg;let u=this.type;this.render=function(R,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const J=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ni),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=u!==ri&&this.type===ri,V=u===ri&&this.type!==ri;for(let X=0,G=R.length;X<G;X++){const Z=R[X],w=Z.shadow;if(w===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(w.autoUpdate===!1&&w.needsUpdate===!1)continue;n.copy(w.mapSize);const U=w.getFrameExtents();if(n.multiply(U),a.copy(w.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(a.x=Math.floor(d/U.x),n.x=a.x*U.x,w.mapSize.x=a.x),n.y>d&&(a.y=Math.floor(d/U.y),n.y=a.y*U.y,w.mapSize.y=a.y)),w.map===null||F===!0||V===!0){const K=this.type!==ri?{minFilter:xr,magFilter:xr}:{};w.map!==null&&w.map.dispose(),w.map=new pn(n.x,n.y,K),w.map.texture.name=Z.name+".shadowMap",w.camera.updateProjectionMatrix()}t.setRenderTarget(w.map),t.clear();const D=w.getViewportCount();for(let K=0;K<D;K++){const q=w.getViewport(K);o.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),k.viewport(o),w.updateMatrices(Z,K),i=w.getFrustum(),M(T,L,w.camera,Z,this.type)}w.isPointLightShadow!==!0&&this.type===ri&&v(w,L),w.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(J,y,x)};function v(R,T){const L=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new pn(n.x,n.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(T,null,L,h,S,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(T,null,L,m,S,null)}function g(R,T,L,J){let y=null;const x=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(x!==void 0)y=x;else if(y=L.isPointLight===!0?l:s,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=y.uuid,F=T.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let X=V[F];X===void 0&&(X=y.clone(),V[F]=X,T.addEventListener("dispose",C)),y=X}if(y.visible=T.visible,y.wireframe=T.wireframe,J===ri?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=t.properties.get(y);k.light=L}return y}function M(R,T,L,J,y){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===ri)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const k=e.update(R),F=R.material;if(Array.isArray(F)){const V=k.groups;for(let X=0,G=V.length;X<G;X++){const Z=V[X],w=F[Z.materialIndex];if(w&&w.visible){const U=g(R,w,J,y);R.onBeforeShadow(t,R,T,L,k,U,Z),t.renderBufferDirect(L,null,k,U,R,Z),R.onAfterShadow(t,R,T,L,k,U,Z)}}}else if(F.visible){const V=g(R,F,J,y);R.onBeforeShadow(t,R,T,L,k,V,null),t.renderBufferDirect(L,null,k,V,R,null),R.onAfterShadow(t,R,T,L,k,V,null)}}const x=R.children;for(let k=0,F=x.length;k<F;k++)M(x[k],T,L,J,y)}function C(R){R.target.removeEventListener("dispose",C);for(const T in c){const L=c[T],J=R.target.uuid;J in L&&(L[J].dispose(),delete L[J])}}}const TE={[rd]:id,[nd]:sd,[ad]:ld,[ia]:od,[id]:rd,[sd]:nd,[ld]:ad,[od]:ia};function AE(t){function e(){let I=!1;const me=new gt;let Y=null;const re=new gt(0,0,0,0);return{setMask:function(pe){Y!==pe&&!I&&(t.colorMask(pe,pe,pe,pe),Y=pe)},setLocked:function(pe){I=pe},setClear:function(pe,de,et,_t,Xt){Xt===!0&&(pe*=_t,de*=_t,et*=_t),me.set(pe,de,et,_t),re.equals(me)===!1&&(t.clearColor(pe,de,et,_t),re.copy(me))},reset:function(){I=!1,Y=null,re.set(-1,0,0,0)}}}function r(){let I=!1,me=!1,Y=null,re=null,pe=null;return{setReversed:function(de){me=de},setTest:function(de){de?se(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(de){Y!==de&&!I&&(t.depthMask(de),Y=de)},setFunc:function(de){if(me&&(de=TE[de]),re!==de){switch(de){case rd:t.depthFunc(t.NEVER);break;case id:t.depthFunc(t.ALWAYS);break;case nd:t.depthFunc(t.LESS);break;case ia:t.depthFunc(t.LEQUAL);break;case ad:t.depthFunc(t.EQUAL);break;case od:t.depthFunc(t.GEQUAL);break;case sd:t.depthFunc(t.GREATER);break;case ld:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=de}},setLocked:function(de){I=de},setClear:function(de){pe!==de&&(t.clearDepth(de),pe=de)},reset:function(){I=!1,Y=null,re=null,pe=null}}}function i(){let I=!1,me=null,Y=null,re=null,pe=null,de=null,et=null,_t=null,Xt=null;return{setTest:function(Ye){I||(Ye?se(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Ye){me!==Ye&&!I&&(t.stencilMask(Ye),me=Ye)},setFunc:function(Ye,Yt,jr){(Y!==Ye||re!==Yt||pe!==jr)&&(t.stencilFunc(Ye,Yt,jr),Y=Ye,re=Yt,pe=jr)},setOp:function(Ye,Yt,jr){(de!==Ye||et!==Yt||_t!==jr)&&(t.stencilOp(Ye,Yt,jr),de=Ye,et=Yt,_t=jr)},setLocked:function(Ye){I=Ye},setClear:function(Ye){Xt!==Ye&&(t.clearStencil(Ye),Xt=Ye)},reset:function(){I=!1,me=null,Y=null,re=null,pe=null,de=null,et=null,_t=null,Xt=null}}}const n=new e,a=new r,o=new i,s=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,h=[],m=null,_=!1,S=null,p=null,u=null,v=null,g=null,M=null,C=null,R=new Ze(0,0,0),T=0,L=!1,J=null,y=null,x=null,k=null,F=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=G>=2);let w=null,U={};const D=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),q=new gt().fromArray(D),te=new gt().fromArray(K);function z(I,me,Y,re){const pe=new Uint8Array(4),de=t.createTexture();t.bindTexture(I,de),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<Y;et++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(me,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(me+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return de}const $={};$[t.TEXTURE_2D]=z(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(t.DEPTH_TEST),a.setFunc(ia),Fe(!1),Xe(lg),se(t.CULL_FACE),P(Ni);function se(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function oe(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function ce(I,me){return d[I]!==me?(t.bindFramebuffer(I,me),d[I]=me,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=me),!0):!1}function fe(I,me){let Y=h,re=!1;if(I){Y=f.get(me),Y===void 0&&(Y=[],f.set(me,Y));const pe=I.textures;if(Y.length!==pe.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let de=0,et=pe.length;de<et;de++)Y[de]=t.COLOR_ATTACHMENT0+de;Y.length=pe.length,re=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,re=!0);re&&t.drawBuffers(Y)}function we(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const Oe={[cn]:t.FUNC_ADD,[Ty]:t.FUNC_SUBTRACT,[Ay]:t.FUNC_REVERSE_SUBTRACT};Oe[Ry]=t.MIN,Oe[Cy]=t.MAX;const Le={[Py]:t.ZERO,[Ly]:t.ONE,[Dy]:t.SRC_COLOR,[ed]:t.SRC_ALPHA,[Fy]:t.SRC_ALPHA_SATURATE,[Oy]:t.DST_COLOR,[Iy]:t.DST_ALPHA,[Uy]:t.ONE_MINUS_SRC_COLOR,[td]:t.ONE_MINUS_SRC_ALPHA,[ky]:t.ONE_MINUS_DST_COLOR,[Ny]:t.ONE_MINUS_DST_ALPHA,[zy]:t.CONSTANT_COLOR,[By]:t.ONE_MINUS_CONSTANT_COLOR,[Hy]:t.CONSTANT_ALPHA,[Vy]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,me,Y,re,pe,de,et,_t,Xt,Ye){if(I===Ni){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(se(t.BLEND),_=!0),I!==wy){if(I!==S||Ye!==L){if((p!==cn||g!==cn)&&(t.blendEquation(t.FUNC_ADD),p=cn,g=cn),Ye)switch(I){case ra:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ug:t.blendFunc(t.ONE,t.ONE);break;case dg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ra:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ug:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case dg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,v=null,M=null,C=null,R.set(0,0,0),T=0,S=I,L=Ye}return}pe=pe||me,de=de||Y,et=et||re,(me!==p||pe!==g)&&(t.blendEquationSeparate(Oe[me],Oe[pe]),p=me,g=pe),(Y!==u||re!==v||de!==M||et!==C)&&(t.blendFuncSeparate(Le[Y],Le[re],Le[de],Le[et]),u=Y,v=re,M=de,C=et),(_t.equals(R)===!1||Xt!==T)&&(t.blendColor(_t.r,_t.g,_t.b,Xt),R.copy(_t),T=Xt),S=I,L=!1}function $e(I,me){I.side===ii?oe(t.CULL_FACE):se(t.CULL_FACE);let Y=I.side===Jt;me&&(Y=!Y),Fe(Y),I.blending===ra&&I.transparent===!1?P(Ni):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),n.setMask(I.colorWrite);const re=I.stencilWrite;o.setTest(re),re&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(I){J!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),J=I)}function Xe(I){I!==My?(se(t.CULL_FACE),I!==y&&(I===lg?t.cullFace(t.BACK):I===by?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),y=I}function De(I){I!==x&&(X&&t.lineWidth(I),x=I)}function rt(I,me,Y){I?(se(t.POLYGON_OFFSET_FILL),(k!==me||F!==Y)&&(t.polygonOffset(me,Y),k=me,F=Y)):oe(t.POLYGON_OFFSET_FILL)}function Ne(I){I?se(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function A(I){I===void 0&&(I=t.TEXTURE0+V-1),w!==I&&(t.activeTexture(I),w=I)}function b(I,me,Y){Y===void 0&&(w===null?Y=t.TEXTURE0+V-1:Y=w);let re=U[Y];re===void 0&&(re={type:void 0,texture:void 0},U[Y]=re),(re.type!==I||re.texture!==me)&&(w!==Y&&(t.activeTexture(Y),w=Y),t.bindTexture(I,me||$[I]),re.type=I,re.texture=me)}function B(){const I=U[w];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(I){q.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),q.copy(I))}function _e(I){te.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function We(I,me){let Y=l.get(me);Y===void 0&&(Y=new WeakMap,l.set(me,Y));let re=Y.get(I);re===void 0&&(re=t.getUniformBlockIndex(me,I.name),Y.set(I,re))}function ke(I,me){const Y=l.get(me).get(I);s.get(me)!==Y&&(t.uniformBlockBinding(me,Y,I.__bindingPointIndex),s.set(me,Y))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},w=null,U={},d={},f=new WeakMap,h=[],m=null,_=!1,S=null,p=null,u=null,v=null,g=null,M=null,C=null,R=new Ze(0,0,0),T=0,L=!1,J=null,y=null,x=null,k=null,F=null,q.set(0,0,t.canvas.width,t.canvas.height),te.set(0,0,t.canvas.width,t.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:se,disable:oe,bindFramebuffer:ce,drawBuffers:fe,useProgram:we,setBlending:P,setMaterial:$e,setFlipSided:Fe,setCullFace:Xe,setLineWidth:De,setPolygonOffset:rt,setScissorTest:Ne,activeTexture:A,bindTexture:b,unbindTexture:B,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:Se,texImage3D:Ue,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:Ge,texStorage3D:le,texSubImage2D:Q,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:ye,scissor:Ie,viewport:_e,reset:Je}}function Iv(t,e,r,i){const n=RE(i);switch(r){case _g:return t*e;case xg:return t*e;case Sg:return t*e*2;case Mg:return t*e/n.components*n.byteLength;case vd:return t*e/n.components*n.byteLength;case bg:return t*e*2/n.components*n.byteLength;case _d:return t*e*2/n.components*n.byteLength;case yg:return t*e*3/n.components*n.byteLength;case Lr:return t*e*4/n.components*n.byteLength;case yd:return t*e*4/n.components*n.byteLength;case tl:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case il:case nl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sd:case bd:return Math.max(t,16)*Math.max(e,8)/4;case xd:case Md:return Math.max(t,8)*Math.max(e,8)/2;case Ed:case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case kd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case al:case Hd:case Vd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Eg:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wd:case jd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function RE(t){switch(t){case ni:case mg:return{byteLength:1,components:1};case xo:case gg:case So:return{byteLength:2,components:1};case md:case gd:return{byteLength:2,components:4};case hn:case pd:case ai:return{byteLength:4,components:1};case vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function CE(t,e,r,i,n,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return m?new OffscreenCanvas(A,b):dl("canvas")}function S(A,b,B){let ee=1;const ne=Ne(A);if((ne.width>B||ne.height>B)&&(ee=B/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Q=Math.floor(ee*ne.width),be=Math.floor(ee*ne.height);f===void 0&&(f=_(Q,be));const he=b?_(Q,be):f;return he.width=Q,he.height=be,he.getContext("2d").drawImage(A,0,0,Q,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+be+")."),he}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==xr&&A.minFilter!==Pr}function u(A){t.generateMipmap(A)}function v(A,b,B,ee,ne=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=b;if(b===t.RED&&(B===t.FLOAT&&(Q=t.R32F),B===t.HALF_FLOAT&&(Q=t.R16F),B===t.UNSIGNED_BYTE&&(Q=t.R8)),b===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.R8UI),B===t.UNSIGNED_SHORT&&(Q=t.R16UI),B===t.UNSIGNED_INT&&(Q=t.R32UI),B===t.BYTE&&(Q=t.R8I),B===t.SHORT&&(Q=t.R16I),B===t.INT&&(Q=t.R32I)),b===t.RG&&(B===t.FLOAT&&(Q=t.RG32F),B===t.HALF_FLOAT&&(Q=t.RG16F),B===t.UNSIGNED_BYTE&&(Q=t.RG8)),b===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RG8UI),B===t.UNSIGNED_SHORT&&(Q=t.RG16UI),B===t.UNSIGNED_INT&&(Q=t.RG32UI),B===t.BYTE&&(Q=t.RG8I),B===t.SHORT&&(Q=t.RG16I),B===t.INT&&(Q=t.RG32I)),b===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),B===t.UNSIGNED_INT&&(Q=t.RGB32UI),B===t.BYTE&&(Q=t.RGB8I),B===t.SHORT&&(Q=t.RGB16I),B===t.INT&&(Q=t.RGB32I)),b===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),B===t.UNSIGNED_INT&&(Q=t.RGBA32UI),B===t.BYTE&&(Q=t.RGBA8I),B===t.SHORT&&(Q=t.RGBA16I),B===t.INT&&(Q=t.RGBA32I)),b===t.RGB&&B===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),b===t.RGBA){const be=ne?sl:qe.getTransfer(ee);B===t.FLOAT&&(Q=t.RGBA32F),B===t.HALF_FLOAT&&(Q=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Q=be===at?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(A,b){let B;return A?b===null||b===hn||b===oa?B=t.DEPTH24_STENCIL8:b===ai?B=t.DEPTH32F_STENCIL8:b===xo&&(B=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hn||b===oa?B=t.DEPTH_COMPONENT24:b===ai?B=t.DEPTH_COMPONENT32F:b===xo&&(B=t.DEPTH_COMPONENT16),B}function M(A,b){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==xr&&A.minFilter!==Pr?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){const b=A.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&d.delete(b)}function R(A){const b=A.target;b.removeEventListener("dispose",R),J(b)}function T(A){const b=i.get(A);if(b.__webglInit===void 0)return;const B=A.source,ee=h.get(B);if(ee){const ne=ee[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(A),Object.keys(ee).length===0&&h.delete(B)}i.remove(A)}function L(A){const b=i.get(A);t.deleteTexture(b.__webglTexture);const B=A.source,ee=h.get(B);delete ee[b.__cacheKey],o.memory.textures--}function J(A){const b=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(b.__webglFramebuffer[ee]))for(let ne=0;ne<b.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(b.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(b.__webglFramebuffer[ee]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[ee])}else{if(Array.isArray(b.__webglFramebuffer))for(let ee=0;ee<b.__webglFramebuffer.length;ee++)t.deleteFramebuffer(b.__webglFramebuffer[ee]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ee=0;ee<b.__webglColorRenderbuffer.length;ee++)b.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[ee]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=A.textures;for(let ee=0,ne=B.length;ee<ne;ee++){const Q=i.get(B[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(B[ee])}i.remove(A)}let y=0;function x(){y=0}function k(){const A=y;return A>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+n.maxTextures),y+=1,A}function F(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function V(A,b){const B=i.get(A);if(A.isVideoTexture&&De(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(B,A,b);return}}r.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+b)}function X(A,b){const B=i.get(A);if(A.version>0&&B.__version!==A.version){te(B,A,b);return}r.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+b)}function G(A,b){const B=i.get(A);if(A.version>0&&B.__version!==A.version){te(B,A,b);return}r.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+b)}function Z(A,b){const B=i.get(A);if(A.version>0&&B.__version!==A.version){z(B,A,b);return}r.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+b)}const w={[dd]:t.REPEAT,[un]:t.CLAMP_TO_EDGE,[hd]:t.MIRRORED_REPEAT},U={[xr]:t.NEAREST,[Qy]:t.NEAREST_MIPMAP_NEAREST,[el]:t.NEAREST_MIPMAP_LINEAR,[Pr]:t.LINEAR,[fd]:t.LINEAR_MIPMAP_NEAREST,[dn]:t.LINEAR_MIPMAP_LINEAR},D={[ix]:t.NEVER,[cx]:t.ALWAYS,[nx]:t.LESS,[Tg]:t.LEQUAL,[ax]:t.EQUAL,[lx]:t.GEQUAL,[ox]:t.GREATER,[sx]:t.NOTEQUAL};function K(A,b){if(b.type===ai&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Pr||b.magFilter===fd||b.magFilter===el||b.magFilter===dn||b.minFilter===Pr||b.minFilter===fd||b.minFilter===el||b.minFilter===dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,w[b.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,w[b.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,w[b.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,U[b.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,D[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xr||b.minFilter!==el&&b.minFilter!==dn||b.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,n.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function q(A,b){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",C));const ee=b.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const Q=F(b);if(Q!==A.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[Q].usedTimes++;const be=ne[A.__cacheKey];be!==void 0&&(ne[A.__cacheKey].usedTimes--,be.usedTimes===0&&L(b)),A.__cacheKey=Q,A.__webglTexture=ne[Q].texture}return B}function te(A,b,B){let ee=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=q(A,b),Q=b.source;r.bindTexture(ee,A.__webglTexture,t.TEXTURE0+B);const be=i.get(Q);if(Q.version!==be.__version||ne===!0){r.activeTexture(t.TEXTURE0+B);const he=qe.getPrimaries(qe.workingColorSpace),ye=b.colorSpace===ki?null:qe.getPrimaries(b.colorSpace),Ge=b.colorSpace===ki||he===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let le=S(b.image,!1,n.maxTextureSize);le=rt(b,le);const Se=a.convert(b.format,b.colorSpace),Ue=a.convert(b.type);let Ie=v(b.internalFormat,Se,Ue,b.colorSpace,b.isVideoTexture);K(ee,b);let _e;const We=b.mipmaps,ke=b.isVideoTexture!==!0,Je=be.__version===void 0||ne===!0,I=Q.dataReady,me=M(b,le);if(b.isDepthTexture)Ie=g(b.format===la,b.type),Je&&(ke?r.texStorage2D(t.TEXTURE_2D,1,Ie,le.width,le.height):r.texImage2D(t.TEXTURE_2D,0,Ie,le.width,le.height,0,Se,Ue,null));else if(b.isDataTexture)if(We.length>0){ke&&Je&&r.texStorage2D(t.TEXTURE_2D,me,Ie,We[0].width,We[0].height);for(let Y=0,re=We.length;Y<re;Y++)_e=We[Y],ke?I&&r.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,Se,Ue,_e.data):r.texImage2D(t.TEXTURE_2D,Y,Ie,_e.width,_e.height,0,Se,Ue,_e.data);b.generateMipmaps=!1}else ke?(Je&&r.texStorage2D(t.TEXTURE_2D,me,Ie,le.width,le.height),I&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Se,Ue,le.data)):r.texImage2D(t.TEXTURE_2D,0,Ie,le.width,le.height,0,Se,Ue,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ke&&Je&&r.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ie,We[0].width,We[0].height,le.depth);for(let Y=0,re=We.length;Y<re;Y++)if(_e=We[Y],b.format!==Lr)if(Se!==null)if(ke){if(I)if(b.layerUpdates.size>0){const pe=Iv(_e.width,_e.height,b.format,b.type);for(const de of b.layerUpdates){const et=_e.data.subarray(de*pe/_e.data.BYTES_PER_ELEMENT,(de+1)*pe/_e.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,de,_e.width,_e.height,1,Se,et,0,0)}b.clearLayerUpdates()}else r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,le.depth,Se,_e.data,0,0)}else r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,Ie,_e.width,_e.height,le.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,le.depth,Se,Ue,_e.data):r.texImage3D(t.TEXTURE_2D_ARRAY,Y,Ie,_e.width,_e.height,le.depth,0,Se,Ue,_e.data)}else{ke&&Je&&r.texStorage2D(t.TEXTURE_2D,me,Ie,We[0].width,We[0].height);for(let Y=0,re=We.length;Y<re;Y++)_e=We[Y],b.format!==Lr?Se!==null?ke?I&&r.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,Se,_e.data):r.compressedTexImage2D(t.TEXTURE_2D,Y,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&r.texSubImage2D(t.TEXTURE_2D,Y,0,0,_e.width,_e.height,Se,Ue,_e.data):r.texImage2D(t.TEXTURE_2D,Y,Ie,_e.width,_e.height,0,Se,Ue,_e.data)}else if(b.isDataArrayTexture)if(ke){if(Je&&r.texStorage3D(t.TEXTURE_2D_ARRAY,me,Ie,le.width,le.height,le.depth),I)if(b.layerUpdates.size>0){const Y=Iv(le.width,le.height,b.format,b.type);for(const re of b.layerUpdates){const pe=le.data.subarray(re*Y/le.data.BYTES_PER_ELEMENT,(re+1)*Y/le.data.BYTES_PER_ELEMENT);r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,le.width,le.height,1,Se,Ue,pe)}b.clearLayerUpdates()}else r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,Ue,le.data)}else r.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,le.width,le.height,le.depth,0,Se,Ue,le.data);else if(b.isData3DTexture)ke?(Je&&r.texStorage3D(t.TEXTURE_3D,me,Ie,le.width,le.height,le.depth),I&&r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,Ue,le.data)):r.texImage3D(t.TEXTURE_3D,0,Ie,le.width,le.height,le.depth,0,Se,Ue,le.data);else if(b.isFramebufferTexture){if(Je)if(ke)r.texStorage2D(t.TEXTURE_2D,me,Ie,le.width,le.height);else{let Y=le.width,re=le.height;for(let pe=0;pe<me;pe++)r.texImage2D(t.TEXTURE_2D,pe,Ie,Y,re,0,Se,Ue,null),Y>>=1,re>>=1}}else if(We.length>0){if(ke&&Je){const Y=Ne(We[0]);r.texStorage2D(t.TEXTURE_2D,me,Ie,Y.width,Y.height)}for(let Y=0,re=We.length;Y<re;Y++)_e=We[Y],ke?I&&r.texSubImage2D(t.TEXTURE_2D,Y,0,0,Se,Ue,_e):r.texImage2D(t.TEXTURE_2D,Y,Ie,Se,Ue,_e);b.generateMipmaps=!1}else if(ke){if(Je){const Y=Ne(le);r.texStorage2D(t.TEXTURE_2D,me,Ie,Y.width,Y.height)}I&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ue,le)}else r.texImage2D(t.TEXTURE_2D,0,Ie,Se,Ue,le);p(b)&&u(ee),be.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function z(A,b,B){if(b.image.length!==6)return;const ee=q(A,b),ne=b.source;r.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+B);const Q=i.get(ne);if(ne.version!==Q.__version||ee===!0){r.activeTexture(t.TEXTURE0+B);const be=qe.getPrimaries(qe.workingColorSpace),he=b.colorSpace===ki?null:qe.getPrimaries(b.colorSpace),ye=b.colorSpace===ki||be===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ge=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let re=0;re<6;re++)!Ge&&!le?Se[re]=S(b.image[re],!0,n.maxCubemapSize):Se[re]=le?b.image[re].image:b.image[re],Se[re]=rt(b,Se[re]);const Ue=Se[0],Ie=a.convert(b.format,b.colorSpace),_e=a.convert(b.type),We=v(b.internalFormat,Ie,_e,b.colorSpace),ke=b.isVideoTexture!==!0,Je=Q.__version===void 0||ee===!0,I=ne.dataReady;let me=M(b,Ue);K(t.TEXTURE_CUBE_MAP,b);let Y;if(Ge){ke&&Je&&r.texStorage2D(t.TEXTURE_CUBE_MAP,me,We,Ue.width,Ue.height);for(let re=0;re<6;re++){Y=Se[re].mipmaps;for(let pe=0;pe<Y.length;pe++){const de=Y[pe];b.format!==Lr?Ie!==null?ke?I&&r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,0,0,de.width,de.height,Ie,de.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,We,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,0,0,de.width,de.height,Ie,_e,de.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe,We,de.width,de.height,0,Ie,_e,de.data)}}}else{if(Y=b.mipmaps,ke&&Je){Y.length>0&&me++;const re=Ne(Se[0]);r.texStorage2D(t.TEXTURE_CUBE_MAP,me,We,re.width,re.height)}for(let re=0;re<6;re++)if(le){ke?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se[re].width,Se[re].height,Ie,_e,Se[re].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,Se[re].width,Se[re].height,0,Ie,_e,Se[re].data);for(let pe=0;pe<Y.length;pe++){const de=Y[pe].image[re].image;ke?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,0,0,de.width,de.height,Ie,_e,de.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,We,de.width,de.height,0,Ie,_e,de.data)}}else{ke?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ie,_e,Se[re]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,We,Ie,_e,Se[re]);for(let pe=0;pe<Y.length;pe++){const de=Y[pe];ke?I&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,0,0,Ie,_e,de.image[re]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe+1,We,Ie,_e,de.image[re])}}}p(b)&&u(t.TEXTURE_CUBE_MAP),Q.__version=ne.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function $(A,b,B,ee,ne,Q){const be=a.convert(B.format,B.colorSpace),he=a.convert(B.type),ye=v(B.internalFormat,be,he,B.colorSpace);if(!i.get(b).__hasExternalTextures){const Ge=Math.max(1,b.width>>Q),le=Math.max(1,b.height>>Q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?r.texImage3D(ne,Q,ye,Ge,le,b.depth,0,be,he,null):r.texImage2D(ne,Q,ye,Ge,le,0,be,he,null)}r.bindFramebuffer(t.FRAMEBUFFER,A),Xe(b)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,i.get(B).__webglTexture,0,Fe(b)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,i.get(B).__webglTexture,Q),r.bindFramebuffer(t.FRAMEBUFFER,null)}function se(A,b,B){if(t.bindRenderbuffer(t.RENDERBUFFER,A),b.depthBuffer){const ee=b.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,Q=g(b.stencilBuffer,ne),be=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=Fe(b);Xe(b)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,Q,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,Q,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Q,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,A)}else{const ee=b.textures;for(let ne=0;ne<ee.length;ne++){const Q=ee[ne],be=a.convert(Q.format,Q.colorSpace),he=a.convert(Q.type),ye=v(Q.internalFormat,be,he,Q.colorSpace),Ge=Fe(b);B&&Xe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,ye,b.width,b.height):Xe(b)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge,ye,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ye,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const B=i.get(b.depthTexture).__webglTexture,ee=Fe(b);if(b.depthTexture.format===sa)Xe(b)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,B,0);else if(b.depthTexture.format===la)Xe(b)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function ce(A){const b=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const ee=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ee){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=ee}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");oe(b.__webglFramebuffer,A)}else if(B){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(r.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]===void 0)b.__webglDepthbuffer[ee]=t.createRenderbuffer(),se(b.__webglDepthbuffer[ee],A,!1);else{const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Q)}}else if(r.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),se(b.__webglDepthbuffer,A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}r.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(A,b,B){const ee=i.get(A);b!==void 0&&$(ee.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&ce(A)}function we(A){const b=A.texture,B=i.get(A),ee=i.get(b);A.addEventListener("dispose",R);const ne=A.textures,Q=A.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=b.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[he]=[];for(let ye=0;ye<b.mipmaps.length;ye++)B.__webglFramebuffer[he][ye]=t.createFramebuffer()}else B.__webglFramebuffer[he]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)B.__webglFramebuffer[he]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(be)for(let he=0,ye=ne.length;he<ye;he++){const Ge=i.get(ne[he]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const ye=ne[he];B.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[he]);const Ge=a.convert(ye.format,ye.colorSpace),le=a.convert(ye.type),Se=v(ye.internalFormat,Ge,le,ye.colorSpace,A.isXRRenderTarget===!0),Ue=Fe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Se,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,B.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),se(B.__webglDepthRenderbuffer,A,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){r.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),K(t.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)$(B.__webglFramebuffer[he][ye],A,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else $(B.__webglFramebuffer[he],A,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(b)&&u(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(be){for(let he=0,ye=ne.length;he<ye;he++){const Ge=ne[he],le=i.get(Ge);r.bindTexture(t.TEXTURE_2D,le.__webglTexture),K(t.TEXTURE_2D,Ge),$(B.__webglFramebuffer,A,Ge,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),p(Ge)&&u(t.TEXTURE_2D)}r.unbindTexture()}else{let he=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(he=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(he,ee.__webglTexture),K(he,b),b.mipmaps&&b.mipmaps.length>0)for(let ye=0;ye<b.mipmaps.length;ye++)$(B.__webglFramebuffer[ye],A,b,t.COLOR_ATTACHMENT0,he,ye);else $(B.__webglFramebuffer,A,b,t.COLOR_ATTACHMENT0,he,0);p(b)&&u(he),r.unbindTexture()}A.depthBuffer&&ce(A)}function Oe(A){const b=A.textures;for(let B=0,ee=b.length;B<ee;B++){const ne=b[B];if(p(ne)){const Q=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(ne).__webglTexture;r.bindTexture(Q,be),u(Q),r.unbindTexture()}}}const Le=[],P=[];function $e(A){if(A.samples>0){if(Xe(A)===!1){const b=A.textures,B=A.width,ee=A.height;let ne=t.COLOR_BUFFER_BIT;const Q=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(A),he=b.length>1;if(he)for(let ye=0;ye<b.length;ye++)r.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const Ge=i.get(b[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ge,0)}t.blitFramebuffer(0,0,B,ee,0,0,B,ee,ne,t.NEAREST),l===!0&&(Le.length=0,P.length=0,Le.push(t.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Le.push(Q),P.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Le))}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ye=0;ye<b.length;ye++){r.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,be.__webglColorRenderbuffer[ye]);const Ge=i.get(b[ye]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,Ge,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function Fe(A){return Math.min(n.maxSamples,A.samples)}function Xe(A){const b=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function De(A){const b=o.render.frame;d.get(A)!==b&&(d.set(A,b),A.update())}function rt(A,b){const B=A.colorSpace,ee=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Fi&&B!==ki&&(qe.getTransfer(B)===at?(ee!==Lr||ne!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),b}function Ne(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=x,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=fe,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=$,this.useMultisampledRTT=Xe}function PE(t,e){function r(i,n=ki){let a;const o=qe.getTransfer(n);if(i===ni)return t.UNSIGNED_BYTE;if(i===md)return t.UNSIGNED_SHORT_4_4_4_4;if(i===gd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===mg)return t.BYTE;if(i===gg)return t.SHORT;if(i===xo)return t.UNSIGNED_SHORT;if(i===pd)return t.INT;if(i===hn)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===So)return t.HALF_FLOAT;if(i===_g)return t.ALPHA;if(i===yg)return t.RGB;if(i===Lr)return t.RGBA;if(i===xg)return t.LUMINANCE;if(i===Sg)return t.LUMINANCE_ALPHA;if(i===sa)return t.DEPTH_COMPONENT;if(i===la)return t.DEPTH_STENCIL;if(i===Mg)return t.RED;if(i===vd)return t.RED_INTEGER;if(i===bg)return t.RG;if(i===_d)return t.RG_INTEGER;if(i===yd)return t.RGBA_INTEGER;if(i===tl||i===rl||i===il||i===nl)if(o===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===tl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===il)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===tl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===il)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===Sd||i===Md||i===bd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===xd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Md)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===wd||i===Td)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ed||i===wd)return o===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Td)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===Rd||i===Cd||i===Pd||i===Ld||i===Dd||i===Ud||i===Id||i===Nd||i===Od||i===kd||i===Fd||i===zd||i===Bd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ad)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ld)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Dd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ud)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Od)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bd)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===Hd||i===Vd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===al)return o===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eg||i===Gd||i===Wd||i===jd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===al)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:r}}class LE extends dr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Io extends tr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DE={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const p=r.getJointPose(S,i),u=this._getHandJoint(c,S);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=r.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=r.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(DE)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new Io;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}const UE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IE=`
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

}`;class NE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r,i){if(this.texture===null){const n=new er,a=e.properties.get(n);a.__webglTexture=r.texture,(r.depthNear!=i.depthNear||r.depthFar!=i.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,i=new Wi({vertexShader:UE,fragmentShader:IE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Gr(new kl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OE extends fn{constructor(e,r){super();const i=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const S=new NE,p=r.getContextAttributes();let u=null,v=null;const g=[],M=[],C=new Ve;let R=null;const T=new dr;T.layers.enable(1),T.viewport=new gt;const L=new dr;L.layers.enable(2),L.viewport=new gt;const J=[T,L],y=new LE;y.layers.enable(1),y.layers.enable(2);let x=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=g[z];return $===void 0&&($=new wh,g[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=g[z];return $===void 0&&($=new wh,g[z]=$),$.getGripSpace()},this.getHand=function(z){let $=g[z];return $===void 0&&($=new wh,g[z]=$),$.getHandSpace()};function F(z){const $=M.indexOf(z.inputSource);if($===-1)return;const se=g[$];se!==void 0&&(se.update(z.inputSource,z.frame,c||o),se.dispatchEvent({type:z.type,data:z.inputSource}))}function V(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",X);for(let z=0;z<g.length;z++){const $=M[z];$!==null&&(M[z]=null,g[z].disconnect($))}x=null,k=null,S.reset(),e.setRenderTarget(u),m=null,h=null,f=null,n=null,v=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(z){if(n=z,n!==null){if(u=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",V),n.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await r.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0){const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(n,r,$),n.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new pn(m.framebufferWidth,m.framebufferHeight,{format:Lr,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,se=null,oe=null;p.depth&&(oe=p.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,$=p.stencil?la:sa,se=p.stencil?oa:hn);const ce={colorFormat:r.RGBA8,depthFormat:oe,scaleFactor:a};f=new XRWebGLBinding(n,r),h=f.createProjectionLayer(ce),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new pn(h.textureWidth,h.textureHeight,{format:Lr,type:ni,depthTexture:new fv(h.textureWidth,h.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(z){for(let $=0;$<z.removed.length;$++){const se=z.removed[$],oe=M.indexOf(se);oe>=0&&(M[oe]=null,g[oe].disconnect(se))}for(let $=0;$<z.added.length;$++){const se=z.added[$];let oe=M.indexOf(se);if(oe===-1){for(let fe=0;fe<g.length;fe++)if(fe>=M.length){M.push(se),oe=fe;break}else if(M[fe]===null){M[fe]=se,oe=fe;break}if(oe===-1)break}const ce=g[oe];ce&&ce.connect(se)}}const G=new H,Z=new H;function w(z,$,se){G.setFromMatrixPosition($.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const oe=G.distanceTo(Z),ce=$.projectionMatrix.elements,fe=se.projectionMatrix.elements,we=ce[14]/(ce[10]-1),Oe=ce[14]/(ce[10]+1),Le=(ce[9]+1)/ce[5],P=(ce[9]-1)/ce[5],$e=(ce[8]-1)/ce[0],Fe=(fe[8]+1)/fe[0],Xe=we*$e,De=we*Fe,rt=oe/(-$e+Fe),Ne=rt*-$e;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ne),z.translateZ(rt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ce[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const A=we+rt,b=Oe+rt,B=Xe-Ne,ee=De+(oe-Ne),ne=Le*Oe/b*A,Q=P*Oe/b*A;z.projectionMatrix.makePerspective(B,ee,ne,Q,A,b),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function U(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(n===null)return;let $=z.near,se=z.far;S.texture!==null&&(S.depthNear>0&&($=S.depthNear),S.depthFar>0&&(se=S.depthFar)),y.near=L.near=T.near=$,y.far=L.far=T.far=se,(x!==y.near||k!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),x=y.near,k=y.far);const oe=z.parent,ce=y.cameras;U(y,oe);for(let fe=0;fe<ce.length;fe++)U(ce[fe],oe);ce.length===2?w(y,T,L):y.projectionMatrix.copy(T.projectionMatrix),D(z,y,oe)};function D(z,$,se){se===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=bo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let K=null;function q(z,$){if(d=$.getViewerPose(c||o),_=$,d!==null){const se=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let oe=!1;se.length!==y.cameras.length&&(y.cameras.length=0,oe=!0);for(let fe=0;fe<se.length;fe++){const we=se[fe];let Oe=null;if(m!==null)Oe=m.getViewport(we);else{const P=f.getViewSubImage(h,we);Oe=P.viewport,fe===0&&(e.setRenderTargetTextures(v,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(v))}let Le=J[fe];Le===void 0&&(Le=new dr,Le.layers.enable(fe),Le.viewport=new gt,J[fe]=Le),Le.matrix.fromArray(we.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(we.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),fe===0&&(y.matrix.copy(Le.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),oe===!0&&y.cameras.push(Le)}const ce=n.enabledFeatures;if(ce&&ce.includes("depth-sensing")){const fe=f.getDepthInformation(se[0]);fe&&fe.isValid&&fe.texture&&S.init(e,fe,n.renderState)}}for(let se=0;se<g.length;se++){const oe=M[se],ce=g[se];oe!==null&&ce!==void 0&&ce.update(oe,$,c||o)}K&&K(z,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}const te=new nv;te.setAnimationLoop(q),this.setAnimationLoop=function(z){K=z},this.dispose=function(){}}}const En=new hi,kE=new vt;function FE(t,e){function r(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Qg(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function n(p,u,v,g,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),f(p,u)):u.isMeshPhongMaterial?(a(p,u),d(p,u)):u.isMeshStandardMaterial?(a(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(a(p,u),_(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),S(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&s(p,u)):u.isPointsMaterial?l(p,u,v,g):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,r(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,r(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,r(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Jt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,r(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Jt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,r(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,r(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,r(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,M=v.envMapRotation;g&&(p.envMap.value=g,En.copy(M),En.x*=-1,En.y*=-1,En.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),p.envMapRotation.value.setFromMatrix4(kE.makeRotationFromEuler(En)),p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,r(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,r(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,r(u.map,p.mapTransform))}function s(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,g){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=g*.5,u.map&&(p.map.value=u.map,r(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,r(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,r(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,r(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,r(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,r(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,r(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,r(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,r(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,r(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,r(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Jt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,r(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,r(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,r(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,r(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,r(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,r(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,r(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function S(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function zE(t,e,r,i){let n={},a={},o=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const M=g.program;i.uniformBlockBinding(v,M)}function c(v,g){let M=n[v.id];M===void 0&&(_(v),M=d(v),n[v.id]=M,v.addEventListener("dispose",p));const C=g.program;i.updateUBOMapping(v,C);const R=e.render.frame;a[v.id]!==R&&(h(v),a[v.id]=R)}function d(v){const g=f();v.__bindingPointIndex=g;const M=t.createBuffer(),C=v.__size,R=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,M),M}function f(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=n[v.id],M=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let R=0,T=M.length;R<T;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let J=0,y=L.length;J<y;J++){const x=L[J];if(m(x,R,J,C)===!0){const k=x.__offset,F=Array.isArray(x.value)?x.value:[x.value];let V=0;for(let X=0;X<F.length;X++){const G=F[X],Z=S(G);typeof G=="number"||typeof G=="boolean"?(x.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,k+V,x.__data)):G.isMatrix3?(x.__data[0]=G.elements[0],x.__data[1]=G.elements[1],x.__data[2]=G.elements[2],x.__data[3]=0,x.__data[4]=G.elements[3],x.__data[5]=G.elements[4],x.__data[6]=G.elements[5],x.__data[7]=0,x.__data[8]=G.elements[6],x.__data[9]=G.elements[7],x.__data[10]=G.elements[8],x.__data[11]=0):(G.toArray(x.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,x.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,M,C){const R=v.value,T=g+"_"+M;if(C[T]===void 0)return typeof R=="number"||typeof R=="boolean"?C[T]=R:C[T]=R.clone(),!0;{const L=C[T];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return C[T]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(v){const g=v.uniforms;let M=0;const C=16;for(let T=0,L=g.length;T<L;T++){const J=Array.isArray(g[T])?g[T]:[g[T]];for(let y=0,x=J.length;y<x;y++){const k=J[y],F=Array.isArray(k.value)?k.value:[k.value];for(let V=0,X=F.length;V<X;V++){const G=F[V],Z=S(G),w=M%C,U=w%Z.boundary,D=w+U;M+=U,D!==0&&C-D<Z.storage&&(M+=C-D),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=Z.storage}}}const R=M%C;return R>0&&(M+=C-R),v.__size=M,v.__cache={},this}function S(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const M=o.indexOf(g.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(n[g.id]),delete n[g.id],delete a[g.id]}function u(){for(const v in n)t.deleteBuffer(n[v]);o=[],n={},a={}}return{bind:l,update:c,dispose:u}}class BE{constructor(e={}){const{canvas:r=Tx(),context:i=null,depth:n=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const m=new Uint32Array(4),_=new Int32Array(4);let S=null,p=null;const u=[],v=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hr,this.toneMapping=Oi,this.toneMappingExposure=1;const g=this;let M=!1,C=0,R=0,T=null,L=-1,J=null;const y=new gt,x=new gt;let k=null;const F=new Ze(0);let V=0,X=r.width,G=r.height,Z=1,w=null,U=null;const D=new gt(0,0,X,G),K=new gt(0,0,X,G);let q=!1;const te=new iv;let z=!1,$=!1;const se=new vt,oe=new vt,ce=new H,fe=new gt,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function Le(){return T===null?Z:1}let P=i;function $e(E,O){return r.getContext(E,O)}try{const E={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${Ju}`),r.addEventListener("webglcontextlost",re,!1),r.addEventListener("webglcontextrestored",pe,!1),r.addEventListener("webglcontextcreationerror",de,!1),P===null){const O="webgl2";if(P=$e(O,E),P===null)throw $e(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Fe,Xe,De,rt,Ne,A,b,B,ee,ne,Q,be,he,ye,Ge,le,Se,Ue,Ie,_e,We,ke,Je,I;function me(){Fe=new jM(P),Fe.init(),ke=new PE(P,Fe),Xe=new FM(P,Fe,e,ke),De=new AE(P),Xe.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),rt=new qM(P),Ne=new hE,A=new CE(P,Fe,De,Ne,Xe,ke,rt),b=new BM(g),B=new WM(g),ee=new eS(P),Je=new OM(P,ee),ne=new XM(P,ee,rt,Je),Q=new ZM(P,ne,ee,rt),Ie=new KM(P,Xe,A),le=new zM(Ne),be=new dE(g,b,B,Fe,Xe,Je,le),he=new FE(g,Ne),ye=new pE,Ge=new xE(Fe),Ue=new NM(g,b,B,De,Q,h,l),Se=new wE(g,Q,Xe),I=new zE(P,rt,Xe,De),_e=new kM(P,Fe,rt),We=new YM(P,Fe,rt),rt.programs=be.programs,g.capabilities=Xe,g.extensions=Fe,g.properties=Ne,g.renderLists=ye,g.shadowMap=Se,g.state=De,g.info=rt}me();const Y=new OE(g,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(X,G,!1))},this.getSize=function(E){return E.set(X,G)},this.setSize=function(E,O,W=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,G=O,r.width=Math.floor(E*Z),r.height=Math.floor(O*Z),W===!0&&(r.style.width=E+"px",r.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(X*Z,G*Z).floor()},this.setDrawingBufferSize=function(E,O,W){X=E,G=O,Z=W,r.width=Math.floor(E*W),r.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(D)},this.setViewport=function(E,O,W,j){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,O,W,j),De.viewport(y.copy(D).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(K)},this.setScissor=function(E,O,W,j){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,O,W,j),De.scissor(x.copy(K).multiplyScalar(Z).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(E){De.setScissorTest(q=E)},this.setOpaqueSort=function(E){w=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(E=!0,O=!0,W=!0){let j=0;if(E){let N=!1;if(T!==null){const ae=T.texture.format;N=ae===yd||ae===_d||ae===vd}if(N){const ae=T.texture.type,ve=ae===ni||ae===hn||ae===xo||ae===oa||ae===md||ae===gd,xe=Ue.getClearColor(),Me=Ue.getClearAlpha(),Pe=xe.r,Ce=xe.g,Ae=xe.b;ve?(m[0]=Pe,m[1]=Ce,m[2]=Ae,m[3]=Me,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Pe,_[1]=Ce,_[2]=Ae,_[3]=Me,P.clearBufferiv(P.COLOR,0,_))}else j|=P.COLOR_BUFFER_BIT}O&&(j|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",re,!1),r.removeEventListener("webglcontextrestored",pe,!1),r.removeEventListener("webglcontextcreationerror",de,!1),ye.dispose(),Ge.dispose(),Ne.dispose(),b.dispose(),B.dispose(),Q.dispose(),Je.dispose(),I.dispose(),be.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Rh),Y.removeEventListener("sessionend",Ch),Xi.stop()};function re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=rt.autoReset,O=Se.enabled,W=Se.autoUpdate,j=Se.needsUpdate,N=Se.type;me(),rt.autoReset=E,Se.enabled=O,Se.autoUpdate=W,Se.needsUpdate=j,Se.type=N}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function et(E){const O=E.target;O.removeEventListener("dispose",et),_t(O)}function _t(E){Xt(E),Ne.remove(E)}function Xt(E){const O=Ne.get(E).programs;O!==void 0&&(O.forEach(function(W){be.releaseProgram(W)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,j,N,ae){O===null&&(O=we);const ve=N.isMesh&&N.matrixWorld.determinant()<0,xe=Fv(E,O,W,j,N);De.setMaterial(j,ve);let Me=W.index,Pe=1;if(j.wireframe===!0){if(Me=ne.getWireframeAttribute(W),Me===void 0)return;Pe=2}const Ce=W.drawRange,Ae=W.attributes.position;let Qe=Ce.start*Pe,lt=(Ce.start+Ce.count)*Pe;ae!==null&&(Qe=Math.max(Qe,ae.start*Pe),lt=Math.min(lt,(ae.start+ae.count)*Pe)),Me!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,Me.count)):Ae!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,Ae.count));const ft=lt-Qe;if(ft<0||ft===1/0)return;Je.setup(N,j,xe,W,Me);let St,ot=_e;if(Me!==null&&(St=ee.get(Me),ot=We,ot.setIndex(St)),N.isMesh)j.wireframe===!0?(De.setLineWidth(j.wireframeLinewidth*Le()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(N.isLine){let Ee=j.linewidth;Ee===void 0&&(Ee=1),De.setLineWidth(Ee*Le()),N.isLineSegments?ot.setMode(P.LINES):N.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else N.isPoints?ot.setMode(P.POINTS):N.isSprite&&ot.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ot.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ot.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,zt=N._multiDrawCounts,Yi=N._multiDrawCount,Mr=Me?ee.get(Me).bytesPerElement:1,Tn=Ne.get(j).currentProgram.getUniforms();for(let rr=0;rr<Yi;rr++)Tn.setValue(P,"_gl_DrawID",rr),ot.render(Ee[rr]/Mr,zt[rr])}else if(N.isInstancedMesh)ot.renderInstances(Qe,ft,N.count);else if(W.isInstancedBufferGeometry){const Ee=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,zt=Math.min(W.instanceCount,Ee);ot.renderInstances(Qe,ft,zt)}else ot.render(Qe,ft)};function Ye(E,O,W){E.transparent===!0&&E.side===ii&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,ko(E,O,W),E.side=Ii,E.needsUpdate=!0,ko(E,O,W),E.side=ii):ko(E,O,W)}this.compile=function(E,O,W=null){W===null&&(W=E),p=Ge.get(W),p.init(O),v.push(p),W.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==W&&E.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const j=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const xe=ae[ve];Ye(xe,W,N),j.add(xe)}else Ye(ae,W,N),j.add(ae)}),v.pop(),p=null,j},this.compileAsync=function(E,O,W=null){const j=this.compile(E,O,W);return new Promise(N=>{function ae(){if(j.forEach(function(ve){Ne.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){N(E);return}setTimeout(ae,10)}Fe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Yt=null;function jr(E){Yt&&Yt(E)}function Rh(){Xi.stop()}function Ch(){Xi.start()}const Xi=new nv;Xi.setAnimationLoop(jr),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(E){Yt=E,Y.setAnimationLoop(E),E===null?Xi.stop():Xi.start()},Y.addEventListener("sessionstart",Rh),Y.addEventListener("sessionend",Ch),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(O),O=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,O,T),p=Ge.get(E,v.length),p.init(O),v.push(p),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),te.setFromProjectionMatrix(oe),$=this.localClippingEnabled,z=le.init(this.clippingPlanes,$),S=ye.get(E,u.length),S.init(),u.push(S),Y.enabled===!0&&Y.isPresenting===!0){const ae=g.xr.getDepthSensingMesh();ae!==null&&Fl(ae,O,-1/0,g.sortObjects)}Fl(E,O,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(w,U),Oe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Oe&&Ue.addToRenderList(S,E),this.info.render.frame++,z===!0&&le.beginShadows();const W=p.state.shadowsArray;Se.render(W,E,O),z===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=S.opaque,N=S.transmissive;if(p.setupLights(),O.isArrayCamera){const ae=O.cameras;if(N.length>0)for(let ve=0,xe=ae.length;ve<xe;ve++){const Me=ae[ve];Lh(j,N,E,Me)}Oe&&Ue.render(E);for(let ve=0,xe=ae.length;ve<xe;ve++){const Me=ae[ve];Ph(S,E,Me,Me.viewport)}}else N.length>0&&Lh(j,N,E,O),Oe&&Ue.render(E),Ph(S,E,O);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(g,E,O),Je.resetDefaultState(),L=-1,J=null,v.pop(),v.length>0?(p=v[v.length-1],z===!0&&le.setGlobalState(g.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function Fl(E,O,W,j){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){j&&fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);const ae=Q.update(E),ve=E.material;ve.visible&&S.push(E,ae,ve,W,fe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){const ae=Q.update(E),ve=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),fe.copy(E.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),fe.copy(ae.boundingSphere.center)),fe.applyMatrix4(E.matrixWorld).applyMatrix4(oe)),Array.isArray(ve)){const xe=ae.groups;for(let Me=0,Pe=xe.length;Me<Pe;Me++){const Ce=xe[Me],Ae=ve[Ce.materialIndex];Ae&&Ae.visible&&S.push(E,ae,Ae,W,fe.z,Ce)}}else ve.visible&&S.push(E,ae,ve,W,fe.z,null)}}const N=E.children;for(let ae=0,ve=N.length;ae<ve;ae++)Fl(N[ae],O,W,j)}function Ph(E,O,W,j){const N=E.opaque,ae=E.transmissive,ve=E.transparent;p.setupLightsView(W),z===!0&&le.setGlobalState(g.clippingPlanes,W),j&&De.viewport(y.copy(j)),N.length>0&&Oo(N,O,W),ae.length>0&&Oo(ae,O,W),ve.length>0&&Oo(ve,O,W),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Lh(E,O,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new pn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?So:ni,minFilter:dn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const N=p.state.transmissionRenderTarget[j.id],ae=j.viewport||y;N.setSize(ae.z,ae.w);const ve=g.getRenderTarget();g.setRenderTarget(N),g.getClearColor(F),V=g.getClearAlpha(),V<1&&g.setClearColor(16777215,.5),g.clear(),Oe&&Ue.render(W);const xe=g.toneMapping;g.toneMapping=Oi;const Me=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),z===!0&&le.setGlobalState(g.clippingPlanes,j),Oo(E,W,j),A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Ce=0,Ae=O.length;Ce<Ae;Ce++){const Qe=O[Ce],lt=Qe.object,ft=Qe.geometry,St=Qe.material,ot=Qe.group;if(St.side===ii&&lt.layers.test(j.layers)){const Ee=St.side;St.side=Jt,St.needsUpdate=!0,Dh(lt,W,j,ft,St,ot),St.side=Ee,St.needsUpdate=!0,Pe=!0}}Pe===!0&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N))}g.setRenderTarget(ve),g.setClearColor(F,V),Me!==void 0&&(j.viewport=Me),g.toneMapping=xe}function Oo(E,O,W){const j=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ae=E.length;N<ae;N++){const ve=E[N],xe=ve.object,Me=ve.geometry,Pe=j===null?ve.material:j,Ce=ve.group;xe.layers.test(W.layers)&&Dh(xe,O,W,Me,Pe,Ce)}}function Dh(E,O,W,j,N,ae){E.onBeforeRender(g,O,W,j,N,ae),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(g,O,W,j,E,ae),N.transparent===!0&&N.side===ii&&N.forceSinglePass===!1?(N.side=Jt,N.needsUpdate=!0,g.renderBufferDirect(W,O,j,N,E,ae),N.side=Ii,N.needsUpdate=!0,g.renderBufferDirect(W,O,j,N,E,ae),N.side=ii):g.renderBufferDirect(W,O,j,N,E,ae),E.onAfterRender(g,O,W,j,N,ae)}function ko(E,O,W){O.isScene!==!0&&(O=we);const j=Ne.get(E),N=p.state.lights,ae=p.state.shadowsArray,ve=N.state.version,xe=be.getParameters(E,N.state,ae,O,W),Me=be.getProgramCacheKey(xe);let Pe=j.programs;j.environment=E.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(E.isMeshStandardMaterial?B:b).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",et),Pe=new Map,j.programs=Pe);let Ce=Pe.get(Me);if(Ce!==void 0){if(j.currentProgram===Ce&&j.lightsStateVersion===ve)return Ih(E,xe),Ce}else xe.uniforms=be.getUniforms(E),E.onBeforeCompile(xe,g),Ce=be.acquireProgram(xe,Me),Pe.set(Me,Ce),j.uniforms=xe.uniforms;const Ae=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=le.uniform),Ih(E,xe),j.needsLights=Bv(E),j.lightsStateVersion=ve,j.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),j.currentProgram=Ce,j.uniformsList=null,Ce}function Uh(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Nl.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Ih(E,O){const W=Ne.get(E);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Fv(E,O,W,j,N){O.isScene!==!0&&(O=we),A.resetTextureUnits();const ae=O.fog,ve=j.isMeshStandardMaterial?O.environment:null,xe=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Fi,Me=(j.isMeshStandardMaterial?B:b).get(j.envMap||ve),Pe=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ce=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ae=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,lt=!!W.morphAttributes.color;let ft=Oi;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ft=g.toneMapping);const St=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=St!==void 0?St.length:0,Ee=Ne.get(j),zt=p.state.lights;if(z===!0&&($===!0||E!==J)){const fr=E===J&&j.id===L;le.setState(j,E,fr)}let Yi=!1;j.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==zt.state.version||Ee.outputColorSpace!==xe||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==Me||j.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==le.numPlanes||Ee.numIntersection!==le.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Ce||Ee.morphTargets!==Ae||Ee.morphNormals!==Qe||Ee.morphColors!==lt||Ee.toneMapping!==ft||Ee.morphTargetsCount!==ot)&&(Yi=!0):(Yi=!0,Ee.__version=j.version);let Mr=Ee.currentProgram;Yi===!0&&(Mr=ko(j,O,N));let Tn=!1,rr=!1,zl=!1;const pt=Mr.getUniforms(),fi=Ee.uniforms;if(De.useProgram(Mr.program)&&(Tn=!0,rr=!0,zl=!0),j.id!==L&&(L=j.id,rr=!0),Tn||J!==E){Xe.reverseDepthBuffer?(se.copy(E.projectionMatrix),Rx(se),Cx(se),pt.setValue(P,"projectionMatrix",se)):pt.setValue(P,"projectionMatrix",E.projectionMatrix),pt.setValue(P,"viewMatrix",E.matrixWorldInverse);const fr=pt.map.cameraPosition;fr!==void 0&&fr.setValue(P,ce.setFromMatrixPosition(E.matrixWorld)),Xe.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),J!==E&&(J=E,rr=!0,zl=!0)}if(N.isSkinnedMesh){pt.setOptional(P,N,"bindMatrix"),pt.setOptional(P,N,"bindMatrixInverse");const fr=N.skeleton;fr&&(fr.boneTexture===null&&fr.computeBoneTexture(),pt.setValue(P,"boneTexture",fr.boneTexture,A))}N.isBatchedMesh&&(pt.setOptional(P,N,"batchingTexture"),pt.setValue(P,"batchingTexture",N._matricesTexture,A),pt.setOptional(P,N,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",N._indirectTexture,A),pt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",N._colorsTexture,A));const Bl=W.morphAttributes;if((Bl.position!==void 0||Bl.normal!==void 0||Bl.color!==void 0)&&Ie.update(N,W,Mr),(rr||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,pt.setValue(P,"receiveShadow",N.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(fi.envMap.value=Me,fi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(fi.envMapIntensity.value=O.environmentIntensity),rr&&(pt.setValue(P,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&zv(fi,zl),ae&&j.fog===!0&&he.refreshFogUniforms(fi,ae),he.refreshMaterialUniforms(fi,j,Z,G,p.state.transmissionRenderTarget[E.id]),Nl.upload(P,Uh(Ee),fi,A)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Nl.upload(P,Uh(Ee),fi,A),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pt.setValue(P,"center",N.center),pt.setValue(P,"modelViewMatrix",N.modelViewMatrix),pt.setValue(P,"normalMatrix",N.normalMatrix),pt.setValue(P,"modelMatrix",N.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const fr=j.uniformsGroups;for(let Hl=0,Hv=fr.length;Hl<Hv;Hl++){const Nh=fr[Hl];I.update(Nh,Mr),I.bind(Nh,Mr)}}return Mr}function zv(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Bv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,O,W){Ne.get(E.texture).__webglTexture=O,Ne.get(E.depthTexture).__webglTexture=W;const j=Ne.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const W=Ne.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,W=0){T=E,C=O,R=W;let j=!0,N=null,ae=!1,ve=!1;if(E){const xe=Ne.get(E);if(xe.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(P.FRAMEBUFFER,null),j=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(xe.__hasExternalTextures)A.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ce=E.depthTexture;if(xe.__boundDepthTexture!==Ce){if(Ce!==null&&Ne.has(Ce)&&(E.width!==Ce.image.width||E.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ve=!0);const Pe=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[O])?N=Pe[O][W]:N=Pe[O],ae=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?N=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?N=Pe[W]:N=Pe,y.copy(E.viewport),x.copy(E.scissor),k=E.scissorTest}else y.copy(D).multiplyScalar(Z).floor(),x.copy(K).multiplyScalar(Z).floor(),k=q;if(De.bindFramebuffer(P.FRAMEBUFFER,N)&&j&&De.drawBuffers(E,N),De.viewport(y),De.scissor(x),De.setScissorTest(k),ae){const xe=Ne.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,xe.__webglTexture,W)}else if(ve){const xe=Ne.get(E.texture),Me=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,W||0,Me)}L=-1},this.readRenderTargetPixels=function(E,O,W,j,N,ae,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe){De.bindFramebuffer(P.FRAMEBUFFER,xe);try{const Me=E.texture,Pe=Me.format,Ce=Me.type;if(!Xe.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-j&&W>=0&&W<=E.height-N&&P.readPixels(O,W,j,N,ke.convert(Pe),ke.convert(Ce),ae)}finally{const Me=T!==null?Ne.get(T).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(E,O,W,j,N,ae,ve){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(xe=xe[ve]),xe){const Me=E.texture,Pe=Me.format,Ce=Me.type;if(!Xe.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-j&&W>=0&&W<=E.height-N){De.bindFramebuffer(P.FRAMEBUFFER,xe);const Ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),P.readPixels(O,W,j,N,ke.convert(Pe),ke.convert(Ce),0);const Qe=T!==null?Ne.get(T).__webglFramebuffer:null;De.bindFramebuffer(P.FRAMEBUFFER,Qe);const lt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Ax(P,lt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae),P.deleteBuffer(Ae),P.deleteSync(lt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,W=0){E.isTexture!==!0&&(hl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-W),N=Math.floor(E.image.width*j),ae=Math.floor(E.image.height*j),ve=O!==null?O.x:0,xe=O!==null?O.y:0;A.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,ve,xe,N,ae),De.unbindTexture()},this.copyTextureToTexture=function(E,O,W=null,j=null,N=0){E.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],O=arguments[2],N=arguments[3]||0,W=null);let ae,ve,xe,Me,Pe,Ce;W!==null?(ae=W.max.x-W.min.x,ve=W.max.y-W.min.y,xe=W.min.x,Me=W.min.y):(ae=E.image.width,ve=E.image.height,xe=0,Me=0),j!==null?(Pe=j.x,Ce=j.y):(Pe=0,Ce=0);const Ae=ke.convert(O.format),Qe=ke.convert(O.type);A.setTexture2D(O,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const lt=P.getParameter(P.UNPACK_ROW_LENGTH),ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),St=P.getParameter(P.UNPACK_SKIP_PIXELS),ot=P.getParameter(P.UNPACK_SKIP_ROWS),Ee=P.getParameter(P.UNPACK_SKIP_IMAGES),zt=E.isCompressedTexture?E.mipmaps[N]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,zt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Me),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Pe,Ce,ae,ve,Ae,Qe,zt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Pe,Ce,zt.width,zt.height,Ae,zt.data):P.texSubImage2D(P.TEXTURE_2D,N,Pe,Ce,ae,ve,Ae,Qe,zt),P.pixelStorei(P.UNPACK_ROW_LENGTH,lt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,St),P.pixelStorei(P.UNPACK_SKIP_ROWS,ot),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ee),N===0&&O.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(E,O,W=null,j=null,N=0){E.isTexture!==!0&&(hl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,E=arguments[2],O=arguments[3],N=arguments[4]||0);let ae,ve,xe,Me,Pe,Ce,Ae,Qe,lt;const ft=E.isCompressedTexture?E.mipmaps[N]:E.image;W!==null?(ae=W.max.x-W.min.x,ve=W.max.y-W.min.y,xe=W.max.z-W.min.z,Me=W.min.x,Pe=W.min.y,Ce=W.min.z):(ae=ft.width,ve=ft.height,xe=ft.depth,Me=0,Pe=0,Ce=0),j!==null?(Ae=j.x,Qe=j.y,lt=j.z):(Ae=0,Qe=0,lt=0);const St=ke.convert(O.format),ot=ke.convert(O.type);let Ee;if(O.isData3DTexture)A.setTexture3D(O,0),Ee=P.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)A.setTexture2DArray(O,0),Ee=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);const zt=P.getParameter(P.UNPACK_ROW_LENGTH),Yi=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mr=P.getParameter(P.UNPACK_SKIP_PIXELS),Tn=P.getParameter(P.UNPACK_SKIP_ROWS),rr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Me),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ce),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Ee,N,Ae,Qe,lt,ae,ve,xe,St,ot,ft.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Ee,N,Ae,Qe,lt,ae,ve,xe,St,ft.data):P.texSubImage3D(Ee,N,Ae,Qe,lt,ae,ve,xe,St,ot,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yi),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mr),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,rr),N===0&&O.generateMipmaps&&P.generateMipmap(Ee),De.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),De.unbindTexture()},this.resetState=function(){C=0,R=0,T=null,De.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=e===Xd?"display-p3":"srgb",r.unpackColorSpace=qe.workingColorSpace===ol?"display-p3":"srgb"}}class HE extends tr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}class VE extends tr{constructor(e,r=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=r}dispose(){}copy(e,r){return super.copy(e,r),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const r=super.toJSON(e);return r.object.color=this.color.getHex(),r.object.intensity=this.intensity,this.groundColor!==void 0&&(r.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(r.object.distance=this.distance),this.angle!==void 0&&(r.object.angle=this.angle),this.decay!==void 0&&(r.object.decay=this.decay),this.penumbra!==void 0&&(r.object.penumbra=this.penumbra),this.shadow!==void 0&&(r.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(r.object.target=this.target.uuid),r}}class GE extends VE{constructor(e,r){super(e,r),this.isAmbientLight=!0,this.type="AmbientLight"}}const Nv=new vt;class WE{constructor(e,r,i=0,n=1/0){this.ray=new kg(e,r),this.near=i,this.far=n,this.camera=null,this.layers=new nh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,r){this.ray.set(e,r)}setFromCamera(e,r){r.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(r.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(r).sub(this.ray.origin).normalize(),this.camera=r):r.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(r.near+r.far)/(r.near-r.far)).unproject(r),this.ray.direction.set(0,0,-1).transformDirection(r.matrixWorld),this.camera=r):console.error("THREE.Raycaster: Unsupported camera type: "+r.type)}setFromXRController(e){return Nv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nv),this}intersectObject(e,r=!0,i=[]){return Th(e,this,i,r),i.sort(Ov),i}intersectObjects(e,r=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Th(e[n],this,i,r);return i.sort(Ov),i}}function Ov(t,e){return t.distance-e.distance}function Th(t,e,r,i){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,r)===!1&&(n=!1),n===!0&&i===!0){const a=t.children;for(let o=0,s=a.length;o<s;o++)Th(a[o],e,r,!0)}}class No{constructor(e=1,r=0,i=0){return this.radius=e,this.phi=r,this.theta=i,this}set(e,r,i){return this.radius=e,this.phi=r,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,r,i){return this.radius=Math.sqrt(e*e+r*r+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(kt(r/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ju}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ju);class jE extends fn{constructor(e,r){super(),this.enabled=!0,this.target=new H,this.minDistance=0,this.maxDistance=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.isMirrored=!1,this.spherical=new No,this.sphericalDelta=new No,this.scale=1,this.rotateStart=new Ve,this.rotateEnd=new Ve,this.rotateDelta=new Ve,this.panStart=new Ve,this.panEnd=new Ve,this.panDelta=new Ve,this.dollyStart=new Ve,this.dollyEnd=new Ve,this.dollyDelta=new Ve,this.state="",this.object=e,this.domElement=r,this.onContextMenu=this.onContextMenu.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseWheel=this.onMouseWheel.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("mousedown",this.onMouseDown),this.domElement.addEventListener("wheel",this.onMouseWheel,{passive:!1}),this.domElement.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.domElement.addEventListener("touchend",this.onTouchEnd),this.domElement.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.object.lookAt(this.target)}dispose(){this.domElement.removeEventListener("contextmenu",this.onContextMenu),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("wheel",this.onMouseWheel),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchend",this.onTouchEnd),this.domElement.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp)}update(){const e=new H,r=this.object.position;e.copy(r).sub(this.target),this.spherical.setFromVector3(e),this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi,this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),e.setFromSpherical(this.spherical),r.copy(this.target).add(e),this.object.lookAt(this.target),this.sphericalDelta.set(0,0,0),this.scale=1,this.dispatchEvent({type:"change",target:this})}onContextMenu(e){e.preventDefault()}onMouseDown(e){if(this.enabled!==!1){switch(e.button){case 0:if(this.enableRotate===!1)return;this.handleMouseDownRotate(e),this.state="rotate";break;case 1:if(this.enableZoom===!1)return;this.handleMouseDownDolly(e),this.state="dolly";break;case 2:if(this.enablePan===!1)return;this.handleMouseDownPan(e),this.state="pan";break}this.state!==""&&(document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("mouseup",this.onMouseUp))}}onMouseMove(e){if(this.enabled!==!1)switch(this.state){case"rotate":if(this.enableRotate===!1)return;this.handleMouseMoveRotate(e);break;case"dolly":if(this.enableZoom===!1)return;this.handleMouseMoveDolly(e);break;case"pan":if(this.enablePan===!1)return;this.handleMouseMovePan(e);break}}onMouseUp(e){this.enabled!==!1&&(document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("mouseup",this.onMouseUp),this.state="")}onMouseWheel(e){this.enabled===!1||this.enableZoom===!1||(e.preventDefault(),this.handleMouseWheel(e))}onTouchStart(e){if(this.enabled!==!1)switch(e.touches.length){case 1:if(this.enableRotate===!1)return;this.handleTouchStartRotate(e),this.state="rotate";break;case 2:if(this.enableZoom===!1)return;this.handleTouchStartDolly(e),this.state="dolly";break;case 3:if(this.enablePan===!1)return;this.handleTouchStartPan(e),this.state="pan";break}}onTouchMove(e){if(this.enabled!==!1)switch(this.state){case"rotate":if(this.enableRotate===!1)return;this.handleTouchMoveRotate(e);break;case"dolly":if(this.enableZoom===!1)return;this.handleTouchMoveDolly(e);break;case"pan":if(this.enablePan===!1)return;this.handleTouchMovePan(e);break}}onTouchEnd(e){this.enabled!==!1&&(this.state="")}handleMouseDownRotate(e){this.rotateStart.set(e.clientX,e.clientY)}handleMouseMoveRotate(e){this.rotateEnd.set(e.clientX,e.clientY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart),this.isMirrored&&(this.rotateDelta.x=-this.rotateDelta.x);const r=this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/r.clientHeight*this.rotateSpeed),this.rotateUp(2*Math.PI*this.rotateDelta.y/r.clientHeight*this.rotateSpeed),this.rotateStart.copy(this.rotateEnd),this.update()}handleTouchStartRotate(e){this.rotateStart.set(e.touches[0].pageX,e.touches[0].pageY)}handleTouchMoveRotate(e){this.rotateEnd.set(e.touches[0].pageX,e.touches[0].pageY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart),this.isMirrored&&(this.rotateDelta.x=-this.rotateDelta.x);const r=this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/r.clientHeight*this.rotateSpeed),this.rotateUp(2*Math.PI*this.rotateDelta.y/r.clientHeight*this.rotateSpeed),this.rotateStart.copy(this.rotateEnd),this.update()}rotateLeft(e){this.sphericalDelta.theta-=e}rotateUp(e){this.sphericalDelta.phi-=e}handleMouseDownDolly(e){this.dollyStart.set(e.clientX,e.clientY)}handleMouseMoveDolly(e){this.dollyEnd.set(e.clientX,e.clientY),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyOut(Math.pow(.95,this.zoomSpeed)):this.dollyDelta.y<0&&this.dollyIn(Math.pow(.95,this.zoomSpeed)),this.dollyStart.copy(this.dollyEnd),this.update()}handleMouseWheel(e){let r=0;e.deltaY<0?r=-1:e.deltaY>0&&(r=1);const i=Math.pow(.95,this.zoomSpeed);r>0?this.dollyOut(i):r<0&&this.dollyIn(i),this.update()}handleTouchStartDolly(e){const r=e.touches[0].pageX-e.touches[1].pageX,i=e.touches[0].pageY-e.touches[1].pageY,n=Math.sqrt(r*r+i*i);this.dollyStart.set(0,n)}handleTouchMoveDolly(e){const r=e.touches[0].pageX-e.touches[1].pageX,i=e.touches[0].pageY-e.touches[1].pageY,n=Math.sqrt(r*r+i*i);this.dollyEnd.set(0,n);const a=this.dollyEnd.y/this.dollyStart.y;a>1?this.dollyOut(a):a<1&&this.dollyIn(a),this.dollyStart.copy(this.dollyEnd),this.update()}dollyIn(e){this.scale/=e}dollyOut(e){this.scale*=e}handleMouseDownPan(e){this.panStart.set(e.clientX,e.clientY)}handleMouseMovePan(e){this.panEnd.set(e.clientX,e.clientY),this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(this.panSpeed),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd),this.update()}handleTouchStartPan(e){this.panStart.set(e.touches[0].pageX,e.touches[0].pageY)}handleTouchMovePan(e){this.panEnd.set(e.touches[0].pageX,e.touches[0].pageY),this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(this.panSpeed),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd),this.update()}pan(e,r){const i=this.domElement;if(this.object instanceof dr){const n=this.object.position,a=new H;a.copy(n).sub(this.target);let o=a.length();o*=Math.tan(this.object.fov/2*Math.PI/180);const s=2*e*o/i.clientHeight,l=2*r*o/i.clientHeight,c=new H;c.setFromMatrixColumn(this.object.matrix,0),c.multiplyScalar(-s);const d=new H;this.screenSpacePanning===!0?d.setFromMatrixColumn(this.object.matrix,1):(d.setFromMatrixColumn(this.object.matrix,0),d.crossVectors(this.object.up,d)),d.multiplyScalar(l),c.add(d),this.target.add(c),this.object.position.add(c)}}}const hr={ORBIT:"ORBIT",COLOR_PICKER:"COLOR_PICKER",SIDE_SELECTION:"SIDE_SELECTION"},XE=Te.forwardRef(({cubeColors:t,currentSide:e,setCubeColors:r,setCurrentSide:i},n)=>{const a=Te.useRef(null),[o,s]=Te.useState(null),[l,c]=Te.useState(!1),[d,f]=Te.useState(hr.ORBIT),[h,m]=Te.useState(!1);console.log("Viewer with current side: ",e);const _=Te.useRef(),S=Te.useRef(),p=Te.useRef(),u=Te.useRef(),v=Te.useRef(),g=Te.useRef(),M=Te.useRef([]),C={ORBIT:"\u{1F91A}",COLOR_PICKER:"\u27A1\uFE0F",SIDE_SELECTION:"\u2935\uFE0F"};function R(w,U,D,K,q,te,z){let $=[];U.forEach((se,oe)=>{const ce=w[se];let fe=q==="row"?[...ce[te]]:ce.map(we=>we[te]);z[oe]&&(fe=fe.reverse()),$.push(fe)}),K==="clockwise"?$.unshift($.pop()):$.push($.shift()),U.forEach((se,oe)=>{const ce=w[se];let fe=$[oe];z[oe]&&(fe=fe.reverse()),q==="row"?ce[te]=fe:ce.forEach((we,Oe)=>{we[te]=fe[Oe]})})}const T=Te.useCallback((w,U)=>{const D=t.map(K=>K.map(q=>[...q]));switch(D[w]=J(D[w],U),w){case 0:R(D,[2,4,3,5],w,U,"col",2,[!1,!1,!1,!0]);break;case 1:R(D,[2,5,3,4],w,U,"col",0,[!1,!1,!1,!0]);break;case 2:R(D,[5,0,4,1],w,U,"row",0,[!1,!1,!1,!1]);break;case 3:R(D,[4,0,5,1],w,U,"row",2,[!1,!1,!1,!1]);break;case 4:R(D,[2,1,3,0],w,U,"row",2,[!1,!1,!1,!1]);break;case 5:R(D,[2,0,3,1],w,U,"row",0,[!0,!1,!0,!1]);break}r(D)},[t,r]),L=Te.useCallback((w,U)=>{if(!_.current)return;let D,K;switch(w){case 0:D="x",K=1;break;case 1:D="x",K=-1;break;case 2:D="y",K=1;break;case 3:D="y",K=-1;break;case 4:D="z",K=1;break;case 5:D="z",K=-1;break;default:return}const q=new Io;M.current.forEach(ce=>{Math.round(ce.position[D])===K&&q.add(ce)}),_.current.add(q);let te=(U==="clockwise"?-1:1)*(Math.PI/2);const z=new H(D==="x"?1:0,D==="y"?1:0,D==="z"?1:0);(w===1||w===3||w===5)&&(te*=-1);let $=null;const se=500,oe=ce=>{var Oe,Le,P;$||($=ce);const fe=ce-$,we=Math.min(fe/se,1);q.rotation[D]=te*we,(Oe=p.current)==null||Oe.render(_.current,S.current),we<1?requestAnimationFrame(oe):(q.rotation[D]=te,[...q.children].forEach($e=>{var Fe;$e.position.applyAxisAngle(z,te),$e.position.x=Math.round($e.position.x),$e.position.y=Math.round($e.position.y),$e.position.z=Math.round($e.position.z),$e.rotation.set(0,0,0),q.remove($e),(Fe=_.current)==null||Fe.add($e)}),(Le=_.current)==null||Le.remove(q),T(w,U),(P=p.current)==null||P.render(_.current,S.current))};requestAnimationFrame(oe)},[_,M,T]);Te.useImperativeHandle(n,()=>({rotateSide:L}));function J(w,U){const D=w.length;let K=Array.from({length:D},()=>Array(D).fill(""));for(let q=0;q<D;q++)for(let te=0;te<D;te++)K[q][te]=w[te][q];if(U==="clockwise")for(let q=0;q<D;q++)K[q].reverse();else for(let q=0;q<D;q++)for(let te=0,z=D-1;te<z;te++,z--){const $=K[te][q];K[te][q]=K[z][q],K[z][q]=$}return K}const y=Te.useCallback(w=>{if(S.current&&u.current){const U=S.current,D=u.current,K=1e3,q=U.position.clone(),te=Math.sqrt(3*Math.pow(2,2)),z=wo.degToRad(U.fov),$=te/2/Math.sin(z/2)+5,se=[new H($,0,0),new H(-$,0,0),new H(0,$,0),new H(0,-$,0),new H(0,0,$),new H(0,0,-$)][w],oe=performance.now(),ce=new No().setFromVector3(q),fe=new No().setFromVector3(se);Math.abs(fe.theta-ce.theta)>Math.PI&&(fe.theta>ce.theta?fe.theta-=2*Math.PI:fe.theta+=2*Math.PI);const we=Oe=>{const Le=Oe-oe,P=Math.min(Le/K,1),$e=new No(wo.lerp(ce.radius,fe.radius,P),wo.lerp(ce.phi,fe.phi,P),wo.lerp(ce.theta,fe.theta,P));U.position.setFromSpherical($e),U.lookAt(new H(0,0,0)),D.update(),P<1?requestAnimationFrame(we):(U.position.copy(se),D.update())};requestAnimationFrame(we)}},[]),x=Te.useCallback(w=>{if(d===hr.ORBIT)return;const U=p.current,D=S.current,K=v.current,q=g.current;if(!U||!D||!K||!q)return;const te=U.domElement.getBoundingClientRect();q.x=(w.clientX-te.left)/te.width*2-1,q.y=-((w.clientY-te.top)/te.height)*2+1,h&&(q.x=-q.x),K.setFromCamera(q,D);const z=K.intersectObjects(M.current);if(z.length>0){const $=z[0],se=$.object,oe=$.face.materialIndex,ce=[0,1,2,3,4,5][oe],fe=Math.round(se.position.x),we=Math.round(se.position.y),Oe=Math.round(se.position.z),{row:Le,col:P}=Z(ce,fe,we,Oe);d===hr.COLOR_PICKER?(s({faceIndex:ce,row:Le,col:P}),c(!0)):d===hr.SIDE_SELECTION&&(i(ce),y(ce),f(hr.ORBIT))}},[d,s,c,i,y]),k=Te.useCallback(()=>{const w=p.current,U=S.current,D=a.current;w&&U&&D&&(w.setSize(D.clientWidth,D.clientHeight),U.aspect=D.clientWidth/D.clientHeight,U.updateProjectionMatrix())},[]);Te.useEffect(()=>(window.addEventListener("resize",k),()=>{window.removeEventListener("resize",k)}),[k]),Te.useEffect(()=>{const w=p.current;if(!w)return;const U=w.domElement;return U.addEventListener("click",x),()=>{U.removeEventListener("click",x)}},[x]),Te.useEffect(()=>{if(!_.current){const w=a.current,U=new HE,D=new dr(45,w.clientWidth/w.clientHeight,.1,1e3),K=Math.sqrt(3*Math.pow(2,2)),q=wo.degToRad(D.fov),te=K/2/Math.sin(q/2);D.position.set(0,0,te+100);const z=new BE({antialias:!0});z.setSize(w.clientWidth,w.clientHeight),w.appendChild(z.domElement);const $=new GE(16777215,.8);U.add($);const se=[],oe=.98;for(let we=-1;we<=1;we++)for(let Oe=-1;Oe<=1;Oe++)for(let Le=-1;Le<=1;Le++){const P=new Ca(oe,oe,oe),$e=X(we,Oe,Le),Fe=new Gr(P,$e);Fe.position.set(we,Oe,Le),U.add(Fe),se.push(Fe)}M.current=se;const ce=new jE(D,z.domElement);ce.target.set(0,0,0),ce.update(),ce.enableRotate=d===hr.ORBIT,ce.enableZoom=d===hr.ORBIT,ce.enablePan=!1,_.current=U,S.current=D,p.current=z,u.current=ce,v.current=new WE,g.current=new Ve;const fe=()=>{requestAnimationFrame(fe),ce.update(),z.render(U,D)};return fe(),()=>{w.removeChild(z.domElement),z.dispose(),_.current=void 0}}},[]),Te.useEffect(()=>{M.current&&M.current.forEach(w=>{const U=Math.round(w.position.x),D=Math.round(w.position.y),K=Math.round(w.position.z),q=X(U,D,K);w.material=q})},[t]),Te.useEffect(()=>{y(e)},[e,y]),Te.useEffect(()=>{if(u.current){const w=u.current;w.enableRotate=d===hr.ORBIT,w.enableZoom=d===hr.ORBIT,w.enablePan=!1}d!==hr.COLOR_PICKER&&(c(!1),s(null))},[d]),Te.useEffect(()=>{if(u.current){const w=u.current;w.isMirrored=h}},[h]);const F=w=>{if(o){const{faceIndex:U,row:D,col:K}=o,q=t.map((te,z)=>z===U?te.map(($,se)=>se===D?$.map((oe,ce)=>ce===K?w:oe):$):te);r(q),s(null),c(!1),f(hr.ORBIT)}},V=()=>{c(!1),s(null)};function X(w,U,D){const K=[];return[{axis:"x",value:1,faceIndex:0},{axis:"x",value:-1,faceIndex:1},{axis:"y",value:1,faceIndex:2},{axis:"y",value:-1,faceIndex:3},{axis:"z",value:1,faceIndex:4},{axis:"z",value:-1,faceIndex:5}].forEach((q,te)=>{q.axis==="x"&&w===q.value||q.axis==="y"&&U===q.value||q.axis==="z"&&D===q.value?K[te]=G(q.faceIndex,w,U,D):K[te]=new Ml({visible:!1})}),K}function G(w,U,D,K){let q,te;switch(w){case 0:q=1-D,te=1-K;break;case 1:q=1-D,te=K+1;break;case 2:q=K+1,te=U+1;break;case 3:q=2-(K+1),te=U+1;break;case 4:q=1-D,te=U+1;break;case 5:q=1-D,te=1-U;break;default:q=0,te=0}q=Math.max(0,Math.min(2,q)),te=Math.max(0,Math.min(2,te));const z=t[w][q][te];return new Ml({color:z})}function Z(w,U,D,K){let q,te;switch(w){case 0:q=1-D,te=1-K;break;case 1:q=1-D,te=K+1;break;case 2:q=K+1,te=U+1;break;case 3:q=2-(K+1),te=U+1;break;case 4:q=1-D,te=U+1;break;case 5:q=1-D,te=1-U;break;default:q=0,te=0}return{row:q,col:te}}return Re.jsxs("div",{style:{position:"relative"},children:[Re.jsx("div",{style:{position:"absolute",top:"10px",left:"10px",zIndex:100},children:Object.entries(hr).map(([,w])=>Re.jsx("button",{onClick:()=>f(w),style:{marginRight:"10px",padding:"10px",fontSize:"18px",backgroundColor:d===w?"#ddd":"#fff",border:"1px solid #ccc",cursor:"pointer"},children:C[w]},w))}),Re.jsx("div",{style:{position:"absolute",top:"10px",right:"10px",zIndex:100},children:Re.jsxs("label",{style:{color:"white",fontSize:"16px"},children:["Mirror:",Re.jsx("input",{type:"checkbox",checked:h,onChange:()=>m(!h),style:{marginLeft:"5px"}})]})}),Re.jsx("div",{ref:a,style:{width:"100%",maxWidth:"640px",height:"500px",transform:h?"scaleX(-1)":"none"}}),l&&d===hr.COLOR_PICKER&&Re.jsx(sg,{onSelectColor:F,onClose:V})]})});function kv(){const t="grey",e={h:0,s:0,v:50},r=3,i=3,n=Array.from({length:r},()=>Array(i).fill(t)),a=Array.from({length:r},()=>Array(i).fill({...e})),o=Array.from({length:r},()=>Array(i).fill(""));return{colors:n,hsvValues:a,subImages:o}}const Ah=[0,5,1,4,2,3],YE=()=>{let t=[];for(let M=0;M<6;M++){t[M]=[];for(let C=0;C<3;C++){t[M][C]=[];for(let R=0;R<3;R++)t[M][C][R]="grey"}}const e=Te.useRef(null),[r,i]=Te.useState(t),[n,a]=Te.useState(0),[o,s]=Te.useState(0),[l,c]=Te.useState(kv()),[d,f]=Te.useState(!0),[h]=Te.useState(!0);function m(M){c(M),i(C=>{const R=[...C];return R[n]=M.colors,R})}const _=M=>{m(M),f(!1)},S=M=>{m(M)},p=M=>{i(C=>{const R=[...C];return R[n]=l.colors,R}),a(M);for(let C=0;C<6;C++)if(Ah[C]===M){s(C);break}c(kv()),f(!0)},u=()=>{const M=(o+5)%6;p(Ah[M])},v=()=>{const M=(o+1)%6;p(Ah[M])},g=()=>{f(!0)};return Re.jsxs("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[Re.jsxs("div",{style:{flex:"1 1 300px"},children:[Re.jsx(Sy,{currentSide:n,detectionEnabled:d,overlayData:l,onOverlayDataCaptured:_,onOverlayDataUpdated:S}),Re.jsxs("div",{style:{marginTop:"10px"},children:[Re.jsxs("p",{children:["Side ",n+1," captured. What would you like to do?"]}),Re.jsx("button",{onClick:u,children:"Previous Side"}),Re.jsx("button",{onClick:g,children:"Retake"}),Re.jsx("button",{onClick:v,children:"Next Side"})]}),Re.jsx("div",{style:{position:"relative"},children:Re.jsx("div",{children:[0,1,2,3,4,5].map(M=>Re.jsxs("div",{children:[Re.jsxs("button",{onClick:()=>{var C;return(C=e.current)==null?void 0:C.rotateSide(M,"clockwise")},children:[M," C"]}),Re.jsxs("button",{onClick:()=>{var C;return(C=e.current)==null?void 0:C.rotateSide(M,"counterclockwise")},children:[M," CC"]})]},M))})})]}),Re.jsx("div",{style:{flex:"1 1 300px"},children:Re.jsx(XE,{ref:e,cubeColors:r,setCubeColors:i,currentSide:n,setCurrentSide:p})}),h&&l&&Re.jsxs("div",{style:{marginTop:"20px"},children:[Re.jsx("h3",{children:"Debug Pane - Sub Images Used in Color Recognition"}),Re.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:l.subImages.map((M,C)=>M.map((R,T)=>Re.jsxs("div",{children:[Re.jsx("img",{src:R,alt:`Grid ${C}, ${T}`,style:{width:"100%"}}),Re.jsxs("p",{children:["Color: ",l.colors[C][T]]})]},`${C}-${T}`)))})]})]})};function qE(){const[t,e]=Te.useState(!1);return Re.jsxs(Re.Fragment,{children:[Re.jsxs("div",{children:[Re.jsx("p",{children:"J\xF8rgens Own Rubik's Cube Solver"}),Re.jsx("button",{onClick:()=>e(r=>!r),style:{marginTop:"10px"},children:t?"Close Rubik's Cube Recognizer":"Open Rubik's Cube Recognizer"})]}),!t&&Re.jsx("img",{src:"jorcs.webp",alt:"J\xF8rgens Own Rubik's Cube Solver",height:"500"}),t&&Re.jsx("div",{style:{marginTop:"20px"},children:Re.jsx(YE,{})})]})}ng(document.getElementById("root")).render(Re.jsx(Te.StrictMode,{children:Re.jsx(qE,{})}));
