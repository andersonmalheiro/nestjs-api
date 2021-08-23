import Knex from "knex";

type operators = "=" | ">" | ">=" | "<" | "<=" | "<>" | "like" | "ilike";

export interface ICustomQuerybuilderParams {
  [key: string]: {
    value: any;
    operator: operators;
  };
}

/**
 *
 * @param builder Knex.QueryBuilder
 * @param params CustomQuerybuilderParams
 *
 * @description
 * Create a query based on fields and operators passed on params object.
 */
export const queryBuilder = (
  builder: Knex.QueryBuilder,
  params: ICustomQuerybuilderParams
): Knex.QueryBuilder => {
  Object.keys(params).forEach((key) => {
    if (params[key].operator === "ilike" || params[key].operator === "like") {
      builder.where(key, params[key].operator, `%${params[key].value}%`);
    } else {
      builder.where(key, params[key].operator, params[key].value);
    }
  });

  return builder;
};
