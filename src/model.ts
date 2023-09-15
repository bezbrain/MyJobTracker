import { ChangeEvent } from "react";

export interface Nav {
  isOpenNav: boolean;
  isOpenSmallNav: boolean;
}

export interface EditState {
  btnContent: string;
  stagedJob: null;
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
  isLoading: boolean;
  allJobsInputs: {
    search: string;
    status: string;
    type: string;
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

export interface SelectOptionProps {
  statusName: string;
  statusValue: string;
  selectName: string;
  optionOne: string;
  optionTwo: string;
  optionThree: string;
  optionFour?: string | null;
  optionFive?: string | null;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface BtnProps {
  button: string;
  handleSubmit: (e: React.FormEvent) => void;
  type: "button" | "reset" | "submit" | undefined;
  allJobsBtn?: string;
  allLoading?: boolean;
  allDisable?: boolean;
}

export interface PasswordIconProps {
  password: string;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  showPassword: boolean;
}

export interface SingleJobCardProp {
  id: string;
  position: string;
  company: string;
  joblocation: string;
  date: string;
  jobType: string;
  status: string;
}

export interface SideBarProps {
  navSection: string;
  smScreenClose: string;
  toggleNavSection?: string;
}

export interface StatCardProps {
  count: number;
  icon: any;
  jobText: string;
  border: string;
  countColor: string;
  iconColor: string;
}

export interface ContactUsProps {
  isLoading: boolean;
  isDisable: boolean;
  users: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

// Skeleton types
export interface InputSkeletonProps {
  inputSkel: number;
}
