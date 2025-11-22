// Q1 — Type Modeling (Interfaces)
// The backend (.NET + Banner student information system) returns the following JSON:
// {
//   "studentId": 12345,
//   "name": { "first": "John", "last": "Doe" },
//   "enrollment": [
//     { "quarter": "2024F", "units": 16, "status": "enrolled" }
//   ],
//   "isInternational": false
// }
// Write TypeScript types for:
// - Name
// - EnrollmentRecord
// - Status (only "enrolled" | "waitlist" | "dropped")
// - Student

type Status = 'enrolled' | 'waitlist' | 'dropped';

interface Name {
  first: string;
  last: string;
}

interface EnrollmentRecord {
    quarter: string;
    units: number;
    status: Status;
}

interface Student {
    studentId: number;
    name: Name;
    enrollment: EnrollmentRecord[];
    isInternational: boolean;
}
