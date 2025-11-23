// Q9 — Function Overloading

// Implement a function formatName that:

// Accepts either
// (1) an object { first: string; last: string }
// or (2) a string "John|Doe"

// Returns "John Doe" in both cases

// Use TypeScript overload signatures.

{
    type NameObj = { first: string; last: string };

    // 1) Overload signatures: accepting a NameObj
    function formatName(name: NameObj): string;

    // 2) Overload signatures: accepting a string
    function formatName(name: string): string;

    // 3) Implementation: Union type for parameter, returning formatted string
    function formatName(name: NameObj | string): string {
        if (typeof name === 'string') {
            const [first, last] = name.split('|');
            return `${first} ${last}`;
        }

        return `${name.first} ${name.last}`;
    }
}
// Here I’m using TypeScript function overloads to model two different call signatures for the same function.
// I first declare two overload signatures: one takes a { first, last } object, and one takes a string like "John|Doe".
// Then I provide a single implementation whose parameter type is the union NameObj | string, which is compatible with both overloads.
// Inside the implementation, I use typeof name === 'string' to narrow to the string case, split by "|", and format "first last".
// In the other branch, name is a NameObj, so I simply return ${name.first} ${name.last}.
// The caller sees precise overloads, but the implementation remains a single, type-safe function.
