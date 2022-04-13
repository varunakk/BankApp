import homi from "./assets/home.json";
import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";
import prof from "./home.jpeg";
//import {useHistory} from "react-router-dom";

function  Home(){
    let p={title : "Welcome to home 1 " , content: "this is home content 1"};
    const newp = [...homi, p] ;
  
    return (<div>
        <img src={prof} width="800" height="700"/> 
        {/*{homi.map((hom)=><h1> {hom.title} <br/> {hom.content}</h1>)}
        <h1>new</h1>
        {newp.map((hom)=><h1> {hom.title} <br/> {hom.content}</h1>)}
    */}
    



        </div>);


}

export default Home;