//import react and useState/useEffect hooks
const React = require("react");
const { useState, useEffect } = require("react");
//create our function called app
function App() {
  const [data, setData] = useState(null);
  //function that takes in ms and waits "that" long
  const syncWait = (ms) => {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
  };

  const fetchUrl = "http://backend:3000/db";

  useEffect(() => {
    //generate random number
    const randomNumber = Math.floor(Math.random() * 100);

    const body = {
      number: randomNumber,
      date: new Date(),
    };
    console.log("hello");
    //call syncWait (passing in 5 seconds in ms)
    syncWait(5000);

    fetch(fetchUrl, {
      //post request
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //append random number to body
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, [data]);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}

export default App;
