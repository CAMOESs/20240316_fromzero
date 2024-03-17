import { ref, computed, resolveComponent, withCtx, unref, createVNode, useSSRContext } from 'vue';
import { u as useSnackbar, a as useSession, b as useFetch, n as navigateTo } from '../server.mjs';
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
  __name: "change-password",
  __ssrInlineRender: true,
  setup(__props) {
    let sn = useSnackbar();
    const submit = function() {
    };
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    ref("");
    const hidePassword = ref(true);
    const search = ref({});
    ref({});
    const form = ref(null);
    computed(
      () => hidePassword.value ? "fa-eye" : "fa-eye-slash"
    );
    computed(
      () => hidePassword.value ? "password" : "text"
    );
    ref("Ce champ est obligatoire");
    const { data, status, signIn, signOut } = useSession();
    const mySignInHandler = async ({ username, password }) => {
      const { error, url } = await signIn("credentials", {
        username,
        password,
        redirect: false
      });
      if (error)
        ;
      else {
        if (useSession().data.value && useSession().data.value.user && useSession().data.value.user.is_change_password) {
          return navigateTo("/tableau-de-bord");
        } else {
          return navigateTo("/change-password");
        }
      }
    };
    async function changePassword() {
      try {
        const { valid } = await form.value.validate();
        if (valid) {
          search.value.username = useSession().data.value && useSession().data.value.user && useSession().data.value.user.username ? useSession().data.value.user.username : "";
          search.value.id = useSession().data.value && useSession().data.value.user && useSession().data.value.user.id ? useSession().data.value.user.id : "";
          let response = await useFetch(`/api/changePassword`, {
            method: "POST",
            body: {
              ...search.value
            }
          }, "$wfdi3Ru8Pn");
          if (response.data.value.status == 200) {
            sn.success("Mot de passe chang\xE9 avec succ\xE8s.");
            await signOut({ redirect: false });
            await mySignInHandler({ username: search.value.username, password: search.value.password });
          } else if (response.data.value.message) {
            sn.error(response.data.value.message);
          }
        }
      } catch (error) {
        sn.error("Nous n'avons pas pu effectuer l'op\xE9ration demand\xE9e. Veuillez actualiser la page et r\xE9essayer.");
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="app"><div id="login"><div id="description"></div><div id="form"><div class="mb-4" style="${ssrRenderStyle({ "text-align": "center", "color": "black" })}"><h2>Changement de mot de passe</h2></div>`);
      _push(ssrRenderComponent(_component_v_form, {
        onSubmit: submit,
        ref_key: "form",
        ref: form
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_text_field, {
              "prepend-icon": "mdi-lock-outline",
              label: "Nouveau mot de passe *",
              modelValue: unref(search).password,
              "onUpdate:modelValue": ($event) => unref(search).password = $event,
              modelModifiers: { trim: true },
              outlined: "",
              "append-inner-icon": unref(showPassword) ? "mdi-eye" : "mdi-eye-off",
              type: unref(showPassword) ? "text" : "password",
              "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_text_field, {
              "prepend-icon": "mdi-lock-outline",
              label: "Confirmation de mot de passe *",
              modelValue: unref(search).confirm_password,
              "onUpdate:modelValue": ($event) => unref(search).confirm_password = $event,
              modelModifiers: { trim: true },
              outlined: "",
              "append-inner-icon": unref(showConfirmPassword) ? "mdi-eye" : "mdi-eye-off",
              type: unref(showConfirmPassword) ? "text" : "password",
              "onClick:appendInner": ($event) => showConfirmPassword.value = !unref(showConfirmPassword),
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`<br${_scopeId}><div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              class: "white--text",
              onClick: changePassword,
              style: { "color": "white", "background-color": "#093e73", "width": "200px", "margin-bottom": "10px" },
              rounded: "",
              href: "",
              disabled: unref(search).password != unref(search).confirm_password || unref(search).password == ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="d-xs-block" style="${ssrRenderStyle({ "color": "white" })}"${_scopeId2}>Valider</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "d-xs-block",
                      style: { "color": "white" }
                    }, "Valider")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_v_text_field, {
                "prepend-icon": "mdi-lock-outline",
                label: "Nouveau mot de passe *",
                modelValue: unref(search).password,
                "onUpdate:modelValue": ($event) => unref(search).password = $event,
                modelModifiers: { trim: true },
                outlined: "",
                "append-inner-icon": unref(showPassword) ? "mdi-eye" : "mdi-eye-off",
                type: unref(showPassword) ? "text" : "password",
                "onClick:appendInner": ($event) => showPassword.value = !unref(showPassword),
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "onClick:appendInner"]),
              createVNode(_component_v_text_field, {
                "prepend-icon": "mdi-lock-outline",
                label: "Confirmation de mot de passe *",
                modelValue: unref(search).confirm_password,
                "onUpdate:modelValue": ($event) => unref(search).confirm_password = $event,
                modelModifiers: { trim: true },
                outlined: "",
                "append-inner-icon": unref(showConfirmPassword) ? "mdi-eye" : "mdi-eye-off",
                type: unref(showConfirmPassword) ? "text" : "password",
                "onClick:appendInner": ($event) => showConfirmPassword.value = !unref(showConfirmPassword),
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "append-inner-icon", "type", "onClick:appendInner"]),
              createVNode("br"),
              createVNode("div", { style: { "text-align": "center" } }, [
                createVNode(_component_v_btn, {
                  class: "white--text",
                  onClick: changePassword,
                  style: { "color": "white", "background-color": "#093e73", "width": "200px", "margin-bottom": "10px" },
                  rounded: "",
                  href: "",
                  disabled: unref(search).password != unref(search).confirm_password || unref(search).password == ""
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "d-xs-block",
                      style: { "color": "white" }
                    }, "Valider")
                  ]),
                  _: 1
                }, 8, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/change-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=change-password-6bcc53ea.mjs.map
