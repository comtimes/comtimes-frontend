export default class ObjectUtil {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static createInstanceFromObject<T extends any>(clazz: new (...args: any[]) => T, obj: any): T {
        // eslint-disable-next-line new-cap
        const instance = new clazz();
        Object.assign(instance, obj);
        return instance;
    }
}