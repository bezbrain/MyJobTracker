export interface EditState {
  btnContent: string;
  stagedJob: string;
}

export interface AddJobState {
  addJobArr: Array<string | number>;
  isRemove: boolean;
  isLoading: boolean;
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

export interface RegState {
  createdBy: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginState {
  login_createdBy: string;
  login_email: string;
  login_password: string;
}

export interface LoginProp {
  setToggleReg: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RegProp {
  setToggleReg: React.Dispatch<React.SetStateAction<boolean>>;
}
