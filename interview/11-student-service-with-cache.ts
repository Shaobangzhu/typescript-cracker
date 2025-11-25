// Q11. StudentService with Cache (Angular-style Service)
// Question:
// Design a StudentService class that:
// - Stores students in memory using a Map<number, Student>
// - Can add a student
// - Can get a student by ID
// Assume:
{
  interface Student {
    id: number;
    name: string;
  }

  class StudentService {
    private cache: Map<number, Student> = new Map();

    add(student: Student): void {
      this.cache.set(student.id, student);
    }

    getById(id: number): Student | undefined {
      return this.cache.get(id);
    }

    getAll(): Student[] {
      return Array.from(this.cache.values());
    }
  }
}

// I created a simple class-based service that encapsulates an in-memory cache using a Map.
// The add and getById methods provide a clean API to interact with the cache.
// This pattern matches how Angular services are typically structured and is also easy to test and extends.
// for example, later we could plug in an HTTP backend without changing the consumers.
