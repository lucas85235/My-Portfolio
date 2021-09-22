import Image from 'next/image'

interface ToolBoxProps {
  lang: string
  div: string
  title: string
  descrition: string
  color: string
  icon: string
}

export default function ToolBox(props: ToolBoxProps) {
  return (
    <div className={props.color}>
      <div className={props.lang}>
        <div className={props.icon}>
          <Image src="/Media/code.png" alt="icon" width="45px" height="45px" />
        </div>
        <h2>{props.title}</h2>
        <div className={props.div}>
          <h3>{props.descrition}</h3>
        </div>
      </div>
    </div>
  )
}