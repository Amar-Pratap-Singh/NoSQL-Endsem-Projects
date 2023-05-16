import axios from "axios";
import { useState } from "react";
import ContactUs from "./components/contactUs";
import FirstRibbon from "./components/firstRibbon";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Results from "./components/results";
import Results2 from "./components/results2";
import Results3 from "./components/results3";
import Ribbon from "./components/ribbon";
import SecondRibbon from "./components/secondRibbon";
import Separator from "./components/separator";
import ThirdRibbon from "./components/thirdRibbon";
import UploadDataSection from "./components/uploadData";


function App() {
  
  // const [data, setData] = useState([{Name: 'Amar', Email: 'asd', Designation: 'asd', Mobile: '9283'}, {Name: 'Shuchi', Email: 'asd', Designation: 'asd', Mobile: '9283'}]);
  const [data, setData] = useState([]); 
  const [result, setResult] = useState(0); 
  const [ribbon, setRibbon] = useState("NoSQL");
  const [uploaded, setUploaded] = useState(false);

  return (
    <div>
      <Navbar />
      <UploadDataSection data={data} uploaded={uploaded} setUploaded={setUploaded} setData={setData}/>
      <h1 style={{"color":"black", "margin-left":"40%", "font-size":"50px", "margin-top":"30px"}}>Data Processing</h1>
      <Separator />
      <FirstRibbon ribbon={ribbon} setRibbon={setRibbon} setResult={setResult} setData={setData}/>
      <Separator />
      <SecondRibbon ribbon={ribbon} setRibbon={setRibbon} setResult={setResult} setData={setData}/>
      <Separator />
      <ThirdRibbon ribbon={ribbon} setRibbon={setRibbon} setResult={setResult} setData={setData}/>
      <Separator />
      {(result == 1) && <Results data={data} />}
      {(result == 2) && <Results2 data={data} />}
      {(result == 3) && <Results3 data={data} />}
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
