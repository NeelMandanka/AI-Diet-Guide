import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileForm from "@/components/profile/ProfileForm";

import {
  useProfile,
  useCreateProfile,
  useUpdateProfile,
} from "@/hooks/useProfile";

import { appToast } from "@/utils/toast";

import type { ProfileFormValues } from "@/validations/profile.schema";

export default function ProfilePage() {
  const navigate = useNavigate();

  const {
    data: profile,
    isLoading,
    isError,
  } = useProfile();

  const createProfile = useCreateProfile();
  const updateProfile = useUpdateProfile();

  const [saving, setSaving] = useState(false);

  const isSetupMode = profile === null;

  useEffect(() => {
    document.title = isSetupMode
      ? "Complete Profile"
      : "Profile";
  }, [isSetupMode]);

  const handleSubmit = async (
    values: ProfileFormValues,
  ) => {
    try {
      setSaving(true);

      if (profile) {
        await updateProfile.mutateAsync(values);

        appToast.success(
          "Profile updated successfully."
        );
      } else {
        await createProfile.mutateAsync(values);

        appToast.success(
          "Profile created successfully."
        );

        navigate("/dashboard", {
          replace: true,
        });
      }
    } catch (error: any) {
      console.error(error);

      appToast.error(
        error?.response?.data?.detail ??
          "Unable to save profile."
      );
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-gray-500">
          Loading profile...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          {isSetupMode
            ? "Complete Your Profile"
            : "Profile"}
        </h1>

        <p className="mt-2 text-gray-500">
          {isSetupMode
            ? "Before using AI Diet Guide, please complete your health profile."
            : "Manage your personal health information."}
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          {isSetupMode
            ? "Create Profile"
            : "Edit Profile"}
        </h2>

        <ProfileForm
          initialData={profile ?? undefined}
          isLoading={saving}
          onSubmit={handleSubmit}
        />
      </div>

      {isError && !profile && (
        <p className="text-center text-sm text-gray-500">
          Profile not found. Please create your profile to continue.
        </p>
      )}
    </div>
  );
}