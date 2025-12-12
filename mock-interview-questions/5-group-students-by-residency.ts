{
  type ResidencyStatus = "resident" | "non-resident" | "unknown";

  interface Student {
    id: string;
    fullName: string;
    residencyStatus?: ResidencyStatus | null;
  }

  interface ResidencySummary {
    resident: number;
    nonResident: number;
    unknown: number;
  }

  function summarizeResidency(students: Student[]): ResidencySummary {
    // initialize counts
    const summary: ResidencySummary = {
      resident: 0,
      nonResident: 0,
      unknown: 0,
    };

    for (const student of students) {
      const status = student.residencyStatus ?? "unknown";

      switch (status) {
        case "resident":
          summary.resident++;
          break;
        case "non-resident":
          summary.nonResident++;
          break;
        default:
          summary.unknown++;
      }
    }

    return summary;
  }
}
