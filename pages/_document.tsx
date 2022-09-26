import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document'

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang={'en'} dir={'ltr'}>
        <Head>
          <meta charSet={'utf-8'} />
          <meta name={'description'} content={'Demo site of Dashlabs.ai product development process'} />
          <meta name={'theme-color'} content={'#1665FF'} />
          <meta property={'og:title'} content={'Dashlabs.ai'} />
          <meta property={'og:type'} content={'website'} />
          <meta property={'og:description'} content={'Demo site of Dashlabs.ai product development process'} />
          <meta property={'og:url'} content={'https://dashlabs.app'} />
          <meta property={'og:image'} content={'https://cdn00.dashlabs.app/url_preview_meta_image.png'} />
          <link
            rel={'shortcut icon'}
            type={'image/x-icon'}
            href={'https://cdn00.dashlabs.app/DashlabsLettermarkLogoBlue.png'}
          />
          <link href={'https://cdn00.dashlabs.app/DashlabsLogo-BlueBackground.png'} rel={'apple-touch-icon'} />
        </Head>
        <body style={{ backgroundColor: '#bdbdbd'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
