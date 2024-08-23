import { Person } from "../base";
import { platforms } from "../socials";

export const people = {
  boris: {
    name: "Boris Hall",
    description: `\
  The founder of this site. So far, the one and only web developer for this website.\
  Writes most of the editorials and provides solutions.\
  `,
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
  } as Person,
  sam: {
    name: "Samuel Trajtenberg",
    description: `\
  Strong UK IOI participant, three-time BIO finalist.\
  Provides solutions and feedback.\
  `,
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
  } as Person,
};

export const People = typeof people;
