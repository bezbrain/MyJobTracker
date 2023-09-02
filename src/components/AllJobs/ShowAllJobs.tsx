import { useEffect, useMemo, useState } from "react";
import SingleJobCard from "./SingleJobCard";
import { DocumentData } from "firebase/firestore";
import AllJobsWrapper from "../../StylesWrappers/AllJobs/showAllJobs";
import { getData, useUniqueUserData } from "../../DBSnapShot";
import { searchFilter, statusFilter, typeFilter } from "../../utils/searchJob";
import Loader from "../General/Loader";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ShowAllJobs = () => {
  const { search, status, type, sort } = useSelector(
    (store: RootState) => store.allJobsStore.allJobsInputs
  );

  const [dataInDB, setDataInDB] = useState<DocumentData[]>([]); // To hold all jobs data
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [filteredData, setFilteredData] = useState<DocumentData[]>([]);

  useEffect(() => {
    getData(setDataInDB, setIsLoading);
  }, []);

  // Call the function to handle data unique to each user and display them
  const uniqueUserData = useUniqueUserData(dataInDB);

  // console.log(type);

  // Apply each filter independently
  const searchFilteredData = searchFilter(uniqueUserData, search);
  const statusFilteredData = statusFilter(uniqueUserData, status);
  const typeFilteredData = typeFilter(uniqueUserData, type);

  // console.log(searchFilteredData);
  useEffect(() => {
    setFilteredData(searchFilteredData);
    // console.log(filteredData);
  }, [search]);

  if (isLoading) {
    return <Loader loaderStyle="varyingCSSAllJobs" />;
  }

  // Call the function to handle display of jobs searched for
  // let filteredData = searchFilter(uniqueUserData, search);
  // console.log(filteredData);

  // Combine the results of individual filters to get the final filtered data
  // const combinedFilteredData = combineFilters(uniqueUserData, [
  //   searchFilteredData,
  //   statusFilteredData,
  //   typeFilteredData,
  // ]);

  if (filteredData.length === 0) {
    return (
      <AllJobsWrapper>
        <p className="no__job">NO JOBS TO DISPLAY</p>
      </AllJobsWrapper>
    );
  }

  return (
    <AllJobsWrapper>
      {filteredData.map((each: any) => (
        <SingleJobCard key={each.id} {...each} />
      ))}
    </AllJobsWrapper>
  );
};

export default ShowAllJobs;
