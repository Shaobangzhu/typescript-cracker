// Q1. 类型建模
// 后端（.NET + BANNER）返回一个学生对象：
// {
//   "studentId": 12345,
//   "name": {
//     "first": "John",
//     "last": "Doe"
//   },
//   "enrollment": [
//     { "quarter": "2024F", "units": 16, "status": "enrolled" }
//   ],
//   "isInternational": false
// }
// 请用 TypeScript 定义上述对象的类型：
// - Student
// - Name
// - EnrollmentRecord
// - Status（仅允许 'enrolled' | 'waitlist' | 'dropped'）

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
