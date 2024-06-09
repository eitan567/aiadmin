import "./navbar.scss"
import { ChatBubbleOutlineRounded, DarkMode, FullscreenExit, Language, ListOutlined, NotificationsNone, Search } from "@mui/icons-material"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <Search/>
        </div>
        <div className="items">
          <div className="item">
            <Language className="icon"/>
            English
          </div>
          <div className="item">
            <DarkMode className="icon"/>
          </div>
          <div className="item">
            <FullscreenExit className="icon"/>
          </div>
          <div className="item">
            <NotificationsNone className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineRounded className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined className="icon"/>
          </div>
          <div className="item">
            <img src="https://robohash.org/35908e72a02368a8390eb10602e32393?set=set4&bgset=&size=400x400"
            alt=""
            className="avatar"/>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default Navbar