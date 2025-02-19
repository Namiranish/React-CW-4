
import './App.css'
import Card from './Component/Card'
import Nav from './Component/Nav'
import { data } from './Component/data'

function App() {

  return (
    <>
    <Nav/>

    {data.map((ele,idx)=>{
      return <Card key={idx} title={ele.text} author={ele.author} director={ele.director} duration={ele.duration} genre={ele.genre} description={ele.description} posterImg={ele.poster_image} mainImg={ele.main_image}/>
     })}

    
    </>
  )
}

export default App
