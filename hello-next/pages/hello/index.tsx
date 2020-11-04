import styles from './styles.module.scss';

//only possible via styles and use via styles 
//normal import doesnt work with the module.scss only with _app.tsx file
export default function Hello(){
    return(
        <h1 className={styles.green}>Hello World!</h1>
    );
}