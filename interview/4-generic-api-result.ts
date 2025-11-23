// Q4 -- Generics: API Result Wrapper
// Define a generic type:
type ApiResult<T> = {
  data: T;
  error?: string;
};
// Then implement:
function success<T>(value: T): ApiResult<T> {
    return { data: value };
}

// I created a generic ApiResult<T> so the API layer can return consistent shapes 
// regardless of the data type.
// Using generics gives us flexibility while preserving compile-time types. 
// The success<T> function shows how to wrap any value in the typed structure, and downstream callers get full inference.
// This pattern matches Angular's HttpClient design and keeps the service layer clean.
