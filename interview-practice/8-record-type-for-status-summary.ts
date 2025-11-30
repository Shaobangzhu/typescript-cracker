// Q8 — Record Type for Status Summary
// Given:
{
    type Status = 'enrolled' | 'waitlist' | 'dropped';
    type EnrollmentRecord = { status: Status };
// Implement:
// function summarizeEnrollments(records: EnrollmentRecord[]): Record<Status, number> {}
// Output example: 
// {
//     enrolled: 12,
//     waitlist: 5,
//     dropped: 1
// }

function summarizeEnrollments(records: EnrollmentRecord[]): Record<Status, number> {
    // 1) Initialize summary object with all statuses set to 0
    const summary: Record<Status, number> = {
        enrolled: 0,
        waitlist: 0,
        dropped: 0
    };

    // 2) Iterate through records and count each status
    for (const record of records) {
        summary[record.status]++;
    }

    return summary;
}
// I define Status as a string union and EnrollmentRecord with a status field.
// The function returns a Record<Status, number>, which guarantees I always have three keys: "enrolled", "waitlist", and "dropped".
// Inside the function, I initialize summary with all three statuses set to 0.
// Then I iterate over the records array with a for...of loop, and for each record I increment summary[record.status] by one.
// Finally, I return the summary object, which contains the counts for each status.
}
