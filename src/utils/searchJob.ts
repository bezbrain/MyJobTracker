import { DocumentData } from "firebase/firestore";

// Function to handle typing search
// export const searchFilter = (
//   uniqueUserData: any,
//   searchInput: string,
//   status: string
//   //   type: string
//   //   setFilter: React.Dispatch<React.SetStateAction<DocumentData[]>>
// ) => {
//   if (
//     !searchInput &&
//     (status === "All" || !status) //&&
//     // (type === "All" || !type)
//   ) {
//     // If the search input is empty, return the original data
//     return uniqueUserData;
//   }

//   // Apply filtering based on searchInput, status, type
//   return uniqueUserData.filter((each: any) => {
//     const isSearchMatch =
//       //   !searchInput ||
//       each.position.toLowerCase().includes(searchInput.toLowerCase()) ||
//       each.company.toLowerCase().includes(searchInput.toLowerCase());

//     const isStatusMatch = status === "All" || each.status === status;

//     // const isTypeMatch = type === "All" || each.jobType === type;
//     // console.log(each.jobType);

//     return isSearchMatch && isStatusMatch; //&& isTypeMatch;
//   });
// };

export const searchFilter = (
  uniqueUserData: any,
  searchInput: string
  //   setFilter: React.Dispatch<React.SetStateAction<DocumentData[]>>
) => {
  if (!searchInput) {
    // If the search input is empty, return the original data
    return uniqueUserData;
  }
  return uniqueUserData.filter((each: any) => {
    return (
      each.position.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.company.toLowerCase().includes(searchInput.toLowerCase())
    );
  });
};

// // Function to handle search by status
export const statusFilter = (
  uniqueUserData: any,
  searchInput: string
  //   setFilter: React.Dispatch<React.SetStateAction<DocumentData[]>>
) => {
  if (!searchInput && searchInput === "All") {
    return uniqueUserData;
  }
  return uniqueUserData.filter((each: any) => each.status === searchInput);
};

// // Function to handle search by type
export const typeFilter = (
  uniqueUserData: any,
  searchInput: string
  //   setFilter: React.Dispatch<React.SetStateAction<DocumentData[]>>
) => {
  if (!searchInput && searchInput === "All") {
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
