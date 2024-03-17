export default defineNuxtPlugin(({}) => {
  return {
    provide: {
      capitilize_text: (text: string | undefined | null): string | null => {
        //   const data = await useFetch("/api"+ url);
        //   return data.data.value;
        if (!text) return null;

        return text
          .split(" ")
          .map((e) => e && e[0].toUpperCase() + e.slice(1).toLowerCase())
          .join(" ")
          .trim();
      },
      remove_accent: (text: string | undefined | null): string | null => {
        if (!text) return null;
        return text
          .toUpperCase()
          .replaceAll("É", "E")
          .replaceAll("È", "E")
          .replaceAll("Ê", "E")
          .replaceAll("Ë", "E")
          .replaceAll("Î", "I")
          .replaceAll("Ï", "I")
          .replaceAll("Ô", "O")
          .replaceAll("Ö", "O")
          .replaceAll("Œ", "OE")
          .replaceAll("Æ", "AE")
          .replaceAll("À", "A")
          .replaceAll("Ç", "C")
          .replaceAll("Ü", "U")
          .replaceAll("Ù", "U")
          .trim();
      },
    },
  };
});
