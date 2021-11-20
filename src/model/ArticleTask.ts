type ArticleTask = 'SOURCE_OF_PHOTO' | 'WRITTER' | 'PHOTOGRAPHER' | 'EDITOR'

const ArticleTaskStrMap: Map<ArticleTask, string> = new Map([
    ['SOURCE_OF_PHOTO', '사진 출처'],
    ['WRITTER', '기사 취재 및 작성'],
    ['PHOTOGRAPHER', '사진 촬영'],
    ['EDITOR', '편집']
]);

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace ArticleTask {
    export function getStr(task: ArticleTask): string {
        const taskStr: string = ArticleTaskStrMap.get(task) as string;
        return taskStr;
    }
}

export { ArticleTask };


