/** @format */

import fs from "fs";
import path from "path";

function readFromFilesDirectory(
  dir: string,
  filePath: string | undefined | null,
  defaults: string
) {
  // Chemin du dossier "./public/"
  const filesDirectory = path.join("./", dir);

  if (!filePath)
    return fs.createReadStream(path.join(filesDirectory, defaults));
  // Chemin complet du fichier
  const fullPath = path.join(filesDirectory, filePath);

  // Vérifie si le chemin est à l'intérieur du dossier "public/"
  if (!fullPath.startsWith(filesDirectory)) {
    throw new Error(`Le chemin sort du dossier "${dir}".` );
  }

  if (!fs.existsSync(fullPath)) {
    // Default image
    return fs.createReadStream(path.join(filesDirectory, defaults));
  }

  return fs.createReadStream(fullPath);
}
export { readFromFilesDirectory };

/* try {
    const content = readFromFilesDirectory('binding_dark.png');
    console.log(content);


    console.log("=====+2=============");

    
    console.log( readFromFilesDirectory('/icons/../../binding_dark.png'));

} catch (error) {
    console.error(error.message);
}
 */
