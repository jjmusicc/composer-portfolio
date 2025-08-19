import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('받은 데이터:', body);
    
    const { name, email, message } = body;

    // 필수 필드 검증
    if (!name || !email || !message) {
      console.log('검증 실패:', { name, email, message });
      return NextResponse.json(
        { error: '모든 필드를 입력해주세요.' },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('이메일 형식 오류:', email);
      return NextResponse.json(
        { error: '올바른 이메일 형식을 입력해주세요.' },
        { status: 400 }
      );
    }

    // Resend를 사용한 메일 전송
    console.log('API Key:', process.env.RESEND_API_KEY ? '설정됨' : '설정되지 않음');
    
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY가 설정되지 않았습니다.');
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'J&J Music <onboarding@resend.dev>', // 임시로 기본 도메인 사용
      to: ['jjmusicc@naver.com'], // Resend 계정 이메일
      subject: `[J&J Music] 새로운 문의 - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">새로운 문의가 도착했습니다</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>이름:</strong> ${name}</p>
            <p><strong>이메일:</strong> ${email}</p>
            <p><strong>메시지:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            이 메일은 J&J Music 웹사이트의 연락처 폼을 통해 전송되었습니다.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend 메일 전송 오류:', error);
      throw new Error('메일 전송에 실패했습니다.');
    }

    console.log('Resend 메일 전송 성공:', data);

    return NextResponse.json(
      { message: '메시지가 성공적으로 전송되었습니다.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('메일 전송 오류:', error);
    return NextResponse.json(
      { error: '메시지 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}
