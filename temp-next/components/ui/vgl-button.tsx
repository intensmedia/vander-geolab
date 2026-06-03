import { Button } from "@/components/ui/button";

type VglButtonProps = {
  children: React.ReactNode;
};

export function VglButton({
  children,
}: VglButtonProps) {
  return (
    <Button size="lg">
      {children}
    </Button>
  );
}