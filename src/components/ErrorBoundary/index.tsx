import * as React from 'react';

import dynamic from 'next/dynamic';

const Section = dynamic(import('../Section').then((m) => m.Section));

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error | null;
}

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY;

class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
    constructor(props: React.PropsWithChildren) {
        super(props);

        // Define a state variable to track whether is an error or not
        this.state = {
            hasError: false,
            error: null,
        };
    }
    static getDerivedStateFromError(error: unknown) {
        // Update state so the next render will show the fallback UI

        return {
            hasError: true,
            error: error instanceof Error ? error : new Error((error as string) ?? 'Unknown error'),
        };
    }
    componentDidCatch(error: unknown, errorInfo: unknown) {
        let err: Error;
        if (error instanceof Error) {
            err = error;
        } else if (typeof error === 'string') {
            err = new Error(error);
        } else {
            err = new Error(`${error}`);
        }

        if (clarityProjectId && typeof clarityProjectId === 'string') {
            import('clarity-js')
                .then((m) => {
                    const errorValue = `${err.message}
${err.name}
                    
${err.stack ?? ''}
`;
                    m.clarity.event('error', errorValue);
                })
                .catch((err) => {
                    console.warn('Could not send data to clarity', err);
                });
        }

        // You can use your own error logging service here
        console.error({ error, errorInfo });
    }
    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Section id="error-boundary-section" className={`section odd text-center`}>
                    <div className={`flex flex-col justify-center items-center mx-auto w-full`}>
                        <h2 className="text-lg font-bold my-6">Sorry, there is an error!</h2>

                        <div className="my-3">
                            <pre className="border-slate-400">{this.state.error?.message}</pre>
                        </div>

                        <div className="my-3">
                            <button
                                type="button"
                                onClick={() =>
                                    this.setState({
                                        hasError: false,
                                        error: null,
                                    })
                                }
                            >
                                Try again?
                            </button>
                        </div>
                    </div>
                </Section>
            );
        }

        // Return children components in case of no error

        return this.props.children;
    }
}

export default ErrorBoundary;
