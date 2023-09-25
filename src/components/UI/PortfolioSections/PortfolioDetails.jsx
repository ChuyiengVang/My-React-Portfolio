 export default function PortfolioDetails({ links }) {
    return(
      <div>
        <div className='sidePort'>
          <div className='row justify-content-around portLinks'>
              {links.map((link) => link)}
          </div>
        </div>
      </div>
    );
 }