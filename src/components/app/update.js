import { useAuth } from '@/firebase/fire_auth_context';
import NeedAuth from '@/components/restrictions/need_auth';
import Loader from '@/components/loader/loader';
import { db } from '@/firebase/fire_config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import capitalize from '../utils/capitalize';
import Image from 'next/image';

export default function AppUpdate({ email }) {
    const [admin, setAdmin] = useState(null);
    const [user, setUser] = useState(null);
    const { authUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (authUser) {
            const userRef = doc(db, "app_users", authUser.email);
            const unsubscribe = onSnapshot(userRef, (snap) => {
                if (snap.exists()) setAdmin(snap.data());
                else toast.error("Admin data not found");
            });
            return () => { unsubscribe(); };
        }
    }, [authUser]);

    useEffect(() => {
        if (email) {
            const userRef = doc(db, "app_users", email);
            const unsubscribe = onSnapshot(userRef, (snap) => {
                if (snap.exists()) setUser(snap.data());
                else toast.error("User data not found");
            });
            return () => { unsubscribe(); };
        }
    }, [email]);

    if (!authUser) return <NeedAuth fullHeight={true} />
    if (!admin) return <Loader fullHeight={true} bg="bg_black" />

    const onUpdate = async e => {
    }

    return (
        <div className="container">
            <div className="row mt-3 mb-5">
                <div className="col-12 mb-4 text-center">
                    <Image src="/logo.png" width={60} height={60} />
                    <h4>Update User <b className='secondary'>({capitalize(user.fullName)})</b></h4>
                </div>

                <form className="col-sm-6" onSubmit={onUpdate}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Full Name"
                            defaultValue={capitalize(user.fullName)}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <label htmlFor="fullName">Full Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="Address"
                            defaultValue={capitalize(user.address)}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <label htmlFor="address">Address</label>
                    </div>
                </form>
            </div>
        </div>
    )
}