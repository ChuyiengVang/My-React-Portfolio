import { Link } from 'react-router-dom';
import FooterInfo from './UI/FooterInfo';
import '../styles/Footer.css';

export default function Footer() {
 
  return (
    <FooterInfo
      links={[
        <Link key={1} className="col-1 iconOne" to="/">
          I am Ironman
        </Link>,
        <Link key={2} className="col-1 iconTwo" to="/">
        </Link>,
        <Link key={3} className="col-1 iconThree" to="/">
        </Link>,
      ]}
    />
  );
}