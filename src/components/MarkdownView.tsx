import { marked } from 'marked';

export interface MarkdownViewProps {
    mdString: string;
}

export default function MarkdownView(props: MarkdownViewProps): JSX.Element {
    const innerHtml = {
        // eslint-disable-next-line react/destructuring-assignment
        __html: marked.parse(props.mdString)
    };
    // dangerouslySetInnerHTML 사용하는 구조가 좋아 보이진 않는데, dangerouslySetInnerHTML 말고 다른 방법 있는지 한번 알아보기..
    // eslint-disable-next-line react/no-danger
    return <div dangerouslySetInnerHTML={innerHtml} />;
}