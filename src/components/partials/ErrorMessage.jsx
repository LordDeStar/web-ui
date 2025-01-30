import styles from '../../styles/index.module.scss'

const errorClasses = [styles.error, styles.left_slide].join(' ');
export const ErrorMessage = ({message}) =>{
    return (
        <div className={errorClasses}>
            Error: {message}
        </div>
    );
}