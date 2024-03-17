import { ref, withAsyncContext, resolveComponent, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { b as useFetch } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../../.get.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'colortranslator';
import 'moment';

const _sfc_main = {
  __name: "maintenance",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let maintenance = ref();
    maintenance.value = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/systeme/maintenance", "$vMFbBUMewa")), __temp = await __temp, __restore(), __temp).data.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="header_"><div class="soso"><div class="line"><h1>Site en Maintenance</h1></div></div><br>`);
      _push(ssrRenderComponent(_component_v_row, { class: "ma-0 pa-0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "3",
              style: {},
              class: "ma-0 pa-1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "2",
              style: { "background-color": "rgb(0,104,40)" },
              class: "ma-0 pa-1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "2",
              style: { "background-color": "rgb(255,190,0)" },
              class: "ma-0 pa-1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "2",
              style: { "background-color": "rgb(235,0,0)" },
              class: "ma-0 pa-1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "3",
              style: {},
              class: "ma-0 pa-1"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "3",
                style: {},
                class: "ma-0 pa-1"
              }),
              createVNode(_component_v_col, {
                cols: "2",
                style: { "background-color": "rgb(0,104,40)" },
                class: "ma-0 pa-1"
              }),
              createVNode(_component_v_col, {
                cols: "2",
                style: { "background-color": "rgb(255,190,0)" },
                class: "ma-0 pa-1"
              }),
              createVNode(_component_v_col, {
                cols: "2",
                style: { "background-color": "rgb(235,0,0)" },
                class: "ma-0 pa-1"
              }),
              createVNode(_component_v_col, {
                cols: "3",
                style: {},
                class: "ma-0 pa-1"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<br><p>${ssrInterpolate(unref(maintenance).message)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/maintenance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=maintenance-80f0ad9a.mjs.map
