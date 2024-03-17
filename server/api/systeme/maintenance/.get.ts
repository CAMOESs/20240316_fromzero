/** @format */

import { definePrivateEventHandler } from "../../..";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";

export default definePrivateEventHandler(
  async (event) => {
    let jsonData = "";
    jsonData = fs.readFileSync("server/json/maintenance.json", "utf8");
    //console.log ('je suis  moi comme ca  '+JSON.parse(jsonData))
    const data = JSON.parse(jsonData);
    return data;
  },
  {
    auth: false,
  }
);
