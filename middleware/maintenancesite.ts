
export default defineNuxtRouteMiddleware(async () => {


  let response = await useFetch("/api/systeme/maintenance-1");
  console.log(response);
  let maintenance = response.data.value;
  if (maintenance?.status == false) {
        return navigateTo('/')
  }

});
