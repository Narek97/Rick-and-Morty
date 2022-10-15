import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang={"en"}>
                <Head>
                    <meta name="description" content="Free Web tutorials"/>
                    <meta name="keywords" content="HTML, CSS, JavaScript"/>
                    <body>
                    <Main/>
                    <NextScript/>
                    </body>
                </Head>
            </Html>
        );
    }
}

export default MyDocument;
