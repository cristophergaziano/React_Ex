// Create a FilteredList component that receives a list of objects each containing a name,
// an id and a age prop. The FilteredList component should render only the items of the list whose age is greater than 18,
// and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.

import React, { useMemo, useState } from "react";

const users = [
  {
    name: "Ugo",
    id: 1,
    age: 12,
  },
  {
    name: "Davide",
    id: 2,
    age: 19,
  },
  {
    name: "Teresa",
    id: 3,
    age: 16,
  },
  {
    name: "Fabrizio",
    id: 4,
    age: 21,
  },
];

const FilteredList = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        console.log("Filter function is running ...");

        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => {
    return (
      <ul>
        {list.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    );
};

const ListItem = ({ item }) => {
  return <li>{item.name}</li>;
};

export default FilteredList;
