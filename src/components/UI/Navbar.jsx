export default function Nav({ links }) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <div>
          <h1>Chuyieng Vang</h1>
        </div>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
      <div className='col-12 mainBanner'></div>
    </div>
  );
}
