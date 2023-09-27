import { Link } from 'react-router-dom';
import FooterInfo from './UI/FooterInfo';
import '../styles/Footer.css';

export default function Footer() {
 
  return (
    <FooterInfo
      links={[
        <Link key={1} className="mx-2 mt-5 iconOne" to="https://github.com/ChuyiengVang">
        </Link>,
        <Link key={2} className="mx-2 mt-5 iconTwo" to="/">
        </Link>,
        <Link key={3} className="mx-2 mt-5 iconThree" to="/">
        </Link>,
      ]}
    />
  );
}