import {
    Facebook,
    Github,
    Instagram,
    Twitter,
  } from "lucide-react";
  
  export const MAX_FREE_COUNTS = 5 as const;
  
  
  export const FOOTER_LINKS = [
    {
      name: "Facebook",
      icon: Facebook,
      link: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://instagram.com",
    },
    {
      name: "Github",
      icon: Github,
      link: "https://github.com",
    },
  ];