export interface IMobileMenu {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export interface Course {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export interface SocialMedia {
  icon: string;
  title: string;
  link: string;
}