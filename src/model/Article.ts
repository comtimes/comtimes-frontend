/* eslint-disable no-useless-constructor */
import ObjectUtil from "./ObjectUtil";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default class Article {
  constructor(
    public id: number,
    public title: string,
    public subtitle: string,
    public publishDate: Date,
    public author: string, // todo: 일단은 string으로 타입 하는데, 나중엔 User 클래스로 처리해야 함
    public summary: string,
    public thumbnail: string,
    public likes: number,
    public views: number
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static createFromObj(obj: any): Article {
      return ObjectUtil.createInstanceFromObject<Article>(this, obj);
  }
}