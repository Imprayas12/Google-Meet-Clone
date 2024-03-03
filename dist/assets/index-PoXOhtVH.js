(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var di={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},jc=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,m=l&63;a||(m=64,o||(p=64)),r.push(n[u],n[h],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new Vc;const p=i<<2|c>>4;if(r.push(p),l!==64){const m=c<<4&240|l>>2;if(r.push(m),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Vc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wc=function(t){const e=Fo(t);return $o.encodeByteArray(e,!0)},sr=function(t){return Wc(t).replace(/\./g,"")},Bo=function(t){try{return $o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=()=>Kc().__FIREBASE_DEFAULTS__,Gc=()=>{if(typeof process>"u"||typeof di>"u")return;const t=di.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bo(t[1]);return e&&JSON.parse(e)},vr=()=>{try{return zc()||Gc()||qc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ho=t=>{var e,n;return(n=(e=vr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},km=t=>{const e=Ho(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jo=()=>{var t;return(t=vr())===null||t===void 0?void 0:t.config},Vo=t=>{var e;return(e=vr())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[sr(JSON.stringify(n)),sr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(me())}function Xc(){var t;const e=(t=vr())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function el(){const t=me();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lm(){return!Xc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tl(){try{return typeof indexedDB=="object"}catch{return!1}}function nl(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="FirebaseError";class vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rl,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kn.prototype.create)}}class kn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?sl(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new vt(s,c,r)}}function sl(t,e){return t.replace(il,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const il=/\{\$([^}]+)}/g;function ol(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(hi(i)&&hi(o)){if(!ir(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function hi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ln(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function al(t,e){const n=new cl(t,e);return n.subscribe.bind(n)}class cl{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ll(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Br),s.error===void 0&&(s.error=Br),s.complete===void 0&&(s.complete=Br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ll(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Br(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class Xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dl(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fl(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fl(t){return t===St?void 0:t}function dl(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ul(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const pl={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},gl=te.INFO,ml={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},_l=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ml[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wo{constructor(e){this.name=e,this._logLevel=gl,this._logHandler=_l,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const vl=(t,e)=>e.some(n=>t instanceof n);let pi,gi;function yl(){return pi||(pi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bl(){return gi||(gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ko=new WeakMap,is=new WeakMap,zo=new WeakMap,Hr=new WeakMap,Os=new WeakMap;function El(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ko.set(n,t)}).catch(()=>{}),Os.set(e,t),e}function wl(t){if(is.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});is.set(t,e)}let os={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return is.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Il(t){os=t(os)}function Sl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jr(this),e,...n);return zo.set(r,e.sort?e.sort():[e]),dt(r)}:bl().includes(t)?function(...e){return t.apply(jr(this),e),dt(Ko.get(this))}:function(...e){return dt(t.apply(jr(this),e))}}function Tl(t){return typeof t=="function"?Sl(t):(t instanceof IDBTransaction&&wl(t),vl(t,yl())?new Proxy(t,os):t)}function dt(t){if(t instanceof IDBRequest)return El(t);if(Hr.has(t))return Hr.get(t);const e=Tl(t);return e!==t&&(Hr.set(t,e),Os.set(e,t)),e}const jr=t=>Os.get(t);function Rl(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=dt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(dt(o.result),a.oldVersion,a.newVersion,dt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Cl=["get","getKey","getAll","getAllKeys","count"],Pl=["put","add","delete","clear"],Vr=new Map;function mi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vr.get(e))return Vr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Pl.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Cl.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Vr.set(e,i),i}Il(t=>({...t,get:(e,n,r)=>mi(e,n)||t.get(e,n,r),has:(e,n)=>!!mi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ol(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ol(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const as="@firebase/app",_i="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Wo("@firebase/app"),kl="@firebase/app-compat",Nl="@firebase/analytics-compat",Ll="@firebase/analytics",Dl="@firebase/app-check-compat",Ml="@firebase/app-check",xl="@firebase/auth",Ul="@firebase/auth-compat",Fl="@firebase/database",$l="@firebase/database-compat",Bl="@firebase/functions",Hl="@firebase/functions-compat",jl="@firebase/installations",Vl="@firebase/installations-compat",Wl="@firebase/messaging",Kl="@firebase/messaging-compat",zl="@firebase/performance",Gl="@firebase/performance-compat",ql="@firebase/remote-config",Jl="@firebase/remote-config-compat",Yl="@firebase/storage",Xl="@firebase/storage-compat",Ql="@firebase/firestore",Zl="@firebase/firestore-compat",eu="firebase",tu="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="[DEFAULT]",nu={[as]:"fire-core",[kl]:"fire-core-compat",[Ll]:"fire-analytics",[Nl]:"fire-analytics-compat",[Ml]:"fire-app-check",[Dl]:"fire-app-check-compat",[xl]:"fire-auth",[Ul]:"fire-auth-compat",[Fl]:"fire-rtdb",[$l]:"fire-rtdb-compat",[Bl]:"fire-fn",[Hl]:"fire-fn-compat",[jl]:"fire-iid",[Vl]:"fire-iid-compat",[Wl]:"fire-fcm",[Kl]:"fire-fcm-compat",[zl]:"fire-perf",[Gl]:"fire-perf-compat",[ql]:"fire-rc",[Jl]:"fire-rc-compat",[Yl]:"fire-gcs",[Xl]:"fire-gcs-compat",[Ql]:"fire-fst",[Zl]:"fire-fst-compat","fire-js":"fire-js",[eu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Map,ls=new Map;function ru(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bn(t){const e=t.name;if(ls.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;ls.set(e,t);for(const n of or.values())ru(n,t);return!0}function Go(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ht=new kn("app","Firebase",su);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=tu;function qo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ht.create("bad-app-name",{appName:String(s)});if(n||(n=jo()),!n)throw ht.create("no-options");const i=or.get(s);if(i){if(ir(n,i.options)&&ir(r,i.config))return i;throw ht.create("duplicate-app",{appName:s})}const o=new hl(s);for(const a of ls.values())o.addComponent(a);const c=new iu(n,r,o);return or.set(s,c),c}function ou(t=cs){const e=or.get(t);if(!e&&t===cs&&jo())return qo();if(!e)throw ht.create("no-app",{appName:t});return e}function Wt(t,e,n){var r;let s=(r=nu[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(c.join(" "));return}bn(new Xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au="firebase-heartbeat-database",cu=1,En="firebase-heartbeat-store";let Wr=null;function Jo(){return Wr||(Wr=Rl(au,cu,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(En)}catch(n){console.warn(n)}}}}).catch(t=>{throw ht.create("idb-open",{originalErrorMessage:t.message})})),Wr}async function lu(t){try{const n=(await Jo()).transaction(En),r=await n.objectStore(En).get(Yo(t));return await n.done,r}catch(e){if(e instanceof vt)Ot.warn(e.message);else{const n=ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}async function vi(t,e){try{const r=(await Jo()).transaction(En,"readwrite");await r.objectStore(En).put(e,Yo(t)),await r.done}catch(n){if(n instanceof vt)Ot.warn(n.message);else{const r=ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(r.message)}}}function Yo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=1024,fu=30*24*60*60*1e3;class du{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pu(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=fu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yi(),{heartbeatsToSend:r,unsentEntries:s}=hu(this._heartbeatsCache.heartbeats),i=sr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function yi(){return new Date().toISOString().substring(0,10)}function hu(t,e=uu){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),bi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),bi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pu{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tl()?nl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lu(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function bi(t){return sr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t){bn(new Xt("platform-logger",e=>new Al(e),"PRIVATE")),bn(new Xt("heartbeat",e=>new du(e),"PRIVATE")),Wt(as,_i,t),Wt(as,_i,"esm2017"),Wt("fire-js","")}gu("");var mu="firebase",_u="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(mu,_u,"app");function ks(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Xo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vu=Xo,Qo=new kn("auth","Firebase",Xo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Wo("@firebase/auth");function yu(t,...e){ar.logLevel<=te.WARN&&ar.warn(`Auth (${Ln}): ${t}`,...e)}function qn(t,...e){ar.logLevel<=te.ERROR&&ar.error(`Auth (${Ln}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,...e){throw Ns(t,...e)}function He(t,...e){return Ns(t,...e)}function bu(t,e,n){const r=Object.assign(Object.assign({},vu()),{[e]:n});return new kn("auth","Firebase",r).create(e,{appName:t.name})}function Ns(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qo.create(t,...e)}function F(t,e,...n){if(!t)throw Ns(e,...n)}function qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qn(e),new Error(e)}function Xe(t,e){t||qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Eu(){return Ei()==="http:"||Ei()==="https:"}function Ei(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Eu()||Qc()||"connection"in navigator)?navigator.onLine:!0}function Iu(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xe(n>e,"Short delay should be less than long delay!"),this.isMobile=Yc()||Zc()}get(){return wu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t,e){Xe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Dn(3e4,6e4);function yt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function bt(t,e,n,r,s={}){return ea(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Nn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Zo.fetch()(ta(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function ea(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Su),e);try{const s=new Cu(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Hn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Hn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Hn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw bu(t,u,l);De(t,u)}}catch(s){if(s instanceof vt)throw s;De(t,"network-request-failed",{message:String(s)})}}async function Mn(t,e,n,r,s={}){const i=await bt(t,e,n,r,s);return"mfaPendingCredential"in i&&De(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ta(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ls(t.config,s):`${t.config.apiScheme}://${s}`}function Ru(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),Tu.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=He(t,e,r);return s.customData._tokenResponse=n,s}function wi(t){return t!==void 0&&t.enterprise!==void 0}class Pu{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ru(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Au(t,e){return bt(t,"GET","/v2/recaptchaConfig",yt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t,e){return bt(t,"POST","/v1/accounts:delete",e)}async function ku(t,e){return bt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Nu(t,e=!1){const n=We(t),r=await n.getIdToken(e),s=Ds(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fn(Kr(s.auth_time)),issuedAtTime:fn(Kr(s.iat)),expirationTime:fn(Kr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Kr(t){return Number(t)*1e3}function Ds(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bo(n);return s?JSON.parse(s):(qn("Failed to decode base64 JWT payload"),null)}catch(s){return qn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Lu(t){const e=Ds(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof vt&&Du(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Du({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fn(this.lastLoginAt),this.creationTime=fn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wn(t,ku(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fu(i.providerUserInfo):[],c=Uu(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new na(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function xu(t){const e=We(t);await cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Uu(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fu(t){return t.map(e=>{var{providerId:n}=e,r=ks(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $u(t,e){const n=await ea(t,{},async()=>{const r=Nn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ta(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Zo.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Bu(t,e){return bt(t,"POST","/v2/accounts:revokeToken",yt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await $u(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new In;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ct{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ks(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new na(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Nu(this,e)}reload(){return xu(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wn(this,Ou(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,M=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:K,isAnonymous:z,providerData:U,stsTokenManager:re}=n;F(x&&re,e,"internal-error");const V=In.fromJSON(this.name,re);F(typeof x=="string",e,"internal-error"),et(h,e.name),et(p,e.name),F(typeof K=="boolean",e,"internal-error"),F(typeof z=="boolean",e,"internal-error"),et(m,e.name),et(S,e.name),et(k,e.name),et(M,e.name),et(A,e.name),et(D,e.name);const j=new Ct({uid:x,auth:e,email:p,emailVerified:K,displayName:h,isAnonymous:z,photoURL:S,phoneNumber:m,tenantId:k,stsTokenManager:V,createdAt:A,lastLoginAt:D});return U&&Array.isArray(U)&&(j.providerData=U.map(oe=>Object.assign({},oe))),M&&(j._redirectEventId=M),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new In;s.updateFromServerResponse(n);const i=new Ct({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await cr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=new Map;function Je(t){Xe(t instanceof Function,"Expected a class definition");let e=Ii.get(t);return e?(Xe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ii.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ra.type="NONE";const Si=ra;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t,e,n){return`firebase:${t}:${e}:${n}`}class Kt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ct._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Kt(Je(Si),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Je(Si);const o=Jn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ct._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Kt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Kt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ca(e))return"Blackberry";if(la(e))return"Webos";if(Ms(e))return"Safari";if((e.includes("chrome/")||ia(e))&&!e.includes("edge/"))return"Chrome";if(aa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sa(t=me()){return/firefox\//i.test(t)}function Ms(t=me()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ia(t=me()){return/crios\//i.test(t)}function oa(t=me()){return/iemobile/i.test(t)}function aa(t=me()){return/android/i.test(t)}function ca(t=me()){return/blackberry/i.test(t)}function la(t=me()){return/webos/i.test(t)}function yr(t=me()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hu(t=me()){var e;return yr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ju(){return el()&&document.documentMode===10}function ua(t=me()){return yr(t)||aa(t)||la(t)||ca(t)||/windows phone/i.test(t)||oa(t)}function Vu(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(t,e=[]){let n;switch(t){case"Browser":n=Ti(me());break;case"Worker":n=`${Ti(me())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ln}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ku(t,e={}){return bt(t,"GET","/v2/passwordPolicy",yt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=6;class Gu{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zu,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ri(this),this.idTokenSubscription=new Ri(this),this.beforeStateQueue=new Wu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Iu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?We(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ku(this),n=new Gu(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Bu(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Je(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&yu(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dt(t){return We(t)}class Ri{constructor(e){this.auth=e,this.observer=null,this.addObserver=al(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ju(t){br=t}function da(t){return br.loadJS(t)}function Yu(){return br.recaptchaEnterpriseScript}function Xu(){return br.gapiScript}function Qu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Zu="recaptcha-enterprise",ef="NO_RECAPTCHA";class tf{constructor(e){this.type=Zu,this.auth=Dt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Au(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Pu(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;wi(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ef)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&wi(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=Yu();a.length!==0&&(a+=c),da(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Ci(t,e,n,r=!1){const s=new tf(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fs(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ci(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ci(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){const n=Go(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ir(i,e??{}))return s;De(s,"already-initialized")}return n.initialize({options:e})}function rf(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sf(t,e,n){const r=Dt(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ha(e),{host:o,port:c}=of(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||af()}function ha(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function of(t){const e=ha(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pi(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pi(o)}}}function Pi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function af(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,n){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function cf(t,e){return bt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lf(t,e){return Mn(t,"POST","/v1/accounts:signInWithPassword",yt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uf(t,e){return Mn(t,"POST","/v1/accounts:signInWithEmailLink",yt(t,e))}async function ff(t,e){return Mn(t,"POST","/v1/accounts:signInWithEmailLink",yt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends xs{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Sn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fs(e,n,"signInWithPassword",lf);case"emailLink":return uf(e,{email:this._email,oobCode:this._password});default:De(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fs(e,r,"signUpPassword",cf);case"emailLink":return ff(e,{idToken:n,email:this._email,oobCode:this._password});default:De(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(t,e){return Mn(t,"POST","/v1/accounts:signInWithIdp",yt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="http://localhost";class kt extends xs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):De("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ks(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new kt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zt(e,n)}buildRequest(){const e={requestUri:df,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pf(t){const e=cn(ln(t)).link,n=e?cn(ln(e)).deep_link_id:null,r=cn(ln(t)).deep_link_id;return(r?cn(ln(r)).link:null)||r||n||e||t}class Us{constructor(e){var n,r,s,i,o,c;const a=cn(ln(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(r=a.oobCode)!==null&&r!==void 0?r:null,h=hf((s=a.mode)!==null&&s!==void 0?s:null);F(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=pf(e);try{return new Us(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.providerId=nn.PROVIDER_ID}static credential(e,n){return Sn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Us.parseLink(n);return F(r,"argument-error"),Sn._fromEmailAndCode(e,r.code,r.tenantId)}}nn.PROVIDER_ID="password";nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends pa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends xn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends xn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends xn{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ft.credential(n,r)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com";ft.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gf(t,e){return Mn(t,"POST","/v1/accounts:signUp",yt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ct._fromIdTokenResponse(e,r,s),o=Ai(r);return new Nt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Ai(r);return new Nt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Ai(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends vt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lr(e,n,r,s)}}function ga(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lr._fromErrorAndOperation(t,i,e,r):i})}async function mf(t,e,n=!1){const r=await wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await wn(t,ga(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Ds(i.idToken);F(o,r,"internal-error");const{sub:c}=o;return F(t.uid===c,r,"user-mismatch"),Nt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&De(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ma(t,e,n=!1){const r="signIn",s=await ga(t,r,e),i=await Nt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function vf(t,e){return ma(Dt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(t){const e=Dt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dm(t,e,n){const r=Dt(t),o=await fs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gf).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&_a(t),a}),c=await Nt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Mm(t,e,n){return vf(We(t),nn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_a(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(t,e){return We(t).setPersistence(e)}function bf(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function Ef(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function xm(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function Um(t){return We(t).signOut()}const ur="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ur,"1"),this.storage.removeItem(ur),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){const t=me();return Ms(t)||yr(t)}const If=1e3,Sf=10;class ya extends va{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wf()&&Vu(),this.fallbackToPolling=ua(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ju()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sf):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},If)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ya.type="LOCAL";const ba=ya;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends va{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ea.type="SESSION";const wa=Ea;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Er(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Tf(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Er.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Fs("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function Cf(t){je().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function Pf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Af(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Of(){return Ia()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="firebaseLocalStorageDb",kf=1,fr="firebaseLocalStorage",Ta="fbase_key";class Un{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wr(t,e){return t.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function Nf(){const t=indexedDB.deleteDatabase(Sa);return new Un(t).toPromise()}function ds(){const t=indexedDB.open(Sa,kf);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fr,{keyPath:Ta})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fr)?e(r):(r.close(),await Nf(),e(await ds()))})})}async function Oi(t,e,n){const r=wr(t,!0).put({[Ta]:e,value:n});return new Un(r).toPromise()}async function Lf(t,e){const n=wr(t,!1).get(e),r=await new Un(n).toPromise();return r===void 0?null:r.value}function ki(t,e){const n=wr(t,!0).delete(e);return new Un(n).toPromise()}const Df=800,Mf=3;class Ra{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ds(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mf)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ia()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Er._getInstance(Of()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Pf(),!this.activeServiceWorker)return;this.sender=new Rf(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Af()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ds();return await Oi(e,ur,"1"),await ki(e,ur),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Lf(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ki(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=wr(s,!1).getAll();return new Un(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Df)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ra.type="LOCAL";const xf=Ra;new Dn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t,e){return e?Je(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends xs{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ff(t){return ma(t.auth,new $s(t),t.bypassAuthState)}function $f(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),_f(n,new $s(t),t.bypassAuthState)}async function Bf(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),mf(n,new $s(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ff;case"linkViaPopup":case"linkViaRedirect":return Bf;case"reauthViaPopup":case"reauthViaRedirect":return $f;default:De(this.auth,"internal-error")}}resolve(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=new Dn(2e3,1e4);class Vt extends Ca{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vt.currentPopupAction&&Vt.currentPopupAction.cancel(),Vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Xe(this.filter.length===1,"Popup operations only handle one event");const e=Fs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hf.get())};e()}}Vt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="pendingRedirect",Yn=new Map;class Vf extends Ca{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yn.get(this.auth._key());if(!e){try{const r=await Wf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yn.set(this.auth._key(),e)}return this.bypassAuthState||Yn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wf(t,e){const n=Gf(e),r=zf(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Kf(t,e){Yn.set(t._key(),e)}function zf(t){return Je(t._redirectPersistence)}function Gf(t){return Jn(jf,t.config.apiKey,t.name)}async function qf(t,e,n=!1){const r=Dt(t),s=Uf(r,e),o=await new Vf(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=10*60*1e3;class Yf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pa(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(He(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ni(e))}saveEventToCache(e){this.cachedEventUids.add(Ni(e)),this.lastProcessedEventTime=Date.now()}}function Ni(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pa({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pa(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(t,e={}){return bt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ed=/^https?/;async function td(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qf(t);for(const n of e)try{if(nd(n))return}catch{}De(t,"unauthorized-domain")}function nd(t){const e=us(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ed.test(n))return!1;if(Zf.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Dn(3e4,6e4);function Li(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sd(t){return new Promise((e,n)=>{var r,s,i;function o(){Li(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Li(),n(He(t,"network-request-failed"))},timeout:rd.get()})}if(!((s=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)o();else{const c=Qu("iframefcb");return je()[c]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},da(`${Xu()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Xn=null,e})}let Xn=null;function id(t){return Xn=Xn||sd(t),Xn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Dn(5e3,15e3),ad="__/auth/iframe",cd="emulator/auth/iframe",ld={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ud=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fd(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ls(e,cd):`https://${t.config.authDomain}/${ad}`,r={apiKey:e.apiKey,appName:t.name,v:Ln},s=ud.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Nn(r).slice(1)}`}async function dd(t){const e=await id(t),n=je().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:fd(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ld,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),c=je().setTimeout(()=>{i(o)},od.get());function a(){je().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pd=500,gd=600,md="_blank",_d="http://localhost";class Di{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vd(t,e,n,r=pd,s=gd){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},hd),{width:r.toString(),height:s.toString(),top:i,left:o}),l=me().toLowerCase();n&&(c=ia(l)?md:n),sa(l)&&(e=e||_d,a.scrollbars="yes");const u=Object.entries(a).reduce((p,[m,S])=>`${p}${m}=${S},`,"");if(Hu(l)&&c!=="_self")return yd(e||"",c),new Di(null);const h=window.open(e||"",c,u);F(h,t,"popup-blocked");try{h.focus()}catch{}return new Di(h)}function yd(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="__/auth/handler",Ed="emulator/auth/handler",wd=encodeURIComponent("fac");async function Mi(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ln,eventId:s};if(e instanceof pa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ol(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof xn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${wd}=${encodeURIComponent(a)}`:"";return`${Id(t)}?${Nn(c).slice(1)}${l}`}function Id({config:t}){return t.emulator?Ls(t,Ed):`https://${t.authDomain}/${bd}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="webStorageSupport";class Sd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wa,this._completeRedirectFn=qf,this._overrideRedirectResult=Kf}async _openPopup(e,n,r,s){var i;Xe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Mi(e,n,r,us(),s);return vd(e,o,Fs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Mi(e,n,r,us(),s);return Cf(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dd(e),r=new Yf(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zr,{type:zr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zr];o!==void 0&&n(!!o),De(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=td(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ua()||Ms()||yr()}}const Td=Sd;var xi="@firebase/auth",Ui="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pd(t){bn(new Xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fa(t)},l=new qu(r,s,i,a);return rf(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),bn(new Xt("auth-internal",e=>{const n=Dt(e.getProvider("auth").getImmediate());return(r=>new Rd(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(xi,Ui,Cd(t)),Wt(xi,Ui,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=5*60,Od=Vo("authIdTokenMaxAge")||Ad;let Fi=null;const kd=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Od)return;const s=n==null?void 0:n.token;Fi!==s&&(Fi=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Nd(t=ou()){const e=Go(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nf(t,{popupRedirectResolver:Td,persistence:[xf,ba,wa]}),r=Vo("authTokenSyncURL");if(r){const i=kd(r);Ef(n,i,()=>i(n.currentUser)),bf(n,o=>i(o))}const s=Ho("auth");return s&&sf(n,`http://${s}`),n}function Ld(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ju({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=He("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ld().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pd("Browser");const Dd={apiKey:"AIzaSyBvZp5REKBgr6pASO1joR33KMJF1EgRX_w",authDomain:"meet-clone-cbefd.firebaseapp.com",projectId:"meet-clone-cbefd",storageBucket:"meet-clone-cbefd.appspot.com",messagingSenderId:"545659986137",appId:"1:545659986137:web:c2954fa94714687187dec8",measurementId:"G-SLN7GR2QVR"};/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bs(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ne={},Gt=[],Ae=()=>{},Md=()=>!1,Ir=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hs=t=>t.startsWith("onUpdate:"),fe=Object.assign,js=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xd=Object.prototype.hasOwnProperty,G=(t,e)=>xd.call(t,e),B=Array.isArray,dn=t=>Tr(t)==="[object Map]",Ud=t=>Tr(t)==="[object Set]",H=t=>typeof t=="function",de=t=>typeof t=="string",Sr=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Aa=t=>(ae(t)||H(t))&&H(t.then)&&H(t.catch),Fd=Object.prototype.toString,Tr=t=>Fd.call(t),$d=t=>Tr(t).slice(8,-1),Bd=t=>Tr(t)==="[object Object]",Vs=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hn=Bs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Hd=/-(\w)/g,Ve=Rr(t=>t.replace(Hd,(e,n)=>n?n.toUpperCase():"")),jd=/\B([A-Z])/g,rn=Rr(t=>t.replace(jd,"-$1").toLowerCase()),Cr=Rr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gr=Rr(t=>t?`on${Cr(t)}`:""),_t=(t,e)=>!Object.is(t,e),Qn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},dr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $i;const Oa=()=>$i||($i=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ws(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?zd(r):Ws(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(de(t)||ae(t))return t}const Vd=/;(?![^(]*\))/g,Wd=/:([^]+)/,Kd=/\/\*[^]*?\*\//g;function zd(t){const e={};return t.replace(Kd,"").split(Vd).forEach(n=>{if(n){const r=n.split(Wd);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ks(t){let e="";if(de(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Ks(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qd=Bs(Gd);function ka(t){return!!t||t===""}/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class Na{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!e&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Se;try{return Se=this,e()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function La(t){return new Na(t)}function Jd(t,e=Se){e&&e.active&&e.effects.push(t)}function Da(){return Se}function Yd(t){Se&&Se.cleanups.push(t)}let Pt;class zs{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Jd(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Mt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Xd(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),xt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=pt,n=Pt;try{return pt=!0,Pt=this,this._runnings++,Bi(this),this.fn()}finally{Hi(this),this._runnings--,Pt=n,pt=e}}stop(){var e;this.active&&(Bi(this),Hi(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Xd(t){return t.value}function Bi(t){t._trackId++,t._depsLength=0}function Hi(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Ma(t.deps[e],t);t.deps.length=t._depsLength}}function Ma(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let pt=!0,ps=0;const xa=[];function Mt(){xa.push(pt),pt=!1}function xt(){const t=xa.pop();pt=t===void 0?!0:t}function Gs(){ps++}function qs(){for(ps--;!ps&&gs.length;)gs.shift()()}function Ua(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Ma(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const gs=[];function Fa(t,e,n){Gs();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&gs.push(r.scheduler)))}qs()}const $a=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},hr=new WeakMap,At=Symbol(""),ms=Symbol("");function Ee(t,e,n){if(pt&&Pt){let r=hr.get(t);r||hr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=$a(()=>r.delete(n))),Ua(Pt,s)}}function Ye(t,e,n,r,s,i){const o=hr.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&B(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||!Sr(u)&&u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":B(t)?Vs(n)&&c.push(o.get("length")):(c.push(o.get(At)),dn(t)&&c.push(o.get(ms)));break;case"delete":B(t)||(c.push(o.get(At)),dn(t)&&c.push(o.get(ms)));break;case"set":dn(t)&&c.push(o.get(At));break}Gs();for(const a of c)a&&Fa(a,4);qs()}function Qd(t,e){var n;return(n=hr.get(t))==null?void 0:n.get(e)}const Zd=Bs("__proto__,__v_isRef,__isVue"),Ba=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sr)),ji=eh();function eh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=q(this);for(let i=0,o=this.length;i<o;i++)Ee(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Mt(),Gs();const r=q(this)[e].apply(this,n);return qs(),xt(),r}}),t}function th(t){const e=q(this);return Ee(e,"has",t),e.hasOwnProperty(t)}class Ha{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ph:Ka:i?Wa:Va).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=B(e);if(!s){if(o&&G(ji,n))return Reflect.get(ji,n,r);if(n==="hasOwnProperty")return th}const c=Reflect.get(e,n,r);return(Sr(n)?Ba.has(n):Zd(n))||(s||Ee(e,"get",n),i)?c:ce(c)?o&&Vs(n)?c:c.value:ae(c)?s?Ga(c):Fn(c):c}}class ja extends Ha{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=Qt(i);if(!pr(r)&&!Qt(r)&&(i=q(i),r=q(r)),!B(e)&&ce(i)&&!ce(r))return a?!1:(i.value=r,!0)}const o=B(e)&&Vs(n)?Number(n)<e.length:G(e,n),c=Reflect.set(e,n,r,s);return e===q(s)&&(o?_t(r,i)&&Ye(e,"set",n,r):Ye(e,"add",n,r)),c}deleteProperty(e,n){const r=G(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ye(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Sr(n)||!Ba.has(n))&&Ee(e,"has",n),r}ownKeys(e){return Ee(e,"iterate",B(e)?"length":At),Reflect.ownKeys(e)}}class nh extends Ha{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rh=new ja,sh=new nh,ih=new ja(!0),Js=t=>t,Pr=t=>Reflect.getPrototypeOf(t);function jn(t,e,n=!1,r=!1){t=t.__v_raw;const s=q(t),i=q(e);n||(_t(e,i)&&Ee(s,"get",e),Ee(s,"get",i));const{has:o}=Pr(s),c=r?Js:n?Qs:Tn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Vn(t,e=!1){const n=this.__v_raw,r=q(n),s=q(t);return e||(_t(t,s)&&Ee(r,"has",t),Ee(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Wn(t,e=!1){return t=t.__v_raw,!e&&Ee(q(t),"iterate",At),Reflect.get(t,"size",t)}function Vi(t){t=q(t);const e=q(this);return Pr(e).has.call(e,t)||(e.add(t),Ye(e,"add",t,t)),this}function Wi(t,e){e=q(e);const n=q(this),{has:r,get:s}=Pr(n);let i=r.call(n,t);i||(t=q(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?_t(e,o)&&Ye(n,"set",t,e):Ye(n,"add",t,e),this}function Ki(t){const e=q(this),{has:n,get:r}=Pr(e);let s=n.call(e,t);s||(t=q(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ye(e,"delete",t,void 0),i}function zi(){const t=q(this),e=t.size!==0,n=t.clear();return e&&Ye(t,"clear",void 0,void 0),n}function Kn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=q(o),a=e?Js:t?Qs:Tn;return!t&&Ee(c,"iterate",At),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function zn(t,e,n){return function(...r){const s=this.__v_raw,i=q(s),o=dn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?Js:e?Qs:Tn;return!e&&Ee(i,"iterate",a?ms:At),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function oh(){const t={get(i){return jn(this,i)},get size(){return Wn(this)},has:Vn,add:Vi,set:Wi,delete:Ki,clear:zi,forEach:Kn(!1,!1)},e={get(i){return jn(this,i,!1,!0)},get size(){return Wn(this)},has:Vn,add:Vi,set:Wi,delete:Ki,clear:zi,forEach:Kn(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return Wn(this,!0)},has(i){return Vn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Kn(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return Wn(this,!0)},has(i){return Vn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),e[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[t,n,e,r]}const[ah,ch,lh,uh]=oh();function Ys(t,e){const n=e?t?uh:lh:t?ch:ah;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(G(n,s)&&s in r?n:r,s,i)}const fh={get:Ys(!1,!1)},dh={get:Ys(!1,!0)},hh={get:Ys(!0,!1)},Va=new WeakMap,Wa=new WeakMap,Ka=new WeakMap,ph=new WeakMap;function gh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mh(t){return t.__v_skip||!Object.isExtensible(t)?0:gh($d(t))}function Fn(t){return Qt(t)?t:Xs(t,!1,rh,fh,Va)}function za(t){return Xs(t,!1,ih,dh,Wa)}function Ga(t){return Xs(t,!0,sh,hh,Ka)}function Xs(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=mh(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function gt(t){return Qt(t)?gt(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function pr(t){return!!(t&&t.__v_isShallow)}function qa(t){return gt(t)||Qt(t)}function q(t){const e=t&&t.__v_raw;return e?q(e):t}function Ar(t){return Object.isExtensible(t)&&dr(t,"__v_skip",!0),t}const Tn=t=>ae(t)?Fn(t):t,Qs=t=>ae(t)?Ga(t):t;class Ja{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zs(()=>e(this._value),()=>Zn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=q(this);return(!e._cacheable||e.effect.dirty)&&_t(e._value,e._value=e.effect.run())&&Zn(e,4),Ya(e),e.effect._dirtyLevel>=2&&Zn(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function _h(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Ae):(r=t.get,s=t.set),new Ja(r,s,i||!s,n)}function Ya(t){var e;pt&&Pt&&(t=q(t),Ua(Pt,(e=t.dep)!=null?e:t.dep=$a(()=>t.dep=void 0,t instanceof Ja?t:void 0)))}function Zn(t,e=4,n){t=q(t);const r=t.dep;r&&Fa(r,e)}function ce(t){return!!(t&&t.__v_isRef===!0)}function Zs(t){return Xa(t,!1)}function vh(t){return Xa(t,!0)}function Xa(t,e){return ce(t)?t:new yh(t,e)}class yh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:q(e),this._value=n?e:Tn(e)}get value(){return Ya(this),this._value}set value(e){const n=this.__v_isShallow||pr(e)||Qt(e);e=n?e:q(e),_t(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Tn(e),Zn(this,4))}}function qt(t){return ce(t)?t.value:t}const bh={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ce(s)&&!ce(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qa(t){return gt(t)?t:new Proxy(t,bh)}function Eh(t){const e=B(t)?new Array(t.length):{};for(const n in t)e[n]=Ih(t,n);return e}class wh{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Qd(q(this._object),this._key)}}function Ih(t,e,n){const r=t[e];return ce(r)?r:new wh(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mt(t,e,n,r){try{return r?t(...r):t()}catch(s){Or(s,e,n)}}function Le(t,e,n,r){if(H(t)){const i=mt(t,e,n,r);return i&&Aa(i)&&i.catch(o=>{Or(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Le(t[i],e,n,r));return s}function Or(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){mt(a,null,10,[t,o,c]);return}}Sh(t,n,s,r)}function Sh(t,e,n,r=!0){console.error(t)}let Rn=!1,_s=!1;const ge=[];let Be=0;const Jt=[];let st=null,Tt=0;const Za=Promise.resolve();let ei=null;function ti(t){const e=ei||Za;return t?e.then(this?t.bind(this):t):e}function Th(t){let e=Be+1,n=ge.length;for(;e<n;){const r=e+n>>>1,s=ge[r],i=Cn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ni(t){(!ge.length||!ge.includes(t,Rn&&t.allowRecurse?Be+1:Be))&&(t.id==null?ge.push(t):ge.splice(Th(t.id),0,t),ec())}function ec(){!Rn&&!_s&&(_s=!0,ei=Za.then(nc))}function Rh(t){const e=ge.indexOf(t);e>Be&&ge.splice(e,1)}function Ch(t){B(t)?Jt.push(...t):(!st||!st.includes(t,t.allowRecurse?Tt+1:Tt))&&Jt.push(t),ec()}function Gi(t,e,n=Rn?Be+1:0){for(;n<ge.length;n++){const r=ge[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ge.splice(n,1),n--,r()}}}function tc(t){if(Jt.length){const e=[...new Set(Jt)].sort((n,r)=>Cn(n)-Cn(r));if(Jt.length=0,st){st.push(...e);return}for(st=e,Tt=0;Tt<st.length;Tt++)st[Tt]();st=null,Tt=0}}const Cn=t=>t.id==null?1/0:t.id,Ph=(t,e)=>{const n=Cn(t)-Cn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function nc(t){_s=!1,Rn=!0,ge.sort(Ph);try{for(Be=0;Be<ge.length;Be++){const e=ge[Be];e&&e.active!==!1&&mt(e,null,14)}}finally{Be=0,ge.length=0,tc(),Rn=!1,ei=null,(ge.length||Jt.length)&&nc()}}function Ah(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||ne;p&&(s=n.map(m=>de(m)?m.trim():m)),h&&(s=n.map(hs))}let c,a=r[c=Gr(e)]||r[c=Gr(Ve(e))];!a&&i&&(a=r[c=Gr(rn(e))]),a&&Le(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Le(l,t,6,s)}}function rc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!H(t)){const a=l=>{const u=rc(l,e,!0);u&&(c=!0,fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ae(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):fe(o,i),ae(t)&&r.set(t,o),o)}function kr(t,e){return!t||!Ir(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,rn(e))||G(t,e))}let ve=null,sc=null;function gr(t){const e=ve;return ve=t,sc=t&&t.type.__scopeId||null,e}function Oh(t,e=ve,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&so(-1);const i=gr(e);let o;try{o=t(...s)}finally{gr(i),r._d&&so(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function qr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:h,data:p,setupState:m,ctx:S,inheritAttrs:k}=t;let M,A;const D=gr(t);try{if(n.shapeFlag&4){const K=s||r,z=K;M=$e(u.call(z,K,h,i,m,p,S)),A=a}else{const K=e;M=$e(K.length>1?K(i,{attrs:a,slots:c,emit:l}):K(i,null)),A=e.props?a:kh(a)}}catch(K){mn.length=0,Or(K,t,1),M=Te(Lt)}let x=M;if(A&&k!==!1){const K=Object.keys(A),{shapeFlag:z}=x;K.length&&z&7&&(o&&K.some(Hs)&&(A=Nh(A,o)),x=Zt(x,A))}return n.dirs&&(x=Zt(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),M=x,gr(D),M}const kh=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ir(n))&&((e||(e={}))[n]=t[n]);return e},Nh=(t,e)=>{const n={};for(const r in t)(!Hs(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Lh(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?qi(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!kr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?qi(r,o,l):!0:!!o;return!1}function qi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!kr(n,i))return!0}return!1}function Dh({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ic="components";function Mh(t,e){return Uh(ic,t,!0,e)||t}const xh=Symbol.for("v-ndc");function Uh(t,e,n=!0,r=!1){const s=ve||ue;if(s){const i=s.type;if(t===ic){const c=Np(i,!1);if(c&&(c===e||c===Ve(e)||c===Cr(Ve(e))))return i}const o=Ji(s[t]||i[t],e)||Ji(s.appContext[t],e);return!o&&r?i:o}}function Ji(t,e){return t&&(t[e]||t[Ve(e)]||t[Cr(Ve(e))])}const Fh=t=>t.__isSuspense;function $h(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Ch(t)}const Bh=Symbol.for("v-scx"),Hh=()=>Oe(Bh),Gn={};function pn(t,e,n){return oc(t,e,n)}function oc(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=ne){if(e&&i){const U=e;e=(...re)=>{U(...re),z()}}const a=ue,l=U=>r===!0?U:Rt(U,r===!1?1:void 0);let u,h=!1,p=!1;if(ce(t)?(u=()=>t.value,h=pr(t)):gt(t)?(u=()=>l(t),h=!0):B(t)?(p=!0,h=t.some(U=>gt(U)||pr(U)),u=()=>t.map(U=>{if(ce(U))return U.value;if(gt(U))return l(U);if(H(U))return mt(U,a,2)})):H(t)?e?u=()=>mt(t,a,2):u=()=>(m&&m(),Le(t,a,3,[S])):u=Ae,e&&r){const U=u;u=()=>Rt(U())}let m,S=U=>{m=x.onStop=()=>{mt(U,a,4),m=x.onStop=void 0}},k;if(Mr)if(S=Ae,e?n&&Le(e,a,3,[u(),p?[]:void 0,S]):u(),s==="sync"){const U=Hh();k=U.__watcherHandles||(U.__watcherHandles=[])}else return Ae;let M=p?new Array(t.length).fill(Gn):Gn;const A=()=>{if(!(!x.active||!x.dirty))if(e){const U=x.run();(r||h||(p?U.some((re,V)=>_t(re,M[V])):_t(U,M)))&&(m&&m(),Le(e,a,3,[U,M===Gn?void 0:p&&M[0]===Gn?[]:M,S]),M=U)}else x.run()};A.allowRecurse=!!e;let D;s==="sync"?D=A:s==="post"?D=()=>be(A,a&&a.suspense):(A.pre=!0,a&&(A.id=a.uid),D=()=>ni(A));const x=new zs(u,Ae,D),K=Da(),z=()=>{x.stop(),K&&js(K.effects,x)};return e?n?A():M=x.run():s==="post"?be(x.run.bind(x),a&&a.suspense):x.run(),k&&k.push(z),z}function jh(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?ac(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=$n(this),c=oc(s,i.bind(r),n);return o(),c}function ac(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Rt(t,e,n=0,r){if(!ae(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ce(t))Rt(t.value,e,n,r);else if(B(t))for(let s=0;s<t.length;s++)Rt(t[s],e,n,r);else if(Ud(t)||dn(t))t.forEach(s=>{Rt(s,e,n,r)});else if(Bd(t))for(const s in t)Rt(t[s],e,n,r);return t}function Fm(t,e){if(ve===null)return t;const n=xr(ve)||ve.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=ne]=e[s];i&&(H(i)&&(i={mounted:i,updated:i}),i.deep&&Rt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function wt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Mt(),Le(a,n,8,[t.el,c,t,e]),xt())}}/*! #__NO_SIDE_EFFECTS__ */function ri(t,e){return H(t)?fe({name:t.name},e,{setup:t}):t}const er=t=>!!t.type.__asyncLoader,cc=t=>t.type.__isKeepAlive;function Vh(t,e){lc(t,"a",e)}function Wh(t,e){lc(t,"da",e)}function lc(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cc(s.parent.vnode)&&Kh(r,e,n,s),s=s.parent}}function Kh(t,e,n,r){const s=Nr(e,t,r,!0);uc(()=>{js(r[e],s)},n)}function Nr(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Mt();const c=$n(n),a=Le(e,n,t,o);return c(),xt(),a});return r?s.unshift(i):s.push(i),i}}const Qe=t=>(e,n=ue)=>(!Mr||t==="sp")&&Nr(t,(...r)=>e(...r),n),zh=Qe("bm"),Gh=Qe("m"),qh=Qe("bu"),Jh=Qe("u"),Yh=Qe("bum"),uc=Qe("um"),Xh=Qe("sp"),Qh=Qe("rtg"),Zh=Qe("rtc");function ep(t,e=ue){Nr("ec",t,e)}const vs=t=>t?Tc(t)?xr(t)||t.proxy:vs(t.parent):null,gn=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vs(t.parent),$root:t=>vs(t.root),$emit:t=>t.emit,$options:t=>si(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ni(t.update)}),$nextTick:t=>t.n||(t.n=ti.bind(t.proxy)),$watch:t=>jh.bind(t)}),Jr=(t,e)=>t!==ne&&!t.__isScriptSetup&&G(t,e),tp={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jr(r,e))return o[e]=1,r[e];if(s!==ne&&G(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==ne&&G(n,e))return o[e]=4,n[e];ys&&(o[e]=0)}}const u=gn[e];let h,p;if(u)return e==="$attrs"&&Ee(t,"get",e),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==ne&&G(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jr(s,e)?(s[e]=n,!0):r!==ne&&G(r,e)?(r[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ne&&G(t,o)||Jr(e,o)||(c=i[0])&&G(c,o)||G(r,o)||G(gn,o)||G(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Yi(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ys=!0;function np(t){const e=si(t),n=t.proxy,r=t.ctx;ys=!1,e.beforeCreate&&Xi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:p,beforeUpdate:m,updated:S,activated:k,deactivated:M,beforeDestroy:A,beforeUnmount:D,destroyed:x,unmounted:K,render:z,renderTracked:U,renderTriggered:re,errorCaptured:V,serverPrefetch:j,expose:oe,inheritAttrs:he,components:we,directives:Re,filters:Et}=e;if(l&&rp(l,r,null),o)for(const Z in o){const Y=o[Z];H(Y)&&(r[Z]=Y.bind(n))}if(s){const Z=s.call(n,n);ae(Z)&&(t.data=Fn(Z))}if(ys=!0,i)for(const Z in i){const Y=i[Z],Ke=H(Y)?Y.bind(n,n):H(Y.get)?Y.get.bind(n,n):Ae,Ze=!H(Y)&&H(Y.set)?Y.set.bind(n):Ae,xe=Pe({get:Ke,set:Ze});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>xe.value,set:ye=>xe.value=ye})}if(c)for(const Z in c)fc(c[Z],r,n,Z);if(a){const Z=H(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(Y=>{tr(Y,Z[Y])})}u&&Xi(u,t,"c");function J(Z,Y){B(Y)?Y.forEach(Ke=>Z(Ke.bind(n))):Y&&Z(Y.bind(n))}if(J(zh,h),J(Gh,p),J(qh,m),J(Jh,S),J(Vh,k),J(Wh,M),J(ep,V),J(Zh,U),J(Qh,re),J(Yh,D),J(uc,K),J(Xh,j),B(oe))if(oe.length){const Z=t.exposed||(t.exposed={});oe.forEach(Y=>{Object.defineProperty(Z,Y,{get:()=>n[Y],set:Ke=>n[Y]=Ke})})}else t.exposed||(t.exposed={});z&&t.render===Ae&&(t.render=z),he!=null&&(t.inheritAttrs=he),we&&(t.components=we),Re&&(t.directives=Re)}function rp(t,e,n=Ae){B(t)&&(t=bs(t));for(const r in t){const s=t[r];let i;ae(s)?"default"in s?i=Oe(s.from||r,s.default,!0):i=Oe(s.from||r):i=Oe(s),ce(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Xi(t,e,n){Le(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fc(t,e,n,r){const s=r.includes(".")?ac(n,r):()=>n[r];if(de(t)){const i=e[t];H(i)&&pn(s,i)}else if(H(t))pn(s,t.bind(n));else if(ae(t))if(B(t))t.forEach(i=>fc(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&pn(s,i,t)}}function si(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>mr(a,l,o,!0)),mr(a,e,o)),ae(e)&&i.set(e,a),a}function mr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&mr(t,i,n,!0),s&&s.forEach(o=>mr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=sp[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const sp={data:Qi,props:Zi,emits:Zi,methods:un,computed:un,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,beforeUnmount:_e,destroyed:_e,unmounted:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:un,directives:un,watch:op,provide:Qi,inject:ip};function Qi(t,e){return e?t?function(){return fe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function ip(t,e){return un(bs(t),bs(e))}function bs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function un(t,e){return t?fe(Object.create(null),t,e):e}function Zi(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:fe(Object.create(null),Yi(t),Yi(e??{})):e}function op(t,e){if(!t)return e;if(!e)return t;const n=fe(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n}function dc(){return{app:null,config:{isNativeTag:Md,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ap=0;function cp(t,e){return function(r,s=null){H(r)||(r=fe({},r)),s!=null&&!ae(s)&&(s=null);const i=dc(),o=new WeakSet;let c=!1;const a=i.app={_uid:ap++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Dp,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(a,...u)):H(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const p=Te(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,xr(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){const u=Yt;Yt=a;try{return l()}finally{Yt=u}}};return a}}let Yt=null;function tr(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function Oe(t,e,n=!1){const r=ue||ve;if(r||Yt){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Yt._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function lp(){return!!(ue||ve||Yt)}function up(t,e,n,r=!1){const s={},i={};dr(i,Dr,1),t.propsDefaults=Object.create(null),hc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:za(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fp(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=q(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(kr(t.emitsOptions,p))continue;const m=e[p];if(a)if(G(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const S=Ve(p);s[S]=Es(a,c,S,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{hc(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!G(e,h)&&((u=rn(h))===h||!G(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Es(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!G(e,h))&&(delete i[h],l=!0)}l&&Ye(t,"set","$attrs")}function hc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(hn(a))continue;const l=e[a];let u;s&&G(s,u=Ve(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:kr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=q(n),l=c||ne;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Es(s,a,h,l[h],t,!G(l,h))}}return o}function Es(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=G(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&H(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=$n(s);r=l[n]=a.call(null,e),u()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===rn(n))&&(r=!0))}return r}function pc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!H(t)){const u=h=>{a=!0;const[p,m]=pc(h,e,!0);fe(o,p),m&&c.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ae(t)&&r.set(t,Gt),Gt;if(B(i))for(let u=0;u<i.length;u++){const h=Ve(i[u]);eo(h)&&(o[h]=ne)}else if(i)for(const u in i){const h=Ve(u);if(eo(h)){const p=i[u],m=o[h]=B(p)||H(p)?{type:p}:fe({},p);if(m){const S=ro(Boolean,m.type),k=ro(String,m.type);m[0]=S>-1,m[1]=k<0||S<k,(S>-1||G(m,"default"))&&c.push(h)}}}const l=[o,c];return ae(t)&&r.set(t,l),l}function eo(t){return t[0]!=="$"&&!hn(t)}function to(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function no(t,e){return to(t)===to(e)}function ro(t,e){return B(e)?e.findIndex(n=>no(n,t)):H(e)&&no(e,t)?0:-1}const gc=t=>t[0]==="_"||t==="$stable",ii=t=>B(t)?t.map($e):[$e(t)],dp=(t,e,n)=>{if(e._n)return e;const r=Oh((...s)=>ii(e(...s)),n);return r._c=!1,r},mc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(gc(s))continue;const i=t[s];if(H(i))e[s]=dp(s,i,r);else if(i!=null){const o=ii(i);e[s]=()=>o}}},_c=(t,e)=>{const n=ii(e);t.slots.default=()=>n},hp=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=q(e),dr(e,"_",n)):mc(e,t.slots={})}else t.slots={},e&&_c(t,e);dr(t.slots,Dr,1)},pp=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(fe(s,e),!n&&c===1&&delete s._):(i=!e.$stable,mc(e,s)),o=e}else e&&(_c(t,e),o={default:1});if(i)for(const c in s)!gc(c)&&o[c]==null&&delete s[c]};function ws(t,e,n,r,s=!1){if(B(t)){t.forEach((p,m)=>ws(p,e&&(B(e)?e[m]:e),n,r,s));return}if(er(r)&&!s)return;const i=r.shapeFlag&4?xr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===ne?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(de(l)?(u[l]=null,G(h,l)&&(h[l]=null)):ce(l)&&(l.value=null)),H(a))mt(a,c,12,[o,u]);else{const p=de(a),m=ce(a);if(p||m){const S=()=>{if(t.f){const k=p?G(h,a)?h[a]:u[a]:a.value;s?B(k)&&js(k,i):B(k)?k.includes(i)||k.push(i):p?(u[a]=[i],G(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else p?(u[a]=o,G(h,a)&&(h[a]=o)):m&&(a.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,be(S,n)):S()}}}const be=$h;function gp(t){return mp(t)}function mp(t,e){const n=Oa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:p,setScopeId:m=Ae,insertStaticContent:S}=t,k=(f,d,g,y=null,_=null,w=null,R=void 0,E=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!on(f,d)&&(y=v(f),ye(f,_,w,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:P,shapeFlag:L}=d;switch(b){case Lr:M(f,d,g,y);break;case Lt:A(f,d,g,y);break;case Xr:f==null&&D(d,g,y,R);break;case Ge:we(f,d,g,y,_,w,R,E,I);break;default:L&1?z(f,d,g,y,_,w,R,E,I):L&6?Re(f,d,g,y,_,w,R,E,I):(L&64||L&128)&&b.process(f,d,g,y,_,w,R,E,I,O)}P!=null&&_&&ws(P,f&&f.ref,w,d||f,!d)},M=(f,d,g,y)=>{if(f==null)r(d.el=c(d.children),g,y);else{const _=d.el=f.el;d.children!==f.children&&l(_,d.children)}},A=(f,d,g,y)=>{f==null?r(d.el=a(d.children||""),g,y):d.el=f.el},D=(f,d,g,y)=>{[f.el,f.anchor]=S(f.children,d,g,y,f.el,f.anchor)},x=({el:f,anchor:d},g,y)=>{let _;for(;f&&f!==d;)_=p(f),r(f,g,y),f=_;r(d,g,y)},K=({el:f,anchor:d})=>{let g;for(;f&&f!==d;)g=p(f),s(f),f=g;s(d)},z=(f,d,g,y,_,w,R,E,I)=>{d.type==="svg"?R="svg":d.type==="math"&&(R="mathml"),f==null?U(d,g,y,_,w,R,E,I):j(f,d,_,w,R,E,I)},U=(f,d,g,y,_,w,R,E)=>{let I,b;const{props:P,shapeFlag:L,transition:N,dirs:$}=f;if(I=f.el=o(f.type,w,P&&P.is,P),L&8?u(I,f.children):L&16&&V(f.children,I,null,y,_,Yr(f,w),R,E),$&&wt(f,null,y,"created"),re(I,f,f.scopeId,R,y),P){for(const ee in P)ee!=="value"&&!hn(ee)&&i(I,ee,null,P[ee],w,f.children,y,_,pe);"value"in P&&i(I,"value",null,P.value,w),(b=P.onVnodeBeforeMount)&&Fe(b,y,f)}$&&wt(f,null,y,"beforeMount");const W=_p(_,N);W&&N.beforeEnter(I),r(I,d,g),((b=P&&P.onVnodeMounted)||W||$)&&be(()=>{b&&Fe(b,y,f),W&&N.enter(I),$&&wt(f,null,y,"mounted")},_)},re=(f,d,g,y,_)=>{if(g&&m(f,g),y)for(let w=0;w<y.length;w++)m(f,y[w]);if(_){let w=_.subTree;if(d===w){const R=_.vnode;re(f,R,R.scopeId,R.slotScopeIds,_.parent)}}},V=(f,d,g,y,_,w,R,E,I=0)=>{for(let b=I;b<f.length;b++){const P=f[b]=E?it(f[b]):$e(f[b]);k(null,P,d,g,y,_,w,R,E)}},j=(f,d,g,y,_,w,R)=>{const E=d.el=f.el;let{patchFlag:I,dynamicChildren:b,dirs:P}=d;I|=f.patchFlag&16;const L=f.props||ne,N=d.props||ne;let $;if(g&&It(g,!1),($=N.onVnodeBeforeUpdate)&&Fe($,g,d,f),P&&wt(d,f,g,"beforeUpdate"),g&&It(g,!0),b?oe(f.dynamicChildren,b,E,g,y,Yr(d,_),w):R||Y(f,d,E,null,g,y,Yr(d,_),w,!1),I>0){if(I&16)he(E,d,L,N,g,y,_);else if(I&2&&L.class!==N.class&&i(E,"class",null,N.class,_),I&4&&i(E,"style",L.style,N.style,_),I&8){const W=d.dynamicProps;for(let ee=0;ee<W.length;ee++){const ie=W[ee],le=L[ie],ke=N[ie];(ke!==le||ie==="value")&&i(E,ie,le,ke,_,f.children,g,y,pe)}}I&1&&f.children!==d.children&&u(E,d.children)}else!R&&b==null&&he(E,d,L,N,g,y,_);(($=N.onVnodeUpdated)||P)&&be(()=>{$&&Fe($,g,d,f),P&&wt(d,f,g,"updated")},y)},oe=(f,d,g,y,_,w,R)=>{for(let E=0;E<d.length;E++){const I=f[E],b=d[E],P=I.el&&(I.type===Ge||!on(I,b)||I.shapeFlag&70)?h(I.el):g;k(I,b,P,null,y,_,w,R,!0)}},he=(f,d,g,y,_,w,R)=>{if(g!==y){if(g!==ne)for(const E in g)!hn(E)&&!(E in y)&&i(f,E,g[E],null,R,d.children,_,w,pe);for(const E in y){if(hn(E))continue;const I=y[E],b=g[E];I!==b&&E!=="value"&&i(f,E,b,I,R,d.children,_,w,pe)}"value"in y&&i(f,"value",g.value,y.value,R)}},we=(f,d,g,y,_,w,R,E,I)=>{const b=d.el=f?f.el:c(""),P=d.anchor=f?f.anchor:c("");let{patchFlag:L,dynamicChildren:N,slotScopeIds:$}=d;$&&(E=E?E.concat($):$),f==null?(r(b,g,y),r(P,g,y),V(d.children||[],g,P,_,w,R,E,I)):L>0&&L&64&&N&&f.dynamicChildren?(oe(f.dynamicChildren,N,g,_,w,R,E),(d.key!=null||_&&d===_.subTree)&&vc(f,d,!0)):Y(f,d,g,P,_,w,R,E,I)},Re=(f,d,g,y,_,w,R,E,I)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?_.ctx.activate(d,g,y,R,I):Et(d,g,y,_,w,R,I):Ce(f,d,I)},Et=(f,d,g,y,_,w,R)=>{const E=f.component=Cp(f,y,_);if(cc(f)&&(E.ctx.renderer=O),Pp(E),E.asyncDep){if(_&&_.registerDep(E,J),!f.el){const I=E.subTree=Te(Lt);A(null,I,d,g)}}else J(E,f,d,g,_,w,R)},Ce=(f,d,g)=>{const y=d.component=f.component;if(Lh(f,d,g))if(y.asyncDep&&!y.asyncResolved){Z(y,d,g);return}else y.next=d,Rh(y.update),y.effect.dirty=!0,y.update();else d.el=f.el,y.vnode=d},J=(f,d,g,y,_,w,R)=>{const E=()=>{if(f.isMounted){let{next:P,bu:L,u:N,parent:$,vnode:W}=f;{const $t=yc(f);if($t){P&&(P.el=W.el,Z(f,P,R)),$t.asyncDep.then(()=>{f.isUnmounted||E()});return}}let ee=P,ie;It(f,!1),P?(P.el=W.el,Z(f,P,R)):P=W,L&&Qn(L),(ie=P.props&&P.props.onVnodeBeforeUpdate)&&Fe(ie,$,P,W),It(f,!0);const le=qr(f),ke=f.subTree;f.subTree=le,k(ke,le,h(ke.el),v(ke),f,_,w),P.el=le.el,ee===null&&Dh(f,le.el),N&&be(N,_),(ie=P.props&&P.props.onVnodeUpdated)&&be(()=>Fe(ie,$,P,W),_)}else{let P;const{el:L,props:N}=d,{bm:$,m:W,parent:ee}=f,ie=er(d);if(It(f,!1),$&&Qn($),!ie&&(P=N&&N.onVnodeBeforeMount)&&Fe(P,ee,d),It(f,!0),L&&se){const le=()=>{f.subTree=qr(f),se(L,f.subTree,f,_,null)};ie?d.type.__asyncLoader().then(()=>!f.isUnmounted&&le()):le()}else{const le=f.subTree=qr(f);k(null,le,g,y,f,_,w),d.el=le.el}if(W&&be(W,_),!ie&&(P=N&&N.onVnodeMounted)){const le=d;be(()=>Fe(P,ee,le),_)}(d.shapeFlag&256||ee&&er(ee.vnode)&&ee.vnode.shapeFlag&256)&&f.a&&be(f.a,_),f.isMounted=!0,d=g=y=null}},I=f.effect=new zs(E,Ae,()=>ni(b),f.scope),b=f.update=()=>{I.dirty&&I.run()};b.id=f.uid,It(f,!0),b()},Z=(f,d,g)=>{d.component=f;const y=f.vnode.props;f.vnode=d,f.next=null,fp(f,d.props,y,g),pp(f,d.children,g),Mt(),Gi(f),xt()},Y=(f,d,g,y,_,w,R,E,I=!1)=>{const b=f&&f.children,P=f?f.shapeFlag:0,L=d.children,{patchFlag:N,shapeFlag:$}=d;if(N>0){if(N&128){Ze(b,L,g,y,_,w,R,E,I);return}else if(N&256){Ke(b,L,g,y,_,w,R,E,I);return}}$&8?(P&16&&pe(b,_,w),L!==b&&u(g,L)):P&16?$&16?Ze(b,L,g,y,_,w,R,E,I):pe(b,_,w,!0):(P&8&&u(g,""),$&16&&V(L,g,y,_,w,R,E,I))},Ke=(f,d,g,y,_,w,R,E,I)=>{f=f||Gt,d=d||Gt;const b=f.length,P=d.length,L=Math.min(b,P);let N;for(N=0;N<L;N++){const $=d[N]=I?it(d[N]):$e(d[N]);k(f[N],$,g,null,_,w,R,E,I)}b>P?pe(f,_,w,!0,!1,L):V(d,g,y,_,w,R,E,I,L)},Ze=(f,d,g,y,_,w,R,E,I)=>{let b=0;const P=d.length;let L=f.length-1,N=P-1;for(;b<=L&&b<=N;){const $=f[b],W=d[b]=I?it(d[b]):$e(d[b]);if(on($,W))k($,W,g,null,_,w,R,E,I);else break;b++}for(;b<=L&&b<=N;){const $=f[L],W=d[N]=I?it(d[N]):$e(d[N]);if(on($,W))k($,W,g,null,_,w,R,E,I);else break;L--,N--}if(b>L){if(b<=N){const $=N+1,W=$<P?d[$].el:y;for(;b<=N;)k(null,d[b]=I?it(d[b]):$e(d[b]),g,W,_,w,R,E,I),b++}}else if(b>N)for(;b<=L;)ye(f[b],_,w,!0),b++;else{const $=b,W=b,ee=new Map;for(b=W;b<=N;b++){const Ie=d[b]=I?it(d[b]):$e(d[b]);Ie.key!=null&&ee.set(Ie.key,b)}let ie,le=0;const ke=N-W+1;let $t=!1,li=0;const sn=new Array(ke);for(b=0;b<ke;b++)sn[b]=0;for(b=$;b<=L;b++){const Ie=f[b];if(le>=ke){ye(Ie,_,w,!0);continue}let Ue;if(Ie.key!=null)Ue=ee.get(Ie.key);else for(ie=W;ie<=N;ie++)if(sn[ie-W]===0&&on(Ie,d[ie])){Ue=ie;break}Ue===void 0?ye(Ie,_,w,!0):(sn[Ue-W]=b+1,Ue>=li?li=Ue:$t=!0,k(Ie,d[Ue],g,null,_,w,R,E,I),le++)}const ui=$t?vp(sn):Gt;for(ie=ui.length-1,b=ke-1;b>=0;b--){const Ie=W+b,Ue=d[Ie],fi=Ie+1<P?d[Ie+1].el:y;sn[b]===0?k(null,Ue,g,fi,_,w,R,E,I):$t&&(ie<0||b!==ui[ie]?xe(Ue,g,fi,2):ie--)}}},xe=(f,d,g,y,_=null)=>{const{el:w,type:R,transition:E,children:I,shapeFlag:b}=f;if(b&6){xe(f.component.subTree,d,g,y);return}if(b&128){f.suspense.move(d,g,y);return}if(b&64){R.move(f,d,g,O);return}if(R===Ge){r(w,d,g);for(let L=0;L<I.length;L++)xe(I[L],d,g,y);r(f.anchor,d,g);return}if(R===Xr){x(f,d,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(w),r(w,d,g),be(()=>E.enter(w),_);else{const{leave:L,delayLeave:N,afterLeave:$}=E,W=()=>r(w,d,g),ee=()=>{L(w,()=>{W(),$&&$()})};N?N(w,W,ee):ee()}else r(w,d,g)},ye=(f,d,g,y=!1,_=!1)=>{const{type:w,props:R,ref:E,children:I,dynamicChildren:b,shapeFlag:P,patchFlag:L,dirs:N}=f;if(E!=null&&ws(E,null,g,f,!0),P&256){d.ctx.deactivate(f);return}const $=P&1&&N,W=!er(f);let ee;if(W&&(ee=R&&R.onVnodeBeforeUnmount)&&Fe(ee,d,f),P&6)Bn(f.component,g,y);else{if(P&128){f.suspense.unmount(g,y);return}$&&wt(f,null,d,"beforeUnmount"),P&64?f.type.remove(f,d,g,_,O,y):b&&(w!==Ge||L>0&&L&64)?pe(b,d,g,!1,!0):(w===Ge&&L&384||!_&&P&16)&&pe(I,d,g),y&&Ut(f)}(W&&(ee=R&&R.onVnodeUnmounted)||$)&&be(()=>{ee&&Fe(ee,d,f),$&&wt(f,null,d,"unmounted")},g)},Ut=f=>{const{type:d,el:g,anchor:y,transition:_}=f;if(d===Ge){Ft(g,y);return}if(d===Xr){K(f);return}const w=()=>{s(g),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:R,delayLeave:E}=_,I=()=>R(g,w);E?E(f.el,w,I):I()}else w()},Ft=(f,d)=>{let g;for(;f!==d;)g=p(f),s(f),f=g;s(d)},Bn=(f,d,g)=>{const{bum:y,scope:_,update:w,subTree:R,um:E}=f;y&&Qn(y),_.stop(),w&&(w.active=!1,ye(R,f,d,g)),E&&be(E,d),be(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},pe=(f,d,g,y=!1,_=!1,w=0)=>{for(let R=w;R<f.length;R++)ye(f[R],d,g,y,_)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let C=!1;const T=(f,d,g)=>{f==null?d._vnode&&ye(d._vnode,null,null,!0):k(d._vnode||null,f,d,null,null,null,g),C||(C=!0,Gi(),tc(),C=!1),d._vnode=f},O={p:k,um:ye,m:xe,r:Ut,mt:Et,mc:V,pc:Y,pbc:oe,n:v,o:t};let X,se;return e&&([X,se]=e(O)),{render:T,hydrate:X,createApp:cp(T,X)}}function Yr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function It({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _p(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vc(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=it(s[i]),c.el=o.el),n||vc(o,c)),c.type===Lr&&(c.el=o.el)}}function vp(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function yc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yc(e)}const yp=t=>t.__isTeleport,Ge=Symbol.for("v-fgt"),Lr=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Xr=Symbol.for("v-stc"),mn=[];let Ne=null;function bc(t=!1){mn.push(Ne=t?null:[])}function bp(){mn.pop(),Ne=mn[mn.length-1]||null}let Pn=1;function so(t){Pn+=t}function Ec(t){return t.dynamicChildren=Pn>0?Ne||Gt:null,bp(),Pn>0&&Ne&&Ne.push(t),t}function $m(t,e,n,r,s,i){return Ec(Sc(t,e,n,r,s,i,!0))}function wc(t,e,n,r,s){return Ec(Te(t,e,n,r,s,!0))}function Is(t){return t?t.__v_isVNode===!0:!1}function on(t,e){return t.type===e.type&&t.key===e.key}const Dr="__vInternal",Ic=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||ce(t)||H(t)?{i:ve,r:t,k:e,f:!!n}:t:null);function Sc(t,e=null,n=null,r=0,s=null,i=t===Ge?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ic(e),ref:e&&nr(e),scopeId:sc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ve};return c?(oi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=de(n)?8:16),Pn>0&&!o&&Ne&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ne.push(a),a}const Te=Ep;function Ep(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===xh)&&(t=Lt),Is(t)){const c=Zt(t,e,!0);return n&&oi(c,n),Pn>0&&!i&&Ne&&(c.shapeFlag&6?Ne[Ne.indexOf(t)]=c:Ne.push(c)),c.patchFlag|=-2,c}if(Lp(t)&&(t=t.__vccOpts),e){e=wp(e);let{class:c,style:a}=e;c&&!de(c)&&(e.class=Ks(c)),ae(a)&&(qa(a)&&!B(a)&&(a=fe({},a)),e.style=Ws(a))}const o=de(t)?1:Fh(t)?128:yp(t)?64:ae(t)?4:H(t)?2:0;return Sc(t,e,n,r,s,o,i,!0)}function wp(t){return t?qa(t)||Dr in t?fe({},t):t:null}function Zt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?Sp(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ic(c),ref:e&&e.ref?n&&s?B(s)?s.concat(nr(e)):[s,nr(e)]:nr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zt(t.ssContent),ssFallback:t.ssFallback&&Zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ip(t=" ",e=0){return Te(Lr,null,t,e)}function Bm(t="",e=!1){return e?(bc(),wc(Lt,null,t)):Te(Lt,null,t)}function $e(t){return t==null||typeof t=="boolean"?Te(Lt):B(t)?Te(Ge,null,t.slice()):typeof t=="object"?it(t):Te(Lr,null,String(t))}function it(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zt(t)}function oi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),oi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Dr in e)?e._ctx=ve:s===3&&ve&&(ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:ve},n=32):(e=String(e),r&64?(n=16,e=[Ip(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sp(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ks([e.class,r.class]));else if(s==="style")e.style=Ws([e.style,r.style]);else if(Ir(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Fe(t,e,n,r=null){Le(t,e,7,[n,r])}const Tp=dc();let Rp=0;function Cp(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Tp,i={uid:Rp++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Na(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pc(r,s),emitsOptions:rc(r,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ah.bind(null,i),t.ce&&t.ce(i),i}let ue=null,_r,Ss;{const t=Oa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};_r=e("__VUE_INSTANCE_SETTERS__",n=>ue=n),Ss=e("__VUE_SSR_SETTERS__",n=>Mr=n)}const $n=t=>{const e=ue;return _r(t),t.scope.on(),()=>{t.scope.off(),_r(e)}},io=()=>{ue&&ue.scope.off(),_r(null)};function Tc(t){return t.vnode.shapeFlag&4}let Mr=!1;function Pp(t,e=!1){e&&Ss(e);const{props:n,children:r}=t.vnode,s=Tc(t);up(t,n,s,e),hp(t,r);const i=s?Ap(t,e):void 0;return e&&Ss(!1),i}function Ap(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ar(new Proxy(t.ctx,tp));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?kp(t):null,i=$n(t);Mt();const o=mt(r,t,0,[t.props,s]);if(xt(),i(),Aa(o)){if(o.then(io,io),e)return o.then(c=>{oo(t,c,e)}).catch(c=>{Or(c,t,0)});t.asyncDep=o}else oo(t,o,e)}else Rc(t,e)}function oo(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Qa(e)),Rc(t,n)}let ao;function Rc(t,e,n){const r=t.type;if(!t.render){if(!e&&ao&&!r.render){const s=r.template||si(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=fe(fe({isCustomElement:i,delimiters:c},o),a);r.render=ao(s,l)}}t.render=r.render||Ae}{const s=$n(t);Mt();try{np(t)}finally{xt(),s()}}}function Op(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ee(t,"get","$attrs"),e[n]}}))}function kp(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Op(t)},slots:t.slots,emit:t.emit,expose:e}}function xr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Qa(Ar(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gn)return gn[n](t)},has(e,n){return n in e||n in gn}}))}function Np(t,e=!0){return H(t)?t.displayName||t.name:t.name||e&&t.__name}function Lp(t){return H(t)&&"__vccOpts"in t}const Pe=(t,e)=>_h(t,e,Mr);function Cc(t,e,n){const r=arguments.length;return r===2?ae(e)&&!B(e)?Is(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Is(n)&&(n=[n]),Te(t,e,n))}const Dp="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Mp="http://www.w3.org/2000/svg",xp="http://www.w3.org/1998/Math/MathML",ot=typeof document<"u"?document:null,co=ot&&ot.createElement("template"),Up={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ot.createElementNS(Mp,t):e==="mathml"?ot.createElementNS(xp,t):ot.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ot.createTextNode(t),createComment:t=>ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{co.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=co.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Fp=Symbol("_vtc");function $p(t,e,n){const r=t[Fp];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lo=Symbol("_vod"),Bp=Symbol("_vsh"),Hp=Symbol(""),jp=/(^|;)\s*display\s*:/;function Vp(t,e,n){const r=t.style,s=de(n);let i=!1;if(n&&!s){if(e)if(de(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&rr(r,c,"")}else for(const o in e)n[o]==null&&rr(r,o,"");for(const o in n)o==="display"&&(i=!0),rr(r,o,n[o])}else if(s){if(e!==n){const o=r[Hp];o&&(n+=";"+o),r.cssText=n,i=jp.test(n)}}else e&&t.removeAttribute("style");lo in t&&(t[lo]=i?r.display:"",t[Bp]&&(r.display="none"))}const uo=/\s*!important$/;function rr(t,e,n){if(B(n))n.forEach(r=>rr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Wp(t,e);uo.test(n)?t.setProperty(rn(r),n.replace(uo,""),"important"):t[r]=n}}const fo=["Webkit","Moz","ms"],Qr={};function Wp(t,e){const n=Qr[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return Qr[e]=r;r=Cr(r);for(let s=0;s<fo.length;s++){const i=fo[s]+r;if(i in t)return Qr[e]=i}return e}const ho="http://www.w3.org/1999/xlink";function Kp(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ho,e.slice(6,e.length)):t.setAttributeNS(ho,e,n);else{const i=qd(e);n==null||i&&!ka(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function zp(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ka(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ht(t,e,n,r){t.addEventListener(e,n,r)}function Gp(t,e,n,r){t.removeEventListener(e,n,r)}const po=Symbol("_vei");function qp(t,e,n,r,s=null){const i=t[po]||(t[po]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Jp(e);if(r){const l=i[e]=Qp(r,s);Ht(t,c,l,a)}else o&&(Gp(t,c,o,a),i[e]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function Jp(t){let e;if(go.test(t)){e={};let r;for(;r=t.match(go);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rn(t.slice(2)),e]}let Zr=0;const Yp=Promise.resolve(),Xp=()=>Zr||(Yp.then(()=>Zr=0),Zr=Date.now());function Qp(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Le(Zp(r,n.value),e,5,[r])};return n.value=t,n.attached=Xp(),n}function Zp(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,eg=(t,e,n,r,s,i,o,c,a)=>{const l=s==="svg";e==="class"?$p(t,r,l):e==="style"?Vp(t,n,r):Ir(e)?Hs(e)||qp(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tg(t,e,r,l))?zp(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kp(t,e,r,l))};function tg(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&mo(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return mo(e)&&de(n)?!1:e in t}const _o=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>Qn(e,n):e};function ng(t){t.target.composing=!0}function vo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const es=Symbol("_assign"),Hm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[es]=_o(s);const i=r||s.props&&s.props.type==="number";Ht(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=hs(c)),t[es](c)}),n&&Ht(t,"change",()=>{t.value=t.value.trim()}),e||(Ht(t,"compositionstart",ng),Ht(t,"compositionend",vo),Ht(t,"change",vo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[es]=_o(i),t.composing)return;const o=s||t.type==="number"?hs(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},rg=["ctrl","shift","alt","meta"],sg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>rg.some(n=>t[`${n}Key`]&&!e.includes(n))},jm=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=sg[e[o]];if(c&&c(s,e))return}return t(s,...i)})},ig=fe({patchProp:eg},Up);let yo;function og(){return yo||(yo=gp(ig))}const ag=(...t)=>{const e=og().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=lg(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,cg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function cg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lg(t){return de(t)?document.querySelector(t):t}var ug=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Pc;const Ur=t=>Pc=t,Ac=Symbol();function Ts(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var _n;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(_n||(_n={}));function fg(){const t=La(!0),e=t.run(()=>Zs({}));let n=[],r=[];const s=Ar({install(i){Ur(s),s._a=i,i.provide(Ac,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!ug?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Oc=()=>{};function bo(t,e,n,r=Oc){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Da()&&Yd(s),s}function Bt(t,...e){t.slice().forEach(n=>{n(...e)})}const dg=t=>t();function Rs(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ts(s)&&Ts(r)&&t.hasOwnProperty(n)&&!ce(r)&&!gt(r)?t[n]=Rs(s,r):t[n]=r}return t}const hg=Symbol();function pg(t){return!Ts(t)||!t.hasOwnProperty(hg)}const{assign:rt}=Object;function gg(t){return!!(ce(t)&&t.effect)}function mg(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const u=Eh(n.state.value[t]);return rt(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Ar(Pe(()=>{Ur(n);const m=n._s.get(t);return o[p].call(m,m)})),h),{}))}return a=kc(t,l,e,n,r,!0),a}function kc(t,e,n={},r,s,i){let o;const c=rt({actions:{}},n),a={deep:!0};let l,u,h=[],p=[],m;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),Zs({});let k;function M(V){let j;l=u=!1,typeof V=="function"?(V(r.state.value[t]),j={type:_n.patchFunction,storeId:t,events:m}):(Rs(r.state.value[t],V),j={type:_n.patchObject,payload:V,storeId:t,events:m});const oe=k=Symbol();ti().then(()=>{k===oe&&(l=!0)}),u=!0,Bt(h,j,r.state.value[t])}const A=i?function(){const{state:j}=n,oe=j?j():{};this.$patch(he=>{rt(he,oe)})}:Oc;function D(){o.stop(),h=[],p=[],r._s.delete(t)}function x(V,j){return function(){Ur(r);const oe=Array.from(arguments),he=[],we=[];function Re(J){he.push(J)}function Et(J){we.push(J)}Bt(p,{args:oe,name:V,store:z,after:Re,onError:Et});let Ce;try{Ce=j.apply(this&&this.$id===t?this:z,oe)}catch(J){throw Bt(we,J),J}return Ce instanceof Promise?Ce.then(J=>(Bt(he,J),J)).catch(J=>(Bt(we,J),Promise.reject(J))):(Bt(he,Ce),Ce)}}const K={_p:r,$id:t,$onAction:bo.bind(null,p),$patch:M,$reset:A,$subscribe(V,j={}){const oe=bo(h,V,j.detached,()=>he()),he=o.run(()=>pn(()=>r.state.value[t],we=>{(j.flush==="sync"?u:l)&&V({storeId:t,type:_n.direct,events:m},we)},rt({},a,j)));return oe},$dispose:D},z=Fn(K);r._s.set(t,z);const re=(r._a&&r._a.runWithContext||dg)(()=>r._e.run(()=>(o=La()).run(e)));for(const V in re){const j=re[V];if(ce(j)&&!gg(j)||gt(j))i||(S&&pg(j)&&(ce(j)?j.value=S[V]:Rs(j,S[V])),r.state.value[t][V]=j);else if(typeof j=="function"){const oe=x(V,j);re[V]=oe,c.actions[V]=j}}return rt(z,re),rt(q(z),re),Object.defineProperty(z,"$state",{get:()=>r.state.value[t],set:V=>{M(j=>{rt(j,V)})}}),r._p.forEach(V=>{rt(z,o.run(()=>V({store:z,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(z.$state,S),l=!0,u=!0,z}function Vm(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,a){const l=lp();return c=c||(l?Oe(Ac,null):null),c&&Ur(c),c=Pc,c._s.has(r)||(i?kc(r,e,s,c):mg(r,s,c)),c._s.get(r)}return o.$id=r,o}const _g=ri({name:"App"}),vg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};function yg(t,e,n,r,s,i){const o=Mh("router-view");return bc(),wc(o)}const bg=vg(_g,[["render",yg]]),Eg="modulepreload",wg=function(t){return"/"+t},Eo={},ts=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=wg(o),o in Eo)return;Eo[o]=!0;const c=o.endsWith(".css"),a=c?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const p=i[h];if(p.href===o&&(!c||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":Eg,c||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),c)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ig=[{path:"/",component:()=>ts(()=>import("./HomePage-CTLwOLsT.js"),__vite__mapDeps([0,1,2]))},{path:"/register",component:()=>ts(()=>import("./Auth-BC-JIrpb.js"),__vite__mapDeps([3,1,4]))},{path:"/login",component:()=>ts(()=>import("./Auth-BC-JIrpb.js"),__vite__mapDeps([3,1,4]))}];/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof document<"u";function Sg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function ns(t,e){const n={};for(const r in e){const s=e[r];n[r]=Me(s)?s.map(t):t(s)}return n}const vn=()=>{},Me=Array.isArray,Nc=/#/g,Tg=/&/g,Rg=/\//g,Cg=/=/g,Pg=/\?/g,Lc=/\+/g,Ag=/%5B/g,Og=/%5D/g,Dc=/%5E/g,kg=/%60/g,Mc=/%7B/g,Ng=/%7C/g,xc=/%7D/g,Lg=/%20/g;function ai(t){return encodeURI(""+t).replace(Ng,"|").replace(Ag,"[").replace(Og,"]")}function Dg(t){return ai(t).replace(Mc,"{").replace(xc,"}").replace(Dc,"^")}function Cs(t){return ai(t).replace(Lc,"%2B").replace(Lg,"+").replace(Nc,"%23").replace(Tg,"%26").replace(kg,"`").replace(Mc,"{").replace(xc,"}").replace(Dc,"^")}function Mg(t){return Cs(t).replace(Cg,"%3D")}function xg(t){return ai(t).replace(Nc,"%23").replace(Pg,"%3F")}function Ug(t){return t==null?"":xg(t).replace(Rg,"%2F")}function An(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Fg=/\/$/,$g=t=>t.replace(Fg,"");function rs(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Vg(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:An(o)}}function Bg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&en(e.matched[r],n.matched[s])&&Uc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function en(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Uc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jg(t[n],e[n]))return!1;return!0}function jg(t,e){return Me(t)?Io(t,e):Me(e)?Io(e,t):t===e}function Io(t,e){return Me(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Vg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var On;(function(t){t.pop="pop",t.push="push"})(On||(On={}));var yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yn||(yn={}));function Wg(t){if(!t)if(jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$g(t)}const Kg=/^[^#]+#/;function zg(t,e){return t.replace(Kg,"#")+e}function Gg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Fr=()=>({left:window.scrollX,top:window.scrollY});function qg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Gg(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function So(t,e){return(history.state?history.state.position-e:-1)+t}const Ps=new Map;function Jg(t,e){Ps.set(t,e)}function Yg(t){const e=Ps.get(t);return Ps.delete(t),e}let Xg=()=>location.protocol+"//"+location.host;function Fc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),wo(a,"")}return wo(n,t)+r+s}function Qg(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const m=Fc(t,location),S=n.value,k=e.value;let M=0;if(p){if(n.value=m,e.value=p,o&&o===S){o=null;return}M=k?p.position-k.position:0}else r(m);s.forEach(A=>{A(n.value,S,{delta:M,type:On.pop,direction:M?M>0?yn.forward:yn.back:yn.unknown})})};function a(){o=n.value}function l(p){s.push(p);const m=()=>{const S=s.indexOf(p);S>-1&&s.splice(S,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:Fr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function To(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Fr():null}}function Zg(t){const{history:e,location:n}=window,r={value:Fc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Xg()+t+a;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(a,l){const u=Q({},e.state,To(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=Q({},s.value,e.state,{forward:a,scroll:Fr()});i(u.current,u,!0);const h=Q({},To(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function em(t){t=Wg(t);const e=Zg(t),n=Qg(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:zg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function tm(t){return typeof t=="string"||t&&typeof t=="object"}function $c(t){return typeof t=="string"||typeof t=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bc=Symbol("");var Ro;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ro||(Ro={}));function tn(t,e){return Q(new Error,{type:t,[Bc]:!0},e)}function ze(t,e){return t instanceof Error&&Bc in t&&(e==null||!!(t.type&e))}const Co="[^/]+?",nm={sensitive:!1,strict:!1,start:!0,end:!0},rm=/[.+*?^${}()[\]/\\]/g;function sm(t,e){const n=Q({},nm,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(rm,"\\$&"),m+=40;else if(p.type===1){const{value:S,repeatable:k,optional:M,regexp:A}=p;i.push({name:S,repeatable:k,optional:M});const D=A||Co;if(D!==Co){m+=10;try{new RegExp(`(${D})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${S}" (${D}): `+K.message)}}let x=k?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(x=M&&l.length<2?`(?:/${x})`:"/"+x),M&&(x+="?"),s+=x,m+=20,M&&(m+=-8),k&&(m+=-20),D===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",S=i[p-1];h[S.name]=m&&S.repeatable?m.split("/"):m}return h}function a(l){let u="",h=!1;for(const p of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:S,repeatable:k,optional:M}=m,A=S in l?l[S]:"";if(Me(A)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const D=Me(A)?A.join("/"):A;if(!D)if(M)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function im(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function om(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=im(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Po(r))return 1;if(Po(s))return-1}return s.length-r.length}function Po(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const am={type:0,value:""},cm=/[a-zA-Z0-9_]/;function lm(t){if(!t)return[[]];if(t==="/")return[[am]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:cm.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function um(t,e,n){const r=sm(lm(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function fm(t,e){const n=[],r=new Map;e=ko({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,p){const m=!p,S=dm(u);S.aliasOf=p&&p.record;const k=ko(e,u),M=[S];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const K of x)M.push(Q({},S,{components:p?p.record.components:S.components,path:K,aliasOf:p?p.record:S}))}let A,D;for(const x of M){const{path:K}=x;if(h&&K[0]!=="/"){const z=h.record.path,U=z[z.length-1]==="/"?"":"/";x.path=h.record.path+(K&&U+K)}if(A=um(x,h,k),p?p.alias.push(A):(D=D||A,D!==A&&D.alias.push(A),m&&u.name&&!Oo(A)&&o(u.name)),S.children){const z=S.children;for(let U=0;U<z.length;U++)i(z[U],A,p&&p.children[U])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&a(A)}return D?()=>{o(D)}:vn}function o(u){if($c(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&om(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Hc(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Oo(u)&&r.set(u.record.name,u)}function l(u,h){let p,m={},S,k;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw tn(1,{location:u});k=p.record.name,m=Q(Ao(h.params,p.keys.filter(D=>!D.optional).concat(p.parent?p.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),u.params&&Ao(u.params,p.keys.map(D=>D.name))),S=p.stringify(m)}else if(u.path!=null)S=u.path,p=n.find(D=>D.re.test(S)),p&&(m=p.parse(S),k=p.record.name);else{if(p=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!p)throw tn(1,{location:u,currentLocation:h});k=p.record.name,m=Q({},h.params,u.params),S=p.stringify(m)}const M=[];let A=p;for(;A;)M.unshift(A.record),A=A.parent;return{name:k,path:S,params:m,matched:M,meta:pm(M)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Ao(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function dm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Oo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pm(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function ko(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Hc(t,e){return e.children.some(n=>n===t||Hc(t,n))}function gm(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Lc," "),o=i.indexOf("="),c=An(o<0?i:i.slice(0,o)),a=o<0?null:An(i.slice(o+1));if(c in e){let l=e[c];Me(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function No(t){let e="";for(let n in t){const r=t[n];if(n=Mg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Me(r)?r.map(i=>i&&Cs(i)):[r&&Cs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mm(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Me(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const _m=Symbol(""),Lo=Symbol(""),$r=Symbol(""),ci=Symbol(""),As=Symbol("");function an(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function at(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(tn(4,{from:n,to:e})):p instanceof Error?a(p):tm(p)?a(tn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(p=>a(p))})}function ss(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(vm(a)){const u=(a.__vccOpts||a)[e];u&&i.push(at(u,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const h=Sg(u)?u.default:u;o.components[c]=h;const m=(h.__vccOpts||h)[e];return m&&at(m,n,r,o,c,s)()}))}}return i}function vm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Do(t){const e=Oe($r),n=Oe(ci),r=Pe(()=>e.resolve(qt(t.to))),s=Pe(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const p=h.findIndex(en.bind(null,u));if(p>-1)return p;const m=Mo(a[l-2]);return l>1&&Mo(u)===m&&h[h.length-1].path!==m?h.findIndex(en.bind(null,a[l-2])):p}),i=Pe(()=>s.value>-1&&wm(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&Uc(n.params,r.value.params));function c(a={}){return Em(a)?e[qt(t.replace)?"replace":"push"](qt(t.to)).catch(vn):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const ym=ri({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Do,setup(t,{slots:e}){const n=Fn(Do(t)),{options:r}=Oe($r),s=Pe(()=>({[xo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Cc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bm=ym;function Em(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Me(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Mo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xo=(t,e,n)=>t??e??n,Im=ri({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Oe(As),s=Pe(()=>t.route||r.value),i=Oe(Lo,0),o=Pe(()=>{let l=qt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=Pe(()=>s.value.matched[o.value]);tr(Lo,Pe(()=>o.value+1)),tr(_m,c),tr(As,s);const a=Zs();return pn(()=>[a.value,c.value,t.name],([l,u,h],[p,m,S])=>{u&&(u.instances[h]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!en(u,m)||!p)&&(u.enterCallbacks[h]||[]).forEach(k=>k(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,p=h&&h.components[u];if(!p)return Uo(n.default,{Component:p,route:l});const m=h.props[u],S=m?m===!0?l.params:typeof m=="function"?m(l):m:null,M=Cc(p,Q({},S,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return Uo(n.default,{Component:M,route:l})||M}}});function Uo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sm=Im;function Tm(t){const e=fm(t.routes,t),n=t.parseQuery||gm,r=t.stringifyQuery||No,s=t.history,i=an(),o=an(),c=an(),a=vh(nt);let l=nt;jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ns.bind(null,v=>""+v),h=ns.bind(null,Ug),p=ns.bind(null,An);function m(v,C){let T,O;return $c(v)?(T=e.getRecordMatcher(v),O=C):O=v,e.addRoute(O,T)}function S(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function k(){return e.getRoutes().map(v=>v.record)}function M(v){return!!e.getRecordMatcher(v)}function A(v,C){if(C=Q({},C||a.value),typeof v=="string"){const d=rs(n,v,C.path),g=e.resolve({path:d.path},C),y=s.createHref(d.fullPath);return Q(d,g,{params:p(g.params),hash:An(d.hash),redirectedFrom:void 0,href:y})}let T;if(v.path!=null)T=Q({},v,{path:rs(n,v.path,C.path).path});else{const d=Q({},v.params);for(const g in d)d[g]==null&&delete d[g];T=Q({},v,{params:h(d)}),C.params=h(C.params)}const O=e.resolve(T,C),X=v.hash||"";O.params=u(p(O.params));const se=Bg(r,Q({},v,{hash:Dg(X),path:O.path})),f=s.createHref(se);return Q({fullPath:se,hash:X,query:r===No?mm(v.query):v.query||{}},O,{redirectedFrom:void 0,href:f})}function D(v){return typeof v=="string"?rs(n,v,a.value.path):Q({},v)}function x(v,C){if(l!==v)return tn(8,{from:C,to:v})}function K(v){return re(v)}function z(v){return K(Q(D(v),{replace:!0}))}function U(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let O=typeof T=="function"?T(v):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=D(O):{path:O},O.params={}),Q({query:v.query,hash:v.hash,params:O.path!=null?{}:v.params},O)}}function re(v,C){const T=l=A(v),O=a.value,X=v.state,se=v.force,f=v.replace===!0,d=U(T);if(d)return re(Q(D(d),{state:typeof d=="object"?Q({},X,d.state):X,force:se,replace:f}),C||T);const g=T;g.redirectedFrom=C;let y;return!se&&Hg(r,O,T)&&(y=tn(16,{to:g,from:O}),xe(O,O,!0,!1)),(y?Promise.resolve(y):oe(g,O)).catch(_=>ze(_)?ze(_,2)?_:Ze(_):Y(_,g,O)).then(_=>{if(_){if(ze(_,2))return re(Q({replace:f},D(_.to),{state:typeof _.to=="object"?Q({},X,_.to.state):X,force:se}),C||g)}else _=we(g,O,!0,f,X);return he(g,O,_),_})}function V(v,C){const T=x(v,C);return T?Promise.reject(T):Promise.resolve()}function j(v){const C=Ft.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function oe(v,C){let T;const[O,X,se]=Rm(v,C);T=ss(O.reverse(),"beforeRouteLeave",v,C);for(const d of O)d.leaveGuards.forEach(g=>{T.push(at(g,v,C))});const f=V.bind(null,v,C);return T.push(f),pe(T).then(()=>{T=[];for(const d of i.list())T.push(at(d,v,C));return T.push(f),pe(T)}).then(()=>{T=ss(X,"beforeRouteUpdate",v,C);for(const d of X)d.updateGuards.forEach(g=>{T.push(at(g,v,C))});return T.push(f),pe(T)}).then(()=>{T=[];for(const d of se)if(d.beforeEnter)if(Me(d.beforeEnter))for(const g of d.beforeEnter)T.push(at(g,v,C));else T.push(at(d.beforeEnter,v,C));return T.push(f),pe(T)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),T=ss(se,"beforeRouteEnter",v,C,j),T.push(f),pe(T))).then(()=>{T=[];for(const d of o.list())T.push(at(d,v,C));return T.push(f),pe(T)}).catch(d=>ze(d,8)?d:Promise.reject(d))}function he(v,C,T){c.list().forEach(O=>j(()=>O(v,C,T)))}function we(v,C,T,O,X){const se=x(v,C);if(se)return se;const f=C===nt,d=jt?history.state:{};T&&(O||f?s.replace(v.fullPath,Q({scroll:f&&d&&d.scroll},X)):s.push(v.fullPath,X)),a.value=v,xe(v,C,T,f),Ze()}let Re;function Et(){Re||(Re=s.listen((v,C,T)=>{if(!Bn.listening)return;const O=A(v),X=U(O);if(X){re(Q(X,{replace:!0}),O).catch(vn);return}l=O;const se=a.value;jt&&Jg(So(se.fullPath,T.delta),Fr()),oe(O,se).catch(f=>ze(f,12)?f:ze(f,2)?(re(f.to,O).then(d=>{ze(d,20)&&!T.delta&&T.type===On.pop&&s.go(-1,!1)}).catch(vn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),Y(f,O,se))).then(f=>{f=f||we(O,se,!1),f&&(T.delta&&!ze(f,8)?s.go(-T.delta,!1):T.type===On.pop&&ze(f,20)&&s.go(-1,!1)),he(O,se,f)}).catch(vn)}))}let Ce=an(),J=an(),Z;function Y(v,C,T){Ze(v);const O=J.list();return O.length?O.forEach(X=>X(v,C,T)):console.error(v),Promise.reject(v)}function Ke(){return Z&&a.value!==nt?Promise.resolve():new Promise((v,C)=>{Ce.add([v,C])})}function Ze(v){return Z||(Z=!v,Et(),Ce.list().forEach(([C,T])=>v?T(v):C()),Ce.reset()),v}function xe(v,C,T,O){const{scrollBehavior:X}=t;if(!jt||!X)return Promise.resolve();const se=!T&&Yg(So(v.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return ti().then(()=>X(v,C,se)).then(f=>f&&qg(f)).catch(f=>Y(f,v,C))}const ye=v=>s.go(v);let Ut;const Ft=new Set,Bn={currentRoute:a,listening:!0,addRoute:m,removeRoute:S,hasRoute:M,getRoutes:k,resolve:A,options:t,push:K,replace:z,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:J.add,isReady:Ke,install(v){const C=this;v.component("RouterLink",bm),v.component("RouterView",Sm),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(a)}),jt&&!Ut&&a.value===nt&&(Ut=!0,K(s.location).catch(X=>{}));const T={};for(const X in nt)Object.defineProperty(T,X,{get:()=>a.value[X],enumerable:!0});v.provide($r,C),v.provide(ci,za(T)),v.provide(As,a);const O=v.unmount;Ft.add(v),v.unmount=function(){Ft.delete(v),Ft.size<1&&(l=nt,Re&&Re(),Re=null,a.value=nt,Ut=!1,Z=!1),O()}}};function pe(v){return v.reduce((C,T)=>C.then(()=>j(T)),Promise.resolve())}return Bn}function Rm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>en(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>en(l,a))||s.push(a))}return[n,r,s]}function Wm(){return Oe($r)}function Km(){return Oe(ci)}const Cm=Tm({routes:Ig,history:em()}),Pm=qo(Dd),Am=Nd();yf(Am,ba);Pm.automaticDataCollectionEnabled=!0;const Om=fg();ag(bg).use(Cm).use(Om).mount("#app");export{Lm as A,me as B,Xt as C,tl as D,Vm as E,Ge as F,Dm as G,Mm as H,Um as I,Wo as L,Ln as S,bn as _,xm as a,Gh as b,$m as c,ri as d,Sc as e,Fm as f,Nd as g,Wm as h,bc as i,Pe as j,Bm as k,jm as l,Km as m,Wt as n,zh as o,vt as p,te as q,Zs as r,ou as s,Go as t,qt as u,Hm as v,pn as w,km as x,Nm as y,We as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/HomePage-CTLwOLsT.js","assets/user-BoQ7qSre.js","assets/HomePage-DpuGFFDJ.css","assets/Auth-BC-JIrpb.js","assets/Auth-BZUK2_06.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
