import { connect } from "react-redux";
import News from './News'

export const mapStateToProps = (state) => {
    return {
        news: state.newsPage.news
    }
};

export const mapDispatchToProps = () => {};

const NewsContainer = connect (mapStateToProps, mapDispatchToProps)(News)

export default NewsContainer;