import styles from '../../styles/index.module.scss';

const successClasses = [styles.success, styles.left_slide].join(' ');

export const SuccessMessage = ({message})=>{
    return (
        <div className={successClasses}>
            Success: {message}
        </div>
    );
}