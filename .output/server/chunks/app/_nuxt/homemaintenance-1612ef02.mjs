import { defineComponent, ref, createElementBlock, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-281ab804.mjs';
import { k as _export_sfc } from '../server.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'colortranslator';
import 'moment';

const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$1 = {
  name: "TheHeader"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_layout = resolveComponent("v-layout");
  const _component_ClientOnly = __nuxt_component_0;
  const _component_v_app_bar = resolveComponent("v-app-bar");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_v_layout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createVNode(_component_v_app_bar, {
                elevation: "4",
                id: "nav",
                style: { "height": "77px" }
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "lolo",
                    src: _imports_0,
                    alt: "#"
                  }),
                  createVNode(_component_v_spacer)
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
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Accueil/Header_maintenance.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header_maintenance = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "homemaintenance",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(Header_maintenance, null, null, _parent));
      _push(`<main style="${ssrRenderStyle({ "margin-top": "40px" })}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_v_row, {
        justify: "center",
        "no-gutters": "",
        style: { "margin-top": "20px" },
        class: "footer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, {
              class: "text-center mt-4",
              cols: "12"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} <strong${_scopeId2}>: EducMaster/ MESTFP / R\xE9publique du b\xE9nin. Tous droits r\xE9serv\xE9s. Plateforme r\xE9alis\xE9e par </strong> <a href="https://ticsmaster.bj/" target="_blank" style="${ssrRenderStyle({ "text-decoration": "none" })}"${_scopeId2}>TICS MASTER SARL </a>`);
                } else {
                  return [
                    createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " ", 1),
                    createVNode("strong", null, ": EducMaster/ MESTFP / R\xE9publique du b\xE9nin. Tous droits r\xE9serv\xE9s. Plateforme r\xE9alis\xE9e par "),
                    createTextVNode(),
                    createVNode("a", {
                      href: "https://ticsmaster.bj/",
                      target: "_blank",
                      style: { "text-decoration": "none" }
                    }, "TICS MASTER SARL ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, {
                class: "text-center mt-4",
                cols: "12"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString((/* @__PURE__ */ new Date()).getFullYear()) + " ", 1),
                  createVNode("strong", null, ": EducMaster/ MESTFP / R\xE9publique du b\xE9nin. Tous droits r\xE9serv\xE9s. Plateforme r\xE9alis\xE9e par "),
                  createTextVNode(),
                  createVNode("a", {
                    href: "https://ticsmaster.bj/",
                    target: "_blank",
                    style: { "text-decoration": "none" }
                  }, "TICS MASTER SARL ")
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/homemaintenance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=homemaintenance-1612ef02.mjs.map
