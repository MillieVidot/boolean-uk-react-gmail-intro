import HeaderLeftMenu from '../Header/HeaderLeftMenu'
import Search from '../Header/Search'
import '../../styles/AppHeader.css'

function Header() {
  return (
    <header className="header">
      <HeaderLeftMenu />
      <Search />
    </header>
  )
}
export default Header
