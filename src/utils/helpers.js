// Converts date string in format "yyyy-mm-dd" to JavaScript Date object
export const convertToDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return new Date(year, month - 1, day); // Month is zero-indexed in Date constructor
  };
  
  // Formats JavaScript Date object to date string in format "yyyy-mm-dd"
  export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0"); // Month is zero-indexed, so add 1 and pad with leading zero if necessary
    const day = `${date.getDate()}`.padStart(2, "0"); // Pad with leading zero if necessary
    return `${year}-${month}-${day}`;
  };
  
  // Formats price in cents to currency string
  export const formatPrice = (priceInCents) => {
    const priceInDollars = priceInCents / 100; // Convert cents to dollars
    return priceInDollars.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };
  