import { useMemo } from "react";
import { DocumentData } from "firebase/firestore";
import { trackDataInDB, colRef, userInfoColRef } from "./firebaseStore";

// Get jobs from database
export const getData = (
  setDBState: React.Dispatch<React.SetStateAction<DocumentData[]>>,
  setLoadingState?: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  trackDataInDB(colRef, (snapshot) => {
    const jobs = snapshot.docs.map((each) => {
      return {
        ...each.data(),
        id: each.id,
      };
    });
    // console.log(jobs);
    setDBState(jobs);
    setLoadingState?.(false); // Using optional chaining "?." to avoid error when the second parameter is not passed in the Stat component
  });
};

// Get user details from database
export const getUserSnapshot = (
  localStorageId?: string | null,
  setValue?: React.Dispatch<React.SetStateAction<string>>
): void => {
  trackDataInDB(userInfoColRef, (snapshot) => {
    snapshot.docs.forEach((each) => {
      const userId = each.data().userId2;

      if (localStorageId === userId) {
        setValue?.(each.data().username);
      }
    });
  });
};

// Function to set the userId to local storage during login
export const setUserId = (id: string) => {
  localStorage.setItem("userId", id);
  return id;
};

// Function to get the userId sent to local storage during login
export const getUserId = () => {
  const getId: string | null = localStorage.getItem("userId");
  return getId;
};

// Using useMemo Hook to handle filter of database for uniqueness of individual data
export const useUniqueUserData = (dataInDB: DocumentData[]) => {
  const uniqueUserData = useMemo(() => {
    return dataInDB.filter((each) => each.createdBy === getUserId());
  }, [dataInDB]);

  return uniqueUserData;
};

/* Function to extract error message from the firebase returned message */
export const extratingErrorMsg = (error: string) => {
  const startIndex = error.indexOf("/") + 1;
  const endIndex = error.indexOf(")");
  const errorCode = error.substring(startIndex, endIndex);
  // Capitalize the error message
  const capitalizedError =
    errorCode.charAt(0).toUpperCase() + errorCode.slice(1).toLowerCase();
  return capitalizedError;
};
