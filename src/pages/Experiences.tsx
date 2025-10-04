import { Timeline } from "@/components/ui/timeline";
 import { experiences } from "../constants";
function Experiences() {
  return (
    <section id="experiences" className="w-full h-full">
      <Timeline data={experiences} />
    </section>
  );
}

export default Experiences;
