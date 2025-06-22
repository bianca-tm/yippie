type SocialLink = {
  label: string
  link: string
}

export interface IMenuItem {
  text: string;
  url: string;
}

export const menuItems: IMenuItem[] = [
  {
    text: "Projects",
    url: "#projects",
  },
  {
    text: "Blog",
    url: "#blog"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
    {
    label: 'GitHub',
    link: 'https://github.com/bianca-tm',
  },
  // {
  //   label: 'Twitter',
  //   link: 'https://twitter.com/ibelick',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bianca--tm',
  },
  // {
  //   label: 'Instagram',
  //   link: 'https://www.instagram.com/',
  // },
]

export const EMAIL = 'tech.btovalin@gmail.com'
