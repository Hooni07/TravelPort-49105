import { useUserStore } from '@/utils/zustand';
import { initUserInfo } from '@/mocks/InfoMock';
import { useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import InputBox from './common/InputBox';

interface UserInfo {
  nickname: string;
  email: string;
  name?: string;
  phone?: string;
}

const EditInfo = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const { register, handleSubmit } = useForm<UserInfo>({
    defaultValues: initUserInfo,
  });

  const handleSave = (data: UserInfo) => {
    if (!data.nickname) {
      alert('닉네임을 입력해주세요');
      return;
    }
    setUserInfo(data);
    alert('저장되었습니다');
    console.log(data);
  };

  return (
    <div className="p-16 flex flex-col gap-12 w-767">
      <form
        className="text-16 flex flex-col gap-24"
        onSubmit={handleSubmit(handleSave)}
      >
        <div className="flex flex-row gap-24 items-center">
          <label htmlFor="profile" className="p-40 rounded-9 bg-black-modal">
            프로필 사진
            <input type="file" id="profile" hidden />
          </label>
          <div className="flex flex-col gap-12">
            <InputBox
              label="닉네임"
              placeholder="닉네임을 입력해주세요"
              width="100%"
              register={register('nickname')}
            />
            <InputBox
              label="이메일"
              width="100%"
              register={register('email')}
              disabled
            />
          </div>
        </div>
        <div className="flex flex-col gap-12 w-fit">
          <InputBox
            label="이름"
            placeholder="이름을 입력해주세요"
            register={register('name')}
          />
          <InputBox
            label="전화번호"
            placeholder="전화번호를 입력해주세요"
            register={register('phone')}
          />
          <Button text="비밀번호 변경하기" />
        </div>
        <Button text="저장하기" onClick={handleSubmit(handleSave)} />
      </form>
    </div>
  );
};

export default EditInfo;
