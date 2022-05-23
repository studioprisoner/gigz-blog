import Link from 'next/link';
import Image from 'next/image';
import ImageWithTheme from './ImageWithTheme';


const CustomLink = (props) => {
    const href = props.href;
    const isInternalink = href && (href.startsWith('/') || href.startsWith('#'));

    if (isInternalink) {
        return (
            <Link href={href}>
                <a {...props}>{props.children}</a>
            </Link>
        );
    }

    return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
    return <Image alt={props.alt} className='rounded-lg' {...props} />
}

function Callout(props) {
    return (
        <div className='flex bg-gray rounded-lg p-4'>
            <div className='flex items-center w-4 mr-4'>{props.emoji}</div>
            <div className='w-full callout'>{props.children}</div>
        </div>
    );
}

const useMDXComponents = {
    Image: RoundedImage,
    ImageWithTheme,
    a: CustomLink,
    Callout,
};

export default useMDXComponents;