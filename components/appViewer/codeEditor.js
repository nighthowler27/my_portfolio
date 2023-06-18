"use client"
import React, { useState } from 'react';
import styles from './codeEditor.module.css';

const CodeEditor = ()  => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [fontSize, setFontSize] = useState(13);

  function updatePreview() {
    // No need to manipulate the DOM directly
    // Instead, set the state variables to trigger a re-render
  }

  function changeFontSize(event) {
    setFontSize(event.target.value);
  }

  const previewStyle = {
    fontSize: `${fontSize}px`,
  };

  return (
    <div className={styles.container}>

        <div className={styles.codeEditor}>
            <div>
                <h1 className={styles.header}>Code Editor</h1>
            </div>

            <div className={styles.codeBox}>
                <div className={styles.codeBoxHtml}>
                    <h2 className={styles.htmlHeader}>HTML</h2>
                    <textarea
                    value={htmlCode}
                    onChange={(e) => setHtmlCode(e.target.value)}
                    rows="10"
                    className={styles.htmlTxt}
                    ></textarea>
                </div>

                <div className={styles.codeBoxCss}>
                    <h2 className={styles.cssHeader}>CSS</h2>
                    <textarea
                    value={cssCode}
                    onChange={(e) => setCssCode(e.target.value)}
                    rows="10"
                    className={styles.cssTxt}
                    ></textarea>
                </div>

                <div className={styles.codeBoxJs}>
                    <h2 className={styles.jsHeader}>JavaScript</h2>
                    <textarea
                    value={jsCode}
                    onChange={(e) => setJsCode(e.target.value)}
                    rows="10"
                    className={styles.jsTxt}
                    ></textarea>
                </div>
            </div>
        </div>

      <div className={styles.editorViewer}>

        <div>
            <h2 className={styles.viewerHeader}>Preview</h2>
        </div>

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
      </div>
{/* 
      <button onClick={updatePreview} className={styles.prevBtn}>
        Update Preview
      </button> */}
    </div>
  );
}

export default CodeEditor;
