export enum ExpressionType {
  STRING,
  PARAMETER,
  PI,
  E,
  NUMBER,
  FUNCTION,
  UNARY_EXPR,
  BINARY_EXPR,
  PARENTHESIS_EXP,
  POWER,
  UNKNOWN
}

export enum BinaryExpressionOperationType {
  SUBTRACTION,
  MULTIPLICATION,
  ADDITION,
  DIVISION,
  UNKNOWN
}


export enum UnaryExpressionOperationType {
  NEGATION,
  UNKNOWN
}
