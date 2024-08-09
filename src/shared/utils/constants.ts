import avatar from "../../assets/avatar.jpg";

export const menuBar = [
  {
    title: "Home",
    link: "/home",
    type: "link",
  },
  {
    title: "About",
    link: "/about",
    type: "link",
  },
  {
    url: avatar,
    title: "Avatar",
    link: "/avatar",
    type: "avatar",
  },
  {
    title: "Service",
    link: "/service",
    type: "link",
  },
  {
    title: "Contact",
    link: "/contact",
    type: "link",
  },
];

export const specializations = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "ReactJS",
  "Ethereum",
  "Solana",
  "Rust",
  "Solidity",
];

interface CarouselItemProps {
  avatar: string;
  name: string;
  title: string;
  desc: string;
}

export const profileItems: CarouselItemProps[] = [
  {
    name: "Alice1",
    title: "Developer",
    avatar: avatar,
    desc: "Opening a Graphic Design Business can be a very good business opportunity if you have Knowledge about Graphic terms. It can be a very secure path to earn good money and make you a very successful creative entrepreneur.",
  },
  {
    name: "Bob2",
    title: "Designer",
    avatar: avatar,
    desc: "Opening a Graphic Design Business can be a very good business opportunity if you have Knowledge about Graphic terms. It can be a very secure path to earn good money and make you a very successful creative entrepreneur.",
  },
  {
    name: "Charlie3",
    title: "Project Manager",
    avatar: avatar,
    desc: "Opening a Graphic Design Business can be a very good business opportunity if you have Knowledge about Graphic terms. It can be a very secure path to earn good money and make you a very successful creative entrepreneur.",
  },
  {
    name: "David4",
    title: "QA Engineer",
    avatar: avatar,
    desc: "Opening a Graphic Design Business can be a very good business opportunity if you have Knowledge about Graphic terms. It can be a very secure path to earn good money and make you a very successful creative entrepreneur.",
  },
  {
    name: "Eve5",
    title: "Marketing",
    avatar: avatar,
    desc: "Opening a Graphic Design Business can be a very good business opportunity if you have Knowledge about Graphic terms. It can be a very secure path to earn good money and make you a very successful creative entrepreneur.",
  },
  {
    name: "Frank6",
    title: "Sales",
    avatar: avatar,
    desc: "Opening a Graphic Design Business can be a very good business opportunity if you have Knowledge about Graphic terms. It can be a very secure path to earn good money and make you a very successful creative entrepreneur.",
  },
  {
    name: "Frank7",
    title: "Sales",
    avatar: avatar,
    desc: "Opening a Graphic Design Business can be a very good business opportunity if you have Knowledge about Graphic terms. It can be a very secure path to earn good money and make you a very successful creative entrepreneur.",
  },
  {
    name: "Frank8",
    title: "Sales",
    avatar: avatar,
    desc: "Opening a Graphic Design Business can be a very good business opportunity if you have Knowledge about Graphic terms. It can be a very secure path to earn good money and make you a very successful creative entrepreneur.",
  },
  {
    name: "Frank9",
    title: "Sales",
    avatar: avatar,
    desc: "Opening a Graphic Design Business can be a very good business opportunity if you have Knowledge about Graphic terms. It can be a very secure path to earn good money and make you a very successful creative entrepreneur.",
  },
];
