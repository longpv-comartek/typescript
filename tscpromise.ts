import axios from 'axios';

interface Post {
    USERID: string;
    profilepicture: string;
    fullname: string;
    PID: string;
    url_image: string;
    post_content: string;
    time_added: string;
    status: string;
    tag_index: string;
    tag_value: string;
    count: string;
}
interface RootObject {
    status: number;
    message: string;
    posts: Post[];
}
class Person<T> {
    id: string;
    greeting: Promise<string>;

    constructor(id: string) {
        this.id = id;
        this.greeting = axios
            .get('https://api-meme-zendvn-01.herokuapp.com/api/post/getListByCategory.php?pagesize=3&currPage=1&tagIndex=' + this.id)
            .then((resp) => {
                return resp.data.message
            });
    }

    children: Person<T>[] = [];
}


const per1 = new Person<RootObject>('1');
const per2 = new Person<RootObject>('2');
const per3 = new Person<RootObject>('3');

per1.children.push(per2);
per1.children.push(per3);
const per04 = new Person<RootObject>('1');
const per05 = new Person<RootObject>('2');
const per06 = new Person<RootObject>('3');
const per07 = new Person<RootObject>('1');
per2.children.push(per04);
per2.children.push(per06);
per2.children.push(per07);
per04.children.push(per05);

const todoFunction = async (person: Person<RootObject>) => {
    const item = await person.greeting.then(res => res)
    const listApi = person.children.map(item => todoFunction(item))
    const info = await Promise.all(listApi)
    let child: Person<RootObject>[] = [];
    info.forEach(e => child.push(JSON.parse(e)));
    const result = {
        name: person.id,
        greet: item,
        children: child
    }
    return JSON.stringify(result, null, 2);
}

todoFunction(per1).then(data => console.log(data))
