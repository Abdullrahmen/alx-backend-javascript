export default function iterateThroughObject(reportWithIterator) {
  let str = "";
  for (const emp of reportWithIterator) {
    str += emp + " | ";
  }
  return str.substring(0, str.length - 3);
}
