(self.webpackChunkseeking_maintainers=self.webpackChunkseeking_maintainers||[]).push([[691],{9662:function(t,e,n){var r=n(614),o=n(6330),i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw i(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),a=function(t){return function(e,n,a){var u,c=r(e),s=i(c),f=o(a,s);if(t&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(1694),o=n(614),i=n(4326),a=n(5112)("toStringTag"),u=Object,c="Arguments"==i(function(){return arguments}());t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=u(t),a))?n:c?i(e):"Object"==(r=i(e))&&o(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e,n){for(var u=o(e),c=a.f,s=i.f,f=0;f<u.length;f++){var l=u[f];r(t,l)||n&&r(n,l)||c(t,l,s(e,l))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),i=n(6339),a=n(3072);t.exports=function(t,e,n,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:e;if(r(n)&&i(n,s,u),u.global)c?t[e]=n:a(e,n);else{try{u.unsafe?t[e]&&(c=!0):delete t[e]}catch(f){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n=void 0===e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,o,i=n(7854),a=n(8113),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(8052),u=n(3072),c=n(9920),s=n(4705);t.exports=function(t,e){var n,f,l,p,v,m=t.target,g=t.global,h=t.stat;if(n=g?r:h?r[m]||u(m,{}):(r[m]||{}).prototype)for(f in e){if(p=e[f],l=t.dontCallGetSet?(v=o(n,f))&&v.value:n[f],!s(g?f:m+(h?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},1702:function(t,e,n){var r=n(4374),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);t.exports=r?a:function(t){return function(){return i.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614);t.exports=function(t,e){return arguments.length<2?(n=r[t],o(n)?n:void 0):r[t]&&r[t][e];var n}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},647:function(t,e,n){var r=n(1702),o=n(7908),i=Math.floor,a=r("".charAt),u=r("".replace),c=r("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,f=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,l,p){var v=n+t.length,m=r.length,g=f;return void 0!==l&&(l=o(l),g=s),u(p,g,(function(o,u){var s;switch(a(u,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,v);case"<":s=l[c(u,1,-1)];break;default:var f=+u;if(0===f)return o;if(f>m){var p=i(f/10);return 0===p?o:p<=m?void 0===r[p-1]?a(u,1):r[p-1]+a(u,1):o}s=r[f-1]}return void 0===s?"":s}))}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),i=n(4326),a=Object,u=r("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?u(t,""):a(t)}:a},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,a=n(4811),u=n(7854),c=n(111),s=n(8880),f=n(2597),l=n(5465),p=n(6200),v=n(3501),m="Object already initialized",g=u.TypeError,h=u.WeakMap;if(a||l.state){var y=l.state||(l.state=new h);y.get=y.get,y.has=y.has,y.set=y.set,r=function(t,e){if(y.has(t))throw g(m);return e.facade=t,y.set(t,e),e},o=function(t){return y.get(t)||{}},i=function(t){return y.has(t)}}else{var b=p("state");v[b]=!0,r=function(t,e){if(f(t,b))throw g(m);return e.facade=t,s(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}}}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(t,e){var n=c[u(t)];return n==f||n!=s&&(o(e)?r(e):!!e)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},8554:function(t){t.exports=function(t){return null==t}},111:function(t,e,n){var r=n(614),o=n(4154),i=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===i}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2190:function(t,e,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,u(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),a=n(2597),u=n(9781),c=n(6530).CONFIGURABLE,s=n(2788),f=n(9909),l=f.enforce,p=f.get,v=String,m=Object.defineProperty,g=r("".slice),h=r("".replace),y=r([].join),b=u&&!o((function(){return 8!==m((function(){}),"length",{value:8}).length})),d=String(String).split("String"),x=t.exports=function(t,e,n){"Symbol("===g(v(e),0,7)&&(e="["+h(v(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!a(t,"name")||c&&t.name!==e)&&(u?m(t,"name",{value:e,configurable:!0}):t.name=e),b&&n&&a(n,"arity")&&t.length!==n.arity&&m(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?u&&m(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=l(t);return a(r,"source")||(r.source=y(d,"string"==typeof e?e:"")),t};Function.prototype.toString=x((function(){return i(this)&&p(this).source||s(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),u=n(4948),c=TypeError,s=Object.defineProperty,f=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";e.f=r?i?function(t,e,n){if(a(t),e=u(e),a(n),"function"==typeof t&&"prototype"===e&&"value"in n&&v in n&&!n[v]){var r=f(t,e);r&&r[v]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:l in n?n[l]:r[l],writable:!1})}return s(t,e,n)}:s:function(t,e,n){if(a(t),e=u(e),a(n),o)try{return s(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),u=n(5656),c=n(4948),s=n(2597),f=n(4664),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=u(t),e=c(e),f)try{return l(t,e)}catch(n){}if(s(t,e))return a(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,u=n(3501),c=r([].push);t.exports=function(t,e){var n,r=i(t),s=0,f=[];for(n in r)!o(u,n)&&o(r,n)&&c(f,n);for(;e.length>s;)o(r,n=e[s++])&&(~a(f,n)||c(f,n));return f}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&o(n=t.toString)&&!i(u=r(n,t)))return u;if(o(n=t.valueOf)&&!i(u=r(n,t)))return u;if("string"!==e&&o(n=t.toString)&&!i(u=r(n,t)))return u;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),u=n(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=a.f;return n?c(e,n(t)):e}},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},4706:function(t,e,n){var r=n(6916),o=n(2597),i=n(7976),a=n(7066),u=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in u||o(t,"flags")||!i(u,t)?e:r(a,t)}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.30.2",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293),i=n(7854).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),u=n(2140),c=n(5112),s=TypeError,f=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,c=a(t,f);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||i(n))return n;throw s("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(648),o=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),u=n(6293),c=n(3307),s=r.Symbol,f=o("wks"),l=c?s.for||s:s&&s.withoutSetter||a;t.exports=function(t){return i(f,t)||(f[t]=u&&i(s,t)?s[t]:l("Symbol."+t)),f[t]}},8757:function(t,e,n){"use strict";var r=n(2109),o=n(6916),i=n(1702),a=n(4488),u=n(614),c=n(8554),s=n(7850),f=n(1340),l=n(8173),p=n(4706),v=n(647),m=n(5112),g=n(1913),h=m("replace"),y=TypeError,b=i("".indexOf),d=i("".replace),x=i("".slice),E=Math.max,w=function(t,e,n){return n>t.length?-1:""===e?n:b(t,e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,i,m,S,j,O,k,P,T=a(this),M=0,A=0,I="";if(!c(t)){if((n=s(t))&&(r=f(a(p(t))),!~b(r,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(i=l(t,h))return o(i,t,T,e);if(g&&n)return d(f(T),t,e)}for(m=f(T),S=f(t),(j=u(e))||(e=f(e)),O=S.length,k=E(1,O),M=w(m,S,0);-1!==M;)P=j?f(e(S,M,m)):v(S,m,M,[],void 0,e),I+=x(m,A,M)+P,A=M+O,M=w(m,S,M+k);return A<m.length&&(I+=x(m,A)),I}})},7207:function(t,e,n){n(8757)},4353:function(t,e,n){"use strict";var r=n(7294);e.Z=t=>r.createElement("footer",null,r.createElement("p",null,"Seeking Maintainers was created by"," ",r.createElement("a",{href:"https://garrit.xyz"},"Garrit Franke")," and was inspired by ",r.createElement("a",{href:"https://up-for-grabs.net/"},"up-for-grabs.net")," and"," ",r.createElement("a",{href:"https://512kb.club/"},"512kb.club"),"."),r.createElement("p",null,"Maintained with ♥ by Garrit Franke for a thriving open source ecosystem."),r.createElement("a",{href:"#top"},"^ TOP ^"))},726:function(t,e,n){"use strict";var r=n(7294);e.Z=t=>r.createElement("header",null,r.createElement("a",{id:"top"}),r.createElement("nav",null,r.createElement("a",{href:"/",className:"home"===t.currentTab?"current":""},"Home"),r.createElement("a",{href:"/faq",className:"faq"===t.currentTab?"current":""},"FAQ"),r.createElement("a",{href:"https://github.com/garritfra/seeking-maintainers",target:"_blank"},"GitHub")),r.createElement("h1",null,"Seeking Maintainers"))},7200:function(t,e,n){"use strict";n.r(e);n(7207);var r=n(7294),o=n(726),i=n(4353);e.default=t=>{let{data:e}=t;const n=e.githubData.data.repository.issues.edges.map((t=>{let{node:e}=t;return(t=>{var e,n;const r=(null===(o=(null===(e=/(\`{3}[\w|\W]+?\`{3})/.exec(t.body))||void 0===e?void 0:e.find((()=>!0)))||"",i="description",n=null==o||null===(a=o.split("\n").find((t=>t.startsWith(i+":"))))||void 0===a?void 0:a.replace(i+":","").trim())||void 0===n?void 0:n.replaceAll('"',""))||"";var o,i,a;return{id:t.id,title:t.title,url:t.url,description:r}})(e)})).sort(((t,e)=>t.title<e.title?1:-1)),a=e.githubData.data.topic.repositories.edges.map((t=>{let{node:e}=t;return e})).map((t=>{let{id:e,url:n,name:r,description:o}=t;return{id:e,url:n,title:r,description:o}})),u=t=>r.createElement("li",{key:t.id,className:"posting"},r.createElement("a",{className:"posting__link",target:"_blank",href:t.url},t.title),r.createElement("p",null,t.description)),c=t=>r.createElement("ul",{className:"posting-list"},t.map(u));return r.createElement(r.Fragment,null,r.createElement(o.Z,{currentTab:"home"}),r.createElement("main",null,r.createElement("p",null,"Maintaining a project that is used by hundreds, thousands or even millions of people can be stressful. Replying to issues, merging pull requests and answering questions in forums is a vital part of every open source project, but it takes a lot of time and energy, especially if you also work full-time in your day job."),r.createElement("p",null,"This list is an index of open source projects seeking new maintainers. If you find a project that sounds interesting and you're looking for a way to help out, feel free to take a look at their posting and apply as a maintainer. If you maintain a project yourself and feel stressed out, you're more than welcome to add it to this list."),r.createElement("p",null,r.createElement("br",null)),r.createElement("p",{className:"centre"},r.createElement("a",{href:"/faq",className:"button"},"Visit FAQ for more details")),r.createElement("p",null,r.createElement("br",null)),c(n),r.createElement("p",null,r.createElement("br",null)),r.createElement("h1",null,"Other projects seeking maintainers"),r.createElement("p",null,"This list shows even more projects looking for maintainers. It is generated from projects in the"," ",r.createElement("a",{href:"https://github.com/topics/maintainer-wanted"},"maintainer-wanted")," ","topic on GitHub. Unlike the projects above, we cannot verify if these projects are still actively looking for new maintainers."),c(a)),r.createElement(i.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1ca15f9b2a2358f33d66.js.map