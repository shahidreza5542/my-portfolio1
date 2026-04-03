const A = ({ title, href, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className='px-2 py-1 transition-all duration-300 font-mono text-xs text-gray-300 hover:text-white'>
      {title}
    </a>
  );
};

export default A;