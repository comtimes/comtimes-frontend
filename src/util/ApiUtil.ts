
export default class ApiUtil {
    // http://54.180.87.17:8080/api/v1/news/1074
    static readonly GET_NEWS_DETAIL_BY_ID: string = `/api/v2/post`;

    // http://54.180.87.17:8080/api/v2/contents?page=0&size=20&sort=id%2Cdesc
    static readonly GET_NEWS_LIST_BY_PAGE: string = `/api/v2/contents?sort=id%2Cdesc`;

    public static getPageListUrl(page: number, size = 20): string {
        return `${ApiUtil.GET_NEWS_LIST_BY_PAGE}&page=${page}&size=${size}`;
    }
}
