import{r as Z,p as ee,b as L,d as te,e as O,f as N,w as ne,t as re,h as oe,i as ae,o as se}from"./entry.febd1464.js";var ie={},y={},D={};(function(f){Object.defineProperty(f,"__esModule",{value:!0}),Object.defineProperty(f,"ReflectAdapter",{enumerable:!0,get:function(){return A}});class A{static get(c,R,l){const e=Reflect.get(c,R,l);return typeof e=="function"?e.bind(c):e}static set(c,R,l,e){return Reflect.set(c,R,l,e)}static has(c,R){return Reflect.has(c,R)}static deleteProperty(c,R){return Reflect.deleteProperty(c,R)}}})(D);(function(f){Object.defineProperty(f,"__esModule",{value:!0});function A(l,e){for(var t in e)Object.defineProperty(l,t,{enumerable:!0,get:e[t]})}A(f,{ReadonlyHeadersError:function(){return c},HeadersAdapter:function(){return R}});const E=D;class c extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new c}}class R extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,s){if(typeof r=="symbol")return E.ReflectAdapter.get(t,r,s);const u=r.toLowerCase(),_=Object.keys(e).find(a=>a.toLowerCase()===u);if(!(typeof _>"u"))return E.ReflectAdapter.get(t,_,s)},set(t,r,s,u){if(typeof r=="symbol")return E.ReflectAdapter.set(t,r,s,u);const _=r.toLowerCase(),a=Object.keys(e).find(T=>T.toLowerCase()===_);return E.ReflectAdapter.set(t,a??r,s,u)},has(t,r){if(typeof r=="symbol")return E.ReflectAdapter.has(t,r);const s=r.toLowerCase(),u=Object.keys(e).find(_=>_.toLowerCase()===s);return typeof u>"u"?!1:E.ReflectAdapter.has(t,u)},deleteProperty(t,r){if(typeof r=="symbol")return E.ReflectAdapter.deleteProperty(t,r);const s=r.toLowerCase(),u=Object.keys(e).find(_=>_.toLowerCase()===s);return typeof u>"u"?!0:E.ReflectAdapter.deleteProperty(t,u)}})}static seal(e){return new Proxy(e,{get(t,r,s){switch(r){case"append":case"delete":case"set":return c.callable;default:return E.ReflectAdapter.get(t,r,s)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new R(e)}append(e,t){const r=this.headers[e];typeof r=="string"?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){const t=this.headers[e];return typeof t<"u"?this.merge(t):null}has(e){return typeof this.headers[e]<"u"}set(e,t){this.headers[e]=t}forEach(e,t){for(const[r,s]of this.entries())e.call(t,s,r,this)}*entries(){for(const e of Object.keys(this.headers)){const t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(const e of Object.keys(this.headers))yield e.toLowerCase()}*values(){for(const e of Object.keys(this.headers))yield this.get(e)}[Symbol.iterator](){return this.entries()}}})(y);var w={};(function(f){Object.defineProperty(f,"__esModule",{value:!0});function A(J,m){for(var h in m)Object.defineProperty(J,h,{enumerable:!0,get:m[h]})}A(f,{NEXT_QUERY_PARAM_PREFIX:function(){return E},PRERENDER_REVALIDATE_HEADER:function(){return c},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return R},NEXT_CACHE_TAGS_HEADER:function(){return l},NEXT_CACHE_SOFT_TAGS_HEADER:function(){return e},NEXT_CACHE_REVALIDATED_TAGS_HEADER:function(){return t},NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER:function(){return r},NEXT_CACHE_TAG_MAX_LENGTH:function(){return s},NEXT_CACHE_SOFT_TAG_MAX_LENGTH:function(){return u},NEXT_CACHE_IMPLICIT_TAG_ID:function(){return _},CACHE_ONE_YEAR:function(){return a},MIDDLEWARE_FILENAME:function(){return T},MIDDLEWARE_LOCATION_REGEXP:function(){return I},INSTRUMENTATION_HOOK_FILENAME:function(){return d},PAGES_DIR_ALIAS:function(){return n},DOT_NEXT_ALIAS:function(){return o},ROOT_DIR_ALIAS:function(){return i},APP_DIR_ALIAS:function(){return p},RSC_MOD_REF_PROXY_ALIAS:function(){return C},RSC_ACTION_VALIDATE_ALIAS:function(){return P},RSC_ACTION_PROXY_ALIAS:function(){return b},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return x},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return M},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return G},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return H},SERVER_PROPS_SSG_CONFLICT:function(){return U},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return V},SERVER_PROPS_EXPORT_ERROR:function(){return X},GSP_NO_RETURNED_VALUE:function(){return j},GSSP_NO_RETURNED_VALUE:function(){return k},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return B},GSSP_COMPONENT_MEMBER_ERROR:function(){return F},NON_STANDARD_NODE_ENV:function(){return Y},SSG_FALLBACK_EXPORT_ERROR:function(){return K},ESLINT_DEFAULT_DIRS:function(){return W},ESLINT_PROMPT_VALUES:function(){return z},SERVER_RUNTIME:function(){return Q},WEBPACK_LAYERS:function(){return $},WEBPACK_RESOURCE_QUERIES:function(){return q}});const E="nxtP",c="x-prerender-revalidate",R="x-prerender-revalidate-if-generated",l="x-next-cache-tags",e="x-next-cache-soft-tags",t="x-next-revalidated-tags",r="x-next-revalidate-tag-token",s=256,u=1024,_="_N_T_",a=31536e3,T="middleware",I=`(?:src/)?${T}`,d="instrumentation",n="private-next-pages",o="private-dot-next",i="private-next-root-dir",p="private-next-app-dir",C="private-next-rsc-mod-ref-proxy",P="private-next-rsc-action-validate",b="private-next-rsc-action-proxy",x="private-next-rsc-action-client-wrapper",M="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",G="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",H="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",U="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",V="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",X="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",j="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",k="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",B="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",F="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",Y='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',K="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",W=["app","pages","components","lib","src"],z=[{title:"Strict",recommended:!0,config:{extends:"next/core-web-vitals"}},{title:"Base",config:{extends:"next"}},{title:"Cancel",config:null}],Q={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},S={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",api:"api",middleware:"middleware",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",appMetadataRoute:"app-metadata-route",appRouteHandler:"app-route-handler"},$={...S,GROUP:{server:[S.reactServerComponents,S.actionBrowser,S.appMetadataRoute,S.appRouteHandler],nonClientServerTarget:[S.middleware,S.api],app:[S.reactServerComponents,S.actionBrowser,S.appMetadataRoute,S.appRouteHandler,S.serverSideRendering,S.appPagesBrowser]}},q={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}})(w);var g={exports:{}},v;function ce(){return v||(v=1,(()=>{typeof __nccwpck_require__<"u"&&(__nccwpck_require__.ab=__dirname+"/");var f={};(()=>{var A=f;/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */A.parse=e,A.serialize=t;var E=decodeURIComponent,c=encodeURIComponent,R=/; */,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function e(s,u){if(typeof s!="string")throw new TypeError("argument str must be a string");for(var _={},a=u||{},T=s.split(R),I=a.decode||E,d=0;d<T.length;d++){var n=T[d],o=n.indexOf("=");if(!(o<0)){var i=n.substr(0,o).trim(),p=n.substr(++o,n.length).trim();p[0]=='"'&&(p=p.slice(1,-1)),_[i]==null&&(_[i]=r(p,I))}}return _}function t(s,u,_){var a=_||{},T=a.encode||c;if(typeof T!="function")throw new TypeError("option encode is invalid");if(!l.test(s))throw new TypeError("argument name is invalid");var I=T(u);if(I&&!l.test(I))throw new TypeError("argument val is invalid");var d=s+"="+I;if(a.maxAge!=null){var n=a.maxAge-0;if(isNaN(n)||!isFinite(n))throw new TypeError("option maxAge is invalid");d+="; Max-Age="+Math.floor(n)}if(a.domain){if(!l.test(a.domain))throw new TypeError("option domain is invalid");d+="; Domain="+a.domain}if(a.path){if(!l.test(a.path))throw new TypeError("option path is invalid");d+="; Path="+a.path}if(a.expires){if(typeof a.expires.toUTCString!="function")throw new TypeError("option expires is invalid");d+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(d+="; HttpOnly"),a.secure&&(d+="; Secure"),a.sameSite){var o=typeof a.sameSite=="string"?a.sameSite.toLowerCase():a.sameSite;switch(o){case!0:d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"strict":d+="; SameSite=Strict";break;case"none":d+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return d}function r(s,u){try{return u(s)}catch{return s}}})(),g.exports=f})()),g.exports}(function(f){Object.defineProperty(f,"__esModule",{value:!0});function A(n,o){for(var i in o)Object.defineProperty(n,i,{enumerable:!0,get:o[i]})}A(f,{sendStatusCode:function(){return R},redirect:function(){return l},checkIsOnDemandRevalidate:function(){return e},COOKIE_NAME_PRERENDER_BYPASS:function(){return t},COOKIE_NAME_PRERENDER_DATA:function(){return r},RESPONSE_LIMIT_DEFAULT:function(){return s},SYMBOL_PREVIEW_DATA:function(){return u},SYMBOL_CLEARED_COOKIES:function(){return _},clearPreviewData:function(){return a},ApiError:function(){return T},sendError:function(){return I},setLazyProp:function(){return d}});const E=y,c=w;function R(n,o){return n.statusCode=o,n}function l(n,o,i){if(typeof o=="string"&&(i=o,o=307),typeof o!="number"||typeof i!="string")throw new Error("Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').");return n.writeHead(o,{Location:i}),n.write(i),n.end(),n}function e(n,o){const i=E.HeadersAdapter.from(n.headers),C=i.get(c.PRERENDER_REVALIDATE_HEADER)===o.previewModeId,P=i.has(c.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);return{isOnDemandRevalidate:C,revalidateOnlyGenerated:P}}const t="__prerender_bypass",r="__next_preview_data",s=4*1024*1024,u=Symbol(r),_=Symbol(t);function a(n,o={}){if(_ in n)return n;const{serialize:i}=ce(),p=n.getHeader("Set-Cookie");return n.setHeader("Set-Cookie",[...typeof p=="string"?[p]:Array.isArray(p)?p:[],i(t,"",{expires:new Date(0),httpOnly:!0,sameSite:"none",secure:!0,path:"/",...o.path!==void 0?{path:o.path}:void 0}),i(r,"",{expires:new Date(0),httpOnly:!0,sameSite:"none",secure:!0,path:"/",...o.path!==void 0?{path:o.path}:void 0})]),Object.defineProperty(n,_,{value:!0,enumerable:!1}),n}class T extends Error{constructor(o,i){super(i),this.statusCode=o}}function I(n,o,i){n.statusCode=o,n.statusMessage=i,n.end(i)}function d({req:n},o,i){const p={configurable:!0,enumerable:!0},C={...p,writable:!0};Object.defineProperty(n,o,{...p,get:()=>{const P=i();return Object.defineProperty(n,o,{...C,value:P}),P},set:P=>{Object.defineProperty(n,o,{...C,value:P})}})}})(ie);const _e={class:"header_"},ue=O("div",{class:"soso"},[O("div",{class:"line"},[O("h1",null,"Site en Maintenance")])],-1),Ee=O("br",null,null,-1),de=O("br",null,null,-1),fe={__name:"maintenance",async setup(f){let A,E,c=Z();return c.value=([A,E]=ee(()=>ae("/api/systeme/maintenance","$vMFbBUMewa")),A=await A,E(),A).data.value,(R,l)=>{const e=L("v-col"),t=L("v-row");return se(),te("div",null,[O("div",_e,[ue,Ee,N(t,{class:"ma-0 pa-0"},{default:ne(()=>[N(e,{cols:"3",style:{},class:"ma-0 pa-1"}),N(e,{cols:"2",style:{"background-color":"rgb(0,104,40)"},class:"ma-0 pa-1"}),N(e,{cols:"2",style:{"background-color":"rgb(255,190,0)"},class:"ma-0 pa-1"}),N(e,{cols:"2",style:{"background-color":"rgb(235,0,0)"},class:"ma-0 pa-1"}),N(e,{cols:"3",style:{},class:"ma-0 pa-1"})]),_:1}),de,O("p",null,re(oe(c).message),1)])])}}};export{fe as default};