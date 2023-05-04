import { useState, useEffect } from 'react';
import axios from 'axios';

function PackageSearch() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function searchPackages() {
      try {
        const response = await axios.get('/api/packages');
        setPackages(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    searchPackages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {packages.map((pkg) => (
        <PackageDetails key={pkg.id} package={pkg} />
      ))}
    </div>
  );
}

export default PackageSearch;
