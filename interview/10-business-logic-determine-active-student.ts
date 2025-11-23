// Q10 -- Business Logic: Determine Active Student
// Given:
{
type TermRecord = {
  quarter: string;     // e.g., "2024F"
  units: number;       // 0–20
  tuitionPaid: boolean;
};
// Write a function:
// function isActiveStudent(records: TermRecord[]): boolean {}
// A student is considered "active" if in the last two quarters:
// - At least one term units >= 8
// - And that term has tuitionPaid = true

function isActiveStudent(records: TermRecord[]): boolean {
    const sorted = [...records].sort((a, b) => 
        a.quarter < b.quarter ? 1 : a.quarter > b.quarter ? -1 : 0
    );

    const lastTwoQuarters = new Set<string>();
    const considered: TermRecord[] = []; 

    for (const record of sorted) {
        if (!lastTwoQuarters.has(record.quarter)) {
            lastTwoQuarters.add(record.quarter);
        }

        if (lastTwoQuarters.size <= 2) {
            considered.push(record);
        } else {
            break;
        }
    }

    return considered.some(record => record.units >= 8 && record.tuitionPaid);
}

// First, I model each term as a TermRecord with quarter, units, and tuitionPaid.
// In isActiveStudent, I start by copying and sorting the records by quarter in descending order so the newest terms come first.
// Then I iterate through the sorted array, tracking distinct quarters in a Set.
// As long as I’ve seen at most two different quarters, I push those records into a considered array.
// Once I hit a third quarter, I break, because anything older than the last two quarters shouldn’t affect the decision.
// Finally, I call some on considered to check if there is at least one term with units >= 8 and tuitionPaid === true.
// If such a term exists, the student is active; otherwise, they’re not.
}
