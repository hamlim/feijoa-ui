// LOL
// https://github.com/oven-sh/bun/issues/802
import { Console } from "node:console";
import { Transform } from "node:stream";

const ts = new Transform({
  transform(chunk, _, cb) {
    cb(null, chunk);
  },
});
const logger = new Console({ stdout: ts });

function getTable(data: any) {
  logger.table(data);
  const table = (ts.read() || "").toString();
  console.log(table);
}
console.table = getTable;
