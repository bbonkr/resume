import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownViewerProps {
    className?: string;
    markdown?: string;
}

export const Markdown = ({ className, markdown }: MarkdownViewerProps) => {
    return (
        <ReactMarkdown className={className ?? ''} plugins={[remarkGfm]}>
            {markdown ?? ''}
        </ReactMarkdown>
    );
};
