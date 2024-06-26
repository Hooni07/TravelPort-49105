import React, { useEffect, useState } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type TextBoxProps = {
  id: string;
  labelName: string;
  textSize: number;
  mb: number;
  textLimit: number;
  placeholder: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: FieldError;
  register?: UseFormRegisterReturn;
};

const TextBox = ({
  id,
  labelName,
  textSize,
  mb = 0,
  textLimit,
  placeholder,
  value,
  onChange,
  error,
  register,
}: TextBoxProps) => {
  const [textLength, setTextLength] = useState<number>(0);
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textLength <= textLimit) {
      if (onChange) onChange(event);
      const slicedTextLength = event.target.value.slice(0, textLimit).length;
      setTextLength(slicedTextLength);
    }
  };

  useEffect(() => {
    setTextLength(value.length);
  }, [value.length]);

  const textboxBasic =
    'p-12 rounded text-16 w-full h-150 outline-none border-solid border-1 border-black-5 resize-none';
  const focusDesign = 'focus:border-blue-6 focus:border-1';
  const errorDesign = 'border-system-error';

  let textboxClass = `${textboxBasic} ${focusDesign}`;
  let lengthDesign = 'absolute bottom-5 right-5 text-black-5';

  if (error) {
    textboxClass = `${textboxBasic} ${errorDesign}`;
    lengthDesign = 'absolute bottom-31 right-5 text-black-5';
  }

  return (
    <div className="relative flex flex-col w-full gap-8">
      <label className={`text-${textSize} font-bold mb-${mb}`} htmlFor={id}>
        {labelName}
      </label>
      <textarea
        id={id}
        className={textboxClass}
        placeholder={placeholder}
        maxLength={textLimit}
        value={value}
        onChange={handleOnChange}
        {...register}
      />

      <p className={`${lengthDesign}`}>
        (<span>{` ${textLength} `}</span>/ {`${textLimit} `})
      </p>
      {error && (
        <div className="text-system-error text-12">{error.message}</div>
      )}
    </div>
  );
};

export default TextBox;
