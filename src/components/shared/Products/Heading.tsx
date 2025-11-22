interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps) => {
  return <div className="text-3xl font-semibold pb-6">{heading}</div>;
};

export default Heading;
