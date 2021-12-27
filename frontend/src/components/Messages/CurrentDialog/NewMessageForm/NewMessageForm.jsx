import {memo} from 'react';
import styles from "./NewMessageForm.module.css";
import {ReactComponent as LogoSvg} from "assets/images/logo.svg";
import SmartSVG from "components/common/SmartSVG/SmartSVG";
import {useForm} from "react-hook-form";


const NewMessageForm = ({onSubmit}) => {
    const {register, handleSubmit, reset} = useForm();
    return <form onSubmit={handleSubmit((...args)=>{
        reset();
        onSubmit(...args);
    })}>
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <textarea className={styles.textBody}
                       placeholder='Say something...'
                       {...register("messageBody", {required:true, maxLength:200})}/>
            </div>
            <div className={styles.submitContainer}>
                <button className={styles.submit} type="submit">
                    <SmartSVG SvgComponent={LogoSvg} color={'var(--color5)'}/>
                </button>
            </div>
        </div>
    </form>
}

export default memo(NewMessageForm);