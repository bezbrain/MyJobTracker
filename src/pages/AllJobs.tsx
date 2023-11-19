import AddJobAllJobsProfile from "../StylesWrappers/General/AddJobAllJobsProfile";
import InputSection from "../components/AllJobs/InputSection";
import ShowAllJobs from "../components/AllJobs/ShowAllJobs";
import TitleText from "../components/General/Helmet";

const AllJobs = () => {
  return (
    <>
      <AddJobAllJobsProfile>
        <TitleText title="Jobtrackier - All Jobs" />
        <p>Search Form</p>
        <InputSection />
      </AddJobAllJobsProfile>
      <ShowAllJobs />
    </>
  );
};

export default AllJobs;
