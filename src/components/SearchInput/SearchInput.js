import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "./SearchInput.module.scss";

const SearchInput = ({ ...rest }) => {
    return (
        <>
        <div className={styles.container}>
        <h1 className={styles.titulos}>CHARACTERS</h1>
        <div className={styles.wrapper}>
            <SearchRounded color="inherit" />
            <input className={styles.input} {...rest} />
        </div>
        </div>
    
        </>
    );
};

export default SearchInput;