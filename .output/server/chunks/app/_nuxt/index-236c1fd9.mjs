import { d as useRequestHeaders, e as useHead, b as useFetch } from '../server.mjs';
import { withAsyncContext, resolveComponent, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRequestHeaders(["cookie"]);
    useHead({ title: "Configuration" });
    let items;
    let name = "configuration";
    ({ data: items } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/my-menu/sub?name=" + name, "$ZrgkpD2x1n")), __temp = await __temp, __restore(), __temp));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_row, { class: "mt-9 mx-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(items), (item, index) => {
              _push2(ssrRenderComponent(_component_v_col, {
                cols: "12",
                sm: "6",
                md: "4",
                key: index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_btn, {
                      height: "100",
                      color: "#093e73",
                      class: "text-white align-center btn-multiline",
                      "max-width": "250",
                      style: { "width": "100%", "text-align": "center" },
                      to: item.to
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-wrap"${_scopeId3}><small style="${ssrRenderStyle({ "white-space": "wrap !important" })}"${_scopeId3}>${ssrInterpolate(item.title)}</small></span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-wrap" }, [
                              createVNode("small", { style: { "white-space": "wrap !important" } }, toDisplayString(item.title), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_btn, {
                        height: "100",
                        color: "#093e73",
                        class: "text-white align-center btn-multiline",
                        "max-width": "250",
                        style: { "width": "100%", "text-align": "center" },
                        to: item.to
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-wrap" }, [
                            createVNode("small", { style: { "white-space": "wrap !important" } }, toDisplayString(item.title), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, index) => {
                return openBlock(), createBlock(_component_v_col, {
                  cols: "12",
                  sm: "6",
                  md: "4",
                  key: index
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      height: "100",
                      color: "#093e73",
                      class: "text-white align-center btn-multiline",
                      "max-width": "250",
                      style: { "width": "100%", "text-align": "center" },
                      to: item.to
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-wrap" }, [
                          createVNode("small", { style: { "white-space": "wrap !important" } }, toDisplayString(item.title), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tableau-de-bord/configuration/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-236c1fd9.mjs.map
