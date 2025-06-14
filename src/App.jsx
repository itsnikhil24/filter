import { useState } from 'react'

import './App.css'


const allbrands=[
  {id:1,Name:"maruti"},
  {id:2,Name:"Mercedes"},
  {id:3,Name:"Bemer"},
  {id:4,Name:"MG"},
  {id:5,Name:"Rolls Royce"},

]


function Filter(){
  const [item,filteritem]=useState(allbrands);
    const [notFound, setNotFound] = useState(false);


  function change(e){
    const x=e.target.value;
    const filtered = allbrands.filter((brand) =>
      brand.Name.toLowerCase().includes(x)
    );
   if (filtered.length > 0) {
      filteritem(filtered);
      setNotFound(false);
    } else {
      filteritem([]);
      setNotFound(true);
    }
  }
  return (
    <>
    <input type="text" onChange={change} />
    {notFound ? (
        <h2>Item not found</h2>
      ) : (
        <ul>
          {item.map((brand) => (
            <li key={brand.id}>{brand.Name}</li>
          ))}
        </ul>
      )}
    </>
  )


}

function Newfeature(){
  console.log("new feature");
}

function App() {


  return (
    <>
    
        <Filter/>
      
    </>
  )
}

export default App
