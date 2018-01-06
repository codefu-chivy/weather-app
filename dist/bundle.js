!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){(function(e,n){(function(){!function(t){"use strict";function e(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function a(t){if(t.bodyUsed)return n.reject(new TypeError("Already read"));t.bodyUsed=!0}function s(t){return new n(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function u(t){var e=new FileReader,n=s(e);return e.readAsArrayBuffer(t),n}function c(t){var e=new FileReader,n=s(e);return e.readAsText(t),n}function d(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&w(t))this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!_(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=a(this);if(t)return t;if(this._bodyBlob)return n.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return n.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return n.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?a(this)||n.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var t=a(this);if(t)return t;if(this._bodyBlob)return c(this._bodyBlob);if(this._bodyArrayBuffer)return n.resolve(d(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return n.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return T.indexOf(e)>-1?e:t}function y(t,e){e=e||{};var n=e.body;if(t instanceof y){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function m(t){var e=new i;return t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}function g(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(t){return t&&DataView.prototype.isPrototypeOf(t)},_=ArrayBuffer.isView||function(t){return t&&v.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},i.prototype.delete=function(t){delete this.map[e(t)]},i.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},i.prototype.set=function(t,n){this.map[e(t)]=r(n)},i.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),o(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),o(t)},b.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var T=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},f.call(y.prototype),f.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},g.error=function(){var t=new g(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];g.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new g(null,{status:e,headers:{location:t}})},t.Headers=i,t.Request=y,t.Response=g,t.fetch=function(t,e){return new n(function(n,r){var o=new y(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;n(new g(e,t))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),t.exports=e.fetch}).call(e)}).call(e,n(1),n(4))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.icons={day:{clear:"./src/media/images/sunny_day.png",partly:"./src/media/images/partly2_day.png",mostly:"./src/media/images/mostly_day.png",cloudy:"./src/media/images/cloudy_day.png",rainy:"./src/media/images/rain_day.png",thunderstorm:"./src/media/images/thunderstorm_day.png",snow:"./src/media/images/snow_day.png"},night:{clear:"./src/media/images/clear_night.png",partly:"./src/media/images/partly_night.png",mostly:"./src/media/images/mostly_night.png",cloudy:"./src/media/images/cloudy_day.png",rainy:"./src/media/images/rain_night.png",thunderstorm:"./src/media/images/thunderstorm_night.png",snow:"./src/media/images/snow_night.png"},background:{day:"./src/media/images/clear-sky2.jpg",night:"./src/media/images/night_sky.jpg"},backgroundBody:{day:"./src/media/images/backgrounds/sunny.jpg",night:"./src/media/images/backgrounds/night.jpg"}}},function(t,e,n){"use strict";(function(t){var e=(n(2),n(8)),r=n(9);!function(){function n(t){t.preventDefault(),d=i.value,i.blur(),u.style.display="none",(0,e.getWeatherForecast)(d,a,function(t){(0,r.updatePage)(t)})}var o=document.querySelector("form"),i=(document.getElementById("search"),document.getElementById("locate")),a=document.getElementById("form-error"),s=document.getElementById("show-forecast"),u=document.getElementById("ten-forecast"),c=void 0,d=void 0;navigator.geolocation.getCurrentPosition(function(t){c={latitude:t.coords.latitude,longitude:t.coords.longitude},(0,e.getWeatherForecast)(c,a,function(t){s.style.display="initial",(0,r.updatePage)(t)})},function(n){t("https://freegeoip.net/json/github.com",{method:"get"}).then(function(t){return t.json()}).then(function(t){console.log(t),c={latitude:t.latitude,longitude:t.longitude},(0,e.getWeatherForecast)(c,a,function(t){s.style.display="initial",(0,r.updatePage)(t)})})}),o.addEventListener("submit",n),search.addEventListener("click",n),s.addEventListener("click",function(){var t=void 0;t=d||c,(0,e.getTenDayForecast)(t,a,function(t){(0,r.updateTenDay)(t)})}),i.addEventListener("focus",function(){a.textContent=""})}()}).call(e,n(0))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){function n(){}function r(t,e){return function(){t.apply(e,arguments)}}function o(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,d._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?i:a)(e.promise,t._value);var r;try{r=n(t._value)}catch(t){return void a(e.promise,t)}i(e.promise,r)})}function i(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof d)return t._state=3,t._value=e,void s(t);if("function"==typeof n)return void c(r(n,e),t)}t._state=1,t._value=e,s(t)}catch(e){a(t,e)}}function a(t,e){t._state=2,t._value=e,s(t)}function s(t){2===t._state&&0===t._deferreds.length&&d._immediateFn(function(){t._handled||d._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)o(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function c(t,e){var n=!1;try{t(function(t){n||(n=!0,i(e,t))},function(t){n||(n=!0,a(e,t))})}catch(t){if(n)return;n=!0,a(e,t)}}function d(t){if(!(this instanceof d))throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(t,this)}var l=setTimeout,f=d.prototype;f.catch=function(t){return this.then(null,t)},f.then=function(t,e){var r=new this.constructor(n);return o(this,new u(t,e,r)),r},d.all=function(t){return new d(function(e,n){function r(t,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(t,e)},n)}o[t]=a,0==--i&&e(o)}catch(t){n(t)}}if(!t||void 0===t.length)throw new TypeError("Promise.all accepts an array");var o=Array.prototype.slice.call(t);if(0===o.length)return e([]);for(var i=o.length,a=0;a<o.length;a++)r(a,o[a])})},d.resolve=function(t){return t&&"object"==typeof t&&t.constructor===d?t:new d(function(e){e(t)})},d.reject=function(t){return new d(function(e,n){n(t)})},d.race=function(t){return new d(function(e,n){for(var r=0,o=t.length;r<o;r++)t[r].then(e,n)})},d._immediateFn="function"==typeof t&&function(e){t(e)}||function(t){l(t,0)},d._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},e.default=d}.call(e,n(5).setImmediate)},function(t,e,n){function r(t,e){this._id=t,this._clearFn=e}var o=Function.prototype.apply;e.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(6),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function r(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var r={callback:t,args:e};return c[u]=r,s(u),u++}function o(t){delete c[t]}function i(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}function a(t){if(d)setTimeout(a,0,t);else{var e=c[t];if(e){d=!0;try{i(e)}finally{o(t),d=!1}}}}if(!t.setImmediate){var s,u=1,c={},d=!1,l=t.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(t);f=f&&f.setTimeout?f:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var t=l.documentElement;s=function(e){var n=l.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),f.setImmediate=r,f.clearImmediate=o}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(1),n(7))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(d===setTimeout)return setTimeout(t,0);if((d===n||!d)&&setTimeout)return d=setTimeout,setTimeout(t,0);try{return d(t,0)}catch(e){try{return d.call(null,t,0)}catch(e){return d.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){p&&h&&(p=!1,h.length?y=h.concat(y):m=-1,y.length&&s())}function s(){if(!p){var t=o(a);p=!0;for(var e=y.length;e;){for(h=y,y=[];++m<e;)h&&h[m].run();m=-1,e=y.length}h=null,p=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var d,l,f=t.exports={};!function(){try{d="function"==typeof setTimeout?setTimeout:n}catch(t){d=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var h,y=[],p=!1,m=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];y.push(new u(t,e)),1!==y.length||p||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(t,e,n){"use strict";(function(t){function n(e,n,r){var a=o(e);t("https://api.openweathermap.org/data/2.5/weather?"+a+"&APPID="+i,{method:"get"}).then(function(t){return t.json()}).then(function(t){r(t)}).catch(function(t){console.log(t),t&&(n.textContent="Invalid Parameters!")})}function r(e,n,r){var a=o(e);t("https://api.openweathermap.org/data/2.5/forecast/daily?"+a+"&cnt=10&APPID="+i,{method:"get"}).then(function(t){return t.json()}).then(function(t){r(t)}).catch(function(t){console.log(t),t&&(n.textContent="Invalid Parameters!")})}function o(t){var e=void 0;return t.hasOwnProperty("latitude")?e="lat="+t.latitude+"&lon="+t.longitude:/\d{5}/.test(t)?e="zip="+t:(/\w+,\s?\w{2}/.test(t)&&(t=t.replace(/ /g,"")),e="q="+t),e}Object.defineProperty(e,"__esModule",{value:!0});var i="86973ef1d1d433defa2f0625ecc81a07";e.getWeatherForecast=n,e.getTenDayForecast=r}).call(e,n(0))},function(t,e,n){"use strict";function r(t){var e=document.getElementById("left-container"),n=document.getElementById("upper"),r=document.getElementById("lower"),a=document.getElementById("desc-container"),c=document.querySelector("body"),d=o(t.main.temp).fahrenheit,l=o(t.main.temp).celsius,f=t.main.humidity,h=t.clouds.all,y=t.weather[0].description,p=t.weather[0].id.toString(),m=(new Date).getHours(),g=void 0,b=void 0;m>17||m<4?(g=u.icons.night,e.style.background="url("+u.icons.background.night+") no-repeat center",c.style.background="url("+u.icons.backgroundBody.night+") no-repeat center fixed",c.style.backgroundSize="cover"):(g=u.icons.day,e.style.background="url("+u.icons.background.day+") no-repeat center",c.style.background="url("+u.icons.backgroundBody.day+") no-repeat center fixed",c.style.backgroundSize="cover"),b=s(p,g),e.innerHTML="<img id=icon src="+b+"><h1 id=temp>"+d+"&#186 F</h1><button id='fah' class=\"button\">&#186;F</button><button id='cel' class=\"button\">&#186;C</button>",n.innerHTML="<h1>Humidity</h1><h2 id=hum>"+f+"%</h2>",r.innerHTML="<h1>Clouds</h1><h2 class=clouds>"+h+"%</h2>",a.innerHTML="<h1 id=description>"+t.name+": "+y+"</h1>",e.addEventListener("click",function(t){return i(t,d,l)})}function o(t){return{fahrenheit:Math.round(1.8*t-459.67),celsius:Math.round(t-273.15)}}function i(t,e,n){"button"===t.target.localName&&("cel"===t.target.id?document.getElementById("temp").textContent=n+"º C":document.getElementById("temp").textContent=e+"º F")}function a(t){var e=document.getElementById("ten-forecast"),n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=(new Date).getDay()-1,i=t.list.map(function(t,e){var i=t.weather[0].id.toString(),a=s(i,u.icons.day);return r++,r===n.length&&(r=0),"<div class='day'>\n                '<h1>"+n[r]+"</h1>\n                <img src='"+a+"'/>\n                <h1 class='day-temp-max'>"+o(t.temp.max).fahrenheit+"&#186;F</h1>\n                <h2 class='day-temp-min'>"+o(t.temp.min).fahrenheit+"&#186;F</h2>\n            </div>"}).join("");e.innerHTML=i,e.style.display="flex"}function s(t,e){return/^2\d{2}$/.test(t)?e.thunderstorm:/^3|5\d{2}$/.test(t)?e.rainy:/^6\d{2}$/.test(t)?e.snow:"800"===t?e.clear:/^[801]|[802]$/.test(t)?e.mostly:/^[8\d{2}]|[701]|[721]|[741]$/.test(t)?e.cloudy:e.clear}Object.defineProperty(e,"__esModule",{value:!0}),e.updateTenDay=e.updatePage=void 0;var u=n(2);e.updatePage=r,e.updateTenDay=a}]);