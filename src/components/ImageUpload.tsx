// import react utils
import React, { useState, useCallback } from "react"

// import icons
import { BsImageFill as ImgIcon } from 'react-icons/bs'

// define props interface
interface ImageUploadProps {
    cloudName: string,
    uploadPreset: string
}

// define component
const ImageUpload: React.FC<ImageUploadProps> = ({ cloudName, uploadPreset }) => {

    // set states for image upload
    const [image, setImage] = useState<File | null>(null);
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState<boolean>(false);
    const [preview, setPreview] = useState<string | null>(null);

    // define upload function
    const uploadImage = async () => {
        setLoading(true);
        const data = new FormData();

        if (image) {
            data.append("file", image);
        }
        data.append(
            "upload_preset",
            uploadPreset
        );
        data.append("cloud_name", cloudName);
        data.append("folder", "docs");

        // start upload process
        try {
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
                {
                    method: "POST",
                    body: data
                }
            )
            const res = await response.json()
            setUrl(res.public_id)
            console.log("url is now: ", url)
        } catch (error) {
            console.error("An error occurred:", error);
        } finally {
            setLoading(false);
        }
    }

    // define image change function
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        // Use optional chaining to handle null values
        const file = event.target.files?.[0]

        if (file) {
            setImage(file)
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setPreview(reader.result);
                }
            }
        } else {
            // Handle the case where no file is selected
            // (e.g., user canceled file selection)
        }
    }

    // define reset function
    const handleResetClick = () => {
        setPreview(null)
        setImage(null)
    }

    // define drag and drop functions
    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];

        if (file) {
            setImage(file);

            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                if (typeof reader.result === 'string') {
                    setPreview(reader.result);
                }
            }
        }
    }, []);

    // define drag over function
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    // return component
    return (
        <React.Fragment>
            <input
                id="hidden-input"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                accept="image/*"
            />

            <div className="upload-action">
                <label htmlFor="hidden-input">
                    <div
                        className="choose-file-btn drop-area"
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <ImgIcon />Choose a file or drop it here
                    </div>
                </label>
            </div>

            <div className="image-preview-container">
                {preview && (
                    <React.Fragment>
                        <h2>Preview</h2>
                        <img src={preview} alt="preview" />
                    </React.Fragment>
                )}
            </div>

            <div className="action-buttons">
                <button
                    onClick={uploadImage}
                    disabled={!image}
                >Upload</button>
                <button
                    onClick={handleResetClick}>
                    Reset
                </button>
            </div>

            {loading && (
                <div><span>Processing...</span></div>
            )}
        </React.Fragment>
    );
};

export default ImageUpload;
