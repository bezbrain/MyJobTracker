interface Props {
  firstLetter: string;
  position: string;
  company: string;
  joblocation: string;
  date: string;
  jobType: string;
  status: string;
}

const SingleJobCard: React.FC<Props> = ({
  firstLetter,
  position,
  company,
  joblocation,
  date,
  jobType,
  status,
}) => {
  return (
    <section>
      <div className="job__card__head">
        <div className="company__first__letter">
          <p>{firstLetter}</p>
        </div>
        <div className="job__and__company">
          <p>{position}</p>
          <p>{company}</p>
        </div>
      </div>
      <hr />
      <div className="location__and__date">
        <p>{joblocation}</p>
        <p>20th Aug, 2023{date}</p>
      </div>
      <div className="type__and__status">
        <p>{jobType}</p>
        <p>{status}</p>
      </div>
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </section>
  );
};

export default SingleJobCard;
