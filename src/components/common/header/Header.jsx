import './header.scss'
import image from './MUN_Logo.png'
import Logo from './IEM_Logo.png'
const Header = ({ active, setActive }) => {
    return (
        <div className='header'>
            <div className="header__content">
            <div className="logo"><img src={Logo} height={150} width={150} /></div>
          <div className="logo"><img src={image} height={150} width={150} /></div>
                <div
                    className={`menu-toggle ${active ? 'active' : ''}`}
                    onClick={() => setActive(!active)}
                >
                    <i className='bx bx-menu'></i>
                    <i className='bx bx-x'></i>
                </div>
            </div>
        </div>
    )
}
export default Header