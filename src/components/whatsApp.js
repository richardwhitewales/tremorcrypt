import Image from 'next/image'

export default function WhatsApp() {
    return (
        <div className="whatsapp mb-2">
            <a href="https://wa.me/+14152095796" target="_blank" rel="noreferrer">
                <Image
                    src="/whatsapp.png"
                    alt="Whatsapp"
                    width={80}
                    height={80}
                    priority={true}
                />
            </a>
        </div>
    )
}

