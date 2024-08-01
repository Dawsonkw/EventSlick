type H1Props = {
  children: React.ReactNode;
};

function H1({ children }: H1Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">
        {children}
      </h1>
    </div>
  );
}

export default H1;
