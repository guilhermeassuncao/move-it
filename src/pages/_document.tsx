import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Move It | Movimente-se" />
                    <meta property="og:description" content="Move it é uma aplicação que usa a técnica de pomodoro e contém uns desafios incriveis para fazer na sua pausa de 25 minutos" />
                    <meta property="og:url" content="https://moveit-guilhermeassuncao.vercel.app/" />
                    <meta name="image" property="og:image" content="og-image.jpg" />

                    <link rel="shortcut icon" href="favicon.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
