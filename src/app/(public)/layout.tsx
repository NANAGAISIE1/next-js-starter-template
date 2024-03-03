import Footer from "./_components/footer";
import Header from "./_components/header";

export default function PublicRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" flex h-full w-full flex-col">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
