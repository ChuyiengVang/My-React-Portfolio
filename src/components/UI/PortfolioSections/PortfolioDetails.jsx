 export default function PortfolioDetails({ links }) {
    return(
        <div className='portBoxes'>
        <div className='mainPort'>
          <div className='portOne'></div>
        </div>
        <div className='sidePort'>
            {links.map((link) => link)}
        </div>
      </div>
    );
 }