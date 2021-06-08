import './styles/App.css'

import Header from './components/Header/Header'
import LeftMenu from './components/LeftMenu/LeftMenu'
import EmailView from './components/EmailView/EmailView'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <EmailView />
    </div>
  )
}

export default App
