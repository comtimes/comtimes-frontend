/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef-init */
/* eslint-disable no-shadow */
import { useState, useEffect, ReactElement, useRef, MutableRefObject } from 'react';
import axios from 'axios';
import Pagination from '../model/Pagination';
import ApiUtil from '../util/ApiUtil';
import Article from '../model/Article';
import ArticleListItemView from './ArticleListItemView';
import PaginationView from './PaginationView';

export default function ArticleListView(): ReactElement {
    const [page, setPage] = useState<number>(1);
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const pagi: MutableRefObject<Pagination | undefined> = useRef<Pagination>();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                setError(null);
                setArticles([]);
                setLoading(true);

                const response: any = await axios.get(ApiUtil.getPageListUrl(page - 1));

                pagi.current = new Pagination(page, response.data.data.totalPages, response.data.data.totalElements, response.data.data.size);

                const articleObjs = Array.from(response.data.data.content);
                setArticles(
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
            } catch (e: any) {
                setError(e);
                console.error(e);
            }
            setLoading(false);
        };
        fetchArticles();
    }, [page]);

    if (loading) return <div>?????????...</div>;
    if (error) return <div>????????? ??????????????????</div>;
    if (!articles) return <>null</>;

    return (
        <div className="wrapper" style={{ position: 'relative', margin: '0 auto', padding: '50px 100px 150px 100px', maxWidth: '1000px' }}>
            {articles.map((article: Article) => (
                <ArticleListItemView key={article.id} article={article} />
            ))}
            <PaginationView pagination={pagi.current} onClick={page => setPage(page)} />
        </div>
    );
}
