import {
  AddJobsIcon,
  AllJobIcon,
  ContactUsIcon,
  ProfileIcon,
  StatIcon,
} from "./assets/icons/icons";

export const sideBarData = [
  {
    id: 1,
    icon: <StatIcon />,
    navName: "Stats",
    link: "",
  },
  {
    id: 2,
    icon: <AddJobsIcon />,
    navName: "Add Job",
    link: "/add-job",
  },
  {
    id: 3,
    icon: <AllJobIcon />,
    navName: "All Jobs",
    link: "/all-jobs",
  },
  {
    id: 4,
    icon: <ProfileIcon />,
    navName: "Profile",
    link: "/profile",
  },
  {
    id: 5,
    icon: <ContactUsIcon />,
    navName: "Contact Us",
    link: "/contact",
  },
];
