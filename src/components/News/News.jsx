import p from './News.module.css'

const News = (props) => {
    return (
        <div className={p.body}>
            {props.news.map(news =>
                <div>
                    <h2 className={p.title}>{news.title}</h2>
                    <p className={p.body} >{news.body}</p>
                </div>
            )}
        </div>
    )
}

export default News;