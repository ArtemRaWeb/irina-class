export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-[var(--color-accent)] hover:bg-[var(--color-primary-dark)] uppercase font-bold text-sm py-3 px-6 rounded-full ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
