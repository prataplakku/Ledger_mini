import './App.css'
import Sidebar from './components/Sidebar'
import ContentHeader from './components/ContentHeader'
import Charts from './components/Charts'
import Blockers from './components/Blockers'
import TaskSummary from './components/TaskSummary'


function App() {
 
  return (
    <div className='dashboard'> 
      <Sidebar/>
      <div className="content">
        <ContentHeader/>
        <div className="main-content">
          <div className="center-content">
            <Charts />

            <div className="blockers">
            <Blockers />
            </div>

            
          </div>
          <TaskSummary/>
        </div>
      </div>
      
    </div>

  )
}

export default App
