globalThis._importMeta_={url:import.meta.url,env:process.env};import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { existsSync, writeFile, mkdirSync } from 'node:fs';
import { parentPort, threadId } from 'node:worker_threads';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseHeader, send, getResponseStatus, setResponseStatus, setResponseHeaders, setCookie, appendHeader, parseCookies, getHeaders, getMethod, getQuery as getQuery$1, createError, isMethod, readBody, getRequestHeaders, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler, sendStream, getResponseStatusText } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/h3/dist/index.mjs';
import CredentialsProvider from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/next-auth/providers/credentials.js';
import bcrypt, { hash as hash$1, compare } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/bcrypt/bcrypt.js';
import { PrismaClient, Prisma } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/@prisma/client/index.js';
import puppeteer from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import * as fs$1 from 'fs';
import fs__default, { existsSync as existsSync$1, readFileSync } from 'fs';
import QRCode from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/qrcode/lib/index.js';
import jwt from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/jsonwebtoken/index.js';
import * as path from 'path';
import path__default from 'path';
import * as fs from 'fs/promises';
import slugify from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/slugify/slugify.js';
import XLSX from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/xlsx/xlsx.mjs';
import Busboy from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/busboy/lib/index.js';
import { getRequestDependencies, getPreloadLinks, getPrefetchLinks, createRenderer } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import { stringify, uneval } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/devalue/index.js';
import { renderToString } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/vue/server-renderer/index.mjs';
import { renderSSRHead } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/@unhead/ssr/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/scule/dist/index.mjs';
import { klona } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/klona/dist/index.mjs';
import defu, { defuFn, defu as defu$1 } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/unstorage/drivers/fs.mjs';
import { toRouteMatcher, createRouter } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/radix3/dist/index.mjs';
import { AuthHandler } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/next-auth/core/index.js';
import getURL from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/requrl/dist/requrl.js';
import { version, unref } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/vue/index.mjs';
import { createServerHead as createServerHead$1 } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin } from 'file:///home/camoes/Documents/20240316_fromzero/node_modules/@unhead/shared/dist/index.mjs';

const r=Object.create(null),E=e=>globalThis.process?.env||globalThis._importMeta_.env||globalThis.Deno?.env.toObject()||globalThis.__env__||(e?r:globalThis),s=new Proxy(r,{get(e,o){return E()[o]??r[o]},has(e,o){const i=E();return o in i||o in r},set(e,o,i){const P=E(!0);return P[o]=i,!0},deleteProperty(e,o){if(!o)return !1;const i=E(!0);return delete i[o],!0},ownKeys(){const e=E(!0);return Object.keys(e)}}),t=typeof process<"u"&&process.env&&"development"||"",p=[["APPVEYOR"],["AWS_AMPLIFY","AWS_APP_ID",{ci:!0}],["AZURE_PIPELINES","SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"],["AZURE_STATIC","INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"],["APPCIRCLE","AC_APPCIRCLE"],["BAMBOO","bamboo_planKey"],["BITBUCKET","BITBUCKET_COMMIT"],["BITRISE","BITRISE_IO"],["BUDDY","BUDDY_WORKSPACE_ID"],["BUILDKITE"],["CIRCLE","CIRCLECI"],["CIRRUS","CIRRUS_CI"],["CLOUDFLARE_PAGES","CF_PAGES",{ci:!0}],["CODEBUILD","CODEBUILD_BUILD_ARN"],["CODEFRESH","CF_BUILD_ID"],["DRONE"],["DRONE","DRONE_BUILD_EVENT"],["DSARI"],["GITHUB_ACTIONS"],["GITLAB","GITLAB_CI"],["GITLAB","CI_MERGE_REQUEST_ID"],["GOCD","GO_PIPELINE_LABEL"],["LAYERCI"],["HUDSON","HUDSON_URL"],["JENKINS","JENKINS_URL"],["MAGNUM"],["NETLIFY"],["NETLIFY","NETLIFY_LOCAL",{ci:!1}],["NEVERCODE"],["RENDER"],["SAIL","SAILCI"],["SEMAPHORE"],["SCREWDRIVER"],["SHIPPABLE"],["SOLANO","TDDIUM"],["STRIDER"],["TEAMCITY","TEAMCITY_VERSION"],["TRAVIS"],["VERCEL","NOW_BUILDER"],["VERCEL","VERCEL",{ci:!1}],["VERCEL","VERCEL_ENV",{ci:!1}],["APPCENTER","APPCENTER_BUILD_ID"],["CODESANDBOX","CODESANDBOX_SSE",{ci:!1}],["STACKBLITZ"],["STORMKIT"],["CLEAVR"],["ZEABUR"],["CODESPHERE","CODESPHERE_APP_ID",{ci:!0}]];function B(){if(globalThis.process?.env)for(const e of p){const o=e[1]||e[0];if(globalThis.process?.env[o])return {name:e[0].toLowerCase(),...e[2]}}return globalThis.process?.env?.SHELL==="/bin/jsh"&&globalThis.process?.versions?.webcontainer?{name:"stackblitz",ci:!1}:{name:"",ci:!1}}const I=B(),d=I.name;function n(e){return e?e!=="false":!1}const l=globalThis.process?.platform||"",T=n(s.CI)||I.ci!==!1,a=n(globalThis.process?.stdout&&globalThis.process?.stdout.isTTY);n(s.DEBUG);const c=t==="test"||n(s.TEST);n(s.MINIMAL)||T||c||!a;const C=/^win/i.test(l);!n(s.NO_COLOR)&&(n(s.FORCE_COLOR)||(a||C)&&s.TERM!=="dumb"||T);const R=(globalThis.process?.versions?.node||"").replace(/^v/,"")||null;Number(R?.split(".")[0])||null;const w=globalThis.process||Object.create(null),_={versions:{}};new Proxy(w,{get(e,o){if(o==="env")return s;if(o in e)return e[o];if(o in _)return _[o]}});const L=!!globalThis.Netlify,A=!!globalThis.EdgeRuntime,D=globalThis.navigator?.userAgent==="Cloudflare-Workers",O=!!globalThis.Deno,S=!!globalThis.__lagon__,N=globalThis.process?.release?.name==="node",u=!!globalThis.Bun||!!globalThis.process?.versions?.bun,b=!!globalThis.fastly,G=[[L,"netlify"],[A,"edge-light"],[D,"workerd"],[O,"deno"],[S,"lagon"],[N,"node"],[u,"bun"],[b,"fastly"]];function K(){const e=G.find(o=>o[0]);if(e)return {name:e[1]}}const g=K();g?.name||"";

