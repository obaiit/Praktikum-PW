import Link from 'next/link';
function Menu(){
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">  
<a className="navbar-brand" href="#"><b>BITE SHOP</b></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link " href="/">Home</a> 
      </li>
      <li className="nav-item ">
        <a className="nav-link " href="/makeup">Make Up</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link " href="/skin">Skincare</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/style">Style</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/acc">Accessories</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/kpop">Kpop</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/req">Request</a>
      </li>
    </ul>
  </div>
</nav>
);
}
export default Menu;
