import styles from './css/Skills.module.css';

function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div style={{ marginBottom: '30px' }}>
          <h2 className={styles.skills}>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
            <li>REACT-NATIVE</li>
          </ul>
        </div>
        <div>
          <div>
            <h2 className={styles.certification}>Certification</h2>
            <ul>
              <li>GTQ 그래픽기술자격 1급</li>
              <li>정보처리기사</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.tools}>Tools</h2>
        <ul>
          <li>Git</li>
          <li>Figma</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
