import React, { useState } from 'react'
import Charts from './View all/Charts'
import ChartComponent from './View all/ChartComponent'
import Pie from './View all/Pie'
import PFChart from './View all/PFChart'

function Dashboard() {

  return (
    <div className="container">
      <h3 className="d-flex align-items-center justify-content-center" style={{margin:"1%"}}>Dashboard</h3>
      <div className="row">
        <div className="col-md-6">
          
          <Charts />
        </div>
        <div className="col-md-6">
          
          <PFChart />
        </div>
        <div className="col-md-6">
          
          <Pie />
        </div>
        <div className="col-md-6">
          
          <ChartComponent />
        </div>
      </div>
    </div>

  )
}

export default Dashboard