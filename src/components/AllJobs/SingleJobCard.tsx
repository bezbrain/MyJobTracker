import { useState } from "react";
import { FaCalendar, FaLocationArrow, FaBox } from "react-icons/fa";
import {
  colRef,
  db,
  deleteSingleDoc,
  getSingleDoc,
  singleDoc,
} from "../../firebaseStore";
import { DocumentReference, DocumentSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { editJob } from "../../features/allJobs/editSlice";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { stageInput } from "../../features/addJob/addJobSlice";

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
  const [isModal, setIsModal] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  const navigate: NavigateFunction = useNavigate();

  // Capitalize the first letter of company input
  const capitalizeFirstLetter: string = company.charAt(0).toUpperCase();

  // Delete function to remove job from firestore
  const handleDelete = async (index: string) => {
    const docRef: DocumentReference = singleDoc(db, "allJobs", index);
    await deleteSingleDoc(docRef);
    toast.success("Job Card Deleted");
    setIsModal(false);
  };

  const handleEdit = async (index: string) => {
    try {
      const docRef: DocumentReference = singleDoc(colRef, index);
      const docSnap: DocumentSnapshot = await getSingleDoc(docRef);

      await dispatch(editJob({ docRef, ...docSnap.data() }));
      await dispatch(stageInput({ ...docSnap.data(), index }));
      navigate("/dashboard/add-job");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="single__job__card">
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
          <button onClick={() => handleEdit(id)}>Edit</button>
          <button onClick={() => setIsModal(true)}>Delete</button>
        </div>
      </section>
      {/* Delete Modal */}
      <section
        className={` delete__modal ${isModal ? "add__scale" : "remove__scale"}`}
      >
        <div className="confirm__delete">
          <p>Are you sure you want to delete?</p>
          <button onClick={() => setIsModal(false)}>Cancel</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </section>
    </>
  );
};

export default SingleJobCard;
