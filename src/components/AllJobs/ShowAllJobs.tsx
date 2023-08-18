import { useEffect, useState } from "react";
import { colRef, trackDataInDB } from "../../firebaseStore";
import SingleJobCard from "./SingleJobCard";
import { DocumentData } from "firebase/firestore";
import AllJobsWrapper from "../../StylesWrappers/AllJobs/showAllJobs";

const ShowAllJobs = () => {
  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = () => {
    // setIsLoading(true);
    trackDataInDB(colRef, (snapshot) => {
      const jobs = snapshot.docs.map((each) => {
        return {
          ...each.data(),
          id: each.id,
        };
      });
      console.log(jobs);

      setDataInDB(jobs);
      // setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (dataInDB.length === 0) {
    return <p>NO JOB TO DISPLAY</p>;
  }

  if (dataInDB.length > 0) {
    <p>LOADING...</p>;
  }

  return (
    <AllJobsWrapper>
      {isLoading && <p>Loading...</p>}
      {dataInDB.map((each: any) => (
        <SingleJobCard key={each.id} {...each} />
      ))}
    </AllJobsWrapper>
  );
};

export default ShowAllJobs;
