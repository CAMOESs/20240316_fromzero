import { u as useSnackbar, a as useSession, b as useFetch } from '../server.mjs';
import { withAsyncContext, ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, createCommentVNode, withDirectives, vShow, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "mon-compte",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    let sn = useSnackbar();
    const session_information = ([__temp, __restore] = withAsyncContext(() => useSession()), __temp = await __temp, __restore(), __temp);
    const item = ref({});
    ref("");
    const disabled_card = ref(true);
    const form = ref(null);
    const required_message = ref("Ce champ est obligatoire");
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    ref({ number: "", valid: true });
    ref(true);
    item.value.id = session_information.data.value.user.personal_id;
    function click_edit() {
      disabled_card.value = false;
    }
    function have_access_to_people() {
      return !(session_information && session_information.data && session_information.data.value && session_information.data.value.user && (session_information.data.value.user.student_id || session_information.data.value.user.personal_id));
    }
    async function initialize() {
      try {
        if (have_access_to_people()) {
          if (session_information && session_information.data && session_information.data.value && session_information.data.value.user && session_information.data.value.user.id) {
            const { error, data } = await useFetch("/api/users/my-account?id=" + session_information.data.value.user.id, "$uUEnpUFsrC");
            if (!error || !error.value) {
              if (data.value.length > 0) {
                data.value[0].date_of_birth = new Date(data.value[0].date_of_birth).toLocaleDateString("af");
                item.value = data.value[0];
              } else
                sn.error("Nous n'avons pas pu effectuer l'op\xE9ration demand\xE9e. Veuillez actualiser la page et r\xE9essayer. ");
            } else {
              sn.error("Nous n'avons pas pu effectuer l'op\xE9ration demand\xE9e. Veuillez actualiser la page et r\xE9essayer. ");
            }
          }
        }
      } catch (error) {
      }
    }
    [__temp, __restore] = withAsyncContext(() => initialize()), await __temp, __restore();
    async function save() {
      if ((await form.value.validate()).valid) {
        try {
          if (session_information && session_information.data && session_information.data.value && session_information.data.value.user && session_information.data.value.user.school_id || !have_access_to_people()) {
            const { error, data } = await useFetch("/api/my-account-school", {
              method: "POST",
              body: { ...item.value, password: item.value.password, confirm_password: item.value.confirm_password }
            }, "$ih968LuDcp");
            if (!error || !error.value) {
              disabled_card.value = true;
              sn.success("Enregistrement \xE9ffectu\xE9 avec succ\xE8s");
            } else {
              console.log(error.value);
              sn.error("Enregistrement \xE9chou\xE9");
            }
          } else if (session_information && session_information.data && session_information.data.value && session_information.data.value.user && session_information.data.value.user.id) {
            const { error, data } = await useFetch("/api/users/my-account", {
              method: "POST",
              body: { ...item.value, id: session_information.data.value.user.id }
            }, "$YIgs5SrC8G");
            if (!error || !error.value) {
              disabled_card.value = true;
              sn.success("Enregistrement \xE9ffectu\xE9 avec succ\xE8s");
            } else {
              sn.error("Enregistrement \xE9chou\xE9");
            }
          }
        } catch (error) {
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_select = resolveComponent("v-select");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-10" }, _attrs))}>`);
      if (unref(disabled_card)) {
        _push(ssrRenderComponent(_component_v_btn, {
          class: "mx-2 mt-6",
          style: { "color": "white" },
          onClick: ($event) => click_edit(),
          color: "#093e73"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_icon, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` mdi mdi-pencil `);
                  } else {
                    return [
                      createTextVNode(" mdi mdi-pencil ")
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
                    createTextVNode(" mdi mdi-pencil ")
                  ]),
                  _: 1
                }),
                createVNode("span", { class: "d-none d-xs-none d-sm-block" }, "Modifier")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_card, { class: "mx-2 mb-6 mt-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_form, {
              ref_key: "form",
              ref: form,
              class: "ma-3",
              disabled: unref(disabled_card)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  if (have_access_to_people()) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_v_text_field, {
                      modelValue: unref(item).lastname,
                      "onUpdate:modelValue": ($event) => unref(item).lastname = $event,
                      label: "Nom *",
                      variant: "outlined",
                      type: "text",
                      rules: [(v) => !!v || unref(required_message)]
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_text_field, {
                      modelValue: unref(item).firstname,
                      "onUpdate:modelValue": ($event) => unref(item).firstname = $event,
                      label: "Pr\xE9noms *",
                      variant: "outlined",
                      type: "text",
                      rules: [(v) => !!v || unref(required_message)]
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_text_field, {
                      modelValue: unref(item).email,
                      "onUpdate:modelValue": ($event) => unref(item).email = $event,
                      label: "Email *",
                      variant: "outlined",
                      type: "text",
                      rules: [(v) => !!v || unref(required_message)]
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_select, {
                      modelValue: unref(item).sex,
                      "onUpdate:modelValue": ($event) => unref(item).sex = $event,
                      items: ["M", "F"],
                      rules: [(v) => !!v || unref(required_message)],
                      clearable: "",
                      "deletable-chips": "",
                      variant: "outlined",
                      label: "Sexe *"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_text_field, {
                      modelValue: unref(item).phone_number,
                      "onUpdate:modelValue": ($event) => unref(item).phone_number = $event,
                      label: "Num\xE9ro de t\xE9l\xE9phone *",
                      variant: "outlined",
                      type: "text",
                      rules: [(v) => !!v || unref(required_message)]
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_text_field, {
                      modelValue: unref(item).place_of_birth,
                      "onUpdate:modelValue": ($event) => unref(item).place_of_birth = $event,
                      label: "Lieu de naissance *",
                      variant: "outlined",
                      type: "text",
                      rules: [(v) => !!v || unref(required_message)]
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_text_field, {
                      modelValue: unref(item).nationality,
                      "onUpdate:modelValue": ($event) => unref(item).nationality = $event,
                      label: "Nationalit\xE9 *",
                      variant: "outlined",
                      type: "text",
                      rules: [(v) => !!v || unref(required_message)]
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_v_text_field, {
                      modelValue: unref(item).date_of_birth,
                      "onUpdate:modelValue": ($event) => unref(item).date_of_birth = $event,
                      label: "Date de naissance *",
                      variant: "outlined",
                      type: "date",
                      rules: [(v) => !!v || unref(required_message)]
                    }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: unref(item).password,
                    "onUpdate:modelValue": [($event) => unref(item).password = $event, ($event) => unref(item).password ? "" : unref(item).confirm_password = ""],
                    modelModifiers: { trim: true },
                    label: "Mot de passe",
                    "append-inner-icon": unref(showPassword) ? "mdi-eye" : "mdi-eye-off",
                    type: unref(showPassword) ? "text" : "password",
                    "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                    variant: "outlined",
                    messages: "Les espaces au d\xE9but et \xE0 la fin ne sont pas consid\xE9r\xE9s"
                  }, null, _parent3, _scopeId2));
                  if ((_a = unref(item).password) == null ? void 0 : _a.trim()) {
                    _push3(ssrRenderComponent(_component_v_text_field, {
                      "append-inner-icon": unref(showConfirmPassword) ? "mdi-eye" : "mdi-eye-off",
                      type: unref(showConfirmPassword) ? "text" : "password",
                      modelValue: unref(item).confirm_password,
                      "onUpdate:modelValue": ($event) => unref(item).confirm_password = $event,
                      label: "Confirmation du mot de passe *",
                      variant: "outlined",
                      "onClick:appendInner": ($event) => showConfirmPassword.value = !unref(showConfirmPassword),
                      rules: [(v) => v === unref(item).password || "Le mot de passe ne correspond pas"],
                      color: unref(item).confirm_password == unref(item).password ? "green" : "blue"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_v_btn, {
                    onClick: ($event) => save(),
                    style: [
                      !unref(disabled_card) ? null : { display: "none" },
                      { "color": "white" }
                    ],
                    elevation: 5,
                    block: "",
                    class: "mt-2",
                    color: "#093e73"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Enregistrer`);
                      } else {
                        return [
                          createTextVNode("Enregistrer")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    have_access_to_people() ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).lastname,
                        "onUpdate:modelValue": ($event) => unref(item).lastname = $event,
                        label: "Nom *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).firstname,
                        "onUpdate:modelValue": ($event) => unref(item).firstname = $event,
                        label: "Pr\xE9noms *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).email,
                        "onUpdate:modelValue": ($event) => unref(item).email = $event,
                        label: "Email *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_select, {
                        modelValue: unref(item).sex,
                        "onUpdate:modelValue": ($event) => unref(item).sex = $event,
                        items: ["M", "F"],
                        rules: [(v) => !!v || unref(required_message)],
                        clearable: "",
                        "deletable-chips": "",
                        variant: "outlined",
                        label: "Sexe *"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).phone_number,
                        "onUpdate:modelValue": ($event) => unref(item).phone_number = $event,
                        label: "Num\xE9ro de t\xE9l\xE9phone *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).place_of_birth,
                        "onUpdate:modelValue": ($event) => unref(item).place_of_birth = $event,
                        label: "Lieu de naissance *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).nationality,
                        "onUpdate:modelValue": ($event) => unref(item).nationality = $event,
                        label: "Nationalit\xE9 *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).date_of_birth,
                        "onUpdate:modelValue": ($event) => unref(item).date_of_birth = $event,
                        label: "Date de naissance *",
                        variant: "outlined",
                        type: "date",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ], 64)) : createCommentVNode("", true),
                    createVNode(_component_v_text_field, {
                      modelValue: unref(item).password,
                      "onUpdate:modelValue": [($event) => unref(item).password = $event, ($event) => unref(item).password ? "" : unref(item).confirm_password = ""],
                      modelModifiers: { trim: true },
                      label: "Mot de passe",
                      "append-inner-icon": unref(showPassword) ? "mdi-eye" : "mdi-eye-off",
                      type: unref(showPassword) ? "text" : "password",
                      "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                      variant: "outlined",
                      messages: "Les espaces au d\xE9but et \xE0 la fin ne sont pas consid\xE9r\xE9s"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "onClick:appendInner"]),
                    ((_b = unref(item).password) == null ? void 0 : _b.trim()) ? (openBlock(), createBlock(_component_v_text_field, {
                      key: 1,
                      "append-inner-icon": unref(showConfirmPassword) ? "mdi-eye" : "mdi-eye-off",
                      type: unref(showConfirmPassword) ? "text" : "password",
                      modelValue: unref(item).confirm_password,
                      "onUpdate:modelValue": ($event) => unref(item).confirm_password = $event,
                      label: "Confirmation du mot de passe *",
                      variant: "outlined",
                      "onClick:appendInner": ($event) => showConfirmPassword.value = !unref(showConfirmPassword),
                      rules: [(v) => v === unref(item).password || "Le mot de passe ne correspond pas"],
                      color: unref(item).confirm_password == unref(item).password ? "green" : "blue"
                    }, null, 8, ["append-inner-icon", "type", "modelValue", "onUpdate:modelValue", "onClick:appendInner", "rules", "color"])) : createCommentVNode("", true),
                    withDirectives(createVNode(_component_v_btn, {
                      onClick: ($event) => save(),
                      elevation: 5,
                      block: "",
                      class: "mt-2",
                      style: { "color": "white" },
                      color: "#093e73"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Enregistrer")
                      ]),
                      _: 1
                    }, 8, ["onClick"]), [
                      [vShow, !unref(disabled_card)]
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_form, {
                ref_key: "form",
                ref: form,
                class: "ma-3",
                disabled: unref(disabled_card)
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    have_access_to_people() ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).lastname,
                        "onUpdate:modelValue": ($event) => unref(item).lastname = $event,
                        label: "Nom *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).firstname,
                        "onUpdate:modelValue": ($event) => unref(item).firstname = $event,
                        label: "Pr\xE9noms *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).email,
                        "onUpdate:modelValue": ($event) => unref(item).email = $event,
                        label: "Email *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_select, {
                        modelValue: unref(item).sex,
                        "onUpdate:modelValue": ($event) => unref(item).sex = $event,
                        items: ["M", "F"],
                        rules: [(v) => !!v || unref(required_message)],
                        clearable: "",
                        "deletable-chips": "",
                        variant: "outlined",
                        label: "Sexe *"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).phone_number,
                        "onUpdate:modelValue": ($event) => unref(item).phone_number = $event,
                        label: "Num\xE9ro de t\xE9l\xE9phone *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).place_of_birth,
                        "onUpdate:modelValue": ($event) => unref(item).place_of_birth = $event,
                        label: "Lieu de naissance *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).nationality,
                        "onUpdate:modelValue": ($event) => unref(item).nationality = $event,
                        label: "Nationalit\xE9 *",
                        variant: "outlined",
                        type: "text",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: unref(item).date_of_birth,
                        "onUpdate:modelValue": ($event) => unref(item).date_of_birth = $event,
                        label: "Date de naissance *",
                        variant: "outlined",
                        type: "date",
                        rules: [(v) => !!v || unref(required_message)]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"])
                    ], 64)) : createCommentVNode("", true),
                    createVNode(_component_v_text_field, {
                      modelValue: unref(item).password,
                      "onUpdate:modelValue": [($event) => unref(item).password = $event, ($event) => unref(item).password ? "" : unref(item).confirm_password = ""],
                      modelModifiers: { trim: true },
                      label: "Mot de passe",
                      "append-inner-icon": unref(showPassword) ? "mdi-eye" : "mdi-eye-off",
                      type: unref(showPassword) ? "text" : "password",
                      "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                      variant: "outlined",
                      messages: "Les espaces au d\xE9but et \xE0 la fin ne sont pas consid\xE9r\xE9s"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "onClick:appendInner"]),
                    ((_a = unref(item).password) == null ? void 0 : _a.trim()) ? (openBlock(), createBlock(_component_v_text_field, {
                      key: 1,
                      "append-inner-icon": unref(showConfirmPassword) ? "mdi-eye" : "mdi-eye-off",
                      type: unref(showConfirmPassword) ? "text" : "password",
                      modelValue: unref(item).confirm_password,
                      "onUpdate:modelValue": ($event) => unref(item).confirm_password = $event,
                      label: "Confirmation du mot de passe *",
                      variant: "outlined",
                      "onClick:appendInner": ($event) => showConfirmPassword.value = !unref(showConfirmPassword),
                      rules: [(v) => v === unref(item).password || "Le mot de passe ne correspond pas"],
                      color: unref(item).confirm_password == unref(item).password ? "green" : "blue"
                    }, null, 8, ["append-inner-icon", "type", "modelValue", "onUpdate:modelValue", "onClick:appendInner", "rules", "color"])) : createCommentVNode("", true),
                    withDirectives(createVNode(_component_v_btn, {
                      onClick: ($event) => save(),
                      elevation: 5,
                      block: "",
                      class: "mt-2",
                      style: { "color": "white" },
                      color: "#093e73"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Enregistrer")
                      ]),
                      _: 1
                    }, 8, ["onClick"]), [
                      [vShow, !unref(disabled_card)]
                    ])
                  ];
                }),
                _: 1
              }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tableau-de-bord/mon-compte.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mon-compte-aa2ab14f.mjs.map
