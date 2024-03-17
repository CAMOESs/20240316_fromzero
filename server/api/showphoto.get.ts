/** @format */

import { definePrivateEventHandler } from "..";
import { sendStream } from "h3";
import { readFromFilesDirectory } from "../utils/send-photo";

export default definePrivateEventHandler(
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
  },
  // { auth: true, can :["Voir la liste des élèves",]  }
);
