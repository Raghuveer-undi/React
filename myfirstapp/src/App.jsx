import Home from "./assets/Home"
import  About from "./assets/About"
import Homeclass from "./Classcomponents/Homeclass";
import Aboutclass from "./Classcomponents/Aboutclass"
import Greeting from "./Greeting";

function App(){
  let name="Gamana";
  let age=25;
  return(
    <>
    <h1>Hello EveryOne!</h1>
    <h3>Welcome to React</h3>
    <Home/>
    <Homeclass />
    <About/>
    <Aboutclass/>
    <Greeting fn={name} a={age} favcolor="Crimson"/>
    </>
  )
}
export default App;