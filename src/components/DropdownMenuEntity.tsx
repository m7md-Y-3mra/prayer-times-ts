import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FC } from "react";
import { Button } from "./ui/button";

interface DropdownMenuEntityProps {
  entities: string[];
  selectedEntity: string;
}

const DropdownMenuEntity: FC<DropdownMenuEntityProps> = ({
  entities,
  selectedEntity,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex-1 bg-background rounded-lg px-2 py-1">
        {selectedEntity}
        {/* <Button variant="outline">{selectedEntity}</Button> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {entities.map((entity) => (
          <DropdownMenuItem key={entity}>{entity}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuEntity;
