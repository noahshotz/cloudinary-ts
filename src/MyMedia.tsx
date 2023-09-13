import React, { useEffect, useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import Sidebar from './components/Sidebar';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

interface ImageData {
    public_id: string;
}

interface MyMediaProps {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
}

function MyMedia({ cloudName, apiKey, apiSecret }: MyMediaProps): JSX.Element {
    const navigate = useNavigate();
    const [images, setImages] = useState<ImageData[]>([]);
    const proxy: string = "https://web-production-0fb1.up.railway.app/";
    const [hadLoaded, setHasLoaded] = useState<boolean>(false);

    useEffect(() => {
        // Set up a Firebase Authentication state listener
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // If a user is signed in, fetch and display images
                if (cloudName && apiKey && apiSecret) {
                    const adminApiUrl = `${proxy}https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;

                    fetch(adminApiUrl, {
                        method: 'GET',
                        headers: {
                            'Authorization': `Basic ${btoa(`${apiKey}:${apiSecret}`)}`,
                        },
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            setImages(data.resources);
                            setHasLoaded(true);
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                }
            } else {
                // If no user is signed in, redirect to the login page
                navigate('/login');
            }
        });

        // Clean up the listener when the component unmounts
        return () => unsubscribe();
    }, [cloudName, apiKey, apiSecret, navigate]);

    const renderImages = () => {
        return images.map((image) => {
            const cld = new Cloudinary({
                cloud: {
                    cloudName: 'dhc0uuvta',
                },
            });

            const myImage = cld.image(image.public_id);
            myImage.resize(fill().width(200).height(200));

            return (
                <div className="mymedia" key={image.public_id}>
                    <a target="_blank" href={myImage.toURL()}>
                        <AdvancedImage cldImg={myImage} />
                    </a>
                    <div className="desc">{image.public_id}</div>
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
                    <div className="image-container">
                        {hadLoaded ? (
                            renderImages()
                        ) : (
                            <div>
                                <p>Loading...</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MyMedia;
