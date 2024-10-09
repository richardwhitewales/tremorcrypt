import { useState, useRef } from 'react';
import { db } from '@/firebase/fire_config';
import { toast } from "react-toastify";
import Loader from '@/components/loader/loader';
import { doc, updateDoc } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBank, faCheck, faFlag, faPhone, faUser, faWallet } from '@fortawesome/free-solid-svg-icons';
import { toCurrency } from '@/components/utils/toCurrency';
import { useRouter } from 'next/router';

export default function UserUpdateModal({ user }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [disableLoading, setDisableLoading] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSuspending, setIsSuspending] = useState(false);
    const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [accountType, setAccountType] = useState("");
    const [accountStatus, setAccountStatus] = useState("");
    const [profit, setProfit] = useState("");
    const [balance, setBalance] = useState("");
    const [deposit, setDeposit] = useState("");

    const onUpdateUser = async event => {
        event.preventDefault();
        setLoading(true);

        const docRef = doc(db, "users", user.email);
        const pinCode = Math.floor(10000 + Math.random() * 9000).toString();

        await updateDoc(docRef, {
            "pinCode": pinCode,
            "username": username.length > 0 ? username : user.username,
            "firstName": firstName.length > 0 ? firstName : user.firstName,
            "lastName": lastName.length > 0 ? lastName : user.lastName,
            "zipCode": zipCode.length > 0 ? zipCode : user.zipCode,
            "phoneNumber": phoneNumber.length > 0 ? phoneNumber : user.phoneNumber,
            "dashboard.accountType": accountType.length > 0 ? accountType : user.dashboard.accountType,
            "accountStatus": accountStatus.length > 0 ? accountStatus : user.accountStatus,
            "dashboard.deposit.profit": profit.length > 0 ? (parseInt(profit) + parseInt(user.dashboard.deposit.profit)).toString() : user.dashboard.deposit.profit,
            "dashboard.balance": balance.length > 0 ? profit.length > 0 ? (parseInt(profit) + parseInt(user.dashboard.balance)).toString() : balance : profit.length > 0 ? (parseInt(profit) + parseInt(user.dashboard.balance)).toString() : user.dashboard.balance,
            "dashboard.deposit.balance": deposit.length > 0 ? deposit : user.dashboard.deposit.balance,
        }).then(async () => {
            if (balance.length > 0 || deposit.length > 0) {
                try {
                    await fetch('/api/deposit', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', },
                        body: JSON.stringify({ email: email, amount: amount }),
                    });

                    toast.success("User Updated!");
                    setLoading(false);
                    router.reload();
                } catch (error) {
                    toast.error(error);
                }
            } else {
                toast.success("User Updated!");
                setLoading(false);
                router.reload();
            }
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
                setLoading(false);
            }
        });
    };

    async function onDisableUser() {
        const docRef = doc(db, 'users', user.email);

        await updateDoc(docRef, { "disable": true }).then(() => {
            toast.success("User Disabled!");
            router.reload();
        });
    }

    async function onEnableUser() {
        const docRef = doc(db, 'users', user.email);

        await updateDoc(docRef, { "disable": false }).then(() => {
            toast.success("User Enabled!");
            router.reload();
        });
    }

    async function onUnverifyUser() {
        setDisableLoading(true);
        const docRef = doc(db, 'users', user.email);

        await updateDoc(docRef, { "dashboard.isVerified": false }).then(() => {
            toast.success("User UnVerified!");
            router.reload();
            setDisableLoading(false);
        });
    }

    async function onVerifyUser() {
        setIsVerifying(true);
        const docRef = doc(db, 'users', user.email);

        await updateDoc(docRef, { "dashboard.isVerified": true }).then(() => {
            toast.success("User Verified!");
            router.reload();
            setIsVerifying(false);
        });
    }


    async function onUnSuspend() {
        setDisableLoading(true);
        const docRef = doc(db, 'users', user.email);

        await updateDoc(docRef, { "disable": false }).then(() => {
            toast.success("User UnVerified!");
            router.reload();
            setDisableLoading(false);
        });
    }

    async function onSuspend() {
        setIsSuspending(true);
        const docRef = doc(db, 'users', user.email);

        await updateDoc(docRef, { "disable": true }).then(() => {
            toast.success("User Verified!");
            router.reload();
            setIsSuspending(false);
        });
    }

    function onDeposit() {
        const docRef = doc(db, "users", user.email);
        const balance = parseInt(user.dashboard.balance);
        const depositBalance = parseInt(user.dashboard.deposit.balance);
        const amount = parseInt(20);

        updateDoc(docRef, {
            "dashboard.balance": `${balance + amount}`,
            "dashboard.deposit.balance": `${depositBalance + amount}`,
        }).then(async () => {
            try {
                await fetch('/api/deposit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify({ email: email, amount: amount }),
                });

                onClearModal();
            } catch (error) {
                toast.error(error);
            }
        }).catch((error) => {
            if (error.code === "not-found") {
                toast.error("User not found");
            } else {
                toast.error(`Something is wrong: ${error.message}`);
            }
        });
    };

    function runUpdateEvery24Hours() {
        toast.success("Depositing $20 every 24hrs!");
        setInterval(async () => onDeposit(), 24 * 60 * 60 * 1000);
    };

    const onClearModal = () => {
        setLoading(false);
        setUsername("");
        setFirstName("");
        setLastName("");
        setZipCode("");
        setPhoneNumber("");
        setAccountType("");
        setAccountStatus("");
        setProfit("");
        setBalance("");
        setDeposit("");

    };

    if (!user) return <div className="modal fade" id="userUpdateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="userUpdateModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">

                </div>
            </div>
        </div>
    </div>

    return (
        <div className="modal fade" id="userUpdateModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="userUpdateModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content" id="modalContent">
                    <div className="modal-header">
                        <h5 className="modal-title" id="userUpdateModalLabel">User Update</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClearModal}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={onUpdateUser}>
                            <div className="row">
                                <div className="col-md-4">
                                    <div>
                                        <FontAwesomeIcon icon={faUser} /> <b>Username</b>
                                        <p>{user.username}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faUser} /> <b>First Name</b>
                                        <p>{user.firstName}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faUser} /> <b>Last Name</b>
                                        <p>{user.lastName}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div>
                                        <FontAwesomeIcon icon={faFlag} /> <b>Zip Code</b>
                                        <p>{user.zipCode}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faPhone} /> <b>Phone Number</b>
                                        <p>{user.phoneNumber}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faWallet} /> <b>Account Type</b>
                                        <p>{user.dashboard.accountType}</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div>
                                        <FontAwesomeIcon icon={faCheck} /> <b>Account Status</b>
                                        <p>{user.accountStatus}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faBank} /> <b>Profit</b>
                                        <p>{toCurrency(user.dashboard.deposit.profit)}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faBank} /> <b>Balance</b>
                                        <p>{toCurrency(user.dashboard.balance)}</p>
                                    </div>
                                </div>
                                {user.pinCode ?
                                    <>
                                        <div className="col-sm-12">
                                            <div>
                                                <b>Withdrawal Code</b>
                                                <p>{user.pinCode}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                    :
                                    <>
                                        <div className="col-12 primary">
                                            No Withdrawal Code yet!
                                        </div>
                                        <hr />
                                    </>
                                }
                            </div>

                            <hr />

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="col-12">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="username"
                                                placeholder="Username"
                                                onChange={(event) => setUsername(event.target.value)}
                                                ref={inputRefs[0]}
                                            />
                                            <label htmlFor="username">Username</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="firstName"
                                                placeholder="First Name"
                                                onChange={(event) => setFirstName(event.target.value)}
                                                ref={inputRefs[1]}
                                            />
                                            <label htmlFor="firstName">First Name</label>
                                        </div>
                                    </div>

                                    <div className="col-12 my-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="lastName"
                                                placeholder="Last Name"
                                                onChange={(event) => setLastName(event.target.value)}
                                                ref={inputRefs[2]}
                                            />
                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="col-12">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="zipcode"
                                                placeholder="Zip Code"
                                                onChange={(event) => setZipCode(event.target.value)}
                                                ref={inputRefs[3]}
                                            />
                                            <label htmlFor="zipcode">Zip Code</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="phoneNumber"
                                                placeholder="Phone Number"
                                                onChange={(event) => setPhoneNumber(event.target.value)}
                                                ref={inputRefs[4]}
                                            />
                                            <label htmlFor="phoneNumber">Phone Number</label>
                                        </div>
                                    </div>

                                    <div className="col-12 my-3">
                                        <div className="form-floating mx-2">
                                            <select
                                                className="form-select"
                                                id="accountType"
                                                onChange={(event) => setAccountType(event.target.value)}
                                                ref={inputRefs[5]}
                                            >
                                                <option selected>STARTER</option>
                                                <option value="BASIC">BASIC</option>
                                                <option value="STANDARD">STANDARD</option>
                                                <option value="CORE">CORE</option>
                                                <option value="ADVANCED">ADVANCED</option>
                                                <option value="PREMIUM">PREMIUM</option>
                                            </select>
                                            <label htmlFor="accountType">Account Type</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="col-12">
                                        <div className="form-floating mx-2">
                                            <select
                                                className="form-select"
                                                id="accountStatus"
                                                onChange={(event) => setAccountStatus(event.target.value)}
                                                ref={inputRefs[6]}
                                            >
                                                <option selected>INACTIVE</option>
                                                <option value="ACTIVE">ACTIVE</option>
                                                <option value="UPGRADE">UPGRADE</option>
                                            </select>
                                            <label htmlFor="accountStatus">Account Status</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="profit"
                                                placeholder="Update Profit"
                                                onChange={(event) => setProfit(event.target.value)}
                                                ref={inputRefs[7]}
                                            />
                                            <label htmlFor="profit">Update Profit</label>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <div className="form-floating mx-2">
                                            <input type="text"
                                                className="form-control"
                                                id="balance"
                                                placeholder="Update Balance"
                                                onChange={(event) => setBalance(event.target.value)}
                                                ref={inputRefs[8]}
                                            />
                                            <label htmlFor="balance">Update Balance</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating mx-2">
                                        <input type="text"
                                            className="form-control"
                                            id="deposit"
                                            placeholder="Update deposit (invested)"
                                            onChange={(event) => setDeposit(event.target.value)}
                                            ref={inputRefs[9]}
                                        />
                                        <label htmlFor="deposit">Update deposit (invested)</label>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className="d-flex justify-content-between">
                                <div>
                                    <button type="button" onClick={user.disable ? onEnableUser : onDisableUser} className={`btn mx-1 ${user.disable ? "btn-warning white" : "btn-danger"}`}>
                                        {disableLoading ? <Loader /> : user.disable ? "Enable User" : "Disable User"}
                                    </button>

                                    <button type="button" onClick={user.dashboard.isVerified ? onUnverifyUser : onVerifyUser} className="btn btn-dark mx-1">
                                        {isVerifying ? <Loader /> : user.dashboard.isVerified ? "Unverify User" : "Verify User"}
                                    </button>

                                    <button type="button" onClick={user.disable ? onUnSuspend : onSuspend} className="btn btn-warning mx-1">
                                        {isSuspending ? <Loader /> : user.disable ? "Unsuspend" : "Suspend"}
                                    </button>
                                </div>

                                <button type="submit" className="btn btn-lg btn-success">
                                    {loading ? <Loader /> : "Save Update"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}