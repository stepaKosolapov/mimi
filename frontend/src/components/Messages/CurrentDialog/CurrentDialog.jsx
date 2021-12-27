import React, {useEffect, useRef} from "react";
import styles from "./CurrentDialog.module.css";
import MessageItem from "./MessageItem/MessageItem";
import NewMessageForm from "./NewMessageForm/NewMessageForm";

const CurrentDialog = ({
                           dialogInfo: {
                               person: {
                                   id: personId,
                                   username: name,
                                   image_src: avatar,
                               },
                           },
                           messages,
                           sendMessage,
                           hostId,
                       }) => {
    let scrolling = useRef();
    
    useEffect(() => {
        scrolling.current.scrollTop = scrolling.current.scrollTopMax;
    }, [messages]);
    
    let onSubmit = (values) => {
        sendMessage(personId, values.messageBody);
    }
    
    return <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.avatarContainer}>
                <img src={avatar} alt='avatar'/>
            </div>
            <div className={styles.nameContainer}>
                <div className={styles.name}>
                    {name}
                </div>
            </div>
            <div className={styles.status}>
                Online
            </div>
        </div>
        <div className={styles.body}>
            <div ref={scrolling} className={styles.messagesContainer}>
                {messages.map((mes) => {
                    return <MessageItem key={mes.id}
                                        messageBody={mes.body}
                                        isIncoming={+mes.sender !== +hostId}/>
                })}
            </div>
            <div className={styles.newMessageForm}>
                <NewMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    
    </div>
}

export default CurrentDialog;