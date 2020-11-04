import Document, { Html, Head, Main, NextScript } from 'next/document';

//Use file as minimum as possible only for template or meta tags which are fixed
//only executed on server
export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="custom" content="custom" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}