import { useMemo } from 'react';
import Link from 'next/link';
import React, { memo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from '@/components/code-block';

interface MemoizedMarkdownProps {
  children: string;
}

const useMarkdownComponents = (): Partial<Components> => {
  return useMemo(
    () => ({
      code: CodeBlock,
      pre: ({ children }) => <>{children}</>,
      ol: ({ children, ...props }) => (
        <ol className='list-decimal list-outside ml-4' {...props}>
          {children}
        </ol>
      ),
      li: ({ children, ...props }) => (
        <li className='py-1' {...props}>
          {children}
        </li>
      ),
      ul: ({ children, ...props }) => (
        <ul className='list-decimal list-outside ml-4' {...props}>
          {children}
        </ul>
      ),
      strong: ({ children, ...props }) => (
        <span className='font-semibold' {...props}>
          {children}
        </span>
      ),
      a: ({ children, ...props }) => (
        <Link className='text-blue-500 hover:underline break-all' target='_blank' rel='noreferrer' {...props}>
          {children}
        </Link>
      ),
      h1: ({ children, ...props }) => (
        <h1 className='text-3xl font-semibold mt-6 mb-2' {...props}>
          {children}
        </h1>
      ),
      img: ({ ...props }) => (
        <img className='rounded-lg w-2/3 cursor-pointer' src={props.src} onClick={() => props.src && window.open(props.src, '_blank')} />
      ),
      table: ({ node, children, ...props }) => {
        return (
          <table className='w-full border-collapse border border-zinc-300 dark:border-zinc-200 text-sm' {...props}>
            {children}
          </table>
        );
      },
      thead: ({ children }) => {
        return <thead className='bg-zinc-200 dark:bg-zinc-900'>{children}</thead>;
      },
      tbody: ({ children }) => {
        return <tbody>{children}</tbody>;
      },
      tr: ({ children }) => {
        return <tr className='even:bg-zinc-50 dark:even:bg-zinc-900'>{children}</tr>;
      },
      th: ({ node, children, ...props }) => {
        return (
          <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-left font-semibold bg-zinc-100 dark:bg-zinc-900' {...props}>
            {children}
          </th>
        );
      },
      td: ({ node, children, ...props }) => {
        return (
          <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-2' {...props}>
            {children}
          </td>
        );
      },
    }),
    [],
  );
};

const MemoizedMarkdown = ({ children }: MemoizedMarkdownProps) => {
  const components = useMarkdownComponents();

  const renderedMarkdown = useMemo(
    () => (
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    ),
    [children, components],
  );

  return <>{renderedMarkdown}</>;
};

export const Markdown = memo(MemoizedMarkdown, (prevProps, nextProps) => prevProps.children === nextProps.children);
