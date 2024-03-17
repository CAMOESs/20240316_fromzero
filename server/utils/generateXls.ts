/** @format */

import XLSX from "xlsx";

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

async function generateXLS(headers: string[], body: string[]) {
  // table_to_book
}
export { generateXLS };
