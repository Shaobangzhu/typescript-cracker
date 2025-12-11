type StudentStatus = "active" | "inactive" | "graduated";

type Student = {
    id: number;
    name: string;
    status: StudentStatus;
    lastLogin: Date;
};

function isActiveStudent(student: Student, days: number): boolean {
   const { status, lastLogin } = student;
   
   if (status !== "active" || !lastLogin) return false;

   const now = Date.now();
   const limit = now - days * 24 * 3600 * 1000;

   return lastLogin.getTime() >= limit;
}