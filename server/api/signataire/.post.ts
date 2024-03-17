import { definePrivateEventHandler } from "../..";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";
const can = ["Enregistrer des signataires"];

function removeDuplicatesByProperty(arr: any, prop: string | number) {
  const uniqueArr = [];
  const seen = new Set();

  for (const item of arr) {
    const key = item[prop];
    if (!seen.has(key)) {
      seen.add(key);
      uniqueArr.push(item);
    }
  }

  return uniqueArr;
}
export default definePrivateEventHandler(
  async (event) => {
    // const body = await readBody(event);
    const a = await useFile(event);
    let file = a.files;
    let fieldsi = a.fields
    let data: {}[] = []
    let count = 0
    let tmp = {}
    if (parseInt(fieldsi.nbr) > 0) {
      count = fieldsi.nbr
    } else {
      count = file.length
    }
    console.log(fieldsi)
    for (let index = 0; index < count; index++) {
      if (`title_of_sign_signataire_${index}`.includes(`signataire_${index}`)) {
        //si je n'ai pas l'extension faire qqchose

        if (file.length == fieldsi.nbr) {
          let png = file[index].mimetype.split('/')[1]
          tmp = {
            "signataire": index + 1,
            // "full_name": fieldsi[`first_namesignataire_${index}`]+'_'+fieldsi[`last_namesignataire_${index}`],
            "full_name": fieldsi[`first_namesignataire_${index}`],
            "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
            "showed": fieldsi[`showed_signataire_${index}`],
            "signature_url": `./server/public/images/signataire/signataire_${index}.${png}`,
            "exe": png
          }
          data.push(tmp)
          await saveFile(file[index], './server/public/images/signataire/', `signataire_${index}`, `.${png}`)

          tmp = {}
        }
        else {
          // data = [] 

          if (file.length != 0) {
            file.forEach(async (e) => {

              if (e.fieldname && e.fieldname.includes(`signataire_${index}`)) {

                let png = e.mimetype.split('/')[1]
                tmp = {
                  "signataire": index + 1,
                  // "full_name": fieldsi[`first_namesignataire_${index}`]+'_'+fieldsi[`last_namesignataire_${index}`],
                  "full_name": fieldsi[`first_namesignataire_${index}`],
                  "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
                  "showed": fieldsi[`showed_signataire_${index}`],
                  "signature_url": `./server/public/images/signataire/signataire_${index}.${png}`,
                  "exe": png
                }
                data.push(tmp)
                await saveFile(e, './server/public/images/signataire/', `signataire_${index}`, `.${png}`)
                tmp = {}
              } else {
                try {
                  let tabExe = fieldsi[`signature_url_${index}`].split('.')
                  let png = fieldsi[`signature_url_${index}`].split('.')[tabExe.length - 1]
                  tmp = {
                    "signataire": index + 1,
                    "full_name": fieldsi[`first_namesignataire_${index}`],
                    "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
                    "showed": fieldsi[`showed_signataire_${index}`],
                    "signature_url": fieldsi[`signature_url_${index}`],
                    "exe": png
                  }
                  data.push(tmp)

                  tmp = {}
                } catch (error) {
                  console.error('error')
                }

              }
            })
          } else {
            try {
              let tabExe = fieldsi[`signature_url_${index}`].split('.')
              let png = fieldsi[`signature_url_${index}`].split('.')[tabExe.length - 1]
              tmp = {
                "signataire": index + 1,
                "full_name": fieldsi[`first_namesignataire_${index}`],
                "title_of_sign": fieldsi[`title_of_sign_signataire_${index}`],
                "showed": fieldsi[`showed_signataire_${index}`],
                "signature_url": fieldsi[`signature_url_${index}`],
                "exe": png
              }
              data.push(tmp)

              tmp = {}
            } catch (error) {
              console.error("error")
            }

          }


        }
      }

    }
    data = removeDuplicatesByProperty(data, 'signataire');
    console.log(data)
    let data_ = null;
    try {
      data_ = fs.writeFileSync("server/json/signataire.json", JSON.stringify(data));
      data = []

    } catch (error) {
    }

    return data_;
  },

  { auth: false, can: can }
);

