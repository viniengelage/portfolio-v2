import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

    await resend.emails.send({
      from: `${body.name} <contato@viniengelage.com>`,
      to: ['viniciosvalensuela@gmail.com'],
      subject: `Contato de ${body.name}`,
      text: `Email: ${body.email} - Mensagem: ${body.message}`,
    })

    return NextResponse.json({
      message: 'Sucess',
    })
  } catch (error) {
    return NextResponse.json({
      message: 'Error',
    })
  }
}
