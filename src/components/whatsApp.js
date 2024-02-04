import Image from 'next/image'

export default function WhatsApp() {
    return (
        <div className="position-fixed bottom-0 ms-2 mb-2">
            <a href="https://wa.me/+2349157575590" className='me-2' target="_blank" rel="noreferrer">
                <Image
                    src="/telegram.png"
                    alt="telegram"
                    width={50}
                    height={50}
                    priority={true}
                />
            </a>

            <a href="https://signal.me/#p/+447384270478" target="_blank" rel="noreferrer">
                <Image
                    src="/signal.png"
                    alt="signal"
                    width={50}
                    height={50}
                    priority={true}
                />
            </a>
        </div>
    )
}

