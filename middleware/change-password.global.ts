/** @format */

export default defineNuxtRouteMiddleware(async (to, redirect) => {
  const { status, signOut, data } = useSession();
  //@ts-ignore
  if (data.value?.user?.is_change_password == 0) {
    if (to.path != "/change-password") {
      if (to.path != "/connexion") return navigateTo("/change-password");
    }
  }
  //@ts-ignore
  if (data.value?.user?.is_change_password == 1) {
    if (to.path == "/change-password") {
      return navigateTo("/");
    }
  }

  /**
   *
   *
   *
   * */
});
