/* eslint-disable array-callback-return */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/destructuring-assignment */
import { ArticleTask } from "../model/ArticleTask";
import ReporterInfo from "../model/ReporterInfo";
import ReporterInfoView from "./ReporterInfoView";
import ArticleTaskView from "./ArticleTaskView";

interface ArticleMetaDataViewProps {
    sourceOfPhotoReporterInfos: ReporterInfo[];
    writterReporterInfos: ReporterInfo[];
    photographerReporterInfos: ReporterInfo[];
    editorReporterInfos: ReporterInfo[];
}

const makeArticleTaskInfoView = ( articleTask: ArticleTask, reporters: ReporterInfo[]) => {
    // eslint-disable-next-line array-callback-return
    return <>
        {
            reporters.map((reporterInfo, index) => 
            // eslint-disable-next-line no-unused-expressions
            index === 0 
                ? <ArticleTaskView articleTask={articleTask} reporterInfo={reporterInfo} />
                : <div> <ReporterInfoView reporterInfo={reporterInfo} /> </div>
            )
        }
        <br/>
        <br/>
    </>;
};

export default function ArticleMetaDataView({ sourceOfPhotoReporterInfos, writterReporterInfos, photographerReporterInfos, editorReporterInfos }: ArticleMetaDataViewProps): JSX.Element {
    return <div style={{textAlign: "right"}}>
        { !!sourceOfPhotoReporterInfos.length ? makeArticleTaskInfoView('SOURCE_OF_PHOTO', sourceOfPhotoReporterInfos) : null }
        { !!writterReporterInfos.length ? makeArticleTaskInfoView('WRITTER', writterReporterInfos) : null }
        { !!photographerReporterInfos.length ? makeArticleTaskInfoView('PHOTOGRAPHER', photographerReporterInfos) : null }
        { !!editorReporterInfos.length && makeArticleTaskInfoView('EDITOR', editorReporterInfos) }
    </div>;    
}
