import styles from '@/components/dashboard/Dashboard.module.css'
import Chart from '@/components/chart/chart';

export default function DashboardGraph() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-5">
                    <div className={`my-3 p-2 ${styles.card}`}>
                        <div className="row">
                            <div className="col-12">
                                <Chart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
