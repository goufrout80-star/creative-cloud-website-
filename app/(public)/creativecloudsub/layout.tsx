import { PinnedSlider } from "@/components/ui/pinned-slider";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { readJSON } from "@/lib/db";
import { Settings } from "@/lib/types";

export default async function CreativeCloudLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settings: Settings | null = null;
  try {
    settings = await readJSON<Settings>('settings.json');
  } catch (e) {
    console.error("Failed to load settings", e);
  }

  return (
    <>
      <PinnedSlider />
      {children}
      <WhatsAppButton phoneNumber={settings?.whatsappNumber} />
    </>
  );
}
