// Q16 Composition with Services (DI-style)
// You already have a StudentService. Now create an EnrollmentService that depends on StudentService:
// - It should have a method getStudentName(id: number): string | undefined
// - Use constructor injection for StudentService
{
    interface Student {
        id: number;
        name: string;
    }

    class StudentService {
        private cahce = new Map<number, Student>();

        add(student: Student): void {
            this.cahce.set(student.id, student);
        }

        getById(id: number): Student | undefined {
            return this.cahce.get(id);
        }
    }

    class EnrollmentService {
        constructor(private studentService: StudentService) {}

        getStudentName(id: number): string | undefined {
            const student = this.studentService.getById(id);
            return student?.name;
        }
    }
}

// This demonstrates composition and dependency injection.
// EnrollmentService depends on StudentService and receives it via the constructor, which is how 
// Angular typically wires services.
// This keeps responsibilities separated and makes both classes easy to be test by mocking StudentService when needed.
