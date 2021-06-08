import Header from '../EmailView/Content/Header'
import Body from '../EmailView/Content/Body'
import Actions from './Content/Actions.js'

function Content() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>
      <Header />
      <Body />
      <Actions />
    </article>
  )
}
export default Content
