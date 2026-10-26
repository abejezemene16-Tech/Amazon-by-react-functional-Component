
// // import my custom Functional component:-

// // Unlike class components, function components can be written using much less code, are easier to understand and are easier to test/debug


import Header from './component/Header/Header.jsx'
 import Section from './component/Section/Section.jsx'
import Footer from './component/Footer/Footer.jsx'
// import Foot2 from './component/foot2/Foot2.jsx'
import './App.css'

const App = () =>  {

  return (
    <>
    {/*  render my custom  component */}
    
    <Header/>
    <Section/>
    <Footer/>
    {/* <Foot2/>  */}
    </>
    
  )
}

export default App;
