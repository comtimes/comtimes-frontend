import { useState, useEffect, ReactElement } from 'react';
import axios from 'axios';
import ApiUtil from '../util/ApiUtil';
import Article from '../model/Article';
import ArticleListItemView from './ArticleListItemView';

export default function ArticleListView(): ReactElement {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setError(null);
                setArticles([]);
                setLoading(true);

                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const response: any = await axios.get(ApiUtil.getPageListUrl(0));
                const articleObjs = Array.from(response.data.data.content);
                
                setArticles(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    articleObjs.map((obj: any) => {
                        const { id, postTitle, postImage, postHtml, author, viewCount } = obj;
                        return Article.createFromObj({
                            id,
                            title: postTitle,
                            author: author.name,
                            content: postHtml,
                            thumbnail: postImage,
                            likes: 0,
                            views: viewCount
                        });
                    })
                );            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (e: any) {
                setError(e);
                console.error(e);
            }

            setLoading(false);
        };

        fetchArticles();
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!articles) return <>null</>;

    return (
        <div className="wrapper" style={{ position: 'relative', margin: '0 auto', padding: '50px 100px 150px 100px', maxWidth: '1000px' }}>
            {articles.map((article: Article) => (
                <ArticleListItemView key={article.id} article={article} />
            ))}
        </div>
    );
}
