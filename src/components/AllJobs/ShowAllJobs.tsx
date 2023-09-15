import { useEffect, useMemo, useState } from "react";
import SingleJobCard from "./SingleJobCard";
import { DocumentData } from "firebase/firestore";
import AllJobsWrapper from "../../StylesWrappers/AllJobs/showAllJobs";
import { getData, useUniqueUserData } from "../../DBSnapShot";
import { searchFilter, statusFilter, typeFilter } from "../../utils/searchJob";
import Loader from "../General/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import JobCardSkeleton from "../Skeletons/JobCardSkeleton";

const ShowAllJobs = () => {
  const { search, status, type } = useSelector(
    (store: RootState) => store.allJobsStore.allJobsInputs
  );

  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]); // To hold all jobs data
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getData(setDataInDB, setIsLoading);
  }, []);

  // Call the function to handle data unique to each user and display them
  let uniqueUserData = useUniqueUserData(dataInDB);

  // Handle filter jobs by searching
  const searchFunc = () => {
    if (!search) {
      // If the search input is empty, return the original data
      return uniqueUserData;
    }
    uniqueUserData = uniqueUserData.filter(
      (each) =>
        each.position.toLowerCase().includes(search.toLowerCase()) ||
        each.company.toLowerCase().includes(search.toLowerCase())
    );
  };
  searchFunc();

  // searchFilter(uniqueUserData, search);

  // Handle filter jobs by sorting
  const statusFunc = () => {
    if (!status || status === "All") {
      // If the search input is empty, return the original data
      return uniqueUserData;
    }
    return (uniqueUserData = uniqueUserData.filter(
      (each) => each.status === status
    ));
  };
  statusFunc();

  // Handle filter jobs by type
  const typeFunc = () => {
    if (!type || type === "All") {
      // If the search input is empty, return the original data
      return uniqueUserData;
    }
    return (uniqueUserData = uniqueUserData.filter(
      (each) => each.jobType === type
    ));
  };
  typeFunc();

  if (isLoading) {
    // return <Loader loaderStyle="varyingCSSAllJobs" />;
    return <JobCardSkeleton cards={4} />;
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
