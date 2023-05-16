import axios from 'axios';
import {react} from 'react';
import { useState } from 'react';

const FirstRibbon = (props) => {

    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");

    const handleClick = async (event) => {

        event.preventDefault();

        axios
        .post('http://localhost:8080/api/TrainDetailsSourceAndDestinationStation', {
            source: source,
            destination: destination
        })
        .then((response) => {
            props.setData(response.data);
            props.setResult(1);
            console.log(response.data);
        });
    }
    
    const toggleFunction = async() => {
        (props.ribbon === "firstRibbon") ? props.setRibbon("NoSQL") : props.setRibbon("firstRibbon");
    }

    return(
        <div>
            {(props.ribbon === "firstRibbon") ?
                <div>
                    <h1 data-toggle="collapse" onClick={toggleFunction} data-target="#firstRibbon" style={{"margin":"40px 0 40px 40px", "":""}}> Get Train Details Based on Arrival and Departure Station </h1>
                    {/* <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button> */}
                    <div id="firstRibbon" class="collapse" style={{"margin":"40px 0 40px 40px", "":""}}>
                        <form id="form">
                            <label for="SourceStation">Source Station:</label>
                            <input type="text" onChange={(e)=>{setSource(e.target.value)}} id="SourceStation" name="SourceStation"/>

                            <label for="DestinationStation">Destination Station:</label>
                            <input type="text" onChange={(e)=>{setDestination(e.target.value)}} id="DestinationStation" name="DestinationStation"/>

                            <button class="buttons btn btn-choices" type="submit" onClick={handleClick}> Get Train Details </button>
                        </form>
                    </div>
                </div>
                :
                <div>
                    <h1 data-toggle="collapse" onClick={toggleFunction} data-target="#demo" style={{"margin":"40px 0 40px 40px", "":""}}> Get Train Details Based on Arrival and Departure Station </h1>
                </div>
            }
        </div>
    );
}

export default FirstRibbon;