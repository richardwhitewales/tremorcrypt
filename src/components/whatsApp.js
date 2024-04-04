import Image from 'next/image'
import { db } from '@/firebase/fire_config';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function WhatsApp() {
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
    return (
        <div className="position-fixed bottom-0 ms-2 mb-2">
            {methods
                && (
                    <>
                        <a href={`https://wa.me/${methods.whatsApp}`} className='me-2' target="_blank" rel="noreferrer">
                            <Image
                                src="/whatsapp.png"
                                alt="whatsapp"
                                width={50}
                                height={50}
                                priority={true}
                            />
                        </a>
                        
                        {/* <a href={`https://t.me/${methods.telegram}`} className='me-2' target="_blank" rel="noreferrer">
                            <Image
                                src="/telegram.png"
                                alt="telegram"
                                width={50}
                                height={50}
                                priority={true}
                            />
                        </a> */}

                        <a href={`https://signal.me/#p/${methods.signal}`} target="_blank" rel="noreferrer">
                            <Image
                                src="/signal.png"
                                alt="signal"
                                width={50}
                                height={50}
                                priority={true}
                            />
                        </a>
                    </>
                )}
        </div >
    )
}

