export interface TableField<T> {
  name: string;
  value: keyof T | ((entry: T) => string);
  variant?: string;
}
