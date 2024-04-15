"use strict";(self.webpackChunkseeking_maintainers=self.webpackChunkseeking_maintainers||[]).push([[691],{4353:function(t,e,n){var r=n(7294);e.Z=t=>r.createElement("footer",null,r.createElement("p",null,"Seeking Maintainers was created by"," ",r.createElement("a",{href:"https://garrit.xyz"},"Garrit Franke")," and was inspired by ",r.createElement("a",{href:"https://up-for-grabs.net/"},"up-for-grabs.net")," and"," ",r.createElement("a",{href:"https://512kb.club/"},"512kb.club"),"."),r.createElement("p",null,"Maintained with ♥ by Garrit Franke for a thriving open source ecosystem."),r.createElement("a",{href:"#top"},"^ TOP ^"))},726:function(t,e,n){var r=n(7294);e.Z=t=>r.createElement("header",null,r.createElement("a",{id:"top"}),r.createElement("nav",null,r.createElement("a",{href:"/",className:"home"===t.currentTab?"current":""},"Home"),r.createElement("a",{href:"/faq",className:"faq"===t.currentTab?"current":""},"FAQ"),r.createElement("a",{href:"https://github.com/garritfra/seeking-maintainers",target:"_blank"},"GitHub")),r.createElement("h1",null,"Seeking Maintainers"))},7200:function(t,e,n){n.r(e);n(8320);var r=n(7294),o=n(726),i=n(4353);e.default=t=>{let{data:e}=t;const n=e.githubData.data.repository.issues.edges.map((t=>{let{node:e}=t;return(t=>{var e,n;const r=(null===(o=(null===(e=/(\`{3}[\w|\W]+?\`{3})/.exec(t.body))||void 0===e?void 0:e.find((()=>!0)))||"",i="description",n=null==o||null===(a=o.split("\n").find((t=>t.startsWith(i+":"))))||void 0===a?void 0:a.replace(i+":","").trim())||void 0===n?void 0:n.replaceAll('"',""))||"";var o,i,a;return{id:t.id,title:t.title,url:t.url,description:r}})(e)})).sort(((t,e)=>t.title<e.title?1:-1)),a=e.githubData.data.topic.repositories.edges.map((t=>{let{node:e}=t;return e})).map((t=>{let{id:e,url:n,name:r,description:o}=t;return{id:e,url:n,title:r,description:o}})),u=t=>r.createElement("li",{key:t.id,className:"posting"},r.createElement("a",{className:"posting__link",target:"_blank",href:t.url},t.title),r.createElement("p",null,t.description)),c=t=>r.createElement("ul",{className:"posting-list"},t.map(u));return r.createElement(r.Fragment,null,r.createElement(o.Z,{currentTab:"home"}),r.createElement("main",null,r.createElement("p",null,"Maintaining a project that is used by hundreds, thousands or even millions of people can be stressful. Replying to issues, merging pull requests and answering questions in forums is a vital part of every open source project, but it takes a lot of time and energy, especially if you also work full-time in your day job."),r.createElement("p",null,"This list is an index of open source projects seeking new maintainers. If you find a project that sounds interesting and you're looking for a way to help out, feel free to take a look at their posting and apply as a maintainer. If you maintain a project yourself and feel stressed out, you're more than welcome to add it to this list."),r.createElement("p",null,r.createElement("br",null)),r.createElement("p",{className:"centre"},r.createElement("a",{href:"/faq",className:"button"},"Visit FAQ for more details")),r.createElement("p",null,r.createElement("br",null)),c(n),r.createElement("p",null,r.createElement("br",null)),r.createElement("h1",null,"Other projects seeking maintainers"),r.createElement("p",null,"This list shows even more projects looking for maintainers. It is generated from projects in the"," ",r.createElement("a",{href:"https://github.com/topics/maintainer-wanted"},"maintainer-wanted")," ","topic on GitHub. Unlike the projects above, we cannot verify if these projects are still actively looking for new maintainers."),c(a)),r.createElement(i.Z,null))}},509:function(t,e,n){var r=n(9985),o=n(3691),i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not a function")}},5027:function(t,e,n){var r=n(8999),o=String,i=TypeError;t.exports=function(t){if(r(t))return t;throw new i(o(t)+" is not an object")}},4328:function(t,e,n){var r=n(5290),o=n(7578),i=n(6310),a=function(t){return function(e,n,a){var u=r(e),c=i(u);if(0===c)return!t&&-1;var f,s=o(a,c);if(t&&n!=n){for(;c>s;)if((f=u[s++])!=f)return!0}else for(;c>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},6648:function(t,e,n){var r=n(8844),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},926:function(t,e,n){var r=n(3043),o=n(9985),i=n(6648),a=n(4201)("toStringTag"),u=Object,c="Arguments"===i(function(){return arguments}());t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(n){}}(e=u(t),a))?n:c?i(e):"Object"===(r=i(e))&&o(e.callee)?"Arguments":r}},8758:function(t,e,n){var r=n(6812),o=n(9152),i=n(2474),a=n(2560);t.exports=function(t,e,n){for(var u=o(e),c=a.f,f=i.f,s=0;s<u.length;s++){var l=u[s];r(t,l)||n&&r(n,l)||c(t,l,f(e,l))}}},5773:function(t,e,n){var r=n(7697),o=n(2560),i=n(5684);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},5684:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},1880:function(t,e,n){var r=n(9985),o=n(2560),i=n(8702),a=n(5014);t.exports=function(t,e,n,u){u||(u={});var c=u.enumerable,f=void 0!==u.name?u.name:e;if(r(n)&&i(n,f,u),u.global)c?t[e]=n:a(e,n);else{try{u.unsafe?t[e]&&(c=!0):delete t[e]}catch(s){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return t}},5014:function(t,e,n){var r=n(9037),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},7697:function(t,e,n){var r=n(3689);t.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6420:function(t,e,n){var r=n(9037),o=n(8999),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},71:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3615:function(t,e,n){var r,o,i=n(9037),a=n(71),u=i.process,c=i.Deno,f=u&&u.versions||c&&c.version,s=f&&f.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},2739:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9989:function(t,e,n){var r=n(9037),o=n(2474).f,i=n(5773),a=n(1880),u=n(5014),c=n(8758),f=n(5266);t.exports=function(t,e){var n,s,l,p,v,m=t.target,g=t.global,h=t.stat;if(n=g?r:h?r[m]||u(m,{}):r[m]&&r[m].prototype)for(s in e){if(p=e[s],l=t.dontCallGetSet?(v=o(n,s))&&v.value:n[s],!f(g?s:m+(h?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,s,p,t)}}},3689:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},7215:function(t,e,n){var r=n(3689);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},2615:function(t,e,n){var r=n(7215),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1236:function(t,e,n){var r=n(7697),o=n(6812),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,f=u&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:f}},8844:function(t,e,n){var r=n(7215),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);t.exports=r?a:function(t){return function(){return i.apply(t,arguments)}}},6058:function(t,e,n){var r=n(9037),o=n(9985);t.exports=function(t,e){return arguments.length<2?(n=r[t],o(n)?n:void 0):r[t]&&r[t][e];var n}},4849:function(t,e,n){var r=n(509),o=n(981);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7017:function(t,e,n){var r=n(8844),o=n(690),i=Math.floor,a=r("".charAt),u=r("".replace),c=r("".slice),f=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,r,l,p){var v=n+t.length,m=r.length,g=s;return void 0!==l&&(l=o(l),g=f),u(p,g,(function(o,u){var f;switch(a(u,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,v);case"<":f=l[c(u,1,-1)];break;default:var s=+u;if(0===s)return o;if(s>m){var p=i(s/10);return 0===p?o:p<=m?void 0===r[p-1]?a(u,1):r[p-1]+a(u,1):o}f=r[s-1]}return void 0===f?"":f}))}},9037:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6812:function(t,e,n){var r=n(8844),o=n(690),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},7248:function(t){t.exports={}},8506:function(t,e,n){var r=n(7697),o=n(3689),i=n(6420);t.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},4413:function(t,e,n){var r=n(8844),o=n(3689),i=n(6648),a=Object,u=r("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?u(t,""):a(t)}:a},6738:function(t,e,n){var r=n(8844),o=n(9985),i=n(4091),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},618:function(t,e,n){var r,o,i,a=n(9834),u=n(9037),c=n(8999),f=n(5773),s=n(6812),l=n(4091),p=n(2713),v=n(7248),m="Object already initialized",g=u.TypeError,h=u.WeakMap;if(a||l.state){var y=l.state||(l.state=new h);y.get=y.get,y.has=y.has,y.set=y.set,r=function(t,e){if(y.has(t))throw new g(m);return e.facade=t,y.set(t,e),e},o=function(t){return y.get(t)||{}},i=function(t){return y.has(t)}}else{var b=p("state");v[b]=!0,r=function(t,e){if(s(t,b))throw new g(m);return e.facade=t,f(t,b,e),e},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}}}},9985:function(t){var e="object"==typeof document&&document.all;t.exports=void 0===e&&void 0!==e?function(t){return"function"==typeof t||t===e}:function(t){return"function"==typeof t}},5266:function(t,e,n){var r=n(3689),o=n(9985),i=/#|\.prototype\./,a=function(t,e){var n=c[u(t)];return n===s||n!==f&&(o(e)?r(e):!!e)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},f=a.NATIVE="N",s=a.POLYFILL="P";t.exports=a},981:function(t){t.exports=function(t){return null==t}},8999:function(t,e,n){var r=n(9985);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},3931:function(t){t.exports=!1},1245:function(t,e,n){var r=n(8999),o=n(6648),i=n(4201)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"===o(t))}},734:function(t,e,n){var r=n(6058),o=n(9985),i=n(3622),a=n(9525),u=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&i(e.prototype,u(t))}},6310:function(t,e,n){var r=n(3126);t.exports=function(t){return r(t.length)}},8702:function(t,e,n){var r=n(8844),o=n(3689),i=n(9985),a=n(6812),u=n(7697),c=n(1236).CONFIGURABLE,f=n(6738),s=n(618),l=s.enforce,p=s.get,v=String,m=Object.defineProperty,g=r("".slice),h=r("".replace),y=r([].join),b=u&&!o((function(){return 8!==m((function(){}),"length",{value:8}).length})),d=String(String).split("String"),x=t.exports=function(t,e,n){"Symbol("===g(v(e),0,7)&&(e="["+h(v(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!a(t,"name")||c&&t.name!==e)&&(u?m(t,"name",{value:e,configurable:!0}):t.name=e),b&&n&&a(n,"arity")&&t.length!==n.arity&&m(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?u&&m(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=l(t);return a(r,"source")||(r.source=y(d,"string"==typeof e?e:"")),t};Function.prototype.toString=x((function(){return i(this)&&p(this).source||f(this)}),"toString")},8828:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},2560:function(t,e,n){var r=n(7697),o=n(8506),i=n(5648),a=n(5027),u=n(8360),c=TypeError,f=Object.defineProperty,s=Object.getOwnPropertyDescriptor,l="enumerable",p="configurable",v="writable";e.f=r?i?function(t,e,n){if(a(t),e=u(e),a(n),"function"==typeof t&&"prototype"===e&&"value"in n&&v in n&&!n[v]){var r=s(t,e);r&&r[v]&&(t[e]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:l in n?n[l]:r[l],writable:!1})}return f(t,e,n)}:f:function(t,e,n){if(a(t),e=u(e),a(n),o)try{return f(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},2474:function(t,e,n){var r=n(7697),o=n(2615),i=n(9556),a=n(5684),u=n(5290),c=n(8360),f=n(6812),s=n(8506),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=u(t),e=c(e),s)try{return l(t,e)}catch(n){}if(f(t,e))return a(!o(i.f,t,e),t[e])}},2741:function(t,e,n){var r=n(4948),o=n(2739).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},7518:function(t,e){e.f=Object.getOwnPropertySymbols},3622:function(t,e,n){var r=n(8844);t.exports=r({}.isPrototypeOf)},4948:function(t,e,n){var r=n(8844),o=n(6812),i=n(5290),a=n(4328).indexOf,u=n(7248),c=r([].push);t.exports=function(t,e){var n,r=i(t),f=0,s=[];for(n in r)!o(u,n)&&o(r,n)&&c(s,n);for(;e.length>f;)o(r,n=e[f++])&&(~a(s,n)||c(s,n));return s}},9556:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},5899:function(t,e,n){var r=n(2615),o=n(9985),i=n(8999),a=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&o(n=t.toString)&&!i(u=r(n,t)))return u;if(o(n=t.valueOf)&&!i(u=r(n,t)))return u;if("string"!==e&&o(n=t.toString)&&!i(u=r(n,t)))return u;throw new a("Can't convert object to primitive value")}},9152:function(t,e,n){var r=n(6058),o=n(8844),i=n(2741),a=n(7518),u=n(5027),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(u(t)),n=a.f;return n?c(e,n(t)):e}},9633:function(t,e,n){var r=n(5027);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},3477:function(t,e,n){var r=n(2615),o=n(6812),i=n(3622),a=n(9633),u=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in u||o(t,"flags")||!i(u,t)?e:r(a,t)}},4684:function(t,e,n){var r=n(981),o=TypeError;t.exports=function(t){if(r(t))throw new o("Can't call method on "+t);return t}},2713:function(t,e,n){var r=n(3430),o=n(4630),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},4091:function(t,e,n){var r=n(3931),o=n(9037),i=n(5014),a="__core-js_shared__",u=t.exports=o[a]||i(a,{});(u.versions||(u.versions=[])).push({version:"3.36.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE",source:"https://github.com/zloirock/core-js"})},3430:function(t,e,n){var r=n(4091);t.exports=function(t,e){return r[t]||(r[t]=e||{})}},146:function(t,e,n){var r=n(3615),o=n(3689),i=n(9037).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},7578:function(t,e,n){var r=n(8700),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5290:function(t,e,n){var r=n(4413),o=n(4684);t.exports=function(t){return r(o(t))}},8700:function(t,e,n){var r=n(8828);t.exports=function(t){var e=+t;return e!=e||0===e?0:r(e)}},3126:function(t,e,n){var r=n(8700),o=Math.min;t.exports=function(t){var e=r(t);return e>0?o(e,9007199254740991):0}},690:function(t,e,n){var r=n(4684),o=Object;t.exports=function(t){return o(r(t))}},8732:function(t,e,n){var r=n(2615),o=n(8999),i=n(734),a=n(4849),u=n(5899),c=n(4201),f=TypeError,s=c("toPrimitive");t.exports=function(t,e){if(!o(t)||i(t))return t;var n,c=a(t,s);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||i(n))return n;throw new f("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)}},8360:function(t,e,n){var r=n(8732),o=n(734);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},3043:function(t,e,n){var r={};r[n(4201)("toStringTag")]="z",t.exports="[object z]"===String(r)},4327:function(t,e,n){var r=n(926),o=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return o(t)}},3691:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},4630:function(t,e,n){var r=n(8844),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},9525:function(t,e,n){var r=n(146);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5648:function(t,e,n){var r=n(7697),o=n(3689);t.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},9834:function(t,e,n){var r=n(9037),o=n(9985),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},4201:function(t,e,n){var r=n(9037),o=n(3430),i=n(6812),a=n(4630),u=n(146),c=n(9525),f=r.Symbol,s=o("wks"),l=c?f.for||f:f&&f.withoutSetter||a;t.exports=function(t){return i(s,t)||(s[t]=u&&i(f,t)?f[t]:l("Symbol."+t)),s[t]}},6532:function(t,e,n){var r=n(9989),o=n(2615),i=n(8844),a=n(4684),u=n(9985),c=n(981),f=n(1245),s=n(4327),l=n(4849),p=n(3477),v=n(7017),m=n(4201),g=n(3931),h=m("replace"),y=TypeError,b=i("".indexOf),d=i("".replace),x=i("".slice),w=Math.max;r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,i,m,E,S,j,O,k,P=a(this),T=0,M=0,F="";if(!c(t)){if((n=f(t))&&(r=s(a(p(t))),!~b(r,"g")))throw new y("`.replaceAll` does not allow non-global regexes");if(i=l(t,h))return o(i,t,P,e);if(g&&n)return d(s(P),t,e)}for(m=s(P),E=s(t),(S=u(e))||(e=s(e)),j=E.length,O=w(1,j),T=b(m,E);-1!==T;)k=S?s(e(E,T,m)):v(E,m,T,[],void 0,e),F+=x(m,M,T)+k,M=T+j,T=T+O>m.length?-1:b(m,E,T+O);return M<m.length&&(F+=x(m,M)),F}})},8320:function(t,e,n){n(6532)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c04bb88a442159744c6f.js.map