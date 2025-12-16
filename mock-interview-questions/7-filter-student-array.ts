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
    // !! 双重取反,把值强行变成boolean 
    // undefined, "" -> false
    // 任何非空字符串 -> true
    const hasSearch = !!normalizedSearch;

    return students.filter((student) => {
        // 1. free-text search on name/email (case-insensitive)
        if (hasSearch) {
            const nameMatch = student.name.toLowerCase().includes(normalizedSearch!);
            const emailMatch = student.email.toLowerCase().includes(normalizedSearch!);

            if (!nameMatch && !emailMatch) {
                return false;
            }
        }

        // 2. optional status filter
        if (status && student.status !== status) {
            return false;
        }

        // 3. optional residency filter
        if (residency && student.residency !== residency) {
            return false;
        }

        return true;
    })
}