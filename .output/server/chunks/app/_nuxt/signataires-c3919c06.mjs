import { f as useNuxtApp, b as useFetch } from '../server.mjs';
import { ref, withAsyncContext, resolveComponent, withCtx, unref, createTextVNode, createVNode, isRef, withDirectives, vShow, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  __name: "signataires",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $caxios } = useNuxtApp();
    let item = ref({});
    let items = ref({});
    ref(null);
    let formData = ref({});
    ref(1);
    async function handleImageUpload(event) {
      event.target.files[0];
      items.value[`${event.target.id}`].sign = event.target.files[0];
    }
    let msg = ref("");
    let item_final = ref({});
    let convert_nbr_sign = ref(0);
    const datajson = ref([]);
    datajson.value = ([__temp, __restore] = withAsyncContext(() => $caxios("/signataire/")), __temp = await __temp, __restore(), __temp);
    let nbr = datajson.value ? datajson.value.length : 0;
    let show = ref(false);
    let voirImg = ref(false);
    let hideInputImg = ref(false);
    let errors = ref();
    errors.value = nbr > 0 ? true : false;
    let posted = async (event) => {
      voirImg.value = false;
      let tableauDeValeurs = Object.keys(items.value);
      formData = new FormData();
      if (nbr > 0) {
        datajson.value.forEach((e) => {
          formData.append(`signature_url_${e.signataire - 1}`, e.signature_url);
        });
      }
      if (nbr != item.value.nbr_sign) {
        nbr = item.value.nbr_sign;
      }
      tableauDeValeurs.forEach((e) => {
        formData.append(`title_of_sign_${e}`, items.value[e].title_of_sign);
        formData.append(`showed_${e}`, items.value[e].showed);
        formData.append(`nbr`, nbr);
        if (items.value[e].sign) {
          formData.append(`items.value[${e}].sign`, items.value[e].sign);
        } else {
          items.value[e].sign = "";
        }
        item_final.value[e] = items.value[e];
        formData.append(`${e}`, "ttr");
      });
      await useFetch("/api/signataire/", {
        method: "POST",
        body: formData
      }, "$ewTbmvwbYc");
      datajson.value = await $caxios("/signataire/");
      nbr = datajson.value.length;
      errors.value = true;
      entershow();
    };
    function showImgs(items2) {
      items2.showimg = !items2.showimg;
    }
    let entershow = () => {
      if (nbr > 0) {
        item.value.nbr_sign = nbr;
        convert_nbr_sign.value = nbr;
        show.value = true;
        items.value = {};
        for (let i = 0; i < convert_nbr_sign.value; i++) {
          items.value["signataire_" + i] = {
            title_of_sign: nbr != 0 && datajson.value[i] ? datajson.value[i].title_of_sign : "",
            showed: nbr != 0 && datajson.value[i] ? datajson.value[i].showed == "true" : false,
            signature_url: nbr != 0 && datajson.value[i] ? datajson.value[i].signature_url : "",
            exe: nbr != 0 && datajson.value[i] ? datajson.value[i].exe : "",
            showimg: false
          };
        }
      }
    };
    entershow();
    let handler = async () => {
      show.value = true;
      msg.value = "";
      if (nbr > 0) {
        datajson.value = await $caxios("/signataire/");
        if (nbr < item.value.nbr_sign) {
          errors.value = false;
        } else {
          errors.value = true;
        }
      } else {
        datajson.value = [];
        errors.value = false;
      }
      items.value = {};
      convert_nbr_sign.value = parseInt(item.value.nbr_sign) || 0;
      for (let i = 0; i < convert_nbr_sign.value; i++) {
        items.value["signataire_" + i] = {
          title_of_sign: nbr != 0 && datajson.value[i] ? datajson.value[i].title_of_sign : "",
          showed: nbr != 0 && datajson.value[i] ? datajson.value[i].showed == "true" : false,
          signature_url: nbr != 0 && datajson.value[i] ? datajson.value[i].signature_url : "",
          exe: nbr != 0 && datajson.value[i] ? datajson.value[i].exe : "",
          showImg: false
        };
      }
    };
    let disable = (item2, isDisabled) => {
      let valeur = Object.values(item2);
      let aff = ref(false);
      if (isDisabled) {
        for (let j = 0; j < valeur.length; j++) {
          if (!valeur[j].title_of_sign || !valeur[j].sign) {
            aff.value = true;
            break;
          }
        }
        return aff.value;
      } else {
        for (let j = 0; j < valeur.length; j++) {
          if (!valeur[j].title_of_sign) {
            aff.value = true;
            break;
          }
        }
        return aff.value;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_switch = resolveComponent("v-switch");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_file_input = resolveComponent("v-file-input");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<!--[--><br><br>`);
      _push(ssrRenderComponent(_component_v_form, { onSubmit: () => {
      } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_text_field, {
              label: "Nombre de signataire ",
              modelValue: unref(item).nbr_sign,
              "onUpdate:modelValue": ($event) => unref(item).nbr_sign = $event,
              modelModifiers: { trim: true },
              type: "number",
              min: "1",
              max: "3",
              variant: "outlined",
              class: "mx-2"
            }, null, _parent2, _scopeId));
            _push2(`<div class="mx-2 mb-14"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              variant: "flat",
              type: "submit",
              block: "",
              color: "light-blue-darken-4 ",
              disabled: unref(item).nbr_sign > 3 || unref(item).nbr_sign == 0 || !unref(item).nbr_sign,
              onClick: unref(handler)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Valider`);
                } else {
                  return [
                    createTextVNode("Valider")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_v_text_field, {
                label: "Nombre de signataire ",
                modelValue: unref(item).nbr_sign,
                "onUpdate:modelValue": ($event) => unref(item).nbr_sign = $event,
                modelModifiers: { trim: true },
                type: "number",
                min: "1",
                max: "3",
                variant: "outlined",
                class: "mx-2"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("div", { class: "mx-2 mb-14" }, [
                createVNode(_component_v_btn, {
                  variant: "flat",
                  type: "submit",
                  block: "",
                  color: "light-blue-darken-4 ",
                  disabled: unref(item).nbr_sign > 3 || unref(item).nbr_sign == 0 || !unref(item).nbr_sign,
                  onClick: unref(handler)
                }, {
                  default: withCtx(() => [
                    createTextVNode("Valider")
                  ]),
                  _: 1
                }, 8, ["disabled", "onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_switch, {
        class: "my-10 ml-2 custom-switch",
        color: "#00e676",
        modelValue: unref(hideInputImg),
        "onUpdate:modelValue": ($event) => isRef(hideInputImg) ? hideInputImg.value = $event : hideInputImg = $event,
        style: unref(errors) ? null : { display: "none" },
        density: "compact",
        label: "Mise a jour sans import d'image",
        "label-placement": "right"
      }, null, _parent));
      if (unref(show)) {
        _push(ssrRenderComponent(_component_v_form, { onSubmit: () => {
        } }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(convert_nbr_sign), (item2, index) => {
                _push2(ssrRenderComponent(_component_v_card, {
                  style: { "transform": "translateY(-40px)" },
                  class: "ma-2",
                  key: index
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_v_toolbar, {
                        class: "text-center",
                        title: `Signataire N\xB0 ${index + 1}`
                      }, null, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_v_card_text, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_v_text_field, {
                              label: "Titre *",
                              modelValue: unref(items)["signataire_" + index].title_of_sign,
                              "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].title_of_sign = $event,
                              modelModifiers: { trim: true },
                              type: "text",
                              variant: "outlined"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_v_file_input, {
                              modelValue: unref(items)["signataire_" + index].sign,
                              "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].sign = $event,
                              accept: "image/png, image/jpeg, image/bmp",
                              "prepend-inner-icon": "mdi-camera",
                              "prepend-icon": "",
                              label: "Signature image \xE0 t\xE9l\xE9charger *",
                              id: "signataire_" + index,
                              ref_for: true,
                              ref: "imageFile",
                              onChange: handleImageUpload,
                              style: !unref(hideInputImg) ? null : { display: "none" }
                            }, null, _parent4, _scopeId3));
                            if (unref(nbr) > 0) {
                              _push4(`<div${_scopeId3}>`);
                              if (unref(items)["signataire_" + index].signature_url) {
                                _push4(ssrRenderComponent(_component_v_btn, {
                                  onClick: ($event) => showImgs(unref(items)["signataire_" + index]),
                                  variant: "plain"
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(` cliquez ici pour voir l&#39;image enregistr\xE9e `);
                                    } else {
                                      return [
                                        createTextVNode(" cliquez ici pour voir l'image enregistr\xE9e ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (unref(items)["signataire_" + index].showimg) {
                                _push4(ssrRenderComponent(_component_v_img, {
                                  src: `/api/showphoto?t=signataire_${index}.${unref(items)["signataire_" + index].exe}`,
                                  style: { "width": "300px", "height": "300px", "margin-left": "auto", "margin-right": "auto" }
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(ssrRenderComponent(_component_v_switch, {
                              modelValue: unref(items)["signataire_" + index].showed,
                              "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].showed = $event,
                              class: "mt-0 ml-2 custom-switch",
                              color: "#00e676",
                              density: "compact",
                              label: "Afficher la signature",
                              "label-placement": "right"
                            }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", null, [
                                createVNode(_component_v_text_field, {
                                  label: "Titre *",
                                  modelValue: unref(items)["signataire_" + index].title_of_sign,
                                  "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].title_of_sign = $event,
                                  modelModifiers: { trim: true },
                                  type: "text",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                withDirectives(createVNode(_component_v_file_input, {
                                  modelValue: unref(items)["signataire_" + index].sign,
                                  "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].sign = $event,
                                  accept: "image/png, image/jpeg, image/bmp",
                                  "prepend-inner-icon": "mdi-camera",
                                  "prepend-icon": "",
                                  label: "Signature image \xE0 t\xE9l\xE9charger *",
                                  id: "signataire_" + index,
                                  ref_for: true,
                                  ref: "imageFile",
                                  onChange: handleImageUpload
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "id"]), [
                                  [vShow, !unref(hideInputImg)]
                                ]),
                                unref(nbr) > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                                  unref(items)["signataire_" + index].signature_url ? (openBlock(), createBlock(_component_v_btn, {
                                    key: 0,
                                    onClick: ($event) => showImgs(unref(items)["signataire_" + index]),
                                    variant: "plain"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" cliquez ici pour voir l'image enregistr\xE9e ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])) : createCommentVNode("", true),
                                  unref(items)["signataire_" + index].showimg ? (openBlock(), createBlock(_component_v_img, {
                                    key: 1,
                                    src: `/api/showphoto?t=signataire_${index}.${unref(items)["signataire_" + index].exe}`,
                                    style: { "width": "300px", "height": "300px", "margin-left": "auto", "margin-right": "auto" }
                                  }, null, 8, ["src"])) : createCommentVNode("", true)
                                ])) : createCommentVNode("", true),
                                createVNode(_component_v_switch, {
                                  modelValue: unref(items)["signataire_" + index].showed,
                                  "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].showed = $event,
                                  class: "mt-0 ml-2 custom-switch",
                                  color: "#00e676",
                                  density: "compact",
                                  label: "Afficher la signature",
                                  "label-placement": "right"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_v_toolbar, {
                          class: "text-center",
                          title: `Signataire N\xB0 ${index + 1}`
                        }, null, 8, ["title"]),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode("div", null, [
                              createVNode(_component_v_text_field, {
                                label: "Titre *",
                                modelValue: unref(items)["signataire_" + index].title_of_sign,
                                "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].title_of_sign = $event,
                                modelModifiers: { trim: true },
                                type: "text",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              withDirectives(createVNode(_component_v_file_input, {
                                modelValue: unref(items)["signataire_" + index].sign,
                                "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].sign = $event,
                                accept: "image/png, image/jpeg, image/bmp",
                                "prepend-inner-icon": "mdi-camera",
                                "prepend-icon": "",
                                label: "Signature image \xE0 t\xE9l\xE9charger *",
                                id: "signataire_" + index,
                                ref_for: true,
                                ref: "imageFile",
                                onChange: handleImageUpload
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "id"]), [
                                [vShow, !unref(hideInputImg)]
                              ]),
                              unref(nbr) > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                                unref(items)["signataire_" + index].signature_url ? (openBlock(), createBlock(_component_v_btn, {
                                  key: 0,
                                  onClick: ($event) => showImgs(unref(items)["signataire_" + index]),
                                  variant: "plain"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" cliquez ici pour voir l'image enregistr\xE9e ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true),
                                unref(items)["signataire_" + index].showimg ? (openBlock(), createBlock(_component_v_img, {
                                  key: 1,
                                  src: `/api/showphoto?t=signataire_${index}.${unref(items)["signataire_" + index].exe}`,
                                  style: { "width": "300px", "height": "300px", "margin-left": "auto", "margin-right": "auto" }
                                }, null, 8, ["src"])) : createCommentVNode("", true)
                              ])) : createCommentVNode("", true),
                              createVNode(_component_v_switch, {
                                modelValue: unref(items)["signataire_" + index].showed,
                                "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].showed = $event,
                                class: "mt-0 ml-2 custom-switch",
                                color: "#00e676",
                                density: "compact",
                                label: "Afficher la signature",
                                "label-placement": "right"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(_component_v_card_actions, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "12"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  variant: "flat",
                                  type: "submit",
                                  block: "",
                                  color: "light-blue-darken-4 ",
                                  disabled: unref(disable)(unref(items), !unref(hideInputImg)),
                                  onClick: unref(posted)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`Enregistrer`);
                                    } else {
                                      return [
                                        createTextVNode("Enregistrer")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_v_btn, {
                                    variant: "flat",
                                    type: "submit",
                                    block: "",
                                    color: "light-blue-darken-4 ",
                                    disabled: unref(disable)(unref(items), !unref(hideInputImg)),
                                    onClick: unref(posted)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Enregistrer")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_btn, {
                                  variant: "flat",
                                  type: "submit",
                                  block: "",
                                  color: "light-blue-darken-4 ",
                                  disabled: unref(disable)(unref(items), !unref(hideInputImg)),
                                  onClick: unref(posted)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Enregistrer")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"])
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
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_btn, {
                                variant: "flat",
                                type: "submit",
                                block: "",
                                color: "light-blue-darken-4 ",
                                disabled: unref(disable)(unref(items), !unref(hideInputImg)),
                                onClick: unref(posted)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Enregistrer")
                                ]),
                                _: 1
                              }, 8, ["disabled", "onClick"])
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
              }, _parent2, _scopeId));
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(convert_nbr_sign), (item2, index) => {
                  return openBlock(), createBlock(_component_v_card, {
                    style: { "transform": "translateY(-40px)" },
                    class: "ma-2",
                    key: index
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_toolbar, {
                        class: "text-center",
                        title: `Signataire N\xB0 ${index + 1}`
                      }, null, 8, ["title"]),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode("div", null, [
                            createVNode(_component_v_text_field, {
                              label: "Titre *",
                              modelValue: unref(items)["signataire_" + index].title_of_sign,
                              "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].title_of_sign = $event,
                              modelModifiers: { trim: true },
                              type: "text",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            withDirectives(createVNode(_component_v_file_input, {
                              modelValue: unref(items)["signataire_" + index].sign,
                              "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].sign = $event,
                              accept: "image/png, image/jpeg, image/bmp",
                              "prepend-inner-icon": "mdi-camera",
                              "prepend-icon": "",
                              label: "Signature image \xE0 t\xE9l\xE9charger *",
                              id: "signataire_" + index,
                              ref_for: true,
                              ref: "imageFile",
                              onChange: handleImageUpload
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "id"]), [
                              [vShow, !unref(hideInputImg)]
                            ]),
                            unref(nbr) > 0 ? (openBlock(), createBlock("div", { key: 0 }, [
                              unref(items)["signataire_" + index].signature_url ? (openBlock(), createBlock(_component_v_btn, {
                                key: 0,
                                onClick: ($event) => showImgs(unref(items)["signataire_" + index]),
                                variant: "plain"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" cliquez ici pour voir l'image enregistr\xE9e ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              unref(items)["signataire_" + index].showimg ? (openBlock(), createBlock(_component_v_img, {
                                key: 1,
                                src: `/api/showphoto?t=signataire_${index}.${unref(items)["signataire_" + index].exe}`,
                                style: { "width": "300px", "height": "300px", "margin-left": "auto", "margin-right": "auto" }
                              }, null, 8, ["src"])) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            createVNode(_component_v_switch, {
                              modelValue: unref(items)["signataire_" + index].showed,
                              "onUpdate:modelValue": ($event) => unref(items)["signataire_" + index].showed = $event,
                              class: "mt-0 ml-2 custom-switch",
                              color: "#00e676",
                              density: "compact",
                              label: "Afficher la signature",
                              "label-placement": "right"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128)),
                createVNode(_component_v_card_actions, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          sm: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              variant: "flat",
                              type: "submit",
                              block: "",
                              color: "light-blue-darken-4 ",
                              disabled: unref(disable)(unref(items), !unref(hideInputImg)),
                              onClick: unref(posted)
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Enregistrer")
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"])
                          ]),
                          _: 1
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
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tableau-de-bord/configuration/signataires.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=signataires-c3919c06.mjs.map
