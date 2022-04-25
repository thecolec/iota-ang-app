import { User } from "./user";

export interface Minutes {
    _id: string;
    createdDate: string;
    modDate: string;
    oid: string;
    creator: User;
    title: string;
}

export class MinutesObj {
    constructor(
        public _id: string,
        public createdDate: string,
        public modDate: string,
        public oid: string,
        public creator: User
    ){ }
}
