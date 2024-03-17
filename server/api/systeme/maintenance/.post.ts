import { definePrivateEventHandler } from "../../..";

import fs  from "fs";

export default definePrivateEventHandler(async event => {
  const body = await readBody(event);
  let data = null;
  let data_ = null;
  try {
    fs.writeFileSync("server/json/maintenance.json", JSON.stringify(body));
      data=JSON.stringify(body)
    return (data)

  } catch (error) {
    console.log(error);
  }

})