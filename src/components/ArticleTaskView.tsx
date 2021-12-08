import { ReactElement } from 'react';
import { ArticleTask } from '../model/ArticleTask';
import ReporterInfo from '../model/ReporterInfo';
import ReporterInfoView from './ReporterInfoView';

interface ArticleTaskViewProps {
    articleTask: ArticleTask;
    reporterInfo: ReporterInfo;
};

function AricleTaskView(props: ArticleTaskViewProps): ReactElement {
    const {articleTask, reporterInfo} = props;
    return <div>
        {`${ArticleTask.getStr(articleTask)} : `} <ReporterInfoView reporterInfo={reporterInfo} />
    </div>
}

export default AricleTaskView;