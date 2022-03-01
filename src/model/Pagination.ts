export default class Pagination {
    private static readonly SHOWN_BUTTON_COUNT = 5; // <PaginationView /> 에서 보여줄 페이지 버튼의 개수

    // eslint-disable-next-line no-useless-constructor
    constructor(
        private currentPage: number, // 1 <= this.currentPage <= totalPageCnt
        private totalPageCnt: number,
        private totalElementCnt: number,
        private pageSize: number = 20
    ) {}

    public getCurrentPage(): number {
        return this.currentPage;
    }

    // 현재 페이지네이션에서 보여지는 페이지들 개수의 절반값을 리턴하는 함수.
    // 보여줄 수 있는 더 낮은 숫자의 페이지나, 더 높은 숫자의 페이지가 있는지 검사하는데 사용됨.
    private static getHalfNumber(): number {
        return Math.ceil(Pagination.SHOWN_BUTTON_COUNT / 2);
    }

    public hasPrevPages(): boolean {
        return this.currentPage > Pagination.getHalfNumber();
    }

    public hasNextPages(): boolean {
        return this.currentPage + Pagination.getHalfNumber() <= this.totalPageCnt;
    }

    public getPageButtonNumberList(): number[] {
        // 전체 페이지 수가 Pagination.SHOWN_BUTTON_COUNT 값보다 작으면 1부터 this.totalPageCnt로 이루어진 배열 리턴
        if (this.totalPageCnt < Pagination.SHOWN_BUTTON_COUNT) {
            return Array.from({ length: this.totalPageCnt }, (_, i) => i + 1);
        }

        // this.this.currentPage가 1, 2, 3인 경우 1 ~ 5로 이루어진 배열 리턴
        if (!this.hasPrevPages()) {
            return [1, 2, 3, 4, 5];
        }
        if (!this.hasNextPages()) {
            return [this.totalPageCnt - 4, this.totalPageCnt - 3, this.totalPageCnt - 2, this.totalPageCnt - 1, this.totalPageCnt];
        }

        // 위의 예외를 제외한 일반적인 경우에는 현재 페이지가 중심에 위치하고 있는 Pagination.SHOWN_BUTTON_COUNT 개수만큼의 배열 리턴
        return Array.from({ length: Pagination.SHOWN_BUTTON_COUNT }, (_, i) => this.currentPage - 2 + i);
    }
}
