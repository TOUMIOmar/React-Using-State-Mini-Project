import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Bio from './bio';
import FullName from './FullName';
import ProfilePhoto from './ProfilePhoto'
import Profession from './Profession'




export default class App extends Component {
  
  state={
    show:false,
    count:1,
    fullName:"TOUMI Omar",
    bio:"...",
    imgSrc:"/myphoto.png",
    profession:"....",
  }
  show=()=>{
    this.setState({show:!this.state.show &&this.state.count++})
    
  }
  rescount=()=>{
    this.setState({count :this.state.count=1})
  }
  render() {
    return (
      <div className="allbody">
      <div  className="mx-0">
      <Button   variant="primary" onClick={this.show}>Show</Button>
      <Button   variant="primary" onClick={this.rescount}>Res Count</Button>
      </div>
       
       {this.state.show && 
       <>
       <div className='layoutprofil'>

       <div className='myimg'>
         <ProfilePhoto >/myphoto.png</ProfilePhoto>
       </div>
 
       <div className='col2'>
         <FullName name="Omar" lastname="TOUMI"></FullName>
         
         <Profession profession="go my code"></Profession>
       </div>
    
     </div>
       <div className='bio'>
         <Bio knowledge="HTML, CSS, JavaScript, Java" expertisetest="UI/UX interface designing, market research, and troubleshooting complex issues" expscore="vqdv"></Bio>
     </div>

     <div>
     
        <h1>{this.state.count}</h1>
    
     </div>


     </>
 
       
       
       }
      </div>
     
    )
  }
}

