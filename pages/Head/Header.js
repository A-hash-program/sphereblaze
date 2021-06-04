import React, {useState} from 'react'
import Link from "next/link"
import {FaBars} from "react-icons/fa"
import {Data} from "../../components/SideBarData"
import * as AiIcons from 'react-icons/ai';
import { useRouter } from 'next/router'
//{Data.map((item) => {return (<h5><Link className = "no-decoration" href={`/${encodeURIComponent(item.path)}`}><span>{item.title}</span></Link></h5>);})}{Data.map((item, path) => (<Link  className = "nav-link" href = {`/${encodeURIComponent(item.path)}`} key = {path}><h3 className = "nav-link">{item.title}</h3></Link>))}
 //<FaBars className = "Bars" onClick={showSideBar} />
 //<img src = "/Saturnn.ico" alt = "" height = {60} width = {60} className = "Bars" onClick={showSideBar}/>
function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);
  const router = useRouter();
  const { pid } = router.query
    return (
      <>
          <div className='navbar'>
            <div className='menu-bars'>
              <FaBars className = "Bars" onClick={showSideBar} />
            </div>
          </div>
          <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSideBar}>
              <li className='navbar-toggle'>
                <Link href='/.' className='menu-bars'>
                <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <h5 className = "no-decoration" onClick={() => router.push('/Purchase')}>
                Purchase
              </h5>
              <h5 className = "no-decoration" onClick={() => router.push('/More')}>
                More
              </h5>
            </ul>
          </nav>
      </>
    )
  }
function Header() {
  const router = useRouter();
  return (
  <nav className="Nav">
    <Link  href = "/"><h1 className = "nav-link-hello">Sphere <img src = "/Finance.ico" height = {50} width = {50} alt = ""/>ball</h1></Link>
    <div className = "nav-link">
    </div>
    <div className = "nav-link">
     <h3 className = "no-decoration" onClick={() => router.push('/Purchase')}>Purchase</h3> 
    </div>
    <div className = "nav-link">
     <h3 className = "no-decoration" onClick={() => router.push('/More')}>More</h3> 
    </div>
      <Navbar/>
    </nav>
  )
}
export default Header

