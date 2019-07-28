import * as React from 'react';

import NavBar from './NavBar';
import EntryList from '../containers/EntryList';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <h1>My Entries</h1>
      <EntryList />
    </>
  )
}

export default App;