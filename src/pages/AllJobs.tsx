import AddJobAllJobsProfile from "../StylesWrappers/General/AddJobAllJobsProfile";
import InputSection from "../components/AllJobs/InputSection";
import ShowAllJobs from "../components/AllJobs/ShowAllJobs";

const AllJobs = () => {
  return (
    <>
      <AddJobAllJobsProfile>
        <p>Search Form</p>
        <InputSection />
      </AddJobAllJobsProfile>
      <ShowAllJobs />
    </>
  );
};

export default AllJobs;