const inlineAppConfig = {
  "nuxt": {
    "buildId": "dev"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      }
    }
  },
  "public": {
    "auth": {
      "isEnabled": true,
      "origin": "http://10.10.2.251:5072",
      "basePath": "/api/auth",
      "trustHost": false,
      "enableSessionRefreshPeriodically": false,
      "enableSessionRefreshOnWindowFocus": true,
      "enableGlobalAppMiddleware": true,
      "defaultProvider": "",
      "addDefaultCallbackUrl": true,
      "globalMiddlewareOptions": {
        "allow404WithoutAuth": true,
        "addDefaultCallbackUrl": true
      }
    }
  },
  "auth": {
    "isEnabled": true,
    "origin": "http://10.10.2.251:5072",
    "basePath": "/api/auth",
    "trustHost": false,
    "enableSessionRefreshPeriodically": false,
    "enableSessionRefreshOnWindowFocus": true,
    "enableGlobalAppMiddleware": true,
    "defaultProvider": "",
    "addDefaultCallbackUrl": true,
    "globalMiddlewareOptions": {
      "allow404WithoutAuth": true,
      "addDefaultCallbackUrl": true
    },
    "isOriginSet": true
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/home/camoes/Documents/20240316_fromzero/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/camoes/Documents/20240316_fromzero","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/home/camoes/Documents/20240316_fromzero/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/camoes/Documents/20240316_fromzero/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/home/camoes/Documents/20240316_fromzero/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('data', unstorage_47drivers_47fs({"driver":"fs","base":"/home/camoes/Documents/20240316_fromzero/.data/kv","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const script = `
if (!window.__NUXT_DEVTOOLS_TIME_METRIC__) {
  Object.defineProperty(window, '__NUXT_DEVTOOLS_TIME_METRIC__', {
    value: {},
    enumerable: false,
    configurable: true,
  })
}
window.__NUXT_DEVTOOLS_TIME_METRIC__.appInit = Date.now()
`;

const _idhCTEHVdz = (function(nitro) {
  nitro.hooks.hook("render:html", (htmlContext) => {
    htmlContext.head.push(`<script>${script}<\/script>`);
  });
});

const isNonEmptyObject = (obj) => typeof obj === "object" && Object.keys(obj).length > 0;

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.path.endsWith("/favicon.ico")) {
      setResponseHeader(event, "Content-Type", "image/x-icon");
      return send(
        event,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
      );
    }
    const response = await handler(event);
    if (!response) {
      const _currentStatus = getResponseStatus(event);
      setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
      return send(
        event,
        "No response returned from render handler: " + event.path
      );
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (response.headers) {
      setResponseHeaders(event, response.headers);
    }
    if (response.statusCode || response.statusMessage) {
      setResponseStatus(event, response.statusCode, response.statusMessage);
    }
    return response.body;
  });
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

const months = [
  "janvier",
  "f\xE9vrier",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "ao\xFBt",
  "septembre",
  "octobre",
  "novembre",
  "d\xE9cembre"
];
function dateformatFr_(date) {
  console.log("typeof date");
  console.log(typeof date);
  if (!date)
    return null;
  return [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth()).padStart(2, "0"),
    String(date.getFullYear()).padStart(4, "0")
  ].join("/");
}
function dateformatFr_long(date) {
  console.log("typeof date");
  console.log(typeof date);
  if (!date)
    return null;
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${day == 1 ? "1er" : day} ${months[month]} ${year}`;
}

function defaultFooter(date) {
  return `<div style="border-top: solid 1px #bbb; width: 100%; font-size: 9px;
  padding: 0px;padding-bottom: 5px; color: #bbb; position: relative;">
  <div style="position: absolute; left: 15px; top: 5px;"> ${date.toISOString()} </div>
      <div style="position: absolute; left:50%; top: 5px; margin-left:-20px;"> <span>Realized by <a style="text-decoration: none ; color :#00838f; " href="https://ticsmaster.bj/">ticsmaster</a></span></div>
      <div style="position: absolute; right: 15px; top: 5px;"><strong>Page <span class="pageNumber"></span></strong> sur <span class="totalPages"></span></div>
  </div>
  `;
}
const defaultMargin = {
  left: "30px",
  right: "30px",
  bottom: "40px",
  top: "30px"
};
async function generatePDF(html, options) {
  var _a, _b;
  try {
    const pdf_option = {
      format: (options == null ? void 0 : options.format) || "A4",
      path: (options == null ? void 0 : options.path) || void 0,
      landscape: options == null ? void 0 : options.landscap,
      displayHeaderFooter: (options == null ? void 0 : options.displayHeaderFooter) == void 0 ? true : false,
      // displayHeaderFooter: true,
      headerTemplate: (options == null ? void 0 : options.headerTemplate) || "",
      footerTemplate: (options == null ? void 0 : options.footerTemplate) ? `<div style="font-size : 30px; background : red;  width: 100%; " >${options == null ? void 0 : options.footerTemplate}</div>` : defaultFooter(/* @__PURE__ */ new Date()),
      margin: (options == null ? void 0 : options.margin) || defaultMargin,
      printBackground: true
    };
    const browser = await puppeteer.launch({
      headless: "new",
      args: [
        "--no-sandbox"
        /* ,'--disable-dev-shm-usage' */
      ]
    });
    const page = await browser.newPage();
    await page.setContent(html);
    if ((_a = options == null ? void 0 : options.watermark) == null ? void 0 : _a.status) {
      await page.evaluate((_b = options == null ? void 0 : options.watermark) == null ? void 0 : _b.fun);
    }
    let file = await page.pdf(pdf_option);
    console.log("ceci est le document generer", file);
    await browser.close();
    return (options == null ? void 0 : options.path) ? void 0 : file;
  } catch (error) {
    console.log(error);
    return { error };
  }
}

function ReadJson(file_path) {
  try {
    let __ = fs__default.readFileSync(file_path, "utf8");
    let data = JSON.parse(__);
    return data;
  } catch (error) {
    console.error(error);
  }
  return {};
}

const my_menu = [
  {
    icon: "mdi-account-edit",
    title: "Mon compte",
    to: "/tableau-de-bord/mon-compte",
    full_to: "/tableau-de-bord/mon-compte",
    can: ["Enregistrer mon compte"]
  },
  {
    icon: "mdi-account-supervisor",
    title: "Utilisateurs & profils",
    to: "/tableau-de-bord/utilisateurs-profils",
    full_to: "/tableau-de-bord/utilisateurs-profils",
    can: [
      "Enregistrer un profil",
      "Supprimer les profils",
      "Voir les profils",
      "Enregistrer un utilisateur",
      "Supprimer les utilisateurs",
      "Voir les utilisateurs"
    ]
  },
  {
    icon: "mdi-clipboard-list",
    title: "Sessions",
    to: "/tableau-de-bord/sessions",
    full_to: "/tableau-de-bord/sessions",
    can: [
      "Enregistrer une session",
      "Supprimer des sessions",
      "Voir la liste des sessions"
    ]
  },
  {
    icon: "mdi-school",
    title: "Candidats",
    to: "/tableau-de-bord/candidats",
    full_to: "/tableau-de-bord/candidats",
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  },
  {
    icon: "mdi-cog",
    title: "Configuration",
    to: "/tableau-de-bord/configuration",
    full_to: "/tableau-de-bord/configuration",
    can: [
      "Enregistrer une branche",
      "Supprimer les branches",
      "Voir la liste des branches",
      "Enregistrer un corps de m\xE9tier",
      "Supprimer les corps de m\xE9tier",
      "Voir la liste des corps de m\xE9tier",
      "Enregistrer un m\xE9tier",
      "Supprimer les m\xE9tiers",
      "Voir la liste des m\xE9tiers",
      "Enregistrer un centre de composition",
      "Supprimer les centres de composition",
      "Voir la liste des centres de composition",
      "Enregistrer des signataires"
    ]
  }
];
const my_sub_menu = {
  utilisateur_profil: [
    {
      icon: "mdi mdi-account-multiple-plus",
      title: "Utilisateurs",
      to: "/tableau-de-bord/utilisateurs-profils/utilisateurs",
      can: [
        "Enregistrer un utilisateur",
        "Supprimer les utilisateurs",
        "Voir les utilisateurs"
      ]
    },
    {
      icon: "mdi mdi-account-multiple-plus",
      title: "Profils",
      to: "/tableau-de-bord/utilisateurs-profils/profils",
      can: [
        "Enregistrer un profil",
        "Supprimer les profils",
        "Voir les profils"
      ]
    }
  ],
  configuration: [
    {
      icon: "mdi mdi-account-multiple-plus",
      title: "Signataires",
      to: "/tableau-de-bord/configuration/signataires",
      can: ["Enregistrer des signataires"]
    }
  ]
};
const my_sub_menu_card = {};
const other_path = [
  /* 
     to: "/tableau-de-bord/",
     can :[
         "Enregistrer un ...."
     ]  
  
  */
];
function main() {
  let tab = my_menu.map((v) => {
    return { to: v.to, can: v.can };
  });
  for (const menu_item of [my_sub_menu, my_sub_menu_card]) {
    for (const key in menu_item) {
      if (Object.hasOwnProperty.call(my_sub_menu, key)) {
        for (let i = 0; i < my_sub_menu[key].length; i++) {
          const element = my_sub_menu[key][i];
          tab.push({
            to: element.to,
            can: element.can
          });
        }
      }
    }
  }
  tab.push(...other_path);
  return tab;
}
main();

async function saveFile(file, dir, filename, ext) {
  if (!existsSync(dir)) {
    await fs.mkdir(dir, { recursive: true });
  }
  let new_filename = dir + filename + ext;
  writeFile(new_filename, file.buffer, (err) => {
    if (err)
      throw err;
    console.log(`<${filename}${ext}> is saved \u2705`);
  });
}

function readFromFilesDirectory(dir, filePath, defaults) {
  const filesDirectory = path__default.join("./", dir);
  if (!filePath)
    return fs__default.createReadStream(path__default.join(filesDirectory, defaults));
  const fullPath = path__default.join(filesDirectory, filePath);
  if (!fullPath.startsWith(filesDirectory)) {
    throw new Error(`Le chemin sort du dossier "${dir}".`);
  }
  if (!fs__default.existsSync(fullPath)) {
    return fs__default.createReadStream(path__default.join(filesDirectory, defaults));
  }
  return fs__default.createReadStream(fullPath);
}

const useFiles = async (event) => {
  return new Promise((resolve) => {
    const { req } = event.node;
    const files = [];
    const fields = {};
    const busboy = Busboy({ headers: req.headers });
    busboy.on("file", (name, file, info) => {
      const { filename, encoding, mimeType } = info;
      var chunks = [];
      file.on("data", (chunk) => {
        chunks.push(chunk);
      });
      file.on("end", () => {
        files.push({
          fieldname: name,
          filename,
          // filename: new_name,
          encoding,
          mimetype: mimeType,
          buffer: Buffer.concat(chunks)
        });
      });
    });
    busboy.on("field", (name, value, info) => {
      fields[name] = value;
    });
    busboy.on("finish", () => {
      resolve({ files, fields });
    });
    req.pipe(busboy);
  });
};
const useFile = useFiles;

const DEFAULT_ERROR_MESSAGE = ` Nous n'avons pas pu effectuer l'op\xE9ration demand\xE9e. Veuillez actualiser la page et r\xE9essayer. `;
const EXAM_CLASS_ID = [28, 39];
const SLUG_PRIVILEGED_ROLE = "administrateur";
const STATUS_REQUEST_AUTHORIZATION = {
  REJETE: "REJETE",
  ACCEPTE: "ACCEPTE",
  SOUS_RESERVE: "SOUS_RESERVE"
};
const CONST_VAR = {
  DEFAULT_ERROR_MESSAGE,
  EXAM_CLASS_ID,
  STATUS_REQUEST_AUTHORIZATION,
  SLUG_PRIVILEGED_ROLE
};

let preparedAuthHandler;
let usedSecret;
const SUPPORTED_ACTIONS = ["providers", "session", "csrf", "signin", "signout", "callback", "verify-request", "error", "_log"];
const ERROR_MESSAGES = {
  NO_SECRET: "AUTH_NO_SECRET: No `secret` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development",
  NO_ORIGIN: "AUTH_NO_ORIGIN: No `origin` - this is an error in production, see https://sidebase.io/nuxt-auth/resources/errors. You can ignore this during development"
};
const readBodyForNext = async (event) => {
  let body;
  if (isMethod(event, "PATCH") || isMethod(event, "POST") || isMethod(event, "PUT") || isMethod(event, "DELETE")) {
    body = await readBody(event);
  }
  return body;
};
const parseActionAndProvider = ({ context }) => {
  const params = context.params._?.split("/");
  if (!params || ![1, 2].includes(params.length)) {
    throw createError({ statusCode: 400, statusMessage: `Invalid path used for auth-endpoint. Supply either one path parameter (e.g., \`/api/auth/session\`) or two (e.g., \`/api/auth/signin/github\` after the base path (in previous examples base path was: \`/api/auth/\`. Received \`${params}\`` });
  }
  const [unvalidatedAction, providerId] = params;
  const action = SUPPORTED_ACTIONS.find((action2) => action2 === unvalidatedAction);
  if (!action) {
    throw createError({ statusCode: 400, statusMessage: `Called endpoint with unsupported action ${unvalidatedAction}. Only the following actions are supported: ${SUPPORTED_ACTIONS.join(", ")}` });
  }
  return { action, providerId };
};
const getServerOrigin = (event) => {
  const envOrigin = process.env.AUTH_ORIGIN;
  if (envOrigin) {
    return envOrigin;
  }
  const runtimeConfigOrigin = useRuntimeConfig().auth.origin;
  if (runtimeConfigOrigin) {
    return runtimeConfigOrigin;
  }
  if (event && "development" !== "production") {
    return getURL(event.node.req);
  }
  throw new Error(ERROR_MESSAGES.NO_ORIGIN);
};
const detectHost = (event, { trusted, basePath }) => {
  if (trusted) {
    const forwardedValue = getURL(event.node.req);
    if (forwardedValue) {
      return Array.isArray(forwardedValue) ? forwardedValue[0] : forwardedValue;
    }
  }
  let origin;
  try {
    origin = getServerOrigin(event);
  } catch (error) {
    return void 0;
  }
  return joinURL(origin, basePath);
};
const NuxtAuthHandler = (nuxtAuthOptions) => {
  usedSecret = nuxtAuthOptions?.secret;
  if (!usedSecret) {
    {
      console.info(ERROR_MESSAGES.NO_SECRET);
      usedSecret = "secret";
    }
  }
  const options = defu$1(nuxtAuthOptions, {
    secret: usedSecret,
    logger: void 0,
    providers: [],
    trustHost: useRuntimeConfig().auth.trustHost
  });
  const getInternalNextAuthRequestData = async (event) => {
    const nextRequest = {
      host: detectHost(event, { trusted: useRuntimeConfig().auth.trustHost, basePath: useRuntimeConfig().auth.basePath }),
      body: void 0,
      cookies: parseCookies(event),
      query: void 0,
      headers: getHeaders(event),
      method: getMethod(event),
      providerId: void 0,
      error: void 0
    };
    if (event.context.checkSessionOnNonAuthRequest === true) {
      return {
        ...nextRequest,
        method: "GET",
        action: "session"
      };
    }
    const query = getQuery$1(event);
    const { action, providerId } = parseActionAndProvider(event);
    const error = query.error;
    if (Array.isArray(error)) {
      throw createError({ statusCode: 400, statusMessage: "Error query parameter can only appear once" });
    }
    const body = await readBodyForNext(event);
    return {
      ...nextRequest,
      body,
      query,
      action,
      providerId,
      error: error || void 0
    };
  };
  const handler = eventHandler(async (event) => {
    const { res } = event.node;
    const nextRequest = await getInternalNextAuthRequestData(event);
    const nextResult = await AuthHandler({
      req: nextRequest,
      options
    });
    if (nextResult.status) {
      res.statusCode = nextResult.status;
    }
    nextResult.cookies?.forEach((cookie) => setCookie(event, cookie.name, cookie.value, cookie.options));
    nextResult.headers?.forEach((header) => appendHeader(event, header.key, header.value));
    if (!nextResult.redirect) {
      return nextResult.body;
    }
    if (nextRequest.body?.json) {
      return { url: nextResult.redirect };
    }
    return sendRedirect(event, nextResult.redirect);
  });
  if (preparedAuthHandler) {
    console.warn("You setup the auth handler for a second time - this is likely undesired. Make sure that you only call `NuxtAuthHandler( ... )` once");
  }
  preparedAuthHandler = handler;
  return handler;
};
const getServerSession = async (event) => {
  const authBasePath = useRuntimeConfig().public.auth.basePath;
  if (event.path && event.path.startsWith(authBasePath)) {
    return null;
  }
  if (!preparedAuthHandler) {
    const headers = getHeaders(event);
    await $fetch(joinURL(authBasePath, "/session"), {
      headers
    }).catch((error) => error.data);
    if (!preparedAuthHandler) {
      throw createError({ statusCode: 500, statusMessage: "Tried to get server session without setting up an endpoint to handle authentication (see https://github.com/sidebase/nuxt-auth#quick-start)" });
    }
  }
  event.context.checkSessionOnNonAuthRequest = true;
  const session = await preparedAuthHandler(event);
  delete event.context.checkSessionOnNonAuthRequest;
  if (isNonEmptyObject(session)) {
    return session;
  }
  return null;
};

function defineNitroPlugin(def) {
  return def;
}
const _8xyRn68CVS = defineNitroPlugin(() => {
  try {
    getServerOrigin();
  } catch (error) {
    {
      console.info(ERROR_MESSAGES.NO_ORIGIN);
    }
  }
});

const plugins = [
  _idhCTEHVdz,
_8xyRn68CVS
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const isErrorPage = event.path.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await Promise.resolve().then(function () { return errorDev; }) ;
    {
      errorObject.description = errorObject.message;
    }
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const file_path$2 = "server/json/log.json";
function stringifyQueryEvent(e) {
  return `Query: ${e.query}
  Params: ${e.params}
  Duration: ${e.duration}ms
`;
}
function stringifyLogEvent(e) {
  return `Error: ${e.message}
  Target: ${e.target}
`;
}
const prisma$c = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query"
    },
    {
      emit: "event",
      level: "error"
    },
    {
      emit: "event",
      level: "info"
    },
    {
      emit: "event",
      level: "warn"
    }
  ]
});
prisma$c.$on("warn", (e) => {
  let res = ReadJson(file_path$2);
  if (res.status) {
    appendTextInLogFile(stringifyLogEvent(e));
  }
});
prisma$c.$on("info", (e) => {
  let res = ReadJson(file_path$2);
  if (res.status) {
    appendTextInLogFile(stringifyLogEvent(e));
  }
});
prisma$c.$on("error", (e) => {
  let res = ReadJson(file_path$2);
  if (res.status) {
    appendTextInLogFile(stringifyLogEvent(e));
  }
});
prisma$c.$on("query", (e) => {
  let res = ReadJson(file_path$2);
  if (res.status) {
    appendTextInLogFile(stringifyQueryEvent(e));
  }
});
const prisma$d = prisma$c;

const file_path$1 = "server/json/log.json";
async function can_access(can, user) {
  if (!user || !user.username)
    return false;
  const result = await prisma$d.$queryRaw`
    SELECT permissions.name FROM users
        INNER JOIN role_user ON role_user.username = users.username
        INNER JOIN roles ON roles.slug  = role_user.slug
        INNER JOIN permission_role ON permission_role.role_slug = roles.slug
        INNER JOIN permissions ON permissions.slug = permission_role.permission_slug
    WHERE 
        users.username = ${user == null ? void 0 : user.username} AND 
        permissions.name IN (${Prisma.join(can)})`;
  return Boolean(result && Array.isArray(result) && result.length > 0);
}
function definePrivateEventHandler(handler, options) {
  let auth = (options == null ? void 0 : options.auth) == void 0 || (options == null ? void 0 : options.auth) == true;
  return defineEventHandler(async (event) => {
    const session = await getServerSession(event);
    let user = session == null ? void 0 : session.user;
    const url = event.node.req.url;
    const data = `${url}  username = ${user == null ? void 0 : user.username}
`;
    let res = ReadJson(file_path$1);
    if (res.status) {
      appendTextInLogFile(data);
    }
    if (!auth) {
      return await handler(event, user);
    }
    if (auth && !session) {
      throw createError({
        statusCode: 401,
        statusMessage: "Authentification requise !" + event.node.req.url,
        message: "Authentification requise !" + event.node.req.url
      });
    }
    if (!(options == null ? void 0 : options.can) || options.can.length == 0)
      return await handler(event, user);
    if (!await can_access(options.can, user)) {
      throw createError({
        statusCode: 403,
        statusMessage: "Access interdit !",
        message: "Access interdit !"
      });
    }
    return await handler(event, user);
  });
}
function defineLogEventHandler(handler, options) {
  let auth = (options == null ? void 0 : options.auth) == void 0 || (options == null ? void 0 : options.auth) == true;
  return defineEventHandler(async (event) => {
    const session = { user: "z" };
    let user = session == null ? void 0 : session.user;
    if (!auth) {
      await handler(event, user);
    }
  });
}
function appendTextInLogFile(data) {
  const dir = ".log";
  const now = /* @__PURE__ */ new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const seconds = (/* @__PURE__ */ new Date()).getSeconds().toString().padStart(2, "0");
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const dirPath = path.join(".", dir, year.toString(), month, day);
  const filePath = path.join(dirPath, `${hour}h${minute}.log`);
  if (!fs$1.existsSync(dirPath)) {
    fs$1.mkdirSync(dirPath, { recursive: true });
  }
  if (!fs$1.existsSync(filePath)) {
    fs$1.writeFileSync(filePath, "");
  }
  fs$1.appendFileSync(filePath, `${seconds} : ${data}`);
}

const file_path = "server/json/log.json";
const _67sAqC = defineLogEventHandler(async (event, user) => {
  let res = ReadJson(file_path);
  if (!res.status)
    return;
  const url = event.node.req.url;
  const data = `${url}  username = ${user == null ? void 0 : user.username}
`;
  appendTextInLogFile(data);
});

