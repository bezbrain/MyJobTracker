import { useEffect, useState } from "react";
import { colRef, trackDataInDB } from "../../firebaseStore";
import SingleJobCard from "./SingleJobCard";
import { DocumentData } from "firebase/firestore";
import AllJobsWrapper from "../../StylesWrappers/AllJobs/showAllJobs";

const ShowAllJobs = () => {
  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = () => {
    trackDataInDB(colRef, (snapshot) => {
      const jobs = snapshot.docs.map((each) => {
        return {
          ...each.data(),
          id: each.id,
        };
      });
      // console.log(jobs);
      setDataInDB(jobs);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
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
