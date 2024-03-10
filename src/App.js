import logo from "./SCMS.png";
import './App.css';
import Registration from './components/Registration'
import Appbar from './components/Appbar'
import Login from './components/Login';
import Book from './components/Book';
import Error from './components/Error';
import Update from './components/Update';
import CounsellingDiary from './components/Counselling Diary';
import Home from "./components/Home";

function App({store}) {
  function Page(){
    switch(store.getState().NavReducer){
      case "Login":
        return (<div><Login store={store} /></div>)
      case "Registration":
        return (<div><Registration /></div>)
      case "Book":
        if( localStorage.getItem("role") == 4 || localStorage.getItem("role") == 1)
          return (<div><Book /></div>)
        else
          return (<div><Error /></div>)
      case "Update":
        if(localStorage.getItem("role") == 3|| localStorage.getItem("role")== 1)
          return (<div><Update /></div>)
      case "CounsellingDiary":
        if(localStorage.getItem("role") == 2|| localStorage.getItem("role")== 1)
          return (<div><CounsellingDiary /></div>)
      case "Home":
        if(localStorage.getItem("role") == 1|| localStorage.getItem("role")== 1)
          return (<div><Home /></div>)
      else
        return(<div><Error /></div>)
      default:
        return
    
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Student Counselling Management system</p>
      </header>
      <div className="App-body">
        <Appbar store={store}/>
       <Page /> 
      </div>
    </div>
  );
}

export default App;