const _lazy_BKdx0x = () => Promise.resolve().then(function () { return _____$1; });
const _lazy_vb3D4C = () => Promise.resolve().then(function () { return _post$h; });
const _lazy_jmNcZi = () => Promise.resolve().then(function () { return uniq_post$1; });
const _lazy_W0H4Uj = () => Promise.resolve().then(function () { return _post$f; });
const _lazy_IYplI1 = () => Promise.resolve().then(function () { return _get$u; });
const _lazy_kdq2U6 = () => Promise.resolve().then(function () { return verify$1; });
const _lazy_vBZjUl = () => Promise.resolve().then(function () { return _get$s; });
const _lazy_d5dBjk = () => Promise.resolve().then(function () { return sub_get$1; });
const _lazy_orbPYW = () => Promise.resolve().then(function () { return _delete$5; });
const _lazy_d5O9e7 = () => Promise.resolve().then(function () { return _get$q; });
const _lazy_nboczW = () => Promise.resolve().then(function () { return _post$d; });
const _lazy_L3DLAb = () => Promise.resolve().then(function () { return min_get$1; });
const _lazy_R5VVgx = () => Promise.resolve().then(function () { return months_get$1; });
const _lazy_L0mQtl = () => Promise.resolve().then(function () { return showphoto_get$1; });
const _lazy_9QeC0X = () => Promise.resolve().then(function () { return _get$o; });
const _lazy_pPqF2u = () => Promise.resolve().then(function () { return _post$b; });
const _lazy_Zwkr2q = () => Promise.resolve().then(function () { return branchs_get$1; });
const _lazy_HlqmUl = () => Promise.resolve().then(function () { return centres_get$1; });
const _lazy_1sI13C = () => Promise.resolve().then(function () { return corps_get$1; });
const _lazy_7RBR62 = () => Promise.resolve().then(function () { return departments_get$1; });
const _lazy_EKPE4u = () => Promise.resolve().then(function () { return _get$m; });
const _lazy_OADa18 = () => Promise.resolve().then(function () { return _get$k; });
const _lazy_xNxRCR = () => Promise.resolve().then(function () { return _post$9; });
const _lazy_Eopa7e = () => Promise.resolve().then(function () { return metiers_get$1; });
const _lazy_GXsBtB = () => Promise.resolve().then(function () { return _get$i; });
const _lazy_UYPn4b = () => Promise.resolve().then(function () { return _delete$3; });
const _lazy_x7DHai = () => Promise.resolve().then(function () { return _get$g; });
const _lazy_WYGwdh = () => Promise.resolve().then(function () { return _post$7; });
const _lazy_vAGOU1 = () => Promise.resolve().then(function () { return _post$5; });
const _lazy_gA8PrF = () => Promise.resolve().then(function () { return _get$e; });
const _lazy_hNbM9L = () => Promise.resolve().then(function () { return _post$3; });
const _lazy_agpKiq = () => Promise.resolve().then(function () { return _get$c; });
const _lazy_3fYS3C = () => Promise.resolve().then(function () { return _delete$1; });
const _lazy_TLoA9A = () => Promise.resolve().then(function () { return _get$a; });
const _lazy_hfs3c6 = () => Promise.resolve().then(function () { return _post$1; });
const _lazy_4TViMq = () => Promise.resolve().then(function () { return _id_$5; });
const _lazy_VGeddA = () => Promise.resolve().then(function () { return sheetContentWithChoixColumn_post$1; });
const _lazy_rNfJnM = () => Promise.resolve().then(function () { return sheetContent_post$1; });
const _lazy_LEmaPF = () => Promise.resolve().then(function () { return sheetNames_post$1; });
const _lazy_iC2WvE = () => Promise.resolve().then(function () { return _get$8; });
const _lazy_Vcfna1 = () => Promise.resolve().then(function () { return _get$6; });
const _lazy_hTcuK7 = () => Promise.resolve().then(function () { return _id__get$3; });
const _lazy_7M8BKf = () => Promise.resolve().then(function () { return _id__get$1; });
const _lazy_Itib68 = () => Promise.resolve().then(function () { return _get$4; });
const _lazy_Mi5JW1 = () => Promise.resolve().then(function () { return _id_$3; });
const _lazy_lQ4FZR = () => Promise.resolve().then(function () { return _get$2; });
const _lazy_Hgo9Ir = () => Promise.resolve().then(function () { return _id_$1; });
const _lazy_DVOO0b = () => Promise.resolve().then(function () { return _get; });
const _lazy_7uZCS7 = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '', handler: _67sAqC, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/**', handler: _lazy_BKdx0x, lazy: true, middleware: false, method: undefined },
  { route: '/api/can/', handler: _lazy_vb3D4C, lazy: true, middleware: false, method: "post" },
  { route: '/api/can/uniq', handler: _lazy_jmNcZi, lazy: true, middleware: false, method: "post" },
  { route: '/api/candidats/', handler: _lazy_W0H4Uj, lazy: true, middleware: false, method: "post" },
  { route: '/api/candidats/diplome/', handler: _lazy_IYplI1, lazy: true, middleware: false, method: "get" },
  { route: '/api/candidats/diplome/verify', handler: _lazy_kdq2U6, lazy: true, middleware: false, method: undefined },
  { route: '/api/my-menu/', handler: _lazy_vBZjUl, lazy: true, middleware: false, method: "get" },
  { route: '/api/my-menu/sub', handler: _lazy_d5dBjk, lazy: true, middleware: false, method: "get" },
  { route: '/api/sessions/', handler: _lazy_orbPYW, lazy: true, middleware: false, method: "delete" },
  { route: '/api/sessions/', handler: _lazy_d5O9e7, lazy: true, middleware: false, method: "get" },
  { route: '/api/sessions/', handler: _lazy_nboczW, lazy: true, middleware: false, method: "post" },
  { route: '/api/sessions/min', handler: _lazy_L3DLAb, lazy: true, middleware: false, method: "get" },
  { route: '/api/sessions/months', handler: _lazy_R5VVgx, lazy: true, middleware: false, method: "get" },
  { route: '/api/showphoto', handler: _lazy_L0mQtl, lazy: true, middleware: false, method: "get" },
  { route: '/api/signataire/', handler: _lazy_9QeC0X, lazy: true, middleware: false, method: "get" },
  { route: '/api/signataire/', handler: _lazy_pPqF2u, lazy: true, middleware: false, method: "post" },
  { route: '/api/systeme/branchs', handler: _lazy_Zwkr2q, lazy: true, middleware: false, method: "get" },
  { route: '/api/systeme/centres', handler: _lazy_HlqmUl, lazy: true, middleware: false, method: "get" },
  { route: '/api/systeme/corps', handler: _lazy_1sI13C, lazy: true, middleware: false, method: "get" },
  { route: '/api/systeme/departments', handler: _lazy_7RBR62, lazy: true, middleware: false, method: "get" },
  { route: '/api/systeme/log/', handler: _lazy_EKPE4u, lazy: true, middleware: false, method: "get" },
  { route: '/api/systeme/maintenance/', handler: _lazy_OADa18, lazy: true, middleware: false, method: "get" },
  { route: '/api/systeme/maintenance/', handler: _lazy_xNxRCR, lazy: true, middleware: false, method: "post" },
  { route: '/api/systeme/metiers', handler: _lazy_Eopa7e, lazy: true, middleware: false, method: "get" },
  { route: '/api/users-pagination/', handler: _lazy_GXsBtB, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/', handler: _lazy_UYPn4b, lazy: true, middleware: false, method: "delete" },
  { route: '/api/users/', handler: _lazy_x7DHai, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/', handler: _lazy_WYGwdh, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/changePassword/', handler: _lazy_vAGOU1, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/my-account/', handler: _lazy_gA8PrF, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/my-account/', handler: _lazy_hNbM9L, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/permissions/', handler: _lazy_agpKiq, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/profils/', handler: _lazy_3fYS3C, lazy: true, middleware: false, method: "delete" },
  { route: '/api/users/profils/', handler: _lazy_TLoA9A, lazy: true, middleware: false, method: "get" },
  { route: '/api/users/profils/', handler: _lazy_hfs3c6, lazy: true, middleware: false, method: "post" },
  { route: '/api/users/profils/:id', handler: _lazy_4TViMq, lazy: true, middleware: false, method: undefined },
  { route: '/api/utils/excel/sheet-content-with-choix-column', handler: _lazy_VGeddA, lazy: true, middleware: false, method: "post" },
  { route: '/api/utils/excel/sheet-content', handler: _lazy_rNfJnM, lazy: true, middleware: false, method: "post" },
  { route: '/api/utils/excel/sheet-names', handler: _lazy_LEmaPF, lazy: true, middleware: false, method: "post" },
  { route: '/api/zone/countries/', handler: _lazy_iC2WvE, lazy: true, middleware: false, method: "get" },
  { route: '/api/zone/departments/', handler: _lazy_Vcfna1, lazy: true, middleware: false, method: "get" },
  { route: '/api/zone/departments/:id', handler: _lazy_hTcuK7, lazy: true, middleware: false, method: "get" },
  { route: '/api/zone/departments/schools_with_3rd/:id', handler: _lazy_7M8BKf, lazy: true, middleware: false, method: "get" },
  { route: '/api/zone/districts/', handler: _lazy_Itib68, lazy: true, middleware: false, method: "get" },
  { route: '/api/zone/districts/:id', handler: _lazy_Mi5JW1, lazy: true, middleware: false, method: undefined },
  { route: '/api/zone/municipalities/', handler: _lazy_lQ4FZR, lazy: true, middleware: false, method: "get" },
  { route: '/api/zone/municipalities/:id', handler: _lazy_Hgo9Ir, lazy: true, middleware: false, method: undefined },
  { route: '/api/zone/villages/', handler: _lazy_DVOO0b, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_7uZCS7, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_7uZCS7, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(true),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (d === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET || process.versions.bun) {
    return 0;
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (C) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
trapUnhandledNodeErrors();
async function onShutdown(signal) {
  await nitroApp.hooks.callHook("close");
}
parentPort.on("message", async (msg) => {
  if (msg && msg.event === "shutdown") {
    await onShutdown();
    parentPort.postMessage({ event: "exit" });
  }
});

const _messages = {"appName":"Nuxt","version":"","statusCode":500,"statusMessage":"Server error","description":"An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details.","stack":""};
const _render = function({ messages }) {
var __t, __p = '';
__p += '<!DOCTYPE html><html><head><title>' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
' - ' +
((__t = ( messages.statusMessage )) == null ? '' : __t) +
' | ' +
((__t = ( messages.appName )) == null ? '' : __t) +
'</title><meta charset="utf-8"><meta content="width=device-width,initial-scale=1,minimum-scale=1" name="viewport"><style>.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.flex-col{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column}.flex-1{-webkit-box-flex:1;-ms-flex:1 1 0%;-webkit-flex:1 1 0%;flex:1 1 0%}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.h-auto{height:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-6xl{font-size:3.75rem;line-height:1}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-6{margin-bottom:1.5rem}.min-h-screen{min-height:100vh}.overflow-y-auto{overflow-y:auto}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.pt-14{padding-top:3.5rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10{z-index:10}@media (min-width: 640px){.sm\\:text-8xl{font-size:6rem;line-height:1}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}</style><script>(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll(\'link[rel="modulepreload"]\'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();</script></head><body class="font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col"><div class="fixed left-0 right-0 spotlight"></div><h1 class="text-6xl sm:text-8xl font-medium mb-6">' +
((__t = ( messages.statusCode )) == null ? '' : __t) +
'</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight">' +
((__t = ( messages.description )) == null ? '' : __t) +
'</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto"><pre class="text-xl font-light leading-tight z-10 p-8">' +
((__t = ( messages.stack )) == null ? '' : __t) +
'</pre></div></body></html>';
return __p
};
const _template = (messages) => _render({ messages: { ..._messages, ...messages } });
const template$1 = _template;

const errorDev = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template$1
});

const prisma$b = new PrismaClient({
  // log: ['query']
});
const _____ = NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  // secret: process.env.AUTH_SECRET,
  secret: "tb9cGAReAAC6H9WXSJ5UKdCDNmjxZV9q6sJry76omhFdJ3S4muICbxsynXZ9lhFy7frDyEmwLrLJNyJcflyD8rxhDyLrGRjtrzDpOh4ynWaYNLURZ4Y4JAFIGi4K54WH",
  session: {
    maxAge: 2 * 60 * 60,
    //2 hours
    updateAge: 15 * 60
    // 15 minutes
  },
  providers: [
    // @ts-expect-error You need to use .default here for it t²o work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      async authorize(credentials) {
        try {
          const users = await prisma$b.$queryRaw`SELECT email, username, users.password, can_auth FROM users 
        where username=${credentials == null ? void 0 : credentials.username} OR email=${credentials == null ? void 0 : credentials.username}
        `;
          console.log("Recherche par username");
          if (!users || users.length === 0)
            throw new Error("Compte inexistant");
          if (users[0].can_auth == false)
            throw new Error(
              "Votre compte est actuellement d\xE9sactiv\xE9, veuillez vous rapprocher de l'administrateur pour d\xE9bloquer votre compte."
            );
          if (await bcrypt.compare(credentials == null ? void 0 : credentials.password, users[0].password)) {
            await prisma$b.$executeRaw`UPDATE users SET login_at=now() WHERE username=${users[0].username}`;
            return {
              name: users[0].username ? users[0].username : "",
              email: users[0].email ? users[0].email : ""
            };
          } else {
            console.log("Echec !");
            return null;
          }
        } catch (error) {
          console.log(error);
        }
      }
    })
  ],
  pages: {
    signIn: "/"
  },
  callbacks: {
    async session({ session, token }) {
      if (token == null ? void 0 : token.name) {
        session.user = (await prisma$b.$queryRaw`SELECT 
            users.id, 
            users.username, 
            email, 
            is_change_password, 
            GROUP_CONCAT(roles.name SEPARATOR '#')  AS roles 
          FROM users 
            INNER JOIN role_user ON role_user.username = users.username
            INNER JOIN roles ON roles.slug = role_user.slug
          WHERE 
          users.username=${token.name}
          GROUP BY roles.id
          `)[0];
      }
      return session;
    }
  }
});

const _____$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _____
});

const _post$g = definePrivateEventHandler(async (event, user) => {
  const body = await readBody(event);
  let user_permissions = await prisma$d.$queryRaw`
    SELECT permissions.name 
    FROM users
        INNER JOIN role_user ON role_user.username = users.username
        INNER JOIN roles ON roles.slug = role_user.slug
        INNER JOIN permission_role ON permission_role.role_slug  = role_user.slug
        INNER JOIN permissions ON permissions.slug = permission_role.permission_slug
    WHERE 
        users.username = ${user.username} AND 
        permissions.name IN (${Prisma.join(body)})`;
  if (!Array.isArray(user_permissions))
    return [];
  let user_permission_name = new Array(user_permissions.length);
  let response = new Array(body);
  for (let index = 0; index < user_permissions.length; index++) {
    user_permission_name[index] = user_permissions[index].name;
  }
  for (let index = 0; index < body.length; index++) {
    response[index] = user_permission_name.includes(body[index]);
  }
  return response;
});

const _post$h = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _post$g
});

const uniq_post = definePrivateEventHandler(async (event, user) => {
  const body = await readBody(event);
  let user_permissions = await prisma$d.$queryRaw`
    SELECT permissions.name 
    FROM users
        INNER JOIN role_user ON role_user.username = users.username
        INNER JOIN roles ON roles.slug = role_user.slug
        INNER JOIN permission_role ON permission_role.role_slug  = role_user.slug
        INNER JOIN permissions ON permissions.slug = permission_role.permission_slug
    WHERE 
        users.username = ${user.username} AND 
        permissions.name IN (${Prisma.join(body)})`;
  return {
    can: Array.isArray(user_permissions) && Boolean(user_permissions.length)
  };
});

const uniq_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: uniq_post
});

const _post$e = definePrivateEventHandler(
  async (event, user) => {
    let body = await readBody(event);
    let where = {};
    if (body.branch) {
      where.branch = body.branch;
    }
    if (body.centre) {
      where.centre = body.centre;
    }
    if (body.corps) {
      where.corps = body.corps;
    }
    if (body.metier) {
      where.metier = body.metier;
    }
    if (body.department) {
      where.department = body.department;
    }
    if (body.municipality) {
      where.municipality = body.municipality;
    }
    try {
      return await prisma$d.candidat.findMany({
        where: {
          session_id: Number(body.session_id),
          ...where
        }
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

const _post$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _post$e
});

const _get$t = definePrivateEventHandler(
  async (event, user) => {
    let query = getQuery$1(event);
    if (!Array.isArray(query.ids))
      return { error: "Veuillez selectionner d'abord les candidats." };
    try {
      let candidats = await prisma$d.candidat.findMany({
        where: {
          id: {
            in: query.ids.map((v) => Number(v))
          },
          session_id: Number(query.session_id)
        }
      });
      let session = await prisma$d.session.findUnique({
        where: {
          id: Number(query.session_id)
        },
        include: {
          Month: true
        }
      });
      if (!process.env.DIPLOME_KEY) {
        return { error: "KEY_NOT_FOUND" };
      }
      if (!session) {
        return { error: "Aucune session" };
      }
      let candidats_with_qr = [];
      let token;
      for (const candidat of candidats) {
        token = jwt.sign(
          { id: candidat.id, month: session == null ? void 0 : session.month, year: session == null ? void 0 : session.year },
          process.env.DIPLOME_KEY
        );
        candidats_with_qr.push({
          ...candidat,
          qrcode: await QRCode.toDataURL(
            `${process.env.AUTH_HOSTNAME}/diplomes?ref=${token}`
          )
        });
      }
      let signatures = ReadJson("server/json/signataire.json");
      let signatureHTML = signatures.map((signature, index) => {
        let filename2 = `server/public/images/signataire/signataire_${index}.${signature.exe}`;
        let imgTag;
        if (existsSync$1(filename2)) {
          const imageData = readFileSync(filename2);
          const base64Image = Buffer.from(imageData).toString("base64");
          imgTag = `<img src="data:image/png;base64,${base64Image}" alt="signature_${index}" />`;
        } else {
          imgTag = `<img src="" alt="signature_${index}" />`;
        }
        return signature.showed == "true" ? ` <div class="footer-item">
                  <div class="text-center text-bold">
                    ${signature.title_of_sign}
                  </div>
                  <div style="display : flex; justify-content: center">
                    ${imgTag}
                    <!-- <img src="${process.env.AUTH_HOSTNAME}/api/showphoto?t=signataire_${index}.${signature.exe}" alt="signature" /> -->
                  </div>
                </div>
                
       ` : "";
      }).join("");
      let signatureFullname = signatures.map((signature, index) => {
        let imgTag;
        return signature.showed == "true" ? ` <div class="footer-item">
                  <div class="text-center text-bold">
                    ${signature.full_name}
                  </div>
                </div>
       ` : "";
      }).join("");
      let filename = "filename";
      event.node.res.setHeader("Content-Type", "application/octet-stream");
      event.node.res.setHeader(
        "Content-Disposition",
        "attachment"
      );
      event.node.res.setHeader(
        "filename",
        "diplome.pdf"
      );
      let doc = await generatePDF(
        `
<html>
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .text-bold {
        font-weight: bold;
    }
    .text-center {
        text-align: center;
    }
    .body {
        background: url("${process.env.AUTH_HOSTNAME}/PDF/Images/diplomes/20240223_bg_diplome_cqm.png") no-repeat center center;
        height: 95vh;
        break-after: page;
        font-family:  sans-serif;
        position : relative;
    }
    h1{
      font-size : 45px
    } 
    h2{
      font-size : 20px
    } 
    .content {
        width: 75%;
        margin: auto;
        padding-top: 30px;
    }
    .header {
        display: flex;
        text-transform: uppercase;
    }
    .header-item-1{
      flex : 1
    } 
    .header-item-2{
      flex : 3
    } 
    .header-item-3{
      flex : 1;
      display: flex;
      justify-content: end;
    } 
    .title {
      text-transform: uppercase;
  }
    .photo {
        width: 3cm;
        height: 3.5cm;
        border: solid black 1px;
        display: flex;
        justify-content: center;
        margin-left : 0.5cm;
        align-items: center;
    }
    .header-first-iem-1 {
        display: flex;
    }
    .drapeau {
        width: 70px;
        height : 50px
    }
    .trait  {
      width: 150px;
    }
    .benin {
        text-align: center;
    }
    .benin * {
          margin : 10px auto;
          padding : 10px auto;
      }

    .benin hr {
        width: 150px;
        border: none;
        border-top: 3px solid black;
        height: 5px;
    }

    .header-first-iem-2 {
        text-align: center;
    }
    .header-first-iem-2 * {
      margin : 3px auto
    } 
    .photo {
      width: 2.5cm;
      height: 2.7cm;
      border: solid black 1px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      position : absolute;
      right : 130px;
      top : 120px;
      text-transform : uppercase;
  }
  .photo-qrcode{
    width: 2.5cm;
      height: 2.7cm;
      display: flex;
      justify-content: center;
      align-items: center;
      position : absolute;
      left : 130px;
      top : 110px;
      text-transform : uppercase;
      
  } 
  .img-qrcode {
     width: 2.5cm;
  } 
  /*  margin-left : 0.5cm; */
    .main{
      font-size : 18px;
      line-height: 30px;
    } 
    .footer {
        display: flex;
        align-content: space-between;
        margin: 10px 0px 0px 0px;
    }
    .footer-item {
        flex: 1;
        margin: 0px 10px;
        height : 100%;
    }
    .footer-item img {
        height: 70px;
        margin : auto;
    }
  </style>
