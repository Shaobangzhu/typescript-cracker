type StudentName = {
    firstName: string;
    middleName?: string | null;
    lastName: string;
}

function formatStudentName(s: StudentName): string {
    const { firstName, middleName, lastName } = s;

    // Because user may typo " " and we only return one char here
    const middle = middleName ? `${middleName.trim().charAt(0)}.` : "";

    return middle ? `${lastName}, ${firstName} ${middle}` : `${lastName}, ${firstName}`;
}