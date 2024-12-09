import styles from '@/components/dashboard/Dashboard.module.css'
import { useState, useEffect } from 'react';
import Loader from '@/components/loader/loader';
import { db } from '@/firebase/fire_config';
import { query, where, getDocs, collection, orderBy, limit } from 'firebase/firestore';
import UserViewModal from '@/components/dashboard/admin/modals/user_view_modal';
import UserUpdateModal from '@/components/dashboard/admin/modals/user_update_modal';

export default function AdminDashboardUsers() {
    const [users, setUsers] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedUpdateUser, setSelectedUpdateUser] = useState(null);
    const [btc, setBTC] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const urlBtc = 'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/BTCUSD';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '388ed44c88msh4f3fcabbe8a0277p13efe0jsnb86a7bf6dab5',
            'X-RapidAPI-Host': 'bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com'
        }
    };

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

    useEffect(() => {
        fetch(urlBtc, options).then(res => res.json()).then(json => setBTC(json))
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => { onSearch(); }, 500);
        return () => { clearTimeout(timer); };
    }, [searchTerm]);

    const onSearch = async () => {
        if (searchTerm.length > 0 && users) {
            const search = searchTerm.toLowerCase();

            const results = [];

            users.forEach((user) => {
                const username = user.username;
                const fullName = `${user.firstName} ${user.lastName}`;

                console.log(user);
                
                if (username.toLowerCase().includes(search) || fullName.toLowerCase().includes(search)) {
                    results.push({ id: user.id, ...user });
                }
            });

            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    if (!users || !btc) return <Loader />

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-5">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="d-flex justify-content-between my-2">
                            <div className="form-floating w-100">
                                <input
                                    type="search"
                                    className="form-control bg_black_15 text-white border-dark"
                                    id="search"
                                    required
                                    placeholder="Search for username"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <label htmlFor="search">Search for username</label>
                            </div>
                        </div>

                        {searchResults.length > 0 && searchTerm.length > 0 &&
                            <div className="table-responsive mt-3 card shadow">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="secondary">Username</th>
                                            <th scope="col" className="secondary">Full Name</th>
                                            <th scope="col" className="secondary">Email</th>
                                            <th scope="col" className="secondary">View</th>
                                            <th scope="col" className="secondary">Update</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {searchResults.map((result, index) => (
                                            <tr key={index}>
                                                <td>{result.username}</td>
                                                <td>{result.firstName} {result.lastName}</td>
                                                <td>{result.email}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-dark"
                                                        data-bs-toggle="modal" data-bs-target="#userViewModal"
                                                        onClick={() => setSelectedUser(result)}
                                                    >
                                                        View
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn_secondary"
                                                        data-bs-toggle="modal" data-bs-target="#userUpdateModal"
                                                        onClick={() => setSelectedUpdateUser(result)}
                                                    >
                                                        Update
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        }

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="border rounded p-2 m-1">
                                    <h5 className="text-success">Users WITH balance</h5>

                                    <div className="table-responsive mt-3 overflow-y-scroll" style={{ height: 500 }}>
                                        <table className="table text-white">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="secondary">Username</th>
                                                    <th scope="col" className="secondary">Full Name</th>
                                                    <th scope="col" className="secondary">Email</th>
                                                    <th scope="col" className="secondary">View</th>
                                                    <th scope="col" className="secondary">Update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((users, index) => (
                                                    users.dashboard.balance > 0 &&
                                                    <tr key={index}>
                                                        <td>{users.username}</td>
                                                        <td>{users.firstName} {users.lastName}</td>
                                                        <td>{users.email}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn-light"
                                                                data-bs-toggle="modal" data-bs-target="#userViewModal"
                                                                onClick={() => setSelectedUser(users)}
                                                            >
                                                                View
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn_secondary"
                                                                data-bs-toggle="modal" data-bs-target="#userUpdateModal"
                                                                onClick={() => setSelectedUpdateUser(users)}
                                                            >
                                                                Update
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="border rounded p-2 m-1">
                                    <h5 className="text-success">Users WITHOUT balance</h5>

                                    <div className="table-responsive mt-3 overflow-y-scroll" style={{ height: 500 }}>
                                        <table className="table text-white">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="secondary">Username</th>
                                                    <th scope="col" className="secondary">Full Name</th>
                                                    <th scope="col" className="secondary">Email</th>
                                                    <th scope="col" className="secondary">View</th>
                                                    <th scope="col" className="secondary">Update</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((users, index) => (
                                                    users.dashboard.balance <= 0 &&
                                                    <tr key={index}>
                                                        <td>{users.username}</td>
                                                        <td>{users.firstName} {users.lastName}</td>
                                                        <td>{users.email}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn-light"
                                                                data-bs-toggle="modal" data-bs-target="#userViewModal"
                                                                onClick={() => setSelectedUser(users)}
                                                            >
                                                                View
                                                            </button>
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn_secondary"
                                                                data-bs-toggle="modal" data-bs-target="#userUpdateModal"
                                                                onClick={() => setSelectedUpdateUser(users)}
                                                            >
                                                                Update
                                                            </button>
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
            </div>

            <UserViewModal user={selectedUser} btc={btc} />
            <UserUpdateModal user={selectedUpdateUser} />
        </div>
    )
}
