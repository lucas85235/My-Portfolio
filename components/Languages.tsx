import styles from '../styles/Languages.module.css'
import ToolBox from './ToolBox'

export default function Languages() {
  return (
    <div className={styles.container}>

      <ToolBox
        lang={styles.lang} div={styles.div} title="HTML"
        descrition="Para construção da estrutura das páginas"
        color={styles.color1} icon={styles.icon}
      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="CSS"
        descrition="Para estilização das telas"
        color={styles.color2} icon={styles.icon}
      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="Next.js"
        descrition="Para o frontend das minhas aplicações"
        color={styles.color3} icon={styles.icon}

      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="C#"
        descrition="Para a construção dos meus jogos"
        color={styles.color4} icon={styles.icon}

      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="C++"
        descrition="Para o desenvolvimento de emabarcados"
        color={styles.color2} icon={styles.icon}

      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="Json"
        descrition="Para troca de dados entre sistemas"
        color={styles.color1} icon={styles.icon}

      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="Firebase"
        descrition="Para salvar dados e criar sistemas login"
        color={styles.color4} icon={styles.icon}
      />

      <ToolBox
        lang={styles.lang} div={styles.div} title="Solidity"
        descrition="Para fazer contratos inteligentes"
        color={styles.color3} icon={styles.icon}
      />

    </div>
  )
}