import React from 'react'
import styles from './styles.module.css'
import BackIcon from '../../assets/icons/back.svg'
import { useNavigate } from 'react-router-dom'

const Back = () => {
    const navigate = useNavigate()

    return (
        <button className={styles.back} onClick={() => navigate(-1)}>
            <img src={BackIcon} alt="Back" />
        </button>
    )
}

export default Back