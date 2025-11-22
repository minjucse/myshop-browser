import React from "react";

interface ListProps {
  children: React.ReactNode;
  className?: string;
}

const List = ({ children, className }: ListProps) => {
  return <ul className={className}>{children}</ul>;
};

export default List;

