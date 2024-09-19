import {Col, Row} from "antd";
import {FaSpotify} from "react-icons/fa6";
import {BiHeart, BiHomeAlt, BiLibrary, BiPodcast, BiSearch} from "react-icons/bi";
import {AiOutlinePlusSquare} from "react-icons/ai";
import {BsArrowDownCircle} from "react-icons/bs";
import {NavLink, Outlet} from "react-router-dom";

function TopBody() {
  return (
    <>
      <Row>
        <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}>
          <div className='left'>
            <div className='logo'>
              <div className='logo-icon'>
                <FaSpotify/>
              </div>
              <span>Spotify</span>
            </div>
            <div className="menu">
              <div className="menu-item">
                <NavLink to="/" className='flex'>
                  <div className="icon">
                    <BiHomeAlt/>
                  </div>
                  <span>Home</span>
                </NavLink>
              </div>
              <div className="menu-item">
                <NavLink to="/search" className="flex">
                  <div className="icon">
                    <BiSearch/>
                  </div>
                  <span>Search</span>
                </NavLink>
              </div>
              <div className="menu-item">
                <NavLink to="/library" className="flex">
                  <div className="icon">
                    <BiLibrary/>
                  </div>
                  <span>YourLibrary</span>
                </NavLink>
              </div>
            </div>
            <div className="menu-list">
              <div className="list-item">
                <div className="icon">
                  <AiOutlinePlusSquare/>
                </div>
                <span>Create Playlist</span>
              </div>
              <div className="list-item">
                <div className="icon">
                  <BiHeart/>
                </div>
                <span>Liked Songs</span>
              </div>
              <div className="list-item">
                <div className="icon">
                  <BiPodcast/>
                </div>
                <span>Your Episodes</span>
              </div>
            </div>
            <ul className="menu-text">
              <li>FAV</li>
              <li>Daily</li>
              <li>Discover Weekly</li>
              <li>Malayalam</li>
              <li>Dance/ElectronixMix</li>
              <li>EDM/Popular</li>
            </ul>
            <div className="down">
              <div className="icon">
                <BsArrowDownCircle/>
              </div>
              <span>Install App</span>
            </div>
          </div>
        </Col>
        <Col xxl={20} xl={20} lg={20} md={20} sm={20} xs={20}>
          <div className='right'>
            <Outlet/>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default TopBody