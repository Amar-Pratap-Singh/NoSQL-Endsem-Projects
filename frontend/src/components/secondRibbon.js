import axios from 'axios';
import {react} from 'react';
import { useState } from 'react';


const SecondRibbon = (props) => {

    const [trainNumber, setTrainNumber] = useState(0);

    const handleClick = async (event) => {

        event.preventDefault();

        axios
        .post('http://localhost:8080/api/TrainDetailsTrainNumber', {
            trainNumber: trainNumber
        })
        .then((response) => {
            props.setData(response.data);
            props.setResult(2);
            console.log(response.data);
        });
    }

    const toggleFunction = async() => {
        (props.ribbon === "secondRibbon") ? props.setRibbon("NoSQL") : props.setRibbon("secondRibbon");
    }


    return(
        <div>
            {(props.ribbon === "secondRibbon") ?
                <div>
                    <h1 data-toggle="collapse" onClick={toggleFunction} data-target="#secondRibbon" style={{"margin":"40px 0 40px 40px", "":""}}>Get Train Details Based On Train Number </h1>
                    <div id="secondRibbon" class="collapse" style={{"margin":"40px 0 40px 40px", "":""}}>
                        <form id="form">
                            <label for="trainNo">Train Number</label>
                            <input type="number" onChange={(e)=>{setTrainNumber(e.target.value)}} id="trainNo" name="trainNo"/>

                            <button class="buttons btn btn-choices" type="submit" onClick={handleClick}> Get Train Details </button>
                        </form>
                    </div>
                </div>
                :
                <div>
                    <h1 data-toggle="collapse" onClick={toggleFunction} data-target="#demo" style={{"margin":"40px 0 40px 40px", "":""}}>Get Train Details Based On Train Number</h1>
                </div>
            }
        </div>
    );
}

export default SecondRibbon;