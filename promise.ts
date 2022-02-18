import axios from "axios";


const axiosInstance = axios.create({
    baseURL: '',
    headers: {
        'accept': 'application/json'
    }
});
class Player {
    id: string;
    greeting: Promise<string>
    constructor(id: string) {
        this.id = id;
        this.greeting = new Promise((rs) => {
            setTimeout(() => {
                rs(axiosInstance.get(id));
            }, 1000);
        });
    }
    children: Player[] = [];
}
const per1 = new Player("http://api-meme-zendvn-01.herokuapp.com/api//member/member.php?userid=2");
const per1_1 = new Player("http://api-meme-zendvn-01.herokuapp.com/api//member/member.php?userid=2");
const per1_2 = new Player("http://api-meme-zendvn-01.herokuapp.com/api//member/member.php?userid=2");

per1.children.push(per1_1);
per1.children.push(per1_2);

const todoFunction = async (person: Player): Promise<string> => {
    const a = person.greeting
    return a
}
todoFunction(per1).then(result => {
    console.log(result);
});
