import { _ as __nuxt_component_1 } from './table-888c4305.mjs';
import { e as useHead, u as useSnackbar, f as useNuxtApp, b as useFetch } from '../server.mjs';
import { ref, withAsyncContext, resolveComponent, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
    const {
      $caxios
      /* $dateformatFr */
    } = useNuxtApp();
    useHead({ title: "Liste des candidats" });
    let sn = useSnackbar();
    let selected = ref([]);
    let items = ref([]);
    let search = ref({});
    let sessions = ref([]);
    let branches = ref([]);
    let centres = ref([]);
    let corps = ref([]);
    let departments = ref([]);
    ref([]);
    let metiers = ref([]);
    let validForm = ref(false);
    let loading_item_list = ref(false);
    let loading_download = ref(false);
    let api = ref("/api/candidats/");
    sessions.value = ([__temp, __restore] = withAsyncContext(() => $caxios(`/sessions/min`)), __temp = await __temp, __restore(), __temp);
    branches.value = ([__temp, __restore] = withAsyncContext(() => $caxios(`/systeme/branchs`)), __temp = await __temp, __restore(), __temp);
    centres.value = ([__temp, __restore] = withAsyncContext(() => $caxios(`/systeme/centres`)), __temp = await __temp, __restore(), __temp);
    corps.value = ([__temp, __restore] = withAsyncContext(() => $caxios(`/systeme/corps`)), __temp = await __temp, __restore(), __temp);
    departments.value = ([__temp, __restore] = withAsyncContext(() => $caxios(`/systeme/departments`)), __temp = await __temp, __restore(), __temp);
    metiers.value = ([__temp, __restore] = withAsyncContext(() => $caxios(`/systeme/metiers`)), __temp = await __temp, __restore(), __temp);
    const headers = ref([
      {
        key: "numero",
        text: "N\xB0",
        active_modif_column: true
      },
      { key: "lastname", text: "Nom", active_modif_column: true },
      { key: "firstname", text: "Pr\xE9noms", active_modif_column: false },
      { key: "sex", text: "Sexe", active_modif_column: false },
      { key: "date_of_birth", text: "Date de naissance", active_modif_column: true },
      { key: "place_of_birth", text: "Lieu de naissance", active_modif_column: false },
      { key: "branch", text: "Branche", active_modif_column: false },
      { key: "corps", text: "Corps", active_modif_column: false },
      { key: "metier", text: "M\xE9tier", active_modif_column: false },
      { key: "centre", text: "Centre", active_modif_column: false },
      { key: "municipality", text: "Commune", active_modif_column: false },
      { key: "department", text: "D\xE9partement", active_modif_column: false }
    ]);
    const required_message = ref("Veuillez renseigner ce champ.");
    async function get_diplome() {
      var _a;
      let res;
      loading_download.value = true;
      console.log("GET___");
      let tab = selected.value.map((v) => v.id);
      tab.push(0);
      try {
        res = await useFetch("/api/candidats/diplome", {
          params: {
            ids: tab,
            session_id: search.value.session_id
          }
        }, "$wztj5CkRPj");
        let file_URL = window.URL.createObjectURL(new Blob([res.data.value]));
        let file_link = document.createElement("a");
        file_link.href = file_URL;
        file_link.setAttribute("download", "diplome.pdf");
        document.body.appendChild(file_link);
        file_link.click();
        console.log(file_link);
      } catch (error) {
        console.log(error);
        sn.error((_a = res.data.value) == null ? void 0 : _a.error);
      }
      loading_download.value = false;
    }
    async function getItems() {
      var _a;
      let res = {};
      loading_item_list.value = true;
      selected.value = [];
      try {
        res = await useFetch(api, {
          body: { ...search.value },
          method: "POST"
        }, "$9w4KM0NL8S");
        items.value = res.data.value;
      } catch (error) {
        console.log(error);
        sn.error((_a = res.data.value) == null ? void 0 : _a.error);
      }
      loading_item_list.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_form = resolveComponent("v-form");
      const _component_v_autocomplete = resolveComponent("v-autocomplete");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_MaTable = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4" }, _attrs))}><div class="mx-md-4 mx-2 pt-5">`);
      _push(ssrRenderComponent(_component_v_form, {
        modelValue: unref(validForm),
        "onUpdate:modelValue": ($event) => isRef(validForm) ? validForm.value = $event : validForm = $event,
        onSubmit: ($event) => getItems(),
        class: "mt-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_autocomplete, {
              modelValue: unref(search).session_id,
              "onUpdate:modelValue": ($event) => unref(search).session_id = $event,
              items: unref(sessions),
              color: "blue-grey-lighten-2",
              "item-title": "name_",
              "item-value": "id",
              label: "Session *",
              variant: "outlined",
              rules: [(v) => !!v || unref(required_message)],
              clearable: ""
            }, {
              selection: withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(item.raw.name_)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.raw.name_), 1)
                  ];
                }
              }),
              item: withCtx(({ props, item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_list_item, mergeProps(props, {
                    title: item.raw.name_
                  }), null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_list_item, mergeProps(props, {
                      title: item.raw.name_
                    }), null, 16, ["title"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_autocomplete, {
              modelValue: unref(search).branch,
              "onUpdate:modelValue": ($event) => unref(search).branch = $event,
              items: unref(branches),
              color: "blue-grey-lighten-2",
              "item-title": "name",
              "item-value": "name",
              label: "Branche",
              variant: "outlined",
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_autocomplete, {
              modelValue: unref(search).centre,
              "onUpdate:modelValue": ($event) => unref(search).centre = $event,
              items: unref(centres),
              color: "blue-grey-lighten-2",
              "item-title": "name",
              "item-value": "name",
              label: "Centre",
              variant: "outlined",
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_autocomplete, {
              modelValue: unref(search).corps,
              "onUpdate:modelValue": ($event) => unref(search).corps = $event,
              items: unref(corps),
              color: "blue-grey-lighten-2",
              "item-title": "name",
              "item-value": "name",
              label: "Corps",
              variant: "outlined",
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_autocomplete, {
              modelValue: unref(search).metier,
              "onUpdate:modelValue": ($event) => unref(search).metier = $event,
              items: unref(metiers),
              color: "blue-grey-lighten-2",
              "item-title": "name",
              "item-value": "name",
              label: "Metier",
              variant: "outlined",
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_autocomplete, {
              modelValue: unref(search).department,
              "onUpdate:modelValue": ($event) => unref(search).department = $event,
              items: unref(departments),
              color: "blue-grey-lighten-2",
              "item-title": "name",
              "item-value": "name",
              label: "D\xE9partment",
              variant: "outlined"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              disabled: unref(validForm) == false,
              color: "#093e73",
              type: "submit",
              class: "text-white",
              loading: unref(loading_item_list)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Afficher `);
                } else {
                  return [
                    createTextVNode(" Afficher ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_autocomplete, {
                modelValue: unref(search).session_id,
                "onUpdate:modelValue": ($event) => unref(search).session_id = $event,
                items: unref(sessions),
                color: "blue-grey-lighten-2",
                "item-title": "name_",
                "item-value": "id",
                label: "Session *",
                variant: "outlined",
                rules: [(v) => !!v || unref(required_message)],
                clearable: ""
              }, {
                selection: withCtx(({ item }) => [
                  createTextVNode(toDisplayString(item.raw.name_), 1)
                ]),
                item: withCtx(({ props, item }) => [
                  createVNode(_component_v_list_item, mergeProps(props, {
                    title: item.raw.name_
                  }), null, 16, ["title"])
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "items", "rules"]),
              createVNode(_component_v_autocomplete, {
                modelValue: unref(search).branch,
                "onUpdate:modelValue": ($event) => unref(search).branch = $event,
                items: unref(branches),
                color: "blue-grey-lighten-2",
                "item-title": "name",
                "item-value": "name",
                label: "Branche",
                variant: "outlined",
                clearable: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(_component_v_autocomplete, {
                modelValue: unref(search).centre,
                "onUpdate:modelValue": ($event) => unref(search).centre = $event,
                items: unref(centres),
                color: "blue-grey-lighten-2",
                "item-title": "name",
                "item-value": "name",
                label: "Centre",
                variant: "outlined",
                clearable: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(_component_v_autocomplete, {
                modelValue: unref(search).corps,
                "onUpdate:modelValue": ($event) => unref(search).corps = $event,
                items: unref(corps),
                color: "blue-grey-lighten-2",
                "item-title": "name",
                "item-value": "name",
                label: "Corps",
                variant: "outlined",
                clearable: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(_component_v_autocomplete, {
                modelValue: unref(search).metier,
                "onUpdate:modelValue": ($event) => unref(search).metier = $event,
                items: unref(metiers),
                color: "blue-grey-lighten-2",
                "item-title": "name",
                "item-value": "name",
                label: "Metier",
                variant: "outlined",
                clearable: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(_component_v_autocomplete, {
                modelValue: unref(search).department,
                "onUpdate:modelValue": ($event) => unref(search).department = $event,
                items: unref(departments),
                color: "blue-grey-lighten-2",
                "item-title": "name",
                "item-value": "name",
                label: "D\xE9partment",
                variant: "outlined"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "items"]),
              createVNode(_component_v_btn, {
                disabled: unref(validForm) == false,
                color: "#093e73",
                type: "submit",
                class: "text-white",
                loading: unref(loading_item_list)
              }, {
                default: withCtx(() => [
                  createTextVNode(" Afficher ")
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 mx-md-4 mx-2">`);
      _push(ssrRenderComponent(_component_v_btn, {
        class: "mr-1",
        style: { "color": "white" },
        color: "#093e73",
        disabled: unref(selected).length == 0,
        loading: unref(loading_download),
        onClick: ($event) => get_diplome()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_icon, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`mdi-email-seal-outline `);
                } else {
                  return [
                    createTextVNode("mdi-email-seal-outline ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<span class="d-none d-xs-none d-sm-block"${_scopeId}>Dipl\xF4me</span>`);
          } else {
            return [
              createVNode(_component_v_icon, null, {
                default: withCtx(() => [
                  createTextVNode("mdi-email-seal-outline ")
                ]),
                _: 1
              }),
              createVNode("span", { class: "d-none d-xs-none d-sm-block" }, "Dipl\xF4me")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
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
        "item(date_of_birth)": withCtx(({ elt_item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>${ssrInterpolate(_ctx.$dateformatFr(elt_item.date_of_birth))}</div>`);
          } else {
            return [
              createVNode("div", { style: { "text-align": "center" } }, toDisplayString(_ctx.$dateformatFr(elt_item.date_of_birth)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tableau-de-bord/candidats/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-58a153d8.mjs.map
