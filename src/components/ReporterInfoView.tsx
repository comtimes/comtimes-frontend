import { ReactElement } from "react";
import { ReporterPosition } from "../model/ReporterPosition";

interface ReporterInfoViewProps {
    name: string;
    position: ReporterPosition;
    // eslint-disable-next-line react/require-default-props
    nameWithPosition?: string;
    email: string;
};

function ReporterInfoView(props: ReporterInfoViewProps): ReactElement {
    // eslint-disable-next-line react/destructuring-assignment
    const nameWithPositionStr : string = props.nameWithPosition || `${props.name} ${ReporterPosition.getStr(props.position)}`;

    return <div>
        <span>{nameWithPositionStr}</span>
        { /* eslint-disable-next-line react/destructuring-assignment */}
        <span>({props.email})</span>
    </div>;
}

export default ReporterInfoView;