import axios from 'axios';
import {react} from 'react';

const Results2 = (props) => {

    return(
        <div>
            <h1 style={{"color":"black", "margin-left":"47%", "font-size":"50px", "margin-top":"100px", "visibility": (props.data.length === 0 ? "hidden" : "visible")}}>Output</h1>
            <h3 style={{"color":"black", "margin-left":"47%", "font-size":"20px", "margin-top":"20px", "visibility": (props.data.length === 0 ? "hidden" : "visible")}}>(Rows fetched: {props.data.length})</h3>
            {props.data.length !== 0 && 
            <div class="container mt-4">
                <table class="table">
                <thead>
                    <tr>
                    <th>#Id</th>
                    <th>Train_No</th>
                    <th>Station_Code</th>
                    <th>Station_Name</th>
                    <th>Route_Number</th>
                    <th>Arrival_time</th>
                    <th>Departure_time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((val, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{props.data[index].Train_No}</td>
                            <td>{props.data[index].Station_Code}</td>
                            <td>{props.data[index].Station_Name}</td>
                            <td>{props.data[index].Route_Number}</td> 
                            <td>{props.data[index].Arrival_time}</td> 
                            <td>{props.data[index].Departure_time}</td> 
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>}
        </div>
    );
}

export default Results2;