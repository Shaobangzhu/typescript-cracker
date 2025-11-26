// Define a UserInterface with id: string, name: string, age: number and a method 'getMessage' that 
// returns string.
// Write an usage example of this interface.
{
    interface UserInterface {
        id: string; 
        name: string;
        age: number;
        getMessage(): string;
    }

    const user: UserInterface = {
        id: '1',
        name: 'Foo',
        age: 30,
        getMessage() {
            return `${this.name} is ${this.age}`;
        },
    };
}