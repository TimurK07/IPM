import { useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import ViewWrapper from '../../components/ViewWrapper/ViewWrapper'
import Profile from '../../components/Profile/Profile'
import DateComponent from '../../components/Date/Date'
import TaskTracker from '../../components/TaskTracker/TaskTracker'

import Button from '../../shared/ui/Button/Button'

import StatsIcon from '../../assets/icons/stats.svg'
import StatsReportIcon from '../../assets/icons/stats-report.svg'
import MegaphoneIcon from '../../assets/icons/megaphone.svg'
import ChatIcon from '../../assets/icons/chat-lines.svg'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <DateComponent />
            <ViewWrapper
                title="Статистика по задачам"
                icon={StatsIcon}
                subtitle="8/9"
                ContentTitle="Задачи поставили:"
                onClick={() => navigate('/tasks')}
            />
            <ViewWrapper
                title="Статистика по дейли"
                icon={StatsReportIcon}
                subtitle="6/9"
                ContentTitle="Дейли написали:"
                onClick={() => navigate('/daily')}
            />

            <div className={styles.buttons}>
                <Button text="Создать рассылку" icon={MegaphoneIcon} iconRight onClick={() => navigate('/mailing')} />
                <Button text="Написать в группу" icon={ChatIcon} iconRight onClick={() => navigate('/group-chat')} />
            </div>
        </div>
    )
}

export default Home
