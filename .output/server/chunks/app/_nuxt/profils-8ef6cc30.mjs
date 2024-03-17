import { _ as __nuxt_component_0 } from './breadcrumbs-54bf79e0.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, withCtx, unref, openBlock, createBlock, createVNode, useSSRContext, createSlots, renderSlot, renderList, createTextVNode, withDirectives, vModelText, toDisplayString, createCommentVNode, isRef, computed, withModifiers } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_1$1 } from './table-888c4305.mjs';
import { d as useRequestHeaders, e as useHead, u as useSnackbar, b as useFetch } from '../server.mjs';
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

const _sfc_main$3 = {
  __name: "ButtonDialog",
  __ssrInlineRender: true,
  props: [
    "name_of_button",
    "icon_of_button",
    "disabled",
    "selected",
    "width",
    "hidden_close_btn",
    "click_come_to_acess_update"
  ],
  setup(__props) {
    const props = __props;
    const dialog = ref(false);
    const form = ref({});
    const item = ref({});
    const item_object = ref({ item_object: item });
    const d = ref({ d: dialog });
    function submit() {
    }
    async function click_to_acess_update() {
      if (!!props.click_come_to_acess_update) {
        await props.click_come_to_acess_update(item_object, props.selected);
      } else {
        if (Array.isArray(props.selected) && props.selected.length === 1) {
          ({ ...props.selected[0] });
          item.value = { ...props.selected[0] };
        }
      }
    }
    const width_dim = computed(() => {
      if (!props.width)
        return "auto";
      return props.width;
    });
    const hidden_btn = computed(() => {
      if (!props.hidden_close_btn)
        return true;
      return !props.hidden_close_btn;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      _push(ssrRenderComponent(_component_v_dialog, mergeProps({
        modelValue: unref(dialog),
        "onUpdate:modelValue": ($event) => isRef(dialog) ? dialog.value = $event : null,
        persistent: "",
        "max-width": unref(width_dim)
      }, _attrs), {
        activator: withCtx(({ props: props2 }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_btn, mergeProps(props2, {
              class: "mr-1",
              disabled: __props.disabled,
              style: { "color": "white" },
              color: "#093e73",
              onClick: click_to_acess_update
            }), {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_icon, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(__props.icon_of_button)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(__props.icon_of_button), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`<span class="d-none d-xs-none d-sm-block"${_scopeId2}>${ssrInterpolate(__props.name_of_button)}</span>`);
                } else {
                  return [
                    createVNode(_component_v_icon, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.icon_of_button), 1)
                      ]),
                      _: 1
                    }),
                    createVNode("span", { class: "d-none d-xs-none d-sm-block" }, toDisplayString(__props.name_of_button), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_btn, mergeProps(props2, {
                class: "mr-1",
                disabled: __props.disabled,
                style: { "color": "white" },
                color: "#093e73",
                onClick: click_to_acess_update
              }), {
                default: withCtx(() => [
                  createVNode(_component_v_icon, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.icon_of_button), 1)
                    ]),
                    _: 1
                  }),
                  createVNode("span", { class: "d-none d-xs-none d-sm-block" }, toDisplayString(__props.name_of_button), 1)
                ]),
                _: 2
              }, 1040, ["disabled"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_form, {
              onSubmit: submit,
              ref_key: "form",
              ref: form,
              class: "overflow-y-auto"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, {
                    class: "px-6",
                    style: { "width": "300", "text-align": "center" }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "button_text", { item: unref(item) }, null, _push4, _parent4, _scopeId3);
                        _push4(ssrRenderComponent(_component_v_card_actions, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                              if (unref(hidden_btn)) {
                                _push5(ssrRenderComponent(_component_v_btn, {
                                  color: "secondary",
                                  text: "",
                                  onClick: ($event) => {
                                    dialog.value = false;
                                  },
                                  outlined: ""
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
                              } else {
                                _push5(`<!---->`);
                              }
                              ssrRenderSlot(_ctx.$slots, "button_button", {
                                form: unref(form),
                                item: unref(item),
                                item_object: unref(item_object),
                                dialog: unref(d)
                              }, null, _push5, _parent5, _scopeId4);
                            } else {
                              return [
                                createVNode(_component_v_spacer),
                                unref(hidden_btn) ? (openBlock(), createBlock(_component_v_btn, {
                                  key: 0,
                                  color: "secondary",
                                  text: "",
                                  onClick: ($event) => {
                                    dialog.value = false;
                                  },
                                  outlined: ""
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Fermer ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])) : createCommentVNode("", true),
                                renderSlot(_ctx.$slots, "button_button", {
                                  form: unref(form),
                                  item: unref(item),
                                  item_object: unref(item_object),
                                  dialog: unref(d)
                                })
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "button_text", { item: unref(item) }),
                          createVNode(_component_v_card_actions, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_spacer),
                              unref(hidden_btn) ? (openBlock(), createBlock(_component_v_btn, {
                                key: 0,
                                color: "secondary",
                                text: "",
                                onClick: ($event) => {
                                  dialog.value = false;
                                },
                                outlined: ""
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Fermer ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])) : createCommentVNode("", true),
                              renderSlot(_ctx.$slots, "button_button", {
                                form: unref(form),
                                item: unref(item),
                                item_object: unref(item_object),
                                dialog: unref(d)
                              })
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, {
                      class: "px-6",
                      style: { "width": "300", "text-align": "center" }
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "button_text", { item: unref(item) }),
                        createVNode(_component_v_card_actions, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_spacer),
                            unref(hidden_btn) ? (openBlock(), createBlock(_component_v_btn, {
                              key: 0,
                              color: "secondary",
                              text: "",
                              onClick: ($event) => {
                                dialog.value = false;
                              },
                              outlined: ""
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fermer ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true),
                            renderSlot(_ctx.$slots, "button_button", {
                              form: unref(form),
                              item: unref(item),
                              item_object: unref(item_object),
                              dialog: unref(d)
                            })
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    })
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_form, {
                onSubmit: withModifiers(submit, ["prevent"]),
                ref_key: "form",
                ref: form,
                class: "overflow-y-auto"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_card, {
                    class: "px-6",
                    style: { "width": "300", "text-align": "center" }
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "button_text", { item: unref(item) }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          unref(hidden_btn) ? (openBlock(), createBlock(_component_v_btn, {
                            key: 0,
                            color: "secondary",
                            text: "",
                            onClick: ($event) => {
                              dialog.value = false;
                            },
                            outlined: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Fermer ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])) : createCommentVNode("", true),
                          renderSlot(_ctx.$slots, "button_button", {
                            form: unref(form),
                            item: unref(item),
                            item_object: unref(item_object),
                            dialog: unref(d)
                          })
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }, 512)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table/ButtonDialog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ButtonDialog = _sfc_main$3;
const defaultSlot = "";
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  props: [
    "title",
    "api",
    "columns",
    "update",
    "add",
    "destroy",
    "destroy_route",
    "add_function",
    "update_function",
    "item_will_be_send",
    "click_come_to_acess_update",
    "destroy_function",
    "id_demande_conge",
    "name_of_button_add",
    "name_of_button_edit",
    "name_of_button_delete",
    "func_controle_disabled_add_button",
    "func_controle_disabled_delete_button",
    "func_controle_disabled_update_button",
    "text_of_validation_on_pop_up_confirm_delete",
    "with_selected"
  ],
  emits: ["update:columns"],
  async setup(__props) {
    var _a;
    let __temp, __restore;
    useRequestHeaders(["cookie"]);
    const props = __props;
    const columns_ = ref([{}]);
    ref(false);
    ref(false);
    ref(10);
    ref(1);
    const selected = ref([]);
    const selected_object = ref({ selected });
    let items = ref([]);
    let display_table = ref(true);
    let object_display_table = ref({ display_table });
    let sn = useSnackbar();
    let data;
    const search_text = ref("");
    const filter = ref("");
    if (props.item_will_be_send) {
      display_table.value = false;
      items.value = [];
    } else {
      display_table.value = true;
      data = ([__temp, __restore] = withAsyncContext(() => useFetch(props.api, "$Uk74EvgyrO")), __temp = await __temp, __restore(), __temp);
      items.value = Array.isArray(data.data.value) ? data.data.value : [];
    }
    if (!isNaN(parseInt((_a = props.id_demande_conge) == null ? void 0 : _a.year_id))) {
      display_table.value = true;
      selected.value = [];
      let req_params = props.id_demande_conge;
      props.id_demande_conge.year_id;
      try {
        let res = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/mes_conges_permissions/", {
          params: req_params
        }, "$mJ2zdRK9tZ")), __temp = await __temp, __restore(), __temp);
        if (res.error.value)
          throw new Error(res.error.value);
        items.value = res.data.value.map((valu) => {
          return {
            ...valu
          };
        });
      } catch (error) {
        items.value = [];
      }
    }
    function search() {
      filter.value = search_text.value;
    }
    ref({
      status: false,
      type: "",
      text: "",
      timeout: -1
    });
    const items_object = ref({ items });
    async function valid_add_function(v) {
      if ((await v.form.validate()).valid) {
        if (typeof props.add_function == "function")
          await props.add_function(v.item, items_object, selected_object);
        else
          await default_add_function(v.item);
        v.item_object.item_object = {};
        v.dialog.d = false;
      }
    }
    async function valid_update_function(v) {
      console.log("selected_object");
      console.log(selected_object);
      if ((await v.form.validate()).valid) {
        if (typeof props.add_function == "function")
          await props.update_function(v.item, items_object);
        else
          await default_update_function(v.item, items_object, { item_object: v.item_object });
        for (const iterator in items_object.value.items) {
          if (items_object.value.items[iterator].id == v.item_object.item_object.id) {
            selected.value = [items_object.value.items[iterator]];
          }
        }
        v.item_object.item_object = {};
        v.dialog.d = false;
      }
    }
    async function default_add_function(value, A) {
      let res_error;
      let data2;
      try {
        data2 = await useFetch(props.api, {
          method: "POST",
          body: value
        }, "$1Kk6HuOxmX");
        console.log("data.data.value.error ==>>>");
        console.log(data2.data.value.error);
        if (data2.error.value) {
          res_error = data2.error.value;
          throw "";
        }
        if (data2.data.value.error)
          throw "";
        items_object.value.items.push(data2.data.value);
        sn.success("Enregistrement r\xE9ussi");
        value = {};
      } catch (error) {
        console.error(error);
        if (data2.data.value.error)
          sn.error(data2.data.value.error);
        else
          sn.error("Nous n'avons pas pu effectuer l'op\xE9ration demand\xE9e. Veuillez actualiser la page et r\xE9essayer.");
      }
    }
    async function default_update_function(value, A) {
      let res_error;
      try {
        let data2 = await useFetch(props.api, {
          method: "POST",
          body: value
        }, "$Aqepk0ZzjE");
        if (data2.error.value) {
          res_error = data2.error.value;
          throw "";
        }
        for (const iterator in items_object.value.items) {
          if (items_object.value.items[iterator].id == value.id) {
            items_object.value.items[iterator] = value;
          }
        }
        sn.success("Enregistrement r\xE9ussi");
        value = {};
      } catch (error) {
        console.error(error);
        sn.error("Nous n'avons pas pu effectuer l'op\xE9ration demand\xE9e. Veuillez actualiser la page et r\xE9essayer.");
      }
    }
    async function destroy_() {
      var _a2, _b, _c, _d;
      if (!props.destroy_function) {
        const selected_ = selected.value.map((v) => v.id);
        let ret_value;
        try {
          ret_value = await useFetch(props.destroy_route, {
            method: "DELETE",
            body: selected_
          }, "$WCu8lI4Ak4");
          if (ret_value.data.value.error)
            throw "";
          if (!ret_value.error.value) {
            let tab = items.value.filter((v) => {
              return !selected_.includes(v.id);
            });
            items.value = tab;
            selected.value = [];
            sn.success("R\xE9ussite de la suppression ! ");
          } else {
            if (((_b = (_a2 = ret_value.error.value) == null ? void 0 : _a2.data) == null ? void 0 : _b.message) === "Access interdit !") {
              sn.error("Vous n'avez pas le droit d'\xE9ffectuer cette suppression !");
            } else if ((_d = (_c = ret_value.error.value) == null ? void 0 : _c.data) == null ? void 0 : _d.message.startsWith("Authentification requise !")) {
              sn.error("Votre session est expir\xE9e, veuillez r\xE9actualiser la page !");
            }
          }
        } catch (error) {
          selected.value = [];
          if (ret_value.data.value.error)
            sn.error(ret_value.data.value.error);
          else
            sn.error();
        }
      } else {
        props.destroy_function(items_object, selected_object);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_tooltip = resolveComponent("v-tooltip");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_MaTable = __nuxt_component_1$1;
      _push(`<!--[--><input style="${ssrRenderStyle({ display: "none" })}"${ssrRenderAttr("value", __props.columns)}>`);
      ssrRenderSlot(_ctx.$slots, "top_form", {
        items: unref(items),
        selected_object: unref(selected_object),
        selected: unref(selected),
        items_object: unref(items_object),
        object_display_table: unref(object_display_table)
      }, null, _push, _parent);
      if (unref(display_table)) {
        _push(ssrRenderComponent(_component_v_card, { class: "mx-2 my-2" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_card_text, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_row, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            style: { "text-align": "left" }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (__props.add) {
                                  _push5(ssrRenderComponent(ButtonDialog, {
                                    selected: unref(selected),
                                    name_of_button: __props.name_of_button_add ? __props.name_of_button_add : "Ajouter",
                                    disabled: __props.func_controle_disabled_add_button ? __props.func_controle_disabled_add_button(unref(selected)) : unref(selected).length !== 0,
                                    icon_of_button: "mdi mdi-plus-outline",
                                    click_come_to_acess_update: __props.click_come_to_acess_update
                                  }, {
                                    button_text: withCtx((props2, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        ssrRenderSlot(_ctx.$slots, "save_replacement", {
                                          item: props2.item
                                        }, null, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          renderSlot(_ctx.$slots, "save_replacement", {
                                            item: props2.item
                                          })
                                        ];
                                      }
                                    }),
                                    button_button: withCtx((props2, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_v_btn, {
                                          color: "black white--text",
                                          onClick: ($event) => valid_add_function(props2)
                                        }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` Enregistrer `);
                                            } else {
                                              return [
                                                createTextVNode(" Enregistrer ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_v_btn, {
                                            color: "black white--text",
                                            onClick: ($event) => valid_add_function(props2)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Enregistrer ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (__props.update) {
                                  _push5(ssrRenderComponent(ButtonDialog, {
                                    selected: unref(selected),
                                    disabled: __props.func_controle_disabled_update_button ? __props.func_controle_disabled_update_button(unref(selected)) : unref(selected).length !== 1,
                                    name_of_button: __props.name_of_button_edit ? __props.name_of_button_edit : "Modifier",
                                    icon_of_button: "mdi mdi-circle-edit-outline",
                                    click_come_to_acess_update: __props.click_come_to_acess_update
                                  }, {
                                    button_text: withCtx((props2, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<input id="id"${ssrRenderAttr("value", props2.item.id)} type="hidden"${_scopeId5}>`);
                                        ssrRenderSlot(_ctx.$slots, "edit_replacement", {
                                          item: props2.item
                                        }, null, _push6, _parent6, _scopeId5);
                                      } else {
                                        return [
                                          withDirectives(createVNode("input", {
                                            id: "id",
                                            "onUpdate:modelValue": ($event) => props2.item.id = $event,
                                            type: "hidden"
                                          }, null, 8, ["onUpdate:modelValue"]), [
                                            [
                                              vModelText,
                                              props2.item.id,
                                              void 0,
                                              { number: true }
                                            ]
                                          ]),
                                          renderSlot(_ctx.$slots, "edit_replacement", {
                                            item: props2.item
                                          })
                                        ];
                                      }
                                    }),
                                    button_button: withCtx((props2, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_v_btn, {
                                          color: "black white--text",
                                          onClick: ($event) => valid_update_function(props2)
                                        }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` Enregistrer `);
                                            } else {
                                              return [
                                                createTextVNode(" Enregistrer ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_v_btn, {
                                            color: "black white--text",
                                            onClick: ($event) => valid_update_function(props2)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Enregistrer ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ];
                                      }
                                    }),
                                    _: 3
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(_component_v_dialog, {
                                  transition: "dialog-bottom-transition",
                                  width: "auto"
                                }, {
                                  activator: withCtx(({ props: props2 }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (__props.destroy) {
                                        _push6(ssrRenderComponent(_component_v_btn, mergeProps(props2, {
                                          class: "mr-1",
                                          style: { "color": "white" },
                                          color: "#093e73",
                                          disabled: __props.func_controle_disabled_delete_button ? __props.func_controle_disabled_delete_button(unref(selected)) : !unref(selected).length
                                        }), {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_v_tooltip, {
                                                activator: "parent",
                                                location: "top"
                                              }, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer")}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(ssrRenderComponent(_component_v_icon, null, {
                                                default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(` mdi mdi-delete-outline `);
                                                  } else {
                                                    return [
                                                      createTextVNode(" mdi mdi-delete-outline ")
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(`<span class="d-none d-xs-none d-sm-block"${_scopeId6}>${ssrInterpolate(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer")}</span>`);
                                            } else {
                                              return [
                                                createVNode(_component_v_tooltip, {
                                                  activator: "parent",
                                                  location: "top"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_v_icon, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode(" mdi mdi-delete-outline ")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode("span", { class: "d-none d-xs-none d-sm-block" }, toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        __props.destroy ? (openBlock(), createBlock(_component_v_btn, mergeProps({ key: 0 }, props2, {
                                          class: "mr-1",
                                          style: { "color": "white" },
                                          color: "#093e73",
                                          disabled: __props.func_controle_disabled_delete_button ? __props.func_controle_disabled_delete_button(unref(selected)) : !unref(selected).length
                                        }), {
                                          default: withCtx(() => [
                                            createVNode(_component_v_tooltip, {
                                              activator: "parent",
                                              location: "top"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_icon, null, {
                                              default: withCtx(() => [
                                                createTextVNode(" mdi mdi-delete-outline ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("span", { class: "d-none d-xs-none d-sm-block" }, toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                          ]),
                                          _: 2
                                        }, 1040, ["disabled"])) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  default: withCtx(({ isActive }, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_card, { width: "350" }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_v_card_text, { class: "text-center" }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(` \xCAtes-vous s\xFBr ? <br${_scopeId7}> Vous ne pourrez pas revenir en arri\xE8re ! `);
                                                } else {
                                                  return [
                                                    createTextVNode(" \xCAtes-vous s\xFBr ? "),
                                                    createVNode("br"),
                                                    createTextVNode(" Vous ne pourrez pas revenir en arri\xE8re ! ")
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                            _push7(`<br${_scopeId6}>`);
                                            _push7(ssrRenderComponent(_component_v_card_actions, { class: "justify-center" }, {
                                              default: withCtx((_6, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_v_btn, {
                                                    variant: "text",
                                                    onClick: ($event) => isActive.value = false
                                                  }, {
                                                    default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`Retour`);
                                                      } else {
                                                        return [
                                                          createTextVNode("Retour")
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(_component_v_btn, {
                                                    onClick: ($event) => {
                                                      destroy_();
                                                      isActive.value = false;
                                                    },
                                                    style: { "color": "white", "background-color": "red !important" }
                                                  }, {
                                                    default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(__props.text_of_validation_on_pop_up_confirm_delete ? __props.text_of_validation_on_pop_up_confirm_delete : "OUI, SUPPRIMER!")}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(__props.text_of_validation_on_pop_up_confirm_delete ? __props.text_of_validation_on_pop_up_confirm_delete : "OUI, SUPPRIMER!"), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_v_btn, {
                                                      variant: "text",
                                                      onClick: ($event) => isActive.value = false
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Retour")
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"]),
                                                    createVNode(_component_v_btn, {
                                                      onClick: ($event) => {
                                                        destroy_();
                                                        isActive.value = false;
                                                      },
                                                      style: { "color": "white", "background-color": "red !important" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(__props.text_of_validation_on_pop_up_confirm_delete ? __props.text_of_validation_on_pop_up_confirm_delete : "OUI, SUPPRIMER!"), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["onClick"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_v_card_text, { class: "text-center" }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" \xCAtes-vous s\xFBr ? "),
                                                  createVNode("br"),
                                                  createTextVNode(" Vous ne pourrez pas revenir en arri\xE8re ! ")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode("br"),
                                              createVNode(_component_v_card_actions, { class: "justify-center" }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_v_btn, {
                                                    variant: "text",
                                                    onClick: ($event) => isActive.value = false
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Retour")
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"]),
                                                  createVNode(_component_v_btn, {
                                                    onClick: ($event) => {
                                                      destroy_();
                                                      isActive.value = false;
                                                    },
                                                    style: { "color": "white", "background-color": "red !important" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(__props.text_of_validation_on_pop_up_confirm_delete ? __props.text_of_validation_on_pop_up_confirm_delete : "OUI, SUPPRIMER!"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["onClick"])
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_card, { width: "350" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_card_text, { class: "text-center" }, {
                                              default: withCtx(() => [
                                                createTextVNode(" \xCAtes-vous s\xFBr ? "),
                                                createVNode("br"),
                                                createTextVNode(" Vous ne pourrez pas revenir en arri\xE8re ! ")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode("br"),
                                            createVNode(_component_v_card_actions, { class: "justify-center" }, {
                                              default: withCtx(() => [
                                                createVNode(_component_v_btn, {
                                                  variant: "text",
                                                  onClick: ($event) => isActive.value = false
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Retour")
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"]),
                                                createVNode(_component_v_btn, {
                                                  onClick: ($event) => {
                                                    destroy_();
                                                    isActive.value = false;
                                                  },
                                                  style: { "color": "white", "background-color": "red !important" }
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(__props.text_of_validation_on_pop_up_confirm_delete ? __props.text_of_validation_on_pop_up_confirm_delete : "OUI, SUPPRIMER!"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  __props.add ? (openBlock(), createBlock(ButtonDialog, {
                                    key: 0,
                                    selected: unref(selected),
                                    name_of_button: __props.name_of_button_add ? __props.name_of_button_add : "Ajouter",
                                    disabled: __props.func_controle_disabled_add_button ? __props.func_controle_disabled_add_button(unref(selected)) : unref(selected).length !== 0,
                                    icon_of_button: "mdi mdi-plus-outline",
                                    click_come_to_acess_update: __props.click_come_to_acess_update
                                  }, {
                                    button_text: withCtx((props2) => [
                                      renderSlot(_ctx.$slots, "save_replacement", {
                                        item: props2.item
                                      })
                                    ]),
                                    button_button: withCtx((props2) => [
                                      createVNode(_component_v_btn, {
                                        color: "black white--text",
                                        onClick: ($event) => valid_add_function(props2)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Enregistrer ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 3
                                  }, 8, ["selected", "name_of_button", "disabled", "click_come_to_acess_update"])) : createCommentVNode("", true),
                                  __props.update ? (openBlock(), createBlock(ButtonDialog, {
                                    key: 1,
                                    selected: unref(selected),
                                    disabled: __props.func_controle_disabled_update_button ? __props.func_controle_disabled_update_button(unref(selected)) : unref(selected).length !== 1,
                                    name_of_button: __props.name_of_button_edit ? __props.name_of_button_edit : "Modifier",
                                    icon_of_button: "mdi mdi-circle-edit-outline",
                                    click_come_to_acess_update: __props.click_come_to_acess_update
                                  }, {
                                    button_text: withCtx((props2) => [
                                      withDirectives(createVNode("input", {
                                        id: "id",
                                        "onUpdate:modelValue": ($event) => props2.item.id = $event,
                                        type: "hidden"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [
                                          vModelText,
                                          props2.item.id,
                                          void 0,
                                          { number: true }
                                        ]
                                      ]),
                                      renderSlot(_ctx.$slots, "edit_replacement", {
                                        item: props2.item
                                      })
                                    ]),
                                    button_button: withCtx((props2) => [
                                      createVNode(_component_v_btn, {
                                        color: "black white--text",
                                        onClick: ($event) => valid_update_function(props2)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Enregistrer ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ]),
                                    _: 3
                                  }, 8, ["selected", "disabled", "name_of_button", "click_come_to_acess_update"])) : createCommentVNode("", true),
                                  createVNode(_component_v_dialog, {
                                    transition: "dialog-bottom-transition",
                                    width: "auto"
                                  }, {
                                    activator: withCtx(({ props: props2 }) => [
                                      __props.destroy ? (openBlock(), createBlock(_component_v_btn, mergeProps({ key: 0 }, props2, {
                                        class: "mr-1",
                                        style: { "color": "white" },
                                        color: "#093e73",
                                        disabled: __props.func_controle_disabled_delete_button ? __props.func_controle_disabled_delete_button(unref(selected)) : !unref(selected).length
                                      }), {
                                        default: withCtx(() => [
                                          createVNode(_component_v_tooltip, {
                                            activator: "parent",
                                            location: "top"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_icon, null, {
                                            default: withCtx(() => [
                                              createTextVNode(" mdi mdi-delete-outline ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("span", { class: "d-none d-xs-none d-sm-block" }, toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                        ]),
                                        _: 2
                                      }, 1040, ["disabled"])) : createCommentVNode("", true)
                                    ]),
                                    default: withCtx(({ isActive }) => [
                                      createVNode(_component_v_card, { width: "350" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_card_text, { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \xCAtes-vous s\xFBr ? "),
                                              createVNode("br"),
                                              createTextVNode(" Vous ne pourrez pas revenir en arri\xE8re ! ")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode("br"),
                                          createVNode(_component_v_card_actions, { class: "justify-center" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_v_btn, {
                                                variant: "text",
                                                onClick: ($event) => isActive.value = false
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Retour")
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"]),
                                              createVNode(_component_v_btn, {
                                                onClick: ($event) => {
                                                  destroy_();
                                                  isActive.value = false;
                                                },
                                                style: { "color": "white", "background-color": "red !important" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(__props.text_of_validation_on_pop_up_confirm_delete ? __props.text_of_validation_on_pop_up_confirm_delete : "OUI, SUPPRIMER!"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            class: "pa-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                ssrRenderSlot(_ctx.$slots, "table_buttons", {
                                  items: unref(items),
                                  selected_object: unref(selected_object),
                                  selected: unref(selected),
                                  items_object: unref(items_object),
                                  object_display_table: unref(object_display_table)
                                }, null, _push5, _parent5, _scopeId4);
                              } else {
                                return [
                                  renderSlot(_ctx.$slots, "table_buttons", {
                                    items: unref(items),
                                    selected_object: unref(selected_object),
                                    selected: unref(selected),
                                    items_object: unref(items_object),
                                    object_display_table: unref(object_display_table)
                                  })
                                ];
                              }
                            }),
                            _: 3
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div${_scopeId4}>${ssrInterpolate(__props.title)}</div>`);
                              } else {
                                return [
                                  createVNode("div", null, toDisplayString(__props.title), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "12",
                              style: { "text-align": "left" }
                            }, {
                              default: withCtx(() => [
                                __props.add ? (openBlock(), createBlock(ButtonDialog, {
                                  key: 0,
                                  selected: unref(selected),
                                  name_of_button: __props.name_of_button_add ? __props.name_of_button_add : "Ajouter",
                                  disabled: __props.func_controle_disabled_add_button ? __props.func_controle_disabled_add_button(unref(selected)) : unref(selected).length !== 0,
                                  icon_of_button: "mdi mdi-plus-outline",
                                  click_come_to_acess_update: __props.click_come_to_acess_update
                                }, {
                                  button_text: withCtx((props2) => [
                                    renderSlot(_ctx.$slots, "save_replacement", {
                                      item: props2.item
                                    })
                                  ]),
                                  button_button: withCtx((props2) => [
                                    createVNode(_component_v_btn, {
                                      color: "black white--text",
                                      onClick: ($event) => valid_add_function(props2)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Enregistrer ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 3
                                }, 8, ["selected", "name_of_button", "disabled", "click_come_to_acess_update"])) : createCommentVNode("", true),
                                __props.update ? (openBlock(), createBlock(ButtonDialog, {
                                  key: 1,
                                  selected: unref(selected),
                                  disabled: __props.func_controle_disabled_update_button ? __props.func_controle_disabled_update_button(unref(selected)) : unref(selected).length !== 1,
                                  name_of_button: __props.name_of_button_edit ? __props.name_of_button_edit : "Modifier",
                                  icon_of_button: "mdi mdi-circle-edit-outline",
                                  click_come_to_acess_update: __props.click_come_to_acess_update
                                }, {
                                  button_text: withCtx((props2) => [
                                    withDirectives(createVNode("input", {
                                      id: "id",
                                      "onUpdate:modelValue": ($event) => props2.item.id = $event,
                                      type: "hidden"
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [
                                        vModelText,
                                        props2.item.id,
                                        void 0,
                                        { number: true }
                                      ]
                                    ]),
                                    renderSlot(_ctx.$slots, "edit_replacement", {
                                      item: props2.item
                                    })
                                  ]),
                                  button_button: withCtx((props2) => [
                                    createVNode(_component_v_btn, {
                                      color: "black white--text",
                                      onClick: ($event) => valid_update_function(props2)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Enregistrer ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 3
                                }, 8, ["selected", "disabled", "name_of_button", "click_come_to_acess_update"])) : createCommentVNode("", true),
                                createVNode(_component_v_dialog, {
                                  transition: "dialog-bottom-transition",
                                  width: "auto"
                                }, {
                                  activator: withCtx(({ props: props2 }) => [
                                    __props.destroy ? (openBlock(), createBlock(_component_v_btn, mergeProps({ key: 0 }, props2, {
                                      class: "mr-1",
                                      style: { "color": "white" },
                                      color: "#093e73",
                                      disabled: __props.func_controle_disabled_delete_button ? __props.func_controle_disabled_delete_button(unref(selected)) : !unref(selected).length
                                    }), {
                                      default: withCtx(() => [
                                        createVNode(_component_v_tooltip, {
                                          activator: "parent",
                                          location: "top"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => [
                                            createTextVNode(" mdi mdi-delete-outline ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("span", { class: "d-none d-xs-none d-sm-block" }, toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                      ]),
                                      _: 2
                                    }, 1040, ["disabled"])) : createCommentVNode("", true)
                                  ]),
                                  default: withCtx(({ isActive }) => [
                                    createVNode(_component_v_card, { width: "350" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_card_text, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \xCAtes-vous s\xFBr ? "),
                                            createVNode("br"),
                                            createTextVNode(" Vous ne pourrez pas revenir en arri\xE8re ! ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode("br"),
                                        createVNode(_component_v_card_actions, { class: "justify-center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_btn, {
                                              variant: "text",
                                              onClick: ($event) => isActive.value = false
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Retour")
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"]),
                                            createVNode(_component_v_btn, {
                                              onClick: ($event) => {
                                                destroy_();
                                                isActive.value = false;
                                              },
                                              style: { "color": "white", "background-color": "red !important" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(__props.text_of_validation_on_pop_up_confirm_delete ? __props.text_of_validation_on_pop_up_confirm_delete : "OUI, SUPPRIMER!"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 3
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              class: "pa-0"
                            }, {
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "table_buttons", {
                                  items: unref(items),
                                  selected_object: unref(selected_object),
                                  selected: unref(selected),
                                  items_object: unref(items_object),
                                  object_display_table: unref(object_display_table)
                                })
                              ]),
                              _: 3
                            }),
                            createVNode(_component_v_col, { cols: "12" }, {
                              default: withCtx(() => [
                                createVNode("div", null, toDisplayString(__props.title), 1)
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 3
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            style: { "text-align": "left" }
                          }, {
                            default: withCtx(() => [
                              __props.add ? (openBlock(), createBlock(ButtonDialog, {
                                key: 0,
                                selected: unref(selected),
                                name_of_button: __props.name_of_button_add ? __props.name_of_button_add : "Ajouter",
                                disabled: __props.func_controle_disabled_add_button ? __props.func_controle_disabled_add_button(unref(selected)) : unref(selected).length !== 0,
                                icon_of_button: "mdi mdi-plus-outline",
                                click_come_to_acess_update: __props.click_come_to_acess_update
                              }, {
                                button_text: withCtx((props2) => [
                                  renderSlot(_ctx.$slots, "save_replacement", {
                                    item: props2.item
                                  })
                                ]),
                                button_button: withCtx((props2) => [
                                  createVNode(_component_v_btn, {
                                    color: "black white--text",
                                    onClick: ($event) => valid_add_function(props2)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Enregistrer ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 3
                              }, 8, ["selected", "name_of_button", "disabled", "click_come_to_acess_update"])) : createCommentVNode("", true),
                              __props.update ? (openBlock(), createBlock(ButtonDialog, {
                                key: 1,
                                selected: unref(selected),
                                disabled: __props.func_controle_disabled_update_button ? __props.func_controle_disabled_update_button(unref(selected)) : unref(selected).length !== 1,
                                name_of_button: __props.name_of_button_edit ? __props.name_of_button_edit : "Modifier",
                                icon_of_button: "mdi mdi-circle-edit-outline",
                                click_come_to_acess_update: __props.click_come_to_acess_update
                              }, {
                                button_text: withCtx((props2) => [
                                  withDirectives(createVNode("input", {
                                    id: "id",
                                    "onUpdate:modelValue": ($event) => props2.item.id = $event,
                                    type: "hidden"
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [
                                      vModelText,
                                      props2.item.id,
                                      void 0,
                                      { number: true }
                                    ]
                                  ]),
                                  renderSlot(_ctx.$slots, "edit_replacement", {
                                    item: props2.item
                                  })
                                ]),
                                button_button: withCtx((props2) => [
                                  createVNode(_component_v_btn, {
                                    color: "black white--text",
                                    onClick: ($event) => valid_update_function(props2)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Enregistrer ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 3
                              }, 8, ["selected", "disabled", "name_of_button", "click_come_to_acess_update"])) : createCommentVNode("", true),
                              createVNode(_component_v_dialog, {
                                transition: "dialog-bottom-transition",
                                width: "auto"
                              }, {
                                activator: withCtx(({ props: props2 }) => [
                                  __props.destroy ? (openBlock(), createBlock(_component_v_btn, mergeProps({ key: 0 }, props2, {
                                    class: "mr-1",
                                    style: { "color": "white" },
                                    color: "#093e73",
                                    disabled: __props.func_controle_disabled_delete_button ? __props.func_controle_disabled_delete_button(unref(selected)) : !unref(selected).length
                                  }), {
                                    default: withCtx(() => [
                                      createVNode(_component_v_tooltip, {
                                        activator: "parent",
                                        location: "top"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode(" mdi mdi-delete-outline ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("span", { class: "d-none d-xs-none d-sm-block" }, toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                    ]),
                                    _: 2
                                  }, 1040, ["disabled"])) : createCommentVNode("", true)
                                ]),
                                default: withCtx(({ isActive }) => [
                                  createVNode(_component_v_card, { width: "350" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_card_text, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \xCAtes-vous s\xFBr ? "),
                                          createVNode("br"),
                                          createTextVNode(" Vous ne pourrez pas revenir en arri\xE8re ! ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("br"),
                                      createVNode(_component_v_card_actions, { class: "justify-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            variant: "text",
                                            onClick: ($event) => isActive.value = false
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Retour")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_v_btn, {
                                            onClick: ($event) => {
                                              destroy_();
                                              isActive.value = false;
                                            },
                                            style: { "color": "white", "background-color": "red !important" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(__props.text_of_validation_on_pop_up_confirm_delete ? __props.text_of_validation_on_pop_up_confirm_delete : "OUI, SUPPRIMER!"), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 3
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            class: "pa-0"
                          }, {
                            default: withCtx(() => [
                              renderSlot(_ctx.$slots, "table_buttons", {
                                items: unref(items),
                                selected_object: unref(selected_object),
                                selected: unref(selected),
                                items_object: unref(items_object),
                                object_display_table: unref(object_display_table)
                              })
                            ]),
                            _: 3
                          }),
                          createVNode(_component_v_col, { cols: "12" }, {
                            default: withCtx(() => [
                              createVNode("div", null, toDisplayString(__props.title), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 3
                      })
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              _push2(`<div class="row mx-3"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_row, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_col, {
                      cols: "12",
                      class: "pb-0"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_text_field, {
                            modelValue: unref(search_text),
                            "onUpdate:modelValue": ($event) => isRef(search_text) ? search_text.value = $event : null,
                            label: "Rechercher",
                            class: "",
                            variant: "outlined"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_text_field, {
                              modelValue: unref(search_text),
                              "onUpdate:modelValue": ($event) => isRef(search_text) ? search_text.value = $event : null,
                              label: "Rechercher",
                              class: "",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_col, {
                      class: "d-flex justify-center pt-1 mb-5",
                      cols: "12"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_v_btn, {
                            color: "#093e73",
                            class: "text-white",
                            onClick: search
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Rechercher`);
                              } else {
                                return [
                                  createTextVNode("Rechercher")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_v_btn, {
                              color: "#093e73",
                              class: "text-white",
                              onClick: search
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Rechercher")
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
                      createVNode(_component_v_col, {
                        cols: "12",
                        class: "pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: unref(search_text),
                            "onUpdate:modelValue": ($event) => isRef(search_text) ? search_text.value = $event : null,
                            label: "Rechercher",
                            class: "",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        class: "d-flex justify-center pt-1 mb-5",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            color: "#093e73",
                            class: "text-white",
                            onClick: search
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Rechercher")
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
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_MaTable, {
                with_selected: __props.with_selected == false ? false : true,
                selected: unref(selected),
                "onUpdate:selected": ($event) => isRef(selected) ? selected.value = $event : null,
                items: unref(items),
                "onUpdate:items": ($event) => isRef(items) ? items.value = $event : items = $event,
                header: __props.columns,
                filter: unref(filter),
                "onUpdate:filter": ($event) => isRef(filter) ? filter.value = $event : null,
                no_data: "Aucun \xE9l\xE9ment trouv\xE9.",
                no_data_to_search: "Aucun \xE9l\xE9ment correspondant."
              }, createSlots({ _: 2 }, [
                renderList(unref(columns_), (element) => {
                  return {
                    name: `header(${element.key})`,
                    fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, `header(${element.key})`, {}, null, _push3, _parent3, _scopeId2);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, `header(${element.key})`)
                        ];
                      }
                    })
                  };
                }),
                renderList(unref(columns_), (element) => {
                  return {
                    name: `item(${element.active_modif_column ? element.key : defaultSlot})`,
                    fn: withCtx(({ item, elt_item }, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        ssrRenderSlot(_ctx.$slots, `cell(${element.key})`, {
                          items_object: unref(items_object),
                          value: item,
                          elt_item,
                          selected_object: unref(selected_object),
                          object_display_table: unref(object_display_table)
                        }, null, _push3, _parent3, _scopeId2);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, `cell(${element.key})`, {
                            items_object: unref(items_object),
                            value: item,
                            elt_item,
                            selected_object: unref(selected_object),
                            object_display_table: unref(object_display_table)
                          })
                        ];
                      }
                    })
                  };
                })
              ]), _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, {
                          cols: "12",
                          style: { "text-align": "left" }
                        }, {
                          default: withCtx(() => [
                            __props.add ? (openBlock(), createBlock(ButtonDialog, {
                              key: 0,
                              selected: unref(selected),
                              name_of_button: __props.name_of_button_add ? __props.name_of_button_add : "Ajouter",
                              disabled: __props.func_controle_disabled_add_button ? __props.func_controle_disabled_add_button(unref(selected)) : unref(selected).length !== 0,
                              icon_of_button: "mdi mdi-plus-outline",
                              click_come_to_acess_update: __props.click_come_to_acess_update
                            }, {
                              button_text: withCtx((props2) => [
                                renderSlot(_ctx.$slots, "save_replacement", {
                                  item: props2.item
                                })
                              ]),
                              button_button: withCtx((props2) => [
                                createVNode(_component_v_btn, {
                                  color: "black white--text",
                                  onClick: ($event) => valid_add_function(props2)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Enregistrer ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 3
                            }, 8, ["selected", "name_of_button", "disabled", "click_come_to_acess_update"])) : createCommentVNode("", true),
                            __props.update ? (openBlock(), createBlock(ButtonDialog, {
                              key: 1,
                              selected: unref(selected),
                              disabled: __props.func_controle_disabled_update_button ? __props.func_controle_disabled_update_button(unref(selected)) : unref(selected).length !== 1,
                              name_of_button: __props.name_of_button_edit ? __props.name_of_button_edit : "Modifier",
                              icon_of_button: "mdi mdi-circle-edit-outline",
                              click_come_to_acess_update: __props.click_come_to_acess_update
                            }, {
                              button_text: withCtx((props2) => [
                                withDirectives(createVNode("input", {
                                  id: "id",
                                  "onUpdate:modelValue": ($event) => props2.item.id = $event,
                                  type: "hidden"
                                }, null, 8, ["onUpdate:modelValue"]), [
                                  [
                                    vModelText,
                                    props2.item.id,
                                    void 0,
                                    { number: true }
                                  ]
                                ]),
                                renderSlot(_ctx.$slots, "edit_replacement", {
                                  item: props2.item
                                })
                              ]),
                              button_button: withCtx((props2) => [
                                createVNode(_component_v_btn, {
                                  color: "black white--text",
                                  onClick: ($event) => valid_update_function(props2)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Enregistrer ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 3
                            }, 8, ["selected", "disabled", "name_of_button", "click_come_to_acess_update"])) : createCommentVNode("", true),
                            createVNode(_component_v_dialog, {
                              transition: "dialog-bottom-transition",
                              width: "auto"
                            }, {
                              activator: withCtx(({ props: props2 }) => [
                                __props.destroy ? (openBlock(), createBlock(_component_v_btn, mergeProps({ key: 0 }, props2, {
                                  class: "mr-1",
                                  style: { "color": "white" },
                                  color: "#093e73",
                                  disabled: __props.func_controle_disabled_delete_button ? __props.func_controle_disabled_delete_button(unref(selected)) : !unref(selected).length
                                }), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_tooltip, {
                                      activator: "parent",
                                      location: "top"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_icon, null, {
                                      default: withCtx(() => [
                                        createTextVNode(" mdi mdi-delete-outline ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("span", { class: "d-none d-xs-none d-sm-block" }, toDisplayString(__props.name_of_button_delete ? __props.name_of_button_delete : "Supprimer"), 1)
                                  ]),
                                  _: 2
                                }, 1040, ["disabled"])) : createCommentVNode("", true)
                              ]),
                              default: withCtx(({ isActive }) => [
                                createVNode(_component_v_card, { width: "350" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_card_text, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \xCAtes-vous s\xFBr ? "),
                                        createVNode("br"),
                                        createTextVNode(" Vous ne pourrez pas revenir en arri\xE8re ! ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("br"),
                                    createVNode(_component_v_card_actions, { class: "justify-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          variant: "text",
                                          onClick: ($event) => isActive.value = false
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("Retour")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(_component_v_btn, {
                                          onClick: ($event) => {
                                            destroy_();
                                            isActive.value = false;
                                          },
                                          style: { "color": "white", "background-color": "red !important" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(__props.text_of_validation_on_pop_up_confirm_delete ? __props.text_of_validation_on_pop_up_confirm_delete : "OUI, SUPPRIMER!"), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 3
                        }),
                        createVNode(_component_v_col, {
                          cols: "12",
                          class: "pa-0"
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "table_buttons", {
                              items: unref(items),
                              selected_object: unref(selected_object),
                              selected: unref(selected),
                              items_object: unref(items_object),
                              object_display_table: unref(object_display_table)
                            })
                          ]),
                          _: 3
                        }),
                        createVNode(_component_v_col, { cols: "12" }, {
                          default: withCtx(() => [
                            createVNode("div", null, toDisplayString(__props.title), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }),
                createVNode("div", { class: "row mx-3" }, [
                  createVNode(_component_v_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        class: "pb-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_text_field, {
                            modelValue: unref(search_text),
                            "onUpdate:modelValue": ($event) => isRef(search_text) ? search_text.value = $event : null,
                            label: "Rechercher",
                            class: "",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        class: "d-flex justify-center pt-1 mb-5",
                        cols: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            color: "#093e73",
                            class: "text-white",
                            onClick: search
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Rechercher")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_MaTable, {
                  with_selected: __props.with_selected == false ? false : true,
                  selected: unref(selected),
                  "onUpdate:selected": ($event) => isRef(selected) ? selected.value = $event : null,
                  items: unref(items),
                  "onUpdate:items": ($event) => isRef(items) ? items.value = $event : items = $event,
                  header: __props.columns,
                  filter: unref(filter),
                  "onUpdate:filter": ($event) => isRef(filter) ? filter.value = $event : null,
                  no_data: "Aucun \xE9l\xE9ment trouv\xE9.",
                  no_data_to_search: "Aucun \xE9l\xE9ment correspondant."
                }, createSlots({ _: 2 }, [
                  renderList(unref(columns_), (element) => {
                    return {
                      name: `header(${element.key})`,
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, `header(${element.key})`)
                      ])
                    };
                  }),
                  renderList(unref(columns_), (element) => {
                    return {
                      name: `item(${element.active_modif_column ? element.key : defaultSlot})`,
                      fn: withCtx(({ item, elt_item }) => [
                        renderSlot(_ctx.$slots, `cell(${element.key})`, {
                          items_object: unref(items_object),
                          value: item,
                          elt_item,
                          selected_object: unref(selected_object),
                          object_display_table: unref(object_display_table)
                        })
                      ])
                    };
                  })
                ]), 1032, ["with_selected", "selected", "onUpdate:selected", "items", "onUpdate:items", "header", "filter", "onUpdate:filter"])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Table = _sfc_main$2;
const _sfc_main$1 = {
  __name: "TableUnitEditSave",
  __ssrInlineRender: true,
  props: [
    "title",
    "api",
    "columns",
    "update",
    "add",
    "destroy",
    "destroy_route",
    "add_function",
    "update_function",
    "item_will_be_send",
    "click_come_to_acess_update",
    "destroy_function",
    "name_of_button_add",
    "name_of_button_edit",
    "name_of_button_delete",
    "func_controle_disabled_add_button",
    "func_controle_disabled_delete_button",
    "func_controle_disabled_update_button",
    "text_of_validation_on_pop_up_confirm_delete",
    "with_selected"
  ],
  emits: ["update:columns"],
  setup(__props) {
    ref([]);
    const columns_ = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><input style="${ssrRenderStyle({ display: "none" })}"${ssrRenderAttr("value", __props.columns)}>`);
      _push(ssrRenderComponent(Table, {
        item_will_be_send: __props.item_will_be_send,
        columns: __props.columns,
        title: __props.title,
        api: __props.api,
        update: __props.update,
        update_function: __props.update_function,
        add: __props.add,
        add_function: __props.add_function,
        destroy: __props.destroy,
        destroy_route: __props.destroy_route,
        click_come_to_acess_update: __props.click_come_to_acess_update,
        destroy_function: __props.destroy_function,
        name_of_button_add: __props.name_of_button_add,
        name_of_button_edit: __props.name_of_button_edit,
        name_of_button_delete: __props.name_of_button_delete,
        func_controle_disabled_add_button: __props.func_controle_disabled_add_button,
        func_controle_disabled_delete_button: __props.func_controle_disabled_delete_button,
        func_controle_disabled_update_button: __props.func_controle_disabled_update_button,
        text_of_validation_on_pop_up_confirm_delete: __props.text_of_validation_on_pop_up_confirm_delete,
        with_selected: __props.with_selected
      }, createSlots({
        top_form: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "top_form", {
              selected: props.selected,
              selected_object: props.selected_object,
              items: props.items,
              items_object: props.items_object,
              object_display_table: props.object_display_table
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "top_form", {
                selected: props.selected,
                selected_object: props.selected_object,
                items: props.items,
                items_object: props.items_object,
                object_display_table: props.object_display_table
              })
            ];
          }
        }),
        table_buttons: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "table_buttons", {
              selected: props.selected,
              selected_object: props.selected_object,
              items: props.items,
              items_object: props.items_object,
              object_display_table: props.object_display_table
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "table_buttons", {
                selected: props.selected,
                selected_object: props.selected_object,
                items: props.items,
                items_object: props.items_object,
                object_display_table: props.object_display_table
              })
            ];
          }
        }),
        save_replacement: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              item: props.item
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                item: props.item
              })
            ];
          }
        }),
        edit_replacement: withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {
              item: props.item
            }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {
                item: props.item
              })
            ];
          }
        }),
        _: 2
      }, [
        renderList(unref(columns_), (element) => {
          return {
            name: `header(${element.key})`,
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, `header(${element.key})`, {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, `header(${element.key})`)
                ];
              }
            })
          };
        }),
        renderList(unref(columns_), (element) => {
          return {
            name: `cell(${element.key})`,
            fn: withCtx(({ value, items_object, selected_object, object_display_table, elt_item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                ssrRenderSlot(_ctx.$slots, `cell(${element.key})`, {
                  value,
                  elt_item,
                  items_object,
                  selected_object,
                  object_display_table
                }, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  renderSlot(_ctx.$slots, `cell(${element.key})`, {
                    value,
                    elt_item,
                    items_object,
                    selected_object,
                    object_display_table
                  })
                ];
              }
            })
          };
        })
      ]), _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TableUnitEditSave.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "profils",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRequestHeaders(["cookie"]);
    useHead({ title: "Liste des profils" });
    let sn = useSnackbar();
    let roles = ref([]);
    let permissions = ref([]);
    ({ data: roles } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/users/profils", "$LZifoD8c9P")), __temp = await __temp, __restore(), __temp));
    ({ data: permissions } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/users/permissions", "$0ERabBRdGJ")), __temp = await __temp, __restore(), __temp));
    const columns = ref([{ key: "name", text: "Nom", active_modif_column: false }]);
    const api = ref("/api/users/profils");
    ref(null);
    const title = ref("Liste des profils");
    ref(["Masculin", "F\xE9minin"]);
    const destroy_route = ref("/api/users/profils");
    let breadcrumbs = ref([
      {
        text: "Utilisateurs & profils",
        to: "/tableau-de-bord/utilisateurs-profils"
      },
      {
        text: "Profils"
        //  to: "/tableau-de-bord/configuration/gestion-d-acceuil",
      }
    ]);
    async function add(value, items) {
      var _a, _b, _c, _d;
      try {
        let ret_value = await useFetch("/api/users/profils", {
          method: "POST",
          body: value
        }, "$ajQbpfFFRb");
        if (!ret_value.error.value) {
          items.value.items.push(value);
          sn.success("Enregistrement r\xE9ussi");
        } else {
          if (((_b = (_a = ret_value.error.value) == null ? void 0 : _a.data) == null ? void 0 : _b.message) === "Access interdit !") {
            sn.error("Vous n'avez pas le droit d'\xE9ffectuer cet ajout !");
          } else if ((_d = (_c = ret_value.error.value) == null ? void 0 : _c.data) == null ? void 0 : _d.message.startsWith("Authentification requise !")) {
            sn.error("Votre session est expir\xE9e, veuillez r\xE9actualiser la page !");
          }
        }
      } catch (error) {
        sn.warning("Nous n'avons pas pu effectuer l'op\xE9ration demand\xE9e. Veuillez actualiser la page et r\xE9essayer.");
      }
    }
    async function update(value, items_object) {
      var _a, _b, _c, _d;
      try {
        let ret_value = await useFetch("/api/users/profils", {
          method: "POST",
          body: value
        }, "$jcUtnP3qc7");
        if (!ret_value.error.value) {
          for (const iterator in items_object.value.items) {
            if (items_object.value.items[iterator].id == value.id) {
              items_object.value.items[iterator] = value;
            }
          }
          sn.success("Enregistrement r\xE9ussi");
        } else {
          if (((_b = (_a = ret_value.error.value) == null ? void 0 : _a.data) == null ? void 0 : _b.message) === "Access interdit !") {
            sn.error("Vous n'avez pas le droit d'\xE9ffectuer cette modification !");
          } else if ((_d = (_c = ret_value.error.value) == null ? void 0 : _c.data) == null ? void 0 : _d.message.startsWith("Authentification requise !")) {
            sn.error("Votre session est expir\xE9e, veuillez r\xE9actualiser la page !");
          }
        }
      } catch (error) {
        sn.warning("Nous n'avons pas pu effectuer l'op\xE9ration demand\xE9e. Veuillez actualiser la page et r\xE9essayer.");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_UBreadcrumbs = __nuxt_component_0;
      const _component_TableUnitEditSave = __nuxt_component_1;
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_textarea = resolveComponent("v-textarea");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        class: "",
        style: {}
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UBreadcrumbs, { items: unref(breadcrumbs) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableUnitEditSave, {
              api: unref(api),
              title: unref(title),
              update: true,
              update_function: update,
              columns: unref(columns),
              add: true,
              add_function: add,
              destroy: true,
              destroy_route: unref(destroy_route)
            }, {
              default: withCtx((props, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card_title, { class: "d-flex justify-space-between" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (props.item.id) {
                          _push4(`<span class="text-h5"${_scopeId3}>Modifier un profil</span>`);
                        } else {
                          _push4(`<span class="text-h5"${_scopeId3}>Enregistrer un profil</span>`);
                        }
                      } else {
                        return [
                          props.item.id ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-h5"
                          }, "Modifier un profil")) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-h5"
                          }, "Enregistrer un profil"))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_card_text, { style: { "overflow": "scroll" } }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: props.item.name,
                          "onUpdate:modelValue": ($event) => props.item.name = $event,
                          label: "Profil *",
                          rules: [(v) => !!v || "Le nom du profil est obligatoire"],
                          required: "",
                          variant: "outlined",
                          type: "text"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_autocomplete, {
                          modelValue: props.item.Permissions,
                          "onUpdate:modelValue": ($event) => props.item.Permissions = $event,
                          items: unref(permissions),
                          "item-title": "name",
                          "item-value": "slug",
                          label: "Permissions *",
                          "no-data-text": "Aucune donn\xE9e",
                          rules: [(v) => !!v || "Champ obligatoire"],
                          multiple: "",
                          "closable-chips": "",
                          chips: "",
                          "deletable-chips": "",
                          variant: "outlined",
                          auto: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_autocomplete, {
                          modelValue: props.item.Roles,
                          "onUpdate:modelValue": ($event) => props.item.Roles = $event,
                          items: unref(roles),
                          "item-title": "name",
                          "item-value": "id",
                          label: "Sous-profils ( les profils qui peuvent etre cr\xE9\xE9s par ce profil )",
                          "no-data-text": "Aucune donn\xE9e",
                          multiple: "",
                          "closable-chips": "",
                          chips: "",
                          "deletable-chips": "",
                          variant: "outlined",
                          auto: ""
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_textarea, {
                          label: "Description",
                          variant: "outlined",
                          modelValue: props.item.description,
                          "onUpdate:modelValue": ($event) => props.item.description = $event
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            modelValue: props.item.name,
                            "onUpdate:modelValue": ($event) => props.item.name = $event,
                            label: "Profil *",
                            rules: [(v) => !!v || "Le nom du profil est obligatoire"],
                            required: "",
                            variant: "outlined",
                            type: "text"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_autocomplete, {
                            modelValue: props.item.Permissions,
                            "onUpdate:modelValue": ($event) => props.item.Permissions = $event,
                            items: unref(permissions),
                            "item-title": "name",
                            "item-value": "slug",
                            label: "Permissions *",
                            "no-data-text": "Aucune donn\xE9e",
                            rules: [(v) => !!v || "Champ obligatoire"],
                            multiple: "",
                            "closable-chips": "",
                            chips: "",
                            "deletable-chips": "",
                            variant: "outlined",
                            auto: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                          createVNode(_component_v_autocomplete, {
                            modelValue: props.item.Roles,
                            "onUpdate:modelValue": ($event) => props.item.Roles = $event,
                            items: unref(roles),
                            "item-title": "name",
                            "item-value": "id",
                            label: "Sous-profils ( les profils qui peuvent etre cr\xE9\xE9s par ce profil )",
                            "no-data-text": "Aucune donn\xE9e",
                            multiple: "",
                            "closable-chips": "",
                            chips: "",
                            "deletable-chips": "",
                            variant: "outlined",
                            auto: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                          createVNode(_component_v_textarea, {
                            label: "Description",
                            variant: "outlined",
                            modelValue: props.item.description,
                            "onUpdate:modelValue": ($event) => props.item.description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card_title, { class: "d-flex justify-space-between" }, {
                      default: withCtx(() => [
                        props.item.id ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-h5"
                        }, "Modifier un profil")) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-h5"
                        }, "Enregistrer un profil"))
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_v_card_text, { style: { "overflow": "scroll" } }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: props.item.name,
                          "onUpdate:modelValue": ($event) => props.item.name = $event,
                          label: "Profil *",
                          rules: [(v) => !!v || "Le nom du profil est obligatoire"],
                          required: "",
                          variant: "outlined",
                          type: "text"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                        createVNode(_component_v_autocomplete, {
                          modelValue: props.item.Permissions,
                          "onUpdate:modelValue": ($event) => props.item.Permissions = $event,
                          items: unref(permissions),
                          "item-title": "name",
                          "item-value": "slug",
                          label: "Permissions *",
                          "no-data-text": "Aucune donn\xE9e",
                          rules: [(v) => !!v || "Champ obligatoire"],
                          multiple: "",
                          "closable-chips": "",
                          chips: "",
                          "deletable-chips": "",
                          variant: "outlined",
                          auto: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                        createVNode(_component_v_autocomplete, {
                          modelValue: props.item.Roles,
                          "onUpdate:modelValue": ($event) => props.item.Roles = $event,
                          items: unref(roles),
                          "item-title": "name",
                          "item-value": "id",
                          label: "Sous-profils ( les profils qui peuvent etre cr\xE9\xE9s par ce profil )",
                          "no-data-text": "Aucune donn\xE9e",
                          multiple: "",
                          "closable-chips": "",
                          chips: "",
                          "deletable-chips": "",
                          variant: "outlined",
                          auto: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                        createVNode(_component_v_textarea, {
                          label: "Description",
                          variant: "outlined",
                          modelValue: props.item.description,
                          "onUpdate:modelValue": ($event) => props.item.description = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UBreadcrumbs, { items: unref(breadcrumbs) }, null, 8, ["items"]),
              createVNode(_component_TableUnitEditSave, {
                api: unref(api),
                title: unref(title),
                update: true,
                update_function: update,
                columns: unref(columns),
                add: true,
                add_function: add,
                destroy: true,
                destroy_route: unref(destroy_route)
              }, {
                default: withCtx((props) => [
                  createVNode(_component_v_card_title, { class: "d-flex justify-space-between" }, {
                    default: withCtx(() => [
                      props.item.id ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-h5"
                      }, "Modifier un profil")) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-h5"
                      }, "Enregistrer un profil"))
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_v_card_text, { style: { "overflow": "scroll" } }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        modelValue: props.item.name,
                        "onUpdate:modelValue": ($event) => props.item.name = $event,
                        label: "Profil *",
                        rules: [(v) => !!v || "Le nom du profil est obligatoire"],
                        required: "",
                        variant: "outlined",
                        type: "text"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_autocomplete, {
                        modelValue: props.item.Permissions,
                        "onUpdate:modelValue": ($event) => props.item.Permissions = $event,
                        items: unref(permissions),
                        "item-title": "name",
                        "item-value": "slug",
                        label: "Permissions *",
                        "no-data-text": "Aucune donn\xE9e",
                        rules: [(v) => !!v || "Champ obligatoire"],
                        multiple: "",
                        "closable-chips": "",
                        chips: "",
                        "deletable-chips": "",
                        variant: "outlined",
                        auto: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                      createVNode(_component_v_autocomplete, {
                        modelValue: props.item.Roles,
                        "onUpdate:modelValue": ($event) => props.item.Roles = $event,
                        items: unref(roles),
                        "item-title": "name",
                        "item-value": "id",
                        label: "Sous-profils ( les profils qui peuvent etre cr\xE9\xE9s par ce profil )",
                        "no-data-text": "Aucune donn\xE9e",
                        multiple: "",
                        "closable-chips": "",
                        chips: "",
                        "deletable-chips": "",
                        variant: "outlined",
                        auto: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
                      createVNode(_component_v_textarea, {
                        label: "Description",
                        variant: "outlined",
                        modelValue: props.item.description,
                        "onUpdate:modelValue": ($event) => props.item.description = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 1
              }, 8, ["api", "title", "columns", "destroy_route"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tableau-de-bord/utilisateurs-profils/profils.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=profils-8ef6cc30.mjs.map
