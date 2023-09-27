export default function footerInfo ({ links }) {
  console.log(links)
    return (
      <div className="container footerInfo">
        <div className="justify-content-center iconLink">
            {links.map((link) => link)}
        </div>
      </div>
    );
}