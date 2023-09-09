/*
The Builder Design Pattern is a creational design pattern used in software development to construct complex objects step by step.
It separates the construction of a complex object from its representation,
allowing the same construction process to create different representations.
This pattern is particularly useful when an object needs to have multiple configurations
or when the construction process involves many optional parameters.

Usage:
- Building Database Queries: When constructing complex database queries, a query builder can be used to add conditions, select fields, and set sorting options step by step.
- Creating UI Components: Building user interface components with various customization options, such as buttons, dialogs, or forms.
*/

class Computer {
    constructor(
        public cpu?: string,
        public ram?: string,
        public storage?: string,
        public gpu?: string
    ) {
      console.log('A computer object has been created with no configuration')
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): this {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): this {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): this {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): this {
        this.computer.gpu = gpu;
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}

const builder = new ComputerBuilder();
const computer = builder
    .setCPU("Intel i7")
    .setRAM("16GB")
    .setStorage("512GB SSD")
    .setGPU("NVIDIA GeForce RTX 3080")
    .build();

console.log(computer);

/*
In this example, we have a Computer class representing a computer with various components.
The ComputerBuilder class allows you to construct a Computer object step by step by setting its components.
Finally, the build method returns the constructed Computer object.
This approach provides flexibility and readability when creating complex computer configurations.
*/
