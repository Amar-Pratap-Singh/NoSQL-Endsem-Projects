import axios from 'axios';
import {react} from 'react';


const UploadDataSection = (props) => {

    const uploadDataset = () => {
        
        axios.get('http://localhost:8080/api/uploadData')
        .then((response)=>{
            console.log(response.status);
            props.setUploaded(true);
        })
        .catch((err)=>{
            console.log(err);
            props.setUploaded(false);
        })
     
    }


    return (
        <section class="background firstSection">
            <div class="box-main">
                <div class="first-half">
                    <p class="text-big"> Data Ingestion:  Upload Your Dataset </p>

                    <div class="buttons">
                        {(props.uploaded === true) ?
                        <button class="btn btn-upload" onClick={uploadDataset} disabled> Dataset Uploaded! </button>
                        :
                        <button class="btn btn-upload" onClick={uploadDataset}> Upload Dataset </button>
                        }
                    </div>
                    
                    {/* {(props.uploaded === true) && <h3>Data Uploaded Successfully!</h3>} */}

                </div>

                <div class="second-half">
                    {/* <img src="upload.png" alt="Upload Dataset" /> */}
                </div>
            </div>

        </section>
    );
}

export default UploadDataSection;