import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/lib/i18n";

export default function Page() {
  const dictionary = getDictionary("sr");

  return <HomePage locale="sr" dictionary={dictionary} />;
}
