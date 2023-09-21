import { Link } from 'react-router-dom';
import FooterInfo from './UI/FooterInfo';

export default function Footer() {
  // Finsih Footer buttons
  return (
    <FooterInfo
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-light" to="/profile">
          Portfolio
        </Link>,
        <Link key={3} className="nav-link text-light" to="/contact">
          Contact
        </Link>,
      ]}
    />
  );
}