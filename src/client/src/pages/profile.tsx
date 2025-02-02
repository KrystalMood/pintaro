import { FC, useEffect, useState } from "react";
import { useAuth } from "@/context/auth";
import { Profile } from "@/types/settings";
import ProfileView from "@/components/profile/profile-view";
import { useNavigate } from "react-router-dom";
import Main from "@/layouts/main";

const ProfilePage: FC = () => {
  const { isAuthenticated, walletAddress } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        // TODO: Replace this with actual API call
        // Simulated profile data for now
        const mockProfile: Profile = {
          walletAddress: walletAddress || "",
          username: "johndoe",
          email: "john.doe@example.com",
          fullName: "John Doe",
          headline: "Blockchain Developer & Educator",
          bio: "Passionate about blockchain technology and education. I help others learn and grow in the Web3 space.",
          avatarUrl: "https://i.pravatar.cc/300",
          skills: ["Blockchain", "Smart Contracts", "Solidity", "React", "TypeScript"],
          expertise: ["DeFi", "NFTs", "Web3 Development"],
          reputation: 850,
          badges: ["early_adopter", "top_contributor"],
          enrolledCourses: ["course1", "course2", "course3"],
          completedCourses: ["course4", "course5"],
          certificates: {
            courseId: "course4",
            tokenId: "0x123...abc",
            issuedAt: Date.now() - 86400000, // 1 day ago
            transactionHash: "0xabc...123"
          },
          createdAt: Date.now() - 7776000000, // 90 days ago
          notificationSettings: {
            email: true,
            browser: true,
            courseUpdates: true,
            communityMessages: true
          }
        };

        setProfile(mockProfile);
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [isAuthenticated, navigate, walletAddress]);

  if (isLoading) {
    return (
      <Main title="Profile" description="Your profile information">
        <div className="flex h-screen items-center justify-center">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
            <p className="mt-2 text-gray-600">Loading Profil...</p>
          </div>
        </div>
      </Main>
    );
  }

  if (!profile) {
    return (
      <Main title="Profile" description="Your profile information">
        <div className="flex h-screen items-center justify-center">
          <div className="text-center">
            <i className="fas fa-exclamation-circle text-4xl text-red-500 mb-4" />
            <p className="text-gray-600">Gagal memuat profil</p>
          </div>
        </div>
      </Main>
    );
  }

  return (
    <Main title="Profile" description="Your profile information">
      <div className="min-h-screen bg-gray-50">
        <ProfileView profile={profile} />
      </div>
    </Main>
  );
};

export default ProfilePage;