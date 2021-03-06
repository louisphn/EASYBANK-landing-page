import { VFC, memo } from 'react';

interface Button {
  label: string;
}

const PrimaryButton: VFC<Button> = ({ label }) => {
  return (
    <button className="py-3 px-8 rounded-full bg-gradient-to-r from-primary-lime-green to-primary-light-cyan text-white filter hover:brightness-110 lg:whitespace-nowrap">
      {label}
    </button>
  );
};
export default memo(PrimaryButton);
