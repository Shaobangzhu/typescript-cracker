// Q19. Abstract Rule -- force subclasses to implement evaluate
// Define an abstract class Rule for checking whether a numeric value satisfies some condition:
// - It must have an abstract method evaluate(value: number): boolean
// - It must have a concrete method describe(): string that returns "Generic rule"
// Then implement a subclass MinUnitsRule:
// - The constructor takes min: number 
// - evaluate(value) returns true if value >= min

{
    abstract class Rule {
        abstract evaluate(value: number): boolean;

        describe(): string {
            return "Generic rule";
        }
    }

    class MinUnitsRule extends Rule {
        constructor(private min: number) {
            super();
        }

        evaluate(value: number): boolean {
            return value >= this.min;
        }

        // Optional override
        describe(): string {
            return `Requires at least ${this.min} units`;
        }
    }
}

// Rule is abstract: it can't be instantiated directly and it enforces that subclasses implement evaluate.
// describe() is a default implementation that subclasses can use or override.
// MinUnitsRule is a concrete rule that checks a minimum threshold; it stores min as a private field and implements the required evaluate method
