"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import { FaPencilAlt, FaRegCopy, FaReply } from "react-icons/fa";
import { RiChatDeleteFill } from "react-icons/ri";
import { CiMinimize1, CiMaximize2, CiCircleMinus } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdAddAPhoto } from "react-icons/md";
import { GrClearOption, GrTextAlignCenter } from "react-icons/gr";
import { BsChatText } from "react-icons/bs";
import { MdFormatListBulleted, MdFormatColorText, MdFormatListNumbered } from "react-icons/md";



const Page = () => {
    const textAreaRef = useRef();
    const [borderRadius, setBorderRadius] = useState('25px');
    const [textAreaHeight, setTextAreaHeight] = useState('auto');
    const [rows, setRows] = useState(1);
    const [isActive, setIsActive] = useState(true);
 
    // const handleFocus = (event) => {
    //     setRows(3);
    //     setBorderRadius('0px');

    //     if (rows > 3) {
    //         setRows(7);
    //         setTextAreaHeight('140px');
    //     } else {
    //         return;
    //     }

    // }

    // const handleBlur = (event) => {
    //     setRows(1);
    //     setBorderRadius('25px');
    //     setTextAreaHeight('30px');
    // }

    const textareaRef = useRef();
    const counterRef = useRef();

    useEffect(() => {
        const handleInput = () => {
            if (counterRef.current) {
                counterRef.current.textContent = `${textareaRef.current.value.length}/100`;
            }
        };

        if (textareaRef.current) {
            textareaRef.current.addEventListener('input', handleInput);
        }

        // Cleanup function to remove the event listener
        return () => {
            if (textareaRef.current) {
                textareaRef.current.removeEventListener('input', handleInput);
            }
        };
    }, []);

    

    const autoGrow = (event) => {
        event.target.style.height = "auto";
        event.target.style.height = (event.target.scrollHeight) + "px";

        const lineCount = event.target.value.split(/\n/).length;

        if (lineCount > 3) {
            setRows(7);
        } else if (lineCount > 1 ) {
            setRows(3);
            setTextAreaHeight('auto');
        } else {
            setRows(lineCount);
        }
    }

    const handleFocus = (event) => {
        setRows(3);
        setBorderRadius('0px');
    }

    const handleBlur = (event) => {
        setRows(1);
        setBorderRadius('25px');
        setTextAreaHeight('30px');
    }

    

return (
    <div className={styles.csWrapper}>
        <div className={styles.csContainer}>
            <div className={styles.csMessageBox}>
                <div className={styles.mbHeader}>
                    <div className={styles.headerTitle}>
                        <h1>Title</h1>
                    </div>
                    <div className={styles.headerControl}>
                        <button>
                            <p><CiMaximize2 /></p>
                        </button>
                        <button>
                            <p><CiCircleMinus /></p>
                        </button>
                    </div>
                </div>

                <div className={styles.mbHistory}>
                    <div className={styles.csMessage}>
                        <div className={styles.CSchatImage}>
                        </div>
                        <div className={styles.chatBubble}>
                            <div className={styles.chatStamp}>
                                <p>Date/ Time</p>
                            </div>
                            <div className={styles.chatText}>
                                <p>Chat Message</p>
                            </div>
                        </div>
                        <div className={styles.chatControlsAdmin}>
                            <button>
                                <p><FaReply /></p>
                            </button>
                            <button>
                                <p><FaRegCopy /></p>
                            </button>
                            <button>
                                <p><FaPencilAlt /></p>
                            </button>
                        </div>
                    </div>

                    <div className={styles.userMessage}>
                        <div className={styles.chatImage}>
                        </div>
                        <div className={styles.chatBubble}>
                            <div className={styles.chatStamp}>
                                <p>Date/ Time</p>
                            </div>
                            <div className={styles.chatText}>
                                <p>Chat Message</p>
                            </div>
                        </div>
                        <div className={styles.chatControls}>
                            <button>
                                <p><FaReply /></p>
                            </button>
                            <button>
                                <p><FaRegCopy /></p>
                            </button>
                            <button>
                                <p><FaPencilAlt /></p>
                            </button>
                        </div>
                    </div>

                    <div className={styles.csMessage}>
                        <div className={styles.CSchatImage}>
                        </div>
                        <div className={styles.chatBubble}>
                            <div className={styles.chatStamp}>
                                <p>Date/ Time</p>
                            </div>
                            <div className={styles.chatText}>
                                <p>Chat Message</p>
                            </div>
                        </div>
                        <div className={styles.chatControlsAdmin}>
                            <button>
                                <p><FaReply /></p>
                            </button>
                            <button>
                                <p><FaRegCopy /></p>
                            </button>
                            <button>
                                <p><FaPencilAlt /></p>
                            </button>
                        </div>
                    </div>

                    <div className={styles.userMessage}>
                        <div className={styles.chatImage}>
                        </div>
                        <div className={styles.chatBubble}>
                            <div className={styles.chatStamp}>
                                <p>Date/ Time</p>
                            </div>
                            <div className={styles.chatText}>
                                <p>Chat Message</p>
                            </div>
                        </div>
                        <div className={styles.chatControls}>
                            <button>
                                <p><FaReply /></p>
                            </button>
                            <button>
                                <p><FaRegCopy /></p>
                            </button>
                            <button>
                                <p><FaPencilAlt /></p>
                            </button>
                        </div>
                    </div>

                    <div className={styles.csMessage}>
                        <div className={styles.CSchatImage}>
                        </div>
                        <div className={styles.chatBubble}>
                            <div className={styles.chatStamp}>
                                <p>Date/ Time</p>
                            </div>
                            <div className={styles.chatText}>
                                <p>Chat Message</p>
                            </div>
                        </div>
                        <div className={styles.chatControlsAdmin}>
                            <button>
                                <p><FaReply /></p>
                            </button>
                            <button>
                                <p><FaRegCopy /></p>
                            </button>
                            <button>
                                <p><FaPencilAlt /></p>
                            </button>
                        </div>
                    </div>

                    <div className={styles.userMessage}>
                        <div className={styles.chatImage}>
                        </div>
                        <div className={styles.chatBubble}>
                            <div className={styles.chatStamp}>
                                <p>Date/ Time</p>
                            </div>
                            <div className={styles.chatText}>
                                <p>Chat Message</p>
                            </div>
                        </div>
                        <div className={styles.chatControls}>
                            <button>
                                <p><FaReply /></p>
                            </button>
                            <button>
                                <p><FaRegCopy /></p>
                            </button>
                            <button>
                                <p><FaPencilAlt /></p>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className={styles.chatSection}>
                    <div className={styles.fileAttch}>
                        <h1>Attachement</h1>
                        <div className={styles.fileDetails}>
                            <p>File Name</p>
                            <div>
                                <p>File type</p>
                                <p>File size</p>
                                <span><CiCircleMinus /></span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mbChatBar}>
                        
                        <div className={styles.mbTextArea}
                            style={{borderRadius: borderRadius}}
                            >
                                                       
                            <textarea 
                                id="msTextarea"
                                type="text" 
                                maxLength="300"
                                rows={rows}
                                onInput={autoGrow}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                ref={textAreaRef}
                                onClick={() => setIsActive(!isActive)}
                                style={{height: textAreaHeight}}
                                />
                            <div id="counter" ref={counterRef}></div>

                            {isActive && ( 
                                <div className={styles.textFormat}>
                                    <button><p><MdFormatColorText /></p></button>    
                                    <button><p><MdFormatListBulleted /></p></button>
                                    <button><p><MdFormatListNumbered /></p></button>
                                    <button><p><IoDocumentAttachOutline /></p></button>
                                    <button><p><MdAddAPhoto /></p></button>
                                    <button><p><GrClearOption /></p></button>
                                </div>
                            )}

                            
                        </div>
                        <div className={styles.mbSendBtn}>
                            <button>
                                <p><BsChatText /></p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={styles.csBubbleHead}>
                <div className={styles.bhControl}>
                    <button>
                        <p><CiMinimize1 /></p>
                    </button>
                    <button>
                        <p><CiCircleMinus /></p>
                    </button>
                </div>
                <div className={styles.bhImg}>
                    IMAGE here
                </div>
            </div> */}
        </div>
    </div>
);
}
export default Page;


