import React from 'react'

function TabPanel(props) {
    const { children, activeTab, value, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={activeTab !== value}
        {...other}
      >
        {children}
      </div>
    );
}

export default TabPanel
