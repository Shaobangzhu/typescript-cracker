interface Student {
    id: number;
    name: string;
    email: string;
    status: 'Active' | 'Inactive';
    residency: 'Resident' | 'NonResident' | 'NeedsReview'; 
}

function filterStudents(
    students: Student[],
    search?: string,
    status?: Student['status'],
    residency?: Student['residency'],
): Student[] {
    const normalizedSearch = search?.trim().toLowerCase();

    return students.filter(student => {
        if (normalizedSearch) {
            const matchStudentName = student.name.toLowerCase().includes(normalizedSearch);
            const matchEmail = student.email.toLocaleLowerCase().includes(normalizedSearch);

            if (!matchStudentName || !matchEmail) {
                return false;
            }
        }

        if (status && student.status !== status) {
            return false;
        }

        if (residency && student.residency !== residency) {
            return false;
        }

        return true;
    });
}