import { Socials } from "../socials";

export type Role = 
  "Contributor" |
  "Developer" |
  "Manager";

export interface Person {
  name: string;
  description: string;
  socials: Socials;
  roles: Role[];
}

export type RoleMap<T> = Record<Role, T>;

export const roleColors: RoleMap<string> = {
  "Contributor": "green",
  "Developer": "red",
  "Manager": "purple",
};