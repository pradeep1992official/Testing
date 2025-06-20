import AddContacts from './AddContacts'
// import './App.css'
import Header from './Header'
import ShowContacts from './ShowContacts'
import StateSample from './StateSample';

function App() {
  let phoneContacts =[
    {
      id:1,
      name:"Pradeep",
      phone:"+918144404504"
    },
    {
      id:2,
      name:"Shruthi",
      phone:"+918144404504"
    },
    {
      id:3,
      name:"Srinivasan",
      phone:"+918144404504"
    },
    {
      id:4,
      name:"Mahalakshmi",
      phone:"+918144404504"
    },
  ];

  return (
    <div className="App">
      <AddContacts contactList = {phoneContacts}></AddContacts>
      <hr />
      <StateSample></StateSample>
    </div>
  )
}

export default App
