// Q15 Adapter Pattern -- BannerStudent -> Student
// Banner returns student data in this shape 
// type BannerStudent = {
//     st_id: number;
//     fname: string;
//     lname: string;
// };
// Your front-end uses:
// interface Student {
//     id: number;
//     firstName: string;
//     lastName: string;
// }
// Write an adapter to convert BannerStudent to Student.

{
    type BannerStudent = {
        st_id: number;
        fname: string;
        lname: string;
    };

    interface Student {
        id: number;
        firstName: string;
        lastName: string;
    }

    class BannerStudentAdapter {
        static toStudent(raw: BannerStudent): Student {
            return {
                id: raw.st_id,
                firstName: raw.fname,
                lastName: raw.lname 
            }
        }
    }
}

// The backend and frontend use different shapes, so I introduced an adapter.
// BannerStudentAdapter.toStudent converts the Banner-specific field names into the normalized Student 
// interface that the rest of the app uses.
// This isolates the integration differences and prevents Banner-specific details from leaking into the rest of the codebase.
