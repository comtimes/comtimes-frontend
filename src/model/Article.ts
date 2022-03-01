/* eslint-disable no-useless-constructor */
import ObjectUtil from "./ObjectUtil";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class Article {
  constructor(
    public id: number,
    public title: string,
    public author: string, // todo: 일단은 string으로 타입 하는데, 나중엔 User 클래스로 처리해야 함
    public content: string,
    public thumbnail: string,
    public views: number,
    public subtitle?: string,
    public publishDate?: Date,
    public likes?: number
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static createFromObj(obj: any): Article {
      return ObjectUtil.createInstanceFromObject<Article>(this, obj);
  }
}