import axios from 'axios';
import {react} from 'react';

const UploadDataSection = (props) => {

    const uploadDataset = () => {
        console.log("Here I am !");
        const file = HTMLInputElement.files;
        // const file = document.getElementById('dataset').value;

        console.log(file.length);
        // const options = {
        //     method: 'post',
        //     url: 'http://localhost:8080/api/uploadData',
        //     data: {
        //       firstName: 'Finn',
        //       lastName: 'Williams'
        //     },
        //     transformRequest: [(data, headers) => {
        //       // transform the data
          
        //       return data;
        //     }]
        //   };
          
        //   // send the request
        //   axios(options);

    }

    return(
        <div>
         <form action="http://localhost:8080/api/uploadData" method="post" enctype="multipart/form-data">
            <div class="mb-3">
                <input type="file" id="dataset" class="form-control" name="csvFile" />
            </div>
            <button type="submit" class="btn btn-success" onClick={uploadDataset}>Upload</button>
            
            {props.data.length != 0 && 
            <div class="container mt-4">
                <table class="table">
                <thead>
                    <tr>
                    <th>#Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Designation</th>
                    <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((val, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{props.data[index][0]}</td>
                            <td>{props.data[index][1]}</td>
                            <td>{props.data[index][2]}</td>
                            <td>{props.data[index][3]}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>}
        </form>
        </div>
    );
}

export default UploadDataSection;