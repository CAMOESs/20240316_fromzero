import { d as useRequestHeaders } from '../server.mjs';
import { useSSRContext, ref, computed, resolveComponent, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, renderSlot, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "table",
  __ssrInlineRender: true,
  props: [
    "header",
    "items",
    "selected",
    "expanded",
    "with_selected",
    "no_data",
    "filter",
    "no_data_to_search"
  ],
  emits: ["update:title", "update:items", "update:selected", "update:expanded", "update:filter", "update:header"],
  setup(__props) {
    useRequestHeaders(["cookie"]);
    const props = __props;
    ref([]);
    ref(false);
    ref("");
    let items_display = computed(() => {
      if (props.filter) {
        let tab_filt = [];
        for (let i = 0, l = props.header.length; i < l; i++) {
          for (let j = 0, m = props.items.length; j < m; j++) {
            let re = new RegExp(props.filter, "i");
            if (getValueFromPropertyString(props.items[j], props.header[i].value ? props.header[i].value : props.header[i].key).toString().search(re) !== -1) {
              tab_filt.push(props.items[j]);
            }
          }
        }
        return tab_filt;
      } else {
        return [...props.items];
      }
    });
    function est_dans_le_tableau(item) {
      let length = props.selected.length;
      for (let i = 0; i < length; i++) {
        if (JSON.stringify(props.selected[i]) == JSON.stringify(item))
          return true;
      }
      return false;
    }
    function getValueFromPropertyString(object, propertyString) {
      let properties = propertyString.split(".");
      let value = object;
      if (typeof value === "object") {
        for (let property of properties) {
          if (typeof value === "object") {
            value = value[property];
            if (value === void 0 || value === null) {
              return void 0;
            }
          } else {
            return void 0;
          }
        }
        return value;
      } else {
        return void 0;
      }
    }
    function mettre_dans_le_tableau(item) {
      props.selected.push(item);
    }
    function enlever_du_tableau(item) {
      let length = props.selected.length;
      for (let i = 0; i < length; i++) {
        if (JSON.stringify(props.selected[i]) == JSON.stringify(item)) {
          props.selected.splice(i, 1);
          break;
        }
      }
    }
    function remplir_le_tableau() {
      for (let i = 0, l = props.selected.length; i < l; i++) {
        props.selected.pop();
      }
      for (let i = 0, l = props.items.length; i < l; i++) {
        props.selected.push(props.items[i]);
      }
    }
    function vider_le_tableau() {
      for (let i = 0, l = props.selected.length; i < l; i++) {
        props.selected.pop();
      }
    }
    function tableau_est_vide() {
      if (props.selected.length == 0)
        return true;
      return false;
    }
    function tableau_rempli() {
      if (props.selected.length == props.items.length)
        return true;
      return false;
    }
    function cliquer_sur_un_element(element) {
      if (est_dans_le_tableau(element))
        enlever_du_tableau(element);
      else
        mettre_dans_le_tableau(element);
    }
    function cliquer_sur_bouton_all() {
      if (tableau_rempli())
        vider_le_tableau();
      else {
        remplir_le_tableau();
      }
    }
    function est_dans_expanded(item) {
      if (!Array.isArray(props.expanded))
        return false;
      let length = props.expanded.length;
      for (let i = 0; i < length; i++) {
        if (JSON.stringify(props.expanded[i]) == JSON.stringify(item))
          return true;
      }
      return false;
    }
    function mettre_dans_expanded(item) {
      props.expanded.push(item);
    }
    function enlever_de_expanded(item) {
      let length = props.expanded.length;
      for (let i = 0; i < length; i++) {
        if (JSON.stringify(props.expanded[i]) == JSON.stringify(item)) {
          props.expanded.splice(i, 1);
          break;
        }
      }
    }
    function expanded_un_element(element) {
      if (est_dans_expanded(element))
        enlever_de_expanded(element);
      else
        mettre_dans_expanded(element);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_table = resolveComponent("v-table");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<!--[--><input style="${ssrRenderStyle({ display: "none" })}"${ssrRenderAttr("value", __props.items)}><input style="${ssrRenderStyle({ display: "none" })}"${ssrRenderAttr("value", __props.header)}><input style="${ssrRenderStyle({ display: "none" })}"${ssrRenderAttr("value", __props.selected)}><input style="${ssrRenderStyle({ display: "none" })}"${ssrRenderAttr("value", __props.expanded)}><input style="${ssrRenderStyle({ display: "none" })}"${ssrRenderAttr("value", __props.filter)}><div>`);
      _push(ssrRenderComponent(_component_v_table, {
        class: "ma-5 mr-16",
        style: { "overflow": "scroll", "width": "100%" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr style="${ssrRenderStyle({ "background-color": "#093e73", "color": "white !important" })}"${_scopeId}>`);
            if (__props.with_selected) {
              _push2(`<th style="${ssrRenderStyle({ "width": "10px" })}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_v_btn, {
                variant: "plain",
                onClick: ($event) => cliquer_sur_bouton_all(),
                icon: tableau_est_vide() ? "mdi mdi-checkbox-blank-outline" : tableau_rempli() ? "mdi mdi-checkbox-marked" : "mdi mdi-minus-box"
              }, null, _parent2, _scopeId));
              _push2(`</th>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(__props.header, (elt, index) => {
              _push2(`<th class="text-center" style="${ssrRenderStyle({ "color": "white !important" })}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, `header(${elt.value ? elt.value : elt.key})`, {}, () => {
                _push2(`${ssrInterpolate(elt.text)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</th>`);
            });
            _push2(`<!--]--></tr></thead><tbody${_scopeId}>`);
            if (__props.items.length === 0) {
              _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", __props.with_selected ? "" + (__props.header.length + 1) : "" + __props.header.length)} class="px-5 pb-2 text-center"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "noData", {}, () => {
                _push2(`${ssrInterpolate(__props.no_data)}`);
              }, _push2, _parent2, _scopeId);
              _push2(`</td></tr>`);
            } else {
              _push2(`<!--[-->`);
              if (unref(items_display).length === 0) {
                _push2(`<tr${_scopeId}><td${ssrRenderAttr("colspan", __props.with_selected ? "" + (__props.header.length + 1) : "" + __props.header.length)} class="px-5 pb-2 text-center"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "noDataToSearch", {}, () => {
                  _push2(`${ssrInterpolate(__props.no_data_to_search)}`);
                }, _push2, _parent2, _scopeId);
                _push2(`</td></tr>`);
              } else {
                _push2(`<!--[-->`);
                ssrRenderList(unref(items_display), (element, index) => {
                  _push2(`<!--[--><tr${_scopeId}>`);
                  if (__props.with_selected) {
                    _push2(`<td${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_v_btn, {
                      variant: "plain",
                      onClick: ($event) => cliquer_sur_un_element(element),
                      icon: est_dans_le_tableau(element) ? "mdi mdi-checkbox-marked" : "mdi mdi-checkbox-blank-outline"
                    }, null, _parent2, _scopeId));
                    _push2(`</td>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--[-->`);
                  ssrRenderList(__props.header, (elt, index_elt) => {
                    _push2(`<!--[-->`);
                    if (elt.is_to_expanded) {
                      _push2(`<td style="${ssrRenderStyle({ "text-align": "center", "vertical-align": "middle" })}"${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_v_btn, {
                        variant: "plain",
                        onClick: ($event) => expanded_un_element(element),
                        icon: est_dans_expanded(element) ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"
                      }, null, _parent2, _scopeId));
                      _push2(`</td>`);
                    } else {
                      _push2(`<td${_scopeId}>`);
                      ssrRenderSlot(_ctx.$slots, `item(${elt.value ? elt.value : elt.key})`, {
                        item: getValueFromPropertyString(element, elt.value ? elt.value : elt.key),
                        elt_item: element,
                        index
                      }, () => {
                        _push2(`${ssrInterpolate(getValueFromPropertyString(element, elt.value ? elt.value : elt.key))}`);
                      }, _push2, _parent2, _scopeId);
                      _push2(`</td>`);
                    }
                    _push2(`<!--]-->`);
                  });
                  _push2(`<!--]--></tr>`);
                  if (est_dans_expanded(element)) {
                    _push2(`<tr class="py-1"${_scopeId}><td${ssrRenderAttr("colspan", __props.with_selected ? "" + (__props.header.length + 1) : "" + __props.header.length)} class="px-5 pb-2"${_scopeId}>`);
                    ssrRenderSlot(_ctx.$slots, "expanded", { item: element }, null, _push2, _parent2, _scopeId);
                    _push2(`</td></tr>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--]-->`);
                });
                _push2(`<!--]-->`);
              }
              _push2(`<!--]-->`);
            }
            _push2(`</tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", { style: { "background-color": "#093e73", "color": "white !important" } }, [
                  __props.with_selected ? (openBlock(), createBlock("th", {
                    key: 0,
                    style: { "width": "10px" }
                  }, [
                    createVNode(_component_v_btn, {
                      variant: "plain",
                      onClick: ($event) => cliquer_sur_bouton_all(),
                      icon: tableau_est_vide() ? "mdi mdi-checkbox-blank-outline" : tableau_rempli() ? "mdi mdi-checkbox-marked" : "mdi mdi-minus-box"
                    }, null, 8, ["onClick", "icon"])
                  ])) : createCommentVNode("", true),
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.header, (elt, index) => {
                    return openBlock(), createBlock("th", {
                      key: index,
                      class: "text-center",
                      style: { "color": "white !important" }
                    }, [
                      renderSlot(_ctx.$slots, `header(${elt.value ? elt.value : elt.key})`, {}, () => [
                        createTextVNode(toDisplayString(elt.text), 1)
                      ])
                    ]);
                  }), 128))
                ])
              ]),
              createVNode("tbody", null, [
                __props.items.length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                  createVNode("td", {
                    colspan: __props.with_selected ? "" + (__props.header.length + 1) : "" + __props.header.length,
                    class: "px-5 pb-2 text-center"
                  }, [
                    renderSlot(_ctx.$slots, "noData", {}, () => [
                      createTextVNode(toDisplayString(__props.no_data), 1)
                    ])
                  ], 8, ["colspan"])
                ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  unref(items_display).length === 0 ? (openBlock(), createBlock("tr", { key: 0 }, [
                    createVNode("td", {
                      colspan: __props.with_selected ? "" + (__props.header.length + 1) : "" + __props.header.length,
                      class: "px-5 pb-2 text-center"
                    }, [
                      renderSlot(_ctx.$slots, "noDataToSearch", {}, () => [
                        createTextVNode(toDisplayString(__props.no_data_to_search), 1)
                      ])
                    ], 8, ["colspan"])
                  ])) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(items_display), (element, index) => {
                    return openBlock(), createBlock(Fragment, {
                      key: element.id
                    }, [
                      createVNode("tr", null, [
                        __props.with_selected ? (openBlock(), createBlock("td", { key: 0 }, [
                          createVNode(_component_v_btn, {
                            variant: "plain",
                            onClick: ($event) => cliquer_sur_un_element(element),
                            icon: est_dans_le_tableau(element) ? "mdi mdi-checkbox-marked" : "mdi mdi-checkbox-blank-outline"
                          }, null, 8, ["onClick", "icon"])
                        ])) : createCommentVNode("", true),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.header, (elt, index_elt) => {
                          return openBlock(), createBlock(Fragment, { key: index_elt }, [
                            elt.is_to_expanded ? (openBlock(), createBlock("td", {
                              key: 0,
                              style: { "text-align": "center", "vertical-align": "middle" }
                            }, [
                              createVNode(_component_v_btn, {
                                variant: "plain",
                                onClick: ($event) => expanded_un_element(element),
                                icon: est_dans_expanded(element) ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"
                              }, null, 8, ["onClick", "icon"])
                            ])) : (openBlock(), createBlock("td", { key: 1 }, [
                              renderSlot(_ctx.$slots, `item(${elt.value ? elt.value : elt.key})`, {
                                item: getValueFromPropertyString(element, elt.value ? elt.value : elt.key),
                                elt_item: element,
                                index
                              }, () => [
                                createTextVNode(toDisplayString(getValueFromPropertyString(element, elt.value ? elt.value : elt.key)), 1)
                              ])
                            ]))
                          ], 64);
                        }), 128))
                      ]),
                      est_dans_expanded(element) ? (openBlock(), createBlock("tr", {
                        key: 0,
                        class: "py-1"
                      }, [
                        createVNode("td", {
                          colspan: __props.with_selected ? "" + (__props.header.length + 1) : "" + __props.header.length,
                          class: "px-5 pb-2"
                        }, [
                          renderSlot(_ctx.$slots, "expanded", { item: element })
                        ], 8, ["colspan"])
                      ])) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
                ], 64))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Ma/table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=table-888c4305.mjs.map
