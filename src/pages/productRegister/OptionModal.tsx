import { useForm } from 'react-hook-form';
import uploadBox from '@/assets/icons/uploadBox.svg';
import Button from '@/components/common/Button';
import NumberInputBox from '@/components/common/NumberInputBox';

type OptionModalForm = {
  img: File;
  title: string;
  content: string;
  maximum: number;
  userCount: number;
  price: number;
  start: number;
  end: number;
};

type ModalProps = {
  closeModal: () => void;
  optionList: any;
  setOptionList: any;
};

const OptionModal = ({ closeModal, optionList, setOptionList }: ModalProps) => {
  const { register, handleSubmit } = useForm<OptionModalForm>({
    mode: 'onChange',
  });
  const trueButton = true;

  const onSubmit = (data: any) => {
    console.log(data);
    setOptionList([
      ...optionList,
      [
        data.img[0],
        data.title,
        data.maximum,
        data.userCount,
        data.price,
        data.start,
        data.end,
        data.content,
      ],
    ]);
    closeModal();
  };

  return (
    <div className="w-384 h-532">
      <h1 className="text-14">옵션추가하기(체험)</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 체험 옵션 input */}
        <div className="flex flex-col gap-6">
          <label htmlFor="uploadBox">
            <img className="w-40 " src={uploadBox} alt="플러스 아이콘" />
            <input
              className="hidden"
              id="uploadBox"
              {...register('img')}
              type="file"
              accept="image/*"
            />
          </label>
          <label className="flex gap-6 flex-col" htmlFor="title">
            <p className="text-14">체험 상품명</p>
            <input
              className="h-48 p-12 rounded text-16 outline-none border-solid border-1 border-black-5 w-239 focus:border-blue-6 focus:border-1 mobile:max-w-none"
              {...register('title')}
              placeholder="상품옵션의 이름을 적어주세요."
              id="title"
              type="text"
            />
          </label>
          <div className="flex gap-6">
            <NumberInputBox
              register={register('maximum', {
                valueAsNumber: true,
              })}
              labelname="예약가능인원"
              inputstyle="w-57"
              divstyle="w-90"
              numberBox="maximum"
              unit="명"
              placeholder="232"
              max={999}
            />
            <NumberInputBox
              register={register('userCount', {
                valueAsNumber: true,
              })}
              labelname="티켓 갯수"
              inputstyle="w-57"
              divstyle="w-90"
              numberBox="maximum"
              unit="개"
              placeholder="111"
              max={999}
            />
          </div>
          <NumberInputBox
            register={register('price', {
              valueAsNumber: true,
            })}
            labelname="가격"
            inputstyle="w-77 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            divstyle="w-120"
            numberBox="price"
            unit="원"
            placeholder="20000"
          />
          <div className="flex gap-6">
            <NumberInputBox
              register={register('start', {
                valueAsNumber: true,
              })}
              labelname="시작 시간"
              inputstyle="w-37"
              divstyle="w-80"
              numberBox="start"
              unit="시"
              placeholder="19"
              max={23}
            />
            <NumberInputBox
              register={register('end', {
                valueAsNumber: true,
              })}
              labelname="종료 시간"
              inputstyle="w-37"
              divstyle="w-80"
              numberBox="end"
              unit="시"
              placeholder="19"
              max={23}
            />
          </div>
          <label className="flex gap-6 flex-col" htmlFor="content">
            <p className="text-14">세부 상품 설명</p>
            <textarea
              className="resize-none h-48 p-12 rounded text-16 outline-none border-solid border-1 border-black-5 w-full focus:border-blue-6 focus:border-1 mobile:max-w-none"
              {...register('content')}
              placeholder="등록할 상품옵션의 설명을 적어주세요.(300자)"
              id="content"
              maxLength={300}
            />
          </label>
        </div>
        <div className="absolute bottom-32 flex gap-6 items-center">
          <div className="w-166">
            <Button
              buttonStyle="h-28"
              outlined={trueButton}
              buttonType="button"
              onClick={closeModal}
            >
              취소
            </Button>
          </div>
          <div className="w-166">
            <Button buttonStyle="h-28" buttonType="submit">
              완료
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OptionModal;