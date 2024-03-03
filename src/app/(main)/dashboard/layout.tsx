import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { fetchMutation } from "convex/nextjs";
import { revalidatePath } from "next/cache";

import { api } from "../../../../convex/_generated/api";
import Sidebar from "../_components/sidebar";

export default async function PublicRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  await fetchMutation(api.user.createUser, {
    kindeId: user?.id as string,
    given_name: user?.given_name as string,
    family_name: user?.family_name as string,
    email: user?.email as string,
    image: user?.picture as string,
  });
  revalidatePath("/dashboard", "layout");

  return (
    <main className=" flex h-screen w-full">
      <Sidebar />
      <div className="container flex items-center justify-center">
        {children}
      </div>
    </main>
  );
}
