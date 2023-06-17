"use client"

import React, { useState } from 'react';
import styles from './upload.module.css';
import { AiOutlineCloudUpload, AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai';

const UploadSection = () => {
  const [progressList, setProgressList] = useState([]);
  const [completedFiles, setCompletedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    const updatedProgressList = [];

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        let fileName = file.name;

        if (fileName.length >= 12) {
          const splitName = fileName.split(".");
          fileName = splitName[0].substring(0, 12) + "... ." + splitName[1];
        }

        updatedProgressList.push({ name: fileName, progress: 0, size: "" });

        uploadFile(file, fileName);
      }
    }

    setProgressList(updatedProgressList);
  };

  const uploadFile = (file, name) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/mlekqlww");

    xhr.upload.addEventListener("progress", ({ loaded, total }) => {
      const fileLoaded = Math.floor((loaded / total) * 100);
      const fileTotal = Math.floor(total / 1000);
      let fileSize;

      if (fileTotal < 1024) {
        fileSize = fileTotal + " KB";
      } else {
        fileSize = (loaded / (1024 * 1024)).toFixed(2) + " MB";
      }

      setProgressList((prevList) => {
        const updatedList = prevList.map((item) => {
          if (item.name === name) {
            return {
              ...item,
              progress: fileLoaded,
              size: fileSize,
            };
          }
          return item;
        });

        return updatedList;
      });

      if (loaded === total) {
        setProgressList((prevList) =>
          prevList.filter((item) => item.name !== name)
        );
        setCompletedFiles((prevFiles) => [...prevFiles, { name, size: fileSize }]); // Add completed file to completedFiles state
      }
    });

    const formData = new FormData();
    formData.append("file", file);

    xhr.send(formData);
  };

  const handleDeleteFile = (name) => {
    setCompletedFiles((prevFiles) =>
      prevFiles.filter((file) => file.name !== name)
    );
  };

  return (
    <div className={styles.uploadWrapper}>
      <div className={styles.uploadForm}>
        <label htmlFor="fileInput" className={styles.uploadButton}>
          <AiOutlineCloudUpload />
          <p className={styles.uploadText}>Browse File/s to Upload</p>
        </label>
        <input
          type="file"
          id="fileInput"
          className={styles.fileInput}
          name="file"
          multiple
          onChange={handleFileInputChange}
        />
      </div>
      {progressList.length > 0 && (
        <ul className={styles.uploadedArea}>
          {progressList.map((item, index) => (
            <li className={styles.uploadRow} key={index}>
              <div className={styles.uploadContent}>
                <div className={styles.uploadDetails}>
                  <span className={styles.uploadName}>
                    {item.name} • {item.progress === 100 ? 'Uploaded' : 'Uploading'}
                  </span>
                  {item.progress === 100 && (
                    <button
                      className={styles.deleteButton}
                      onClick={() => handleDeleteFile(item.name)}
                    >
                      <AiOutlineDelete />
                    </button>
                  )}
                </div>
                <span className={styles.uploadPercent}>{item.progress}%</span>
              </div>
              <div
                className={styles.progressBar}
                style={{ width: `${item.progress}%` }}
              >
                <div className={styles.progress}></div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {completedFiles.length > 0 && (
        <div className={styles.completedFiles}>
          <h3>Completed Files:</h3>
          <ul>
            {completedFiles.map((file, index) => (
              <li key={index}>
                <div className={styles.completedFilename}>
                    {file.name} ({file.size})
                </div>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteFile(file.name)}
                >
                  <AiOutlineDelete />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadSection;
