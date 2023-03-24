import styles from '@/components/dashboard/Dashboard.module.css'

export default function PaymentsModal({ user }) {
    return (
        <div className="modal fade" id="paymentsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="paymentsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="paymentsModalLabel">Payments</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="m-2">
                                    <p className="mb-5">
                                        Select type of payments you would like to perform below;
                                    </p>

                                    <div className="d-flex justify-content-around mb-3">
                                        <button
                                            type="button"
                                            className={`btn btn-lg btn-light bg-white shadow ${styles.qiuck_btn}`}
                                            data-bs-toggle="modal" data-bs-target="#plansModal">
                                            <span>Deposit</span>
                                        </button>
                                        <button
                                            type="button"
                                            className={`btn btn-lg btn_primary black shadow ${styles.qiuck_btn}`}
                                            data-bs-toggle="modal" data-bs-target="#withdrawModal">
                                            <span>Withdraw</span>
                                        </button>
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