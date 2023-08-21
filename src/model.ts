export interface EditState {
  btnContent: string;
  stagedJob: string;
}

export interface AddJobState {
  addJobArr: Array<string | number>;
  isRemove: boolean;
  isLoading: boolean;
  inputs: {
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
  username: string;
  email: string;
  password: string;
}

export interface LoginState {
  login_email: string;
  login_password: string;
}
