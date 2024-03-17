import { writeFile, existsSync, mkdirSync, mkdir } from "node:fs";
import * as fs from 'fs/promises';

interface FileObject {
  /**
   * These are the HTTP headers of the incoming request, which are used by individual parsers.
   */
  fieldname: string;
  filename: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
}

/* Array of all ext and mimetype */
const mimetypeArray = [{ ext: ".js", mimetype: "application/javascript" }];
// Fonction to find good extension
function fileExtension(ext: string | undefined, mimetype: string): string {
  let extension = "";
  if (ext) return ext;
  /*  for (const iterator of  mimetypeArray) {
        if(iterator)
    } */
  return extension;
}
/**
 * `saveFile` help your to  upload  any file you want
 *
 *  @filename is your a new filename
 * @dir is directory you want save your file
 * @file
 *
 * ```ts
 * // import { saveFile } from 'server/utils/saveFile'
 *
 * saveFile(files[0] , 'tmp/', 'new_name', '.png' )
 *````
 * */

async function saveFile(
  file: FileObject,
  dir: string,
  filename: string,
  ext: string
) {
  //   let new_filename = dir + filename +
  //   if()  dir ex
  if (!existsSync(dir)) {
    // await mkdir(dir, { recursive : true});
    await fs.mkdir(dir, { recursive: true });
  }
  let new_filename = dir + filename + ext;
  writeFile(new_filename, file.buffer, (err) => {
    if (err) throw err;
    console.log(`<${filename}${ext}> is saved ✅`);
  });
}

export { saveFile };
