import '../styles/PortfolioPage.css'
import { Link } from 'react-router-dom';
import PortfolioDetails from '../components/UI/PortfolioSections/PortfolioDetails';

export default function PortfolioPage() {

  return (
    <div className='container text-center mt-5 portMain'>
      <PortfolioDetails 
        links={[
          <Link key={1} className="col-5 mt-3 portTwo" to="https://benwhann.github.io/Fortune-Of-The-Day/">
            Fortune of the Day
          </Link>,
          <Link key={2} className="col-5 mt-3 portThree" to="https://waist-management-e6142ec4ba30.herokuapp.com/login">
            Workout Tracker
          </Link>,
          <Link key={3} className="col-5 mt-3 portFour" to="https://afternoon-woodland-62160-b35b40dff1d2.herokuapp.com/">
            PWA Text Editor
          </Link>,
          <Link key={4} className="col-5 mt-3 portFive" to="/">
            TBD
          </Link>,
          <Link key={5} className="col-6 mt-3 portOne" to="/">
            TBD
          </Link>
        ]}
      />
    </div>
  );
}