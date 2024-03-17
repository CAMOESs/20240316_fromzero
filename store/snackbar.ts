export const useSnackbar = defineStore("snackbar", {
  state: () => ({
    status: false,
    text: "",
    type: "success",
    timeout: 3150,
  }),
  /*  getters: {
    double: (state) => state.n * 2,
  },
 */
  actions: {
    close() {
      this.status = false;
    },

    // open
    success(text = "Operation effectué avec succes.") {
      this.status = true;
      this.text = text;
      this.type = "success";
      this.timeout = 3000;
    },
    error(text = "Nous n'avons pas pu effectuer l'opération demandée. Veuillez actualiser la page et réessayer. ") {
      this.status = true;
      this.text = text;
      this.type = "error";
      this.timeout = -1;
    },
    warning(text = "Avertissement") {
      this.status = true;
      this.text = text;
      this.type = "warning";
      this.timeout = -1;
    },

   /*  changeMe() {
      console.log("change me to test HMR");
    }, */

  
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSnackbar, import.meta.hot));
}
