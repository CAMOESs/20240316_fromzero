/** @format */

import puppeteer from "puppeteer";
import { saveFile } from "../utils/saveFile";
import { writeFile, existsSync, mkdirSync, mkdir } from "node:fs";



function defaultFooter(date: Date) {
  return `<div style="border-top: solid 1px #bbb; width: 100%; font-size: 9px;
  padding: 0px;padding-bottom: 5px; color: #bbb; position: relative;">
  <div style="position: absolute; left: 15px; top: 5px;"> ${date.toISOString()} </div>
      <div style="position: absolute; left:50%; top: 5px; margin-left:-20px;"> <span>Realized by <a style="text-decoration: none ; color :#00838f; " href="https://ticsmaster.bj/">ticsmaster</a></span></div>
      <div style="position: absolute; right: 15px; top: 5px;"><strong>Page <span class="pageNumber"></span></strong> sur <span class="totalPages"></span></div>
  </div>
  `;
}
const defaultMargin = {
  left: "30px",
  right: "30px",
  bottom: "40px",
  top: "30px",
};
// import chromium from 'chromium'

//
/**
 * Génère un fichier PDF à partir d'un contenu HTML.
 *
 * @param html Le contenu HTML à convertir en PDF.
 * @param options? Les options de génération du PDF.
 *   - landscap?: Indique si le PDF doit être au format paysage (défaut: true).
 *   - path?: Le chemin de destination du fichier PDF (optionnel).
 *   - format?: Le format du papier du PDF (a3, a4, a5, A3, A4, A5, par défaut: "A4").
 *   - displayHeaderFooter?: Indique si les en-têtes et pieds de page doivent être affichés (défaut: true).
 *   - headerTemplate?: Le modèle de l'en-tête du PDF (optionnel).
 *   - footerTemplate?: Le modèle du pied de page du PDF (optionnel).
 *   - margin?: Les marges du PDF (par défaut: marges par défaut).
 * @returns Si `path` est défini, renvoie undefined. Sinon, renvoie le contenu du PDF sous forme de buffer.
 * @example
 * // Exemple 1: Générer un buffer PDF en mode paysage.
 * const htmlContent = '<html><body><h1>Mon document</h1></body></html>';
 * const pdfBuffer = await fsd(htmlContent);
 * event.node.res.setHeader('Content-Type', 'application/octet-stream');
  event.node.res.setHeader('Content-Disposition', 'attachment; filename=fis');
  return event.node.res.end(
    await generatePDF(`<html><body><h1>Hello World</h1></body></html>`)
  );
 * @example
 * // Exemple 2: Générer un fichier PDF en mode portrait avec chemin de sortie.
 * const htmlContent = '<html><body><p>Contenu du PDF</p></body></html>';
 * await fsd(htmlContent,  {path:  'output.pdf'} );
 */

async function generatePDF(
  html: string,
  options?: {
    watermark?: {
      status: boolean;
      fun: () => void;
    };
    landscap?: boolean;
    path?: string;
    format?: "a3" | "a4" | "a5" | "A3" | "A4" | "A5";
    displayHeaderFooter?: boolean;
    headerTemplate?: string;
    footerTemplate?: string;
    margin?: {
      left: string;
      right: string;
      bottom: string;
      top: string;
    };
  }
) {
  try {
    const pdf_option = {
      format: options?.format || "A4",
      path: options?.path || undefined,
      landscape: options?.landscap,
      displayHeaderFooter:
        options?.displayHeaderFooter == undefined ? true : false,
      // displayHeaderFooter: true,
      headerTemplate: options?.headerTemplate || "",
      footerTemplate: options?.footerTemplate
        ? `<div style="font-size : 30px; background : red;  width: 100%; " >${options?.footerTemplate}</div>`
        : defaultFooter(new Date()),
      margin: options?.margin || defaultMargin,
      printBackground: true,
    };

    // const browser = await puppeteer.launch({ executablePath: chromium.path,  args: ["--no-sandbox" /* ,'--disable-dev-shm-usage' */], });
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox" /* ,'--disable-dev-shm-usage' */],
    });
    const page = await browser.newPage();

    await page.setContent(html);

    if (options?.watermark?.status) {
      // Filigrane

      await page.evaluate(options?.watermark?.fun);
    }
    let file = await page.pdf(pdf_option);
    console.log("ceci est le document generer",file)
    
    //     let dir =  `./server/public/arreter-demande-autorisation/2022-2023/`;
    //     let filename = 'esg';
    //     let ext = '.pdf'
    // let new_filename = dir + filename + ext;
    // if(options?.path){
    //   writeFile(options?.path, file, (err) => {
    //     if (err) throw err;
    //     console.log(`<${options?.path}${ext}> is saved ✅`);
    //   });
    // } 
  

    await browser.close();
    // console.log(file);

    return options?.path ? undefined : file;
  } catch (error) {
    console.log(error)
    return { error }
  }
}
export { generatePDF };
