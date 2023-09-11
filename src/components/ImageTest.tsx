import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";

import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";

const ImageTest: React.FC = () => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dhc0uuvta'
        }
    })

    // Instantiate a CloudinaryImage object for the
    // image with the public ID, 'docs/models'.
    const myImage = cld.image('docs/models');

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage.resize(fill().width(400).height(400));

    return (
        <React.Fragment>
            <AdvancedImage cldImg={myImage} />
        </React.Fragment>
    )
}

export default ImageTest