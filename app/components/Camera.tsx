// src/Camera.tsx
import React, { useRef, useEffect, useState } from 'react';

const Camera: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [photos, setPhotos] = useState<string[]>([]);

    useEffect(() => {
        const getUserMedia = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing the camera:', error);
            }
        };

        getUserMedia();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
            }
        };
    }, []);

    const takePhoto = () => {
        if (videoRef.current && canvasRef.current) {
            const width = videoRef.current.videoWidth;
            const height = videoRef.current.videoHeight;
            canvasRef.current.width = width;
            canvasRef.current.height = height;
            const context = canvasRef.current.getContext('2d');
            if (context) {
                context.drawImage(videoRef.current, 0, 0, width, height);
                const dataUrl = canvasRef.current.toDataURL('image/png');
                setPhotos((prevPhotos) => [...prevPhotos, dataUrl]);
            }
        }
    };

    return (
        <div className="container mx-auto p-4 text-center">
            <video ref={videoRef} autoPlay style={{ width: '20%' }} />
            <button className="btn btn-primary mt-4" onClick={takePhoto}>Take Photo</button>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            {photos.length > 0 && (
                <div>
                    <h2>Photos</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {photos.map((photo, index) => (
                            <img key={index} src={photo} alt={`Captured ${index}`} style={{ width: '20%' }} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Camera;
