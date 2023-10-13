import Script from 'next/script';
import * as React from 'react';

interface MicrosoftClarityProviderProps {
    projectId?: string;
}

export const MicrosoftClarityProvider = ({
    projectId,
    children,
}: React.PropsWithChildren<MicrosoftClarityProviderProps>) => {
    React.useEffect(() => {
        if (process.env.NEXT_PUBLIC_ENV === 'dev' && projectId) {
            import('clarity-js')
                .then((m) => {
                    m.clarity.set('env', ['dev', window.location.hostname]);
                })
                .catch((err) => {
                    throw err;
                });
        }
    }, [projectId]);

    return (
        <React.Fragment>
            <Script
                id="microsoft-clarity"
                dangerouslySetInnerHTML={{
                    __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${projectId}");
`,
                }}
            />
            {children}
        </React.Fragment>
    );
};
