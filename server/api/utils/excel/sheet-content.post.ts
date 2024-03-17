import XLSX from "xlsx";
import { definePrivateEventHandler } from "../../../index";
import useFile from "../../../utils/useFile";

// import { saveFile } from "../../../utils/saveFile";

export default definePrivateEventHandler(
  async (event) => {
    let body = await useFile(event);
    let workbook = XLSX.read(body.files[0].buffer);
    let data: Array<any>;
    data = workbook.SheetNames;
    let { sheet, first_row } = body.fields;

    let sheet_content = workbook.Sheets[sheet];
    console.log("sheet_content")
    // console.log(sheet_content)
    let range: XLSX.Range;
    if (!sheet_content["!ref"]) return [];
    range = XLSX.utils.decode_range(sheet_content["!ref"]);
    console.log("range")
    console.log(range)
    let new_range, row;
    let file_content_2 = [];
    for (let index = Number(first_row) - 1; index <= range.e.r; index++) {
      new_range = XLSX.utils.encode_range({
        s: {
          c: range.s.c,
          r: index,
        },
        e: {
          c: range.e.c,
          r: index,
        },
      });
      row = XLSX.utils.sheet_to_json(sheet_content, {
        header: 1,
        raw: false,
        dateNF: "dd/mm/yyyy",
        range: new_range,
      });
      console.log(row);

      if (!(Array.isArray(row[0]) && row[0].length)) break;

      file_content_2.push(row[0]);
    }

    return file_content_2;
  },
  { auth: false }
);
