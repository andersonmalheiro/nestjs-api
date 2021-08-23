export const paginationLimit = 10;
export const paginationOffset = 0;

export interface PaginationFilters {
  order?: string;
  desc?: boolean;
  limit?: number;
  offset?: number;
}

export class Pagination<T = any> {
  public count!: number;
  public data!: Array<T>;
  public next!: boolean;

  constructor(props: Pagination) {
    Object.assign(this, props);
  }
}
