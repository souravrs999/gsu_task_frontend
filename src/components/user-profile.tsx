import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { authOptions } from "@/lib/auth";
const UserProfile = async () => {
  const session = await getServerSession(authOptions);
  if (!session) notFound();

  return (
    <Avatar>
      <AvatarImage src={session?.user.image || undefined} />
      <AvatarFallback>{session.user.name?.[0] || "u"}</AvatarFallback>
    </Avatar>
  );
};
export default UserProfile;
