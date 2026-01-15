'use client'

import React, { memo } from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'
import { cn } from '@/lib/utils'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

type MarkdownViewerProps = {
  markdown: string
  className?: string
  proseSize?: 'xs' | 'sm' | 'base' | 'lg'
}

const components: Partial<Components> = {
  table({ children }) {
    return (
      <table className="border-collapse border px-3 py-1">{children}</table>
    )
  },
  th({ children }) {
    return (
      <th className="border bg-muted px-3 py-1 break-words text-foreground">
        {children}
      </th>
    )
  },
  td({ children }) {
    return <td className="border px-3 py-1 break-words">{children}</td>
  },
  ol: ({ children, ...props }) => (
    <ol className="ml-4 list-outside list-decimal" {...props}>
      {children}
    </ol>
  ),
  ul: ({ children, ...props }) => (
    <ul className="ml-4 list-outside list-disc" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, className, ...props }) => (
    <li className={cn('my-0! py-0!', className)} {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <span className="font-semibold" {...props}>
      {children}
    </span>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-muted-foreground/30 pl-4 text-muted-foreground italic [&>p]:before:content-none [&>p]:after:content-none"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }) => {
    const isCodeBlock = className?.includes('language-')
    if (isCodeBlock) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
    return (
      <code
        className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground before:content-none after:content-none"
        {...props}
      >
        {children}
      </code>
    )
  },
  a: ({ children, href, ...props }) => (
    <a
      className="font-bold text-primary hover:underline"
      href={href ?? '#'}
      target={href?.startsWith('/') ? undefined : '_blank'}
      rel={href?.startsWith('/') ? undefined : 'noreferrer'}
      {...props}
    >
      {children}
    </a>
  ),
}

const NonMemoizedMarkdownViewer = ({
  markdown,
  className,
  proseSize = 'base',
}: MarkdownViewerProps) => {
  const proseSizeClass = {
    xs: 'prose-sm text-xs **:text-xs',
    sm: 'prose-sm',
    base: 'prose-base',
    lg: 'prose-lg',
  }[proseSize]

  return (
    <div className={cn('flex flex-row', className)}>
      <div
        className={cn(
          'prose w-full max-w-none dark:prose-invert',
          proseSizeClass,
          'text-foreground',
        )}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={components}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export const Markdown = memo(
  NonMemoizedMarkdownViewer,
  (prevProps, nextProps) =>
    prevProps.markdown === nextProps.markdown &&
    prevProps.className === nextProps.className &&
    prevProps.proseSize === nextProps.proseSize,
)
