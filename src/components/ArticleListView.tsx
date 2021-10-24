import React, { ReactElement } from 'react';
// eslint-disable-next-line import/no-unresolved
import Article from 'model/Article';
import ArticleListItemView from './ArticleListItemView';

interface ArticleListViewProps {
    articleList: Article[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ArticleListView(props: ArticleListViewProps): ReactElement {
    return (<>{
        // eslint-disable-next-line react/destructuring-assignment
        props.articleList.map(
            article => <ArticleListItemView key={article.id} article={article} />
        )}</>
    );
}