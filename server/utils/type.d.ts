interface FileObject {
  includes(arg0: string): any;
  /**
   * These are the HTTP headers of the incoming request, which are used by individual parsers.
   */
  fieldname: string;
  filename: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
}
interface BusboyBody {
    files: Array<FileObject>;
    fields: any;
  }
export { FileObject, BusboyBody };
