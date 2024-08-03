function update(student, newGrades) {
    const st = newGrades.find((st) => st.studentId === student.id);
    if (typeof st === 'object')
        student.grade = st.grade;
    else
        student.grade = 'N/A';
    return student;
}

/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function updateStudentGradeByCity (students, city, newGrades){
    students = students.filter((st) => st.location === city);
    return students.map((st) => update(st, newGrades));
}
