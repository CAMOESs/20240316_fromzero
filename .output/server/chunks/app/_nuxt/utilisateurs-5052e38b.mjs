import { _ as __nuxt_component_0 } from './breadcrumbs-54bf79e0.mjs';
import { _ as __nuxt_component_1 } from './table-888c4305.mjs';
import { e as useHead, u as useSnackbar, b as useFetch } from '../server.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, isRef, toDisplayString, openBlock, createBlock, withModifiers, useSSRContext } from 'vue';
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
  __name: "utilisateurs",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Liste des utilisateurs" });
    let sn = useSnackbar();
    let selected = ref([]);
    let items = ref([]);
    let item = ref({});
    let roles = ref([]);
    let dialog_edit = ref(false);
    let delete_dialog = ref(false);
    let loading_user_list = ref(false);
    let btn_afficher = ref(false);
    let validForm = ref(false);
    let total_page = ref(1);
    let page = ref(1);
    let breadcrumbs = ref([
      {
        text: "Utilisateurs & profils",
        to: "/tableau-de-bord/utilisateurs-profils"
      },
      {
        text: "Utilisateurs"
        //  to: "/tableau-de-bord/configuration/gestion-d-acceuil",
      }
    ]);
    const headers = ref([
      {
        key: "numero",
        text: "N\xB0",
        active_modif_column: true
      },
      { key: "lastname", text: "Nom", active_modif_column: false },
      { key: "firstname", text: "Pr\xE9nom(s)", active_modif_column: false },
      { key: "phone_number", text: "T\xE9l\xE9phone", active_modif_column: false },
      { key: "email", text: "Email", active_modif_column: false },
      { key: "role_user", text: "Profil", active_modif_column: true },
      { key: "login_at", text: "Dernier acc\xE8s", active_modif_column: true },
      /* {key:"is_change_password",text:"A changé son mot de passe", active_modif_column:true}, */
      { key: "can_auth", text: "Statut", active_modif_column: true }
    ]);
    ref("/api/users-pagination");
    ref("Liste des utilisateurs");
    const sexe = ref(["M", "F"]);
    const required_message = ref("Veuillez renseigner ce champ.");
    ({ data: roles } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/users/profils", "$yi3b3ZX5iY")), __temp = await __temp, __restore(), __temp));
    async function getUsers(page_) {
      var _a, _b;
      let res = {};
      loading_user_list.value = true;
      selected.value = [];
      try {
        res = await useFetch("/api/users/", {
          params: {
            page: page_
          }
        }, "$JoGDrL1HJi");
        if ((_a = res.data.value) == null ? void 0 : _a.error)
          throw "";
        items.value = res.data.value.data;
        total_page.value = res.data.value.length;
        page.value = page_;
      } catch (error) {
        console.log(error);
        sn.error((_b = res.data.value) == null ? void 0 : _b.error);
      }
      loading_user_list.value = false;
    }
    async function save() {
      if (!validForm.value)
        return;
      btn_afficher.value = true;
    }
    function open_delete_dialog() {
      delete_dialog.value = true;
    }
    function open_edit_dialog(create) {
      console.log("create");
      console.log(create);
      if (create) {
        dialog_edit.value = true;
        item.value = {
          Roles: []
        };
      } else if (Array.isArray(selected.value) && selected.value[0]) {
        item.value = selected.value[0];
        dialog_edit.value = true;
      }
    }
    [__temp, __restore] = withAsyncContext(() => getUsers(1)), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UBreadcrumbs = __nuxt_component_0;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_MaTable = __nuxt_component_1;
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_pagination = resolveComponent("v-pagination");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_select = resolveComponent("v-select");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UBreadcrumbs, { items: unref(breadcrumbs) }, null, _parent));
      _push(`<div>`);
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
        "item(role_user)": withCtx(({ elt_item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>${ssrInterpolate(elt_item.role_to_one_user)}</div>`);
          } else {
            return [
              createVNode("div", { style: { "text-align": "center" } }, toDisplayString(elt_item.role_to_one_user), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<template><div class="text-center">`);
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { justify: "center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_container, { class: "max-width" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_pagination, {
                                modelValue: unref(page),
                                "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : page = $event,
                                class: "my-4",
                                length: 2
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_pagination, {
                                  modelValue: unref(page),
                                  "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : page = $event,
                                  class: "my-4",
                                  length: 2
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_container, { class: "max-width" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_pagination, {
                                modelValue: unref(page),
                                "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : page = $event,
                                class: "my-4",
                                length: 2
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                    createVNode(_component_v_col, { cols: "8" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, { class: "max-width" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_pagination, {
                              modelValue: unref(page),
                              "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : page = $event,
                              class: "my-4",
                              length: 2
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
              createVNode(_component_v_row, { justify: "center" }, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "8" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_container, { class: "max-width" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_pagination, {
                            modelValue: unref(page),
                            "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : page = $event,
                            class: "my-4",
                            length: 2
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(`</div></template><div>`);
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
                          _push4(`<span class="text-h5"${_scopeId3}>Modifier un utilisateur</span>`);
                        } else {
                          _push4(`<span class="text-h5"${_scopeId3}>Enregistrer un utilisateur</span>`);
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
                          }, "Modifier un utilisateur")) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-h5"
                          }, "Enregistrer un utilisateur")),
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
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).email,
                                "onUpdate:modelValue": ($event) => unref(item).email = $event,
                                label: "Email *",
                                rules: [(v) => /.@./.test(v) || unref(required_message)],
                                placeholder: "email@gmail.com",
                                type: "email",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_autocomplete, {
                                modelValue: unref(item).Roles,
                                "onUpdate:modelValue": ($event) => unref(item).Roles = $event,
                                items: unref(roles),
                                "item-title": "name",
                                "item-value": "slug",
                                label: "Profils *",
                                "no-data-text": "Aucune donn\xE9e",
                                multiple: "",
                                "closable-chips": "",
                                chips: "",
                                clearable: "",
                                "deletable-chips": "",
                                variant: "outlined",
                                rules: [(v) => v.length > 0 || unref(required_message)]
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).lastname,
                                "onUpdate:modelValue": ($event) => unref(item).lastname = $event,
                                label: "Nom *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).firstname,
                                "onUpdate:modelValue": ($event) => unref(item).firstname = $event,
                                label: "Pr\xE9nom(s) *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_select, {
                                modelValue: unref(item).sex,
                                "onUpdate:modelValue": ($event) => unref(item).sex = $event,
                                items: unref(sexe),
                                rules: [(v) => !!v || unref(required_message)],
                                clearable: "",
                                "deletable-chips": "",
                                variant: "outlined",
                                label: "Sexe *"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).date_of_birth,
                                "onUpdate:modelValue": ($event) => unref(item).date_of_birth = $event,
                                label: "Date de naissance *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "date",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).place_of_birth,
                                "onUpdate:modelValue": ($event) => unref(item).place_of_birth = $event,
                                label: "Lieu de naissance *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).nationality,
                                "onUpdate:modelValue": ($event) => unref(item).nationality = $event,
                                label: "Nationalit\xE9 *",
                                placeholder: "B\xE9nin",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).phone_number,
                                "onUpdate:modelValue": ($event) => unref(item).phone_number = $event,
                                label: "T\xE9l\xE9phone *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).password,
                                "onUpdate:modelValue": ($event) => unref(item).password = $event,
                                label: unref(item).id ? "Mot de passe" : "Mot de passe *",
                                rules: unref(item).id ? [] : [(v) => !!v || unref(required_message)],
                                type: "password",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_text_field, {
                                modelValue: unref(item).confirm_password,
                                "onUpdate:modelValue": ($event) => unref(item).confirm_password = $event,
                                label: unref(item).id ? unref(item).password ? "Confirmation du mot de passe *" : "Confirmation du mot de passe" : "Confirmation du mot de passe *",
                                rules: [
                                  (v) => unref(item).password === v || (unref(item).confirm_password ? "Le mot de passe ne correspond pas" : unref(required_message))
                                ],
                                type: "password",
                                variant: "outlined"
                              }, null, _parent5, _scopeId4));
                              _push5(`<div class="d-flex justify-end"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_v_btn, {
                                color: "secondary",
                                text: "",
                                onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                                variant: "outlined",
                                class: "mr-2"
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
                                loading: unref(btn_afficher),
                                onClick: ($event) => save()
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
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).email,
                                  "onUpdate:modelValue": ($event) => unref(item).email = $event,
                                  label: "Email *",
                                  rules: [(v) => /.@./.test(v) || unref(required_message)],
                                  placeholder: "email@gmail.com",
                                  type: "email",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_autocomplete, {
                                  modelValue: unref(item).Roles,
                                  "onUpdate:modelValue": ($event) => unref(item).Roles = $event,
                                  items: unref(roles),
                                  "item-title": "name",
                                  "item-value": "slug",
                                  label: "Profils *",
                                  "no-data-text": "Aucune donn\xE9e",
                                  multiple: "",
                                  "closable-chips": "",
                                  chips: "",
                                  clearable: "",
                                  "deletable-chips": "",
                                  variant: "outlined",
                                  rules: [(v) => v.length > 0 || unref(required_message)]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).lastname,
                                  "onUpdate:modelValue": ($event) => unref(item).lastname = $event,
                                  label: "Nom *",
                                  rules: [(v) => !!v || unref(required_message)],
                                  type: "text",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).firstname,
                                  "onUpdate:modelValue": ($event) => unref(item).firstname = $event,
                                  label: "Pr\xE9nom(s) *",
                                  rules: [(v) => !!v || unref(required_message)],
                                  type: "text",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_select, {
                                  modelValue: unref(item).sex,
                                  "onUpdate:modelValue": ($event) => unref(item).sex = $event,
                                  items: unref(sexe),
                                  rules: [(v) => !!v || unref(required_message)],
                                  clearable: "",
                                  "deletable-chips": "",
                                  variant: "outlined",
                                  label: "Sexe *"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).date_of_birth,
                                  "onUpdate:modelValue": ($event) => unref(item).date_of_birth = $event,
                                  label: "Date de naissance *",
                                  rules: [(v) => !!v || unref(required_message)],
                                  type: "date",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).place_of_birth,
                                  "onUpdate:modelValue": ($event) => unref(item).place_of_birth = $event,
                                  label: "Lieu de naissance *",
                                  rules: [(v) => !!v || unref(required_message)],
                                  type: "text",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).nationality,
                                  "onUpdate:modelValue": ($event) => unref(item).nationality = $event,
                                  label: "Nationalit\xE9 *",
                                  placeholder: "B\xE9nin",
                                  rules: [(v) => !!v || unref(required_message)],
                                  type: "text",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).phone_number,
                                  "onUpdate:modelValue": ($event) => unref(item).phone_number = $event,
                                  label: "T\xE9l\xE9phone *",
                                  rules: [(v) => !!v || unref(required_message)],
                                  type: "text",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).password,
                                  "onUpdate:modelValue": ($event) => unref(item).password = $event,
                                  label: unref(item).id ? "Mot de passe" : "Mot de passe *",
                                  rules: unref(item).id ? [] : [(v) => !!v || unref(required_message)],
                                  type: "password",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                createVNode(_component_v_text_field, {
                                  modelValue: unref(item).confirm_password,
                                  "onUpdate:modelValue": ($event) => unref(item).confirm_password = $event,
                                  label: unref(item).id ? unref(item).password ? "Confirmation du mot de passe *" : "Confirmation du mot de passe" : "Confirmation du mot de passe *",
                                  rules: [
                                    (v) => unref(item).password === v || (unref(item).confirm_password ? "Le mot de passe ne correspond pas" : unref(required_message))
                                  ],
                                  type: "password",
                                  variant: "outlined"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                                createVNode("div", { class: "d-flex justify-end" }, [
                                  createVNode(_component_v_btn, {
                                    color: "secondary",
                                    text: "",
                                    onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                                    variant: "outlined",
                                    class: "mr-2"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Fermer ")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_v_btn, {
                                    disabled: unref(validForm) == false,
                                    color: "#093e73",
                                    type: "submit",
                                    class: "text-white",
                                    loading: unref(btn_afficher),
                                    onClick: ($event) => save()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Enregistrer ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "loading", "onClick"])
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
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).email,
                                "onUpdate:modelValue": ($event) => unref(item).email = $event,
                                label: "Email *",
                                rules: [(v) => /.@./.test(v) || unref(required_message)],
                                placeholder: "email@gmail.com",
                                type: "email",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_autocomplete, {
                                modelValue: unref(item).Roles,
                                "onUpdate:modelValue": ($event) => unref(item).Roles = $event,
                                items: unref(roles),
                                "item-title": "name",
                                "item-value": "slug",
                                label: "Profils *",
                                "no-data-text": "Aucune donn\xE9e",
                                multiple: "",
                                "closable-chips": "",
                                chips: "",
                                clearable: "",
                                "deletable-chips": "",
                                variant: "outlined",
                                rules: [(v) => v.length > 0 || unref(required_message)]
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).lastname,
                                "onUpdate:modelValue": ($event) => unref(item).lastname = $event,
                                label: "Nom *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).firstname,
                                "onUpdate:modelValue": ($event) => unref(item).firstname = $event,
                                label: "Pr\xE9nom(s) *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_select, {
                                modelValue: unref(item).sex,
                                "onUpdate:modelValue": ($event) => unref(item).sex = $event,
                                items: unref(sexe),
                                rules: [(v) => !!v || unref(required_message)],
                                clearable: "",
                                "deletable-chips": "",
                                variant: "outlined",
                                label: "Sexe *"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).date_of_birth,
                                "onUpdate:modelValue": ($event) => unref(item).date_of_birth = $event,
                                label: "Date de naissance *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "date",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).place_of_birth,
                                "onUpdate:modelValue": ($event) => unref(item).place_of_birth = $event,
                                label: "Lieu de naissance *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).nationality,
                                "onUpdate:modelValue": ($event) => unref(item).nationality = $event,
                                label: "Nationalit\xE9 *",
                                placeholder: "B\xE9nin",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).phone_number,
                                "onUpdate:modelValue": ($event) => unref(item).phone_number = $event,
                                label: "T\xE9l\xE9phone *",
                                rules: [(v) => !!v || unref(required_message)],
                                type: "text",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).password,
                                "onUpdate:modelValue": ($event) => unref(item).password = $event,
                                label: unref(item).id ? "Mot de passe" : "Mot de passe *",
                                rules: unref(item).id ? [] : [(v) => !!v || unref(required_message)],
                                type: "password",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                              createVNode(_component_v_text_field, {
                                modelValue: unref(item).confirm_password,
                                "onUpdate:modelValue": ($event) => unref(item).confirm_password = $event,
                                label: unref(item).id ? unref(item).password ? "Confirmation du mot de passe *" : "Confirmation du mot de passe" : "Confirmation du mot de passe *",
                                rules: [
                                  (v) => unref(item).password === v || (unref(item).confirm_password ? "Le mot de passe ne correspond pas" : unref(required_message))
                                ],
                                type: "password",
                                variant: "outlined"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                              createVNode("div", { class: "d-flex justify-end" }, [
                                createVNode(_component_v_btn, {
                                  color: "secondary",
                                  text: "",
                                  onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                                  variant: "outlined",
                                  class: "mr-2"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Fermer ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_v_btn, {
                                  disabled: unref(validForm) == false,
                                  color: "#093e73",
                                  type: "submit",
                                  class: "text-white",
                                  loading: unref(btn_afficher),
                                  onClick: ($event) => save()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Enregistrer ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "loading", "onClick"])
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
                        }, "Modifier un utilisateur")) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "text-h5"
                        }, "Enregistrer un utilisateur")),
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
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).email,
                              "onUpdate:modelValue": ($event) => unref(item).email = $event,
                              label: "Email *",
                              rules: [(v) => /.@./.test(v) || unref(required_message)],
                              placeholder: "email@gmail.com",
                              type: "email",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_v_autocomplete, {
                              modelValue: unref(item).Roles,
                              "onUpdate:modelValue": ($event) => unref(item).Roles = $event,
                              items: unref(roles),
                              "item-title": "name",
                              "item-value": "slug",
                              label: "Profils *",
                              "no-data-text": "Aucune donn\xE9e",
                              multiple: "",
                              "closable-chips": "",
                              chips: "",
                              clearable: "",
                              "deletable-chips": "",
                              variant: "outlined",
                              rules: [(v) => v.length > 0 || unref(required_message)]
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).lastname,
                              "onUpdate:modelValue": ($event) => unref(item).lastname = $event,
                              label: "Nom *",
                              rules: [(v) => !!v || unref(required_message)],
                              type: "text",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).firstname,
                              "onUpdate:modelValue": ($event) => unref(item).firstname = $event,
                              label: "Pr\xE9nom(s) *",
                              rules: [(v) => !!v || unref(required_message)],
                              type: "text",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_v_select, {
                              modelValue: unref(item).sex,
                              "onUpdate:modelValue": ($event) => unref(item).sex = $event,
                              items: unref(sexe),
                              rules: [(v) => !!v || unref(required_message)],
                              clearable: "",
                              "deletable-chips": "",
                              variant: "outlined",
                              label: "Sexe *"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).date_of_birth,
                              "onUpdate:modelValue": ($event) => unref(item).date_of_birth = $event,
                              label: "Date de naissance *",
                              rules: [(v) => !!v || unref(required_message)],
                              type: "date",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).place_of_birth,
                              "onUpdate:modelValue": ($event) => unref(item).place_of_birth = $event,
                              label: "Lieu de naissance *",
                              rules: [(v) => !!v || unref(required_message)],
                              type: "text",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).nationality,
                              "onUpdate:modelValue": ($event) => unref(item).nationality = $event,
                              label: "Nationalit\xE9 *",
                              placeholder: "B\xE9nin",
                              rules: [(v) => !!v || unref(required_message)],
                              type: "text",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).phone_number,
                              "onUpdate:modelValue": ($event) => unref(item).phone_number = $event,
                              label: "T\xE9l\xE9phone *",
                              rules: [(v) => !!v || unref(required_message)],
                              type: "text",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).password,
                              "onUpdate:modelValue": ($event) => unref(item).password = $event,
                              label: unref(item).id ? "Mot de passe" : "Mot de passe *",
                              rules: unref(item).id ? [] : [(v) => !!v || unref(required_message)],
                              type: "password",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                            createVNode(_component_v_text_field, {
                              modelValue: unref(item).confirm_password,
                              "onUpdate:modelValue": ($event) => unref(item).confirm_password = $event,
                              label: unref(item).id ? unref(item).password ? "Confirmation du mot de passe *" : "Confirmation du mot de passe" : "Confirmation du mot de passe *",
                              rules: [
                                (v) => unref(item).password === v || (unref(item).confirm_password ? "Le mot de passe ne correspond pas" : unref(required_message))
                              ],
                              type: "password",
                              variant: "outlined"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                            createVNode("div", { class: "d-flex justify-end" }, [
                              createVNode(_component_v_btn, {
                                color: "secondary",
                                text: "",
                                onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                                variant: "outlined",
                                class: "mr-2"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Fermer ")
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_v_btn, {
                                disabled: unref(validForm) == false,
                                color: "#093e73",
                                type: "submit",
                                class: "text-white",
                                loading: unref(btn_afficher),
                                onClick: ($event) => save()
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Enregistrer ")
                                ]),
                                _: 1
                              }, 8, ["disabled", "loading", "onClick"])
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
                      }, "Modifier un utilisateur")) : (openBlock(), createBlock("span", {
                        key: 1,
                        class: "text-h5"
                      }, "Enregistrer un utilisateur")),
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
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).email,
                            "onUpdate:modelValue": ($event) => unref(item).email = $event,
                            label: "Email *",
                            rules: [(v) => /.@./.test(v) || unref(required_message)],
                            placeholder: "email@gmail.com",
                            type: "email",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_autocomplete, {
                            modelValue: unref(item).Roles,
                            "onUpdate:modelValue": ($event) => unref(item).Roles = $event,
                            items: unref(roles),
                            "item-title": "name",
                            "item-value": "slug",
                            label: "Profils *",
                            "no-data-text": "Aucune donn\xE9e",
                            multiple: "",
                            "closable-chips": "",
                            chips: "",
                            clearable: "",
                            "deletable-chips": "",
                            variant: "outlined",
                            rules: [(v) => v.length > 0 || unref(required_message)]
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).lastname,
                            "onUpdate:modelValue": ($event) => unref(item).lastname = $event,
                            label: "Nom *",
                            rules: [(v) => !!v || unref(required_message)],
                            type: "text",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).firstname,
                            "onUpdate:modelValue": ($event) => unref(item).firstname = $event,
                            label: "Pr\xE9nom(s) *",
                            rules: [(v) => !!v || unref(required_message)],
                            type: "text",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_select, {
                            modelValue: unref(item).sex,
                            "onUpdate:modelValue": ($event) => unref(item).sex = $event,
                            items: unref(sexe),
                            rules: [(v) => !!v || unref(required_message)],
                            clearable: "",
                            "deletable-chips": "",
                            variant: "outlined",
                            label: "Sexe *"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).date_of_birth,
                            "onUpdate:modelValue": ($event) => unref(item).date_of_birth = $event,
                            label: "Date de naissance *",
                            rules: [(v) => !!v || unref(required_message)],
                            type: "date",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).place_of_birth,
                            "onUpdate:modelValue": ($event) => unref(item).place_of_birth = $event,
                            label: "Lieu de naissance *",
                            rules: [(v) => !!v || unref(required_message)],
                            type: "text",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).nationality,
                            "onUpdate:modelValue": ($event) => unref(item).nationality = $event,
                            label: "Nationalit\xE9 *",
                            placeholder: "B\xE9nin",
                            rules: [(v) => !!v || unref(required_message)],
                            type: "text",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).phone_number,
                            "onUpdate:modelValue": ($event) => unref(item).phone_number = $event,
                            label: "T\xE9l\xE9phone *",
                            rules: [(v) => !!v || unref(required_message)],
                            type: "text",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).password,
                            "onUpdate:modelValue": ($event) => unref(item).password = $event,
                            label: unref(item).id ? "Mot de passe" : "Mot de passe *",
                            rules: unref(item).id ? [] : [(v) => !!v || unref(required_message)],
                            type: "password",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: unref(item).confirm_password,
                            "onUpdate:modelValue": ($event) => unref(item).confirm_password = $event,
                            label: unref(item).id ? unref(item).password ? "Confirmation du mot de passe *" : "Confirmation du mot de passe" : "Confirmation du mot de passe *",
                            rules: [
                              (v) => unref(item).password === v || (unref(item).confirm_password ? "Le mot de passe ne correspond pas" : unref(required_message))
                            ],
                            type: "password",
                            variant: "outlined"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "rules"]),
                          createVNode("div", { class: "d-flex justify-end" }, [
                            createVNode(_component_v_btn, {
                              color: "secondary",
                              text: "",
                              onClick: ($event) => isRef(dialog_edit) ? dialog_edit.value = false : dialog_edit = false,
                              variant: "outlined",
                              class: "mr-2"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Fermer ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_v_btn, {
                              disabled: unref(validForm) == false,
                              color: "#093e73",
                              type: "submit",
                              class: "text-white",
                              loading: unref(btn_afficher),
                              onClick: ($event) => save()
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Enregistrer ")
                              ]),
                              _: 1
                            }, 8, ["disabled", "loading", "onClick"])
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
                    class: "mr-2"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Fermer `);
                      } else {
                        return [
                          createTextVNode(" Fermer ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    disabled: unref(validForm) == false,
                    color: "red",
                    type: "submit",
                    class: "text-white",
                    onClick: ($event) => save()
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Supprimer `);
                      } else {
                        return [
                          createTextVNode(" Supprimer ")
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
                          class: "mr-2"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Fermer ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_btn, {
                          disabled: unref(validForm) == false,
                          color: "red",
                          type: "submit",
                          class: "text-white",
                          onClick: ($event) => save()
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Supprimer ")
                          ]),
                          _: 1
                        }, 8, ["disabled", "onClick"])
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
                        class: "mr-2"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Fermer ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_btn, {
                        disabled: unref(validForm) == false,
                        color: "red",
                        type: "submit",
                        class: "text-white",
                        onClick: ($event) => save()
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Supprimer ")
                        ]),
                        _: 1
                      }, 8, ["disabled", "onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tableau-de-bord/utilisateurs-profils/utilisateurs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=utilisateurs-5052e38b.mjs.map
