import { FaCalendar, FaLocationArrow, FaBox } from "react-icons/fa";
import { db, deleteSingleDoc, singleDoc } from "../../firebaseStore";
import { DocumentReference } from "firebase/firestore";
import { toast } from "react-toastify";

interface Props {
  id: string;
  position: string;
  company: string;
  joblocation: string;
  date: string;
  jobType: string;
  status: string;
}

const SingleJobCard: React.FC<Props> = ({
  id,
  position,
  company,
  joblocation,
  date,
  jobType,
  status,
}) => {
  // Capitalize the first letter of of company input
  const capitalizeFirstLetter: string = company.charAt(0).toUpperCase();

  const handleDelete = async (index: string) => {
    const docRef: DocumentReference = singleDoc(db, "allJobs", index);
    await deleteSingleDoc(docRef);
    toast.success("Job Card Deleted");
  };

  return (
    <section>
      <div className="job__card__head">
        <div className="company__first__letter">
          <p>{capitalizeFirstLetter}</p>
        </div>
        <div className="job__and__company">
          <p>{position}</p>
          <p>{company}</p>
        </div>
      </div>
      <hr />
      <div className="location__and__date">
        <p>
          <span>
            <FaLocationArrow />
          </span>
          {joblocation}
        </p>
        <p>
          <span>
            <FaCalendar />
          </span>
          {date}
        </p>
      </div>
      <div className="type__and__status">
        <p>
          <span>
            <FaBox />
          </span>
          {jobType}
        </p>
        <p
          className={`${
            status === "Interview"
              ? "addInterviewColor"
              : status === "Pending"
              ? "addPendingColor"
              : "addDelineColor"
          }`}
        >
          {status}
        </p>
      </div>
      <div className="buttons">
        <button>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </section>
  );
};

export default SingleJobCard;
