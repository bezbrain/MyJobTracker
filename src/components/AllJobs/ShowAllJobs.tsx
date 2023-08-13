import { useEffect, useState } from "react";
import { colRef, getDataDocs, trackDataInDB } from "../../firebaseStore";
import SingleJobCard from "./SingleJobCard";
import { DocumentData } from "firebase/firestore";

// let dataInDB: DocumentData[] = [];

const ShowAllJobs = () => {
  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = () => {
    setIsLoading(true);
    trackDataInDB(colRef, (snapshot) => {
      const jobs = snapshot.docs.map((each) => {
        // console.log(each);
        return each.data();
      });
      console.log(jobs);

      setDataInDB(jobs);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (dataInDB.length === 0) {
    return <p>NO JOB TO DISPLAY</p>;
  }

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {dataInDB.map((each: any) => (
        <SingleJobCard key={each.id} {...each} />
      ))}
    </main>
  );
};

export default ShowAllJobs;
