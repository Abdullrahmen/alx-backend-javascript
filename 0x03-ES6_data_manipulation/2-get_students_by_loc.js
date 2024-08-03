/**
 * Retrieves students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 */
export default function getStudentsByLocation(students, city) {
  if (typeof students.filter === 'function'){
    return students.filter((student) => student.location === city);
  }
  return [];
}
