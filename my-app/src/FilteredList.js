// Create a FilteredList component that receives a list of objects each containing a name,
// an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18,
// and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.

import React, { useMemo } from "react";

const ListItem = (item) => {
  return <li>{item.name}</li>;
};

const List = (list) => {
  return <ul>{list.map((item) => ListItem(item))}</ul>;
};

const FilteredList = ({ users }) => {
  const filteredUsers = useMemo(
    () => users.filter((user) => user.age > 18),
    [users]
  );

  return <div>{List(filteredUsers)}</div>;
};

export default FilteredList;
