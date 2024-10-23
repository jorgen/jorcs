(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();var Xd={exports:{}},Go={},jd={exports:{}},He={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var ka=Symbol.for("react.element"),Jv=Symbol.for("react.portal"),e_=Symbol.for("react.fragment"),t_=Symbol.for("react.strict_mode"),r_=Symbol.for("react.profiler"),i_=Symbol.for("react.provider"),n_=Symbol.for("react.context"),a_=Symbol.for("react.forward_ref"),o_=Symbol.for("react.suspense"),s_=Symbol.for("react.memo"),l_=Symbol.for("react.lazy"),qd=Symbol.iterator;function c_(t){return t===null||typeof t!="object"?null:(t=qd&&t[qd]||t["@@iterator"],typeof t=="function"?t:null)}var Yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kd=Object.assign,Zd={};function Ln(t,e,r){this.props=t,this.context=e,this.refs=Zd,this.updater=r||Yd}Ln.prototype.isReactComponent={},Ln.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},Ln.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qd(){}Qd.prototype=Ln.prototype;function Yl(t,e,r){this.props=t,this.context=e,this.refs=Zd,this.updater=r||Yd}var Kl=Yl.prototype=new Qd;Kl.constructor=Yl,Kd(Kl,Ln.prototype),Kl.isPureReactComponent=!0;var $d=Array.isArray,Jd=Object.prototype.hasOwnProperty,Zl={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(t,e,r){var i,n={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Jd.call(e,i)&&!ef.hasOwnProperty(i)&&(n[i]=e[i]);var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];n.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)n[i]===void 0&&(n[i]=s[i]);return{$$typeof:ka,type:t,key:a,ref:o,props:n,_owner:Zl.current}}function u_(t,e){return{$$typeof:ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ql(t){return typeof t=="object"&&t!==null&&t.$$typeof===ka}function h_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var rf=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?h_(""+t.key):e.toString(36)}function Wo(t,e,r,i,n){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ka:case Jv:o=!0}}if(o)return o=t,n=n(o),t=i===""?"."+$l(o,0):i,$d(n)?(r="",t!=null&&(r=t.replace(rf,"$&/")+"/"),Wo(n,e,r,"",function(c){return c})):n!=null&&(Ql(n)&&(n=u_(n,r+(!n.key||o&&o.key===n.key?"":(""+n.key).replace(rf,"$&/")+"/")+t)),e.push(n)),1;if(o=0,i=i===""?".":i+":",$d(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+$l(a,s);o+=Wo(a,e,r,l,n)}else if(l=c_(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+$l(a,s++),o+=Wo(a,e,r,l,n);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,r){if(t==null)return t;var i=[],n=0;return Wo(t,i,"","",function(a){return e.call(r,a,n++)}),i}function d_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},jo={transition:null},f_={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:jo,ReactCurrentOwner:Zl};function nf(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Xo,forEach:function(t,e,r){Xo(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!Ql(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},He.Component=Ln,He.Fragment=e_,He.Profiler=r_,He.PureComponent=Yl,He.StrictMode=t_,He.Suspense=o_,He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f_,He.act=nf,He.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Kd({},t.props),n=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Zl.current),e.key!==void 0&&(n=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Jd.call(e,l)&&!ef.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}return{$$typeof:ka,type:t.type,key:n,ref:a,props:i,_owner:o}},He.createContext=function(t){return t={$$typeof:n_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:i_,_context:t},t.Consumer=t},He.createElement=tf,He.createFactory=function(t){var e=tf.bind(null,t);return e.type=t,e},He.createRef=function(){return{current:null}},He.forwardRef=function(t){return{$$typeof:a_,render:t}},He.isValidElement=Ql,He.lazy=function(t){return{$$typeof:l_,_payload:{_status:-1,_result:t},_init:d_}},He.memo=function(t,e){return{$$typeof:s_,type:t,compare:e===void 0?null:e}},He.startTransition=function(t){var e=jo.transition;jo.transition={};try{t()}finally{jo.transition=e}},He.unstable_act=nf,He.useCallback=function(t,e){return Ht.current.useCallback(t,e)},He.useContext=function(t){return Ht.current.useContext(t)},He.useDebugValue=function(){},He.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)},He.useEffect=function(t,e){return Ht.current.useEffect(t,e)},He.useId=function(){return Ht.current.useId()},He.useImperativeHandle=function(t,e,r){return Ht.current.useImperativeHandle(t,e,r)},He.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)},He.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)},He.useMemo=function(t,e){return Ht.current.useMemo(t,e)},He.useReducer=function(t,e,r){return Ht.current.useReducer(t,e,r)},He.useRef=function(t){return Ht.current.useRef(t)},He.useState=function(t){return Ht.current.useState(t)},He.useSyncExternalStore=function(t,e,r){return Ht.current.useSyncExternalStore(t,e,r)},He.useTransition=function(){return Ht.current.useTransition()},He.version="18.3.1",jd.exports=He;var Re=jd.exports;/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var p_=Re,m_=Symbol.for("react.element"),g_=Symbol.for("react.fragment"),v_=Object.prototype.hasOwnProperty,__=p_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y_={key:!0,ref:!0,__self:!0,__source:!0};function af(t,e,r){var i,n={},a=null,o=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)v_.call(e,i)&&!y_.hasOwnProperty(i)&&(n[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)n[i]===void 0&&(n[i]=e[i]);return{$$typeof:m_,type:t,key:a,ref:o,props:n,_owner:__.current}}Go.Fragment=g_,Go.jsx=af,Go.jsxs=af,Xd.exports=Go;var Ue=Xd.exports,of={exports:{}},sr={},sf={exports:{}},lf={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(w,O){var I=w.length;w.push(O);e:for(;0<I;){var Y=I-1>>>1,se=w[Y];if(0<n(se,O))w[Y]=O,w[I]=se,I=Y;else break e}}function r(w){return w.length===0?null:w[0]}function i(w){if(w.length===0)return null;var O=w[0],I=w.pop();if(I!==O){w[0]=I;e:for(var Y=0,se=w.length,le=se>>>1;Y<le;){var G=2*(Y+1)-1,$=w[G],ee=G+1,re=w[ee];if(0>n($,I))ee<se&&0>n(re,$)?(w[Y]=re,w[ee]=I,Y=ee):(w[Y]=$,w[G]=I,Y=G);else if(ee<se&&0>n(re,I))w[Y]=re,w[ee]=I,Y=ee;else break e}}return O}function n(w,O){var I=w.sortIndex-O.sortIndex;return I!==0?I:w.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],c=[],d=1,f=null,h=3,p=!1,_=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(w){for(var O=r(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=w)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=r(c)}}function b(w){if(S=!1,g(w),!_)if(r(l)!==null)_=!0,P(C);else{var O=r(c);O!==null&&F(b,O.startTime-w)}}function C(w,O){_=!1,S&&(S=!1,u(L),L=-1),p=!0;var I=h;try{for(g(O),f=r(l);f!==null&&(!(f.expirationTime>O)||w&&!x());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,h=f.priorityLevel;var se=Y(f.expirationTime<=O);O=t.unstable_now(),typeof se=="function"?f.callback=se:f===r(l)&&i(l),g(O)}else i(l);f=r(l)}if(f!==null)var le=!0;else{var G=r(c);G!==null&&F(b,G.startTime-O),le=!1}return le}finally{f=null,h=I,p=!1}}var A=!1,T=null,L=-1,Z=5,y=-1;function x(){return!(t.unstable_now()-y<Z)}function z(){if(T!==null){var w=t.unstable_now();y=w;var O=!0;try{O=T(!0,w)}finally{O?B():(A=!1,T=null)}}else A=!1}var B;if(typeof v=="function")B=function(){v(z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=z,B=function(){q.postMessage(null)}}else B=function(){m(z,0)};function P(w){T=w,A||(A=!0,B())}function F(w,O){L=m(function(){w(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(w){w.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,P(C))},t.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<w?Math.floor(1e3/w):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(l)},t.unstable_next=function(w){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var I=h;h=O;try{return w()}finally{h=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(w,O){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var I=h;h=w;try{return O()}finally{h=I}},t.unstable_scheduleCallback=function(w,O,I){var Y=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Y+I:Y):I=Y,w){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=I+se,w={id:d++,callback:O,priorityLevel:w,startTime:I,expirationTime:se,sortIndex:-1},I>Y?(w.sortIndex=I,e(c,w),r(l)===null&&w===r(c)&&(S?(u(L),L=-1):S=!0,F(b,I-Y))):(w.sortIndex=se,e(l,w),_||p||(_=!0,P(C))),w},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(w){var O=h;return function(){var I=h;h=O;try{return w.apply(this,arguments)}finally{h=I}}}})(lf),sf.exports=lf;var x_=sf.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var S_=Re,lr=x_;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cf=new Set,Fa={};function $i(t,e){Dn(t,e),Dn(t+"Capture",e)}function Dn(t,e){for(Fa[t]=e,t=0;t<e.length;t++)cf.add(e[t])}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jl=Object.prototype.hasOwnProperty,b_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uf={},hf={};function M_(t){return Jl.call(hf,t)?!0:Jl.call(uf,t)?!1:b_.test(t)?hf[t]=!0:(uf[t]=!0,!1)}function E_(t,e,r,i){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w_(t,e,r,i){if(e===null||typeof e>"u"||E_(t,e,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,r,i,n,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=n,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pt[t]=new Vt(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pt[e]=new Vt(e,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pt[t]=new Vt(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){Pt[t]=new Vt(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){Pt[t]=new Vt(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){Pt[t]=new Vt(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){Pt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ec=/[\-:]([a-z])/g;function tc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ec,tc);Pt[e]=new Vt(e,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ec,tc);Pt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ec,tc);Pt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){Pt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)}),Pt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){Pt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rc(t,e,r,i){var n=Pt.hasOwnProperty(e)?Pt[e]:null;(n!==null?n.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(w_(e,r,n,i)&&(r=null),i||n===null?M_(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):n.mustUseProperty?t[n.propertyName]=r===null?n.type===3?!1:"":r:(e=n.attributeName,i=n.attributeNamespace,r===null?t.removeAttribute(e):(n=n.type,r=n===3||n===4&&r===!0?"":""+r,i?t.setAttributeNS(i,e,r):t.setAttribute(e,r))))}var Zr=S_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qo=Symbol.for("react.element"),In=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),df=Symbol.for("react.provider"),ff=Symbol.for("react.context"),ac=Symbol.for("react.forward_ref"),oc=Symbol.for("react.suspense"),sc=Symbol.for("react.suspense_list"),lc=Symbol.for("react.memo"),vi=Symbol.for("react.lazy"),pf=Symbol.for("react.offscreen"),mf=Symbol.iterator;function za(t){return t===null||typeof t!="object"?null:(t=mf&&t[mf]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,cc;function Ba(t){if(cc===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var uc=!1;function hc(t,e){if(!t||uc)return"";uc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var n=c.stack.split(`
`),a=i.stack.split(`
`),o=n.length-1,s=a.length-1;1<=o&&0<=s&&n[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(n[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||n[o]!==a[s]){var l=`
`+n[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{uc=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ba(t):""}function T_(t){switch(t.tag){case 5:return Ba(t.type);case 16:return Ba("Lazy");case 13:return Ba("Suspense");case 19:return Ba("SuspenseList");case 0:case 2:case 15:return t=hc(t.type,!1),t;case 11:return t=hc(t.type.render,!1),t;case 1:return t=hc(t.type,!0),t;default:return""}}function dc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Un:return"Fragment";case In:return"Portal";case nc:return"Profiler";case ic:return"StrictMode";case oc:return"Suspense";case sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ff:return(t.displayName||"Context")+".Consumer";case df:return(t._context.displayName||"Context")+".Provider";case ac:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lc:return e=t.displayName||null,e!==null?e:dc(t.type)||"Memo";case vi:e=t._payload,t=t._init;try{return dc(t(e))}catch{}}return null}function R_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dc(e);case 8:return e===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function A_(t){var e=gf(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var n=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yo(t){t._valueTracker||(t._valueTracker=A_(t))}function vf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),i="";return t&&(i=gf(t)?t.checked?"true":"false":t.value),t=i,t!==r?(e.setValue(t),!0):!1}function Ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fc(t,e){var r=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function _f(t,e){var r=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;r=_i(e.value!=null?e.value:r),t._wrapperState={initialChecked:i,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yf(t,e){e=e.checked,e!=null&&rc(t,"checked",e,!1)}function pc(t,e){yf(t,e);var r=_i(e.value),i=e.type;if(r!=null)i==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mc(t,e.type,r):e.hasOwnProperty("defaultValue")&&mc(t,e.type,_i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xf(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function mc(t,e,r){(e!=="number"||Ko(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ha=Array.isArray;function Nn(t,e,r,i){if(t=t.options,e){e={};for(var n=0;n<r.length;n++)e["$"+r[n]]=!0;for(r=0;r<t.length;r++)n=e.hasOwnProperty("$"+t[r].value),t[r].selected!==n&&(t[r].selected=n),n&&i&&(t[r].defaultSelected=!0)}else{for(r=""+_i(r),e=null,n=0;n<t.length;n++){if(t[n].value===r){t[n].selected=!0,i&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sf(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(ie(92));if(Ha(r)){if(1<r.length)throw Error(ie(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:_i(r)}}function bf(t,e){var r=_i(e.value),i=_i(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),i!=null&&(t.defaultValue=""+i)}function Mf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ef(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ef(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Zo,wf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,i,n){MSApp.execUnsafeLocalFunction(function(){return t(e,r,i,n)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Zo=Zo||document.createElement("div"),Zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Zo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Va(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C_=["Webkit","ms","Moz","O"];Object.keys(Ga).forEach(function(t){C_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ga[e]=Ga[t]})});function Tf(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Ga.hasOwnProperty(t)&&Ga[t]?(""+e).trim():e+"px"}function Rf(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var i=r.indexOf("--")===0,n=Tf(r,e[r],i);r==="float"&&(r="cssFloat"),i?t.setProperty(r,n):t[r]=n}}var P_=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _c(t,e){if(e){if(P_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function yc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xc=null;function Sc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bc=null,On=null,kn=null;function Af(t){if(t=ho(t)){if(typeof bc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=ys(e),bc(t.stateNode,t.type,e))}}function Cf(t){On?kn?kn.push(t):kn=[t]:On=t}function Pf(){if(On){var t=On,e=kn;if(kn=On=null,Af(t),e)for(t=0;t<e.length;t++)Af(e[t])}}function Lf(t,e){return t(e)}function Df(){}var Mc=!1;function If(t,e,r){if(Mc)return t(e,r);Mc=!0;try{return Lf(t,e,r)}finally{Mc=!1,(On!==null||kn!==null)&&(Df(),Pf())}}function Wa(t,e){var r=t.stateNode;if(r===null)return null;var i=ys(r);if(i===null)return null;r=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(ie(231,e,typeof r));return r}var Ec=!1;if(Kr)try{var Xa={};Object.defineProperty(Xa,"passive",{get:function(){Ec=!0}}),window.addEventListener("test",Xa,Xa),window.removeEventListener("test",Xa,Xa)}catch{Ec=!1}function L_(t,e,r,i,n,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(r,c)}catch(d){this.onError(d)}}var ja=!1,Qo=null,$o=!1,wc=null,D_={onError:function(t){ja=!0,Qo=t}};function I_(t,e,r,i,n,a,o,s,l){ja=!1,Qo=null,L_.apply(D_,arguments)}function U_(t,e,r,i,n,a,o,s,l){if(I_.apply(this,arguments),ja){if(ja){var c=Qo;ja=!1,Qo=null}else throw Error(ie(198));$o||($o=!0,wc=c)}}function Ji(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Uf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nf(t){if(Ji(t)!==t)throw Error(ie(188))}function N_(t){var e=t.alternate;if(!e){if(e=Ji(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var r=t,i=e;;){var n=r.return;if(n===null)break;var a=n.alternate;if(a===null){if(i=n.return,i!==null){r=i;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===r)return Nf(n),t;if(a===i)return Nf(n),e;a=a.sibling}throw Error(ie(188))}if(r.return!==i.return)r=n,i=a;else{for(var o=!1,s=n.child;s;){if(s===r){o=!0,r=n,i=a;break}if(s===i){o=!0,i=n,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,i=n;break}if(s===i){o=!0,i=a,r=n;break}s=s.sibling}if(!o)throw Error(ie(189))}}if(r.alternate!==i)throw Error(ie(190))}if(r.tag!==3)throw Error(ie(188));return r.stateNode.current===r?t:e}function Of(t){return t=N_(t),t!==null?kf(t):null}function kf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kf(t);if(e!==null)return e;t=t.sibling}return null}var Ff=lr.unstable_scheduleCallback,zf=lr.unstable_cancelCallback,O_=lr.unstable_shouldYield,k_=lr.unstable_requestPaint,mt=lr.unstable_now,F_=lr.unstable_getCurrentPriorityLevel,Tc=lr.unstable_ImmediatePriority,Bf=lr.unstable_UserBlockingPriority,Jo=lr.unstable_NormalPriority,z_=lr.unstable_LowPriority,Hf=lr.unstable_IdlePriority,es=null,zr=null;function B_(t){if(zr&&typeof zr.onCommitFiberRoot=="function")try{zr.onCommitFiberRoot(es,t,void 0,(t.current.flags&128)===128)}catch{}}var Tr=Math.clz32?Math.clz32:G_,H_=Math.log,V_=Math.LN2;function G_(t){return t>>>=0,t===0?32:31-(H_(t)/V_|0)|0}var ts=64,rs=4194304;function qa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function is(t,e){var r=t.pendingLanes;if(r===0)return 0;var i=0,n=t.suspendedLanes,a=t.pingedLanes,o=r&268435455;if(o!==0){var s=o&~n;s!==0?i=qa(s):(a&=o,a!==0&&(i=qa(a)))}else o=r&~n,o!==0?i=qa(o):a!==0&&(i=qa(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&n)&&(n=i&-i,a=e&-e,n>=a||n===16&&(a&4194240)!==0))return e;if(i&4&&(i|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)r=31-Tr(e),n=1<<r,i|=t[r],e&=~n;return i}function W_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X_(t,e){for(var r=t.suspendedLanes,i=t.pingedLanes,n=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-Tr(a),s=1<<o,l=n[o];l===-1?(!(s&r)||s&i)&&(n[o]=W_(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Rc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vf(){var t=ts;return ts<<=1,!(ts&4194240)&&(ts=64),t}function Ac(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Ya(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Tr(e),t[e]=r}function j_(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<r;){var n=31-Tr(r),a=1<<n;e[n]=0,i[n]=-1,t[n]=-1,r&=~a}}function Cc(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var i=31-Tr(r),n=1<<i;n&e|t[i]&e&&(t[i]|=e),r&=~n}}var Ke=0;function Gf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wf,Pc,Xf,jf,qf,Lc=!1,ns=[],yi=null,xi=null,Si=null,Ka=new Map,Za=new Map,bi=[],q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yf(t,e){switch(t){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":xi=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":Ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(e.pointerId)}}function Qa(t,e,r,i,n,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:i,nativeEvent:a,targetContainers:[n]},e!==null&&(e=ho(e),e!==null&&Pc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Y_(t,e,r,i,n){switch(e){case"focusin":return yi=Qa(yi,t,e,r,i,n),!0;case"dragenter":return xi=Qa(xi,t,e,r,i,n),!0;case"mouseover":return Si=Qa(Si,t,e,r,i,n),!0;case"pointerover":var a=n.pointerId;return Ka.set(a,Qa(Ka.get(a)||null,t,e,r,i,n)),!0;case"gotpointercapture":return a=n.pointerId,Za.set(a,Qa(Za.get(a)||null,t,e,r,i,n)),!0}return!1}function Kf(t){var e=en(t.target);if(e!==null){var r=Ji(e);if(r!==null){if(e=r.tag,e===13){if(e=Uf(r),e!==null){t.blockedOn=e,qf(t.priority,function(){Xf(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function as(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=Ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var i=new r.constructor(r.type,r);xc=i,r.target.dispatchEvent(i),xc=null}else return e=ho(r),e!==null&&Pc(e),t.blockedOn=r,!1;e.shift()}return!0}function Zf(t,e,r){as(t)&&r.delete(e)}function K_(){Lc=!1,yi!==null&&as(yi)&&(yi=null),xi!==null&&as(xi)&&(xi=null),Si!==null&&as(Si)&&(Si=null),Ka.forEach(Zf),Za.forEach(Zf)}function $a(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,lr.unstable_scheduleCallback(lr.unstable_NormalPriority,K_)))}function Ja(t){function e(n){return $a(n,t)}if(0<ns.length){$a(ns[0],t);for(var r=1;r<ns.length;r++){var i=ns[r];i.blockedOn===t&&(i.blockedOn=null)}}for(yi!==null&&$a(yi,t),xi!==null&&$a(xi,t),Si!==null&&$a(Si,t),Ka.forEach(e),Za.forEach(e),r=0;r<bi.length;r++)i=bi[r],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(r=bi[0],r.blockedOn===null);)Kf(r),r.blockedOn===null&&bi.shift()}var Fn=Zr.ReactCurrentBatchConfig,os=!0;function Z_(t,e,r,i){var n=Ke,a=Fn.transition;Fn.transition=null;try{Ke=1,Dc(t,e,r,i)}finally{Ke=n,Fn.transition=a}}function Q_(t,e,r,i){var n=Ke,a=Fn.transition;Fn.transition=null;try{Ke=4,Dc(t,e,r,i)}finally{Ke=n,Fn.transition=a}}function Dc(t,e,r,i){if(os){var n=Ic(t,e,r,i);if(n===null)Zc(t,e,i,ss,r),Yf(t,i);else if(Y_(n,t,e,r,i))i.stopPropagation();else if(Yf(t,i),e&4&&-1<q_.indexOf(t)){for(;n!==null;){var a=ho(n);if(a!==null&&Wf(a),a=Ic(t,e,r,i),a===null&&Zc(t,e,i,ss,r),a===n)break;n=a}n!==null&&i.stopPropagation()}else Zc(t,e,i,null,r)}}var ss=null;function Ic(t,e,r,i){if(ss=null,t=Sc(i),t=en(t),t!==null)if(e=Ji(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Uf(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ss=t,null}function Qf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F_()){case Tc:return 1;case Bf:return 4;case Jo:case z_:return 16;case Hf:return 536870912;default:return 16}default:return 16}}var Mi=null,Uc=null,ls=null;function $f(){if(ls)return ls;var t,e=Uc,r=e.length,i,n="value"in Mi?Mi.value:Mi.textContent,a=n.length;for(t=0;t<r&&e[t]===n[t];t++);var o=r-t;for(i=1;i<=o&&e[r-i]===n[a-i];i++);return ls=n.slice(t,1<i?1-i:void 0)}function cs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function us(){return!0}function Jf(){return!1}function cr(t){function e(r,i,n,a,o){this._reactName=r,this._targetInst=n,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?us:Jf,this.isPropagationStopped=Jf,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=us)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=us)},persist:function(){},isPersistent:us}),e}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=cr(zn),eo=ct({},zn,{view:0,detail:0}),$_=cr(eo),Oc,kc,to,hs=ct({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Oc=t.screenX-to.screenX,kc=t.screenY-to.screenY):kc=Oc=0,to=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),ep=cr(hs),J_=ct({},hs,{dataTransfer:0}),e0=cr(J_),t0=ct({},eo,{relatedTarget:0}),Fc=cr(t0),r0=ct({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),i0=cr(r0),n0=ct({},zn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a0=cr(n0),o0=ct({},zn,{data:0}),tp=cr(o0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=c0[t])?!!e[t]:!1}function zc(){return u0}var h0=ct({},eo,{key:function(t){if(t.key){var e=s0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(t){return t.type==="keypress"?cs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d0=cr(h0),f0=ct({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=cr(f0),p0=ct({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),m0=cr(p0),g0=ct({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),v0=cr(g0),_0=ct({},hs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),y0=cr(_0),x0=[9,13,27,32],Bc=Kr&&"CompositionEvent"in window,ro=null;Kr&&"documentMode"in document&&(ro=document.documentMode);var S0=Kr&&"TextEvent"in window&&!ro,ip=Kr&&(!Bc||ro&&8<ro&&11>=ro),np=" ",ap=!1;function op(t,e){switch(t){case"keyup":return x0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bn=!1;function b0(t,e){switch(t){case"compositionend":return sp(e);case"keypress":return e.which!==32?null:(ap=!0,np);case"textInput":return t=e.data,t===np&&ap?null:t;default:return null}}function M0(t,e){if(Bn)return t==="compositionend"||!Bc&&op(t,e)?(t=$f(),ls=Uc=Mi=null,Bn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ip&&e.locale!=="ko"?null:e.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!E0[t.type]:e==="textarea"}function cp(t,e,r,i){Cf(i),e=gs(e,"onChange"),0<e.length&&(r=new Nc("onChange","change",null,r,i),t.push({event:r,listeners:e}))}var io=null,no=null;function w0(t){Rp(t,0)}function ds(t){var e=Xn(t);if(vf(e))return t}function T0(t,e){if(t==="change")return e}var up=!1;if(Kr){var Hc;if(Kr){var Vc="oninput"in document;if(!Vc){var hp=document.createElement("div");hp.setAttribute("oninput","return;"),Vc=typeof hp.oninput=="function"}Hc=Vc}else Hc=!1;up=Hc&&(!document.documentMode||9<document.documentMode)}function dp(){io&&(io.detachEvent("onpropertychange",fp),no=io=null)}function fp(t){if(t.propertyName==="value"&&ds(no)){var e=[];cp(e,no,t,Sc(t)),If(w0,e)}}function R0(t,e,r){t==="focusin"?(dp(),io=e,no=r,io.attachEvent("onpropertychange",fp)):t==="focusout"&&dp()}function A0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ds(no)}function C0(t,e){if(t==="click")return ds(e)}function P0(t,e){if(t==="input"||t==="change")return ds(e)}function L0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rr=typeof Object.is=="function"?Object.is:L0;function ao(t,e){if(Rr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var n=r[i];if(!Jl.call(e,n)||!Rr(t[n],e[n]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,e){var r=pp(t);t=0;for(var i;r;){if(r.nodeType===3){if(i=t+r.textContent.length,t<=e&&i>=e)return{node:r,offset:e-t};t=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=pp(r)}}function gp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vp(){for(var t=window,e=Ko();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Ko(t.document)}return e}function Gc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function D0(t){var e=vp(),r=t.focusedElem,i=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&gp(r.ownerDocument.documentElement,r)){if(i!==null&&Gc(r)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var n=r.textContent.length,a=Math.min(i.start,n);i=i.end===void 0?a:Math.min(i.end,n),!t.extend&&a>i&&(n=i,i=a,a=n),n=mp(r,a);var o=mp(r,i);n&&o&&(t.rangeCount!==1||t.anchorNode!==n.node||t.anchorOffset!==n.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(n.node,n.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I0=Kr&&"documentMode"in document&&11>=document.documentMode,Hn=null,Wc=null,oo=null,Xc=!1;function _p(t,e,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xc||Hn==null||Hn!==Ko(i)||(i=Hn,"selectionStart"in i&&Gc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),oo&&ao(oo,i)||(oo=i,i=gs(Wc,"onSelect"),0<i.length&&(e=new Nc("onSelect","select",null,e,r),t.push({event:e,listeners:i}),e.target=Hn)))}function fs(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Vn={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionend:fs("Transition","TransitionEnd")},jc={},yp={};Kr&&(yp=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function ps(t){if(jc[t])return jc[t];if(!Vn[t])return t;var e=Vn[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in yp)return jc[t]=e[r];return t}var xp=ps("animationend"),Sp=ps("animationiteration"),bp=ps("animationstart"),Mp=ps("transitionend"),Ep=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ei(t,e){Ep.set(t,e),$i(e,[t])}for(var qc=0;qc<wp.length;qc++){var Yc=wp[qc],U0=Yc.toLowerCase(),N0=Yc[0].toUpperCase()+Yc.slice(1);Ei(U0,"on"+N0)}Ei(xp,"onAnimationEnd"),Ei(Sp,"onAnimationIteration"),Ei(bp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Mp,"onTransitionEnd"),Dn("onMouseEnter",["mouseout","mouseover"]),Dn("onMouseLeave",["mouseout","mouseover"]),Dn("onPointerEnter",["pointerout","pointerover"]),Dn("onPointerLeave",["pointerout","pointerover"]),$i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$i("onBeforeInput",["compositionend","keypress","textInput","paste"]),$i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Tp(t,e,r){var i=t.type||"unknown-event";t.currentTarget=r,U_(i,e,void 0,t),t.currentTarget=null}function Rp(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var i=t[r],n=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&n.isPropagationStopped())break e;Tp(n,s,c),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==a&&n.isPropagationStopped())break e;Tp(n,s,c),a=l}}}if($o)throw t=wc,$o=!1,wc=null,t}function it(t,e){var r=e[ru];r===void 0&&(r=e[ru]=new Set);var i=t+"__bubble";r.has(i)||(Ap(e,t,2,!1),r.add(i))}function Kc(t,e,r){var i=0;e&&(i|=4),Ap(r,t,i,e)}var ms="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[ms]){t[ms]=!0,cf.forEach(function(r){r!=="selectionchange"&&(O0.has(r)||Kc(r,!1,t),Kc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ms]||(e[ms]=!0,Kc("selectionchange",!1,e))}}function Ap(t,e,r,i){switch(Qf(e)){case 1:var n=Z_;break;case 4:n=Q_;break;default:n=Dc}r=n.bind(null,e,r,t),n=void 0,!Ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),i?n!==void 0?t.addEventListener(e,r,{capture:!0,passive:n}):t.addEventListener(e,r,!0):n!==void 0?t.addEventListener(e,r,{passive:n}):t.addEventListener(e,r,!1)}function Zc(t,e,r,i,n){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===n||s.nodeType===8&&s.parentNode===n)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===n||l.nodeType===8&&l.parentNode===n))return;o=o.return}for(;s!==null;){if(o=en(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}If(function(){var c=a,d=Sc(r),f=[];e:{var h=Ep.get(t);if(h!==void 0){var p=Nc,_=t;switch(t){case"keypress":if(cs(r)===0)break e;case"keydown":case"keyup":p=d0;break;case"focusin":_="focus",p=Fc;break;case"focusout":_="blur",p=Fc;break;case"beforeblur":case"afterblur":p=Fc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=e0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=m0;break;case xp:case Sp:case bp:p=i0;break;case Mp:p=v0;break;case"scroll":p=$_;break;case"wheel":p=y0;break;case"copy":case"cut":case"paste":p=a0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rp}var S=(e&4)!==0,m=!S&&t==="scroll",u=S?h!==null?h+"Capture":null:h;S=[];for(var v=c,g;v!==null;){g=v;var b=g.stateNode;if(g.tag===5&&b!==null&&(g=b,u!==null&&(b=Wa(v,u),b!=null&&S.push(co(v,b,g)))),m)break;v=v.return}0<S.length&&(h=new p(h,_,null,r,d),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&r!==xc&&(_=r.relatedTarget||r.fromElement)&&(en(_)||_[Qr]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=r.relatedTarget||r.toElement,p=c,_=_?en(_):null,_!==null&&(m=Ji(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(S=ep,b="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=rp,b="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?h:Xn(p),g=_==null?h:Xn(_),h=new S(b,v+"leave",p,r,d),h.target=m,h.relatedTarget=g,b=null,en(d)===c&&(S=new S(u,v+"enter",_,r,d),S.target=g,S.relatedTarget=m,b=S),m=b,p&&_)t:{for(S=p,u=_,v=0,g=S;g;g=Gn(g))v++;for(g=0,b=u;b;b=Gn(b))g++;for(;0<v-g;)S=Gn(S),v--;for(;0<g-v;)u=Gn(u),g--;for(;v--;){if(S===u||u!==null&&S===u.alternate)break t;S=Gn(S),u=Gn(u)}S=null}else S=null;p!==null&&Cp(f,h,p,S,!1),_!==null&&m!==null&&Cp(f,m,_,S,!0)}}e:{if(h=c?Xn(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=T0;else if(lp(h))if(up)C=P0;else{C=A0;var A=R0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=C0);if(C&&(C=C(t,c))){cp(f,C,r,d);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&mc(h,"number",h.value)}switch(A=c?Xn(c):window,t){case"focusin":(lp(A)||A.contentEditable==="true")&&(Hn=A,Wc=c,oo=null);break;case"focusout":oo=Wc=Hn=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,_p(f,r,d);break;case"selectionchange":if(I0)break;case"keydown":case"keyup":_p(f,r,d)}var T;if(Bc)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Bn?op(t,r)&&(L="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(ip&&r.locale!=="ko"&&(Bn||L!=="onCompositionStart"?L==="onCompositionEnd"&&Bn&&(T=$f()):(Mi=d,Uc="value"in Mi?Mi.value:Mi.textContent,Bn=!0)),A=gs(c,L),0<A.length&&(L=new tp(L,t,null,r,d),f.push({event:L,listeners:A}),T?L.data=T:(T=sp(r),T!==null&&(L.data=T)))),(T=S0?b0(t,r):M0(t,r))&&(c=gs(c,"onBeforeInput"),0<c.length&&(d=new tp("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:c}),d.data=T))}Rp(f,e)})}function co(t,e,r){return{instance:t,listener:e,currentTarget:r}}function gs(t,e){for(var r=e+"Capture",i=[];t!==null;){var n=t,a=n.stateNode;n.tag===5&&a!==null&&(n=a,a=Wa(t,r),a!=null&&i.unshift(co(t,a,n)),a=Wa(t,e),a!=null&&i.push(co(t,a,n))),t=t.return}return i}function Gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cp(t,e,r,i,n){for(var a=e._reactName,o=[];r!==null&&r!==i;){var s=r,l=s.alternate,c=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&c!==null&&(s=c,n?(l=Wa(r,a),l!=null&&o.unshift(co(r,l,s))):n||(l=Wa(r,a),l!=null&&o.push(co(r,l,s)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var k0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function Pp(t){return(typeof t=="string"?t:""+t).replace(k0,`
`).replace(F0,"")}function vs(t,e,r){if(e=Pp(e),Pp(t)!==e&&r)throw Error(ie(425))}function _s(){}var Qc=null,$c=null;function Jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eu=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(t){return Lp.resolve(null).then(t).catch(H0)}:eu;function H0(t){setTimeout(function(){throw t})}function tu(t,e){var r=e,i=0;do{var n=r.nextSibling;if(t.removeChild(r),n&&n.nodeType===8)if(r=n.data,r==="/$"){if(i===0){t.removeChild(n),Ja(e);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=n}while(r);Ja(e)}function wi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var Wn=Math.random().toString(36).slice(2),Br="__reactFiber$"+Wn,uo="__reactProps$"+Wn,Qr="__reactContainer$"+Wn,ru="__reactEvents$"+Wn,V0="__reactListeners$"+Wn,G0="__reactHandles$"+Wn;function en(t){var e=t[Br];if(e)return e;for(var r=t.parentNode;r;){if(e=r[Qr]||r[Br]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=Dp(t);t!==null;){if(r=t[Br])return r;t=Dp(t)}return e}t=r,r=t.parentNode}return null}function ho(t){return t=t[Br]||t[Qr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function ys(t){return t[uo]||null}var iu=[],jn=-1;function Ti(t){return{current:t}}function nt(t){0>jn||(t.current=iu[jn],iu[jn]=null,jn--)}function tt(t,e){jn++,iu[jn]=t.current,t.current=e}var Ri={},It=Ti(Ri),Zt=Ti(!1),tn=Ri;function qn(t,e){var r=t.type.contextTypes;if(!r)return Ri;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var n={},a;for(a in r)n[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=n),n}function Qt(t){return t=t.childContextTypes,t!=null}function xs(){nt(Zt),nt(It)}function Ip(t,e,r){if(It.current!==Ri)throw Error(ie(168));tt(It,e),tt(Zt,r)}function Up(t,e,r){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var n in i)if(!(n in e))throw Error(ie(108,R_(t)||"Unknown",n));return ct({},r,i)}function Ss(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ri,tn=It.current,tt(It,t),tt(Zt,Zt.current),!0}function Np(t,e,r){var i=t.stateNode;if(!i)throw Error(ie(169));r?(t=Up(t,e,tn),i.__reactInternalMemoizedMergedChildContext=t,nt(Zt),nt(It),tt(It,t)):nt(Zt),tt(Zt,r)}var $r=null,bs=!1,nu=!1;function Op(t){$r===null?$r=[t]:$r.push(t)}function W0(t){bs=!0,Op(t)}function Ai(){if(!nu&&$r!==null){nu=!0;var t=0,e=Ke;try{var r=$r;for(Ke=1;t<r.length;t++){var i=r[t];do i=i(!0);while(i!==null)}$r=null,bs=!1}catch(n){throw $r!==null&&($r=$r.slice(t+1)),Ff(Tc,Ai),n}finally{Ke=e,nu=!1}}return null}var Yn=[],Kn=0,Ms=null,Es=0,gr=[],vr=0,rn=null,Jr=1,ei="";function nn(t,e){Yn[Kn++]=Es,Yn[Kn++]=Ms,Ms=t,Es=e}function kp(t,e,r){gr[vr++]=Jr,gr[vr++]=ei,gr[vr++]=rn,rn=t;var i=Jr;t=ei;var n=32-Tr(i)-1;i&=~(1<<n),r+=1;var a=32-Tr(e)+n;if(30<a){var o=n-n%5;a=(i&(1<<o)-1).toString(32),i>>=o,n-=o,Jr=1<<32-Tr(e)+n|r<<n|i,ei=a+t}else Jr=1<<a|r<<n|i,ei=t}function au(t){t.return!==null&&(nn(t,1),kp(t,1,0))}function ou(t){for(;t===Ms;)Ms=Yn[--Kn],Yn[Kn]=null,Es=Yn[--Kn],Yn[Kn]=null;for(;t===rn;)rn=gr[--vr],gr[vr]=null,ei=gr[--vr],gr[vr]=null,Jr=gr[--vr],gr[vr]=null}var ur=null,hr=null,st=!1,Ar=null;function Fp(t,e){var r=Sr(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function zp(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ur=t,hr=wi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ur=t,hr=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=rn!==null?{id:Jr,overflow:ei}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Sr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,ur=t,hr=null,!0):!1;default:return!1}}function su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lu(t){if(st){var e=hr;if(e){var r=e;if(!zp(t,e)){if(su(t))throw Error(ie(418));e=wi(r.nextSibling);var i=ur;e&&zp(t,e)?Fp(i,r):(t.flags=t.flags&-4097|2,st=!1,ur=t)}}else{if(su(t))throw Error(ie(418));t.flags=t.flags&-4097|2,st=!1,ur=t}}}function Bp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ur=t}function ws(t){if(t!==ur)return!1;if(!st)return Bp(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jc(t.type,t.memoizedProps)),e&&(e=hr)){if(su(t))throw Hp(),Error(ie(418));for(;e;)Fp(t,e),e=wi(e.nextSibling)}if(Bp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){hr=wi(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}hr=null}}else hr=ur?wi(t.stateNode.nextSibling):null;return!0}function Hp(){for(var t=hr;t;)t=wi(t.nextSibling)}function Zn(){hr=ur=null,st=!1}function cu(t){Ar===null?Ar=[t]:Ar.push(t)}var X0=Zr.ReactCurrentBatchConfig;function fo(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(ie(309));var i=r.stateNode}if(!i)throw Error(ie(147,t));var n=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=n.refs;o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(ie(284));if(!r._owner)throw Error(ie(290,t))}return t}function Ts(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vp(t){var e=t._init;return e(t._payload)}function Gp(t){function e(u,v){if(t){var g=u.deletions;g===null?(u.deletions=[v],u.flags|=16):g.push(v)}}function r(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function n(u,v){return u=Oi(u,v),u.index=0,u.sibling=null,u}function a(u,v,g){return u.index=g,t?(g=u.alternate,g!==null?(g=g.index,g<v?(u.flags|=2,v):g):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function s(u,v,g,b){return v===null||v.tag!==6?(v=Ju(g,u.mode,b),v.return=u,v):(v=n(v,g),v.return=u,v)}function l(u,v,g,b){var C=g.type;return C===Un?d(u,v,g.props.children,b,g.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vi&&Vp(C)===v.type)?(b=n(v,g.props),b.ref=fo(u,v,g),b.return=u,b):(b=Zs(g.type,g.key,g.props,null,u.mode,b),b.ref=fo(u,v,g),b.return=u,b)}function c(u,v,g,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=eh(g,u.mode,b),v.return=u,v):(v=n(v,g.children||[]),v.return=u,v)}function d(u,v,g,b,C){return v===null||v.tag!==7?(v=dn(g,u.mode,b,C),v.return=u,v):(v=n(v,g),v.return=u,v)}function f(u,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ju(""+v,u.mode,g),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case qo:return g=Zs(v.type,v.key,v.props,null,u.mode,g),g.ref=fo(u,null,v),g.return=u,g;case In:return v=eh(v,u.mode,g),v.return=u,v;case vi:var b=v._init;return f(u,b(v._payload),g)}if(Ha(v)||za(v))return v=dn(v,u.mode,g,null),v.return=u,v;Ts(u,v)}return null}function h(u,v,g,b){var C=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:s(u,v,""+g,b);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:return g.key===C?l(u,v,g,b):null;case In:return g.key===C?c(u,v,g,b):null;case vi:return C=g._init,h(u,v,C(g._payload),b)}if(Ha(g)||za(g))return C!==null?null:d(u,v,g,b,null);Ts(u,g)}return null}function p(u,v,g,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return u=u.get(g)||null,s(v,u,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case qo:return u=u.get(b.key===null?g:b.key)||null,l(v,u,b,C);case In:return u=u.get(b.key===null?g:b.key)||null,c(v,u,b,C);case vi:var A=b._init;return p(u,v,g,A(b._payload),C)}if(Ha(b)||za(b))return u=u.get(g)||null,d(v,u,b,C,null);Ts(v,b)}return null}function _(u,v,g,b){for(var C=null,A=null,T=v,L=v=0,Z=null;T!==null&&L<g.length;L++){T.index>L?(Z=T,T=null):Z=T.sibling;var y=h(u,T,g[L],b);if(y===null){T===null&&(T=Z);break}t&&T&&y.alternate===null&&e(u,T),v=a(y,v,L),A===null?C=y:A.sibling=y,A=y,T=Z}if(L===g.length)return r(u,T),st&&nn(u,L),C;if(T===null){for(;L<g.length;L++)T=f(u,g[L],b),T!==null&&(v=a(T,v,L),A===null?C=T:A.sibling=T,A=T);return st&&nn(u,L),C}for(T=i(u,T);L<g.length;L++)Z=p(T,u,L,g[L],b),Z!==null&&(t&&Z.alternate!==null&&T.delete(Z.key===null?L:Z.key),v=a(Z,v,L),A===null?C=Z:A.sibling=Z,A=Z);return t&&T.forEach(function(x){return e(u,x)}),st&&nn(u,L),C}function S(u,v,g,b){var C=za(g);if(typeof C!="function")throw Error(ie(150));if(g=C.call(g),g==null)throw Error(ie(151));for(var A=C=null,T=v,L=v=0,Z=null,y=g.next();T!==null&&!y.done;L++,y=g.next()){T.index>L?(Z=T,T=null):Z=T.sibling;var x=h(u,T,y.value,b);if(x===null){T===null&&(T=Z);break}t&&T&&x.alternate===null&&e(u,T),v=a(x,v,L),A===null?C=x:A.sibling=x,A=x,T=Z}if(y.done)return r(u,T),st&&nn(u,L),C;if(T===null){for(;!y.done;L++,y=g.next())y=f(u,y.value,b),y!==null&&(v=a(y,v,L),A===null?C=y:A.sibling=y,A=y);return st&&nn(u,L),C}for(T=i(u,T);!y.done;L++,y=g.next())y=p(T,u,L,y.value,b),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?L:y.key),v=a(y,v,L),A===null?C=y:A.sibling=y,A=y);return t&&T.forEach(function(z){return e(u,z)}),st&&nn(u,L),C}function m(u,v,g,b){if(typeof g=="object"&&g!==null&&g.type===Un&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case qo:e:{for(var C=g.key,A=v;A!==null;){if(A.key===C){if(C=g.type,C===Un){if(A.tag===7){r(u,A.sibling),v=n(A,g.props.children),v.return=u,u=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===vi&&Vp(C)===A.type){r(u,A.sibling),v=n(A,g.props),v.ref=fo(u,A,g),v.return=u,u=v;break e}r(u,A);break}else e(u,A);A=A.sibling}g.type===Un?(v=dn(g.props.children,u.mode,b,g.key),v.return=u,u=v):(b=Zs(g.type,g.key,g.props,null,u.mode,b),b.ref=fo(u,v,g),b.return=u,u=b)}return o(u);case In:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){r(u,v.sibling),v=n(v,g.children||[]),v.return=u,u=v;break e}else{r(u,v);break}else e(u,v);v=v.sibling}v=eh(g,u.mode,b),v.return=u,u=v}return o(u);case vi:return A=g._init,m(u,v,A(g._payload),b)}if(Ha(g))return _(u,v,g,b);if(za(g))return S(u,v,g,b);Ts(u,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(r(u,v.sibling),v=n(v,g),v.return=u,u=v):(r(u,v),v=Ju(g,u.mode,b),v.return=u,u=v),o(u)):r(u,v)}return m}var Qn=Gp(!0),Wp=Gp(!1),Rs=Ti(null),As=null,$n=null,uu=null;function hu(){uu=$n=As=null}function du(t){var e=Rs.current;nt(Rs),t._currentValue=e}function fu(t,e,r){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===r)break;t=t.return}}function Jn(t,e){As=t,uu=$n=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($t=!0),t.firstContext=null)}function _r(t){var e=t._currentValue;if(uu!==t)if(t={context:t,memoizedValue:e,next:null},$n===null){if(As===null)throw Error(ie(308));$n=t,As.dependencies={lanes:0,firstContext:t}}else $n=$n.next=t;return e}var an=null;function pu(t){an===null?an=[t]:an.push(t)}function Xp(t,e,r,i){var n=e.interleaved;return n===null?(r.next=r,pu(e)):(r.next=n.next,n.next=r),e.interleaved=r,ti(t,i)}function ti(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Ci=!1;function mu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pi(t,e,r){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var n=i.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),i.pending=e,ti(t,r)}return n=i.interleaved,n===null?(e.next=e,pu(i)):(e.next=n.next,n.next=e),i.interleaved=e,ti(t,r)}function Cs(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Cc(t,r)}}function qp(t,e){var r=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var n=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?n=a=o:a=a.next=o,r=r.next}while(r!==null);a===null?n=a=e:a=a.next=e}else n=a=e;r={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Ps(t,e,r,i){var n=t.updateQueue;Ci=!1;var a=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?a=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=l))}if(a!==null){var f=n.baseState;o=0,d=c=l=null,s=a;do{var h=s.lane,p=s.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=t,S=s;switch(h=e,p=r,S.tag){case 1:if(_=S.payload,typeof _=="function"){f=_.call(p,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(p,f,h):_,h==null)break e;f=ct({},f,h);break e;case 2:Ci=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=n.effects,h===null?n.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=h;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;h=s,s=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);if(d===null&&(l=f),n.baseState=l,n.firstBaseUpdate=c,n.lastBaseUpdate=d,e=n.shared.interleaved,e!==null){n=e;do o|=n.lane,n=n.next;while(n!==e)}else a===null&&(n.shared.lanes=0);ln|=o,t.lanes=o,t.memoizedState=f}}function Yp(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],n=i.callback;if(n!==null){if(i.callback=null,i=r,typeof n!="function")throw Error(ie(191,n));n.call(i)}}}var po={},Hr=Ti(po),mo=Ti(po),go=Ti(po);function on(t){if(t===po)throw Error(ie(174));return t}function gu(t,e){switch(tt(go,e),tt(mo,t),tt(Hr,po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vc(e,t)}nt(Hr),tt(Hr,e)}function ea(){nt(Hr),nt(mo),nt(go)}function Kp(t){on(go.current);var e=on(Hr.current),r=vc(e,t.type);e!==r&&(tt(mo,t),tt(Hr,r))}function vu(t){mo.current===t&&(nt(Hr),nt(mo))}var ut=Ti(0);function Ls(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _u=[];function yu(){for(var t=0;t<_u.length;t++)_u[t]._workInProgressVersionPrimary=null;_u.length=0}var Ds=Zr.ReactCurrentDispatcher,xu=Zr.ReactCurrentBatchConfig,sn=0,ht=null,bt=null,Rt=null,Is=!1,vo=!1,_o=0,j0=0;function Ut(){throw Error(ie(321))}function Su(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Rr(t[r],e[r]))return!1;return!0}function bu(t,e,r,i,n,a){if(sn=a,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ds.current=t===null||t.memoizedState===null?Z0:Q0,t=r(i,n),vo){a=0;do{if(vo=!1,_o=0,25<=a)throw Error(ie(301));a+=1,Rt=bt=null,e.updateQueue=null,Ds.current=$0,t=r(i,n)}while(vo)}if(Ds.current=Os,e=bt!==null&&bt.next!==null,sn=0,Rt=bt=ht=null,Is=!1,e)throw Error(ie(300));return t}function Mu(){var t=_o!==0;return _o=0,t}function Vr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ht.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function yr(){if(bt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Rt===null?ht.memoizedState:Rt.next;if(e!==null)Rt=e,bt=t;else{if(t===null)throw Error(ie(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Rt===null?ht.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function yo(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=yr(),r=e.queue;if(r===null)throw Error(ie(311));r.lastRenderedReducer=t;var i=bt,n=i.baseQueue,a=r.pending;if(a!==null){if(n!==null){var o=n.next;n.next=a.next,a.next=o}i.baseQueue=n=a,r.pending=null}if(n!==null){a=n.next,i=i.baseState;var s=o=null,l=null,c=a;do{var d=c.lane;if((sn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=f,o=i):l=l.next=f,ht.lanes|=d,ln|=d}c=c.next}while(c!==null&&c!==a);l===null?o=i:l.next=s,Rr(i,e.memoizedState)||($t=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,r.lastRenderedState=i}if(t=r.interleaved,t!==null){n=t;do a=n.lane,ht.lanes|=a,ln|=a,n=n.next;while(n!==t)}else n===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function wu(t){var e=yr(),r=e.queue;if(r===null)throw Error(ie(311));r.lastRenderedReducer=t;var i=r.dispatch,n=r.pending,a=e.memoizedState;if(n!==null){r.pending=null;var o=n=n.next;do a=t(a,o.action),o=o.next;while(o!==n);Rr(a,e.memoizedState)||($t=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,i]}function Zp(){}function Qp(t,e){var r=ht,i=yr(),n=e(),a=!Rr(i.memoizedState,n);if(a&&(i.memoizedState=n,$t=!0),i=i.queue,Tu(em.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||Rt!==null&&Rt.memoizedState.tag&1){if(r.flags|=2048,xo(9,Jp.bind(null,r,i,n,e),void 0,null),At===null)throw Error(ie(349));sn&30||$p(r,e,n)}return n}function $p(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Jp(t,e,r,i){e.value=r,e.getSnapshot=i,tm(e)&&rm(t)}function em(t,e,r){return r(function(){tm(e)&&rm(t)})}function tm(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Rr(t,r)}catch{return!0}}function rm(t){var e=ti(t,1);e!==null&&Dr(e,t,1,-1)}function im(t){var e=Vr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},e.queue=t,t=t.dispatch=K0.bind(null,ht,t),[e.memoizedState,t]}function xo(t,e,r,i){return t={tag:t,create:e,destroy:r,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(i=r.next,r.next=t,t.next=i,e.lastEffect=t)),t}function nm(){return yr().memoizedState}function Us(t,e,r,i){var n=Vr();ht.flags|=t,n.memoizedState=xo(1|e,r,void 0,i===void 0?null:i)}function Ns(t,e,r,i){var n=yr();i=i===void 0?null:i;var a=void 0;if(bt!==null){var o=bt.memoizedState;if(a=o.destroy,i!==null&&Su(i,o.deps)){n.memoizedState=xo(e,r,a,i);return}}ht.flags|=t,n.memoizedState=xo(1|e,r,a,i)}function am(t,e){return Us(8390656,8,t,e)}function Tu(t,e){return Ns(2048,8,t,e)}function om(t,e){return Ns(4,2,t,e)}function sm(t,e){return Ns(4,4,t,e)}function lm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cm(t,e,r){return r=r!=null?r.concat([t]):null,Ns(4,4,lm.bind(null,e,t),r)}function Ru(){}function um(t,e){var r=yr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Su(e,i[1])?i[0]:(r.memoizedState=[t,e],t)}function hm(t,e){var r=yr();e=e===void 0?null:e;var i=r.memoizedState;return i!==null&&e!==null&&Su(e,i[1])?i[0]:(t=t(),r.memoizedState=[t,e],t)}function dm(t,e,r){return sn&21?(Rr(r,e)||(r=Vf(),ht.lanes|=r,ln|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$t=!0),t.memoizedState=r)}function q0(t,e){var r=Ke;Ke=r!==0&&4>r?r:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{Ke=r,xu.transition=i}}function fm(){return yr().memoizedState}function Y0(t,e,r){var i=Ui(t);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},pm(t))mm(e,r);else if(r=Xp(t,e,r,i),r!==null){var n=Wt();Dr(r,t,i,n),gm(r,e,i)}}function K0(t,e,r){var i=Ui(t),n={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(pm(t))mm(e,n);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,r);if(n.hasEagerState=!0,n.eagerState=s,Rr(s,o)){var l=e.interleaved;l===null?(n.next=n,pu(e)):(n.next=l.next,l.next=n),e.interleaved=n;return}}catch{}finally{}r=Xp(t,e,n,i),r!==null&&(n=Wt(),Dr(r,t,i,n),gm(r,e,i))}}function pm(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function mm(t,e){vo=Is=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function gm(t,e,r){if(r&4194240){var i=e.lanes;i&=t.pendingLanes,r|=i,e.lanes=r,Cc(t,r)}}var Os={readContext:_r,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Z0={readContext:_r,useCallback:function(t,e){return Vr().memoizedState=[t,e===void 0?null:e],t},useContext:_r,useEffect:am,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,Us(4194308,4,lm.bind(null,e,t),r)},useLayoutEffect:function(t,e){return Us(4194308,4,t,e)},useInsertionEffect:function(t,e){return Us(4,2,t,e)},useMemo:function(t,e){var r=Vr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var i=Vr();return e=r!==void 0?r(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Y0.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Vr();return t={current:t},e.memoizedState=t},useState:im,useDebugValue:Ru,useDeferredValue:function(t){return Vr().memoizedState=t},useTransition:function(){var t=im(!1),e=t[0];return t=q0.bind(null,t[1]),Vr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var i=ht,n=Vr();if(st){if(r===void 0)throw Error(ie(407));r=r()}else{if(r=e(),At===null)throw Error(ie(349));sn&30||$p(i,e,r)}n.memoizedState=r;var a={value:r,getSnapshot:e};return n.queue=a,am(em.bind(null,i,a,t),[t]),i.flags|=2048,xo(9,Jp.bind(null,i,a,r,e),void 0,null),r},useId:function(){var t=Vr(),e=At.identifierPrefix;if(st){var r=ei,i=Jr;r=(i&~(1<<32-Tr(i)-1)).toString(32)+r,e=":"+e+"R"+r,r=_o++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=j0++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Q0={readContext:_r,useCallback:um,useContext:_r,useEffect:Tu,useImperativeHandle:cm,useInsertionEffect:om,useLayoutEffect:sm,useMemo:hm,useReducer:Eu,useRef:nm,useState:function(){return Eu(yo)},useDebugValue:Ru,useDeferredValue:function(t){var e=yr();return dm(e,bt.memoizedState,t)},useTransition:function(){var t=Eu(yo)[0],e=yr().memoizedState;return[t,e]},useMutableSource:Zp,useSyncExternalStore:Qp,useId:fm,unstable_isNewReconciler:!1},$0={readContext:_r,useCallback:um,useContext:_r,useEffect:Tu,useImperativeHandle:cm,useInsertionEffect:om,useLayoutEffect:sm,useMemo:hm,useReducer:wu,useRef:nm,useState:function(){return wu(yo)},useDebugValue:Ru,useDeferredValue:function(t){var e=yr();return bt===null?e.memoizedState=t:dm(e,bt.memoizedState,t)},useTransition:function(){var t=wu(yo)[0],e=yr().memoizedState;return[t,e]},useMutableSource:Zp,useSyncExternalStore:Qp,useId:fm,unstable_isNewReconciler:!1};function Cr(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}function Au(t,e,r,i){e=t.memoizedState,r=r(i,e),r=r==null?e:ct({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ks={isMounted:function(t){return(t=t._reactInternals)?Ji(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var i=Wt(),n=Ui(t),a=ri(i,n);a.payload=e,r!=null&&(a.callback=r),e=Pi(t,a,n),e!==null&&(Dr(e,t,n,i),Cs(e,t,n))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var i=Wt(),n=Ui(t),a=ri(i,n);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=Pi(t,a,n),e!==null&&(Dr(e,t,n,i),Cs(e,t,n))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=Wt(),i=Ui(t),n=ri(r,i);n.tag=2,e!=null&&(n.callback=e),e=Pi(t,n,i),e!==null&&(Dr(e,t,i,r),Cs(e,t,i))}};function vm(t,e,r,i,n,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!ao(r,i)||!ao(n,a):!0}function _m(t,e,r){var i=!1,n=Ri,a=e.contextType;return typeof a=="object"&&a!==null?a=_r(a):(n=Qt(e)?tn:It.current,i=e.contextTypes,a=(i=i!=null)?qn(t,n):Ri),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ks,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=a),e}function ym(t,e,r,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,i),e.state!==t&&ks.enqueueReplaceState(e,e.state,null)}function Cu(t,e,r,i){var n=t.stateNode;n.props=r,n.state=t.memoizedState,n.refs={},mu(t);var a=e.contextType;typeof a=="object"&&a!==null?n.context=_r(a):(a=Qt(e)?tn:It.current,n.context=qn(t,a)),n.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Au(t,e,a,r),n.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(e=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),e!==n.state&&ks.enqueueReplaceState(n,n.state,null),Ps(t,r,n,i),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e){try{var r="",i=e;do r+=T_(i),i=i.return;while(i);var n=r}catch(a){n=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:n,digest:null}}function Pu(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Lu(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var J0=typeof WeakMap=="function"?WeakMap:Map;function xm(t,e,r){r=ri(-1,r),r.tag=3,r.payload={element:null};var i=e.value;return r.callback=function(){Ws||(Ws=!0,Xu=i),Lu(t,e)},r}function Sm(t,e,r){r=ri(-1,r),r.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var n=e.value;r.payload=function(){return i(n)},r.callback=function(){Lu(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Lu(t,e),typeof i!="function"&&(Di===null?Di=new Set([this]):Di.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function bm(t,e,r){var i=t.pingCache;if(i===null){i=t.pingCache=new J0;var n=new Set;i.set(e,n)}else n=i.get(e),n===void 0&&(n=new Set,i.set(e,n));n.has(r)||(n.add(r),t=fy.bind(null,t,e,r),e.then(t,t))}function Mm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Em(t,e,r,i,n){return t.mode&1?(t.flags|=65536,t.lanes=n,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=ri(-1,1),e.tag=2,Pi(r,e,1))),r.lanes|=1),t)}var ey=Zr.ReactCurrentOwner,$t=!1;function Gt(t,e,r,i){e.child=t===null?Wp(e,null,r,i):Qn(e,t.child,r,i)}function wm(t,e,r,i,n){r=r.render;var a=e.ref;return Jn(e,n),i=bu(t,e,r,i,a,n),r=Mu(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,ii(t,e,n)):(st&&r&&au(e),e.flags|=1,Gt(t,e,i,n),e.child)}function Tm(t,e,r,i,n){if(t===null){var a=r.type;return typeof a=="function"&&!$u(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,Rm(t,e,a,i,n)):(t=Zs(r.type,null,i,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&n)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:ao,r(o,i)&&t.ref===e.ref)return ii(t,e,n)}return e.flags|=1,t=Oi(a,i),t.ref=e.ref,t.return=e,e.child=t}function Rm(t,e,r,i,n){if(t!==null){var a=t.memoizedProps;if(ao(a,i)&&t.ref===e.ref)if($t=!1,e.pendingProps=i=a,(t.lanes&n)!==0)t.flags&131072&&($t=!0);else return e.lanes=t.lanes,ii(t,e,n)}return Du(t,e,r,i,n)}function Am(t,e,r){var i=e.pendingProps,n=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ia,dr),dr|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(ia,dr),dr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:r,tt(ia,dr),dr|=i}else a!==null?(i=a.baseLanes|r,e.memoizedState=null):i=r,tt(ia,dr),dr|=i;return Gt(t,e,n,r),e.child}function Cm(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Du(t,e,r,i,n){var a=Qt(r)?tn:It.current;return a=qn(e,a),Jn(e,n),r=bu(t,e,r,i,a,n),i=Mu(),t!==null&&!$t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n,ii(t,e,n)):(st&&i&&au(e),e.flags|=1,Gt(t,e,r,n),e.child)}function Pm(t,e,r,i,n){if(Qt(r)){var a=!0;Ss(e)}else a=!1;if(Jn(e,n),e.stateNode===null)zs(t,e),_m(e,r,i),Cu(e,r,i,n),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,c=r.contextType;typeof c=="object"&&c!==null?c=_r(c):(c=Qt(r)?tn:It.current,c=qn(e,c));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==c)&&ym(e,o,i,c),Ci=!1;var h=e.memoizedState;o.state=h,Ps(e,i,o,n),l=e.memoizedState,s!==i||h!==l||Zt.current||Ci?(typeof d=="function"&&(Au(e,r,d,i),l=e.memoizedState),(s=Ci||vm(e,r,s,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,jp(t,e),s=e.memoizedProps,c=e.type===e.elementType?s:Cr(e.type,s),o.props=c,f=e.pendingProps,h=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=_r(l):(l=Qt(r)?tn:It.current,l=qn(e,l));var p=r.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==f||h!==l)&&ym(e,o,i,l),Ci=!1,h=e.memoizedState,o.state=h,Ps(e,i,o,n);var _=e.memoizedState;s!==f||h!==_||Zt.current||Ci?(typeof p=="function"&&(Au(e,r,p,i),_=e.memoizedState),(c=Ci||vm(e,r,c,i,h,_,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Iu(t,e,r,i,a,n)}function Iu(t,e,r,i,n,a){Cm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return n&&Np(e,r,!1),ii(t,e,a);i=e.stateNode,ey.current=e;var s=o&&typeof r.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Qn(e,t.child,null,a),e.child=Qn(e,null,s,a)):Gt(t,e,s,a),e.memoizedState=i.state,n&&Np(e,r,!0),e.child}function Lm(t){var e=t.stateNode;e.pendingContext?Ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ip(t,e.context,!1),gu(t,e.containerInfo)}function Dm(t,e,r,i,n){return Zn(),cu(n),e.flags|=256,Gt(t,e,r,i),e.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Im(t,e,r){var i=e.pendingProps,n=ut.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(n&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(n|=1),tt(ut,n&1),t===null)return lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Qs(o,i,0,null),t=dn(t,i,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Nu(r),e.memoizedState=Uu,t):Ou(e,o));if(n=t.memoizedState,n!==null&&(s=n.dehydrated,s!==null))return ty(t,e,o,i,s,n,r);if(a){a=i.fallback,o=e.mode,n=t.child,s=n.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==n?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Oi(n,l),i.subtreeFlags=n.subtreeFlags&14680064),s!==null?a=Oi(s,a):(a=dn(a,o,r,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?Nu(r):{baseLanes:o.baseLanes|r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~r,e.memoizedState=Uu,i}return a=t.child,t=a.sibling,i=Oi(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=r),i.return=e,i.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=i,e.memoizedState=null,i}function Ou(t,e){return e=Qs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fs(t,e,r,i){return i!==null&&cu(i),Qn(e,t.child,null,r),t=Ou(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ty(t,e,r,i,n,a,o){if(r)return e.flags&256?(e.flags&=-257,i=Pu(Error(ie(422))),Fs(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,n=e.mode,i=Qs({mode:"visible",children:i.children},n,0,null),a=dn(a,n,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Qn(e,t.child,null,o),e.child.memoizedState=Nu(o),e.memoizedState=Uu,a);if(!(e.mode&1))return Fs(t,e,o,null);if(n.data==="$!"){if(i=n.nextSibling&&n.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(ie(419)),i=Pu(a,i,void 0),Fs(t,e,o,i)}if(s=(o&t.childLanes)!==0,$t||s){if(i=At,i!==null){switch(o&-o){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(i.suspendedLanes|o)?0:n,n!==0&&n!==a.retryLane&&(a.retryLane=n,ti(t,n),Dr(i,t,n,-1))}return Qu(),i=Pu(Error(ie(421))),Fs(t,e,o,i)}return n.data==="$?"?(e.flags|=128,e.child=t.child,e=py.bind(null,t),n._reactRetry=e,null):(t=a.treeContext,hr=wi(n.nextSibling),ur=e,st=!0,Ar=null,t!==null&&(gr[vr++]=Jr,gr[vr++]=ei,gr[vr++]=rn,Jr=t.id,ei=t.overflow,rn=e),e=Ou(e,i.children),e.flags|=4096,e)}function Um(t,e,r){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fu(t.return,e,r)}function ku(t,e,r,i,n){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:n}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=r,a.tailMode=n)}function Nm(t,e,r){var i=e.pendingProps,n=i.revealOrder,a=i.tail;if(Gt(t,e,i.children,r),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Um(t,r,e);else if(t.tag===19)Um(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(n){case"forwards":for(r=e.child,n=null;r!==null;)t=r.alternate,t!==null&&Ls(t)===null&&(n=r),r=r.sibling;r=n,r===null?(n=e.child,e.child=null):(n=r.sibling,r.sibling=null),ku(e,!1,n,r,a);break;case"backwards":for(r=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Ls(t)===null){e.child=n;break}t=n.sibling,n.sibling=r,r=n,n=t}ku(e,!0,r,null,a);break;case"together":ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ii(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),ln|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,r=Oi(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Oi(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function ry(t,e,r){switch(e.tag){case 3:Lm(e),Zn();break;case 5:Kp(e);break;case 1:Qt(e.type)&&Ss(e);break;case 4:gu(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,n=e.memoizedProps.value;tt(Rs,i._currentValue),i._currentValue=n;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ut,ut.current&1),e.flags|=128,null):r&e.child.childLanes?Im(t,e,r):(tt(ut,ut.current&1),t=ii(t,e,r),t!==null?t.sibling:null);tt(ut,ut.current&1);break;case 19:if(i=(r&e.childLanes)!==0,t.flags&128){if(i)return Nm(t,e,r);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),tt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,Am(t,e,r)}return ii(t,e,r)}var Om,Fu,km,Fm;Om=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Fu=function(){},km=function(t,e,r,i){var n=t.memoizedProps;if(n!==i){t=e.stateNode,on(Hr.current);var a=null;switch(r){case"input":n=fc(t,n),i=fc(t,i),a=[];break;case"select":n=ct({},n,{value:void 0}),i=ct({},i,{value:void 0}),a=[];break;case"textarea":n=gc(t,n),i=gc(t,i),a=[];break;default:typeof n.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=_s)}_c(r,i);var o;r=null;for(c in n)if(!i.hasOwnProperty(c)&&n.hasOwnProperty(c)&&n[c]!=null)if(c==="style"){var s=n[c];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Fa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(s=n==null?void 0:n[c],i.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(c,r)),r=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&it("scroll",t),a||s===l||(a=[])):(a=a||[]).push(c,l))}r&&(a=a||[]).push("style",r);var c=a;(e.updateQueue=c)&&(e.flags|=4)}},Fm=function(t,e,r,i){r!==i&&(e.flags|=4)};function So(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,i=0;if(e)for(var n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags&14680064,i|=n.flags&14680064,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)r|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=i,t.childLanes=r,e}function iy(t,e,r){var i=e.pendingProps;switch(ou(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(e),null;case 1:return Qt(e.type)&&xs(),Nt(e),null;case 3:return i=e.stateNode,ea(),nt(Zt),nt(It),yu(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ws(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ar!==null&&(Yu(Ar),Ar=null))),Fu(t,e),Nt(e),null;case 5:vu(e);var n=on(go.current);if(r=e.type,t!==null&&e.stateNode!=null)km(t,e,r,i,n),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Nt(e),null}if(t=on(Hr.current),ws(e)){i=e.stateNode,r=e.type;var a=e.memoizedProps;switch(i[Br]=e,i[uo]=a,t=(e.mode&1)!==0,r){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(n=0;n<so.length;n++)it(so[n],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":_f(i,a),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},it("invalid",i);break;case"textarea":Sf(i,a),it("invalid",i)}_c(r,a),n=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&vs(i.textContent,s,t),n=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&vs(i.textContent,s,t),n=["children",""+s]):Fa.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&it("scroll",i)}switch(r){case"input":Yo(i),xf(i,a,!0);break;case"textarea":Yo(i),Mf(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=_s)}i=n,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=n.nodeType===9?n:n.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ef(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(r,{is:i.is}):(t=o.createElement(r),r==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,r),t[Br]=e,t[uo]=i,Om(t,e,!1,!1),e.stateNode=t;e:{switch(o=yc(r,i),r){case"dialog":it("cancel",t),it("close",t),n=i;break;case"iframe":case"object":case"embed":it("load",t),n=i;break;case"video":case"audio":for(n=0;n<so.length;n++)it(so[n],t);n=i;break;case"source":it("error",t),n=i;break;case"img":case"image":case"link":it("error",t),it("load",t),n=i;break;case"details":it("toggle",t),n=i;break;case"input":_f(t,i),n=fc(t,i),it("invalid",t);break;case"option":n=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},n=ct({},i,{value:void 0}),it("invalid",t);break;case"textarea":Sf(t,i),n=gc(t,i),it("invalid",t);break;default:n=i}_c(r,n),s=n;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Rf(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wf(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Va(t,l):typeof l=="number"&&Va(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Fa.hasOwnProperty(a)?l!=null&&a==="onScroll"&&it("scroll",t):l!=null&&rc(t,a,l,o))}switch(r){case"input":Yo(t),xf(t,i,!1);break;case"textarea":Yo(t),Mf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+_i(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Nn(t,!!i.multiple,a,!1):i.defaultValue!=null&&Nn(t,!!i.multiple,i.defaultValue,!0);break;default:typeof n.onClick=="function"&&(t.onclick=_s)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Nt(e),null;case 6:if(t&&e.stateNode!=null)Fm(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(r=on(go.current),on(Hr.current),ws(e)){if(i=e.stateNode,r=e.memoizedProps,i[Br]=e,(a=i.nodeValue!==r)&&(t=ur,t!==null))switch(t.tag){case 3:vs(i.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vs(i.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[Br]=e,e.stateNode=i}return Nt(e),null;case 13:if(nt(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&hr!==null&&e.mode&1&&!(e.flags&128))Hp(),Zn(),e.flags|=98560,a=!1;else if(a=ws(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ie(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ie(317));a[Br]=e}else Zn(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Nt(e),a=!1}else Ar!==null&&(Yu(Ar),Ar=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?Mt===0&&(Mt=3):Qu())),e.updateQueue!==null&&(e.flags|=4),Nt(e),null);case 4:return ea(),Fu(t,e),t===null&&lo(e.stateNode.containerInfo),Nt(e),null;case 10:return du(e.type._context),Nt(e),null;case 17:return Qt(e.type)&&xs(),Nt(e),null;case 19:if(nt(ut),a=e.memoizedState,a===null)return Nt(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)So(a,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ls(t),o!==null){for(e.flags|=128,So(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=r,r=e.child;r!==null;)a=r,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return tt(ut,ut.current&1|2),e.child}t=t.sibling}a.tail!==null&&mt()>na&&(e.flags|=128,i=!0,So(a,!1),e.lanes=4194304)}else{if(!i)if(t=Ls(o),t!==null){if(e.flags|=128,i=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),So(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!st)return Nt(e),null}else 2*mt()-a.renderingStartTime>na&&r!==1073741824&&(e.flags|=128,i=!0,So(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(r=a.last,r!==null?r.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=mt(),e.sibling=null,r=ut.current,tt(ut,i?r&1|2:r&1),e):(Nt(e),null);case 22:case 23:return Zu(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?dr&1073741824&&(Nt(e),e.subtreeFlags&6&&(e.flags|=8192)):Nt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function ny(t,e){switch(ou(e),e.tag){case 1:return Qt(e.type)&&xs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),nt(Zt),nt(It),yu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vu(e),null;case 13:if(nt(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Zn()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return nt(ut),null;case 4:return ea(),null;case 10:return du(e.type._context),null;case 22:case 23:return Zu(),null;case 24:return null;default:return null}}var Bs=!1,Ot=!1,ay=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ra(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){dt(t,e,i)}else r.current=null}function zm(t,e,r){try{r()}catch(i){dt(t,e,i)}}var Bm=!1;function oy(t,e){if(Qc=os,t=vp(),Gc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var n=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==r||n!==0&&f.nodeType!==3||(s=o+n),f!==a||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===r&&++c===n&&(s=o),h===a&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for($c={focusedElem:t,selectionRange:r},os=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var S=_.memoizedProps,m=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?S:Cr(e.type,S),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(b){dt(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=Bm,Bm=!1,_}function bo(t,e,r){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var n=i=i.next;do{if((n.tag&t)===t){var a=n.destroy;n.destroy=void 0,a!==void 0&&zm(e,r,a)}n=n.next}while(n!==i)}}function Hs(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var i=r.create;r.destroy=i()}r=r.next}while(r!==e)}}function zu(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function Hm(t){var e=t.alternate;e!==null&&(t.alternate=null,Hm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Br],delete e[uo],delete e[ru],delete e[V0],delete e[G0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vm(t){return t.tag===5||t.tag===3||t.tag===4}function Gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=_s));else if(i!==4&&(t=t.child,t!==null))for(Bu(t,e,r),t=t.sibling;t!==null;)Bu(t,e,r),t=t.sibling}function Hu(t,e,r){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Hu(t,e,r),t=t.sibling;t!==null;)Hu(t,e,r),t=t.sibling}var Lt=null,Pr=!1;function Li(t,e,r){for(r=r.child;r!==null;)Wm(t,e,r),r=r.sibling}function Wm(t,e,r){if(zr&&typeof zr.onCommitFiberUnmount=="function")try{zr.onCommitFiberUnmount(es,r)}catch{}switch(r.tag){case 5:Ot||ra(r,e);case 6:var i=Lt,n=Pr;Lt=null,Li(t,e,r),Lt=i,Pr=n,Lt!==null&&(Pr?(t=Lt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):Lt.removeChild(r.stateNode));break;case 18:Lt!==null&&(Pr?(t=Lt,r=r.stateNode,t.nodeType===8?tu(t.parentNode,r):t.nodeType===1&&tu(t,r),Ja(t)):tu(Lt,r.stateNode));break;case 4:i=Lt,n=Pr,Lt=r.stateNode.containerInfo,Pr=!0,Li(t,e,r),Lt=i,Pr=n;break;case 0:case 11:case 14:case 15:if(!Ot&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){n=i=i.next;do{var a=n,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&zm(r,e,o),n=n.next}while(n!==i)}Li(t,e,r);break;case 1:if(!Ot&&(ra(r,e),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(s){dt(r,e,s)}Li(t,e,r);break;case 21:Li(t,e,r);break;case 22:r.mode&1?(Ot=(i=Ot)||r.memoizedState!==null,Li(t,e,r),Ot=i):Li(t,e,r);break;default:Li(t,e,r)}}function Xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new ay),e.forEach(function(i){var n=my.bind(null,t,i);r.has(i)||(r.add(i),i.then(n,n))})}}function Lr(t,e){var r=e.deletions;if(r!==null)for(var i=0;i<r.length;i++){var n=r[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Lt=s.stateNode,Pr=!1;break e;case 3:Lt=s.stateNode.containerInfo,Pr=!0;break e;case 4:Lt=s.stateNode.containerInfo,Pr=!0;break e}s=s.return}if(Lt===null)throw Error(ie(160));Wm(a,o,n),Lt=null,Pr=!1;var l=n.alternate;l!==null&&(l.return=null),n.return=null}catch(c){dt(n,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jm(e,t),e=e.sibling}function jm(t,e){var r=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lr(e,t),Gr(t),i&4){try{bo(3,t,t.return),Hs(3,t)}catch(S){dt(t,t.return,S)}try{bo(5,t,t.return)}catch(S){dt(t,t.return,S)}}break;case 1:Lr(e,t),Gr(t),i&512&&r!==null&&ra(r,r.return);break;case 5:if(Lr(e,t),Gr(t),i&512&&r!==null&&ra(r,r.return),t.flags&32){var n=t.stateNode;try{Va(n,"")}catch(S){dt(t,t.return,S)}}if(i&4&&(n=t.stateNode,n!=null)){var a=t.memoizedProps,o=r!==null?r.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&yf(n,a),yc(s,o);var c=yc(s,a);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Rf(n,f):d==="dangerouslySetInnerHTML"?wf(n,f):d==="children"?Va(n,f):rc(n,d,f,c)}switch(s){case"input":pc(n,a);break;case"textarea":bf(n,a);break;case"select":var h=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Nn(n,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?Nn(n,!!a.multiple,a.defaultValue,!0):Nn(n,!!a.multiple,a.multiple?[]:"",!1))}n[uo]=a}catch(S){dt(t,t.return,S)}}break;case 6:if(Lr(e,t),Gr(t),i&4){if(t.stateNode===null)throw Error(ie(162));n=t.stateNode,a=t.memoizedProps;try{n.nodeValue=a}catch(S){dt(t,t.return,S)}}break;case 3:if(Lr(e,t),Gr(t),i&4&&r!==null&&r.memoizedState.isDehydrated)try{Ja(e.containerInfo)}catch(S){dt(t,t.return,S)}break;case 4:Lr(e,t),Gr(t);break;case 13:Lr(e,t),Gr(t),n=t.child,n.flags&8192&&(a=n.memoizedState!==null,n.stateNode.isHidden=a,!a||n.alternate!==null&&n.alternate.memoizedState!==null||(Wu=mt())),i&4&&Xm(t);break;case 22:if(d=r!==null&&r.memoizedState!==null,t.mode&1?(Ot=(c=Ot)||d,Lr(e,t),Ot=c):Lr(e,t),Gr(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(pe=t,d=t.child;d!==null;){for(f=pe=d;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:bo(4,h,h.return);break;case 1:ra(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,r=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(S){dt(i,r,S)}}break;case 5:ra(h,h.return);break;case 22:if(h.memoizedState!==null){Km(f);continue}}p!==null?(p.return=h,pe=p):Km(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{n=f.stateNode,c?(a=n.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Tf("display",o))}catch(S){dt(t,t.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){dt(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Lr(e,t),Gr(t),i&4&&Xm(t);break;case 21:break;default:Lr(e,t),Gr(t)}}function Gr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(Vm(r)){var i=r;break e}r=r.return}throw Error(ie(160))}switch(i.tag){case 5:var n=i.stateNode;i.flags&32&&(Va(n,""),i.flags&=-33);var a=Gm(t);Hu(t,a,n);break;case 3:case 4:var o=i.stateNode.containerInfo,s=Gm(t);Bu(t,s,o);break;default:throw Error(ie(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sy(t,e,r){pe=t,qm(t)}function qm(t,e,r){for(var i=(t.mode&1)!==0;pe!==null;){var n=pe,a=n.child;if(n.tag===22&&i){var o=n.memoizedState!==null||Bs;if(!o){var s=n.alternate,l=s!==null&&s.memoizedState!==null||Ot;s=Bs;var c=Ot;if(Bs=o,(Ot=l)&&!c)for(pe=n;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?Zm(n):l!==null?(l.return=o,pe=l):Zm(n);for(;a!==null;)pe=a,qm(a),a=a.sibling;pe=n,Bs=s,Ot=c}Ym(t)}else n.subtreeFlags&8772&&a!==null?(a.return=n,pe=a):Ym(t)}}function Ym(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ot||Hs(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ot)if(r===null)i.componentDidMount();else{var n=e.elementType===e.type?r.memoizedProps:Cr(e.type,r.memoizedProps);i.componentDidUpdate(n,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Yp(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}Yp(e,o,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ja(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Ot||e.flags&512&&zu(e)}catch(h){dt(e,e.return,h)}}if(e===t){pe=null;break}if(r=e.sibling,r!==null){r.return=e.return,pe=r;break}pe=e.return}}function Km(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var r=e.sibling;if(r!==null){r.return=e.return,pe=r;break}pe=e.return}}function Zm(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Hs(4,e)}catch(l){dt(e,r,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var n=e.return;try{i.componentDidMount()}catch(l){dt(e,n,l)}}var a=e.return;try{zu(e)}catch(l){dt(e,a,l)}break;case 5:var o=e.return;try{zu(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){pe=null;break}var s=e.sibling;if(s!==null){s.return=e.return,pe=s;break}pe=e.return}}var ly=Math.ceil,Vs=Zr.ReactCurrentDispatcher,Vu=Zr.ReactCurrentOwner,xr=Zr.ReactCurrentBatchConfig,Xe=0,At=null,yt=null,Dt=0,dr=0,ia=Ti(0),Mt=0,Mo=null,ln=0,Gs=0,Gu=0,Eo=null,Jt=null,Wu=0,na=1/0,ni=null,Ws=!1,Xu=null,Di=null,Xs=!1,Ii=null,js=0,wo=0,ju=null,qs=-1,Ys=0;function Wt(){return Xe&6?mt():qs!==-1?qs:qs=mt()}function Ui(t){return t.mode&1?Xe&2&&Dt!==0?Dt&-Dt:X0.transition!==null?(Ys===0&&(Ys=Vf()),Ys):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:Qf(t.type)),t):1}function Dr(t,e,r,i){if(50<wo)throw wo=0,ju=null,Error(ie(185));Ya(t,r,i),(!(Xe&2)||t!==At)&&(t===At&&(!(Xe&2)&&(Gs|=r),Mt===4&&Ni(t,Dt)),er(t,i),r===1&&Xe===0&&!(e.mode&1)&&(na=mt()+500,bs&&Ai()))}function er(t,e){var r=t.callbackNode;X_(t,e);var i=is(t,t===At?Dt:0);if(i===0)r!==null&&zf(r),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(r!=null&&zf(r),e===1)t.tag===0?W0($m.bind(null,t)):Op($m.bind(null,t)),B0(function(){!(Xe&6)&&Ai()}),r=null;else{switch(Gf(i)){case 1:r=Tc;break;case 4:r=Bf;break;case 16:r=Jo;break;case 536870912:r=Hf;break;default:r=Jo}r=og(r,Qm.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Qm(t,e){if(qs=-1,Ys=0,Xe&6)throw Error(ie(327));var r=t.callbackNode;if(aa()&&t.callbackNode!==r)return null;var i=is(t,t===At?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ks(t,i);else{e=i;var n=Xe;Xe|=2;var a=eg();(At!==t||Dt!==e)&&(ni=null,na=mt()+500,un(t,e));do try{hy();break}catch(s){Jm(t,s)}while(!0);hu(),Vs.current=a,Xe=n,yt!==null?e=0:(At=null,Dt=0,e=Mt)}if(e!==0){if(e===2&&(n=Rc(t),n!==0&&(i=n,e=qu(t,n))),e===1)throw r=Mo,un(t,0),Ni(t,i),er(t,mt()),r;if(e===6)Ni(t,i);else{if(n=t.current.alternate,!(i&30)&&!cy(n)&&(e=Ks(t,i),e===2&&(a=Rc(t),a!==0&&(i=a,e=qu(t,a))),e===1))throw r=Mo,un(t,0),Ni(t,i),er(t,mt()),r;switch(t.finishedWork=n,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:hn(t,Jt,ni);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=Wu+500-mt(),10<e)){if(is(t,0)!==0)break;if(n=t.suspendedLanes,(n&i)!==i){Wt(),t.pingedLanes|=t.suspendedLanes&n;break}t.timeoutHandle=eu(hn.bind(null,t,Jt,ni),e);break}hn(t,Jt,ni);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,n=-1;0<i;){var o=31-Tr(i);a=1<<o,o=e[o],o>n&&(n=o),i&=~a}if(i=n,i=mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ly(i/1960))-i,10<i){t.timeoutHandle=eu(hn.bind(null,t,Jt,ni),i);break}hn(t,Jt,ni);break;case 5:hn(t,Jt,ni);break;default:throw Error(ie(329))}}}return er(t,mt()),t.callbackNode===r?Qm.bind(null,t):null}function qu(t,e){var r=Eo;return t.current.memoizedState.isDehydrated&&(un(t,e).flags|=256),t=Ks(t,e),t!==2&&(e=Jt,Jt=r,e!==null&&Yu(e)),t}function Yu(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function cy(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var n=r[i],a=n.getSnapshot;n=n.value;try{if(!Rr(a(),n))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Gu,e&=~Gs,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Tr(e),i=1<<r;t[r]=-1,e&=~i}}function $m(t){if(Xe&6)throw Error(ie(327));aa();var e=is(t,0);if(!(e&1))return er(t,mt()),null;var r=Ks(t,e);if(t.tag!==0&&r===2){var i=Rc(t);i!==0&&(e=i,r=qu(t,i))}if(r===1)throw r=Mo,un(t,0),Ni(t,e),er(t,mt()),r;if(r===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hn(t,Jt,ni),er(t,mt()),null}function Ku(t,e){var r=Xe;Xe|=1;try{return t(e)}finally{Xe=r,Xe===0&&(na=mt()+500,bs&&Ai())}}function cn(t){Ii!==null&&Ii.tag===0&&!(Xe&6)&&aa();var e=Xe;Xe|=1;var r=xr.transition,i=Ke;try{if(xr.transition=null,Ke=1,t)return t()}finally{Ke=i,xr.transition=r,Xe=e,!(Xe&6)&&Ai()}}function Zu(){dr=ia.current,nt(ia)}function un(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,z0(r)),yt!==null)for(r=yt.return;r!==null;){var i=r;switch(ou(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xs();break;case 3:ea(),nt(Zt),nt(It),yu();break;case 5:vu(i);break;case 4:ea();break;case 13:nt(ut);break;case 19:nt(ut);break;case 10:du(i.type._context);break;case 22:case 23:Zu()}r=r.return}if(At=t,yt=t=Oi(t.current,null),Dt=dr=e,Mt=0,Mo=null,Gu=Gs=ln=0,Jt=Eo=null,an!==null){for(e=0;e<an.length;e++)if(r=an[e],i=r.interleaved,i!==null){r.interleaved=null;var n=i.next,a=r.pending;if(a!==null){var o=a.next;a.next=n,i.next=o}r.pending=i}an=null}return t}function Jm(t,e){do{var r=yt;try{if(hu(),Ds.current=Os,Is){for(var i=ht.memoizedState;i!==null;){var n=i.queue;n!==null&&(n.pending=null),i=i.next}Is=!1}if(sn=0,Rt=bt=ht=null,vo=!1,_o=0,Vu.current=null,r===null||r.return===null){Mt=1,Mo=e,yt=null;break}e:{var a=t,o=r.return,s=r,l=e;if(e=Dt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Mm(o);if(p!==null){p.flags&=-257,Em(p,o,s,a,e),p.mode&1&&bm(a,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var S=new Set;S.add(l),e.updateQueue=S}else _.add(l);break e}else{if(!(e&1)){bm(a,c,e),Qu();break e}l=Error(ie(426))}}else if(st&&s.mode&1){var m=Mm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Em(m,o,s,a,e),cu(ta(l,s));break e}}a=l=ta(l,s),Mt!==4&&(Mt=2),Eo===null?Eo=[a]:Eo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var u=xm(a,l,e);qp(a,u);break e;case 1:s=l;var v=a.type,g=a.stateNode;if(!(a.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Di===null||!Di.has(g)))){a.flags|=65536,e&=-e,a.lanes|=e;var b=Sm(a,s,e);qp(a,b);break e}}a=a.return}while(a!==null)}rg(r)}catch(C){e=C,yt===r&&r!==null&&(yt=r=r.return);continue}break}while(!0)}function eg(){var t=Vs.current;return Vs.current=Os,t===null?Os:t}function Qu(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),At===null||!(ln&268435455)&&!(Gs&268435455)||Ni(At,Dt)}function Ks(t,e){var r=Xe;Xe|=2;var i=eg();(At!==t||Dt!==e)&&(ni=null,un(t,e));do try{uy();break}catch(n){Jm(t,n)}while(!0);if(hu(),Xe=r,Vs.current=i,yt!==null)throw Error(ie(261));return At=null,Dt=0,Mt}function uy(){for(;yt!==null;)tg(yt)}function hy(){for(;yt!==null&&!O_();)tg(yt)}function tg(t){var e=ag(t.alternate,t,dr);t.memoizedProps=t.pendingProps,e===null?rg(t):yt=e,Vu.current=null}function rg(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=ny(r,e),r!==null){r.flags&=32767,yt=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,yt=null;return}}else if(r=iy(r,e,dr),r!==null){yt=r;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);Mt===0&&(Mt=5)}function hn(t,e,r){var i=Ke,n=xr.transition;try{xr.transition=null,Ke=1,dy(t,e,r,i)}finally{xr.transition=n,Ke=i}return null}function dy(t,e,r,i){do aa();while(Ii!==null);if(Xe&6)throw Error(ie(327));r=t.finishedWork;var n=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(j_(t,a),t===At&&(yt=At=null,Dt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Xs||(Xs=!0,og(Jo,function(){return aa(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=xr.transition,xr.transition=null;var o=Ke;Ke=1;var s=Xe;Xe|=4,Vu.current=null,oy(t,r),jm(r,t),D0($c),os=!!Qc,$c=Qc=null,t.current=r,sy(r),k_(),Xe=s,Ke=o,xr.transition=a}else t.current=r;if(Xs&&(Xs=!1,Ii=t,js=n),a=t.pendingLanes,a===0&&(Di=null),B_(r.stateNode),er(t,mt()),e!==null)for(i=t.onRecoverableError,r=0;r<e.length;r++)n=e[r],i(n.value,{componentStack:n.stack,digest:n.digest});if(Ws)throw Ws=!1,t=Xu,Xu=null,t;return js&1&&t.tag!==0&&aa(),a=t.pendingLanes,a&1?t===ju?wo++:(wo=0,ju=t):wo=0,Ai(),null}function aa(){if(Ii!==null){var t=Gf(js),e=xr.transition,r=Ke;try{if(xr.transition=null,Ke=16>t?16:t,Ii===null)var i=!1;else{if(t=Ii,Ii=null,js=0,Xe&6)throw Error(ie(331));var n=Xe;for(Xe|=4,pe=t.current;pe!==null;){var a=pe,o=a.child;if(pe.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(pe=c;pe!==null;){var d=pe;switch(d.tag){case 0:case 11:case 15:bo(8,d,a)}var f=d.child;if(f!==null)f.return=d,pe=f;else for(;pe!==null;){d=pe;var h=d.sibling,p=d.return;if(Hm(d),d===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var _=a.alternate;if(_!==null){var S=_.child;if(S!==null){_.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}pe=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,pe=o;else e:for(;pe!==null;){if(a=pe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:bo(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,pe=u;break e}pe=a.return}}var v=t.current;for(pe=v;pe!==null;){o=pe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,pe=g;else e:for(o=v;pe!==null;){if(s=pe,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Hs(9,s)}}catch(C){dt(s,s.return,C)}if(s===o){pe=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,pe=b;break e}pe=s.return}}if(Xe=n,Ai(),zr&&typeof zr.onPostCommitFiberRoot=="function")try{zr.onPostCommitFiberRoot(es,t)}catch{}i=!0}return i}finally{Ke=r,xr.transition=e}}return!1}function ig(t,e,r){e=ta(r,e),e=xm(t,e,1),t=Pi(t,e,1),e=Wt(),t!==null&&(Ya(t,1,e),er(t,e))}function dt(t,e,r){if(t.tag===3)ig(t,t,r);else for(;e!==null;){if(e.tag===3){ig(e,t,r);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Di===null||!Di.has(i))){t=ta(r,t),t=Sm(e,t,1),e=Pi(e,t,1),t=Wt(),e!==null&&(Ya(e,1,t),er(e,t));break}}e=e.return}}function fy(t,e,r){var i=t.pingCache;i!==null&&i.delete(e),e=Wt(),t.pingedLanes|=t.suspendedLanes&r,At===t&&(Dt&r)===r&&(Mt===4||Mt===3&&(Dt&130023424)===Dt&&500>mt()-Wu?un(t,0):Gu|=r),er(t,e)}function ng(t,e){e===0&&(t.mode&1?(e=rs,rs<<=1,!(rs&130023424)&&(rs=4194304)):e=1);var r=Wt();t=ti(t,e),t!==null&&(Ya(t,e,r),er(t,r))}function py(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),ng(t,r)}function my(t,e){var r=0;switch(t.tag){case 13:var i=t.stateNode,n=t.memoizedState;n!==null&&(r=n.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),ng(t,r)}var ag;ag=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Zt.current)$t=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return $t=!1,ry(t,e,r);$t=!!(t.flags&131072)}else $t=!1,st&&e.flags&1048576&&kp(e,Es,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;zs(t,e),t=e.pendingProps;var n=qn(e,It.current);Jn(e,r),n=bu(null,e,i,t,n,r);var a=Mu();return e.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(a=!0,Ss(e)):a=!1,e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,mu(e),n.updater=ks,e.stateNode=n,n._reactInternals=e,Cu(e,i,t,r),e=Iu(null,e,i,!0,a,r)):(e.tag=0,st&&a&&au(e),Gt(null,e,n,r),e=e.child),e;case 16:i=e.elementType;e:{switch(zs(t,e),t=e.pendingProps,n=i._init,i=n(i._payload),e.type=i,n=e.tag=vy(i),t=Cr(i,t),n){case 0:e=Du(null,e,i,t,r);break e;case 1:e=Pm(null,e,i,t,r);break e;case 11:e=wm(null,e,i,t,r);break e;case 14:e=Tm(null,e,i,Cr(i.type,t),r);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Cr(i,n),Du(t,e,i,n,r);case 1:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Cr(i,n),Pm(t,e,i,n,r);case 3:e:{if(Lm(e),t===null)throw Error(ie(387));i=e.pendingProps,a=e.memoizedState,n=a.element,jp(t,e),Ps(e,i,null,r);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){n=ta(Error(ie(423)),e),e=Dm(t,e,i,r,n);break e}else if(i!==n){n=ta(Error(ie(424)),e),e=Dm(t,e,i,r,n);break e}else for(hr=wi(e.stateNode.containerInfo.firstChild),ur=e,st=!0,Ar=null,r=Wp(e,null,i,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Zn(),i===n){e=ii(t,e,r);break e}Gt(t,e,i,r)}e=e.child}return e;case 5:return Kp(e),t===null&&lu(e),i=e.type,n=e.pendingProps,a=t!==null?t.memoizedProps:null,o=n.children,Jc(i,n)?o=null:a!==null&&Jc(i,a)&&(e.flags|=32),Cm(t,e),Gt(t,e,o,r),e.child;case 6:return t===null&&lu(e),null;case 13:return Im(t,e,r);case 4:return gu(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Qn(e,null,i,r):Gt(t,e,i,r),e.child;case 11:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Cr(i,n),wm(t,e,i,n,r);case 7:return Gt(t,e,e.pendingProps,r),e.child;case 8:return Gt(t,e,e.pendingProps.children,r),e.child;case 12:return Gt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(i=e.type._context,n=e.pendingProps,a=e.memoizedProps,o=n.value,tt(Rs,i._currentValue),i._currentValue=o,a!==null)if(Rr(a.value,o)){if(a.children===n.children&&!Zt.current){e=ii(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=ri(-1,r&-r),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),fu(a.return,r,e),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(ie(341));o.lanes|=r,s=o.alternate,s!==null&&(s.lanes|=r),fu(o,r,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Gt(t,e,n.children,r),e=e.child}return e;case 9:return n=e.type,i=e.pendingProps.children,Jn(e,r),n=_r(n),i=i(n),e.flags|=1,Gt(t,e,i,r),e.child;case 14:return i=e.type,n=Cr(i,e.pendingProps),n=Cr(i.type,n),Tm(t,e,i,n,r);case 15:return Rm(t,e,e.type,e.pendingProps,r);case 17:return i=e.type,n=e.pendingProps,n=e.elementType===i?n:Cr(i,n),zs(t,e),e.tag=1,Qt(i)?(t=!0,Ss(e)):t=!1,Jn(e,r),_m(e,i,n),Cu(e,i,n,r),Iu(null,e,i,!0,t,r);case 19:return Nm(t,e,r);case 22:return Am(t,e,r)}throw Error(ie(156,e.tag))};function og(t,e){return Ff(t,e)}function gy(t,e,r,i){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sr(t,e,r,i){return new gy(t,e,r,i)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vy(t){if(typeof t=="function")return $u(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ac)return 11;if(t===lc)return 14}return 2}function Oi(t,e){var r=t.alternate;return r===null?(r=Sr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function Zs(t,e,r,i,n,a){var o=2;if(i=t,typeof t=="function")$u(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Un:return dn(r.children,n,a,e);case ic:o=8,n|=8;break;case nc:return t=Sr(12,r,e,n|2),t.elementType=nc,t.lanes=a,t;case oc:return t=Sr(13,r,e,n),t.elementType=oc,t.lanes=a,t;case sc:return t=Sr(19,r,e,n),t.elementType=sc,t.lanes=a,t;case pf:return Qs(r,n,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case df:o=10;break e;case ff:o=9;break e;case ac:o=11;break e;case lc:o=14;break e;case vi:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Sr(o,r,e,n),e.elementType=t,e.type=i,e.lanes=a,e}function dn(t,e,r,i){return t=Sr(7,t,i,e),t.lanes=r,t}function Qs(t,e,r,i){return t=Sr(22,t,i,e),t.elementType=pf,t.lanes=r,t.stateNode={isHidden:!1},t}function Ju(t,e,r){return t=Sr(6,t,null,e),t.lanes=r,t}function eh(t,e,r){return e=Sr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _y(t,e,r,i,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function th(t,e,r,i,n,a,o,s,l){return t=new _y(t,e,r,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Sr(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},mu(a),t}function yy(t,e,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:i==null?null:""+i,children:t,containerInfo:e,implementation:r}}function sg(t){if(!t)return Ri;t=t._reactInternals;e:{if(Ji(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var r=t.type;if(Qt(r))return Up(t,r,e)}return e}function lg(t,e,r,i,n,a,o,s,l){return t=th(r,i,!0,t,n,a,o,s,l),t.context=sg(null),r=t.current,i=Wt(),n=Ui(r),a=ri(i,n),a.callback=e??null,Pi(r,a,n),t.current.lanes=n,Ya(t,n,i),er(t,i),t}function $s(t,e,r,i){var n=e.current,a=Wt(),o=Ui(n);return r=sg(r),e.context===null?e.context=r:e.pendingContext=r,e=ri(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pi(n,e,o),t!==null&&(Dr(t,n,o,a),Cs(t,n,o)),o}function Js(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function rh(t,e){cg(t,e),(t=t.alternate)&&cg(t,e)}function xy(){return null}var ug=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}el.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));$s(t,e,null,null)},el.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cn(function(){$s(null,t,null,null)}),e[Qr]=null}};function el(t){this._internalRoot=t}el.prototype.unstable_scheduleHydration=function(t){if(t){var e=jf();t={blockedOn:null,target:t,priority:e};for(var r=0;r<bi.length&&e!==0&&e<bi[r].priority;r++);bi.splice(r,0,t),r===0&&Kf(t)}};function nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hg(){}function Sy(t,e,r,i,n){if(n){if(typeof i=="function"){var a=i;i=function(){var c=Js(o);a.call(c)}}var o=lg(e,i,t,0,null,!1,!1,"",hg);return t._reactRootContainer=o,t[Qr]=o.current,lo(t.nodeType===8?t.parentNode:t),cn(),o}for(;n=t.lastChild;)t.removeChild(n);if(typeof i=="function"){var s=i;i=function(){var c=Js(l);s.call(c)}}var l=th(t,0,!1,null,null,!1,!1,"",hg);return t._reactRootContainer=l,t[Qr]=l.current,lo(t.nodeType===8?t.parentNode:t),cn(function(){$s(e,l,r,i)}),l}function rl(t,e,r,i,n){var a=r._reactRootContainer;if(a){var o=a;if(typeof n=="function"){var s=n;n=function(){var l=Js(o);s.call(l)}}$s(e,o,t,n)}else o=Sy(r,e,t,n,i);return Js(o)}Wf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=qa(e.pendingLanes);r!==0&&(Cc(e,r|1),er(e,mt()),!(Xe&6)&&(na=mt()+500,Ai()))}break;case 13:cn(function(){var i=ti(t,1);if(i!==null){var n=Wt();Dr(i,t,1,n)}}),rh(t,1)}},Pc=function(t){if(t.tag===13){var e=ti(t,134217728);if(e!==null){var r=Wt();Dr(e,t,134217728,r)}rh(t,134217728)}},Xf=function(t){if(t.tag===13){var e=Ui(t),r=ti(t,e);if(r!==null){var i=Wt();Dr(r,t,e,i)}rh(t,e)}},jf=function(){return Ke},qf=function(t,e){var r=Ke;try{return Ke=t,e()}finally{Ke=r}},bc=function(t,e,r){switch(e){case"input":if(pc(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var i=r[e];if(i!==t&&i.form===t.form){var n=ys(i);if(!n)throw Error(ie(90));vf(i),pc(i,n)}}}break;case"textarea":bf(t,r);break;case"select":e=r.value,e!=null&&Nn(t,!!r.multiple,e,!1)}},Lf=Ku,Df=cn;var by={usingClientEntryPoint:!1,Events:[ho,Xn,ys,Cf,Pf,Ku]},To={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},My={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Of(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{es=il.inject(My),zr=il}catch{}}sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by,sr.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nh(e))throw Error(ie(200));return yy(t,e,null,r)},sr.createRoot=function(t,e){if(!nh(t))throw Error(ie(299));var r=!1,i="",n=ug;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(n=e.onRecoverableError)),e=th(t,1,!1,null,null,r,!1,i,n),t[Qr]=e.current,lo(t.nodeType===8?t.parentNode:t),new ih(e)},sr.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Of(e),t=t===null?null:t.stateNode,t},sr.flushSync=function(t){return cn(t)},sr.hydrate=function(t,e,r){if(!tl(e))throw Error(ie(200));return rl(null,t,e,!0,r)},sr.hydrateRoot=function(t,e,r){if(!nh(t))throw Error(ie(405));var i=r!=null&&r.hydratedSources||null,n=!1,a="",o=ug;if(r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=lg(e,null,t,1,r??null,n,!1,a,o),t[Qr]=e.current,lo(t),i)for(t=0;t<i.length;t++)r=i[t],n=r._getVersion,n=n(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,n]:e.mutableSourceEagerHydrationData.push(r,n);return new el(e)},sr.render=function(t,e,r){if(!tl(e))throw Error(ie(200));return rl(null,t,e,!1,r)},sr.unmountComponentAtNode=function(t){if(!tl(t))throw Error(ie(40));return t._reactRootContainer?(cn(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Qr]=null})}),!0):!1},sr.unstable_batchedUpdates=Ku,sr.unstable_renderSubtreeIntoContainer=function(t,e,r,i){if(!tl(r))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return rl(t,e,r,!1,i)},sr.version="18.3.1-next-f1338f8080-20240426";function dg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dg)}catch(t){console.error(t)}}dg(),of.exports=sr;var Ey=of.exports,fg,pg=Ey;fg=pg.createRoot,pg.hydrateRoot;class wy{constructor(e,r,i,n,a,o){this.horizontalLines=e,this.verticalLines=r,this.binaryImage=i,this.verticalLinesImage=n,this.horizontalLinesImage=a,this.combinedImage=o}destroy(){this.binaryImage.delete(),this.verticalLinesImage.delete(),this.horizontalLinesImage.delete(),this.combinedImage.delete()}}function Ty(t,e){const r=cv.matFromImageData(t),i=new cv.Mat;cv.cvtColor(r,i,cv.COLOR_RGBA2GRAY,0);const n=new cv.Mat;cv.adaptiveThreshold(i,n,255,cv.ADAPTIVE_THRESH_MEAN_C,cv.THRESH_BINARY_INV,15,2);const a=cv.getStructuringElement(cv.MORPH_RECT,new cv.Size(1,Math.floor(e/4))),o=cv.getStructuringElement(cv.MORPH_RECT,new cv.Size(Math.floor(e/4),1)),s=new cv.Mat;cv.erode(n,s,a),cv.dilate(s,s,a);const l=new cv.Mat;cv.erode(n,l,o),cv.dilate(l,l,o);const c=new cv.Mat;cv.addWeighted(s,.5,l,.5,0,c);const d=mg(s,"vertical"),f=mg(l,"horizontal"),h=n.clone(),p=s.clone(),_=l.clone(),S=c.clone();return r.delete(),i.delete(),n.delete(),a.delete(),o.delete(),s.delete(),l.delete(),c.delete(),new wy(f,d,h,p,_,S)}function mg(t,e){const r=new cv.Mat,i=1,n=100,a=t.rows/2;cv.HoughLinesP(t,r,i,Math.PI/180,n,a,20);const s=[];for(let l=0;l<r.rows;l++){const c=r.data32S[l*4],d=r.data32S[l*4+1],f=r.data32S[l*4+2],h=r.data32S[l*4+3];if(e==="vertical"&&Math.abs(c-f)<10){const p=(c+f)/2;s.push(p)}else if(e==="horizontal"&&Math.abs(d-h)<10){const p=(d+h)/2;s.push(p)}}return r.delete(),Array.from(new Set(s)).sort((l,c)=>l-c)}function Ry(t,e){const r=[],i=[],n=[],a=Math.min(e.width,e.height)*.5,o=(e.width-a)/2,s=(e.height-a)/2,l=a/3;for(let c=0;c<3;c++){const d=[],f=[],h=[];for(let p=0;p<3;p++){const _=o+p*l,S=s+c*l,m=t.getImageData(_,S,l,l),{colorName:u,meanHsv:v}=Ay(m);d.push(u),f.push(v);const g=document.createElement("canvas");g.width=l,g.height=l,g.getContext("2d").putImageData(m,0,0);const b=g.toDataURL();h.push(b)}r.push(d),i.push(f),n.push(h)}return{colors:r,hsvValues:i,subImages:n}}function Ay(t){const e=cv.matFromImageData(t),r=new cv.Mat;cv.cvtColor(e,r,cv.COLOR_RGB2HSV);const i=new cv.MatVector;cv.split(r,i);const n=[[180],[256],[256]],a=[[0,180],[0,256],[0,256]],o=[new cv.Mat,new cv.Mat,new cv.Mat],s=[new cv.Mat,new cv.Mat,new cv.Mat];cv.calcHist(i,[0],s[0],o[0],n[0],a[0],!1),cv.calcHist(i,[1],s[1],o[1],n[1],a[1],!1),cv.calcHist(i,[2],s[2],o[2],n[2],a[2],!1);let l=[0,0,0],c=[0,0,0];for(let h=0;h<3;h++)for(let p=0;p<n[h][0];p++)o[h].data32F[p]>l[h]&&(l[h]=o[h].data32F[p],c[h]=p);r.delete(),e.delete(),i.delete();for(const h of s)h.delete();for(const h of o)h.delete();let d;Cy(c[1],c[2])?d="white":d=Py(c[0]);const f={h:c[0],s:c[1],v:c[2]};return{colorName:d,meanHsv:f}}function Cy(t,e){return t<65&&e>150}function Py(t){return t>=115||t<3?"red":t>=3&&t<25?"orange":t>=25&&t<55?"yellow":t>=55&&t<95?"green":t>=95&&t<115?"blue":"unknown"}const Ly=["red","orange","yellow","green","blue","white"],gg=({onSelectColor:t,onClose:e})=>Ue.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",width:"50%",transform:"translate(-50%, -50%)",backgroundColor:"rgba(255, 255, 255, 0.9)",padding:"10px",borderRadius:"5px",zIndex:100},children:[Ue.jsx("p",{children:"Select a color:"}),Ue.jsx("div",{style:{display:"flex",justifyContent:"space-around"},children:Ly.map(r=>Ue.jsx("div",{onClick:()=>{t(r),e()},style:{backgroundColor:r,width:"40px",height:"40px",borderRadius:"50%",cursor:"pointer",border:"1px solid #000"}},r))}),Ue.jsx("button",{onClick:e,style:{marginTop:"10px"},children:"Cancel"})]}),Dy=({currentSide:t,detectionEnabled:e,overlayData:r,onOverlayDataCaptured:i,onOverlayDataUpdated:n})=>{const a=Re.useRef(document.createElement("video")),o=Re.useRef(null),s=Re.useRef(),[l,c]=Re.useState(!1),d=Re.useRef(0),f=1,[h,p]=Re.useState(!1),[_,S]=Re.useState([]),[m,u]=Re.useState(null),[v,g]=Re.useState(!1);Re.useEffect(()=>{const x=setInterval(()=>{window.cv&&window.cv.Mat&&(p(!0),clearInterval(x))},100);return()=>clearInterval(x)},[]),Re.useEffect(()=>{if(!h)return;const x=a.current,z=async()=>{try{const W={video:!0},q=await navigator.mediaDevices.getUserMedia(W);x.srcObject=q,await x.play(),B()}catch(W){console.error("Error accessing camera:",W)}},B=()=>{if(o.current&&a.current&&a.current.readyState===a.current.HAVE_ENOUGH_DATA){const W=o.current,q=W.getContext("2d");if(q){if(q.clearRect(0,0,W.width,W.height),q.save(),q.translate(W.width,0),q.scale(-1,1),q.drawImage(a.current,0,0,W.width,W.height),q.restore(),e){const P=C();if(P){const{horizontalLines:F,verticalLines:w}=P;Z(F,w,W)?(d.current+=1,d.current>=f&&!l&&(c(!0),y())):d.current=0,P.destroy()}}A(q,l?"green":"red"),T(q,r),L(q,t)}}s.current=requestAnimationFrame(B)};return z(),()=>{(x.srcObject?x.srcObject.getTracks():[]).forEach(W=>W.stop()),s.current&&cancelAnimationFrame(s.current)}},[h,e,l,t,r]),Re.useEffect(()=>{e&&(c(!1),d.current=0)},[e]),Re.useEffect(()=>{const x=o.current;if(!x)return;const z=B=>{if(!r||!_.length||!o.current)return;const W=o.current,q=W.getBoundingClientRect(),P=W.width/q.width,F=W.height/q.height;let w=(B.clientX-q.left)*P,O=(B.clientY-q.top)*F;w=W.width-w;for(const I of _)if(w>=I.x&&w<=I.x+I.size&&O>=I.y&&O<=I.y+I.size){u(I),g(!0);break}};return x.addEventListener("click",z),()=>{x.removeEventListener("click",z)}},[_,r]);const b=x=>{if(!m)return;const z={...r};z.colors=r.colors.map((B,W)=>B.map((q,P)=>W===m.row&&P===m.col?x:q)),n(z),g(!1),u(null)},C=()=>{const x=o.current,z=Math.min(x.width,x.height)*.5,B=(x.width-z)/2,W=(x.height-z)/2,q=document.createElement("canvas");q.width=x.width,q.height=x.height;const P=q.getContext("2d");if(P&&a.current){P.drawImage(a.current,0,0,x.width,x.height);const F=P.getImageData(B,W,z,z);return Ty(F,z)}return null},A=(x,z)=>{const B=o.current,W=3,q=Math.min(B.width,B.height)*.5,P=(B.width-q)/2,F=(B.height-q)/2,w=q/W;x.strokeStyle=z,x.lineWidth=2,x.save(),x.translate(B.width,0),x.scale(-1,1);for(let O=0;O<=W;O++){const I=P+O*w;x.beginPath(),x.moveTo(I,F),x.lineTo(I,F+q),x.stroke()}for(let O=0;O<=W;O++){const I=F+O*w;x.beginPath(),x.moveTo(P,I),x.lineTo(P+q,I),x.stroke()}x.restore()},T=(x,z)=>{const B=o.current,W=3,q=Math.min(B.width,B.height)*.5,P=(B.width-q)/2,F=(B.height-q)/2,w=q/W;x.globalAlpha=.5;const O=[];x.save(),x.translate(B.width,0),x.scale(-1,1);for(let I=0;I<W;I++)for(let Y=0;Y<W;Y++){const se=z.colors[I][Y];x.fillStyle=se;const le=P+Y*w,G=F+I*w;x.fillRect(le,G,w,w),O.push({row:I,col:Y,x:le,y:G,size:w})}x.restore(),x.globalAlpha=1,S(O)},L=(x,z)=>{x.save(),x.fillStyle="rgba(0, 0, 0, 0.5)",x.fillRect(10,10,120,40),x.fillStyle="white",x.font="20px Arial",x.fillText(`Side ${z+1}/6`,20,40),x.restore()},Z=(x,z,B)=>{const W=Math.min(B.width,B.height)*.5,q=[];for(let le=0;le<=3;le++){const G=le*(W/3);q.push(G)}const P=[];for(let le=0;le<=3;le++){const G=le*(W/3);P.push(G)}const F=W*.05,w=q.filter(le=>z.some(G=>Math.abs(G-le)<F)),O=P.filter(le=>x.some(G=>Math.abs(G-le)<F)),I=w.length/q.length,Y=O.length/P.length,se=.8;return I>=se&&Y>=se},y=()=>{const x=o.current,z=document.createElement("canvas");z.width=x.width,z.height=x.height;const B=z.getContext("2d");if(B&&a.current){B.drawImage(a.current,0,0,x.width,x.height);const W=Ry(B,z);i(W)}};return Ue.jsxs("div",{style:{position:"relative",width:"100%"},children:[h?Ue.jsx("canvas",{ref:o,width:640,height:480,style:{width:"100%",border:"1px solid black"}}):Ue.jsx("p",{children:"Loading OpenCV..."}),v&&Ue.jsx(gg,{onSelectColor:b,onClose:()=>{g(!1),u(null)}})]})};/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const ah="169",oa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},sa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Iy=0,vg=1,Uy=2,_g=1,Ny=2,ai=3,ki=0,tr=1,oi=2,Fi=0,la=1,yg=2,xg=3,Sg=4,Oy=5,fn=100,ky=101,Fy=102,zy=103,By=104,Hy=200,Vy=201,Gy=202,Wy=203,oh=204,sh=205,Xy=206,jy=207,qy=208,Yy=209,Ky=210,Zy=211,Qy=212,$y=213,Jy=214,lh=0,ch=1,uh=2,ca=3,hh=4,dh=5,fh=6,ph=7,bg=0,ex=1,tx=2,zi=0,rx=1,ix=2,nx=3,ax=4,ox=5,sx=6,lx=7,Mg=300,ua=301,ha=302,mh=303,gh=304,nl=306,vh=1e3,pn=1001,_h=1002,br=1003,cx=1004,al=1005,Ir=1006,yh=1007,mn=1008,si=1009,Eg=1010,wg=1011,Ro=1012,xh=1013,gn=1014,li=1015,Ao=1016,Sh=1017,bh=1018,da=1020,Tg=35902,Rg=1021,Ag=1022,Ur=1023,Cg=1024,Pg=1025,fa=1026,pa=1027,Lg=1028,Mh=1029,Dg=1030,Eh=1031,wh=1033,ol=33776,sl=33777,ll=33778,cl=33779,Th=35840,Rh=35841,Ah=35842,Ch=35843,Ph=36196,Lh=37492,Dh=37496,Ih=37808,Uh=37809,Nh=37810,Oh=37811,kh=37812,Fh=37813,zh=37814,Bh=37815,Hh=37816,Vh=37817,Gh=37818,Wh=37819,Xh=37820,jh=37821,ul=36492,qh=36494,Yh=36495,Ig=36283,Kh=36284,Zh=36285,Qh=36286,ux=3200,hx=3201,dx=0,fx=1,Bi="",Wr="srgb",Hi="srgb-linear",$h="display-p3",hl="display-p3-linear",dl="linear",at="srgb",fl="rec709",pl="p3",ma=7680,Ug=519,px=512,mx=513,gx=514,Ng=515,vx=516,_x=517,yx=518,xx=519,Og=35044,kg="300 es",ci=2e3,ml=2001;class vn{addEventListener(e,r){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(r)===-1&&i[e].push(r)}hasEventListener(e,r){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(r)!==-1}removeEventListener(e,r){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(r);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fg=1234567;const Co=Math.PI/180,Po=180/Math.PI;function ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[r&63|128]+kt[r>>8&255]+"-"+kt[r>>16&255]+kt[r>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Ft(t,e,r){return Math.max(e,Math.min(r,t))}function Jh(t,e){return(t%e+e)%e}function Sx(t,e,r,i,n){return i+(t-e)*(n-i)/(r-e)}function bx(t,e,r){return t!==e?(r-t)/(e-t):0}function Lo(t,e,r){return(1-r)*t+r*e}function Mx(t,e,r,i){return Lo(t,e,1-Math.exp(-r*i))}function Ex(t,e=1){return e-Math.abs(Jh(t,e*2)-e)}function wx(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e),t*t*(3-2*t))}function Tx(t,e,r){return t<=e?0:t>=r?1:(t=(t-e)/(r-e),t*t*t*(t*(t*6-15)+10))}function Rx(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Ax(t,e){return t+Math.random()*(e-t)}function Cx(t){return t*(.5-Math.random())}function Px(t){t!==void 0&&(Fg=t);let e=Fg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lx(t){return t*Co}function Dx(t){return t*Po}function Ix(t){return(t&t-1)===0&&t!==0}function Ux(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Nx(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ox(t,e,r,i,n){const a=Math.cos,o=Math.sin,s=a(r/2),l=o(r/2),c=a((e+i)/2),d=o((e+i)/2),f=a((e-i)/2),h=o((e-i)/2),p=a((i-e)/2),_=o((i-e)/2);switch(n){case"XYX":t.set(s*d,l*f,l*h,s*c);break;case"YZY":t.set(l*h,s*d,l*f,s*c);break;case"ZXZ":t.set(l*f,l*h,s*d,s*c);break;case"XZX":t.set(s*d,l*_,l*p,s*c);break;case"YXY":t.set(l*p,s*d,l*_,s*c);break;case"ZYZ":t.set(l*_,l*p,s*d,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function va(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const _a={DEG2RAD:Co,RAD2DEG:Po,generateUUID:ga,clamp:Ft,euclideanModulo:Jh,mapLinear:Sx,inverseLerp:bx,lerp:Lo,damp:Mx,pingpong:Ex,smoothstep:wx,smootherstep:Tx,randInt:Rx,randFloat:Ax,randFloatSpread:Cx,seededRandom:Px,degToRad:Lx,radToDeg:Dx,isPowerOfTwo:Ix,ceilPowerOfTwo:Ux,floorPowerOfTwo:Nx,setQuaternionFromProperEuler:Ox,normalize:Xt,denormalize:va};class Be{constructor(e=0,r=0){Be.prototype.isVector2=!0,this.x=e,this.y=r}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,r){return this.x=e,this.y=r,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const r=this.x,i=this.y,n=e.elements;return this.x=n[0]*r+n[3]*i+n[6],this.y=n[1]*r+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y;return r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this}rotateAround(e,r){const i=Math.cos(r),n=Math.sin(r),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*n+e.x,this.y=a*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,r,i,n,a,o,s,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c)}set(e,r,i,n,a,o,s,l,c){const d=this.elements;return d[0]=e,d[1]=n,d[2]=s,d[3]=r,d[4]=a,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],this}extractBasis(e,r,i){return e.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const r=e.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],_=i[8],S=n[0],m=n[3],u=n[6],v=n[1],g=n[4],b=n[7],C=n[2],A=n[5],T=n[8];return a[0]=o*S+s*v+l*C,a[3]=o*m+s*g+l*A,a[6]=o*u+s*b+l*T,a[1]=c*S+d*v+f*C,a[4]=c*m+d*g+f*A,a[7]=c*u+d*b+f*T,a[2]=h*S+p*v+_*C,a[5]=h*m+p*g+_*A,a[8]=h*u+p*b+_*T,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=e,r[4]*=e,r[7]*=e,r[2]*=e,r[5]*=e,r[8]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8];return r*o*d-r*s*c-i*a*d+i*s*l+n*a*c-n*o*l}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=d*o-s*c,h=s*l-d*a,p=c*a-o*l,_=r*f+i*h+n*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(n*c-d*i)*S,e[2]=(s*i-n*o)*S,e[3]=h*S,e[4]=(d*r-n*l)*S,e[5]=(n*a-s*r)*S,e[6]=p*S,e[7]=(i*l-c*r)*S,e[8]=(o*r-i*a)*S,this}transpose(){let e;const r=this.elements;return e=r[1],r[1]=r[3],r[3]=e,e=r[2],r[2]=r[6],r[6]=e,e=r[5],r[5]=r[7],r[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const r=this.elements;return e[0]=r[0],e[1]=r[3],e[2]=r[6],e[3]=r[1],e[4]=r[4],e[5]=r[7],e[6]=r[2],e[7]=r[5],e[8]=r[8],this}setUvTransform(e,r,i,n,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*o+c*s)+o+e,-n*c,n*l,-n*(-c*o+l*s)+s+r,0,0,1),this}scale(e,r){return this.premultiply(ed.makeScale(e,r)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,r){return this.premultiply(ed.makeTranslation(e,r)),this}makeTranslation(e,r){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,r,0,0,1),this}makeRotation(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,i,r,0,0,0,1),this}makeScale(e,r){return this.set(e,0,0,0,r,0,0,0,1),this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<9;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<9;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new ze;function zg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function gl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kx(){const t=gl("canvas");return t.style.display="block",t}const Bg={};function vl(t){t in Bg||(Bg[t]=!0,console.warn(t))}function Fx(t,e,r){return new Promise(function(i,n){function a(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:i()}}setTimeout(a,r)})}function zx(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bx(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hg=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vg=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[Hi]:{transfer:dl,primaries:fl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Wr]:{transfer:at,primaries:fl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[hl]:{transfer:dl,primaries:pl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Vg),fromReference:t=>t.applyMatrix3(Hg)},[$h]:{transfer:at,primaries:pl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Vg),fromReference:t=>t.applyMatrix3(Hg).convertLinearToSRGB()}},Hx=new Set([Hi,hl]),Ye={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Hx.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,r){if(this.enabled===!1||e===r||!e||!r)return t;const i=Do[e].toReference,n=Do[r].fromReference;return n(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Do[t].primaries},getTransfer:function(t){return t===Bi?dl:Do[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Do[e].luminanceCoefficients)}};function ya(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function td(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xa;class Vx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xa===void 0&&(xa=gl("canvas")),xa.width=e.width,xa.height=e.height;const i=xa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),r=xa}return r.width>2048||r.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),r.toDataURL("image/jpeg",.6)):r.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const r=gl("canvas");r.width=e.width,r.height=e.height;const i=r.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let o=0;o<a.length;o++)a[o]=ya(a[o]/255)*255;return i.putImageData(n,0,0),r}else if(e.data){const r=e.data.slice(0);for(let i=0;i<r.length;i++)r instanceof Uint8Array||r instanceof Uint8ClampedArray?r[i]=Math.floor(ya(r[i]/255)*255):r[i]=ya(r[i]);return{data:r,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gx=0;class Gg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let o=0,s=n.length;o<s;o++)n[o].isDataTexture?a.push(rd(n[o].image)):a.push(rd(n[o]))}else a=rd(n);i.url=a}return r||(e.images[this.uuid]=i),i}}function rd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Vx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wx=0;class ir extends vn{constructor(e=ir.DEFAULT_IMAGE,r=ir.DEFAULT_MAPPING,i=pn,n=pn,a=Ir,o=mn,s=Ur,l=si,c=ir.DEFAULT_ANISOTROPY,d=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=ga(),this.name="",this.source=new Gg(e),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const r=e===void 0||typeof e=="string";if(!r&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),r||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vh:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vh:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ir.DEFAULT_IMAGE=null,ir.DEFAULT_MAPPING=Mg,ir.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,r=0,i=0,n=1){gt.prototype.isVector4=!0,this.x=e,this.y=r,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,r,i,n){return this.x=e,this.y=r,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this.w=e.w+r.w,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this.w+=e.w*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this.w=e.w-r.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=this.w,o=e.elements;return this.x=o[0]*r+o[4]*i+o[8]*n+o[12]*a,this.y=o[1]*r+o[5]*i+o[9]*n+o[13]*a,this.z=o[2]*r+o[6]*i+o[10]*n+o[14]*a,this.w=o[3]*r+o[7]*i+o[11]*n+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const r=Math.sqrt(1-e.w*e.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/r,this.y=e.y/r,this.z=e.z/r),this}setAxisAngleFromRotationMatrix(e){let r,i,n,a;const o=e.elements,s=o[0],l=o[4],c=o[8],d=o[1],f=o[5],h=o[9],p=o[2],_=o[6],S=o[10];if(Math.abs(l-d)<.01&&Math.abs(c-p)<.01&&Math.abs(h-_)<.01){if(Math.abs(l+d)<.1&&Math.abs(c+p)<.1&&Math.abs(h+_)<.1&&Math.abs(s+f+S-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;const u=(s+1)/2,v=(f+1)/2,g=(S+1)/2,b=(l+d)/4,C=(c+p)/4,A=(h+_)/4;return u>v&&u>g?u<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(u),n=b/i,a=C/i):v>g?v<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(v),i=b/n,a=A/n):g<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(g),i=C/a,n=A/a),this.set(i,n,a,r),this}let m=Math.sqrt((_-h)*(_-h)+(c-p)*(c-p)+(d-l)*(d-l));return Math.abs(m)<.001&&(m=1),this.x=(_-h)/m,this.y=(c-p)/m,this.z=(d-l)/m,this.w=Math.acos((s+f+S-1)/2),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this.w=Math.max(e.w,Math.min(r.w,this.w)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this.w=Math.max(e,Math.min(r,this.w)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this.w+=(e.w-this.w)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this.w=e.w+(r.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this.w=e[r+3],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e[r+3]=this.w,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this.w=e.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xx extends vn{constructor(e=1,r=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=r,this.depth=1,this.scissor=new gt(0,0,e,r),this.scissorTest=!1,this.viewport=new gt(0,0,e,r);const n={width:e,height:r,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ir,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new ir(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let s=0;s<o;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,r,i=1){if(this.width!==e||this.height!==r||this.depth!==i){this.width=e,this.height=r,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=r,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,r),this.scissor.set(0,0,e,r)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const r=Object.assign({},e.texture.image);return this.texture.source=new Gg(r),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends Xx{constructor(e=1,r=1,i={}){super(e,r,i),this.isWebGLRenderTarget=!0}}class Wg extends ir{constructor(e=null,r=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=br,this.minFilter=br,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jx extends ir{constructor(e=null,r=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:r,height:i,depth:n},this.magFilter=br,this.minFilter=br,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(e=0,r=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=r,this._z=i,this._w=n}static slerpFlat(e,r,i,n,a,o,s){let l=i[n+0],c=i[n+1],d=i[n+2],f=i[n+3];const h=a[o+0],p=a[o+1],_=a[o+2],S=a[o+3];if(s===0){e[r+0]=l,e[r+1]=c,e[r+2]=d,e[r+3]=f;return}if(s===1){e[r+0]=h,e[r+1]=p,e[r+2]=_,e[r+3]=S;return}if(f!==S||l!==h||c!==p||d!==_){let m=1-s;const u=l*h+c*p+d*_+f*S,v=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const C=Math.sqrt(g),A=Math.atan2(C,u*v);m=Math.sin(m*A)/C,s=Math.sin(s*A)/C}const b=s*v;if(l=l*m+h*b,c=c*m+p*b,d=d*m+_*b,f=f*m+S*b,m===1-s){const C=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=C,c*=C,d*=C,f*=C}}e[r]=l,e[r+1]=c,e[r+2]=d,e[r+3]=f}static multiplyQuaternionsFlat(e,r,i,n,a,o){const s=i[n],l=i[n+1],c=i[n+2],d=i[n+3],f=a[o],h=a[o+1],p=a[o+2],_=a[o+3];return e[r]=s*_+d*f+l*p-c*h,e[r+1]=l*_+d*h+c*f-s*p,e[r+2]=c*_+d*p+s*h-l*f,e[r+3]=d*_-s*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,r,i,n){return this._x=e,this._y=r,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,r=!0){const i=e._x,n=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(i/2),d=s(n/2),f=s(a/2),h=l(i/2),p=l(n/2),_=l(a/2);switch(o){case"XYZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"YXZ":this._x=h*d*f+c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"ZXY":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f-h*p*_;break;case"ZYX":this._x=h*d*f-c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f+h*p*_;break;case"YZX":this._x=h*d*f+c*p*_,this._y=c*p*f+h*d*_,this._z=c*d*_-h*p*f,this._w=c*d*f-h*p*_;break;case"XZY":this._x=h*d*f-c*p*_,this._y=c*p*f-h*d*_,this._z=c*d*_+h*p*f,this._w=c*d*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return r===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,r){const i=r/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const r=e.elements,i=r[0],n=r[4],a=r[8],o=r[1],s=r[5],l=r[9],c=r[2],d=r[6],f=r[10],h=i+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(a-c)*p,this._z=(o-n)*p}else if(i>s&&i>f){const p=2*Math.sqrt(1+i-s-f);this._w=(d-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(a+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-i-f);this._w=(a-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-s);this._w=(o-n)/p,this._x=(a+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,r){let i=e.dot(r)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*r.z-e.z*r.y,this._y=e.z*r.x-e.x*r.z,this._z=e.x*r.y-e.y*r.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,r){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,r/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,r){const i=e._x,n=e._y,a=e._z,o=e._w,s=r._x,l=r._y,c=r._z,d=r._w;return this._x=i*d+o*s+n*c-a*l,this._y=n*d+o*l+a*s-i*c,this._z=a*d+o*c+i*l-n*s,this._w=o*d-i*s-n*l-a*c,this._onChangeCallback(),this}slerp(e,r){if(r===0)return this;if(r===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+n*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=n,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-r;return this._w=p*o+r*this._w,this._x=p*i+r*this._x,this._y=p*n+r*this._y,this._z=p*a+r*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,s),f=Math.sin((1-r)*d)/c,h=Math.sin(r*d)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=n*f+this._y*h,this._z=a*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,r,i){return this.copy(e).slerp(r,i)}random(){const e=2*Math.PI*Math.random(),r=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(r),a*Math.cos(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,r=0){return this._x=e[r],this._y=e[r+1],this._z=e[r+2],this._w=e[r+3],this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._w,e}fromBufferAttribute(e,r){return this._x=e.getX(r),this._y=e.getY(r),this._z=e.getZ(r),this._w=e.getW(r),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,r=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=r,this.z=i}set(e,r,i){return i===void 0&&(i=this.z),this.x=e,this.y=r,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,r){switch(e){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,r){return this.x=e.x+r.x,this.y=e.y+r.y,this.z=e.z+r.z,this}addScaledVector(e,r){return this.x+=e.x*r,this.y+=e.y*r,this.z+=e.z*r,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,r){return this.x=e.x-r.x,this.y=e.y-r.y,this.z=e.z-r.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,r){return this.x=e.x*r.x,this.y=e.y*r.y,this.z=e.z*r.z,this}applyEuler(e){return this.applyQuaternion(Xg.setFromEuler(e))}applyAxisAngle(e,r){return this.applyQuaternion(Xg.setFromAxisAngle(e,r))}applyMatrix3(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[3]*i+a[6]*n,this.y=a[1]*r+a[4]*i+a[7]*n,this.z=a[2]*r+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const r=this.x,i=this.y,n=this.z,a=e.elements,o=1/(a[3]*r+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*r+a[4]*i+a[8]*n+a[12])*o,this.y=(a[1]*r+a[5]*i+a[9]*n+a[13])*o,this.z=(a[2]*r+a[6]*i+a[10]*n+a[14])*o,this}applyQuaternion(e){const r=this.x,i=this.y,n=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*n-s*i),d=2*(s*r-a*n),f=2*(a*i-o*r);return this.x=r+l*c+o*f-s*d,this.y=i+l*d+s*c-a*f,this.z=n+l*f+a*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const r=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*r+a[4]*i+a[8]*n,this.y=a[1]*r+a[5]*i+a[9]*n,this.z=a[2]*r+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,r){return this.x=Math.max(e.x,Math.min(r.x,this.x)),this.y=Math.max(e.y,Math.min(r.y,this.y)),this.z=Math.max(e.z,Math.min(r.z,this.z)),this}clampScalar(e,r){return this.x=Math.max(e,Math.min(r,this.x)),this.y=Math.max(e,Math.min(r,this.y)),this.z=Math.max(e,Math.min(r,this.z)),this}clampLength(e,r){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(r,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,r){return this.x+=(e.x-this.x)*r,this.y+=(e.y-this.y)*r,this.z+=(e.z-this.z)*r,this}lerpVectors(e,r,i){return this.x=e.x+(r.x-e.x)*i,this.y=e.y+(r.y-e.y)*i,this.z=e.z+(r.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,r){const i=e.x,n=e.y,a=e.z,o=r.x,s=r.y,l=r.z;return this.x=n*l-a*s,this.y=a*o-i*l,this.z=i*s-n*o,this}projectOnVector(e){const r=e.lengthSq();if(r===0)return this.set(0,0,0);const i=e.dot(this)/r;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return id.copy(this).projectOnVector(e),this.sub(id)}reflect(e){return this.sub(id.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const r=Math.sqrt(this.lengthSq()*e.lengthSq());if(r===0)return Math.PI/2;const i=this.dot(e)/r;return Math.acos(Ft(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const r=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return r*r+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,r,i){const n=Math.sin(r)*e;return this.x=n*Math.sin(i),this.y=Math.cos(r)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,r,i){return this.x=e*Math.sin(r),this.y=i,this.z=e*Math.cos(r),this}setFromMatrixPosition(e){const r=e.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(e){const r=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=r,this.y=i,this.z=n,this}setFromMatrixColumn(e,r){return this.fromArray(e.elements,r*4)}setFromMatrix3Column(e,r){return this.fromArray(e.elements,r*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,r=0){return this.x=e[r],this.y=e[r+1],this.z=e[r+2],this}toArray(e=[],r=0){return e[r]=this.x,e[r+1]=this.y,e[r+2]=this.z,e}fromBufferAttribute(e,r){return this.x=e.getX(r),this.y=e.getY(r),this.z=e.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,r=Math.random()*2-1,i=Math.sqrt(1-r*r);return this.x=i*Math.cos(e),this.y=r,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const id=new H,Xg=new yn;class Io{constructor(e=new H(1/0,1/0,1/0),r=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=r}set(e,r){return this.min.copy(e),this.max.copy(r),this}setFromArray(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r+=3)this.expandByPoint(Nr.fromArray(e,r));return this}setFromBufferAttribute(e){this.makeEmpty();for(let r=0,i=e.count;r<i;r++)this.expandByPoint(Nr.fromBufferAttribute(e,r));return this}setFromPoints(e){this.makeEmpty();for(let r=0,i=e.length;r<i;r++)this.expandByPoint(e[r]);return this}setFromCenterAndSize(e,r){const i=Nr.copy(r).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,r=!1){return this.makeEmpty(),this.expandByObject(e,r)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,r=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(r===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Nr):Nr.fromBufferAttribute(a,o),Nr.applyMatrix4(e.matrixWorld),this.expandByPoint(Nr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_l.copy(i.boundingBox)),_l.applyMatrix4(e.matrixWorld),this.union(_l)}const n=e.children;for(let a=0,o=n.length;a<o;a++)this.expandByObject(n[a],r);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,r){return r.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nr),Nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let r,i;return e.normal.x>0?(r=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(r=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(r+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(r+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(r+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(r+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),r<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),yl.subVectors(this.max,Uo),Sa.subVectors(e.a,Uo),ba.subVectors(e.b,Uo),Ma.subVectors(e.c,Uo),Vi.subVectors(ba,Sa),Gi.subVectors(Ma,ba),xn.subVectors(Sa,Ma);let r=[0,-Vi.z,Vi.y,0,-Gi.z,Gi.y,0,-xn.z,xn.y,Vi.z,0,-Vi.x,Gi.z,0,-Gi.x,xn.z,0,-xn.x,-Vi.y,Vi.x,0,-Gi.y,Gi.x,0,-xn.y,xn.x,0];return!nd(r,Sa,ba,Ma,yl)||(r=[1,0,0,0,1,0,0,0,1],!nd(r,Sa,ba,Ma,yl))?!1:(xl.crossVectors(Vi,Gi),r=[xl.x,xl.y,xl.z],nd(r,Sa,ba,Ma,yl))}clampPoint(e,r){return r.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new H,new H,new H,new H,new H,new H,new H,new H],Nr=new H,_l=new Io,Sa=new H,ba=new H,Ma=new H,Vi=new H,Gi=new H,xn=new H,Uo=new H,yl=new H,xl=new H,Sn=new H;function nd(t,e,r,i,n){for(let a=0,o=t.length-3;a<=o;a+=3){Sn.fromArray(t,a);const s=n.x*Math.abs(Sn.x)+n.y*Math.abs(Sn.y)+n.z*Math.abs(Sn.z),l=e.dot(Sn),c=r.dot(Sn),d=i.dot(Sn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}const qx=new Io,No=new H,ad=new H;class od{constructor(e=new H,r=-1){this.isSphere=!0,this.center=e,this.radius=r}set(e,r){return this.center.copy(e),this.radius=r,this}setFromPoints(e,r){const i=this.center;r!==void 0?i.copy(r):qx.setFromPoints(e).getCenter(i);let n=0;for(let a=0,o=e.length;a<o;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const r=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=r*r}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,r){const i=this.center.distanceToSquared(e);return r.copy(e),i>this.radius*this.radius&&(r.sub(this.center).normalize(),r.multiplyScalar(this.radius).add(this.center)),r}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const r=No.lengthSq();if(r>this.radius*this.radius){const i=Math.sqrt(r),n=(i-this.radius)*.5;this.center.addScaledVector(No,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ad.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(ad)),this.expandByPoint(No.copy(e.center).sub(ad))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new H,sd=new H,Sl=new H,Wi=new H,ld=new H,bl=new H,cd=new H;class ud{constructor(e=new H,r=new H(0,0,-1)){this.origin=e,this.direction=r}set(e,r){return this.origin.copy(e),this.direction.copy(r),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,r){return r.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,r){r.subVectors(e,this.origin);const i=r.dot(this.direction);return i<0?r.copy(this.origin):r.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const r=hi.subVectors(e,this.origin).dot(this.direction);return r<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,r),hi.distanceToSquared(e))}distanceSqToSegment(e,r,i,n){sd.copy(e).add(r).multiplyScalar(.5),Sl.copy(r).sub(e).normalize(),Wi.copy(this.origin).sub(sd);const a=e.distanceTo(r)*.5,o=-this.direction.dot(Sl),s=Wi.dot(this.direction),l=-Wi.dot(Sl),c=Wi.lengthSq(),d=Math.abs(1-o*o);let f,h,p,_;if(d>0)if(f=o*l-s,h=o*s-l,_=a*d,f>=0)if(h>=-_)if(h<=_){const S=1/d;f*=S,h*=S,p=f*(f+o*h+2*s)+h*(o*f+h+2*l)+c}else h=a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*a+s)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(f=Math.max(0,-(o*a+s)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c);else h=o>0?-a:a,f=Math.max(0,-(o*h+s)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(sd).addScaledVector(Sl,h),p}intersectSphere(e,r){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),n=hi.dot(hi)-i*i,a=e.radius*e.radius;if(n>a)return null;const o=Math.sqrt(a-n),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,r):this.at(s,r)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const r=e.normal.dot(this.direction);if(r===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/r;return i>=0?i:null}intersectPlane(e,r){const i=this.distanceToPlane(e);return i===null?null:this.at(i,r)}intersectsPlane(e){const r=e.distanceToPoint(this.origin);return r===0||e.normal.dot(this.direction)*r<0}intersectBox(e,r){let i,n,a,o,s,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),d>=0?(a=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(a=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||a>n||((a>i||isNaN(i))&&(i=a),(o<n||isNaN(n))&&(n=o),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||s>n)||((s>i||i!==i)&&(i=s),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,r)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,r,i,n,a){ld.subVectors(r,e),bl.subVectors(i,e),cd.crossVectors(ld,bl);let o=this.direction.dot(cd),s;if(o>0){if(n)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Wi.subVectors(this.origin,e);const l=s*this.direction.dot(bl.crossVectors(Wi,bl));if(l<0)return null;const c=s*this.direction.dot(ld.cross(Wi));if(c<0||l+c>o)return null;const d=-s*Wi.dot(cd);return d<0?null:this.at(d/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,r,i,n,a,o,s,l,c,d,f,h,p,_,S,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,r,i,n,a,o,s,l,c,d,f,h,p,_,S,m)}set(e,r,i,n,a,o,s,l,c,d,f,h,p,_,S,m){const u=this.elements;return u[0]=e,u[4]=r,u[8]=i,u[12]=n,u[1]=a,u[5]=o,u[9]=s,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=_,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const r=this.elements,i=e.elements;return r[0]=i[0],r[1]=i[1],r[2]=i[2],r[3]=i[3],r[4]=i[4],r[5]=i[5],r[6]=i[6],r[7]=i[7],r[8]=i[8],r[9]=i[9],r[10]=i[10],r[11]=i[11],r[12]=i[12],r[13]=i[13],r[14]=i[14],r[15]=i[15],this}copyPosition(e){const r=this.elements,i=e.elements;return r[12]=i[12],r[13]=i[13],r[14]=i[14],this}setFromMatrix3(e){const r=e.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(e,r,i){return e.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,r,i){return this.set(e.x,r.x,i.x,0,e.y,r.y,i.y,0,e.z,r.z,i.z,0,0,0,0,1),this}extractRotation(e){const r=this.elements,i=e.elements,n=1/Ea.setFromMatrixColumn(e,0).length(),a=1/Ea.setFromMatrixColumn(e,1).length(),o=1/Ea.setFromMatrixColumn(e,2).length();return r[0]=i[0]*n,r[1]=i[1]*n,r[2]=i[2]*n,r[3]=0,r[4]=i[4]*a,r[5]=i[5]*a,r[6]=i[6]*a,r[7]=0,r[8]=i[8]*o,r[9]=i[9]*o,r[10]=i[10]*o,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(e){const r=this.elements,i=e.x,n=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=o*d,p=o*f,_=s*d,S=s*f;r[0]=l*d,r[4]=-l*f,r[8]=c,r[1]=p+_*c,r[5]=h-S*c,r[9]=-s*l,r[2]=S-h*c,r[6]=_+p*c,r[10]=o*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,_=c*d,S=c*f;r[0]=h+S*s,r[4]=_*s-p,r[8]=o*c,r[1]=o*f,r[5]=o*d,r[9]=-s,r[2]=p*s-_,r[6]=S+h*s,r[10]=o*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,_=c*d,S=c*f;r[0]=h-S*s,r[4]=-o*f,r[8]=_+p*s,r[1]=p+_*s,r[5]=o*d,r[9]=S-h*s,r[2]=-o*c,r[6]=s,r[10]=o*l}else if(e.order==="ZYX"){const h=o*d,p=o*f,_=s*d,S=s*f;r[0]=l*d,r[4]=_*c-p,r[8]=h*c+S,r[1]=l*f,r[5]=S*c+h,r[9]=p*c-_,r[2]=-c,r[6]=s*l,r[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=s*l,S=s*c;r[0]=l*d,r[4]=S-h*f,r[8]=_*f+p,r[1]=f,r[5]=o*d,r[9]=-s*d,r[2]=-c*d,r[6]=p*f+_,r[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=s*l,S=s*c;r[0]=l*d,r[4]=-f,r[8]=c*d,r[1]=h*f+S,r[5]=o*d,r[9]=p*f-_,r[2]=_*f-p,r[6]=s*d,r[10]=S*f+h}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yx,e,Kx)}lookAt(e,r,i){const n=this.elements;return fr.subVectors(e,r),fr.lengthSq()===0&&(fr.z=1),fr.normalize(),Xi.crossVectors(i,fr),Xi.lengthSq()===0&&(Math.abs(i.z)===1?fr.x+=1e-4:fr.z+=1e-4,fr.normalize(),Xi.crossVectors(i,fr)),Xi.normalize(),Ml.crossVectors(fr,Xi),n[0]=Xi.x,n[4]=Ml.x,n[8]=fr.x,n[1]=Xi.y,n[5]=Ml.y,n[9]=fr.y,n[2]=Xi.z,n[6]=Ml.z,n[10]=fr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,r){const i=e.elements,n=r.elements,a=this.elements,o=i[0],s=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],_=i[2],S=i[6],m=i[10],u=i[14],v=i[3],g=i[7],b=i[11],C=i[15],A=n[0],T=n[4],L=n[8],Z=n[12],y=n[1],x=n[5],z=n[9],B=n[13],W=n[2],q=n[6],P=n[10],F=n[14],w=n[3],O=n[7],I=n[11],Y=n[15];return a[0]=o*A+s*y+l*W+c*w,a[4]=o*T+s*x+l*q+c*O,a[8]=o*L+s*z+l*P+c*I,a[12]=o*Z+s*B+l*F+c*Y,a[1]=d*A+f*y+h*W+p*w,a[5]=d*T+f*x+h*q+p*O,a[9]=d*L+f*z+h*P+p*I,a[13]=d*Z+f*B+h*F+p*Y,a[2]=_*A+S*y+m*W+u*w,a[6]=_*T+S*x+m*q+u*O,a[10]=_*L+S*z+m*P+u*I,a[14]=_*Z+S*B+m*F+u*Y,a[3]=v*A+g*y+b*W+C*w,a[7]=v*T+g*x+b*q+C*O,a[11]=v*L+g*z+b*P+C*I,a[15]=v*Z+g*B+b*F+C*Y,this}multiplyScalar(e){const r=this.elements;return r[0]*=e,r[4]*=e,r[8]*=e,r[12]*=e,r[1]*=e,r[5]*=e,r[9]*=e,r[13]*=e,r[2]*=e,r[6]*=e,r[10]*=e,r[14]*=e,r[3]*=e,r[7]*=e,r[11]*=e,r[15]*=e,this}determinant(){const e=this.elements,r=e[0],i=e[4],n=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],_=e[3],S=e[7],m=e[11],u=e[15];return _*(+a*l*f-n*c*f-a*s*h+i*c*h+n*s*p-i*l*p)+S*(+r*l*p-r*c*h+a*o*h-n*o*p+n*c*d-a*l*d)+m*(+r*c*f-r*s*p-a*o*f+i*o*p+a*s*d-i*c*d)+u*(-n*s*d-r*l*f+r*s*h+n*o*f-i*o*h+i*l*d)}transpose(){const e=this.elements;let r;return r=e[1],e[1]=e[4],e[4]=r,r=e[2],e[2]=e[8],e[8]=r,r=e[6],e[6]=e[9],e[9]=r,r=e[3],e[3]=e[12],e[12]=r,r=e[7],e[7]=e[13],e[13]=r,r=e[11],e[11]=e[14],e[14]=r,this}setPosition(e,r,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=r,n[14]=i),this}invert(){const e=this.elements,r=e[0],i=e[1],n=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],_=e[12],S=e[13],m=e[14],u=e[15],v=f*m*c-S*h*c+S*l*p-s*m*p-f*l*u+s*h*u,g=_*h*c-d*m*c-_*l*p+o*m*p+d*l*u-o*h*u,b=d*S*c-_*f*c+_*s*p-o*S*p-d*s*u+o*f*u,C=_*f*l-d*S*l-_*s*h+o*S*h+d*s*m-o*f*m,A=r*v+i*g+n*b+a*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(S*h*a-f*m*a-S*n*p+i*m*p+f*n*u-i*h*u)*T,e[2]=(s*m*a-S*l*a+S*n*c-i*m*c-s*n*u+i*l*u)*T,e[3]=(f*l*a-s*h*a-f*n*c+i*h*c+s*n*p-i*l*p)*T,e[4]=g*T,e[5]=(d*m*a-_*h*a+_*n*p-r*m*p-d*n*u+r*h*u)*T,e[6]=(_*l*a-o*m*a-_*n*c+r*m*c+o*n*u-r*l*u)*T,e[7]=(o*h*a-d*l*a+d*n*c-r*h*c-o*n*p+r*l*p)*T,e[8]=b*T,e[9]=(_*f*a-d*S*a-_*i*p+r*S*p+d*i*u-r*f*u)*T,e[10]=(o*S*a-_*s*a+_*i*c-r*S*c-o*i*u+r*s*u)*T,e[11]=(d*s*a-o*f*a-d*i*c+r*f*c+o*i*p-r*s*p)*T,e[12]=C*T,e[13]=(d*S*n-_*f*n+_*i*h-r*S*h-d*i*m+r*f*m)*T,e[14]=(_*s*n-o*S*n-_*i*l+r*S*l+o*i*m-r*s*m)*T,e[15]=(o*f*n-d*s*n+d*i*l-r*f*l-o*i*h+r*s*h)*T,this}scale(e){const r=this.elements,i=e.x,n=e.y,a=e.z;return r[0]*=i,r[4]*=n,r[8]*=a,r[1]*=i,r[5]*=n,r[9]*=a,r[2]*=i,r[6]*=n,r[10]*=a,r[3]*=i,r[7]*=n,r[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,r=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(r,i,n))}makeTranslation(e,r,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,r,0,0,1,i,0,0,0,1),this}makeRotationX(e){const r=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,r,-i,0,0,i,r,0,0,0,0,1),this}makeRotationY(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,0,i,0,0,1,0,0,-i,0,r,0,0,0,0,1),this}makeRotationZ(e){const r=Math.cos(e),i=Math.sin(e);return this.set(r,-i,0,0,i,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,r){const i=Math.cos(r),n=Math.sin(r),a=1-i,o=e.x,s=e.y,l=e.z,c=a*o,d=a*s;return this.set(c*o+i,c*s-n*l,c*l+n*s,0,c*s+n*l,d*s+i,d*l-n*o,0,c*l-n*s,d*l+n*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,r,i){return this.set(e,0,0,0,0,r,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,r,i,n,a,o){return this.set(1,i,a,0,e,1,o,0,r,n,1,0,0,0,0,1),this}compose(e,r,i){const n=this.elements,a=r._x,o=r._y,s=r._z,l=r._w,c=a+a,d=o+o,f=s+s,h=a*c,p=a*d,_=a*f,S=o*d,m=o*f,u=s*f,v=l*c,g=l*d,b=l*f,C=i.x,A=i.y,T=i.z;return n[0]=(1-(S+u))*C,n[1]=(p+b)*C,n[2]=(_-g)*C,n[3]=0,n[4]=(p-b)*A,n[5]=(1-(h+u))*A,n[6]=(m+v)*A,n[7]=0,n[8]=(_+g)*T,n[9]=(m-v)*T,n[10]=(1-(h+S))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,r,i){const n=this.elements;let a=Ea.set(n[0],n[1],n[2]).length();const o=Ea.set(n[4],n[5],n[6]).length(),s=Ea.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Or.copy(this);const l=1/a,c=1/o,d=1/s;return Or.elements[0]*=l,Or.elements[1]*=l,Or.elements[2]*=l,Or.elements[4]*=c,Or.elements[5]*=c,Or.elements[6]*=c,Or.elements[8]*=d,Or.elements[9]*=d,Or.elements[10]*=d,r.setFromRotationMatrix(Or),i.x=a,i.y=o,i.z=s,this}makePerspective(e,r,i,n,a,o,s=ci){const l=this.elements,c=2*a/(r-e),d=2*a/(i-n),f=(r+e)/(r-e),h=(i+n)/(i-n);let p,_;if(s===ci)p=-(o+a)/(o-a),_=-2*o*a/(o-a);else if(s===ml)p=-o/(o-a),_=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,r,i,n,a,o,s=ci){const l=this.elements,c=1/(r-e),d=1/(i-n),f=1/(o-a),h=(r+e)*c,p=(i+n)*d;let _,S;if(s===ci)_=(o+a)*f,S=-2*f;else if(s===ml)_=a*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const r=this.elements,i=e.elements;for(let n=0;n<16;n++)if(r[n]!==i[n])return!1;return!0}fromArray(e,r=0){for(let i=0;i<16;i++)this.elements[i]=e[i+r];return this}toArray(e=[],r=0){const i=this.elements;return e[r]=i[0],e[r+1]=i[1],e[r+2]=i[2],e[r+3]=i[3],e[r+4]=i[4],e[r+5]=i[5],e[r+6]=i[6],e[r+7]=i[7],e[r+8]=i[8],e[r+9]=i[9],e[r+10]=i[10],e[r+11]=i[11],e[r+12]=i[12],e[r+13]=i[13],e[r+14]=i[14],e[r+15]=i[15],e}}const Ea=new H,Or=new vt,Yx=new H(0,0,0),Kx=new H(1,1,1),Xi=new H,Ml=new H,fr=new H,jg=new vt,qg=new yn;class mi{constructor(e=0,r=0,i=0,n=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=r,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,r,i,n=this._order){return this._x=e,this._y=r,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,r=this._order,i=!0){const n=e.elements,a=n[0],o=n[4],s=n[8],l=n[1],c=n[5],d=n[9],f=n[2],h=n[6],p=n[10];switch(r){case"XYZ":this._y=Math.asin(Ft(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,r,i){return jg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jg,r,i)}setFromVector3(e,r=this._order){return this.set(e.x,e.y,e.z,r)}reorder(e){return qg.setFromEuler(this),this.setFromQuaternion(qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],r=0){return e[r]=this._x,e[r+1]=this._y,e[r+2]=this._z,e[r+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zx=0;const Yg=new H,wa=new yn,di=new vt,El=new H,Oo=new H,Qx=new H,$x=new yn,Kg=new H(1,0,0),Zg=new H(0,1,0),Qg=new H(0,0,1),$g={type:"added"},Jx={type:"removed"},Ta={type:"childadded",child:null},dd={type:"childremoved",child:null};class nr extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nr.DEFAULT_UP.clone();const e=new H,r=new mi,i=new yn,n=new H(1,1,1);function a(){i.setFromEuler(r,!1)}function o(){r.setFromQuaternion(i,void 0,!1)}r._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new vt},normalMatrix:{value:new ze}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=nr.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,r){this.quaternion.setFromAxisAngle(e,r)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,r){return wa.setFromAxisAngle(e,r),this.quaternion.multiply(wa),this}rotateOnWorldAxis(e,r){return wa.setFromAxisAngle(e,r),this.quaternion.premultiply(wa),this}rotateX(e){return this.rotateOnAxis(Kg,e)}rotateY(e){return this.rotateOnAxis(Zg,e)}rotateZ(e){return this.rotateOnAxis(Qg,e)}translateOnAxis(e,r){return Yg.copy(e).applyQuaternion(this.quaternion),this.position.add(Yg.multiplyScalar(r)),this}translateX(e){return this.translateOnAxis(Kg,e)}translateY(e){return this.translateOnAxis(Zg,e)}translateZ(e){return this.translateOnAxis(Qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,r,i){e.isVector3?El.copy(e):El.set(e,r,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Oo,El,this.up):di.lookAt(El,Oo,this.up),this.quaternion.setFromRotationMatrix(di),n&&(di.extractRotation(n.matrixWorld),wa.setFromRotationMatrix(di),this.quaternion.premultiply(wa.invert()))}add(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($g),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const r=this.children.indexOf(e);return r!==-1&&(e.parent=null,this.children.splice(r,1),e.dispatchEvent(Jx),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($g),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,r){if(this[e]===r)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,r);if(a!==void 0)return a}}getObjectsByProperty(e,r,i=[]){this[e]===r&&i.push(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].getObjectsByProperty(e,r,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,$x,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const r=this.matrixWorld.elements;return e.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(e){e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].traverseVisible(e)}traverseAncestors(e){const r=this.parent;r!==null&&(e(r),r.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const r=this.children;for(let i=0,n=r.length;i<n;i++)r[i].updateMatrixWorld(e)}updateWorldMatrix(e,r){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const r=e===void 0||typeof e=="string",i={};r&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));n.material=s}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let s=0;s<this.children.length;s++)n.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];n.animations.push(a(e.animations,l))}}if(r){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=n,i;function o(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,r=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),r===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}nr.DEFAULT_UP=new H(0,1,0),nr.DEFAULT_MATRIX_AUTO_UPDATE=!0,nr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kr=new H,fi=new H,fd=new H,pi=new H,Ra=new H,Aa=new H,Jg=new H,pd=new H,md=new H,gd=new H,vd=new gt,_d=new gt,yd=new gt;class Fr{constructor(e=new H,r=new H,i=new H){this.a=e,this.b=r,this.c=i}static getNormal(e,r,i,n){n.subVectors(i,r),kr.subVectors(e,r),n.cross(kr);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,r,i,n,a){kr.subVectors(n,r),fi.subVectors(i,r),fd.subVectors(e,r);const o=kr.dot(kr),s=kr.dot(fi),l=kr.dot(fd),c=fi.dot(fi),d=fi.dot(fd),f=o*c-s*s;if(f===0)return a.set(0,0,0),null;const h=1/f,p=(c*l-s*d)*h,_=(o*d-s*l)*h;return a.set(1-p-_,_,p)}static containsPoint(e,r,i,n){return this.getBarycoord(e,r,i,n,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,r,i,n,a,o,s,l){return this.getBarycoord(e,r,i,n,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(s,pi.z),l)}static getInterpolatedAttribute(e,r,i,n,a,o){return vd.setScalar(0),_d.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,i),yd.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(vd,a.x),o.addScaledVector(_d,a.y),o.addScaledVector(yd,a.z),o}static isFrontFacing(e,r,i,n){return kr.subVectors(i,r),fi.subVectors(e,r),kr.cross(fi).dot(n)<0}set(e,r,i){return this.a.copy(e),this.b.copy(r),this.c.copy(i),this}setFromPointsAndIndices(e,r,i,n){return this.a.copy(e[r]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,r,i,n){return this.a.fromBufferAttribute(e,r),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kr.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kr.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,r){return Fr.getBarycoord(e,this.a,this.b,this.c,r)}getInterpolation(e,r,i,n,a){return Fr.getInterpolation(e,this.a,this.b,this.c,r,i,n,a)}containsPoint(e){return Fr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,r){const i=this.a,n=this.b,a=this.c;let o,s;Ra.subVectors(n,i),Aa.subVectors(a,i),pd.subVectors(e,i);const l=Ra.dot(pd),c=Aa.dot(pd);if(l<=0&&c<=0)return r.copy(i);md.subVectors(e,n);const d=Ra.dot(md),f=Aa.dot(md);if(d>=0&&f<=d)return r.copy(n);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),r.copy(i).addScaledVector(Ra,o);gd.subVectors(e,a);const p=Ra.dot(gd),_=Aa.dot(gd);if(_>=0&&p<=_)return r.copy(a);const S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return s=c/(c-_),r.copy(i).addScaledVector(Aa,s);const m=d*_-p*f;if(m<=0&&f-d>=0&&p-_>=0)return Jg.subVectors(a,n),s=(f-d)/(f-d+(p-_)),r.copy(n).addScaledVector(Jg,s);const u=1/(m+S+h);return o=S*u,s=h*u,r.copy(i).addScaledVector(Ra,o).addScaledVector(Aa,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},wl={h:0,s:0,l:0};function xd(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+(e-t)*6*r:r<1/2?e:r<2/3?t+(e-t)*6*(2/3-r):t}class Ze{constructor(e,r,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,r,i)}set(e,r,i){if(r===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,r,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,r=Wr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,r),this}setRGB(e,r,i,n=Ye.workingColorSpace){return this.r=e,this.g=r,this.b=i,Ye.toWorkingColorSpace(this,n),this}setHSL(e,r,i,n=Ye.workingColorSpace){if(e=Jh(e,1),r=Ft(r,0,1),i=Ft(i,0,1),r===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+r):i+r-i*r,o=2*i-a;this.r=xd(o,a,e+1/3),this.g=xd(o,a,e),this.b=xd(o,a,e-1/3)}return Ye.toWorkingColorSpace(this,n),this}setStyle(e,r=Wr){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=n[1],s=n[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,r);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,r);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,r);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,r);if(o===6)return this.setHex(parseInt(a,16),r);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,r);return this}setColorName(e,r=Wr){const i=ev[e.toLowerCase()];return i!==void 0?this.setHex(i,r):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}copyLinearToSRGB(e){return this.r=td(e.r),this.g=td(e.g),this.b=td(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wr){return Ye.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ft(zt.r*255,0,255))*65536+Math.round(Ft(zt.g*255,0,255))*256+Math.round(Ft(zt.b*255,0,255))}getHexString(e=Wr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,r=Ye.workingColorSpace){Ye.fromWorkingColorSpace(zt.copy(this),r);const i=zt.r,n=zt.g,a=zt.b,o=Math.max(i,n,a),s=Math.min(i,n,a);let l,c;const d=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=d<=.5?f/(o+s):f/(2-o-s),o){case i:l=(n-a)/f+(n<a?6:0);break;case n:l=(a-i)/f+2;break;case a:l=(i-n)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,r=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(zt.copy(this),r),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Wr){Ye.fromWorkingColorSpace(zt.copy(this),e);const r=zt.r,i=zt.g,n=zt.b;return e!==Wr?`color(${e} ${r.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(r*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,r,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+r,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,r){return this.r=e.r+r.r,this.g=e.g+r.g,this.b=e.b+r.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,r){return this.r+=(e.r-this.r)*r,this.g+=(e.g-this.g)*r,this.b+=(e.b-this.b)*r,this}lerpColors(e,r,i){return this.r=e.r+(r.r-e.r)*i,this.g=e.g+(r.g-e.g)*i,this.b=e.b+(r.b-e.b)*i,this}lerpHSL(e,r){this.getHSL(ji),e.getHSL(wl);const i=Lo(ji.h,wl.h,r),n=Lo(ji.s,wl.s,r),a=Lo(ji.l,wl.l,r);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const r=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*r+a[3]*i+a[6]*n,this.g=a[1]*r+a[4]*i+a[7]*n,this.b=a[2]*r+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,r=0){return this.r=e[r],this.g=e[r+1],this.b=e[r+2],this}toArray(e=[],r=0){return e[r]=this.r,e[r+1]=this.g,e[r+2]=this.b,e}fromBufferAttribute(e,r){return this.r=e.getX(r),this.g=e.getY(r),this.b=e.getZ(r),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new Ze;Ze.NAMES=ev;let eS=0;class Tl extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=la,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oh,this.blendDst=sh,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const r in e){const i=e[r];if(i===void 0){console.warn(`THREE.Material: parameter '${r}' has value of undefined.`);continue}const n=this[r];if(n===void 0){console.warn(`THREE.Material: '${r}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[r]=i}}toJSON(e){const r=e===void 0||typeof e=="string";r&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==la&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oh&&(i.blendSrc=this.blendSrc),this.blendDst!==sh&&(i.blendDst=this.blendDst),this.blendEquation!==fn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ma&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ma&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ma&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(r){const a=n(e.textures),o=n(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const r=e.clippingPlanes;let i=null;if(r!==null){const n=r.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=r[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Rl extends Tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new H,Al=new Be;class Xr{constructor(e,r,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=r,this.count=e!==void 0?e.length/r:0,this.normalized=i,this.usage=Og,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,r){this.updateRanges.push({start:e,count:r})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,r,i){e*=this.itemSize,i*=r.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=r.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let r=0,i=this.count;r<i;r++)Al.fromBufferAttribute(this,r),Al.applyMatrix3(e),this.setXY(r,Al.x,Al.y);else if(this.itemSize===3)for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.applyMatrix3(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.applyMatrix4(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.applyNormalMatrix(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let r=0,i=this.count;r<i;r++)xt.fromBufferAttribute(this,r),xt.transformDirection(e),this.setXYZ(r,xt.x,xt.y,xt.z);return this}set(e,r=0){return this.array.set(e,r),this}getComponent(e,r){let i=this.array[e*this.itemSize+r];return this.normalized&&(i=va(i,this.array)),i}setComponent(e,r,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+r]=i,this}getX(e){let r=this.array[e*this.itemSize];return this.normalized&&(r=va(r,this.array)),r}setX(e,r){return this.normalized&&(r=Xt(r,this.array)),this.array[e*this.itemSize]=r,this}getY(e){let r=this.array[e*this.itemSize+1];return this.normalized&&(r=va(r,this.array)),r}setY(e,r){return this.normalized&&(r=Xt(r,this.array)),this.array[e*this.itemSize+1]=r,this}getZ(e){let r=this.array[e*this.itemSize+2];return this.normalized&&(r=va(r,this.array)),r}setZ(e,r){return this.normalized&&(r=Xt(r,this.array)),this.array[e*this.itemSize+2]=r,this}getW(e){let r=this.array[e*this.itemSize+3];return this.normalized&&(r=va(r,this.array)),r}setW(e,r){return this.normalized&&(r=Xt(r,this.array)),this.array[e*this.itemSize+3]=r,this}setXY(e,r,i){return e*=this.itemSize,this.normalized&&(r=Xt(r,this.array),i=Xt(i,this.array)),this.array[e+0]=r,this.array[e+1]=i,this}setXYZ(e,r,i,n){return e*=this.itemSize,this.normalized&&(r=Xt(r,this.array),i=Xt(i,this.array),n=Xt(n,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,r,i,n,a){return e*=this.itemSize,this.normalized&&(r=Xt(r,this.array),i=Xt(i,this.array),n=Xt(n,this.array),a=Xt(a,this.array)),this.array[e+0]=r,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Og&&(e.usage=this.usage),e}}class tv extends Xr{constructor(e,r,i){super(new Uint16Array(e),r,i)}}class rv extends Xr{constructor(e,r,i){super(new Uint32Array(e),r,i)}}class bn extends Xr{constructor(e,r,i){super(new Float32Array(e),r,i)}}let tS=0;const Mr=new vt,Sd=new nr,Ca=new H,pr=new Io,ko=new Io,Ct=new H;class Cn extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tS++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zg(e)?rv:tv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,r){return this.attributes[e]=r,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,r,i=0){this.groups.push({start:e,count:r,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,r){this.drawRange.start=e,this.drawRange.count=r}applyMatrix4(e){const r=this.attributes.position;r!==void 0&&(r.applyMatrix4(e),r.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mr.makeRotationFromQuaternion(e),this.applyMatrix4(Mr),this}rotateX(e){return Mr.makeRotationX(e),this.applyMatrix4(Mr),this}rotateY(e){return Mr.makeRotationY(e),this.applyMatrix4(Mr),this}rotateZ(e){return Mr.makeRotationZ(e),this.applyMatrix4(Mr),this}translate(e,r,i){return Mr.makeTranslation(e,r,i),this.applyMatrix4(Mr),this}scale(e,r,i){return Mr.makeScale(e,r,i),this.applyMatrix4(Mr),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(e){const r=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];r.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new bn(r,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),r)for(let i=0,n=r.length;i<n;i++){const a=r[i];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,pr.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,pr.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(pr.min),this.boundingBox.expandByPoint(pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new od);const e=this.attributes.position,r=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(pr.setFromBufferAttribute(e),r)for(let a=0,o=r.length;a<o;a++){const s=r[a];ko.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(pr.min,ko.min),pr.expandByPoint(Ct),Ct.addVectors(pr.max,ko.max),pr.expandByPoint(Ct)):(pr.expandByPoint(ko.min),pr.expandByPoint(ko.max))}pr.getCenter(i);let n=0;for(let a=0,o=e.count;a<o;a++)Ct.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(Ct));if(r)for(let a=0,o=r.length;a<o;a++){const s=r[a],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)Ct.fromBufferAttribute(s,c),l&&(Ca.fromBufferAttribute(e,c),Ct.add(Ca)),n=Math.max(n,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,r=this.attributes;if(e===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=r.position,n=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),s=[],l=[];for(let L=0;L<i.count;L++)s[L]=new H,l[L]=new H;const c=new H,d=new H,f=new H,h=new Be,p=new Be,_=new Be,S=new H,m=new H;function u(L,Z,y){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,Z),f.fromBufferAttribute(i,y),h.fromBufferAttribute(a,L),p.fromBufferAttribute(a,Z),_.fromBufferAttribute(a,y),d.sub(c),f.sub(c),p.sub(h),_.sub(h);const x=1/(p.x*_.y-_.x*p.y);isFinite(x)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(x),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(x),s[L].add(S),s[Z].add(S),s[y].add(S),l[L].add(m),l[Z].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,Z=v.length;L<Z;++L){const y=v[L],x=y.start,z=y.count;for(let B=x,W=x+z;B<W;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const g=new H,b=new H,C=new H,A=new H;function T(L){C.fromBufferAttribute(n,L),A.copy(C);const Z=s[L];g.copy(Z),g.sub(C.multiplyScalar(C.dot(Z))).normalize(),b.crossVectors(A,Z);const y=b.dot(l[L])<0?-1:1;o.setXYZW(L,g.x,g.y,g.z,y)}for(let L=0,Z=v.length;L<Z;++L){const y=v[L],x=y.start,z=y.count;for(let B=x,W=x+z;B<W;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,r=this.getAttribute("position");if(r!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xr(new Float32Array(r.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const n=new H,a=new H,o=new H,s=new H,l=new H,c=new H,d=new H,f=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(r,_),a.fromBufferAttribute(r,S),o.fromBufferAttribute(r,m),d.subVectors(o,a),f.subVectors(n,a),d.cross(f),s.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),s.add(d),l.add(d),c.add(d),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=r.count;h<p;h+=3)n.fromBufferAttribute(r,h+0),a.fromBufferAttribute(r,h+1),o.fromBufferAttribute(r,h+2),d.subVectors(o,a),f.subVectors(n,a),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let r=0,i=e.count;r<i;r++)Ct.fromBufferAttribute(e,r),Ct.normalize(),e.setXYZ(r,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(s,l){const c=s.array,d=s.itemSize,f=s.normalized,h=new c.constructor(l.length*d);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){s.isInterleavedBufferAttribute?p=l[S]*s.data.stride+s.offset:p=l[S]*d;for(let u=0;u<d;u++)h[_++]=c[p++]}return new Xr(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const r=new Cn,i=this.index.array,n=this.attributes;for(const s in n){const l=n[s],c=e(l,i);r.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}r.morphAttributes[s]=l}r.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];r.addGroup(c.start,c.count,c.materialIndex)}return r}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const r=this.index;r!==null&&(e.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(n[l]=d,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const r={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(r));const n=e.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(r))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(r));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iv=new vt,Mn=new ud,Cl=new od,nv=new H,Pl=new H,Ll=new H,Dl=new H,bd=new H,Il=new H,av=new H,Ul=new H;class jr extends nr{constructor(e=new Cn,r=new Rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=r,this.updateMorphTargets()}copy(e,r){return super.copy(e,r),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const i=e[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const o=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=n}}}}getVertexPosition(e,r){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;r.fromBufferAttribute(n,e);const s=this.morphTargetInfluences;if(a&&s){Il.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=s[l],f=a[l];d!==0&&(bd.fromBufferAttribute(f,e),o?Il.addScaledVector(bd,d):Il.addScaledVector(bd.sub(r),d))}r.add(Il)}return r}raycast(e,r){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cl.copy(i.boundingSphere),Cl.applyMatrix4(a),Mn.copy(e.ray).recast(e.near),!(Cl.containsPoint(Mn.origin)===!1&&(Mn.intersectSphere(Cl,nv)===null||Mn.origin.distanceToSquared(nv)>(e.far-e.near)**2))&&(iv.copy(a).invert(),Mn.copy(e.ray).applyMatrix4(iv),!(i.boundingBox!==null&&Mn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,r,Mn)))}_computeIntersections(e,r,i){let n;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(s!==null)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,C=g;b<C;b+=3){const A=s.getX(b),T=s.getX(b+1),L=s.getX(b+2);n=Nl(this,u,e,i,c,d,f,A,T,L),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,r.push(n))}}else{const _=Math.max(0,p.start),S=Math.min(s.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){const v=s.getX(m),g=s.getX(m+1),b=s.getX(m+2);n=Nl(this,o,e,i,c,d,f,v,g,b),n&&(n.faceIndex=Math.floor(m/3),r.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,S=h.length;_<S;_++){const m=h[_],u=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,C=g;b<C;b+=3){const A=b,T=b+1,L=b+2;n=Nl(this,u,e,i,c,d,f,A,T,L),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,r.push(n))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){const v=m,g=m+1,b=m+2;n=Nl(this,o,e,i,c,d,f,v,g,b),n&&(n.faceIndex=Math.floor(m/3),r.push(n))}}}}function rS(t,e,r,i,n,a,o,s){let l;if(e.side===tr?l=i.intersectTriangle(o,a,n,!0,s):l=i.intersectTriangle(n,a,o,e.side===ki,s),l===null)return null;Ul.copy(s),Ul.applyMatrix4(t.matrixWorld);const c=r.ray.origin.distanceTo(Ul);return c<r.near||c>r.far?null:{distance:c,point:Ul.clone(),object:t}}function Nl(t,e,r,i,n,a,o,s,l,c){t.getVertexPosition(s,Pl),t.getVertexPosition(l,Ll),t.getVertexPosition(c,Dl);const d=rS(t,e,r,i,Pl,Ll,Dl,av);if(d){const f=new H;Fr.getBarycoord(av,Pl,Ll,Dl,f),n&&(d.uv=Fr.getInterpolatedAttribute(n,s,l,c,f,new Be)),a&&(d.uv1=Fr.getInterpolatedAttribute(a,s,l,c,f,new Be)),o&&(d.normal=Fr.getInterpolatedAttribute(o,s,l,c,f,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new H,materialIndex:0};Fr.getNormal(Pl,Ll,Dl,h.normal),d.face=h,d.barycoord=f}return d}class Oa extends Cn{constructor(e=1,r=1,i=1,n=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:r,depth:i,widthSegments:n,heightSegments:a,depthSegments:o};const s=this;n=Math.floor(n),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],d=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,r,e,o,a,0),_("z","y","x",1,-1,i,r,-e,o,a,1),_("x","z","y",1,1,e,i,r,n,o,2),_("x","z","y",1,-1,e,i,-r,n,o,3),_("x","y","z",1,-1,e,r,i,n,a,4),_("x","y","z",-1,-1,e,r,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(d,3)),this.setAttribute("uv",new bn(f,2));function _(S,m,u,v,g,b,C,A,T,L,Z){const y=b/T,x=C/L,z=b/2,B=C/2,W=A/2,q=T+1,P=L+1;let F=0,w=0;const O=new H;for(let I=0;I<P;I++){const Y=I*x-B;for(let se=0;se<q;se++){const le=se*y-z;O[S]=le*v,O[m]=Y*g,O[u]=W,c.push(O.x,O.y,O.z),O[S]=0,O[m]=0,O[u]=A>0?1:-1,d.push(O.x,O.y,O.z),f.push(se/T),f.push(1-I/L),F+=1}}for(let I=0;I<L;I++)for(let Y=0;Y<T;Y++){const se=h+Y+q*I,le=h+Y+q*(I+1),G=h+(Y+1)+q*(I+1),$=h+(Y+1)+q*I;l.push(se,le,$),l.push(le,G,$),w+=6}s.addGroup(p,w,Z),p+=w,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Pa(t){const e={};for(const r in t){e[r]={};for(const i in t[r]){const n=t[r][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[r][i]=null):e[r][i]=n.clone():Array.isArray(n)?e[r][i]=n.slice():e[r][i]=n}}return e}function jt(t){const e={};for(let r=0;r<t.length;r++){const i=Pa(t[r]);for(const n in i)e[n]=i[n]}return e}function iS(t){const e=[];for(let r=0;r<t.length;r++)e.push(t[r].clone());return e}function ov(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const nS={clone:Pa,merge:jt};var aS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aS,this.fragmentShader=oS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=iS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const r=super.toJSON(e);r.glslVersion=this.glslVersion,r.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?r.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?r.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?r.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?r.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?r.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?r.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?r.uniforms[n]={type:"m4",value:a.toArray()}:r.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(r.defines=this.defines),r.vertexShader=this.vertexShader,r.fragmentShader=this.fragmentShader,r.lights=this.lights,r.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(r.extensions=i),r}}class sv extends nr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ci}copy(e,r){return super.copy(e,r),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,r){super.updateWorldMatrix(e,r),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new H,lv=new Be,uv=new Be;class Er extends sv{constructor(e=50,r=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=r,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const r=.5*this.getFilmHeight()/e;this.fov=Po*2*Math.atan(r),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,r,i){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yi.x,Yi.y).multiplyScalar(-e/Yi.z)}getViewSize(e,r){return this.getViewBounds(e,lv,uv),r.subVectors(uv,lv)}setViewOffset(e,r,i,n,a,o){this.aspect=e/r,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let r=e*Math.tan(Co*.5*this.fov)/this.zoom,i=2*r,n=this.aspect*i,a=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*n/l,r-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,r,r-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.fov=this.fov,r.object.zoom=this.zoom,r.object.near=this.near,r.object.far=this.far,r.object.focus=this.focus,r.object.aspect=this.aspect,this.view!==null&&(r.object.view=Object.assign({},this.view)),r.object.filmGauge=this.filmGauge,r.object.filmOffset=this.filmOffset,r}}const La=-90,Da=1;class sS extends nr{constructor(e,r,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Er(La,Da,e,r);n.layers=this.layers,this.add(n);const a=new Er(La,Da,e,r);a.layers=this.layers,this.add(a);const o=new Er(La,Da,e,r);o.layers=this.layers,this.add(o);const s=new Er(La,Da,e,r);s.layers=this.layers,this.add(s);const l=new Er(La,Da,e,r);l.layers=this.layers,this.add(l);const c=new Er(La,Da,e,r);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,r=this.children.concat(),[i,n,a,o,s,l]=r;for(const c of r)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ml)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of r)this.add(c),c.updateMatrixWorld()}update(e,r){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(r,a),e.setRenderTarget(i,1,n),e.render(r,o),e.setRenderTarget(i,2,n),e.render(r,s),e.setRenderTarget(i,3,n),e.render(r,l),e.setRenderTarget(i,4,n),e.render(r,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,n),e.render(r,d),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class hv extends ir{constructor(e,r,i,n,a,o,s,l,c,d){e=e!==void 0?e:[],r=r!==void 0?r:ua,super(e,r,i,n,a,o,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lS extends _n{constructor(e=1,r={}){super(e,e,r),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new hv(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Ir}fromEquirectangularTexture(e,r){this.texture.type=r.type,this.texture.colorSpace=r.colorSpace,this.texture.generateMipmaps=r.generateMipmaps,this.texture.minFilter=r.minFilter,this.texture.magFilter=r.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Oa(5,5,5),a=new qi({name:"CubemapFromEquirect",uniforms:Pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tr,blending:Fi});a.uniforms.tEquirect.value=r;const o=new jr(n,a),s=r.minFilter;return r.minFilter===mn&&(r.minFilter=Ir),new sS(1,10,this).update(e,o),r.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,r,i,n){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(r,i,n);e.setRenderTarget(a)}}const Md=new H,cS=new H,uS=new ze;class Ki{constructor(e=new H(1,0,0),r=0){this.isPlane=!0,this.normal=e,this.constant=r}set(e,r){return this.normal.copy(e),this.constant=r,this}setComponents(e,r,i,n){return this.normal.set(e,r,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,r){return this.normal.copy(e),this.constant=-r.dot(this.normal),this}setFromCoplanarPoints(e,r,i){const n=Md.subVectors(i,r).cross(cS.subVectors(e,r)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,r){return r.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,r){const i=e.delta(Md),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?r.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:r.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const r=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return r<0&&i>0||i<0&&r>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,r){const i=r||uS.getNormalMatrix(e),n=this.coplanarPoint(Md).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const En=new od,Ol=new H;class dv{constructor(e=new Ki,r=new Ki,i=new Ki,n=new Ki,a=new Ki,o=new Ki){this.planes=[e,r,i,n,a,o]}set(e,r,i,n,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(r),s[2].copy(i),s[3].copy(n),s[4].copy(a),s[5].copy(o),this}copy(e){const r=this.planes;for(let i=0;i<6;i++)r[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,r=ci){const i=this.planes,n=e.elements,a=n[0],o=n[1],s=n[2],l=n[3],c=n[4],d=n[5],f=n[6],h=n[7],p=n[8],_=n[9],S=n[10],m=n[11],u=n[12],v=n[13],g=n[14],b=n[15];if(i[0].setComponents(l-a,h-c,m-p,b-u).normalize(),i[1].setComponents(l+a,h+c,m+p,b+u).normalize(),i[2].setComponents(l+o,h+d,m+_,b+v).normalize(),i[3].setComponents(l-o,h-d,m-_,b-v).normalize(),i[4].setComponents(l-s,h-f,m-S,b-g).normalize(),r===ci)i[5].setComponents(l+s,h+f,m+S,b+g).normalize();else if(r===ml)i[5].setComponents(s,f,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+r);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const r=e.geometry;r.boundingSphere===null&&r.computeBoundingSphere(),En.copy(r.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(e){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(e.matrixWorld),this.intersectsSphere(En)}intersectsSphere(e){const r=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(r[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const r=this.planes;for(let i=0;i<6;i++){const n=r[i];if(Ol.x=n.normal.x>0?e.max.x:e.min.x,Ol.y=n.normal.y>0?e.max.y:e.min.y,Ol.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const r=this.planes;for(let i=0;i<6;i++)if(r[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fv(){let t=null,e=!1,r=null,i=null;function n(a,o){r(a,o),i=t.requestAnimationFrame(n)}return{start:function(){e!==!0&&r!==null&&(i=t.requestAnimationFrame(n),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){r=a},setContext:function(a){t=a}}}function hS(t){const e=new WeakMap;function r(s,l){const c=s.array,d=s.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),s.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:f}}function i(s,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,s),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],S=f[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const S=f[p];t.bufferSubData(c,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,r(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,s,l),c.version=s.version}}return{get:n,remove:a,update:o}}class Gl extends Cn{constructor(e=1,r=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:r,widthSegments:i,heightSegments:n};const a=e/2,o=r/2,s=Math.floor(i),l=Math.floor(n),c=s+1,d=l+1,f=e/s,h=r/l,p=[],_=[],S=[],m=[];for(let u=0;u<d;u++){const v=u*h-o;for(let g=0;g<c;g++){const b=g*f-a;_.push(b,-v,0),S.push(0,0,1),m.push(g/s),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<s;v++){const g=v+c*u,b=v+c*(u+1),C=v+1+c*(u+1),A=v+1+c*u;p.push(g,b,A),p.push(b,C,A)}this.setIndex(p),this.setAttribute("position",new bn(_,3)),this.setAttribute("normal",new bn(S,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}var dS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fS=`#ifdef USE_ALPHAHASH
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
#endif`,pS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_S=`#ifdef USE_AOMAP
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
#endif`,xS=`#ifdef USE_BATCHING
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
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ES=`float G_BlinnPhong_Implicit( ) {
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
#endif`,TS=`#ifdef USE_BUMPMAP
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
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,NS=`#define PI 3.141592653589793
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
} // validated`,OS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kS=`vec3 transformedNormal = objectNormal;
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
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VS="gl_FragColor = linearToOutputTexel( gl_FragColor );",GS=`
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
}`,WS=`#ifdef USE_ENVMAP
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
	
#endif`,jS=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
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
#endif`,KS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JS=`#ifdef USE_GRADIENTMAP
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
}`,e1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i1=`uniform bool receiveShadow;
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
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,a1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c1=`PhysicalMaterial material;
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
#endif`,u1=`struct PhysicalMaterial {
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
}`,h1=`
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
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
#endif`,f1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S1=`#if defined( USE_POINTS_UV )
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
#endif`,b1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E1=`#ifdef USE_INSTANCING_MORPH
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
#endif`,T1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R1=`#ifdef USE_MORPHTARGETS
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
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L1=`#ifndef FLAT_SHADED
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
#endif`,I1=`#ifndef FLAT_SHADED
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
#endif`,N1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,k1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
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
#endif`,j1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z1=`float getShadowMask() {
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
#endif`,$1=`#ifdef USE_SKINNING
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
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
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
#endif`,tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ab=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform samplerCube tCube;
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
}`,_b=`#if DEPTH_PACKING == 3200
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
}`,xb=`#define DISTANCE
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Tb=`uniform vec3 diffuse;
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
}`,Rb=`#define LAMBERT
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
}`,Cb=`#define MATCAP
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
}`,Pb=`#define MATCAP
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
}`,Lb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Nb=`#define STANDARD
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
}`,Ob=`#define STANDARD
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
}`,kb=`#define TOON
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
}`,Fb=`#define TOON
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
}`,zb=`uniform float size;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Vb=`uniform vec3 color;
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
}`,Gb=`uniform float rotation;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,Fe={alphahash_fragment:dS,alphahash_pars_fragment:fS,alphamap_fragment:pS,alphamap_pars_fragment:mS,alphatest_fragment:gS,alphatest_pars_fragment:vS,aomap_fragment:_S,aomap_pars_fragment:yS,batching_pars_vertex:xS,batching_vertex:SS,begin_vertex:bS,beginnormal_vertex:MS,bsdfs:ES,iridescence_fragment:wS,bumpmap_pars_fragment:TS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:CS,clipping_planes_vertex:PS,color_fragment:LS,color_pars_fragment:DS,color_pars_vertex:IS,color_vertex:US,common:NS,cube_uv_reflection_fragment:OS,defaultnormal_vertex:kS,displacementmap_pars_vertex:FS,displacementmap_vertex:zS,emissivemap_fragment:BS,emissivemap_pars_fragment:HS,colorspace_fragment:VS,colorspace_pars_fragment:GS,envmap_fragment:WS,envmap_common_pars_fragment:XS,envmap_pars_fragment:jS,envmap_pars_vertex:qS,envmap_physical_pars_fragment:n1,envmap_vertex:YS,fog_vertex:KS,fog_pars_vertex:ZS,fog_fragment:QS,fog_pars_fragment:$S,gradientmap_pars_fragment:JS,lightmap_pars_fragment:e1,lights_lambert_fragment:t1,lights_lambert_pars_fragment:r1,lights_pars_begin:i1,lights_toon_fragment:a1,lights_toon_pars_fragment:o1,lights_phong_fragment:s1,lights_phong_pars_fragment:l1,lights_physical_fragment:c1,lights_physical_pars_fragment:u1,lights_fragment_begin:h1,lights_fragment_maps:d1,lights_fragment_end:f1,logdepthbuf_fragment:p1,logdepthbuf_pars_fragment:m1,logdepthbuf_pars_vertex:g1,logdepthbuf_vertex:v1,map_fragment:_1,map_pars_fragment:y1,map_particle_fragment:x1,map_particle_pars_fragment:S1,metalnessmap_fragment:b1,metalnessmap_pars_fragment:M1,morphinstance_vertex:E1,morphcolor_vertex:w1,morphnormal_vertex:T1,morphtarget_pars_vertex:R1,morphtarget_vertex:A1,normal_fragment_begin:C1,normal_fragment_maps:P1,normal_pars_fragment:L1,normal_pars_vertex:D1,normal_vertex:I1,normalmap_pars_fragment:U1,clearcoat_normal_fragment_begin:N1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:k1,iridescence_pars_fragment:F1,opaque_fragment:z1,packing:B1,premultiplied_alpha_fragment:H1,project_vertex:V1,dithering_fragment:G1,dithering_pars_fragment:W1,roughnessmap_fragment:X1,roughnessmap_pars_fragment:j1,shadowmap_pars_fragment:q1,shadowmap_pars_vertex:Y1,shadowmap_vertex:K1,shadowmask_pars_fragment:Z1,skinbase_vertex:Q1,skinning_pars_vertex:$1,skinning_vertex:J1,skinnormal_vertex:eb,specularmap_fragment:tb,specularmap_pars_fragment:rb,tonemapping_fragment:ib,tonemapping_pars_fragment:nb,transmission_fragment:ab,transmission_pars_fragment:ob,uv_pars_fragment:sb,uv_pars_vertex:lb,uv_vertex:cb,worldpos_vertex:ub,background_vert:hb,background_frag:db,backgroundCube_vert:fb,backgroundCube_frag:pb,cube_vert:mb,cube_frag:gb,depth_vert:vb,depth_frag:_b,distanceRGBA_vert:yb,distanceRGBA_frag:xb,equirect_vert:Sb,equirect_frag:bb,linedashed_vert:Mb,linedashed_frag:Eb,meshbasic_vert:wb,meshbasic_frag:Tb,meshlambert_vert:Rb,meshlambert_frag:Ab,meshmatcap_vert:Cb,meshmatcap_frag:Pb,meshnormal_vert:Lb,meshnormal_frag:Db,meshphong_vert:Ib,meshphong_frag:Ub,meshphysical_vert:Nb,meshphysical_frag:Ob,meshtoon_vert:kb,meshtoon_frag:Fb,points_vert:zb,points_frag:Bb,shadow_vert:Hb,shadow_frag:Vb,sprite_vert:Gb,sprite_frag:Wb},ce={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},qr={basic:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:jt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:jt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:jt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:jt([ce.points,ce.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:jt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:jt([ce.common,ce.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:jt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:jt([ce.sprite,ce.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:jt([ce.common,ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:jt([ce.lights,ce.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};qr.physical={uniforms:jt([qr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const kl={r:0,b:0,g:0},wn=new mi,Xb=new vt;function jb(t,e,r,i,n,a,o){const s=new Ze(0);let l=a===!0?0:1,c,d,f=null,h=0,p=null;function _(v){let g=v.isScene===!0?v.background:null;return g&&g.isTexture&&(g=(v.backgroundBlurriness>0?r:e).get(g)),g}function S(v){let g=!1;const b=_(v);b===null?u(s,l):b&&b.isColor&&(u(b,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,g){const b=_(g);b&&(b.isCubeTexture||b.mapping===nl)?(d===void 0&&(d=new jr(new Oa(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Pa(qr.backgroundCube.uniforms),vertexShader:qr.backgroundCube.vertexShader,fragmentShader:qr.backgroundCube.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),wn.copy(g.backgroundRotation),wn.x*=-1,wn.y*=-1,wn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(wn.y*=-1,wn.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(wn)),d.material.toneMapped=Ye.getTransfer(b.colorSpace)!==at,(f!==b||h!==b.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=b,h=b.version,p=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new jr(new Gl(2,2),new qi({name:"BackgroundMaterial",uniforms:Pa(qr.background.uniforms),vertexShader:qr.background.vertexShader,fragmentShader:qr.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(b.colorSpace)!==at,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||h!==b.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=b,h=b.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,g){v.getRGB(kl,ov(t)),i.buffers.color.setClear(kl.r,kl.g,kl.b,g,o)}return{getClearColor:function(){return s},setClearColor:function(v,g=1){s.set(v),l=g,u(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(s,l)},render:S,addToRenderList:m}}function qb(t,e){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},n=h(null);let a=n,o=!1;function s(y,x,z,B,W){let q=!1;const P=f(B,z,x);a!==P&&(a=P,c(a.object)),q=p(y,B,z,W),q&&_(y,B,z,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(y,x,z,B),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function f(y,x,z){const B=z.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let q=W[x.id];q===void 0&&(q={},W[x.id]=q);let P=q[B];return P===void 0&&(P=h(l()),q[B]=P),P}function h(y){const x=[],z=[],B=[];for(let W=0;W<r;W++)x[W]=0,z[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:z,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,x,z,B){const W=a.attributes,q=x.attributes;let P=0;const F=z.getAttributes();for(const w in F)if(F[w].location>=0){const O=W[w];let I=q[w];if(I===void 0&&(w==="instanceMatrix"&&y.instanceMatrix&&(I=y.instanceMatrix),w==="instanceColor"&&y.instanceColor&&(I=y.instanceColor)),O===void 0||O.attribute!==I||I&&O.data!==I.data)return!0;P++}return a.attributesNum!==P||a.index!==B}function _(y,x,z,B){const W={},q=x.attributes;let P=0;const F=z.getAttributes();for(const w in F)if(F[w].location>=0){let O=q[w];O===void 0&&(w==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),w==="instanceColor"&&y.instanceColor&&(O=y.instanceColor));const I={};I.attribute=O,O&&O.data&&(I.data=O.data),W[w]=I,P++}a.attributes=W,a.attributesNum=P,a.index=B}function S(){const y=a.newAttributes;for(let x=0,z=y.length;x<z;x++)y[x]=0}function m(y){u(y,0)}function u(y,x){const z=a.newAttributes,B=a.enabledAttributes,W=a.attributeDivisors;z[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),W[y]!==x&&(t.vertexAttribDivisor(y,x),W[y]=x)}function v(){const y=a.newAttributes,x=a.enabledAttributes;for(let z=0,B=x.length;z<B;z++)x[z]!==y[z]&&(t.disableVertexAttribArray(z),x[z]=0)}function g(y,x,z,B,W,q,P){P===!0?t.vertexAttribIPointer(y,x,z,W,q):t.vertexAttribPointer(y,x,z,B,W,q)}function b(y,x,z,B){S();const W=B.attributes,q=z.getAttributes(),P=x.defaultAttributeValues;for(const F in q){const w=q[F];if(w.location>=0){let O=W[F];if(O===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(O=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(O=y.instanceColor)),O!==void 0){const I=O.normalized,Y=O.itemSize,se=e.get(O);if(se===void 0)continue;const le=se.buffer,G=se.type,$=se.bytesPerElement,ee=G===t.INT||G===t.UNSIGNED_INT||O.gpuType===xh;if(O.isInterleavedBufferAttribute){const re=O.data,Se=re.stride,ye=O.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<w.locationSize;Pe++)u(w.location+Pe,re.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<w.locationSize;Pe++)m(w.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,le);for(let Pe=0;Pe<w.locationSize;Pe++)g(w.location+Pe,Y/w.locationSize,G,I,Se*$,(ye+Y/w.locationSize*Pe)*$,ee)}else{if(O.isInstancedBufferAttribute){for(let re=0;re<w.locationSize;re++)u(w.location+re,O.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let re=0;re<w.locationSize;re++)m(w.location+re);t.bindBuffer(t.ARRAY_BUFFER,le);for(let re=0;re<w.locationSize;re++)g(w.location+re,Y/w.locationSize,G,I,Y*$,Y/w.locationSize*re*$,ee)}}else if(P!==void 0){const I=P[F];if(I!==void 0)switch(I.length){case 2:t.vertexAttrib2fv(w.location,I);break;case 3:t.vertexAttrib3fv(w.location,I);break;case 4:t.vertexAttrib4fv(w.location,I);break;default:t.vertexAttrib1fv(w.location,I)}}}}v()}function C(){L();for(const y in i){const x=i[y];for(const z in x){const B=x[z];for(const W in B)d(B[W].object),delete B[W];delete x[z]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const x=i[y.id];for(const z in x){const B=x[z];for(const W in B)d(B[W].object),delete B[W];delete x[z]}delete i[y.id]}function T(y){for(const x in i){const z=i[x];if(z[y.id]===void 0)continue;const B=z[y.id];for(const W in B)d(B[W].object),delete B[W];delete z[y.id]}}function L(){Z(),o=!0,a!==n&&(a=n,c(a.object))}function Z(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:s,reset:L,resetDefaultState:Z,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function Yb(t,e,r){let i;function n(c){i=c}function a(c,d){t.drawArrays(i,c,d),r.update(d,i,1)}function o(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),r.update(d,i,f))}function s(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let h=0;for(let p=0;p<f;p++)h+=d[p];r.update(h,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],d[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let _=0;for(let S=0;S<f;S++)_+=d[S];for(let S=0;S<h.length;S++)r.update(_,i,h[S])}}this.setMode=n,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Kb(t,e,r,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(T){return!(T!==Ur&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(T){const L=T===Ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==si&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==li&&!L)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=r.precision!==void 0?r.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=r.logarithmicDepthBuffer===!0,h=r.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:b,vertexTextures:C,maxSamples:A}}function Zb(t){const e=this;let r=null,i=0,n=!1,a=!1;const o=new Ki,s=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||n;return n=h,i=f.length,p},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){r=d(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!n||_===null||_.length===0||a&&!m)a?d(null):c();else{const v=a?0:i,g=v*4;let b=u.clippingState||null;l.value=b,b=d(_,h,g,p);for(let C=0;C!==g;++C)b[C]=r[C];u.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==r&&(l.value=r,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const u=p+S*4,v=h.matrixWorldInverse;s.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,b=p;g!==S;++g,b+=4)o.copy(f[g]).applyMatrix4(v,s),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Qb(t){let e=new WeakMap;function r(o,s){return s===mh?o.mapping=ua:s===gh&&(o.mapping=ha),o}function i(o){if(o&&o.isTexture){const s=o.mapping;if(s===mh||s===gh)if(e.has(o)){const l=e.get(o).texture;return r(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",n),r(c.texture,o.mapping)}else return null}}return o}function n(o){const s=o.target;s.removeEventListener("dispose",n);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class $b extends sv{constructor(e=-1,r=1,i=1,n=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=r,this.top=i,this.bottom=n,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,r){return super.copy(e,r),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,r,i,n,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=r,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),r=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=n+r,l=n-r;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const r=super.toJSON(e);return r.object.zoom=this.zoom,r.object.left=this.left,r.object.right=this.right,r.object.top=this.top,r.object.bottom=this.bottom,r.object.near=this.near,r.object.far=this.far,this.view!==null&&(r.object.view=Object.assign({},this.view)),r}}const Ia=4,pv=[.125,.215,.35,.446,.526,.582],Tn=20,Ed=new $b,mv=new Ze;let wd=null,Td=0,Rd=0,Ad=!1;const Rn=(1+Math.sqrt(5))/2,Ua=1/Rn,gv=[new H(-Rn,Ua,0),new H(Rn,Ua,0),new H(-Ua,0,Rn),new H(Ua,0,Rn),new H(0,Rn,-Ua),new H(0,Rn,Ua),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,r=0,i=.1,n=100){wd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),r>0&&this._blur(a,0,0,r),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,r=null){return this._fromTexture(e,r)}fromCubemap(e,r=null){return this._fromTexture(e,r)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wd,Td,Rd),this._renderer.xr.enabled=Ad,e.scissorTest=!1,Fl(e,0,0,e.width,e.height)}_fromTexture(e,r){e.mapping===ua||e.mapping===ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget(),Td=this._renderer.getActiveCubeFace(),Rd=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=r||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),r=4*this._cubeSize,i={magFilter:Ir,minFilter:Ir,generateMipmaps:!1,type:Ao,format:Ur,colorSpace:Hi,depthBuffer:!1},n=_v(e,r,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==r){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_v(e,r,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jb(a)),this._blurMaterial=eM(a,e,r)}return n}_compileMaterial(e){const r=new jr(this._lodPlanes[0],e);this._renderer.compile(r,Ed)}_sceneToCubeUV(e,r,i,n){const a=new Er(90,1,r,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,d=l.toneMapping;l.getClearColor(mv),l.toneMapping=zi,l.autoClear=!1;const f=new Rl({name:"PMREM.Background",side:tr,depthWrite:!1,depthTest:!1}),h=new jr(new Oa,f);let p=!1;const _=e.background;_?_.isColor&&(f.color.copy(_),e.background=null,p=!0):(f.color.copy(mv),p=!0);for(let S=0;S<6;S++){const m=S%3;m===0?(a.up.set(0,o[S],0),a.lookAt(s[S],0,0)):m===1?(a.up.set(0,0,o[S]),a.lookAt(0,s[S],0)):(a.up.set(0,o[S],0),a.lookAt(0,0,s[S]));const u=this._cubeSize;Fl(n,m*u,S>2?u:0,u,u),l.setRenderTarget(n),p&&l.render(h,a),l.render(e,a)}h.geometry.dispose(),h.material.dispose(),l.toneMapping=d,l.autoClear=c,e.background=_}_textureToCubeUV(e,r){const i=this._renderer,n=e.mapping===ua||e.mapping===ha;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const a=n?this._cubemapMaterial:this._equirectMaterial,o=new jr(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;Fl(r,0,0,3*l,2*l),i.setRenderTarget(r),i.render(o,Ed)}_applyPMREM(e){const r=this._renderer,i=r.autoClear;r.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=gv[(n-a-1)%gv.length];this._blur(e,a-1,a,o,s)}r.autoClear=i}_blur(e,r,i,n,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,r,i,n,"latitudinal",a),this._halfBlur(o,e,i,i,n,"longitudinal",a)}_halfBlur(e,r,i,n,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new jr(this._lodPlanes[n],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Tn-1),S=a/_,m=isFinite(a)?1+Math.floor(d*S):Tn;m>Tn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Tn}`);const u=[];let v=0;for(let T=0;T<Tn;++T){const L=T/S,Z=Math.exp(-L*L/2);u.push(Z),T===0?v+=Z:T<m&&(v+=2*Z)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const b=this._sizeLods[n],C=3*b*(n>g-Ia?n-g+Ia:0),A=4*(this._cubeSize-b);Fl(r,C,A,3*b,2*b),l.setRenderTarget(r),l.render(f,Ed)}}function Jb(t){const e=[],r=[],i=[];let n=t;const a=t-Ia+1+pv.length;for(let o=0;o<a;o++){const s=Math.pow(2,n);r.push(s);let l=1/s;o>t-Ia?l=pv[o-t+Ia-1]:o===0&&(l=0),i.push(l);const c=1/(s-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,_=6,S=3,m=2,u=1,v=new Float32Array(S*_*p),g=new Float32Array(m*_*p),b=new Float32Array(u*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,L=A>2?0:-1,Z=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(Z,S*_*A),g.set(h,m*_*A);const y=[A,A,A,A,A,A];b.set(y,u*_*A)}const C=new Cn;C.setAttribute("position",new Xr(v,S)),C.setAttribute("uv",new Xr(g,m)),C.setAttribute("faceIndex",new Xr(b,u)),e.push(C),n>Ia&&n--}return{lodPlanes:e,sizeLods:r,sigmas:i}}function _v(t,e,r){const i=new _n(t,e,r);return i.texture.mapping=nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fl(t,e,r,i,n){t.viewport.set(e,r,i,n),t.scissor.set(e,r,i,n)}function eM(t,e,r){const i=new Float32Array(Tn),n=new H(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function yv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cd(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function xv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Cd(){return`

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
	`}function tM(t){let e=new WeakMap,r=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===mh||l===gh,d=l===ua||l===ha;if(c||d){let f=e.get(s);const h=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return r===null&&(r=new vv(t)),f=c?r.fromEquirectangular(s,f):r.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const p=s.image;return c&&p&&p.height>0||d&&p&&n(p)?(r===null&&(r=new vv(t)),f=c?r.fromEquirectangular(s):r.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",a),f.texture):null}}}return s}function n(s){let l=0;const c=6;for(let d=0;d<c;d++)s[d]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:o}}function rM(t){const e={};function r(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=t.getExtension(i)}return e[i]=n,n}return{has:function(i){return r(i)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(i){const n=r(i);return n===null&&vl("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function iM(t,e,r,i){const n={},a=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const S=h.morphAttributes[_];for(let m=0,u=S.length;m<u;m++)e.remove(S[m])}h.removeEventListener("dispose",o),delete n[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,r.memory.geometries--}function s(f,h){return n[h.id]===!0||(h.addEventListener("dispose",o),n[h.id]=!0,r.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const S=p[_];for(let m=0,u=S.length;m<u;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let S=0;if(p!==null){const v=p.array;S=p.version;for(let g=0,b=v.length;g<b;g+=3){const C=v[g+0],A=v[g+1],T=v[g+2];h.push(C,A,A,T,T,C)}}else if(_!==void 0){const v=_.array;S=_.version;for(let g=0,b=v.length/3-1;g<b;g+=3){const C=g+0,A=g+1,T=g+2;h.push(C,A,A,T,T,C)}}else return;const m=new(zg(h)?rv:tv)(h,1);m.version=S;const u=a.get(f);u&&e.remove(u),a.set(f,m)}function d(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:d}}function nM(t,e,r){let i;function n(h){i=h}let a,o;function s(h){a=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,a,h*o),r.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,a,h*o,_),r.update(p,i,_))}function d(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,_);let S=0;for(let m=0;m<_;m++)S+=p[m];r.update(S,i,1)}function f(h,p,_,S){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,S,0,_);let u=0;for(let v=0;v<_;v++)u+=p[v];for(let v=0;v<S.length;v++)r.update(u,i,S[v])}}this.setMode=n,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function aM(t){const e={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(r.calls++,o){case t.TRIANGLES:r.triangles+=s*(a/3);break;case t.LINES:r.lines+=s*(a/2);break;case t.LINE_STRIP:r.lines+=s*(a-1);break;case t.LINE_LOOP:r.lines+=s*a;break;case t.POINTS:r.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:e,render:r,programs:null,autoReset:!0,reset:n,update:i}}function oM(t,e,r){const i=new WeakMap,n=new gt;function a(o,s,l){const c=o.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(s);if(h===void 0||h.count!==f){let _=function(){Z.dispose(),i.delete(s),s.removeEventListener("dispose",_)};var p=_;h!==void 0&&h.texture.dispose();const S=s.morphAttributes.position!==void 0,m=s.morphAttributes.normal!==void 0,u=s.morphAttributes.color!==void 0,v=s.morphAttributes.position||[],g=s.morphAttributes.normal||[],b=s.morphAttributes.color||[];let C=0;S===!0&&(C=1),m===!0&&(C=2),u===!0&&(C=3);let A=s.attributes.position.count*C,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*T*4*f),Z=new Wg(L,A,T,f);Z.type=li,Z.needsUpdate=!0;const y=C*4;for(let x=0;x<f;x++){const z=v[x],B=g[x],W=b[x],q=A*T*4*x;for(let P=0;P<z.count;P++){const F=P*y;S===!0&&(n.fromBufferAttribute(z,P),L[q+F+0]=n.x,L[q+F+1]=n.y,L[q+F+2]=n.z,L[q+F+3]=0),m===!0&&(n.fromBufferAttribute(B,P),L[q+F+4]=n.x,L[q+F+5]=n.y,L[q+F+6]=n.z,L[q+F+7]=0),u===!0&&(n.fromBufferAttribute(W,P),L[q+F+8]=n.x,L[q+F+9]=n.y,L[q+F+10]=n.z,L[q+F+11]=W.itemSize===4?n.w:1)}}h={count:f,texture:Z,size:new Be(A,T)},i.set(s,h),s.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,r);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const S=s.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,r),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:a}}function sM(t,e,r,i){let n=new WeakMap;function a(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(n.get(f)!==c&&(e.update(f),n.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.get(l)!==c&&(r.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,t.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return f}function o(){n=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),r.remove(c.instanceMatrix),c.instanceColor!==null&&r.remove(c.instanceColor)}return{update:a,dispose:o}}class Sv extends ir{constructor(e,r,i,n,a,o,s,l,c,d=fa){if(d!==fa&&d!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===fa&&(i=gn),i===void 0&&d===pa&&(i=da),super(null,n,a,o,s,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:r},this.magFilter=s!==void 0?s:br,this.minFilter=l!==void 0?l:br,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const r=super.toJSON(e);return this.compareFunction!==null&&(r.compareFunction=this.compareFunction),r}}const bv=new ir,Mv=new Sv(1,1),Ev=new Wg,wv=new jx,Tv=new hv,Rv=[],Av=[],Cv=new Float32Array(16),Pv=new Float32Array(9),Lv=new Float32Array(4);function Na(t,e,r){const i=t[0];if(i<=0||i>0)return t;const n=e*r;let a=Rv[n];if(a===void 0&&(a=new Float32Array(n),Rv[n]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=r,t[o].toArray(a,s)}return a}function Et(t,e){if(t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]!==e[r])return!1;return!0}function wt(t,e){for(let r=0,i=e.length;r<i;r++)t[r]=e[r]}function zl(t,e){let r=Av[e];r===void 0&&(r=new Int32Array(e),Av[e]=r);for(let i=0;i!==e;++i)r[i]=t.allocateTextureUnit();return r}function lM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1f(this.addr,e),r[0]=e)}function cM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Et(r,e))return;t.uniform2fv(this.addr,e),wt(r,e)}}function uM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else if(e.r!==void 0)(r[0]!==e.r||r[1]!==e.g||r[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),r[0]=e.r,r[1]=e.g,r[2]=e.b);else{if(Et(r,e))return;t.uniform3fv(this.addr,e),wt(r,e)}}function hM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Et(r,e))return;t.uniform4fv(this.addr,e),wt(r,e)}}function dM(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Et(r,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(r,e)}else{if(Et(r,i))return;Lv.set(i),t.uniformMatrix2fv(this.addr,!1,Lv),wt(r,i)}}function fM(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Et(r,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(r,e)}else{if(Et(r,i))return;Pv.set(i),t.uniformMatrix3fv(this.addr,!1,Pv),wt(r,i)}}function pM(t,e){const r=this.cache,i=e.elements;if(i===void 0){if(Et(r,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(r,e)}else{if(Et(r,i))return;Cv.set(i),t.uniformMatrix4fv(this.addr,!1,Cv),wt(r,i)}}function mM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1i(this.addr,e),r[0]=e)}function gM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Et(r,e))return;t.uniform2iv(this.addr,e),wt(r,e)}}function vM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Et(r,e))return;t.uniform3iv(this.addr,e),wt(r,e)}}function _M(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Et(r,e))return;t.uniform4iv(this.addr,e),wt(r,e)}}function yM(t,e){const r=this.cache;r[0]!==e&&(t.uniform1ui(this.addr,e),r[0]=e)}function xM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),r[0]=e.x,r[1]=e.y);else{if(Et(r,e))return;t.uniform2uiv(this.addr,e),wt(r,e)}}function SM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),r[0]=e.x,r[1]=e.y,r[2]=e.z);else{if(Et(r,e))return;t.uniform3uiv(this.addr,e),wt(r,e)}}function bM(t,e){const r=this.cache;if(e.x!==void 0)(r[0]!==e.x||r[1]!==e.y||r[2]!==e.z||r[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w);else{if(Et(r,e))return;t.uniform4uiv(this.addr,e),wt(r,e)}}function MM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n);let a;this.type===t.SAMPLER_2D_SHADOW?(Mv.compareFunction=Ng,a=Mv):a=bv,r.setTexture2D(e||a,n)}function EM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture3D(e||wv,n)}function wM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTextureCube(e||Tv,n)}function TM(t,e,r){const i=this.cache,n=r.allocateTextureUnit();i[0]!==n&&(t.uniform1i(this.addr,n),i[0]=n),r.setTexture2DArray(e||Ev,n)}function RM(t){switch(t){case 5126:return lM;case 35664:return cM;case 35665:return uM;case 35666:return hM;case 35674:return dM;case 35675:return fM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return vM;case 35669:case 35673:return _M;case 5125:return yM;case 36294:return xM;case 36295:return SM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return TM}}function AM(t,e){t.uniform1fv(this.addr,e)}function CM(t,e){const r=Na(e,this.size,2);t.uniform2fv(this.addr,r)}function PM(t,e){const r=Na(e,this.size,3);t.uniform3fv(this.addr,r)}function LM(t,e){const r=Na(e,this.size,4);t.uniform4fv(this.addr,r)}function DM(t,e){const r=Na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,r)}function IM(t,e){const r=Na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,r)}function UM(t,e){const r=Na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,r)}function NM(t,e){t.uniform1iv(this.addr,e)}function OM(t,e){t.uniform2iv(this.addr,e)}function kM(t,e){t.uniform3iv(this.addr,e)}function FM(t,e){t.uniform4iv(this.addr,e)}function zM(t,e){t.uniform1uiv(this.addr,e)}function BM(t,e){t.uniform2uiv(this.addr,e)}function HM(t,e){t.uniform3uiv(this.addr,e)}function VM(t,e){t.uniform4uiv(this.addr,e)}function GM(t,e,r){const i=this.cache,n=e.length,a=zl(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let o=0;o!==n;++o)r.setTexture2D(e[o]||bv,a[o])}function WM(t,e,r){const i=this.cache,n=e.length,a=zl(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let o=0;o!==n;++o)r.setTexture3D(e[o]||wv,a[o])}function XM(t,e,r){const i=this.cache,n=e.length,a=zl(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let o=0;o!==n;++o)r.setTextureCube(e[o]||Tv,a[o])}function jM(t,e,r){const i=this.cache,n=e.length,a=zl(r,n);Et(i,a)||(t.uniform1iv(this.addr,a),wt(i,a));for(let o=0;o!==n;++o)r.setTexture2DArray(e[o]||Ev,a[o])}function qM(t){switch(t){case 5126:return AM;case 35664:return CM;case 35665:return PM;case 35666:return LM;case 35674:return DM;case 35675:return IM;case 35676:return UM;case 5124:case 35670:return NM;case 35667:case 35671:return OM;case 35668:case 35672:return kM;case 35669:case 35673:return FM;case 5125:return zM;case 36294:return BM;case 36295:return HM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return GM;case 35679:case 36299:case 36307:return WM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return jM}}class YM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.setValue=RM(r.type)}}class KM{constructor(e,r,i){this.id=e,this.addr=i,this.cache=[],this.type=r.type,this.size=r.size,this.setValue=qM(r.type)}}class ZM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,r,i){const n=this.seq;for(let a=0,o=n.length;a!==o;++a){const s=n[a];s.setValue(e,r[s.id],i)}}}const Pd=/(\w+)(\])?(\[|\.)?/g;function Dv(t,e){t.seq.push(e),t.map[e.id]=e}function QM(t,e,r){const i=t.name,n=i.length;for(Pd.lastIndex=0;;){const a=Pd.exec(i),o=Pd.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===n){Dv(r,c===void 0?new YM(s,t,e):new KM(s,t,e));break}else{let d=r.map[s];d===void 0&&(d=new ZM(s),Dv(r,d)),r=d}}}class Bl{constructor(e,r){this.seq=[],this.map={};const i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(r,n),o=e.getUniformLocation(r,a.name);QM(a,o,this)}}setValue(e,r,i,n){const a=this.map[r];a!==void 0&&a.setValue(e,i,n)}setOptional(e,r,i){const n=r[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,r,i,n){for(let a=0,o=r.length;a!==o;++a){const s=r[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,n)}}static seqWithValue(e,r){const i=[];for(let n=0,a=e.length;n!==a;++n){const o=e[n];o.id in r&&i.push(o)}return i}}function Iv(t,e,r){const i=t.createShader(e);return t.shaderSource(i,r),t.compileShader(i),i}const $M=37297;let JM=0;function eE(t,e){const r=t.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,r.length);for(let o=n;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${r[o]}`)}return i.join(`
`)}function tE(t){const e=Ye.getPrimaries(Ye.workingColorSpace),r=Ye.getPrimaries(t);let i;switch(e===r?i="":e===pl&&r===fl?i="LinearDisplayP3ToLinearSRGB":e===fl&&r===pl&&(i="LinearSRGBToLinearDisplayP3"),t){case Hi:case hl:return[i,"LinearTransferOETF"];case Wr:case $h:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Uv(t,e,r){const i=t.getShaderParameter(e,t.COMPILE_STATUS),n=t.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const o=parseInt(a[1]);return r.toUpperCase()+`

`+n+`

`+eE(t.getShaderSource(e),o)}else return n}function rE(t,e){const r=tE(e);return`vec4 ${t}( vec4 value ) { return ${r[0]}( ${r[1]}( value ) ); }`}function iE(t,e){let r;switch(e){case rx:r="Linear";break;case ix:r="Reinhard";break;case nx:r="Cineon";break;case ax:r="ACESFilmic";break;case sx:r="AgX";break;case lx:r="Neutral";break;case ox:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),r="Linear"}return"vec3 "+t+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}const Hl=new H;function nE(){Ye.getLuminanceCoefficients(Hl);const t=Hl.x.toFixed(4),e=Hl.y.toFixed(4),r=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function oE(t){const e=[];for(const r in t){const i=t[r];i!==!1&&e.push("#define "+r+" "+i)}return e.join(`
`)}function sE(t,e){const r={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=t.getActiveAttrib(e,n),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),r[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return r}function Fo(t){return t!==""}function Nv(t,e){const r=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ov(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(t){return t.replace(lE,uE)}const cE=new Map;function uE(t,e){let r=Fe[e];if(r===void 0){const i=cE.get(e);if(i!==void 0)r=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ld(r)}const hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(t){return t.replace(hE,dE)}function dE(t,e,r,i){let n="";for(let a=parseInt(e);a<parseInt(r);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Fv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function fE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Ny?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function pE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ua:case ha:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ha:e="ENVMAP_MODE_REFRACTION";break}return e}function gE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case bg:e="ENVMAP_BLENDING_MULTIPLY";break;case ex:e="ENVMAP_BLENDING_MIX";break;case tx:e="ENVMAP_BLENDING_ADD";break}return e}function vE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const r=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,r),7*16)),texelHeight:i,maxMip:r}}function _E(t,e,r,i){const n=t.getContext(),a=r.defines;let o=r.vertexShader,s=r.fragmentShader;const l=fE(r),c=pE(r),d=mE(r),f=gE(r),h=vE(r),p=aE(r),_=oE(a),S=n.createProgram();let m,u,v=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(m=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_].filter(Fo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_].filter(Fo).join(`
`),u.length>0&&(u+=`
`)):(m=[Fv(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+d:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),u=[Fv(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,_,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.envMap?"#define "+d:"",r.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==zi?"#define TONE_MAPPING":"",r.toneMapping!==zi?Fe.tonemapping_pars_fragment:"",r.toneMapping!==zi?iE("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,rE("linearToOutputTexel",r.outputColorSpace),nE(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(Fo).join(`
`)),o=Ld(o),o=Nv(o,r),o=Ov(o,r),s=Ld(s),s=Nv(s,r),s=Ov(s,r),o=kv(o),s=kv(s),r.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",r.glslVersion===kg?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===kg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const g=v+m+o,b=v+u+s,C=Iv(n,n.VERTEX_SHADER,g),A=Iv(n,n.FRAGMENT_SHADER,b);n.attachShader(S,C),n.attachShader(S,A),r.index0AttributeName!==void 0?n.bindAttribLocation(S,0,r.index0AttributeName):r.morphTargets===!0&&n.bindAttribLocation(S,0,"position"),n.linkProgram(S);function T(x){if(t.debug.checkShaderErrors){const z=n.getProgramInfoLog(S).trim(),B=n.getShaderInfoLog(C).trim(),W=n.getShaderInfoLog(A).trim();let q=!0,P=!0;if(n.getProgramParameter(S,n.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,S,C,A);else{const F=Uv(n,C,"vertex"),w=Uv(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(S,n.VALIDATE_STATUS)+`

Material Name: `+x.name+`
Material Type: `+x.type+`

Program Info Log: `+z+`
`+F+`
`+w)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||W==="")&&(P=!1);P&&(x.diagnostics={runnable:q,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:W,prefix:u}})}n.deleteShader(C),n.deleteShader(A),L=new Bl(n,S),Z=sE(n,S)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let Z;this.getAttributes=function(){return Z===void 0&&T(this),Z};let y=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(S,$M)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(S),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=JM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=C,this.fragmentShader=A,this}let yE=0;class xE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const r=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(r),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const r=this.materialCache.get(e);for(const i of r)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const r=this.materialCache;let i=r.get(e);return i===void 0&&(i=new Set,r.set(e,i)),i}_getShaderStage(e){const r=this.shaderCache;let i=r.get(e);return i===void 0&&(i=new SE(e),r.set(e,i)),i}}class SE{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}}function bE(t,e,r,i,n,a,o){const s=new hd,l=new xE,c=new Set,d=[],f=n.logarithmicDepthBuffer,h=n.reverseDepthBuffer,p=n.vertexTextures;let _=n.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,x,z,B,W){const q=B.fog,P=W.geometry,F=y.isMeshStandardMaterial?B.environment:null,w=(y.isMeshStandardMaterial?r:e).get(y.envMap||F),O=w&&w.mapping===nl?w.image.height:null,I=S[y.type];y.precision!==null&&(_=n.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const Y=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,se=Y!==void 0?Y.length:0;let le=0;P.morphAttributes.position!==void 0&&(le=1),P.morphAttributes.normal!==void 0&&(le=2),P.morphAttributes.color!==void 0&&(le=3);let G,$,ee,re;if(I){const Kt=qr[I];G=Kt.vertexShader,$=Kt.fragmentShader}else G=y.vertexShader,$=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),re=l.getFragmentShaderID(y);const Se=t.getRenderTarget(),ye=W.isInstancedMesh===!0,Pe=W.isBatchedMesh===!0,ke=!!y.map,we=!!y.matcap,D=!!w,ar=!!y.aoMap,Ve=!!y.lightMap,je=!!y.bumpMap,Le=!!y.normalMap,rt=!!y.displacementMap,Ne=!!y.emissiveMap,R=!!y.metalnessMap,M=!!y.roughnessMap,V=y.anisotropy>0,J=y.clearcoat>0,ne=y.dispersion>0,Q=y.iridescence>0,Me=y.sheen>0,he=y.transmission>0,ve=V&&!!y.anisotropyMap,Ge=J&&!!y.clearcoatMap,oe=J&&!!y.clearcoatNormalMap,xe=J&&!!y.clearcoatRoughnessMap,De=Q&&!!y.iridescenceMap,Ie=Q&&!!y.iridescenceThicknessMap,ge=Me&&!!y.sheenColorMap,We=Me&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,Je=!!y.specularColorMap,U=!!y.specularIntensityMap,fe=he&&!!y.transmissionMap,K=he&&!!y.thicknessMap,te=!!y.gradientMap,de=!!y.alphaMap,ue=y.alphaTest>0,et=!!y.alphaHash,_t=!!y.extensions;let Yt=zi;y.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(Yt=t.toneMapping);const qe={shaderID:I,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:$,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:Pe,batchingColor:Pe&&W._colorsTexture!==null,instancing:ye,instancingColor:ye&&W.instanceColor!==null,instancingMorph:ye&&W.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Hi,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:we,envMap:D,envMapMode:D&&w.mapping,envMapCubeUVHeight:O,aoMap:ar,lightMap:Ve,bumpMap:je,normalMap:Le,displacementMap:p&&rt,emissiveMap:Ne,normalMapObjectSpace:Le&&y.normalMapType===fx,normalMapTangentSpace:Le&&y.normalMapType===dx,metalnessMap:R,roughnessMap:M,anisotropy:V,anisotropyMap:ve,clearcoat:J,clearcoatMap:Ge,clearcoatNormalMap:oe,clearcoatRoughnessMap:xe,dispersion:ne,iridescence:Q,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:Me,sheenColorMap:ge,sheenRoughnessMap:We,specularMap:Oe,specularColorMap:Je,specularIntensityMap:U,transmission:he,transmissionMap:fe,thicknessMap:K,gradientMap:te,opaque:y.transparent===!1&&y.blending===la&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:ue,alphaHash:et,combine:y.combine,mapUv:ke&&m(y.map.channel),aoMapUv:ar&&m(y.aoMap.channel),lightMapUv:Ve&&m(y.lightMap.channel),bumpMapUv:je&&m(y.bumpMap.channel),normalMapUv:Le&&m(y.normalMap.channel),displacementMapUv:rt&&m(y.displacementMap.channel),emissiveMapUv:Ne&&m(y.emissiveMap.channel),metalnessMapUv:R&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:ve&&m(y.anisotropyMap.channel),clearcoatMapUv:Ge&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:We&&m(y.sheenRoughnessMap.channel),specularMapUv:Oe&&m(y.specularMap.channel),specularColorMapUv:Je&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:fe&&m(y.transmissionMap.channel),thicknessMapUv:K&&m(y.thicknessMap.channel),alphaMapUv:de&&m(y.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Le||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!P.attributes.uv&&(ke||de),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Yt,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&Ye.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===oi,flipSided:y.side===tr,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function v(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)x.push(z),x.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(g(x,y),b(x,y),x.push(t.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function g(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){s.disableAll(),x.supportsVertexTextures&&s.enable(0),x.instancing&&s.enable(1),x.instancingColor&&s.enable(2),x.instancingMorph&&s.enable(3),x.matcap&&s.enable(4),x.envMap&&s.enable(5),x.normalMapObjectSpace&&s.enable(6),x.normalMapTangentSpace&&s.enable(7),x.clearcoat&&s.enable(8),x.iridescence&&s.enable(9),x.alphaTest&&s.enable(10),x.vertexColors&&s.enable(11),x.vertexAlphas&&s.enable(12),x.vertexUv1s&&s.enable(13),x.vertexUv2s&&s.enable(14),x.vertexUv3s&&s.enable(15),x.vertexTangents&&s.enable(16),x.anisotropy&&s.enable(17),x.alphaHash&&s.enable(18),x.batching&&s.enable(19),x.dispersion&&s.enable(20),x.batchingColor&&s.enable(21),y.push(s.mask),s.disableAll(),x.fog&&s.enable(0),x.useFog&&s.enable(1),x.flatShading&&s.enable(2),x.logarithmicDepthBuffer&&s.enable(3),x.reverseDepthBuffer&&s.enable(4),x.skinning&&s.enable(5),x.morphTargets&&s.enable(6),x.morphNormals&&s.enable(7),x.morphColors&&s.enable(8),x.premultipliedAlpha&&s.enable(9),x.shadowMapEnabled&&s.enable(10),x.doubleSided&&s.enable(11),x.flipSided&&s.enable(12),x.useDepthPacking&&s.enable(13),x.dithering&&s.enable(14),x.transmission&&s.enable(15),x.sheen&&s.enable(16),x.opaque&&s.enable(17),x.pointsUvs&&s.enable(18),x.decodeVideoTexture&&s.enable(19),x.alphaToCoverage&&s.enable(20),y.push(s.mask)}function C(y){const x=S[y.type];let z;if(x){const B=qr[x];z=nS.clone(B.uniforms)}else z=y.uniforms;return z}function A(y,x){let z;for(let B=0,W=d.length;B<W;B++){const q=d[B];if(q.cacheKey===x){z=q,++z.usedTimes;break}}return z===void 0&&(z=new _E(t,x,y,a),d.push(z)),z}function T(y){if(--y.usedTimes===0){const x=d.indexOf(y);d[x]=d[d.length-1],d.pop(),y.destroy()}}function L(y){l.remove(y)}function Z(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:L,programs:d,dispose:Z}}function ME(){let t=new WeakMap;function e(o){return t.has(o)}function r(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function i(o){t.delete(o)}function n(o,s,l){t.get(o)[s]=l}function a(){t=new WeakMap}return{has:e,get:r,remove:i,update:n,dispose:a}}function EE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bv(){const t=[];let e=0;const r=[],i=[],n=[];function a(){e=0,r.length=0,i.length=0,n.length=0}function o(f,h,p,_,S,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:S,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=S,u.group=m),e++,u}function s(f,h,p,_,S,m){const u=o(f,h,p,_,S,m);p.transmission>0?i.push(u):p.transparent===!0?n.push(u):r.push(u)}function l(f,h,p,_,S,m){const u=o(f,h,p,_,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?n.unshift(u):r.unshift(u)}function c(f,h){r.length>1&&r.sort(f||EE),i.length>1&&i.sort(h||zv),n.length>1&&n.sort(h||zv)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:r,transmissive:i,transparent:n,init:a,push:s,unshift:l,finish:d,sort:c}}function wE(){let t=new WeakMap;function e(i,n){const a=t.get(i);let o;return a===void 0?(o=new Bv,t.set(i,[o])):n>=a.length?(o=new Bv,a.push(o)):o=a[n],o}function r(){t=new WeakMap}return{get:e,dispose:r}}function TE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={direction:new H,color:new Ze};break;case"SpotLight":r={position:new H,direction:new H,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new H,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":r={direction:new H,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":r={color:new Ze,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=r,r}}}function RE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let r;switch(e.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=r,r}}}let AE=0;function CE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function PE(t){const e=new TE,r=RE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const n=new H,a=new vt,o=new vt;function s(c){let d=0,f=0,h=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let p=0,_=0,S=0,m=0,u=0,v=0,g=0,b=0,C=0,A=0,T=0;c.sort(CE);for(let Z=0,y=c.length;Z<y;Z++){const x=c[Z],z=x.color,B=x.intensity,W=x.distance,q=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)d+=z.r*B,f+=z.g*B,h+=z.b*B;else if(x.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(x.sh.coefficients[P],B);T++}else if(x.isDirectionalLight){const P=e.get(x);if(P.color.copy(x.color).multiplyScalar(x.intensity),x.castShadow){const F=x.shadow,w=r.get(x);w.shadowIntensity=F.intensity,w.shadowBias=F.bias,w.shadowNormalBias=F.normalBias,w.shadowRadius=F.radius,w.shadowMapSize=F.mapSize,i.directionalShadow[p]=w,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=x.shadow.matrix,v++}i.directional[p]=P,p++}else if(x.isSpotLight){const P=e.get(x);P.position.setFromMatrixPosition(x.matrixWorld),P.color.copy(z).multiplyScalar(B),P.distance=W,P.coneCos=Math.cos(x.angle),P.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),P.decay=x.decay,i.spot[S]=P;const F=x.shadow;if(x.map&&(i.spotLightMap[C]=x.map,C++,F.updateMatrices(x),x.castShadow&&A++),i.spotLightMatrix[S]=F.matrix,x.castShadow){const w=r.get(x);w.shadowIntensity=F.intensity,w.shadowBias=F.bias,w.shadowNormalBias=F.normalBias,w.shadowRadius=F.radius,w.shadowMapSize=F.mapSize,i.spotShadow[S]=w,i.spotShadowMap[S]=q,b++}S++}else if(x.isRectAreaLight){const P=e.get(x);P.color.copy(z).multiplyScalar(B),P.halfWidth.set(x.width*.5,0,0),P.halfHeight.set(0,x.height*.5,0),i.rectArea[m]=P,m++}else if(x.isPointLight){const P=e.get(x);if(P.color.copy(x.color).multiplyScalar(x.intensity),P.distance=x.distance,P.decay=x.decay,x.castShadow){const F=x.shadow,w=r.get(x);w.shadowIntensity=F.intensity,w.shadowBias=F.bias,w.shadowNormalBias=F.normalBias,w.shadowRadius=F.radius,w.shadowMapSize=F.mapSize,w.shadowCameraNear=F.camera.near,w.shadowCameraFar=F.camera.far,i.pointShadow[_]=w,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=x.shadow.matrix,g++}i.point[_]=P,_++}else if(x.isHemisphereLight){const P=e.get(x);P.skyColor.copy(x.color).multiplyScalar(B),P.groundColor.copy(x.groundColor).multiplyScalar(B),i.hemi[u]=P,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==S||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==v||L.numPointShadows!==g||L.numSpotShadows!==b||L.numSpotMaps!==C||L.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=b+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,L.directionalLength=p,L.pointLength=_,L.spotLength=S,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=v,L.numPointShadows=g,L.numSpotShadows=b,L.numSpotMaps=C,L.numLightProbes=T,i.version=AE++)}function l(c,d){let f=0,h=0,p=0,_=0,S=0;const m=d.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const g=c[u];if(g.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),f++}else if(g.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(g.matrixWorld),n.setFromMatrixPosition(g.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(m),o.identity(),a.copy(g.matrixWorld),a.premultiply(m),o.extractRotation(a),b.halfWidth.set(g.width*.5,0,0),b.halfHeight.set(0,g.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(g.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(g.matrixWorld),b.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const b=i.hemi[S];b.direction.setFromMatrixPosition(g.matrixWorld),b.direction.transformDirection(m),S++}}}return{setup:s,setupView:l,state:i}}function Hv(t){const e=new PE(t),r=[],i=[];function n(d){c.camera=d,r.length=0,i.length=0}function a(d){r.push(d)}function o(d){i.push(d)}function s(){e.setup(r)}function l(d){e.setupView(r,d)}const c={lightsArray:r,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function LE(t){let e=new WeakMap;function r(n,a=0){const o=e.get(n);let s;return o===void 0?(s=new Hv(t),e.set(n,[s])):a>=o.length?(s=new Hv(t),o.push(s)):s=o[a],s}function i(){e=new WeakMap}return{get:r,dispose:i}}class DE extends Tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IE extends Tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const UE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NE=`uniform sampler2D shadow_pass;
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
}`;function OE(t,e,r){let i=new dv;const n=new Be,a=new Be,o=new gt,s=new DE({depthPacking:hx}),l=new IE,c={},d=r.maxTextureSize,f={[ki]:tr,[tr]:ki,[oi]:oi},h=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:UE,fragmentShader:NE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Cn;_.setAttribute("position",new Xr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new jr(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_g;let u=this.type;this.render=function(A,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const Z=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Fi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=u!==ai&&this.type===ai,W=u===ai&&this.type!==ai;for(let q=0,P=A.length;q<P;q++){const F=A[q],w=F.shadow;if(w===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(w.autoUpdate===!1&&w.needsUpdate===!1)continue;n.copy(w.mapSize);const O=w.getFrameExtents();if(n.multiply(O),a.copy(w.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(a.x=Math.floor(d/O.x),n.x=a.x*O.x,w.mapSize.x=a.x),n.y>d&&(a.y=Math.floor(d/O.y),n.y=a.y*O.y,w.mapSize.y=a.y)),w.map===null||B===!0||W===!0){const Y=this.type!==ai?{minFilter:br,magFilter:br}:{};w.map!==null&&w.map.dispose(),w.map=new _n(n.x,n.y,Y),w.map.texture.name=F.name+".shadowMap",w.camera.updateProjectionMatrix()}t.setRenderTarget(w.map),t.clear();const I=w.getViewportCount();for(let Y=0;Y<I;Y++){const se=w.getViewport(Y);o.set(a.x*se.x,a.y*se.y,a.x*se.z,a.y*se.w),z.viewport(o),w.updateMatrices(F,Y),i=w.getFrustum(),b(T,L,w.camera,F,this.type)}w.isPointLightShadow!==!0&&this.type===ai&&v(w,L),w.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(Z,y,x)};function v(A,T){const L=e.update(S);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _n(n.x,n.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,L,h,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,L,p,S,null)}function g(A,T,L,Z){let y=null;const x=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(x!==void 0)y=x;else if(y=L.isPointLight===!0?l:s,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=y.uuid,B=T.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let q=W[B];q===void 0&&(q=y.clone(),W[B]=q,T.addEventListener("dispose",C)),y=q}if(y.visible=T.visible,y.wireframe=T.wireframe,Z===ai?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=t.properties.get(y);z.light=L}return y}function b(A,T,L,Z,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const z=e.update(A),B=A.material;if(Array.isArray(B)){const W=z.groups;for(let q=0,P=W.length;q<P;q++){const F=W[q],w=B[F.materialIndex];if(w&&w.visible){const O=g(A,w,Z,y);A.onBeforeShadow(t,A,T,L,z,O,F),t.renderBufferDirect(L,null,z,O,A,F),A.onAfterShadow(t,A,T,L,z,O,F)}}}else if(B.visible){const W=g(A,B,Z,y);A.onBeforeShadow(t,A,T,L,z,W,null),t.renderBufferDirect(L,null,z,W,A,null),A.onAfterShadow(t,A,T,L,z,W,null)}}const x=A.children;for(let z=0,B=x.length;z<B;z++)b(x[z],T,L,Z,y)}function C(A){A.target.removeEventListener("dispose",C);for(const T in c){const L=c[T],Z=A.target.uuid;Z in L&&(L[Z].dispose(),delete L[Z])}}}const kE={[lh]:ch,[uh]:fh,[hh]:ph,[ca]:dh,[ch]:lh,[fh]:uh,[ph]:hh,[dh]:ca};function FE(t){function e(){let U=!1;const fe=new gt;let K=null;const te=new gt(0,0,0,0);return{setMask:function(de){K!==de&&!U&&(t.colorMask(de,de,de,de),K=de)},setLocked:function(de){U=de},setClear:function(de,ue,et,_t,Yt){Yt===!0&&(de*=_t,ue*=_t,et*=_t),fe.set(de,ue,et,_t),te.equals(fe)===!1&&(t.clearColor(de,ue,et,_t),te.copy(fe))},reset:function(){U=!1,K=null,te.set(-1,0,0,0)}}}function r(){let U=!1,fe=!1,K=null,te=null,de=null;return{setReversed:function(ue){fe=ue},setTest:function(ue){ue?ee(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ue){K!==ue&&!U&&(t.depthMask(ue),K=ue)},setFunc:function(ue){if(fe&&(ue=kE[ue]),te!==ue){switch(ue){case lh:t.depthFunc(t.NEVER);break;case ch:t.depthFunc(t.ALWAYS);break;case uh:t.depthFunc(t.LESS);break;case ca:t.depthFunc(t.LEQUAL);break;case hh:t.depthFunc(t.EQUAL);break;case dh:t.depthFunc(t.GEQUAL);break;case fh:t.depthFunc(t.GREATER);break;case ph:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=ue}},setLocked:function(ue){U=ue},setClear:function(ue){de!==ue&&(t.clearDepth(ue),de=ue)},reset:function(){U=!1,K=null,te=null,de=null}}}function i(){let U=!1,fe=null,K=null,te=null,de=null,ue=null,et=null,_t=null,Yt=null;return{setTest:function(qe){U||(qe?ee(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(qe){fe!==qe&&!U&&(t.stencilMask(qe),fe=qe)},setFunc:function(qe,Kt,Yr){(K!==qe||te!==Kt||de!==Yr)&&(t.stencilFunc(qe,Kt,Yr),K=qe,te=Kt,de=Yr)},setOp:function(qe,Kt,Yr){(ue!==qe||et!==Kt||_t!==Yr)&&(t.stencilOp(qe,Kt,Yr),ue=qe,et=Kt,_t=Yr)},setLocked:function(qe){U=qe},setClear:function(qe){Yt!==qe&&(t.clearStencil(qe),Yt=qe)},reset:function(){U=!1,fe=null,K=null,te=null,de=null,ue=null,et=null,_t=null,Yt=null}}}const n=new e,a=new r,o=new i,s=new WeakMap,l=new WeakMap;let c={},d={},f=new WeakMap,h=[],p=null,_=!1,S=null,m=null,u=null,v=null,g=null,b=null,C=null,A=new Ze(0,0,0),T=0,L=!1,Z=null,y=null,x=null,z=null,B=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,P=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),q=P>=1):F.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),q=P>=2);let w=null,O={};const I=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),se=new gt().fromArray(I),le=new gt().fromArray(Y);function G(U,fe,K,te){const de=new Uint8Array(4),ue=t.createTexture();t.bindTexture(U,ue),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<K;et++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(fe+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ue}const $={};$[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(t.DEPTH_TEST),a.setFunc(ca),Ve(!1),je(vg),ee(t.CULL_FACE),D(Fi);function ee(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function re(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function Se(U,fe){return d[U]!==fe?(t.bindFramebuffer(U,fe),d[U]=fe,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function ye(U,fe){let K=h,te=!1;if(U){K=f.get(fe),K===void 0&&(K=[],f.set(fe,K));const de=U.textures;if(K.length!==de.length||K[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,et=de.length;ue<et;ue++)K[ue]=t.COLOR_ATTACHMENT0+ue;K.length=de.length,te=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,te=!0);te&&t.drawBuffers(K)}function Pe(U){return p!==U?(t.useProgram(U),p=U,!0):!1}const ke={[fn]:t.FUNC_ADD,[ky]:t.FUNC_SUBTRACT,[Fy]:t.FUNC_REVERSE_SUBTRACT};ke[zy]=t.MIN,ke[By]=t.MAX;const we={[Hy]:t.ZERO,[Vy]:t.ONE,[Gy]:t.SRC_COLOR,[oh]:t.SRC_ALPHA,[Ky]:t.SRC_ALPHA_SATURATE,[qy]:t.DST_COLOR,[Xy]:t.DST_ALPHA,[Wy]:t.ONE_MINUS_SRC_COLOR,[sh]:t.ONE_MINUS_SRC_ALPHA,[Yy]:t.ONE_MINUS_DST_COLOR,[jy]:t.ONE_MINUS_DST_ALPHA,[Zy]:t.CONSTANT_COLOR,[Qy]:t.ONE_MINUS_CONSTANT_COLOR,[$y]:t.CONSTANT_ALPHA,[Jy]:t.ONE_MINUS_CONSTANT_ALPHA};function D(U,fe,K,te,de,ue,et,_t,Yt,qe){if(U===Fi){_===!0&&(re(t.BLEND),_=!1);return}if(_===!1&&(ee(t.BLEND),_=!0),U!==Oy){if(U!==S||qe!==L){if((m!==fn||g!==fn)&&(t.blendEquation(t.FUNC_ADD),m=fn,g=fn),qe)switch(U){case la:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yg:t.blendFunc(t.ONE,t.ONE);break;case xg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case la:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}u=null,v=null,b=null,C=null,A.set(0,0,0),T=0,S=U,L=qe}return}de=de||fe,ue=ue||K,et=et||te,(fe!==m||de!==g)&&(t.blendEquationSeparate(ke[fe],ke[de]),m=fe,g=de),(K!==u||te!==v||ue!==b||et!==C)&&(t.blendFuncSeparate(we[K],we[te],we[ue],we[et]),u=K,v=te,b=ue,C=et),(_t.equals(A)===!1||Yt!==T)&&(t.blendColor(_t.r,_t.g,_t.b,Yt),A.copy(_t),T=Yt),S=U,L=!1}function ar(U,fe){U.side===oi?re(t.CULL_FACE):ee(t.CULL_FACE);let K=U.side===tr;fe&&(K=!K),Ve(K),U.blending===la&&U.transparent===!1?D(Fi):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),n.setMask(U.colorWrite);const te=U.stencilWrite;o.setTest(te),te&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),rt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){Z!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),Z=U)}function je(U){U!==Iy?(ee(t.CULL_FACE),U!==y&&(U===vg?t.cullFace(t.BACK):U===Uy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),y=U}function Le(U){U!==x&&(q&&t.lineWidth(U),x=U)}function rt(U,fe,K){U?(ee(t.POLYGON_OFFSET_FILL),(z!==fe||B!==K)&&(t.polygonOffset(fe,K),z=fe,B=K)):re(t.POLYGON_OFFSET_FILL)}function Ne(U){U?ee(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+W-1),w!==U&&(t.activeTexture(U),w=U)}function M(U,fe,K){K===void 0&&(w===null?K=t.TEXTURE0+W-1:K=w);let te=O[K];te===void 0&&(te={type:void 0,texture:void 0},O[K]=te),(te.type!==U||te.texture!==fe)&&(w!==K&&(t.activeTexture(K),w=K),t.bindTexture(U,fe||$[U]),te.type=U,te.texture=fe)}function V(){const U=O[w];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ge(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){se.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),se.copy(U))}function ge(U){le.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),le.copy(U))}function We(U,fe){let K=l.get(fe);K===void 0&&(K=new WeakMap,l.set(fe,K));let te=K.get(U);te===void 0&&(te=t.getUniformBlockIndex(fe,U.name),K.set(U,te))}function Oe(U,fe){const K=l.get(fe).get(U);s.get(fe)!==K&&(t.uniformBlockBinding(fe,K,U.__bindingPointIndex),s.set(fe,K))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},w=null,O={},d={},f=new WeakMap,h=[],p=null,_=!1,S=null,m=null,u=null,v=null,g=null,b=null,C=null,A=new Ze(0,0,0),T=0,L=!1,Z=null,y=null,x=null,z=null,B=null,se.set(0,0,t.canvas.width,t.canvas.height),le.set(0,0,t.canvas.width,t.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:ee,disable:re,bindFramebuffer:Se,drawBuffers:ye,useProgram:Pe,setBlending:D,setMaterial:ar,setFlipSided:Ve,setCullFace:je,setLineWidth:Le,setPolygonOffset:rt,setScissorTest:Ne,activeTexture:R,bindTexture:M,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:xe,texImage3D:De,updateUBOMapping:We,uniformBlockBinding:Oe,texStorage2D:Ge,texStorage3D:oe,texSubImage2D:Q,texSubImage3D:Me,compressedTexSubImage2D:he,compressedTexSubImage3D:ve,scissor:Ie,viewport:ge,reset:Je}}function Vv(t,e,r,i){const n=zE(i);switch(r){case Rg:return t*e;case Cg:return t*e;case Pg:return t*e*2;case Lg:return t*e/n.components*n.byteLength;case Mh:return t*e/n.components*n.byteLength;case Dg:return t*e*2/n.components*n.byteLength;case Eh:return t*e*2/n.components*n.byteLength;case Ag:return t*e*3/n.components*n.byteLength;case Ur:return t*e*4/n.components*n.byteLength;case wh:return t*e*4/n.components*n.byteLength;case ol:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ll:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Ch:return Math.max(t,16)*Math.max(e,8)/4;case Th:case Ah:return Math.max(t,8)*Math.max(e,8)/2;case Ph:case Lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ul:case qh:case Yh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ig:case Kh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zh:case Qh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function zE(t){switch(t){case si:case Eg:return{byteLength:1,components:1};case Ro:case wg:case Ao:return{byteLength:2,components:1};case Sh:case bh:return{byteLength:2,components:4};case gn:case xh:case li:return{byteLength:4,components:1};case Tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function BE(t,e,r,i,n,a,o){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):gl("canvas")}function S(R,M,V){let J=1;const ne=Ne(R);if((ne.width>V||ne.height>V)&&(J=V/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*ne.width),Me=Math.floor(J*ne.height);f===void 0&&(f=_(Q,Me));const he=M?_(Q,Me):f;return he.width=Q,he.height=Me,he.getContext("2d").drawImage(R,0,0,Q,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+Me+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==br&&R.minFilter!==Ir}function u(R){t.generateMipmap(R)}function v(R,M,V,J,ne=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=M;if(M===t.RED&&(V===t.FLOAT&&(Q=t.R32F),V===t.HALF_FLOAT&&(Q=t.R16F),V===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.R8UI),V===t.UNSIGNED_SHORT&&(Q=t.R16UI),V===t.UNSIGNED_INT&&(Q=t.R32UI),V===t.BYTE&&(Q=t.R8I),V===t.SHORT&&(Q=t.R16I),V===t.INT&&(Q=t.R32I)),M===t.RG&&(V===t.FLOAT&&(Q=t.RG32F),V===t.HALF_FLOAT&&(Q=t.RG16F),V===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.RG8UI),V===t.UNSIGNED_SHORT&&(Q=t.RG16UI),V===t.UNSIGNED_INT&&(Q=t.RG32UI),V===t.BYTE&&(Q=t.RG8I),V===t.SHORT&&(Q=t.RG16I),V===t.INT&&(Q=t.RG32I)),M===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),V===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),V===t.UNSIGNED_INT&&(Q=t.RGB32UI),V===t.BYTE&&(Q=t.RGB8I),V===t.SHORT&&(Q=t.RGB16I),V===t.INT&&(Q=t.RGB32I)),M===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),V===t.UNSIGNED_INT&&(Q=t.RGBA32UI),V===t.BYTE&&(Q=t.RGBA8I),V===t.SHORT&&(Q=t.RGBA16I),V===t.INT&&(Q=t.RGBA32I)),M===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),M===t.RGBA){const Me=ne?dl:Ye.getTransfer(J);V===t.FLOAT&&(Q=t.RGBA32F),V===t.HALF_FLOAT&&(Q=t.RGBA16F),V===t.UNSIGNED_BYTE&&(Q=Me===at?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(R,M){let V;return R?M===null||M===gn||M===da?V=t.DEPTH24_STENCIL8:M===li?V=t.DEPTH32F_STENCIL8:M===Ro&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===gn||M===da?V=t.DEPTH_COMPONENT24:M===li?V=t.DEPTH_COMPONENT32F:M===Ro&&(V=t.DEPTH_COMPONENT16),V}function b(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==br&&R.minFilter!==Ir?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&d.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),Z(M)}function T(R){const M=i.get(R);if(M.__webglInit===void 0)return;const V=R.source,J=h.get(V);if(J){const ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&L(R),Object.keys(J).length===0&&h.delete(V)}i.remove(R)}function L(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const V=R.source,J=h.get(V);delete J[M.__cacheKey],o.memory.textures--}function Z(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ne=0;ne<M.__webglFramebuffer[J].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[J][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)t.deleteFramebuffer(M.__webglFramebuffer[J]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=R.textures;for(let J=0,ne=V.length;J<ne;J++){const Q=i.get(V[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(V[J])}i.remove(R)}let y=0;function x(){y=0}function z(){const R=y;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),y+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function W(R,M){const V=i.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{le(V,R,M);return}}r.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function q(R,M){const V=i.get(R);if(R.version>0&&V.__version!==R.version){le(V,R,M);return}r.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function P(R,M){const V=i.get(R);if(R.version>0&&V.__version!==R.version){le(V,R,M);return}r.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function F(R,M){const V=i.get(R);if(R.version>0&&V.__version!==R.version){G(V,R,M);return}r.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const w={[vh]:t.REPEAT,[pn]:t.CLAMP_TO_EDGE,[_h]:t.MIRRORED_REPEAT},O={[br]:t.NEAREST,[cx]:t.NEAREST_MIPMAP_NEAREST,[al]:t.NEAREST_MIPMAP_LINEAR,[Ir]:t.LINEAR,[yh]:t.LINEAR_MIPMAP_NEAREST,[mn]:t.LINEAR_MIPMAP_LINEAR},I={[px]:t.NEVER,[xx]:t.ALWAYS,[mx]:t.LESS,[Ng]:t.LEQUAL,[gx]:t.EQUAL,[yx]:t.GEQUAL,[vx]:t.GREATER,[_x]:t.NOTEQUAL};function Y(R,M){if(M.type===li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ir||M.magFilter===yh||M.magFilter===al||M.magFilter===mn||M.minFilter===Ir||M.minFilter===yh||M.minFilter===al||M.minFilter===mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,w[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,w[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,w[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,O[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,O[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,I[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===br||M.minFilter!==al&&M.minFilter!==mn||M.type===li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function se(R,M){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const J=M.source;let ne=h.get(J);ne===void 0&&(ne={},h.set(J,ne));const Q=B(M);if(Q!==R.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[Q].usedTimes++;const Me=ne[R.__cacheKey];Me!==void 0&&(ne[R.__cacheKey].usedTimes--,Me.usedTimes===0&&L(M)),R.__cacheKey=Q,R.__webglTexture=ne[Q].texture}return V}function le(R,M,V){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const ne=se(R,M),Q=M.source;r.bindTexture(J,R.__webglTexture,t.TEXTURE0+V);const Me=i.get(Q);if(Q.version!==Me.__version||ne===!0){r.activeTexture(t.TEXTURE0+V);const he=Ye.getPrimaries(Ye.workingColorSpace),ve=M.colorSpace===Bi?null:Ye.getPrimaries(M.colorSpace),Ge=M.colorSpace===Bi||he===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let oe=S(M.image,!1,n.maxTextureSize);oe=rt(M,oe);const xe=a.convert(M.format,M.colorSpace),De=a.convert(M.type);let Ie=v(M.internalFormat,xe,De,M.colorSpace,M.isVideoTexture);Y(J,M);let ge;const We=M.mipmaps,Oe=M.isVideoTexture!==!0,Je=Me.__version===void 0||ne===!0,U=Q.dataReady,fe=b(M,oe);if(M.isDepthTexture)Ie=g(M.format===pa,M.type),Je&&(Oe?r.texStorage2D(t.TEXTURE_2D,1,Ie,oe.width,oe.height):r.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,xe,De,null));else if(M.isDataTexture)if(We.length>0){Oe&&Je&&r.texStorage2D(t.TEXTURE_2D,fe,Ie,We[0].width,We[0].height);for(let K=0,te=We.length;K<te;K++)ge=We[K],Oe?U&&r.texSubImage2D(t.TEXTURE_2D,K,0,0,ge.width,ge.height,xe,De,ge.data):r.texImage2D(t.TEXTURE_2D,K,Ie,ge.width,ge.height,0,xe,De,ge.data);M.generateMipmaps=!1}else Oe?(Je&&r.texStorage2D(t.TEXTURE_2D,fe,Ie,oe.width,oe.height),U&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,xe,De,oe.data)):r.texImage2D(t.TEXTURE_2D,0,Ie,oe.width,oe.height,0,xe,De,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&Je&&r.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,We[0].width,We[0].height,oe.depth);for(let K=0,te=We.length;K<te;K++)if(ge=We[K],M.format!==Ur)if(xe!==null)if(Oe){if(U)if(M.layerUpdates.size>0){const de=Vv(ge.width,ge.height,M.format,M.type);for(const ue of M.layerUpdates){const et=ge.data.subarray(ue*de/ge.data.BYTES_PER_ELEMENT,(ue+1)*de/ge.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,ue,ge.width,ge.height,1,xe,et,0,0)}M.clearLayerUpdates()}else r.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,oe.depth,xe,ge.data,0,0)}else r.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Ie,ge.width,ge.height,oe.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?U&&r.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ge.width,ge.height,oe.depth,xe,De,ge.data):r.texImage3D(t.TEXTURE_2D_ARRAY,K,Ie,ge.width,ge.height,oe.depth,0,xe,De,ge.data)}else{Oe&&Je&&r.texStorage2D(t.TEXTURE_2D,fe,Ie,We[0].width,We[0].height);for(let K=0,te=We.length;K<te;K++)ge=We[K],M.format!==Ur?xe!==null?Oe?U&&r.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ge.width,ge.height,xe,ge.data):r.compressedTexImage2D(t.TEXTURE_2D,K,Ie,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?U&&r.texSubImage2D(t.TEXTURE_2D,K,0,0,ge.width,ge.height,xe,De,ge.data):r.texImage2D(t.TEXTURE_2D,K,Ie,ge.width,ge.height,0,xe,De,ge.data)}else if(M.isDataArrayTexture)if(Oe){if(Je&&r.texStorage3D(t.TEXTURE_2D_ARRAY,fe,Ie,oe.width,oe.height,oe.depth),U)if(M.layerUpdates.size>0){const K=Vv(oe.width,oe.height,M.format,M.type);for(const te of M.layerUpdates){const de=oe.data.subarray(te*K/oe.data.BYTES_PER_ELEMENT,(te+1)*K/oe.data.BYTES_PER_ELEMENT);r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,xe,De,de)}M.clearLayerUpdates()}else r.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)}else r.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(M.isData3DTexture)Oe?(Je&&r.texStorage3D(t.TEXTURE_3D,fe,Ie,oe.width,oe.height,oe.depth),U&&r.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,xe,De,oe.data)):r.texImage3D(t.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,xe,De,oe.data);else if(M.isFramebufferTexture){if(Je)if(Oe)r.texStorage2D(t.TEXTURE_2D,fe,Ie,oe.width,oe.height);else{let K=oe.width,te=oe.height;for(let de=0;de<fe;de++)r.texImage2D(t.TEXTURE_2D,de,Ie,K,te,0,xe,De,null),K>>=1,te>>=1}}else if(We.length>0){if(Oe&&Je){const K=Ne(We[0]);r.texStorage2D(t.TEXTURE_2D,fe,Ie,K.width,K.height)}for(let K=0,te=We.length;K<te;K++)ge=We[K],Oe?U&&r.texSubImage2D(t.TEXTURE_2D,K,0,0,xe,De,ge):r.texImage2D(t.TEXTURE_2D,K,Ie,xe,De,ge);M.generateMipmaps=!1}else if(Oe){if(Je){const K=Ne(oe);r.texStorage2D(t.TEXTURE_2D,fe,Ie,K.width,K.height)}U&&r.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,De,oe)}else r.texImage2D(t.TEXTURE_2D,0,Ie,xe,De,oe);m(M)&&u(J),Me.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function G(R,M,V){if(M.image.length!==6)return;const J=se(R,M),ne=M.source;r.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const Q=i.get(ne);if(ne.version!==Q.__version||J===!0){r.activeTexture(t.TEXTURE0+V);const Me=Ye.getPrimaries(Ye.workingColorSpace),he=M.colorSpace===Bi?null:Ye.getPrimaries(M.colorSpace),ve=M.colorSpace===Bi||Me===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ge=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!Ge&&!oe?xe[te]=S(M.image[te],!0,n.maxCubemapSize):xe[te]=oe?M.image[te].image:M.image[te],xe[te]=rt(M,xe[te]);const De=xe[0],Ie=a.convert(M.format,M.colorSpace),ge=a.convert(M.type),We=v(M.internalFormat,Ie,ge,M.colorSpace),Oe=M.isVideoTexture!==!0,Je=Q.__version===void 0||J===!0,U=ne.dataReady;let fe=b(M,De);Y(t.TEXTURE_CUBE_MAP,M);let K;if(Ge){Oe&&Je&&r.texStorage2D(t.TEXTURE_CUBE_MAP,fe,We,De.width,De.height);for(let te=0;te<6;te++){K=xe[te].mipmaps;for(let de=0;de<K.length;de++){const ue=K[de];M.format!==Ur?Ie!==null?Oe?U&&r.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,ue.width,ue.height,Ie,ue.data):r.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,We,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?U&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,ue.width,ue.height,Ie,ge,ue.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,We,ue.width,ue.height,0,Ie,ge,ue.data)}}}else{if(K=M.mipmaps,Oe&&Je){K.length>0&&fe++;const te=Ne(xe[0]);r.texStorage2D(t.TEXTURE_CUBE_MAP,fe,We,te.width,te.height)}for(let te=0;te<6;te++)if(oe){Oe?U&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,Ie,ge,xe[te].data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,xe[te].width,xe[te].height,0,Ie,ge,xe[te].data);for(let de=0;de<K.length;de++){const ue=K[de].image[te].image;Oe?U&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,ue.width,ue.height,Ie,ge,ue.data):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,We,ue.width,ue.height,0,Ie,ge,ue.data)}}else{Oe?U&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ie,ge,xe[te]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,We,Ie,ge,xe[te]);for(let de=0;de<K.length;de++){const ue=K[de];Oe?U&&r.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,Ie,ge,ue.image[te]):r.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,We,Ie,ge,ue.image[te])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),Q.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function $(R,M,V,J,ne,Q){const Me=a.convert(V.format,V.colorSpace),he=a.convert(V.type),ve=v(V.internalFormat,Me,he,V.colorSpace);if(!i.get(M).__hasExternalTextures){const Ge=Math.max(1,M.width>>Q),oe=Math.max(1,M.height>>Q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?r.texImage3D(ne,Q,ve,Ge,oe,M.depth,0,Me,he,null):r.texImage2D(ne,Q,ve,Ge,oe,0,Me,he,null)}r.bindFramebuffer(t.FRAMEBUFFER,R),je(M)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ne,i.get(V).__webglTexture,0,Ve(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ne,i.get(V).__webglTexture,Q),r.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(R,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const J=M.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Q=g(M.stencilBuffer,ne),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=Ve(M);je(M)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,Q,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,R)}else{const J=M.textures;for(let ne=0;ne<J.length;ne++){const Q=J[ne],Me=a.convert(Q.format,Q.colorSpace),he=a.convert(Q.type),ve=v(Q.internalFormat,Me,he,Q.colorSpace),Ge=Ve(M);V&&je(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,ve,M.width,M.height):je(M)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ge,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const V=i.get(M.depthTexture).__webglTexture,J=Ve(M);if(M.depthTexture.format===fa)je(M)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,V,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,V,0);else if(M.depthTexture.format===pa)je(M)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,V,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Se(R){const M=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=J}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");re(M.__webglFramebuffer,R)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(r.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=t.createRenderbuffer(),ee(M.__webglDepthbuffer[J],R,!1);else{const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Q),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,Q)}}else if(r.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ee(M.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ne)}r.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(R,M,V){const J=i.get(R);M!==void 0&&$(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Se(R)}function Pe(R){const M=R.texture,V=i.get(R),J=i.get(M);R.addEventListener("dispose",A);const ne=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,o.memory.textures++),Q){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let ve=0;ve<M.mipmaps.length;ve++)V.__webglFramebuffer[he][ve]=t.createFramebuffer()}else V.__webglFramebuffer[he]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<M.mipmaps.length;he++)V.__webglFramebuffer[he]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Me)for(let he=0,ve=ne.length;he<ve;he++){const Ge=i.get(ne[he]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&je(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],r.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<ne.length;he++){const ve=ne[he];V.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const Ge=a.convert(ve.format,ve.colorSpace),oe=a.convert(ve.type),xe=v(ve.internalFormat,Ge,oe,ve.colorSpace,R.isXRRenderTarget===!0),De=Ve(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,V.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ee(V.__webglDepthRenderbuffer,R,!0)),r.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){r.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Y(t.TEXTURE_CUBE_MAP,M);for(let he=0;he<6;he++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)$(V.__webglFramebuffer[he][ve],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else $(V.__webglFramebuffer[he],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(M)&&u(t.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Me){for(let he=0,ve=ne.length;he<ve;he++){const Ge=ne[he],oe=i.get(Ge);r.bindTexture(t.TEXTURE_2D,oe.__webglTexture),Y(t.TEXTURE_2D,Ge),$(V.__webglFramebuffer,R,Ge,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Ge)&&u(t.TEXTURE_2D)}r.unbindTexture()}else{let he=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),r.bindTexture(he,J.__webglTexture),Y(he,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)$(V.__webglFramebuffer[ve],R,M,t.COLOR_ATTACHMENT0,he,ve);else $(V.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,he,0);m(M)&&u(he),r.unbindTexture()}R.depthBuffer&&Se(R)}function ke(R){const M=R.textures;for(let V=0,J=M.length;V<J;V++){const ne=M[V];if(m(ne)){const Q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Me=i.get(ne).__webglTexture;r.bindTexture(Q,Me),u(Q),r.unbindTexture()}}}const we=[],D=[];function ar(R){if(R.samples>0){if(je(R)===!1){const M=R.textures,V=R.width,J=R.height;let ne=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(R),he=M.length>1;if(he)for(let ve=0;ve<M.length;ve++)r.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),r.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);r.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Ge=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ge,0)}t.blitFramebuffer(0,0,V,J,0,0,V,J,ne,t.NEAREST),l===!0&&(we.length=0,D.length=0,we.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(we.push(Q),D.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,D)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,we))}if(r.bindFramebuffer(t.READ_FRAMEBUFFER,null),r.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let ve=0;ve<M.length;ve++){r.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Ge=i.get(M[ve]).__webglTexture;r.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Ge,0)}r.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ve(R){return Math.min(n.maxSamples,R.samples)}function je(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Le(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function rt(R,M){const V=R.colorSpace,J=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Hi&&V!==Bi&&(Ye.getTransfer(V)===at?(J!==Ur||ne!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=x,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=P,this.setTextureCube=F,this.rebindTextures=ye,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=ar,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=$,this.useMultisampledRTT=je}function HE(t,e){function r(i,n=Bi){let a;const o=Ye.getTransfer(n);if(i===si)return t.UNSIGNED_BYTE;if(i===Sh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Tg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Eg)return t.BYTE;if(i===wg)return t.SHORT;if(i===Ro)return t.UNSIGNED_SHORT;if(i===xh)return t.INT;if(i===gn)return t.UNSIGNED_INT;if(i===li)return t.FLOAT;if(i===Ao)return t.HALF_FLOAT;if(i===Rg)return t.ALPHA;if(i===Ag)return t.RGB;if(i===Ur)return t.RGBA;if(i===Cg)return t.LUMINANCE;if(i===Pg)return t.LUMINANCE_ALPHA;if(i===fa)return t.DEPTH_COMPONENT;if(i===pa)return t.DEPTH_STENCIL;if(i===Lg)return t.RED;if(i===Mh)return t.RED_INTEGER;if(i===Dg)return t.RG;if(i===Eh)return t.RG_INTEGER;if(i===wh)return t.RGBA_INTEGER;if(i===ol||i===sl||i===ll||i===cl)if(o===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ol)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ll)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ol)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ll)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Th||i===Rh||i===Ah||i===Ch)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Th)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ah)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ch)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ph||i===Lh||i===Dh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Ph||i===Lh)return o===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Dh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ih||i===Uh||i===Nh||i===Oh||i===kh||i===Fh||i===zh||i===Bh||i===Hh||i===Vh||i===Gh||i===Wh||i===Xh||i===jh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ih)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jh)return o===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===qh||i===Yh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ul)return o===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ig||i===Kh||i===Zh||i===Qh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ul)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Kh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:r}}class VE extends Er{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zo extends nr{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GE={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const r=this._hand;if(r)for(const i of e.hand.values())this._getHandJoint(r,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,r,i){let n=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&r.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=r.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=r.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(n=r.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(GE)))}return s!==null&&(s.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,r){if(e.joints[r.jointName]===void 0){const i=new zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[r.jointName]=i,e.add(i)}return e.joints[r.jointName]}}const WE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XE=`
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

}`;class jE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,r,i){if(this.texture===null){const n=new ir,a=e.properties.get(n);a.__webglTexture=r.texture,(r.depthNear!=i.depthNear||r.depthFar!=i.depthFar)&&(this.depthNear=r.depthNear,this.depthFar=r.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const r=e.cameras[0].viewport,i=new qi({vertexShader:WE,fragmentShader:XE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new jr(new Gl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qE extends vn{constructor(e,r){super();const i=this;let n=null,a=1,o=null,s="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,_=null;const S=new jE,m=r.getContextAttributes();let u=null,v=null;const g=[],b=[],C=new Be;let A=null;const T=new Er;T.layers.enable(1),T.viewport=new gt;const L=new Er;L.layers.enable(2),L.viewport=new gt;const Z=[T,L],y=new VE;y.layers.enable(1),y.layers.enable(2);let x=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=g[G];return $===void 0&&($=new Dd,g[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=g[G];return $===void 0&&($=new Dd,g[G]=$),$.getGripSpace()},this.getHand=function(G){let $=g[G];return $===void 0&&($=new Dd,g[G]=$),$.getHandSpace()};function B(G){const $=b.indexOf(G.inputSource);if($===-1)return;const ee=g[$];ee!==void 0&&(ee.update(G.inputSource,G.frame,c||o),ee.dispatchEvent({type:G.type,data:G.inputSource}))}function W(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",q);for(let G=0;G<g.length;G++){const $=b[G];$!==null&&(b[G]=null,g[G].disconnect($))}x=null,z=null,S.reset(),e.setRenderTarget(u),p=null,h=null,f=null,n=null,v=null,le.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(G){if(n=G,n!==null){if(u=e.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",W),n.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await r.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,r,$),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new _n(p.framebufferWidth,p.framebufferHeight,{format:Ur,type:si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ee=null,re=null;m.depth&&(re=m.stencil?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT24,$=m.stencil?pa:fa,ee=m.stencil?da:gn);const Se={colorFormat:r.RGBA8,depthFormat:re,scaleFactor:a};f=new XRWebGLBinding(n,r),h=f.createProjectionLayer(Se),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new _n(h.textureWidth,h.textureHeight,{format:Ur,type:si,depthTexture:new Sv(h.textureWidth,h.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(s),le.setContext(n),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(G){for(let $=0;$<G.removed.length;$++){const ee=G.removed[$],re=b.indexOf(ee);re>=0&&(b[re]=null,g[re].disconnect(ee))}for(let $=0;$<G.added.length;$++){const ee=G.added[$];let re=b.indexOf(ee);if(re===-1){for(let ye=0;ye<g.length;ye++)if(ye>=b.length){b.push(ee),re=ye;break}else if(b[ye]===null){b[ye]=ee,re=ye;break}if(re===-1)break}const Se=g[re];Se&&Se.connect(ee)}}const P=new H,F=new H;function w(G,$,ee){P.setFromMatrixPosition($.matrixWorld),F.setFromMatrixPosition(ee.matrixWorld);const re=P.distanceTo(F),Se=$.projectionMatrix.elements,ye=ee.projectionMatrix.elements,Pe=Se[14]/(Se[10]-1),ke=Se[14]/(Se[10]+1),we=(Se[9]+1)/Se[5],D=(Se[9]-1)/Se[5],ar=(Se[8]-1)/Se[0],Ve=(ye[8]+1)/ye[0],je=Pe*ar,Le=Pe*Ve,rt=re/(-ar+Ve),Ne=rt*-ar;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ne),G.translateZ(rt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Se[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const R=Pe+rt,M=ke+rt,V=je-Ne,J=Le+(re-Ne),ne=we*ke/M*R,Q=D*ke/M*R;G.projectionMatrix.makePerspective(V,J,ne,Q,R,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function O(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(n===null)return;let $=G.near,ee=G.far;S.texture!==null&&(S.depthNear>0&&($=S.depthNear),S.depthFar>0&&(ee=S.depthFar)),y.near=L.near=T.near=$,y.far=L.far=T.far=ee,(x!==y.near||z!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),x=y.near,z=y.far);const re=G.parent,Se=y.cameras;O(y,re);for(let ye=0;ye<Se.length;ye++)O(Se[ye],re);Se.length===2?w(y,T,L):y.projectionMatrix.copy(T.projectionMatrix),I(G,y,re)};function I(G,$,ee){ee===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(ee.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Po*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let Y=null;function se(G,$){if(d=$.getViewerPose(c||o),_=$,d!==null){const ee=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let re=!1;ee.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let ye=0;ye<ee.length;ye++){const Pe=ee[ye];let ke=null;if(p!==null)ke=p.getViewport(Pe);else{const D=f.getViewSubImage(h,Pe);ke=D.viewport,ye===0&&(e.setRenderTargetTextures(v,D.colorTexture,h.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let we=Z[ye];we===void 0&&(we=new Er,we.layers.enable(ye),we.viewport=new gt,Z[ye]=we),we.matrix.fromArray(Pe.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Pe.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(ke.x,ke.y,ke.width,ke.height),ye===0&&(y.matrix.copy(we.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(we)}const Se=n.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const ye=f.getDepthInformation(ee[0]);ye&&ye.isValid&&ye.texture&&S.init(e,ye,n.renderState)}}for(let ee=0;ee<g.length;ee++){const re=b[ee],Se=g[ee];re!==null&&Se!==void 0&&Se.update(re,$,c||o)}Y&&Y(G,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}const le=new fv;le.setAnimationLoop(se),this.setAnimationLoop=function(G){Y=G},this.dispose=function(){}}}const An=new mi,YE=new vt;function KE(t,e){function r(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,ov(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function n(m,u,v,g,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),f(m,u)):u.isMeshPhongMaterial?(a(m,u),d(m,u)):u.isMeshStandardMaterial?(a(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,b)):u.isMeshMatcapMaterial?(a(m,u),_(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),S(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&s(m,u)):u.isPointsMaterial?l(m,u,v,g):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,r(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,r(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,r(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===tr&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,r(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===tr&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,r(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,r(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,r(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),g=v.envMap,b=v.envMapRotation;g&&(m.envMap.value=g,An.copy(b),An.x*=-1,An.y*=-1,An.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),m.envMapRotation.value.setFromMatrix4(YE.makeRotationFromEuler(An)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,r(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,r(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,r(u.map,m.mapTransform))}function s(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=g*.5,u.map&&(m.map.value=u.map,r(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,r(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,r(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,r(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,r(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,r(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,r(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,r(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,r(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,r(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,r(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tr&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,r(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,r(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,r(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,r(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,r(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,r(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,r(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ZE(t,e,r,i){let n={},a={},o=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,g){const b=g.program;i.uniformBlockBinding(v,b)}function c(v,g){let b=n[v.id];b===void 0&&(_(v),b=d(v),n[v.id]=b,v.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(v,C);const A=e.render.frame;a[v.id]!==A&&(h(v),a[v.id]=A)}function d(v){const g=f();v.__bindingPointIndex=g;const b=t.createBuffer(),C=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,b),b}function f(){for(let v=0;v<s;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=n[v.id],b=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,T=b.length;A<T;A++){const L=Array.isArray(b[A])?b[A]:[b[A]];for(let Z=0,y=L.length;Z<y;Z++){const x=L[Z];if(p(x,A,Z,C)===!0){const z=x.__offset,B=Array.isArray(x.value)?x.value:[x.value];let W=0;for(let q=0;q<B.length;q++){const P=B[q],F=S(P);typeof P=="number"||typeof P=="boolean"?(x.__data[0]=P,t.bufferSubData(t.UNIFORM_BUFFER,z+W,x.__data)):P.isMatrix3?(x.__data[0]=P.elements[0],x.__data[1]=P.elements[1],x.__data[2]=P.elements[2],x.__data[3]=0,x.__data[4]=P.elements[3],x.__data[5]=P.elements[4],x.__data[6]=P.elements[5],x.__data[7]=0,x.__data[8]=P.elements[6],x.__data[9]=P.elements[7],x.__data[10]=P.elements[8],x.__data[11]=0):(P.toArray(x.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,x.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,g,b,C){const A=v.value,T=g+"_"+b;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const L=C[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return C[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function _(v){const g=v.uniforms;let b=0;const C=16;for(let T=0,L=g.length;T<L;T++){const Z=Array.isArray(g[T])?g[T]:[g[T]];for(let y=0,x=Z.length;y<x;y++){const z=Z[y],B=Array.isArray(z.value)?z.value:[z.value];for(let W=0,q=B.length;W<q;W++){const P=B[W],F=S(P),w=b%C,O=w%F.boundary,I=w+O;b+=O,I!==0&&C-I<F.storage&&(b+=C-I),z.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=F.storage}}}const A=b%C;return A>0&&(b+=C-A),v.__size=b,v.__cache={},this}function S(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const b=o.indexOf(g.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(n[g.id]),delete n[g.id],delete a[g.id]}function u(){for(const v in n)t.deleteBuffer(n[v]);o=[],n={},a={}}return{bind:l,update:c,dispose:u}}class QE{constructor(e={}){const{canvas:r=kx(),context:i=null,depth:n=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let S=null,m=null;const u=[],v=[];this.domElement=r,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wr,this.toneMapping=zi,this.toneMappingExposure=1;const g=this;let b=!1,C=0,A=0,T=null,L=-1,Z=null;const y=new gt,x=new gt;let z=null;const B=new Ze(0);let W=0,q=r.width,P=r.height,F=1,w=null,O=null;const I=new gt(0,0,q,P),Y=new gt(0,0,q,P);let se=!1;const le=new dv;let G=!1,$=!1;const ee=new vt,re=new vt,Se=new H,ye=new gt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function we(){return T===null?F:1}let D=i;function ar(E,k){return r.getContext(E,k)}try{const E={alpha:!0,depth:n,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in r&&r.setAttribute("data-engine",`three.js r${ah}`),r.addEventListener("webglcontextlost",te,!1),r.addEventListener("webglcontextrestored",de,!1),r.addEventListener("webglcontextcreationerror",ue,!1),D===null){const k="webgl2";if(D=ar(k,E),D===null)throw ar(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,je,Le,rt,Ne,R,M,V,J,ne,Q,Me,he,ve,Ge,oe,xe,De,Ie,ge,We,Oe,Je,U;function fe(){Ve=new rM(D),Ve.init(),Oe=new HE(D,Ve),je=new Kb(D,Ve,e,Oe),Le=new FE(D),je.reverseDepthBuffer&&Le.buffers.depth.setReversed(!0),rt=new aM(D),Ne=new ME,R=new BE(D,Ve,Le,Ne,je,Oe,rt),M=new Qb(g),V=new tM(g),J=new hS(D),Je=new qb(D,J),ne=new iM(D,J,rt,Je),Q=new sM(D,ne,J,rt),Ie=new oM(D,je,R),oe=new Zb(Ne),Me=new bE(g,M,V,Ve,je,Je,oe),he=new KE(g,Ne),ve=new wE,Ge=new LE(Ve),De=new jb(g,M,V,Le,Q,h,l),xe=new OE(g,Q,je),U=new ZE(D,rt,je,Le),ge=new Yb(D,Ve,rt),We=new nM(D,Ve,rt),rt.programs=Me.programs,g.capabilities=je,g.extensions=Ve,g.properties=Ne,g.renderLists=ve,g.shadowMap=xe,g.state=Le,g.info=rt}fe();const K=new qE(g,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(E){E!==void 0&&(F=E,this.setSize(q,P,!1))},this.getSize=function(E){return E.set(q,P)},this.setSize=function(E,k,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,P=k,r.width=Math.floor(E*F),r.height=Math.floor(k*F),X===!0&&(r.style.width=E+"px",r.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(q*F,P*F).floor()},this.setDrawingBufferSize=function(E,k,X){q=E,P=k,F=X,r.width=Math.floor(E*X),r.height=Math.floor(k*X),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,k,X,j){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,k,X,j),Le.viewport(y.copy(I).multiplyScalar(F).round())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,k,X,j){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,k,X,j),Le.scissor(x.copy(Y).multiplyScalar(F).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(E){Le.setScissorTest(se=E)},this.setOpaqueSort=function(E){w=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(E=!0,k=!0,X=!0){let j=0;if(E){let N=!1;if(T!==null){const ae=T.texture.format;N=ae===wh||ae===Eh||ae===Mh}if(N){const ae=T.texture.type,me=ae===si||ae===gn||ae===Ro||ae===da||ae===Sh||ae===bh,_e=De.getClearColor(),be=De.getClearAlpha(),Ce=_e.r,Ae=_e.g,Te=_e.b;me?(p[0]=Ce,p[1]=Ae,p[2]=Te,p[3]=be,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=Ce,_[1]=Ae,_[2]=Te,_[3]=be,D.clearBufferiv(D.COLOR,0,_))}else j|=D.COLOR_BUFFER_BIT}k&&(j|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){r.removeEventListener("webglcontextlost",te,!1),r.removeEventListener("webglcontextrestored",de,!1),r.removeEventListener("webglcontextcreationerror",ue,!1),ve.dispose(),Ge.dispose(),Ne.dispose(),M.dispose(),V.dispose(),Q.dispose(),Je.dispose(),U.dispose(),Me.dispose(),K.dispose(),K.removeEventListener("sessionstart",kd),K.removeEventListener("sessionend",Fd),Zi.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=rt.autoReset,k=xe.enabled,X=xe.autoUpdate,j=xe.needsUpdate,N=xe.type;fe(),rt.autoReset=E,xe.enabled=k,xe.autoUpdate=X,xe.needsUpdate=j,xe.type=N}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function et(E){const k=E.target;k.removeEventListener("dispose",et),_t(k)}function _t(E){Yt(E),Ne.remove(E)}function Yt(E){const k=Ne.get(E).programs;k!==void 0&&(k.forEach(function(X){Me.releaseProgram(X)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,X,j,N,ae){k===null&&(k=Pe);const me=N.isMesh&&N.matrixWorld.determinant()<0,_e=Kv(E,k,X,j,N);Le.setMaterial(j,me);let be=X.index,Ce=1;if(j.wireframe===!0){if(be=ne.getWireframeAttribute(X),be===void 0)return;Ce=2}const Ae=X.drawRange,Te=X.attributes.position;let Qe=Ae.start*Ce,lt=(Ae.start+Ae.count)*Ce;ae!==null&&(Qe=Math.max(Qe,ae.start*Ce),lt=Math.min(lt,(ae.start+ae.count)*Ce)),be!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,be.count)):Te!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,Te.count));const ft=lt-Qe;if(ft<0||ft===1/0)return;Je.setup(N,j,_e,X,be);let St,ot=ge;if(be!==null&&(St=J.get(be),ot=We,ot.setIndex(St)),N.isMesh)j.wireframe===!0?(Le.setLineWidth(j.wireframeLinewidth*we()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(N.isLine){let Ee=j.linewidth;Ee===void 0&&(Ee=1),Le.setLineWidth(Ee*we()),N.isLineSegments?ot.setMode(D.LINES):N.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else N.isPoints?ot.setMode(D.POINTS):N.isSprite&&ot.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ot.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ot.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ee=N._multiDrawStarts,Bt=N._multiDrawCounts,Qi=N._multiDrawCount,wr=be?J.get(be).bytesPerElement:1,Pn=Ne.get(j).currentProgram.getUniforms();for(let or=0;or<Qi;or++)Pn.setValue(D,"_gl_DrawID",or),ot.render(Ee[or]/wr,Bt[or])}else if(N.isInstancedMesh)ot.renderInstances(Qe,ft,N.count);else if(X.isInstancedBufferGeometry){const Ee=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Bt=Math.min(X.instanceCount,Ee);ot.renderInstances(Qe,ft,Bt)}else ot.render(Qe,ft)};function qe(E,k,X){E.transparent===!0&&E.side===oi&&E.forceSinglePass===!1?(E.side=tr,E.needsUpdate=!0,Vo(E,k,X),E.side=ki,E.needsUpdate=!0,Vo(E,k,X),E.side=oi):Vo(E,k,X)}this.compile=function(E,k,X=null){X===null&&(X=E),m=Ge.get(X),m.init(k),v.push(m),X.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==X&&E.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const j=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const _e=ae[me];qe(_e,X,N),j.add(_e)}else qe(ae,X,N),j.add(ae)}),v.pop(),m=null,j},this.compileAsync=function(E,k,X=null){const j=this.compile(E,k,X);return new Promise(N=>{function ae(){if(j.forEach(function(me){Ne.get(me).currentProgram.isReady()&&j.delete(me)}),j.size===0){N(E);return}setTimeout(ae,10)}Ve.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Kt=null;function Yr(E){Kt&&Kt(E)}function kd(){Zi.stop()}function Fd(){Zi.start()}const Zi=new fv;Zi.setAnimationLoop(Yr),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(E){Kt=E,K.setAnimationLoop(E),E===null?Zi.stop():Zi.start()},K.addEventListener("sessionstart",kd),K.addEventListener("sessionend",Fd),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,k,T),m=Ge.get(E,v.length),m.init(k),v.push(m),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),le.setFromProjectionMatrix(re),$=this.localClippingEnabled,G=oe.init(this.clippingPlanes,$),S=ve.get(E,u.length),S.init(),u.push(S),K.enabled===!0&&K.isPresenting===!0){const ae=g.xr.getDepthSensingMesh();ae!==null&&Wl(ae,k,-1/0,g.sortObjects)}Wl(E,k,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(w,O),ke=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ke&&De.addToRenderList(S,E),this.info.render.frame++,G===!0&&oe.beginShadows();const X=m.state.shadowsArray;xe.render(X,E,k),G===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=S.opaque,N=S.transmissive;if(m.setupLights(),k.isArrayCamera){const ae=k.cameras;if(N.length>0)for(let me=0,_e=ae.length;me<_e;me++){const be=ae[me];Bd(j,N,E,be)}ke&&De.render(E);for(let me=0,_e=ae.length;me<_e;me++){const be=ae[me];zd(S,E,be,be.viewport)}}else N.length>0&&Bd(j,N,E,k),ke&&De.render(E),zd(S,E,k);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(g,E,k),Je.resetDefaultState(),L=-1,Z=null,v.pop(),v.length>0?(m=v[v.length-1],G===!0&&oe.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?S=u[u.length-1]:S=null};function Wl(E,k,X,j){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||le.intersectsSprite(E)){j&&ye.setFromMatrixPosition(E.matrixWorld).applyMatrix4(re);const ae=Q.update(E),me=E.material;me.visible&&S.push(E,ae,me,X,ye.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||le.intersectsObject(E))){const ae=Q.update(E),me=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ye.copy(E.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),ye.copy(ae.boundingSphere.center)),ye.applyMatrix4(E.matrixWorld).applyMatrix4(re)),Array.isArray(me)){const _e=ae.groups;for(let be=0,Ce=_e.length;be<Ce;be++){const Ae=_e[be],Te=me[Ae.materialIndex];Te&&Te.visible&&S.push(E,ae,Te,X,ye.z,Ae)}}else me.visible&&S.push(E,ae,me,X,ye.z,null)}}const N=E.children;for(let ae=0,me=N.length;ae<me;ae++)Wl(N[ae],k,X,j)}function zd(E,k,X,j){const N=E.opaque,ae=E.transmissive,me=E.transparent;m.setupLightsView(X),G===!0&&oe.setGlobalState(g.clippingPlanes,X),j&&Le.viewport(y.copy(j)),N.length>0&&Ho(N,k,X),ae.length>0&&Ho(ae,k,X),me.length>0&&Ho(me,k,X),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Bd(E,k,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new _n(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Ao:si,minFilter:mn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const N=m.state.transmissionRenderTarget[j.id],ae=j.viewport||y;N.setSize(ae.z,ae.w);const me=g.getRenderTarget();g.setRenderTarget(N),g.getClearColor(B),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),ke&&De.render(X);const _e=g.toneMapping;g.toneMapping=zi;const be=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),G===!0&&oe.setGlobalState(g.clippingPlanes,j),Ho(E,X,j),R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Ae=0,Te=k.length;Ae<Te;Ae++){const Qe=k[Ae],lt=Qe.object,ft=Qe.geometry,St=Qe.material,ot=Qe.group;if(St.side===oi&&lt.layers.test(j.layers)){const Ee=St.side;St.side=tr,St.needsUpdate=!0,Hd(lt,X,j,ft,St,ot),St.side=Ee,St.needsUpdate=!0,Ce=!0}}Ce===!0&&(R.updateMultisampleRenderTarget(N),R.updateRenderTargetMipmap(N))}g.setRenderTarget(me),g.setClearColor(B,W),be!==void 0&&(j.viewport=be),g.toneMapping=_e}function Ho(E,k,X){const j=k.isScene===!0?k.overrideMaterial:null;for(let N=0,ae=E.length;N<ae;N++){const me=E[N],_e=me.object,be=me.geometry,Ce=j===null?me.material:j,Ae=me.group;_e.layers.test(X.layers)&&Hd(_e,k,X,be,Ce,Ae)}}function Hd(E,k,X,j,N,ae){E.onBeforeRender(g,k,X,j,N,ae),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(g,k,X,j,E,ae),N.transparent===!0&&N.side===oi&&N.forceSinglePass===!1?(N.side=tr,N.needsUpdate=!0,g.renderBufferDirect(X,k,j,N,E,ae),N.side=ki,N.needsUpdate=!0,g.renderBufferDirect(X,k,j,N,E,ae),N.side=oi):g.renderBufferDirect(X,k,j,N,E,ae),E.onAfterRender(g,k,X,j,N,ae)}function Vo(E,k,X){k.isScene!==!0&&(k=Pe);const j=Ne.get(E),N=m.state.lights,ae=m.state.shadowsArray,me=N.state.version,_e=Me.getParameters(E,N.state,ae,k,X),be=Me.getProgramCacheKey(_e);let Ce=j.programs;j.environment=E.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(E.isMeshStandardMaterial?V:M).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",et),Ce=new Map,j.programs=Ce);let Ae=Ce.get(be);if(Ae!==void 0){if(j.currentProgram===Ae&&j.lightsStateVersion===me)return Gd(E,_e),Ae}else _e.uniforms=Me.getUniforms(E),E.onBeforeCompile(_e,g),Ae=Me.acquireProgram(_e,be),Ce.set(be,Ae),j.uniforms=_e.uniforms;const Te=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=oe.uniform),Gd(E,_e),j.needsLights=Qv(E),j.lightsStateVersion=me,j.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),j.currentProgram=Ae,j.uniformsList=null,Ae}function Vd(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Bl.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Gd(E,k){const X=Ne.get(E);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Kv(E,k,X,j,N){k.isScene!==!0&&(k=Pe),R.resetTextureUnits();const ae=k.fog,me=j.isMeshStandardMaterial?k.environment:null,_e=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hi,be=(j.isMeshStandardMaterial?V:M).get(j.envMap||me),Ce=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ae=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Te=!!X.morphAttributes.position,Qe=!!X.morphAttributes.normal,lt=!!X.morphAttributes.color;let ft=zi;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ft=g.toneMapping);const St=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ot=St!==void 0?St.length:0,Ee=Ne.get(j),Bt=m.state.lights;if(G===!0&&($===!0||E!==Z)){const mr=E===Z&&j.id===L;oe.setState(j,E,mr)}let Qi=!1;j.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Bt.state.version||Ee.outputColorSpace!==_e||N.isBatchedMesh&&Ee.batching===!1||!N.isBatchedMesh&&Ee.batching===!0||N.isBatchedMesh&&Ee.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ee.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ee.instancing===!1||!N.isInstancedMesh&&Ee.instancing===!0||N.isSkinnedMesh&&Ee.skinning===!1||!N.isSkinnedMesh&&Ee.skinning===!0||N.isInstancedMesh&&Ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ee.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ee.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ee.instancingMorph===!1&&N.morphTexture!==null||Ee.envMap!==be||j.fog===!0&&Ee.fog!==ae||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==oe.numPlanes||Ee.numIntersection!==oe.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==Ae||Ee.morphTargets!==Te||Ee.morphNormals!==Qe||Ee.morphColors!==lt||Ee.toneMapping!==ft||Ee.morphTargetsCount!==ot)&&(Qi=!0):(Qi=!0,Ee.__version=j.version);let wr=Ee.currentProgram;Qi===!0&&(wr=Vo(j,k,N));let Pn=!1,or=!1,Xl=!1;const pt=wr.getUniforms(),gi=Ee.uniforms;if(Le.useProgram(wr.program)&&(Pn=!0,or=!0,Xl=!0),j.id!==L&&(L=j.id,or=!0),Pn||Z!==E){je.reverseDepthBuffer?(ee.copy(E.projectionMatrix),zx(ee),Bx(ee),pt.setValue(D,"projectionMatrix",ee)):pt.setValue(D,"projectionMatrix",E.projectionMatrix),pt.setValue(D,"viewMatrix",E.matrixWorldInverse);const mr=pt.map.cameraPosition;mr!==void 0&&mr.setValue(D,Se.setFromMatrixPosition(E.matrixWorld)),je.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&pt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,or=!0,Xl=!0)}if(N.isSkinnedMesh){pt.setOptional(D,N,"bindMatrix"),pt.setOptional(D,N,"bindMatrixInverse");const mr=N.skeleton;mr&&(mr.boneTexture===null&&mr.computeBoneTexture(),pt.setValue(D,"boneTexture",mr.boneTexture,R))}N.isBatchedMesh&&(pt.setOptional(D,N,"batchingTexture"),pt.setValue(D,"batchingTexture",N._matricesTexture,R),pt.setOptional(D,N,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",N._indirectTexture,R),pt.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",N._colorsTexture,R));const jl=X.morphAttributes;if((jl.position!==void 0||jl.normal!==void 0||jl.color!==void 0)&&Ie.update(N,X,wr),(or||Ee.receiveShadow!==N.receiveShadow)&&(Ee.receiveShadow=N.receiveShadow,pt.setValue(D,"receiveShadow",N.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(gi.envMap.value=be,gi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(gi.envMapIntensity.value=k.environmentIntensity),or&&(pt.setValue(D,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&Zv(gi,Xl),ae&&j.fog===!0&&he.refreshFogUniforms(gi,ae),he.refreshMaterialUniforms(gi,j,F,P,m.state.transmissionRenderTarget[E.id]),Bl.upload(D,Vd(Ee),gi,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Bl.upload(D,Vd(Ee),gi,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&pt.setValue(D,"center",N.center),pt.setValue(D,"modelViewMatrix",N.modelViewMatrix),pt.setValue(D,"normalMatrix",N.normalMatrix),pt.setValue(D,"modelMatrix",N.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const mr=j.uniformsGroups;for(let ql=0,$v=mr.length;ql<$v;ql++){const Wd=mr[ql];U.update(Wd,wr),U.bind(Wd,wr)}}return wr}function Zv(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Qv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,k,X){Ne.get(E.texture).__webglTexture=k,Ne.get(E.depthTexture).__webglTexture=X;const j=Ne.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const X=Ne.get(E);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,X=0){T=E,C=k,A=X;let j=!0,N=null,ae=!1,me=!1;if(E){const _e=Ne.get(E);if(_e.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(_e.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(_e.__hasExternalTextures)R.rebindTextures(E,Ne.get(E.texture).__webglTexture,Ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ae=E.depthTexture;if(_e.__boundDepthTexture!==Ae){if(Ae!==null&&Ne.has(Ae)&&(E.width!==Ae.image.width||E.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const be=E.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);const Ce=Ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ce[k])?N=Ce[k][X]:N=Ce[k],ae=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?N=Ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Ce)?N=Ce[X]:N=Ce,y.copy(E.viewport),x.copy(E.scissor),z=E.scissorTest}else y.copy(I).multiplyScalar(F).floor(),x.copy(Y).multiplyScalar(F).floor(),z=se;if(Le.bindFramebuffer(D.FRAMEBUFFER,N)&&j&&Le.drawBuffers(E,N),Le.viewport(y),Le.scissor(x),Le.setScissorTest(z),ae){const _e=Ne.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,X)}else if(me){const _e=Ne.get(E.texture),be=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,X||0,be)}L=-1},this.readRenderTargetPixels=function(E,k,X,j,N,ae,me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){Le.bindFramebuffer(D.FRAMEBUFFER,_e);try{const be=E.texture,Ce=be.format,Ae=be.type;if(!je.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-j&&X>=0&&X<=E.height-N&&D.readPixels(k,X,j,N,Oe.convert(Ce),Oe.convert(Ae),ae)}finally{const be=T!==null?Ne.get(T).__webglFramebuffer:null;Le.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,k,X,j,N,ae,me){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){const be=E.texture,Ce=be.format,Ae=be.type;if(!je.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-j&&X>=0&&X<=E.height-N){Le.bindFramebuffer(D.FRAMEBUFFER,_e);const Te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(k,X,j,N,Oe.convert(Ce),Oe.convert(Ae),0);const Qe=T!==null?Ne.get(T).__webglFramebuffer:null;Le.bindFramebuffer(D.FRAMEBUFFER,Qe);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Fx(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Te),D.deleteSync(lt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,X=0){E.isTexture!==!0&&(vl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-X),N=Math.floor(E.image.width*j),ae=Math.floor(E.image.height*j),me=k!==null?k.x:0,_e=k!==null?k.y:0;R.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,X,0,0,me,_e,N,ae),Le.unbindTexture()},this.copyTextureToTexture=function(E,k,X=null,j=null,N=0){E.isTexture!==!0&&(vl("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],k=arguments[2],N=arguments[3]||0,X=null);let ae,me,_e,be,Ce,Ae;X!==null?(ae=X.max.x-X.min.x,me=X.max.y-X.min.y,_e=X.min.x,be=X.min.y):(ae=E.image.width,me=E.image.height,_e=0,be=0),j!==null?(Ce=j.x,Ae=j.y):(Ce=0,Ae=0);const Te=Oe.convert(k.format),Qe=Oe.convert(k.type);R.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const lt=D.getParameter(D.UNPACK_ROW_LENGTH),ft=D.getParameter(D.UNPACK_IMAGE_HEIGHT),St=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),Ee=D.getParameter(D.UNPACK_SKIP_IMAGES),Bt=E.isCompressedTexture?E.mipmaps[N]:E.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Bt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,be),E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Ce,Ae,ae,me,Te,Qe,Bt.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Ce,Ae,Bt.width,Bt.height,Te,Bt.data):D.texSubImage2D(D.TEXTURE_2D,N,Ce,Ae,ae,me,Te,Qe,Bt),D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft),D.pixelStorei(D.UNPACK_SKIP_PIXELS,St),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee),N===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(E,k,X=null,j=null,N=0){E.isTexture!==!0&&(vl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,E=arguments[2],k=arguments[3],N=arguments[4]||0);let ae,me,_e,be,Ce,Ae,Te,Qe,lt;const ft=E.isCompressedTexture?E.mipmaps[N]:E.image;X!==null?(ae=X.max.x-X.min.x,me=X.max.y-X.min.y,_e=X.max.z-X.min.z,be=X.min.x,Ce=X.min.y,Ae=X.min.z):(ae=ft.width,me=ft.height,_e=ft.depth,be=0,Ce=0,Ae=0),j!==null?(Te=j.x,Qe=j.y,lt=j.z):(Te=0,Qe=0,lt=0);const St=Oe.convert(k.format),ot=Oe.convert(k.type);let Ee;if(k.isData3DTexture)R.setTexture3D(k,0),Ee=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Ee=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Bt=D.getParameter(D.UNPACK_ROW_LENGTH),Qi=D.getParameter(D.UNPACK_IMAGE_HEIGHT),wr=D.getParameter(D.UNPACK_SKIP_PIXELS),Pn=D.getParameter(D.UNPACK_SKIP_ROWS),or=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ce),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ae),E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ee,N,Te,Qe,lt,ae,me,_e,St,ot,ft.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,N,Te,Qe,lt,ae,me,_e,St,ft.data):D.texSubImage3D(Ee,N,Te,Qe,lt,ae,me,_e,St,ot,ft),D.pixelStorei(D.UNPACK_ROW_LENGTH,Bt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qi),D.pixelStorei(D.UNPACK_SKIP_PIXELS,wr),D.pixelStorei(D.UNPACK_SKIP_ROWS,Pn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,or),N===0&&k.generateMipmaps&&D.generateMipmap(Ee),Le.unbindTexture()},this.initRenderTarget=function(E){Ne.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,Le.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const r=this.getContext();r.drawingBufferColorSpace=e===$h?"display-p3":"srgb",r.unpackColorSpace=Ye.workingColorSpace===hl?"display-p3":"srgb"}}class $E extends nr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,r){return super.copy(e,r),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const r=super.toJSON(e);return this.fog!==null&&(r.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(r.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(r.object.backgroundIntensity=this.backgroundIntensity),r.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(r.object.environmentIntensity=this.environmentIntensity),r.object.environmentRotation=this.environmentRotation.toArray(),r}}class JE extends nr{constructor(e,r=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=r}dispose(){}copy(e,r){return super.copy(e,r),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const r=super.toJSON(e);return r.object.color=this.color.getHex(),r.object.intensity=this.intensity,this.groundColor!==void 0&&(r.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(r.object.distance=this.distance),this.angle!==void 0&&(r.object.angle=this.angle),this.decay!==void 0&&(r.object.decay=this.decay),this.penumbra!==void 0&&(r.object.penumbra=this.penumbra),this.shadow!==void 0&&(r.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(r.object.target=this.target.uuid),r}}class ew extends JE{constructor(e,r){super(e,r),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gv=new vt;class tw{constructor(e,r,i=0,n=1/0){this.ray=new ud(e,r),this.near=i,this.far=n,this.camera=null,this.layers=new hd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,r){this.ray.set(e,r)}setFromCamera(e,r){r.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(r.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(r).sub(this.ray.origin).normalize(),this.camera=r):r.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(r.near+r.far)/(r.near-r.far)).unproject(r),this.ray.direction.set(0,0,-1).transformDirection(r.matrixWorld),this.camera=r):console.error("THREE.Raycaster: Unsupported camera type: "+r.type)}setFromXRController(e){return Gv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gv),this}intersectObject(e,r=!0,i=[]){return Id(e,this,i,r),i.sort(Wv),i}intersectObjects(e,r=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Id(e[n],this,i,r);return i.sort(Wv),i}}function Wv(t,e){return t.distance-e.distance}function Id(t,e,r,i){let n=!0;if(t.layers.test(e.layers)&&t.raycast(e,r)===!1&&(n=!1),n===!0&&i===!0){const a=t.children;for(let o=0,s=a.length;o<s;o++)Id(a[o],e,r,!0)}}class Bo{constructor(e=1,r=0,i=0){return this.radius=e,this.phi=r,this.theta=i,this}set(e,r,i){return this.radius=e,this.phi=r,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,r,i){return this.radius=Math.sqrt(e*e+r*r+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ft(r/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rw extends vn{constructor(e,r=null){super(),this.object=e,this.domElement=r,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ah}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ah);const Xv={type:"change"},Ud={type:"start"},jv={type:"end"},Vl=new ud,qv=new Ki,iw=Math.cos(70*_a.DEG2RAD),Tt=new H,rr=2*Math.PI,$e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nd=1e-6;class nw extends rw{constructor(e,r=null){super(e,r),this.state=$e.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oa.ROTATE,MIDDLE:oa.DOLLY,RIGHT:oa.PAN},this.touches={ONE:sa.ROTATE,TWO:sa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new yn,this._lastTargetPosition=new H,this._quat=new yn().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bo,this._sphericalDelta=new Bo,this._scale=1,this._panOffset=new H,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new H,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ow.bind(this),this._onPointerDown=aw.bind(this),this._onPointerUp=sw.bind(this),this._onContextMenu=pw.bind(this),this._onMouseWheel=uw.bind(this),this._onKeyDown=hw.bind(this),this._onTouchStart=dw.bind(this),this._onTouchMove=fw.bind(this),this._onMouseDown=lw.bind(this),this._onMouseMove=cw.bind(this),this._interceptControlDown=mw.bind(this),this._interceptControlUp=gw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xv),this.update(),this.state=$e.NONE}update(e=null){const r=this.object.position;Tt.copy(r).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===$e.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=rr:i>Math.PI&&(i-=rr),n<-Math.PI?n+=rr:n>Math.PI&&(n-=rr),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=o!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),r.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const s=Tt.length();o=this._clampDistance(s*this._scale);const l=s-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const s=new H(this._mouse.x,this._mouse.y,0);s.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(s),this.object.updateMatrixWorld(),o=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vl.origin.copy(this.object.position),Vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vl.direction))<iw?this.object.lookAt(this.target):(qv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vl.intersectPlane(qv,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Nd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nd||this._lastTargetPosition.distanceToSquared(this.target)>Nd?(this.dispatchEvent(Xv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?rr/60*this.autoRotateSpeed*e:rr/60/60*this.autoRotateSpeed}_getZoomScale(e){const r=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*r)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,r){Tt.setFromMatrixColumn(r,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,r){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(r,1):(Tt.setFromMatrixColumn(r,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,r){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;Tt.copy(n).sub(this.target);let a=Tt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*r*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(r*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,r){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,a=r-i.top,o=i.width,s=i.height;this._mouse.x=n/o*2-1,this._mouse.y=-(a/s)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const r=this.domElement;this._rotateLeft(rr*this._rotateDelta.x/r.clientHeight),this._rotateUp(rr*this._rotateDelta.y/r.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let r=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(rr*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),r=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-rr*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),r=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(rr*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),r=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-rr*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),r=!0;break}r&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),n=.5*(e.pageY+r.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),n=.5*(e.pageY+r.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const r=this._getSecondPointerPosition(e),i=e.pageX-r.x,n=e.pageY-r.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const r=this.domElement;this._rotateLeft(rr*this._rotateDelta.x/r.clientHeight),this._rotateUp(rr*this._rotateDelta.y/r.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),i=.5*(e.pageX+r.x),n=.5*(e.pageY+r.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const r=this._getSecondPointerPosition(e),i=e.pageX-r.x,n=e.pageY-r.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+r.x)*.5,s=(e.pageY+r.y)*.5;this._updateZoomParameters(o,s)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let r=0;r<this._pointers.length;r++)if(this._pointers[r]==e.pointerId){this._pointers.splice(r,1);return}}_isTrackingPointer(e){for(let r=0;r<this._pointers.length;r++)if(this._pointers[r]==e.pointerId)return!0;return!1}_trackPointer(e){let r=this._pointerPositions[e.pointerId];r===void 0&&(r=new Be,this._pointerPositions[e.pointerId]=r),r.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const r=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[r]}_customWheelEvent(e){const r=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(r){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function aw(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function ow(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function sw(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jv),this.state=$e.NONE;break;case 1:const e=this._pointers[0],r=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:r.x,pageY:r.y});break}}function lw(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case oa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=$e.DOLLY;break;case oa.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=$e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=$e.ROTATE}break;case oa.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=$e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=$e.PAN}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(Ud)}function cw(t){switch(this.state){case $e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case $e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case $e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function uw(t){this.enabled===!1||this.enableZoom===!1||this.state!==$e.NONE||(t.preventDefault(),this.dispatchEvent(Ud),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(jv))}function hw(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function dw(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case sa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=$e.TOUCH_ROTATE;break;case sa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=$e.TOUCH_PAN;break;default:this.state=$e.NONE}break;case 2:switch(this.touches.TWO){case sa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=$e.TOUCH_DOLLY_PAN;break;case sa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=$e.TOUCH_DOLLY_ROTATE;break;default:this.state=$e.NONE}break;default:this.state=$e.NONE}this.state!==$e.NONE&&this.dispatchEvent(Ud)}function fw(t){switch(this._trackPointer(t),this.state){case $e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case $e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case $e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case $e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=$e.NONE}}function pw(t){this.enabled!==!1&&t.preventDefault()}function mw(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gw(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const qt={ORBIT:"ORBIT",COLOR_PICKER:"COLOR_PICKER",SIDE_SELECTION:"SIDE_SELECTION"},vw=Re.forwardRef(({cubeColors:t,currentSide:e,setCubeColors:r,setCurrentSide:i},n)=>{const a=Re.useRef(null),[o,s]=Re.useState(null),[l,c]=Re.useState(!1),[d,f]=Re.useState(qt.ORBIT);console.log("Viewer with current side: ",e);const h=Re.useRef(),p=Re.useRef(),_=Re.useRef(),S=Re.useRef(),m=Re.useRef(),u=Re.useRef(),v=Re.useRef([]),g={ORBIT:"\u{1F91A}",COLOR_PICKER:"\u27A1\uFE0F",SIDE_SELECTION:"\u2935\uFE0F"};function b(P,F,w,O,I,Y,se){let le=[];F.forEach((G,$)=>{const ee=P[G];let re=I==="row"?[...ee[Y]]:ee.map(Se=>Se[Y]);se[$]&&(re=re.reverse()),le.push(re)}),O==="clockwise"?le.unshift(le.pop()):le.push(le.shift()),F.forEach((G,$)=>{const ee=P[G];let re=le[$];se[$]&&(re=re.reverse()),I==="row"?ee[Y]=re:ee.forEach((Se,ye)=>{Se[Y]=re[ye]})})}const C=Re.useCallback((P,F)=>{const w=t.map(O=>O.map(I=>[...I]));switch(w[P]=T(w[P],F),P){case 0:b(w,[2,4,3,5],P,F,"col",2,[!1,!1,!1,!0]);break;case 1:b(w,[2,5,3,4],P,F,"col",0,[!1,!1,!1,!0]);break;case 2:b(w,[5,0,4,1],P,F,"row",0,[!1,!1,!1,!1]);break;case 3:b(w,[4,0,5,1],P,F,"row",2,[!1,!1,!1,!1]);break;case 4:b(w,[2,1,3,0],P,F,"row",2,[!1,!1,!1,!1]);break;case 5:b(w,[2,0,3,1],P,F,"row",0,[!0,!1,!0,!1]);break}r(w)},[t,r]),A=Re.useCallback((P,F)=>{if(!h.current)return;let w,O;switch(P){case 0:w="x",O=1;break;case 1:w="x",O=-1;break;case 2:w="y",O=1;break;case 3:w="y",O=-1;break;case 4:w="z",O=1;break;case 5:w="z",O=-1;break;default:return}const I=new zo;v.current.forEach(ee=>{Math.round(ee.position[w])===O&&I.add(ee)}),h.current.add(I);let Y=(F==="clockwise"?-1:1)*(Math.PI/2);const se=new H(w==="x"?1:0,w==="y"?1:0,w==="z"?1:0);(P===1||P===3||P===5)&&(Y*=-1);let le=null;const G=500,$=ee=>{var ye,Pe,ke;le||(le=ee);const re=ee-le,Se=Math.min(re/G,1);I.rotation[w]=Y*Se,(ye=_.current)==null||ye.render(h.current,p.current),Se<1?requestAnimationFrame($):(I.rotation[w]=Y,[...I.children].forEach(we=>{var D;we.position.applyAxisAngle(se,Y),we.position.x=Math.round(we.position.x),we.position.y=Math.round(we.position.y),we.position.z=Math.round(we.position.z),we.rotation.set(0,0,0),I.remove(we),(D=h.current)==null||D.add(we)}),(Pe=h.current)==null||Pe.remove(I),C(P,F),(ke=_.current)==null||ke.render(h.current,p.current))};requestAnimationFrame($)},[h,v,C]);Re.useImperativeHandle(n,()=>({rotateSide:A}));function T(P,F){const w=P.length;let O=Array.from({length:w},()=>Array(w).fill(""));for(let I=0;I<w;I++)for(let Y=0;Y<w;Y++)O[I][Y]=P[Y][I];if(F==="clockwise")for(let I=0;I<w;I++)O[I].reverse();else for(let I=0;I<w;I++)for(let Y=0,se=w-1;Y<se;Y++,se--){const le=O[Y][I];O[Y][I]=O[se][I],O[se][I]=le}return O}const L=Re.useCallback(P=>{if(p.current&&S.current){const F=p.current,w=S.current,O=1e3,I=F.position.clone(),Y=Math.sqrt(3*Math.pow(2,2)),se=_a.degToRad(F.fov),le=Y/2/Math.sin(se/2)+5,G=[new H(le,0,0),new H(-le,0,0),new H(0,le,0),new H(0,-le,0),new H(0,0,le),new H(0,0,-le)][P],$=performance.now(),ee=new Bo().setFromVector3(I),re=new Bo().setFromVector3(G);Math.abs(re.theta-ee.theta)>Math.PI&&(re.theta>ee.theta?re.theta-=2*Math.PI:re.theta+=2*Math.PI);const Se=ye=>{const Pe=ye-$,ke=Math.min(Pe/O,1),we=new Bo(_a.lerp(ee.radius,re.radius,ke),_a.lerp(ee.phi,re.phi,ke),_a.lerp(ee.theta,re.theta,ke));F.position.setFromSpherical(we),F.lookAt(new H(0,0,0)),w.update(),ke<1?requestAnimationFrame(Se):(F.position.copy(G),w.update())};requestAnimationFrame(Se)}},[]),Z=Re.useCallback(P=>{if(d===qt.ORBIT)return;const F=_.current,w=p.current,O=m.current,I=u.current;if(!F||!w||!O||!I)return;const Y=F.domElement.getBoundingClientRect();I.x=(P.clientX-Y.left)/Y.width*2-1,I.y=-((P.clientY-Y.top)/Y.height)*2+1,O.setFromCamera(I,w);const se=O.intersectObjects(v.current);if(se.length>0){const le=se[0],G=le.object,$=le.face.materialIndex,ee=[0,1,2,3,4,5][$],re=Math.round(G.position.x),Se=Math.round(G.position.y),ye=Math.round(G.position.z),{row:Pe,col:ke}=q(ee,re,Se,ye);d===qt.COLOR_PICKER?(s({faceIndex:ee,row:Pe,col:ke}),c(!0)):d===qt.SIDE_SELECTION&&(i(ee),L(ee),f(qt.ORBIT))}},[d,s,c,i,L]),y=Re.useCallback(()=>{const P=_.current,F=p.current,w=a.current;P&&F&&w&&(P.setSize(w.clientWidth,w.clientHeight),F.aspect=w.clientWidth/w.clientHeight,F.updateProjectionMatrix())},[]);Re.useEffect(()=>(window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)}),[y]),Re.useEffect(()=>{const P=_.current;if(!P)return;const F=P.domElement;return F.addEventListener("click",Z),()=>{F.removeEventListener("click",Z)}},[Z]),Re.useEffect(()=>{if(!h.current){const P=a.current,F=new $E,w=new Er(45,P.clientWidth/P.clientHeight,.1,1e3),O=Math.sqrt(3*Math.pow(2,2)),I=_a.degToRad(w.fov),Y=O/2/Math.sin(I/2);w.position.set(0,0,Y+100);const se=new QE({antialias:!0});se.setSize(P.clientWidth,P.clientHeight),P.appendChild(se.domElement);const le=new ew(16777215,.8);F.add(le);const G=[],$=.98;for(let Se=-1;Se<=1;Se++)for(let ye=-1;ye<=1;ye++)for(let Pe=-1;Pe<=1;Pe++){const ke=new Oa($,$,$),we=B(Se,ye,Pe),D=new jr(ke,we);D.position.set(Se,ye,Pe),F.add(D),G.push(D)}v.current=G;const ee=new nw(w,se.domElement);ee.target.set(0,0,0),ee.update(),ee.enableRotate=d===qt.ORBIT,ee.enableZoom=d===qt.ORBIT,ee.enablePan=d===qt.ORBIT,h.current=F,p.current=w,_.current=se,S.current=ee,m.current=new tw,u.current=new Be;const re=()=>{requestAnimationFrame(re),ee.update(),se.render(F,w)};return re(),()=>{P.removeChild(se.domElement),se.dispose(),h.current=void 0}}},[]),Re.useEffect(()=>{v.current&&v.current.forEach(P=>{const F=Math.round(P.position.x),w=Math.round(P.position.y),O=Math.round(P.position.z),I=B(F,w,O);P.material=I})},[t]),Re.useEffect(()=>{L(e)},[e,L]),Re.useEffect(()=>{if(S.current){const P=S.current;P.enableRotate=d===qt.ORBIT,P.enableZoom=d===qt.ORBIT,P.enablePan=d===qt.ORBIT}d!==qt.COLOR_PICKER&&(c(!1),s(null))},[d]);const x=P=>{if(o){const{faceIndex:F,row:w,col:O}=o,I=t.map((Y,se)=>se===F?Y.map((le,G)=>G===w?le.map(($,ee)=>ee===O?P:$):le):Y);r(I),s(null),c(!1),f(qt.ORBIT)}},z=()=>{c(!1),s(null)};function B(P,F,w){const O=[];return[{axis:"x",value:1,faceIndex:0},{axis:"x",value:-1,faceIndex:1},{axis:"y",value:1,faceIndex:2},{axis:"y",value:-1,faceIndex:3},{axis:"z",value:1,faceIndex:4},{axis:"z",value:-1,faceIndex:5}].forEach((I,Y)=>{I.axis==="x"&&P===I.value||I.axis==="y"&&F===I.value||I.axis==="z"&&w===I.value?O[Y]=W(I.faceIndex,P,F,w):O[Y]=new Rl({visible:!1})}),O}function W(P,F,w,O){let I,Y;switch(P){case 0:I=1-w,Y=1-O;break;case 1:I=1-w,Y=O+1;break;case 2:I=O+1,Y=F+1;break;case 3:I=2-(O+1),Y=F+1;break;case 4:I=1-w,Y=F+1;break;case 5:I=1-w,Y=1-F;break;default:I=0,Y=0}I=Math.max(0,Math.min(2,I)),Y=Math.max(0,Math.min(2,Y));const se=t[P][I][Y];return new Rl({color:se})}function q(P,F,w,O){let I,Y;switch(P){case 0:I=1-w,Y=1-O;break;case 1:I=1-w,Y=O+1;break;case 2:I=O+1,Y=F+1;break;case 3:I=2-(O+1),Y=F+1;break;case 4:I=1-w,Y=F+1;break;case 5:I=1-w,Y=1-F;break;default:I=0,Y=0}return{row:I,col:Y}}return Ue.jsxs("div",{style:{position:"relative"},children:[Ue.jsx("div",{style:{position:"absolute",top:"10px",left:"10px",zIndex:100},children:Object.entries(qt).map(([,P])=>Ue.jsx("button",{onClick:()=>f(P),style:{marginRight:"10px",padding:"10px",fontSize:"18px",backgroundColor:d===P?"#ddd":"#fff",border:"1px solid #ccc",cursor:"pointer"},children:g[P]},P))}),Ue.jsx("div",{ref:a,style:{width:"100%",maxWidth:"640px",height:"500px"}}),l&&d===qt.COLOR_PICKER&&Ue.jsx(gg,{onSelectColor:x,onClose:z})]})});function Yv(){const t="grey",e={h:0,s:0,v:50},r=3,i=3,n=Array.from({length:r},()=>Array(i).fill(t)),a=Array.from({length:r},()=>Array(i).fill({...e})),o=Array.from({length:r},()=>Array(i).fill(""));return{colors:n,hsvValues:a,subImages:o}}const Od=[0,5,1,4,2,3],_w=()=>{let t=[];for(let b=0;b<6;b++){t[b]=[];for(let C=0;C<3;C++){t[b][C]=[];for(let A=0;A<3;A++)t[b][C][A]="grey"}}const e=Re.useRef(null),[r,i]=Re.useState(t),[n,a]=Re.useState(0),[o,s]=Re.useState(0),[l,c]=Re.useState(Yv()),[d,f]=Re.useState(!0),[h]=Re.useState(!0);function p(b){c(b),i(C=>{const A=[...C];return A[n]=b.colors,A})}const _=b=>{p(b),f(!1)},S=b=>{p(b)},m=b=>{i(C=>{const A=[...C];return A[n]=l.colors,A}),a(b);for(let C=0;C<6;C++)if(Od[C]===b){s(C);break}c(Yv()),f(!0)},u=()=>{const b=(o+5)%6;m(Od[b])},v=()=>{const b=(o+1)%6;m(Od[b])},g=()=>{f(!0)};return Ue.jsxs("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[Ue.jsxs("div",{style:{flex:"1 1 300px"},children:[Ue.jsx(Dy,{currentSide:n,detectionEnabled:d,overlayData:l,onOverlayDataCaptured:_,onOverlayDataUpdated:S}),Ue.jsxs("div",{style:{marginTop:"10px"},children:[Ue.jsxs("p",{children:["Side ",n+1," captured. What would you like to do?"]}),Ue.jsx("button",{onClick:u,children:"Previous Side"}),Ue.jsx("button",{onClick:g,children:"Retake"}),Ue.jsx("button",{onClick:v,children:"Next Side"})]}),Ue.jsx("div",{style:{position:"relative"},children:Ue.jsx("div",{children:[0,1,2,3,4,5].map(b=>Ue.jsxs("div",{children:[Ue.jsxs("button",{onClick:()=>{var C;return(C=e.current)==null?void 0:C.rotateSide(b,"clockwise")},children:[b," C"]}),Ue.jsxs("button",{onClick:()=>{var C;return(C=e.current)==null?void 0:C.rotateSide(b,"counterclockwise")},children:[b," CC"]})]},b))})})]}),Ue.jsx("div",{style:{flex:"1 1 300px"},children:Ue.jsx(vw,{ref:e,cubeColors:r,setCubeColors:i,currentSide:n,setCurrentSide:m})}),h&&l&&Ue.jsxs("div",{style:{marginTop:"20px"},children:[Ue.jsx("h3",{children:"Debug Pane - Sub Images Used in Color Recognition"}),Ue.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:l.subImages.map((b,C)=>b.map((A,T)=>Ue.jsxs("div",{children:[Ue.jsx("img",{src:A,alt:`Grid ${C}, ${T}`,style:{width:"100%"}}),Ue.jsxs("p",{children:["Color: ",l.colors[C][T]]})]},`${C}-${T}`)))})]})]})};function yw(){const[t,e]=Re.useState(!1);return Ue.jsxs(Ue.Fragment,{children:[Ue.jsxs("div",{children:[Ue.jsx("p",{children:"J\xF8rgens Own Rubik's Cube Solver"}),Ue.jsx("button",{onClick:()=>e(r=>!r),style:{marginTop:"10px"},children:t?"Close Rubik's Cube Recognizer":"Open Rubik's Cube Recognizer"})]}),!t&&Ue.jsx("img",{src:"jorcs.webp",alt:"J\xF8rgens Own Rubik's Cube Solver",height:"500"}),t&&Ue.jsx("div",{style:{marginTop:"20px"},children:Ue.jsx(_w,{})})]})}fg(document.getElementById("root")).render(Ue.jsx(Re.StrictMode,{children:Ue.jsx(yw,{})}));
