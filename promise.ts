import axios from 'axios';

interface Geo {
    lat: string;
    lng: string;
}
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

/**
 * Kết hợp user và post
 */

class Info<UserType> {
    userId: string;
    user: Promise<UserType>;

    constructor(userId: string) {
        this.userId = userId;
        this.user = axios
            .get('https://jsonplaceholder.typicode.com/users/' + this.userId)
            .then((resp) => {
                return resp.data;
            });
    }

    friends: Info<UserType>[] = [];
}

const info1 = new Info<IUser>('1');
const info2 = new Info<IUser>('2');
const info3 = new Info<IUser>('3');

info1.friends.push(info2);
info1.friends.push(info3);
const info4 = new Info<IUser>('4');
const info5 = new Info<IUser>('5');
const info6 = new Info<IUser>('6');
const info7 = new Info<IUser>('7');
info2.friends.push(info4);
info2.friends.push(info6);
info2.friends.push(info7);
info4.friends.push(info5);

//Hàm thực thi các trường Promise
function getData2<Type>(info: Info<Type>): Promise<Type & { friends: Type[] }> {
    //Nếu không có friends
    if (!info.friends.length) {
        return (
            //thực thi Promise info.user
            (
                Promise.allSettled([info.user]) as Promise<
                    PromiseFulfilledResult<Type>[]
                >
            ).then((data) => ({ ...data[0].value, friends: [] }))
        );
    }
    //Nếu có friends, thực thi Promise info.user và
    return (
        Promise.allSettled([
            //thực thi Promise info.user
            info.user,
            (
                Promise.allSettled(
                    //thực thi getData2 cho từng friend
                    info.friends.map((friend) => getData2(friend))
                ) as Promise<PromiseFulfilledResult<Type>[]>
            ).then((data) => data.map((v) => v.value)),
        ]) as Promise<PromiseFulfilledResult<Type>[]>
    ).then((data) => ({
        ...data[0].value,
        friends: data.slice(1, data.length).map((v) => v.value),
    }));
}

//Hàm xử lý kết quả của getData2
function formatData<Type extends IUser & { friends: Type[] }>(
    data: Type
): Type {
    if (!data.friends.length)
        return {
            ...data,
            friends: [],
        };
    return {
        ...data,
        friends: data.friends
            .flat()
            .map((friend) => formatData(friend as Type)),
    };
}

type MyIUser = IUser & { friends: MyIUser[] };

getData2<IUser>(info1).then((data) => {
    console.log(JSON.stringify(formatData<MyIUser>(data as MyIUser)));
});
