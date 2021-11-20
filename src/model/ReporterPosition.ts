type ReporterPosition = 'REPORTER' | 'MEDIA_MANAGER' | 'EDITTING_MANAGER' | 'DIRECTOR';

const ReporterPositionStrMap: Map<ReporterPosition, string> = new Map([
    ['REPORTER', '기자'],
    ['MEDIA_MANAGER', '미디어 팀장'],
    ['EDITTING_MANAGER', '편집 팀장'],
    ['DIRECTOR', '국장']
]);

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace ReporterPosition {
    export function getStr(position: ReporterPosition): string {
        const positionStr: string = ReporterPositionStrMap.get(position) as string;
        return positionStr;
    }
}

export { ReporterPosition };