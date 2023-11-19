import React from 'react';

interface PropsType {
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

const SubmitBtn: React.FC<PropsType> = ({ handleSubmit }) => {
  const pathname = window.location.href;
  const path = pathname.split('/')[3];

  return (
    <>
      <div className="flex w-full h-full items-center justify-center">
        <button
          className={
            path === 'notmycloset'
              ? 'hidden'
              : 'bg-pink-hot w-[150px] text-center rounded-xl shadow-xl text-white text-AppBody1 p-4 tracking-[10px] font-bold mr-[150px]'
          }
          onClick={handleSubmit}>
          {path === 'notmycloset' ? '제안하기' : '제출하기'}
        </button>
      </div>
    </>
  );
};

export default SubmitBtn;
