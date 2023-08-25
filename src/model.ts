import { ChangeEvent } from "react";

export interface EditState {
  btnContent: string;
  stagedJob: string;
}

export interface AddJobState {
  addJobArr: Array<string | number>;
  isRemove: boolean;
  jobLoading: boolean;
  jobDisable: boolean;
  inputs: {
    createdBy: string | null;
    position: string;
    company: string;
    joblocation: string;
    status: string;
    jobType: string;
    date: string;
  };
}

export interface AllJobsState {
  allJobsInputs: {
    search: string;
    status: string;
    type: string;
    sort: string;
  };
}

export interface ProfileState {
  profileLoading: boolean;
  userProfile: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    location: string;
  };
}

export interface RegState {
  isLoading: boolean;
  isDisable: boolean;
  user: {
    createdBy: string;
    username: string;
    email: string;
    password: string;
  };
}

export interface LoginState {
  loginLoading: boolean;
  loginDisable: boolean;
  loginUser: {
    login_createdBy: string;
    login_email: string;
    login_password: string;
  };
}

export interface LoginProp {
  setToggleReg: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RegProp {
  setToggleReg: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface InputProps {
  jobName: string;
  typeName: string;
  inputName: string;
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  noEdit?: boolean;
}

export interface BtnProps {
  button: string;
  handleSubmit: (e: React.FormEvent) => void;
  type: "button" | "reset" | "submit" | undefined;
  allJobsBtn?: string;
  allLoading?: boolean;
  allDisable?: boolean;
}
