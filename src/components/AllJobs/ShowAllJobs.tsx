import { useEffect, useState } from "react";
import SingleJobCard from "./SingleJobCard";
import { DocumentData } from "firebase/firestore";
import AllJobsWrapper from "../../StylesWrappers/AllJobs/showAllJobs";
import { getData } from "../../DBSnapShot";

const ShowAllJobs = () => {
  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getData(setDataInDB, setIsLoading);
  }, []);

  if (isLoading) {
    return (
      <AllJobsWrapper>
        <p className="no__job">LOADING...</p>
      </AllJobsWrapper>
    );
  }

  if (dataInDB.length === 0) {
    return (
      <AllJobsWrapper>
        <p className="no__job">NO JOBS TO DISPLAY</p>
      </AllJobsWrapper>
    );
  }

  return (
    <AllJobsWrapper>
      {dataInDB.map((each: any) => (
        <SingleJobCard key={each.id} {...each} />
      ))}
    </AllJobsWrapper>
  );
};

export default ShowAllJobs;
