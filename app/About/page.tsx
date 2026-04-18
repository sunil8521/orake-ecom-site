import Herosection from "@/components/About/Herosection";
import ValuesAndBeliefs from "@/components/About/ValuesAndBeliefs";

export default function AboutPage() {
       return (
	       <main className="min-h-screen flex flex-col items-center justify-start bg-white dark:bg-black">
		       <Herosection />
			   <ValuesAndBeliefs />
	       </main>
       );
}
