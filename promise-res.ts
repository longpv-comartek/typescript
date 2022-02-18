class Person {
    name: string;
    greeting: Promise<string>;

    constructor(_name: string) {
        this.name = _name;
        this.greeting = new Promise((rs) => {
            setTimeout(() => {
                rs(`My name is ${_name}`);
            }, 1000);
        });
    }

    children: Person[] = [];
}

const per1 = new Person("p1");
const per1_1 = new Person("p1_1");
const per1_2 = new Person("p1_2");

per1.children.push(per1_1);
per1.children.push(per1_2);

const todoFunction = async (person: Person): Promise<string> => {
    // todo: 
    return 'result'
}

todoFunction(per1).then(result => {
    // result must be
    /**
     * {
     *      name: 'p1',
     *      greeting: 'My name is p1',
     *      children: [
     *          {
     *              name: 'p1_1',
     *              greeting: 'My name is p1_1',
     *              children: []
     *          },
     *          {
     *              name: 'p1_2',
     *              greeting: 'My name is p1_2',
     *              children: []
     *          }
     *      ]
     * }
     */
    console.log(result);
});


