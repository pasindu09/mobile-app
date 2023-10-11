import { useEffect, React, useRef, useState } from 'react';
import Navbar from './navbar.jsx';
import { Link } from 'react-router-dom';
import Webcam from 'react-webcam';


function ProfileEdit() {
    const webcamRef = useRef(null);
    const [cameraActive, setCameraActive] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    const openCamera = () => {
        setCameraActive(true);
    };

    const closeCamera = () => {
        setCameraActive(false);
    };

    const capturePhoto = () => {
        const newImageSrc = webcamRef.current.getScreenshot(); // Get new image source
    
        // Save the image source to local storage
        localStorage.setItem('profileImage', newImageSrc);
    
        // Update the image element
        const profileImage = document.getElementById('profileImage');
        profileImage.src = newImageSrc;
    
        // Update state after saving to local storage
        setImageSrc(newImageSrc);
    
        // Close the camera
        setCameraActive(false);
    };
    
    


    // Retrive the profile pciture from local storage
    useEffect(() => {
        const profileImage = localStorage.getItem('profileImage');
        setImageSrc(profileImage);
    }, []);



    return (
        <div>
            <Navbar />
            <div className='flex-col justify-center justify-items-center mt-44'>
                <h1 className='font-bold text-3xl justify-self-center text-center'>Your Profile</h1>
                <div className="flex justify-center items-center">
                    <div className="bg-white p-1 text-center shadow rounded-md">
                        <div className="container mt-3">
                            <div className="bg-white p-3 text-center shadow">
                                <div className="justify-center mb-3">
                                 

                                    <div className="flex justify-center items-center flex-col ml-3">
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden">
                                        {imageSrc ? (
                                            <img src={imageSrc} className="w-full h-full object-cover" alt="Profile" />
                                        ) : (
                                            <span className="bg-white text-white p-2 h-8 w-8 rounded-full absolute bottom-0 right-0 cursor-pointer">
                                                <i className='bx bxs-camera-plus text-black'>+</i>
                                            </span>
                                        )}
                                    </div>
                                        <h4 className="text-xl font-medium mb-0 text-blue-500">David Goggins</h4>
                                    </div>
                                </div>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openCamera}>
                                    <h4 className="font-medium">Insert Image</h4>
                                </button>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-medium text-blue-500">Name</label>
                                        <input className="form-input w-full border border-gray-300 rounded px-3 py-2" type="text" placeholder="Name" />
                                    </div>
                                    <div>
                                        <label className="font-medium text-blue-500">Email</label>
                                        <input className="form-input w-full border border-gray-300 rounded px-3 py-2" type="text" placeholder="Email" />
                                    </div>
                                    <div>
                                        <label className="font-medium text-blue-500">City</label>
                                        <input className="form-input w-full border border-gray-300 rounded px-3 py-2" type="text" placeholder="City" />
                                    </div>
                                    <div>
                                        <label className="font-medium text-blue-500">Country</label>
                                        <input className="form-input w-full border border-gray-300 rounded px-3 py-2" type="text" placeholder="Country" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="font-medium text-blue-500">About</label>
                                    <textarea className="form-input w-full border border-gray-300 rounded px-3 py-2" placeholder="Tell us about yourself"></textarea>
                                </div>
                                <div className="mt-4 flex justify-end space-x-2">
                                    <button className="px-3 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white">Cancel</button>
                                    <button className="px-3 py-2 bg-blue-500 text-white rounded">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {cameraActive && (
                <div className="flex fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                    <div>
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            className="max-h-screen max-w-full "
                        />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={capturePhoto}>
                        Capture Photo
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={closeCamera}>
                        Close Camera
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProfileEdit;