import { d as useRequestHeaders } from '../server.mjs';
import { ref, resolveComponent, mergeProps, withCtx, createVNode, unref, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  setup(__props) {
    useRequestHeaders(["cookie"]);
    let items = ref([
      {
        src: "/images/home/carousel/1.jpg"
      },
      {
        src: "/images/home/carousel/2.jpg"
      },
      {
        src: "/images/home/carousel/3.jpg"
      }
    ]);
    let items_ = ref([
      {
        src: "/images/home/carousel/2.jpg"
      },
      {
        src: "/images/home/carousel/3.jpg"
      },
      {
        src: "/images/home/carousel/1.jpg"
      }
    ]);
    const metiers = ref([
      {
        icon: "mdi-palette-outline",
        title: "Graphisme",
        description: `Le m\xE9tier du graphisme consiste \xE0 cr\xE9er des visuels
                attrayants et efficaces pour transmettre des messages,
                en utilisant divers outils et techniques de conception
                graphique.`
      },
      {
        icon: "mdi-brush",
        title: "Dessin",
        description: `Le dessinateur cr\xE9e des illustrations pr\xE9cises et
                expressives pour divers supports, en utilisant des techniques
                de dessin traditionnelles ou num\xE9riques pour visualiser des
                id\xE9es et concepts.`
      },
      {
        icon: "mdi-multimedia",
        title: "Multim\xE9dia",
        description: `Le professionnel du multim\xE9dia con\xE7oit et produit des contenus
                interactifs, combinant textes, images, vid\xE9os et sons pour des
                applications  web, mobiles ou autres plateformes num\xE9riques.`
      },
      {
        icon: "mdi-account-music",
        title: "Musique",
        description: `Le musicien cr\xE9e, interpr\xE8te et enregistre des compositions
                musicales, explorant divers genres et styles pour captiver
                et \xE9mouvoir un public \xE0 travers son art auditif.`
      },
      {
        icon: "mdi-car-wrench",
        title: "M\xE9canique",
        description: `Le m\xE9canicien r\xE9pare, entretient et diagnostique les v\xE9hicules
                et les machines, utilisant ses comp\xE9tences techniques pour
                assurer leur bon fonctionnement et leur s\xE9curit\xE9`
      },
      {
        icon: "mdi-bag-personal",
        title: "Maroquerie",
        description: `Artisan du cuir confectionnant avec pr\xE9cision et \xE9l\xE9gance sacs,
                ceintures et objets de maroquinerie de qualit\xE9 sup\xE9rieure.`
      }
      //
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_carousel = resolveComponent("v-carousel");
      const _component_v_carousel_item = resolveComponent("v-carousel-item");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_img = resolveComponent("v-img");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-6 mb-0" }, _attrs))}><div><div style="${ssrRenderStyle({ "background-color": "white" })}"><div class="sub-header body-containt"><div class="new_info"><span class="new_info__new"> NEW </span><div class="px-3"> Restez connecter pour suivre nos actualit\xE9s 24/24 </div></div><div class="sub-header__item-2">`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              md: "5",
              cols: "0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "font-weight": "bolder", "font-size": "30px" })}"${_scopeId2}> Obtenez vos attestations en quelques clics, sans tracas ! </div>`);
                } else {
                  return [
                    createVNode("div", { style: { "font-weight": "bolder", "font-size": "30px" } }, " Obtenez vos attestations en quelques clics, sans tracas ! ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              md: "7",
              cols: "0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div style="${ssrRenderStyle({ "font-size": "25px", "height": "100%", "display": "flex", "align-items": "center" })}"${_scopeId2}><div${_scopeId2}> Une solution moderne pour les artisans : Attestation en ligne facile et rapide </div></div>`);
                } else {
                  return [
                    createVNode("div", { style: { "font-size": "25px", "height": "100%", "display": "flex", "align-items": "center" } }, [
                      createVNode("div", null, " Une solution moderne pour les artisans : Attestation en ligne facile et rapide ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                md: "5",
                cols: "0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "font-weight": "bolder", "font-size": "30px" } }, " Obtenez vos attestations en quelques clics, sans tracas ! ")
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "7",
                cols: "0"
              }, {
                default: withCtx(() => [
                  createVNode("div", { style: { "font-size": "25px", "height": "100%", "display": "flex", "align-items": "center" } }, [
                    createVNode("div", null, " Une solution moderne pour les artisans : Attestation en ligne facile et rapide ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div style="${ssrRenderStyle({ "background-color": "white" })}"><div class="header-img body-containt"><div class="header-img-grey"></div><div class="parent"><div class="header-img__images d-flex"><div class="header-img__images_i header-img__images_1"></div><div class="header-img__images_i header-img__images_2">`);
      _push(ssrRenderComponent(_component_v_carousel, {
        "show-arrows": false,
        cycle: "",
        "hide-delimiters": "",
        height: "60vh"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(items_), (item, i) => {
              _push2(ssrRenderComponent(_component_v_carousel_item, {
                key: i,
                src: item.src,
                cover: ""
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(items_), (item, i) => {
                return openBlock(), createBlock(_component_v_carousel_item, {
                  key: i,
                  src: item.src,
                  cover: ""
                }, null, 8, ["src"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="header-img__images_i header-img__images_3">`);
      _push(ssrRenderComponent(_component_v_carousel, {
        "show-arrows": false,
        cycle: "",
        "hide-delimiters": "",
        height: "60vh"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(items), (item, i) => {
              _push2(ssrRenderComponent(_component_v_carousel_item, {
                key: i,
                src: item.src,
                cover: ""
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (item, i) => {
                return openBlock(), createBlock(_component_v_carousel_item, {
                  key: i,
                  src: item.src,
                  cover: ""
                }, null, 8, ["src"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="child2"><div class="child2_item" style="${ssrRenderStyle({})}"><h1 style="${ssrRenderStyle({ "font-size": "1.5em", "font-family": "sans-serif" })}">Votre attestation en ligne :</h1><h2 style="${ssrRenderStyle({ "font-size": "1em" })}">la voie vers la reconnaissance professionnelle</h2>`);
      _push(ssrRenderComponent(_component_v_btn, {
        to: "/connexion",
        class: "btn btn-sm btn-primary btn-create",
        style: { "color": "white", "margin-right": "20px" },
        rounded: "xl",
        variant: "outlined"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Se connecter `);
          } else {
            return [
              createTextVNode(" Se connecter ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div><div style="${ssrRenderStyle({ "background-color": "#f5f5f5" })}"><div class="body-containt section-item-1">`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="pb-6"${_scopeId2}><h1${_scopeId2}>Innovez dans votre gestion administrative</h1><h2${_scopeId2}>Obtenez vos attestations en ligne d\xE8s aujourd&#39;hui !!!</h2></div>`);
                } else {
                  return [
                    createVNode("div", { class: "pb-6" }, [
                      createVNode("h1", null, "Innovez dans votre gestion administrative"),
                      createVNode("h2", null, "Obtenez vos attestations en ligne d\xE8s aujourd'hui !!!")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              cols: "12",
              md: "3"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                cols: "12",
                md: "9"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "pb-6" }, [
                    createVNode("h1", null, "Innovez dans votre gestion administrative"),
                    createVNode("h2", null, "Obtenez vos attestations en ligne d\xE8s aujourd'hui !!!")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                cols: "12",
                md: "3"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="section-item-1__container"><!--[-->`);
      ssrRenderList(unref(metiers), (metier, index) => {
        _push(`<div class="section-item-1__container_item">`);
        _push(ssrRenderComponent(_component_v_card, {
          style: { "border": "solid 1px grey", "height": "190px", "overflow": "hidden" },
          elevation: "0"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_card_title, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_icon, { color: "#f39c12" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(metier.icon)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(metier.icon), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(` ${ssrInterpolate(metier.title)}`);
                  } else {
                    return [
                      createVNode(_component_v_icon, { color: "#f39c12" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(metier.icon), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createTextVNode(" " + toDisplayString(metier.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(metier.description)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(metier.description), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_card_title, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_icon, { color: "#f39c12" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(metier.icon), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createTextVNode(" " + toDisplayString(metier.title), 1)
                  ]),
                  _: 2
                }, 1024),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(metier.description), 1)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div style="${ssrRenderStyle({ "background-color": "white" })}"><div class="body-containt section-item-2">`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              md: "4",
              cols: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_img, {
                    src: "/images/home/2149259373.jpg",
                    style: { "max-height": "300px", "width": "100%" }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_img, {
                      src: "/images/home/2149259373.jpg",
                      style: { "max-height": "300px", "width": "100%" }
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, {
              md: "8",
              cols: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><h1${_scopeId2}>Blog</h1> Dans le monde de l&#39;artisanat, la reconnaissance des comp\xE9tences est cruciale. Notre plateforme r\xE9volutionne la d\xE9livrance des attestations, simplifiant le processus pour les artisans et garantissant l&#39;authenticit\xE9 de leurs qualifications. En offrant une voie claire et transparente vers la certification, nous renfor\xE7ons la confiance des clients et valorisons le travail artisanal. D\xE9couvrez comment notre solution innovante \xE9l\xE8ve les normes de l&#39;industrie tout en pr\xE9servant les traditions artisanales. Avec des proc\xE9dures efficaces et une v\xE9rification rigoureuse, nous ouvrons de nouvelles opportunit\xE9s pour les artisans et promouvons l&#39;excellence dans tous les m\xE9tiers de l&#39;artisanat. Rejoignez nous pour soutenir et c\xE9l\xE9brer les artisans du monde entier, en assurant la reconnaissance qu&#39;ils m\xE9ritent pour leur d\xE9vouement et leur expertise. </div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("h1", null, "Blog"),
                      createTextVNode(" Dans le monde de l'artisanat, la reconnaissance des comp\xE9tences est cruciale. Notre plateforme r\xE9volutionne la d\xE9livrance des attestations, simplifiant le processus pour les artisans et garantissant l'authenticit\xE9 de leurs qualifications. En offrant une voie claire et transparente vers la certification, nous renfor\xE7ons la confiance des clients et valorisons le travail artisanal. D\xE9couvrez comment notre solution innovante \xE9l\xE8ve les normes de l'industrie tout en pr\xE9servant les traditions artisanales. Avec des proc\xE9dures efficaces et une v\xE9rification rigoureuse, nous ouvrons de nouvelles opportunit\xE9s pour les artisans et promouvons l'excellence dans tous les m\xE9tiers de l'artisanat. Rejoignez nous pour soutenir et c\xE9l\xE9brer les artisans du monde entier, en assurant la reconnaissance qu'ils m\xE9ritent pour leur d\xE9vouement et leur expertise. ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                md: "4",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_img, {
                    src: "/images/home/2149259373.jpg",
                    style: { "max-height": "300px", "width": "100%" }
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "8",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h1", null, "Blog"),
                    createTextVNode(" Dans le monde de l'artisanat, la reconnaissance des comp\xE9tences est cruciale. Notre plateforme r\xE9volutionne la d\xE9livrance des attestations, simplifiant le processus pour les artisans et garantissant l'authenticit\xE9 de leurs qualifications. En offrant une voie claire et transparente vers la certification, nous renfor\xE7ons la confiance des clients et valorisons le travail artisanal. D\xE9couvrez comment notre solution innovante \xE9l\xE8ve les normes de l'industrie tout en pr\xE9servant les traditions artisanales. Avec des proc\xE9dures efficaces et une v\xE9rification rigoureuse, nous ouvrons de nouvelles opportunit\xE9s pour les artisans et promouvons l'excellence dans tous les m\xE9tiers de l'artisanat. Rejoignez nous pour soutenir et c\xE9l\xE9brer les artisans du monde entier, en assurant la reconnaissance qu'ils m\xE9ritent pour leur d\xE9vouement et leur expertise. ")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div style="${ssrRenderStyle({ "background-color": "#dcf3ff" })}"><div class="body-containt footer_section"><div class="footer_cointainer"><div class="footer_cointainer_item_i">`);
      _push(ssrRenderComponent(_component_v_img, {
        class: "logo",
        src: "/images/logo.png",
        alt: "#"
      }, null, _parent));
      _push(`</div><div class="footer_cointainer_item_i"><div class="d-flex"><div>`);
      _push(ssrRenderComponent(_component_v_icon, { color: "#0171b0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-phone`);
          } else {
            return [
              createTextVNode("mdi-phone")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div> T\xE9l\xE9phone <br><a href="tel:+22940687884" style="${ssrRenderStyle({ "color": "inherit" })}">(+229) 40 68 78 84</a></div></div><div class="d-flex"><div>`);
      _push(ssrRenderComponent(_component_v_icon, { color: "#0171b0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-email`);
          } else {
            return [
              createTextVNode("mdi-email")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div> Adresse Email <br><a href="mailto:info@cmabenin.bj" style="${ssrRenderStyle({ "color": "inherit" })}">info@cmabenin.bj</a></div></div></div><div class="footer_cointainer_item_i"><div class="d-flex"><div>`);
      _push(ssrRenderComponent(_component_v_icon, { color: "#0171b0" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`mdi-map-marker`);
          } else {
            return [
              createTextVNode("mdi-map-marker")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div> Adresse <br> ZONE CEN-SAD/ Quatier Ahwanleko plage, \xE0 cot\xE9 de la commission de l&#39;UEMOA </div></div></div></div><div class="py-6" style="${ssrRenderStyle({ "text-align": "center", "font-size": "11px" })}"> Copyright \xA9 2024 -CMA-BENIN. Tous droits r\xE9serv\xE9s. Plateforme r\xE9alis\xE9e par TICS MASTER SARL. </div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-08e44477.mjs.map
