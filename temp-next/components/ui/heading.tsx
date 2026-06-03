type HeadingProps = {
  title: string;
  description?: string;
  center?: boolean;
};

export function Heading({
  title,
  description,
  center = false,
}: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-3xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}