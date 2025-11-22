// Q3 — Utility Types (Pick / Partial / Omit)
// Given:
interface Student {
  id: number;
  studentName: string;
  email: string;
  phone: string;
}
// (a) Create a StudentContact type with only name and email (use Pick).
type StudentContact = Pick<Student, 'studentName' | 'email'>;


// (b) Implement:
// function updateStudent(original: Student, update: Partial<Student>): Student
// Return the merged result.
function updateStudent(original: Student, update: Partial<Student>): Student {
  return { ...original, ...update };
}

// { ...original, ...update } means creating a new object by copying all fields from original and then 
// overriding only the fileds provided in updateStudent. It performs a shallow merge and is the most common 
// pattern for implementing PATCH-style updates in TypeScriopt.

// (a) Pick's explanation
// I used Pick<Student, "name" | "email"> because Pick is a mapped type that extracts only the specified keys from an existing type.
// This avoids redefining fields manually, keeps the type consistent with getStudentLabel, and prevents type drift.

// (b-1) Partial's explanation
// The update function accepts Partial<Student> because during updateStudent, not all fields are required. Partial makes every property optional,
//  which is ideal for PATCH-Style updates.

// (b-2) Spread explanation
// Then I return a new object using the spread operator: 
// return { ...original, ...update }. 
// This keeps all original fields intact and only overrides fields provided in update, resulting in a complete and strongly-typed Student.
