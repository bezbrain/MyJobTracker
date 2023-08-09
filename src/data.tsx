import { AddJobsIcon, AllJobIcon, ProfileIcon, StatIcon } from "./icons/icons";

export const sideBarData = [
  {
    id: 1,
    icon: <StatIcon />,
    navName: "Stats",
    link: "",
  },
  {
    id: 2,
    icon: <AllJobIcon />,
    navName: "All Jobs",
    link: "all-jobs",
  },
  {
    id: 3,
    icon: <AddJobsIcon />,
    navName: "Add Job",
    link: "add-job",
  },
  {
    id: 4,
    icon: <ProfileIcon />,
    navName: "Profile",
    link: "profile",
  },
];
