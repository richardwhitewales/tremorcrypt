import { db } from '@/firebase/fire_config';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function OtherPaymentMethodModal() {
    const [methods, setMethods] = useState(null);

    useEffect(() => {
        getDoc(doc(db, 'harpy', 'harpy'))
            .then((docSnapshot) => {
                if (docSnapshot.exists()) {
                    setMethods(docSnapshot.data());
                } else {
                    toast.error('Profile not found');
                }
            })
            .catch((error) => {
                toast.error('Error getting profile:', error);
            });
    }, []);

    const onPayment = async e => {
        e.preventDefault();
        toast.success("Comfirmation of deposit may take up to 2 business days!")
    };

    return (
        <div className="modal fade" id="otherPaymentMethodModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="otherPaymentMethodModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="otherPaymentMethodModalLabel">Other Payment Method</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <form onSubmit={onPayment}>
                                    <div className="alert alert-light border_primary shadow">
                                        If you are making a bank transfer, please note that depending on your location,
                                        transaction might take up to 5 business days to confirm. If you encounter any
                                        issue while funding your account, please contact harpycrypto@gmail.com for assistance.
                                    </div>

                                    <div className='row'>
                                        <div className="col-sm-4 mt-3">
                                            {methods && (<>
                                                <h5>All Bank Transfer Details</h5>
                                                <div dangerouslySetInnerHTML={{ __html: methods.allBankTransferDetails }} />
                                            </>)}
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-lg btn_secondary white w-100">
                                            I have send the funds
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}