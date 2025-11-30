// Q20. Abstract AbstractStudentService -- shared behavior + forced load()
// Design an abstract class AbstractStudentService:
// - Has a protected array students: Student[] 
// - Has an abstract method load(): Promise<void> to load data from some source 
// - Has a concrete method findById(id: number): Student | undefined 
// Student is:
// interface Student {
//     id: number;
//     name: string;
// }
// Then implements a subclass InMemoryStudentService:
// - The constructor accepts an initial students: Student[]
// - load() returns a resolved Promise<void> (since data is already in memory)

{
    interface Student {
        id: number;
        name: string;
    }

    abstract class AbstractStudentService {
        protected students: Student[] = [];

        abstract load(): Promise<void>;

        findById(id: number): Student | undefined {
            return this.students.find(s => s.id === id);
        }
    }

    class InMemoryStudentService extends AbstractStudentService {
        constructor(initial: Student[]) {
            super();
            this.students = initial;
        }

        async load(): Promise<void> {
            // No-op for in-memory; real implementations would fetch from backend
            return;
        }
    }
}

// AbstractStudentService provides shared behavior (findById) and a shared data structure (students array), but doesn't decide where data comes from.
// load() is abstract, forcing each subclass to define its own loading mechanism (else.g. HTTP call, database MediaQueryList, or just in-memory).
// InMemoryStudentService shows a simple implementation where data is already available and load() does nothing.
