/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 */
export default function getListStudentIds(students) {
  if (typeof students.map === 'function'){
    return students.map((student) => student.id);
  }
  return [];
}
