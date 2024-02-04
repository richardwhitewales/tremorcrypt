import { useState } from 'react';
import styles from '@/components/dashboard/Dashboard.module.css'
import uploadIDImage from '@/components/dashboard/user/upload_id_image'
import Loader from '@/components/loader/loader';
import { toast } from "react-toastify";
import { useRouter } from 'next/router';

export default function UploadIDCard({ user }) {
    const [loading, setLoading] = useState(false);
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const router = useRouter();

    if (!user) return <Loader />

    const handleUpload = event => {
        event.preventDefault();
        setLoading(true);

        uploadIDImage(user.email, frontImage, backImage).then(() => {
            toast.success("IDs Uploaded!");
            setLoading(false);
            router.push('/dashboard/user');
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className={`my-3 p-2 ${styles.card} w-75`}>

                    <form onSubmit={handleUpload} className="row">
                        <div className="col-sm-6">
                            <p>Upload Front ID Image</p>

                            <div className="form-floating mb-3">
                                <input
                                    type="file"
                                    required
                                    className="form-control bg_black_15 text-white border-dark"
                                    id="frontImage"
                                    placeholder="Jon"
                                    onChange={(event) => setFrontImage(event.target.files[0])}
                                />
                                <label htmlFor="frontImage">Front Image</label>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <p>Upload Back ID Image</p>

                            <div className="form-floating">
                                <input
                                    type="file"
                                    required
                                    className="form-control bg_black_15 text-white border-dark"
                                    id="backImage"
                                    placeholder="backImage"
                                    onChange={(event) => setBackImage(event.target.files[0])}
                                />
                                <label htmlFor="backImage">Back Image</label>
                            </div>
                        </div>

                        <div className="col-12 text-center mt-5 mb-3">
                            <button className="btn btn-lg btn_secondary w-50">
                                {loading ? <Loader /> : "Upload"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
