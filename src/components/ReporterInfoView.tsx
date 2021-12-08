import { ReactElement } from 'react';
import ReporterInfo from '../model/ReporterInfo';
import { ReporterPosition } from '../model/ReporterPosition';

interface ReporterInfoViewProps {
    reporterInfo: ReporterInfo;
};

function ReporterInfoView(props: ReporterInfoViewProps): ReactElement {
    // eslint-disable-next-line react/destructuring-assignment
    const {name, email, position, nameWithPosition} = props.reporterInfo;
    const nameWithPositionStr : string = nameWithPosition || `${name} ${ReporterPosition.getStr(position)}`;

    return <>
        <span>{nameWithPositionStr}</span> <span>({email})</span>
    </>;
}

export default ReporterInfoView;