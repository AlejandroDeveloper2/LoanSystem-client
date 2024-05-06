import { User } from "iconoir-react";

import { useAuthStore } from "@modules/auth/state-store";

import { InfoSection } from "@modules/core/components";
import { ProfileForm, UpdatePasswordForm } from "@modules/user/components";

import { Figure3 } from "@assets/svg";

const UserProfilePage = (): JSX.Element => {
  const auth = useAuthStore((state) => state.auth);

  return (
    <>
      <h1 className="heading1">
        <User />
        Mi perfil de usuario
      </h1>
      <InfoSection
        sectionTitle="Detalles de mi perfil"
        labelId="Rol de usuario"
        link="/userPanel"
        recordId={auth ? String(auth.roles) : "Rol de usuario"}
        buttonLabel="Volver al panel de usuario"
      />
      <div className="formContainer">
        <ProfileForm />
      </div>

      <div className="formContainer">
        <UpdatePasswordForm />
      </div>
      <Figure3 />
    </>
  );
};

export default UserProfilePage;
