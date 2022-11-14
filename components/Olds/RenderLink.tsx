import Image from 'next/image'
import Link from 'next/link'

interface RenderLinkProps {
    link: string 
    render: string
    image: string
    width: string
    height: string
}

export default function RenderLink(props: RenderLinkProps) {
    return (
        <div>
            <Link href={props.link}>
                <a target="_blank">
                    <div className={props.render}>
                        <Image className={props.render} src={props.image} alt="" width={props.width} height={props.height} />
                    </div>
                </a>
            </Link>
        </div>
    )
}
