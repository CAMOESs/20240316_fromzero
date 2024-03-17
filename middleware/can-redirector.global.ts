/** @format */
import { all_path } from "~/server/utils/menu";

export default defineNuxtRouteMiddleware(async (to, redirect) => {
  const { status, signOut, data } = useSession();
  //@ts-ignore
  if (data.value?.user?.is_change_password == 0) {
    if (to.path != "/change-password") {
      if (to.path != "/connexion") return navigateTo("/change-password");
    }
  }

  let current_path = all_path.find(
    (v) => v.to == to.path || v.to + "/" == to.path
  );

  let can_continue: boolean | undefined = false;
  if (current_path) {
    console.log("current_path CAN REDIRECTOR");

    let res = await useFetch("/api/can/uniq", {
      method: "POST",
      body: current_path.can,
    });

    can_continue = res.data.value?.can;
    console.log(can_continue);

    if (!can_continue) return navigateTo("/acces-non-autorise");
  }
  /* 
  
  
  
  
  
  
  */
  //@ts-ignore
  // if (data.value?.user?.is_change_password == 1) {
  //   if (to.path == "/change-password") {
  //     return navigateTo("/");
  //   }
  // }

  /**
   *
   *
   *
   * */
});
