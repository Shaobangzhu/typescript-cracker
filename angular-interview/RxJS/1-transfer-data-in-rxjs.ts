// You get such UserInterface. Define a function normalizeUsers which gets a parameter users$ which
// is an observable of UserInterface array and returns back an array of names as an observable.

// how rxjs map differs from javascript map?

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

{
    interface UserInterface {
        id: string;
        name: string;
        age: number;
    }

    const normalizeUsers = (
        users$: Observable<UserInterface[]>
    ): Observable<string[]> => {
        return users$.pipe(map((users) => users.map((user) => user.name)));
    };
}

// This function receives an observable stream of user arrays.
// I use RxJS pipe with map to transform each emission from a list of user objects into a list of names
// A key benefit is that this transformation is reactive -- if the original observable emits new data, the
// transformed observable updates automatically