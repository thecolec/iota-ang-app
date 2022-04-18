import { User } from "./user";

export interface Organization{
    _id: number;
    Name: string;
    oid: string;
}

export interface OrganizationVerbose extends Organization {
    _id: number;
    Name: string;
    byline: string;
    created: string;
    members: User[];
}