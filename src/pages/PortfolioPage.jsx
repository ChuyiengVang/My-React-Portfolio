import '../styles/PortfolioPage.css'
import { Link } from 'react-router-dom';
import PortfolioDetails from '../components/UI/PortfolioSections/PortfolioDetails';

export default function PortfolioPage() {

  return (
    <div className='container text-center mt-5 portMain'>
      <PortfolioDetails 
        links={[
          <Link key={1} className="col-5 mt-3 portTwo" to="/">
            Portfolio 1
          </Link>,
          <Link key={2} className="col-5 mt-3 portThree" to="/">
            Portfolio 2
          </Link>,
          <Link key={3} className="col-5 mt-3 portFour" to="/">
            Portfolio 3
          </Link>,
          <Link key={4} className="col-5 mt-3 portFive" to="/">
            Portfolio 4
          </Link>,
          <Link key={5} className="col-6 mt-3 portOne" to="/">
            Portfolio 5
          </Link>
        ]}
      />
    </div>
  );
}