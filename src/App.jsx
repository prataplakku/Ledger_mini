import './App.css'
import Sidebar from './components/Sidebar'
import ContentHeader from './components/ContentHeader'
import OverviewCloseStatus from './components/OverviewCloseStatus';
import OverviewTable from './components/OverviewTable';
import { OverviewTableData } from "./assets/TableData";

function App() {
 
  return (
    <div className='dashboard'> 

      <Sidebar/>

      <div className="content">
        <ContentHeader/>
        <div className="main-content">
          <div className="charts-blockers">
            <div className="center-content">
              <OverviewCloseStatus/>
            </div>

            <div className="overview-blockers">
              <h2 className="overview-title">Blockers</h2>
              <div className="overview-table-container">
                <OverviewTable tableData={OverviewTableData}/>
               </div>
            </div>
            
          </div>

          <div className="task-summary">
            <p>Task Summary</p>

          </div>        
        </div>
      </div>
      
    </div>
  )
}

export default App
