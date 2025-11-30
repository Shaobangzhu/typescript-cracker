// Q21. AbstractResidencyChecker - Template Method style 
// Implement an abstract class AbstractResidencyChecker:
// - It has a template method AbstractResidencyChecker(student: Student): boolean which:
//     - Calls two abstract "hook" methods:
//         - hasBasicRequirements(student: Student): boolean
//         - hasFinancialTies(student: Student): boolean 
//     Returns true only if both check pass 
// Student is:
// interface Student {
//     id: number;
//     monthsInCA: number;
//     filesCATaxes: boolean;
// }
// Create a concrete subclass SimpleResidencyChecker:
// - Basic requirement: monthsInCA >= 12
// - Financial ties: filesCATaxes === true
{
    interface Student {
        id: number;
        monthsInCA: number;
        filesCATaxes: boolean;
    }

    abstract class AbstractResidencyChecker {
        protected abstract hasBasicRequirements(student: Student): boolean;
        protected abstract hasFinancialTies(student: Student): boolean;

        check(student: Student): boolean {
            return (
                this.hasBasicRequirements(student) &&
                this.hasFinancialTies(student)
            );
        }
    }

    class SimpleResidencyChecker extends AbstractResidencyChecker {
        protected hasBasicRequirements(student: Student): boolean {
            return student.monthsInCA >= 12;
        }

        protected hasFinancialTies(student: Student): boolean {
            return student.filesCATaxes === true;
        }
    }
}

// - check() is the template method: it defines the overall algorithm.
// - The detailed steps hasBasicRequirements and hasFinancialTies are abstract hooks implemented by subclasses
// - SimpleResidencyChecker provides a specific interpretation of residency based on months in California and tax filing.
