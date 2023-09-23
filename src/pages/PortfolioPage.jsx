import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PortfolioDetails from '../components/UI/PortfolioSections/PortfolioDetails';

export default function PortfolioPage() {

  return (
    <div>
      <PortfolioDetails 
        links={[
          <Link key={1} className="portTwo" to="/">
            Portfolio 1
          </Link>,
          <Link key={2} className="portThree" to="/">
            Portfolio 2
          </Link>,
          <Link key={3} className="portFour" to="/">
            Portfolio 3
          </Link>,
          <Link key={4} className="portFive" to="/">
            Portfolio 4
          </Link>
        ]}
      />
    </div>
  );
}