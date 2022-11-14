import styles from '../styles/Languages.module.css'
import ToolBox from './ToolBox'

export default function Languages() {
  return (
    <div className={styles.container}>

      <ToolBox
        lang={styles.lang} div={styles.div} title="HTML"
        descrition="To build the page structure"
        color={styles.color1} icon={styles.icon}
      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="CSS"
        descrition="For styling my web pages"
        color={styles.color1} icon={styles.icon}
      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="C++"
        descrition="For the development of embedded"
        color={styles.color2} icon={styles.icon}
      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="C#"
        descrition="For the construction of my games"
        color={styles.color2} icon={styles.icon}
      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="Next.js"
        descrition="To the frontend of my applications"
        color={styles.color3} icon={styles.icon}
      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="Json"
        descrition="To exchange data between systems"
        color={styles.color3} icon={styles.icon}

      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="Firebase"
        descrition="To save data and create login systems"
        color={styles.color4} icon={styles.icon}
      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="Solidity"
        descrition="To make smart contracts"
        color={styles.color4} icon={styles.icon}
      />

    </div>
  )
}