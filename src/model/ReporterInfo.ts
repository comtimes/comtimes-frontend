import ObjectUtil from './ObjectUtil';
import { ReporterPosition } from './ReporterPosition';

export default class ReporterInfo {
    // eslint-disable-next-line no-useless-constructor
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly position: ReporterPosition,
        public readonly nameWidthPosition?: string
    ) {}

    public static createFromObj(obj: any): ReporterInfo {
        return ObjectUtil.createInstanceFromObject<ReporterInfo>(this, obj);
    }
}