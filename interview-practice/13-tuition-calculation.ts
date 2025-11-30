// Q13 Strategy: Tuition Calculation
// Use the Strategy pattern to calculate tuition:
// - Define an interface TuitionRule with calculate(units: number): number
// - Implement UndergradTuitionRule and GradTuitionRule
//     - Undergrad: $300 per unit
//     - Grad: $500 per unit
// - Implement a function getTuition(rule: TuitionRule, units: number): number

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

    function getTuition(rule: TuitionRule, units: number): number {
        return rule.calculate(units);
    }
}

// This is a classic Strategy pattern.
// The TuitionRule interface defines the behavior, and each concrete class encapsulates one specific policy.
// The getTuition function depends only on the interface, so we can swap different rules at runtime.
// for example, undergrad, grad, or even special shcolarship rules -- without modifying client code. 
// It's a clean way to handle varying business rules in a student information system.
