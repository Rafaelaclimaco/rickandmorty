import styles from './Organizer.module.scss';


const Organizer = () => {
 
  
  return (
    <div>
      <div className={styles.heading}>
        <div className={styles.heading_name}>
          <div>NAME</div>

        </div>

        <div className={styles.heading_planets}>
          <div>PLANETS</div>
        </div>

        <div className={styles.heading_species}>
          <div>SPECIES</div>
        </div>

      </div>
    </div>
  );
}





export default Organizer;

