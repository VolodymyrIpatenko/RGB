import { SlSocialInstagram } from 'react-icons/sl';
import { BsFacebook } from 'react-icons/bs';

interface Social {
  id: number;
  path: string;
  component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const socialsList: Social[] = [
  {
    id: 1,
    path: 'https://www.instagram.com/rgb_salon_school/',
    component: SlSocialInstagram,
  },
];

export default socialsList;
