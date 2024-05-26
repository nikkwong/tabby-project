import ProfilePage from "@/pages/profiles/components/organisms/ProfilePage";
import ProfileProvider from "@/pages/profiles/providers/profileProvider";

export default function ProfilePageComponent() {
  return (
    <ProfileProvider>
      <ProfilePage />
    </ProfileProvider>
  );
}
