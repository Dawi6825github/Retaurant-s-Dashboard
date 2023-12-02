
import { Layout,Image } from "antd";
import SideMenu from "./components/SideMenu/SideMenu";
import AppRoutes from "./components/AppRoutes";

const {Sider, Content , Footer} = Layout;
function App() {
  return (
 <Layout>

<Sider style={{ height: "100vh", backgroundColor:'white'}}>
  <Image src="Maaddii.png" />

<SideMenu/>
</Sider>
 <Layout>
  <Content >
<AppRoutes/>
  </Content>
  <Footer style={{textAlign:'center'}}>
    Maaddii Food Delivery@2024
  </Footer>
 </Layout>
 </Layout>

  )
}
export default App;