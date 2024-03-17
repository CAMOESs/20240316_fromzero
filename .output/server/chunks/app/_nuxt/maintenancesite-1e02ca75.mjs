import { i as defineNuxtRouteMiddleware, j as executeAsync, b as useFetch, n as navigateTo } from '../server.mjs';
import 'vue';
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
import 'vue/server-renderer';

const maintenancesite = defineNuxtRouteMiddleware(async () => {
  let __temp, __restore;
  let response = ([__temp, __restore] = executeAsync(() => useFetch("/api/systeme/maintenance-1", "$rwewVS1IUH")), __temp = await __temp, __restore(), __temp);
  console.log(response);
  let maintenance = response.data.value;
  if ((maintenance == null ? void 0 : maintenance.status) == false) {
    return navigateTo("/");
  }
});

export { maintenancesite as default };
//# sourceMappingURL=maintenancesite-1e02ca75.mjs.map
