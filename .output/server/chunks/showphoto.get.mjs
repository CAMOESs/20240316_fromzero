import { d as definePrivateEventHandler, g as getQuery, s as sendStream } from './.get.mjs';
import fs__default from 'fs';
import path__default from 'path';
import 'node:http';
import 'node:https';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import '@prisma/client';

function readFromFilesDirectory(dir, filePath, defaults) {
  const filesDirectory = path__default.join("./", dir);
  if (!filePath)
    return fs__default.createReadStream(path__default.join(filesDirectory, defaults));
  const fullPath = path__default.join(filesDirectory, filePath);
  if (!fullPath.startsWith(filesDirectory)) {
    throw new Error(`Le chemin sort du dossier "${dir}".`);
  }
  if (!fs__default.existsSync(fullPath)) {
    return fs__default.createReadStream(path__default.join(filesDirectory, defaults));
  }
  return fs__default.createReadStream(fullPath);
}

const showphoto_get = definePrivateEventHandler(
  (event) => {
    let query = getQuery(event);
    let name = query.t && typeof query.t == "string" ? query.t : "default.jpeg";
    return sendStream(
      event,
      readFromFilesDirectory(
        "server/public/images/signataire/",
        name,
        "default.jpeg"
      )
    );
  }
  // { auth: true, can :["Voir la liste des élèves",]  }
);

export { showphoto_get as default };
//# sourceMappingURL=showphoto.get.mjs.map
