import { useEffect, useMemo, useState } from "react";
import SingleJobCard from "./SingleJobCard";
import { DocumentData } from "firebase/firestore";
import AllJobsWrapper from "../../StylesWrappers/AllJobs/showAllJobs";
import { getData, getUserId, useUniqueUserData } from "../../DBSnapShot";

const ShowAllJobs = () => {
  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [uniqueUserData, setUniqueUserData] = useState<DocumentData[]>([]);

  useEffect(() => {
    getData(setDataInDB, setIsLoading);
  }, []);

  // Call the function to handle data uuniqu to each user and display them
  const uniqueUserData = useUniqueUserData(dataInDB);

  if (isLoading) {
    return (
      <AllJobsWrapper>
        <p className="no__job">LOADING...</p>
      </AllJobsWrapper>
    );
  }

  if (uniqueUserData.length === 0) {
    return (
      <AllJobsWrapper>
        <p className="no__job">NO JOBS TO DISPLAY</p>
      </AllJobsWrapper>
    );
  }

  return (
    <AllJobsWrapper>
      {uniqueUserData.map((each: any) => (
        <SingleJobCard key={each.id} {...each} />
      ))}
    </AllJobsWrapper>
  );
};

export default ShowAllJobs;
