import './App.css'
import Deneme from './Deneme'
import Header from './Header'
import {courses} from './Data'

function App() {

  return (
    <>
      <div>
        <Header/>
        {
          <Deneme name = {courses}/>
        }

      </div>
    </>
  )
}

export default App
