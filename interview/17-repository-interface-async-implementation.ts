// Q17 Repository Interface + Async Implementation
// Define a StudentRepository interface for async operations:
// - fetchById(id: number): Promise<Student>
// - fetchAll(): Promise<Student[]>
// Then implement a simple in-memory version InMemoryStudentRepository

{
    interface Student {
        id: number;
        name: string;
    }

    interface StudentRepository {
        fetchById(id: number): Promise<Student>;
        fetchAll(): Promise<Student[]>;
    }

    class InMemoryStudentRepository implements StudentRepository {
        private students = new Map<number, Student>();

        constructor(initialStudents: Student[] = []) {
            for (const s of initialStudents) {
                this.students.set(s.id, s);
            }
        }

        async fetchById(id: number): Promise<Student> {
            const student = this.students.get(id);
            if (!student) {
                throw new Error(`Student ${id} not found`);
            }
            return student;
        }

        async fetchAll(): Promise<Student[]> {
            return Array.from(this.students.values());
        }
    }
}

// I defined an interface to abstract the data access layer.
// StudentRepository describes what operations are available, but not how they're implemented. 
// InMemoryStudentRepository is one concrete implemenetation that stores data in memory. 
// In a real system we could have another implementation that talks to the .NET/Banner backend, but the 
// callers would use the same interface.
