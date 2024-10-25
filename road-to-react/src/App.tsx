import * as React from 'react';

interface Story {
  title: string;
  url: string;
  author: string;
  numOfComments: number;
  points: number;
  objectID: number;
}

const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      numOfComments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      numOfComments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleSearch');
    console.log(event.target.value);
  };

  return (
    <>
      <div>
        <h1>My Hacker Stories</h1>

        <Search onSearch={handleSearch} />

        <hr />

        <List list={stories} />
      </div>
    </>
  );
};

interface SearchProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: SearchProps) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };

  return (
    <>
      <div>
        <label htmlFor="search">Search: </label>
        <input type="text" id="search" onChange={handleChange} />
      </div>
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </>
  );
};

interface Stories {
  list: Story[];
}

const List = (props: Stories) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

function Item(props: Readonly<{ item: Story }>) {
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.numOfComments}</span>
      <span>{props.item.points}</span>
    </li>
  );
}

export default App;
