// - You have an interface UserInterface with identity, name, age
// - create a UsersService and getUsers method which makes a get request to http://localhost:3004/
// - users and returns a users stream 
// - write the code to get this data in component 

import { Observable, of } from "rxjs";

/**
 * Lightweight stubs to avoid needing Angular packages for this example.
 * In a real Angular project keep the original imports.
 */
function Injectable(): ClassDecorator {
    return () => {};
}

class HttpClient {
    get<T>(url: string): Observable<T> {
        // Return an empty Observable placeholder; replace with real HttpClient in Angular app.
        return of(null as any);
    }
}

{
    interface UserInterface {
        id: string;
        name: string;
        age: number;
    }

    @Injectable()
    class UsersService {
        constructor(private http: HttpClient) {}

        getUsers(): Observable<UserInterface[]> {
            return this.http.get<UserInterface[]>('http://localhost:3004/users');
        }
    }
}