!function(e){var i={},t=[{id:"analytics-xo",triggers:[],run:function(r,o){t.q=[],t.pptmTrack=function(e,t,n){try{n=n||{},delete(t=t||{}).userType,o.track(e,o.objectAssign(t,{pageType:o.get("analytics-id"),sub_component:"smartincentive",item:o.get("pptm:containerId"),mrid:o.get("pptm:merchantId"),context:o.get("pptm:context")}),n)}catch(e){o.log({t:"error",msg:"Messaging track failed",stack:e.stack})}},t.log=o.log;var e={PaypalOffersObject:"ppq",ppq:t};function t(){t.q.push(arguments)}r.PaypalOffersObject=r.PaypalOffersObject||e.PaypalOffersObject,r.ppq=r.ppq||e.ppq;var e="production"===(e=o.get("pptm:env"))?"https://www.paypalobjects.com/muse":"development"===e?"https://localhost.paypal.com:8443/muse":"https://www.paypalobjects.com/muse/stage",n=e+"/muse.js",i=(e=e,"development"===o.get("pptm:env")?e:e+"/analytics/index.html");function a(){var e=o.get("pptm:merchantId"),t=o.get("analytics-id");r.ppq("init",t),r.ppq("showExperience",i,"body",{flow:"visitor-info",variant:"analytics",mrid:e,isMobileEnabled:"true",isDesktopEnabled:"true",shouldCheckCountry:"true",mobileVariant:"analytics",mobileFlow:"visitor-info"})}!function(){var e=r.document.getElementsByTagName("script");if(e&&e.length)for(var t=0;t<e.length;t++){var n=e[t].src;if(n&&/muse.js/.test(n))return 1}}()?o.insertExternalScript(n,a):a(),o.track("pageView",{fltp:"analytics",sub_component:"analytics",flag_consume:"yes",subfeature1:"analytics-xo",pageType:o.get("analytics-id"),item:o.get("pptm:containerId"),mrid:o.get("pptm:merchantId"),context:o.get("pptm:context")},{ru:document.referrer}),o.on("userIdentification",e=>{let t=!1;e&&e.identified&&(t=!!e.identified),o.track("pageView",{fltp:"analytics",subfeature1:"analytics-xo",pageType:o.get("analytics-id"),flavor:"merchantRecognizedUser",item:o.get("pptm:containerId"),mrid:o.get("pptm:merchantId"),context:o.get("pptm:context"),mru:t},o.objectAssign({ru:document.referrer}))}),o.on("txnSuccess",e=>{const t=o.objectAssign({},e);delete t.event,o.track("pageView",{fltp:"analytics",subfeature1:"analytics-xo",pageType:o.get("analytics-id"),flavor:"txnSuccess",item:o.get("pptm:containerId"),mrid:o.get("pptm:merchantId"),context:o.get("pptm:context")},o.objectAssign({ru:document.referrer},t))})},configuration:{"analytics-id":"6JZG5KBD5E57C-1"}}];!function r(o,i,a){function c(t,e){if(!i[t]){if(!o[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=i[t]={exports:{}},o[t][0].call(n.exports,function(e){return c(o[t][1][e]||e)},n,n.exports,r,o,i,a)}return i[t].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)c(a[e]);return c}({1:[function(e,t,n){function r(t){return function(){var e=void 0;try{e=t()}catch(e){try{i({msg:e&&(e.msg||e.message),stack:e&&e.stack})}catch(e){}}return e}}function o(e){var t=-1;return t=void 0!==e?e===parseInt(e,10)?e:0<e&&e<1?parseFloat(e.toFixed(1)):parseFloat(e.toFixed(0)):t}var i=e("./log")(),e=r(function(){return document.title}),a=r(function(){return window.location.href}),c=r(function(){return window.screen.colorDepth}),u=r(function(){return window.screen.height}),s=r(function(){return window.screen.width}),p=r(function(){return"NA"}),g=r(function(){var e=window.screen||{},t=window.devicePixelRatio||1,n=o(e.width*t),e=o(e.height*t);return 90===Math.abs(window.orientation)&&(t=n,n=e,e=t),e}),l=r(function(){var e=window.screen||{},t=window.devicePixelRatio||1,n=o(e.width*t),e=o(e.height*t);return 90===Math.abs(window.orientation)&&(t=n,n=e,e=t),n}),f=r(function(){var e=window,t="inner";return"innerWidth"in window||(t="client",e=document.documentElement||document.body),e[t+"Height"]}),d=r(function(){var e=window,t="inner";return"innerWidth"in window||(t="client",e=document.documentElement||document.body),e[t+"Width"]}),m=function(){return{director:"application/x-director",mediaplayer:"application/x-mplayer2",pdf:"application/pdf",quicktime:"video/quicktime",real:"audio/x-pn-realaudio-plugin"}},v=function(e){var t=window.navigator.mimeTypes;if(t&&t.length)return(t=t[e])&&t.enabledPlugin},y=r(function(){var e,t=[],n=m();for(e in n)v(n[e])&&t.push(e);return t.join(",")}),h=r(function(){return window.navigator.languages?window.navigator.languages.join?window.navigator.languages.join(","):window.navigator.languages:window.navigator.userLanguage||window.navigator.language||window.navigator.browserLanguage||window.navigator.systemLanguage||void 0});t.exports={_getBrowserDataFactory:r,getPageTitle:e,getWindowLocation:a,getDeviceHeight:g,getDeviceWidth:l,getBrowserHeight:f,getBrowserWidth:d,getColorDepth:c,getScreenHeight:u,getScreenWidth:s,getJSVersion:p,getBrowserPlugins:y,getRosettaLanguage:h}},{"./log":4}],2:[function(e,t,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},e=e("./pptm");"object"===(void 0===i?"undefined":o(i))&&(i=e())},{"./pptm":6}],3:[function(e,t,n){t.exports=function(t){return{url:function(){var e;return"/"===(e=t.location.href.split("#")[0])[e.length-1]?e.substr(0,e.length-1):e},hostname:function(){return t.location.hostname},path:function(){var e;return""===(e=t.location.pathname)?"/":"/"===e[e.length-1]?e.substring(0,e.length-1):e}}}},{}],4:[function(e,t,n){var r=e("./request-beacon");t.exports=function(t){return function(e){t=t||"https://www.paypal.com/tagmanager/log",r.send(t,e="string"==typeof e?{msg:e}:e)}}},{"./request-beacon":7}],5:[function(e,t,n){var r={co:function(e,t){return!!~e.indexOf(t)},nco:function(e,t){return!r.co(e,t)},ew:function(e,t){return new RegExp(t+"$").test(e)},new:function(e,t){return!r.ew(e,t)},eq:function(e,t){return e===t},neq:function(e,t){return!r.eq(e,t)}};t.exports=r},{}],6:[function(e,t,n){function a(e){return"object"===(void 0===e?"undefined":o(e))&&"string"==typeof e.id&&"function"==typeof e.run&&"object"===o(e.configuration)}function c(e,t,n){return(n={get:h.get(t.variables,n),getAll:h.getAll(t.variables,n),insertExternalScript:h.insertExternalScript(e.document)}).getTrackingData=f(t),n.track=l(n.get("pptm:fptiServer")),n.log=t.log,n.on=t.on,n.objectAssign=w,n}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(e){return void 0===e?"undefined":r(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r(e)},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=e("./track"),s=e("./log"),p=e("./builtin-variables"),g=e("./trigger-utils"),l=u.createTrack,f=u.getTrackingData,d=function(o){return function(e){for(;o.unprocessedEvents.length;){var t=o.unprocessedEvents.shift();if(o.finalDDL=i({},o.finalDDL,t),t.event&&(r=o,"snippetRun"!==t.event||!r.snippetRun)&&(g.isKnownTriggerEvent(t.event)?o.triggerTags(t.event,t):o.triggerTags("customEvent",t),e&&o.eventListeners[t.event]))for(var n=0;n<o.eventListeners[t.event].length;++n)o.eventListeners[t.event][n](t)}var r}},m=function(o,i){return function(e,t){for(var n=0;n<i.tags.length;++n){var r=i.tags[n];if(!a(r))return void i.log({t:"error",msg:"Malformed tag has been prevented from running"});try{i.shouldTagTrigger(r,e,t)&&r.run(o,c(o,i,r))}catch(e){i.log({t:"error",msg:e.message,stack:e.stack})}}}},v=function(e){var t=e.paypalDDL,e={event:"snippetRun",t:(new Date).getTime()};if(t){for(var n=!1,r=0;r<t.length;++r)"snippetRun"===t[r].event&&(n=!0);n||t.push(e)}else t=[e];return t},y=function(e,t){for(var n in e)!e.hasOwnProperty(n)||e[n].triggers&&e[n].triggers.length||(e[n].triggers=[t])},h={get:function(t,n){return function(e){return/^pptm:/.test(e)?t[e.split(":")[1]]:n.configuration[e]}},getAll:function(e,t){return function(){return t.configuration}},insertExternalScript:function(a){return function(e,t,n){var r,o,i=a.createElement("script"),e=(i.type="text/javascript",i.async=!0,i.src=e,r=i,"function"==typeof(o=t)&&(r.addEventListener?r.onload=o:r.onreadystatechange=function(){/(loaded|complete)/.test(r.readyState)&&(r.onreadystatechange=null,o())}),"function"==typeof n&&(i.onerror=n),a.getElementsByTagName("head")[0]);e&&e.appendChild(i)}}},w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b=function(o,i){return function(e,t){i.eventListeners[e]=i.eventListeners[e]||[],i.eventListeners[e].push(t);for(var n=v(o),r=0;r<n.length;++r)n[r].event===e&&t(n[r])}};t.exports=function(){var a;return{init:(a={tags:{},triggers:{},variables:[]},function(e,t,n,r){var o,i;void 0!==e&&(a.variables=t||{},a.tags=n||{},a.triggers=r||{},a.unprocessedEvents=[],a.finalDDL={},a.eventListeners={},a.snippetRun=!1,a.triggers[t="$$page$view"]={id:t,type:"snippetRun"},y(a.tags,t),a.log=s(a.variables.logServer),a.on=b(e,a),a.builtinVars=p(e),a.shouldTagTrigger=g.createShouldTagTrigger(a.triggers,a.builtinVars),a.processEvents=d(a),a.triggerTags=m(e,a),void 0===n?a.log("`pptm.init` called with undefined `tags`"):(o=e.paypalDDL=v(e),i=o.push,o.push=function(){for(var e,t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.unprocessedEvents).push.apply(e,n),a.processEvents(!0),i.apply(o,n)},a.unprocessedEvents.push.apply(a.unprocessedEvents,o.slice(0)),a.processEvents(),a.snippetRun=!0))})}}},{"./builtin-variables":3,"./log":4,"./track":8,"./trigger-utils":9}],7:[function(e,t,n){t.exports={send:function(e,t){if(e&&t){var n,r=[];for(n in t)t.hasOwnProperty(n)&&r.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));r=r.join("&");(new window.Image).src=e+"?"+r}}}},{}],8:[function(e,t,n){function o(e){return a({identifier:"tagmanagernodeweb",website:"muse",feature:"third-party",s:"ci",subfeature1:"",subfeature2:"",sub_component:"",pageType:"",userType:"",flavor:"",es:"",testVariant:"",link:"",erpg:"",context:{},flag_consume:""},e)}function i(e,t){return a({pgrp:[e.website,e.feature,e.subfeature1,e.subfeature2,e.pageType].join(":"),page:[e.website,e.feature,e.subfeature1,e.subfeature2,e.pageType,e.userType,e.flavor,e.testVariant].join(":"),tsrce:e.identifier,comp:e.identifier,sub_component:e.sub_component,s:e.s,item:e.item,fltp:e.fltp,link:e.link,es:e.flavor,cust:e.cust,mrid:e.mrid,erpg:e.erpg,error_code:e.error_code,xe:e.xe,xt:e.xt,qe:e.qe,qt:e.qt,code:e.context.bn_code,partner_name:e.context.partner_name,flag_consume:e.flag_consume,pt:e.pt||u.getPageTitle(),dh:e.dh||u.getDeviceHeight(),dw:e.dw||u.getDeviceWidth(),bh:e.bh||u.getBrowserHeight(),bw:e.bw||u.getBrowserWidth(),cd:e.cd||u.getColorDepth(),sh:e.sh||u.getScreenHeight(),sw:e.sw||u.getScreenWidth(),v:e.v||u.getJSVersion(),pl:e.pl||u.getBrowserPlugins(),rosetta_language:e.rosetta_language||u.getRosettaLanguage(),correlation_id:e.correlation_id,mru:e.mru,unsc:e.unsc,identifier_used:e.identifier_used,offer_id:e.offer_id,soid:e.soid},t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=e("./request-beacon"),u=e("./analytics"),s=["pageView","click"];t.exports={createTrack:function(r){return function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};r=r||"https://t.paypal.com/ts",!~function(e){for(var t=0;t<s.length;++t)if(s[t]===e)return t;return-1}(e)||(t=i(o(t)),t=a({},t,{e:"pageView"===e?"im":"cl"},"click"===e?{pglk:t.pgrp+"|"+t.link,pgln:t.page+"|"+t.link}:{},{t:(new Date).getTime(),g:(new Date).getTimezoneOffset(),completeurl:u.getWindowLocation()},n),c.send(r,function(e){var t,n={};for(t in e)!e.hasOwnProperty(t)||!e[t]&&!1!==e[t]&&0!==e[t]||(n[t]=e[t]);return n}(t)))}},getTrackingData:function(e){return function(){var e=o(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{});return overrides={completeurl:u.getWindowLocation()},i(e,overrides)}}}},{"./analytics":1,"./request-beacon":7}],9:[function(e,t,n){var s=e("./operators"),r={snippetRun:!0};t.exports={createShouldTagTrigger:function(c,u){return function(e,t,n){var r=e.triggers;if(!(r&&!!r.length))return!0;for(var o=!1,i=0;i<r.length;++i)var a=c[r[i]],a=function(e,t,n,r){if(!(r.type===t))return!1;var o=r.filters||[];if(!!!o.length)return!0;for(var i=!0,a=0;a<o.length;++a){var c=o[a],u=void 0;switch(c.type){case"BUILT_IN":u=e[c.variable]();break;case"DDL":u=n[c.variable]}i=i&&s[c.operator](u,c.value)}return i}(u,t,n,a),o=o||a;return o}},isKnownTriggerEvent:function(e){return!!r[e]}}},{"./operators":5}]},{},[2]),"object"==typeof i&&i.init&&i.init(e,{containerIndex:1,containerId:"3d321d47-8348-4201-bb4e-4814cfd2d939",merchantId:"6JZG5KBD5E57C",containerUrl:"freecodecamp.org",fptiServer:"https://t.paypal.com/ts",logServer:"https://www.paypal.com/tagmanager/log",env:"production",context:{bn_code:"CHECKOUT_BUTTON",partner_name:"CHECKOUT_BUTTON",merchant_country:"US",vault:"true",domain_activation:{active:!0,updated_at:"2022-11-12T18:03:51.073Z",url:"www.freecodecamp.org"}}},t,{})}(window);

 /* generated 11/12/2022, 1:13:19 PM */ 

