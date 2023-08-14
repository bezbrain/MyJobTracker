import { FaCalendar, FaLocationArrow, FaBox } from "react-icons/fa";

interface Props {
  position: string;
  company: string;
  joblocation: string;
  date: string;
  jobType: string;
  status: string;
}

const SingleJobCard: React.FC<Props> = ({
  position,
  company,
  joblocation,
  date,
  jobType,
  status,
}) => {
  // Capitalize the first letter of of company input
  const capitalizeFirstLetter: string = company.charAt(0).toUpperCase();

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
        <button>Delete</button>
      </div>
    </section>
  );
};

export default SingleJobCard;
