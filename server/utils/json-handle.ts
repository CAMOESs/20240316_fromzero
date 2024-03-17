/** @format */

import fs from "fs";

function WriteJson(file_path: string, data: any) {
  try {
    let __ = fs.writeFileSync(file_path, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
}

function ReadJson(file_path: string) {
  try {
    let __ = fs.readFileSync(file_path, "utf8");
    let data = JSON.parse(__);

    return data;
  } catch (error) {
    console.error(error);
  }
  return {};
}

export { WriteJson, ReadJson };
