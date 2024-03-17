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

const sheetNames_post = definePrivateEventHandler(
  async (event) => {
    let body = await useFile(event);
    console.log("body");
    console.log(body);
    let workbook = XLSX.read(body.files[0].buffer);
    return workbook.SheetNames;
  },
  { auth: false }
);

export { sheetNames_post as default };
//# sourceMappingURL=sheet-names.post.mjs.map
