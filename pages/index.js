import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './component/Sidebar';
import SidebarHeader from './component/SidebarHeader';
import Footer from './component/Footer';
import Dashboard from './dashboard';
import Users from './users';
const App = () => {
  const [skey, setSkey] = useState();
  // sidebar key fun
  const sidebarkey = (e) => {
    setSkey(e)
  }
  let element = (<Dashboard dashboard={"Welcome to the Dashboard"} />);
if(skey == '2'){
  element = (<Users user={"Welcome to the User Panel"} />)
} else if(skey =='3') {
  element = (<Dashboard dashboard={"Welcome to the Admin Panel"} />)
}
  return (
    // default called
    <Layout>
      <SidebarHeader  />
      <Layout>
        <Sidebar sidebarkey={sidebarkey}/>
        {element}
      </Layout>
      <Footer />
    </Layout>
  )
};
export default App;