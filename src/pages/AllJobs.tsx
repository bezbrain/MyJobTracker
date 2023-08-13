import AddAndAllJobs from "../StylesWrappers/General/AddAndAllJobs";
import InputSection from "../components/AllJobs/InputSection";
import ShowAllJobs from "../components/AllJobs/ShowAllJobs";

const AllJobs = () => {
  return (
    <>
      <AddAndAllJobs>
        <p>Search Form</p>
        <InputSection />
      </AddAndAllJobs>
      <ShowAllJobs />
    </>
  );
};

export default AllJobs;
