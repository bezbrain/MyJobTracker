import { useEffect, useMemo, useState } from "react";
import SingleJobCard from "./SingleJobCard";
import { DocumentData } from "firebase/firestore";
import AllJobsWrapper from "../../StylesWrappers/AllJobs/showAllJobs";
import { getData, useUniqueUserData } from "../../DBSnapShot";
import Loader from "../General/Loader";

const ShowAllJobs = () => {
  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getData(setDataInDB, setIsLoading);
  }, []);

  // Call the function to handle data unique to each user and display them
  const uniqueUserData = useUniqueUserData(dataInDB);

  //  const searchFilter = (searchInput: string) => {
  //   const newUnique = uniqueUserData.filter((each) => {
  //     return (
  //       each.position.toLowerCase().includes(searchInput.toLowerCase()) ||
  //       each.company.toLowerCase().includes(searchInput.toLowerCase())
  //     );
  //   });
  //   return newUnique;
  // };

  if (isLoading) {
    return <Loader loaderStyle="varyingCSSAllJobs" />;
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
