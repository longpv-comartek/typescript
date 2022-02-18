import axios from "axios";

interface IPlayer {
    id: string;
    name: string;
    dob: string;
    GetName(a: string, b: string): Promise<promise>;
}
interface promise {

}
const axiosInstance = axios.create({
    baseURL: '',
    headers: {
        'accept': 'application/json'
    }
});
class Player implements IPlayer {
    id: string;
    name: string;
    dob: string;
    constructor(id: string, name: string, dob: string) {
        this.id = id;
        this.name = id;
        this.dob = id;
    }

    async GetName(a: string, b: string): Promise<promise> {
        const promise1 = await axiosInstance.get(a);
        const promise2 = axiosInstance.get(b)
        const data = await Promise.all([promise1, promise2])
        console.log(data);
        return data
    };
}
const player = new Player('sbd', 'sbd', 'sbd')
console.log(player.GetName('http://api-meme-zendvn-01.herokuapp.com/api//member/member.php?userid=2', 'https://api.coindesk.com/v1/bpi/currentprice.json'));
