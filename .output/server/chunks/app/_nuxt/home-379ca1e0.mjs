import { useSSRContext, resolveComponent, withCtx, renderSlot, ref, unref, createTextVNode, createVNode, openBlock, createBlock } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr } from 'vue/server-renderer';
import { a as useSession } from '../server.mjs';
import { _ as _imports_0 } from './logo-281ab804.mjs';
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
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const __default__ = {
  name: "TheHeader"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const { status } = useSession();
    let access_dashbord = ref(false);
    if (status) {
      if (useSession().data.value && useSession().data.value.user && useSession().data.value.user.is_change_password) {
        access_dashbord.value = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_layout = resolveComponent("v-layout");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_layout, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar, {
              elevation: "4",
              id: "nav",
              style: { "height": "80px" }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="/"${_scopeId2}><img class="logo"${ssrRenderAttr("src", _imports_0)} alt="#"${_scopeId2}></a>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  if (!unref(access_dashbord)) {
                    _push3(ssrRenderComponent(_component_v_btn, {
                      to: "/connexion",
                      class: "btn btn-sm btn-primary btn-create",
                      style: { "color": "black", "margin-right": "20px" },
                      rounded: "xl",
                      variant: "outlined"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Se connecter `);
                        } else {
                          return [
                            createTextVNode(" Se connecter ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_v_btn, {
                      to: "/tableau-de-bord",
                      class: "btn btn-sm btn-primary btn-create",
                      style: { "background-color": "white", "color": "#093e73", "margin-right": "20px" }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Tableau de bord `);
                        } else {
                          return [
                            createTextVNode(" Tableau de bord ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    createVNode("a", { href: "/" }, [
                      createVNode("img", {
                        class: "logo",
                        src: _imports_0,
                        alt: "#"
                      })
                    ]),
                    createVNode(_component_v_spacer),
                    !unref(access_dashbord) ? (openBlock(), createBlock(_component_v_btn, {
                      key: 0,
                      to: "/connexion",
                      class: "btn btn-sm btn-primary btn-create",
                      style: { "color": "black", "margin-right": "20px" },
                      rounded: "xl",
                      variant: "outlined"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Se connecter ")
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_v_btn, {
                      key: 1,
                      to: "/tableau-de-bord",
                      class: "btn btn-sm btn-primary btn-create",
                      style: { "background-color": "white", "color": "#093e73", "margin-right": "20px" }
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Tableau de bord ")
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar, {
                elevation: "4",
                id: "nav",
                style: { "height": "80px" }
              }, {
                default: withCtx(() => [
                  createVNode("a", { href: "/" }, [
                    createVNode("img", {
                      class: "logo",
                      src: _imports_0,
                      alt: "#"
                    })
                  ]),
                  createVNode(_component_v_spacer),
                  !unref(access_dashbord) ? (openBlock(), createBlock(_component_v_btn, {
                    key: 0,
                    to: "/connexion",
                    class: "btn btn-sm btn-primary btn-create",
                    style: { "color": "black", "margin-right": "20px" },
                    rounded: "xl",
                    variant: "outlined"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Se connecter ")
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_v_btn, {
                    key: 1,
                    to: "/tableau-de-bord",
                    class: "btn btn-sm btn-primary btn-create",
                    style: { "background-color": "white", "color": "#093e73", "margin-right": "20px" }
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Tableau de bord ")
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Accueil/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheHeader = _sfc_main$1;
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(TheHeader, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_v_container, {
        fluid: "",
        style: { "padding-top": "60px", "padding-left": "0 !important", "padding-right": "0 !important", "padding-bottom": "0", "margin-bottom": "0" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=home-379ca1e0.mjs.map
