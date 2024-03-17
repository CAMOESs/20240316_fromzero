import XLSX from 'xlsx';
import { d as definePrivateEventHandler } from './.get.mjs';
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

const sheetContent_post = definePrivateEventHandler(
  async (event) => {
    let body = await useFile(event);
    let workbook = XLSX.read(body.files[0].buffer);
    workbook.SheetNames;
    let { sheet, first_row } = body.fields;
    let sheet_content = workbook.Sheets[sheet];
    console.log("sheet_content");
    let range;
    if (!sheet_content["!ref"])
      return [];
    range = XLSX.utils.decode_range(sheet_content["!ref"]);
    console.log("range");
    console.log(range);
    let new_range, row;
    let file_content_2 = [];
    for (let index = Number(first_row) - 1; index <= range.e.r; index++) {
      new_range = XLSX.utils.encode_range({
        s: {
          c: range.s.c,
          r: index
        },
        e: {
          c: range.e.c,
          r: index
        }
      });
      row = XLSX.utils.sheet_to_json(sheet_content, {
        header: 1,
        raw: false,
        dateNF: "dd/mm/yyyy",
        range: new_range
      });
      console.log(row);
      if (!(Array.isArray(row[0]) && row[0].length))
        break;
      file_content_2.push(row[0]);
    }
    return file_content_2;
  },
  { auth: false }
);

export { sheetContent_post as default };
//# sourceMappingURL=sheet-content.post.mjs.map
