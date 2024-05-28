import React from 'react';

type TextBoxProps = {
  labelName: string;
  textLimit: number;
  placeholder: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextBox = ({
  labelName,
  textLimit,
  placeholder,
  value,
  onChange,
}: TextBoxProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-3xl font-bold" htmlFor={labelName}>
        {labelName}
      </label>
      <textarea
        className="border-black text-2xl border-solid border-1 w-300"
        placeholder={placeholder}
        maxLength={textLimit}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextBox;
