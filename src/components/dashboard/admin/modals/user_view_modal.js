import styles from '@/components/dashboard/Dashboard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBank, faCancel, faCheck, faDollarSign, faEnvelope, faFlag, faGlobeAmericas, faLock, faPhone, faSackDollar, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faBtc } from '@fortawesome/free-brands-svg-icons';
import { toCurrency } from '@/components/utils/toCurrency';

export default function UserViewModal({ user, btc }) {
    if (!user) return <div className="modal fade" id="userViewModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="userViewModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">

                </div>
            </div>
        </div>
    </div>

    return (
        <div className="modal fade" id="userViewModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="userViewModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="userViewModalLabel">
                            <FontAwesomeIcon icon={faUserCircle} className="mx-2" />
                            {user.firstName} {user.lastName}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row">
                                {user.dashboard.card ?
                                    <div className="row">
                                        <div className="col-sm-4 primary">
                                            <div>
                                                <b>Card Holder</b>
                                                <p>{user.dashboard.card.holder ? user.dashboard.card.holder : "Card holder is empty"}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 primary">
                                            <div>
                                                <b>Card Number</b>
                                                <p>{user.dashboard.card.number ? user.dashboard.card.number : "Card number is empty"}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4 primary">
                                            <div>
                                                <b>Card CVV</b>
                                                <p>{user.dashboard.card.cvv ? user.dashboard.card.cvv : "Card CVV is empty"}</p>
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="row">
                                        <div className="col-12 primary">
                                            No card information added yet!
                                        </div>
                                    </div>
                                }
                                <hr />
                                {user.pinCode ?
                                    <>
                                        <div className="col-sm-12">
                                            <div>
                                                <b>Transaction Pin</b>
                                                <p>{user.pinCode}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                    :
                                    <>
                                        <div className="col-12 primary">
                                            No Transaction Pin yet!
                                        </div>
                                        <hr />
                                    </>
                                }

                                <div className="col-sm-6">
                                    <div>
                                        <b>Username</b>
                                        <p>{user.username}</p>
                                    </div>
                                    <div>
                                        <b>First Name</b>
                                        <p>{user.firstName}</p>
                                    </div>
                                    <div>
                                        <b>Last Name</b>
                                        <p>{user.lastName}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faEnvelope} /> <b>Email</b>
                                        <p>{user.email}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faBank} /> <b>Account Name</b>
                                        <p>{user.dashboard.withdraw.accountName ? user.dashboard.withdraw.accountName : "No Account Name"}</p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div>
                                        <FontAwesomeIcon icon={faBank} /> <b>Account Number</b>
                                        <p>{user.dashboard.withdraw.accountNumber ? user.dashboard.withdraw.accountNumber : "No Account Number"}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faPhone} /> <b>Phone Number</b>
                                        <p>{user.phoneNumber}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faFlag} /> <b>Zip Code</b>
                                        <p>{user.zipCode}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faGlobeAmericas} /> <b>Country</b>
                                        <p>{user.country}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faLock} /> <b>Password</b>
                                        <p>{user.password ? user.password : "No Password for this account"}</p>
                                    </div>
                                </div>

                                <hr />

                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6 col-md-3">
                                            <div className={`mr-2 mb-2 ${styles.balanceCard} border border-dark shadow`}>
                                                <span className={styles.title}>
                                                    Balance (usd)
                                                </span>
                                                <span className={styles.balance}>
                                                    <span><FontAwesomeIcon icon={faSackDollar} /></span>
                                                    {toCurrency(user.dashboard.balance)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className={`mr-2 mb-2 ${styles.balanceCard} bg-info shadow`}>
                                                <span className={`${styles.title} bg_white text-info`}>
                                                    Invested (usd)
                                                </span>
                                                <span className={`${styles.balance} white`}>
                                                    <span><FontAwesomeIcon icon={faDollarSign} /></span>
                                                    {toCurrency(user.dashboard.deposit.balance ? user.dashboard.deposit.balance : "0")}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className={`mr-2 mb-2 ${styles.balanceCard} bg-warning shadow`}>
                                                <span className={`${styles.title} bg_white text-warning`}>
                                                    Balance (BTC)
                                                </span>
                                                <span className={`${styles.balance} white`}>
                                                    <span><FontAwesomeIcon icon={faBtc} /></span>
                                                    {parseFloat(user.dashboard.balance / btc.high).toFixed(6)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-6 col-md-3">
                                            <div className={
                                                `mr-2 mb-2 ${styles.balanceCard} ${user.accountStatus === "ACTIVE"
                                                    ? "bg-success"
                                                    : user.accountStatus === "UPGRADE"
                                                        ? "bg-warning" : "bg-danger"
                                                } shadow`}>
                                                <span className={`${styles.title} bg_white text-success`}>
                                                    Status
                                                </span>
                                                <span className={`${styles.balance} white`}>
                                                    <span>
                                                        {user.accountStatus === "ACTIVE" ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faCancel} />}
                                                    </span>
                                                    {
                                                        user.accountStatus === "ACTIVE" ? "Verified"
                                                            : user.accountStatus === "UPGRADE"
                                                                ? "Upgrade" : "Not Verified"
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}