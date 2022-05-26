
export interface randomUserData {
    info: infoObj,
    results: user[]
}

export interface Iprops {
    randomUser: randomUserData[]
}


export interface infoObj {
    page: number;
    results: number;
    seed: string;
    version: string;

}

export interface user {
    name: {
        title: string;
        first: string;
        last: string;
    },
    email: string;
}