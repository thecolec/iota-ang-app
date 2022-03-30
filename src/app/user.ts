export interface User {
    _id: string;
    fName: string;
    lName: string;
}

export class User {
    constructor(
        public _id: string,
        public uName: string,
        public fName: string,
        public lName: string
    ) { }
}