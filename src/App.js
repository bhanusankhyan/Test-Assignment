import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data : [{id: 1, name: "Test 1", age: 27, city: "Pune", mark: 89, suggestions: [4, 5, 7] },
{ id: 2, name: "Veer", age: 23, city: "Surat", mark: 43, suggestions: [1, 3, 7] },
{ id: 3, name: "Vikas", age: 21, city: "Banglore", mark: 65, suggestions: [2, 6, 9] },
{ id: 4, name: "Ravi", age: 27, city: "Mumbai", mark: 50, suggestions: [1, 4, 8] },
{ id: 5, name: "Sachin", age: 23, city: "Chennai", mark: 44, suggestions: [3, 11, 4] },
{ id: 6, name: "Vidrohi", age: 29, city: "Vadodara", mark: 72, suggestions: [12, 10, 3] },
{ id: 7, name: "Ashish", age: 27, city: "Pune", mark: 89, suggestions: [1, 9, 12] },
{ id: 8, name: "Amir", age: 23, city: "Surat", mark: 43, suggestions: [11, 12, 8] },
{ id: 9, name: "Ravi", age: 21, city: "Banglore", mark: 65, suggestions: [8, 9, 10] },
{ id: 10, name: "Sameer", age: 27, city: "Mumbai", mark: 50, suggestions: [10, 6, 8] },
{ id: 11, name: "Vikram", age: 23, city: "Chennai", mark: 44, suggestions: [3, 2, 1] },
{ id: 12, name: "Jit", age: 29, city: "Vadodara", mark: 72, suggestions: [4, 5, 7] },
],
showTable : false,
selectedData : {},
suggestions : []
    }
    this.handleChange = this.handleChange.bind(this)
 }

handleChange (id) {
  let suggestions = []
  for (let item in this.state.data){
    if(this.state.data[item].id === id){
      this.setState({selectedData : this.state.data[item]}, ()=>{
        for(let value in this.state.selectedData.suggestions){
          for(let data in this.state.data){
            if(this.state.data[data].id === this.state.selectedData.suggestions[value]){
              suggestions.push({id: this.state.data[data].id, name: this.state.data[data].name, age: this.state.data[data].age})

            }
          }
        }
        this.setState({suggestions}, ()=>{
          //console.log(this.state.selectedData, this.state.suggestions)
          this.setState({showTable: true})
        })

      })
    }
  }
}


 render() {
   return(
     <div className="container">
     <div className="row">
     <div className="col-lg-4">
     <table className="table">
      <thead>
      <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">City</th>
      </tr>
      </thead>
      <tbody>
     {
       this.state.data.map((data) =>{
         return (
           <tr onClick={() => this.handleChange(data.id)}>
           <th scope="row">{data.id}</th>
           <td>{data.name}</td>
           <td>{data.age}</td>
           <td>{data.city}</td>
           </tr>
         )
       }
       )
     }
     </tbody>
     </table>
     </div>
     <div className="col-lg-3"/>
     <div className="col-lg-3">
     {
       this.state.showTable === true  ?
          <div>
            Name : {this.state.selectedData.name} <br />
            Age : {this.state.selectedData.age} <br />
            City : {this.state.selectedData.city} <br />
            Marks : {this.state.selectedData.marks}<br />
            <hr />
            Suggestions:
            <hr />
             {
               this.state.suggestions.map(data =>
                 <div onClick = {()=> this.handleChange(data.id)}>
                    {data.name} : {data.age} <hr />
                 </div>
               )
             }
          </div>
       : <div />
     }
     </div>
     </div>
     </div>
   )
 }
}

export default App;
