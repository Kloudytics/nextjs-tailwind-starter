import PatientForm from "@/components/forms/PatientForm";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl text-white underline">Vitality Hub Home</h1>
      <Button>Click me</Button>
      <PatientForm />
    </div>
  );
}
