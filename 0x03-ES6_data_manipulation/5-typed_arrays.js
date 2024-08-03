/**
 * Creates a buffer array with a given position set to a given value.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The value to be stored in the position.
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const res = new DataView(buffer)
  try{
      res.setUint8(position, value);
  }catch (error){
      if (error instanceof RangeError)
        throw new Error("Position outside range");
  }
  return res;
}
