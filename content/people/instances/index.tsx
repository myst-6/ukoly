import { Person } from "../base";
import { platforms } from "../socials";

export const people: Person[] = [
  {
    name: "Boris Hall",
    socials: [
      {
        platform: platforms.codeforces,
        handle: "myst-6",
      },
      {
        platform: platforms.github,
        handle: "myst-6",
      },
      {
        platform: platforms.discord,
        handle: "446711256737644556",
      },
    ],
    roles: ["Contributor", "Developer", "Manager"],
  },
  {
    name: "Samuel Trajtenberg",
    socials: [
      {
        platform: platforms.codeforces,
        handle: "sammyuri",
      },
      {
        platform: platforms.github,
        handle: "sammyuri",
      },
    ],
    roles: ["Contributor"],
  },
];
