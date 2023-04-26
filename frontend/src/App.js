
function App() {

  async function callBackend(){

    const result = await fetch("http://localhost:8080/", {
      // method: "POST",
      // headers: {
          // "Content-Type": "application/json",
      // },
      // body: JSON.stringify({
      // }),
    }).then((res) => res.json());

    console.log(result.reply);
  
  }



  return (
    <div>
      <h1>Hello, React is setup!</h1>
      <button onClick={callBackend}> Click Me </button>
    </div>
  );
}

export default App;
