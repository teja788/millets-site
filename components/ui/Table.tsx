import { type ReactNode, type HTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes } from 'react';

interface TableSectionProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export function Table({ children, className = '', ...props }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className={`w-full border-collapse ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHead({ children, className = '', ...props }: TableSectionProps) {
  return (
    <thead className={`bg-earth-100 dark:bg-earth-700 ${className}`} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ children, className = '', ...props }: TableSectionProps) {
  return (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ children, className = '', ...props }: TableRowProps) {
  return (
    <tr
      className={`border-b border-earth-100 dark:border-earth-700 hover:bg-earth-50/50 dark:hover:bg-earth-700/50 transition ${className}`}
      {...props}
    >
      {children}
    </tr>
  );
}

export function TableHeaderCell({ children, className = '', ...props }: TableHeaderCellProps) {
  return (
    <th
      className={`px-4 py-3 text-left font-semibold text-earth-800 dark:text-earth-100 text-sm uppercase tracking-wider ${className}`}
      {...props}
    >
      {children}
    </th>
  );
}

export function TableCell({ children, className = '', ...props }: TableCellProps) {
  return (
    <td className={`px-4 py-3 text-earth-700 dark:text-earth-200 ${className}`} {...props}>
      {children}
    </td>
  );
}
