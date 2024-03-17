interface MyDate {
  [key: string]: any;
}
let dateToDatetime = (
  date: string | null | undefined
): string | Date | null | undefined => {
  if (!date) return null;
  return new Date(date);
};

export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      formatDateTime: (date: string) => {
        const [day, month, year] = date.split("/");
        const formattedDate = new Date(`${year}-${month}-${day}`);
        return formattedDate;
      },
      dateTimeformatFr: (
        date: string | null | undefined
      ): string | null | undefined => {
        if (!date) return null;
        const [date_, time_] = date.replace(".000Z", "").split("T");
        const [year, month, day] = date_.split("-");

        return `${day}/${month}/${year}   ${time_}`;
      },
      dateformatFr: (
        date: string | null | undefined
      ): string | null | undefined => {
        if (!date) return null;
        const [date_, time_] = date.replace(".000Z", "").split("T");
        const [year, month, day] = date_.split("-");

        return `${day}/${month}/${year}`;
      },
      dataFormatFrSerializer: (
        date: string | null | undefined
      ): string | null | undefined => {
        if (!date) return null;
        const [date_, time_] = date.replace(".000Z", "").split("T");

        return date_;
      },
      dataFormatFrDeSerializer: (
        date: string | null | undefined
      ): string | Date | null | undefined => {
        if (!date) return null;
        // const [date_, time_] = date.replace(".000Z", "").split("T");

        // return date_;
        return new Date(date);
      },

      dataStringFr: (
        date: string | null | undefined
      ): string | Date | null | undefined => {
        if (!date) return null;
        const date_ = new Date(date);
        const jours = [
          "Dimanche",
          "Lundi",
          "Mardi",
          "Mercredi",
          "Jeudi",
          "Vendredi",
          "Samedi",
        ];
        const jour = jours[date_.getUTCDay()];
        return (
          jour +
          " " +
          date_.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        );
      },
      getTodayDate: () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, "0");
        const day = today.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
      },
    },
  };
});
/* function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
} */
