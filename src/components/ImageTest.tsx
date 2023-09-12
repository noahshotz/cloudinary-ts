import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import Sidebar from './components/Sidebar';

function MyMedia() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Fetch the images from Cloudinary using the folder name "docs"
        axios
            .get('https://res.cloudinary.com/dhc0uuvta/image/list/docs.json')
            .then((res) => {
                setImages(res.data.resources);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const renderImages = () => {
        return images.map((image) => {
            const cld = new Cloudinary({
                cloud: {
                    cloudName: 'your-cloud-name', // Replace with your actual Cloudinary cloud name
                },
            });

            // Instantiate a CloudinaryImage object for the current image.
            const myImage = cld.image(image.public_id);

            // Add any transformations you need, such as resizing.
            myImage.resize(fill().width(400).height(400));

            return (
                <div className="responsive" key={image.public_id}>
                    <div className="img">
                        <a target="_blank" href={myImage.toURL()}>
                            <AdvancedImage cldImg={myImage} />
                        </a>
                        <div className="desc">{image.public_id}</div>
                    </div>
                </div>
            );
        });
    };

    return (
        <React.Fragment>
            <div className="wrapper">
                <Sidebar />
                <div className="content">
                    <h1>My media</h1>
                    {/* Render the images */}
                    {renderImages()}
                </div>
            </div>
        </React.Fragment>
    );
}

export default MyMedia;
