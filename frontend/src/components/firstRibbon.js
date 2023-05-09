import axios from 'axios';
import {react} from 'react';


const FirstRibbon = () => {

    const handleClick = async () => {
        axios
        .get('http://localhost:8080/api/TopRatedMovies')
        .then((response) => {
            console.log(response);
        });

    }


    const uploadDataset = async() => {
        axios.put()
    }


    return (
        <section class="background firstSection">
            <div class="box-main">
                <div class="first-half">
                    <p class="text-big"> Process Data </p>
                    <p class="text-small"> Choose what to do with the dataset </p>

                    <div class="buttons">
                        <button class="btn" onClick={handleClick}> Get Top Rated Movies</button>
                        {/* <button class="btn" onClick={uploadDataset}> Upload the dataset </button> */}

                    </div>

                </div>

                <div class="second-half">
                    <img src="../../image/cloud_up.jpg" alt="Cloud Storage" />

                </div>
            </div>

        </section>
    );
}

export default FirstRibbon;