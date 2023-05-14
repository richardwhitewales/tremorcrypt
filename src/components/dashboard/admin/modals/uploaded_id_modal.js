import { useState, useEffect } from 'react';
import { db } from '@/firebase/fire_config';
import Loader from '@/components/loader/loader';
import { getDocs, collection } from 'firebase/firestore';
import Link from 'next/link';

export default function UploadedIDModal() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsersData = async () => {
            const usersSnapshot = await getDocs(collection(db, 'users'));
            let innerUsers = [];

            usersSnapshot.forEach((doc) => {
                const data = doc.data();
                innerUsers.push(data);
            });

            // Sort the innerUsers array alphabetically by username
            innerUsers.sort((a, b) => a.username.localeCompare(b.username));

            setUsers(innerUsers);
        };
        getUsersData();
    }, []);

    if (!users) return <Loader />

    return (
        <div className="modal fade" id="uploadedIDModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="uploadedIDModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered">
                <div className="modal-content" id="modalContent">
                    <div className="modal-header">
                        <h5 className="modal-title" id="uploadedIDModalLabel">Uploaded IDs & Reciepts</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <p className="secondary">Uploaded IDs</p>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Front</th>
                                            <th scope="col">Back</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((users, index) => (
                                            users.frontID && users.backID &&
                                            <tr key={index}>
                                                <td>{users.username}</td>
                                                <td>{users.email}</td>
                                                <td>
                                                    <Link href={users.frontID} target="_blank" className="btn btn-sm btn-success white">
                                                        View
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link href={users.backID} target="_blank" className="btn btn-sm btn-success white">
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div>
                            <p className="secondary">Reciepts</p>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Reciepts</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((users, index) => (
                                            users.dashboard.reciept && users.dashboard.reciept.length > 0 &&
                                            <tr key={index}>
                                                <td>{users.username}</td>
                                                <td>{users.email}</td>
                                                <td>
                                                    <Link href={users.dashboard.reciept} target="_blank" className="btn btn-sm btn-success white">
                                                        View
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}