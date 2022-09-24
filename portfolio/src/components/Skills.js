import styles from './css/Skills.module.css';

function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <section style={{ marginBottom: '30px' }}>
          <h2 className={styles.skills}>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
          </ul>
        </section>
        <secttion>
          <h2 className={styles.certification}>Certification</h2>
          <ul>
            <li>GTQ 그래픽기술자격 1급</li>
            <li>정보처리기사</li>
          </ul>
        </secttion>
      </div>
      <div className={styles.right}>
        <section>
          <h2 className={styles.tools}>Tools</h2>
          <ul>
            <li>Git</li>
            <li>Figma</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Skills;
