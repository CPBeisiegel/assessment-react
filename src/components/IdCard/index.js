import styles from "./styles.module.css"

export function IdCard(props){
    return (
        <div className={styles.cardContainer}>

        <img src={props.picture} alt="portrait"/>   
                <div className={styles.card}>
                    
                    <p>FullName: {props.fullName}</p>
                    
                    <p>Gender: {props.gender}</p>
            
                    <p>Birthday: {props.birthday}</p> 

                </div>          
        </div>
    )
}