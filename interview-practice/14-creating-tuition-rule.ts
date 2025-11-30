// Q14 Simple Factory -- Creating Tuition Rule
// Add a simple factory function to create the appropriate TuitionRule:
{
    interface TuitionRule {
        calculate(units: number): number;
    }

    class UndergradTuitionRule implements TuitionRule {
        calculate(units: number): number {
            return units * 300;
        }
    }

    class GradTuitionRule implements TuitionRule {
        calculate(units: number): number {
            return units * 500;
        }
    }

    type StudentType = 'undergrad' | 'grad';

    function createTuitionRule(type: StudentType): TuitionRule {
        if (type === 'undergrad') {
            return new UndergradTuitionRule();
        }
        return new GradTuitionRule();
    }
}

// Here I used a simple factory function to decide which strategy to use based on the student type. 
// The calling code doesn't need to know any class names; it just passes a StudentType to and gets a TuitionRule back.
// This centralizes object creation and makes it easier to extend later
// for example, adding more student types or rules without changing the call sites.
