import Toolbar from '../EmailView/Toolbar'
import Content from '../EmailView/Content'

import '../../styles/EmailView.css'

function EmailView() {
  return (
    <main className="email-view">
      <Toolbar />
      <Content />
    </main>
  )
}
export default EmailView
