// Q12 Interface + Impelmentation (Rule Evaluation)
// Define an interface Rule to evaluate students, and implement a specific AgeRule:
// - Rule has a method evaluate(student: Student): boolean 
// - AgeRule returns true if student.age >= 18 

{
    interface Student {
        id: number;
        name: string;
        age: number;
    }

    interface Rule {
        evaluate(student: Student): boolean;
    }

    class AgeRule implements Rule {
        evaluate(student: Student): boolean {
            return student.age >= 18;
        }
    }
}

// I used an interface to define the contract for any rule that evaluates a student.
// AgeRule is one concrete implementation that checks whether the student is at least 18. 
// This interface-based approach makes it easy to add more rules later without changing existing code -- just implement the same interface.\
