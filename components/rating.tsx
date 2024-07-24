export default function Rating({
  text,
  extraStyles,
}: {
  text: string;
  extraStyles?: string;
}) {
  return (
    <div className='clear-bg px-2 py-1 rounded'>
      <span className={`text-sm ${extraStyles}`}>{text}</span>
    </div>
  );
}
