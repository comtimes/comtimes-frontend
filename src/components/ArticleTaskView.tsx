import { ReactElement } from "react";
import { ArticleTask } from "../model/ArticleTask";
import ReporterInfo from "../model/ReporterInfo";
import ReporterInfoView from "./ReporterInfoView";

interface ArticleTaskViewProps {
    articleTask: ArticleTask;
    // eslint-disable-next-line react/no-unused-prop-types
    reporterInfo: ReporterInfo;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function AricleTaskView(props: ArticleTaskViewProps): ReactElement {
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    const {articleTask, reporterInfo} = props;
    return <>
        {/* // eslint-disable-next-line react/destructuring-assignment */}
        {`${ArticleTask.getStr(articleTask)} : `}
        <ReporterInfoView reporterInfo={reporterInfo} />
    </>
}

export default AricleTaskView;