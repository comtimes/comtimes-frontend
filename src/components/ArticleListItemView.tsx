import React from 'react';

interface ArticleListItemViewProps {
  title: string;
  subtitle: string;
  publishDate: Date;
  // todo: 일단은 string으로 타입 하는데, 나중엔 User 클래스로 처리해야 함
  author: string;
  summary: string;
  thumbnail: string;
}

function ArticleListItemView(props: ArticleListItemViewProps): React.ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, subtitle, publishDate, author, summary, thumbnail } = props;
  return (
    <div>
      {/* 아래 부분 '섹션'에 대한 정보가 나와야 하나, 아직 백엔드와 해당 데이터에 대한 고민을 하지 못해 일단 비워놓음  */}
      {/* <div>{props.section} </div> */}
      <div className="title"> {title} </div>
      <div className="author">{author}</div>
      {/* todo: 아래 발행일자 부분 일단은 toString() 처리하고 넘어가는데, 나중엔 DateUtil 만들어서 함수 만들어야 함 */}
      <div className="publish_date">{publishDate.toString()}</div>
    </div>
  );
}

export default ArticleListItemView;
