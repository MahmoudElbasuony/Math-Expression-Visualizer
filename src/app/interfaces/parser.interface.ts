import { ExpressionType } from '../models/enums';
export interface IExpression {
  parent: IExpression;
  type: ExpressionType;
  isActive: boolean;
  toString(): string;
  isAbsoulteNode(): boolean;
  isRoot(): boolean;
  value(): any;
  remove(): any;
}
