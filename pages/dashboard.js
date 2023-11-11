import React from 'react';
import ContentBar from './component/Content';
const Dashboard = (props) => {
  return (
    <>
          <ContentBar dashboard={props.dashboard} />
       </> 
  )
}
export default Dashboard