import image from '../../../public/img/auth.png';

export default function Image(): JSX.Element {
    return (
        <div className='h-full relative'>
            <img 
                src={image} 
                alt="Image" 
                className='w-full h-full object-cover'
            />
        </div>
    )
}