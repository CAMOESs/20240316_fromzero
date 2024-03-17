import { u as useFile } from './useFile.mjs';
import { existsSync, writeFile } from 'node:fs';
import * as fs from 'fs/promises';
import { d as definePrivateEventHandler } from './.get.mjs';
import { PrismaClient } from '@prisma/client';
import fs__default from 'fs';
import 'busboy';
import 'node:http';
import 'node:https';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:url';

async function saveFile(file, dir, filename, ext) {
  if (!existsSync(dir)) {
    await fs.mkdir(dir, { recursive: true });
  }
  let new_filename = dir + filename + ext;
  writeFile(new_filename, file.buffer, (err) => {
    if (err)
      throw err;
    console.log(`<${filename}${ext}> is saved \u2705`);
  });
}

new PrismaClient();
const can = ["Enregistrer des signataires"];
const _post = definePrivateEventHandler(
  async (event) => {
    console.log("merdeux");
    const a = await useFile(event);
    let file = a.files;
    let fieldsi = a.fields;
    let data = [];
    let count = 0;
    let tmp = {};
    if (parseInt(fieldsi.nbr) > 0) {
      count = fieldsi.nbr;
    } else {
      count = file.length;
    }
    for (let index = 0; index < count; index++) {
      if (`title_of_sign_signataire_${index}`.includes(`signataire_${index}`)) {
        if (file.length != 0) {
          let png = file[index].mimetype.split("/")[1];
          tmp = {
            "signataire": index + 1,
            "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
            "showed": fieldsi[`showed_signataire_${index}`],
            "signature_url": `./server/public/images/signataire/signataire_${index}.${png}`,
            "exe": png
          };
          data.push(tmp);
          await saveFile(file[index], "./server/public/images/signataire/", `signataire_${index}`, `.${png}`);
          tmp = {};
        } else {
          let tabExe = fieldsi[`signature_url_${index}`].split(".");
          let png = fieldsi[`signature_url_${index}`].split(".")[tabExe.length - 1];
          tmp = {
            "signataire": index + 1,
            "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
            "showed": fieldsi[`showed_signataire_${index}`],
            "signature_url": fieldsi[`signature_url_${index}`],
            "exe": png
          };
          data.push(tmp);
          tmp = {};
          console.log(png, "file exite pas");
        }
      }
    }
    let data_ = null;
    try {
      data_ = fs__default.writeFileSync("server/json/signataire.json", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
    return data_;
  },
  { auth: false, can }
);

export { _post as default };
//# sourceMappingURL=.post9.mjs.map
