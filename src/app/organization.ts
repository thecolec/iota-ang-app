import { User } from "./user";

// Defines organization and organization verbose interfaces.
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