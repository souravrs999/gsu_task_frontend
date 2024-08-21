import Navigation from "@/components/navigation";
import HeaderBar from "@/components/header-bar";
import DnDProvider from "@/providers/dnd";

export default function CoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={"flex flex-col-reverse md:flex-row h-screen"}>
      <Navigation />
      <div className="flex flex-col w-full">
        <HeaderBar />
        <DnDProvider>
          <div className="flex-1 overflow-y-auto">{children}</div>
        </DnDProvider>
      </div>
    </main>
  );
}
