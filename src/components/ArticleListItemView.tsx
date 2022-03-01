import { ReactElement } from 'react';
import Article from '../model/Article';

interface ArticleListItemViewProps {
    article: Article;
}

function ArticleListItemView(props: ArticleListItemViewProps): ReactElement {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line react/destructuring-assignment
    const { title, author, content, thumbnail } = props.article;
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '1000px',
                minWidth: '600px',
                marginBottom: '30px',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start'
            }}
        >
            <div
                className="article_info"
                style={{
                    width: '80%',
                    maxHeight: '200px',
                }}
            >
                {/* 아래 부분 '섹션'에 대한 정보가 나와야 하나, 아직 백엔드와 해당 데이터에 대한 고민을 하지 못해 일단 비워놓음  */}
                {/* <div>{props.section} </div> */}
                <h2>{title}</h2>
                <div
                    className="summary"
                    style={{
                        height: '80px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {content}
                </div>
                <div className="article_info_footer" style={{ display: 'flex' }}>
                    <span className="author">기사 작성자 : [{author}]</span>
                    &nbsp; &nbsp; &nbsp;
                    {/* todo: 아래 발행일자 부분 일단은 toString() 처리하고 넘어가는데, 나중엔 DateUtil 만들어서 함수 만들어야 함 */}
                    {/* todo: postman 결과가 publishDate 객체가 아닌 created_at 문자열로 나오는 것 같다 -> 수정해야할 듯 */}
                    {/* <span className='publish_date'>{publishDate.toString()}</span> */}
                    <span className="publish_date">{new Date().toString()}</span>
                </div>
            </div>
            <div
                className="article_thumbnail"
                style={{
                    width: '200px',
                    height: '200px',
                }}
            >
                <img src={thumbnail} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
        </div>
    );
}

export default ArticleListItemView;
