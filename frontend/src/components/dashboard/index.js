import React from 'react'
import { observer } from 'mobx-react'
import VideoPlayerView from '../../VideoPlayer'
import Keyboard from '../keyboard'
import Sidebar from '../sidebar'
import { useStore } from '../../store'
import poster from '../../Media/pupper_cool.jpeg'
import TabPanel from '../tabPanel';
import './style.css'

const Dashboard = observer(() => {
  const {navigationStore: { activeTab }} = useStore()

  return (
    <TabPanel value={activeTab} index={0}>
      <main className='main'>              
        <div className='main-content'>
          <VideoPlayerView poster={poster} controls={false} />
          <Keyboard />
        </div>
        <Sidebar />
      </main>
    </TabPanel>
  )
})

export default Dashboard
