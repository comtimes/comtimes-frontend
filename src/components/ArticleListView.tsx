import { useState, useEffect, ReactElement } from 'react';
import axios from 'axios';
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
                const response: any = await axios.get('https://37122e49-1e60-4770-b836-4d0b7c9ab008.mock.pstmn.io/api/news?start_idx=0&end_idx=9&order=1');
                
                setArticles(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    response.data.data.map((obj: any) => Article.createFromObj(obj))
                );
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (e: any) {
                setError(e);
            }

            setLoading(false);
        };

        fetchArticles();
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!articles) return <>null</>;

    return <>{
        articles.map((article: Article) => <ArticleListItemView key={article.id} article={article} />)
    }</>;
}
