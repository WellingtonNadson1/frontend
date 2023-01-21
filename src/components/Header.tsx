import logoImage from "../assets/logoHabits.svg";
import { DialogNewHabit } from "./Dialog";

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Logo Habits" />
      <DialogNewHabit />
    </div>
  );
}
