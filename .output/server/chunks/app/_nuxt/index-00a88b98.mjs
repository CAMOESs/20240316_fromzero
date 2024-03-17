import { _ as __nuxt_component_1 } from './table-888c4305.mjs';
import { e as useHead, u as useSnackbar, f as useNuxtApp, b as useFetch } from '../server.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, toDisplayString, openBlock, createBlock, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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
    const { $caxios, $dateformatFr } = useNuxtApp();
    useHead({ title: "Liste des sessions" });
    let sn = useSnackbar();
    let selected = ref([]);
    let items = ref([]);
    let item = ref({});
    let months = ref([]);
    let dialog_edit = ref(false);
    let delete_dialog = ref(false);
    let loading_edit = ref(false);
    let loading_delete = ref(false);
    let loading_user_list = ref(false);
    let validForm = ref(false);
    let api = ref("/api/sessions/");
    months.value = ([__temp, __restore] = withAsyncContext(() => $caxios(`/sessions/months`)), __temp = await __temp, __restore(), __temp);
    const headers = ref([
      {
        key: "numero",
        text: "N\xB0",
        active_modif_column: true
      },
      { key: "session", text: "Session", active_modif_column: true },
      { key: "reference", text: "R\xE9f\xE9rence", active_modif_column: false },
      { key: "date_of_pv", text: "Date de PV", active_modif_column: true },
      { key: "description", text: "Description", active_modif_column: false }
    ]);
    const required_message = ref("Veuillez renseigner ce champ.");
    async function getItems() {
      var _a;
      let res = {};
      loading_user_list.value = true;
      selected.value = [];
      try {
        res = await useFetch(api, "$uStAF8DuvP");
        items.value = res.data.value;
      } catch (error) {
        console.log(error);
        sn.error((_a = res.data.value) == null ? void 0 : _a.error);
      }
      loading_user_list.value = false;
    }
    async function deleteItems() {
      var _a, _b, _c;
      let res = {};
      loading_delete.value = true;
      try {
        res = await useFetch(api, {
          method: "DELETE",
          body: {
            ids: selected.value.map((v) => v.id)
          }
        }, "$tsiMB5ZOyc");
        if ((_a = res.data.value) == null ? void 0 : _a.error)
          throw "";
        await getItems();
        delete_dialog.value = false;
        sn.success();
      } catch (error) {
        console.log(error);
        sn.error((_c = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.value) == null ? void 0 : _c.error);
      }
      loading_delete.value = false;
    }
    async function save() {
      var _a, _b, _c;
      if (!validForm.value)
        return;
      loading_edit.value = true;
      let res = {};
      try {
        res = await useFetch(api, {
          method: "POST",
          body: item
        }, "$zMNtWVLzeh");
        if ((_a = res.data.value) == null ? void 0 : _a.error)
          throw "";
        if (!item.id) {
        } else {
        }
        await getItems();
        dialog_edit.value = false;
        selected.value = [];
        sn.success();
      } catch (error) {
        console.log(error);
        sn.error((_c = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.value) == null ? void 0 : _c.error);
      }
      loading_edit.value = false;
    }
    function open_delete_dialog() {
      delete_dialog.value = true;
    }
    function open_edit_dialog(create) {
      if (create) {
        item.value = {};
        dialog_edit.value = true;
      } else if (Array.isArray(selected.value) && selected.value[0]) {
        item.value = Object.assign({}, selected.value[0]);
        item.value.date_of_pv = item.value.date_of_pv ? item.value.date_of_pv.split("T")[0] : null;
        dialog_edit.value = true;
      }
    }
    [__temp, __restore] = withAsyncContext(() => getItems()), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_MaTable = __nuxt_component_1;
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_text_field = resolveComponent("v-text-field");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_v_btn, {
        class: "mr-1",
        style: { "color": "white" },
        color: "#093e73",
        onClick: ($event) => open_edit_dialog(true)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-plus`);
                } else {
                  return [
                    createTextVNode("mdi-plus")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="d-none d-xs-none d-sm-block"${_scopeId}>Ajouter</span>`);
          } else {
            return [
              createVNode(_component_v_icon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-plus")
                ]),
                _: 1
              }),
              createVNode("span", { class: "d-none d-xs-none d-sm-block" }, "Ajouter")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        class: "mr-1",
        style: { "color": "white" },
        color: "#093e73",
        disabled: unref(selected).length != 1,
        onClick: ($event) => open_edit_dialog(false)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-pencil `);
                } else {
                  return [
                    createTextVNode("mdi-pencil ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="d-none d-xs-none d-sm-block"${_scopeId}>Modifier</span>`);
          } else {
            return [
              createVNode(_component_v_icon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-pencil ")
                ]),
                _: 1
              }),
              createVNode("span", { class: "d-none d-xs-none d-sm-block" }, "Modifier")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_btn, {
        class: "mr-1",
        style: { "color": "white" },
        color: "#093e73",
        disabled: unref(selected).length == 0,
        onClick: ($event) => open_delete_dialog()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-delete `);
                } else {
                  return [
                    createTextVNode("mdi-delete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="d-none d-xs-none d-sm-block"${_scopeId}>Supprimer</span>`);
          } else {
            return [
              createVNode(_component_v_icon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-delete ")
                ]),
                _: 1
              }),
              createVNode("span", { class: "d-none d-xs-none d-sm-block" }, "Supprimer")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_MaTable, {
        with_selected: true,
        selected: unref(selected),
        "onUpdate:selected": ($event) => isRef(selected) ? selected.value = $event : selected = $event,
        items: unref(items),
        "onUpdate:items": ($event) => isRef(items) ? items.value = $event : items = $event,
        header: unref(headers),
        expanded: false,
        no_data: "Aucune donn\xE9e disponible!"
      }, {
        "item(numero)": withCtx(({ index }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>${ssrInterpolate(index + 1)}</div>`);
          } else {
            return [
              createVNode("div", { style: { "text-align": "center" } }, toDisplayString(index + 1), 1)
            ];
          }
        }),
        "item(session)": withCtx(({ elt_item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>${ssrInterpolate(elt_item.Month && elt_item.Month.name ? elt_item.Month.name : "-")}</div>`);
          } else {
            return [
              createVNode("div", { style: { "text-align": "center" } }, toDisplayString(elt_item.Month && elt_item.Month.name ? elt_item.Month.name : "-"), 1)
            ];
          }
        }),
        "item(date_of_pv)": withCtx(({ elt_item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>${ssrInterpolate(unref($dateformatFr)(elt_item.date_of_pv))}</div>`);
          } else {
            return [
              createVNode("div", { style: { "text-align": "center" } }, toDisplayString(unref($dateformatFr)(elt_item.date_of_pv)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: unref(dialog_edit),
        "onUpdate:modelValue": ($event) => isRef(dialog_edit) ? dialog_edit.value = $event : dialog_edit = $event,
        persistent: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "d-flex justify-space-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(item).id) {
                          _push4(`<span class="text-h5"${_scopeId3}>Modifier une session</span>`);
                        } else {
                          _push4(`<span class="text-h5"${_scopeId3}>Enregistrer une session</span>`);
                        }
                        _push4(ssrRenderComponent(_component_v_btn, {
                          onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                          variant: "plain",
                          icon: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-close`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-close")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-close")
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
                          unref(item).id ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-h5"
                          }, "Modifier une session")) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-h5"
                          }, "Enregistrer une session")),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                            variant: "plain",
                            icon: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_form, {
                          modelValue: unref(validForm),
                          "onUpdate:modelValue": ($event) => isRef(validForm) ? validForm.value = $event : validForm = $event,
                          onSubmit: ($event) => save(),
                          class: "mt-5"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_autocomplete, {
                                modelValue: unref(item).month,
                                "onUpdate:modelValue": ($event) => unref(item).month = $event,
                                items: unref(months),
                                "item-title": "name",
                                "item-value": "slug",
                                label: "Mois *",
                                "no-data-text": "Aucune donn\xE9e",
                                "closable-chips": "",
                                chips: "",
                                clearable: "",
                                "deletable-chips": "",
                                variant: "outlined",
                                rules: [(v) => !!v || unref(required_message)]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).year,
                                "onUpdate:modelValue": ($event) => unref(item).year = $event,
                                label: "Ann\xE9e *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).reference,
                                "onUpdate:modelValue": ($event) => unref(item).reference = $event,
                                label: "Reference",
                                type: "text",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).description,
                                "onUpdate:modelValue": ($event) => unref(item).description = $event,
                                label: "Description",
                                type: "text",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).date_of_pv,
                                "onUpdate:modelValue": ($event) => unref(item).date_of_pv = $event,
                                label: "Date du pv",
                                type: "date",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex justify-end"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "secondary",
                                text: "",
                                onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                                variant: "outlined",
                                class: "mr-2",
                                disabled: unref(loading_edit)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Fermer `);
                                  } else {
                                    return [
                                      createTextVNode(" Fermer ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_btn, {
                                disabled: unref(validForm) == false,
                                color: "#093e73",
                                type: "submit",
                                class: "text-white",
                                loading: unref(loading_edit)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Enregistrer `);
                                  } else {
                                    return [
                                      createTextVNode(" Enregistrer ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode(_component_v_autocomplete, {
                                  modelValue: unref(item).month,
                                  "onUpdate:modelValue": ($event) => unref(item).month = $event,
                                  items: unref(months),
                                  "item-title": "name",
                                  "item-value": "slug",
                                  label: "Mois *",
                                  "no-data-text": "Aucune donn\xE9e",
                                  "closable-chips": "",
                                  chips: "",
                                  clearable: "",
                                  "deletable-chips": "",
                                  variant: "outlined",
                                  rules: [(v) => !!v || unref(required_message)]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).year,
                                  "onUpdate:modelValue": ($event) => unref(item).year = $event,
                                  label: "Ann\xE9e *",
                                  rules: [(v) => !!v || unref(required_message)],
                                  type: "text",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).reference,
                                  "onUpdate:modelValue": ($event) => unref(item).reference = $event,
                                  label: "Reference",
                                  type: "text",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).description,
                                  "onUpdate:modelValue": ($event) => unref(item).description = $event,
                                  label: "Description",
                                  type: "text",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).date_of_pv,
                                  "onUpdate:modelValue": ($event) => unref(item).date_of_pv = $event,
                                  label: "Date du pv",
                                  type: "date",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "d-flex justify-end" }, [
                                  createVNode(_component_v_btn, {
                                    color: "secondary",
                                    text: "",
                                    onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                                    variant: "outlined",
                                    class: "mr-2",
                                    disabled: unref(loading_edit)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Fermer ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick", "disabled"]),
                                  createVNode(_component_v_btn, {
                                    disabled: unref(validForm) == false,
                                    color: "#093e73",
                                    type: "submit",
                                    class: "text-white",
                                    loading: unref(loading_edit)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Enregistrer ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "loading"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_form, {
                            modelValue: unref(validForm),
                            "onUpdate:modelValue": ($event) => isRef(validForm) ? validForm.value = $event : validForm = $event,
                            onSubmit: withModifiers(($event) => save(), ["prevent"]),
                            class: "mt-5"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_autocomplete, {
                                modelValue: unref(item).month,
                                "onUpdate:modelValue": ($event) => unref(item).month = $event,
                                items: unref(months),
                                "item-title": "name",
                                "item-value": "slug",
                                label: "Mois *",
                                "no-data-text": "Aucune donn\xE9e",
                                "closable-chips": "",
                                chips: "",
                                clearable: "",
                                "deletable-chips": "",
                                variant: "outlined",
                                rules: [(v) => !!v || unref(required_message)]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).year,
                                "onUpdate:modelValue": ($event) => unref(item).year = $event,
                                label: "Ann\xE9e *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).reference,
                                "onUpdate:modelValue": ($event) => unref(item).reference = $event,
                                label: "Reference",
                                type: "text",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).description,
                                "onUpdate:modelValue": ($event) => unref(item).description = $event,
                                label: "Description",
                                type: "text",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).date_of_pv,
                                "onUpdate:modelValue": ($event) => unref(item).date_of_pv = $event,
                                label: "Date du pv",
                                type: "date",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode("div", { class: "d-flex justify-end" }, [
                                createVNode(_component_v_btn, {
                                  color: "secondary",
                                  text: "",
                                  onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                                  variant: "outlined",
                                  class: "mr-2",
                                  disabled: unref(loading_edit)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Fermer ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled"]),
                                createVNode(_component_v_btn, {
                                  disabled: unref(validForm) == false,
                                  color: "#093e73",
                                  type: "submit",
                                  class: "text-white",
                                  loading: unref(loading_edit)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Enregistrer ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "loading"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div"),
                    createVNode(_component_v_card_title, { class: "d-flex justify-space-between" }, {
                      default: withCtx(() => [
                        unref(item).id ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-h5"
                        }, "Modifier une session")) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-h5"
                        }, "Enregistrer une session")),
                        createVNode(_component_v_btn, {
                          onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                          variant: "plain",
                          icon: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-close")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_form, {
                          modelValue: unref(validForm),
                          "onUpdate:modelValue": ($event) => isRef(validForm) ? validForm.value = $event : validForm = $event,
                          onSubmit: withModifiers(($event) => save(), ["prevent"]),
                          class: "mt-5"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_autocomplete, {
                              modelValue: unref(item).month,
                              "onUpdate:modelValue": ($event) => unref(item).month = $event,
                              items: unref(months),
                              "item-title": "name",
                              "item-value": "slug",
                              label: "Mois *",
                              "no-data-text": "Aucune donn\xE9e",
                              "closable-chips": "",
                              chips: "",
                              clearable: "",
                              "deletable-chips": "",
                              variant: "outlined",
                              rules: [(v) => !!v || unref(required_message)]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).year,
                              "onUpdate:modelValue": ($event) => unref(item).year = $event,
                              label: "Ann\xE9e *",
                              rules: [(v) => !!v || unref(required_message)],
                              type: "text",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).reference,
                              "onUpdate:modelValue": ($event) => unref(item).reference = $event,
                              label: "Reference",
                              type: "text",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).description,
                              "onUpdate:modelValue": ($event) => unref(item).description = $event,
                              label: "Description",
                              type: "text",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).date_of_pv,
                              "onUpdate:modelValue": ($event) => unref(item).date_of_pv = $event,
                              label: "Date du pv",
                              type: "date",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("div", { class: "d-flex justify-end" }, [
                              createVNode(_component_v_btn, {
                                color: "secondary",
                                text: "",
                                onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                                variant: "outlined",
                                class: "mr-2",
                                disabled: unref(loading_edit)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Fermer ")
                                ]),
                                _: 1
                              }, 8, ["onClick", "disabled"]),
                              createVNode(_component_v_btn, {
                                disabled: unref(validForm) == false,
                                color: "#093e73",
                                type: "submit",
                                class: "text-white",
                                loading: unref(loading_edit)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Enregistrer ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "loading"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode("div"),
                  createVNode(_component_v_card_title, { class: "d-flex justify-space-between" }, {
                    default: withCtx(() => [
                      unref(item).id ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-h5"
                      }, "Modifier une session")) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-h5"
                      }, "Enregistrer une session")),
                      createVNode(_component_v_btn, {
                        onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                        variant: "plain",
                        icon: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_form, {
                        modelValue: unref(validForm),
                        "onUpdate:modelValue": ($event) => isRef(validForm) ? validForm.value = $event : validForm = $event,
                        onSubmit: withModifiers(($event) => save(), ["prevent"]),
                        class: "mt-5"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_autocomplete, {
                            modelValue: unref(item).month,
                            "onUpdate:modelValue": ($event) => unref(item).month = $event,
                            items: unref(months),
                            "item-title": "name",
                            "item-value": "slug",
                            label: "Mois *",
                            "no-data-text": "Aucune donn\xE9e",
                            "closable-chips": "",
                            chips: "",
                            clearable: "",
                            "deletable-chips": "",
                            variant: "outlined",
                            rules: [(v) => !!v || unref(required_message)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).year,
                            "onUpdate:modelValue": ($event) => unref(item).year = $event,
                            label: "Ann\xE9e *",
                            rules: [(v) => !!v || unref(required_message)],
                            type: "text",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).reference,
                            "onUpdate:modelValue": ($event) => unref(item).reference = $event,
                            label: "Reference",
                            type: "text",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).description,
                            "onUpdate:modelValue": ($event) => unref(item).description = $event,
                            label: "Description",
                            type: "text",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).date_of_pv,
                            "onUpdate:modelValue": ($event) => unref(item).date_of_pv = $event,
                            label: "Date du pv",
                            type: "date",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "d-flex justify-end" }, [
                            createVNode(_component_v_btn, {
                              color: "secondary",
                              text: "",
                              onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                              variant: "outlined",
                              class: "mr-2",
                              disabled: unref(loading_edit)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fermer ")
                              ]),
                              _: 1
                            }, 8, ["onClick", "disabled"]),
                            createVNode(_component_v_btn, {
                              disabled: unref(validForm) == false,
                              color: "#093e73",
                              type: "submit",
                              class: "text-white",
                              loading: unref(loading_edit)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Enregistrer ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
      _push(ssrRenderComponent(_component_v_dialog, {
        modelValue: unref(delete_dialog),
        "onUpdate:modelValue": ($event) => isRef(delete_dialog) ? delete_dialog.value = $event : delete_dialog = $event,
        persistent: "",
        "max-width": "500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}></div>`);
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "d-flex justify-space-between" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-h5"${_scopeId3}>Suppression </span>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          onClick: ($event) => isRef(delete_dialog) ? delete_dialog.value = false : delete_dialog = false,
                          variant: "plain",
                          icon: ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`mdi-close`);
                                  } else {
                                    return [
                                      createTextVNode("mdi-close")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-close")
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
                          createVNode("span", { class: "text-h5" }, "Suppression "),
                          createVNode(_component_v_btn, {
                            onClick: ($event) => isRef(delete_dialog) ? delete_dialog.value = false : delete_dialog = false,
                            variant: "plain",
                            icon: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, null, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-close")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Etes vous sur de vouloir supprimer votre s\xE9lection ? `);
                      } else {
                        return [
                          createTextVNode(" Etes vous sur de vouloir supprimer votre s\xE9lection ? ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="pb-5 px-3"${_scopeId2}><div class="d-flex justify-end"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "#093e73",
                    text: "",
                    onClick: ($event) => isRef(delete_dialog) ? delete_dialog.value = false : delete_dialog = false,
                    variant: "outlined",
                    class: "mr-2",
                    disabled: unref(loading_delete)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Non `);
                      } else {
                        return [
                          createTextVNode(" Non ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "red",
                    type: "submit",
                    class: "text-white",
                    onClick: ($event) => deleteItems(),
                    loading: unref(loading_delete)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Oui `);
                      } else {
                        return [
                          createTextVNode(" Oui ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div"),
                    createVNode(_component_v_card_title, { class: "d-flex justify-space-between" }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "text-h5" }, "Suppression "),
                        createVNode(_component_v_btn, {
                          onClick: ($event) => isRef(delete_dialog) ? delete_dialog.value = false : delete_dialog = false,
                          variant: "plain",
                          icon: ""
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-close")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createTextVNode(" Etes vous sur de vouloir supprimer votre s\xE9lection ? ")
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "pb-5 px-3" }, [
                      createVNode("div", { class: "d-flex justify-end" }, [
                        createVNode(_component_v_btn, {
                          color: "#093e73",
                          text: "",
                          onClick: ($event) => isRef(delete_dialog) ? delete_dialog.value = false : delete_dialog = false,
                          variant: "outlined",
                          class: "mr-2",
                          disabled: unref(loading_delete)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Non ")
                          ]),
                          _: 1
                        }, 8, ["onClick", "disabled"]),
                        createVNode(_component_v_btn, {
                          color: "red",
                          type: "submit",
                          class: "text-white",
                          onClick: ($event) => deleteItems(),
                          loading: unref(loading_delete)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Oui ")
                          ]),
                          _: 1
                        }, 8, ["onClick", "loading"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode("div"),
                  createVNode(_component_v_card_title, { class: "d-flex justify-space-between" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-h5" }, "Suppression "),
                      createVNode(_component_v_btn, {
                        onClick: ($event) => isRef(delete_dialog) ? delete_dialog.value = false : delete_dialog = false,
                        variant: "plain",
                        icon: ""
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createTextVNode(" Etes vous sur de vouloir supprimer votre s\xE9lection ? ")
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "pb-5 px-3" }, [
                    createVNode("div", { class: "d-flex justify-end" }, [
                      createVNode(_component_v_btn, {
                        color: "#093e73",
                        text: "",
                        onClick: ($event) => isRef(delete_dialog) ? delete_dialog.value = false : delete_dialog = false,
                        variant: "outlined",
                        class: "mr-2",
                        disabled: unref(loading_delete)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Non ")
                        ]),
                        _: 1
                      }, 8, ["onClick", "disabled"]),
                      createVNode(_component_v_btn, {
                        color: "red",
                        type: "submit",
                        class: "text-white",
                        onClick: ($event) => deleteItems(),
                        loading: unref(loading_delete)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Oui ")
                        ]),
                        _: 1
                      }, 8, ["onClick", "loading"])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tableau-de-bord/sessions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-00a88b98.mjs.map
