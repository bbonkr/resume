import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        // const originalRenderPage = ctx.renderPage;
        // Run the React rendering logic synchronously
        // ctx.renderPage = () =>
        //     originalRenderPage({
        //         // Useful for wrapping the whole react tree
        //         enhanceApp: (App: App) => App,
        //         // Useful for wrapping in a per-page basis
        //         enhanceComponent: (Component: NextComponentType) => Component,
        //     });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html lang="ko" prefix="og: http://ogp.me/ns#">
                <Head />
                <body className="bg-slate-50 dark:bg-slate-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
