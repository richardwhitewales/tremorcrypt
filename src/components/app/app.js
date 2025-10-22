import { useAuth } from '@/firebase/fire_auth_context';
import NeedAuth from '@/components/restrictions/need_auth';
import Loader from '@/components/loader/loader';
import { db } from '@/firebase/fire_config';
import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import capitalize from '../utils/capitalize';
import { toCurrency } from '../utils/toCurrency';
import Link from 'next/link';
import Image from 'next/image';

export default function App() {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(null);
    const { authUser } = useAuth();

    useEffect(() => {
        if (authUser) {
            const userRef = doc(db, "app_users", authUser.email);
            const unsubscribe = onSnapshot(userRef, (snap) => {
                if (snap.exists()) setUser(snap.data());
                else toast.error("User data not found");
            });
            return () => { unsubscribe(); };
        }
    }, [authUser]);


    useEffect(() => {
        const get = async () => {
            const snap = await getDocs(collection(db, 'app_users'));
            const u = snap.docs.map(doc => (doc.data()));
            setUsers(u);
        };
        get();
    }, []);

    if (!authUser) return <NeedAuth fullHeight={true} />
    if (!user) return <Loader fullHeight={true} bg="bg_black" />

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mt-3 mb-5 text-center">
                    <Image src="/logo.png" width={60} height={60}/>
                    <h5 className='mb-4'>All App Users</h5>

                    <div className='table-responsive text-start'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}>
                                        <td>
                                            <Link href={`app/${user.email}`}>
                                                {capitalize(user.fullName)}
                                            </Link>
                                        </td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{capitalize(user.country)}</td>
                                        <td>{toCurrency(user.dashboard.balance)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}