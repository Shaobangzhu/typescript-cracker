// Q7 -- Class-Based-Service (Angular Style)
// Implement a simple student service:
// class StudentService {
//   private cache: Map<number, Student> = new Map();

//   getById(id: number): Student | undefined {}
//   add(student: Student): void {}
// }

{
    type Student = {
        id: number;
        name: string;
        email: string;
    };

    class StudentService {
        // Use map to cache students by their ID
        private cache: Map<number, Student> = new Map();

        // Get a student by ID
        getById(id: number): Student | undefined {
            return this.cache.get(id);
        }

        // Add a student to the cache
        add(student: Student): void {
            this.cache.set(student.id, student);
        }
    }
}
// I implemented a simple Angular-style service class called StudentService.
// Inside, I have a private cache field, which is a Map<number, Student>.
// That map acts as an in-memory cache keyed by student id, and it's private so consumers can only access it through the public methods.
// The getById method is a simple synchronous lookup that calls this.cache.get(id) and returns either a Student or undefined if it doesn’t exist.
// The add method takes a Student object and stores it in the cache by calling this.cache.set(student.id, student), which will either insert or update the record.
// In a real Angular app, this service would be provided as a singleton and could be extended to fetch from HTTP and then populate this cache.
