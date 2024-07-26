export default function Rating({
  vote,
  extraStyles,
}: {
  vote: string;
  extraStyles?: string;
}) {
  return (
    <div className='clear-bg px-2 py-1 rounded'>
      <span className={`text-sm ${extraStyles}`}>{vote}</span>
    </div>
  );
}
