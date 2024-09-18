import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdOutlineWebAsset } from "react-icons/md"
import { SiKofi } from "react-icons/si"

export const contactLinks = [
  {
    href: "https://www.linkedin.com/in/vtjesus-vtjesus-a81bb2326/",
    title: "VTJesus Linkedin",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.instagram.com/mgskiter/",
    title: "Buy me a coffee",
    icon: <SiKofi />,
  },
  {
    href: "https://github.com/vtjesus",
    title: "VTJesus Github",
    icon: <FaGithub />,
  },
  {
    href: "https://github.com/vtjesus",
    title: "VTJesus Portfolios",
    icon: <MdOutlineWebAsset />,
  },
]

export const pages = [
  {
    href: "/",
    title: "Home page",
    children: "home",
  },
  {
    href: "/docs",
    title: "Api Documentation",
    children: "docs",
  },
  {
    href: "/referrals",
    title: "Referrals",
    children: "referrals",
  },
]

export const api = [
  {
    href: "/api/seasons",
    title: "/api/seasons",
    children: "/api/seasons",
  },
  {
    href: "/api/drivers",
    title: "/api/drivers",
    children: "/api/drivers",
  },
  {
    href: "/api/circuits",
    title: "/api/circuits",
    children: "/api/circuits",
  },
  {
    href: "/api/teams",
    title: "/api/teams",
    children: "/api/teams",
  },
]

export const help = [
  {
    href: "/contact",
    title: "Contact",
    children: "contact",
  },
  {
    href: "/faq",
    title: "FAQs",
    children: "faqs",
  },
  {
    href: "/terms",
    title: "Terms & Conditions",
    children: "terms",
  },
]
