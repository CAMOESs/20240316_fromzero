import { d as useRequestHeaders, g as useDisplay, b as useFetch, h as __nuxt_component_0 } from '../server.mjs';
import { ref, computed, withAsyncContext, resolveComponent, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderTeleport, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "tableau-de-bord",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRequestHeaders(["cookie"]);
    let { name } = useDisplay();
    let drawer = ref(true);
    let items = ref([]);
    const permanent = computed(() => {
      return name.value !== "xs";
    });
    ({ data: items } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/my-menu", "$5sTT2mdPi9")), __temp = await __temp, __restore(), __temp));
    const isLoaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(isLoaded)) {
        ssrRenderTeleport(_push, (_push2) => {
          _push2(ssrRenderComponent(_component_v_btn, {
            class: "btn_drawer_styleus",
            "prepend-icon": "mdi-menu",
            depressed: "",
            text: "",
            variant: "plain",
            onClick: ($event) => isRef(drawer) ? drawer.value = !unref(drawer) : drawer = !unref(drawer)
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<span style="${ssrRenderStyle({ "color": "white" })}" class="d-none d-xs-none d-sm-block btn-block"${_scopeId}>\xA0\xA0</span>`);
              } else {
                return [
                  createVNode("span", {
                    style: { "color": "white" },
                    class: "d-none d-xs-none d-sm-block btn-block"
                  }, "\xA0\xA0")
                ];
              }
            }),
            _: 1
          }, _parent));
        }, "#teleport-target", false, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_navigation_drawer, {
        modelValue: unref(drawer),
        "onUpdate:modelValue": ($event) => isRef(drawer) ? drawer.value = $event : drawer = $event,
        style: { "background-color": "white", "margin-top": "60px", "color": "black" },
        permanent: unref(permanent),
        location: "left",
        theme: "dark",
        elevation: "2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_list, { nav: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(items), (element, index) => {
                    _push3(ssrRenderComponent(_component_v_list_item, {
                      key: index,
                      "prepend-icon": element.icon,
                      to: element.to
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(element.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(element.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (element, index) => {
                      return openBlock(), createBlock(_component_v_list_item, {
                        key: index,
                        "prepend-icon": element.icon,
                        to: element.to
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(element.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["prepend-icon", "to"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_list, { nav: "" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (element, index) => {
                    return openBlock(), createBlock(_component_v_list_item, {
                      key: index,
                      "prepend-icon": element.icon,
                      to: element.to
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(element.title), 1)
                      ]),
                      _: 2
                    }, 1032, ["prepend-icon", "to"]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tableau-de-bord.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=tableau-de-bord-24dc4550.mjs.map
