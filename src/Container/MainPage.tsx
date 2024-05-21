import Catogory from './Catogory'
import Featured from './Featured'
import Footer from './Footer'
import Header from './Header'

function MainPage() {
  return (
    <div className=''>
        <Header />
        <Featured />
        <Catogory />
        <div className='absolute bottom-0 p-5 bg-red-400 w-full rounded-t-lg'>
          <Footer />
        </div>
        
    </div>
  )
}

export default MainPage