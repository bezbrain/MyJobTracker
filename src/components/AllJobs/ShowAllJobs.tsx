import { useEffect, useState } from "react";
import SingleJobCard from "./SingleJobCard";
import { DocumentData } from "firebase/firestore";
import AllJobsWrapper from "../../StylesWrappers/AllJobs/showAllJobs";
import { getData, useUniqueUserData } from "../../DBSnapShot";
import { searchFilter, statusFilter, typeFilter } from "../../utils/searchJob";
import Loader from "../General/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import JobCardSkeleton from "../Skeletons/JobCardSkeleton";
import { reverseDateFunc } from "../../date";

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
  console.log(uniqueUserData);

  /* ============================================== */
  // Convert all possible date to the standard Javascript date object
  const newDateFormat = uniqueUserData.map((each) => {
    return reverseDateFunc(each.date); // Call the function that does the reversal
  });

  let newUniqueUserData: any = uniqueUserData.map((each, i) => {
    return { ...each, dateObject: newDateFormat[i] }; // Make each object have it own converted date object
  });

  // Sort all jobs according to date
  // Define a custom compare function to parse and compare dates
  const compareDates = (
    a: { dateObject: Date },
    b: { dateObject: Date }
  ): number => {
    return a.dateObject.getTime() - b.dateObject.getTime();
  };

  newUniqueUserData.sort(compareDates); // Sort the new array based on the date object
  console.log(newUniqueUserData);
  /* ============================================== */

  // Handle filter jobs by searching
  const searchFunc = () => {
    if (!search) {
      // If the search input is empty, return the original data
      return newUniqueUserData;
    }
    return (newUniqueUserData = newUniqueUserData.filter(
      (each: { position: string; company: string }) =>
        each.position.toLowerCase().includes(search.toLowerCase()) ||
        each.company.toLowerCase().includes(search.toLowerCase())
    ));
  };
  searchFunc();

  // searchFilter(uniqueUserData, search);

  // Handle filter jobs by sorting
  const statusFunc = () => {
    if (!status || status === "All") {
      // If the search input is empty, return the original data
      return newUniqueUserData;
    }
    return (newUniqueUserData = newUniqueUserData.filter(
      (each: { status: string }) => each.status === status
    ));
  };
  statusFunc();

  // Handle filter jobs by type
  const typeFunc = () => {
    if (!type || type === "All") {
      // If the search input is empty, return the original data
      return newUniqueUserData;
    }
    return (newUniqueUserData = newUniqueUserData.filter(
      (each: { jobType: string }) => each.jobType === type
    ));
  };
  typeFunc();

  if (isLoading) {
    // return <Loader loaderStyle="varyingCSSAllJobs" />;
    return <JobCardSkeleton cards={4} />;
  }

  if (newUniqueUserData.length === 0) {
    return (
      <AllJobsWrapper>
        <p className="no__job">NO JOBS TO DISPLAY</p>
      </AllJobsWrapper>
    );
  }

  return (
    <AllJobsWrapper>
      {newUniqueUserData.map((each: any) => (
        <SingleJobCard key={each.id} {...each} />
      ))}
    </AllJobsWrapper>
  );
};

export default ShowAllJobs;
