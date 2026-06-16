import Link from 'next/link';
import Image from 'next/image';

interface CardProperties {
    image? : string;
    imageAlt? : string;
    title: string;
    body: string;
    href?: string;
    review?: string;
    artistProducts?: string;
}

export default function Card({ image, imageAlt, title, body, href, review, artistProducts }: CardProperties){
    const cardContent = (
        <div className="bg-background border-4 border-darkcontrast p-6 shadow-[6px_6px_0px_0px_rgba(26,26,26,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(26,26,26,0.5)] transition-shadow">
            {image && (
                <div className="border-4 border-darkcontrast mb-4 overflow-hidden">
                    <Image src={image} alt={imageAlt || title} width={400} height={300} className="w-full h-auto" />
                </div>
            )}
            <h3 className="text-2xl font-bold text-darkcontrast mb-3 border-b-4 border-primary pb-2">{title}</h3>
            <p className="text-darkcontrast text-base leading-relaxed block">{body}</p>
            {(review) && (<Link href={review} className="block text-center border-4 border-darkcontrast bg-primary text-white m-4 px-1 py-1 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow">Leave Review</Link>)}
            {(artistProducts) && (<Link href={`/shop?search=${artistProducts}`} className="block text-center border-4 border-darkcontrast bg-primary text-white m-4 px-1 py-1 font-bold hover:shadow-[4px_4px_0px_0px_rgba(26,26,26,0.3)] transition-shadow">See Creations</Link>)}
        </div>
    );

    if (href) {
        return <Link href={href}>{cardContent}</Link>;
    }

    return cardContent;
}