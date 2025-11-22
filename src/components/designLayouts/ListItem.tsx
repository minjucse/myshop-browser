import React from "react";

interface ListItemProps {
  itemName: React.ReactNode;
  className?: string;
}

const ListItem = ({ itemName, className }: ListItemProps) => {
  return <li className={className}>{itemName}</li>;
};

export default ListItem;

