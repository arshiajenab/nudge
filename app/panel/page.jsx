import Overview from "@/components/ui/pages/Overview";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";

export default async function page() {

    return <Overview />;
}
