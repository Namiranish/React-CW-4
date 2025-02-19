import style from './Card.module.css'

const Card = ({title, author}) => {
    return(
        <div className={style.container}>
        <h3 className={style.heading}>{title}</h3>
        <p className={style.subHeading}>{author}</p>
        </div>
    )
}

export default Card