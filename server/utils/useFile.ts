import { H3Event } from "h3";
import Busboy from "busboy";
import { BusboyBody } from "./type";

const useFiles = async (event: H3Event): Promise<BusboyBody> => {
  return new Promise((resolve) => {
    const { req } = event.node;
    const files: Array<any> = [];
    const fields: any = {};
    const busboy = Busboy({ headers: req.headers });

    busboy.on("file", (name, file, info) => {
      const { filename, encoding, mimeType } = info;
      var chunks: Array<any> = [];
      file.on("data", (chunk) => {
        chunks.push(chunk);
      });
      //   const saveTo = path.join(os.tmpdir(), `busboy-upload-${random()}`);
      // let new_name = "tmp/" + (Math.random() * 1e9).toString();
      // file.pipe(fs.createWriteStream(new_name));
      file.on("end", () => {
        files.push({
          fieldname: name,
          filename,
          // filename: new_name,
          encoding,
          mimetype: mimeType,
          buffer: Buffer.concat(chunks),
        });
      });
    });
    busboy.on("field", (name, value, info) => {
      fields[name] = value;
    });
    busboy.on("finish", () => {
      resolve({ files, fields });
    });
    req.pipe(busboy);
  });
};
export default useFiles;
