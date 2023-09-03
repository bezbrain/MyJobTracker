import { DocumentData } from "firebase/firestore";

// Function to handle typing search
export const searchFilter = (
  uniqueUserData: DocumentData[],
  searchInput: string
) => {
  if (!searchInput) {
    // If the search input is empty, return the original data
    return uniqueUserData;
  }
  // if (searchInput) {
  return (uniqueUserData = uniqueUserData.filter(
    (each) =>
      each.position.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.company.toLowerCase().includes(searchInput.toLowerCase())
  ));

  // }
};

// // Function to handle search by status
export const statusFilter = (
  uniqueUserData: DocumentData[],
  searchInput: string
  //   setFilter: React.Dispatch<React.SetStateAction<DocumentData[]>>
) => {
  if (!searchInput || searchInput === "All") {
    // If the search input is empty, return the original data
    return uniqueUserData;
  }
  return (uniqueUserData = uniqueUserData.filter(
    (each) => each.searchInput === searchInput
  ));
};

// // Function to handle search by type
export const typeFilter = (
  uniqueUserData: any,
  searchInput: string
  //   setFilter: React.Dispatch<React.SetStateAction<DocumentData[]>>
) => {
  if (!searchInput || searchInput === "All") {
    return uniqueUserData;
  }
  return uniqueUserData.filter((each: any) => each.jobType === searchInput);
};

// export const combineFilters = (data: any, filters: any) => {
//   if (filters.length === 0) {
//     return data; // If no filters, return the original data
//   }

// Combine the results of filter functions
//   return data.filter((item: any) => {
//     return filters.every((filterFunc: any) => {
//       if (typeof filterFunc === "function") {
//         return filterFunc(item);
//       } else {
//         // Handle the case where filterFunc is not a function
//         return true; // Or you can choose another behavior here
//       }
//     });
//   });
// };
