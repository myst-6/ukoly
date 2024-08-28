import { Badge } from "../Badge";
import { Card, type CardProps } from "../Card";
import { Divider } from "../Divider";
import { Social } from "../Social";
import { Spacer } from "../Spacer";
import { HStack, VStack } from "../Stack";
import { Text } from "../Text";
import { Person, roleColors } from "content";

export interface ProfileProps extends CardProps {
  person: Person;
}

export const Profile = ({ person }: ProfileProps) => {
  return (
    <Card
      display="flex"
      innerStyle={{ display: "flex", flexDirection: "column" }}
    >
      <HStack>
        <Text typography="title.large">{person.name}</Text>
        <HStack flex={1} justifyContent="flex-end">
          {
            ...person.socials.map((social, index) => {
              return <Social social={social} key={index} />;
            })
          }
        </HStack>
      </HStack>
      <Divider m={2} />
      {/* <Text typography="body.medium">
        { person.description }
      </Text> */}
      <Spacer m={3} />
      <VStack flex={1} justifyContent="flex-end">
        <HStack>
          {
            ...person.roles.map(role => {
              return <Badge colorScheme={roleColors[role]} key={role}>{role}</Badge>;
            })
          }
        </HStack>
      </VStack>
    </Card>
  );
};
