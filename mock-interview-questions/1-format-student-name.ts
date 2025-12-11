type StudentName = {
    firstName: string;
    middleName?: string | null;
    lastName: string;
}

function formatStudentName(s: StudentName): string {
    const { firstName, middleName, lastName } = s;

    const middle = middleName ? `${middleName.charAt(0)}.` : "";

    return middle ? `${lastName}, ${firstName} ${middle}` : `${lastName}, ${firstName}`;
}