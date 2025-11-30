// Q5 -- Async/Await + Error Handling 
// Implement this function:
// async function fetchStudent(id: number): Promise<ApiResult<Student>>{}
// Requirements:
// - Use async/await 
// - Wrap logic in try/catch 
// - On success -> return { data: Student }
// - On failure -> return { data: null, error: "..." }
{
    type Student = {
    id: number;
    name: string;
    email: string;
    };

    type ApiResult<T> = {
    data: T | null;
    error?: string;
    };

    async function fetchStudent(id: number): Promise<ApiResult<Student>> {
        try {
            // 1) call fetch to get student data, wait for response
            const response = await fetch(`/api/students/${id}`);

            // 2) check if response is ok (status in the range 200-299)
            if (!response.ok) {
                return { 
                    data: null, 
                    error: `Request failed with status ${response.status}`,
                };
            }

            // 3) parse response as JSON
            const student: Student = await response.json();

            // 4) return ApiResult with student data
            return { 
                data: student 
            };
        } catch (error) {
            // 5) handle any errors that occurred during fetch or parsing
            const message = error instanceof Error ? error.message : 'An unknown error occurred';

            // 6) return ApiResult with error message
            return { 
                data: null, 
                error: message 
            };
        }
    }
}

// I define a generic ApiResult<T> wrapper so the function always returns either { data: T } on success or { data: null, error: string } on failure.
// The function itself is marked async, so it returns a Promise<ApiResult<Student>> and I can use await inside.
// Inside a try block, I await fetch with the student id, check response.ok for non-2xx statuses, 
// and in that case I return { data: null, error: ... } with the HTTP status code.
// If the response is OK, I await response.json(), cast it to Student, and return { data: student }.
// Any network or parsing errors are caught in the catch block, where I normalize the error into a readable message and return { data: null, error: message }.
// This way the caller never has to deal with thrown exceptions; it can just check result.error to know whether the call succeeded.
