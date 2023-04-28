import { Chart } from 'iconsax-react'

export default function StatisticsModal() {
    return (
        <div className="modal fade" id="statisticsModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="statisticsModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm modal-dialog-centered">
                <div className="modal-content">
                    <div className="alert alert-info bg_primary_15 black text-center">
                        <Chart size="32" color="#02273b" /> Coming Soon!
                    </div>
                </div>
            </div>
        </div>
    )
}