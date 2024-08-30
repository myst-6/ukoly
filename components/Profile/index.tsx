import { Badge } from "../Badge";
import { Card, type CardProps } from "../Card";
import { Divider } from "../Divider";
import { Social } from "../Social";
import { Spacer } from "../Spacer";
import { HStack } from "../Stack";
import { Text } from "../Text";
import { Wrap, WrapItem } from "../Wrap";
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
        <Text typography={["title.medium", null, "title.large"]}>{person.name}</Text>
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
      <Spacer m={1} />
      <Wrap flex={1} justify="center" spacing={2}>
        {
          ...person.roles.map(role => {
            return (
              <WrapItem key={role}>
                <Badge colorScheme={roleColors[role]}>{role}</Badge>
              </WrapItem>
            );
          })
        }
      </Wrap>
    </Card>
  );
};
