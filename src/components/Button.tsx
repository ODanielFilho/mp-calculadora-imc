import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      className="mt-6 bg-rose-400 text-white rounded p-3 w-full"
      {...props}
    >
      {children}
    </button>
  );
}
