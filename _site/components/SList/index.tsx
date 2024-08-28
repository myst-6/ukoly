import { UnorderedList, OrderedList, ListProps, ListItem } from "../List";

export interface SListProps extends ListProps {
  numbered?: boolean;
  children: JSX.Element | JSX.Element[];
}

export const SList = ({ numbered = false, children, ...props }: SListProps) => {
  if (!Array.isArray(children)) children = [children];
  const List = numbered ? OrderedList : UnorderedList;
  return (
    <List ml={10} mt={1} mb={1} {...props}>
      {...children.map((el, idx) => {
        return <ListItem key={idx}>{el}</ListItem>;
      })}
    </List>
  );
}