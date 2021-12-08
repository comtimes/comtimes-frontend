import { ReactElement } from 'react';
import Article from '../model/Article';

interface ArticleListItemViewProps {
    article: Article;
}

function ArticleListItemView(props: ArticleListItemViewProps): ReactElement {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line react/destructuring-assignment
    const { title, publishDate, author } = props.article;
    return (
        <div>
            {/* 아래 부분 '섹션'에 대한 정보가 나와야 하나, 아직 백엔드와 해당 데이터에 대한 고민을 하지 못해 일단 비워놓음  */}
            {/* <div>{props.section} </div> */}
            <div className='title'>{title}</div>
            <div className='author'>{author}</div>
            {/* todo: 아래 발행일자 부분 일단은 toString() 처리하고 넘어가는데, 나중엔 DateUtil 만들어서 함수 만들어야 함 */}
            {/* todo: postman 결과가 publishDate 객체가 아닌 created_at 문자열로 나오는 것 같다 -> 수정해야할 듯 */}
            {/* <div className='publish_date'>{publishDate.toString()}</div> */}
        </div>
    );
}

export default ArticleListItemView;
