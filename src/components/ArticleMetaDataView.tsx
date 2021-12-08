import { ArticleTask } from '../model/ArticleTask';
import ReporterInfo from '../model/ReporterInfo';
import ReporterInfoView from './ReporterInfoView';
import ArticleTaskView from './ArticleTaskView';

interface ArticleMetaDataViewProps {
    sourceOfPhotoReporterInfos: ReporterInfo[];
    writterReporterInfos: ReporterInfo[];
    photographerReporterInfos: ReporterInfo[];
    editorReporterInfos: ReporterInfo[];
}

const makeArticleTaskInfoView = (articleTask: ArticleTask, reporters: ReporterInfo[]) => {
    return <>
        {reporters.map((reporterInfo, index) =>
            index === 0 
                ? <ArticleTaskView articleTask={articleTask} reporterInfo={reporterInfo} />
                : <div> <ReporterInfoView reporterInfo={reporterInfo} /> </div>
            )
        }
        <br />
        <br />
    </>;
};

export default function ArticleMetaDataView(props: ArticleMetaDataViewProps): JSX.Element {
    const { sourceOfPhotoReporterInfos, writterReporterInfos, photographerReporterInfos, editorReporterInfos } = props;
    
    return <div style={{ textAlign: 'right' }}>
        {sourceOfPhotoReporterInfos.length ? makeArticleTaskInfoView('SOURCE_OF_PHOTO', sourceOfPhotoReporterInfos) : null}
        {writterReporterInfos.length ? makeArticleTaskInfoView('WRITTER', writterReporterInfos) : null}
        {photographerReporterInfos.length ? makeArticleTaskInfoView('PHOTOGRAPHER', photographerReporterInfos) : null}
        {!!editorReporterInfos.length && makeArticleTaskInfoView('EDITOR', editorReporterInfos)}
    </div>;
}
