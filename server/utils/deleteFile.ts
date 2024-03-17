import { unlink, existsSync, mkdirSync, mkdir } from "node:fs";

/**
 * `deleteFile` help your to  delete  any file you want
 *
 * @file_path is  path of file you want delete
 * @filename 
 *
 * ```ts
 * // import { deleteFile } from 'server/utils/deleteFile'
 *
 * deleteFile( 'directory_name', 'file_name', '.pdf' )
 *````
 * */

async function deleteFile(
  file_path: string,
  filename : string,
) {
  if (existsSync(file_path)) {
    unlink(file_path, (err) => {
      if (err) throw err;
      console.log(`<${filename} is deleted ✅`);
    });
  } else{
    throw createError({
      statusCode : 400,
      message : "No corresponding file.",
    }); 
  }  
}

export { deleteFile };
