import Busboy from 'busboy';

const useFiles = async (event) => {
  return new Promise((resolve) => {
    const { req } = event.node;
    const files = [];
    const fields = {};
    const busboy = Busboy({ headers: req.headers });
    busboy.on("file", (name, file, info) => {
      const { filename, encoding, mimeType } = info;
      var chunks = [];
      file.on("data", (chunk) => {
        chunks.push(chunk);
      });
      file.on("end", () => {
        files.push({
          fieldname: name,
          filename,
          // filename: new_name,
          encoding,
          mimetype: mimeType,
          buffer: Buffer.concat(chunks)
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
const useFile = useFiles;

export { useFile as u };
//# sourceMappingURL=useFile.mjs.map
