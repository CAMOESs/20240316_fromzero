
export default defineNuxtRouteMiddleware(async (to, redirect) => {
   const { status, signOut } = useSession();
 /*   let response = await useFetch("/api/systeme/maintenance"); 
   let maintenance = response.data.value;
   console.log(response);
  if (maintenance?.status === true) {
    if (status.value == "authenticated") {
      let res = await useFetch(`/api/can/`, {
        method: "post",
        body: ["Mettre en maintenance"],
      });
      if (Array.isArray(res.data.value) && !res.data.value[0]) {
        await signOut({ redirect: false, callbackUrl: '/maintenance' });
        if (to.path != '/maintenance')
          if (to.path != '/connexion')
            return navigateTo('/maintenance')
        //return redirect('/maintenance');
      }
    } else {
      if (to.path != '/maintenance') {
        if (to.path != '/connexion')
          return navigateTo('/maintenance')
      }
    }
  }  */
});

