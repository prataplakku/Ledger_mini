import './App.css'
import Sidebar from './components/Sidebar'
import ContentHeader from './components/ContentHeader'
import Charts from './components/Charts'

function App() {
 
  return (
    <div className='dashboard'> 
      <Sidebar/>
      <div className="content">
        <ContentHeader/>
        <div className="main-content">
          <div className="center-content">
            <Charts/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
