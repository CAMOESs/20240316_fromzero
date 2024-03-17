import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_divider = resolveComponent("v-divider");
      _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div${_scopeId3}><div class="d-flex flex-column" style="${ssrRenderStyle({ "padding-top": "2em", "justify-content": "center" })}"${_scopeId3}><div style="${ssrRenderStyle({ "font-size": "24px", "color": "red", "font-weight": "bold", "margin-left": "2em", "margin-right": "4em", "width": "90%" })}" text${_scopeId3}><span${_scopeId3}>Pr\xE9requis n\xE9cessaires \xE0 l&#39;utilisation de la plateforme</span></div><ul${_scopeId3}><ol style="${ssrRenderStyle({ "text-align": "justify", "margin-left": "2em" })}" class="mt-2"${_scopeId3}><span style="${ssrRenderStyle({ "color": "rgb(0, 131, 143)" })}"${_scopeId3}><strong${_scopeId3}></strong></span>`);
                        _push4(ssrRenderComponent(_component_v_icon, {
                          style: { "color": "rgb(0, 131, 143)" },
                          class: "mr-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-comment-text-multiple-outline`);
                            } else {
                              return [
                                createTextVNode("mdi-comment-text-multiple-outline")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Savoir Lire </ol><ol style="${ssrRenderStyle({ "text-align": "justify", "margin-left": "2em" })}" class="mt-2"${_scopeId3}><span style="${ssrRenderStyle({ "color": "rgb(0, 131, 143)" })}"${_scopeId3}><strong${_scopeId3}></strong></span>`);
                        _push4(ssrRenderComponent(_component_v_icon, {
                          style: { "color": "rgb(0, 131, 143)" },
                          class: "mr-4"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-pencil`);
                            } else {
                              return [
                                createTextVNode("mdi-pencil")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Savoir \xE9crire </ol><br${_scopeId3}></ul><div class="container" style="${ssrRenderStyle({ "justify-content": "justify", "margin-left": "2em", "margin-right": "4em", "width": "90%", "background-color": "#d1ecf1 !important" })}"${_scopeId3}><div style="${ssrRenderStyle({ "margin-bottom": "4px" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_icon, { style: { "color": "black", "margin-right": "2px" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-check-all`);
                            } else {
                              return [
                                createTextVNode("mdi-check-all")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Sans ces deux pr\xE9requis, vous aurez certainement besoin d\u2019une assistance pour l\u2019utilisation de la plateforme. </div>`);
                        _push4(ssrRenderComponent(_component_v_divider, null, null, _parent4, _scopeId3));
                        _push4(`<div class=""${_scopeId3}><div style="${ssrRenderStyle({ "color": "black", "text-align": "justify" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_icon, { style: { "color": "black", "margin-right": "2px", "margin-bottom": "6px" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-check-all`);
                            } else {
                              return [
                                createTextVNode("mdi-check-all")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Aucune connaissance/comp\xE9tence en informatique, quoique cela puisse \xEAtre un atout, n&#39;est n\xE9cessaire pour l&#39;utilisation de la plateforme. </div><br${_scopeId3}><div style="${ssrRenderStyle({ "text-align": "justify" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_icon, { style: { "color": "black", "margin-right": "2px", "margin-bottom": "6px" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-check-all`);
                            } else {
                              return [
                                createTextVNode("mdi-check-all")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Les menus sont intuitifs et laissez agir votre bon sens : Chaque fois que cela est n\xE9cessaire vous disposez d&#39;une aide contextuelle avec un &quot;LISEZ-MOI SVP&quot; que nous vous conseillons fortement de bien lire avant de continuer. </div><br${_scopeId3}><div style="${ssrRenderStyle({ "color": "red", "text-align": "justify" })}"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_icon, { style: { "color": "red", "margin-right": "2px" } }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`mdi-check-all`);
                            } else {
                              return [
                                createTextVNode("mdi-check-all")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Si vous \xEAtes un \xE9tablissement, la plus grave erreur \xE0 commettre pour ne pas r\xE9ussir le renseignement de vos donn\xE9es est de confier la t\xE2che \xE0 un &quot;informaticien&quot; d\xE9pourvu de connaissances en administration scolaire ! Les diff\xE9rentes t\xE2ches ont besoin des connaissances du syst\xE8me scolaire, pas de connaissances en informatique ! </div></div></div><br${_scopeId3}></div></div>`);
                      } else {
                        return [
                          createVNode("div", null, [
                            createVNode("div", {
                              class: "d-flex flex-column",
                              style: { "padding-top": "2em", "justify-content": "center" }
                            }, [
                              createVNode("div", {
                                style: { "font-size": "24px", "color": "red", "font-weight": "bold", "margin-left": "2em", "margin-right": "4em", "width": "90%" },
                                text: ""
                              }, [
                                createVNode("span", null, "Pr\xE9requis n\xE9cessaires \xE0 l'utilisation de la plateforme")
                              ]),
                              createVNode("ul", null, [
                                createVNode("ol", {
                                  style: { "text-align": "justify", "margin-left": "2em" },
                                  class: "mt-2"
                                }, [
                                  createVNode("span", { style: { "color": "rgb(0, 131, 143)" } }, [
                                    createVNode("strong")
                                  ]),
                                  createVNode(_component_v_icon, {
                                    style: { "color": "rgb(0, 131, 143)" },
                                    class: "mr-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-comment-text-multiple-outline")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Savoir Lire ")
                                ]),
                                createVNode("ol", {
                                  style: { "text-align": "justify", "margin-left": "2em" },
                                  class: "mt-2"
                                }, [
                                  createVNode("span", { style: { "color": "rgb(0, 131, 143)" } }, [
                                    createVNode("strong")
                                  ]),
                                  createVNode(_component_v_icon, {
                                    style: { "color": "rgb(0, 131, 143)" },
                                    class: "mr-4"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-pencil")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Savoir \xE9crire ")
                                ]),
                                createVNode("br")
                              ]),
                              createVNode("div", {
                                class: "container",
                                style: { "justify-content": "justify", "margin-left": "2em", "margin-right": "4em", "width": "90%", "background-color": "#d1ecf1 !important" }
                              }, [
                                createVNode("div", { style: { "margin-bottom": "4px" } }, [
                                  createVNode(_component_v_icon, { style: { "color": "black", "margin-right": "2px" } }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-check-all")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Sans ces deux pr\xE9requis, vous aurez certainement besoin d\u2019une assistance pour l\u2019utilisation de la plateforme. ")
                                ]),
                                createVNode(_component_v_divider),
                                createVNode("div", { class: "" }, [
                                  createVNode("div", { style: { "color": "black", "text-align": "justify" } }, [
                                    createVNode(_component_v_icon, { style: { "color": "black", "margin-right": "2px", "margin-bottom": "6px" } }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-check-all")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(" Aucune connaissance/comp\xE9tence en informatique, quoique cela puisse \xEAtre un atout, n'est n\xE9cessaire pour l'utilisation de la plateforme. ")
                                  ]),
                                  createVNode("br"),
                                  createVNode("div", { style: { "text-align": "justify" } }, [
                                    createVNode(_component_v_icon, { style: { "color": "black", "margin-right": "2px", "margin-bottom": "6px" } }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-check-all")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(` Les menus sont intuitifs et laissez agir votre bon sens : Chaque fois que cela est n\xE9cessaire vous disposez d'une aide contextuelle avec un "LISEZ-MOI SVP" que nous vous conseillons fortement de bien lire avant de continuer. `)
                                  ]),
                                  createVNode("br"),
                                  createVNode("div", { style: { "color": "red", "text-align": "justify" } }, [
                                    createVNode(_component_v_icon, { style: { "color": "red", "margin-right": "2px" } }, {
                                      default: withCtx(() => [
                                        createTextVNode("mdi-check-all")
                                      ]),
                                      _: 1
                                    }),
                                    createTextVNode(' Si vous \xEAtes un \xE9tablissement, la plus grave erreur \xE0 commettre pour ne pas r\xE9ussir le renseignement de vos donn\xE9es est de confier la t\xE2che \xE0 un "informaticien" d\xE9pourvu de connaissances en administration scolaire ! Les diff\xE9rentes t\xE2ches ont besoin des connaissances du syst\xE8me scolaire, pas de connaissances en informatique ! ')
                                  ])
                                ])
                              ]),
                              createVNode("br")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode("div", null, [
                          createVNode("div", {
                            class: "d-flex flex-column",
                            style: { "padding-top": "2em", "justify-content": "center" }
                          }, [
                            createVNode("div", {
                              style: { "font-size": "24px", "color": "red", "font-weight": "bold", "margin-left": "2em", "margin-right": "4em", "width": "90%" },
                              text: ""
                            }, [
                              createVNode("span", null, "Pr\xE9requis n\xE9cessaires \xE0 l'utilisation de la plateforme")
                            ]),
                            createVNode("ul", null, [
                              createVNode("ol", {
                                style: { "text-align": "justify", "margin-left": "2em" },
                                class: "mt-2"
                              }, [
                                createVNode("span", { style: { "color": "rgb(0, 131, 143)" } }, [
                                  createVNode("strong")
                                ]),
                                createVNode(_component_v_icon, {
                                  style: { "color": "rgb(0, 131, 143)" },
                                  class: "mr-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-comment-text-multiple-outline")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Savoir Lire ")
                              ]),
                              createVNode("ol", {
                                style: { "text-align": "justify", "margin-left": "2em" },
                                class: "mt-2"
                              }, [
                                createVNode("span", { style: { "color": "rgb(0, 131, 143)" } }, [
                                  createVNode("strong")
                                ]),
                                createVNode(_component_v_icon, {
                                  style: { "color": "rgb(0, 131, 143)" },
                                  class: "mr-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-pencil")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Savoir \xE9crire ")
                              ]),
                              createVNode("br")
                            ]),
                            createVNode("div", {
                              class: "container",
                              style: { "justify-content": "justify", "margin-left": "2em", "margin-right": "4em", "width": "90%", "background-color": "#d1ecf1 !important" }
                            }, [
                              createVNode("div", { style: { "margin-bottom": "4px" } }, [
                                createVNode(_component_v_icon, { style: { "color": "black", "margin-right": "2px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-check-all")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Sans ces deux pr\xE9requis, vous aurez certainement besoin d\u2019une assistance pour l\u2019utilisation de la plateforme. ")
                              ]),
                              createVNode(_component_v_divider),
                              createVNode("div", { class: "" }, [
                                createVNode("div", { style: { "color": "black", "text-align": "justify" } }, [
                                  createVNode(_component_v_icon, { style: { "color": "black", "margin-right": "2px", "margin-bottom": "6px" } }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-check-all")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" Aucune connaissance/comp\xE9tence en informatique, quoique cela puisse \xEAtre un atout, n'est n\xE9cessaire pour l'utilisation de la plateforme. ")
                                ]),
                                createVNode("br"),
                                createVNode("div", { style: { "text-align": "justify" } }, [
                                  createVNode(_component_v_icon, { style: { "color": "black", "margin-right": "2px", "margin-bottom": "6px" } }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-check-all")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(` Les menus sont intuitifs et laissez agir votre bon sens : Chaque fois que cela est n\xE9cessaire vous disposez d'une aide contextuelle avec un "LISEZ-MOI SVP" que nous vous conseillons fortement de bien lire avant de continuer. `)
                                ]),
                                createVNode("br"),
                                createVNode("div", { style: { "color": "red", "text-align": "justify" } }, [
                                  createVNode(_component_v_icon, { style: { "color": "red", "margin-right": "2px" } }, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-check-all")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(' Si vous \xEAtes un \xE9tablissement, la plus grave erreur \xE0 commettre pour ne pas r\xE9ussir le renseignement de vos donn\xE9es est de confier la t\xE2che \xE0 un "informaticien" d\xE9pourvu de connaissances en administration scolaire ! Les diff\xE9rentes t\xE2ches ont besoin des connaissances du syst\xE8me scolaire, pas de connaissances en informatique ! ')
                                ])
                              ])
                            ]),
                            createVNode("br")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode("div", null, [
                        createVNode("div", {
                          class: "d-flex flex-column",
                          style: { "padding-top": "2em", "justify-content": "center" }
                        }, [
                          createVNode("div", {
                            style: { "font-size": "24px", "color": "red", "font-weight": "bold", "margin-left": "2em", "margin-right": "4em", "width": "90%" },
                            text: ""
                          }, [
                            createVNode("span", null, "Pr\xE9requis n\xE9cessaires \xE0 l'utilisation de la plateforme")
                          ]),
                          createVNode("ul", null, [
                            createVNode("ol", {
                              style: { "text-align": "justify", "margin-left": "2em" },
                              class: "mt-2"
                            }, [
                              createVNode("span", { style: { "color": "rgb(0, 131, 143)" } }, [
                                createVNode("strong")
                              ]),
                              createVNode(_component_v_icon, {
                                style: { "color": "rgb(0, 131, 143)" },
                                class: "mr-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-comment-text-multiple-outline")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Savoir Lire ")
                            ]),
                            createVNode("ol", {
                              style: { "text-align": "justify", "margin-left": "2em" },
                              class: "mt-2"
                            }, [
                              createVNode("span", { style: { "color": "rgb(0, 131, 143)" } }, [
                                createVNode("strong")
                              ]),
                              createVNode(_component_v_icon, {
                                style: { "color": "rgb(0, 131, 143)" },
                                class: "mr-4"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-pencil")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Savoir \xE9crire ")
                            ]),
                            createVNode("br")
                          ]),
                          createVNode("div", {
                            class: "container",
                            style: { "justify-content": "justify", "margin-left": "2em", "margin-right": "4em", "width": "90%", "background-color": "#d1ecf1 !important" }
                          }, [
                            createVNode("div", { style: { "margin-bottom": "4px" } }, [
                              createVNode(_component_v_icon, { style: { "color": "black", "margin-right": "2px" } }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-check-all")
                                ]),
                                _: 1
                              }),
                              createTextVNode(" Sans ces deux pr\xE9requis, vous aurez certainement besoin d\u2019une assistance pour l\u2019utilisation de la plateforme. ")
                            ]),
                            createVNode(_component_v_divider),
                            createVNode("div", { class: "" }, [
                              createVNode("div", { style: { "color": "black", "text-align": "justify" } }, [
                                createVNode(_component_v_icon, { style: { "color": "black", "margin-right": "2px", "margin-bottom": "6px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-check-all")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(" Aucune connaissance/comp\xE9tence en informatique, quoique cela puisse \xEAtre un atout, n'est n\xE9cessaire pour l'utilisation de la plateforme. ")
                              ]),
                              createVNode("br"),
                              createVNode("div", { style: { "text-align": "justify" } }, [
                                createVNode(_component_v_icon, { style: { "color": "black", "margin-right": "2px", "margin-bottom": "6px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-check-all")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(` Les menus sont intuitifs et laissez agir votre bon sens : Chaque fois que cela est n\xE9cessaire vous disposez d'une aide contextuelle avec un "LISEZ-MOI SVP" que nous vous conseillons fortement de bien lire avant de continuer. `)
                              ]),
                              createVNode("br"),
                              createVNode("div", { style: { "color": "red", "text-align": "justify" } }, [
                                createVNode(_component_v_icon, { style: { "color": "red", "margin-right": "2px" } }, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-check-all")
                                  ]),
                                  _: 1
                                }),
                                createTextVNode(' Si vous \xEAtes un \xE9tablissement, la plus grave erreur \xE0 commettre pour ne pas r\xE9ussir le renseignement de vos donn\xE9es est de confier la t\xE2che \xE0 un "informaticien" d\xE9pourvu de connaissances en administration scolaire ! Les diff\xE9rentes t\xE2ches ont besoin des connaissances du syst\xE8me scolaire, pas de connaissances en informatique ! ')
                              ])
                            ])
                          ]),
                          createVNode("br")
                        ])
                      ])
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
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tableau-de-bord/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-7d13d029.mjs.map
