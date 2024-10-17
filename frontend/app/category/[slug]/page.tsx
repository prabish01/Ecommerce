
interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: PageProps) => {
  // const router = useRouter();
  const { slug } = params;
  return (
    <div>
      <h1>{slug}</h1>
      <h1>HElllo this is submenu</h1>
    </div>
  );
};

export default Page;
