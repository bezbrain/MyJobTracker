import { DocumentData } from "firebase/firestore";
import { trackDataInDB, colRef, userIdColRef } from "./firebaseStore";

// Get jobs
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

// Function to get the userId sent to local storage during login
export const getUserId = () => {
  const getId: string | null = localStorage.getItem("userId");
  return getId;
};
