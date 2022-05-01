import { Organization } from "./organization";
// Defines various user type formats used throughout the application
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

export interface AuthUser {
    uName: string,
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
    joindate: string;
}

// defines user clases for easily generating new users of specific types.
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