// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
} from 'react-icons/io';

//import images
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';

import category1 from './assets/img/category/bed.jpeg';
import category2 from './assets/img/category/mobl.jpeg';
import category3 from './assets/img/category/lighting.jpeg';
import category4 from './assets/img/category/decorative.jpeg';
import category5 from './assets/img/category/naharkhori.jpeg';
import category6 from './assets/img/category/stand.jpeg';
import category7 from './assets/img/category/mirror.jpeg';

import product1 from './assets/img/products1/product-1.jpg';
import product2 from './assets/img/products1/product-2.jpg';
import product3 from './assets/img/products1/product-33.jpg';
import product4 from './assets/img/products1/product-44.jpg';
import product5 from './assets/img/products1/product-37.jpg';
import product6 from './assets/img/products1/product-6.jpg';
import product7 from './assets/img/products1/product-7.jpg';
import product8 from './assets/img/products1/product-38.jpg';
import product9 from './assets/img/products1/product-9.jpg';
import product10 from './assets/img/products1/product-40.jpg';

export const navigation = [
  {
    name: 'خانه',
    href: 'home',
  },
  {
    name: 'درباره ما',
    href: 'about',
  },
  {
    name: 'ویژگی ها',
    href: 'features',
  },
  {
    name: 'محصولات',
    href: 'products',
  },
  {
    name: 'تماس با ما',
    href: 'contact',
  },
];

export const categories = [
    {
      name: 'مبل',
      image: category2,
    },
    {
      name: 'تختخواب',
      image: category1,
    },
    {
      name: 'ناهارخوری',
      image: category5,
    },
    {
      name: 'روشنایی',
      image: category3,
    },
    {
      name: 'دکوراتیو',
      image: category4,
    },
    {
      name: 'کتابخانه',
      image: category6,
    },
    {
      name: 'آینه و کنسول',
      image: category7
    }
  ]

export const products = [
    {
      image: product1,
      icon: <IoMdAddCircle />,
      name: 'کتابخانه',
      price: 2500000,
      oldPrice: 2900000,
    },
    {
      image: product2,
      icon: <IoMdAddCircle />,
      name: 'میز ناهارخوری گرد',
      price: 4500000,
      oldPrice: 4800000,
    },
    {
      image: product3 ,
      icon: <IoMdAddCircle />,
      name: 'گلدان شیشه ای',
      price: 500000,
      oldPrice: 570000,
    },
    {
      image: product4,
      icon: <IoMdAddCircle />,
      name: 'آینه و کنسول طلایی',
      price: 7500000,
      oldPrice: 8200000,
    },
    {
      image: product5,
      icon: <IoMdAddCircle />,
      name: 'لوستر دکوراتیو',
      price: 1500000,
      oldPrice: 1600000,
    },
    {
      image: product6,
      icon: <IoMdAddCircle />,
      name: 'گلدان سرامیکی',
      price: 670000,
      oldPrice: 800000,
    },
    {
      image: product7,
      icon: <IoMdAddCircle />,
      name: 'قوهای دکوری',
      price: 500000,
      oldPrice: 520000,
    },
    {
      image: product8,
      icon: <IoMdAddCircle />,
      name: 'تختخواب مدرن سفید',
      price: 7500000,
      oldPrice: 8200000,
    },
    {
      image: product9 ,
      icon: <IoMdAddCircle />,
      name: 'مبل تک نفره',
      price: 2500000,
      oldPrice: 3300000,
    },
    {
      image: product10,
      icon: <IoMdAddCircle />,
      name: 'چراغ دیوارکوب',
      price: 1500000,
      oldPrice: 1600000,
    },

  ]

export const testimonial = {
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'علی سهیلی',
      occupation: 'Manager of The New York Times',
      message:
        '“لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'سارا حسینی',
      occupation: 'Manager of The New York Times',
      message:
        '“لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'مریم جعفری',
      occupation: 'Manager of The New York Times',
      message:
        '“لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.”',
    },
  ],
};

export const footer = {
  social: [
    {
      icon: <IoLogoYoutube />,
      href: '#',
    },
    {
      icon: <IoLogoInstagram />,
      href: '#',
    },
    {
      icon: <IoLogoGithub />,
      href: '#',
    },
    {
      icon: <IoLogoFacebook />,
      href: '#',
    },
  ],
  copyright: 'Mobleman 2022 - All Rights Reserved.',
};
