import React from 'react'
import styles from './About.module.css'

const About = () => {

    return (
        <div className={styles.about}>
            <div className={styles.description}>
                В работе были применены следующие элементы веб-разработки:
                <ol>
                    <li>React</li>
                    <li>Redux</li>
                    <li>API(themoviedb.org)</li>
                    <li>CSS-modules</li>
                </ol>
                <div className={styles.contacts}>
                <h1>Контакты:</h1>
                    <ul>
                        <li><a href={'https://mail.ru/'}>email: sargsyanmikael@mail.ru</a>
                        </li>
                        <li>
                            <a href={'https://github.com/'}>github:@mickeysss</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