</head>

<body>
  ${candidats_with_qr.map(
          (candidat, index) => `
  <div class="body">
  <div class="photo" >
  <div>Photo</div>
</div>
<div class="photo-qrcode" >
<img src="${candidat.qrcode}" alt="qr_code"  class="img-qrcode"/>
    
</div>
  <div class="content">

    <div class="header">
      <div class="header-item-1">
        <img src="${process.env.AUTH_HOSTNAME}/PDF/Images/diplomes/drapeaux-benin.png" alt="Drapeau benin" class="drapeau" />
      </div>
      <div class="header-item-2 ">
        <div class="benin">
          <p class="text-bold" style="color : #ef412a;" >R\xE9publique du B\xE9nin</p>
          <p>
            Minist\xE8re des enseignements secondaire, <br />
            technique et de la formation professionnelle
          </p>
          <img src="${process.env.AUTH_HOSTNAME}/PDF/Images/diplomes/trait.png" alt="amoirie" class="trait" />
        </div>
      </div>
      <div class="header-item-3">
      
      <img src="${process.env.AUTH_HOSTNAME}/PDF/Images/diplomes/armoiries.png" alt="Drapeau benin" class="drapeau" /> 
      </div>
    </div>
    <div class="title">
    <div class="header-first-iem-2">
      <h1 style="color : #15548d; margin-top : 8px" class="text-bold">Attestation de dipl\xF4me</h1>
      <!--#EXAM  -->
      <h2 style="color : #ee3219;">Du certificat de qualification aux m\xE9tiers (CQM)</h2>
  </div>
    </div>
    <div class="main">
      Le Ministre des enseignements secondaire, technique et de la formation
      professionnelle, <br />
      Vu le proc\xE8s-verbal de la d\xE9lib\xE9ration de l'examen du CQM en date du
      <span class="text-bold">${dateformatFr_long(session == null ? void 0 : session.date_of_pv)}</span>, <br />
      Certifie que ${candidat.sex == "M" ? "Monsieur" : "Madame"}<span class="text-bold">
      <span style="text-transform: capitalize">${candidat.firstname}</span>
      <span style="text-transform: uppercase">${candidat.lastname}</span>
      </span>
      <br />
      ${candidat.sex == "M" ? "N\xE9" : "N\xE9e"} le <span class="text-bold">${dateformatFr_long(
            candidat.date_of_birth
          )}</span> \xE0
      <span class="text-bold">${candidat.place_of_birth}</span> <br />
      A suivi avec succ\xE8s l'examen du certificat de qualification aux
      m\xE9tiers (CQM) <br />
      M\xE9tier : <span class="text-bold">${candidat.metier}</span> <br />
      Session de <span class="text-bold " style="text-transform: lowercase;">  ${session == null ? void 0 : session.Month.name} ${session == null ? void 0 : session.year}</span> <br />
      Conform\xE9ment \xE0 la d\xE9cision : 
      <span class="text-bold">
        ${session == null ? void 0 : session.reference} du ${dateformatFr_(session == null ? void 0 : session.date_of_pv)}
      </span>
      <br />
      En foi de quoi, la pr\xE9sente attestation de dipl\xF4me lui est d\xE9livr\xE9e
      pour servir et valoir ce que de droit.
    </div>
    <div>
      <div class="footer">
        ${signatureHTML}
      </div>
      <div class="footer">
        ${signatureFullname}
      </div>
    
    </div>
  </div>
</div>
  `
        )}
