import { Organization } from "./organization";

export interface User {
    _id: string;
    uName: string;
    fName: string;
    lName: string;
    rank: number;
    orgs: Organization[];
}

export interface NewUser {
    _id: string,
    uName: string,
    fName: string,
    lName: string,
    pWord: string
}

export interface VerboseUser {
    _id: string;
    uName: string;
    fName: string;
    lName: string;
    rank: number;
    orgs: Organization[];
    bio: string;
}

export class User {
    constructor(
        public _id: string,
        public uName: string,
        public fName: string,
        public lName: string,
        public rank: number,
        public orgs: Organization[]
    ) { }
}

export class NewUser {
    constructor(
        public _id: string,
        public uName: string,
        public fName: string,
        public lName: string,
        public pWord: string
    ) { }
}

export class AuthUser {
    constructor(
        public uName: string,
        public pWord: string
    ) { }
}