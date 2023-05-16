import axios from 'axios';
import {react} from 'react';

const Results = (props) => {

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
                    <th>Train_Name</th>
                    <th>Source_Station_Name</th>
                    <th>Destination_Station_Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((val, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{props.data[index].Train_No}</td>
                            <td>{props.data[index].Train_Name}</td>
                            <td>{props.data[index].Source_Station_Name}</td>
                            <td>{props.data[index].Destination_Station_Name}</td> 
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>}
        </div>
    );
}

export default Results;