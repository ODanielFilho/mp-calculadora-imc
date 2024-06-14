import { LabelHTMLAttributes } from "react";

export function Label({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { children: React.ReactNode }) {
  return (
    <label
      htmlFor="weight"
      {...props}
      className="block text-neutral-600 font-light text-sm my-1"
    >
      {children}
    </label>
  );
}
