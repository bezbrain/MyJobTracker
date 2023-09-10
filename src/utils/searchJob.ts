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
  return (uniqueUserData = uniqueUserData.filter(
    (each) =>
      each.position.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.company.toLowerCase().includes(searchInput.toLowerCase())
  ));
};

/* =========================== */
// Function to handle search by status
export const statusFilter = (
  uniqueUserData: DocumentData[],
  searchInput: string
) => {
  if (!searchInput || searchInput === "All") {
    // If the search input is empty, return the original data
    return uniqueUserData;
  }
  return (uniqueUserData = uniqueUserData.filter(
    (each) => each.searchInput === searchInput
  ));
};

/* =========================== */
// Function to handle search by type
export const typeFilter = (uniqueUserData: any, searchInput: string) => {
  if (!searchInput || searchInput === "All") {
    return uniqueUserData;
  }
  return uniqueUserData.filter((each: any) => each.jobType === searchInput);
};
