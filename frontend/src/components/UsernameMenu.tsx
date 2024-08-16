import { CircleUserRound, Link } from "lucide-react";
import { DropdownMenuContent, DropdownMenuTrigger, DropdownMenu, DropdownMenuItem } from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function UsernameMenu() {
  const { user, logout } = userAuto0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center px-3 font-bold hover:text-orange-500 gap-2"
      >
        <CircleUserRound className="text-oragne-500" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-orange-500">
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
function userAuto0(): { user: any; logout: any; } {
  throw new Error("Function not implemented.");
}