</body>
</html>
`,
        {
          landscap: true,
          margin: {
            top: "0px",
            bottom: "0px",
            right: "0px",
            left: "0px"
          },
          displayHeaderFooter: false
        }
      );
      event.node.res.write(doc);
      return event.node.res.end();
    } catch (error) {
      console.error(error);
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

const _get$u = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$t
});

const verify = definePrivateEventHandler(
  async (event, user) => {
    let query = getQuery$1(event);
    if (!query.ref)
      return { error: "Donn\xE9es manqauntes", message: `${query.ref} value` };
    if (!process.env.DIPLOME_KEY) {
      return { error: "KEY_NOT_FOUND" };
    }
    let query_encode;
    try {
      query_encode = jwt.verify(String(query.ref), process.env.DIPLOME_KEY);
      if (!query_encode)
        return { error: "Reference non valide" };
    } catch (error) {
      console.log(error);
      return { error: "Reference non valide" };
    }
    try {
      let filePath = `server/json/diplomes/${query_encode.year}/${query_encode.month}/index.json`;
      if (!fs__default.existsSync(filePath)) {
        return { error: "Donn\xE9es non disponible", message: "inexistant" };
      }
      let diplomes = ReadJson(filePath);
      let data = diplomes.candidats.find(
        // @ts-ignore
        (diplome) => diplome.id == query_encode.id
      );
      return {
        id: data.id,
        lastname: data.l,
        firstname: data.f,
        sex: data.s,
        date_of_birth: data.d,
        place_of_birth: data.p,
        branch: data.bran,
        cen: data.cen,
        corps: data.corps,
        metier: data.met,
        Session: diplomes.session
      };
    } catch (error) {
      console.log(error);
      return { error: "Une erreur s'est produite" };
    }
  },
  { auth: false }
);

const verify$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: verify
});

const prisma$a = new PrismaClient();
const _get$r = definePrivateEventHandler(async (event, user) => {
  try {
    const items = my_menu;
    let user_username = user == null ? void 0 : user.username;
    const permissions_of_user = await prisma$a.$queryRaw`SELECT permissions.name FROM permissions INNER JOIN permission_role on
            permission_role.permission_slug=permissions.slug INNER JOIN roles on roles.slug=permission_role.role_slug
            INNER JOIN role_user on role_user.slug=roles.slug WHERE role_user.username=${user == null ? void 0 : user.username}`;
    let items_of_user = [];
    for (const key in items) {
      if (items[key].can.some(
        (v) => !!permissions_of_user.find((element) => element.name === v)
      )) {
        items_of_user.push({
          icon: items[key].icon,
          title: items[key].title,
          to: items[key].to
        });
      }
    }
    await prisma$a.$disconnect();
    return items_of_user;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 403,
      statusMessage: "Un probl\xE8me est survenue."
    });
  }
});

const _get$s = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$r
});

const prisma$9 = new PrismaClient();
const sub_get = definePrivateEventHandler(async (event, user) => {
  try {
    let items = [];
    const { name } = getQuery$1(event);
    switch (name) {
      case "utilisateur_profil":
        items = my_sub_menu.utilisateur_profil;
        break;
      case "configuration":
        items = my_sub_menu.configuration;
        break;
      default:
        break;
    }
    const permissions_of_user = await prisma$9.$queryRaw`SELECT permissions.name FROM permissions INNER JOIN permission_role on
            permission_role.permission_slug=permissions.slug INNER JOIN roles on roles.slug=permission_role.role_slug
            INNER JOIN role_user on role_user.slug=roles.slug WHERE role_user.username=${user == null ? void 0 : user.username}`;
    let items_of_user = [];
    for (const key in items) {
      if (items[key].can.some(
        (v) => !!permissions_of_user.find((element) => element.name === v)
      )) {
        items_of_user.push({
          icon: items[key].icon,
          title: items[key].title,
          to: items[key].to
        });
      }
    }
    await prisma$9.$disconnect();
    return items_of_user;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 403,
      statusMessage: "Un probl\xE8me est survenue."
    });
  }
});

const sub_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sub_get
});

const _delete$4 = definePrivateEventHandler(
  async (event, user) => {
    const body = await readBody(event);
    try {
      await prisma$d.session.deleteMany({
        where: {
          id: {
            in: body.ids
          }
        }
      });
    } catch (error) {
      console.error(error);
      return { error: "Une erreur s'est produite." };
    }
    return { status: "ok" };
  },
  {
    can: [
      "Voir la liste des sessions",
      "Enregistrer une session",
      "Supprimer des sessions"
    ]
  }
);

const _delete$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _delete$4
});

const _get$p = definePrivateEventHandler(
  async (event, user) => {
    try {
      return await prisma$d.session.findMany({
        select: {
          id: true,
          month: true,
          year: true,
          reference: true,
          description: true,
          date_of_pv: true,
          Month: {
            select: {
              name: true
            }
          }
        },
        orderBy: [
          {
            year: "desc"
          },
          {
            Month: {
              order: "desc"
            }
          }
        ]
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: [
      "Voir la liste des sessions",
      "Enregistrer une session",
      "Supprimer des sessions"
    ]
  }
);

const _get$q = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$p
});

const _post$c = definePrivateEventHandler(
  async (event, user) => {
    const body = await readBody(event);
    console.log("body");
    console.log(body);
    let data = {};
    try {
      if (body.id) {
        data = await prisma$d.session.update({
          where: {
            id: Number(body.id)
          },
          data: {
            month: body.month,
            year: body.year,
            reference: body.reference,
            description: body.description,
            date_of_pv: new Date(body.date_of_pv),
            user_id: user.id
          }
        });
      } else {
        data = await prisma$d.session.create({
          data: {
            month: body.month,
            year: parseInt(body.year),
            reference: body.reference,
            description: body.description,
            date_of_pv: new Date(body.date_of_pv),
            user_id: user.id
          }
        });
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          return { error: "Cette session existe d\xE9j\xE0." };
        }
      }
      return { error: "Une erreur s'est produite" };
    }
    return data;
  },
  {
    can: ["Enregistrer une session"]
  }
);

const _post$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _post$c
});

const min_get = definePrivateEventHandler(
  async (event, user) => {
    try {
      return (await prisma$d.session.findMany({
        select: {
          id: true,
          month: true,
          year: true,
          Month: {
            select: {
              name: true
            }
          }
        },
        orderBy: [
          {
            year: "desc"
          },
          {
            Month: {
              order: "desc"
            }
          }
        ]
      })).map((v) => {
        return {
          id: v.id,
          name_: v.Month.name + " " + v.year
        };
      });
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats"]
  }
);

const min_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: min_get
});

const months_get = definePrivateEventHandler(
  async (event, user) => {
    try {
      return await prisma$d.month.findMany();
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: [
      "Voir la liste des sessions",
      "Enregistrer une session",
      "Supprimer des sessions"
    ]
  }
);

const months_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: months_get
});

const showphoto_get = definePrivateEventHandler(
  (event) => {
    let query = getQuery$1(event);
    let name = query.t && typeof query.t == "string" ? query.t : "default.jpeg";
    return sendStream(
      event,
      readFromFilesDirectory(
        "server/public/images/signataire/",
        name,
        "default.jpeg"
      )
    );
  }
  // { auth: true, can :["Voir la liste des élèves",]  }
);

const showphoto_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: showphoto_get
});

new PrismaClient();
const _get$n = definePrivateEventHandler(
  async (event) => {
    let jsonData = "";
    jsonData = fs__default.readFileSync("server/json/signataire.json", "utf8");
    const data = JSON.parse(jsonData);
    return data;
  },
  {
    auth: false
  }
);

const _get$o = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$n
});

new PrismaClient();
const can = ["Enregistrer des signataires"];
function removeDuplicatesByProperty(arr, prop) {
  const uniqueArr = [];
  const seen = /* @__PURE__ */ new Set();
  for (const item of arr) {
    const key = item[prop];
    if (!seen.has(key)) {
      seen.add(key);
      uniqueArr.push(item);
    }
  }
  return uniqueArr;
}
const _post$a = definePrivateEventHandler(
  async (event) => {
    const a = await useFile(event);
    let file = a.files;
    let fieldsi = a.fields;
    let data = [];
    let count = 0;
    let tmp = {};
    if (parseInt(fieldsi.nbr) > 0) {
      count = fieldsi.nbr;
    } else {
      count = file.length;
    }
    console.log(fieldsi);
    for (let index = 0; index < count; index++) {
      if (`title_of_sign_signataire_${index}`.includes(`signataire_${index}`)) {
        if (file.length == fieldsi.nbr) {
          let png = file[index].mimetype.split("/")[1];
          tmp = {
            "signataire": index + 1,
            // "full_name": fieldsi[`first_namesignataire_${index}`]+'_'+fieldsi[`last_namesignataire_${index}`],
            "full_name": fieldsi[`first_namesignataire_${index}`],
            "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
            "showed": fieldsi[`showed_signataire_${index}`],
            "signature_url": `./server/public/images/signataire/signataire_${index}.${png}`,
            "exe": png
          };
          data.push(tmp);
          await saveFile(file[index], "./server/public/images/signataire/", `signataire_${index}`, `.${png}`);
          tmp = {};
        } else {
          if (file.length != 0) {
            file.forEach(async (e) => {
              if (e.fieldname && e.fieldname.includes(`signataire_${index}`)) {
                let png = e.mimetype.split("/")[1];
                tmp = {
                  "signataire": index + 1,
                  // "full_name": fieldsi[`first_namesignataire_${index}`]+'_'+fieldsi[`last_namesignataire_${index}`],
                  "full_name": fieldsi[`first_namesignataire_${index}`],
                  "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
                  "showed": fieldsi[`showed_signataire_${index}`],
                  "signature_url": `./server/public/images/signataire/signataire_${index}.${png}`,
                  "exe": png
                };
                data.push(tmp);
                await saveFile(e, "./server/public/images/signataire/", `signataire_${index}`, `.${png}`);
                tmp = {};
              } else {
                try {
                  let tabExe = fieldsi[`signature_url_${index}`].split(".");
                  let png = fieldsi[`signature_url_${index}`].split(".")[tabExe.length - 1];
                  tmp = {
                    "signataire": index + 1,
                    "full_name": fieldsi[`first_namesignataire_${index}`],
                    "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
                    "showed": fieldsi[`showed_signataire_${index}`],
                    "signature_url": fieldsi[`signature_url_${index}`],
                    "exe": png
                  };
                  data.push(tmp);
                  tmp = {};
                } catch (error) {
                  console.error("error");
                }
              }
            });
          } else {
            try {
              let tabExe = fieldsi[`signature_url_${index}`].split(".");
              let png = fieldsi[`signature_url_${index}`].split(".")[tabExe.length - 1];
              tmp = {
                "signataire": index + 1,
                "full_name": fieldsi[`first_namesignataire_${index}`],
                "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
                "showed": fieldsi[`showed_signataire_${index}`],
                "signature_url": fieldsi[`signature_url_${index}`],
                "exe": png
              };
              data.push(tmp);
              tmp = {};
            } catch (error) {
              console.error("error");
            }
          }
        }
      }
    }
    data = removeDuplicatesByProperty(data, "signataire");
    console.log(data);
    let data_ = null;
    try {
      data_ = fs__default.writeFileSync("server/json/signataire.json", JSON.stringify(data));
      data = [];
    } catch (error) {
    }
    return data_;
  },
  { auth: false, can }
);

const _post$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _post$a
});

const branchs_get = definePrivateEventHandler(
  async (event, user) => {
    getQuery$1(event);
    try {
      return await prisma$d.$queryRaw`SELECT branch AS name FROM candidats GROUP BY branch;`;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

const branchs_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: branchs_get
});

const centres_get = definePrivateEventHandler(
  async (event, user) => {
    getQuery$1(event);
    try {
      return await prisma$d.$queryRaw`SELECT centre AS name FROM candidats GROUP BY centre;`;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

const centres_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: centres_get
});

const corps_get = definePrivateEventHandler(
  async (event, user) => {
    getQuery$1(event);
    try {
      return await prisma$d.$queryRaw`SELECT corps AS name FROM candidats GROUP BY corps;`;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

const corps_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: corps_get
});

const departments_get = definePrivateEventHandler(
  async (event, user) => {
    getQuery$1(event);
    try {
      return await prisma$d.$queryRaw`SELECT department AS name FROM candidats GROUP BY department;`;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

const departments_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: departments_get
});

const _get$l = definePrivateEventHandler(
  async (event, user) => {
    return { name: "hello" };
  },
  { auth: false }
);

const _get$m = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$l
});

new PrismaClient();
const _get$j = definePrivateEventHandler(
  async (event) => {
    let jsonData = "";
    jsonData = fs__default.readFileSync("server/json/maintenance.json", "utf8");
    const data = JSON.parse(jsonData);
    return data;
  },
  {
    auth: false
  }
);

const _get$k = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$j
});

const _post$8 = definePrivateEventHandler(async (event) => {
  const body = await readBody(event);
  let data = null;
  try {
    fs__default.writeFileSync("server/json/maintenance.json", JSON.stringify(body));
    data = JSON.stringify(body);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const _post$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _post$8
});

const metiers_get = definePrivateEventHandler(
  async (event, user) => {
    getQuery$1(event);
    try {
      return await prisma$d.$queryRaw`SELECT metier AS name FROM candidats GROUP BY metier;`;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  {
    can: ["Voir la liste des candidats", "Imprimer les dipl\xF4mes des candidats"]
  }
);

const metiers_get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: metiers_get
});

const prisma$8 = new PrismaClient({
  log: ["query"]
});
const _get$h = definePrivateEventHandler(
  async (event, token) => {
    let data;
    const query = getQuery$1(event);
    console.log(query);
    let page = query == null ? void 0 : query.page;
    const search_text = query == null ? void 0 : query.search_text;
    if (!(page && typeof page == "string")) {
      throw createError({
        statusCode: 403,
        statusMessage: "Le num\xE9ro de page est requise !"
      });
    } else {
      console.log("parseInt");
      page = parseInt(page);
      console.log("a1");
      if (isNaN(page)) {
        throw createError({
          statusCode: 403,
          statusMessage: "Le num\xE9ro de page doit \xEAtre un nombre !"
        });
      }
      console.log("a2");
    }
    console.log("a3");
    let tab_obj_child = await prisma$8.$queryRaw`select roles.id, child_role.id child_role_id from roles 
      inner join role_user on roles.slug = role_user.slug 
      inner join users on users.username = role_user.username 
      inner join role_role on role_role.parent_role_id = roles.id 
      inner join roles as child_role on role_role.role_id = child_role.id
      where users.id= ${token.id}`;
    let tab_child = new Array(tab_obj_child.length);
    for (let i = 0, l = tab_obj_child.length; i < l; i++) {
      tab_child[i] = tab_obj_child[i].child_role_id;
    }
    console.log("tab_child");
    console.log(tab_child);
    if (search_text) {
      if (page > 0) {
        let length;
        let count = (await prisma$8.$queryRaw`SELECT COUNT( distinct users.id) length FROM users
              LEFT JOIN peoples ON peoples.id=users.people_id 
              INNER JOIN role_user ON role_user.username=users.username
              INNER JOIN roles ON roles.slug=role_user.slug
              WHERE (peoples.lastname LIKE ${"%" + search_text + "%"} 
              OR peoples.firstname LIKE ${"%" + search_text + "%"}
              OR users.email LIKE ${"%" + search_text + "%"}
              OR roles.name LIKE ${"%" + search_text + "%"}
              OR (("actif" like ${"%" + search_text + "%"}) AND users.can_auth=1)
              OR (("bloque" like ${"%" + search_text + "%"}) AND users.can_auth=0)) 
              AND  roles.id in (${Prisma.join(tab_child)})`)[0];
        console.log("parseIdfnt");
        const count_length_number = Number(count.length);
        console.log(count_length_number);
        let tab_obj_id = await prisma$8.$queryRaw`SELECT distinct users.id FROM users
                LEFT JOIN peoples ON peoples.id=users.people_id 
                INNER JOIN role_user ON role_user.username=users.username
                INNER JOIN roles ON roles.slug=role_user.slug
                WHERE (peoples.lastname LIKE ${"%" + search_text + "%"} 
                OR peoples.firstname LIKE ${"%" + search_text + "%"}
                OR users.email LIKE ${"%" + search_text + "%"}
                OR roles.name LIKE ${"%" + search_text + "%"}
                OR (("actif" like ${"%" + search_text + "%"}) AND users.can_auth=1)
                OR (("bloque" like ${"%" + search_text + "%"}) AND users.can_auth=0))
                AND  roles.id in (${Prisma.join(tab_child)})`;
        console.log("tab_obj_child");
        console.log(tab_obj_child);
        console.log("tab_obj_id");
        console.log(tab_obj_id);
        const length_tab = tab_obj_id.length;
        const tab_value = new Array(tab_obj_id.length);
        for (let i = 0; i < length_tab; ++i) {
          tab_value[i] = tab_obj_id[i].id;
        }
        console.log(tab_value);
        length = Math.ceil(count_length_number / 10);
        console.log("a5");
        console.log("lenght");
        console.log(length);
        if (page <= length) {
          let debut = (page - 1) * 10;
          data = (await prisma$8.user.findMany({
            skip: debut,
            take: 10,
            where: {
              id: { in: tab_value }
            },
            include: {
              Roles: {
                include: {
                  Role: true
                }
              },
              People: true
            }
          })).map((v) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            let role_to_one_user = "";
            return {
              id: v.id,
              updated_at: v.updated_at,
              email: v.email,
              login_at: v.login_at,
              can_auth: v.can_auth,
              lastname: (_a = v.People) == null ? void 0 : _a.lastname,
              firstname: (_b = v.People) == null ? void 0 : _b.firstname,
              sex: (_c = v.People) == null ? void 0 : _c.sex,
              place_of_birth: (_d = v.People) == null ? void 0 : _d.place_of_birth,
              //date_of_birth: (v.People?.date_of_birth)?.slice(0,(v.People?.date_of_birth)?.indexOf("T")),
              // date_of_birth: (v.People?.date_of_birth)?.getFullYear().toString().padStart(4,"0")
              // +'-'+((v.People?.date_of_birth)?.getMonth()+1).toString().padStart(2,'0')
              // +'-'+(v.People?.date_of_birth)?.getDate().toString().padStart(2,'0'),
              date_of_birth: (_f = (_e = v.People) == null ? void 0 : _e.date_of_birth) == null ? void 0 : _f.toLocaleDateString("af"),
              nationality: (_g = v.People) == null ? void 0 : _g.nationality,
              phone_number: (_h = v.People) == null ? void 0 : _h.phone_number,
              Roles: v.Roles.map((u) => {
                role_to_one_user += u.Role.name + ",";
                return u.Role;
              }),
              role_to_one_user
            };
          });
          return { data: JSON.parse(JSON.stringify(data)), length };
        } else {
          if (length == 0) {
            return { data: [], length };
          } else {
            let debut = (length - 1) * 10;
            data = (await prisma$8.user.findMany({
              skip: debut,
              take: 10,
              where: {
                id: { in: tab_value }
              },
              include: {
                Roles: {
                  include: {
                    Role: true
                  }
                },
                People: true
              }
            })).map((v) => {
              var _a, _b, _c, _d, _e, _f, _g, _h;
              let role_to_one_user = "";
              return {
                id: v.id,
                updated_at: v.updated_at,
                email: v.email,
                login_at: v.login_at,
                can_auth: v.can_auth,
                lastname: (_a = v.People) == null ? void 0 : _a.lastname,
                firstname: (_b = v.People) == null ? void 0 : _b.firstname,
                sex: (_c = v.People) == null ? void 0 : _c.sex,
                place_of_birth: (_d = v.People) == null ? void 0 : _d.place_of_birth,
                //date_of_birth: (v.People?.date_of_birth)?.slice(0,(v.People?.date_of_birth)?.indexOf("T")),
                // date_of_birth: (v.People?.date_of_birth)?.getFullYear().toString().padStart(4,"0")
                // +'-'+((v.People?.date_of_birth)?.getMonth()+1).toString().padStart(2,'0')
                // +'-'+(v.People?.date_of_birth)?.getDate().toString().padStart(2,'0'),
                date_of_birth: (_f = (_e = v.People) == null ? void 0 : _e.date_of_birth) == null ? void 0 : _f.toLocaleDateString("af"),
                nationality: (_g = v.People) == null ? void 0 : _g.nationality,
                phone_number: (_h = v.People) == null ? void 0 : _h.phone_number,
                Roles: v.Roles.map((u) => {
                  role_to_one_user += u.Role.name + ",";
                  return u.Role;
                }),
                role_to_one_user
              };
            });
            return { data: JSON.parse(JSON.stringify(data)), length };
          }
        }
      } else {
        throw createError({
          statusCode: 403,
          statusMessage: "La page doit \xEAtre positif !"
        });
      }
    } else {
      if (page > 0) {
        let length;
        let count = (await prisma$8.$queryRaw`SELECT COUNT(users.id) length FROM users
              INNER JOIN role_user ON role_user.username=users.username
              INNER JOIN roles ON roles.slug=role_user.slug
              WHERE roles.id in (${Prisma.join(tab_child)})`)[0];
        console.log("a4");
        let tab_obj_id = await prisma$8.$queryRaw`SELECT distinct users.id FROM users
                INNER JOIN role_user ON role_user.username=users.username
                INNER JOIN roles ON roles.slug=role_user.slug
                WHERE roles.id in (${Prisma.join(tab_child)})`;
        console.log("tab_obj_child");
        console.log(tab_obj_child);
        console.log("tab_obj_id");
        console.log(tab_obj_id);
        const length_tab = tab_obj_id.length;
        const tab_value = new Array(tab_obj_id.length);
        for (let i = 0; i < length_tab; ++i) {
          tab_value[i] = tab_obj_id[i].id;
        }
        console.log("parseInt");
        const count_length_number = Number(count.length);
        console.log(count_length_number);
        length = Math.ceil(count_length_number / 10);
        console.log("a5");
        console.log("lenght");
        console.log(length);
        if (page <= length) {
          let debut = (page - 1) * 10;
          data = (await prisma$8.user.findMany({
            skip: debut,
            take: 10,
            where: {
              id: { in: tab_value }
            },
            include: {
              Roles: {
                include: {
                  Role: true
                }
              },
              People: true
            }
          })).map((v) => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            let role_to_one_user = "";
            return {
              id: v.id,
              updated_at: v.updated_at,
              email: v.email,
              login_at: v.login_at,
              can_auth: v.can_auth,
              lastname: (_a = v.People) == null ? void 0 : _a.lastname,
              firstname: (_b = v.People) == null ? void 0 : _b.firstname,
              sex: (_c = v.People) == null ? void 0 : _c.sex,
              place_of_birth: (_d = v.People) == null ? void 0 : _d.place_of_birth,
              date_of_birth: (_f = (_e = v.People) == null ? void 0 : _e.date_of_birth) == null ? void 0 : _f.toLocaleDateString("af"),
              nationality: (_g = v.People) == null ? void 0 : _g.nationality,
              phone_number: (_h = v.People) == null ? void 0 : _h.phone_number,
              Roles: v.Roles.map((u) => {
                role_to_one_user += u.Role.name + ",";
                return u.Role;
              }),
              role_to_one_user
            };
          });
          return { data: JSON.parse(JSON.stringify(data)), length };
        } else {
          if (length == 0) {
            return { data: [], length };
          } else {
            let debut = (length - 1) * 10;
            data = (await prisma$8.user.findMany({
              skip: debut,
              take: 10,
              where: {
                id: { in: tab_value }
              },
              include: {
                Roles: {
                  include: {
                    Role: true
                  }
                },
                People: true
              }
            })).map((v) => {
              var _a, _b, _c, _d, _e, _f, _g, _h;
              let role_to_one_user = "";
              return {
                id: v.id,
                updated_at: v.updated_at,
                email: v.email,
                login_at: v.login_at,
                can_auth: v.can_auth,
                lastname: (_a = v.People) == null ? void 0 : _a.lastname,
                firstname: (_b = v.People) == null ? void 0 : _b.firstname,
                sex: (_c = v.People) == null ? void 0 : _c.sex,
                place_of_birth: (_d = v.People) == null ? void 0 : _d.place_of_birth,
                //date_of_birth: (v.People?.date_of_birth)?.slice(0,(v.People?.date_of_birth)?.indexOf("T")),
                // date_of_birth: (v.People?.date_of_birth)?.getFullYear().toString().padStart(4,"0")
                // +'-'+((v.People?.date_of_birth)?.getMonth()+1).toString().padStart(2,'0')
                // +'-'+(v.People?.date_of_birth)?.getDate().toString().padStart(2,'0'),
                date_of_birth: (_f = (_e = v.People) == null ? void 0 : _e.date_of_birth) == null ? void 0 : _f.toLocaleDateString("af"),
                nationality: (_g = v.People) == null ? void 0 : _g.nationality,
                phone_number: (_h = v.People) == null ? void 0 : _h.phone_number,
                Roles: v.Roles.map((u) => {
                  role_to_one_user += u.Role.name + ",";
                  return u.Role;
                }),
                role_to_one_user
              };
            });
            return { data: JSON.parse(JSON.stringify(data)), length };
          }
        }
      } else {
        throw createError({
          statusCode: 403,
          statusMessage: "La page doit \xEAtre positif !"
        });
      }
    }
  },
  { auth: true, can: ["Voir les utilisateurs"] }
);

const _get$i = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$h
});

const prisma$7 = new PrismaClient({
  log: ["query"]
});
const _delete$2 = definePrivateEventHandler(
  async (event) => {
    const body = await readBody(event);
    console.log("body: ", body);
    try {
      await prisma$7.user.deleteMany({
        where: {
          id: { in: body }
        }
      });
    } catch (error) {
      console.error(error);
      return {
        error: "Une erreur s'est produite."
      };
    }
    return "Deleted successfully \u2705";
  },
  { auth: true, can: ["Supprimer les utilisateurs"] }
);

const _delete$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _delete$2
});

const ITEM_PER_PAGE = 10;
async function get_role_of_current_user(username) {
  let data = await prisma$d.$queryRawUnsafe(
    `SELECT role_user.slug FROM users 
    INNER JOIN role_user ON role_user.username = users.username
    WHERE users.username LIKE  ? ;`,
    username
  );
  return Array.isArray(data) ? data.map((v) => v.slug) : [];
}
const _get$f = definePrivateEventHandler(
  async (event, user) => {
    let data;
    let { page, search_text } = getQuery$1(event);
    try {
      if (!(page && typeof page == "string") || isNaN(parseInt(page)) || parseInt(page) <= 0) {
        return {
          error: "Le num\xE9ro de page est requise et doit \xEAtre un nombre positif !"
        };
      }
      page = parseInt(page);
      let tab_child;
      let current_user_role = await get_role_of_current_user(user.username);
      if (current_user_role.findIndex((v) => v == "administrateur") == -1) {
        let tab_obj_child = await prisma$d.$queryRaw`SELECT roles.id, child_role.id child_role_id FROM roles 
        INNER JOIN role_user ON roles.slug = role_user.slug 
        INNER JOIN users ON users.username = role_user.username 
        INNER JOIN role_role ON role_role.parent_role_id = roles.id 
        INNER JOIN roles as child_role ON role_role.role_id = child_role.id
        WHERE users.id= ${user.id}`;
        tab_child = new Array(tab_obj_child.length);
        for (let i = 0, l = tab_obj_child.length; i < l; i++) {
          tab_child[i] = tab_obj_child[i].child_role_id;
        }
      } else {
        tab_child = await prisma$d.role.findMany({
          select: {
            id: true
          }
        });
        tab_child = tab_child.map((v) => v.id);
      }
      if (!tab_child.length)
        return {
          error: "Vous n'avez pas le droit de voir la liste des utilisateurs"
        };
      if (search_text) {
        let length;
        let count = (await prisma$d.$queryRaw`SELECT COUNT( distinct users.id) length FROM users
                LEFT JOIN peoples ON peoples.id=users.people_id 
                INNER JOIN role_user ON role_user.username=users.username
                INNER JOIN roles ON roles.slug=role_user.slug
                WHERE (peoples.lastname LIKE ${"%" + search_text + "%"} 
                OR peoples.firstname LIKE ${"%" + search_text + "%"}
                OR users.email LIKE ${"%" + search_text + "%"}
                OR roles.name LIKE ${"%" + search_text + "%"}
                OR (("actif" like ${"%" + search_text + "%"}) AND users.can_auth=1)
                OR (("bloque" like ${"%" + search_text + "%"}) AND users.can_auth=0)) 
                AND  roles.id in (${Prisma.join(tab_child)})`)[0];
        const count_length_number = Number(count.length);
        let tab_obj_id = await prisma$d.$queryRaw`SELECT distinct users.id FROM users
                  LEFT JOIN peoples ON peoples.id=users.people_id 
                  INNER JOIN role_user ON role_user.username=users.username
                  INNER JOIN roles ON roles.slug=role_user.slug
                  WHERE (peoples.lastname LIKE ${"%" + search_text + "%"} 
                  OR peoples.firstname LIKE ${"%" + search_text + "%"}
                  OR users.email LIKE ${"%" + search_text + "%"}
                  OR roles.name LIKE ${"%" + search_text + "%"}
                  OR (("actif" like ${"%" + search_text + "%"}) AND users.can_auth=1)
                  OR (("bloque" like ${"%" + search_text + "%"}) AND users.can_auth=0))
                  AND  roles.id in (${Prisma.join(tab_child)})`;
        const length_tab = tab_obj_id.length;
        const tab_value = new Array(tab_obj_id.length);
        for (let i = 0; i < length_tab; ++i) {
          tab_value[i] = tab_obj_id[i].id;
        }
        console.log(tab_value);
        length = Math.ceil(count_length_number / ITEM_PER_PAGE);
        if (length == 0) {
          return { data: [], length: 0 };
        }
        let debut = page <= length ? (page - 1) * ITEM_PER_PAGE : (length - 1) * ITEM_PER_PAGE;
        data = (await prisma$d.user.findMany({
          skip: debut,
          take: ITEM_PER_PAGE,
          where: {
            id: { in: tab_value }
          },
          include: {
            Roles: {
              include: {
                Role: true
              }
            },
            People: true
          }
        })).map((v) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          let role_to_one_user = "";
          return {
            id: v.id,
            updated_at: v.updated_at,
            email: v.email,
            login_at: v.login_at,
            can_auth: v.can_auth,
            lastname: (_a = v.People) == null ? void 0 : _a.lastname,
            firstname: (_b = v.People) == null ? void 0 : _b.firstname,
            sex: (_c = v.People) == null ? void 0 : _c.sex,
            place_of_birth: (_d = v.People) == null ? void 0 : _d.place_of_birth,
            date_of_birth: (_f = (_e = v.People) == null ? void 0 : _e.date_of_birth) == null ? void 0 : _f.toLocaleDateString("af"),
            nationality: (_g = v.People) == null ? void 0 : _g.nationality,
            phone_number: (_h = v.People) == null ? void 0 : _h.phone_number,
            Roles: v.Roles.map((u) => {
              role_to_one_user += u.Role.name + ",";
              return u.Role;
            }),
            role_to_one_user
          };
        });
        return { data: JSON.parse(JSON.stringify(data)), length };
      } else {
        let length;
        let count = (await prisma$d.$queryRaw`SELECT COUNT(users.id) length FROM users
                INNER JOIN role_user ON role_user.username=users.username
                INNER JOIN roles ON roles.slug=role_user.slug
                WHERE roles.id in (${Prisma.join(tab_child)})`)[0];
        let tab_obj_id = await prisma$d.$queryRaw`SELECT distinct users.id FROM users
                  INNER JOIN role_user ON role_user.username=users.username
                  INNER JOIN roles ON roles.slug=role_user.slug
                  WHERE roles.id in (${Prisma.join(tab_child)})`;
        const length_tab = tab_obj_id.length;
        const tab_value = new Array(tab_obj_id.length);
        for (let i = 0; i < length_tab; ++i) {
          tab_value[i] = tab_obj_id[i].id;
        }
        console.log("parseInt");
        const count_length_number = Number(count.length);
        console.log(count_length_number);
        length = Math.ceil(count_length_number / ITEM_PER_PAGE);
        if (length == 0) {
          return { data: [], length };
        }
        let debut = page <= length ? (page - 1) * ITEM_PER_PAGE : (length - 1) * ITEM_PER_PAGE;
        data = (await prisma$d.user.findMany({
          skip: debut,
          take: ITEM_PER_PAGE,
          where: {
            id: { in: tab_value }
          },
          include: {
            Roles: {
              include: {
                Role: true
              }
            },
            People: true
          }
        })).map((v) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          let role_to_one_user = "";
          return {
            id: v.id,
            updated_at: v.updated_at,
            email: v.email,
            login_at: v.login_at,
            can_auth: v.can_auth,
            lastname: (_a = v.People) == null ? void 0 : _a.lastname,
            firstname: (_b = v.People) == null ? void 0 : _b.firstname,
            sex: (_c = v.People) == null ? void 0 : _c.sex,
            place_of_birth: (_d = v.People) == null ? void 0 : _d.place_of_birth,
            date_of_birth: (_f = (_e = v.People) == null ? void 0 : _e.date_of_birth) == null ? void 0 : _f.toLocaleDateString("af"),
            nationality: (_g = v.People) == null ? void 0 : _g.nationality,
            phone_number: (_h = v.People) == null ? void 0 : _h.phone_number,
            Roles: v.Roles.map((u) => {
              role_to_one_user += u.Role.name + ",";
              return u.Role;
            }),
            role_to_one_user
          };
        });
        return { data: JSON.parse(JSON.stringify(data)), length };
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  { auth: true, can: ["Voir les utilisateurs"] }
);

const _get$g = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$f
});

const prisma$6 = new PrismaClient({
  log: ["query"]
});
const salt$2 = process.env.SALT ? parseInt(process.env.SALT) : 10;
const _post$6 = definePrivateEventHandler(
  async (event) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const body = await readBody(event);
    let data = null, user = null;
    if (!!body.email && !/.@./.test(body.email)) {
      return { error: "Email erron\xE9 ou non renseign\xE9" };
    }
    if (!body.lastname) {
      return { error: "Nom obligatoire" };
    }
    if (!body.firstname) {
      return { error: "Le champ pr\xE9nom est obligatoire" };
    }
    if (!(body.sex === "M" || body.sex === "F")) {
      return {
        error: "Le champ 'Sexe' doit \xEAtre renseign\xE9 avec la valeur 'M' pour masculin ou 'F' pour f\xE9minin."
      };
    }
    if (!body.date_of_birth) {
      return { error: "La date de naissance est obligatoire" };
    }
    if (!body.place_of_birth) {
      return { error: "Le lieu de naissance est obligatoire" };
    }
    if (!body.nationality) {
      return { error: "La nationalit\xE9 est obligatoire" };
    }
    if (!body.phone_number) {
      return { error: "Le num\xE9ro de t\xE9l\xE9phone est obligatoire" };
    }
    if (!(Array.isArray(body.Roles) && body.Roles.length > 0)) {
      return { error: "Le choix de profil est obligatoire" };
    }
    try {
      if (body.id) {
        const user_to_do_update = await prisma$6.$queryRaw`SELECT users.username, people_id FROM users WHERE id=${body.id}`;
        const user_to_do_update_ = user_to_do_update[0];
        if (Array.isArray(user_to_do_update) && user_to_do_update.length > 0) {
          if (!!body.password && body.password === body.confirm_password) {
            await prisma$6.$executeRaw`UPDATE users, peoples SET email=${body.email},
                    password=${await hash$1(body.password, salt$2)},
                    peoples.firstname=${body.firstname} ,
                    peoples.lastname=${body.lastname} ,
                    peoples.phone_number=${body.phone_number} ,
                    peoples.nationality=${body.nationality} ,
                    peoples.place_of_birth=${body.place_of_birth} ,
                    peoples.date_of_birth=${new Date(body.date_of_birth)} ,
                    peoples.sex=${body.sex} 
                    WHERE users.id=${parseInt(body.id)} and peoples.id=${user_to_do_update_.people_id}`;
            await prisma$6.$executeRaw`DELETE FROM role_user WHERE username=${user_to_do_update_.username}`;
            const tab_insert_role_user = new Array(body.Roles.length);
            const length_body_Roles = body.Roles.length;
            for (let i = 0; i < length_body_Roles; ++i) {
              tab_insert_role_user[i] = Prisma.sql`(${Prisma.join([
                user_to_do_update_.username,
                body.Roles[i]
              ])})`;
            }
            await prisma$6.$executeRaw`INSERT INTO role_user (username, slug)  
                VALUES ${Prisma.join(tab_insert_role_user)}`;
          } else if (!!body.password && body.password !== body.confirm_password) {
            return {
              error: '"Mot de passe" et "Confirmation de mot de passe" ne sont pas conforme'
            };
          } else {
            await prisma$6.$executeRaw`UPDATE users, peoples SET email=${body.email},
                    peoples.firstname=${body.firstname} ,
                    peoples.lastname=${body.lastname} ,
                    peoples.phone_number=${body.phone_number} ,
                    peoples.nationality=${body.nationality} ,
                    peoples.place_of_birth=${body.place_of_birth} ,
                    peoples.date_of_birth=${new Date(body.date_of_birth)} ,
                    peoples.sex=${body.sex} 
                    WHERE users.id=${parseInt(body.id)} and peoples.id=${user_to_do_update_.people_id}`;
            await prisma$6.$executeRaw`DELETE FROM role_user WHERE username=${user_to_do_update_.username}`;
            const tab_insert_role_user = new Array(body.Roles.length);
            const length_body_Roles = body.Roles.length;
            for (let i = 0; i < length_body_Roles; ++i) {
              tab_insert_role_user[i] = Prisma.sql`(${Prisma.join([
                user_to_do_update_.username,
                body.Roles[i]
              ])})`;
            }
            await prisma$6.$executeRaw`INSERT INTO role_user (username, slug)  
                VALUES ${Prisma.join(tab_insert_role_user)}`;
          }
        } else {
          return {
            error: "Les informations de l'utilisateur choisi ne sont pas correctes"
          };
        }
      } else {
        if (!(body.password && body.password === body.confirm_password)) {
          return {
            error: '"Mot de passe" et "Confirmation de mot de passe" ne sont pas les m\xEAmes'
          };
        }
        data = await prisma$6.people.create({
          data: {
            firstname: body.firstname,
            lastname: body.lastname,
            phone_number: body.phone_number,
            nationality: body.nationality,
            place_of_birth: body.place_of_birth,
            date_of_birth: new Date(body.date_of_birth),
            sex: body.sex
          }
        });
        user = await prisma$6.user.create({
          data: {
            username: body.email,
            email: body.email,
            password: await hash$1(body.password, salt$2),
            can_auth: true,
            people_id: data.id
          }
        });
        await prisma$6.$executeRaw`DELETE FROM role_user WHERE username=${body.email}`;
        const tab_insert_role_user = new Array(body.Roles.length);
        console.log(body.Roles);
        const length_body_Roles = body.Roles.length;
        for (let i = 0; i < length_body_Roles; ++i) {
          tab_insert_role_user[i] = Prisma.sql`(${Prisma.join([
            body.email,
            body.Roles[i]
          ])})`;
        }
        await prisma$6.$queryRaw`INSERT INTO role_user (username, slug)  
                VALUES ${Prisma.join(tab_insert_role_user)}`;
      }
    } catch (e) {
      console.log(e);
      if (parseInt((_a = e == null ? void 0 : e.meta) == null ? void 0 : _a.code) === 1062 || e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
        return { error: "Cet email est d\xE9j\xE0 utilis\xE9 pour un autre compte" };
      } else {
        return { error: "Une erreur s'est produite." };
      }
    }
    let role_to_one_user = "";
    let response;
    try {
      response = await prisma$6.user.findUnique({
        where: {
          id: body.id ? body.id : user == null ? void 0 : user.id
        },
        include: {
          Roles: {
            include: {
              Role: true
            }
          },
          People: true
        }
      });
    } catch (error) {
      console.log(error);
    }
    return {
      id: response == null ? void 0 : response.id,
      updated_at: response == null ? void 0 : response.updated_at,
      email: response == null ? void 0 : response.email,
      login_at: response == null ? void 0 : response.login_at,
      can_auth: response == null ? void 0 : response.can_auth,
      lastname: (_b = response == null ? void 0 : response.People) == null ? void 0 : _b.lastname,
      firstname: (_c = response == null ? void 0 : response.People) == null ? void 0 : _c.firstname,
      sex: (_d = response == null ? void 0 : response.People) == null ? void 0 : _d.sex,
      place_of_birth: (_e = response == null ? void 0 : response.People) == null ? void 0 : _e.place_of_birth,
      date_of_birth: (_g = (_f = response == null ? void 0 : response.People) == null ? void 0 : _f.date_of_birth) == null ? void 0 : _g.toLocaleDateString("af"),
      nationality: (_h = response == null ? void 0 : response.People) == null ? void 0 : _h.nationality,
      phone_number: (_i = response == null ? void 0 : response.People) == null ? void 0 : _i.phone_number,
      Roles: response == null ? void 0 : response.Roles.map((u) => {
        role_to_one_user += u.Role.name + ",";
        return u.Role;
      }),
      role_to_one_user
    };
  },
  { auth: true, can: ["Enregistrer un utilisateur"] }
);

const _post$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _post$6
});

const prisma$5 = new PrismaClient();
const salt$1 = process.env.SALT ? parseInt(process.env.SALT) : 10;
const _post$4 = definePrivateEventHandler(async (event) => {
  let body = await readBody(event);
  try {
    if (!(body && body.id))
      return {
        error: "Informations manquantes veuillez r\xE9essayer plus tard"
        // code: 100,
      };
    if (!(body.password && body.password === body.confirm_password))
      return {
        error: "Les mots de passe ne correspondent pas. Veuillez v\xE9rifier votre saisie."
      };
    const user = await prisma$5.user.findUnique({
      select: {
        email: true,
        username: true,
        password: true,
        can_auth: true
      },
      where: {
        id: parseInt(body.id)
      }
    });
    if (!user)
      return {
        error: "Compte inexistant. Veuillez v\xE9rifier les informations saisies et r\xE9essayer."
      };
    if (user.can_auth == false)
      return {
        error: "Votre compte est actuellement d\xE9sactiv\xE9, veuillez vous rapprocher de l'administrateur pour d\xE9bloquer votre compte."
      };
    if (await compare(body.password, user.password)) {
      return {
        message: `Pour des raisons de s\xE9curit\xE9, veuillez noter que votre nouveau mot de passe
            doit diff\xE9rer du mot de passe initial que vous aviez.
            Nous vous prions de bien vouloir r\xE9essayer en choisissant un mot de passe distinct`
      };
    } else {
      await prisma$5.user.update({
        data: {
          is_change_password: true,
          password: await hash$1(body.password, salt$1)
        },
        where: {
          id: parseInt(body.id)
        }
      });
    }
    return { status: 200 };
  } catch (error) {
    console.log(error);
    return { error: void 0 };
  }
});

const _post$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _post$4
});

const _get$d = definePrivateEventHandler(async (event, user) => {
  let query = getQuery$1(event);
  console.log(query);
  let user_username = user == null ? void 0 : user.username;
  let data = await prisma$d.$queryRaw`SELECT users.email, peoples.firstname, peoples.lastname, peoples.place_of_birth, peoples.nationality,
    peoples.sex, peoples.phone_number, STR_TO_DATE(peoples.date_of_birth, "%Y-%m-%d") as date_of_birth FROM users INNER JOIN peoples ON peoples.id=users.people_id
    WHERE users.username=${user_username}`;
  console.log(data);
  return data;
});

const _get$e = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$d
});

const salt = process.env.SALT ? parseInt(process.env.SALT) : 10;
const _post$2 = definePrivateEventHandler(async (event, user) => {
  let body = await readBody(event);
  console.log("nous sommes dans reset");
  console.log(body);
  try {
    if (body.password && body.password === body.confirm_password) {
      let users_people_id = (await prisma$d.$queryRaw`SELECT people_id FROM users WHERE users.id=${body.id}`)[0];
      if (users_people_id && users_people_id.people_id) {
        await prisma$d.$executeRaw`UPDATE users INNER JOIN peoples on users.people_id=peoples.id SET users.email = ${body.email},
        users.password=${await hash$1(body.password, salt)}, 
        peoples.firstname = ${body.firstname}, peoples.lastname = ${body.lastname}, peoples.phone_number = ${body.phone_number},
        peoples.nationality = ${body.nationality}, peoples.sex = ${body.sex}, peoples.user_id =${body.id},
        peoples.date_of_birth = ${new Date(body.date_of_birth)}, peoples.place_of_birth = ${body.place_of_birth}
        WHERE users.id=${body.id}`;
      } else {
        await prisma$d.people.create({
          data: {
            firstname: body.firstname,
            lastname: body.lastname,
            phone_number: body.phone_number,
            nationality: body.nationality,
            sex: body.sex,
            date_of_birth: new Date(body.date_of_birth),
            place_of_birth: body.place_of_birth,
            User: {
              connect: {
                id: body.id
              }
            }
          }
        });
        await prisma$d.$queryRaw`UPDATE users SET users.email = ${body.email}, users.password===${await hash$1(body.password, salt)}
         WHERE users.id = ${body.id}`;
      }
    } else if (body.password && body.password !== body.confirm_password) {
      throw createError({
        statusCode: 401,
        message: "Le mot de passe et la confirmation du mot de passe ne correspondent pas."
      });
    } else {
      console.log("update else");
      let users_people_id = (await prisma$d.$queryRaw`SELECT people_id FROM users WHERE users.id=${body.id}`)[0];
      if (users_people_id && users_people_id.people_id) {
        await prisma$d.$executeRaw`UPDATE users INNER JOIN peoples on users.people_id=peoples.id SET users.email = ${body.email},
        peoples.firstname = ${body.firstname}, peoples.lastname = ${body.lastname}, peoples.phone_number = ${body.phone_number},
        peoples.nationality = ${body.nationality}, peoples.sex = ${body.sex}, peoples.user_id =${body.id},
        peoples.date_of_birth = ${new Date(body.date_of_birth)}, peoples.place_of_birth = ${body.place_of_birth} 
        WHERE users.id=${body.id}`;
      } else {
        await prisma$d.people.create({
          data: {
            firstname: body.firstname,
            lastname: body.lastname,
            phone_number: body.phone_number,
            nationality: body.nationality,
            sex: body.sex,
            date_of_birth: new Date(body.date_of_birth),
            place_of_birth: body.place_of_birth,
            User: {
              connect: {
                id: body.id
              }
            }
          }
        });
        await prisma$d.$queryRaw`UPDATE users SET users.email = ${body.email} WHERE users.id = ${body.id}`;
      }
    }
    return [];
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
});

const _post$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _post$2
});

const prisma$4 = new PrismaClient();
const _get$b = definePrivateEventHandler(
  async (event, user) => {
    return await prisma$4.permission.findMany({});
  }
);

const _get$c = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$b
});

const prisma$3 = new PrismaClient({
  log: ["query"]
});
const _delete = definePrivateEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  try {
    console.log(await prisma$3.$executeRaw`DELETE FROM roles WHERE id IN (${Prisma.join(body)})`);
  } catch (error) {
    console.error(error);
  }
  return "Deleted successfully \u2705";
}, { auth: true, can: ["Supprimer les profils"] });

const _delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _delete
});

const prisma$2 = new PrismaClient();
const _get$9 = definePrivateEventHandler(async (event, user) => {
  try {
    let tab_role_name = await prisma$2.$queryRaw`SELECT roles.name, role_user.slug  FROM roles 
      INNER JOIN role_user ON roles.slug = role_user.slug 
      WHERE role_user.username = ${user.username}`;
    let roles;
    if (tab_role_name.findIndex((v) => v.slug == CONST_VAR.SLUG_PRIVILEGED_ROLE) != -1) {
      roles = (await prisma$2.role.findMany({
        include: {
          Permissions: {
            include: {
              Permission: true
            }
          },
          ParentRoles: {
            include: {
              Role: true
            }
          }
        }
      })).map((role) => {
        return {
          ...role,
          Permissions: role.Permissions.map(
            (permission) => permission.Permission
          ),
          Roles: role.ParentRoles.map((rol) => rol.Role)
        };
      });
    } else {
      let tab_obj_child = await prisma$2.$queryRaw`SELECT roles.id, child_role.id child_role_id FROM roles 
      INNER JOIN role_user ON roles.slug = role_user.slug 
      
      INNER JOIN role_role ON role_role.parent_role_id = roles.id 
      INNER JOIN roles AS child_role ON role_role.role_id = child_role.id
      WHERE role_user.username= ${user.username}`;
      let tab_child = new Array(tab_obj_child.length);
      for (let i = 0, l = tab_obj_child.length; i < l; i++) {
        tab_child[i] = tab_obj_child[i].child_role_id;
      }
      roles = (await prisma$2.role.findMany({
        include: {
          Permissions: {
            include: {
              Permission: true
            }
          },
          ParentRoles: {
            include: {
              Role: true
            }
          }
        },
        where: {
          NOT: {
            slug: CONST_VAR.SLUG_PRIVILEGED_ROLE
          },
          id: {
            in: tab_child
          }
        }
      })).map((role) => {
        return {
          ...role,
          Permissions: role.Permissions.map(
            (permission) => permission.Permission
          ),
          Roles: role.ParentRoles.map((rol) => rol.Role)
        };
      });
    }
    return JSON.parse(JSON.stringify(roles));
  } catch (error) {
    console.error(error);
    return { error: "Une erreur s'est produite." };
  }
});

const _get$a = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$9
});

const prisma$1 = new PrismaClient();
const _post = definePrivateEventHandler(async (event) => {
  const body = await readBody(event);
  let data = null;
  if (body.id) {
    await prisma$1.$executeRawUnsafe(
      `UPDATE roles SET name=?,slug=?,description=? WHERE id=?`,
      body.name,
      slugify(`${body.name}`, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g
      }),
      body.description,
      parseInt(body.id)
    );
  } else {
    await prisma$1.$executeRawUnsafe(
      `INSERT INTO roles(name,slug,description)
      VALUES(?, ?, ?)`,
      body.name,
      slugify(`${body.name}`, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g
      }),
      body.description
    );
  }
  data = await prisma$1.$queryRawUnsafe(
    `SELECT id,name,slug,description
    FROM roles
    WHERE slug=?`,
    slugify(`${body.name}`, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g
    })
  );
  await prisma$1.$executeRawUnsafe(
    `DELETE FROM role_role 
    WHERE parent_role_id=?`,
    //@ts-ignore
    data[0].id
  );
  if (body.Roles && body.Roles.length != 0) {
    for (let role of body.Roles) {
      if (role && role.id) {
        await prisma$1.$executeRawUnsafe(
          `INSERT INTO role_role(parent_role_id, role_id)
          VALUES(?, ?)`,
          //@ts-ignore
          data[0].id,
          role.id
        );
      } else {
        await prisma$1.$executeRawUnsafe(
          `INSERT INTO role_role(parent_role_id, role_id)
          VALUES(?, ?)`,
          //@ts-ignore
          data[0].id,
          role
        );
      }
    }
  }
  await prisma$1.$executeRawUnsafe(
    `DELETE FROM permission_role 
    WHERE role_slug=?`,
    //@ts-ignore
    data[0].slug
  );
  if (body.Permissions && body.Permissions.length != 0) {
    for (let permission of body.Permissions) {
      if (permission && permission.slug) {
        await prisma$1.$executeRawUnsafe(
          `INSERT INTO permission_role(role_slug, permission_slug)
          VALUES(?, ?)`,
          //@ts-ignore
          data[0].slug,
          permission.slug
        );
      } else {
        await prisma$1.$executeRawUnsafe(
          `INSERT INTO permission_role(role_slug, permission_slug)
          VALUES(?, ?)`,
          //@ts-ignore
          data[0].slug,
          permission
        );
      }
    }
  }
  return data[0];
}, { auth: true, can: ["Enregistrer un profil"] });

const _post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _post
});

const prisma = new PrismaClient();
const _id_$4 = definePrivateEventHandler(
  async (event, user) => {
    let data;
    let id = parseInt(event.context.params.id);
    try {
      data = await prisma.$queryRawUnsafe(
        `SELECT ro.id,ro.name,ro.description,GROUP_CONCAT(DISTINCT ro_ro.role_id SEPARATOR" ") as Roles,GROUP_CONCAT(DISTINCT pe_ro.permission_slug SEPARATOR"'") as Permissions 
        FROM roles ro 
        LEFT JOIN role_role ro_ro ON ro.id=ro_ro.parent_role_id 
        LEFT JOIN permission_role pe_ro ON ro.slug=pe_ro.role_slug 
        WHERE ro.id=?`,
        id
      );
      data[0].Roles ? data[0].Roles = data[0].Roles.split(" ").map((i) => Number(i)) : "";
      data[0].Permissions ? data[0].Permissions = data[0].Permissions.split("'") : "";
      console.log("data: ", data[0]);
      return data[0];
    } catch (error) {
      console.error(error);
    }
  }
);

const _id_$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id_$4
});

const sheetContentWithChoixColumn_post = definePrivateEventHandler(
  async (event) => {
    let body = await useFile(event);
    let workbook = XLSX.read(body.files[0].buffer);
    let { sheet, debut_ligne, colonne } = body.fields;
    let sheet_content = workbook.Sheets[sheet];
    console.log("colonne");
    console.log(colonne);
    console.log("sheet_content");
    console.log(sheet_content);
    let range;
    if (!sheet_content["!ref"])
      return [];
    range = XLSX.utils.decode_range(sheet_content["!ref"]);
    console.log("range");
    console.log(range);
    let debut_ligne_adapte = Number(debut_ligne) - 1;
    console.log(XLSX.utils.decode_col(""));
    if (!(XLSX.utils.decode_col(colonne) >= 0)) {
      throw createError({
        statusCode: 401,
        message: "Column value not correct"
      });
    }
    let new_range;
    let cellule_debut, cellule_fin;
    for (let i = debut_ligne_adapte; ; i++) {
      const cellule = XLSX.utils.encode_cell({ r: i, c: XLSX.utils.decode_col(colonne) });
      if (!sheet_content[cellule]) {
        break;
      }
      if (i == debut_ligne_adapte)
        cellule_debut = cellule;
      cellule_fin = cellule;
    }
    console.log(cellule_debut + ":" + cellule_fin);
    new_range = cellule_debut + ":" + cellule_fin;
    if (!cellule_debut) {
      throw createError({
        statusCode: 401,
        message: "Empty cellule",
        data: colonne + "" + debut_ligne
      });
    }
    const donnees_JSON = XLSX.utils.sheet_to_json(sheet_content, { range: new_range });
    console.log("donnees_JSON");
    console.log(donnees_JSON);
    return donnees_JSON;
  },
  { auth: false }
);

const sheetContentWithChoixColumn_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sheetContentWithChoixColumn_post
});

const sheetContent_post = definePrivateEventHandler(
  async (event) => {
    let body = await useFile(event);
    let workbook = XLSX.read(body.files[0].buffer);
    workbook.SheetNames;
    let { sheet, first_row } = body.fields;
    let sheet_content = workbook.Sheets[sheet];
    console.log("sheet_content");
    let range;
    if (!sheet_content["!ref"])
      return [];
    range = XLSX.utils.decode_range(sheet_content["!ref"]);
    console.log("range");
    console.log(range);
    let new_range, row;
    let file_content_2 = [];
    for (let index = Number(first_row) - 1; index <= range.e.r; index++) {
      new_range = XLSX.utils.encode_range({
        s: {
          c: range.s.c,
          r: index
        },
        e: {
          c: range.e.c,
          r: index
        }
      });
      row = XLSX.utils.sheet_to_json(sheet_content, {
        header: 1,
        raw: false,
        dateNF: "dd/mm/yyyy",
        range: new_range
      });
      console.log(row);
      if (!(Array.isArray(row[0]) && row[0].length))
        break;
      file_content_2.push(row[0]);
    }
    return file_content_2;
  },
  { auth: false }
);

const sheetContent_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sheetContent_post
});

const sheetNames_post = definePrivateEventHandler(
  async (event) => {
    let body = await useFile(event);
    console.log("body");
    console.log(body);
    let workbook = XLSX.read(body.files[0].buffer);
    return workbook.SheetNames;
  },
  { auth: false }
);

const sheetNames_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: sheetNames_post
});

const _get$7 = definePrivateEventHandler(
  async (event, user) => {
    try {
      return [
        "Afghanistan",
        "Afrique du Sud",
        "Albanie",
        "Alg\xE9rie",
        "Allemagne",
        "Andorre",
        "Angola",
        "Anguilla",
        "Antigua-et-Barbuda",
        "Arabie saoudite",
        "Argentine",
        "Arm\xE9nie",
        "Aruba",
        "Australie",
        "Autriche",
        "Azerba\xEFdjan",
        "Bahamas",
        "Bahre\xEFn",
        "Bangladesh",
        "Barbade",
        "Belgique",
        "Belize",
        "Bermudes",
        "Bhoutan",
        "Bolivie (\xC9tat plurinational de)",
        "Bonaire, Saint-Eustache et Saba",
        "Bosnie-Herz\xE9govine",
        "Botswana",
        "Brun\xE9i Darussalam",
        "Br\xE9sil",
        "Bulgarie",
        "Burkina Faso",
        "Burundi",
        "B\xE9larus",
        "B\xE9nin",
        "Cambodge",
        "Cameroun",
        "Canada",
        "Cap-Vert",
        "Chili",
        "Chine",
        "Chypre",
        "Colombie",
        "Comores",
        "Congo",
        "Cor\xE9e (R\xE9publique populaire d\xE9mocratique de)",
        "Costa Rica",
        "Croatie",
        "Cuba",
        "Cura\xE7ao",
        "C\xF4te d'Ivoire",
        "Danemark",
        "Djibouti",
        "Dominique",
        "El Salvador",
        "Espagne",
        "Estonie",
        "Fidji",
        "Finlande",
        "France",
        "F\xE9d\xE9ration de Russie",
        "Gabon",
        "Gambie",
        "Ghana",
        "Gibraltar",
        "Grenade",
        "Groenland",
        "Gr\xE8ce",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernesey",
        "Guin\xE9e",
        "Guin\xE9e \xE9quatoriale",
        "Guin\xE9e-Bissau",
        "Guyana",
        "Guyane fran\xE7aise",
        "G\xE9orgie",
        "G\xE9orgie du Sud et les \xEEles Sandwich du Sud",
        "Honduras",
        "Hong Kong",
        "Hongrie",
        "Inde",
        "Indon\xE9sie",
        "Irak",
        "Iran (R\xE9publique islamique d')",
        "Irlande",
        "Islande",
        "Isra\xEBl",
        "Italie",
        "Jama\xEFque",
        "Japon",
        "Jersey",
        "Jordanie",
        "Kazakhstan",
        "Kenya",
        "Kirghizistan",
        "Kiribati",
        "Kowe\xEFt",
        "Lesotho",
        "Lettonie",
        "Liban",
        "Libye",
        "Lib\xE9ria",
        "Liechtenstein",
        "Lituanie",
        "Luxembourg",
        "Macao",
        "Mac\xE9doine du Nord",
        "Madagascar",
        "Malaisie",
        "Malawi",
        "Maldives",
        "Mali",
        "Malte",
        "Maroc",
        "Maurice",
        "Mauritanie",
        "Mayotte",
        "Mexique",
        "Micron\xE9sie (\xC9tats f\xE9d\xE9r\xE9s de)",
        "Moldavie (R\xE9publique de)",
        "Monaco",
        "Mongolie",
        "Montserrat",
        "Mont\xE9n\xE9gro",
        "Mozambique",
        "Myanmar",
        "Namibie",
        "Nauru",
        "Nicaragua",
        "Niger",
        "Nig\xE9ria",
        "Niu\xE9",
        "Norv\xE8ge",
        "Nouvelle-Cal\xE9donie",
        "Nouvelle-Z\xE9lande",
        "N\xE9pal",
        "Oman",
        "Ouganda",
        "Ouzb\xE9kistan",
        "Ouzb\xE9kistan",
        "Pakistan",
        "Palaos",
        "Palestine, \xC9tat de",
        "Panama",
        "Papouasie-Nouvelle-Guin\xE9e",
        "Paraguay",
        "Pays-Bas",
        "Philippines",
        "Pitcairn",
        "Pologne",
        "Polyn\xE9sie fran\xE7aise",
        "Porto Rico",
        "Portugal",
        "P\xE9rou",
        "Qatar",
        "Roumanie",
        "Royaume-Uni",
        "Royaume-Uni",
        "Rwanda",
        "R\xE9publique arabe syrienne",
        "R\xE9publique centrafricaine",
        "R\xE9publique dominicaine",
        "R\xE9publique du Kosovo",
        "R\xE9publique d\xE9mocratique du Congo",
        "R\xE9publique d\xE9mocratique populaire lao",
        "R\xE9publique tch\xE8que",
        "R\xE9publique-Unie de Tanzanie",
        "R\xE9union",
        "Sahara occidental",
        "Saint-Barth\xE9lemy",
        "Saint-Kitts-et-Nevis",
        "Saint-Marin",
        "Saint-Martin (partie fran\xE7aise)",
        "Saint-Pierre-et-Miquelon",
        "Saint-Si\xE8ge",
        "Saint-Vincent-et-les Grenadines",
        "Sainte-H\xE9l\xE8ne, Ascension et Tristan da Cunha",
        "Sainte-Lucie",
        "Samoa",
        "Samoa am\xE9ricaines",
        "Sao Tom\xE9-et-Principe",
        "Serbie",
        "Seychelles",
        "Sierra Leone",
        "Singapour",
        "Slovaquie",
        "Slov\xE9nie",
        "Somalie",
        "Soudan",
        "Sri Lanka",
        "Suisse",
        "Suriname",
        "Su\xE8de",
        "S\xE9n\xE9gal",
        "Tadjikistan",
        "Ta\xEFwan",
        "Tchad",
        "Terres australes fran\xE7aises",
        "Territoire britannique de l'oc\xE9an Indien",
        "Tha\xEFlande",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinit\xE9-et-Tobago",
        "Tunisie",
        "Turkm\xE9nistan",
        "Turquie",
        "Tuvalu",
        "Ukraine",
        "Ukraine",
        "Uruguay",
        "Uruguay",
        "Vanuatu",
        "Vanuatu",
        "Venezuela (R\xE9publique bolivarienne du)",
        "Venezuela (R\xE9publique bolivarienne du)",
        "Vi\xEAt Nam",
        "Vi\xEAt Nam",
        "Wallis-et-Futuna",
        "Wallis-et-Futuna",
        "Y\xE9men",
        "Zambie",
        "Zimbabwe",
        "\xC9gypte",
        "\xC9mirats arabes unis",
        "\xC9mirats arabes unis",
        "\xC9quateur",
        "\xC9rythr\xE9e",
        "\xC9tats-Unis d'Am\xE9rique",
        "\xC9tats-Unis d'Am\xE9rique",
        "\xC9thiopie",
        "\xCEle Bouvet",
        "\xCEle Christmas",
        "\xCEle Norfolk",
        "\xCEle de Man",
        "\xCEles Ca\xEFmans",
        "\xCEles Cocos (Keeling)",
        "\xCEles Cook",
        "\xCEles F\xE9ro\xE9",
        "\xCEles Malouines (Falkland)",
        "\xCEles Mariannes du Nord",
        "\xCEles Marshall",
        "\xCEles Salomon",
        "\xCEles Turques et Ca\xEFques",
        "\xCEles Vierges britanniques",
        "\xCEles Vierges des \xC9tats-Unis",
        "\xCEles mineures \xE9loign\xE9es des \xC9tats-Unis",
        "\xCEles \xC5land"
      ];
    } catch (error) {
      console.error(error);
      throw createError({
        statusCode: 400,
        message: "Un probl\xE8me est survenue."
      });
    }
  },
  { auth: false }
);

const _get$8 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$7
});

const _get$5 = definePrivateEventHandler(async (event, user) => {
  let departments = [];
  try {
    departments = await prisma$d.department.findMany({
      select: {
        id: true,
        name: true,
        code: true
      },
      orderBy: { name: "asc" }
    });
    return departments;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
}, { auth: false });

const _get$6 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$5
});

const _id__get$2 = definePrivateEventHandler(async (event, user) => {
  var _a;
  let municipalities = [];
  try {
    if (!((_a = event.context.params) == null ? void 0 : _a.id))
      throw "id de Departement manquant";
    municipalities = await prisma$d.municipality.findMany({
      where: {
        department_id: parseInt(event.context.params.id)
      },
      select: {
        id: true,
        name: true,
        code: true
      }
    });
    return municipalities;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
}, { auth: false });

const _id__get$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__get$2
});

const _id__get = definePrivateEventHandler(async (event, user) => {
  var _a;
  let schools = [];
  try {
    if (!((_a = event.context.params) == null ? void 0 : _a.id))
      throw "id de l'\xE9tablissement manquant";
    let school_department = await prisma$d.school.findUnique({
      where: {
        id: parseInt(event.context.params.id)
      },
      select: {
        department_id: true
      }
    });
    if (school_department) {
      schools = await prisma$d.$queryRawUnsafe(
        `SELECT schools.id, schools.name, schools.acronym
         FROM promotions_ouvertes 
         INNER JOIN schools ON promotions_ouvertes.school_id = schools.id
         INNER JOIN years ON promotions_ouvertes.year_id = years.id
         WHERE years.in_progress = 1 AND classe_id = 28 AND schools.department_id = ${school_department == null ? void 0 : school_department.department_id}  ;`
      );
      return schools;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
});

const _id__get$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id__get
});

const _get$3 = definePrivateEventHandler(async (event, user) => {
  let districts = [];
  try {
    districts = await prisma$d.district.findMany({
      select: {
        id: true,
        name: true,
        code: true
      },
      orderBy: { name: "asc" }
    });
    return districts;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
});

const _get$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$3
});

const _id_$2 = definePrivateEventHandler(async (event, user) => {
  var _a;
  console.log(event.context.params);
  let villages = [];
  try {
    if (!((_a = event.context.params) == null ? void 0 : _a.id))
      throw "id de Departement manquant";
    villages = await prisma$d.village.findMany({
      where: {
        district_id: parseInt(event.context.params.id)
      },
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true
      }
    });
    return villages;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
}, { auth: false });

const _id_$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id_$2
});

const _get$1 = definePrivateEventHandler(async (event, user) => {
  let municipalities = [];
  try {
    municipalities = await prisma$d.municipality.findMany({
      select: {
        id: true,
        name: true,
        code: true
      },
      orderBy: { name: "asc" }
    });
    return municipalities;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
});

const _get$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _get$1
});

const _id_ = definePrivateEventHandler(async (event, user) => {
  var _a;
  console.log(event.context.params);
  let districts = [];
  try {
    if (!((_a = event.context.params) == null ? void 0 : _a.id))
      throw "id de commune manquant";
    districts = await prisma$d.district.findMany({
      where: {
        municipality_id: parseInt(event.context.params.id)
      },
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        code: true
      }
    });
    return districts;
  } catch (error) {
    console.error(error);
    throw createError({
      statusCode: 400,
      message: "Un probl\xE8me est survenue."
    });
  }
}, { auth: false });

const _id_$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _id_
});

const _get = /*#__PURE__*/Object.freeze({
  __proto__: null
});

const Vue3 = version.startsWith("3");

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const VueReactivityPlugin = defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry of ctx.entries)
        entry.resolvedInput = resolveUnrefHeadInput(entry.input);
    }
  }
});

const headSymbol = "usehead";
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = createServerHead$1(options);
  head.use(VueReactivityPlugin);
  head.install = vueInstall(head);
  return head;
}

const unheadPlugins = [];

const appHead = {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon-32x32.png"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap"},{"rel":"stylesheet","href":"https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"}],"style":[],"script":[],"noscript":[],"titleTemplate":"%s | CQM","title":"Accueil"};

const appRootId = "__nuxt";

const appRootTag = "div";

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file:///home/camoes/Documents/20240316_fromzero/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getServerEntry = () => import('file:///home/camoes/Documents/20240316_fromzero/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRStyles = lazyCachedFunction(() => Promise.resolve().then(function () { return styles$1; }).then((r) => r.default || r));
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag}${` id="${appRootId}"` }>${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const spaTemplate = await Promise.resolve().then(function () { return _virtual__spaTemplate; }).then((r) => r.template).catch(() => "");
  const options = {
    manifest,
    renderToString: () => `<${appRootTag}${` id="${appRootId}"` }>${spaTemplate}</${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.modules = ssrContext.modules || /* @__PURE__ */ new Set();
    ssrContext.payload = {
      _errors: {},
      serverRendered: false,
      data: {},
      state: {}
    };
    ssrContext.config = {
      public: config.public,
      app: config.app
    };
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.json(\?.*)?$/ ;
const renderer = defineRenderHandler(async (event) => {
  const nitroApp = useNitroApp();
  const ssrError = event.path.startsWith("/__nuxt_error") ? getQuery$1(event) : null;
  if (ssrError && ssrError.statusCode) {
    ssrError.statusCode = parseInt(ssrError.statusCode);
  }
  if (ssrError && !("__unenv__" in event.node.req)) {
    throw createError({
      statusCode: 404,
      statusMessage: "Page Not Found: /__nuxt_error"
    });
  }
  const islandContext = void 0;
  let url = ssrError?.url || islandContext?.url || event.path;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url) && !islandContext;
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event._path = url;
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const head = createServerHead({
    plugins: unheadPlugins
  });
  const headEntryOptions = { mode: "server" };
  head.push(appHead, headEntryOptions);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: event.context.nuxt?.noSSR || routeOptions.ssr === false && !islandContext || (false),
    head,
    error: !!ssrError,
    nuxt: void 0,
    /* NuxtApp */
    payload: ssrError ? { error: ssrError } : {},
    _payloadReducers: {},
    islandContext
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch(async (error) => {
    if (ssrContext._renderResponse && error.message === "skipping render") {
      return {};
    }
    const _err = !ssrError && ssrContext.payload?.error || error;
    await ssrContext.nuxt?.hooks.callHook("app:error", _err);
    throw _err;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext, renderResult: _rendered });
  if (ssrContext._renderResponse) {
    return ssrContext._renderResponse;
  }
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const inlinedStyles = Boolean(islandContext) ? await renderInlineStyles(ssrContext.modules ?? ssrContext._registeredComponents ?? []) : [];
  const NO_SCRIPTS = routeOptions.experimentalNoScripts;
  const { styles, scripts } = getRequestDependencies(ssrContext, renderer.rendererContext);
  head.push({ style: inlinedStyles });
  head.push({
    link: Object.values(styles).map(
      (resource) => ({ rel: "stylesheet", href: renderer.rendererContext.buildAssetsURL(resource.file) })
    )
  }, headEntryOptions);
  if (!NO_SCRIPTS) {
    head.push({
      link: getPreloadLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      link: getPrefetchLinks(ssrContext, renderer.rendererContext)
    }, headEntryOptions);
    head.push({
      script: renderPayloadJsonScript({ id: "__NUXT_DATA__", ssrContext, data: ssrContext.payload }) 
    }, {
      ...headEntryOptions,
      // this should come before another end of body scripts
      tagPosition: "bodyClose",
      tagPriority: "high"
    });
  }
  if (!routeOptions.experimentalNoScripts) {
    head.push({
      script: Object.values(scripts).map((resource) => ({
        type: resource.module ? "module" : null,
        src: renderer.rendererContext.buildAssetsURL(resource.file),
        defer: resource.module ? null : true,
        crossorigin: ""
      }))
    }, headEntryOptions);
  }
  const { headTags, bodyTags, bodyTagsOpen, htmlAttrs, bodyAttrs } = await renderSSRHead(head);
  const htmlContext = {
    island: Boolean(islandContext),
    htmlAttrs: [htmlAttrs],
    head: normalizeChunks([headTags, ssrContext.styles]),
    bodyAttrs: [bodyAttrs],
    bodyPrepend: normalizeChunks([bodyTagsOpen, ssrContext.teleports?.body]),
    body: [_rendered.html],
    bodyAppend: [bodyTags]
  };
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: getResponseStatus(event),
    statusMessage: getResponseStatusText(event),
    headers: {
      "content-type": "text/html;charset=utf-8",
      "x-powered-by": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
async function renderInlineStyles(usedModules) {
  const styleMap = await getSSRStyles();
  const inlinedStyles = /* @__PURE__ */ new Set();
  for (const mod of usedModules) {
    if (mod in styleMap) {
      for (const style of await styleMap[mod]()) {
        inlinedStyles.add(style);
      }
    }
  }
  return Array.from(inlinedStyles).map((style) => ({ innerHTML: style }));
}
function renderPayloadResponse(ssrContext) {
  return {
    body: stringify(splitPayload(ssrContext).payload, ssrContext._payloadReducers) ,
    statusCode: getResponseStatus(ssrContext.event),
    statusMessage: getResponseStatusText(ssrContext.event),
    headers: {
      "content-type": "application/json;charset=utf-8" ,
      "x-powered-by": "Nuxt"
    }
  };
}
function renderPayloadJsonScript(opts) {
  const contents = opts.data ? stringify(opts.data, opts.ssrContext._payloadReducers) : "";
  const payload = {
    type: "application/json",
    id: opts.id,
    innerHTML: contents,
    "data-ssr": !(opts.ssrContext.noSSR)
  };
  if (opts.src) {
    payload["data-src"] = opts.src;
  }
  return [
    payload,
    {
      innerHTML: `window.__NUXT__={};window.__NUXT__.config=${uneval(opts.ssrContext.config)}`
    }
  ];
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: renderer
});

const styles = {};

const styles$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: styles
});

const template = "";

const _virtual__spaTemplate = /*#__PURE__*/Object.freeze({
  __proto__: null,
  template: template
});
//# sourceMappingURL=index.mjs.map
