import {
  facebook,
  instagram,
  linkedin,
  twitter,
  Group,
  Management,
  Support,
} from "@/public/assets";
export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];
export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const navBarItems = [
  { title: "خانه", link: "/", nested: false },
  { title: "ورود مشترکین", link: "/login", nested: false },
  {
    title: "خدمات اینترنت",
    link: "/internet-service",
    nested: true,
    treeItems: [
      { title: "اینترنت پرسرعت adsl", link: "/adsl-internet" },
      { title: "اینترنت نسل 4 ثابت (td-lte)", link: "/tdlte" },
      { title: "مگافون (نسل جدیدتلفن ثابت)", link: "/megaphone" },
      { title: "فیبر نوری (FTTH)", link: "/ftth" },
      { title: "خدمات دیتاسنتر", link: "/datacenter-services" },
      { title: "سرور مجازی (VPS)", link: "/vps" },
      { title: "اینترنت پرسرعت برج ها و مجتمع ها", link: "/tower-internet" },
      { title: "سرویس وایرلس عمومی Public WIFI", link: "/public-wifi" },
      { title: "ip اختصاصی", link: "/static-ip" },
    ],
  },
  { title: "ویژگی ها", link: "/features", nested: false },
  { title: "ارتباط با ما", link: "/contact", nested: false },
  { title: "درباره ما", link: "/about", nested: false },
];
