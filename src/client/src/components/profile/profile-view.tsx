import { FC } from "react";
import { Link } from "react-router-dom";
import { Profile } from "@/types/settings";

interface ProfileViewProps {
  profile: Profile;
}

export const ProfileView: FC<ProfileViewProps> = ({ profile }) => {
  return (
    <div className="w-full py-10">

      <div className="relative h-[300px] w-full bg-[#2c2c2c]">
        <div className="absolute bottom-0 left-0 right-0 px-4 py-6 bg-gradient-to-t from-black/50 to-transparent">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-end space-x-6">
              <div className="relative">
                <img
                  src={profile.avatarUrl || "/default-avatar.png"}
                  alt={profile.fullName}
                  className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-lg"
                />
                {profile.badges && profile.badges.length > 0 && (
                  <div className="absolute -right-2 -top-2">
                    <span className="bg-[#2c2c2c] p-2 rounded-full text-white shadow-lg">
                      <i className="fas fa-award text-lg" />
                    </span>
                  </div>
                )}
              </div>
              <div className="pb-4 flex-1">
                <h1 className="text-4xl font-bold text-white mb-2">{profile.fullName}</h1>
                <p className="text-xl text-gray-200">{profile.headline || "Learning Enthusiast"}</p>
              </div>
              <Link
                to="/settings?=profile"
                className="bg-[#2c2c2c] hover:bg-[#3c3c3c] text-white px-6 py-3 rounded-lg transition-colors duration-200 backdrop-blur-sm self-end"
              >
                <i className="fas fa-edit mr-2" />
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#2c2c2c]/10 rounded-lg">
                <i className="fas fa-envelope text-[#2c2c2c] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{profile.email}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#2c2c2c]/10 rounded-lg">
                <i className="fas fa-star text-[#2c2c2c] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Reputation</p>
                <p className="font-medium">{profile.reputation || 0} Points</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#2c2c2c]/10 rounded-lg">
                <i className="fas fa-calendar text-[#2c2c2c] text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium">{new Date(profile.createdAt || Date.now()).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {profile.bio && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">About</h2>
                <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">{profile.bio}</p>
              </div>
            )}

            {(profile.enrolledCourses?.length || profile.completedCourses?.length) && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-6">Learning Progress</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-[#2c2c2c]/10 rounded-lg">
                    <p className="text-3xl font-bold text-[#2c2c2c] mb-2">
                      {profile.enrolledCourses?.length || 0}
                    </p>
                    <p className="text-gray-600">Enrolled Courses</p>
                  </div>
                  <div className="text-center p-6 bg-[#2c2c2c]/10 rounded-lg">
                    <p className="text-3xl font-bold text-[#2c2c2c] mb-2">
                      {profile.completedCourses?.length || 0}
                    </p>
                    <p className="text-gray-600">Completed Courses</p>
                  </div>
                </div>
              </div>
            )}

            {profile.certificates && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-6">Certificates</h2>
                <div className="bg-gradient-to-br from-[#2c2c2c]/5 to-[#2c2c2c]/10 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <i className="fas fa-certificate text-2xl text-[#2c2c2c]" />
                    <span className="text-lg font-medium">Course Completion</span>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <span className="w-24 text-gray-500">Token ID:</span>
                      <span className="font-mono">{profile.certificates.tokenId}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="w-24 text-gray-500">Issued:</span>
                      <span>{new Date(profile.certificates.issuedAt).toLocaleDateString()}</span>
                    </p>
                    <p className="flex items-center">
                      <span className="w-24 text-gray-500">Tx Hash:</span>
                      <span className="font-mono">{profile.certificates.transactionHash}</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {profile.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#2c2c2c]/10 text-[#2c2c2c] px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {profile.expertise?.map((exp, index) => (
                  <span
                    key={index}
                    className="bg-[#2c2c2c]/10 text-[#2c2c2c] px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {profile.badges && profile.badges.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4">Badges</h2>
                <div className="grid grid-cols-2 gap-4">
                  {profile.badges.map((badge, index) => (
                    <div key={index} className="text-center p-4 bg-[#2c2c2c]/10 rounded-lg">
                      <i className="fas fa-award text-2xl text-[#2c2c2c] mb-2" />
                      <p className="text-sm font-medium text-gray-700">
                        {badge.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;