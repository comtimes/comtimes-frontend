import { useState, useEffect, ReactElement } from 'react';
// eslint-disable-next-line import/no-unresolved
import Article from 'model/Article';
import ArticleListItemView from './ArticleListItemView';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line import/order
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
                const response: any = await axios.get(
                    'https://37122e49-1e60-4770-b836-4d0b7c9ab008.mock.pstmn.io/api/news?start_idx=0&end_idx=9&order=1'
                );
                setArticles(
                    response.data.data.map(
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (obj: any) => Article.createFromObj(obj)));
                        
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

    return (<>{
        // eslint-disable-next-line react/destructuring-assignment
        articles.map(
            (article: Article) => <ArticleListItemView key={article.id} article={article} />
        )}</>
    );
}