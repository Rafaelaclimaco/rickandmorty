import styles from './Organizer.module.scss';
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";

const orderBy = (characters, direction) => {
  if (direction === 'asc'){
    return [...characters].sort((a,b) => (a.name > b.name ? 1 : -1));
  }
   
  if (direction === 'desc'){
    return [...characters].sort((a,b) => (a.name > b.name ? -1 : 1));
  }

  return characters;
};

const Organizer = ({ characters }) => {
  const orderedcharacters = orderBy(characters, "desc");
  
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>NAME</div>
          <div className={styles.heading_arrow}>
          <KeyboardArrowDownRounded />
          </div>
        </button>

        <button className={styles.heading_planets}>
          <div>PLANETS</div>
          <div className={styles.heading_arrow}>
          </div>
        </button>

        <button className={styles.heading_species}>
          <div>SPECIES</div>
          <div className={styles.heading_arrow}>
          </div>
        </button>

      </div>
    </div>
  );
}





export default Organizer;

