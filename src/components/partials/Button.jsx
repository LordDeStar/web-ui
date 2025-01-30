import styles from '../../styles/index.module.scss';
export const Button = ({size, text, click})=>{

    const classes = [styles.btn, styles[size]].join(' ');
    return (

        <button className={classes}>
            {text}
        </button>
    );
}