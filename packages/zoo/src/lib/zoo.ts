import { getRandomAnimal } from "@nx-playground/animal";
import { formatMessage } from "@nx-playground/util";

export function zoo(): string {
  const result = getRandomAnimal();
  const message = `${result.name} says ${result.sound}`;
  return formatMessage("ZOO", message);
}
