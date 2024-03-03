import LoginLink from "@/components/buttons/login-link";
import RegisterationLink from "@/components/buttons/register-link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Authenticate = ({ className }: Props) => {
  return (
    <div className={cn("flex gap-x-3", className)}>
      <LoginLink label="Login" />
      <RegisterationLink label="Get started" arrow={false} />
    </div>
  );
};

export default Authenticate;
