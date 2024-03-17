/** @format */

import fs from "fs";
import path from "path";
// import { getServerSession } from "#auth";
import { defineLogEventHandler, appendTextInLogFile } from "..";
/* 
export default definePrivateEventHandler(
  async (event, user) => {
    const url = event.node.req.url;

    // const data = `${seconds} :  ${url}  username = ${user?.username} \n`;
    //@ts-ignore
    const data = `${url}  username = ${user?.username}\n`;
    // const data = 'test test'

    appendTextInLogFile(data);
  },
  { auth: false }
);
 */
const file_path = "server/json/log.json";
export default defineLogEventHandler(async (event, user) => {
  
  let res = ReadJson(file_path);


  
  if (!res.status) return;

  const url = event.node.req.url;

  // const data = `${seconds} :  ${url}  username = ${user?.username} \n`;
  //@ts-ignore
  const data = `${url}  username = ${user?.username}\n`;
  // const data = `${url}  username = ????\n`;
  // const data = 'test test'

  appendTextInLogFile(data);
});
