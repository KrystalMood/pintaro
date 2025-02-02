import Main from "@/layouts/main";
import SettingsModal from "@/shared/settings-modal";
import ProfileSettings from "@/components/settings/profile";

const Profile = () => {
  return (
    <Main title="Profile" description="">
      <main className="mx-auto mt-12 flex flex-col items-start justify-between space-y-8 space-x-8 px-4 py-20 sm:px-6 lg:flex-row lg:px-8">
        <SettingsModal />
        <ProfileSettings />
      </main>
    </Main>
  );
};

export default Profile;