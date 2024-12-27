import Link from 'next/link';
import React, { memo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';

const components: Partial<Components> = {
  code: ({ children, ...props }) => {
    return (
      <code className='text-sm bg-zinc-100 dark:bg-zinc-800 py-0.5 px-1 rounded-md' {...props}>
        {children}
      </code>
    );
  },
  pre: ({ children }) => <>{children}</>,
  ol: ({ node, children, ...props }) => {
    return (
      <ol className='list-decimal list-outside ml-4' {...props}>
        {children}
      </ol>
    );
  },
  li: ({ node, children, ...props }) => {
    return (
      <li className='py-1' {...props}>
        {children}
      </li>
    );
  },
  ul: ({ node, children, ...props }) => {
    return (
      <ul className='list-decimal list-outside ml-4' {...props}>
        {children}
      </ul>
    );
  },
  strong: ({ node, children, ...props }) => {
    return (
      <span className='font-semibold' {...props}>
        {children}
      </span>
    );
  },
  a: ({ node, children, ...props }) => {
    return (
      <Link className='text-blue-500 hover:underline break-all' target='_blank' rel='noreferrer' {...props}>
        {children}
      </Link>
    );
  },
  h1: ({ node, children, ...props }) => {
    return (
      <h1 className='text-3xl font-semibold mt-6 mb-2' {...props}>
        {children}
      </h1>
    );
  },
  h2: ({ node, children, ...props }) => {
    return (
      <h2 className='text-2xl font-semibold mt-6 mb-2' {...props}>
        {children}
      </h2>
    );
  },
  h3: ({ node, children, ...props }) => {
    return (
      <h3 className='text-xl font-semibold mt-6 mb-2' {...props}>
        {children}
      </h3>
    );
  },
  h4: ({ node, children, ...props }) => {
    return (
      <h4 className='text-lg font-semibold mt-6 mb-2' {...props}>
        {children}
      </h4>
    );
  },
  h5: ({ node, children, ...props }) => {
    return (
      <h5 className='text-base font-semibold mt-6 mb-2' {...props}>
        {children}
      </h5>
    );
  },
  h6: ({ node, children, ...props }) => {
    return (
      <h6 className='text-sm font-semibold mt-6 mb-2' {...props}>
        {children}
      </h6>
    );
  },
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
  img: ({ node, children, ...props }) => {
    return (
      <img
        className='rounded-lg w-2/3 cursor-pointer'
        src={props.src}
        onClick={() => {
          props.src && window.open(props.src, '_blank');
        }}
      />
    );
  },
};

const remarkPlugins = [remarkGfm];

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown remarkPlugins={remarkPlugins} components={components}>
      {children}
    </ReactMarkdown>
  );
};

export const Markdown = memo(NonMemoizedMarkdown, (prevProps, nextProps) => prevProps.children === nextProps.children);
