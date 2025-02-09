import {Inter} from 'next/font/google'
import {Metadata} from 'next'
import {ClerkProvider} from '@clerk/nextjs'

export const metadata = {
    title: 'Lumeox',
    description: 'Connect, share, and shine with a vibrant community that inspires and empowers you. Join LUMEOX today and experience a new way to socialize, discover, and engage with like-minded individuals.',
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
})

export default function RootLayout({children}){
    return (
        <>
            <html lang="en">
                <ClerkProvider>
                    <body>
                        <main className={`${inter.className} bg-dark-1`}>
                            <div className='w-full flex justify-center items-center min-h-screen'>

                            {children}
                        </div>
                    </main>

                </body>
                </ClerkProvider>
            </html>
        </>

    )

}