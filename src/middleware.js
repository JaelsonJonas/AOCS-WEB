import { NextResponse } from 'next/server'

export default function middleware(request) {
    if (!request.cookies.has(process.env.NEXT_PUBLIC_TOKEN_KEY))
        return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: [
        '/newTarefa/:path*',
        '/perfil/:path*',
        '/tarefa/:path*',
        '/timer/:path*',
        '/home/:path*',
    ]
}