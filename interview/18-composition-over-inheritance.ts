// Q18 Composition over Inheritance Example
// Show a simple example where you perfer composition over inheritance:
// - You have logging behavior you want to release 
// - Use a logger class and inject it into a service instead of extending it

{
    class Logger {
        log(message: string): void {
            console.log(`[LOG] ${message}`);
        }
    }

    class StudentAuditService {
        constructor(private logger: Logger) {}

        recordLogin(studentId: number): void {
            this.logger.log(`Student ${studentId} logged in`);
        }
    }
}

// Here I chose composition over inheritance.
// Instead of making StudentAuditService extend Logger,
// I inject a logger instance and delegate logging to it.
// This avoids a tight coupling between the two classes,
// allow us to swap the logger implementation, and keeps the inheritance tree shallow and flexible
