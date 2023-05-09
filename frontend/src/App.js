import axios from "axios";
import { useState } from "react";
import ContactUs from "./components/contactUs";
import FirstRibbon from "./components/firstRibbon";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Ribbon from "./components/ribbon";
import UploadDataSection from "./components/uploadData";


function App() {
  
  // const [data, setData] = useState([{Name: 'Amar', Email: 'asd', Designation: 'asd', Mobile: '9283'}, {Name: 'Shuchi', Email: 'asd', Designation: 'asd', Mobile: '9283'}]);
  const [data, setData] = useState([['Amar', 'asd', 'asd','9283'], ['Shuchi', 'asd', 'asd','928908']]); 

  return (
    <div>
      <Navbar />
      <FirstRibbon />
      <UploadDataSection data={data}/>
      {/* <Ribbon /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;





  // async function callBackend(event){

  //   await axios({
  //     method: 'get',
  //     url: 'http://localhost:8080/',
  //     // data: {
  //     //   firstName: 'Finn',
  //     //   lastName: 'Williams'
  //     // }
  //   }).then((response)=>{console.log(response.data)});

  // }
