import React, { useRef, useState } from 'react'
import styles from './styles.module.css'
import Back from '../../components/Back/Back'
import fileIcon from '../../assets/icons/file-white.svg'

const Document = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      setFileSize(`${(file.size / 1024).toFixed(1)} КБ`);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Back />
          <div className={styles.headerTitle}>
            Файл
            <img src={fileIcon} alt="" className={styles.headerIcon} />
          </div>
          <div></div>
        </div>
        <div className={styles.content}>
          <div className={styles.InputsWrapper}>
            <div className={styles.InputWrapper}>
              <label htmlFor="" className={styles.InputLabel}>Название</label>
              <input type="text" placeholder="Придумайте название" className={styles.Input} />
            </div>
            <div className={styles.InputWrapper}>
              <label htmlFor="" className={styles.InputLabel}>Описание</label>
              <input type="text" placeholder="Напишите описание" className={styles.Input} />
            </div>
            <div className={styles.InputWrapper}>
              <label className={styles.InputLabel}>Загрузите файл</label>
              <div className={styles.uploadArea} onClick={handleClick}>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                {!fileName ? (
                  <>
                    <img src={fileIcon} alt="" className={styles.fileIcon} />
                    <div className={styles.fileText}>файл</div>
                  </>
                ) : (
                  <div className={styles.fileInfo}>
                    <div className={styles.fileName}>{fileName}</div>
                    <div className={styles.fileSize}>{fileSize}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.addButton}>Добавить файл</button>
          <button className={styles.deleteButton}>Удалить файл</button>
        </div>
      </div>
    </>
  )
}

export default Document