"use client"
import React, { useState } from 'react';
import styles from './codeEditor.module.css';
import Window from '../window/window';
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [fontSize, setFontSize] = useState(13);
  const [htmlIsVisible, setHtmlIsVisible] = useState(true);
  const [cssIsVisible, setCssIsVisible] = useState(true);
  const [jsIsVisible, setJsIsVisible] = useState(true); 

  const handleHtmlCodeChange = (event) => {
    setHtmlCode(event.target.value);
  };

  const handleCssCodeChange = (event) => {
    setCssCode(event.target.value);
  };

  const handleJsCodeChange = (event) => {
    setJsCode(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const previewStyle = {
    fontSize: `${fontSize}px`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.codeEditor}>
        <div className={styles.codeEditorHeader}>
          <h1 className={styles.header}>Code Editor</h1>
          <p>This code editor is still under development, you can write, copy and paste html,css, and javascript to the respective text box. At the viewer section,  You can immediatelly view the appearance and behaviour of the codes you inputed in each text boxes. </p>
        </div>

        <div className={styles.codeBox}>
          <div className={styles.HTMLcontainer}>
            <div className={styles.htmlHeader}>
                <div className={styles.containerHeader}>
                    <h2>HTML</h2>
                    <button onClick={() => setHtmlIsVisible(!htmlIsVisible)}> 
                    {htmlIsVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                </div>
            </div>
            
            {htmlIsVisible && ( 
              <div className={styles.codeBoxHtml}>
                <div className={styles.editBoxBG}>
                  <div className={styles.textBoxEditor}>
                    <div className={styles.lineNumbers}>
                      {htmlCode.split('\n').map((_, index) => (
                           <div key={index} className={styles.lineNumber}>
                              {index + 1}
                          </div>
                      ))}
                    </div>
                    <textarea
                      value={htmlCode}
                      onChange={handleHtmlCodeChange}
                      rows="10"
                      className={`${styles.htmlTxt} ${styles.noResize}`}
                      onScroll={(e) => {
                        const textarea = e.target;
                        const lineNumbers = textarea.previousElementSibling;
                        lineNumbers.scrollTop = textarea.scrollTop;
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            )} 
          </div>

          <div className={styles.CSScontainer}>
            <div className={styles.htmlHeader}>
                <div className={styles.containerHeader}>
                    <h2>CSS</h2>
                    <button onClick={() => setCssIsVisible(!cssIsVisible)}> 
                    {cssIsVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                </div>
            </div>
            
            {cssIsVisible && ( 
            <div className={styles.codeBoxHtml}>
              <div className={styles.editBoxBG}>
                <div className={styles.textBoxEditor}>
                  <div className={styles.lineNumbers}>
                    {cssCode.split('\n').map((_, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                  </div>
                  <textarea
                    value={cssCode}
                    onChange={handleCssCodeChange}
                    rows="10"
                    className={`${styles.cssTxt} ${styles.noResize}`}
                  ></textarea>
                </div>
              </div>
            </div>
            )}
          </div>

          <div className={styles.JScontainer}>
            <div className={styles.htmlHeader}>
                <div className={styles.containerHeader}>
                    <h2>JacaScript</h2>
                    <button onClick={() => setJsIsVisible(!jsIsVisible)}> 
                    {jsIsVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                </div>
            </div>

            {jsIsVisible && ( 
            <div className={styles.codeBoxHtml}>
              <div className={styles.editBoxBG}>
                <div className={styles.textBoxEditor}>
                  <div className={styles.lineNumbers}>
                    {jsCode.split('\n').map((_, index) => (
                      <div key={index}>{index + 1}</div>
                    ))}
                  </div>
                  <textarea
                    value={jsCode}
                    onChange={handleJsCodeChange}
                    rows="10"
                    className={`${styles.jsTxt} ${styles.noResize}`}
                  ></textarea>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.editorViewer}>
        <div className={styles.previewContainer}>
          <div className={styles.browserFrame}>
            <div className={styles.browserContent}>
              <iframe
                title="Preview"
                className={styles.previewIframe}
                srcDoc={`<html><head><style>${cssCode}</style></head><body><div style="font-size: ${fontSize}px">${htmlCode}<script>${jsCode}</script></div></body></html>`}
              ></iframe>
            </div>
          </div>
        </div>
                        
        <Window className={styles.browserBG} />
      </div>
    </div>
  );
};

export default CodeEditor;
