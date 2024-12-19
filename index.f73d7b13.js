let e,t,r,n;var i,s,o,a,l,u,h,c,f,d,p,g,m,y,v,w,b,E,_,T,I,S,C,A,x,D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},k={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};const N=new Uint8Array(16),R=[];for(let e=0;e<256;++e)R.push((e+256).toString(16).slice(1));var L=function(t,r,n){if(k.randomUUID&&!r&&!t)return k.randomUUID();let i=(t=t||{}).random||(t.rng||function(){if(!e){if("undefined"==typeof crypto||!crypto.getRandomValues)throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");e=crypto.getRandomValues.bind(crypto)}return e(N)})();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,r){n=n||0;for(let e=0;e<16;++e)r[n+e]=i[e];return r}return function(e,t=0){return(R[e[t+0]]+R[e[t+1]]+R[e[t+2]]+R[e[t+3]]+"-"+R[e[t+4]]+R[e[t+5]]+"-"+R[e[t+6]]+R[e[t+7]]+"-"+R[e[t+8]]+R[e[t+9]]+"-"+R[e[t+10]]+R[e[t+11]]+R[e[t+12]]+R[e[t+13]]+R[e[t+14]]+R[e[t+15]]).toLowerCase()}(i)},O={},M=O={};function P(){throw Error("setTimeout has not been defined")}function U(){throw Error("clearTimeout has not been defined")}function V(e){if(a===setTimeout)return setTimeout(e,0);if((a===P||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:P}catch(e){a=P}try{l="function"==typeof clearTimeout?clearTimeout:U}catch(e){l=U}}();var F=[],B=!1,q=-1;function j(){B&&u&&(B=!1,u.length?F=u.concat(F):q=-1,F.length&&z())}function z(){if(!B){var e=V(j);B=!0;for(var t=F.length;t;){for(u=F,F=[];++q<t;)u&&u[q].run();q=-1,t=F.length}u=null,B=!1,function(e){if(l===clearTimeout)return clearTimeout(e);if((l===U||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}(e)}}function $(e,t){this.fun=e,this.array=t}function G(){}M.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];F.push(new $(e,t)),1!==F.length||B||V(z)},$.prototype.run=function(){this.fun.apply(null,this.array)},M.title="browser",M.browser=!0,M.env={},M.argv=[],M.version="",M.versions={},M.on=G,M.addListener=G,M.once=G,M.off=G,M.removeListener=G,M.removeAllListeners=G,M.emit=G,M.prependListener=G,M.prependOnceListener=G,M.listeners=function(e){return[]},M.binding=function(e){throw Error("process.binding is not supported")},M.cwd=function(){return"/"},M.chdir=function(e){throw Error("process.chdir is not supported")},M.umask=function(){return 0};/**
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
 */const K=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},H=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},Q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,h=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),n.push(r[u],r[h],r[c],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(K(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):H(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,a=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new W;let l=i<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class W extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X=function(e){let t=K(e);return Q.encodeByteArray(t,!0)},Y=function(e){return X(e).replace(/\./g,"")},J=function(e){try{return Q.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},Z=()=>/**
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
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==D)return D;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,ee=()=>{if(void 0===O||void 0===O.env)return;let e=void 0;if(e)return JSON.parse(e)},et=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&J(e[1]);return t&&JSON.parse(t)},er=()=>{try{return Z()||ee()||et()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},en=e=>{var t,r;return null===(r=null===(t=er())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},ei=e=>{let t=en(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},es=()=>{var e;return null===(e=er())||void 0===e?void 0:e.config};/**
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
 */class eo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}class ea extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,ea.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(eu,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new ea(n,o,r)}}const eu=/\{\$([^}]+)}/g;function eh(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(ec(r)&&ec(s)){if(!eh(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function ec(e){return null!==e&&"object"==typeof e}/**
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
 */function ef(e){return e&&e._delegate?e._delegate:e}class ed{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ep="[DEFAULT]";/**
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
 */class eg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new eo;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ep})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=ep){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ep){return this.instances.has(e)}getOptions(e=ep){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===ep?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=ep){return this.component?this.component.multipleInstances?e:ep:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
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
 */class em{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new eg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const ey=[];(i=h||(h={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";const ev={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},ew=h.INFO,eb={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},eE=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=eb[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class e_{constructor(e){this.name=e,this._logLevel=ew,this._logHandler=eE,this._userLogHandler=null,ey.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ev[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}}const eT=(e,t)=>t.some(t=>e instanceof t),eI=new WeakMap,eS=new WeakMap,eC=new WeakMap,eA=new WeakMap,ex=new WeakMap;let eD={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return eS.get(e);if("objectStoreNames"===t)return e.objectStoreNames||eC.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ek(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ek(e){var n;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ek(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eI.set(t,e)}).catch(()=>{}),ex.set(t,e),t}(e);if(eA.has(e))return eA.get(e);let i="function"==typeof(n=e)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(eN(this),e),ek(eI.get(this))}:function(...e){return ek(n.apply(eN(this),e))}:function(e,...t){let r=n.call(eN(this),e,...t);return eC.set(r,e.sort?e.sort():[e]),ek(r)}:(n instanceof IDBTransaction&&function(e){if(eS.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eS.set(e,t)}(n),eT(n,t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,eD):n;return i!==e&&(eA.set(e,i),ex.set(i,e)),i}const eN=e=>ex.get(e),eR=["get","getKey","getAll","getAllKeys","count"],eL=["put","add","delete","clear"],eO=new Map;function eM(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(eO.get(t))return eO.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=eL.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||eR.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return eO.set(t,s),s}eD={...n=eD,get:(e,t,r)=>eM(e,t)||n.get(e,t,r),has:(e,t)=>!!eM(e,t)||n.has(e,t)};/**
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
 */class eP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eU="@firebase/app",eV="0.10.17",eF=new e_("@firebase/app"),eB="[DEFAULT]",eq={[eU]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},ej=new Map,ez=new Map,e$=new Map;function eG(e,t){try{e.container.addComponent(t)}catch(r){eF.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function eK(e){let t=e.name;if(e$.has(t))return eF.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(e$.set(t,e),ej.values()))eG(r,e);for(let t of ez.values())eG(t,e);return!0}const eH=new el("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
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
 */class eQ{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ed("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eH.create("app-deleted",{appName:this._name})}}function eW(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:eB,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw eH.create("bad-app-name",{appName:String(i)});if(r||(r=es()),!r)throw eH.create("no-options");let s=ej.get(i);if(s){if(eh(r,s.options)&&eh(n,s.config))return s;throw eH.create("duplicate-app",{appName:i})}let o=new em(i);for(let e of e$.values())o.addComponent(e);let a=new eQ(r,n,o);return ej.set(i,a),a}function eX(e,t,r){var n;let i=null!==(n=eq[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eF.warn(e.join(" "));return}eK(new ed(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const eY="firebase-heartbeat-store";let eJ=null;function eZ(){return eJ||(eJ=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let o=indexedDB.open(e,1),a=ek(o);return n&&o.addEventListener("upgradeneeded",e=>{n(ek(o.result),e.oldVersion,e.newVersion,ek(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),a.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(eY)}catch(e){console.warn(e)}}}).catch(e=>{throw eH.create("idb-open",{originalErrorMessage:e.message})})),eJ}async function e0(e){try{let t=(await eZ()).transaction(eY),r=await t.objectStore(eY).get(e2(e));return await t.done,r}catch(e){if(e instanceof ea)eF.warn(e.message);else{let t=eH.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eF.warn(t.message)}}}async function e1(e,t){try{let r=(await eZ()).transaction(eY,"readwrite"),n=r.objectStore(eY);await n.put(t,e2(e)),await r.done}catch(e){if(e instanceof ea)eF.warn(e.message);else{let t=eH.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eF.warn(t.message)}}}function e2(e){return`${e.name}!${e.options.appId}`}class e6{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new e5(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=e3();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){eF.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=e3(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),e8(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),e8(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=Y(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return eF.warn(e),""}}}function e3(){return new Date().toISOString().substring(0,10)}class e5{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await e0(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return e1(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return e1(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function e8(e){return Y(JSON.stringify({version:2,heartbeats:e})).length}eK(new ed("platform-logger",e=>new eP(e),"PRIVATE")),eK(new ed("heartbeat",e=>new e6(e),"PRIVATE")),eX(eU,eV,""),eX(eU,eV,"esm2017"),eX("fire-js",""),/**
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
 */eX("firebase","11.1.0","app");var e4="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==D?D:"undefined"!=typeof self?self:{},e7={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+0xd76aa478&0xffffffff;o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[1]+0xe8c7b756&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[2]+0x242070db&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[3]+0xc1bdceee&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[4]+0xf57c0faf&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[5]+0x4787c62a&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[6]+0xa8304613&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[7]+0xfd469501&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[8]+0x698098d8&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[9]+0x8b44f7af&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[10]+0xffff5bb1&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[11]+0x895cd7be&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[12]+0x6b901122&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[13]+0xfd987193&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[14]+0xa679438e&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[15]+0x49b40821&0xffffffff,r=i+(o<<22&0xffffffff|o>>>10),o=t+(i^s&(r^i))+n[1]+0xf61e2562&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[6]+0xc040b340&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[11]+0x265e5a51&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[0]+0xe9b6c7aa&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[5]+0xd62f105d&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[10]+0x2441453&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[15]+0xd8a1e681&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[4]+0xe7d3fbc8&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[9]+0x21e1cde6&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[14]+0xc33707d6&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[3]+0xf4d50d87&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[8]+0x455a14ed&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[13]+0xa9e3e905&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[2]+0xfcefa3f8&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[7]+0x676f02d9&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[12]+0x8d2a4c8a&0xffffffff,o=t+((r=i+(o<<20&0xffffffff|o>>>12))^i^s)+n[5]+0xfffa3942&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[8]+0x8771f681&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[11]+0x6d9d6122&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[14]+0xfde5380c&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[1]+0xa4beea44&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[4]+0x4bdecfa9&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[7]+0xf6bb4b60&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[10]+0xbebfbc70&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[13]+0x289b7ec6&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[0]+0xeaa127fa&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[3]+0xd4ef3085&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[6]+0x4881d05&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[9]+0xd9d4d039&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[12]+0xe6db99e5&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[15]+0x1fa27cf8&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[2]+0xc4ac5665&0xffffffff,r=i+(o<<23&0xffffffff|o>>>9),o=t+(i^(r|~s))+n[0]+0xf4292244&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[7]+0x432aff97&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[14]+0xab9423a7&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[5]+0xfc93a039&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[12]+0x655b59c3&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[3]+0x8f0ccc92&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[10]+0xffeff47d&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[1]+0x85845dd1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[8]+0x6fa87e4f&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[15]+0xfe2ce6e0&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[6]+0xa3014314&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[13]+0x4e0811a1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[4]+0xf7537e82&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[11]+0xbd3af235&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[2]+0x2ad7d2bb&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(o<<21&0xffffffff|o>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function r(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,r){void 0===r&&(r=e.length);for(var n=r-this.blockSize,i=this.B,s=this.h,o=0;o<r;){if(0==s)for(;o<=n;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<r;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<r;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=r},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var n,i={};function s(e){var t;return -128<=e&&128>e?(t=function(e){return new r([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return p(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=0x100000000;return new r(t,0)}var a=s(0),l=s(1),u=s(0x1000000);function h(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return -1==e.h}function p(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function g(e,t){return e.add(p(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(h(t))throw Error("division by zero");if(h(e))return new y(a,a);if(d(e))return t=v(p(e),t),new y(p(t.g),p(t.h));if(d(t))return t=v(e,p(t)),new y(p(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var r=l,n=t;0>=n.l(e);)r=w(r),n=w(n);var i=b(r,1),s=b(n,1);for(n=b(n,2),r=b(r,2);!h(n);){var u=s.add(n);0>=u.l(e)&&(i=i.add(r),s=u),n=b(n,1),r=b(r,1)}return t=g(e,i.j(t)),new y(i,t)}for(i=a;0<=e.l(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,n-48),u=(s=o(r)).j(t);d(u)||0<u.l(e);)r-=n,u=(s=o(r)).j(t);h(s)&&(s=l),i=i.add(s),e=g(e,u)}return new y(i,e)}function w(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function b(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(n=r.prototype).m=function(){if(d(this))return-p(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:0x100000000+n)*t,t*=0x100000000}return e},n.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(d(this))return"-"+p(this).toString(e);for(var t=o(Math.pow(e,6)),r=this,n="";;){var i=v(r,t).g,s=((0<(r=g(r,i.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(h(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},n.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n.l=function(e){return d(e=g(this,e))?-1:h(e)?0:1},n.abs=function(){return d(this)?p(this):this},n.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-0x80000000&n[n.length-1]?-1:0)},n.j=function(e){if(h(this)||h(e))return a;if(d(this))return d(e)?p(this).j(p(e)):p(p(this).j(e));if(d(e))return p(this.j(p(e)));if(0>this.l(u)&&0>e.l(u))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,c=65535&this.i(i),f=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=c*g,m(n,2*i+2*s),n[2*i+2*s+1]+=l*g,m(n,2*i+2*s+1),n[2*i+2*s+1]+=c*f,m(n,2*i+2*s+1),n[2*i+2*s+2]+=l*f,m(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},n.A=function(e){return v(this,e).h},n.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},n.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},n.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,f=e7.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return p(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=o(Math.pow(r,8)),i=a,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),r);8>l?(l=o(Math.pow(r,l)),i=i.j(l).add(o(u))):i=(i=i.j(n)).add(o(u))}return i},c=e7.Integer=r}).apply(void 0!==e4?e4:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var e9="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==D?D:"undefined"!=typeof self?self:{},te={};(function(){var e,t,r,n="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof e9&&e9];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var r=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in r))break e;r=r[o]}(t=t(s=r[e=e[e.length-1]]))!=s&&null!=t&&n(r,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,r,n,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),r=0,n=!1,(i={next:function(){if(!n&&r<e.length){var i=r++;return{value:t(i,e[i]),done:!1}}return n=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var s=s||{},o=this||self;function a(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function u(e,t,r){return e.call.apply(e.bind,arguments)}function h(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function c(e,t,r){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?u:h).apply(null,arguments)}function f(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function _(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function T(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(a(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function I(e){return/^[\s\xa0]*$/.test(e)}function S(){var e=o.navigator;return e&&(e=e.userAgent)?e:""}function C(e){return C[" "](e),e}C[" "]=function(){};var A=-1!=S().indexOf("Gecko")&&!(-1!=S().toLowerCase().indexOf("webkit")&&-1==S().indexOf("Edge"))&&!(-1!=S().indexOf("Trident")||-1!=S().indexOf("MSIE"))&&-1==S().indexOf("Edge");function x(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function D(e){let t={};for(let r in e)t[r]=e[r];return t}let k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<k.length;t++)r=k[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}var R=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new L,e=>e.reset());class L{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let O,M=!1,P=new class{constructor(){this.h=this.g=null}add(e,t){let r=R.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},U=()=>{let e=o.Promise.resolve(void 0);O=()=>{e.then(V)}};var V=()=>{let e;for(var t;e=null,P.g&&(e=P.g,P.g=P.g.next,P.g||(P.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){o.setTimeout(()=>{throw e},0)}(e)}R.j(t),100>R.h&&(R.h++,t.next=R.g,R.g=t)}M=!1};function F(){this.s=this.s,this.C=this.C}function B(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}F.prototype.s=!1,F.prototype.ma=function(){this.s||(this.s=!0,this.N())},F.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},B.prototype.h=function(){this.defaultPrevented=!0};var q=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};o.addEventListener("test",e,t),o.removeEventListener("test",e,t)}catch(e){}return e}();function j(e,t){if(B.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(A){e:{try{C(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:z[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&j.aa.h.call(this)}}E(j,B);var z={2:"touch",3:"pen",4:"mouse"};j.prototype.h=function(){j.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),G=0;function K(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++G,this.da=this.fa=!1}function H(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Q(e){this.src=e,this.g={},this.h=0}function W(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(H(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function X(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}Q.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=X(e,t,n,i);return -1<o?(t=e[o],r||(t.fa=!1)):((t=new K(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var Y="closure_lm_"+(1e6*Math.random()|0),J={};function Z(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=en(e);if(a||(e[Y]=a=new Q(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return er.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)q||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(et(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function ee(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[$])W(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(et(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=en(t))?(W(r,e),0==r.h&&(r.src=null,t[Y]=null)):H(e)}}}function et(e){return e in J?J[e]:J[e]="on"+e}function er(e,t){if(e.da)e=!0;else{t=new j(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&ee(e),e=r.call(n,t)}return e}function en(e){return(e=e[Y])instanceof Q?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(e){return"function"==typeof e?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function eo(){F.call(this),this.i=new Q(this),this.M=this,this.F=null}function ea(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new B(t,e);else if(t instanceof B)t.target=t.target||e;else{var i=t;N(t=new B(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=el(o,n,!0,t)&&i}if(i=el(o=t.g=e,n,!0,t)&&i,i=el(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=el(o=t.g=r[s],n,!1,t)&&i}function el(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==r){var a=o.listener,l=o.ha||o.src;o.fa&&W(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}function eu(e,t,r){if("function"==typeof e)r&&(e=c(e,r));else if(e&&"function"==typeof e.handleEvent)e=c(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:o.setTimeout(e,t||0)}E(eo,F),eo.prototype[$]=!0,eo.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=l(i)?!!i.capture:!!i,n=es(n),t&&t[$])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=X(o=t.g[r],n,i,s))&&(H(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=en(t))&&(r=t.g[r.toString()],t=-1,r&&(t=X(r,n,i,s)),(n=-1<t?r[t]:null)&&ee(n))}(this,e,t,r,n)},eo.prototype.N=function(){if(eo.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)H(r[n]);delete t.g[e],t.h--}}this.F=null},eo.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},eo.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class eh extends F{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eu(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(e){F.call(this),this.h=e,this.g={}}E(ec,F);var ef=[];function ed(e){x(e.g,function(e,t){this.g.hasOwnProperty(t)&&ee(e)},e),e.g={}}ec.prototype.N=function(){ec.aa.N.call(this),ed(this)},ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ep=o.JSON.stringify,eg=o.JSON.parse,em=class{stringify(e){return o.JSON.stringify(e,void 0)}parse(e){return o.JSON.parse(e,void 0)}};function ey(){}function ev(e){return e.h||(e.h=e.i())}function ew(){}ey.prototype.h=null;var eb={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eE(){B.call(this,"d")}function e_(){B.call(this,"c")}E(eE,B),E(e_,B);var eT={},eI=null;function eS(){return eI=eI||new eo}function eC(e){B.call(this,eT.La,e)}function eA(e){let t=eS();ea(t,new eC(t))}function ex(e,t){B.call(this,eT.STAT_EVENT,e),this.stat=t}function eD(e){let t=eS();ea(t,new ex(t,e))}function ek(e,t){B.call(this,eT.Ma,e),this.size=t}function eN(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){e()},t)}function eR(){this.g=!0}function eL(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ep(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eT.La="serverreachability",E(eC,B),eT.STAT_EVENT="statevent",E(ex,B),eT.Ma="timingevent",E(ek,B),eR.prototype.xa=function(){this.g=!1},eR.prototype.info=function(){};var eO={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eM={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eP(){}function eU(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new ec(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eV}function eV(){this.i=null,this.g="",this.h=!1}E(eP,ey),eP.prototype.g=function(){return new XMLHttpRequest},eP.prototype.i=function(){return{}},t=new eP;var eF={},eB={};function eq(e,t,r){e.L=1,e.v=ti(e4(t)),e.m=r,e.P=!0,ej(e,null)}function ej(e,t){e.F=Date.now(),e$(e),e.A=e4(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),ty(r.i,"t",n),e.C=0,r=e.j.J,e.h=new eV,e.g=t6(e.j,r?t:null,!e.m),0<e.O&&(e.M=new eh(c(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ef[0]=i.toString()),i=ef);for(var s=0;s<i.length;s++){var o=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=es(n),t&&t[$]?t.L(r,n,l(i)?!!i.capture:!!i,s):Z(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=es(n),t&&t[$]?t.K(r,n,l(i)?!!i.capture:!!i,s):Z(t,r,n,!1,i,s)}(r,i[s],n||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?D(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),eA(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&"type"==c[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function ez(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function e$(e){e.S=Date.now()+e.I,eG(e,e.I)}function eG(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eN(c(e.ba,e),t)}function eK(e){e.B&&(o.clearTimeout(e.B),e.B=null)}function eH(e){0==e.j.G||e.J||tJ(e.j,e)}function eQ(e){eK(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ed(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eW(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||e0(r.h,e))){if(!e.K&&e0(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)tY(r),tq(r);else break e}tQ(r),eD(18)}}else r.za=i[1],0<r.za-r.T&&37500>i[2]&&r.F&&0==r.v&&!r.C&&(r.C=eN(c(r.Za,r),6e3));if(1>=eZ(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else t0(r,11)}else if((e.K||r.g==e)&&tY(r),!I(t))for(i=r.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.T=a[0],a=a[1],2==r.G){if("c"==a[0]){r.K=a[1],r.ia=a[2];let t=a[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));let i=a[4];null!=i&&(r.Aa=i,r.j.info("SVER="+r.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e1(s,s.h),s.h=null))}if(n.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,tn(n.I,n.D,e))}}if(r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms")),(n=r).qa=t2(n,n.J?n.ia:null,n.W),e.K){e2(n.h,e);var o=n.L;o&&(e.I=o),e.B&&(eK(e),e$(e)),n.g=e}else tH(n);0<r.i.length&&tz(r)}else"stop"!=a[0]&&"close"!=a[0]||t0(r,7)}else 3==r.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t0(r,7):tB(r):"noop"!=a[0]&&r.l&&r.l.ta(a),r.v=0)}}eA(4)}catch(e){}}eU.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tP(e)?t.j():this.Y(e)},eU.prototype.Y=function(e){try{if(e==this.g)e:{let f=tP(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||tU(this.g)))){this.J||4!=f||7==t||(8==t||0>=d?eA(3):eA(2)),eK(this);var r=this.g.Z();this.X=r;t:if(ez(this)){var n=tU(this.g);e="";var i=n.length,s=4==tP(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eQ(this),eH(this);var a="";break t}this.h.i=new o.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(s&&t==i-1)});n.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,f,r),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(l)){var h=l;break t}}h=null}if(r=h)eL(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eW(this,r);else{this.o=!1,this.s=3,eD(12),eQ(this),eH(this);break e}}if(this.P){let e;for(r=!0;!this.J&&this.C<a.length;)if((e=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?eB:isNaN(r=Number(t.substring(r,n)))?eF:(n+=1)+r>t.length?eB:(t=t.slice(n,n+r),e.C=n+r,t)}(this,a))==eB){4==f&&(this.s=4,eD(14),r=!1),eL(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eF){this.s=4,eD(15),eL(this.i,this.l,a,"[Invalid Chunk]"),r=!1;break}else eL(this.i,this.l,e,null),eW(this,e);if(ez(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=a.length||this.h.h||(this.s=1,eD(16),r=!1),this.o=this.o&&r,r){if(0<a.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tW(c),c.M=!0,eD(11))}}else eL(this.i,this.l,a,"[Invalid Chunked Response]"),eQ(this),eH(this)}else eL(this.i,this.l,a,null),eW(this,a);4==f&&eQ(this),this.o&&!this.J&&(4==f?tJ(this.j,this):(this.o=!1,e$(this)))}else(function(e){let t={};e=(e.g&&2<=tP(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(I(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<a.indexOf("Unknown SID")?(this.s=3,eD(12)):(this.s=0,eD(13)),eQ(this),eH(this)}}}catch(e){}finally{}},eU.prototype.cancel=function(){this.J=!0,eQ(this)},eU.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(eA(),eD(17)),eQ(this),this.s=2,eH(this)):eG(this,this.S-e)};var eX=class{constructor(e,t){this.g=e,this.map=t}};function eY(e){this.l=e||10,e=o.PerformanceNavigationTiming?0<(e=o.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eZ(e){return e.h?1:e.g?e.g.size:0}function e0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e1(e,t){e.g?e.g.add(t):e.h=t}function e2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e6(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return _(e.i)}function e3(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(a(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(a(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(a(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}eY.prototype.cancel=function(){if(this.i=e6(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e5=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e8(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e8){this.h=e.h,e7(this,e.j),this.o=e.o,this.g=e.g,tt(this,e.s),this.l=e.l;var t=e.i,r=new td;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),tr(this,r),this.m=e.m}else e&&(t=String(e).match(e5))?(this.h=!1,e7(this,t[1]||"",!0),this.o=ts(t[2]||""),this.g=ts(t[3]||"",!0),tt(this,t[4]),this.l=ts(t[5]||"",!0),tr(this,t[6]||"",!0),this.m=ts(t[7]||"")):(this.h=!1,this.i=new td(null,this.h))}function e4(e){return new e8(e)}function e7(e,t,r){e.j=r?ts(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tt(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function tr(e,t,r){var n,i;t instanceof td?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tp(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tg(this,t),ty(this,r,e))},n)),n.j=i):(r||(t=to(t,tc)),e.i=new td(t,e.h))}function tn(e,t,r){e.i.set(t,r)}function ti(e){return tn(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function ts(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function to(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,ta),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ta(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e8.prototype.toString=function(){var e=[],t=this.j;t&&e.push(to(t,tl,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(to(t,tl,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(to(r,"/"==r.charAt(0)?th:tu,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",to(r,tf)),e.join("")};var tl=/[#\/\?@]/g,tu=/[#\?:]/g,th=/[#\?]/g,tc=/[#\?@]/g,tf=/#/g;function td(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tp(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tg(e,t){tp(e),t=tv(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tm(e,t){return tp(e),t=tv(e,t),e.g.has(t)}function ty(e,t,r){tg(e,t),0<r.length&&(e.i=null,e.g.set(tv(e,t),_(r)),e.h+=r.length)}function tv(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tw(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function tb(){this.g=new em}function tE(e){this.l=e.Ub||null,this.j=e.eb||!1}function t_(e,t){eo.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tT(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tI(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tS(e)}function tS(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tC(e){let t="";return x(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function tA(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tC(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):tn(e,t,r))}function tx(e){eo.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(r=td.prototype).add=function(e,t){tp(this),this.i=null,e=tv(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},r.forEach=function(e,t){tp(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},r.na=function(){tp(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},r.V=function(e){tp(this);let t=[];if("string"==typeof e)tm(this,e)&&(t=t.concat(this.g.get(tv(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},r.set=function(e,t){return tp(this),this.i=null,tm(this,e=tv(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.V(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")},E(tE,ey),tE.prototype.g=function(){return new t_(this.l,this.j)},tE.prototype.i=(e={},function(){return e}),E(t_,eo),(r=t_.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tS(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||o).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tI(this)),this.readyState=0},r.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tS(this)),this.g&&(this.readyState=3,tS(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==o.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tT(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},r.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tI(this):tS(this),3==this.readyState&&tT(this)}},r.Ra=function(e){this.g&&(this.response=this.responseText=e,tI(this))},r.Qa=function(e){this.g&&(this.response=e,tI(this))},r.ga=function(){this.g&&tI(this)},r.setRequestHeader=function(e,t){this.u.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(t_.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),E(tx,eo);var tD=/^https?$/i,tk=["POST","PUT"];function tN(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tR(e),tO(e)}function tR(e){e.A||(e.A=!0,ea(e,"complete"),ea(e,"error"))}function tL(e){if(e.h&&void 0!==s&&(!e.v[1]||4!=tP(e)||2!=e.Z())){if(e.u&&4==tP(e))eu(e.Ea,0,e);else if(ea(e,"readystatechange"),4==tP(e)){e.h=!1;try{let s=e.Z();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===s){var i=String(e.D).match(e5)[1]||null;!i&&o.self&&o.self.location&&(i=o.self.location.protocol.slice(0,-1)),r=!tD.test(i?i.toLowerCase():"")}t=r}if(t)ea(e,"complete"),ea(e,"success");else{e.m=6;try{var a=2<tP(e)?e.g.statusText:""}catch(e){a=""}e.l=a+" ["+e.Z()+"]",tR(e)}}finally{tO(e)}}}}function tO(e,t){if(e.g){tM(e);let r=e.g,n=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||ea(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function tM(e){e.I&&(o.clearTimeout(e.I),e.I=null)}function tP(e){return e.g?e.g.readyState:0}function tU(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tV(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tF(e){this.Aa=0,this.i=[],this.j=new eR,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tV("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tV("baseRetryDelayMs",5e3,e),this.cb=tV("retryDelaySeedMs",1e4,e),this.Wa=tV("forwardChannelMaxRetries",2,e),this.wa=tV("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eY(e&&e.concurrentRequestLimit),this.Da=new tb,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tB(e){if(tj(e),3==e.G){var t=e.U++,r=e4(e.I);if(tn(r,"SID",e.K),tn(r,"RID",t),tn(r,"TYPE","terminate"),tG(e,r),(t=new eU(e,e.j,t)).L=2,t.v=ti(e4(r)),r=!1,o.navigator&&o.navigator.sendBeacon)try{r=o.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&o.Image&&((new Image).src=t.v,r=!0),r||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),e$(t)}t1(e)}function tq(e){e.g&&(tW(e),e.g.cancel(),e.g=null)}function tj(e){tq(e),e.u&&(o.clearTimeout(e.u),e.u=null),tY(e),e.h.cancel(),e.s&&("number"==typeof e.s&&o.clearTimeout(e.s),e.s=null)}function tz(e){if(!eJ(e.h)&&!e.s){e.s=!0;var t=e.Ga;O||U(),M||(O(),M=!0),P.add(t,e),e.B=0}}function t$(e,t){var r;r=t?t.l:e.U++;let n=e4(e.I);tn(n,"SID",e.K),tn(n,"RID",r),tn(n,"AID",e.T),tG(e,n),e.m&&e.o&&tA(n,e.m,e.o),r=new eU(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tK(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e1(e.h,r),eq(r,n,t)}function tG(e,t){e.H&&x(e.H,function(e,r){tn(t,r,e)}),e.l&&e3({},function(e,r){tn(t,r,e)})}function tK(e,t,r){r=Math.min(e.i.length,r);var n=e.l?c(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g,a=i[o].map;if(0>(r-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{e3(e,function(e,r){let i=e;l(e)&&(i=ep(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function tH(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;O||U(),M||(O(),M=!0),P.add(t,e),e.v=0}}function tQ(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eN(c(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tW(e){null!=e.A&&(o.clearTimeout(e.A),e.A=null)}function tX(e){e.g=new eU(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e4(e.qa);tn(t,"RID","rpc"),tn(t,"SID",e.K),tn(t,"AID",e.T),tn(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tn(t,"TO",e.ja),tn(t,"TYPE","xmlhttp"),tG(e,t),e.m&&e.o&&tA(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=ti(e4(t)),r.m=null,r.P=!0,ej(r,e)}function tY(e){null!=e.C&&(o.clearTimeout(e.C),e.C=null)}function tJ(e,t){var r=null;if(e.g==t){tY(e),tW(e),e.g=null;var n=2}else{if(!e0(e.h,t))return;r=t.D,e2(e.h,t),n=1}if(0!=e.G){if(t.o){if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;ea(n=eS(),new ek(n,r)),tz(e)}else tH(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==n&&(i=t,!(eZ(e.h)>=e.h.j-(e.s?1:0))&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eN(c(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==n&&tQ(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var r=c(e.fb,e),n=e.Xa;let t=!n;n=new e8(n||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||e7(n,"https"),ti(n),t?function(e,t){let r=new eR;if(o.Image){let n=new Image;n.onload=f(tw,r,"TestLoadImage: loaded",!0,t,n),n.onerror=f(tw,r,"TestLoadImage: error",!1,t,n),n.onabort=f(tw,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=f(tw,r,"TestLoadImage: timeout",!1,t,n),o.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){let r=new eR,n=new AbortController,i=setTimeout(()=>{n.abort(),tw(r,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?tw(r,"TestPingServer: ok",!0,t):tw(r,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tw(r,"TestPingServer: error",!1,t)})}(n.toString(),r)}else eD(2);e.G=0,e.l&&e.l.sa(t),t1(e),tj(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e6(e.h);(0!=t.length||0!=e.i.length)&&(T(e.ka,t),T(e.ka,e.i),e.h.i.length=0,_(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,r){var n=r instanceof e8?e4(r):new e8(r);if(""!=n.g)t&&(n.g=t+"."+n.g),tt(n,n.s);else{var i=o.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e8(null);n&&e7(s,n),t&&(s.g=t),i&&tt(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.ya,r&&t&&tn(n,r,t),tn(n,"VER",e.la),tG(e,n),n}function t6(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tx(e.Ca&&!e.pa?new tE({eb:r}):e.pa)).Ha(e.J),t}function t3(){}function t5(){}function t8(e,t){eo.call(this),this.g=new tF(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!I(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!I(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t9(this)}function t4(e){eE.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t7(){e_.call(this),this.status=1}function t9(e){this.g=e}(r=tx.prototype).Ha=function(e){this.J=e},r.ea=function(e,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?ev(this.o):ev(t),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(e){tN(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,a]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=o.FormData&&e instanceof o.FormData,!(0<=Array.prototype.indexOf.call(tk,r,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(t,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tM(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tN(this,e)}},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,ea(this,"complete"),ea(this,"abort"),tO(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tO(this,!0)),tx.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tL(this):this.bb())},r.bb=function(){tL(this)},r.isActive=function(){return!!this.g},r.Z=function(){try{return 2<tP(this)?this.g.status:-1}catch(e){return -1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eg(t)}},r.Ba=function(){return this.m},r.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=tF.prototype).la=8,r.G=1,r.connect=function(e,t,r,n){eD(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=t2(this,null,this.W),tz(this)},r.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eU(this,this.j,e),s=this.o;if(this.S&&(s?N(s=D(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tK(this,i,t),tn(r=e4(this.I),"RID",e),tn(r,"CVER",22),this.D&&tn(r,"X-HTTP-Session-Id",this.D),tG(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(tC(s)))+"&"+t:this.m&&tA(r,this.m,s)),e1(this.h,i),this.Ua&&tn(r,"TYPE","init"),this.P?(tn(r,"$req",t),tn(r,"SID","null"),i.T=!0,eq(i,r,null)):eq(i,r,t),this.G=2}}else 3==this.G&&(e?t$(this,e):0==this.i.length||eJ(this.h)||t$(this))}},r.Fa=function(){if(this.u=null,tX(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eN(c(this.ab,this),e)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eD(10),tq(this),tX(this))},r.Za=function(){null!=this.C&&(this.C=null,tq(this),tQ(this),eD(19))},r.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eD(2)):(this.j.info("Failed to ping google.com"),eD(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=t3.prototype).ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){},t5.prototype.g=function(e,t){return new t8(e,t)},E(t8,eo),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){tB(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=ep(e),e=r);t.i.push(new eX(t.Ya++,e)),3==t.G&&tz(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,tB(this.g),delete this.g,t8.aa.N.call(this)},E(t4,eE),E(t7,e_),E(t9,t3),t9.prototype.ua=function(){ea(this.g,"a")},t9.prototype.ta=function(e){ea(this.g,new t4(e))},t9.prototype.sa=function(e){ea(this.g,new t7)},t9.prototype.ra=function(){ea(this.g,"b")},t5.prototype.createWebChannel=t5.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,b=te.createWebChannelTransport=function(){return new t5},w=te.getStatEventTarget=function(){return eS()},v=te.Event=eT,y=te.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eO.NO_ERROR=0,eO.TIMEOUT=8,eO.HTTP_ERROR=6,m=te.ErrorCode=eO,eM.COMPLETE="complete",g=te.EventType=eM,ew.EventType=eb,eb.OPEN="a",eb.CLOSE="b",eb.ERROR="c",eb.MESSAGE="d",eo.prototype.listen=eo.prototype.K,p=te.WebChannel=ew,te.FetchXmlHttpFactory=tE,tx.prototype.listenOnce=tx.prototype.L,tx.prototype.getLastError=tx.prototype.Ka,tx.prototype.getLastErrorCode=tx.prototype.Ba,tx.prototype.getStatus=tx.prototype.Z,tx.prototype.getResponseJson=tx.prototype.Oa,tx.prototype.getResponseText=tx.prototype.oa,tx.prototype.send=tx.prototype.ea,tx.prototype.setWithCredentials=tx.prototype.Ha,d=te.XhrIo=tx}).apply(void 0!==e9?e9:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),E=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],o=new tn((i+s)*3/4-s),a=0,l=s>0?i-4:i;for(r=0;r<l;r+=4)t=tr[e.charCodeAt(r)]<<18|tr[e.charCodeAt(r+1)]<<12|tr[e.charCodeAt(r+2)]<<6|tr[e.charCodeAt(r+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return 2===s&&(t=tr[e.charCodeAt(r)]<<2|tr[e.charCodeAt(r+1)]>>4,o[a++]=255&t),1===s&&(t=tr[e.charCodeAt(r)]<<10|tr[e.charCodeAt(r+1)]<<4|tr[e.charCodeAt(r+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o},_=function(e){for(var t,r=e.length,n=r%3,i=[],s=0,o=r-n;s<o;s+=16383)i.push(function(e,t,r){for(var n,i=[],s=t;s<r;s+=3)i.push(tt[(n=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+tt[n>>12&63]+tt[n>>6&63]+tt[63&n]);return i.join("")}(e,s,s+16383>o?o:s+16383));return 1===n?i.push(tt[(t=e[r-1])>>2]+tt[t<<4&63]+"=="):2===n&&i.push(tt[(t=(e[r-2]<<8)+e[r-1])>>10]+tt[t>>4&63]+tt[t<<2&63]+"="),i.join("")};for(var tt=[],tr=[],tn="undefined"!=typeof Uint8Array?Uint8Array:Array,ti="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ts=0,to=ti.length;ts<to;++ts)tt[ts]=ti[ts],tr[ti.charCodeAt(ts)]=ts;tr["-".charCodeAt(0)]=62,tr["_".charCodeAt(0)]=63,T=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,u=l>>1,h=-7,c=r?i-1:0,f=r?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-h)-1,d>>=-h,h+=a;h>0;s=256*s+e[t+c],c+=f,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=n;h>0;o=256*o+e[t+c],c+=f,h-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),s-=u}return(d?-1:1)*o*Math.pow(2,s-n)},I=function(e,t,r,n,i,s){var o,a,l,u=8*s-i-1,h=(1<<u)-1,c=h>>1,f=23===i?5960464477539062e-23:0,d=n?0:s-1,p=n?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=h?(a=0,o=h):o+c>=1?(a=(t*l-1)*Math.pow(2,i),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[r+d]=255&o,d+=p,o/=256,u-=8);e[r+d-p]|=128*g};var ta="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function tl(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,tu.prototype),t}function tu(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return tf(e)}return th(e,t,r)}function th(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!tu.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|tm(e,t),n=tl(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(tN(e,Uint8Array)){var t=new Uint8Array(e);return tp(t.buffer,t.byteOffset,t.byteLength)}return td(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(tN(e,ArrayBuffer)||e&&tN(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tN(e,SharedArrayBuffer)||e&&tN(e.buffer,SharedArrayBuffer)))return tp(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return tu.from(n,t,r);var i=function(e){if(tu.isBuffer(e)){var t,r=0|tg(e.length),n=tl(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?tl(0):td(e):"Buffer"===e.type&&Array.isArray(e.data)?td(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return tu.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function tc(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function tf(e){return tc(e),tl(e<0?0:0|tg(e))}function td(e){for(var t=e.length<0?0:0|tg(e.length),r=tl(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function tp(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),tu.prototype),n}function tg(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function tm(e,t){if(tu.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||tN(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tx(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tD(e).length;default:if(i)return n?-1:tx(e).length;t=(""+t).toLowerCase(),i=!0}}function ty(e,t,r){var n,i,s=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",s=t;s<r;++s)i+=tR[e[s]];return i}(this,t,r);case"utf8":case"utf-8":return tE(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return n=t,i=r,0===n&&i===this.length?_(this):_(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),i="",s=0;s<n.length-1;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function tv(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function tw(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=tu.from(t,n)),tu.isBuffer(t))return 0===t.length?-1:tb(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):tb(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function tb(e,t,r,n,i){var s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var h=-1;for(s=r;s<a;s++)if(u(e,s)===u(t,-1===h?0:s-h)){if(-1===h&&(h=s),s-h+1===l)return h*o}else -1!==h&&(s-=s-h),h=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){for(var c=!0,f=0;f<l;f++)if(u(e,s+f)!==u(t,f)){c=!1;break}if(c)return s}return -1}function tE(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var s,o,a,l,u=e[i],h=null,c=u>239?4:u>223?3:u>191?2:1;if(i+c<=r)switch(c){case 1:u<128&&(h=u);break;case 2:(192&(s=e[i+1]))==128&&(l=(31&u)<<6|63&s)>127&&(h=l);break;case 3:s=e[i+1],o=e[i+2],(192&s)==128&&(192&o)==128&&(l=(15&u)<<12|(63&s)<<6|63&o)>2047&&(l<55296||l>57343)&&(h=l);break;case 4:s=e[i+1],o=e[i+2],a=e[i+3],(192&s)==128&&(192&o)==128&&(192&a)==128&&(l=(15&u)<<18|(63&s)<<12|(63&o)<<6|63&a)>65535&&l<1114112&&(h=l)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function t_(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function tT(e,t,r,n,i,s){if(!tu.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function tI(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function tS(e,t,r,n,i){return t=+t,r>>>=0,i||tI(e,t,r,4,34028234663852886e22,-34028234663852886e22),I(e,t,r,n,23,4),r+4}function tC(e,t,r,n,i){return t=+t,r>>>=0,i||tI(e,t,r,8,17976931348623157e292,-17976931348623157e292),I(e,t,r,n,52,8),r+8}tu.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),tu.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tu.prototype,"parent",{enumerable:!0,get:function(){if(tu.isBuffer(this))return this.buffer}}),Object.defineProperty(tu.prototype,"offset",{enumerable:!0,get:function(){if(tu.isBuffer(this))return this.byteOffset}}),tu.poolSize=8192,tu.from=function(e,t,r){return th(e,t,r)},Object.setPrototypeOf(tu.prototype,Uint8Array.prototype),Object.setPrototypeOf(tu,Uint8Array),tu.alloc=function(e,t,r){return(tc(e),e<=0)?tl(e):void 0!==t?"string"==typeof r?tl(e).fill(t,r):tl(e).fill(t):tl(e)},tu.allocUnsafe=function(e){return tf(e)},tu.allocUnsafeSlow=function(e){return tf(e)},tu.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==tu.prototype},tu.compare=function(e,t){if(tN(e,Uint8Array)&&(e=tu.from(e,e.offset,e.byteLength)),tN(t,Uint8Array)&&(t=tu.from(t,t.offset,t.byteLength)),!tu.isBuffer(e)||!tu.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},tu.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tu.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return tu.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=tu.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var s=e[r];if(tN(s,Uint8Array))i+s.length>n.length?tu.from(s).copy(n,i):Uint8Array.prototype.set.call(n,s,i);else if(tu.isBuffer(s))s.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=s.length}return n},tu.byteLength=tm,tu.prototype._isBuffer=!0,tu.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)tv(this,t,t+1);return this},tu.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)tv(this,t,t+3),tv(this,t+1,t+2);return this},tu.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)tv(this,t,t+7),tv(this,t+1,t+6),tv(this,t+2,t+5),tv(this,t+3,t+4);return this},tu.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?tE(this,0,e):ty.apply(this,arguments)},tu.prototype.toLocaleString=tu.prototype.toString,tu.prototype.equals=function(e){if(!tu.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===tu.compare(this,e)},tu.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},ta&&(tu.prototype[ta]=tu.prototype.inspect),tu.prototype.compare=function(e,t,r,n,i){if(tN(e,Uint8Array)&&(e=tu.from(e,e.offset,e.byteLength)),!tu.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var s=i-n,o=r-t,a=Math.min(s,o),l=this.slice(n,i),u=e.slice(t,r),h=0;h<a;++h)if(l[h]!==u[h]){s=l[h],o=u[h];break}return s<o?-1:o<s?1:0},tu.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},tu.prototype.indexOf=function(e,t,r){return tw(this,e,t,r,!0)},tu.prototype.lastIndexOf=function(e,t,r){return tw(this,e,t,r,!1)},tu.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,s,o,a,l,u,h,c,f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var d=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var s=t.length;n>s/2&&(n=s/2);for(var o=0;o<n;++o){var a=parseInt(t.substr(2*o,2),16);if(a!=a)break;e[r+o]=a}return o}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,tk(tx(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,tk(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,u=r,tk(tD(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,c=r,tk(function(e,t){for(var r,n,i=[],s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-h),this,h,c);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},tu.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tu.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,tu.prototype),n},tu.prototype.readUintLE=tu.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||t_(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n},tu.prototype.readUintBE=tu.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||t_(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},tu.prototype.readUint8=tu.prototype.readUInt8=function(e,t){return e>>>=0,t||t_(e,1,this.length),this[e]},tu.prototype.readUint16LE=tu.prototype.readUInt16LE=function(e,t){return e>>>=0,t||t_(e,2,this.length),this[e]|this[e+1]<<8},tu.prototype.readUint16BE=tu.prototype.readUInt16BE=function(e,t){return e>>>=0,t||t_(e,2,this.length),this[e]<<8|this[e+1]},tu.prototype.readUint32LE=tu.prototype.readUInt32LE=function(e,t){return e>>>=0,t||t_(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},tu.prototype.readUint32BE=tu.prototype.readUInt32BE=function(e,t){return e>>>=0,t||t_(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},tu.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||t_(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},tu.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||t_(e,t,this.length);for(var n=t,i=1,s=this[e+--n];n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},tu.prototype.readInt8=function(e,t){return(e>>>=0,t||t_(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},tu.prototype.readInt16LE=function(e,t){e>>>=0,t||t_(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},tu.prototype.readInt16BE=function(e,t){e>>>=0,t||t_(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},tu.prototype.readInt32LE=function(e,t){return e>>>=0,t||t_(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},tu.prototype.readInt32BE=function(e,t){return e>>>=0,t||t_(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},tu.prototype.readFloatLE=function(e,t){return e>>>=0,t||t_(e,4,this.length),T(this,e,!0,23,4)},tu.prototype.readFloatBE=function(e,t){return e>>>=0,t||t_(e,4,this.length),T(this,e,!1,23,4)},tu.prototype.readDoubleLE=function(e,t){return e>>>=0,t||t_(e,8,this.length),T(this,e,!0,52,8)},tu.prototype.readDoubleBE=function(e,t){return e>>>=0,t||t_(e,8,this.length),T(this,e,!1,52,8)},tu.prototype.writeUintLE=tu.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;tT(this,e,t,r,i,0)}var s=1,o=0;for(this[t]=255&e;++o<r&&(s*=256);)this[t+o]=e/s&255;return t+r},tu.prototype.writeUintBE=tu.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;tT(this,e,t,r,i,0)}var s=r-1,o=1;for(this[t+s]=255&e;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+r},tu.prototype.writeUint8=tu.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,1,255,0),this[t]=255&e,t+1},tu.prototype.writeUint16LE=tu.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},tu.prototype.writeUint16BE=tu.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},tu.prototype.writeUint32LE=tu.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},tu.prototype.writeUint32BE=tu.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},tu.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);tT(this,e,t,r,i-1,-i)}var s=0,o=1,a=0;for(this[t]=255&e;++s<r&&(o*=256);)e<0&&0===a&&0!==this[t+s-1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},tu.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);tT(this,e,t,r,i-1,-i)}var s=r-1,o=1,a=0;for(this[t+s]=255&e;--s>=0&&(o*=256);)e<0&&0===a&&0!==this[t+s+1]&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+r},tu.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},tu.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},tu.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},tu.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},tu.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||tT(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},tu.prototype.writeFloatLE=function(e,t,r){return tS(this,e,t,!0,r)},tu.prototype.writeFloatBE=function(e,t,r){return tS(this,e,t,!1,r)},tu.prototype.writeDoubleLE=function(e,t,r){return tC(this,e,t,!0,r)},tu.prototype.writeDoubleBE=function(e,t,r){return tC(this,e,t,!1,r)},tu.prototype.copy=function(e,t,r,n){if(!tu.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},tu.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!tu.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var i,s=e.charCodeAt(0);("utf8"===n&&s<128||"latin1"===n)&&(e=s)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var o=tu.isBuffer(e)?e:tu.from(e,n),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%a]}return this};var tA=/[^+/0-9A-Za-z-_]/g;function tx(e,t){t=t||1/0;for(var r,n=e.length,i=null,s=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function tD(e){return E(function(e){if((e=(e=e.split("=")[0]).trim().replace(tA,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function tk(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function tN(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var tR=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();const tL="@firebase/firestore";/**
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
 */class tO{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tO.UNAUTHENTICATED=new tO(null),tO.GOOGLE_CREDENTIALS=new tO("google-credentials-uid"),tO.FIRST_PARTY=new tO("first-party-uid"),tO.MOCK_USER=new tO("mock-user");/**
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
 */let tM="11.0.2";/**
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
 */const tP=new e_("@firebase/firestore");function tU(){return tP.logLevel}function tV(e,...t){if(tP.logLevel<=h.DEBUG){let r=t.map(tq);tP.debug(`Firestore (${tM}): ${e}`,...r)}}function tF(e,...t){if(tP.logLevel<=h.ERROR){let r=t.map(tq);tP.error(`Firestore (${tM}): ${e}`,...r)}}function tB(e,...t){if(tP.logLevel<=h.WARN){let r=t.map(tq);tP.warn(`Firestore (${tM}): ${e}`,...r)}}function tq(e){if("string"==typeof e)return e;try{/**
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
 */return JSON.stringify(e)}catch(t){return e}}/**
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
 */function tj(e="Unexpected state"){let t=`FIRESTORE (${tM}) INTERNAL ASSERTION FAILED: `+e;throw tF(t),Error(t)}/**
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
 */const tz={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class t$ extends ea{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tG{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class tK{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tH{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tO.UNAUTHENTICATED))}shutdown(){}}class tQ{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tW{constructor(e){this.t=e,this.currentUser=tO.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||tj();let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new tG;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tG,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{tV("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(tV("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tG)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(tV("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||tj(),new tK(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||tj(),new tO(e)}}class tX{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tO.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class tY{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new tX(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tO.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tJ{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tZ{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){void 0===this.o||tj();let r=e=>{null!=e.error&&tV("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,tV("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{tV("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):tV("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||tj(),this.R=e.token,new tJ(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class t0{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
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
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(0);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function t1(e,t){return e<t?-1:e>t?1:0}function t2(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
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
 */class t6{static now(){return t6.fromMillis(Date.now())}static fromDate(e){return t6.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new t6(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new t$(tz.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new t$(tz.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?t1(this.nanoseconds,e.nanoseconds):t1(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class t3{static fromTimestamp(e){return new t3(e)}static min(){return new t3(new t6(0,0))}static max(){return new t3(new t6(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class t5{constructor(e,t,r){void 0===t?t=0:t>e.length&&tj(),void 0===r?r=e.length-t:r>e.length-t&&tj(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===t5.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof t5?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class t8 extends t5{construct(e,t,r){return new t8(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new t$(tz.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new t8(t)}static emptyPath(){return new t8([])}}const t4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class t7 extends t5{construct(e,t,r){return new t7(e,t,r)}static isValidIdentifier(e){return t4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),t7.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new t7(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new t$(tz.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new t$(tz.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new t$(tz.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new t$(tz.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new t7(t)}static emptyPath(){return new t7([])}}/**
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
 */class t9{constructor(e){this.path=e}static fromPath(e){return new t9(t8.fromString(e))}static fromName(e){return new t9(t8.fromString(e).popFirst(5))}static empty(){return new t9(t8.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===t8.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return t8.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new t9(new t8(e.slice()))}}class re{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new re(t3.min(),t9.empty(),-1)}static max(){return new re(t3.max(),t9.empty(),-1)}}class rt{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rr(e){if(e.code!==tz.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;tV("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class rn{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&tj(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new rn((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof rn?t:rn.resolve(t)}catch(e){return rn.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):rn.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):rn.reject(t)}static resolve(e){return new rn((t,r)=>{t(e)})}static reject(e){return new rn((t,r)=>{r(e)})}static waitFor(e){return new rn((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=rn.resolve(!1);for(let r of e)t=t.next(e=>e?rn.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new rn((r,n)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new rn((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function ri(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class rs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function ro(e){return 0===e&&1/e==-1/0}/**
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
 */function ra(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function rl(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function ru(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}rs.oe=-1;/**
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
 */class rh{constructor(e,t){this.comparator=e,this.root=t||rf.EMPTY}insert(e,t){return new rh(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rf.BLACK,null,null))}remove(e){return new rh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rf.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rc(this.root,e,this.comparator,!1)}getReverseIterator(){return new rc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rc(this.root,e,this.comparator,!0)}}class rc{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rf{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:rf.RED,this.left=null!=n?n:rf.EMPTY,this.right=null!=i?i:rf.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new rf(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return rf.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return rf.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rf.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rf.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw tj();let e=this.left.check();if(e!==this.right.check())throw tj();return e+(this.isRed()?0:1)}}rf.EMPTY=null,rf.RED=!0,rf.BLACK=!1,rf.EMPTY=new class{constructor(){this.size=0}get key(){throw tj()}get value(){throw tj()}get color(){throw tj()}get left(){throw tj()}get right(){throw tj()}copy(e,t,r,n,i){return this}insert(e,t,r){return new rf(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rd{constructor(e){this.comparator=e,this.data=new rh(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new rp(this.data.getIterator())}getIteratorFrom(e){return new rp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rd)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rd(this.comparator);return t.data=e,t}}class rp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rg{constructor(e){this.fields=e,e.sort(t7.comparator)}static empty(){return new rg([])}unionWith(e){let t=new rd(t7.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new rg(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return t2(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
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
 */class rm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ry{constructor(e){this.binaryString=e}static fromBase64String(e){return new ry(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new rm("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new ry(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return t1(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ry.EMPTY_BYTE_STRING=new ry("");const rv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rw(e){if(e||tj(),"string"==typeof e){let t=0,r=rv.exec(e);if(r||tj(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:rb(e.seconds),nanos:rb(e.nanos)}}function rb(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function rE(e){return"string"==typeof e?ry.fromBase64String(e):ry.fromUint8Array(e)}/**
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
 */function r_(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function rT(e){let t=e.mapValue.fields.__previous_value__;return r_(t)?rT(t):t}function rI(e){let t=rw(e.mapValue.fields.__local_write_time__.timestampValue);return new t6(t.seconds,t.nanos)}/**
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
 */class rS{constructor(e,t,r,n,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class rC{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new rC("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof rC&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const rA={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rx(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?r_(e)?4:rz(e)?0x1fffffffffffff:rq(e)?10:11:tj()}function rD(e,t){if(e===t)return!0;let r=rx(e);if(r!==rx(t))return!1;switch(r){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rI(e).isEqual(rI(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=rw(e.timestampValue),n=rw(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return rE(e.bytesValue).isEqual(rE(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rb(e.geoPointValue.latitude)===rb(t.geoPointValue.latitude)&&rb(e.geoPointValue.longitude)===rb(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rb(e.integerValue)===rb(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=rb(e.doubleValue),n=rb(t.doubleValue);return r===n?ro(r)===ro(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return t2(e.arrayValue.values||[],t.arrayValue.values||[],rD);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(ra(r)!==ra(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!rD(r[e],n[e])))return!1;return!0}(e,t);default:return tj()}}function rk(e,t){return void 0!==(e.values||[]).find(e=>rD(e,t))}function rN(e,t){if(e===t)return 0;let r=rx(e),n=rx(t);if(r!==n)return t1(r,n);switch(r){case 0:case 0x1fffffffffffff:return 0;case 1:return t1(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=rb(e.integerValue||e.doubleValue),n=rb(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return rR(e.timestampValue,t.timestampValue);case 4:return rR(rI(e),rI(t));case 5:return t1(e.stringValue,t.stringValue);case 6:return function(e,t){let r=rE(e),n=rE(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=t1(r[e],n[e]);if(0!==t)return t}return t1(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=t1(rb(e.latitude),rb(t.latitude));return 0!==r?r:t1(rb(e.longitude),rb(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return rL(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let o=e.fields||{},a=t.fields||{},l=null===(r=o.value)||void 0===r?void 0:r.arrayValue,u=null===(n=a.value)||void 0===n?void 0:n.arrayValue,h=t1((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:rL(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===rA.mapValue&&t===rA.mapValue)return 0;if(e===rA.mapValue)return 1;if(t===rA.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=t1(n[e],s[e]);if(0!==t)return t;let o=rN(r[n[e]],i[s[e]]);if(0!==o)return o}return t1(n.length,s.length)}(e.mapValue,t.mapValue);default:throw tj()}}function rR(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return t1(e,t);let r=rw(e),n=rw(t),i=t1(r.seconds,n.seconds);return 0!==i?i:t1(r.nanos,n.nanos)}function rL(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=rN(r[e],n[e]);if(t)return t}return t1(r.length,n.length)}function rO(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rw(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?rE(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,t9.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=rO(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${rO(e.fields[i])}`;return r+"}"}(e.mapValue):tj()}function rM(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function rP(e){return!!e&&"integerValue"in e}function rU(e){return!!e&&"arrayValue"in e}function rV(e){return!!e&&"nullValue"in e}function rF(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rB(e){return!!e&&"mapValue"in e}function rq(e){var t,r;return"__vector__"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function rj(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return rl(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rj(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=rj(e.arrayValue.values[r]);return t}return Object.assign({},e)}function rz(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
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
 */class r${constructor(e){this.value=e}static empty(){return new r$({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!rB(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rj(t)}setAll(e){let t=t7.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=rj(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());rB(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rD(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];rB(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(rl(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new r$(rj(this.value))}}/**
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
 */class rG{constructor(e,t,r,n,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new rG(e,0,t3.min(),t3.min(),t3.min(),r$.empty(),0)}static newFoundDocument(e,t,r,n){return new rG(e,1,t,t3.min(),r,n,0)}static newNoDocument(e,t){return new rG(e,2,t,t3.min(),t3.min(),r$.empty(),0)}static newUnknownDocument(e,t){return new rG(e,3,t,t3.min(),t3.min(),r$.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(t3.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=r$.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=r$.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=t3.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rG&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rG(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class rK{constructor(e,t){this.position=e,this.inclusive=t}}function rH(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(n=s.field.isKeyField()?t9.comparator(t9.fromName(o.referenceValue),r.key):rN(o,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function rQ(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!rD(e.position[r],t.position[r]))return!1;return!0}/**
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
 */class rW{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
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
 */class rX{}class rY extends rX{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new r1(e,t,r):"array-contains"===t?new r5(e,r):"in"===t?new r8(e,r):"not-in"===t?new r4(e,r):"array-contains-any"===t?new r7(e,r):new rY(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new r2(e,r):new r6(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rN(t,this.value)):null!==t&&rx(this.value)===rx(t)&&this.matchesComparison(rN(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return tj()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rJ extends rX{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new rJ(e,t)}matches(e){return rZ(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function rZ(e){return"and"===e.op}function r0(e){for(let t of e.filters)if(t instanceof rJ)return!1;return!0}class r1 extends rY{constructor(e,t,r){super(e,t,r),this.key=t9.fromName(r.referenceValue)}matches(e){let t=t9.comparator(e.key,this.key);return this.matchesComparison(t)}}class r2 extends rY{constructor(e,t){super(e,"in",t),this.keys=r3("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class r6 extends rY{constructor(e,t){super(e,"not-in",t),this.keys=r3("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function r3(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>t9.fromName(e.referenceValue))}class r5 extends rY{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rU(t)&&rk(t.arrayValue,this.value)}}class r8 extends rY{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rk(this.value.arrayValue,t)}}class r4 extends rY{constructor(e,t){super(e,"not-in",t)}matches(e){if(rk(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rk(this.value.arrayValue,t)}}class r7 extends rY{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rU(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rk(this.value.arrayValue,e))}}/**
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
 */class r9{constructor(e,t=null,r=[],n=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function ne(e,t=null,r=[],n=[],i=null,s=null,o=null){return new r9(e,t,r,n,i,s,o)}function nt(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof rY)return t.field.canonicalString()+t.op.toString()+rO(t.value);if(r0(t)&&rZ(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>rO(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>rO(e)).join(",")),e.ue=t}return e.ue}function nr(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof rY?r instanceof rY&&t.op===r.op&&t.field.isEqual(r.field)&&rD(t.value,r.value):t instanceof rJ?r instanceof rJ&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void tj()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rQ(e.startAt,t.startAt)&&rQ(e.endAt,t.endAt)}function nn(e){return t9.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
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
 */class ni{constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ns(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function no(e){return null!==e.collectionGroup}function na(e){if(null===e.ce){let t;e.ce=[];let r=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new rd(t7.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.ce.push(new rW(t,n))}),r.has(t7.keyField().canonicalString())||e.ce.push(new rW(t7.keyField(),n))}return e.ce}function nl(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return ne(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new rW(e.field,t)});let r=e.endAt?new rK(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new rK(e.startAt.position,e.startAt.inclusive):null;return ne(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,na(e))),e.le}function nu(e,t){let r=e.filters.concat([t]);return new ni(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function nh(e,t,r){return new ni(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function nc(e,t){return nr(nl(e),nl(t))&&e.limitType===t.limitType}function nf(e){return`${nt(nl(e))}|lt:${e.limitType}`}function nd(e){var t;let r;return`Query(target=${r=(t=nl(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof rY?`${t.field.canonicalString()} ${t.op} ${rO(t.value)}`:t instanceof rJ?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>rO(e)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>rO(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function np(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):t9.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of na(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=rH(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,na(e),t))&&(!e.endAt||!!function(e,t,r){let n=rH(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,na(e),t))}function ng(e){return(t,r)=>{let n=!1;for(let i of na(e)){let e=function(e,t,r){let n=e.field.isKeyField()?t9.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?rN(n,i):tj()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return tj()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
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
 */class nm{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){rl(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return ru(this.inner)}size(){return this.innerSize}}/**
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
 */const ny=new rh(t9.comparator),nv=new rh(t9.comparator);function nw(...e){let t=nv;for(let r of e)t=t.insert(r.key,r);return t}function nb(e){let t=nv;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function nE(){return new nm(e=>e.toString(),(e,t)=>e.isEqual(t))}const n_=new rh(t9.comparator),nT=new rd(t9.comparator);function nI(...e){let t=nT;for(let r of e)t=t.add(r);return t}const nS=new rd(t1);/**
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
 */function nC(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ro(t)?"-0":t}}function nA(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class nx{constructor(){this._=void 0}}function nD(e,t){return e instanceof nM?rP(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class nk extends nx{}class nN extends nx{constructor(e){super(),this.elements=e}}function nR(e,t){let r=nU(t);for(let t of e.elements)r.some(e=>rD(e,t))||r.push(t);return{arrayValue:{values:r}}}class nL extends nx{constructor(e){super(),this.elements=e}}function nO(e,t){let r=nU(t);for(let t of e.elements)r=r.filter(e=>!rD(e,t));return{arrayValue:{values:r}}}class nM extends nx{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function nP(e){return rb(e.integerValue||e.doubleValue)}function nU(e){return rU(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class nV{constructor(e,t){this.field=e,this.transform=t}}class nF{constructor(e,t){this.version=e,this.transformResults=t}}class nB{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nB}static exists(e){return new nB(void 0,e)}static updateTime(e){return new nB(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nq(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nj{}function nz(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nY(e.key,nB.none()):new nK(e.key,e.data,nB.none());{let r=e.data,n=r$.empty(),i=new rd(t7.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new nH(e.key,n,new rg(i.toArray()),nB.none())}}function n$(e,t,r,n){return e instanceof nK?function(e,t,r,n){if(!nq(e.precondition,t))return r;let i=e.value.clone(),s=nX(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof nH?function(e,t,r,n){if(!nq(e.precondition,t))return r;let i=nX(e.fieldTransforms,n,t),s=t.data;return(s.setAll(nQ(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):nq(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function nG(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&t2(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof nN&&n instanceof nN||r instanceof nL&&n instanceof nL?t2(r.elements,n.elements,rD):r instanceof nM&&n instanceof nM?rD(r.Pe,n.Pe):r instanceof nk&&n instanceof nk)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nK extends nj{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class nH extends nj{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nQ(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function nW(e,t,r){var n;let i=new Map;e.length===r.length||tj();for(let s=0;s<r.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(n=r[s],a instanceof nN?nR(a,l):a instanceof nL?nO(a,l):n))}return i}function nX(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof nk?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&r_(t)&&(t=rT(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof nN?nR(e,s):e instanceof nL?nO(e,s):function(e,t){let r=nD(e,t),n=nP(r)+nP(e.Pe);return rP(r)&&rP(e.Pe)?nA(n):nC(e.serializer,n)}(e,s))}return n}class nY extends nj{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nJ extends nj{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class nZ{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof nK?function(e,t,r){let n=e.value.clone(),i=nW(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof nH?function(e,t,r){if(!nq(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=nW(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(nQ(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=n$(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=n$(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=nE();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=nz(s,o=t.has(n.key)?null:o);null!==a&&r.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(t3.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),nI())}isEqual(e){return this.batchId===e.batchId&&t2(this.mutations,e.mutations,(e,t)=>nG(e,t))&&t2(this.baseMutations,e.baseMutations,(e,t)=>nG(e,t))}}class n0{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||tj();let n=n_,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new n0(e,t,r,n)}}/**
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
 */class n1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class n2{constructor(e,t){this.count=e,this.unchangedNames=t}}function n6(e){if(void 0===e)return tF("GRPC error has no .code"),tz.UNKNOWN;switch(e){case S.OK:return tz.OK;case S.CANCELLED:return tz.CANCELLED;case S.UNKNOWN:return tz.UNKNOWN;case S.DEADLINE_EXCEEDED:return tz.DEADLINE_EXCEEDED;case S.RESOURCE_EXHAUSTED:return tz.RESOURCE_EXHAUSTED;case S.INTERNAL:return tz.INTERNAL;case S.UNAVAILABLE:return tz.UNAVAILABLE;case S.UNAUTHENTICATED:return tz.UNAUTHENTICATED;case S.INVALID_ARGUMENT:return tz.INVALID_ARGUMENT;case S.NOT_FOUND:return tz.NOT_FOUND;case S.ALREADY_EXISTS:return tz.ALREADY_EXISTS;case S.PERMISSION_DENIED:return tz.PERMISSION_DENIED;case S.FAILED_PRECONDITION:return tz.FAILED_PRECONDITION;case S.ABORTED:return tz.ABORTED;case S.OUT_OF_RANGE:return tz.OUT_OF_RANGE;case S.UNIMPLEMENTED:return tz.UNIMPLEMENTED;case S.DATA_LOSS:return tz.DATA_LOSS;default:return tj()}}(C=S||(S={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const n3=new c([0xffffffff,0xffffffff],0);function n5(e){let t=(new TextEncoder).encode(e),r=new f;return r.update(t),new Uint8Array(r.digest())}function n8(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new c([r,n],0),new c([i,s],0)]}class n4{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new n7(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new n7(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new n7(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=c.fromNumber(this.Te)}Ee(e,t,r){let n=e.add(t.multiply(c.fromNumber(r)));return 1===n.compare(n3)&&(n=new c([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ie).toNumber()}de(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,r]=n8(n5(e));for(let e=0;e<this.hashCount;e++){let n=this.Ee(t,r,e);if(!this.de(n))return!1}return!0}static create(e,t,r){let n=new n4(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Te)return;let[t,r]=n8(n5(e));for(let e=0;e<this.hashCount;e++){let n=this.Ee(t,r,e);this.Ae(n)}}Ae(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class n7 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class n9{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,ie.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n9(t3.min(),n,new rh(t1),ny,nI())}}class ie{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ie(r,t,nI(),nI(),nI())}}/**
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
 */class it{constructor(e,t,r,n){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=n}}class ir{constructor(e,t){this.targetId=e,this.me=t}}class ii{constructor(e,t,r=ry.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class is{constructor(){this.fe=0,this.ge=il(),this.pe=ry.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=nI(),t=nI(),r=nI();return this.ge.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:tj()}}),new ie(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=il()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||tj()}Ne(){this.we=!0,this.ye=!0}}class io{constructor(e){this.Le=e,this.Be=new Map,this.ke=ny,this.qe=ia(),this.Qe=ia(),this.Ke=new rh(t1)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:tj()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((e,r)=>{this.je(r)&&t(r)})}Je(e){let t=e.targetId,r=e.me.count,n=this.Ye(t);if(n){let i=n.target;if(nn(i)){if(0===r){let e=new t9(i.path);this.We(t,e,rG.newNoDocument(e,t3.min()))}else 1===r||tj()}else{let n=this.Ze(t);if(n!==r){let r=this.Xe(e),i=r?this.et(r,e,n):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,r;let n=e.me.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;try{t=rE(i).toUint8Array()}catch(e){if(e instanceof rm)return tB("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new n4(t,s,o)}catch(e){return tB(e instanceof n7?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Te?null:r}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Le.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.We(t,r,null),n++)}),n}it(e){let t=new Map;this.Be.forEach((r,n)=>{let i=this.Ye(n);if(i){if(r.current&&nn(i.target)){let t=new t9(i.target.path);this.st(t).has(n)||this.ot(n,t)||this.We(n,t,rG.newNoDocument(t,e))}r.be&&(t.set(n,r.ve()),r.Ce())}});let r=nI();this.Qe.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.ke.forEach((t,r)=>r.setReadTime(e));let n=new n9(e,t,this.Ke,this.ke,r);return this.ke=ny,this.qe=ia(),this.Qe=ia(),this.Ke=new rh(t1),n}Ue(e,t){if(!this.je(e))return;let r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let n=this.ze(e);this.ot(e,t)?n.Fe(t,1):n.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new is,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new rd(t1),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new rd(t1),this.qe=this.qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||tV("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new is),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ia(){return new rh(t9.comparator)}function il(){return new rh(t9.comparator)}const iu={asc:"ASCENDING",desc:"DESCENDING"},ih={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ic={and:"AND",or:"OR"};class id{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ip(e,t){return e.useProto3Json||null==t?t:{value:t}}function ig(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function im(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function iy(e){return e||tj(),t3.fromTimestamp(function(e){let t=rw(e);return new t6(t.seconds,t.nanos)}(e))}function iv(e,t){return iw(e,t).canonicalString()}function iw(e,t){let r=new t8(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function ib(e){let t=t8.fromString(e);return iD(t)||tj(),t}function iE(e,t){return iv(e.databaseId,t.path)}function i_(e,t){let r=ib(t);if(r.get(1)!==e.databaseId.projectId)throw new t$(tz.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new t$(tz.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new t9(iS(r))}function iT(e,t){return iv(e.databaseId,t)}function iI(e){return new t8(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iS(e){return e.length>4&&"documents"===e.get(4)||tj(),e.popFirst(5)}function iC(e,t,r){return{name:iE(e,t),fields:r.value.mapValue.fields}}function iA(e){return{fieldPath:e.canonicalString()}}function ix(e){return t7.fromServerFormat(e.fieldPath)}function iD(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
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
 */class ik{constructor(e,t,r,n,i=t3.min(),s=t3.min(),o=ry.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new ik(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ik(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ik(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ik(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class iN{constructor(e){this.ht=e}}/**
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
 */class iR{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(rb(e.integerValue));else if("doubleValue"in e){let r=rb(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),ro(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),"string"==typeof r&&(r=rw(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(rE(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?rz(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):rq(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):tj()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let r=e.fields||{};for(let e of(this.Rt(t,55),Object.keys(r)))this.gt(e,t),this.dt(r[e],t)}bt(e,t){var r,n;let i=e.fields||{};this.Rt(t,53);let s="value",o=(null===(n=null===(r=i[s].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.Rt(t,15),t.Vt(rb(o)),this.gt(s,t),this.dt(i[s],t)}vt(e,t){let r=e.values||[];for(let e of(this.Rt(t,50),r))this.dt(e,t)}St(e,t){this.Rt(t,37),t9.fromName(e).path.forEach(e=>{this.Rt(t,60),this.Ct(e,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}iR.Ft=new iR;/**
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
 */class iL{constructor(){this.ln=new iO}addToCollectionParentIndex(e,t){return this.ln.add(t),rn.resolve()}getCollectionParents(e,t){return rn.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return rn.resolve()}deleteFieldIndex(e,t){return rn.resolve()}deleteAllFieldIndexes(e){return rn.resolve()}createTargetIndexes(e,t){return rn.resolve()}getDocumentsMatchingTarget(e,t){return rn.resolve(null)}getIndexType(e,t){return rn.resolve(0)}getFieldIndexes(e,t){return rn.resolve([])}getNextCollectionGroupToUpdate(e){return rn.resolve(null)}getMinOffset(e,t){return rn.resolve(re.min())}getMinOffsetFromCollectionGroup(e,t){return rn.resolve(re.min())}updateCollectionGroup(e,t,r){return rn.resolve()}updateIndexEntries(e,t){return rn.resolve()}}class iO{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new rd(t8.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new rd(t8.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
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
 */const iM={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class iP{static withCacheSize(e){return new iP(e,iP.DEFAULT_COLLECTION_PERCENTILE,iP.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */iP.DEFAULT_COLLECTION_PERCENTILE=10,iP.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,iP.DEFAULT=new iP(0x2800000,iP.DEFAULT_COLLECTION_PERCENTILE,iP.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),iP.DISABLED=new iP(-1,0,0);/**
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
 */class iU{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new iU(0)}static Qn(){return new iU(-1)}}/**
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
 */function iV([e,t],[r,n]){let i=t1(e,r);return 0===i?t1(t,n):i}class iF{constructor(e){this.Gn=e,this.buffer=new rd(iV),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>iV(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iB{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(e){tV("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ri(e)?tV("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await rr(e)}await this.Yn(3e5)})}}class iq{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return rn.resolve(rs.oe);let r=new iF(t);return this.Zn.forEachTarget(e,e=>r.Hn(e.sequenceNumber)).next(()=>this.Zn.er(e,e=>r.Hn(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(tV("LruGarbageCollector","Garbage collection skipped; disabled"),rn.resolve(iM)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(tV("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),iM):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,n,i,s,o,a,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(tV("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,o=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),tU()<=h.DEBUG&&tV("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${n} in `+(o-s)+"ms\n"+`	Removed ${i} targets in `+(a-o)+"ms\n"+`	Removed ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-u}ms`),rn.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
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
 */class ij{constructor(){this.changes=new nm(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rG.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?rn.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class iz{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class i${constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&n$(r.mutation,e,rg.empty(),t6.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,nI()).next(()=>t))}getLocalViewOfDocuments(e,t,r=nI()){let n=nE();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=nw();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=nE();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,nI()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=ny,s=nE(),o=nE();return t.forEach((e,t)=>{let o=r.get(t.key);n.has(t.key)&&(void 0===o||o.mutation instanceof nH)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),n$(o.mutation,t,o.mutation.getFieldMask(),t6.now())):s.set(t.key,rg.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return o.set(e,new iz(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),o))}recalculateAndSaveOverlays(e,t){let r=nE(),n=new rh((e,t)=>e-t),i=nI();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=r.get(e)||rg.empty();o=i.applyToLocalView(s,o),r.set(e,o);let a=(n.get(i.batchId)||nI()).add(e);n=n.insert(i.batchId,a)})}).next(()=>{let s=[],o=n.getReverseIterator();for(;o.hasNext();){let n=o.getNext(),a=n.key,l=n.value,u=nE();l.forEach(e=>{if(!i.has(e)){let n=nz(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return rn.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return t9.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):no(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):rn.resolve(nE()),o=-1,a=i;return s.next(t=>rn.forEach(t,(t,r)=>(o<r.largestBatchId&&(o=r.largestBatchId),i.get(t)?rn.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,nI())).next(e=>({batchId:o,changes:nb(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new t9(t)).next(e=>{let t=nw();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=nw();return this.indexManager.getCollectionParents(e,i).next(o=>rn.forEach(o,o=>{let a=new ni(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,rG.newInvalidDocument(n)))});let r=nw();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&n$(s.mutation,n,rg.empty(),t6.now()),np(t,n)&&(r=r.insert(e,n))}),r})}}/**
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
 */class iG{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return rn.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,{id:t.id,version:t.version,createTime:iy(t.createTime)}),rn.resolve()}getNamedQuery(e,t){return rn.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=ib(e);return 4===t.length?t8.emptyPath():iS(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||tj();let e=i.from[0];e.allDescendants?o=e.collectionId:n=n.child(e.collectionId)}let a=[];i.where&&(a=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ix(e.unaryFilter.field);return rY.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=ix(e.unaryFilter.field);return rY.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=ix(e.unaryFilter.field);return rY.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=ix(e.unaryFilter.field);return rY.create(i,"!=",{nullValue:"NULL_VALUE"});default:return tj()}}(t):void 0!==t.fieldFilter?rY.create(ix(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return tj()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rJ.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return tj()}}(t.compositeFilter.op)):tj()}(e);return r instanceof rJ&&r0(t=r)&&rZ(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new rW(ix(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new rK(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new rK(e.values||[],t)}(i.endAt)),new ni(n,o,l,a,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?nh(t,t.limit,"L"):t}(t.bundledQuery),readTime:iy(t.readTime)}),rn.resolve()}}/**
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
 */class iK{constructor(){this.overlays=new rh(t9.comparator),this.Er=new Map}getOverlay(e,t){return rn.resolve(this.overlays.get(t))}getOverlays(e,t){let r=nE();return rn.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.Tt(e,t,n)}),rn.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Er.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Er.delete(r)),rn.resolve()}getOverlaysForCollection(e,t,r){let n=nE(),i=t.length+1,s=new t9(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return rn.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new rh((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=nE(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=nE(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=n)););return rn.resolve(o)}Tt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Er.get(n.largestBatchId).delete(r.key);this.Er.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new n1(t,r));let i=this.Er.get(t);void 0===i&&(i=nI(),this.Er.set(t,i)),this.Er.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class iH{constructor(){this.sessionToken=ry.EMPTY_BYTE_STRING}getSessionToken(e){return rn.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,rn.resolve()}}/**
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
 */class iQ{constructor(){this.dr=new rd(iW.Ar),this.Rr=new rd(iW.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){let r=new iW(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gr(new iW(e,t))}pr(e,t){e.forEach(e=>this.removeReference(e,t))}yr(e){let t=new t9(new t8([])),r=new iW(t,e),n=new iW(t,e+1),i=[];return this.Rr.forEachInRange([r,n],e=>{this.gr(e),i.push(e.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new t9(new t8([])),r=new iW(t,e),n=new iW(t,e+1),i=nI();return this.Rr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new iW(e,0),r=this.dr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class iW{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return t9.comparator(e.key,t.key)||t1(e.br,t.br)}static Vr(e,t){return t1(e.br,t.br)||t9.comparator(e.key,t.key)}}/**
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
 */class iX{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new rd(iW.Ar)}checkEmpty(e){return rn.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nZ(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.vr=this.vr.add(new iW(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return rn.resolve(s)}lookupMutationBatch(e,t){return rn.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Fr(t+1),n=r<0?0:r;return rn.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return rn.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(e){return rn.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new iW(t,0),n=new iW(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,n],e=>{let t=this.Cr(e.br);i.push(t)}),rn.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rd(t1);return t.forEach(e=>{let t=new iW(e,0),n=new iW(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([t,n],e=>{r=r.add(e.br)})}),rn.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;t9.isDocumentKey(i)||(i=i.child(""));let s=new iW(new t9(i),0),o=new rd(t1);return this.vr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(o=o.add(e.br)),!0)},s),rn.resolve(this.Mr(o))}Mr(e){let t=[];return e.forEach(e=>{let r=this.Cr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Or(t.batchId,"removed")||tj(),this.mutationQueue.shift();let r=this.vr;return rn.forEach(t.mutations,n=>{let i=new iW(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){let r=new iW(t,0),n=this.vr.firstAfterOrEqual(r);return rn.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,rn.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class iY{constructor(e){this.Nr=e,this.docs=new rh(t9.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return rn.resolve(r?r.document.mutableCopy():rG.newInvalidDocument(t))}getEntries(e,t){let r=ny;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():rG.newInvalidDocument(e))}),rn.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=ny,s=t.path,o=new t9(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=t9.comparator(e.documentKey,t.documentKey))?r:t1(e.largestBatchId,t.largestBatchId)}(new re(o.readTime,o.key,-1),r)||(n.has(o.key)||np(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return rn.resolve(i)}getAllFromCollectionGroup(e,t,r,n){tj()}Lr(e,t){return rn.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new iJ(this)}getSize(e){return rn.resolve(this.size)}}class iJ extends ij{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.hr.addEntry(e,n)):this.hr.removeEntry(r)}),rn.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class iZ{constructor(e){this.persistence=e,this.Br=new nm(e=>nt(e),nr),this.lastRemoteSnapshotVersion=t3.min(),this.highestTargetId=0,this.kr=0,this.qr=new iQ,this.targetCount=0,this.Qr=iU.qn()}forEachTarget(e,t){return this.Br.forEach((e,r)=>t(r)),rn.resolve()}getLastRemoteSnapshotVersion(e){return rn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return rn.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),rn.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),rn.resolve()}Un(e){this.Br.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new iU(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,rn.resolve()}updateTargetData(e,t){return this.Un(t),rn.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,rn.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Br.forEach((s,o)=>{o.sequenceNumber<=t&&null===r.get(o.targetId)&&(this.Br.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),rn.waitFor(i).next(()=>n)}getTargetCount(e){return rn.resolve(this.targetCount)}getTargetData(e,t){let r=this.Br.get(t)||null;return rn.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),rn.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),rn.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),rn.resolve()}getMatchingKeysForTargetId(e,t){let r=this.qr.Sr(t);return rn.resolve(r)}containsKey(e,t){return rn.resolve(this.qr.containsKey(t))}}/**
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
 */class i0{constructor(e,t){this.Kr={},this.overlays={},this.$r=new rs(0),this.Ur=!1,this.Ur=!0,this.Wr=new iH,this.referenceDelegate=e(this),this.Gr=new iZ(this),this.indexManager=new iL,this.remoteDocumentCache=new iY(e=>this.referenceDelegate.zr(e)),this.serializer=new iN(t),this.jr=new iG(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iK,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new iX(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){tV("MemoryPersistence","Starting transaction:",e);let n=new i1(this.$r.next());return this.referenceDelegate.Hr(),r(n).next(e=>this.referenceDelegate.Jr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Yr(e,t){return rn.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class i1 extends rt{constructor(e){super(),this.currentSequenceNumber=e}}class i2{constructor(e){this.persistence=e,this.Zr=new iQ,this.Xr=null}static ei(e){return new i2(e)}get ti(){if(this.Xr)return this.Xr;throw tj()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),rn.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),rn.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),rn.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(e=>this.ti.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ti.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return rn.forEach(this.ti,r=>{let n=t9.fromPath(r);return this.ni(e,n).next(e=>{e||t.removeEntry(n,t3.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(e=>{e?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return rn.or([()=>rn.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class i6{constructor(e,t){this.persistence=e,this.ri=new nm(e=>/**
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
 */(function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new iq(this,t)}static ei(e,t){return new i6(e,t)}Hr(){}Jr(e){return rn.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}nr(e){let t=0;return this.er(e,e=>{t++}).next(()=>t)}er(e,t){return rn.forEach(this.ri,(r,n)=>this.ir(e,r,n).next(e=>e?rn.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.Lr(e,n=>this.ir(e,n,t).next(e=>{e||(r++,i.removeEntry(n,t3.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),rn.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),rn.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),rn.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),rn.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(rx(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=rT(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return rE(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,rl(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw tj()}}(e.data.value)),t}ir(e,t,r){return rn.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.ri.get(t);return rn.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class i3{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=n}static zi(e,t){let r=nI(),n=nI();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new i3(e,t.fromCache,r,n)}}/**
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
 */class i5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class i8{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=!function(){var e;let t=null===(e=er())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(D.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.Xi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.es(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new i5;return this.ts(e,t,r).next(n=>{if(i.result=n,this.Hi)return this.ns(e,t,r,n.size)})}).next(()=>i.result)}ns(e,t,r,n){return r.documentReadCount<this.Ji?(tU()<=h.DEBUG&&tV("QueryEngine","SDK will not create cache indexes for query:",nd(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),rn.resolve()):(tU()<=h.DEBUG&&tV("QueryEngine","Query:",nd(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.Yi*n?(tU()<=h.DEBUG&&tV("QueryEngine","The SDK decides to create cache indexes for query:",nd(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nl(t))):rn.resolve())}Xi(e,t){if(ns(t))return rn.resolve(null);let r=nl(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=nl(t=nh(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=nI(...n);return this.Zi.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.rs(t,n);return this.ss(t,s,i,r.readTime)?this.Xi(e,nh(t,null,"F")):this.os(e,s,t,r)}))})))}es(e,t,r,n){return ns(t)||n.isEqual(t3.min())?rn.resolve(null):this.Zi.getDocuments(e,r).next(i=>{let s=this.rs(t,i);return this.ss(t,s,r,n)?rn.resolve(null):(tU()<=h.DEBUG&&tV("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),nd(t)),this.os(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new re(t3.fromTimestamp(1e9===n?new t6(r+1,0):new t6(r,n)),t9.empty(),-1)}(n,0)).next(e=>e))})}rs(e,t){let r=new rd(ng(e));return t.forEach((t,n)=>{np(e,n)&&(r=r.add(n))}),r}ss(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}ts(e,t,r){return tU()<=h.DEBUG&&tV("QueryEngine","Using full collection scan to execute query:",nd(t)),this.Zi.getDocumentsMatchingQuery(e,t,re.min(),r)}os(e,t,r,n){return this.Zi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
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
 */class i4{constructor(e,t,r,n){this.persistence=e,this._s=t,this.serializer=n,this.us=new rh(t1),this.cs=new nm(e=>nt(e),nr),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new i$(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}async function i7(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],o=nI();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(r,o).next(e=>({Ts:e,removedBatchIds:i,addedBatchIds:s}))})})}function i9(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}async function se(e,t,r){let n=e.us.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!ri(e))throw e;tV("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.us=e.us.remove(t),e.cs.delete(n.target)}function st(e,t,r){let n=t3.min(),i=nI();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.cs.get(r);return void 0!==n?rn.resolve(e.us.get(n)):e.Gr.getTargetData(t,r)})(e,s,nl(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Gr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e._s.getDocumentsMatchingQuery(s,t,r?n:t3.min(),r?i:nI())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ls.get(n)||t3.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ls.set(n,s),{documents:r,ds:i}}))}class sr{constructor(){this.activeTargetIds=nS}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class sn{constructor(){this._o=new sr,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new sr,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class si{uo(e){}shutdown(){}}/**
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
 */class ss{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){for(let e of(tV("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.To))e(0)}Po(){for(let e of(tV("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.To))e(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
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
 */let so=null;function sa(){return null===so?so=0x10000000+Math.round(0x80000000*Math.random()):so++,"0x"+so.toString(16)}/**
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
 */const sl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class su{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const sh="WebChannelConnection";class sc extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Fo=t+"://"+e.host,this.Mo=`projects/${r}/databases/${n}`,this.xo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}Oo(e,t,r,n,i){let s=sa(),o=this.No(e,t.toUriEncodedString());tV("RestConnection",`Sending RPC '${e}' ${s}:`,o,r);let a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(a,n,i),this.Bo(e,o,a,r).then(t=>(tV("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw tB("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",r),t})}ko(e,t,r,n,i,s){return this.Oo(e,t,r,n,i)}Lo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tM}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}No(e,t){let r=sl[e];return`${this.Fo}/v1/${t}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,n){let i=sa();return new Promise((s,o)=>{let a=new d;a.setWithCredentials(!0),a.listenOnce(g.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case m.NO_ERROR:let t=a.getResponseJson();tV(sh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case m.TIMEOUT:tV(sh,`RPC '${e}' ${i} timed out`),o(new t$(tz.DEADLINE_EXCEEDED,"Request time out"));break;case m.HTTP_ERROR:let r=a.getStatus();if(tV(sh,`RPC '${e}' ${i} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(tz).indexOf(t)>=0?t:tz.UNKNOWN}(t.status);o(new t$(e,t.message))}else o(new t$(tz.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new t$(tz.UNAVAILABLE,"Connection failed."));break;default:tj()}}finally{tV(sh,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);tV(sh,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",l,r,15)})}qo(e,t,r){let n=sa(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=b(),o=w(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Lo(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;let u=i.join("");tV(sh,`Creating RPC '${e}' stream ${n}: ${u}`,a);let h=s.createWebChannel(u,a),c=!1,f=!1,d=new su({Eo:t=>{f?tV(sh,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(c||(tV(sh,`Opening RPC '${e}' stream ${n} transport.`),h.open(),c=!0),tV(sh,`RPC '${e}' stream ${n} sending:`,t),h.send(t))},Ao:()=>h.close()}),g=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return g(h,p.EventType.OPEN,()=>{f||(tV(sh,`RPC '${e}' stream ${n} transport opened.`),d.So())}),g(h,p.EventType.CLOSE,()=>{f||(f=!0,tV(sh,`RPC '${e}' stream ${n} transport closed`),d.Do())}),g(h,p.EventType.ERROR,t=>{f||(f=!0,tB(sh,`RPC '${e}' stream ${n} transport errored:`,t),d.Do(new t$(tz.UNAVAILABLE,"The operation could not be completed")))}),g(h,p.EventType.MESSAGE,t=>{var r;if(!f){let i=t.data[0];i||tj();let s=(null==i?void 0:i.error)||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){tV(sh,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=S[e];if(void 0!==t)return n6(t)}(t),i=s.message;void 0===r&&(r=tz.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),f=!0,d.Do(new t$(r,i)),h.close()}else tV(sh,`RPC '${e}' stream ${n} received:`,i),d.vo(i)}}),g(o,v.STAT_EVENT,t=>{t.stat===y.PROXY?tV(sh,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===y.NOPROXY&&tV(sh,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{d.bo()},0),d}}function sf(){return"undefined"!=typeof document?document:null}/**
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
 */function sd(e){return new id(e,!0)}/**
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
 */class sp{constructor(e,t,r=1e3,n=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=n,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),n=Math.max(0,t-r);n>0&&tV("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,n,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class sg{constructor(e,t,r,n,i,s,o,a){this.li=e,this.Yo=r,this.Zo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new sp(e,t)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==e?this.r_.reset():t&&t.code===tz.RESOURCE_EXHAUSTED?(tF(t.toString()),tF("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===tz.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Xo===t&&this.I_(e,r)},t=>{e(()=>{let e=new t$(tz.UNKNOWN,"Fetching auth token failed: "+t.message);return this.E_(e)})})}I_(e,t){let r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(e=>{r(()=>this.E_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.n_?this.A_(e):this.onNext(e))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return tV("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(tV("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sm extends sg{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:tj(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||tj(),ry.fromBase64String(i||"")):(void 0===i||i instanceof tu||i instanceof Uint8Array||tj(),ry.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new ii(s,o,a,l&&new t$(void 0===l.code?tz.UNKNOWN:n6(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=i_(e,n.document.name),s=iy(n.document.updateTime),o=n.document.createTime?iy(n.document.createTime):t3.min(),a=new r$({mapValue:{fields:n.document.fields}}),l=rG.newFoundDocument(i,s,o,a);r=new it(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=i_(e,n.document),s=n.readTime?iy(n.readTime):t3.min(),o=rG.newNoDocument(i,s);r=new it([],n.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=i_(e,n.document);r=new it([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return tj();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new n2(n,i);r=new ir(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return t3.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?t3.min():t.readTime?iy(t.readTime):t3.min()}(e);return this.listener.R_(t,r)}V_(e){let t={};t.database=iI(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=nn(n)?{documents:{documents:[iT(e,n.path)]}}:{query:function(e,t){var r,n;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=iT(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof rY?function(e){if("=="===e.op){if(rF(e.value))return{unaryFilter:{field:iA(e.field),op:"IS_NAN"}};if(rV(e.value))return{unaryFilter:{field:iA(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rF(e.value))return{unaryFilter:{field:iA(e.field),op:"IS_NOT_NAN"}};if(rV(e.value))return{unaryFilter:{field:iA(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:iA(e.field),op:ih[e.op],value:e.value}}}(t):t instanceof rJ?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:ic[t.op],filters:r}}}(t):tj()}(rJ.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:iA(e.field),direction:iu[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=ip(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ct:s,parent:i}}(e,n).ct}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=im(e,t.resumeToken);let n=ip(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(t3.min())>0){r.readTime=ig(e,t.snapshotVersion.toTimestamp());let n=ip(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tj()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){let t={};t.database=iI(this.serializer),t.removeTarget=e,this.c_(t)}}class sy extends sg{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return e.streamToken||tj(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&tj(),this.listener.p_()}onNext(e){var t,r;e.streamToken||tj(),this.lastStreamToken=e.streamToken,this.r_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||tj(),t.map(e=>{let t;return(t=e.updateTime?iy(e.updateTime):iy(r)).isEqual(t3.min())&&(t=iy(r)),new nF(t,e.transformResults||[])})):[]),i=iy(e.commitTime);return this.listener.y_(i,n)}w_(){let e={};e.database=iI(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof nK)n={update:iC(e,t.key,t.value)};else if(t instanceof nY)n={delete:iE(e,t.key)};else if(t instanceof nH)n={update:iC(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nJ))return tj();n={verify:iE(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof nk)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof nN)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof nL)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof nM)return{fieldPath:t.field.canonicalString(),increment:r.Pe};throw tj()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:ig(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:tj()),n})(this.serializer,e))};this.c_(t)}}/**
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
 */class sv extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.S_=!1}b_(){if(this.S_)throw new t$(tz.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,n){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Oo(e,iw(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===tz.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new t$(tz.UNKNOWN,e.toString())})}ko(e,t,r,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.ko(e,iw(t,r),n,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===tz.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new t$(tz.UNKNOWN,e.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,"Online"===e&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(tF(t),this.C_=!1):tV("OnlineStateTracker",t)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class sb{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(e=>{r.enqueueAndForget(async()=>{sD(this)&&(tV("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.k_.add(4),await s_(e),e.K_.set("Unknown"),e.k_.delete(4),await sE(e)}(this))})}),this.K_=new sw(r,n)}}async function sE(e){if(sD(e))for(let t of e.q_)await t(!0)}async function s_(e){for(let t of e.q_)await t(!1)}function sT(e,t){e.B_.has(t.targetId)||(e.B_.set(t.targetId,t),sx(e)?sA(e):sG(e).s_()&&sS(e,t))}function sI(e,t){let r=sG(e);e.B_.delete(t),r.s_()&&sC(e,t),0===e.B_.size&&(r.s_()?r.a_():sD(e)&&e.K_.set("Unknown"))}function sS(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(t3.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}sG(e).V_(t)}function sC(e,t){e.U_.xe(t),sG(e).m_(t)}function sA(e){e.U_=new io({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.B_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),sG(e).start(),e.K_.F_()}function sx(e){return sD(e)&&!sG(e).i_()&&e.B_.size>0}function sD(e){return 0===e.k_.size}async function sk(e){e.K_.set("Online")}async function sN(e){e.B_.forEach((t,r)=>{sS(e,t)})}async function sR(e,t){e.U_=void 0,sx(e)?(e.K_.O_(t),sA(e)):e.K_.set("Unknown")}async function sL(e,t,r){if(e.K_.set("Online"),t instanceof ii&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.B_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.B_.delete(n),e.U_.removeTarget(n))}(e,t)}catch(r){tV("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await sO(e,r)}else if(t instanceof it?e.U_.$e(t):t instanceof ir?e.U_.Je(t):e.U_.Ge(t),!r.isEqual(t3.min()))try{let t=await i9(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.U_.it(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.B_.get(n);i&&e.B_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.B_.get(t);if(!n)return;e.B_.set(t,n.withResumeToken(ry.EMPTY_BYTE_STRING,n.snapshotVersion)),sC(e,t);let i=new ik(n.target,t,r,n.sequenceNumber);sS(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){tV("RemoteStore","Failed to raise snapshot:",t),await sO(e,t)}}async function sO(e,t,r){if(!ri(t))throw t;e.k_.add(1),await s_(e),e.K_.set("Offline"),r||(r=()=>i9(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{tV("RemoteStore","Retrying IndexedDB access"),await r(),e.k_.delete(1),await sE(e)})}function sM(e,t){return t().catch(r=>sO(e,r,t))}async function sP(e){let t=sK(e),r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;sD(e)&&e.L_.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.L_.length&&t.a_();break}r=n.batchId,function(e,t){e.L_.push(t);let r=sK(e);r.s_()&&r.f_&&r.g_(t.mutations)}(e,n)}catch(t){await sO(e,t)}sU(e)&&sV(e)}function sU(e){return sD(e)&&!sK(e).i_()&&e.L_.length>0}function sV(e){sK(e).start()}async function sF(e){sK(e).w_()}async function sB(e){let t=sK(e);for(let r of e.L_)t.g_(r.mutations)}async function sq(e,t,r){let n=e.L_.shift(),i=n0.from(n,t,r);await sM(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sP(e)}async function sj(e,t){t&&sK(e).f_&&await async function(e,t){var r;if(function(e){switch(e){default:return tj();case tz.CANCELLED:case tz.UNKNOWN:case tz.DEADLINE_EXCEEDED:case tz.RESOURCE_EXHAUSTED:case tz.INTERNAL:case tz.UNAVAILABLE:case tz.UNAUTHENTICATED:return!1;case tz.INVALID_ARGUMENT:case tz.NOT_FOUND:case tz.ALREADY_EXISTS:case tz.PERMISSION_DENIED:case tz.FAILED_PRECONDITION:case tz.ABORTED:case tz.OUT_OF_RANGE:case tz.UNIMPLEMENTED:case tz.DATA_LOSS:return!0}}(r=t.code)&&r!==tz.ABORTED){let r=e.L_.shift();sK(e).__(),await sM(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await sP(e)}}(e,t),sU(e)&&sV(e)}async function sz(e,t){e.asyncQueue.verifyOperationInProgress(),tV("RemoteStore","RemoteStore received new credentials");let r=sD(e);e.k_.add(3),await s_(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await sE(e)}async function s$(e,t){t?(e.k_.delete(2),await sE(e)):t||(e.k_.add(2),await s_(e),e.K_.set("Unknown"))}function sG(e){var t,r,n;return e.W_||(e.W_=(t=e.datastore,r=e.asyncQueue,n={Ro:sk.bind(null,e),mo:sN.bind(null,e),po:sR.bind(null,e),R_:sL.bind(null,e)},t.b_(),new sm(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.q_.push(async t=>{t?(e.W_.__(),sx(e)?sA(e):e.K_.set("Unknown")):(await e.W_.stop(),e.U_=void 0)})),e.W_}function sK(e){var t,r,n;return e.G_||(e.G_=(t=e.datastore,r=e.asyncQueue,n={Ro:()=>Promise.resolve(),mo:sF.bind(null,e),po:sj.bind(null,e),p_:sB.bind(null,e),y_:sq.bind(null,e)},t.b_(),new sy(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.q_.push(async t=>{t?(e.G_.__(),await sP(e)):(await e.G_.stop(),e.L_.length>0&&(tV("RemoteStore",`Stopping write stream with ${e.L_.length} pending writes`),e.L_=[]))})),e.G_}/**
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
 */class sH{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new tG,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new sH(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new t$(tz.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sQ(e,t){if(tF("AsyncQueue",`${t}: ${e}`),ri(e))return new t$(tz.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class sW{static emptySet(e){return new sW(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||t9.comparator(t.key,r.key):(e,t)=>t9.comparator(e.key,t.key),this.keyedMap=nw(),this.sortedSet=new rh(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sW)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new sW;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class sX{constructor(){this.z_=new rh(t9.comparator)}track(e){let t=e.doc.key,r=this.z_.get(t);r?0!==e.type&&3===r.type?this.z_=this.z_.insert(t,e):3===e.type&&1!==r.type?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.z_=this.z_.remove(t):1===e.type&&2===r.type?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):tj():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class sY{constructor(e,t,r,n,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new sY(e,t,sW.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
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
 */class sJ{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class sZ{constructor(){this.queries=s0(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=s0(),r.forEach((e,r)=>{for(let e of r.J_)e.onError(t)})}(this,new t$(tz.ABORTED,"Firestore shutting down"))}}function s0(){return new nm(e=>nf(e),nc)}async function s1(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.Y_()&&t.Z_()&&(r=2):(i=new sJ,r=t.Z_()?0:1);try{switch(r){case 0:i.H_=await e.onListen(n,!0);break;case 1:i.H_=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=sQ(r,`Initialization of query '${nd(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.J_.push(t),t.ea(e.onlineState),i.H_&&t.ta(i.H_)&&s5(e)}async function s2(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.J_.indexOf(t);e>=0&&(i.J_.splice(e,1),0===i.J_.length?n=t.Z_()?0:1:!i.Y_()&&t.Z_()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function s6(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.J_)e.ta(n)&&(r=!0);i.H_=n}}r&&s5(e)}function s3(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.J_)e.onError(r);e.queries.delete(t)}function s5(e){e.X_.forEach(e=>{e.next()})}(x=A||(A={})).na="default",x.Cache="cache";class s8{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new sY(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){return!(e.fromCache&&this.Z_())||(!this.options.ua||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}aa(e){e=sY.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==A.Cache}}/**
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
 */class s4{constructor(e){this.key=e}}class s7{constructor(e){this.key=e}}class s9{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=nI(),this.mutatedKeys=nI(),this.Va=ng(e),this.ma=new sW(this.Va)}get fa(){return this.da}ga(e,t){let r=t?t.pa:new sX,n=t?t.ma:this.ma,i=t?t.mutatedKeys:this.mutatedKeys,s=n,o=!1,a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=np(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),d=!1;u&&h?u.data.isEqual(h.data)?c!==f&&(r.track({type:3,doc:h}),d=!0):this.ya(u,h)||(r.track({type:2,doc:h}),d=!0,(a&&this.Va(h,a)>0||l&&0>this.Va(h,l))&&(o=!0)):!u&&h?(r.track({type:0,doc:h}),d=!0):u&&!h&&(r.track({type:1,doc:u}),d=!0,(a||l)&&(o=!0)),d&&(h?(s=s.add(h),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{ma:s,pa:r,ss:o,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let s=e.pa.j_();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tj()}};return r(e)-r(t)})(e.type,t.type)||this.Va(e.doc,t.doc)),this.wa(r),n=null!=n&&n;let o=t&&!n?this.Sa():[],a=0===this.Ra.size&&this.current&&!n?1:0,l=a!==this.Aa;return(this.Aa=a,0!==s.length||l)?{snapshot:new sY(this.query,e.ma,i,s,e.mutatedKeys,0===a,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:o}:{ba:o}}ea(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ma:this.ma,pa:new sX,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(e=>this.da=this.da.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.da=this.da.delete(e)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=nI(),this.ma.forEach(e=>{this.Da(e.key)&&(this.Ra=this.Ra.add(e.key))});let t=[];return e.forEach(e=>{this.Ra.has(e)||t.push(new s7(e))}),this.Ra.forEach(r=>{e.has(r)||t.push(new s4(r))}),t}va(e){this.da=e.ds,this.Ra=nI();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return sY.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class oe{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ot{constructor(e){this.key=e,this.Fa=!1}}class or{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new nm(e=>nf(e),nc),this.Oa=new Map,this.Na=new Set,this.La=new rh(t9.comparator),this.Ba=new Map,this.ka=new iQ,this.qa={},this.Qa=new Map,this.Ka=iU.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function on(e,t,r=!0){let n;let i=oI(e),s=i.xa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.Ca()):n=await os(i,t,r,!0),n}async function oi(e,t){let r=oI(e);await os(r,t,!0,!1)}async function os(e,t,r,n){var i,s;let o;let a=await (i=e.localStore,s=nl(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Gr.getTargetData(e,s).next(r=>r?(t=r,rn.resolve(t)):i.Gr.allocateTargetId(e).next(r=>(t=new ik(s,r,"TargetPurposeListen",e.currentSequenceNumber),i.Gr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.us.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.us=i.us.insert(e.targetId,e),i.cs.set(s,e.targetId)),e})),l=a.targetId,u=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(o=await oo(e,t,l,"current"===u,a.resumeToken)),e.isPrimaryClient&&r&&sT(e.remoteStore,a),o}async function oo(e,t,r,n,i){e.Ua=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ga(r);i.ss&&(i=await st(e.localStore,t.query,!1).then(({documents:e})=>t.view.ga(e,i)));let s=n&&n.targetChanges.get(t.targetId),o=n&&null!=n.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return ow(e,t.targetId,a.ba),a.snapshot})(e,t,r,n);let s=await st(e.localStore,t,!0),o=new s9(t,s.ds),a=o.ga(s.documents),l=ie.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);ow(e,r,u.ba);let h=new oe(t,r,o);return e.xa.set(t,h),e.Oa.has(r)?e.Oa.get(r).push(t):e.Oa.set(r,[t]),u.snapshot}async function oa(e,t,r){let n=e.xa.get(t),i=e.Oa.get(n.targetId);if(i.length>1)return e.Oa.set(n.targetId,i.filter(e=>!nc(e,t))),void e.xa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await se(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&sI(e.remoteStore,n.targetId),oy(e,n.targetId)}).catch(rr)):(oy(e,n.targetId),await se(e.localStore,n.targetId,!0))}async function ol(e,t){let r=e.xa.get(t),n=e.Oa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),sI(e.remoteStore,r.targetId))}async function ou(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=od.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=op.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=t6.now(),s=t.reduce((e,t)=>e.add(t.key),nI());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=ny,l=nI();return e.hs.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=nD(n.transform,e||null);null!=i&&(null===r&&(r=r$.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new nH(e.key,t,function e(t){let r=[];return rl(t.fields,(t,n)=>{let i=new t7([t]);if(rB(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new rg(r)}(t.value.mapValue),nB.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:nb(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.qa[i.currentUser.toKey()])||(e=new rh(t1)),e=e.insert(n,r),i.qa[i.currentUser.toKey()]=e,await oE(i,s.changes),await sP(i.remoteStore)}catch(t){let e=sQ(t,"Failed to persist write");r.reject(e)}}async function oh(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let o,a;let l=e.hs.newChangeBuffer({trackRemovals:!0});n=e.us;let u=[];t.targetChanges.forEach((s,o)=>{var a;let l=n.get(o);if(!l)return;u.push(e.Gr.removeMatchingKeys(i,s.removedDocuments,o).next(()=>e.Gr.addMatchingKeys(i,s.addedDocuments,o)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(o)?h=h.withResumeToken(ry.EMPTY_BYTE_STRING,t3.min()).withLastLimboFreeSnapshotVersion(t3.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),n=n.insert(o,h),a=h,(0===l.resumeToken.approximateByteSize()||a.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Gr.updateTargetData(i,h))});let h=ny,c=nI();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,o=nI(),a=nI(),s.forEach(e=>o=o.add(e)),l.getEntries(i,o).next(e=>{let t=ny;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(a=a.add(r)),n.isNoDocument()&&n.version.isEqual(t3.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):tV("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{Is:t,Es:a}})).next(e=>{h=e.Is,c=e.Es})),!r.isEqual(t3.min())){let t=e.Gr.getLastRemoteSnapshotVersion(i).next(t=>e.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return rn.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.us=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Ba.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||tj(),t.addedDocuments.size>0?n.Fa=!0:t.modifiedDocuments.size>0?n.Fa||tj():t.removedDocuments.size>0&&(n.Fa||tj(),n.Fa=!1))}),await oE(e,r,t)}catch(e){await rr(e)}}function oc(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.xa.forEach((e,r)=>{let n=r.view.ea(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.J_)e.ea(t)&&(r=!0)}),r&&s5(n),i.length&&e.Ma.R_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function of(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Ba.get(t),i=n&&n.key;if(i){let r=new rh(t9.comparator);r=r.insert(i,rG.newNoDocument(i,t3.min()));let n=nI().add(i),s=new n9(t3.min(),new Map,new rh(t1),r,n);await oh(e,s),e.La=e.La.remove(i),e.Ba.delete(t),ob(e)}else await se(e.localStore,t,!1).then(()=>oy(e,t,r)).catch(rr)}async function od(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.hs.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),o=rn.resolve();return s.forEach(e=>{o=o.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||tj(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=nI();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});om(e,n,null),og(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await oE(e,i)}catch(e){await rr(e)}}async function op(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||tj(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});om(e,t,r),og(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await oE(e,i)}catch(e){await rr(e)}}function og(e,t){(e.Qa.get(t)||[]).forEach(e=>{e.resolve()}),e.Qa.delete(t)}function om(e,t,r){let n=e.qa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.qa[e.currentUser.toKey()]=n}}function oy(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Oa.get(t)))e.xa.delete(n),r&&e.Ma.Wa(n,r);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(t=>{e.ka.containsKey(t)||ov(e,t)})}function ov(e,t){e.Na.delete(t.path.canonicalString());let r=e.La.get(t);null!==r&&(sI(e.remoteStore,r),e.La=e.La.remove(t),e.Ba.delete(r),ob(e))}function ow(e,t,r){for(let n of r)n instanceof s4?(e.ka.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.La.get(r)||e.Na.has(n)||(tV("SyncEngine","New document in limbo: "+r),e.Na.add(n),ob(e))}(e,n)):n instanceof s7?(tV("SyncEngine","Document no longer in limbo: "+n.key),e.ka.removeReference(n.key,t),e.ka.containsKey(n.key)||ov(e,n.key)):tj()}function ob(e){for(;e.Na.size>0&&e.La.size<e.maxConcurrentLimboResolutions;){let t=e.Na.values().next().value;e.Na.delete(t);let r=new t9(t8.fromString(t)),n=e.Ka.next();e.Ba.set(n,new ot(r)),e.La=e.La.insert(r,n),sT(e.remoteStore,new ik(nl(new ni(r.path)),n,"TargetPurposeLimboResolution",rs.oe))}}async function oE(e,t,r){let n=[],i=[],s=[];e.xa.isEmpty()||(e.xa.forEach((o,a)=>{s.push(e.Ua(a,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,n?"current":"not-current")}if(t){n.push(t);let e=i3.zi(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Ma.R_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>rn.forEach(t,t=>rn.forEach(t.Wi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>rn.forEach(t.Gi,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!ri(e))throw e;tV("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.us.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.us=e.us.insert(t,i)}}}(e.localStore,i))}async function o_(e,t){var r;if(!e.currentUser.isEqual(t)){tV("SyncEngine","User change. New user:",t.toKey());let n=await i7(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Qa.forEach(e=>{e.forEach(e=>{e.reject(new t$(tz.CANCELLED,r))})}),e.Qa.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await oE(e,n.Ts)}}function oT(e,t){let r=e.Ba.get(t);if(r&&r.Fa)return nI().add(r.key);{let r=nI(),n=e.Oa.get(t);if(!n)return r;for(let t of n){let n=e.xa.get(t);r=r.unionWith(n.view.fa)}return r}}function oI(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=oh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=of.bind(null,e),e.Ma.R_=s6.bind(null,e.eventManager),e.Ma.Wa=s3.bind(null,e.eventManager),e}class oS{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sd(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){var t;return t=this.persistence,new i4(t,new i8,e.initialUser,this.serializer)}ja(e){return new i0(i2.ei,this.serializer)}za(e){return new sn}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oS.provider={build:()=>new oS};class oC extends oS{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){return this.persistence.referenceDelegate instanceof i6||tj(),new iB(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}ja(e){let t=void 0!==this.cacheSizeBytes?iP.withCacheSize(this.cacheSizeBytes):iP.DEFAULT;return new i0(e=>i6.ei(e,t),this.serializer)}}class oA{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>oc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=o_.bind(null,this.syncEngine),await s$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sZ}createDatastore(e){let t=sd(e.databaseInfo.databaseId),r=new sc(e.databaseInfo);return new sv(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new sb(t,this.datastore,e.asyncQueue,e=>oc(this.syncEngine,e,0),ss.p()?new ss:new si)}createSyncEngine(e,t){return function(e,t,r,n,i,s,o){let a=new or(e,t,r,n,i,s);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){tV("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await s_(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}oA.provider={build:()=>new oA};/**
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
 *//**
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
 */class ox{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):tF("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class oD{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=tO.UNAUTHENTICATED,this.clientId=t0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{tV("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(tV("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new tG;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=sQ(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ok(e,t){e.asyncQueue.verifyOperationInProgress(),tV("FirestoreClient","Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await i7(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function oN(e,t){e.asyncQueue.verifyOperationInProgress();let r=await oR(e);tV("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>sz(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>sz(t.remoteStore,r)),e._onlineComponents=t}async function oR(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){tV("FirestoreClient","Using user provided OfflineComponentProvider");try{await ok(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===tz.FAILED_PRECONDITION||t.code===tz.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;tB("Error using user provided cache. Falling back to memory cache: "+t),await ok(e,new oS)}}else tV("FirestoreClient","Using default OfflineComponentProvider"),await ok(e,new oC(void 0))}return e._offlineComponents}async function oL(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(tV("FirestoreClient","Using user provided OnlineComponentProvider"),await oN(e,e._uninitializedComponentsProvider._online)):(tV("FirestoreClient","Using default OnlineComponentProvider"),await oN(e,new oA))),e._onlineComponents}async function oO(e){let t=await oL(e),r=t.eventManager;return r.onListen=on.bind(null,t.syncEngine),r.onUnlisten=oa.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=oi.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=ol.bind(null,t.syncEngine),r}/**
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
 */function oM(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const oP=new Map;/**
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
 */function oU(e,t,r){if(!r)throw new t$(tz.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function oV(e){if(!t9.isDocumentKey(e))throw new t$(tz.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oF(e){if(t9.isDocumentKey(e))throw new t$(tz.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oB(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":tj()}function oq(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new t$(tz.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=oB(e);throw new t$(tz.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
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
 */class oj{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new t$(tz.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new t$(tz.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new t$(tz.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oM(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new t$(tz.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new t$(tz.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new t$(tz.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oz{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oj({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new t$(tz.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new t$(tz.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oj(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new tH;switch(e.type){case"firstParty":return new tY(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new t$(tz.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=oP.get(e);t&&(tV("ComponentProvider","Removing Datastore"),oP.delete(e),t.terminate())}(this),Promise.resolve()}}/**
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
 */class o${constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new o$(this.firestore,e,this._query)}}class oG{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oK(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new oG(this.firestore,e,this._key)}}class oK extends o${constructor(e,t,r){super(e,t,new ni(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new oG(this.firestore,null,new t9(e))}withConverter(e){return new oK(this.firestore,e,this._path)}}function oH(e,t,...r){if(e=ef(e),1==arguments.length&&(t=t0.newId()),oU("doc","path",t),e instanceof oz){let n=t8.fromString(t,...r);return oV(n),new oG(e,null,new t9(n))}{if(!(e instanceof oG||e instanceof oK))throw new t$(tz.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(t8.fromString(t,...r));return oV(n),new oG(e.firestore,e instanceof oK?e.converter:null,new t9(n))}}/**
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
 */class oQ{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new sp(this,"async_queue_retry"),this.fu=()=>{let e=sf();e&&tV("AsyncQueue","Visibility state changed to "+e.visibilityState),this.r_.Jo()},this.gu=e;let t=sf();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;let t=sf();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});let t=new tG;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ri(e))throw e;tV("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(e=>{let t;throw this.Au=e,this.Ru=!1,tF("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Ru=!1,e))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let n=sH.createAndSchedule(this,e,t,r,e=>this.Su(e));return this.du.push(n),n}pu(){this.Au&&tj()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{for(let t of(this.du.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.du))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.du.indexOf(e);this.du.splice(t,1)}}class oW extends oz{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new oQ,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new oQ(e),this._firestoreClient=void 0,await e}}}function oX(e){if(e._terminated)throw new t$(tz.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,r,n,i;let s=e._freezeSettings(),o=(i=e._databaseId,new rS(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,oM(s.experimentalLongPollingOptions),s.useFetchStreams));e._componentsProvider||(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new oD(e._authCredentials,e._appCheckCredentials,e._queue,o,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
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
 */class oY{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oY(ry.fromBase64String(e))}catch(e){throw new t$(tz.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new oY(ry.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class oJ{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new t$(tz.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new t7(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class oZ{constructor(e){this._methodName=e}}/**
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
 */class o0{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new t$(tz.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new t$(tz.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return t1(this._lat,e._lat)||t1(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class o1{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}/**
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
 */const o2=/^__.*__$/;class o6{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new nH(e,this.data,this.fieldMask,t,this.fieldTransforms):new nK(e,this.data,t,this.fieldTransforms)}}class o3{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new nH(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function o5(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw tj()}}class o8{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new o8(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.xu({path:r,Nu:!1});return n.Lu(e),n}Bu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.xu({path:r,Nu:!1});return n.Fu(),n}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ac(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(0===e.length)throw this.qu("Document fields must not be empty");if(o5(this.Mu)&&o2.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class o4{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||sd(e)}$u(e,t,r,n=!1){return new o8({Mu:e,methodName:t,Ku:r,path:t7.emptyPath(),Nu:!1,Qu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function o7(e){let t=e._freezeSettings(),r=sd(e._databaseId);return new o4(e._databaseId,!!t.ignoreUndefinedProperties,r)}function o9(e,t,r,n,i,s={}){let o,a;let l=e.$u(s.merge||s.mergeFields?2:0,t,r,i);aa("Data must be an object, but it was:",l,n);let u=as(n,l);if(s.merge)o=new rg(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=al(t,n,r);if(!l.contains(i))throw new t$(tz.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);af(e,i)||e.push(i)}o=new rg(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new o6(new r$(u),o,a)}class ae extends oZ{_toFieldTransform(e){if(2!==e.Mu)throw 1===e.Mu?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ae}}class at extends oZ{_toFieldTransform(e){return new nV(e.path,new nk)}isEqual(e){return e instanceof at}}function ar(e,t,r,n){let i=e.$u(1,t,r);aa("Data must be an object, but it was:",i,n);let s=[],o=r$.empty();return rl(n,(e,n)=>{let a=ah(t,e,r);n=ef(n);let l=i.Bu(a);if(n instanceof ae)s.push(a);else{let e=ai(n,l);null!=e&&(s.push(a),o.set(a,e))}}),new o3(o,new rg(s),i.fieldTransforms)}function an(e,t,r,n,i,s){let o=e.$u(1,t,r),a=[al(t,n,r)],l=[i];if(s.length%2!=0)throw new t$(tz.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(al(t,s[e])),l.push(s[e+1]);let u=[],h=r$.empty();for(let e=a.length-1;e>=0;--e)if(!af(u,a[e])){let t=a[e],r=l[e];r=ef(r);let n=o.Bu(t);if(r instanceof ae)u.push(t);else{let e=ai(r,n);null!=e&&(u.push(t),h.set(t,e))}}return new o3(h,new rg(u),o.fieldTransforms)}function ai(e,t){if(ao(e=ef(e)))return aa("Unsupported field value:",t,e),as(e,t);if(e instanceof oZ)return function(e,t){if(!o5(t.Mu))throw t.qu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Nu&&4!==t.Mu)throw t.qu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=ai(i,t.ku(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){var r,n,i;if(null===(e=ef(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!ro(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?nA(n):nC(r,n);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=t6.fromDate(e);return{timestampValue:ig(t.serializer,r)}}if(e instanceof t6){let r=new t6(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ig(t.serializer,r)}}if(e instanceof o0)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof oY)return{bytesValue:im(t.serializer,e._byteString)};if(e instanceof oG){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.qu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:iv(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof o1)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.qu("VectorValues must only contain numeric values.");return nC(t.serializer,e)})}}}}};throw t.qu(`Unsupported field value: ${oB(e)}`)}(e,t)}function as(e,t){let r={};return ru(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):rl(e,(e,n)=>{let i=ai(n,t.Ou(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function ao(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof t6||e instanceof o0||e instanceof oY||e instanceof oG||e instanceof oZ||e instanceof o1)}function aa(e,t,r){if(!ao(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=oB(r);throw"an object"===n?t.qu(e+" a custom object"):t.qu(e+" "+n)}}function al(e,t,r){if((t=ef(t))instanceof oJ)return t._internalPath;if("string"==typeof t)return ah(e,t);throw ac("Field path arguments must be of type string or ",e,!1,void 0,r)}const au=RegExp("[~\\*/\\[\\]]");function ah(e,t,r){if(t.search(au)>=0)throw ac(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new oJ(...t.split("."))._internalPath}catch(n){throw ac(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function ac(e,t,r,n,i){let s=n&&!n.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new t$(tz.INVALID_ARGUMENT,a+e+l)}function af(e,t){return e.some(e=>e.isEqual(t))}/**
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
 */class ad{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new oG(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new ap(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ag("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ap extends ad{data(){return super.data()}}function ag(e,t){return"string"==typeof t?ah(e,t):t instanceof oJ?t._internalPath:t._delegate._internalPath}class am{}class ay extends am{}class av extends ay{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new av(e,t,r)}_apply(e){let t=this._parse(e);return aT(e._query,t),new o$(e.firestore,e.converter,nu(e._query,t))}_parse(e){let t=o7(e.firestore);return function(e,t,r,n,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new t$(tz.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){a_(o,s);let t=[];for(let r of o)t.push(aE(n,e,r));a={arrayValue:{values:t}}}else a=aE(n,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||a_(o,s),a=function(e,t,r,n=!1){return ai(r,e.$u(n?4:3,t))}(r,t,o,"in"===s||"not-in"===s);return rY.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class aw extends am{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new aw(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:rJ.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())aT(r,e),r=nu(r,e)}(e._query,t),new o$(e.firestore,e.converter,nu(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class ab extends ay{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ab(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new t$(tz.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new t$(tz.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rW(t,r)}(e._query,this._field,this._direction);return new o$(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new ni(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function aE(e,t,r){if("string"==typeof(r=ef(r))){if(""===r)throw new t$(tz.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!no(t)&&-1!==r.indexOf("/"))throw new t$(tz.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(t8.fromString(r));if(!t9.isDocumentKey(n))throw new t$(tz.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return rM(e,new t9(n))}if(r instanceof oG)return rM(e,r._key);throw new t$(tz.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oB(r)}.`)}function a_(e,t){if(!Array.isArray(e)||0===e.length)throw new t$(tz.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function aT(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new t$(tz.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new t$(tz.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class aI{convertValue(e,t="none"){switch(rx(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rb(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rE(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw tj()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return rl(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new o1(null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>rb(e.doubleValue)))}convertGeoPoint(e){return new o0(rb(e.latitude),rb(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=rT(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rI(e));default:return null}}convertTimestamp(e){let t=rw(e);return new t6(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=t8.fromString(e);iD(r)||tj();let n=new rC(r.get(1),r.get(3)),i=new t9(r.popFirst(5));return n.isEqual(t)||tF(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function aS(e,t,r){return e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t}/**
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
 */class aC{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class aA extends ad{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new ax(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(ag("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ax extends aA{data(e={}){return super.data(e)}}class aD{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new aC(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ax(this._firestore,this._userDataWriter,r.key,r,new aC(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new t$(tz.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new ax(e._firestore,e._userDataWriter,r.doc.key,r.doc,new aC(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new ax(e._firestore,e._userDataWriter,t.doc.key,t.doc,new aC(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tj()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class ak extends aI{constructor(e){super(),this.firestore=e}convertBytes(e){return new oY(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new oG(this.firestore,null,t)}}function aN(e,t){return function(e,t){let r=new tG;return e.asyncQueue.enqueueAndForget(async()=>ou(await oL(e).then(e=>e.syncEngine),t,r)),r.promise}(oX(e),t)}/**
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
 */class aR{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=o7(e)}set(e,t,r){this._verifyNotCommitted();let n=aL(e,this._firestore),i=aS(n.converter,t,r),s=o9(this._dataReader,"WriteBatch.set",n._key,i,null!==n.converter,r);return this._mutations.push(s.toMutation(n._key,nB.none())),this}update(e,t,r,...n){let i;this._verifyNotCommitted();let s=aL(e,this._firestore);return i="string"==typeof(t=ef(t))||t instanceof oJ?an(this._dataReader,"WriteBatch.update",s._key,t,r,n):ar(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nB.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=aL(e,this._firestore);return this._mutations=this._mutations.concat(new nY(t._key,nB.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new t$(tz.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function aL(e,t){if((e=ef(e)).firestore!==t)throw new t$(tz.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}new WeakMap,function(e=!0){tM="11.1.0",eK(new ed("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new oW(new tW(t.getProvider("auth-internal")),new tZ(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new t$(tz.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rC(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),eX(tL,"4.7.5",void 0),eX(tL,"4.7.5","esm2017")}();const aO={apiKey:"AIzaSyDoc05YJjLdsnMRwjGfODill-I1m31r5FQ",authDomain:"todo-40148.firebaseapp.com",projectId:"todo-40148",storageBucket:"todo-40148.firebasestorage.app",messagingSenderId:"703229104751",appId:"1:703229104751:web:6e29a416c6cacfd805339a"},aM=document.getElementById("js-input"),aP=document.getElementById("js-add-btn"),aU=document.getElementById("js-clear-btn"),aV={todosIds:[],todosById:{},addTodo:function({title:e}){let t={title:e,done:!1,id:L()};return this.todosIds.push(t.id),this.todosById[t.id]=t,t},setTodos:function(e){this.todosIds=[],this.todosById={},e.forEach(e=>{this.todosIds.push(e.id),this.todosById[e.id]=e})},getTodos:function(){return{todosById:this.todosById,todosIds:this.todosIds}},toggleTodo:function(e){this.todosById[e].done=!this.todosById[e].done},getTodo:function(e){return this.todosById[e]}},aF=(s="js-output-list",o=function(e){aV.toggleTodo(e),aB.update(aV.getTodo(e))},{node:document.getElementById(s),renderTodos:function({todosIds:e,todosById:t}){e.forEach(e=>{this.addTodo(t[e])})},clearTodos:function(){this.node.innerHTML=""},addTodo:function(e){let{title:t,done:r,id:n}=e,i=document.createElement("div"),s=document.createElement("input"),a=document.createElement("label");s.type="checkbox",s.setAttribute("id",n),s.onclick=()=>{o(n)},r&&(s.checked=!0),a.innerText=t,a.setAttribute("for",n),i.append(s,a),this.node.append(i)}}),aB=function(e){let t=function(e,t){let r=(function(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)})("object"==typeof e?e:function(e=eB){let t=ej.get(e);if(!t&&e===eB&&es())return eW();if(!t)throw eH.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!r._initialized){let e=ei("firestore");e&&function(e,t,r,n={}){var i;let s=(e=oq(e,oz))._getSettings(),o=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&tB("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=tO.MOCK_USER;else{t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Y(JSON.stringify({alg:"none",type:"JWT"})),Y(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new t$(tz.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new tO(s)}e._authCredentials=new tQ(new tK(t,r))}}(r,...e)}return r}(eW(aO));return{key:e,db:t,pull:async function(){try{if(!this.key||""===this.key.trim())throw Error("Имя коллекции не указано или пустое.");let e=function(e,t,...r){if(e=ef(e),oU("collection","path",t),e instanceof oz){let n=t8.fromString(t,...r);return oF(n),new oK(e,null,n)}{if(!(e instanceof oG||e instanceof oK))throw new t$(tz.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(t8.fromString(t,...r));return oF(n),new oK(e.firestore,null,n)}}(this.db,this.key),t=function(e,t,...r){let n=[];for(let i of(t instanceof am&&n.push(t),function(e){let t=e.filter(e=>e instanceof aw).length,r=e.filter(e=>e instanceof av).length;if(t>1||t>0&&r>0)throw new t$(tz.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}(e,function(e,t="asc"){let r=ag("orderBy",e);return ab._create(r,t)}("createAt")),r=await function(e){e=oq(e,o$);let t=oq(e.firestore,oW),r=oX(t),n=new ak(t);return(/**
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
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new t$(tz.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new tG;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new ox({next:r=>{s.eu(),t.enqueueAndForget(()=>s2(e,o)),r.fromCache&&"server"===n.source?i.reject(new t$(tz.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),o=new s8(r,s,{includeMetadataChanges:!0,ua:!0});return s1(e,o)})(await oO(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new aD(t,n,e,r)))}(t),n=[];return r.forEach(e=>{n.push({id:e.id,title:e.data().title,done:e.data().done})}),n}catch(e){throw console.error("Ошибка при получении данных из Firestore:",e),e}},push:async function(e){try{await function(e,t,r){e=oq(e,oG);let n=oq(e.firestore,oW),i=aS(e.converter,t,void 0);return aN(n,[o9(o7(n),"setDoc",e._key,i,null!==e.converter,void 0).toMutation(e._key,nB.none())])}(oH(this.db,this.key,e.id),{title:e.title,done:e.done,createAt:new at("serverTimestamp")})}catch(e){console.error("Error adding document: ",e)}},delete:async function({todosIds:e}){var r;let n=(oX(r=oq(r=t,oW)),new aR(r,e=>aN(r,e)));e.forEach(e=>{let t=oH(this.db,this.key,e);n.delete(t)}),await n.commit()},update:async function(e){let t=oH(this.db,this.key,e.id);await function(e,t,r,...n){e=oq(e,oG);let i=oq(e.firestore,oW),s=o7(i);return aN(i,[("string"==typeof(t=ef(t))||t instanceof oJ?an(s,"updateDoc",e._key,t,void 0,n):ar(s,"updateDoc",e._key,t)).toMutation(e._key,nB.exists(!0))])}(t,{done:e.done})}}}("todos");aB.pull().then(e=>{aV.setTodos(e),aF.renderTodos(aV.getTodos())}),aP.addEventListener("click",()=>{let e=aM.value,t=aV.addTodo({title:e});aF.addTodo(t),aB.push(t),aM.value=""}),aU.addEventListener("click",()=>{aB.delete(aV.getTodos()),aV.setTodos([]),aF.clearTodos()});