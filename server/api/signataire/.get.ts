import { definePrivateEventHandler } from "../..";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import fs from "fs";

export default definePrivateEventHandler(
  async (event) => {
    let jsonData = "";
    jsonData = fs.readFileSync("server/json/signataire.json", "utf8");
    const data = JSON.parse(jsonData);
    return data;
  },
  {
    auth: false,
  }
);
