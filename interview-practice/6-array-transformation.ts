// Q6 -- Array Transformation (filter + map + some)
// Given:
{
  type Term = { quarter: string; units: number };
  type Student = { id: number; name: string; terms: Term[] };
  // Write a function:
  // function getFall2024StudentsNames(students: Student[]): string[] {}
  // Return names of students who have at least one term in "2024F"

  function getFall2024StudentsNames(students: Student[]): string[] {
    return students
      .filter((student) =>
        student.terms.some((term) => term.quarter === "2024F")
      )
      .map((student) => student.name);
  }
}

// I take an array of Student objects and first call filter.
// For each student, I use some on student.terms to check whether they have at least one term whose quarter is "2024F".
// That gives me only the students who attended Fall 2024.
// Then I call map to transform that filtered list into an array of names.
// So the final result is a string[] containing the names of all students who have at least one "2024F" term.
