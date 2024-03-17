import { d as definePrivateEventHandler, c as createError } from './.get.mjs';
import XLSX from 'xlsx';
import { u as useFile } from './useFile.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';
import 'busboy';

const sheetContentWithChoixColumn_post = definePrivateEventHandler(
  async (event) => {
    let body = await useFile(event);
    let workbook = XLSX.read(body.files[0].buffer);
    let { sheet, debut_ligne, colonne } = body.fields;
    let sheet_content = workbook.Sheets[sheet];
    console.log("colonne");
    console.log(colonne);
    console.log("sheet_content");
    console.log(sheet_content);
    let range;
    if (!sheet_content["!ref"])
      return [];
    range = XLSX.utils.decode_range(sheet_content["!ref"]);
    console.log("range");
    console.log(range);
    let debut_ligne_adapte = Number(debut_ligne) - 1;
    console.log(XLSX.utils.decode_col(""));
    if (!(XLSX.utils.decode_col(colonne) >= 0)) {
      throw createError({
        statusCode: 401,
        message: "Column value not correct"
      });
    }
    let new_range;
    let cellule_debut, cellule_fin;
    for (let i = debut_ligne_adapte; ; i++) {
      const cellule = XLSX.utils.encode_cell({ r: i, c: XLSX.utils.decode_col(colonne) });
      if (!sheet_content[cellule]) {
        break;
      }
      if (i == debut_ligne_adapte)
        cellule_debut = cellule;
      cellule_fin = cellule;
    }
    console.log(cellule_debut + ":" + cellule_fin);
    new_range = cellule_debut + ":" + cellule_fin;
    if (!cellule_debut) {
      throw createError({
        statusCode: 401,
        message: "Empty cellule",
        data: colonne + "" + debut_ligne
      });
    }
    const donnees_JSON = XLSX.utils.sheet_to_json(sheet_content, { range: new_range });
    console.log("donnees_JSON");
    console.log(donnees_JSON);
    return donnees_JSON;
  },
  { auth: false }
);

export { sheetContentWithChoixColumn_post as default };
//# sourceMappingURL=sheet-content-with-choix-column.post.mjs.map
