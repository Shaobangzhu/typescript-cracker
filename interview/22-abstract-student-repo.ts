// Q22 studentRepository - abstract repository + in-memory implementation
// Define an abstract class StudentRepository:
// - Has two abstract methods:
//     - getById(id: number): Promise<Student | null>
//     - getAll(): Promise<Student[]>
// Student is:
// interface Student {
//     id: number;
//     name: string;
// }
// Then implement InMemoryStudentRepository:
// - Constructor takes an initial students: Student[]
// - Uses an internal Map<number, Student> to implement both methods 

{
    interface Student {
        id: number;
        name: string;
    }

    abstract class StudentRepository {
        abstract getById(id: number): Promise<Student | null>;
        abstract getAll(): Promise<Student[]>;
    }

    class InMemoryStudentRepository extends StudentRepository {
        private map = new Map<number, Student>();

        constructor(initial: Student[]) {
            super();
            for (const s of initial) {
                this.map.set(s.id, s);
            }
        }

        async getById(id: number): Promise<Student | null> {
            return this.map.get(id) ?? null;
        }

        async getAll(): Promise<Student[]> {
            return Array.from(this.map.values());
        }
    }
}

// - StudentsRepository defines the contract for data MediaKeySystemAccess, but no implementation.
// - InMemoryStudentRepository is a single implementation using a Map: 1) O(1) lookup by id 2) Easy to use for tests or demos 
// - Methods return Promises so that in-memory and real database implementations share the same async API
