import React, { useEffect, useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import Sidebar from './components/Sidebar';

interface ImageData {
    public_id: string;
    // Add any other properties you need from the image data
}

function MyMedia() {
    const [images, setImages] = useState<ImageData[]>([]);
    // Use environment variables directly
    const cloudName = process.env.REACT_APP_CLOUD_NAME;
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiSecret = process.env.REACT_APP_API_SECRET;

    useEffect(() => {
        if (cloudName && apiKey && apiSecret) {
            // Form the URL to fetch images using the Admin API
            const adminApiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;

            // Make the authenticated GET request to the Admin API
            fetch(adminApiUrl, {
                method: 'GET',
                headers: {
                    // Basic Authentication with API key and secret
                    'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    setImages(data.resources);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [cloudName, apiKey, apiSecret]);

    const renderImages = () => {
        return images.map((image) => {
            const cld = new Cloudinary({
                cloud: {
                    cloudName: 'dhc0uuvta',
                },
            });

            // Instantiate a CloudinaryImage object for the current image.
            const myImage = cld.image(image.public_id);

            // Add any transformations you need, such as resizing.
            myImage.resize(fill().width(200).height(200));

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
