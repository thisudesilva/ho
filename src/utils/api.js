const API_BASE_URL = 'http://localhost:3000/api';

export async function searchPackages(destination, duration, numTravelers, specialty, minPrice, maxPrice) {
  const response = await fetch(`${API_BASE_URL}/packages?destination=${destination}&duration=${duration}&numTravelers=${numTravelers}&specialty=${specialty}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
  const packages = await response.json();
  return packages;
}

export async function getPackageDetails(id) {
  const response = await fetch(`${API_BASE_URL}/packages/${id}`);
  const packageDetails = await response.json();
  return packageDetails;
}

export async function bookPackage(packageData) {
  const response = await fetch(`${API_BASE_URL}/packages/book`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(packageData)
  });
  const bookingResult = await response.json();
  return bookingResult;
}

