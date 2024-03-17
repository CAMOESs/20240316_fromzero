/** @format */
const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

function dateformatFr_(
  date: Date | undefined | null
): string | null | undefined {
  console.log("typeof date");
  console.log(typeof date);

  if (!date) return null;
  //   const [date_, time_] = date.replace(".000Z", "").split("T");
  //   const [year, month, day] = date_.split("-");

  //   return `${day}/${month}/${year}`;

  return [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth()).padStart(2, "0"),
    String(date.getFullYear()).padStart(4, "0"),
  ].join("/");
}
function dateformatFr_long(
  date: Date | undefined | null
): string | null | undefined {
  console.log("typeof date");
  console.log(typeof date);

  if (!date) return null;

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Définir les noms des mois
  // Formater la date
  return `${day == 1 ? "1er" : day} ${months[month]} ${year}`;
}
export { dateformatFr_, dateformatFr_long };
