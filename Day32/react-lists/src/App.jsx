import * as React from 'react';

function App() {
const list = [{
  title : "react",
  author : "react_Author",
  pages: 200
},
{
  title : "NodeJs",
  author : "NodeJS_Author",
  pages: 2000
},
{
  title : "Deno",
  author : "Deno_Author",
  pages: 500
},
{
  title : "DOM",
  author : "DOM_Author",
  pages: 1000
}, ]

  return (
    <div>
      <h1>React Lists</h1>
      <label htmlFor='Search'>Search</label>
      <input type='text' id='search'></input>
      <hr></hr>
      <ul>
      {list.map((item)=>{
        <li id={item.id}>{item.title}</li>
      })}
      </ul>
    </div>
  )
}

export default App
