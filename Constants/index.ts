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
  // { title: "ورود مشترکین", link: "/login", nested: false },
  {
    title: "خدمات اینترنت",
    link: "/internet-services",
    nested: true,
    treeItems: [
      { title: "اینترنت پرسرعت adsl", link: "/internet-services/adsl" },
      { title: "پهنای باند اختصاصی", link: "/internet-services/dedicated-internet" },
      { title: "اینترنت نسل 4 ثابت (td-lte)", link: "/internet-services/td-lte" },
      { title: "مگافون (نسل جدیدتلفن ثابت)", link: "/internet-services/mega-phone" },
      { title: "فیبر نوری (FTTH)", link: "/internet-services/fiber" },
      { title: "خدمات دیتاسنتر", link: "/internet-services/data-center" },
      { title: "سرور مجازی (VPS)", link: "/internet-services/vps" },
      { title: "اینترنت پرسرعت برج ها و مجتمع ها", link: "/internet-services/tower" },
      { title: "سرویس وایرلس عمومی Public WIFI", link: "/internet-services/public-wifi" },
      { title: "ip اختصاصی", link: "/internet-services/dedicated-ip" },
    ],
  },
  // { title: "ویژگی ها", link: "/features", nested: false },
  { title: "تماس با ما", link: "/contact", nested: false },
  { title: "درباره ما", link: "/about", nested: false },
];
export const features = [
	{
		id: "feature-1",
		icon: Group,
		title: "مشاوره",
		content:
		 "The best credit cards offer some tantalizing combinations of promotions and prizes",
	},
	{
		id: "feature-2",
		icon: Management,
		title: "مدیریت",
		content:
		 "We take proactive steps make sure your information and transactions are secure.",
	},
	{
		id: "feature-4",
		icon: Support,
		title: "پشتیبانی",
		content:
		 "A balance transfer credit card can save you a lot of money in interest charges.",
	},
];

export const AdslPrices = [
  {
    name: "سرویس های جشنواره",
    services: [
      {
        period:"جشنواره 3 ماهه",
        imgUrl:"/assets/adsl/700.jpg"
      },
      {
        period:"جشنواره 3 ماهه",
        imgUrl:"/assets/adsl/1500.jpg"
      },
      {
        period:"جشنواره 5 ماهه",
        imgUrl:"/assets/adsl/2000.jpg"
      },
      {
        period:"جشنواره 6 ماهه",
        imgUrl:"/assets/adsl/3300.jpg"
      },
      {
        period:"جشنواره 12 ماهه",
        imgUrl:"/assets/adsl/120.jpg"
      },
      {
        period:"جشنواره 12 ماهه",
        imgUrl:"/assets/adsl/7000.jpg"
      },
    ]
  },
  {
    name: "سرویس های پیشنهادی (گیگ پلاس)",
    services: [
      {
        period:"4 مگابیت بر ثانیه",
        imgUrl:"/assets/adsl/4-meg-2-1.png"
      },
      {
        period:"8 مگابیت بر ثانیه",
        imgUrl:"/assets/adsl/8-meg-1.png"
      },
      {
        period:"8 مگابیت بر ثانیه",
        imgUrl:"/assets/adsl/8-meg-2.png"

      },
      {
        period:"16 مگابیت بر ثانیه",
        imgUrl:"/assets/adsl/16-meg-1.png"
      },
      {
        period:"16 مگابیت بر ثانیه",
        imgUrl:"/assets/adsl/16-meg-2.png"
      },
    ]
  },
  {
    name: "سرویس های عادی",
    services: [
      {
        period:"2 مگابیت بر ثانیه",
        imgUrl:"/assets/adsl/2MB-1402.png"
      },
      {
        period:"4 مگابیت بر ثانیه",
        imgUrl:"/assets/adsl/4MB-1402.png"
      },
      {
        period:"8 مگابیت بر ثانیه",
        imgUrl:"/assets/adsl/8MB-1402.png"

      },
      {
        period:"16 مگابیت بر ثانیه",
        imgUrl:"/assets/adsl/16MB-1402.png"
      },
      {
        period:"ترافیک",
        imgUrl:"/assets/adsl/traffic.jpg"
      },
    ]
  }
]