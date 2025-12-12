{
    interface Student {
        id: number;
        name: string;
        email: string;
        status: 'Active' | 'Inactive';
        residency: 'Resident' | 'NonResident' | 'NeedsReview';
    }

    type ResidencyUpdate = {
        studentId: number;
        residency: Student['residency'];
    }

    function mergeById(
        students: Student[],
        updates: ResidencyUpdate[],
    ): Student[] {
        const updateMap = new Map<number, Student['residency']>();

        // 如果同一个studentId出现多次, 默认"最后一次更新生效"
        // 用 Q4里的方法改写
        for (const u of updates) {
            updateMap.set(u.studentId, u.residency);
        }

        return students.map((student) => {
            if (!updateMap.has(student.id)) return student; // 不需要更新,直接复用原对象
            return {...student, residency: updateMap.get(student.id)!};
        });
    }
}
