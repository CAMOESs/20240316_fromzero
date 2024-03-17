import { ref, computed, resolveComponent, withCtx, unref, isRef, createVNode, useSSRContext } from 'vue';
import { a as useSession, u as useSnackbar, n as navigateTo } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "connexion",
  __ssrInlineRender: true,
  setup(__props) {
    const submit = function() {
    };
    const showPassword = ref(false);
    ref(false);
    const email = ref("");
    const hidePassword = ref(true);
    const password = ref("");
    const form = ref(null);
    computed(
      () => hidePassword.value ? "fa-eye" : "fa-eye-slash"
    );
    computed(
      () => hidePassword.value ? "password" : "text"
    );
    const required_message = ref("Ce champ est obligatoire");
    const { data, status, signIn, signOut } = useSession();
    const mySignInHandler = async ({ username, password: password2 }) => {
      var _a, _b, _c;
      const { error, url } = await signIn("credentials", {
        username,
        password: password2,
        redirect: false
      });
      if (error) {
        const sn = useSnackbar();
        if (error == "Votre compte est actuellement d\xE9sactiv\xE9, veuillez vous rapprocher de l'administrateur pour d\xE9bloquer votre compte.") {
          sn.error(error);
        } else {
          sn.error("Identifiant, adresse email ou mot de passe incorrect.");
        }
      } else {
        console.log("useSession().data.value?.user");
        console.log((_a = useSession().data.value) == null ? void 0 : _a.user);
        if ((_c = (_b = useSession().data.value) == null ? void 0 : _b.user) == null ? void 0 : _c.is_change_password) {
          return navigateTo("/tableau-de-bord");
        } else {
          return navigateTo("/change-password");
        }
      }
    };
    const login = async function() {
      if ((await form.value.validate()).valid) {
        await mySignInHandler({ username: email.value, password: password.value });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="app"><div id="login"><div id="form"><div class="mb-4" style="${ssrRenderStyle({ "text-align": "center", "color": "black" })}"><h2>Connexion</h2></div>`);
      _push(ssrRenderComponent(_component_v_form, {
        onSubmit: submit,
        ref_key: "form",
        ref: form
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_text_field, {
              id: "email",
              "prepend-icon": "mdi-email",
              modelValue: unref(email),
              "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
              modelModifiers: { trim: true },
              rules: [(v) => !!v || unref(required_message)],
              outlined: "",
              label: "Identifiant *",
              required: "",
              style: { "background-color": "white" }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              "prepend-icon": "mdi-lock-outline",
              label: "Mot de passe *",
              modelValue: unref(password),
              "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
              modelModifiers: { trim: true },
              outlined: "",
              "append-inner-icon": unref(showPassword) ? "mdi-eye" : "mdi-eye-off",
              type: unref(showPassword) ? "text" : "password",
              "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`<br${_scopeId}><div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "white--text",
              onClick: login,
              style: { "color": "white", "background-color": "#093e73", "width": "200px", "margin-bottom": "10px" },
              rounded: "",
              href: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="d-xs-block" style="${ssrRenderStyle({ "color": "white" })}"${_scopeId2}>Connexion</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "d-xs-block",
                      style: { "color": "white" }
                    }, "Connexion")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_v_text_field, {
                id: "email",
                "prepend-icon": "mdi-email",
                modelValue: unref(email),
                "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
                modelModifiers: { trim: true },
                rules: [(v) => !!v || unref(required_message)],
                outlined: "",
                label: "Identifiant *",
                required: "",
                style: { "background-color": "white" }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
              createVNode(_component_v_text_field, {
                "prepend-icon": "mdi-lock-outline",
                label: "Mot de passe *",
                modelValue: unref(password),
                "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
                modelModifiers: { trim: true },
                outlined: "",
                "append-inner-icon": unref(showPassword) ? "mdi-eye" : "mdi-eye-off",
                type: unref(showPassword) ? "text" : "password",
                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "onClick:appendInner"]),
              createVNode("br"),
              createVNode("div", { style: { "text-align": "center" } }, [
                createVNode(_component_v_btn, {
                  class: "white--text",
                  onClick: login,
                  style: { "color": "white", "background-color": "#093e73", "width": "200px", "margin-bottom": "10px" },
                  rounded: "",
                  href: ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "d-xs-block",
                      style: { "color": "white" }
                    }, "Connexion")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/connexion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=connexion-5dae243e.mjs.map
