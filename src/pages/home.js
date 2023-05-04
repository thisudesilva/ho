import React from 'react';
import { Link } from 'react-router-dom';
import PackageList from '../components/PackageList';

function Home() {
  return (
    <div>
      <h1>Welcome to HolidayCentral</h1>
      <p>Find the perfect holiday package for you</p>
      <PackageList />
      <Link to="/packages">View All Packages</Link>
    </div>
  );
}

export default Home;
