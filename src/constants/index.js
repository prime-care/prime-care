import deliveryIcon from "../../public/images/feature-delivery.svg";
import refundIcon from "../../public/images/feature-refund.svg";
import cardsIcon from "../../public/images/feature-cards.svg";
import shopIcon from "../../public/images/feature-shop.svg";
import facebook from "../../public/images/social-facebook.svg";
import instagram from "../../public/images/social-instagram.svg";
import linkedin from "../../public/images/social-linkedin.svg";
import twitter from "../../public/images/social-twitter.svg";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About Us", path: "/about" },
  { name: "Help Center", path: "/help-center" },
  { name: "Contact Us", path: "/contact-us" },
];
export const slider = [
  {
    src: "images/slide-1.jpg",
    alt: "Slide 1",
    text: "On All Baby <br/> Lotions",
  },
  {
    src: "images/slide-2.jpg",
    alt: "Slide 2",
    text: "Support <br/> Your Health <br/> With Nutrition",
  },
  {
    src: "images/slide-3.jpg",
    alt: "Slide 3",
    text: "Natural <br/> Cosmetics",
  },
];

export const categories = [
  {
    id: 1,
    image: "images/cat-1.png",
    text: "Vitamins & Supplements",
    link: "/products",
    color: "bg-primary",
  },
  {
    id: 2,
    image: "images/cat-2.png",
    text: "Pain Relief",
    link: "/products",
    color: "bg-secondary",
  },
  {
    id: 3,
    image: "images/cat-3.png",
    text: "Skin Care",
    link: "/products",
    color: "bg-[#4abfd9]",
  },
  {
    id: 4,
    image: "images/cat-4.png",
    text: "Cold & Flu",
    link: "/products",
    color: "bg-[#d94945]",
  },
  {
    id: 5,
    image: "images/cat-5.png",
    text: "First Aid",
    link: "/products",
    color: "bg-[#d9a934]",
  },
  {
    id: 6,
    image: "images/cat-6.png",
    text: "Oral Care",
    link: "/products",
    color: "bg-[#75bf7a]",
  },
];
export const features = [
  {
    icon: deliveryIcon,
    title: "Fast Delivery",
    description: "Within 1-4 business days",
  },
  {
    icon: refundIcon,
    title: "Return & Refund",
    description: "30 days return policy",
  },
  {
    icon: cardsIcon,
    title: "Safe Shopping",
    description: "100% secure payment",
  },
  {
    icon: shopIcon,
    title: "Click & Collect",
    description: "Collect in any of our stores",
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

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Shop",
        link: "/products",
      },
      {
        name: "Contact Us",
        link: "/contact-us",
      },
    ],
  },
  {
    title: `Contact Information
`,
    links: [
      {
        name: "Address: El-Arish - Elmsaied - Dawaran Shobra",
        link: "/",
      },
      {
        name: "Phone: 01021531583, 01550988913",
        link: "/",
      },
      {
        name: `
primecare@hotmail.com`,
        link: "/suggestions/",
      },
    ],
  },

];
