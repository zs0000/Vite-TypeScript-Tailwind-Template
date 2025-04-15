import './App.css'
import './index.css'
import BaseComponent from './Components/BaseComponent/BaseComponent'
import Layout from './Components/Layout/Layout'
import { UserProvider } from './Context/UserContext'
import { ThemeContextProvider } from './Context/ThemeContext'
function App() {


  return (
    <UserProvider>
      <ThemeContextProvider>
        <Layout>
          <BaseComponent />
        </Layout>
      </ThemeContextProvider>
    </UserProvider>
  )
}

export default App
