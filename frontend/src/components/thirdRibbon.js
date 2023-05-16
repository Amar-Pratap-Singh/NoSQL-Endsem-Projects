import axios from 'axios';
import {react} from 'react';
import { useState } from 'react';

const ThirdRibbon = (props) => {

    const [arrivalTime, setArrivalTime] = useState(0);
    const [departureTime, setDepartureTime] = useState(0);
    const [code, setCode] = useState("");
    // const [day, setDay] = useState([]);

    const handleClick = async (event) => {

        event.preventDefault();

        axios
        .post('http://localhost:8080/api/TrainDetailsMoreConstrained', {
            aTime: arrivalTime,
            dTime: departureTime,
            sCode: code,
        })
        .then((response) => {
            props.setData(response.data);
            props.setResult(3);
            console.log(response.data);
        });
    }

    const toggleFunction = async() => {
        (props.ribbon === "thirdRibbon") ? props.setRibbon("NoSQL") : props.setRibbon("thirdRibbon");
    }


    return(
        <div>
            {(props.ribbon === "thirdRibbon") ?
                <div>
                    <h1 data-toggle="collapse" onClick={toggleFunction} data-target="#thirdRibbon" style={{"margin":"40px 0 40px 40px", "":""}}>Get Train Details On a Day Departing from Your Nearest Station</h1>
                    {/* <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#demo">Simple collapsible</button> */}
                    <div id="thirdRibbon" class="collapse" style={{"margin":"40px 0 40px 40px", "":""}}>
                    <form id="form">
                            <label for="ArrivalTime">Minimum Time: </label>
                            <input type="Number" onChange={(e)=>{setArrivalTime(e.target.value)}} id="ArrivalTime" name="ArrivalTime"/>

                            <label for="DepartureTime">Maximum Time: </label>
                            <input type="Number" onChange={(e)=>{setDepartureTime(e.target.value)}} id="DepartureTime" name="DepartureTime"/>

                            <label for="StationCode">Station Code: </label>
                            <input type="String" onChange={(e)=>{setCode(e.target.value)}} id="StationCode" name="StationCode"/>

                            {/* <label for="Day">Day: </label>
                            <input type="String" onChange={(e)=>{setDay(e.target.value)}} id="Day" name="Day"/> */}

                            <button class="buttons btn btn-choices" type="submit" onClick={handleClick}> Get Train Details  </button>
                        </form>
                    </div>
                </div>
                :
                <div>
                    <h1 data-toggle="collapse" onClick={toggleFunction} data-target="#demo" style={{"margin":"40px 0 40px 40px", "":""}}>Get Train Details On a Day Departing from Your Nearest Station</h1>
                </div>
            }
        </div>
    );
}

export default ThirdRibbon;