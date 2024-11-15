import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";

export function RulesAlert() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="default" className="rounded-full h-12">
          Check out the rules
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="w-[90%] rounded-lg ">
        <AlertDialogHeader>
          <AlertDialogTitle>Rules for the party</AlertDialogTitle>
          <AlertDialogDescription>
            <ol className="list-inside list-decimal">
              <li>Be respectful of everyone's performances.</li>
              <li>Abide by the decisions of the game coordinator.</li>
              <li>Maintain a friendly and sportsmanlike attitude.</li>
            </ol>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Toaster className="items-center justify-center" />

          <AlertDialogCancel
            onClick={() => {
              toast("Sed, you're missing out on the fun 🥲");
            }}
          >
            Nope 🙂‍↔️
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              toast("Awesome! See you at the party 🎉");
            }}
          >
            I Agree 🫡
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RulesAlert;
