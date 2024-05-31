import Google from '@/assets/images/google_login.png';
import Kakao from '@/assets/images/kakao_login.svg';
import Naver from '@/assets/images/naver_login.png';
import { Link } from 'react-router-dom';
import useOAuthLogin from '@/hooks/useOAuthLogin';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/InputType';
import Logo from '@/assets/icons/travelPortLogo.svg';
import Button from '@/components/common/Button';
import InputBox from '@/components/common/InputBox';

type LoginForm = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: 'onChange' });
  const googleLogin = useOAuthLogin('google');
  const kakaoLogin = useOAuthLogin('kakao');
  const naverLogin = useOAuthLogin('naver');

  const handleLoginForm = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-40 justify-center items-center">
        <Link to="/">
          <img alt="travelport logo" src={Logo} />
        </Link>
        <div className="flex flex-col gap-30 max-w-350 ">
          <form
            className="flex flex-col gap-30"
            onSubmit={handleSubmit(handleLoginForm)}
          >
            <InputBox
              label="이메일"
              width="35rem"
              placeholder="example@example.com"
              error={errors.email}
              register={register('email', {
                pattern: {
                  value: EMAIL_REGEX,
                  message: '이메일 형식이 맞나요?',
                },
              })}
            />
            <InputBox
              label="비밀번호"
              inputType="password"
              width="35rem"
              placeholder="비밀번호"
              error={errors.password}
              register={register('password', {
                pattern: {
                  value: PASSWORD_REGEX,
                  message: '비밀번호를 확인해보세요!',
                },
              })}
            />
            <Button
              text="로그인 하기"
              onClick={handleSubmit(handleLoginForm)}
            />
          </form>
          <div className="text-center">
            아직 회원이 아니신가요?{' '}
            <Link to="/signup/user">이메일로 회원가입</Link>
          </div>
          <div
            className="flex px-24 py-12 justify-between items-center  
    border-1 rounded-2xl 
    border-solid border-black"
          >
            <div className="text-3xl font-bold ">소셜 로그인</div>
            <div className="flex gap-16">
              <button type="button" onClick={googleLogin}>
                <img alt="Google" src={Google} />
              </button>
              <button type="button" onClick={kakaoLogin}>
                <img alt="Kakao" width="40px" height="40px" src={Kakao} />
              </button>
              <button type="button" onClick={naverLogin}>
                <img alt="Naver" width="40px" height="40px" src={Naver} />
              </button>
            </div>
          </div>
          <div className="text-center">
            파트너 등록이 필요하신가요?{' '}
            <Link to="/signup/partner">파트너 회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
