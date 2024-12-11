import { Socials } from "../socials";

export type Role =
  "Honorary Contributor" |
  "Contributor" |
  "Developer" |
  "Manager";

export interface Person {
  name: string;
  socials: Socials;
  roles: Role[];
}

export type RoleMap<T> = Record<Role, T>;

export const roleColors: RoleMap<string> = {
  "Honorary Contributor": "yellow",
  "Contributor": "green",
  "Developer": "red",
  "Manager": "purple",
};