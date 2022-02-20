import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import Article from "../model/Article";
import MarkdownView from "./MarkdownView";

interface ArticleDetailViewProps {
    articleIdx: number;
}

export default function ArticleDetailView(props: ArticleDetailViewProps): ReactElement {

    const [article, setArticle] = useState<Article>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetchArticle = async (articleId: number) => {
            try {
                setError(undefined);
                setArticle(undefined);
                setLoading(true);

                // const response: any = await axios.get(`~~~~/${articleId}`);
                const response: any = {};

                // setArticle(Article.createFromObj(response.data.data.article));
                setArticle(Article.createFromObj({
                    id: 1,
                    title: '안녕하세요우. 기사 MOCK 데이터 입니다',
                    subtitle: '부제목입네다',
                }));
            } catch (e: any) {
                setError(e);
            }

            setLoading(false);
        };

        fetchArticle(props.articleIdx);
    }, []);

    if (loading) return <div>로딩중...</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!article) return <>null</>;

    const tempMdString = "# Insertion Sort Pseudocode\n\n개념 : **이미 정렬되어 있는 임시 배열?에** 있고, 현재 원소의 적절한 위치에 **`삽입`** 하는 정렬\n제자리 정렬 중 하나\n\n>`제자리 정렬(in-place sorting)`\ninput으로 전달받은 정렬할 배열 외의 추가 메모리를 요구하지 않는 정렬\n## 강의 예제 코드\n![스크린샷 2022-02-08 오후 10 42 11](https://user-images.githubusercontent.com/13375734/152999145-8c2f90ef-4bbd-4b14-85c6-550d72596c44.jpg)\n\n#### 개선해야 할 점\n- 변수명을 minValIdx 보다는 lowest 가 더 적절한 것 같다\n- swap 함수를 항상 호출하는 것이 아닌, i와 minValIdx 값이 다를때만 swap 함수를 호출하자\n";

    return (
        <div className="wrapper" style={{position: 'relative', margin: '0 auto', padding: '50px 0 0 150px', maxWidth:'1000px'}}>
            <MarkdownView mdString={tempMdString} />
        </div>
    );
}