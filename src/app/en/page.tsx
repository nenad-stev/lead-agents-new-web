import { HomePage } from "@/components/home/HomePage";
import { getDictionary } from "@/lib/i18n";

export default function EnglishHomePage() {
  const dictionary = getDictionary("en");

  return <HomePage locale="en" dictionary={dictionary} />;
}
