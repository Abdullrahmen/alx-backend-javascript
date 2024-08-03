/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number}
 */
export default function getStudentIdsSum(students) {
  if (typeof students.reduce === 'function') {
    let studentsIDs = students.map((student) => student.id);
    return studentsIDs.reduce((total, student) => total + student);
  }
  return 0;
}
