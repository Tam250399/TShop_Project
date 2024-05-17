
import './App.css'
import Category from './components/Navbar/Category/Category'
import Category2 from './components/Navbar/Category/Category2'
import Hero from './components/Navbar/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Navbar/Services/Services'

function App() {

  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar />
        <Hero />
        <Category />
        <Category2 />
        <Services />
      </div>
    </>
  )
}

export default App
