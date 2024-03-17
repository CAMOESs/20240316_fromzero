import { k as _export_sfc, g as useDisplay, a as useSession, f as useNuxtApp, _ as __nuxt_component_0$2 } from '../server.mjs';
import { ref, computed, resolveComponent, withCtx, createVNode, unref, isRef, mergeProps, createTextVNode, toDisplayString, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
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

const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { $auth } = useNuxtApp();
    let { name } = useDisplay();
    let menu = ref(false);
    computed(() => {
      return name.value !== "xs";
    });
    const { signOut } = useSession();
    function get_roles(txt) {
      if (!txt)
        return "()";
      return `(${txt.split("#").join(", ")})`;
    }
    const logout = async function() {
      await signOut({ redirect: "/" });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_layout = resolveComponent("v-layout");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_app = resolveComponent("v-app");
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-69d45604>`);
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
                  _push3(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("src", _imports_0)} class="logo" alt="#" data-v-69d45604${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            src: _imports_0,
                            class: "logo",
                            alt: "#"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div id="teleport-target" data-v-69d45604${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_menu, {
                    modelValue: unref(menu),
                    "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : menu = $event,
                    "close-on-content-click": false,
                    location: "bottom"
                  }, {
                    activator: withCtx(({ props }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, mergeProps({
                          class: "white--text mr-4",
                          variant: "outlined"
                        }, props), {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<span class="d-xs-block" style="${ssrRenderStyle({ "color": "black" })}" data-v-69d45604${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_icon, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-account-box`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-account-box")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</span>`);
                            } else {
                              return [
                                createVNode("span", {
                                  class: "d-xs-block",
                                  style: { "color": "black" }
                                }, [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-account-box")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, mergeProps({
                            class: "white--text mr-4",
                            variant: "outlined"
                          }, props), {
                            default: withCtx(() => [
                              createVNode("span", {
                                class: "d-xs-block",
                                style: { "color": "black" }
                              }, [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-account-box")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 2
                          }, 1040)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_card, { "min-width": "300" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div style="${ssrRenderStyle({ "text-align": "center" })}" data-v-69d45604${_scopeId4}><h1 data-v-69d45604${_scopeId4}>${ssrInterpolate(unref($auth)().username)}</h1><p data-v-69d45604${_scopeId4}>${ssrInterpolate(unref($auth)().email)}</p><p style="${ssrRenderStyle({ "font-size": "10px" })}" data-v-69d45604${_scopeId4}>${ssrInterpolate(get_roles(unref($auth)().roles))}</p></div>`);
                              _push5(ssrRenderComponent(_component_v_divider, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_list, {
                                density: "compact",
                                nav: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      style: { "color": "#093e73" },
                                      "prepend-icon": "mdi-account-edit",
                                      to: "/tableau-de-bord/mon-compte",
                                      title: "Mon compte",
                                      value: "Mon compte"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      style: { "color": "red" },
                                      "prepend-icon": "mdi-logout",
                                      onClick: logout,
                                      title: "D\xE9connexion",
                                      value: "D\xE9connexion"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item, {
                                        style: { "color": "#093e73" },
                                        "prepend-icon": "mdi-account-edit",
                                        to: "/tableau-de-bord/mon-compte",
                                        title: "Mon compte",
                                        value: "Mon compte"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        style: { "color": "red" },
                                        "prepend-icon": "mdi-logout",
                                        onClick: logout,
                                        title: "D\xE9connexion",
                                        value: "D\xE9connexion"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { style: { "text-align": "center" } }, [
                                  createVNode("h1", null, toDisplayString(unref($auth)().username), 1),
                                  createVNode("p", null, toDisplayString(unref($auth)().email), 1),
                                  createVNode("p", { style: { "font-size": "10px" } }, toDisplayString(get_roles(unref($auth)().roles)), 1)
                                ]),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_list, {
                                  density: "compact",
                                  nav: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      style: { "color": "#093e73" },
                                      "prepend-icon": "mdi-account-edit",
                                      to: "/tableau-de-bord/mon-compte",
                                      title: "Mon compte",
                                      value: "Mon compte"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      style: { "color": "red" },
                                      "prepend-icon": "mdi-logout",
                                      onClick: logout,
                                      title: "D\xE9connexion",
                                      value: "D\xE9connexion"
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_card, { "min-width": "300" }, {
                            default: withCtx(() => [
                              createVNode("div", { style: { "text-align": "center" } }, [
                                createVNode("h1", null, toDisplayString(unref($auth)().username), 1),
                                createVNode("p", null, toDisplayString(unref($auth)().email), 1),
                                createVNode("p", { style: { "font-size": "10px" } }, toDisplayString(get_roles(unref($auth)().roles)), 1)
                              ]),
                              createVNode(_component_v_divider),
                              createVNode(_component_v_list, {
                                density: "compact",
                                nav: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    style: { "color": "#093e73" },
                                    "prepend-icon": "mdi-account-edit",
                                    to: "/tableau-de-bord/mon-compte",
                                    title: "Mon compte",
                                    value: "Mon compte"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    style: { "color": "red" },
                                    "prepend-icon": "mdi-logout",
                                    onClick: logout,
                                    title: "D\xE9connexion",
                                    value: "D\xE9connexion"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_NuxtLink, { to: "/" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: _imports_0,
                          class: "logo",
                          alt: "#"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { id: "teleport-target" }),
                    createVNode(_component_v_spacer),
                    createVNode(_component_v_menu, {
                      modelValue: unref(menu),
                      "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : menu = $event,
                      "close-on-content-click": false,
                      location: "bottom"
                    }, {
                      activator: withCtx(({ props }) => [
                        createVNode(_component_v_btn, mergeProps({
                          class: "white--text mr-4",
                          variant: "outlined"
                        }, props), {
                          default: withCtx(() => [
                            createVNode("span", {
                              class: "d-xs-block",
                              style: { "color": "black" }
                            }, [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-account-box")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 2
                        }, 1040)
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_v_card, { "min-width": "300" }, {
                          default: withCtx(() => [
                            createVNode("div", { style: { "text-align": "center" } }, [
                              createVNode("h1", null, toDisplayString(unref($auth)().username), 1),
                              createVNode("p", null, toDisplayString(unref($auth)().email), 1),
                              createVNode("p", { style: { "font-size": "10px" } }, toDisplayString(get_roles(unref($auth)().roles)), 1)
                            ]),
                            createVNode(_component_v_divider),
                            createVNode(_component_v_list, {
                              density: "compact",
                              nav: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  style: { "color": "#093e73" },
                                  "prepend-icon": "mdi-account-edit",
                                  to: "/tableau-de-bord/mon-compte",
                                  title: "Mon compte",
                                  value: "Mon compte"
                                }),
                                createVNode(_component_v_list_item, {
                                  style: { "color": "red" },
                                  "prepend-icon": "mdi-logout",
                                  onClick: logout,
                                  title: "D\xE9connexion",
                                  value: "D\xE9connexion"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_app, { dark: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_main, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_container, {
                          fluid: "",
                          class: "v_container_styleus"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                renderSlot(_ctx.$slots, "default", {}, void 0, true)
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_container, {
                            fluid: "",
                            class: "v_container_styleus"
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "default", {}, void 0, true)
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_main, { style: { "height": "250px" } }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_main, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, {
                          fluid: "",
                          class: "v_container_styleus"
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default", {}, void 0, true)
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    }),
                    createVNode(_component_v_main, { style: { "height": "250px" } })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar, {
                elevation: "4",
                id: "nav",
                style: { "height": "80px" }
              }, {
                default: withCtx(() => [
                  createVNode(_component_NuxtLink, { to: "/" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _imports_0,
                        class: "logo",
                        alt: "#"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { id: "teleport-target" }),
                  createVNode(_component_v_spacer),
                  createVNode(_component_v_menu, {
                    modelValue: unref(menu),
                    "onUpdate:modelValue": ($event) => isRef(menu) ? menu.value = $event : menu = $event,
                    "close-on-content-click": false,
                    location: "bottom"
                  }, {
                    activator: withCtx(({ props }) => [
                      createVNode(_component_v_btn, mergeProps({
                        class: "white--text mr-4",
                        variant: "outlined"
                      }, props), {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: "d-xs-block",
                            style: { "color": "black" }
                          }, [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-account-box")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 2
                      }, 1040)
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_v_card, { "min-width": "300" }, {
                        default: withCtx(() => [
                          createVNode("div", { style: { "text-align": "center" } }, [
                            createVNode("h1", null, toDisplayString(unref($auth)().username), 1),
                            createVNode("p", null, toDisplayString(unref($auth)().email), 1),
                            createVNode("p", { style: { "font-size": "10px" } }, toDisplayString(get_roles(unref($auth)().roles)), 1)
                          ]),
                          createVNode(_component_v_divider),
                          createVNode(_component_v_list, {
                            density: "compact",
                            nav: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                style: { "color": "#093e73" },
                                "prepend-icon": "mdi-account-edit",
                                to: "/tableau-de-bord/mon-compte",
                                title: "Mon compte",
                                value: "Mon compte"
                              }),
                              createVNode(_component_v_list_item, {
                                style: { "color": "red" },
                                "prepend-icon": "mdi-logout",
                                onClick: logout,
                                title: "D\xE9connexion",
                                value: "D\xE9connexion"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_app, { dark: "" }, {
                default: withCtx(() => [
                  createVNode(_component_v_main, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, {
                        fluid: "",
                        class: "v_container_styleus"
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default", {}, void 0, true)
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  }),
                  createVNode(_component_v_main, { style: { "height": "250px" } })
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69d45604"]]);

export { _default as default };
//# sourceMappingURL=default-6cdb1eea.mjs.map
