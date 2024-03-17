import { _ as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "breadcrumbs",
  __ssrInlineRender: true,
  props: {
    items: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$2;
      const _component_v_icon = resolveComponent("v-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "my-4 mx-3" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.items.slice(0, -1), (item, index) => {
        _push(`<span>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: item.to,
          class: "font-weight-black",
          style: { "color": "#093e73" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span>`);
        _push(ssrRenderComponent(_component_v_icon, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`mdi-chevron-right`);
            } else {
              return [
                createTextVNode("mdi-chevron-right")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</span></span>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(__props.items.slice(-1), (item) => {
        _push(`<span>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          style: { "text-decoration": "none  width: 100%", "white-space": "nowrap!important" },
          class: "text-grey",
          disabled: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.text)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.text), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</span>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/u/breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=breadcrumbs-54bf79e0.mjs.map
