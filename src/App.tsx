// eslint-disable-next-line import/no-unresolved
// import ArticleListView from "components/ArticleListView";
// eslint-disable-next-line import/no-unresolved
import ArticleMetaDataView from "components/ArticleMetaDataView";
import ArticleMetaData from "./model/ArticleMetaData";
import ReporterInfo from "./model/ReporterInfo";

function App() {
    const reporterInfo0: ReporterInfo = new ReporterInfo('송지원', 'jiwonsong@miridih.com', 'DIRECTOR', '우히히히힣');
    const reporterInfo1: ReporterInfo = new ReporterInfo('최동인', 'ㅁㄴㅇㄹ@miridih.com', 'EDITTING_MANAGER', '최동최동');
    const reporterInfo2: ReporterInfo = new ReporterInfo('이상현', 'sdfasf@miridih.com', 'MEDIA_MANAGER', '이상이상');
    const reporterInfo3: ReporterInfo = new ReporterInfo('김찬일', 'aaaaa@miridih.com', 'REPORTER', '찬일이');
    const reporterInfo4: ReporterInfo = new ReporterInfo('박지영', 'wrwef@miridih.com', 'REPORTER', '19년도 국장');
    const reporterInfo5: ReporterInfo = new ReporterInfo('안유진', 'ccccc@miridih.com', 'REPORTER', '유진안?');

    const metaData: ArticleMetaData = {
        'SOURCE_OF_PHOTO': [reporterInfo5],
        'WRITTER': [reporterInfo4], 
        'PHOTOGRAPHER': [reporterInfo3, reporterInfo2],
        'EDITOR': {
            'MEDIA_MANAGER': reporterInfo2,
            'EDITTING_MANAGER': reporterInfo1,
            'DIRECTOR': reporterInfo0
        }
    };

  return (
    <div className="App">
      <ArticleMetaDataView 
        sourceOfPhotoReporterInfos ={metaData.SOURCE_OF_PHOTO}
        writterReporterInfos = {metaData.WRITTER}
        photographerReporterInfos = {metaData.PHOTOGRAPHER}
        editorReporterInfos = {Object.values(metaData.EDITOR)}
        />
    </div>
  );
}

export default App;
