/* eslint-disable no-shadow */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router";
import ApiUtil from "../util/ApiUtil";
import Article from "../model/Article";
import MarkdownView from "./MarkdownView";

export default function ArticleDetailView(): ReactElement {

    const { id: paramId } = useParams();
    const postId = Number(paramId || 0);
    const [article, setArticle] = useState<Article>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetchArticle = async (postId: number) => {
            try {
                setError(undefined);
                setArticle(undefined);
                setLoading(true);

                const response: any = await axios.get(`${ApiUtil.GET_NEWS_DETAIL_BY_ID}/${postId}`);
                const { id, postTitle, postSubtitile, postImage, postHtml, postPublishedAt, author, viewCount } = response.data.data;

                setArticle(Article.createFromObj({
                    id,
                    title: postTitle,
                    subtitle: postSubtitile,
                    publishDate: new Date(postPublishedAt),
                    author: author.name,
                    content: postHtml,
                    thumbnail: postImage,
                    likes: 0,
                    views: viewCount
                }));
            } catch (e: any) {
                setError(e);
                console.error(e);
            }

            setLoading(false);
        };

        fetchArticle(postId);
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!article) return <>null</>;

    return (
        <div className="wrapper" style={{position: 'relative', margin: '0 auto', padding: '50px 0 150px 0', maxWidth:'1000px'}}>
            <MarkdownView mdString={article.content} />
        </div>
    );
}