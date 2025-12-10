import styles from '@/components/dashboard/Dashboard.module.css'
import AdminDashboardNavbar from '@/components/dashboard/admin/navbar'
import AdminDashboardTransaction from '@/components/dashboard/admin/transaction'
import AdminDashboardUsers from '@/components/dashboard/admin/users'
import AdminModal from '@/components/dashboard/admin/modals/admin'
import UploadedIDModal from '@/components/dashboard/admin/modals/uploaded_id_modal'
import { useAuth } from '@/firebase/fire_auth_context';
import NeedAuth from '@/components/restrictions/need_auth';
import Loader from '@/components/loader/loader';
import { db } from '@/firebase/fire_config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

export default function AdminDashboard() {
    const [user, setUser] = useState(null);
    const [tremorcrypt, setTremorcrypt] = useState(null);
    const { authUser } = useAuth();

    useEffect(() => {
        if (authUser) {
            const userRef = doc(db, "users_tremorcrypt", authUser.email);

            const unsubscribe = onSnapshot(userRef, (snapshot) => {
                if (snapshot.exists()) {
                    setUser(snapshot.data());
                } else {
                    toast.error("User data not found");
                }
            });

            return () => { unsubscribe(); };
        }
    }, [authUser]);

    useEffect(() => {
        if (authUser) {
            const userRef = doc(db, "tremorcrypt", "tremorcrypt");

            const unsubscribe = onSnapshot(userRef, (snapshot) => {
                if (snapshot.exists()) {
                    setTremorcrypt(snapshot.data());
                } else {
                    toast.error("tremorcrypt data not found");
                }
            });

            return () => { unsubscribe(); };
        }
    }, [authUser]);

    if (!authUser) return <NeedAuth fullHeight={true} />

    if (!user) return <Loader fullHeight={true} bg="bg_black" />

    return (
        <div className={styles.bg}>
            <AdminDashboardNavbar />
            <div className={styles.divider} />
            <AdminDashboardTransaction />
            <AdminDashboardUsers />

            <AdminModal user={tremorcrypt} />
            <UploadedIDModal />
        </div>
    )
}