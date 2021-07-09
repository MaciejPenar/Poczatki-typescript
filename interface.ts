interface IAnimal {
    weight: number;
    height: number;
    sex: "male" | "female";
    eat(eating: string): void;
    breathe(): void;
}

interface IPerson extends IAnimal {
    think(): void;
    create(tools: string): Text;
}

interface IFrog extends IAnimal {
    jump(width: number): void;
}

interface IMother extends IPerson {
    giveBirth(male: IPerson): IPerson;
}
