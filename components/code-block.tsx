'use client';

import { useMemo } from 'react';
import { useTheme } from 'next-themes';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  node?: any;
  inline: boolean;
  className?: string;
  children: React.ReactNode;
}

export function CodeBlock({ node, inline, className, children, ...props }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();

  const syntaxStyle = useMemo(() => (resolvedTheme === 'dark' ? oneDark : oneLight), [resolvedTheme]);

  const language = useMemo(() => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? match[1] : undefined;
  }, [className]);

  if (!inline && language) {
    return (
      <div className='not-prose flex flex-col rounded-lg overflow-hidden'>
        <div className='w-full overflow-x-auto'>
          <SyntaxHighlighter
            style={syntaxStyle}
            language={language}
            PreTag='div'
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              fontSize: '0.875rem',
            }}
            {...props}>
            {String(children).trim()}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  } else {
    return (
      <code
        className={`${className} text-sm py-0.5 px-1 rounded-md text-[#E01F5B] bg-[#F6F6F6] border border-[#DADADA] dark:bg-[#232529] dark:text-[#E8912D] dark:border-[#3C3E42]`}
        {...props}>
        {children}
      </code>
    );
  }
}
