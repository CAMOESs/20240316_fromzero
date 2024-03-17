// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/auth/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/[...]').default>>>>
    }
    '/api/can/': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/can/.post').default>>>>
    }
    '/api/can/uniq': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/can/uniq.post').default>>>>
    }
    '/api/candidats/': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/candidats/.post').default>>>>
    }
    '/api/candidats/diplome/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/candidats/diplome/.get').default>>>>
    }
    '/api/candidats/diplome/verify': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/candidats/diplome/verify').default>>>>
    }
    '/api/my-menu/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/my-menu/.get').default>>>>
    }
    '/api/my-menu/sub': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/my-menu/sub.get').default>>>>
    }
    '/api/sessions/': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/sessions/.delete').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/sessions/.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/sessions/.post').default>>>>
    }
    '/api/sessions/min': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/sessions/min.get').default>>>>
    }
    '/api/sessions/months': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/sessions/months.get').default>>>>
    }
    '/api/showphoto': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/showphoto.get').default>>>>
    }
    '/api/signataire/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/signataire/.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/signataire/.post').default>>>>
    }
    '/api/systeme/branchs': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/systeme/branchs.get').default>>>>
    }
    '/api/systeme/centres': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/systeme/centres.get').default>>>>
    }
    '/api/systeme/corps': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/systeme/corps.get').default>>>>
    }
    '/api/systeme/departments': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/systeme/departments.get').default>>>>
    }
    '/api/systeme/log/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/systeme/log/.get').default>>>>
    }
    '/api/systeme/maintenance/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/systeme/maintenance/.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/systeme/maintenance/.post').default>>>>
    }
    '/api/systeme/metiers': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/systeme/metiers.get').default>>>>
    }
    '/api/users-pagination/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users-pagination/.get').default>>>>
    }
    '/api/users/': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/.delete').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/.post').default>>>>
    }
    '/api/users/changePassword/': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/changePassword/.post').default>>>>
    }
    '/api/users/my-account/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/my-account/.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/my-account/.post').default>>>>
    }
    '/api/users/permissions/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/permissions/.get').default>>>>
    }
    '/api/users/profils/': {
      'delete': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/profils/.delete').default>>>>
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/profils/.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/profils/.post').default>>>>
    }
    '/api/users/profils/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/users/profils/[id]').default>>>>
    }
    '/api/utils/excel/sheet-content-with-choix-column': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/utils/excel/sheet-content-with-choix-column.post').default>>>>
    }
    '/api/utils/excel/sheet-content': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/utils/excel/sheet-content.post').default>>>>
    }
    '/api/utils/excel/sheet-names': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/utils/excel/sheet-names.post').default>>>>
    }
    '/api/zone/countries/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/zone/countries/.get').default>>>>
    }
    '/api/zone/departments/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/zone/departments/.get').default>>>>
    }
    '/api/zone/departments/:id': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/zone/departments/[id].get').default>>>>
    }
    '/api/zone/departments/schools_with_3rd/:id': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/zone/departments/schools_with_3rd/[id].get').default>>>>
    }
    '/api/zone/districts/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/zone/districts/.get').default>>>>
    }
    '/api/zone/districts/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/zone/districts/[id]').default>>>>
    }
    '/api/zone/municipalities/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/zone/municipalities/.get').default>>>>
    }
    '/api/zone/municipalities/:id': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/zone/municipalities/[id]').default>>>>
    }
    '/api/zone/villages/': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/zone/villages/.get').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}