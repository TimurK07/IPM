import React, { useState } from 'react'
import styles from './styles.module.css'
import SearchIcon from '../../assets/icons/search-2.svg'
import LinkIcon from '../../assets/icons/link.svg'
import DocumentIcon from '../../assets/icons/document.svg'
import CloseIcon from '../../assets/icons/close.svg'
import AddIcon from '../../assets/icons/add.svg'
import LinkFillIcon from '../../assets/icons/link-fill.svg'
import DocumentFillIcon from '../../assets/icons/file.svg'
import Profile from '../../components/Profile/Profile'
import { useNavigate } from 'react-router-dom'

const KnowledgeBase = () => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('')
    const [selectedItems, setSelectedItems] = useState([
        { id: 1, title: 'Кайтен', type: 'link' },
        { id: 2, title: 'Отчет', type: 'document' },
        { id: 3, title: 'Анализ аналогов', type: 'document' },
    ])
    const [modalVisible, setModalVisible] = useState(false)
    const [itemToDelete, setItemToDelete] = useState(null)
    const [addMenuVisible, setAddMenuVisible] = useState(false)

    const handleRemoveItem = (id) => {
        setSelectedItems(selectedItems.filter(item => item.id !== id))
        setModalVisible(false)
        setItemToDelete(null)
    }

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }
    
    const openDeleteModal = (id) => {
        const item = selectedItems.find(item => item.id === id)
        setItemToDelete(item)
        setModalVisible(true)
    }
    
    const toggleAddMenu = () => {
        setAddMenuVisible(!addMenuVisible)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Profile title="@IPMbot" image="" reverse />
            </div>
            <div className={styles.content}>
                <div className={styles.searchContainer}>
                    <div className={styles.searchInputWrapper}>
                        <img src={SearchIcon} alt="Поиск" className={styles.searchIcon} />
                        <input
                            type="text"
                            placeholder="Введите название документа"
                            className={styles.searchInput}
                            value={searchValue}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className={styles.selectedItemsList}>
                        {selectedItems.map(item => (
                            <div key={item.id} className={styles.selectedItem}>
                                <div className={styles.itemLeftPart}>
                                    <img
                                        src={item.type === 'link' ? LinkIcon : DocumentIcon}
                                        alt={item.type}
                                        className={styles.itemIcon}
                                    />
                                    <span className={styles.itemTitle}>{item.title}</span>
                                </div>
                                <div className={styles.removeItemWrapper}>
                                    <button
                                        className={styles.removeButton}
                                        onClick={() => openDeleteModal(item.id)}
                                    >
                                        <img src={CloseIcon} alt="Удалить" className={styles.closeIcon} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className={styles.addButtonContainer}>
                {addMenuVisible && (
                    <div className={styles.addMenu}>
                        <div className={styles.addMenuTitle}>
                            Добавить:
                        </div>
                        <div className={styles.addMenuOptions}>
                            <div className={styles.addMenuOption} onClick={() => navigate('/link')}>
                                <img src={LinkFillIcon} alt="Ссылка" className={styles.addMenuOptionIcon} />
                                <span className={styles.addMenuOptionText}>ссылка</span>
                            </div>
                            <div className={styles.addMenuOption} onClick={() => navigate('/document')}>
                                <img src={DocumentFillIcon} alt="Файл" className={styles.addMenuOptionIcon} />
                                <span className={styles.addMenuOptionText}>файл</span>
                            </div>
                        </div>
                    </div>
                )}
                <button className={styles.addButton} onClick={toggleAddMenu}>
                    <span className={styles.addButtonTitle}>Добавить</span>
                    <img src={AddIcon} alt="Добавить" className={styles.addIcon} />
                </button>
            </div>

            {modalVisible && itemToDelete && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalTitle}>
                            Удалить ссылку "{itemToDelete.title}"?
                        </div>
                        <div className={styles.modalButtons}>
                            <button 
                                className={`${styles.modalButton} ${styles.confirmButton}`}
                                onClick={() => handleRemoveItem(itemToDelete.id)}
                            >
                                Да
                            </button>
                            <button 
                                className={`${styles.modalButton} ${styles.cancelButton}`}
                                onClick={() => setModalVisible(false)}
                            >
                                Нет
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default KnowledgeBase