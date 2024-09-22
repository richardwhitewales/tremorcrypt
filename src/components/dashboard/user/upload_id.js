import styles from '@/components/dashboard/Dashboard.module.css'
import DashboardNavbar from '@/components/dashboard/user/navbar'
import DashboardSidebar from '@/components/dashboard/user/sidebar'
import { useAuth } from '@/firebase/fire_auth_context';
import NeedAuth from '@/components/restrictions/need_auth';
import Loader from '@/components/loader/loader';
import { db } from '@/firebase/fire_config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import UploadIDCard from '@/components/dashboard/user/upload_id_card'
import { useMediaQuery } from '@chakra-ui/react';
import { CloseSquare, HambergerMenu } from 'iconsax-react';

export default function UploadID() {
    const [user, setUser] = useState(null);
    const { authUser } = useAuth();
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile] = useMediaQuery("(max-width: 1024px)");

    useEffect(() => {
        if (authUser) {
            const userRef = doc(db, "users", authUser.email);

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

    if (!authUser) return <NeedAuth fullHeight={true} />

    if (!user) return <Loader fullHeight={true} bg="bg_black" />

    return (
        <div className={styles.bg}>
            <DashboardNavbar />

            <div className={isMobile ? (showMenu && "d-flex") : "d-flex"}>
                {isMobile ? (showMenu && <DashboardSidebar />) : <DashboardSidebar />}

                <div className={isMobile ? (showMenu && "px-5") : "px-5"}>
                    <h5 className="text-white mt-3">Welcome, <span className="primary mt-3">{user.firstName} {user.lastName}</span></h5>

                    {isMobile && (
                        <div>
                            {showMenu ?
                                <CloseSquare size={32} className="text-danger pe-active" variant="Bold" onClick={() => setShowMenu(false)} /> :
                                <div className="d-flex w-100 justify-content-between mt-4 ps-2">
                                    <div className="d-flex justify-content-start pe-active">
                                        <HambergerMenu size={28} className="me-2 text-white" onClick={() => setShowMenu(true)} />
                                        <h5 className="text-white">Menu</h5>
                                    </div>

                                    <h5 className="me-3 primary">Upload ID</h5>
                                </div>
                            }
                        </div>
                    )}

                    <UploadIDCard user={user} />
                </div>
            </div>
        </div>
    )
}