import XLSX from "xlsx";
import { definePrivateEventHandler } from "../../../index";
import useFile from "../../../utils/useFile";

// import { saveFile } from "../../../utils/saveFile";

export default definePrivateEventHandler(
  async (event) => { 
    let body = await useFile(event);
    console.log("body")
    console.log(body)
    let workbook = XLSX.read(body.files[0].buffer);
    return workbook.SheetNames;
  },
  { auth: false }
);
