import ReporterInfo from './ReporterInfo'

type ArticleEditorMetaData = {
    'MEDIA_MANAGER': ReporterInfo;
    'EDITTING_MANAGER': ReporterInfo;
    'DIRECTOR': ReporterInfo;
}

type ArticleMetaData = {
  'SOURCE_OF_PHOTO': ReporterInfo[];
  'WRITTER': ReporterInfo[];
  'PHOTOGRAPHER': ReporterInfo[];
  'EDITOR': ArticleEditorMetaData;
};

export default ArticleMetaData;
