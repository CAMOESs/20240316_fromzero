import XLSX from "xlsx";
import { definePrivateEventHandler } from "../../../index";
import useFile from "../../../utils/useFile";

// import { saveFile } from "../../../utils/saveFile";

export default definePrivateEventHandler(
  async (event) => {
    let body = await useFile(event);
    let workbook = XLSX.read(body.files[0].buffer);
    // let data: Array<any>;
    // data = workbook.SheetNames;
    let { sheet, debut_ligne, colonne } = body.fields;
    // debut_ligne = 1; colonne = "O";
    let sheet_content = workbook.Sheets[sheet];
    console.log("colonne")
    console.log(colonne)
    console.log("sheet_content")
    console.log(sheet_content)
    
    let range: XLSX.Range;
    if (!sheet_content["!ref"]) return [];

    range = XLSX.utils.decode_range(sheet_content["!ref"]);
    console.log("range")
    console.log(range)

    let debut_ligne_adapte = Number(debut_ligne) - 1
    // , debut_colonne_adapte = XLSX.utils.decode_col(debut_colonne)
    // console.log("decode_col")
     console.log(XLSX.utils.decode_col(""))
    if(!(XLSX.utils.decode_col(colonne) >= 0) ){
      throw createError({
        statusCode : 401,
        message : "Column value not correct"
      })
    } 

    let new_range, row;
    let file_content_2 = [];
    // return [] ;
    let cellule_debut, cellule_fin;
      for (let i = debut_ligne_adapte; ; i++) {
        const cellule = XLSX.utils.encode_cell({ r: i, c: XLSX.utils.decode_col(colonne) });
        if (!sheet_content[cellule]) {
            // La première cellule vide est trouvée
            break;
        }
        if(i==debut_ligne_adapte)
          cellule_debut = cellule;
        cellule_fin = cellule
      } 
      // XLSX.utils.encode_cell({s:{},e:{}})
      console.log(cellule_debut+":"+cellule_fin)
      new_range = cellule_debut+":"+cellule_fin

      if(!cellule_debut){
        throw createError({
          statusCode : 401,
          message : "Empty cellule",
          data : colonne+""+debut_ligne
        })
      } 
      const donnees_JSON = XLSX.utils.sheet_to_json(sheet_content, { range: new_range });
    
      console.log("donnees_JSON")
      console.log(donnees_JSON)

    return donnees_JSON;
  },
  { auth: false }
);
