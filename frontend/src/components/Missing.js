import React from 'react';
import HeaderBar from './HeaderBar';
import Searchbar from './Searchbar';
import SearchDisplay from './SearchDisplay';
import MissingBody from './SubComponents/MissingBody'
import Navbar from './Navbar';

const Missing = () => {
  return (
    <div>
        <Navbar />
        <MissingBody />
    </div>
  )
}

export default Missing