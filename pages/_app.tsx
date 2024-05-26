import RootLayout from "@/components/layouts/rootLayout";

export default function AppLayout({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
