// import { useSnackbar } from "~~/store/snackbar";
import moment from "moment";
interface DataInterface {
  lastname?: string;
  firstname?: string;
  sex?: string;
  nationality?: string;
  place_of_birth?: string;
  phone_number?: string;
}
interface SexInterface {
  sex: string | undefined | null;
  [key: string]: any;
}
interface NameInterface {
  lastname: string | undefined | null;
  firstname: string | undefined | null;
  [key: string]: any;
}
interface NationalityInterface {
  nationality: string | undefined | null;
  [key: string]: any;
}
interface PlaceInterface {
  place_of_birth: string | undefined | null;
  phone_number?: string | undefined | null;
  [key: string]: any;
}

interface MyDate {
  [key: string]: any;
}

let isContainAbbreviation = (value: string | undefined | null): Boolean => {
  if (!value) return true;
  return value.includes(".") || value.split(" ").some((v) => v.length == 1);
};
// let snackbar = useSnackbar();
export default defineNuxtPlugin((/* nuxtApp */) => {
  return {
    provide: {
      checkSex: (tab: SexInterface[]): void => {
        // console.log(tab);

        if (tab.some((v) => !v.sex || !["F", "M"].includes(v.sex))) {
          throw `Sexe au mauvais format: Verifiez votre liste <br>
          Le sexe doit être M ou F`;
        }
      },
      checkName: (tab: NameInterface[]): void => {
        if (tab.some((v) => !v.lastname || !v.firstname)) {
          throw `Nom & prénoms obligatoires`;
        }

        if (
          tab.some(
            (v) =>
              isContainAbbreviation(v.firstname) ||
              isContainAbbreviation(v.lastname)
          )
        ) {
          throw `Les noms et/ou prénoms doivent être conformes à l'acte de naissance et sans abréviation.`;
        }
      },
      checkNationality: (tab: NationalityInterface[]): void => {
        if (tab.some((v) => !v.nationality)) {
          throw `Nationalité obligatoire.`;
        }
      },
      checkPlaceOfBirth: (tab: PlaceInterface[]): void => {
        if (tab.some((v) => !v.place_of_birth)) {
          throw `Nationalité obligatoire.`;
        }
      },
      checkPoneNumber: (tab: PlaceInterface[]): void => {
        if (tab.some((v) => !v.phone_number || v.lenght < 8)) {
          throw `Téléphone obligatoire à la soumission.`;
        }
      },
      checkMatricule: (tab: PlaceInterface[]): void => {
        if (tab.some((v) => !v.matricule || v.lenght < 8)) {
          throw `Matricule obligatoire à la soumission.`;
        }
      },
      checkAllDatesValid: (objects: MyDate[], dateKeys: string[]): void => {
        for (const obj of objects) {
          for (const key of dateKeys) {
            const dateStr = obj[key];
            if (!moment(dateStr, "DD/MM/YYYY", true).isValid()) {
              throw `Date de naissance et date de premier prise de service sont obligatoires et au format JJ/MM/AAAA `;
            }
          }
        }
      },
    
    },
  };
});
